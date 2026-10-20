// Render morph-bot states to ANIMATED GIFs, frame by frame.
// Pipeline (no browser, no ffmpeg):
//   jsdom drives the real animation engine with a controllable clock
//   -> each frame's live SVG is serialized
//   -> resvg rasterizes it to RGBA
//   -> gifenc quantizes + assembles a looping GIF.
import { JSDOM } from "jsdom";
import { Resvg } from "@resvg/resvg-js";
import gifenc from "gifenc";
const { GIFEncoder, quantize, applyPalette } = gifenc;
import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
// This script lives in previews/; the component lives one level up at the repo root.
const REPO_ROOT = join(__dirname, "..");
const OUT = __dirname; // write the .gif files next to this script (previews/)
mkdirSync(OUT, { recursive: true });

// ---- which emotes to render (CLI arg = comma list, else the common emotional set) ----
const COMMON = [
  "happy", "laughing", "excited", "surprised", "angry", "sad",
  "shy", "curious", "confused", "bored", "proud", "suspicious",
  "scared", "playful", "drowsy", "celebrate",
];
const argStates = process.argv[2] ? process.argv[2].split(",").map((s) => s.trim()).filter(Boolean) : null;

// ---- render params ----
const SIZE = 240;          // px, GIF canvas
const FPS = 20;            // frames per second
const DURATION_MS = 2500;  // loop length captured
const STEP_MS = 1000 / FPS;
const FRAMES = Math.round(DURATION_MS / STEP_MS);
const COLOR = "#0b0b0b";
const EYE = "#ffffff";
const BG = "#ffffff";

// ---- controllable clock + rAF queue ----
let NOW = 1000;
let rafQueue = [];
const tick = (ms) => {
  NOW += ms;
  const cbs = rafQueue; rafQueue = [];
  for (const cb of cbs) { try { cb(NOW); } catch (e) {} }
};

// ---- jsdom + stubs ----
const dom = new JSDOM(`<!doctype html><html><body></body></html>`, { pretendToBeVisual: true, url: "http://localhost/" });
const { window } = dom;
const def = (obj, name, value) => Object.defineProperty(obj, name, { value, writable: true, configurable: true });
def(window, "performance", { now: () => NOW });
def(window, "requestAnimationFrame", (cb) => { rafQueue.push(cb); return rafQueue.length; });
def(window, "cancelAnimationFrame", () => {});
def(window, "matchMedia", () => ({ matches: false, addEventListener() {}, removeEventListener() {}, addListener() {}, removeListener() {} }));
def(window, "IntersectionObserver", class { observe() {} unobserve() {} disconnect() {} });
def(window, "ResizeObserver", class { observe() {} unobserve() {} disconnect() {} });
def(window, "queueMicrotask", (cb) => Promise.resolve().then(cb));
window.Element.prototype.getBoundingClientRect = function () {
  return { x: 0, y: 0, top: 0, left: 0, right: 380, bottom: 380, width: 380, height: 380 };
};
for (const k of ["window", "document", "performance", "requestAnimationFrame", "cancelAnimationFrame",
  "matchMedia", "IntersectionObserver", "ResizeObserver", "queueMicrotask", "HTMLElement",
  "customElements", "CustomEvent", "Event", "Node"]) {
  globalThis[k] = k === "document" ? window.document : window[k];
}
globalThis.structuredClone = globalThis.structuredClone || ((v) => JSON.parse(JSON.stringify(v)));

await import(pathToFileURL(join(REPO_ROOT, "component/morph-bot.js")).href);
const { STATE_CATALOG } = await import(pathToFileURL(join(REPO_ROOT, "component/catalog.js")).href);
const byId = Object.fromEntries(STATE_CATALOG.map((e) => [e.id, e]));

const SVG_STYLE =
`<style>.grok-bot-mark__head,.morph-part{fill:${COLOR};}.grok-bot-mark__eye{fill:${EYE};}` +
`.eye-path{transform-origin:0 0;}.morph-ring{fill:none;stroke:${COLOR};}.morph-glyph{fill:${COLOR};}[hidden]{display:none !important;}</style>`;

function frameSVG(svg) {
  const vb = svg.getAttribute("viewBox") || "-15 -15 259 259";
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}" width="${SIZE}" height="${SIZE}">` +
    SVG_STYLE + `<rect x="-15" y="-15" width="259" height="259" fill="${BG}"/>` + svg.innerHTML + `</svg>`;
}

function renderEmote(state) {
  const bot = window.document.createElement("morph-bot");
  bot.setAttribute("shape", "blob");
  bot.setAttribute("size", String(SIZE));
  bot.setAttribute("color", COLOR);
  bot.setAttribute("eye-color", EYE);
  bot.setAttribute("decorative", "");
  bot.setAttribute("state", state);
  window.document.body.appendChild(bot);
  const svg = bot.shadowRoot && bot.shadowRoot.querySelector("svg");
  if (!svg) { window.document.body.removeChild(bot); throw new Error("no svg for " + state); }

  // warm up so the state's intro settles, THEN capture a loop
  for (let i = 0; i < 30; i++) tick(STEP_MS);

  const gif = GIFEncoder();
  for (let f = 0; f < FRAMES; f++) {
    tick(STEP_MS);
    const r = new Resvg(frameSVG(svg), { background: BG, fitTo: { mode: "width", value: SIZE } }).render();
    const rgba = r.pixels; // Uint8Array RGBA
    const w = r.width, h = r.height;
    const palette = quantize(rgba, 256, { format: "rgba4444" });
    const index = applyPalette(rgba, palette, "rgba4444");
    gif.writeFrame(index, w, h, { palette, delay: STEP_MS });
  }
  gif.finish();
  window.document.body.removeChild(bot);
  return gif.bytes();
}

const list = (argStates || COMMON).filter((s) => byId[s]);
const pad = (n) => String(n).padStart(2, "0");
let ok = 0, fail = 0, i = 0;
for (const state of list) {
  i++;
  try {
    const bytes = renderEmote(state);
    const e = byId[state];
    const fname = `${pad(i)}_${state}_${e.zh}.gif`;
    writeFileSync(join(OUT, fname), Buffer.from(bytes));
    console.log("ok", fname, (bytes.length / 1024).toFixed(0) + "KB");
    ok++;
  } catch (err) {
    console.error("FAIL", state, err.message);
    fail++;
  }
}
console.log(`\nDone: ${ok} GIFs, ${fail} failed -> ${OUT}`);

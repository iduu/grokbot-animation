# Morph Bot — Grok Bot Animation Lab

> An unofficial, reference-driven 2D SVG animation study, visual editor, and framework-free Web Component inspired by the public `grok-bot-lazy` / `grok-bot-mark` implementation on [x.ai/bot](https://x.ai/bot).

> 一个基于公开前端实现进行研究的非官方 2D SVG 动画复刻：包含完整状态实验室、所见即所得时间线编辑器，以及可独立使用的原生 Web Component。

![States](https://img.shields.io/badge/states-39-111210)
![Shapes](https://img.shields.io/badge/shapes-18-4f66dd)
![Morphs](https://img.shields.io/badge/morphs-14-4eaf77)
![Framework](https://img.shields.io/badge/framework-none-e9e9e3)

[English](#english) · [中文](#中文)

📺 **[Animated state preview gallery →](previews/README.md)** — looping GIFs of all 39 states, rendered offline from the component. / 全部 39 个状态的循环动图预览，由组件离线渲染。

---

## Changelog / 更新日志

### v1.10.0 · Component v0.6.0 — 2026-08-30

- Added four soft multi-spot gradient presets inspired by airy blurred color fields: Porcelain Bloom, Lilac Breath, Blue Milk, and Peach Haze. / 新增 4 个空气感柔焦多光团渐变：瓷雾花影、丁香呼吸、蓝调牛乳与蜜桃柔霭。
- Added a spatial gradient renderer with four camera-anchored radial layers that remain clipped to every animated shape instead of collapsing into a linear blend. / 新增空间渐变渲染层，使用 4 个固定于镜头方向的径向色团，并在所有动画形状中保持正确裁切，而不是退化成线性混色。
- Soft light presets now provide readable recommended eye colors while preserving explicit `eye-color` overrides. / 浅色柔焦预设会自动提供可读的深色眼睛，同时保留显式 `eye-color` 覆盖能力。
- Fixed stale SVG overlay layers when switching from soft/linear gradients or rainbow glass back to a solid color; all material layers now use explicit SVG display state. / 修复柔焦渐变、线性渐变或彩虹玻璃切回纯色后叠加层残留的问题，所有材质层现在都使用明确的 SVG 显示状态。

### v1.9.0 · Component v0.5.0 — 2026-08-28

- Added a standalone `/aurora-orb/` experiment that preserves the volumetric WebGL sphere and gives it Morph Bot's 23 facial states. / 新增独立 `/aurora-orb/` 实验页，在保留 WebGL 体积液体球的基础上接入 Morph Bot 的 23 个表情状态。
- Added a two-point inertial cursor wake: movement, speed, and press now stir the interior fluid instead of merely moving a highlight. / 新增双点惯性鼠标尾流，移动、速度与按压会真实搅动内部液体，而不只是移动高光。
- Linked gaze, subtle face pose, press surprise, and fast-pass curiosity to the same pointer signal, with a switch to disable automatic reactions. / 使用同一鼠标信号联动视线、细微头部姿态、按压惊讶与快速掠过的好奇反应，并提供关闭自动响应的开关。
- Added WYSIWYG eye presets plus editable color, opacity, scale, all 18 CSS blend modes, local persistence, and one-click reset. / 新增所见即所得的眼睛预设，以及颜色、透明度、尺寸、全部 18 种 CSS 混合模式、本地记忆和一键恢复默认。

### v1.8.0 · Component v0.5.0 — 2026-08-28

- Added text-aware automatic direction: one click inserts expression states, rotations, Morphs, and punctuation-timed pauses; **Another take** creates a new constrained variation and **Undo auto** restores the previous script. / 新增文本感知的自动编排：一键插入表情状态、旋转、Morph 与标点停顿；“换一版”会生成新的受控随机方案，“撤销自动”可恢复原脚本。
- Reduced the original speech-bubble pointer for a quieter, better-proportioned connection to the Bot. / 缩小原有气泡箭头，让它与 Bot 的连接更克制、比例更协调。
- Added deterministic planner tests for exact text preservation, mood-aware choices, action validity, variation, and density limits. / 新增确定性编排测试，覆盖原文无损、语气匹配、动作合法性、随机变化与密度上限。

### v1.7.0 · Component v0.5.0 — 2026-08-28

- Added a WYSIWYG Dialogue Director with inline `@` insertion for all states, rotations, Morphs, and pauses. / 新增所见即所得对话导演，可通过 `@` 插入全部状态、旋转、Morph 与停顿动作。
- Added fully local sampled character speech powered by `animalese-tts`, with contextual Mandarin Pinyin, phonetic or letter-based English, automatic mixed-language routing, and clean/playful voice profiles. / 新增完全本地的采样式角色语音，支持中文上下文拼音、中英混合自动路由、英文音素或逐字母节奏，以及干净与活泼两种音色。
- Synchronized captions, action cues, and progress to the actual `AudioContext` playback head with output-latency compensation. / 字幕、动作与进度现在由真实音频播放头驱动，并补偿设备输出延迟。
- Published `performDialogue()`, dialogue transport controls, `englishMode`, TypeScript declarations, runtime tests, third-party notices, and an updated offline component ZIP. / 完善对话 API、播放控制、类型声明、自动化测试、第三方许可与离线组件包。

Earlier milestones are available in the [commit history](https://github.com/iduu/grokbot-animation/commits/main/). / 更早版本见 [提交历史](https://github.com/iduu/grokbot-animation/commits/main/)。

---

## English

### What is this?

Morph Bot is a browser-based animation workbench for studying and using a small expressive SVG character. It recreates the public 2D state system as editable, testable code and packages the runtime as a native `<morph-bot>` element.

The project deliberately stays in 2D. Shape interpolation, eye placement, gaze, blinking, spring motion, particles, and task morphs are calculated in SVG, without React, Vue, Canvas, WebGL, or a 3D scene.

### Highlights

- 39 visual states, with `idle` first in every state picker.
- 18 body shapes with shape-aware eye placement.
- 25 material presets: 8 solids, 8 OKLab-smoothed linear gradients, 4 soft multi-spot gradients, and 5 layered rainbow-glass variants.
- 25 two-eye expression rings and 1,800 verified shape/expression/open combinations.
- 14 one-shot Morph effects with a complete `RESET → ENTER → HOLD → EXIT → DONE` lifecycle.
- A visual timeline: choose a state, set how long it stays, trigger a Morph, then continue to the next state.
- Add, remove, reorder, loop, play, pause, and stop timeline steps.
- A dialogue director with an inline `@` action menu for all states, rotations, Morphs, and pauses.
- Text-aware automatic direction with constrained random variations, another-take generation, and one-click undo.
- Two Mandarin-aware sampled character voices powered by `animalese-tts`: clean Chinese Animalese and a higher, quicker Playful profile, plus two retro bleep presets.
- Live previews for standalone, button, task-card, and page-loading contexts.
- Synchronized copy-ready HTML and JavaScript.
- A framework-free Web Component with Shadow DOM, TypeScript declarations, visibility pausing, and lifecycle cleanup.
- A readable interactive API site, not only a Markdown reference.
- A standalone WebGL Aurora Orb whose liquid volume and facial response share one inertial pointer signal.

The preset data model is informed by [Open Props](https://open-props.style/) gradient tokens and the MIT-licensed [WebGradients](https://github.com/itmeo/webgradients) angle/ordered-stop format. The palettes and layered glass treatment are original additions. Gradient segments are densely sampled in OKLab before being rendered as SVG, while glass lighting remains camera-anchored during shape rotation.

### Run locally

Requirements: Node.js 20 or newer.

```bash
git clone https://github.com/iduu/grokbot-animation.git
cd grokbot-animation
npm run dev
```

The command prints the local development URL. Open that URL and use these routes:

| Surface | Route |
|---|---|
| Advanced state lab | `/` |
| Component timeline editor | `/component/` |
| Interactive API documentation | `/component/docs/` |
| Aurora Orb expression experiment | `/aurora-orb/` |

### Use the component

Download the ZIP from the component editor, or copy the complete `component/` runtime files into your project while preserving their relative paths.

```html
<script type="module" src="./morph-bot/morph-bot.js"></script>

<morph-bot
  state="loading"
  shape="hex"
  size="48"
  color="#111210"
  eye-color="#ffffff"
  label="Loading"
></morph-bot>
```

Change state or shape without recreating the element:

```js
const bot = document.querySelector("morph-bot");

bot.setState("thinking");
bot.setShape("pebble");
bot.setMaterial("gradient", { preset: "ocean-signal" });
await bot.playMorph("send", { hold: 900, restore: "default" });
```

### Build a state timeline

Each step runs in this order:

```text
enter state → wait hold → play Morph → wait morphHold → exit Morph → next state
```

All durations are milliseconds. `morphHold` controls the Morph's hold phase; entrance and exit motion add a small amount of time around it.

```js
const bot = document.querySelector("morph-bot");

const sequence = [
  { state: "idle", hold: 1000, morph: "gather", morphHold: 700 },
  { state: "thinking", hold: 2400, morph: "send", morphHold: 700 },
  { state: "celebrate", hold: 1600 },
];

bot.playSequence(sequence, { loop: false });

// Cancel the current timeline and exit an active one-shot Morph.
bot.stopSequence();
```

Calling `bot.pause()` pauses the SVG simulation, timeline wait, and active Morph together. `bot.play()` resumes from the remaining time.

### Direct a dialogue

Open `/component/` and switch to **Dialogue director**. Click **Auto direct** to analyze tone and punctuation, then insert a restrained random mix of expression states, rotations, Morphs, and pauses without changing the text. Click **Another take** for a different variation or **Undo auto** to restore the previous script. For precise control, type `@` anywhere in the sentence; every inline chip can be selected again to change its value or transition time.

```js
const dialogue = [
  { type: "state", state: "idle", duration: 300 },
  { type: "text", text: "Hello, I am Morph Bot." },
  { type: "state", state: "thinking", duration: 450 },
  { type: "text", text: "Let me think..." },
  { type: "rotate", angle: -12, duration: 260 },
  { type: "morph", effect: "wave", duration: 650 },
  { type: "text", text: "I found it!" },
];

await bot.performDialogue(dialogue, {
  voice: "playful",
  englishMode: "phonetic", // phonetic | letters
  rate: 1,
});
```

Mixed Chinese and English is routed automatically. Han characters use contextual Pinyin and lexical tones; Latin runs use the upstream `EnglishAnalyzer`, including grouped patterns such as `th`, `sh`, and `ng`; digits receive spoken mappings. `englishMode: "letters"` switches English back to one chirp per letter. Both sampled profiles are pre-rendered into one phrase buffer with normalized loudness and 10–12ms equal-power crossfades. Audio is scheduled 60ms ahead; subtitles and progress read the `AudioContext` playback head with output-latency compensation instead of accumulating UI timer delays. Grouped English audio keeps per-character visual cues. `animalese` is the cleaner profile; `playful` is higher, quicker, and bouncier.

### Main API

| API | Purpose |
|---|---|
| `setState(state, { replay? })` | Switch to one of 39 states. |
| `setShape(shape)` | Switch to one of 18 SVG outlines. |
| `setMaterial(material, options?)` | Apply a solid, gradient, or rainbow-glass material. |
| `playMorph(effect, options?)` | Play one of 14 one-shot Morph effects. |
| `playSequence(steps, { loop? })` | Run a timed multi-state animation sequence. |
| `stopSequence()` | Cancel the current sequence and active one-shot Morph. |
| `performDialogue(script, options?)` | Perform text with states, rotation, Morphs, pauses, and a local character voice. |
| `pauseDialogue()` / `resumeDialogue()` / `stopDialogue()` | Control the active dialogue performance. |
| `pause()` / `play()` / `step()` | Control the shared simulation clock. |
| `configure(project)` | Load an editor-exported v6 preset. |
| `snapshot()` | Read the current expression, eye, Morph, and clock state. |

See [component/README.md](./component/README.md) for the offline component guide, or open the interactive documentation locally for the complete attribute, method, event, state, shape, and Morph references.

### Animation semantics

- A **state** controls expression pools, cadence, blinking, pose, motion, and its default Morph behavior.
- A **shape** changes the head outline and adapted eye placement without changing state meaning.
- A **material** paints the same animated geometry with a solid, ordered-stop gradient, or layered rainbow-glass surface; eyes remain above the material.
- A **one-shot Morph** is an explicitly triggered task animation that fully enters, holds, exits, and stays done until restored.
- `progress` and `spawning` use repeated one-shot cycles with a rest interval; persistent state Morphs remain active while their state is active.

### Project structure

```text
.
├── index.html                  Advanced state laboratory
├── app.js                      Advanced editor and v6 preset runtime
├── grok-bot-engine.js          Compatibility export
├── component/
│   ├── index.html              WYSIWYG component and timeline editor
│   ├── docs/                   Interactive API documentation
│   ├── morph-bot.js            Web Component entry
│   ├── morph-bot.d.ts          TypeScript declarations
│   ├── dialogue-auto-director.js Text-aware constrained-random action planner
│   ├── catalog.js              Shared bilingual state/shape/Morph catalog
│   ├── materials.js            Shared solid, gradient, and glass presets
│   ├── grok-bot-engine.js      Stable engine facade and coordinator
│   ├── original-data.js        States, expressions, and geometry
│   ├── runtime/                Clock, physics, behavior, Morph, particle, and SVG systems
│   └── downloads/              Versioned component bundles
├── aurora-orb/                 WebGL liquid-orb expression experiment
├── scripts/                    Extraction, packaging, and regression checks
└── ANALYSIS.md                 Reference investigation notes
```

See [ARCHITECTURE.md](./ARCHITECTURE.md) for module boundaries, data flow, and behavioral contracts.

### Verification

```bash
npm test
npm run pack:component
```

The regression suite covers:

- all 1,521 ordered state-to-state transitions;
- all 1,800 shape/expression/eye-open combinations;
- direct entry and exit behavior for all 14 Morph effects;
- lossless text-aware dialogue planning, mood matching, variation, and density limits;
- restoration of both eyes after one-shot Morphs;
- component exports, editor controls, docs, and the downloadable ZIP.
- material preset integrity and custom gradient configuration.

Current releases:

- Animation lab: `v1.10.0`
- Standalone component: `v0.6.0`

### Status and disclaimer

This is an independent, unofficial research and prototyping project. It is not affiliated with, endorsed by, or maintained by xAI. `Grok`, xAI, and related marks belong to their respective owners.

The repository contains geometry and behavioral data derived from a publicly delivered frontend snapshot for study and interoperability experiments. No open-source license is granted for third-party reference assets by this README. Before public redistribution or commercial use, review the relevant rights and replace or obtain permission for reference-derived assets where necessary.

Mandarin phonetic analysis vendors `pinyin-pro` 3.29.3 under its MIT license. Sampled dialogue vendors `animalese-tts` 1.1.3 and its English demo voice Sprite under the project's MIT license. Licenses and attribution are retained in the component package. These are unofficial sampled styles, not Nintendo or film character audio.

Contributions that improve accessibility, API design, testing, documentation, or original alternative character geometry are welcome.

---

## 中文

### 这是什么？

Morph Bot 是一个用于研究、编辑和使用可爱 SVG 表情角色的浏览器动画工作台。它把公开页面中的二维状态系统整理为可编辑、可测试的代码，并封装成原生 `<morph-bot>` Web Component。

项目明确只做 2D：身体轮廓插值、眼位适配、视线、眨眼、弹簧运动、粒子和任务 Morph 都在 SVG 中计算，不依赖 React、Vue、Canvas、WebGL 或 3D 场景。

### 主要能力

- 39 个完整状态，所有状态选择器都以 `idle` 开始。
- 18 种身体轮廓，并针对不同形状自动适配眼睛位置。
- 25 个材质预设：8 个纯色、8 个经过 OKLab 平滑的线性渐变、4 个柔焦多光团渐变、5 个分层彩虹玻璃。
- 25 组双眼表情环，验证了 1,800 种形状、表情和开合度组合。
- 14 种单次 Morph，完整执行 `RESET → ENTER → HOLD → EXIT → DONE`。
- 可视化时间线：选择状态、设置停留时间、指定 Morph，然后进入下一状态。
- 支持添加、删除、排序、循环、播放、暂停和停止时间线步骤。
- 对话导演支持在文字中输入 `@`，插入全部状态、旋转、Morph 和停顿。
- 文本感知的自动编排会按语气和标点生成受控随机动作，并支持“换一版”和一键撤销。
- 内置两种支持中文语境拼音的角色声线：干净的动森式音节与原创高音卡通拟声，并保留两种复古文字音。
- 可在单独展示、按钮、任务卡和页面加载场景中实时预览。
- HTML 与 JavaScript 使用代码随编辑结果同步生成。
- 原生 Web Component：无框架依赖，提供 Shadow DOM、TypeScript 类型、离屏暂停和生命周期清理。
- 完整 API 文档是可阅读、可操作的网页，而不只是 Markdown。
- 独立 Aurora Orb 实验让 WebGL 液体体积与表情响应共享同一套惯性鼠标信号。

预设数据结构参考了 [Open Props](https://open-props.style/) 的渐变 token，以及 MIT 许可的 [WebGradients](https://github.com/itmeo/webgradients) 中 angle + ordered stops 的表达。具体配色与分层玻璃效果由本项目重新设计；渐变在 OKLab 中密集采样后输出 SVG，玻璃光照在形状旋转时保持镜头方向固定。

### 本地运行

需要 Node.js 20 或更高版本。

```bash
git clone https://github.com/iduu/grokbot-animation.git
cd grokbot-animation
npm run dev
```

命令行会输出本地开发地址。打开该地址后，通过以下路由进入不同页面：

| 页面 | 路由 |
|---|---|
| 高级状态实验室 | `/` |
| 独立组件与时间线编辑器 | `/component/` |
| 完整交互式 API 文档 | `/component/docs/` |
| Aurora Orb 表情实验 | `/aurora-orb/` |

### 使用独立组件

可以从组件编辑器下载 ZIP，也可以把 `component/` 中的运行时文件完整复制到项目中，并保持相对路径不变。

```html
<script type="module" src="./morph-bot/morph-bot.js"></script>

<morph-bot
  state="loading"
  shape="hex"
  size="48"
  color="#111210"
  eye-color="#ffffff"
  label="正在加载"
></morph-bot>
```

无需重新创建元素，直接切换状态、形状或播放单次 Morph：

```js
const bot = document.querySelector("morph-bot");

bot.setState("thinking");
bot.setShape("pebble");
bot.setMaterial("gradient", { preset: "ocean-signal" });
await bot.playMorph("send", { hold: 900, restore: "default" });
```

### 编排状态时间线

每个步骤严格按以下顺序运行：

```text
进入状态 → 停留 hold → 播放 Morph → 保持 morphHold → 退出 Morph → 下一状态
```

所有时间单位都是毫秒。`morphHold` 只表示 Morph 的保持阶段，进入和退出动画会在它前后增加少量时间。

```js
const bot = document.querySelector("morph-bot");

const sequence = [
  { state: "idle", hold: 1000, morph: "gather", morphHold: 700 },
  { state: "thinking", hold: 2400, morph: "send", morphHold: 700 },
  { state: "celebrate", hold: 1600 },
];

bot.playSequence(sequence, { loop: false });

// 立即取消时间线，并退出正在播放的单次 Morph
bot.stopSequence();
```

调用 `bot.pause()` 会同时暂停 SVG 仿真、状态停留计时和 Morph；调用 `bot.play()` 会从剩余时间继续。

### 编排角色对话

打开 `/component/` 并切换到“对话导演”。点击“自动编排”，编辑器会分析语气与标点，在不改动原文的前提下插入克制的随机表情、旋转、Morph 和停顿；点击“换一版”可生成不同方案，“撤销自动”会恢复编排前脚本。需要精确控制时，仍可在句子任意位置输入 `@`，从完整菜单中选择动作；插入后的标签也可再次点击修改。

```js
const dialogue = [
  { type: "state", state: "idle", duration: 300 },
  { type: "text", text: "你好，我是 Morph Bot。" },
  { type: "state", state: "thinking", duration: 450 },
  { type: "text", text: "让我想一下……" },
  { type: "rotate", angle: -12, duration: 260 },
  { type: "morph", effect: "wave", duration: 650 },
  { type: "text", text: "有了！" },
];

await bot.performDialogue(dialogue, {
  voice: "playful",
  englishMode: "phonetic", // phonetic | letters
  rate: 1,
});
```

中英混排会自动分流：汉字使用整句拼音和词汇声调，连续英文交给官方 `EnglishAnalyzer`，自动组合 `th`、`sh`、`ng` 等模式，数字也有独立读法。设置 `englishMode: "letters"` 可切回英文逐字母拟声。采样声线会先把整句渲染成一个音频缓冲区，统一响度并在相邻音节间做 10–12ms 等功率交叉淡化。音频提前约 60ms 调度；字幕和进度直接读取带设备输出延迟补偿的 `AudioContext` 播放头，不再累计 UI 计时误差。英文组合音素仍会逐字显示。

### 主要 API

| API | 作用 |
|---|---|
| `setState(state, { replay? })` | 切换到 39 个状态之一。 |
| `setShape(shape)` | 切换到 18 种 SVG 轮廓之一。 |
| `setMaterial(material, options?)` | 应用纯色、渐变或彩虹玻璃材质。 |
| `playMorph(effect, options?)` | 播放 14 种单次 Morph 之一。 |
| `playSequence(steps, { loop? })` | 运行带时间控制的多状态动画序列。 |
| `stopSequence()` | 取消当前序列和正在播放的单次 Morph。 |
| `performDialogue(script, options?)` | 让文字、表情、旋转、Morph、停顿和本地角色音同步表演。 |
| `pauseDialogue()` / `resumeDialogue()` / `stopDialogue()` | 控制当前对话表演。 |
| `pause()` / `play()` / `step()` | 控制统一的仿真时钟。 |
| `configure(project)` | 加载编辑器导出的 v6 preset。 |
| `snapshot()` | 读取当前表情、眼睛、Morph 和时钟状态。 |

离线组件说明见 [component/README.md](./component/README.md)。运行项目后，可在完整 API 网页中查看全部属性、方法、事件、状态、形状和 Morph，并直接操作测试。

### 动画语义

- **状态 state**：控制表情池、节奏、眨眼、姿态、运动和默认 Morph 行为。
- **形状 shape**：只改变身体轮廓和适配后的眼睛位置，不改变状态语义。
- **材质 material**：在同一套动画几何上应用纯色、有序色标渐变或分层彩虹玻璃；眼睛始终位于材质之上。
- **单次 Morph**：由业务主动触发，完整进入、保持、退出，结束后停留在完成态，直到恢复。
- `progress` 与 `spawning` 会重复执行单次展示并在中间休止；持续型状态 Morph 会在对应状态存在期间保持。

### 项目结构

```text
.
├── index.html                  高级状态实验室
├── app.js                      高级编辑器与 v6 preset 运行时
├── grok-bot-engine.js          兼容导出
├── component/
│   ├── index.html              所见即所得组件与时间线编辑器
│   ├── docs/                   交互式 API 文档
│   ├── morph-bot.js            Web Component 入口
│   ├── morph-bot.d.ts          TypeScript 类型声明
│   ├── dialogue-auto-director.js 文本感知的受控随机动作编排器
│   ├── catalog.js              状态、形状与 Morph 双语目录
│   ├── materials.js            纯色、渐变与玻璃共享预设
│   ├── grok-bot-engine.js      稳定引擎门面与系统编排
│   ├── original-data.js        状态、表情与几何数据
│   ├── runtime/                时钟、物理、行为、Morph、粒子与 SVG 系统
│   └── downloads/              带版本号的组件下载包
├── aurora-orb/                 WebGL 液体球表情实验
├── scripts/                    数据提取、打包与回归脚本
└── ANALYSIS.md                 参考实现分析记录
```

模块边界、数据流与行为契约详见 [ARCHITECTURE.md](./ARCHITECTURE.md)。

### 验证

```bash
npm test
npm run pack:component
```

回归测试覆盖：

- 39 × 39，共 1,521 个有序状态切换；
- 18 种形状 × 25 种表情 × 4 档眼睛开合度，共 1,800 种组合；
- 14 种 Morph 的进入、退出与直接切换；
- 自动对话编排的原文无损、语气匹配、随机变化与密度上限；
- 单次 Morph 结束后的双眼恢复；
- 组件导出、编辑器操作、网页文档与 ZIP 下载包。
- 材质预设完整性与自定义渐变参数。

当前版本：

- 动画实验室：`v1.10.0`
- 独立组件：`v0.6.0`

### 项目状态与声明

这是一个独立、非官方的研究与原型项目，与 xAI 不存在隶属、背书或维护关系。`Grok`、xAI 及相关标识归其权利人所有。

仓库包含从公开交付的前端快照中整理的几何和行为数据，用于学习与互操作实验。本 README 不为第三方参考素材授予开源许可。在公开再分发或商业使用前，请自行评估相关权利，并替换参考素材或取得必要授权。

中文拼音分析内置 MIT 许可的 `pinyin-pro` 3.29.3；采样拟声内置 MIT 许可的 `animalese-tts` 1.1.3 及其英文演示 Sprite。两者的许可证与署名都随组件包分发。这些是非官方的采样声线，不是任天堂或影视角色音频。

欢迎贡献无障碍、API 设计、测试、文档，以及完全原创的替代角色几何。

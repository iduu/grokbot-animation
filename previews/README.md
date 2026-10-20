# State preview gallery / 状态预览图廊

Looping animated previews of every `<morph-bot>` state — 16 emotional
reactions and 23 functional/agent states (39 total). Each GIF was rendered
**offline from this project's own component**, so the previews stay in sync
with the real runtime rather than being hand-drawn.

> 这里是全部 `<morph-bot>` 状态的循环动图预览——16 个情绪反应 + 23 个功能 / Agent
> 状态，共 39 个。每张 GIF 都是用项目**自带的组件离线渲染**出来的，和真实运行时保持一致，
> 并非手绘。

## Reactions / 情绪反应

| | | | |
|:-:|:-:|:-:|:-:|
| ![happy](01_happy_开心.gif)<br>Happy 开心 | ![laughing](02_laughing_大笑.gif)<br>Laughing 大笑 | ![excited](03_excited_兴奋.gif)<br>Excited 兴奋 | ![surprised](04_surprised_惊讶.gif)<br>Surprised 惊讶 |
| ![angry](05_angry_生气.gif)<br>Angry 生气 | ![sad](06_sad_难过.gif)<br>Sad 难过 | ![shy](07_shy_害羞.gif)<br>Shy 害羞 | ![curious](08_curious_好奇.gif)<br>Curious 好奇 |
| ![confused](09_confused_困惑.gif)<br>Confused 困惑 | ![bored](10_bored_无聊.gif)<br>Bored 无聊 | ![proud](11_proud_得意.gif)<br>Proud 得意 | ![suspicious](12_suspicious_怀疑.gif)<br>Suspicious 怀疑 |
| ![scared](13_scared_害怕.gif)<br>Scared 害怕 | ![playful](14_playful_调皮.gif)<br>Playful 调皮 | ![drowsy](15_drowsy_困倦.gif)<br>Drowsy 困倦 | ![celebrate](16_celebrate_庆祝.gif)<br>Celebrate 庆祝 |

## Lifecycle / 基础状态

| | | | |
|:-:|:-:|:-:|:-:|
| ![idle](17_idle_待机.gif)<br>Idle 待机 | ![sleeping](18_sleeping_睡眠.gif)<br>Sleeping 睡眠 | ![waking](19_waking_醒来.gif)<br>Waking 醒来 | ![listening](20_listening_倾听.gif)<br>Listening 倾听 |
| ![thinking](21_thinking_思考.gif)<br>Thinking 思考 | ![searching](22_searching_搜索.gif)<br>Searching 搜索 | ![working](23_working_工作.gif)<br>Working 工作 | |

## Agent morphs / Agent 形变

| | | | |
|:-:|:-:|:-:|:-:|
| ![orbit](24_orbit_轨道.gif)<br>Orbit 轨道 | ![radar](25_radar_雷达.gif)<br>Radar 雷达 | ![progress](26_progress_进度.gif)<br>Progress 进度 | |

## Product lifecycle / 任务状态

| | | | |
|:-:|:-:|:-:|:-:|
| ![spawning](27_spawning_生成.gif)<br>Spawning 生成 | ![humming](28_humming_运转.gif)<br>Humming 运转 | ![loading](29_loading_加载.gif)<br>Loading 加载 | ![dictating](30_dictating_听写.gif)<br>Dictating 听写 |
| ![writing](31_writing_书写.gif)<br>Writing 书写 | ![sending](32_sending_发送.gif)<br>Sending 发送 | ![receiving](33_receiving_接收.gif)<br>Receiving 接收 | ![uploading](34_uploading_上传.gif)<br>Uploading 上传 |
| ![notifying](35_notifying_通知.gif)<br>Notifying 通知 | ![alerting](36_alerting_警报.gif)<br>Alerting 警报 | ![dragging](37_dragging_拖拽.gif)<br>Dragging 拖拽 | ![bouncing](38_bouncing_弹跳.gif)<br>Bouncing 弹跳 |
| ![powering-down](39_powering-down_关机.gif)<br>Powering down 关机 | | | |

## How these were generated / 如何生成

`build-gifs.mjs` drives the real animation engine headlessly and encodes each
state to a looping GIF — **no browser and no ffmpeg**:

1. **jsdom** mounts a `<morph-bot>` element and runs the actual
   `grok-bot-engine` with a manually-stepped animation clock (stubbed
   `requestAnimationFrame` / `performance.now`), so frames are deterministic.
2. Each frame's live SVG is serialized and rasterized to RGBA with
   **`@resvg/resvg-js`** (a strict Rust SVG renderer, not a browser).
3. **`gifenc`** quantizes the frames and assembles a looping GIF
   (240 px, 20 fps, ~2.5 s per loop, white background).

> `build-gifs.mjs` 以无头方式驱动真实动画引擎，把每个状态编码成循环 GIF——**不依赖浏览器，
> 也不依赖 ffmpeg**：jsdom 挂载 `<morph-bot>` 并用手动步进的时钟跑真实 `grok-bot-engine`
> （桩掉 `requestAnimationFrame` / `performance.now`，保证逐帧确定性）→ 每帧的实时 SVG 用
> `@resvg/resvg-js` 光栅化 → `gifenc` 量化合成循环 GIF（240px、20fps、单循环约 2.5 秒、白底）。

### Reproduce / 复现

```bash
# from the repo root
npm install --no-save jsdom@24 @resvg/resvg-js gifenc
node previews/build-gifs.mjs                 # the 16 reactions (default set)
node previews/build-gifs.mjs idle,thinking   # or any comma-separated state ids
```

State ids are the ones defined in [`component/catalog.js`](../component/catalog.js).
The three render dependencies are **not** added to the project's
`package.json` — install them transiently with `--no-save` only when
regenerating the gallery.

> 状态 id 见 [`component/catalog.js`](../component/catalog.js)。三个渲染依赖**不会**写进项目的
> `package.json`——仅在重新生成图廊时用 `--no-save` 临时安装。

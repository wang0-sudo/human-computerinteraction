import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { designModels as data } from '../src/data/design-models.js';
import { renderFlowSvg, renderPortraitSvg, renderSceneSvg } from '../src/data/model-visuals.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const escape = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
const list = (items) => `<ul>${items.map((item) => `<li>${escape(item)}</li>`).join('')}</ul>`;
const page = (title, content, className = '') => `<section class="page ${className}"><div class="running">AirAware 空气慧行 <span>人机交互 · 实验六、七合并报告</span></div><h2>${title}</h2>${content}</section>`;
const evidence = (value) => `<p class="evidence">${escape(value)}</p>`;

const cover = `<section class="page cover"><p class="eyebrow">人机交互实验 · 六 / 七</p><h1>空气慧行<br>关系模型与用户体验</h1><p class="subtitle">Flow Model · HMW · Persona · Storyboard</p><div class="cover-rule"></div><dl><dt>项目</dt><dd>AirAware · 高温与空气污染下的健康出行</dd><dt>成员</dt><dd>王誉达</dd><dt>实验六</dt><dd>人物关系流程模型、8 个 HMW 问题</dd><dt>实验七</dt><dd>2 个主要用户画像、2 个六格图文故事板</dd><dt>项目网站</dt><dd>https://wang0-sudo.github.io/human-computerinteraction/</dd></dl><h3>研究与任务范围</h3><p>${escape(data.basis)}</p><p>前期材料包括四位学生的访谈回答及 12 份问卷。U01 为步行与地铁通勤学生，U02 有户外配送兼职，U03 兼有校外实习，U04 有特殊健康与休息支持需求。本报告采用两类主要学生情境进行设计探索。</p><p class="cover-note">材料中的经历用于理解问题；综合画像中的姓名、年龄及概括语为设计设定。故事中的改进为预期价值，不作为已经完成的效果验证。</p></section>`;
const flow = page('实验六 · 1. 关系流程模型', `<p>${escape(data.flow.intro)}</p><figure class="flow">${renderFlowSvg()}<figcaption>图 1 · 现状模型。箭头表示方向，双箭头表示协商或交换；B 表示断点。</figcaption></figure>`, 'flow-page') + page('实验六 · 1. 关系、证据与断点', `<table class="relations"><thead><tr><th>关系</th><th>交换与依据</th><th>断点 / 启示</th></tr></thead><tbody>${data.flow.relationships.map((row) => `<tr><th>${row.id}<br>${escape(row.people)}</th><td>${escape(row.exchange)}<small>${escape(row.evidence)}</small></td><td>${escape(row.breakdown)}<small>${escape(row.implication)}</small></td></tr>`).join('')}</tbody></table><p class="small">${escape(data.flow.tools)}</p><p class="proposal">${escape(data.flow.proposed)}</p>`, 'flow-page');
const hmw = [0, 4].map((offset) => page(`实验六 · 2. HMW 设计问题${offset ? '（续）' : ''}`, `<p>HMW（How Might We，我们如何……）把研究发现转化为开放的设计探索问题。以下 8 个问题超过作业要求的至少 6 个，覆盖不同约束和利益相关者。</p><div class="hmw-grid">${data.hmw.slice(offset, offset + 4).map((item) => `<article class="hmw"><span class="number">${item.number}</span><div><p class="focus">${escape(item.focus)}</p><h3>${escape(item.text)}</h3><p>${escape(item.reason)}</p>${evidence(`依据：${item.evidence}`)}</div></article>`).join('')}</div>`)).join('');
const personas = data.personas.map((persona, index) => page(`实验七 · 3.${index + 1} 用户画像：${persona.name}`, `<div class="persona-header"><div class="portrait">${renderPortraitSvg(persona.id)}</div><div><p class="focus">${escape(persona.tag)}</p><h3>${escape(persona.name)}</h3><p>${escape(persona.identity)}</p></div></div><blockquote>${escape(persona.quote)}<small>需求概括，非逐字引语</small></blockquote><p>${escape(persona.bio)}</p><div class="persona-grid"><div><h3>目标</h3>${list(persona.goals)}</div><div><h3>困难</h3>${list(persona.painPoints)}</div><div><h3>现有行为</h3>${list(persona.behaviors)}</div><div><h3>设计需求</h3>${list(persona.needs)}</div></div><h3>可访问性与隐私</h3><p>${escape(persona.accessibility)}</p><h3>后续验证目标</h3><p>${escape(persona.success)}</p>${evidence(`设计设定：${persona.demographics}`)}${evidence(`依据：${persona.evidence}`)}`, 'persona-page')).join('');
const stories = data.storyboards.flatMap((story, index) => [0, 3].map((offset) => page(`实验七 · 4.${index + 1} ${story.title}${offset ? '（续）' : ''}`, `<p>${escape(story.subtitle)}</p>${evidence(`依据：${story.evidence}`)}<p class="small">按 01→02→03→04→05→06 阅读。场景为拟议服务情境，结果待原型测试。</p><ol class="story-grid">${story.frames.slice(offset, offset + 3).map((frame) => `<li class="frame"><div class="scene">${renderSceneSvg(frame.sceneId)}</div><div class="frame-copy"><h3>${frame.number} · ${escape(frame.title)}</h3><p><b>现场：</b>${escape(frame.scene)}</p><p><b>行动：</b>${escape(frame.action)}</p><p class="emotion"><b>情绪：</b>${escape(frame.emotion)}</p><p class="outcome"><b>变化：</b>${escape(frame.outcome)}</p></div></li>`).join('')}</ol>`, 'story-page'))).join('');
const conclusion = page('5. 研究、设计与验证的对应', `<p>把前期材料、流程模型、开放问题和情境连接起来，说明设计如何由研究推导，并标明下一步还需验证什么。</p><table class="trace"><thead><tr><th>发现</th><th>访谈依据</th><th>关系 / 断点</th><th>HMW</th><th>人物 / 故事</th><th>验证重点</th></tr></thead><tbody>${data.traceability.map((row) => `<tr>${row.map((cell) => `<td>${escape(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table>`) + page('6. 完成情况与后续验证', `<h3>完成情况</h3><ul><li>实验六第 1 项：提供人物关系模型，标出方向、交换内容及 B1–B4 断点。</li><li>实验六第 2 项：提出 8 个开放 HMW 问题，并对应访谈题号。</li><li>实验七第 3 项：建立 P1、P2 两个主要学生利益相关者画像，含目标、行为、困难、可访问性与验证目标。</li><li>实验七第 4 项：绘制两组各六格故事板，呈现场景、行动、情绪和预期变化。</li></ul><h3>范围与可行性</h3><p>两个画像优先覆盖固定通勤和休息支持情境。U02 的户外兼职需求保留于模型及 HMW 05，后续扩展。小规模学生材料及 12 份问卷不能代表全体出行者，也不支持医学效果结论。</p><p>原型先用公开区域环境数据、已核实场所和明确标注的时间估计做比较；不承诺精确到每条街的暴露测量。场所状态未知或公交预测不可靠时显示不确定性，并保留人工确认与替代选择。</p><h3>下一步测试任务</h3><ol><li>给定到达时间与预算，比较两条方案并解释取舍。</li><li>面对晚点与过期地点信息，找出可行的下一步。</li><li>放大文字或使用朗读，完成必要出行查询。</li><li>不授权定位或不分享时继续查询，并结束一次分享、删除记录。</li></ol><p class="small">参考材料：实验四 P3_AirAware_Collected_Data_Report.html；实验五 airaware-p5-data-analysis.pdf。U 为访谈编号，Q 为主问题序号。本报告由王誉达负责整理模型、问题、画像、情境与呈现。</p>`);

const css = `
@page { size: A4; margin: 18mm 16mm 20mm; }
* { box-sizing: border-box; }
body { margin: 0; color: #263b33; font-family: "Times New Roman", "SimSun", serif; font-size: 12pt; line-height: 1.5; letter-spacing: 0; }
h1, h2, h3, p, figure { margin: 0; }
h1, h2, h3, p, li, dt, dd, table, th, td, small, blockquote, figcaption, .running, .number, .focus, .subtitle, .evidence, .small { font-size: 12pt; line-height: 1.5; }
p { margin-bottom: 3mm; }
h1 { color: #174b39; font-weight: bold; }
h2 { border-bottom: 1.5pt solid #23674f; padding-bottom: 3mm; margin-bottom: 5mm; color: #174b39; break-after: avoid; }
h3 { margin: 4mm 0 2mm; color: #174b39; break-after: avoid; }
ul, ol { padding-left: 5mm; margin: 1mm 0 4mm; }
li { margin: 1mm 0; }
.page { break-after: page; }
.page:last-child { break-after: auto; }
.running { color: #63776a; border-bottom: .5pt solid #ccdcd1; padding-bottom: 2mm; margin-bottom: 6mm; display: flex; justify-content: space-between; gap: 6mm; }
.small, .evidence, small { color: #576d5f; }
.evidence { margin-top: 2mm; }
.cover { padding-top: 20mm; }
.eyebrow, .focus { color: #a74648; font-weight: bold; }
.cover h1 { margin-top: 10mm; }
.subtitle { color: #526d62; margin-top: 7mm; }
.cover-rule { height: 2pt; background: #23674f; margin: 10mm 0 7mm; }
.cover dl { display: grid; grid-template-columns: 25mm 1fr; gap: 2.5mm 4mm; margin-bottom: 8mm; }
.cover dt { color: #63776a; }
.cover dd { margin: 0; overflow-wrap: anywhere; }
.cover-note, .proposal { border-left: 2pt solid #a74648; padding-left: 4mm; margin-top: 5mm; }
.flow { break-inside: avoid; }
.flow svg { display: block; width: 100%; height: auto; max-height: 88mm; }
.flow figcaption { color: #63776a; margin: 2mm 0 4mm; }
svg, svg text { font-family: "Times New Roman", "SimSun", serif !important; }
.relations th:first-child { width: 23%; }
.relations td { width: 38.5%; }
table { width: 100%; border-collapse: collapse; margin: 3mm 0 4mm; }
thead { display: table-header-group; }
tr { break-inside: avoid; }
th, td { padding: 2mm; border: .5pt solid #ccdcd1; text-align: left; vertical-align: top; overflow-wrap: anywhere; }
th { background: #eef4ef; }
small { display: block; margin-top: 1mm; }
.hmw-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3mm 6mm; margin-top: 5mm; }
.hmw { display: grid; grid-template-columns: 9mm 1fr; gap: 2mm; border-top: 1pt solid #c4d5ca; padding-top: 3mm; break-inside: avoid; }
.hmw h3 { margin: 1mm 0 2mm; }
.number { font-weight: bold; color: #23674f; }
.focus { margin: 0; }
.persona-header { display: flex; align-items: center; gap: 7mm; margin: 6mm 0; }
.portrait { width: 26mm; height: 26mm; flex-shrink: 0; }
.portrait svg { width: 100%; height: 100%; }
.persona-header h3 { margin: 1mm 0; }
.persona-header p { margin: 0; }
blockquote { margin: 5mm 0; padding: 4mm; border-left: 3pt solid #347c88; background: #eef6f3; }
.persona-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2mm 8mm; margin: 3mm 0 5mm; }
.persona-grid > div { break-inside: avoid; }
.persona-grid h3 { border-bottom: .5pt solid #ccdcd1; padding-bottom: 2mm; }
.story-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 3mm; list-style: none; padding: 0; margin: 4mm 0; }
.frame { margin: 0; border: .5pt solid #c4d5ca; break-inside: avoid; }
.scene { aspect-ratio: 36 / 23; border-bottom: .5pt solid #c4d5ca; }
.scene svg { display: block; width: 100%; height: 100%; }
.frame-copy { padding: 2.5mm; }
.frame h3 { margin: 0 0 2mm; }
.frame p { margin: 2mm 0; }
.emotion { color: #347c88; }
.outcome { border-top: .5pt solid #d3e2d9; padding-top: 2mm; color: #23674f; }
.trace th:nth-child(2) { width: 24%; }
.trace th:nth-child(4) { width: 10%; white-space: nowrap; }
.trace th:last-child { width: 21%; }
@media screen { body { background: #e9eeeb; } .page { background: #fff; max-width: 210mm; padding: 18mm 16mm; box-shadow: 0 2px 10px #ccd5cc; margin: 8mm auto; } }
`;
const html = `<!doctype html><html lang="zh-CN"><head><meta charset="UTF-8"><title>空气慧行：实验六、七合并报告</title><style>${css}</style></head><body>${cover}${flow}${hmw}${personas}${stories}${conclusion}</body></html>`;
const output = path.join(root, 'report', 'airaware-p6-p7-flow-personas-storyboards.html');
fs.writeFileSync(output, html, 'utf8');
fs.writeFileSync(path.join(root, 'public', 'report', 'airaware-p6-p7-flow-model.svg'), renderFlowSvg(), 'utf8');
console.log(`Report source generated: ${output}`);

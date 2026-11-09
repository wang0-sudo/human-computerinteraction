const palette = { ink: '#253b36', green: '#23674f', cyan: '#347c88', red: '#a74648', pale: '#edf4f1', skin: '#e9bd9a' };
const safe = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));

export function renderFlowSvg() {
  const node = (x, y, title, line, primary = false) => `<g><rect x="${x}" y="${y}" width="250" height="100" rx="6" fill="${primary ? '#23674f' : '#f2f6f4'}" stroke="${primary ? '#23674f' : '#bdcec5'}"/><circle cx="${x + 28}" cy="${y + 30}" r="9" fill="${primary ? '#d8eee1' : '#347c88'}"/><path d="M${x + 12} ${y + 61}q0-26 32 0" fill="none" stroke="${primary ? '#d8eee1' : '#347c88'}" stroke-width="6"/><text x="${x + 50}" y="${y + 36}" font-size="19" font-weight="700" fill="${primary ? '#fff' : '#253b36'}">${title}</text><text x="${x + 18}" y="${y + 80}" font-size="13" fill="${primary ? '#e2f2e9' : '#52675e'}">${line}</text></g>`;
  const label = (x, y, value) => `<g><rect x="${x - 64}" y="${y - 18}" width="128" height="29" fill="#fff"/><text x="${x}" y="${y + 2}" text-anchor="middle" font-size="16" fill="#253b36">${value}</text></g>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1100 620" role="img" aria-labelledby="flow-model-title flow-model-desc" style="font-family:'Microsoft YaHei',sans-serif"><title id="flow-model-title">学生必要出行的现状关系流程模型</title><desc id="flow-model-desc">教师或实习负责人向学生传递日程，学生与家人协商陪同，与配送同伴交换经验，与商户确认休息条件，医护提供注意事项。B1至B4表示固定日程、协作成本、设施不确定和信息分散。</desc><defs><marker id="flow-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10Z" fill="#526d62"/></marker></defs><rect width="1100" height="620" fill="#fff"/>
  <g fill="none" stroke="#526d62" stroke-width="2.5" marker-end="url(#flow-arrow)"><path d="M280 135L465 255"/><path d="M820 135L635 255" marker-start="url(#flow-arrow)"/><path d="M300 305H421" marker-start="url(#flow-arrow)"/><path d="M280 460L465 355" marker-start="url(#flow-arrow)"/><path d="M820 460L635 355"/></g>
  ${node(50, 35, '教师 / 实习负责人', '课程、考试、会议等到达约束')}${node(800, 35, '家人 / 陪同者', '解释信息、陪同、接送')}${node(50, 255, '配送同伴', '路况、休息点和工作经验')}${node(425, 255, '学生出行者', 'U01–U04；自主权衡与决定', true)}${node(50, 460, '商户 / 场所人员', '允许停留、补水或短暂休息')}${node(800, 460, '医护人员', '注意事项与必要就医安排')}
  ${label(365, 190, 'F1 日程安排')}${label(740, 190, 'F2 陪同协商')}${label(363, 288, 'F3 经验交流')}${label(365, 412, 'F4 休息支持')}${label(740, 412, 'F5 医护建议')}
  <g fill="#a74648" font-size="14" font-weight="700"><text x="78" y="161">B1 固定时间</text><text x="825" y="161">B2 协调成本</text><text x="78" y="588">B3 地点可能不可用</text></g><text x="550" y="590" text-anchor="middle" font-size="14" fill="#52675e">B4 辅助工具分散：天气 / 空气质量 / 地图 / 公交</text></svg>`;
}

function person(x, y, color, seated = false, small = false) {
  return `<g transform="translate(${x} ${y}) scale(${small ? 0.8 : 1})" stroke="#253b36" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="0" cy="-58" r="14" fill="${palette.skin}"/><path d="M-14-60q0-22 23-13l6 17-8-6-22 4" fill="#34443e" stroke="none"/><path d="M-12-39q12-8 24 0l7 46h-37Z" fill="${color}"/><path d="M-11-31l-17 27 16 7M12-30l19 18 12-9" fill="none"/><path d="${seated ? 'M-9 7h31l9 31h14M7 7h29l5 32h13' : 'M-9 7l-10 35h-12M7 7l14 35h13'}" fill="none" stroke-width="8"/><rect x="-19" y="-32" width="8" height="33" rx="3" fill="#d1b36b" stroke="none"/></g>`;
}
const phone = (x, y, content, width = 114, height = 166) => `<g transform="translate(${x} ${y})"><rect width="${width}" height="${height}" rx="11" fill="#fff" stroke="#253b36" stroke-width="3"/><rect x="${width / 2 - 16}" y="8" width="32" height="4" rx="2" fill="#253b36"/>${content}<circle cx="${width / 2}" cy="${height - 10}" r="3" fill="#a8bdb3"/></g>`;
const text = (x, y, value, size = 13, fill = '#253b36') => `<text x="${x}" y="${y}" font-size="${size}" fill="${fill}">${safe(value)}</text>`;
const bench = (x, y) => `<g stroke="#567467" stroke-width="5" fill="none"><path d="M${x} ${y}h75M${x + 5} ${y - 17}h65M${x + 10} ${y}v23M${x + 63} ${y}v23"/></g>`;
const sun = '<g stroke="#bb6947" stroke-width="2"><circle cx="318" cy="31" r="13" fill="#f4cf79"/><path d="M318 8V1M318 54v7M295 31h-7M341 31h7M301 14l-5-5M335 48l5 5"/></g>';
const tree = (x) => `<g><path d="M${x} 104v74" stroke="#7c8c6d" stroke-width="8"/><path d="M${x - 35} 109q-8-50 35-60 45 10 37 60Z" fill="#bcd7bc"/></g>`;
const arrival = (label, hospital = false) => `<rect x="190" y="53" width="140" height="132" fill="#dce9e4" stroke="#6d8a7e" stroke-width="2"/><rect x="233" y="123" width="50" height="62" fill="#fff" stroke="#6d8a7e"/>${text(208, 88, label, 20)}${hospital ? '<path d="M310 110h-24m12-12v24" stroke="#a74648" stroke-width="5"/>' : '<path d="M201 103h112" stroke="#6d8a7e"/>'}`;

export function renderSceneSvg(id) {
  let content = '';
  const type = id.split('-')[0];
  const color = type === 'lin' ? palette.green : palette.cyan;
  switch (id) {
    case 'lin-1':
      content = `<rect x="21" y="30" width="111" height="100" fill="#fff" stroke="#9ab4a6"/><path d="M21 53h111M77 30v100" stroke="#9ab4a6"/>${text(38, 78, '考试日', 18)}${text(38, 108, '准时到达', 14)}${sun}<rect x="170" y="133" width="150" height="9" fill="#829d8e"/><path d="M185 142v43M309 142v43" stroke="#829d8e" stroke-width="5"/>${person(233, 145, color, true)}${phone(267, 86, text(8, 28, '路线', 10), 44, 57)}`;
      break;
    case 'lin-2':
      content = `${phone(24, 24, `${text(12, 40, '天气', 15)}<circle cx="45" cy="76" r="17" fill="#efd19a"/>${text(12, 120, '高温提示', 12)}`, 90)}${phone(134, 24, `${text(12, 40, '地图', 15)}<path d="M15 111l18-42 22 19 20-35" stroke="#347c88" stroke-width="4" fill="none"/>`, 90)}${phone(244, 24, `${text(12, 40, '公交', 15)}${text(12, 76, '预计到站', 12)}${text(12, 104, '不断变化', 12)}`, 90)}${text(60, 212, '分散信息需要自己拼接', 17)}`;
      break;
    case 'lin-3':
      content = `${phone(44, 17, `${text(13, 37, '行程比较', 15)}<rect x="12" y="50" width="126" height="36" fill="#edf4f1"/>${text(19, 72, '原方案 · 久等', 13)}<rect x="12" y="93" width="126" height="36" fill="#d7ecdf"/>${text(19, 116, '早出发 · 少等', 13)}${text(14, 148, '来源 / 更新时间', 11)}`, 152, 187)}${person(264, 145, color)}${text(233, 218, '自主比较', 15)}`;
      break;
    case 'lin-4':
      content = `${sun}${tree(62)}${tree(133)}<path d="M0 185h360" stroke="#a5b9ab" stroke-width="3"/><rect x="250" y="72" width="80" height="112" fill="#dee9e4" stroke="#829d8e"/>${text(261, 100, '地铁', 18)}<path d="M260 184v-62h60v62" stroke="#829d8e" fill="#fff"/>${person(190, 140, color)}${text(13, 213, '提前出发 · 选择遮阴路段', 15)}`;
      break;
    case 'lin-5':
    case 'zhou-3':
      content = `<rect x="20" y="43" width="165" height="140" fill="#e0eeeb" stroke="#829d8e"/><path d="M13 43h180" stroke="#347c88" stroke-width="8"/>${text(35, 70, '已确认开放', 16)}${bench(44, 151)}${person(86, 143, color, true)}<path d="M256 63v119" stroke="#829d8e" stroke-width="5"/><rect x="228" y="39" width="66" height="42" rx="3" fill="#fff" stroke="#829d8e"/>${text(240, 65, '站点', 16)}${text(204, 121, '到站信息', 14)}${text(199, 148, '先确认再等候', 13)}`;
      break;
    case 'lin-6':
      content = `${arrival('学校')}${person(121, 142, color)}<circle cx="81" cy="66" r="23" fill="#d1e7d7"/><path d="M69 65l8 9 18-20" fill="none" stroke="#23674f" stroke-width="4"/>${text(40, 210, '预期准时到达 · 仍需实测', 16)}`;
      break;
    case 'zhou-1':
      content = `<rect x="30" y="27" width="130" height="133" rx="3" fill="#fff" stroke="#829d8e"/><path d="M30 56h130" stroke="#347c88" stroke-width="4"/>${text(49, 88, '复诊预约', 21)}${text(49, 121, '必要行程', 16)}${person(256, 142, color)}${text(36, 210, '身体状态与预约都要考虑', 16)}`;
      break;
    case 'zhou-2':
      content = `${phone(37, 18, `${text(13, 42, '出行建议', 22)}${text(13, 78, '减少久站', 20)}<path d="M18 110l12-10v30l-12-10h-9v-10ZM40 102q15 13 0 26M47 96q23 19 0 39" fill="none" stroke="#347c88" stroke-width="3"/>${text(67, 119, '朗读', 16)}${text(13, 154, '手动选择区域', 13)}`, 174, 185)}${person(281, 145, color)}${text(235, 218, '本人控制', 14)}`;
      break;
    case 'zhou-4':
      content = `${person(86, 146, color)}${person(275, 146, '#7d7a9b')}<path d="M143 84h77m-10-9 10 9-10 9" fill="none" stroke="#347c88" stroke-width="3"/>${phone(143, 105, `${text(8, 27, '计划摘要', 12)}${text(8, 51, '主动分享', 12)}`, 80, 78)}${text(44, 32, '发出请求', 15)}${text(239, 32, '回复陪同', 15)}${text(69, 214, '只分享选定的时间与地点', 15)}`;
      break;
    case 'zhou-5':
      content = `${bench(54, 155)}${person(93, 147, color, true)}${phone(216, 31, `${text(10, 38, '公交晚点', 17)}${text(10, 76, '先休息', 19)}${text(10, 111, '需要时求助', 14)}`, 118, 155)}${text(27, 211, '持续不适时停止行程并求助', 16)}`;
      break;
    case 'zhou-6':
      content = `${arrival('医院', true)}${person(107, 143, color)}${phone(23, 24, `${text(8, 28, '结束分享', 11)}<path d="M17 46l10 10 17-22" fill="none" stroke="#347c88" stroke-width="3"/>`, 73, 82)}${text(35, 211, '预期完成就医 · 分享可关闭', 16)}`;
      break;
    default: throw new Error(`Unknown storyboard scene: ${id}`);
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 230" role="img" aria-label="${safe(id)} 情境插图" style="font-family:'Microsoft YaHei',sans-serif"><rect width="360" height="230" fill="${type === 'lin' ? '#f1f7f2' : '#eef6f7'}"/>${content}</svg>`;
}

export function renderPortraitSvg(id) {
  const color = id === 'lin' ? palette.green : palette.cyan;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 110" role="img" aria-label="用户画像人物示意"><rect width="110" height="110" rx="6" fill="#e0ebe5"/>${person(55, 97, color, false, false)}</svg>`;
}

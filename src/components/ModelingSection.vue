<script setup>
import { renderFlowSvg, renderPortraitSvg, renderSceneSvg } from '../data/model-visuals.js';
defineProps({ data: Object });
</script>

<template>
  <section id="modeling" aria-labelledby="modeling-title">
    <div class="wrap">
      <div class="section-heading"><span class="section-index" aria-hidden="true">07</span><h2 id="modeling-title">实验六、七：关系模型与用户体验</h2></div>
      <p class="lead">实验六：关系流程模型与 HMW 问题；实验七：两份用户画像与两个六格故事板。本次合并呈现从前期研究到设计探索的完整过程。</p>
      <p class="muted">{{ data.basis }}</p>
      <p><a class="report-link" href="./report/airaware-p6-p7-flow-personas-storyboards.pdf" download>下载实验六、七合并报告 PDF</a></p>

      <h3>实验六 · 1. 关系流程模型</h3>
      <p>{{ data.flow.intro }}</p>
      <figure class="design-flow">
        <div v-html="renderFlowSvg()"></div>
        <figcaption>图 1 · 现状中的人物关系。箭头表示信息或支持方向，双箭头表示协商或交换；B1–B4 为协作断点。详细依据见下表。<a href="./report/airaware-p6-p7-flow-model.svg" target="_blank" rel="noopener">放大关系图</a></figcaption>
      </figure>
      <div class="table-wrap"><table class="design-relations"><caption>关系、证据与断点</caption><thead><tr><th scope="col">关系</th><th scope="col">交换内容与访谈依据</th><th scope="col">断点与设计启示</th></tr></thead><tbody>
        <tr v-for="item in data.flow.relationships" :key="item.id"><th scope="row">{{ item.id }} · {{ item.people }}</th><td>{{ item.exchange }}<br><span class="muted">{{ item.evidence }}</span></td><td>{{ item.breakdown }}<br><span class="muted">{{ item.implication }}</span></td></tr>
      </tbody></table></div>
      <p class="muted">{{ data.flow.tools }}</p>
      <p class="design-proposal">{{ data.flow.proposed }}</p>

      <h3>实验六 · 2. HMW 设计问题</h3>
      <p>HMW（How Might We，我们如何……）将发现转为开放问题。共 8 个，每个问题保留多种可能的解决方式。</p>
      <ol class="hmw-list"><li v-for="item in data.hmw" :key="item.number"><span class="hmw-number">{{ item.number }}</span><div><span class="hmw-focus">{{ item.focus }}</span><p>{{ item.text }}</p><p class="design-evidence">{{ item.reason }}<br>依据：{{ item.evidence }}</p></div></li></ol>

      <h3>实验七 · 3. 两个主要用户画像</h3>
      <p>画像代表两类主要学生利益相关者；引语为需求概括，非受访者逐字引用。姓名、设定年龄和人物形象用于设计讨论。</p>
      <div class="persona-grid">
        <article v-for="persona in data.personas" :key="persona.id" class="persona-card">
          <div class="design-persona-heading"><div class="design-portrait" v-html="renderPortraitSvg(persona.id)"></div><div><span class="persona-tag">{{ persona.tag }}</span><h4>{{ persona.name }}</h4><p class="muted">{{ persona.identity }}</p></div></div>
          <blockquote>{{ persona.quote }}</blockquote><p>{{ persona.bio }}</p>
          <div class="persona-columns"><div><h5>目标</h5><ul><li v-for="item in persona.goals" :key="item">{{ item }}</li></ul></div><div><h5>困难</h5><ul><li v-for="item in persona.painPoints" :key="item">{{ item }}</li></ul></div><div><h5>现有行为</h5><ul><li v-for="item in persona.behaviors" :key="item">{{ item }}</li></ul></div><div><h5>设计需求</h5><ul><li v-for="item in persona.needs" :key="item">{{ item }}</li></ul></div></div>
          <p class="evidence"><strong>可访问性与隐私：</strong>{{ persona.accessibility }}</p>
          <p class="design-evidence"><strong>验证目标：</strong>{{ persona.success }}</p>
          <p class="design-evidence">{{ persona.demographics }}<br><strong>依据：</strong>{{ persona.evidence }}</p>
        </article>
      </div>

      <h3>实验七 · 4. 两个故事板</h3>
      <p>每个故事按 01→02→03→04→05→06 阅读，覆盖问题出现、使用服务、途中变化和结果。情节为设计探索；到达与减少等待是预期结果，尚未经原型测试验证。</p>
      <article v-for="story in data.storyboards" :key="story.id" class="design-story">
        <h4>{{ story.title }}</h4><p class="muted">{{ story.subtitle }}</p><p class="design-evidence">访谈依据：{{ story.evidence }}</p>
        <ol class="design-story-grid">
          <li v-for="frame in story.frames" :key="frame.number" class="design-frame">
            <div class="design-scene" v-html="renderSceneSvg(frame.sceneId)"></div>
            <div class="design-frame-copy"><h5>{{ frame.number }} · {{ frame.title }}</h5><p><strong>现场：</strong>{{ frame.scene }}</p><p><strong>行动：</strong>{{ frame.action }}</p><p class="design-emotion"><strong>情绪：</strong>{{ frame.emotion }}</p><p class="frame-outcome"><strong>变化：</strong>{{ frame.outcome }}</p></div>
          </li>
        </ol>
      </article>

      <h3>5. 从研究到设计的对应关系</h3>
      <div class="table-wrap"><table class="design-trace"><caption>依据与后续验证</caption><thead><tr><th scope="col">发现</th><th scope="col">访谈依据</th><th scope="col">模型</th><th scope="col">HMW</th><th scope="col">人物 / 故事</th><th scope="col">验证重点</th></tr></thead><tbody><tr v-for="row in data.traceability" :key="row[0]"><td v-for="(cell, i) in row" :key="i">{{ cell }}</td></tr></tbody></table></div>
      <p>当前两个人物优先覆盖固定通勤和休息支持需求。U02 的兼职情境保留在模型与 HMW 05 中，后续扩展；四位学生材料和 12 份问卷不能代表所有出行者。</p>
      <p>后续低保真原型重点验证：比较方案时能否解释取舍、场所未知或过期时能否选择下一步，以及不定位、不分享的用户能否独立完成核心任务。</p>
    </div>
  </section>
</template>

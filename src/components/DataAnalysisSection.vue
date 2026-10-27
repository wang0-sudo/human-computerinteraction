<script setup>
defineProps({ data: Object });
</script>

<template>
  <section id="analysis" aria-labelledby="analysis-title">
    <div class="wrap">
      <div class="section-heading">
        <span class="section-index" aria-hidden="true">06</span>
        <h2 id="analysis-title">实验五：数据分析</h2>
      </div>
      <p class="lead">围绕空气慧行的研究问题，整理问卷描述统计和访谈亲和图，检视必要出行、环境暴露、现实限制与健康信息需求之间的联系。</p>
      <div class="notice"><strong>分析样本：</strong>数据依据实验四归档匿名材料整理，包括 12 份问卷和 4 位学生访谈记录。本节只描述这些记录，不据小样本推断总体。<a class="report-link" href="./report/airaware-p5-data-analysis.pdf" download>下载实验五 PDF 报告</a></div>

      <h3>问卷描述统计</h3>
      <p class="muted">分析样本 n=12。单选题百分比为该选项人数占样本人数的比例；多选题按受访者比例计算，选项可重复选择，因此合计可能超过 100%。</p>

      <div class="analysis-chart-grid">
        <article v-for="group in data.demographics" :key="group.title" class="analysis-chart">
          <div class="analysis-chart-heading">
            <h4>{{ group.title }}</h4>
            <span>{{ group.question }}</span>
          </div>
          <div v-for="item in group.items" :key="item.label" class="bar-row">
            <span class="bar-label">{{ item.label }}</span>
            <span class="bar-track"><span class="bar-fill" :style="{ width: `${item.percentage}%` }"></span></span>
            <span class="bar-value">{{ item.count }} 人 · {{ item.percentage }}%</span>
          </div>
        </article>

        <article v-for="group in data.findings" :key="group.title" class="analysis-chart">
          <div class="analysis-chart-heading">
            <h4>{{ group.title }}</h4>
            <span>{{ group.question }}</span>
          </div>
          <div v-for="item in group.items" :key="item.label" class="bar-row">
            <span class="bar-label">{{ item.label }}</span>
            <span class="bar-track"><span class="bar-fill" :style="{ width: `${item.percentage}%` }"></span></span>
            <span class="bar-value">{{ item.count }} 人 · {{ item.percentage }}%</span>
          </div>
        </article>
      </div>

      <div class="scale-summary">
        <h4>五级量表摘要</h4>
        <div class="table-wrap">
          <table>
            <caption>量表分布，1 至 5 分</caption>
            <thead><tr><th scope="col">题目</th><th scope="col">各选项人数（1 → 5）</th><th scope="col">均值</th></tr></thead>
            <tbody><tr v-for="item in data.scaleFindings" :key="item.label"><th scope="row">{{ item.label }}</th><td>{{ item.distribution }}</td><td>{{ item.mean }}</td></tr></tbody>
          </table>
        </div>
      </div>

      <h3>初步发现与解释</h3>
      <ol class="analysis-insights">
        <li>样本中 3/12（25.0%）为学生，9/12（75.0%）的典型出行有至少 15 分钟户外暴露。样本覆盖学生、工作者、照护者和退休人员，适合比较不同出行情境，但仍需扩大样本才能代表更广泛人群。</li>
        <li>无法改变时间安排（9/12，75.0%）是最常见的限制，其次是费用、推荐可靠性、隐私和公共交通不便（各 3/12，25.0%）。这说明风险提示需要与可执行选项一起呈现，单纯提醒用户改变计划可能不够。</li>
        <li>10/12（83.3%）希望在出发前收到提醒，其中 7/12（58.3%）首选出发前 1–3 小时；11/12（91.7%）选择气象服务数据，9/12（75.0%）选择政府空气质量数据作为可信来源。数据来源和更新时间是后续设计重点。</li>
        <li>因高风险调整路线或时间的可能性均值为 4.17/5，高于大致位置接受度均值 3.67/5。用户更愿意采取行动，但对位置授权仍保持谨慎，隐私控制应成为服务的基础设置。</li>
      </ol>

      <h3>访谈亲和图：从观察到主题</h3>
      <p>根据前序访谈提纲中的研究维度进行数字化分析：将单一观察拆成便签，再比较相似内容并形成上下位主题。便签采用去标识化表达，重点保留出行情境、环境暴露、健康感受、应对限制和信息需求。</p>
      <div class="affinity-process" aria-label="亲和图整理过程">
        <article v-for="step in data.process" :key="step.step" class="process-step">
          <span>{{ step.step }}</span>
          <div><h4>{{ step.title }}</h4><p>{{ step.description }}</p></div>
        </article>
      </div>
      <p class="muted process-caption">数字化整理过程：提取、归类、比较和综合。</p>

      <div class="affinity-heading">
        <h4>最终亲和图</h4>
        <span>{{ data.themes.length }} 个上位主题 · {{ data.noteCount }} 张便签</span>
      </div>
      <div class="affinity-wall">
        <article v-for="(theme, index) in data.themes" :key="theme.title" class="affinity-cluster" :class="`cluster-${index + 1}`">
          <p class="cluster-kicker">主题 {{ String(index + 1).padStart(2, '0') }}</p>
          <h4>{{ theme.title }}</h4>
          <div class="subtheme-list"><span v-for="subtheme in theme.subthemes" :key="subtheme">{{ subtheme }}</span></div>
          <ul class="sticky-notes"><li v-for="note in theme.notes" :key="note">{{ note }}</li></ul>
        </article>
      </div>
      <p class="affinity-count">便签校验：{{ data.themes.reduce((sum, theme) => sum + theme.notes.length, 0) }} 张；主题之间按共同含义聚合，并保留时间、费用、可信度等差异。</p>

      <h3>综合反思</h3>
      <p>分析框架显示，健康出行困难并非单一的信息问题，而是环境暴露、固定日程、交通资源和个人应对共同作用的结果。值得继续验证的是：即使参与者愿意接收环境信息，现实中是否拥有改变路线或时间的选择；以及风险解释、替代地点与提醒方式各自能否降低决策负担。下一轮应先收集真实问卷与四位学生访谈材料，保留去标识化摘录和整理过程，再用实际证据调整主题及界面需求。</p>
    </div>
  </section>
</template>

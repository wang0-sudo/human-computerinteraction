<script setup>
defineProps({ data: Object });
</script>

<template>
  <section id="modeling" aria-labelledby="modeling-title">
    <div class="wrap">
      <div class="section-heading"><span class="section-index" aria-hidden="true">07</span><h2 id="modeling-title">实验六七：流程模型、HMW、用户画像与故事板</h2></div>
      <p class="lead">本部分将实验六和实验七合并提交：先用流程模型说明 AirAware 中人与信息、支持资源之间的关系，再把实验五的研究发现转化为 HMW 设计问题、两个主要用户画像和两个情境故事板。</p>
      <div class="notice"><strong>证据来源：</strong>模型和人物原型依据实验四 U01–U04 学生访谈回答，以及实验五的问卷与亲和图结论整理。画像中的姓名为便于讲解而使用的化名，重点保留真实情境和需求。</div>
      <p class="modeling-download"><a class="report-link" href="./report/airaware-p6-p7-flow-personas-storyboards.pdf" download>下载实验六七合并报告 PDF</a></p>

      <h3>一、关系流程模型</h3>
      <p>{{ data.flow.intro }}</p>
      <div class="actor-map" aria-label="空气慧行关系流程模型">
        <div v-for="actor in data.flow.actors" :key="actor.id" class="actor-node" :class="[`actor-${actor.tone}`, `actor-${actor.id}`]">
          <span class="actor-dot" aria-hidden="true"></span><h4>{{ actor.label }}</h4><p>{{ actor.role }}</p>
        </div>
      </div>
      <div class="relationship-table table-wrap">
        <table><caption>关键关系与信息流</caption><thead><tr><th scope="col">发起方</th><th scope="col">关系 / 交换内容</th><th scope="col">接收方</th><th scope="col">设计含义</th></tr></thead><tbody>
          <tr v-for="item in data.flow.relationships" :key="`${item.from}-${item.to}`"><th scope="row">{{ data.flow.actors.find((actor) => actor.id === item.from)?.label }}</th><td>{{ item.action }}</td><td>{{ data.flow.actors.find((actor) => actor.id === item.to)?.label }}</td><td>{{ item.note }}</td></tr>
        </tbody></table>
      </div>
      <div class="flow-stages"><article v-for="stage in data.flow.stages" :key="stage.number" class="flow-stage"><span>{{ stage.number }}</span><h4>{{ stage.title }}</h4><p>{{ stage.description }}</p></article></div>

      <h3>二、HMW 问题</h3>
      <p>HMW（How Might We）把研究发现转成开放的设计探索方向，不直接假定某个具体功能。以下问题覆盖固定日程、路线解释、隐私、可访问性、现实约束、可信度、协作与途中应对。</p>
      <ol class="hmw-list"><li v-for="item in data.hmw" :key="item.number"><span class="hmw-number">{{ item.number }}</span><div><span class="hmw-focus">{{ item.focus }}</span><p>{{ item.text }}</p></div></li></ol>

      <h3>三、用户画像</h3>
      <div class="persona-grid"><article v-for="persona in data.personas" :key="persona.name" class="persona-card"><div class="persona-head"><span class="persona-tag">{{ persona.tag }}</span><h4>{{ persona.name }}</h4><p>{{ persona.age }} · {{ persona.identity }}</p></div><blockquote>“{{ persona.quote }}”</blockquote><p>{{ persona.bio }}</p><div class="persona-columns"><div><h5>目标</h5><ul><li v-for="item in persona.goals" :key="item">{{ item }}</li></ul></div><div><h5>困难</h5><ul><li v-for="item in persona.painPoints" :key="item">{{ item }}</li></ul></div></div><div class="persona-needs"><h5>设计需要关注</h5><p>{{ persona.needs.join(' · ') }}</p></div><p class="evidence"><strong>访谈依据：</strong>{{ persona.evidence }}</p></article></div>

      <h3>四、故事板</h3>
      <p>故事板把画像放回真实生活，展示问题如何发生、用户如何做决定，以及服务在哪个时刻提供帮助。每个故事由六个连续场景组成。</p>
      <div v-for="story in data.storyboards" :key="story.title" class="storyboard"><div class="storyboard-heading"><div><span class="storyboard-persona">{{ story.persona }}</span><h4>{{ story.title }}</h4><p>{{ story.subtitle }}</p></div><span class="storyboard-count">6 个场景</span></div><div class="story-grid"><article v-for="frame in story.frames" :key="frame.number" class="story-frame"><div class="frame-top"><span>{{ frame.number }}</span><span aria-hidden="true">●</span></div><h5>{{ frame.title }}</h5><p><strong>现场：</strong>{{ frame.scene }}</p><p><strong>行动：</strong>{{ frame.action }}</p><p class="frame-outcome"><strong>变化：</strong>{{ frame.outcome }}</p></article></div></div>

      <div class="modeling-conclusion"><h3>本次合并作业的结论</h3><p>流程模型说明 AirAware 不是单向推送空气质量数字，而是连接学生、家人或同伴、交通与场所服务以及数据来源的协调层。HMW 保留了继续探索的空间；画像和故事板则把研究证据具体化为两种高频情境：必须准时到达的学生，以及需要可访问支持的必要出行者。下一步原型应优先验证路线解释、休息点信息、权限控制和低打扰提醒是否真的能帮助用户行动。</p></div>
    </div>
  </section>
</template>

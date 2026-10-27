<script setup>
defineProps({ data: Object });
</script>

<template>
<section id="survey" aria-labelledby="survey-title"><div class="wrap">
      <div class="section-heading"><span class="section-index" aria-hidden="true">05</span><h2 id="survey-title">问卷方案</h2></div>
      <p class="lead">本匿名问卷了解您日常出行以及高温、空气污染暴露情况，预计需要五至七分钟。请选择最符合您情况的答案。涉及健康状况的问题可以不回答，任何题目都可以跳过。</p>
      <p class="muted">以下为问卷题目与选项的研究版本，不在本页提交或保存个人回答。</p>
      <div class="survey-groups">
        <details open=""><summary>基本情况与出行暴露<span class="count">第 1–10 题</span></summary><ol class="questions">
          <li><span class="question-num" aria-hidden="true">01</span><div><span class="type">单选</span><h4>您属于以下哪个年龄段？</h4><ul class="options"><li>十八岁以下</li><li>十八至二十四岁</li><li>二十五至三十四岁</li><li>三十五至四十四岁</li><li>四十五至五十四岁</li><li>五十五至六十四岁</li><li>六十五岁及以上</li><li>不愿回答</li></ul></div></li>
          <li><span class="question-num" aria-hidden="true">02</span><div><span class="type">单选</span><h4>以下哪项最符合您目前的身份？</h4><ul class="options"><li>学生</li><li>全职工作者</li><li>兼职工作者</li><li>个体经营者</li><li>失业或正在找工作</li><li>退休人员</li><li>照护者</li><li>其他</li><li>不愿回答</li></ul></div></li>
          <li><span class="question-num" aria-hidden="true">03</span><div><span class="type">可选单选</span><h4>您是否患有某种疾病，或正在服用某种药物，使您更难应对高温、空气污染或较为费力的出行？</h4><ul class="options"><li>是</li><li>否</li><li>不确定</li><li>不愿回答</li></ul></div></li>
          <li><span class="question-num" aria-hidden="true">04</span><div><span class="type">多选</span><h4>哪些无障碍功能会让健康出行服务更容易使用？</h4><ul class="options"><li>大字体</li><li>高对比度</li><li>适合色觉障碍者的配色</li><li>兼容屏幕阅读器</li><li>语音说明</li><li>振动或视觉提醒</li><li>多语言</li><li>简明语言</li><li>以上都不需要</li><li>其他</li></ul></div></li>
          <li><span class="question-num" aria-hidden="true">05</span><div><span class="type">多选</span><h4>您平时会使用哪些交通方式进行通勤或必要出行？</h4><ul class="options"><li>步行</li><li>自行车或电动滑板车</li><li>公交车</li><li>地铁或火车</li><li>私家车</li><li>出租车或网约车</li><li>摩托车</li><li>其他</li></ul></div></li>
          <li><span class="question-num" aria-hidden="true">06</span><div><span class="type">单选</span><h4>您通常每周有几天需要通勤或进行必要出行？</h4><ul class="options"><li>零至一天</li><li>两至三天</li><li>四至五天</li><li>六至七天</li></ul></div></li>
          <li><span class="question-num" aria-hidden="true">07</span><div><span class="type">单选</span><h4>您通常单程出行需要多长时间？</h4><ul class="options"><li>少于十五分钟</li><li>十五至二十九分钟</li><li>三十至五十九分钟</li><li>六十至八十九分钟</li><li>九十分钟或更久</li></ul></div></li>
          <li><span class="question-num" aria-hidden="true">08</span><div><span class="type">单选</span><h4>在一次典型出行中，您大约有多长时间在户外或户外等候？</h4><ul class="options"><li>几乎没有</li><li>少于十五分钟</li><li>十五至二十九分钟</li><li>三十至五十九分钟</li><li>六十分钟或更久</li></ul></div></li>
          <li><span class="question-num" aria-hidden="true">09</span><div><span class="type">单选</span><h4>出发前，您查看天气、高温或空气质量信息的频率如何？</h4><ul class="options"><li>从不</li><li>很少</li><li>有时</li><li>经常</li><li>总是</li></ul></div></li>
          <li><span class="question-num" aria-hidden="true">10</span><div><span class="type">单选</span><h4>过去三个月中，您有多少次因为高温、空气污染或恶劣天气而改变、推迟或取消出行？</h4><ul class="options"><li>从没有</li><li>一次</li><li>两至三次</li><li>四至五次</li><li>超过五次</li><li>不确定</li></ul></div></li>
        </ol></details>
        <details open=""><summary>提醒偏好与决策限制<span class="count">第 11–18 题</span></summary><ol class="questions" start="11">
          <li><span class="question-num" aria-hidden="true">11</span><div><span class="type">排序题</span><h4>请按照重要程度排列您规划出行时最看重的因素。</h4><ul class="options"><li>到达时间</li><li>费用</li><li>可靠性</li><li>人身安全</li><li>身体舒适度</li><li>高温和空气污染暴露</li><li>无障碍程度</li><li>是否有遮阴处或室内避暑空间</li></ul></div></li>
          <li><span class="question-num" aria-hidden="true">12</span><div><span class="type">单选</span><h4>您希望在什么时候收到环境健康风险提醒？</h4><ul class="options"><li>前一天晚上</li><li>出发前一至三小时</li><li>出发前十五至三十分钟</li><li>出行过程中</li><li>只有风险变得严重时</li><li>我不希望接收提醒</li></ul></div></li>
          <li><span class="question-num" aria-hidden="true">13</span><div><span class="type">最多选择三项</span><h4>以下哪些提醒形式最容易引起您的注意？</h4><ul class="options"><li>横幅通知</li><li>声音</li><li>振动</li><li>语音播报</li><li>智能手表通知</li><li>短信</li><li>电子邮件</li><li>应用内消息</li></ul></div></li>
          <li><span class="question-num" aria-hidden="true">14</span><div><span class="type">单选</span><h4>风险提醒中应该首先显示哪类信息？</h4><ul class="options"><li>当前风险等级</li><li>预计持续时间</li><li>建议采取的防护措施</li><li>更安全的出行时间</li><li>更安全的路线</li><li>附近的室内或遮阴地点</li><li>数据来源说明</li></ul></div></li>
          <li><span class="question-num" aria-hidden="true">15</span><div><span class="type">五级量表</span><h4>如果可信赖的服务提醒您计划中的出行存在较高健康风险，您有多大可能调整路线或时间安排？</h4><ul class="options scale"><li>非常不可能</li><li>不太可能</li><li>说不清</li><li>比较可能</li><li>非常可能</li></ul></div></li>
          <li><span class="question-num" aria-hidden="true">16</span><div><span class="type">五级量表</span><h4>如果应用使用您的大致位置来提供本地环境信息，您对此有多大程度的接受度？</h4><ul class="options scale"><li>非常不接受</li><li>不接受</li><li>说不清</li><li>接受</li><li>非常接受</li></ul></div></li>
          <li><span class="question-num" aria-hidden="true">17</span><div><span class="type">多选</span><h4>哪些信息来源会让您认为环境健康风险提醒更可信？</h4><ul class="options"><li>政府空气质量数据</li><li>气象服务数据</li><li>公共卫生机构</li><li>当地交通数据</li><li>医生建议</li><li>其他用户报告</li><li>大学或研究机构</li><li>我需要更多信息</li></ul></div></li>
          <li><span class="question-num" aria-hidden="true">18</span><div><span class="type">多选</span><h4>哪些因素可能使您难以采用推荐的更安全出行方式？</h4><ul class="options"><li>需要花费太长时间</li><li>费用更高</li><li>可能错过工作或课程</li><li>公共交通不够便利</li><li>无法改变时间安排</li><li>行动能力有限</li><li>需要照护他人</li><li>推荐可能不可靠</li><li>隐私顾虑</li><li>其他</li></ul></div></li>
        </ol></details>
        <details open=""><summary>包容性、隐私与开放反馈<span class="count">第 19–21 题</span></summary><ol class="questions" start="19">
          <li><span class="question-num" aria-hidden="true">19</span><div><span class="type">五级量表</span><h4>您认为让不同语言、能力和健康需求的人都能顺利使用这项服务有多重要？</h4><ul class="options scale"><li>完全不重要</li><li>不太重要</li><li>一般重要</li><li>非常重要</li><li>极其重要</li></ul></div></li>
          <li><span class="question-num" aria-hidden="true">20</span><div><span class="type">多选</span><h4>在使用这类服务之前，您希望它提供哪些隐私控制？</h4><ul class="options"><li>仅在使用应用时允许定位</li><li>可以使用大致区域而不是精确位置</li><li>清楚地说明数据用途</li><li>可以删除历史记录</li><li>不与广告商共享信息</li><li>无需创建账户也能使用</li><li>其他</li></ul></div></li>
          <li><span class="question-num" aria-hidden="true">21</span><div><span class="type">开放题</span><h4>请用一至两句话说明，怎样的信息才能让您在日常出行中觉得高温和空气污染信息真正有用。</h4></div></li>
        </ol></details>
      </div>
    </div></section>
</template>

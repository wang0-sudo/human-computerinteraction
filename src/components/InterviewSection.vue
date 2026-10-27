<script setup>
defineProps({ data: Object });
</script>

<template>
<section id="interview" aria-labelledby="interview-title"><div class="wrap">
      <div class="section-heading"><span class="section-index" aria-hidden="true">04</span><h2 id="interview-title">访谈方案</h2></div>
      <p>采用半结构式访谈，围绕三个主题开展，每个主题五个主问题。访谈者根据回答选择追问，鼓励描述实际经历，不诱导参与者认可预设功能。</p>
      <dl class="meta-list"><div><dt>参与对象</dt><dd>4 位学生，均采用匿名编号</dd></div><div><dt>单次时长</dt><dd>约 25–30 分钟</dd></div><div><dt>记录方式</dt><dd>经同意后文字记录</dd></div></dl>
      <div class="table-wrap"><table class="sample-table"><caption>学生参与者招募情境（拟定，非真实人物档案）</caption><thead><tr><th scope="col">编号</th><th scope="col">情境</th><th scope="col">希望了解的经历</th></tr></thead><tbody>
        <tr><th scope="row">U01</th><td>校内或住校通勤的学生</td><td>步行、骑行与固定课程时间下的户外暴露。</td></tr>
        <tr><th scope="row">U02</th><td>有户外兼职经历的学生</td><td>较长户外活动与收入、时间要求之间的取舍。</td></tr>
        <tr><th scope="row">U03</th><td>跨校区或校外实习通勤的学生</td><td>多次换乘、露天等待与准时到达的压力。</td></tr>
        <tr><th scope="row">U04</th><td>愿意分享特定健康或可访问性需求的学生</td><td>信息表达、路线可达性及一般建议的适用边界；无需披露诊断。</td></tr>
      </tbody></table></div>
      <h3>访谈开场与同意</h3>
      <div class="script"><p>您好，感谢您参加本次访谈。我们正在研究高温、空气污染和出行条件如何影响城市中的通勤者或户外活动者。本次访谈希望了解实际问题和用户需求，不会评价您的能力，也不会测试您的知识。所有回答都没有对错之分。</p><p>访谈大约需要二十五至三十分钟。参与完全出于自愿，您可以跳过任何问题，也可以在任何时候停止访谈。我们只会将您的回答用于课程研究，不会在报告中写出您的姓名。如果得到您的同意，我们会做一些记录。现在可以开始吗？</p></div>
      <div class="interview-groups">
        <details open=""><summary>主题一：日常出行情境与环境暴露<span class="count">第 1–5 题</span></summary><ol class="questions">
          <li><span class="question-num" aria-hidden="true">01</span><div><h4>请您详细讲述最近一次出行，从准备出门开始，一直到抵达目的地为止。</h4><p class="probe"><strong>可能追问：</strong>这次出行中哪些部分最容易预料？哪些部分出现了意外变化？</p></div></li>
          <li><span class="question-num" aria-hidden="true">02</span><div><h4>当您选择出发时间、路线或交通方式时，通常会受到哪些因素影响？</h4><p class="probe"><strong>可能追问：</strong>您能否描述一次某个因素比平时更加重要的经历？</p></div></li>
          <li><span class="question-num" aria-hidden="true">03</span><div><h4>您日常出行的哪些路段最容易让您暴露在高温、交通尾气、拥挤或户外等待环境中？</h4><p class="probe"><strong>可能追问：</strong>为什么您很难避开这个地点或路段？</p></div></li>
          <li><span class="question-num" aria-hidden="true">04</span><div><h4>请讲述一次最近因为天气、空气质量或交通状况而改变出行方式的经历。</h4><p class="probe"><strong>可能追问：</strong>当时您采取了什么替代做法？最后结果如何？</p></div></li>
          <li><span class="question-num" aria-hidden="true">05</span><div><h4>什么因素会让一条路线或一个等候区域对您来说更安全、更容易应对？什么因素会让它变得不安全或令人疲惫？</h4><p class="probe"><strong>可能追问：</strong>现场的设施、服务或周围的社会环境会不会改变您的感受？</p></div></li>
        </ol></details>
        <details open=""><summary>主题二：健康影响与风险判断<span class="count">第 6–10 题</span></summary><ol class="questions" start="6">
          <li><span class="question-num" aria-hidden="true">06</span><div><h4>当您在非常炎热或空气污染严重的环境中出行或工作时，会注意到哪些身体或心理上的影响？</h4><p class="probe"><strong>可能追问：</strong>您通常什么时候最先察觉到这些影响？它们会如何影响当天剩余时间？</p></div></li>
          <li><span class="question-num" aria-hidden="true">07</span><div><h4>请描述一次您觉得环境状况可能损害健康的经历。</h4><p class="probe"><strong>可能追问：</strong>当时是什么信息或个人经历让您形成了这种判断？</p></div></li>
          <li><span class="question-num" aria-hidden="true">08</span><div><h4>您如何判断高温或污染警告是否严重到足以让您改变原来的计划？</h4><p class="probe"><strong>可能追问：</strong>什么信息或支持可以让您更容易、更有把握地做出决定？</p></div></li>
          <li><span class="question-num" aria-hidden="true">09</span><div><h4>高温、空气污染或困难的出行条件，曾经怎样影响您的工作、学习、照护责任或其他日常安排？</h4><p class="probe"><strong>可能追问：</strong>对您影响最大的是哪一方面？为什么？</p></div></li>
          <li><span class="question-num" aria-hidden="true">10</span><div><h4>一个提供健康出行建议的服务，在给您建议之前应该了解您的哪些个人情况？</h4><p class="probe"><strong>可能追问：</strong>有没有一些情况下，笼统的建议会对您没有帮助，甚至不安全？</p></div></li>
        </ol></details>
        <details open=""><summary>主题三：当前应对方式、现实障碍与信任<span class="count">第 11–15 题</span></summary><ol class="questions" start="11">
          <li><span class="question-num" aria-hidden="true">11</span><div><h4>在高温或空气污染严重的出行过程中，您目前会采取哪些措施来减少不适或健康风险？</h4><p class="probe"><strong>可能追问：</strong>哪种方式最有效？哪种方式最难坚持？</p></div></li>
          <li><span class="question-num" aria-hidden="true">12</span><div><h4>当您决定如何应对困难出行条件时，通常会依靠哪些工具、人员或信息来源？</h4><p class="probe"><strong>可能追问：</strong>您喜欢这些来源提供的哪些支持？又有哪些地方不满意？</p></div></li>
          <li><span class="question-num" aria-hidden="true">13</span><div><h4>在一次有风险的出行中，是什么原因阻止您采取自己认为最有利于健康的做法？</h4><p class="probe"><strong>可能追问：</strong>主要障碍来自时间、费用、工作或学校规定、行动能力、信息不足，还是其他原因？</p></div></li>
          <li><span class="question-num" aria-hidden="true">14</span><div><h4>请回想一次您必须在准时到达和保护健康之间做出选择的经历。您当时是如何权衡的？</h4><p class="probe"><strong>可能追问：</strong>当时什么变化可能会让您做出不同的决定？</p></div></li>
          <li><span class="question-num" aria-hidden="true">15</span><div><h4>一个新服务要提供环境暴露和出行建议，需要具备什么条件，才能让您信任它提供的信息？</h4><p class="probe"><strong>可能追问：</strong>哪些情况会让您停止使用它，或开始怀疑它的建议？</p></div></li>
        </ol></details>
      </div>
      <div class="closing"><h3>访谈结束</h3><div class="script"><p>以上就是我们计划提出的问题。关于在高温或空气污染环境中出行，还有没有什么重要内容是我没有问到的？您还希望研究人员了解这个问题的哪些方面？</p><p>感谢您分享自己的经历。您的回答将帮助我们理解这个问题，以及潜在用户的实际需求。</p></div></div>
    </div></section>
</template>

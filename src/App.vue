<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import TeamSection from './components/TeamSection.vue';
import ProjectSection from './components/ProjectSection.vue';
import ResearchPlanSection from './components/ResearchPlanSection.vue';
import InterviewSection from './components/InterviewSection.vue';
import SurveySection from './components/SurveySection.vue';
import AccessSection from './components/AccessSection.vue';
import DataAnalysisSection from './components/DataAnalysisSection.vue';
import {
  accessData,
  analysisData,
  interviewData,
  navItems,
  planData,
  projectData,
  surveyData,
  teamData,
} from './data/research.js';

const activeSection = ref('team');
let observer;

onMounted(() => {
  const sections = [...document.querySelectorAll('main > section[id]')];
  observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
    if (visible[0]) activeSection.value = visible[0].target.id;
  }, { rootMargin: '-110px 0px -55% 0px', threshold: [0.05, 0.25, 0.6] });
  sections.forEach((section) => observer.observe(section));
});

onBeforeUnmount(() => observer?.disconnect());
</script>

<template>
  <a class="skip-link" href="#main">跳到正文</a>
  <header class="site-header" id="top">
    <div class="wrap header-row">
      <a class="brand" href="#top">空气慧行</a>
      <span class="course">人机交互实验 5 · 数据分析</span>
    </div>
  </header>

  <div class="hero">
    <div class="wrap">
      <p class="hero-label">健康 · 福祉 · 环境可持续发展</p>
      <h1>空气慧行</h1>
      <p class="subtitle">城市高温与空气污染下的健康出行研究</p>
      <p class="hero-copy">关注必须出门的人，理解通勤中的环境暴露、健康担忧与现实限制，让设计建立在用户的实际经历之上。</p>
    </div>
  </div>

  <nav class="site-nav" aria-label="项目导航">
    <div class="wrap nav-links">
      <a v-for="item in navItems" :key="item.id" :href="`#${item.id}`" :aria-current="activeSection === item.id ? 'location' : undefined">{{ item.label }}</a>
    </div>
  </nav>

  <main id="main">
    <TeamSection :data="teamData" />
    <ProjectSection :data="projectData" />
    <ResearchPlanSection :data="planData" />
    <InterviewSection :data="interviewData" />
    <SurveySection :data="surveyData" />
    <DataAnalysisSection :data="analysisData" />
    <AccessSection :data="accessData" />
  </main>

  <footer>
    <div class="wrap footer-row">
      <span>空气慧行项目组 · 人机交互实验 5 · 数据分析阶段</span>
      <a href="#top">返回顶部</a>
    </div>
  </footer>
</template>

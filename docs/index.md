---
layout: home

hero:
  name: "Q3CC API"
  text: "API 文档站"
  tagline: "何意味喵"
  actions:
    - theme: brand
      text: API 文档
      link: /reference/
    - theme: alt
      text: About
      link: https://q3cc.top

---

<div id="overview-container">
  <div class="web-report-overview-widget">
    <div class="overview-header">
      <span class="overview-title">API统计</span>
      <div class="overview-tabs">
        <button
          class="overview-tab"
          :class="{ active: period === 'day' }"
          type="button"
          @click="period = 'day'"
        >
          今日
        </button>
        <button
          class="overview-tab"
          :class="{ active: period === 'week' }"
          type="button"
          @click="period = 'week'"
        >
          总
        </button>
      </div>
    </div>
    <div class="overview-content">
      <div class="overview-metric">
        <span class="overview-metric-label">请求数</span>
        <span class="overview-metric-value">{{ formatNumber(requestCount) }}</span>
      </div>
      <div class="overview-metric">
        <span class="overview-metric-label">IP数</span>
        <span class="overview-metric-value">{{ formatNumber(ipCount) }}</span>
      </div>
      <div class="overview-metric">
        <span class="overview-metric-label">总访问量</span>
        <span class="overview-metric-value">{{ formatNumber(totalVisits) }}</span>
      </div>
    </div>
    <p v-if="requestUser" class="overview-footnote">当前请求用户：{{ requestUser }}</p>
    <p v-if="loadError" class="overview-footnote overview-footnote-error">{{ loadError }}</p>
  </div>
</div>

<script setup>
import { computed, onMounted, ref } from 'vue';

const period = ref('day');
const info = ref(null);
const loadError = ref('');

const requestCount = computed(() => {
  if (!info.value?.site) return 0;
  return period.value === 'day' ? info.value.site.dailyRequests : info.value.site.totalRequests;
});

const ipCount = computed(() => {
  if (!info.value?.requestUserStats) return 0;
  return period.value === 'day'
    ? info.value.requestUserStats.dailyRequests
    : info.value.requestUserStats.totalRequests;
});

const totalVisits = computed(() => info.value?.site?.totalRequests ?? 0);
const requestUser = computed(() => info.value?.requestUser ?? '');

function formatNumber(value) {
  const num = Number(value);
  if (!Number.isFinite(num)) {
    return '--';
  }
  return new Intl.NumberFormat('zh-CN').format(num);
}

async function loadOverview() {
  try {
    const response = await fetch('/api/info', {
      headers: {
        accept: 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    info.value = await response.json();
    loadError.value = '';
  } catch (error) {
    console.error('Failed to load /api/info', error);
    loadError.value = '统计数据加载失败，请稍后刷新重试。';
  }
}

onMounted(() => {
  void loadOverview();
});
</script>

<style>
#overview-container {
  margin: 48px auto 24px;
  max-width: 1152px;
  padding: 0 24px;
}

.web-report-overview-widget {
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  background: var(--vp-c-bg-soft);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.overview-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid var(--vp-c-divider);
}

.overview-title {
  font-size: 16px;
  font-weight: 700;
}

.overview-tabs {
  display: inline-flex;
  gap: 8px;
}

.overview-tab {
  appearance: none;
  background: transparent;
  cursor: pointer;
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  padding: 4px 12px;
  font-size: 13px;
  color: var(--vp-c-text-2);
}

.overview-tab.active {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  background: color-mix(in srgb, var(--vp-c-brand-1) 10%, transparent);
}

.overview-content {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  padding: 16px 20px 20px;
}

.overview-metric {
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  padding: 14px 16px;
  background: var(--vp-c-bg);
}

.overview-metric-label {
  display: block;
  margin-bottom: 10px;
  color: var(--vp-c-text-2);
  font-size: 13px;
}

.overview-metric-value {
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
}

.overview-footnote {
  margin: 0;
  padding: 0 20px 16px;
  font-size: 13px;
  color: var(--vp-c-text-2);
}

.overview-footnote-error {
  color: var(--vp-c-danger-1);
  padding-top: 0;
}

@media (max-width: 768px) {
  #overview-container {
    padding: 0 16px;
  }

  .overview-content {
    grid-template-columns: 1fr;
  }
}
</style>

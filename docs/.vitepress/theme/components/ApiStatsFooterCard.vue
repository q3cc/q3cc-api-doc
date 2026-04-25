<script setup lang="ts">
import { Footer } from '@theojs/lumen';
import { computed, onMounted, ref } from 'vue';
import type { FooterData } from '@theojs/lumen';

type InfoResponse = {
  site?: {
    totalRequests?: number;
    dailyRequests?: number;
  };
};

const info = ref<InfoResponse | null>(null);

const footerData: FooterData = {
  author: {
    name: 'Q3CC',
    link: 'https://q3cc.top',
    text: 'All Rights Reserved.'
  }
};

const totalRequests = computed(() => info.value?.site?.totalRequests ?? 0);
const dailyRequests = computed(() => info.value?.site?.dailyRequests ?? 0);

function formatNumber(value: number): string {
  const num = Number(value);
  if (!Number.isFinite(num)) {
    return '--';
  }
  return new Intl.NumberFormat('zh-CN').format(num);
}

async function loadOverview() {
  try {
    const response = await fetch('/api/info', {
      headers: { accept: 'application/json' },
      cache: 'no-store'
    });
    if (!response.ok) {
      return;
    }
    info.value = (await response.json()) as InfoResponse;
  } catch {
    // ignore
  }
}

onMounted(() => {
  void loadOverview();
});
</script>

<template>
  <div class="q3cc-footer-wrap">
    <Footer :Footer_Data="footerData" />
    <p class="q3cc-overview-text">
      全部API总调用 {{ formatNumber(totalRequests) }} 次,今日调用 {{ formatNumber(dailyRequests) }} 次
    </p>
  </div>
</template>

<style scoped>
.q3cc-footer-wrap {
  margin: 4px auto 10px;
  padding: 0 24px;
  max-width: 1152px;
  text-align: center;
}

.q3cc-overview-text {
  margin: 2px 0 0;
  font-size: 12px;
  line-height: 1.5;
  color: var(--vp-c-text-2);
}

:deep(.footer) {
  background: transparent;
}

:deep(.footer-info) {
  margin: 0;
}

:deep(.info-spacing-copyright) {
  margin-left: 0;
}

@media (max-width: 768px) {
  .q3cc-footer-wrap {
    padding: 0 16px;
  }
}
</style>

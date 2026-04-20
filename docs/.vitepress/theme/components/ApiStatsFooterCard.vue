<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

type InfoResponse = {
  site?: {
    totalRequests?: number;
    dailyRequests?: number;
  };
};

const info = ref<InfoResponse | null>(null);

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
  <div class="q3cc-overview-footer">
    <p class="q3cc-overview-text">
      全部API总调用 {{ formatNumber(totalRequests) }} 次,今日调用 {{ formatNumber(dailyRequests) }} 次
    </p>
  </div>
</template>

<style scoped>
.q3cc-overview-footer {
  margin: 10px auto 16px;
  padding: 0 24px;
  max-width: 1152px;
}

.q3cc-overview-text {
  margin: 0;
  font-size: 12px;
  line-height: 1.5;
  color: var(--vp-c-text-2);
  text-align: center;
}

@media (max-width: 768px) {
  .q3cc-overview-footer {
    padding: 0 16px;
  }
}
</style>

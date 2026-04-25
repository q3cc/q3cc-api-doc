import DefaultTheme from 'vitepress/theme';
import { inBrowser } from 'vitepress';
import { NProgress } from 'nprogress-v2/dist/index.js';
import { h } from 'vue';
import type { Router } from 'vitepress';

import ApiStatsFooterCard from './components/ApiStatsFooterCard.vue';
import CuteNotFound from './components/CuteNotFound.vue';
import 'nprogress-v2/dist/index.css';
import './style.css';

function configureRouteProgress(router: Router) {
  if (!inBrowser) {
    return;
  }

  NProgress.configure({ showSpinner: false });

  const beforeRouteChange = router.onBeforeRouteChange;
  const afterRouteChange = router.onAfterRouteChange;

  router.onBeforeRouteChange = async (to) => {
    const shouldContinue = await beforeRouteChange?.(to);
    if (shouldContinue === false) {
      return false;
    }
    NProgress.start();
  };

  router.onAfterRouteChange = async (to) => {
    try {
      await afterRouteChange?.(to);
    } finally {
      NProgress.done();
    }
  };

  window.addEventListener('popstate', (event) => {
    if (event.state === null) {
      return;
    }
    NProgress.start();
  });
}

export default {
  extends: DefaultTheme,
  enhanceApp({ router }) {
    configureRouteProgress(router);
  },
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'not-found': () => h(CuteNotFound),
      'layout-bottom': () => h(ApiStatsFooterCard)
    });
  }
};

import DefaultTheme from 'vitepress/theme';
import { h } from 'vue';

import ApiStatsFooterCard from './components/ApiStatsFooterCard.vue';
import CuteNotFound from './components/CuteNotFound.vue';
import './style.css';

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'not-found': () => h(CuteNotFound),
      'layout-bottom': () => h(ApiStatsFooterCard)
    });
  }
};

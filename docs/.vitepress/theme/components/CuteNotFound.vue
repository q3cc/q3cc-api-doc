<script setup lang="ts">
import { withBase } from 'vitepress';
</script>

<template>
  <section class="cute-not-found" aria-labelledby="cute-not-found-title">
    <div class="container">
      <div class="main">
        <p class="eyebrow">404 · Not Found</p>
        <h1 id="cute-not-found-title" class="heading">
          <span class="name clip">页面走丢了</span>
          <span class="text">但 API 文档还在这里</span>
        </h1>
        <p class="tagline">
          小小导航员没有找到这个地址。检查一下链接，或回到首页继续探索 Q3CC API。
        </p>

        <div class="actions" aria-label="404 页面操作">
          <div class="action">
            <a class="VPButton medium brand" :href="withBase('/')">返回首页</a>
          </div>
          <div class="action">
            <a class="VPButton medium alt" :href="withBase('/reference/')">查看 API 文档</a>
          </div>
        </div>
      </div>

      <div class="image" aria-hidden="true">
        <div class="image-container">
          <div class="image-bg" />
          <div class="mascot-card">
            <img class="logo" :src="withBase('/logov2.svg')" alt="" />
            <span class="bubble">QwQ</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cute-not-found {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  min-height: calc(100vh - var(--vp-nav-height) - 56px);
  padding: 32px 24px 40px;
}

.container {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1152px;
}

.main {
  position: relative;
  z-index: 1;
  order: 2;
  flex-grow: 1;
  flex-shrink: 0;
  text-align: center;
}

.eyebrow {
  margin: 0 0 12px;
  letter-spacing: 0.18em;
  line-height: 20px;
  font-size: 13px;
  font-weight: 700;
  color: var(--vp-c-brand-1);
  text-transform: uppercase;
}

.heading {
  display: flex;
  flex-direction: column;
  margin: 0;
}

.name,
.text {
  width: fit-content;
  max-width: 392px;
  margin: 0 auto;
  letter-spacing: -0.4px;
  line-height: 40px;
  font-size: 32px;
  font-weight: 700;
  white-space: pre-wrap;
}

.name {
  color: var(--vp-home-hero-name-color);
}

.clip {
  background: var(--vp-home-hero-name-background);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: var(--vp-home-hero-name-color);
}

.tagline {
  margin: 0 auto;
  padding-top: 12px;
  max-width: 576px;
  line-height: 30px;
  font-size: 18px;
  font-weight: 500;
  white-space: pre-wrap;
  color: var(--vp-c-text-2);
}

.actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: -6px;
  padding-top: 28px;
}

.action {
  flex-shrink: 0;
  padding: 6px;
}

.VPButton {
  display: inline-block;
  border: 1px solid transparent;
  text-align: center;
  font-weight: 600;
  white-space: nowrap;
  transition:
    color 0.25s,
    border-color 0.25s,
    background-color 0.25s;
}

.VPButton.medium {
  border-radius: 20px;
  padding: 0 20px;
  line-height: 38px;
  font-size: 14px;
}

.VPButton.brand {
  border-color: var(--vp-button-brand-border);
  color: var(--vp-button-brand-text);
  background-color: var(--vp-button-brand-bg);
}

.VPButton.brand:hover {
  border-color: var(--vp-button-brand-hover-border);
  color: var(--vp-button-brand-hover-text);
  background-color: var(--vp-button-brand-hover-bg);
}

.VPButton.alt {
  border-color: var(--vp-button-alt-border);
  color: var(--vp-button-alt-text);
  background-color: var(--vp-button-alt-bg);
}

.VPButton.alt:hover {
  border-color: var(--vp-button-alt-hover-border);
  color: var(--vp-button-alt-hover-text);
  background-color: var(--vp-button-alt-hover-bg);
}

.image {
  order: 1;
  margin: -44px -24px -12px;
}

.image-container {
  position: relative;
  margin: 0 auto;
  width: 240px;
  height: 240px;
}

.image-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  width: 176px;
  height: 176px;
  background-image: var(--vp-home-hero-image-background-image);
  filter: var(--vp-home-hero-image-filter);
  transform: translate(-50%, -50%);
}

.mascot-card {
  position: absolute;
  top: 50%;
  left: 50%;
  display: grid;
  width: 128px;
  height: 128px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 36px;
  place-items: center;
  background: color-mix(in srgb, var(--vp-c-bg-soft) 88%, transparent);
  box-shadow: var(--vp-shadow-3);
  transform: translate(-50%, -50%) rotate(-4deg);
}

.mascot-card::before,
.mascot-card::after {
  position: absolute;
  top: -13px;
  width: 34px;
  height: 34px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px 10px 4px 10px;
  content: '';
  background: color-mix(in srgb, var(--vp-c-bg-soft) 92%, transparent);
}

.mascot-card::before {
  left: 32px;
  transform: rotate(30deg);
}

.mascot-card::after {
  right: 32px;
  transform: rotate(60deg);
}

.logo {
  width: 76px;
  height: 76px;
  object-fit: contain;
}

.bubble {
  position: absolute;
  right: -10px;
  bottom: 20px;
  padding: 4px 10px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  line-height: 18px;
  font-size: 12px;
  font-weight: 700;
  color: var(--vp-c-brand-1);
  background: var(--vp-c-bg);
}

@media (min-width: 640px) {
  .cute-not-found {
    min-height: calc(100vh - var(--vp-nav-height) - 52px);
    padding: 40px 48px 48px;
  }

  .name,
  .text {
    max-width: 576px;
    line-height: 56px;
    font-size: 48px;
  }

  .tagline {
    line-height: 32px;
    font-size: 20px;
  }

  .image-container {
    width: 320px;
    height: 320px;
  }

  .image-bg {
    width: 224px;
    height: 224px;
  }

  .mascot-card {
    width: 156px;
    height: 156px;
  }

  .logo {
    width: 96px;
    height: 96px;
  }
}

@media (min-width: 960px) {
  .cute-not-found {
    min-height: calc(100vh - (var(--vp-nav-height) * 2) - 52px);
    padding: 44px 64px 56px;
  }

  .container {
    flex-direction: row;
    align-items: center;
  }

  .main {
    order: 1;
    width: calc((100% / 3) * 2);
    max-width: 620px;
    text-align: left;
  }

  .name,
  .text,
  .tagline {
    margin: 0;
  }

  .name,
  .text {
    line-height: 64px;
    font-size: 56px;
  }

  .tagline {
    line-height: 36px;
    font-size: 24px;
  }

  .actions {
    justify-content: flex-start;
    padding-top: 32px;
  }

  .image {
    flex-grow: 1;
    order: 2;
    margin: 0;
    min-height: 100%;
  }

  .image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 320px;
    transform: translate(-16px, -10px);
  }

  .image-bg {
    width: 288px;
    height: 288px;
  }
}
</style>

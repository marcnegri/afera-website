<template>
  <section class="hero">
    <div class="container">
      <div class="hero-badge">
        <span class="badge-dot"></span>
        {{ t('hero.badge') }}
      </div>

      <h1 class="hero-title">
        {{ t('hero.title1') }}<br />
        {{ t('hero.title2') }} <span class="highlight">{{ t('hero.titleHighlight') }}</span>{{ t('hero.title3') }}
      </h1>

      <p class="hero-subtitle">
        {{ t('hero.subtitle') }}
        <br /><span class="hero-subtitle-small">{{ t('hero.subtitleSmall') }}</span>
      </p>

      <div class="hero-actions">
        <a href="#pricing" class="btn-primary hero-cta">{{ t('hero.startFree') }}</a>
        <button class="btn-secondary" @click="scrollToDemo">{{ t('hero.watchDemo') }}</button>
      </div>

      <div class="hero-stats">
        <div class="stat">
          <div class="stat-value">{{ t('hero.stat1Value') }}</div>
          <div class="stat-label">{{ t('hero.stat1Label') }}</div>
        </div>
        <div class="stat-divider"></div>
        <div class="stat">
          <div class="stat-value">{{ t('hero.stat2Value') }}</div>
          <div class="stat-label">{{ t('hero.stat2Label') }}</div>
        </div>
        <div class="stat-divider"></div>
        <div class="stat">
          <div class="stat-value">{{ t('hero.stat3Value') }}</div>
          <div class="stat-label">{{ t('hero.stat3Label') }}</div>
        </div>
        <div class="stat-divider"></div>
        <div class="stat">
          <div class="stat-value">{{ t('hero.stat4Value') }}</div>
          <div class="stat-label">{{ t('hero.stat4Label') }}</div>
        </div>
      </div>

      <!-- App Dashboard Screenshot -->
      <div class="hero-screenshot" id="demo">
        <div class="screenshot-mock-bar">
          <div class="mock-dot red"></div>
          <div class="mock-dot yellow"></div>
          <div class="mock-dot green"></div>
          <div class="mock-url"></div>
        </div>
        <img src="/screenshots/dashboard.png" :alt="t('hero.screenshotAlt')" class="dashboard-img" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

function scrollToDemo() {
  document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}
</script>

<style scoped>
.hero {
  padding: 140px 0 80px;
  text-align: center;
  background: linear-gradient(180deg, var(--orange-pale) 0%, white 60%);
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: white;
  border: 1.5px solid var(--orange);
  color: var(--orange);
  font-size: 13px;
  font-weight: 600;
  padding: 6px 16px;
  border-radius: 20px;
  margin-bottom: 28px;
  font-family: 'Fredoka', sans-serif;
}

.badge-dot {
  width: 7px;
  height: 7px;
  background: var(--orange);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

.hero-title {
  font-size: clamp(36px, 6vw, 72px);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 24px;
  letter-spacing: -0.5px;
}

.highlight {
  color: var(--orange);
  position: relative;
}

.highlight::after {
  content: '';
  position: absolute;
  bottom: 4px;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--orange), var(--orange-light));
  border-radius: 2px;
  opacity: 0.3;
}

.hero-subtitle {
  font-size: 18px;
  color: var(--gray-500);
  max-width: 580px;
  margin: 0 auto 36px;
  line-height: 1.8;
}

.hero-subtitle-small {
  font-size: 15px;
  color: var(--gray-300);
}

.hero-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  flex-wrap: wrap;
  margin-bottom: 48px;
}

.hero-cta {
  font-size: 17px;
  padding: 16px 36px;
}

.hero-stats {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 56px;
  background: white;
  border: 1px solid var(--gray-100);
  border-radius: var(--radius-lg);
  padding: 24px 40px;
  box-shadow: var(--shadow-sm);
}

.stat {
  padding: 0 32px;
  text-align: center;
}

.stat-value {
  font-family: 'Fredoka', sans-serif;
  font-size: 32px;
  font-weight: 700;
  color: var(--gray-900);
  line-height: 1;
}

.stat-label {
  font-size: 13px;
  color: var(--gray-500);
  margin-top: 4px;
  white-space: nowrap;
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: var(--gray-100);
}

.hero-screenshot {
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg), 0 0 0 1px rgba(0,0,0,0.05);
  position: relative;
  background: white;
  overflow: hidden;
}

.dashboard-img {
  display: block;
  width: 100%;
  height: auto;
}

.screenshot-mock-bar {
  position: relative;
  height: 36px;
  background: white;
  border-bottom: 1px solid var(--gray-100);
  display: flex;
  align-items: center;
  padding: 0 16px;
  gap: 8px;
}

.mock-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.mock-dot.red { background: #ff5f57; }
.mock-dot.yellow { background: #ffbd2e; }
.mock-dot.green { background: #28ca42; }

.mock-url {
  flex: 1;
  height: 20px;
  background: var(--gray-100);
  border-radius: 6px;
  max-width: 300px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .hero {
    padding: 100px 0 60px;
  }

  .hero-stats {
    padding: 16px 20px;
  }

  .stat {
    padding: 8px 16px;
  }

  .stat-value {
    font-size: 24px;
  }

  .hero-screenshot {
    border-radius: var(--radius);
  }
}
</style>

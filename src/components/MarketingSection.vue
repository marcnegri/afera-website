<template>
  <section class="marketing-section" id="marketing">
    <div class="container">
      <div class="section-header">
        <span class="section-label">{{ t('marketing.label') }}</span>
        <h2 class="section-title">{{ t('marketing.title1') }}<br />{{ t('marketing.title2') }}</h2>
        <p class="section-subtitle">{{ t('marketing.subtitle') }}</p>
      </div>

      <div class="marketing-tabs">
        <button
          v-for="tab in tabKeys"
          :key="tab"
          class="tab-btn"
          :class="{ active: activeTab === tab }"
          @click="activeTab = tab"
        >{{ t(`marketing.tabs.${tab}`) }}</button>
      </div>

      <div class="tab-content">
        <transition name="fade" mode="out-in">
          <div :key="activeTab" class="tab-panel">
            <div class="tab-visual">
              <img v-if="screenshots[activeTab]" :src="screenshots[activeTab]"
                :alt="t(`marketing.tabs.${activeTab}`)" class="section-screenshot" />
              <div v-else-if="hasVideo[activeTab]" class="video-placeholder" style="height: 420px;">
                <div class="play-button">▶</div>
                <div class="video-label">{{ t(`marketing.tabs.${activeTab}`) }}</div>
                <div class="video-sublabel">Replace with feature walkthrough video · recommended 1280×720</div>
              </div>
              <div v-else class="screenshot-placeholder" style="height: 420px;">
                <div class="placeholder-icon">{{ tabIcons[activeTab] }}</div>
                <div class="placeholder-text">{{ t(`marketing.tabs.${activeTab}`) }} Screenshot</div>
                <div class="placeholder-subtext">Replace with actual screenshot · recommended 900×700px</div>
              </div>
            </div>

            <div class="tab-info">
              <h3 class="tab-title">{{ t(`marketing.details.${activeTab}.title`) }}</h3>
              <p class="tab-desc">{{ t(`marketing.details.${activeTab}.desc`) }}</p>
              <ul class="tab-bullets">
                <li v-for="(_, i) in bulletCount[activeTab]" :key="i">
                  <span class="bullet-check">✓</span>
                  {{ t(`marketing.details.${activeTab}.bullets[${i}]`) }}
                </li>
              </ul>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const activeTab = ref('newsletters')

const tabKeys = ['newsletters', 'landing', 'social', 'email', 'workflows']

const screenshots = {
  newsletters: '/screenshots/newsletter.png',
  landing:     null,
  social:      null,
  email:       null,
  workflows:   null,
}

const hasVideo = {
  newsletters: false,
  landing:     true,
  social:      false,
  email:       true,
  workflows:   false,
}

const tabIcons = {
  newsletters: '✉️',
  landing:     '🏠',
  social:      '📱',
  email:       '🎨',
  workflows:   '⚙️',
}

const bulletCount = {
  newsletters: Array(4),
  landing:     Array(4),
  social:      Array(4),
  email:       Array(4),
  workflows:   Array(4),
}
</script>

<style scoped>
.marketing-section {
  padding: 100px 0;
  background: var(--gray-100);
}

.section-header {
  text-align: center;
  margin-bottom: 48px;
}

.section-subtitle {
  margin: 0 auto;
}

.marketing-tabs {
  display: flex;
  gap: 8px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 36px;
}

.tab-btn {
  padding: 10px 20px;
  border-radius: 8px;
  border: 1.5px solid var(--gray-300);
  background: white;
  color: var(--gray-500);
  font-size: 14px;
  font-weight: 600;
  font-family: 'Fredoka', sans-serif;
  cursor: pointer;
  transition: all 0.2s ease;
}

.tab-btn:hover {
  border-color: var(--orange);
  color: var(--orange);
}

.tab-btn.active {
  background: var(--orange);
  border-color: var(--orange);
  color: white;
  box-shadow: 0 4px 12px rgba(255,107,53,0.3);
}

.tab-panel {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  background: white;
  border-radius: var(--radius-lg);
  padding: 40px;
  box-shadow: var(--shadow-sm);
}

.tab-title {
  font-family: 'Fredoka', sans-serif;
  font-size: 28px;
  font-weight: 700;
  color: var(--gray-900);
  margin-bottom: 14px;
  line-height: 1.3;
}

.tab-desc {
  font-size: 15px;
  color: var(--gray-500);
  line-height: 1.7;
  margin-bottom: 24px;
}

.tab-bullets {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.tab-bullets li {
  font-size: 14px;
  color: var(--gray-700);
  display: flex;
  align-items: flex-start;
  gap: 10px;
  line-height: 1.6;
}

.bullet-check {
  color: var(--green);
  font-weight: 700;
  flex-shrink: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.fade-enter-from { opacity: 0; transform: translateY(8px); }
.fade-leave-to   { opacity: 0; transform: translateY(-8px); }

@media (max-width: 900px) {
  .tab-panel {
    grid-template-columns: 1fr;
    padding: 24px;
    gap: 32px;
  }

  .marketing-section { padding: 60px 0; }
}
</style>

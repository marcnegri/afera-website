<template>
  <section class="contacts-section" id="contacts">
    <div class="container">
      <div class="split-layout">
        <div class="split-content">
          <span class="section-label">{{ t('contacts.label') }}</span>
          <h2 class="section-title">{{ t('contacts.title1') }}<br />{{ t('contacts.title2') }}</h2>
          <p class="section-subtitle">{{ t('contacts.subtitle') }}</p>

          <div class="features-list">
            <div v-for="key in featureKeys" :key="key" class="feature-item">
              <div class="feature-check">✓</div>
              <div>
                <div class="fi-title">{{ t(`contacts.features.${key}.title`) }}</div>
                <div class="fi-desc">{{ t(`contacts.features.${key}.desc`) }}</div>
              </div>
            </div>
          </div>

          <div class="readiness-preview">
            <div class="rp-label">{{ t('contacts.readinessLabel') }}</div>
            <div class="rp-badges">
              <span v-for="key in badgeKeys" :key="key"
                class="rp-badge" :style="{ background: badgeStyles[key].bg, color: badgeStyles[key].color }">
                {{ t(`contacts.badges.${key}`) }}
              </span>
            </div>
            <div class="rp-hint">{{ t('contacts.readinessHint') }}</div>
          </div>
        </div>

        <div class="split-visual">
          <img src="/screenshots/contacts.png" alt="Contacts" class="section-screenshot" />
          <div class="floating-card fc-1">
            <div class="fc-icon">🔍</div>
            <div>
              <div class="fc-title">{{ t('contacts.floatSearch') }}</div>
              <div class="fc-sub">{{ t('contacts.floatSearchSub') }}</div>
            </div>
          </div>
          <div class="floating-card fc-2">
            <div class="fc-icon">📤</div>
            <div>
              <div class="fc-title">{{ t('contacts.floatExport') }}</div>
              <div class="fc-sub">{{ t('contacts.floatExportSub') }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const featureKeys = ['readiness', 'activity', 'deals', 'export']
const badgeKeys   = ['cold', 'exploring', 'interested', 'evaluating', 'ready', 'buyer']

const badgeStyles = {
  cold:       { bg: '#eff6ff', color: '#3b82f6' },
  exploring:  { bg: '#f5f3ff', color: '#8b5cf6' },
  interested: { bg: '#fffbeb', color: '#d97706' },
  evaluating: { bg: '#fff7ed', color: '#ea580c' },
  ready:      { bg: '#ecfdf5', color: '#10b981' },
  buyer:      { bg: '#fff3ee', color: '#ff6b35' },
}
</script>

<style scoped>
.contacts-section {
  padding: 100px 0;
  background: white;
}

.split-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.split-visual {
  position: relative;
}

.features-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 32px 0;
}

.feature-item {
  display: flex;
  gap: 14px;
  align-items: flex-start;
}

.feature-check {
  width: 24px;
  height: 24px;
  background: var(--green-pale);
  color: var(--green);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 700;
  flex-shrink: 0;
  margin-top: 2px;
}

.fi-title {
  font-weight: 600;
  color: var(--gray-900);
  font-size: 15px;
  margin-bottom: 2px;
}

.fi-desc {
  font-size: 14px;
  color: var(--gray-500);
  line-height: 1.6;
}

.readiness-preview {
  background: var(--gray-100);
  border-radius: var(--radius);
  padding: 18px 20px;
}

.rp-label {
  font-size: 12px;
  font-weight: 600;
  color: var(--gray-500);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 10px;
}

.rp-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 10px;
}

.rp-badge {
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
}

.rp-hint {
  font-size: 12px;
  color: var(--gray-500);
}

.floating-card {
  position: absolute;
  background: white;
  border-radius: var(--radius);
  box-shadow: var(--shadow-md);
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid var(--gray-100);
}

.fc-1 { bottom: 60px; left: -20px; }
.fc-2 { top: 40px; right: -20px; }

.fc-icon { font-size: 22px; }

.fc-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--gray-900);
}

.fc-sub {
  font-size: 12px;
  color: var(--gray-500);
}

@media (max-width: 900px) {
  .split-layout {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .split-visual { order: -1; }
  .fc-1, .fc-2 { display: none; }
  .contacts-section { padding: 60px 0; }
}
</style>

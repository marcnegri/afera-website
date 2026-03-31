<template>
  <section class="deals-section" id="deals">
    <div class="container">
      <div class="split-layout reversed">
        <div class="split-visual">
          <img src="/screenshots/deals.png" alt="Deals" class="section-screenshot" />

          <div class="kanban-preview">
            <div class="kanban-col" v-for="col in kanbanCols" :key="col.key">
              <div class="kanban-col-header" :style="{ color: col.color }">{{ t(`deals.kanban.${col.key}`) }}</div>
              <div class="kanban-item" v-for="item in col.items" :key="item">
                <div class="ki-dot" :style="{ background: col.color }"></div>
                <div class="ki-text">{{ item }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="split-content">
          <span class="section-label">{{ t('deals.label') }}</span>
          <h2 class="section-title">{{ t('deals.title1') }}<br />{{ t('deals.title2') }}</h2>
          <p class="section-subtitle">{{ t('deals.subtitle') }}</p>

          <div class="deal-stats">
            <div class="deal-stat" v-for="s in statKeys" :key="s">
              <div class="ds-icon">{{ statIcons[s] }}</div>
              <div class="ds-value">{{ t(`deals.stats.${s}`) }}</div>
              <div class="ds-label">{{ t(`deals.stats.${s}Label`) }}</div>
            </div>
          </div>

          <div class="deal-features">
            <div class="df-item" v-for="(_, i) in featureCount" :key="i">
              <span class="df-bullet">→</span> {{ t(`deals.features[${i}]`) }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

const kanbanCols = [
  { key: 'pending', color: '#f59e0b', items: ['Acme Corp', 'Studio Bleu'] },
  { key: 'signed',  color: '#10b981', items: ['TechStart AG', 'Maison Lacroix'] },
  { key: 'lost',    color: '#ef4444', items: ['Old Prospect'] },
]

const statKeys  = ['kanban', 'charts', 'rates']
const statIcons = { kanban: '📈', charts: '📉', rates: '🎯' }
const featureCount = Array(6)
</script>

<style scoped>
.deals-section {
  padding: 100px 0;
  background: var(--gray-100);
}

.split-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.split-layout.reversed .split-visual {
  order: -1;
}

.kanban-preview {
  display: flex;
  gap: 10px;
  margin-top: 16px;
}

.kanban-col {
  flex: 1;
  background: white;
  border-radius: var(--radius);
  padding: 12px 10px;
  box-shadow: var(--shadow-sm);
}

.kanban-col-header {
  font-family: 'Fredoka', sans-serif;
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.3px;
}

.kanban-item {
  background: var(--gray-100);
  border-radius: 6px;
  padding: 6px 8px;
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.ki-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
}

.ki-text {
  font-size: 11px;
  color: var(--gray-700);
  font-weight: 500;
}

.deal-stats {
  display: flex;
  gap: 16px;
  margin: 28px 0;
}

.deal-stat {
  flex: 1;
  background: white;
  border-radius: var(--radius);
  padding: 16px;
  text-align: center;
  box-shadow: var(--shadow-sm);
}

.ds-icon { font-size: 24px; margin-bottom: 6px; }

.ds-value {
  font-family: 'Fredoka', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: var(--gray-900);
}

.ds-label {
  font-size: 12px;
  color: var(--gray-500);
  margin-top: 2px;
}

.deal-features {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.df-item {
  font-size: 14px;
  color: var(--gray-700);
  display: flex;
  align-items: flex-start;
  gap: 8px;
  line-height: 1.6;
}

.df-bullet {
  color: var(--orange);
  font-weight: 700;
  flex-shrink: 0;
}

@media (max-width: 900px) {
  .split-layout {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .split-layout.reversed .split-visual { order: 0; }
  .deals-section { padding: 60px 0; }
}
</style>

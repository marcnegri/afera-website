<template>
  <section class="accounting-section" id="accounting">
    <div class="container">
      <div class="section-header">
        <span class="section-label">{{ t('accounting.label') }}</span>
        <h2 class="section-title">{{ t('accounting.title1') }}<br />{{ t('accounting.title2') }}</h2>
        <p class="section-subtitle">{{ t('accounting.subtitle') }}</p>
      </div>

      <div class="accounting-grid">
        <div class="accounting-visual">
          <img src="/screenshots/accounting.png" alt="Accounting" class="section-screenshot" />
        </div>

        <div class="accounting-features">
          <div class="af-card" v-for="key in cardKeys" :key="key">
            <div class="af-icon">{{ cardIcons[key] }}</div>
            <div>
              <div class="af-title">{{ t(`accounting.cards.${key}.title`) }}</div>
              <div class="af-desc">{{ t(`accounting.cards.${key}.desc`) }}</div>
            </div>
          </div>

          <div class="tax-rates-box">
            <div class="trb-label">{{ t('accounting.taxLabel') }}</div>
            <div class="trb-rates">
              <span v-for="r in taxRates" :key="r" class="trb-rate">{{ r }}</span>
            </div>
            <div class="trb-note">{{ t('accounting.taxNote') }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const cardKeys  = ['revenue', 'expenses', 'docs', 'linked', 'balance', 'export']
const cardIcons = { revenue: '📥', expenses: '📤', docs: '📎', linked: '🔗', balance: '📊', export: '📤' }
const taxRates  = ['0%', '5%', '7.7%', '10%', '19%', '20%', '21%', '23%']
</script>

<style scoped>
.accounting-section {
  padding: 100px 0;
  background: white;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-subtitle {
  margin: 0 auto;
}

.accounting-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;
}

.af-card {
  display: flex;
  gap: 14px;
  align-items: flex-start;
  padding: 14px 0;
  border-bottom: 1px solid var(--gray-100);
}

.af-card:last-of-type {
  border-bottom: none;
}

.af-icon { font-size: 24px; flex-shrink: 0; margin-top: 2px; }

.af-title {
  font-weight: 600;
  color: var(--gray-900);
  font-size: 15px;
  margin-bottom: 2px;
}

.af-desc {
  font-size: 14px;
  color: var(--gray-500);
  line-height: 1.6;
}

.tax-rates-box {
  background: var(--orange-pale);
  border-radius: var(--radius);
  padding: 18px 20px;
  margin-top: 8px;
}

.trb-label {
  font-size: 13px;
  font-weight: 600;
  color: var(--orange);
  margin-bottom: 10px;
  font-family: 'Fredoka', sans-serif;
}

.trb-rates {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 10px;
}

.trb-rate {
  background: white;
  color: var(--orange);
  font-size: 13px;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 20px;
  border: 1px solid rgba(255,107,53,0.2);
}

.trb-note {
  font-size: 12px;
  color: var(--orange);
  opacity: 0.7;
}

@media (max-width: 900px) {
  .accounting-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .accounting-section { padding: 60px 0; }
}
</style>

<template>
  <section class="pricing-section" id="pricing">
    <div class="container">
      <div class="section-header">
        <span class="section-label">{{ t('pricing.label') }}</span>
        <h2 class="section-title">{{ t('pricing.title1') }}<br />{{ t('pricing.title2') }}</h2>
        <p class="section-subtitle">{{ t('pricing.subtitle') }}</p>
      </div>

      <div class="pricing-grid">
        <div class="plan-card card" v-for="plan in plans" :key="plan.id"
          :class="{ featured: plan.featured }">
          <div class="plan-badge" v-if="plan.featured">{{ t('pricing.popular') }}</div>
          <div class="plan-save-badge" v-if="plan.saveBadge">{{ t('pricing.save') }}</div>
          <div class="plan-icon">{{ plan.icon }}</div>
          <div class="plan-name">{{ t(`pricing.plans.${plan.id}.name`) }}</div>
          <div class="plan-price">
            <span class="price-currency">CHF</span>
            <span class="price-value">{{ plan.price }}</span>
            <span class="price-period">{{ t(`pricing.plans.${plan.id}.period`) }}</span>
          </div>
          <div class="plan-price-sub" v-if="plan.priceSub">
            {{ t(`pricing.plans.${plan.id}.priceSub`) }}
          </div>
          <div class="plan-desc">{{ t(`pricing.plans.${plan.id}.desc`) }}</div>

          <ul class="plan-features">
            <li v-for="f in plan.featureKeys" :key="f.key" class="pf-item">
              <span class="pf-check" :class="{ included: f.included }">{{ f.included ? '✓' : '✗' }}</span>
              <span :class="{ dimmed: !f.included }">{{ t(`pricing.features.${f.key}`) }}</span>
            </li>
          </ul>

          <a href="#" class="plan-cta" :class="plan.featured ? 'btn-primary' : 'btn-secondary'">
            {{ t(`pricing.plans.${plan.id}.cta`) }}
          </a>
        </div>
      </div>

      <div class="pricing-note">{{ t('pricing.note') }}</div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const plans = [
  {
    id: 'trial', icon: '🌱', featured: false, saveBadge: false, priceSub: false,
    price: '0',
    featureKeys: [
      { key: 'trial30days',    included: true  },
      { key: 'allFeatures',    included: true  },
      { key: 'contacts100',    included: true  },
      { key: 'deals50',        included: true  },
      { key: 'emails100',      included: true  },
      { key: 'emailSupport',   included: true  },
    ],
  },
  {
    id: 'monthly', icon: '🚀', featured: true, saveBadge: false, priceSub: false,
    price: '19.99',
    featureKeys: [
      { key: 'contactsUnlimited', included: true },
      { key: 'dealsUnlimited',    included: true },
      { key: 'emails1000',        included: true },
      { key: 'workflows',         included: true },
      { key: 'newsletters',       included: true },
      { key: 'landingPages',      included: true },
      { key: 'prioritySupport',   included: true },
      { key: 'advancedAnalytics', included: true },
    ],
  },
  {
    id: 'annual', icon: '💡', featured: false, saveBadge: true, priceSub: true,
    price: '199.9',
    featureKeys: [
      { key: 'everythingMonthly', included: true },
      { key: 'save17',            included: true },
      { key: 'contactsUnlimited', included: true },
      { key: 'dealsUnlimited',    included: true },
      { key: 'emails1000',        included: true },
      { key: 'prioritySupport',   included: true },
      { key: 'advancedAnalytics', included: true },
    ],
  },
]
</script>

<style scoped>
.pricing-section {
  padding: 100px 0;
  background: white;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-subtitle {
  margin: 0 auto 32px;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  max-width: 960px;
  margin: 0 auto 32px;
}

.plan-card {
  padding: 32px 28px;
  position: relative;
  border: 1.5px solid var(--gray-100);
  display: flex;
  flex-direction: column;
}

.plan-card.featured {
  border-color: var(--orange);
  box-shadow: 0 8px 32px rgba(255,107,53,0.12);
  transform: scale(1.03);
}

.plan-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--orange);
  color: white;
  font-size: 12px;
  font-weight: 700;
  font-family: 'Fredoka', sans-serif;
  padding: 4px 16px;
  border-radius: 20px;
  white-space: nowrap;
}

.plan-save-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--green);
  color: white;
  font-size: 12px;
  font-weight: 700;
  font-family: 'Fredoka', sans-serif;
  padding: 4px 16px;
  border-radius: 20px;
  white-space: nowrap;
}

.plan-icon { font-size: 36px; margin-bottom: 8px; }

.plan-name {
  font-family: 'Fredoka', sans-serif;
  font-size: 22px;
  font-weight: 700;
  color: var(--gray-900);
  margin-bottom: 4px;
}

.plan-price {
  display: flex;
  align-items: baseline;
  gap: 4px;
  margin-bottom: 4px;
}

.price-currency { font-size: 14px; font-weight: 600; color: var(--gray-500); }

.price-value {
  font-family: 'Fredoka', sans-serif;
  font-size: 42px;
  font-weight: 700;
  color: var(--gray-900);
  line-height: 1;
}

.price-period { font-size: 14px; color: var(--gray-500); }

.plan-price-sub {
  font-size: 13px;
  color: var(--green);
  font-weight: 600;
  margin-bottom: 4px;
}

.plan-desc {
  font-size: 14px;
  color: var(--gray-500);
  margin-bottom: 24px;
  line-height: 1.6;
  margin-top: 6px;
}

.plan-features {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 28px;
  flex: 1;
}

.pf-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: var(--gray-700);
}

.pf-check {
  font-size: 13px;
  font-weight: 700;
  width: 18px;
  text-align: center;
  flex-shrink: 0;
}

.pf-check.included { color: var(--green); }
.pf-check:not(.included) { color: var(--gray-300); }
.dimmed { color: var(--gray-300); }

.plan-cta {
  text-align: center;
  justify-content: center;
  width: 100%;
}

.pricing-note {
  text-align: center;
  font-size: 14px;
  color: var(--gray-500);
}

@media (max-width: 900px) {
  .pricing-grid { grid-template-columns: 1fr; max-width: 400px; }
  .plan-card.featured { transform: scale(1); }
  .pricing-section { padding: 60px 0; }
}
</style>

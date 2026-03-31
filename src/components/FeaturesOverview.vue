<template>
  <section class="features-overview" id="features">
    <div class="container">
      <div class="section-header">
        <span class="section-label">{{ t('features.label') }}</span>
        <h2 class="section-title">{{ t('features.title') }}</h2>
        <p class="section-subtitle">{{ t('features.subtitle') }}</p>
      </div>

      <div class="features-grid">
        <div v-for="feature in features" :key="feature.id" class="feature-card card" :style="{ '--accent': feature.color }">
          <div class="feature-icon">{{ feature.icon }}</div>
          <h3 class="feature-title">{{ t(`features.${feature.id}.title`) }}</h3>
          <p class="feature-desc">{{ t(`features.${feature.id}.desc`) }}</p>
          <a :href="feature.href" class="feature-link">
            {{ t('features.learnMore') }} <span>→</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const features = [
  { id: 'dashboard', icon: '📊', color: '#ff6b35', href: '#contacts' },
  { id: 'contacts',  icon: '👥', color: '#3b82f6', href: '#contacts' },
  { id: 'deals',     icon: '🤝', color: '#10b981', href: '#deals'    },
  { id: 'accounting',icon: '💰', color: '#f59e0b', href: '#accounting'},
  { id: 'marketing', icon: '🚀', color: '#8b5cf6', href: '#marketing' },
]
</script>

<style scoped>
.features-overview {
  padding: 100px 0;
  background: var(--gray-100);
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-subtitle {
  margin: 0 auto;
}

.section-title {
  white-space: pre-line;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
}

.feature-card {
  padding: 28px 22px;
  border-top: 3px solid var(--accent);
  transition: all 0.2s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
}

.feature-icon {
  font-size: 36px;
  margin-bottom: 14px;
}

.feature-title {
  font-family: 'Fredoka', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: var(--gray-900);
  margin-bottom: 10px;
}

.feature-desc {
  font-size: 14px;
  color: var(--gray-500);
  line-height: 1.7;
  margin-bottom: 16px;
}

.feature-link {
  font-size: 14px;
  font-weight: 600;
  color: var(--accent);
  display: inline-flex;
  align-items: center;
  gap: 4px;
  transition: gap 0.2s;
}

.feature-card:hover .feature-link {
  gap: 8px;
}

@media (max-width: 1100px) {
  .features-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr 1fr;
  }

  .features-overview {
    padding: 60px 0;
  }
}

@media (max-width: 480px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>

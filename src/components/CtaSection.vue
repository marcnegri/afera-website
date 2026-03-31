<template>
  <section class="cta-section">
    <div class="container">
      <div class="cta-inner">
        <div class="cta-emoji">🎯</div>
        <h2 class="cta-title">{{ t('cta.title1') }}<br />{{ t('cta.title2') }}</h2>
        <p class="cta-desc">{{ t('cta.desc') }}</p>
        <div class="cta-actions">
          <a href="#pricing" class="btn-primary cta-btn">{{ t('cta.startFree') }}</a>
          <a href="#features" class="btn-secondary">{{ t('cta.seeFeatures') }}</a>
        </div>
        <div class="cta-social-proof">
          <div class="sp-avatars">
            <div class="sp-avatar" v-for="a in avatars" :key="a.initials"
              :style="{ background: a.color }">{{ a.initials }}</div>
          </div>
          <div class="sp-text">
            <strong>{{ t('cta.spBold') }}</strong> {{ t('cta.spText') }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const avatars = [
  { initials: 'ML', color: '#ff6b35' },
  { initials: 'SA', color: '#10b981' },
  { initials: 'JK', color: '#3b82f6' },
  { initials: 'PN', color: '#8b5cf6' },
  { initials: 'CR', color: '#f59e0b' },
]
</script>

<style scoped>
.cta-section {
  padding: 100px 0;
  background: linear-gradient(135deg, var(--gray-900) 0%, #1a1a2e 100%);
  position: relative;
  overflow: hidden;
}

.cta-section::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -20%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(255,107,53,0.12) 0%, transparent 70%);
  pointer-events: none;
}

.cta-section::after {
  content: '';
  position: absolute;
  bottom: -30%;
  right: -10%;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%);
  pointer-events: none;
}

.cta-inner {
  text-align: center;
  position: relative;
  z-index: 1;
}

.cta-emoji { font-size: 56px; margin-bottom: 20px; display: block; }

.cta-title {
  font-size: clamp(32px, 5vw, 56px);
  font-weight: 700;
  color: white;
  margin-bottom: 20px;
}

.cta-desc {
  font-size: 17px;
  color: rgba(255,255,255,0.6);
  max-width: 520px;
  margin: 0 auto 40px;
  line-height: 1.7;
}

.cta-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  flex-wrap: wrap;
  margin-bottom: 48px;
}

.cta-btn { font-size: 17px; padding: 16px 36px; }

.cta-section .btn-secondary {
  background: transparent;
  border-color: rgba(255,255,255,0.2);
  color: rgba(255,255,255,0.7);
}

.cta-section .btn-secondary:hover {
  border-color: white;
  color: white;
}

.cta-social-proof {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  flex-wrap: wrap;
}

.sp-avatars { display: flex; }

.sp-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 12px;
  font-weight: 700;
  font-family: 'Fredoka', sans-serif;
  border: 2px solid rgba(0,0,0,0.3);
  margin-left: -8px;
}

.sp-avatar:first-child { margin-left: 0; }

.sp-text {
  font-size: 14px;
  color: rgba(255,255,255,0.5);
  max-width: 300px;
  text-align: left;
  line-height: 1.5;
}

.sp-text strong { color: rgba(255,255,255,0.8); }

@media (max-width: 600px) {
  .cta-section { padding: 60px 0; }
  .cta-social-proof { flex-direction: column; text-align: center; }
  .sp-text { text-align: center; }
}
</style>

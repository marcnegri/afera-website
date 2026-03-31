<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <div class="footer-logo">
            <img src="/logo.svg" alt="Afera" width="32" height="32" />
            <span class="footer-logo-text">Afera</span>
          </div>
          <p class="footer-tagline">{{ t('footer.tagline') }}</p>
          <div class="footer-langs">
            <button
              v-for="lang in langs"
              :key="lang.code"
              class="footer-lang-btn"
              :class="{ active: locale === lang.code }"
              @click="switchLang(lang.code)"
            >{{ lang.flag }} {{ lang.label }}</button>
          </div>
        </div>

        <div class="footer-links-group">
          <div class="flg-title">{{ t('footer.groups.product') }}</div>
          <ul>
            <li><a href="#features">{{ t('footer.links.dashboard') }}</a></li>
            <li><a href="#contacts">{{ t('footer.links.contacts') }}</a></li>
            <li><a href="#deals">{{ t('footer.links.deals') }}</a></li>
            <li><a href="#accounting">{{ t('footer.links.accounting') }}</a></li>
            <li><a href="#marketing">{{ t('footer.links.digitalMarketing') }}</a></li>
          </ul>
        </div>

        <div class="footer-links-group">
          <div class="flg-title">{{ t('footer.groups.company') }}</div>
          <ul>
            <li><a href="#">{{ t('footer.links.about') }}</a></li>
            <li><a href="#">{{ t('footer.links.blog') }}</a></li>
            <li><a href="#">{{ t('footer.links.changelog') }}</a></li>
            <li><a href="#">{{ t('footer.links.careers') }}</a></li>
          </ul>
        </div>

        <div class="footer-links-group">
          <div class="flg-title">{{ t('footer.groups.support') }}</div>
          <ul>
            <li><a href="#">{{ t('footer.links.helpCenter') }}</a></li>
            <li><a href="#">{{ t('footer.links.contactUs') }}</a></li>
            <li><a href="#">{{ t('footer.links.status') }}</a></li>
            <li><a href="#pricing">{{ t('footer.links.pricing') }}</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="footer-copy">{{ t('footer.copyright', { year }) }}</div>
        <div class="footer-legal">
          <a href="#">{{ t('footer.privacy') }}</a>
          <a href="#">{{ t('footer.terms') }}</a>
          <a href="#">{{ t('footer.cookies') }}</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { setLocale } from '../i18n.js'

const { t, locale } = useI18n()

const year = new Date().getFullYear()

const langs = [
  { code: 'en', flag: '🇬🇧', label: 'EN' },
  { code: 'fr', flag: '🇫🇷', label: 'FR' },
]

function switchLang(code) {
  setLocale(code)
}
</script>

<style scoped>
.footer {
  background: var(--gray-900);
  color: rgba(255,255,255,0.6);
  padding: 64px 0 32px;
}

.footer-top {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 48px;
  margin-bottom: 48px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 14px;
}

.footer-logo-text {
  font-family: 'Fredoka', sans-serif;
  font-size: 22px;
  font-weight: 700;
  color: white;
}

.footer-tagline {
  font-size: 14px;
  line-height: 1.6;
  max-width: 220px;
  margin-bottom: 16px;
}

.footer-langs {
  display: flex;
  gap: 8px;
}

.footer-lang-btn {
  background: rgba(255,255,255,0.08);
  border: 1px solid transparent;
  color: rgba(255,255,255,0.5);
  padding: 5px 12px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease;
}

.footer-lang-btn.active {
  background: rgba(255,255,255,0.15);
  border-color: rgba(255,255,255,0.2);
  color: white;
}

.footer-lang-btn:hover:not(.active) {
  color: rgba(255,255,255,0.8);
}

.flg-title {
  font-family: 'Fredoka', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: rgba(255,255,255,0.4);
  text-transform: uppercase;
  letter-spacing: 0.8px;
  margin-bottom: 16px;
}

.footer-links-group ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-links-group a {
  font-size: 14px;
  color: rgba(255,255,255,0.5);
  transition: color 0.2s;
}

.footer-links-group a:hover { color: white; }

.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.08);
  padding-top: 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
}

.footer-copy { font-size: 13px; color: rgba(255,255,255,0.35); }

.footer-legal { display: flex; gap: 24px; }

.footer-legal a {
  font-size: 13px;
  color: rgba(255,255,255,0.35);
  transition: color 0.2s;
}

.footer-legal a:hover { color: rgba(255,255,255,0.7); }

@media (max-width: 900px) {
  .footer-top { grid-template-columns: 1fr 1fr; }
  .footer-brand { grid-column: 1 / -1; }
}

@media (max-width: 480px) {
  .footer-top { grid-template-columns: 1fr; }
  .footer-bottom { flex-direction: column; align-items: flex-start; }
}
</style>

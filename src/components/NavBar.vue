<template>
  <header class="navbar" :class="{ scrolled: isScrolled }">
    <div class="container nav-inner">
      <a href="#" class="nav-logo">
        <img src="/logo.svg" alt="Afera" width="36" height="36" />
        <span class="nav-logo-text">Afera</span>
      </a>

      <nav class="nav-links" :class="{ open: menuOpen }">
        <a href="#features" @click="closeMenu">{{ t('nav.features') }}</a>
        <a href="#contacts" @click="closeMenu">{{ t('nav.contacts') }}</a>
        <a href="#deals" @click="closeMenu">{{ t('nav.deals') }}</a>
        <a href="#marketing" @click="closeMenu">{{ t('nav.marketing') }}</a>
        <a href="#pricing" @click="closeMenu">{{ t('nav.pricing') }}</a>
      </nav>

      <div class="nav-cta">
        <div class="lang-switcher">
          <button
            v-for="lang in langs"
            :key="lang.code"
            class="lang-btn"
            :class="{ active: locale === lang.code }"
            @click="switchLang(lang.code)"
          >{{ lang.flag }} {{ lang.code.toUpperCase() }}</button>
        </div>
        <a href="#pricing" class="btn-secondary nav-btn-secondary">{{ t('nav.login') }}</a>
        <a href="#pricing" class="btn-primary nav-btn-primary">{{ t('nav.tryfree') }}</a>
      </div>

      <button class="hamburger" @click="menuOpen = !menuOpen" :aria-label="t('nav.menu')">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { setLocale } from '../i18n.js'

const { t, locale } = useI18n()

const isScrolled = ref(false)
const menuOpen = ref(false)

const langs = [
  { code: 'en', flag: '🇬🇧' },
  { code: 'fr', flag: '🇫🇷' },
]

function switchLang(code) {
  setLocale(code)
}

function closeMenu() {
  menuOpen.value = false
}

function handleScroll() {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 16px 0;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid transparent;
  transition: all 0.3s ease;
}

.navbar.scrolled {
  padding: 12px 0;
  border-bottom-color: var(--gray-100);
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
}

.nav-inner {
  display: flex;
  align-items: center;
  gap: 32px;
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}

.nav-logo-text {
  font-family: 'Fredoka', sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: var(--gray-900);
  letter-spacing: 0.5px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 4px;
  flex: 1;
}

.nav-links a {
  padding: 8px 14px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
  color: var(--gray-500);
  transition: all 0.2s ease;
}

.nav-links a:hover {
  color: var(--gray-900);
  background: var(--gray-100);
}

.nav-cta {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}

.lang-switcher {
  display: flex;
  gap: 4px;
  background: var(--gray-100);
  padding: 3px;
  border-radius: 8px;
}

.lang-btn {
  padding: 5px 10px;
  border-radius: 6px;
  border: none;
  background: transparent;
  color: var(--gray-500);
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease;
  white-space: nowrap;
}

.lang-btn.active {
  background: white;
  color: var(--gray-900);
  box-shadow: var(--shadow-sm);
}

.lang-btn:hover:not(.active) {
  color: var(--gray-700);
}

.nav-btn-secondary {
  padding: 9px 18px;
  font-size: 14px;
}

.nav-btn-primary {
  padding: 9px 20px;
  font-size: 14px;
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  padding: 4px;
  cursor: pointer;
}

.hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--gray-700);
  border-radius: 2px;
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
    position: fixed;
    top: 64px;
    left: 0;
    right: 0;
    background: white;
    flex-direction: column;
    align-items: stretch;
    padding: 12px 24px 24px;
    border-bottom: 1px solid var(--gray-100);
    box-shadow: 0 8px 24px rgba(0,0,0,0.08);
    gap: 4px;
  }

  .nav-links.open {
    display: flex;
  }

  .nav-links a {
    padding: 12px 16px;
    font-size: 16px;
  }

  .nav-btn-secondary {
    display: none;
  }

  .hamburger {
    display: flex;
    margin-left: auto;
  }
}
</style>

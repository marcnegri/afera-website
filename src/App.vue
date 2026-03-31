<template>
  <div>
    <NavBar />
    <main>
      <HeroSection />
      <FeaturesOverview />
      <ContactsSection />
      <DealsSection />
      <AccountingSection />
      <MarketingSection />
      <PricingSection />
      <CtaSection />
    </main>
    <FooterSection />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import FeaturesOverview from './components/FeaturesOverview.vue'
import ContactsSection from './components/ContactsSection.vue'
import DealsSection from './components/DealsSection.vue'
import AccountingSection from './components/AccountingSection.vue'
import MarketingSection from './components/MarketingSection.vue'
import PricingSection from './components/PricingSection.vue'
import CtaSection from './components/CtaSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

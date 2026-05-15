'use strict'

let currentLocale = localStorage.getItem('afera-locale') || 'fr'

const t = {
  fr: {
    'page.title': 'Afera — Comparaison & Offres | Freemium vs Pro',
    // Nav
    'nav.features':  'Fonctionnalités',
    'nav.contacts':  'Contacts',
    'nav.deals':     'Affaires',
    'nav.marketing': 'Marketing',
    'nav.pedro':     'Pedro AI',
    'nav.pricing':   'Tarifs',
    'nav.compare':   'Comparaison',
    'nav.tryfree':   'Essayer gratuitement ✨',
    // Hero
    'hero.label':    'Tout en un',
    'hero.title':    'Un seul outil.',
    'hero.title2':   'Tout ce qu\'il vous faut.',
    'hero.subtitle': 'Afera combine CRM, email marketing, automatisation, landing pages, comptabilité et IA dans une seule plateforme — avec un accès gratuit permanent à tous les modules.',
    'hero.cta':      'Commencer gratuitement ✨',
    'hero.cta2':     'Voir la comparaison',
    // Pain section
    'pain.label':    'Le problème',
    'pain.title':    'Combien d\'outils utilisez-vous en ce moment ?',
    'pain.subtitle': 'La plupart des PMEs jonglent entre 4 et 7 outils différents. Chaque outil a son abonnement, son interface, ses données en silo. Résultat : perte de temps, d\'argent et d\'efficacité.',
    'pain.arrow':    '→',
    'pain.tools.crm':         'CRM',
    'pain.tools.email':       'Email marketing',
    'pain.tools.funnels':     'Funnels',
    'pain.tools.accounting':  'Comptabilité',
    'pain.tools.automation':  'Automatisation',
    'pain.tools.ai':          'IA',
    'pain.total':    'Avec Afera, c\'est un seul outil pour tout ça.',
    // Comparison section
    'comp.label':    'Comparaison',
    'comp.title':    'Afera face à la concurrence',
    'comp.subtitle': 'Voyez pourquoi Afera est la solution la plus complète pour les PMEs et entrepreneurs.',
    'comp.recommended': '⭐ Recommandé',
    'comp.feat.crm':           'CRM & Gestion des contacts',
    'comp.feat.crm.desc':      'Suivi, historique, niveaux de maturité commerciale',
    'comp.feat.pipeline':      'Pipeline de ventes',
    'comp.feat.pipeline.desc': 'Kanban visuel, suivi des affaires, taux de conversion',
    'comp.feat.email':         'Email marketing & Newsletters',
    'comp.feat.email.desc':    'Création, envoi et analyse de campagnes email',
    'comp.feat.automation':    'Automatisation marketing',
    'comp.feat.automation.desc': 'Workflows automatisés, triggers, séquences email',
    'comp.feat.funnels':       'Funnels & Landing pages',
    'comp.feat.funnels.desc':  'Créateur drag & drop de pages de capture',
    'comp.feat.workspace':     'Espace partagé & Équipe',
    'comp.feat.workspace.desc':'Collaboration, accès multi-utilisateurs',
    'comp.feat.accounting':    'Comptabilité intégrée ✦',
    'comp.feat.accounting.desc':'Revenus, dépenses, liés aux affaires et contacts',
    'comp.feat.ai':            'Assistant IA ✦',
    'comp.feat.ai.desc':       'IA contextuelle, suggestions intelligentes',
    'comp.feat.freemium':      'Accès gratuit permanent',
    'comp.feat.freemium.desc': 'Tous les modules, sans limite de temps',
    'comp.feat.price':         'Tarif de départ',
    // Partial notes
    'comp.note.mailchimp.crm':    'CRM marketing léger',
    'comp.note.notion.crm':       'Via bases de données',
    'comp.note.systeme.crm':      'Fonctionnalités basiques',
    'comp.note.notion.pipeline':  'Via bases de données',
    'comp.note.notion.email':     'Non natif',
    'comp.note.notion.automation':'Via intégrations',
    'comp.note.sf.funnels':       'Pas l\'angle principal',
    'comp.note.notion.funnels':   'Non disponible',
    'comp.note.mailchimp.ws':     'Collaboration limitée',
    'comp.note.systeme.ws':       'Collaboration limitée',
    'comp.note.hubspot.ai':       'Fonctions limitées (premium)',
    'comp.note.sf.ai':            'Einstein AI (premium)',
    'comp.note.notion.ai':        'Notion AI (payant)',
    'comp.note.hubspot.free':     'CRM gratuit, marketing payant',
    'comp.note.mailchimp.free':   '500 contacts, fonctions limitées',
    'comp.note.notion.free':      'Fonctionnalités limitées',
    'comp.note.systeme.free':     '2 000 contacts, fonctions limitées',
    // Prices
    'comp.price.afera':      'Gratuit → CHF 19.99/mois',
    'comp.price.hubspot':    'Gratuit → $880+/mois',
    'comp.price.mailchimp':  'Gratuit → $20+/mois',
    'comp.price.sf':         '$1 250+/mois',
    'comp.price.notion':     'Gratuit → $16+/utilisateur/mois',
    'comp.price.systeme':    'Gratuit → $27/mois',
    // Legend
    'comp.legend.yes':     'Inclus',
    'comp.legend.partial': 'Partiel / limité',
    'comp.legend.no':      'Non disponible',
    // Unique differentiator callout
    'callout.eyebrow':   'La différence Afera',
    'callout.title':     'Seul Afera couvre tout.',
    'callout.subtitle':  'Comptabilité intégrée, Pedro AI inclus, freemium avec tous les modules — des fonctionnalités qu\'aucun concurrent ne propose ensemble.',
    'callout.stat1.val': '6',
    'callout.stat1.lbl': 'modules en un seul outil',
    'callout.stat2.val': '0€',
    'callout.stat2.lbl': 'pour accéder à tous les modules',
    'callout.stat3.val': '1',
    'callout.stat3.lbl': 'abonnement pour tout remplacer',
    // Offer section
    'offer.label':   'Nos offres',
    'offer.title':   'Commencez gratuitement.',
    'offer.title2':  'Évoluez quand vous grandissez.',
    'offer.subtitle':'Tous les modules sont accessibles dès le freemium. La seule différence entre les offres : les volumes.',
    'offer.notice':  '💡 Pas de fonctionnalités verrouillées. En freemium, vous débloquez tout — seuls les volumes augmentent avec le plan Pro.',
    // Freemium plan
    'offer.free.badge':    'Gratuit pour toujours',
    'offer.free.name':     'Freemium',
    'offer.free.price':    '0',
    'offer.free.period':   '/ mois, pour toujours',
    'offer.free.subtitle': 'Accès complet à tous les modules',
    'offer.free.f0':  '🔓 Tous les modules débloqués',
    'offer.free.f1':  'Jusqu\'à 500 contacts',
    'offer.free.f2':  'Jusqu\'à 50 affaires actives',
    'offer.free.f3':  '500 emails par mois',
    'offer.free.f4':  '3 workflows automatisés actifs',
    'offer.free.f5':  '2 landing pages',
    'offer.free.f6':  'Pedro AI inclus',
    'offer.free.f7':  'Support par email',
    'offer.free.cta': 'Commencer gratuitement ✨',
    // Pro plan
    'offer.pro.badge':    '⭐ Plus populaire',
    'offer.pro.name':     'Pro',
    'offer.pro.price':    '19.99',
    'offer.pro.currency': 'CHF',
    'offer.pro.period':   '/ mois',
    'offer.pro.subtitle': 'Volumes augmentés, support prioritaire',
    'offer.pro.f0':  '🔓 Tous les modules débloqués',
    'offer.pro.f1':  'Contacts illimités',
    'offer.pro.f2':  'Affaires illimitées',
    'offer.pro.f3':  '10 000 emails par mois',
    'offer.pro.f4':  'Workflows automatisés illimités',
    'offer.pro.f5':  'Landing pages illimitées',
    'offer.pro.f6':  'Pedro AI inclus',
    'offer.pro.f7':  'Support prioritaire',
    'offer.pro.f8':  'Analytics avancés',
    'offer.pro.cta': 'Passer au Pro',
    'offer.pro.annual': 'Annuel : CHF 199.90 (économisez 17%)',
    // Modules grid
    'modules.label':    'Tous les modules',
    'modules.title':    'Chaque outil dont vous avez besoin.',
    'modules.subtitle': 'Du freemium au Pro, vous accédez à l\'intégralité des 6 modules Afera dès le premier jour.',
    'modules.m1.name': 'Dashboard',
    'modules.m1.desc': 'Vue d\'ensemble de votre activité',
    'modules.m2.name': 'Contacts & CRM',
    'modules.m2.desc': 'Gestion complète de vos contacts',
    'modules.m3.name': 'Affaires & Pipeline',
    'modules.m3.desc': 'Kanban visuel de vos opportunités',
    'modules.m4.name': 'Comptabilité',
    'modules.m4.desc': 'Revenus et dépenses intégrés',
    'modules.m5.name': 'Marketing digital',
    'modules.m5.desc': 'Emails, workflows, landing pages',
    'modules.m6.name': 'Pedro AI',
    'modules.m6.desc': 'Votre assistant IA intégré',
    // CTA
    'cta.emoji':     '🎯',
    'cta.title1':    'Prêt à tout centraliser',
    'cta.title2':    'dans un seul outil ?',
    'cta.subtitle':  'Commencez gratuitement aujourd\'hui. Aucune carte bancaire requise.',
    'cta.primary':   'Commencer gratuitement ✨',
    'cta.secondary': 'Voir toutes les fonctionnalités',
    // Footer
    'footer.tagline':   'Le CRM qui ne vous donne pas envie de pleurer.',
    'footer.copyright': '© 2025 Afera. Tous droits réservés.',
    'footer.privacy':   'Politique de confidentialité',
    'footer.terms':     'Conditions d\'utilisation',
    'footer.cookies':   'Politique de cookies',
    'footer.groups.product': 'Produit',
    'footer.groups.company': 'Entreprise',
    'footer.groups.support': 'Support',
    'footer.links.dashboard':       'Dashboard',
    'footer.links.contacts':        'Contacts',
    'footer.links.deals':           'Affaires',
    'footer.links.accounting':      'Comptabilité',
    'footer.links.digitalMarketing':'Marketing digital',
    'footer.links.pedro':           'Pedro AI',
    'footer.links.about':           'À propos',
    'footer.links.blog':            'Blog',
    'footer.links.changelog':       'Changelog',
    'footer.links.careers':         'Recrutement',
    'footer.links.helpCenter':      'Centre d\'aide',
    'footer.links.contactUs':       'Nous contacter',
    'footer.links.status':          'Statut',
    'footer.links.pricing':         'Tarifs',
    'footer.links.compare':         'Comparaison',
  },

  en: {
    'page.title': 'Afera — Comparison & Offers | Freemium vs Pro',
    // Nav
    'nav.features':  'Features',
    'nav.contacts':  'Contacts',
    'nav.deals':     'Deals',
    'nav.marketing': 'Marketing',
    'nav.pedro':     'Pedro AI',
    'nav.pricing':   'Pricing',
    'nav.compare':   'Compare',
    'nav.tryfree':   'Try for free ✨',
    // Hero
    'hero.label':    'All-in-one',
    'hero.title':    'One tool.',
    'hero.title2':   'Everything you need.',
    'hero.subtitle': 'Afera combines CRM, email marketing, automation, landing pages, accounting, and AI in one platform — with a free forever tier that unlocks all modules.',
    'hero.cta':      'Start for free ✨',
    'hero.cta2':     'See the comparison',
    // Pain section
    'pain.label':    'The problem',
    'pain.title':    'How many tools are you juggling right now?',
    'pain.subtitle': 'Most SMBs use 4 to 7 different tools to run their business. Each has its subscription, its interface, its siloed data. The result: lost time, money, and efficiency.',
    'pain.arrow':    '→',
    'pain.tools.crm':         'CRM',
    'pain.tools.email':       'Email marketing',
    'pain.tools.funnels':     'Funnels',
    'pain.tools.accounting':  'Accounting',
    'pain.tools.automation':  'Automation',
    'pain.tools.ai':          'AI',
    'pain.total':    'With Afera, that\'s one single tool for all of this.',
    // Comparison section
    'comp.label':    'Comparison',
    'comp.title':    'Afera vs the competition',
    'comp.subtitle': 'See why Afera is the most complete solution for SMBs and entrepreneurs.',
    'comp.recommended': '⭐ Recommended',
    'comp.feat.crm':           'CRM & Contact Management',
    'comp.feat.crm.desc':      'Tracking, history, sales readiness levels',
    'comp.feat.pipeline':      'Sales Pipeline',
    'comp.feat.pipeline.desc': 'Visual Kanban, deal tracking, conversion rates',
    'comp.feat.email':         'Email Marketing & Newsletters',
    'comp.feat.email.desc':    'Create, send and track email campaigns',
    'comp.feat.automation':    'Marketing Automation',
    'comp.feat.automation.desc': 'Automated workflows, triggers, email sequences',
    'comp.feat.funnels':       'Funnels & Landing Pages',
    'comp.feat.funnels.desc':  'Drag & drop page builder',
    'comp.feat.workspace':     'Shared Workspace & Team',
    'comp.feat.workspace.desc':'Collaboration, multi-user access',
    'comp.feat.accounting':    'Built-in Accounting ✦',
    'comp.feat.accounting.desc':'Revenue, expenses, linked to deals & contacts',
    'comp.feat.ai':            'AI Assistant ✦',
    'comp.feat.ai.desc':       'Contextual AI, smart suggestions',
    'comp.feat.freemium':      'Free Forever Tier',
    'comp.feat.freemium.desc': 'All modules, no time limit',
    'comp.feat.price':         'Starting Price',
    // Partial notes
    'comp.note.mailchimp.crm':    'Marketing CRM only',
    'comp.note.notion.crm':       'Via custom databases',
    'comp.note.systeme.crm':      'Basic features only',
    'comp.note.notion.pipeline':  'Via custom databases',
    'comp.note.notion.email':     'Not native',
    'comp.note.notion.automation':'Via integrations only',
    'comp.note.sf.funnels':       'Not the main focus',
    'comp.note.notion.funnels':   'Not available',
    'comp.note.mailchimp.ws':     'Limited collaboration',
    'comp.note.systeme.ws':       'Limited collaboration',
    'comp.note.hubspot.ai':       'Limited (premium plans)',
    'comp.note.sf.ai':            'Einstein AI (premium)',
    'comp.note.notion.ai':        'Notion AI (paid add-on)',
    'comp.note.hubspot.free':     'Free CRM, marketing paid',
    'comp.note.mailchimp.free':   '500 contacts, limited features',
    'comp.note.notion.free':      'Limited features',
    'comp.note.systeme.free':     '2,000 contacts, limited features',
    // Prices
    'comp.price.afera':     'Free → CHF 19.99/mo',
    'comp.price.hubspot':   'Free → $880+/mo',
    'comp.price.mailchimp': 'Free → $20+/mo',
    'comp.price.sf':        '$1,250+/mo',
    'comp.price.notion':    'Free → $16+/user/mo',
    'comp.price.systeme':   'Free → $27/mo',
    // Legend
    'comp.legend.yes':     'Included',
    'comp.legend.partial': 'Partial / limited',
    'comp.legend.no':      'Not available',
    // Callout
    'callout.eyebrow':   'The Afera difference',
    'callout.title':     'Only Afera covers it all.',
    'callout.subtitle':  'Built-in accounting, Pedro AI included, freemium with all modules — features no competitor offers together.',
    'callout.stat1.val': '6',
    'callout.stat1.lbl': 'modules in one tool',
    'callout.stat2.val': '$0',
    'callout.stat2.lbl': 'to access all modules',
    'callout.stat3.val': '1',
    'callout.stat3.lbl': 'subscription to replace everything',
    // Offer section
    'offer.label':   'Plans',
    'offer.title':   'Start free.',
    'offer.title2':  'Upgrade when you grow.',
    'offer.subtitle':'All modules are available on the free tier. The only difference between plans: volume.',
    'offer.notice':  '💡 No features locked behind a paywall. In freemium, you unlock everything — only volumes increase with the Pro plan.',
    // Freemium plan
    'offer.free.badge':    'Free forever',
    'offer.free.name':     'Freemium',
    'offer.free.price':    '0',
    'offer.free.period':   '/ month, forever',
    'offer.free.subtitle': 'Full access to all modules',
    'offer.free.f0':  '🔓 All modules unlocked',
    'offer.free.f1':  'Up to 500 contacts',
    'offer.free.f2':  'Up to 50 active deals',
    'offer.free.f3':  '500 emails per month',
    'offer.free.f4':  '3 active automated workflows',
    'offer.free.f5':  '2 landing pages',
    'offer.free.f6':  'Pedro AI included',
    'offer.free.f7':  'Email support',
    'offer.free.cta': 'Start for free ✨',
    // Pro plan
    'offer.pro.badge':    '⭐ Most popular',
    'offer.pro.name':     'Pro',
    'offer.pro.price':    '19.99',
    'offer.pro.currency': 'CHF',
    'offer.pro.period':   '/ month',
    'offer.pro.subtitle': 'Increased volumes, priority support',
    'offer.pro.f0':  '🔓 All modules unlocked',
    'offer.pro.f1':  'Unlimited contacts',
    'offer.pro.f2':  'Unlimited deals',
    'offer.pro.f3':  '10,000 emails per month',
    'offer.pro.f4':  'Unlimited automated workflows',
    'offer.pro.f5':  'Unlimited landing pages',
    'offer.pro.f6':  'Pedro AI included',
    'offer.pro.f7':  'Priority support',
    'offer.pro.f8':  'Advanced analytics',
    'offer.pro.cta': 'Go Pro',
    'offer.pro.annual': 'Annual: CHF 199.90 (save 17%)',
    // Modules grid
    'modules.label':    'All modules',
    'modules.title':    'Every tool you need.',
    'modules.subtitle': 'From freemium to Pro, you get access to all 6 Afera modules from day one.',
    'modules.m1.name': 'Dashboard',
    'modules.m1.desc': 'Full business activity overview',
    'modules.m2.name': 'Contacts & CRM',
    'modules.m2.desc': 'Complete contact management',
    'modules.m3.name': 'Deals & Pipeline',
    'modules.m3.desc': 'Visual Kanban for your opportunities',
    'modules.m4.name': 'Accounting',
    'modules.m4.desc': 'Revenue and expenses built-in',
    'modules.m5.name': 'Digital Marketing',
    'modules.m5.desc': 'Emails, workflows, landing pages',
    'modules.m6.name': 'Pedro AI',
    'modules.m6.desc': 'Your built-in AI assistant',
    // CTA
    'cta.emoji':     '🎯',
    'cta.title1':    'Ready to centralize everything',
    'cta.title2':    'in one single tool?',
    'cta.subtitle':  'Start for free today. No credit card required.',
    'cta.primary':   'Start for free ✨',
    'cta.secondary': 'See all features',
    // Footer
    'footer.tagline':   'The CRM that doesn\'t make you want to cry.',
    'footer.copyright': '© 2025 Afera. All rights reserved.',
    'footer.privacy':   'Privacy Policy',
    'footer.terms':     'Terms of Service',
    'footer.cookies':   'Cookie Policy',
    'footer.groups.product': 'Product',
    'footer.groups.company': 'Company',
    'footer.groups.support': 'Support',
    'footer.links.dashboard':       'Dashboard',
    'footer.links.contacts':        'Contacts',
    'footer.links.deals':           'Deals',
    'footer.links.accounting':      'Accounting',
    'footer.links.digitalMarketing':'Digital Marketing',
    'footer.links.pedro':           'Pedro AI',
    'footer.links.about':           'About',
    'footer.links.blog':            'Blog',
    'footer.links.changelog':       'Changelog',
    'footer.links.careers':         'Careers',
    'footer.links.helpCenter':      'Help Center',
    'footer.links.contactUs':       'Contact Us',
    'footer.links.status':          'Status',
    'footer.links.pricing':         'Pricing',
    'footer.links.compare':         'Compare',
  }
}

function tr(key) {
  return (t[currentLocale] || t.fr)[key] || (t.fr[key] || key)
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n')
    if (key) el.textContent = tr(key)
  })
  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    const raw = el.getAttribute('data-i18n-attr')
    raw.split(';').forEach(pair => {
      const [attr, key] = pair.split(':')
      if (attr && key) el.setAttribute(attr.trim(), tr(key.trim()))
    })
  })
  document.title = tr('page.title')
  document.documentElement.lang = currentLocale
  document.querySelectorAll('.lang-btn, .footer-lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLocale)
  })
}

function setLocale(lang) {
  currentLocale = lang
  localStorage.setItem('afera-locale', lang)
  applyTranslations()
}

function initNavbar() {
  const navbar = document.querySelector('.navbar')
  if (!navbar) return
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40)
  }, { passive: true })
}

function initHamburger() {
  const btn   = document.querySelector('.hamburger')
  const links = document.querySelector('.nav-links')
  if (!btn || !links) return
  btn.addEventListener('click', () => links.classList.toggle('open'))
  document.addEventListener('click', e => {
    if (!btn.contains(e.target) && !links.contains(e.target)) links.classList.remove('open')
  })
}

function initLangSwitcher() {
  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.addEventListener('click', () => setLocale(btn.dataset.lang))
  })
}

function initScrollAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible') })
  }, { threshold: 0.1 })
  document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el))
}

function initFaq() {
  document.querySelectorAll('.faq-q').forEach(q => {
    q.addEventListener('click', () => {
      const item   = q.closest('.faq-item')
      const isOpen = item.classList.contains('open')
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'))
      if (!isOpen) item.classList.add('open')
    })
  })
}

document.addEventListener('DOMContentLoaded', () => {
  applyTranslations()
  initNavbar()
  initHamburger()
  initLangSwitcher()
  initScrollAnimations()
  initFaq()
})

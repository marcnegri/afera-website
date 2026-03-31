// ─── Translations ────────────────────────────────────────────────────────────
const translations = {
  en: {
    nav: {
      features: "Features", contacts: "Contacts", deals: "Deals",
      marketing: "Marketing", pricing: "Pricing",
      login: "Log in", tryfree: "Try for free ✨", menu: "Menu"
    },
    hero: {
      badge: "Now with Digital Marketing built in",
      title1: "Your contacts called.",
      title2: "They want a", titleHighlight: "better CRM", title3: ".",
      subtitle: "Afera brings contacts, deals, accounting, and marketing into one place — so you can stop juggling a dozen apps and actually close deals.",
      subtitleSmall: "No PhD in spreadsheets required.",
      startFree: "Start for free ✨", watchDemo: "Watch demo ▶",
      stat1Value: "∞", stat1Label: "Contacts",
      stat2Value: "5", stat2Label: "Tools in one",
      stat3Value: "0", stat3Label: "Excel files needed",
      stat4Value: "😌", stat4Label: "Stress level",
      screenshotAlt: "Afera Dashboard"
    },
    features: {
      label: "Everything in one place",
      title: "Stop switching tabs.\nStart closing deals.",
      subtitle: "Afera packs a full sales stack into a single, surprisingly pleasant app. Like Marie Kondo, but for your business tools.",
      learnMore: "Learn more",
      dashboard: { title: "Dashboard", desc: "Revenue, contacts, open deals, net balance — all at a glance. Start every morning knowing exactly how you're doing." },
      contacts:  { title: "Contacts",  desc: "Your entire network, organized. Track readiness, assign deals, and know when to follow up before they ghost you." },
      deals:     { title: "Deals",     desc: "Pipeline management with a Kanban board and charts. Watch deals move from \"maybe\" to \"money\". Celebrate accordingly." },
      accounting:{ title: "Accounting",desc: "Revenue, expenses, taxes, documents — tracked cleanly in CHF (or your currency). No more shoebox of receipts." },
      marketing: { title: "Digital Marketing", desc: "Email campaigns, landing pages, social posts, and automation workflows. Reach your leads professionally (not spammily)." }
    },
    contacts: {
      label: "👥 Contacts",
      title1: "Your Rolodex,", title2: "but from this decade.",
      subtitle: "Stop losing track of who's who. Afera keeps your entire network organized, searchable, and — most importantly — not in a pile on your desk.",
      readinessLabel: "Sales Readiness Tracker", readinessHint: "Know exactly who to call today",
      badges: { cold: "🥶 Cold", exploring: "🔍 Exploring", interested: "👀 Interested", evaluating: "⚖️ Evaluating", ready: "✅ Ready", buyer: "💰 Buyer" },
      features: {
        readiness: { title: "Sales readiness levels", desc: "Cold → Exploring → Interested → Evaluating → Ready → Buyer. Because \"maybe someday\" is not a pipeline stage." },
        activity:  { title: "Activity tracking",      desc: "Log calls, emails, meetings. Know the last time you actually talked to someone." },
        deals:     { title: "Deal association",        desc: "Link contacts to deals automatically. See the full picture in one click." },
        export:    { title: "Bulk operations & CSV export", desc: "Clean up your list, export to spreadsheet, send to your accountant. Done." }
      },
      floatSearch: "Smart Search", floatSearchSub: "Find anyone in seconds",
      floatExport: "CSV Export", floatExportSub: "Your data, your way"
    },
    deals: {
      label: "🤝 Deals", title1: "Pipeline dreams.", title2: "Actual revenue.",
      subtitle: "Visualize every deal from first contact to signed contract. Kanban board, charts, conversion rates — everything you need to close more and guess less.",
      kanban: { pending: "⏳ Pending", signed: "✅ Signed", lost: "❌ Lost" },
      stats: { kanban: "Kanban", kanbanLabel: "Visual Board", charts: "Charts", chartsLabel: "Trend Analysis", rates: "Rates", ratesLabel: "Conversion Tracking" },
      features: [
        "Drag-and-drop Kanban board (Pending → Signed → Lost)",
        "Monthly deal stats and trend charts",
        "Year / month filtering",
        "Deal value in CHF (or your currency)",
        "Bulk deal operations",
        "Link deals to contacts automatically"
      ]
    },
    accounting: {
      label: "💰 Accounting", title1: "Numbers don't lie.", title2: "Spreadsheets do.",
      subtitle: "Track every franc in, every expense out. Attach receipts, apply the right tax rate, and hand your accountant something they'll actually smile at.",
      cards: {
        revenue:  { title: "Revenue tracking",       desc: "Services, products, consulting, licensing, subscriptions — all categorized and summed up beautifully." },
        expenses: { title: "Expense management",     desc: "Salaries, software, marketing, travel... yes, even that 'team lunch' counts." },
        docs:     { title: "Document attachments",   desc: "Attach PDFs, invoices, receipts directly to entries. No more lost paperwork." },
        linked:   { title: "Linked to deals & contacts", desc: "Every revenue entry can trace back to a deal or contact. Accountability, built in." },
        balance:  { title: "Net balance at a glance",desc: "Revenue minus expenses, by month or year. The number that matters, front and center." },
        export:   { title: "CSV export",             desc: "Export everything for your accountant in one click. They'll send you holiday cards." }
      },
      taxLabel: "🧾 Supported Tax Rates",
      taxNote: "Because every country does taxes differently. Ours is just more fun."
    },
    marketing: {
      label: "🚀 Digital Marketing",
      title1: "Reach your leads.", title2: "Professionally. (We promise.)",
      subtitle: "Email campaigns, landing pages, social posts, and automation workflows — all inside Afera. Your marketing agency will be impressed. Or jealous.",
      tabs: { newsletters: "✉️ Newsletters", landing: "🏠 Landing Pages", social: "📱 Social Media", email: "🎨 Email Builder", workflows: "⚙️ Workflows" },
      details: {
        newsletters: {
          title: "Email Campaigns that actually get opened",
          desc: "Send targeted newsletters to your contacts. Track opens, manage campaigns, and stop wondering if anyone is reading your emails. (Spoiler: they are.)",
          bullets: ["Create and manage newsletter campaigns", "Target specific contact segments", "Professional templates ready to go", "Track campaign performance"]
        },
        landing: {
          title: "Landing Pages that convert visitors into leads",
          desc: "Build drag-and-drop landing pages without touching a single line of code. Your designer friend will still be impressed (don't tell them how easy it was).",
          bullets: ["Drag-and-drop page builder", "Full-screen editor experience", "Multiple pages, all in one place", "Share with a single link"]
        },
        social: {
          title: "Social Media posts, written and scheduled",
          desc: "Plan your social content across platforms. Write posts, schedule them, and actually maintain a consistent online presence for once.",
          bullets: ["Multi-platform post management", "Full-screen post editor", "Content calendar view", "No more posting at 2am"]
        },
        email: {
          title: "Drag-and-drop Email Builder",
          desc: "Create beautiful email templates without crying. Headers, heroes, buttons, columns, product blocks — drag them in, style them up, send them out.",
          bullets: ["12+ block types (Header, Hero, Text, Image, Button…)", "Premade templates: Newsletter, Promotion, Welcome", "Dynamic content: {{first_name}}, {{company}}…", "Preview before you send. Obviously."]
        },
        workflows: {
          title: "Automation that works while you sleep",
          desc: "Set up email sequences and qualification workflows that run automatically. It's like having a salesperson who never takes breaks (or coffee).",
          bullets: ["Email automation workflows", "Lead qualification sequences", "Trigger-based actions", "Visual workflow builder"]
        }
      }
    },
    pricing: {
      label: "💎 Pricing", title1: "Simple pricing.", title2: "No gotchas. No drama.",
      subtitle: "Try everything free for 30 days. No credit card required. Upgrade when you're ready — or don't, we're not your boss.",
      popular: "⭐ Most Popular", save: "Save 17%",
      note: "🔒 No credit card required to start · ✅ Cancel anytime · 🇨🇭 Prices in CHF",
      plans: {
        trial:   { name: "Free Trial",  period: "/30 days", desc: "Full access for 30 days. No credit card. No strings attached.", cta: "Start for free" },
        monthly: { name: "Monthly",     period: "/mo",      desc: "Everything, unlimited. Pay month to month, cancel whenever.",  cta: "Subscribe",      priceSub: null },
        annual:  { name: "Annual",      period: "/yr",      desc: "Same as Monthly, but smarter. Save CHF 39.98 per year.",       cta: "Subscribe",      priceSub: "(CHF 16.66/mo)" }
      },
      features: {
        trial30days: "30-day free trial", allFeatures: "All features included",
        contacts100: "Up to 100 contacts", deals50: "Up to 50 deals",
        emails100: "100 emails/month", emailSupport: "Email support",
        contactsUnlimited: "Unlimited contacts", dealsUnlimited: "Unlimited deals",
        emails1000: "1,000 emails/month", workflows: "Workflow automation",
        newsletters: "Newsletter campaigns", landingPages: "Landing pages",
        prioritySupport: "Priority support", advancedAnalytics: "Advanced analytics",
        everythingMonthly: "Everything in Monthly", save17: "Save 17% (CHF 39.98/yr)"
      }
    },
    cta: {
      title1: "Ready to stop using", title2: "17 different apps?",
      desc: "Join the businesses that stopped juggling spreadsheets and started actually selling. Your future self will thank you. So will your accountant.",
      startFree: "Start for free — no card needed ✨", seeFeatures: "See all features",
      spBold: "Loved by founders and teams", spText: "who've got better things to do than fight with their CRM"
    },
    footer: {
      tagline: "The CRM that doesn't make you want to cry.",
      groups: { product: "Product", company: "Company", support: "Support" },
      links: {
        dashboard: "Dashboard", contacts: "Contacts", deals: "Deals",
        accounting: "Accounting", digitalMarketing: "Digital Marketing",
        about: "About", blog: "Blog", changelog: "Changelog", careers: "Careers",
        helpCenter: "Help Center", contactUs: "Contact Us", status: "Status", pricing: "Pricing"
      },
      copyright: "© {year} Afera. Made with ☕ and possibly too much determination.",
      privacy: "Privacy Policy", terms: "Terms of Service", cookies: "Cookie Policy"
    }
  },

  fr: {
    nav: {
      features: "Fonctionnalités", contacts: "Contacts", deals: "Affaires",
      marketing: "Marketing", pricing: "Tarifs",
      login: "Connexion", tryfree: "Essai gratuit ✨", menu: "Menu"
    },
    hero: {
      badge: "Maintenant avec le Marketing Digital intégré",
      title1: "Vos contacts ont appelé.",
      title2: "Ils veulent un", titleHighlight: "meilleur CRM", title3: ".",
      subtitle: "Afera regroupe contacts, affaires, comptabilité et marketing dans un seul endroit — pour que vous puissiez arrêter de jongler entre mille applis et enfin conclure des deals.",
      subtitleSmall: "Aucun doctorat en tableurs requis.",
      startFree: "Commencer gratuitement ✨", watchDemo: "Voir la démo ▶",
      stat1Value: "∞", stat1Label: "Contacts",
      stat2Value: "5", stat2Label: "Outils en un",
      stat3Value: "0", stat3Label: "Fichiers Excel nécessaires",
      stat4Value: "😌", stat4Label: "Niveau de stress",
      screenshotAlt: "Tableau de bord Afera"
    },
    features: {
      label: "Tout en un seul endroit",
      title: "Arrêtez de changer d'onglet.\nCommencez à conclure.",
      subtitle: "Afera regroupe tout un arsenal commercial dans une seule appli, étonnamment agréable. Comme Marie Kondo, mais pour vos outils de travail.",
      learnMore: "En savoir plus",
      dashboard: { title: "Tableau de bord", desc: "Revenus, contacts, affaires en cours, solde net — tout d'un coup d'œil. Commencez chaque matin en sachant exactement où vous en êtes." },
      contacts:  { title: "Contacts",         desc: "Tout votre réseau, organisé. Suivez la maturité, assignez des affaires, et sachez quand relancer avant qu'ils vous oublient." },
      deals:     { title: "Affaires",          desc: "Gestion du pipeline avec un tableau Kanban et des graphiques. Regardez les affaires passer de « peut-être » à « signé »." },
      accounting:{ title: "Comptabilité",      desc: "Revenus, dépenses, taxes, documents — tout tracé proprement en CHF (ou votre devise). Fini la boîte à chaussures de reçus." },
      marketing: { title: "Marketing Digital", desc: "Campagnes email, pages d'atterrissage, posts sociaux et automatisations. Touchez vos leads de façon professionnelle (pas comme un spammeur)." }
    },
    contacts: {
      label: "👥 Contacts",
      title1: "Votre Rolodex,", title2: "mais de ce siècle.",
      subtitle: "Arrêtez de perdre le fil de qui est qui. Afera garde votre réseau organisé, consultable, et — surtout — pas en pile sur votre bureau.",
      readinessLabel: "Suivi de maturité commerciale", readinessHint: "Sachez exactement qui appeler aujourd'hui",
      badges: { cold: "🥶 Froid", exploring: "🔍 En exploration", interested: "👀 Intéressé", evaluating: "⚖️ En évaluation", ready: "✅ Prêt", buyer: "💰 Acheteur" },
      features: {
        readiness: { title: "Niveaux de maturité commerciale", desc: "Froid → Exploration → Intéressé → Évaluation → Prêt → Acheteur. Parce que « peut-être un jour » n'est pas une étape de pipeline." },
        activity:  { title: "Suivi d'activité",               desc: "Enregistrez appels, emails, réunions. Sachez la dernière fois que vous avez vraiment parlé à quelqu'un." },
        deals:     { title: "Association aux affaires",        desc: "Liez automatiquement les contacts aux affaires. Voyez la situation complète en un clic." },
        export:    { title: "Opérations en masse & export CSV", desc: "Nettoyez votre liste, exportez en tableur, envoyez à votre comptable. Voilà." }
      },
      floatSearch: "Recherche intelligente", floatSearchSub: "Trouvez n'importe qui en secondes",
      floatExport: "Export CSV", floatExportSub: "Vos données, à votre façon"
    },
    deals: {
      label: "🤝 Affaires", title1: "Des rêves de pipeline.", title2: "Des vrais revenus.",
      subtitle: "Visualisez chaque affaire du premier contact au contrat signé. Kanban, graphiques, taux de conversion — tout ce qu'il faut pour conclure plus et deviner moins.",
      kanban: { pending: "⏳ En attente", signed: "✅ Signé", lost: "❌ Perdu" },
      stats: { kanban: "Kanban", kanbanLabel: "Tableau visuel", charts: "Graphiques", chartsLabel: "Analyse de tendances", rates: "Taux", ratesLabel: "Suivi de conversion" },
      features: [
        "Tableau Kanban drag-and-drop (En attente → Signé → Perdu)",
        "Statistiques mensuelles et graphiques de tendance",
        "Filtrage par année / mois",
        "Valeur des affaires en CHF (ou votre devise)",
        "Opérations en masse sur les affaires",
        "Lier les affaires aux contacts automatiquement"
      ]
    },
    accounting: {
      label: "💰 Comptabilité", title1: "Les chiffres ne mentent pas.", title2: "Les tableurs, si.",
      subtitle: "Suivez chaque franc entrant et sortant. Joignez des reçus, appliquez le bon taux de TVA, et donnez à votre comptable quelque chose qui le fera sourire.",
      cards: {
        revenue:  { title: "Suivi des revenus",    desc: "Services, produits, conseil, licences, abonnements — tout catégorisé et totalisé élégamment." },
        expenses: { title: "Gestion des dépenses", desc: "Salaires, logiciels, marketing, voyages... oui, même ce « déjeuner d'équipe » compte." },
        docs:     { title: "Pièces jointes",        desc: "Joignez PDFs, factures, reçus directement aux entrées. Fini les documents perdus." },
        linked:   { title: "Lié aux affaires & contacts", desc: "Chaque entrée de revenu peut être rattachée à une affaire ou un contact. La traçabilité, intégrée." },
        balance:  { title: "Solde net en un coup d'œil", desc: "Revenus moins dépenses, par mois ou par an. Le chiffre qui compte, en avant-plan." },
        export:   { title: "Export CSV", desc: "Exportez tout pour votre comptable en un clic. Il vous enverra une carte de Noël." }
      },
      taxLabel: "🧾 Taux de TVA supportés",
      taxNote: "Parce que chaque pays fait les impôts à sa façon. Le nôtre est juste plus fun."
    },
    marketing: {
      label: "🚀 Marketing Digital",
      title1: "Touchez vos leads.", title2: "Professionnellement. (Promis.)",
      subtitle: "Campagnes email, pages d'atterrissage, posts sociaux et automatisations — tout dans Afera. Votre agence marketing sera impressionnée. Ou jalouse.",
      tabs: { newsletters: "✉️ Newsletters", landing: "🏠 Pages d'atterrissage", social: "📱 Réseaux sociaux", email: "🎨 Éditeur d'emails", workflows: "⚙️ Automatisations" },
      details: {
        newsletters: {
          title: "Des campagnes email qui s'ouvrent vraiment",
          desc: "Envoyez des newsletters ciblées à vos contacts. Suivez les ouvertures, gérez les campagnes, et arrêtez de vous demander si quelqu'un lit vos emails. (Spoiler : oui.)",
          bullets: ["Créer et gérer des campagnes newsletters", "Cibler des segments de contacts spécifiques", "Modèles professionnels prêts à l'emploi", "Suivre les performances des campagnes"]
        },
        landing: {
          title: "Des pages d'atterrissage qui convertissent",
          desc: "Créez des pages drag-and-drop sans toucher une seule ligne de code. Votre ami designer sera quand même impressionné (ne lui dites pas que c'était facile).",
          bullets: ["Constructeur de pages drag-and-drop", "Éditeur plein écran", "Plusieurs pages, au même endroit", "Partager avec un simple lien"]
        },
        social: {
          title: "Posts réseaux sociaux, rédigés et planifiés",
          desc: "Planifiez votre contenu sur plusieurs plateformes. Rédigez, programmez, et maintenez enfin une présence en ligne cohérente.",
          bullets: ["Gestion multi-plateforme", "Éditeur de posts plein écran", "Vue calendrier de contenu", "Fini les posts à 2h du matin"]
        },
        email: {
          title: "Éditeur d'emails drag-and-drop",
          desc: "Créez de beaux modèles d'emails sans pleurer. En-têtes, heroes, boutons, colonnes, blocs produits — glissez, stylisez, envoyez.",
          bullets: ["12+ types de blocs (En-tête, Hero, Texte, Image, Bouton…)", "Modèles prêts : Newsletter, Promotion, Bienvenue", "Contenu dynamique : {{prenom}}, {{entreprise}}…", "Prévisualisez avant d'envoyer. Évidemment."]
        },
        workflows: {
          title: "Des automatisations qui travaillent pendant que vous dormez",
          desc: "Configurez des séquences d'emails et des workflows de qualification qui tournent automatiquement. C'est comme avoir un commercial qui ne prend jamais de pause (ni de café).",
          bullets: ["Workflows d'automatisation email", "Séquences de qualification des leads", "Actions déclenchées automatiquement", "Constructeur de workflows visuel"]
        }
      }
    },
    pricing: {
      label: "💎 Tarifs", title1: "Des tarifs simples.", title2: "Pas de surprises. Pas de drama.",
      subtitle: "Testez tout gratuitement pendant 30 jours. Sans carte de crédit. Passez à la formule supérieure quand vous voulez — ou pas, c'est vous le patron.",
      popular: "⭐ Le plus populaire", save: "Économisez 17%",
      note: "🔒 Aucune carte de crédit requise · ✅ Annulation à tout moment · 🇨🇭 Tarifs en CHF",
      plans: {
        trial:   { name: "Essai gratuit",      period: "/30 jours", desc: "Accès complet pendant 30 jours. Sans carte de crédit. Sans engagement.", cta: "Commencer gratuitement" },
        monthly: { name: "Formule mensuelle",  period: "/mois",     desc: "Tout, sans limites. Payez mois par mois, annulez quand vous voulez.",  cta: "Souscrire", priceSub: null },
        annual:  { name: "Formule annuelle",   period: "/an",       desc: "Identique au mensuel, mais en plus malin. Économisez CHF 39.98 par an.", cta: "Souscrire", priceSub: "(CHF 16.66/mois)" }
      },
      features: {
        trial30days: "Période d'essai de 30 jours", allFeatures: "Toutes les fonctionnalités incluses",
        contacts100: "Jusqu'à 100 contacts", deals50: "Jusqu'à 50 affaires",
        emails100: "100 e-mails/mois", emailSupport: "Support par e-mail",
        contactsUnlimited: "Contacts illimités", dealsUnlimited: "Affaires illimitées",
        emails1000: "1 000 e-mails/mois", workflows: "Automatisation des workflows",
        newsletters: "Campagnes de newsletter", landingPages: "Pages de destination",
        prioritySupport: "Support prioritaire", advancedAnalytics: "Analyses avancées",
        everythingMonthly: "Tout ce qu'inclut Mensuel", save17: "Économisez 17% (CHF 39.98/an)"
      }
    },
    cta: {
      title1: "Prêt à arrêter d'utiliser", title2: "17 applis différentes ?",
      desc: "Rejoignez les entreprises qui ont arrêté de jongler avec les tableurs et ont commencé à vraiment vendre. Votre futur vous vous remerciera. Votre comptable aussi.",
      startFree: "Commencer gratuitement — sans carte ✨", seeFeatures: "Voir toutes les fonctionnalités",
      spBold: "Adoré par les fondateurs et leurs équipes", spText: "qui ont mieux à faire que se battre avec leur CRM"
    },
    footer: {
      tagline: "Le CRM qui ne vous donne pas envie de pleurer.",
      groups: { product: "Produit", company: "Entreprise", support: "Support" },
      links: {
        dashboard: "Tableau de bord", contacts: "Contacts", deals: "Affaires",
        accounting: "Comptabilité", digitalMarketing: "Marketing Digital",
        about: "À propos", blog: "Blog", changelog: "Nouveautés", careers: "Carrières",
        helpCenter: "Centre d'aide", contactUs: "Nous contacter", status: "Statut", pricing: "Tarifs"
      },
      copyright: "© {year} Afera. Fait avec ☕ et peut-être un peu trop de détermination.",
      privacy: "Politique de confidentialité", terms: "Conditions d'utilisation", cookies: "Politique des cookies"
    }
  }
}

// ─── i18n core ───────────────────────────────────────────────────────────────
function detectLocale() {
  const saved = localStorage.getItem('afera-locale')
  if (saved === 'en' || saved === 'fr') return saved
  const lang = navigator.language || navigator.languages?.[0] || 'en'
  return lang.toLowerCase().startsWith('fr') ? 'fr' : 'en'
}

let currentLocale = detectLocale()

function t(key) {
  const parts = key.split('.')
  let val = translations[currentLocale]
  for (const p of parts) {
    if (val == null) return key
    val = val[p]
  }
  return (val != null && typeof val !== 'object') ? String(val) : key
}

function applyTranslations() {
  // Simple text
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const raw = t(el.dataset.i18n)
    el.textContent = raw.replace('{year}', new Date().getFullYear())
  })
  // Attributes
  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    const [attr, key] = el.dataset.i18nAttr.split(':')
    el.setAttribute(attr, t(key))
  })
  // Lang button active states
  document.querySelectorAll('.lang-btn, .footer-lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLocale)
  })
  // Marketing tabs content
  renderActiveTab()
  // Features title (preserves line break)
  const ftitle = document.getElementById('features-title')
  if (ftitle) ftitle.innerHTML = t('features.title').replace('\n', '<br>')
}

function setLocale(lang) {
  currentLocale = lang
  localStorage.setItem('afera-locale', lang)
  applyTranslations()
}

// ─── Marketing tabs ───────────────────────────────────────────────────────────
const tabScreenshots = { newsletters: 'screenshots/newsletter.png' }
const tabHasVideo    = { landing: true, email: true }
const tabIcons       = { newsletters: '✉️', landing: '🏠', social: '📱', email: '🎨', workflows: '⚙️' }
let activeTab = 'newsletters'

function renderActiveTab() {
  const tab = activeTab
  const d = translations[currentLocale].marketing.details[tab]

  // Visual
  const visual = document.getElementById('tab-visual')
  if (tabScreenshots[tab]) {
    visual.innerHTML = `<img src="${tabScreenshots[tab]}" alt="${t('marketing.tabs.' + tab)}" class="section-screenshot">`
  } else if (tabHasVideo[tab]) {
    visual.innerHTML = `
      <div class="video-placeholder" style="height:420px">
        <div class="play-button">▶</div>
        <div class="video-label">${t('marketing.tabs.' + tab)}</div>
        <div class="video-sublabel">Replace with feature walkthrough video · recommended 1280×720</div>
      </div>`
  } else {
    visual.innerHTML = `
      <div class="screenshot-placeholder" style="height:420px">
        <div class="placeholder-icon">${tabIcons[tab]}</div>
        <div class="placeholder-text">${t('marketing.tabs.' + tab)} Screenshot</div>
        <div class="placeholder-subtext">Replace with actual screenshot · recommended 900×700px</div>
      </div>`
  }

  // Info
  document.getElementById('tab-title').textContent = d.title
  document.getElementById('tab-desc').textContent  = d.desc
  const ul = document.getElementById('tab-bullets')
  ul.innerHTML = d.bullets.map(b =>
    `<li><span class="bullet-check">✓</span>${b}</li>`
  ).join('')

  // Tab buttons active state
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tab)
  })
}

// ─── DOM ready ────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Apply initial translations
  applyTranslations()

  // Navbar scroll
  const navbar = document.querySelector('.navbar')
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20)
  }, { passive: true })

  // Hamburger
  const hamburger = document.querySelector('.hamburger')
  const navLinks  = document.querySelector('.nav-links')
  hamburger.addEventListener('click', () => navLinks.classList.toggle('open'))
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')))

  // Language switchers
  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.addEventListener('click', () => setLocale(btn.dataset.lang))
  })

  // Marketing tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      activeTab = btn.dataset.tab
      const panel = document.getElementById('tab-panel')
      panel.classList.add('fade-out')
      setTimeout(() => {
        renderActiveTab()
        panel.classList.remove('fade-out')
      }, 200)
    })
  })

  // Watch demo button → scroll to screenshot
  document.getElementById('watch-demo-btn')?.addEventListener('click', () => {
    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  })
})

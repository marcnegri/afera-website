# Afera — Marketing Website

> The marketing site for [Afera](https://afera.io), a CRM that doesn't make you want to cry.

Built with **Vue 3** + **Vite**, bilingual EN/FR, zero spreadsheets required.

---

## Stack

| Layer | Tech |
|---|---|
| Framework | Vue 3 (Composition API) |
| Build | Vite 5 |
| i18n | vue-i18n v11 |
| Fonts | Fredoka (Google Fonts) |
| Styling | Scoped CSS + CSS custom properties |

---

## Getting started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Project structure

```
afera-website/
├── public/
│   ├── logo.svg                  # Afera logo (orange "A" lettermark)
│   └── screenshots/              # App screenshots served as static assets
│       ├── dashboard.png
│       ├── contacts.png
│       ├── deals.png
│       ├── accounting.png
│       └── newsletter.png
├── src/
│   ├── components/
│   │   ├── NavBar.vue            # Sticky nav + language switcher
│   │   ├── HeroSection.vue       # Hero with dashboard screenshot
│   │   ├── FeaturesOverview.vue  # 5-column feature grid
│   │   ├── ContactsSection.vue   # Contacts feature deep-dive
│   │   ├── DealsSection.vue      # Deals pipeline section
│   │   ├── AccountingSection.vue # Accounting section
│   │   ├── MarketingSection.vue  # Tabbed digital marketing section
│   │   ├── PricingSection.vue    # 3-tier pricing cards
│   │   ├── CtaSection.vue        # Final call-to-action
│   │   └── FooterSection.vue     # Footer + language switcher
│   ├── locales/
│   │   ├── en.json               # English translations
│   │   └── fr.json               # French translations
│   ├── i18n.js                   # i18n setup + browser language detection
│   ├── main.js                   # App entry point
│   ├── App.vue                   # Root component
│   └── style.css                 # Global styles + CSS variables
└── package.json
```

---

## Internationalization

The site auto-detects the visitor's language on first load:

- **French** — if `navigator.language` starts with `fr`
- **English** — everything else

The choice is persisted in `localStorage` (`afera-locale`) and can be overridden via the language switcher in the navbar and footer.

To add a new language:
1. Create `src/locales/xx.json` (copy `en.json` as a template)
2. Register it in `src/i18n.js`
3. Add the switcher button in `NavBar.vue` and `FooterSection.vue`

---

## Screenshots

Screenshots live in `public/screenshots/` and are referenced directly in components via `/screenshots/filename.png`.

To add a new screenshot for a Marketing tab, drop the file in `public/screenshots/` and update the `screenshots` map in `src/components/MarketingSection.vue`:

```js
const screenshots = {
  newsletters: '/screenshots/newsletter.png',
  landing:     '/screenshots/landing.png',   // add yours here
  social:      '/screenshots/social.png',
  email:       '/screenshots/email.png',
  workflows:   '/screenshots/workflows.png',
}
```

---

## Design tokens

All colors, spacing, and shadows are defined as CSS variables in `src/style.css`:

```css
--orange: #ff6b35;   /* primary brand color */
--green:  #10b981;   /* success / savings   */
/* --gray-900 through --gray-100 for text and borders */
```

---

## Pricing

Plans reflect the live Afera pricing at `afera.io/settings/plan`:

| Plan | Price |
|---|---|
| Free Trial | CHF 0 / 30 days |
| Monthly | CHF 19.99 / month |
| Annual | CHF 199.90 / year (CHF 16.66/mo — save 17%) |

To update pricing copy, edit the `pricing` key in both `src/locales/en.json` and `src/locales/fr.json`.

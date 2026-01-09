# Andreia Semedo - Advanced Portfolio

A cutting-edge, international, installable Progressive Web App (PWA) portfolio built with React, TypeScript, Vite, and Tailwind CSS. Features revolutionary UX features, full internationalization, and PWA capabilities.

## 🌟 Revolutionary Features

### 🌐 Internationalization (i18n)
- **Languages**: Portuguese (PT) 🇵🇹 and English (EN) 🇬🇧
- **Language Switcher**: Animated toggle in navigation
- **Persistent**: Language preference saved in localStorage
- **Full Translation**: All content, menus, buttons, and SEO meta tags

### 📱 Progressive Web App (PWA)
- **Installable**: Works on Android, iOS, and Desktop
- **Offline Support**: Caches pages, images, and CV PDF
- **App Name**: "Andreia Semedo | Portfolio"
- **Smart Install Prompt**: Non-intrusive, detects if already installed

### 🧠 Unique Interactive Features

#### 1. Interactive Career Timeline
- Animated vertical timeline with scroll reactions
- **Filter by Category**:
  - Development
  - Testing
  - Cybersecurity
  - All
- Smooth Framer Motion animations

#### 2. Skills Intelligence Panel 🔮
- Interactive skills map with hover interactions
- **On Hover Shows**:
  - Experience level
  - Related projects
  - Use cases
- Dynamically grouped from data files

#### 3. AI-Inspired "About Me" Mode 🤖
- **Toggle Between**:
  - **Human Mode**: Personal, motivational tone
  - **AI Mode**: Technical, recruiter-oriented version
- Smooth animated transitions

#### 4. Smart Recruiter Mode 💼
- **"I'm a Recruiter" Button**: Activates recruiter-focused view
- **Quick Summary Card**:
  - Role focus
  - Tech stack
  - Location
  - Remote availability
- Highlights experience and certifications

#### 5. GitHub Live Integration 📊
- Fetches real-time data from GitHub API
- **Displays**:
  - Repository count
  - Programming languages (with percentages)
  - Contribution statistics
- Cached for performance

#### 6. Security & Trust Section 🔐
- Showcases cybersecurity mindset
- OWASP awareness
- Secure coding principles
- Privacy-first contact form (no tracking)

## 🚀 Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite 7** - Build tool and dev server
- **Tailwind CSS 3.4** - Styling
- **Framer Motion** - Animations
- **React Icons** - Icon library
- **react-i18next** - Internationalization
- **vite-plugin-pwa** - PWA support
- **react-error-boundary** - Error handling

## 📋 Sections

1. **Home (Hero)**: Introduction with CTA buttons and social links
2. **About Me**: AI/Human mode toggle with dynamic content
3. **Skills**: Intelligence panel with hover interactions
4. **Projects**: Showcase of projects with tech stacks
5. **Experience**: Interactive timeline with category filters
6. **Certifications**: Certifications and achievements
7. **GitHub Activity**: Live GitHub integration
8. **Security & Trust**: Cybersecurity showcase
9. **Contact**: Privacy-first contact form

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd MeuPortifolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The production build will be in the `dist` folder with:
- Service worker for offline support
- PWA manifest
- Optimized code splitting
- Lazy-loaded components

## 📄 CV File

Make sure to place your CV PDF file at:
```
/public/CV_Andreia_Semedo.pdf
```

The "Download CV" button will automatically download this file.

## 🎨 PWA Icons

Replace placeholder icons with actual PNG files:
- `/public/pwa-192x192.png` (192x192 pixels)
- `/public/pwa-512x512.png` (512x512 pixels)

## 🚀 Deployment

### Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Vite and deploy
4. PWA will work automatically with HTTPS

### Netlify

1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`
5. PWA will work automatically with HTTPS

## 📁 Project Structure

```
MeuPortifolio/
├── public/
│   ├── CV_Andreia_Semedo.pdf
│   ├── pwa-192x192.png
│   ├── pwa-512x512.png
│   └── vite.svg
├── locales/
│   ├── pt/
│   │   └── translation.json
│   └── en/
│       └── translation.json
├── src/
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── LanguageSwitcher.tsx
│   │   ├── Hero.tsx
│   │   ├── AboutWithMode.tsx
│   │   ├── SkillsIntelligence.tsx
│   │   ├── Projects.tsx
│   │   ├── InteractiveTimeline.tsx
│   │   ├── Certifications.tsx
│   │   ├── GitHubIntegration.tsx
│   │   ├── SecurityTrust.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── RecruiterMode.tsx
│   │   ├── PWAInstallPrompt.tsx
│   │   └── ErrorBoundary.tsx
│   ├── data/
│   │   ├── skills.ts
│   │   ├── projects.ts
│   │   ├── experience.ts
│   │   ├── certifications.ts
│   │   └── social.ts
│   ├── hooks/
│   │   └── useLanguage.ts
│   ├── i18n/
│   │   └── config.ts
│   ├── pages/
│   │   └── NotFound.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
└── tsconfig.json
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```js
colors: {
  primary: {
    dark: '#0a0a0a',
    purple: '#6b21a8',
    violet: '#7c3aed',
  },
}
```

### Content

Update the data files in `src/data/` to modify:
- Skills (`skills.ts`)
- Projects (`projects.ts`)
- Experience (`experience.ts`)
- Certifications (`certifications.ts`)
- Social Links (`social.ts`)

### Translations

Edit translation files in `locales/`:
- `locales/pt/translation.json` - Portuguese
- `locales/en/translation.json` - English

## ⚡ Performance Features

- **Code Splitting**: Automatic vendor, i18n, and motion chunks
- **Lazy Loading**: GitHub integration loaded on demand
- **PWA Caching**: Offline support with service worker
- **Optimized Builds**: Production-ready with minification

## 🔒 Security Features

- Privacy-first contact form (no tracking)
- OWASP awareness showcase
- Secure coding principles
- Data protection mindset

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Andreia Semedo**
- GitHub: [@andreia797](https://github.com/andreia797)
- LinkedIn: [Andreia Semedo](https://www.linkedin.com/in/andreia-semedo/)
- Email: andreiasemedo81@gmail.com
- Location: Santiago, Cabo Verde

---

Made with ❤️ using React + Vite + TypeScript + PWA

**Status**: ✅ Production Ready | 🌐 International | 📱 Installable | 🚀 Optimized

# TaskKarate v4

> **The Official Paper-Fu Implementation for Task Karate School**

A comprehensive, from-scratch rewrite of the Task Karate website using the Paper-Fu Manifesto design system. Built with a focus on maintainability, documentation, and future-proof architecture.

---

## 🥋 About This Project

TaskKarate v4 is the flagship website for Task Karate School in La Crosse, WI. It showcases the Hi-Yah! dark theme built on top of the Paper-Fu design system, which creates a layered, tactile aesthetic inspired by scrapbooking and Paper Mario.

### Key Features

- **Paper-Fu Design System**: Stacked paper effects, soft shadows, and organic micro-details
- **Hi-Yah! Theme**: Official dark theme with Pantone Classic Blue accent and belt color palette
- **File Folder Navigation**: Unique tabbed navigation mimicking manila folders
- **Belt Progress Bar**: Scroll indicator that cycles through belt colors
- **Fully Documented**: Every file contains extensive comments and ASCII diagrams

---

## 📁 Project Structure

```
TaskKarate_v4/
├── index.html              # Home page
├── schedule.html           # Class schedules
├── students.html           # Student resources & FAQs
├── news.html               # Newsletter signup & archive
├── about.html              # About Randy Thomson
│
├── css/
│   ├── paper-fu-core.css       # Core structural foundation
│   ├── paper-fu-theme-hi-yah.css  # Hi-Yah! dark theme
│   ├── paper-fu-navigation.css    # Tab navigation styles
│   ├── paper-fu-footer.css        # Footer styles
│   │
│   ├── index.css           # Home page specific styles
│   ├── schedule.css        # Schedule page styles
│   ├── students.css        # Students page styles
│   ├── news.css            # News page styles
│   └── about.css           # About page styles
│
├── js/
│   ├── partials.js         # HTML partial loader
│   ├── navigation.js       # Mobile menu & logo spin
│   ├── scroll-progress.js  # Belt color progress bar
│   ├── tabs.js             # Tabbed content controller
│   ├── back-to-top.js      # Scroll-to-top button
│   ├── schedule.js         # Schedule selector logic
│   └── newsletter.js       # Newsletter form handling
│
├── partials/
│   ├── navigation.html     # Shared navigation bar
│   └── footer.html         # Shared footer
│
├── images/
│   ├── logo/               # Logo files
│   ├── photos/             # Gallery photos
│   └── staff/              # Staff photos
│
├── files/                  # Downloadable PDFs
└── newsletter/             # Newsletter archive PDFs
```

---

## 🎨 Design System Overview

### Paper-Fu Core Concepts

| Concept | Description |
|---------|-------------|
| **Stacked Paper** | `.pf-stack` creates layered paper effects with offset shadows |
| **Panels** | `.pf-panel` containers with subtle borders and shadows |
| **Cards** | `.pf-card` for content groupings |
| **Buttons** | `.pf-btn` with belt color variants |
| **Typography** | Bebas Neue (headings), Inter (body), Caveat (handwritten) |

### Hi-Yah! Theme Colors

```css
/* Background Gradient */
--pf-bg-dark: linear-gradient(to bottom, #050814 0%, #0f172a 100%);

/* Accent Color (Pantone Classic Blue) */
--pf-color-accent: #0f4c81;

/* Belt Colors */
--pf-belt-white:  #f8fafc;
--pf-belt-gold:   #d4a84b;
--pf-belt-orange: #f97316;
--pf-belt-green:  #22c55e;
--pf-belt-purple: #8b5cf6;
--pf-belt-blue:   #3b82f6;
--pf-belt-red:    #ef4444;
--pf-belt-brown:  #78350f;
--pf-belt-black:  #0a0a0a;
```

---

## 🚀 Getting Started

### Prerequisites

- A modern web browser
- A local web server (recommended for partials to load correctly)

### Running Locally

1. **Clone or download** this folder to your local machine

2. **Start a local server**:
   ```bash
   # Using Python 3
   python -m http.server 8000

   # Using Node.js (npx)
   npx serve .

   # Using PHP
   php -S localhost:8000
   ```

3. **Open in browser**: Navigate to `http://localhost:8000`

### Note on Partials

The navigation and footer are loaded dynamically via JavaScript. If you open the HTML files directly (without a server), the partials won't load due to CORS restrictions. Always use a local server.

---

## 📝 File Documentation Standards

Every file in this project follows strict documentation standards:

### CSS Files

```css
/* ============================================
   FILE NAME
   Version: X.X.X - TaskKarate v4
   
   ╔════════════════════════════════════════════╗
   ║  FILE DESCRIPTION                          ║
   ╠════════════════════════════════════════════╣
   ║  • Feature 1                               ║
   ║  • Feature 2                               ║
   ╚════════════════════════════════════════════╝
   
   📁 Dependencies: other-file.css
   ============================================ */
```

### JavaScript Files

```javascript
/* ============================================
   FILE NAME
   Version: X.X.X - TaskKarate v4
   
   ╔════════════════════════════════════════════╗
   ║  FILE DESCRIPTION                          ║
   ╠════════════════════════════════════════════╣
   ║  Features:                                 ║
   ║  • Feature 1                               ║
   ╚════════════════════════════════════════════╝
   ============================================ */
```

### HTML Files

```html
<!-- ============================================
     PAGE NAME
     Version: X.X.X
     
     ╔════════════════════════════════════════════╗
     ║  PAGE DESCRIPTION                          ║
     ╚════════════════════════════════════════════╝
     ============================================ -->
```

---

## 🔧 Customization

### Creating a New Theme

1. Copy `css/paper-fu-theme-hi-yah.css`
2. Rename to `paper-fu-theme-[your-theme].css`
3. Update CSS custom properties in `:root`
4. Link the new theme file in your HTML

### Adding a New Page

1. Copy an existing page as a template
2. Update the `<title>` and meta tags
3. Add the page to `partials/navigation.html`
4. Create a page-specific CSS file if needed

---

## 📋 TODO

- [ ] Add actual logo image files
- [ ] Add gallery photos
- [ ] Add Randy Thomson photo
- [ ] Create PDF schedule downloads
- [ ] Set up newsletter form backend
- [ ] Add newsletter archive PDFs
- [ ] Create belt testing sheet pages

---

## 📄 License

This project is proprietary to Task Karate School. All rights reserved.

---

## 🙏 Credits

- **Design System**: Paper-Fu Manifesto
- **Owner/Instructor**: Randy "Mr. T" Thomson
- **Development**: Built with love for Task Karate

---

*Last Updated: 2025*

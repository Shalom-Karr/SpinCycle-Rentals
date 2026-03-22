# SpinCycle Rentals - Website Redesign

A modern, high-performance, single-page marketing website for SpinCycle Rentals in Cleveland, OH.

This project was engineered from the ground up to replace an older site with a blazing-fast, serverless-ready static application.

## 🚀 Tech Stack
* **HTML5:** Semantic, highly accessible, SEO-optimized markup.
* **Vanilla CSS:** Custom design system utilizing CSS variables, responsive grid layouts, and modern UI trends (glassmorphism, smooth transitions).
* **Vanilla JavaScript:** Lightweight DOM manipulation, IntersectionObserver for buttery-smooth scroll-reveal animations, and responsive mobile navigation. **Zero dependencies.**

## ✨ Features
* **Zero Build Step:** No Webpack, no Vite, no Node.js required. Runs directly in any modern browser.
* **Scroll Animations:** Elements fade and slide into view as the user scrolls down the page.
* **Sticky Navigation:** A glass-effect navbar that smoothly minimizes as you scroll.
* **Mobile-First Responsive:** Flawless rendering on everything from 4K monitors to small smartphones.

## 🛠️ Setup & Development
Simply open `index.html` in your browser. No server required. 
If you want to use a local server for testing features (like modifying the Stripe checkout flow later), you can run:
```bash
# Using Python
python -m http.server 8000

# Using Node/npx
npx serve
```
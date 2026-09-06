# Portfolio Website

A modern one-page portfolio built with React, Vite, and Framer Motion. Clean Brittany Chiang–inspired layout, light/dark theme, scroll animations, and a fully responsive design.

## Features

- Sticky intro sidebar with in-page navigation
- Smooth scroll to About, Experience, Projects, and Contact
- Light and dark theme toggle
- Framer Motion scroll animations
- Cursor spotlight on desktop
- Upwork-aligned bio, skills, experience, and projects
- Fully responsive (desktop, tablet, mobile)

## Installation

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Deploy to GitHub Pages

1. Use the GitHub Actions workflow in this repo (`.github/workflows/deploy-pages.yml`).
2. On push to `main`, the workflow builds the app and deploys the `dist/` folder.
3. One-time setup: repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.

If the page was blank before, GitHub Pages was serving source files instead of the Vite build. Deploying `dist/` fixes that.

## Customization

Content lives in these files:

- **Sidebar / intro**: `src/components/Sidebar.jsx`
- **About**: `src/components/About.jsx`
- **Experience**: `src/components/Experience.jsx`
- **Projects**: `src/components/Projects.jsx`
- **Contact**: `src/components/Contact.jsx`
- **Theme / colors**: `src/context/ThemeContext.jsx` and `src/index.css`
- **Resume PDF**: `src/assets/Affan_Resume.pdf` (update `src/cvAsset.js` cache bust after replacing)

## Technologies

- React 18
- Vite
- Framer Motion
- React Icons
- CSS custom properties

## Sections

1. **Sidebar**: Name, title, tagline, nav, socials, résumé, theme toggle
2. **About**: Bio, education, skill chips
3. **Experience**: Work history with tech tags
4. **Projects**: Selected work with images and links
5. **Contact**: Email and Upwork

## Notes

- Content is hardcoded for a simple static portfolio
- Contact is link-based (email / Upwork); no backend form
- Replace the résumé PDF and project media as needed

# Portfolio Website

A modern one-page portfolio built with React, Vite, and Framer Motion. It presents full stack web, mobile, and AI work through a responsive editorial layout.

## Features

- Fixed navigation with active-section tracking
- Smooth scroll to About, Experience, Projects, and Contact
- Light and dark theme toggle
- Framer Motion scroll animations
- Cursor spotlight on desktop
- Project case studies with production screenshots and external links
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

## Customization

Content lives in these files:

- **Sidebar / intro**: `src/components/Sidebar.jsx`
- **About**: `src/components/About.jsx`
- **Experience**: `src/components/Experience.jsx`
- **Projects**: `src/components/Projects.jsx`
- **Contact**: `src/components/Contact.jsx`
- **Theme / colors**: `src/context/ThemeContext.jsx` and `src/index.css`

## Technologies

- React 18
- Vite
- Framer Motion
- React Icons
- CSS custom properties

## Sections

1. **Navigation**: Wordmark, section links, and theme toggle
2. **About**: Bio, education, skill chips
3. **Experience**: Work history with tech tags
4. **Projects**: Selected work with images and links
5. **Contact**: Email, WhatsApp, and LinkedIn

## Notes

- Content is hardcoded for a simple static portfolio
- Contact is link-based; no backend form
- Replace project media in `src/assets/project-screens/` as needed

// Site Configuration
// Centralize all settings here, do not hardcode in components.

export const siteConfig = {
title: 'Antoine Blanco',
  description: 'Portafolio académico — Bases de Datos 1',
  author: 'Antoine Blanco Palacio',
  site: 'https://AntoineB-P.github.io',
  lang: 'es',

  // Navigation links — displayed in capsule nav bar
  nav: [
    { title: 'Home', href: '/' },
    { title: 'Presentación', href: '/presentacion' },
    { title: 'Trabajos', href: '/evidencias' },
    { title: 'About', href: '/about' },
  ],

  // Social links — leave empty to hide
  social: {
    github: 'https://github.com/AntoineB-P',
  },

  // Feature toggles
  features: {
    readingProgress: true,  // Show reading progress bar on post pages
    backToTop: true,        // Show back to top button
    callout: true,          // Show callout components in blog posts
    lightbox: true,         // Enable image lightbox on click
    rss: true,              // Enable RSS feed
    search: false,           // Enable client-side search (Fuse.js)
  },
};

export type SiteConfig = typeof siteConfig;

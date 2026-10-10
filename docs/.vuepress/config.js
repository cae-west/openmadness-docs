import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { hopeTheme } from 'vuepress-theme-hope'

export default defineUserConfig({
  lang: 'en-US',
  title: 'Openmadness Documentation',
  description: 'Complete guide to using Openmadness for array and matrix operations',
  bundler: viteBundler(),

  head: [
    // Algolia site verification meta tag
    [
      'meta',
      {
        name: 'algolia-site-verification',
        content: 'BAC47FB3FFC0AFB5',
      },
    ],
    // The following code creates the Biel.ai chatbot button.
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.css',
      },
    ],
    [
      'script',
      {
        type: 'module',
        src: 'https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.esm.js',
      },
    ],
    [
      'script',
      {},
      `
      if (typeof window !== 'undefined') {
        window.addEventListener('DOMContentLoaded', () => {
          const button = document.createElement('biel-button');
          button.setAttribute('project', 'qcn42agvt6');
          button.setAttribute('header-title', 'Openmadness.ai chatbot');
          button.setAttribute('button-position', 'bottom-right');
          button.setAttribute('modal-position', 'bottom-right');
          button.setAttribute('button-style', 'dark');
          button.textContent = 'Ask AI';
          document.body.appendChild(button);
        });
      }
      `,
    ],
  ],

  theme: hopeTheme({
    favicon: '/favicon.png',
    logo: '/logo-wordmark.png',
    logoDark: '/logo-wordmark-dark.png',
    navbarTitle: '',
    navbarLayout: {
      start: ['Brand'],
      center: [],
      end: ['Links', 'Language', 'Repo', 'Outlook', 'Search'],
    },
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started/introduction.md' },
      { text: 'How-To', link: '/how-to/' },
      { text: 'API References', link: '/api-references/' },
      { text: 'Troubleshooting', link: '/troubleshooting/' },
      { text: 'Glossary', link: '/glossary/' },
      { text: 'Changelog', link: '/changelog/' },
      { text: 'Credits', link: '/credits/' },
    ],
    sidebar: [
      {
        text: 'Getting Started',
        link: '/getting-started/',
        prefix: '/getting-started/',
        children: ['introduction', 'quickstart', 'installation'],
      },
      {
        text: 'How-To / Error Handling',
        link: '/how-to/',
        prefix: '/how-to/',
        children: [
          'array-creation',
          'statistical-operations',
          'array-manipulation',
          'arithmetic-operations',
          'data-operations',
        ],
      },
      {
        text: 'API References',
        link: '/api-references/',
      },
      {
        text: 'Troubleshooting',
        link: '/troubleshooting/',
      },
      {
        text: 'Glossary',
        link: '/glossary/',
      },
      {
        text: 'Changelog',
        link: '/changelog/',
      },
      {
        text: 'Credits',
        link: '/credits/',
      },
    ],
    plugins: {
      photoSwipe: false,
      // DocSearch must be configured here under theme plugins
      docsearch: {
        appId: 'D1XA5UFQT8',
        apiKey: '0ca50baee81720eaebc37232a608758f',
        indices: ['Openmadness search cache.tmp'],
      },
    },
    repo: 'cae-west/openmadness-docs',
    docsDir: 'docs',
    docsBranch: 'main',
  }),
})

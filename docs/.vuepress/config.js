import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { hopeTheme } from 'vuepress-theme-hope'

export default defineUserConfig({
  lang: 'en-US',
  title: 'Openmadness Documentation',
  description: 'Complete guide to using Openmadness for array and matrix operations',
  bundler: viteBundler(),
  theme: hopeTheme({
    favicon: '/favicon.png',
    logo: '/logo-wordmark.png',
    logoDark: '/logo-wordmark-dark.png',
    navbarTitle: '',
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started/' },
      { text: 'How-To', link: '/how-to/' },
      { text: 'API References', link: '/api-references/' },
      { text: 'Changelog', link: '/changelog/' },
      { text: 'Credits', link: '/credits/' },
    ],
    sidebar: [
      {
        text: 'Getting Started',
        link: '/getting-started/',
        prefix: '/getting-started/',
        children: [
          'introduction',
          'installation',
          'troubleshooting',
        ],
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
        text: 'Changelog',
        link: '/changelog/',
      },
      {
        text: 'Credits',
        prefix: '/credits/',
        children: [
          'purpose',
          'team',
        ],
      },
    ],
    plugins: {
      photoSwipe: false,
    },
    repo: 'cae-west/openmadness-docs',
    docsDir: 'docs',
    docsBranch: 'main',
  }),
})

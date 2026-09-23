import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  lang: 'en-US',
  title: 'Openmadness Documentation',
  description: 'Complete guide to using Openmadness for array and matrix operations',
  bundler: viteBundler(),
  theme: defaultTheme({
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started/' },
      { text: 'How-To', link: '/how-to/' },
      { text: 'Credits', link: '/credits/' },
    ],
    sidebar: {
      '/getting-started/': [
        {
          text: 'Getting Started',
          children: [
            'what-is.md',
            'how.md',
            'installation.md',
          ],
        },
      ],
      '/how-to/': [
        {
          text: 'How-To / API References / Error Handling',
          children: [
            'array-creation.md',
            'statistical-operations.md',
            'array-manipulation.md',
            'arithmetic-operations.md',
            'data-operations.md',
          ],
        },
      ],
      '/credits/': [
        {
          text: 'Credits',
          children: [
            'purpose.md',
            'team.md',
          ],
        },
      ],
    },
  }),
})

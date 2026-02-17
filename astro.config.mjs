// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkExternalLinks from 'remark-external-links';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "I'm studying math.",
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'English',
          lang: 'en',
        },
        ja: {
          label: 'Japanese',
          lang: 'ja',
        },
      },
      components: {
        LanguageSelect: './src/components/Empty.astro',
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' },
      ],
      sidebar: [
        {
          label: 'Note',
          autogenerate: { directory: 'note' },
        },
        {
          label: 'Diary',
          collapsed: true,
          autogenerate: { directory: 'diary' },
        },
        {
          label: 'About',
          link: 'about',
        },
      ],
      customCss: ['./src/styles/custom.css'],
    }),
  ],
  markdown: {
    remarkPlugins: [
      remarkMath,
      [remarkExternalLinks, { target: '_blank', rel: ['nofollow', 'noopener', 'noreferrer'] }],
    ],
    rehypePlugins: [
      rehypeKatex,
    ],
  },
});



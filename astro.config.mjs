import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Reglamento Interno',
      locales: {
        root: {
          label: 'Español',
          lang: 'es'
        }
      },
      defaultLocale: "es",
      social: {
        github: 'https://github.com/camunoz2',
      },
      sidebar: [
        {
          label: 'Introducción',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Fundamentos', link: '/guides/example/' },
          ],
        },
        {
          label: 'Capitulos',
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});

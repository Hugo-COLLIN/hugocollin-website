import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://hugocollin.com",
  integrations: [sitemap({
    customPages: [
      'https://save.hugocollin.com',
      'https://leon.hugocollin.com'
    ]
  })]

});

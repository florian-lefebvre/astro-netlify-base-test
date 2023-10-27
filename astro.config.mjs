import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-netlify-base-test.netlify.app",
  srcDir: ".",
  base: "/test",
  trailingSlash: "always",
  output: "server",
  adapter: netlify(),
  integrations: [mdx(), sitemap()],
});

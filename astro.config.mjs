// @ts-check
import { defineConfig } from "astro/config";


import tailwindcss from '@tailwindcss/vite';

import alpinejs from "@astrojs/alpinejs";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  output: "server",
  integrations: [alpinejs()],
  adapter: netlify(),
});
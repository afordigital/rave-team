// @ts-check
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'
import tailwindcss from "@tailwindcss/vite"
import { iconTyping } from './scripts/integrations.ts'
import astroIcon from 'astro-icon';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  integrations: [
    astroIcon({
      include: {
        lucide: ['*'], 
      },
    }),iconTyping()],
  vite: {
    plugins: [tailwindcss()],
  },

  adapter: vercel(),
});
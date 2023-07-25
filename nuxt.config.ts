export default defineNuxtConfig({
  app: {
    head: {
      title: 'Futurra.MathMaster',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content:
            'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
        },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico' },
      ],
    },
  },
  css: ['@/assets/styles/main.css'],
  postcss: {
    plugins: {
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ['@nuxtjs/eslint-module', '@nuxtjs/google-fonts', 'nuxt-icon', 'nuxt-swiper'],

  googleFonts: {
    preconnect: true,
    families: {
      Sora: [100, 200, 300, 400, 500, 600, 700, 800],
      'Source+Code+Pro': [200, 300, 400, 500, 600, 700, 800, 900],
      'Space+Grotesk': [300, 400, 500, 600, 700],
    }
  },

  eslint: {
    lintOnStart: false,
  },

  devtools: { enabled: true },
  devServerHandlers: [],
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name].[hash].[ext]',
          chunkFileNames: 'js/[name].[hash].js',
        },
      },
    },
  },
})

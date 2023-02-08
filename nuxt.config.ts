// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      meta: [
        { name: 'description', content: 'Nuxt 3 Starter Template by @akbarsaputrait' }
      ],
    }
  },
  pages: true,
  css: ['~/assets/styles/main.scss'],
  modules: ['@nuxtjs/color-mode', '@nuxt/content', 'nuxt-icon', '@nathanchase/nuxt-dayjs-module'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  colorMode: {
    classSuffix: ''
  },
  dayjs: {
    plugins: [
      'relativeTime',
    ]
  },
  runtimeConfig: {
    notionApiKey: process.env.NOTION_API_KEY,
    notionDatabaseId: process.env.NOTION_DATABASE_ID,
  }
})

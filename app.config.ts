export default defineAppConfig({
  meta: {
    title: 'Nuxt3 Starter Template',
    subtitle: 'Home',
  },
  nuxtIcon: {
    size: '24px', // default <Icon> size applied
    class: 'icon', // default <Icon> class applied
    aliases: {
      'nuxt': 'logos:nuxt-icon',
      'tailwind': 'logos:tailwindcss-icon',
      'typescript': 'logos:typescript-icon',
      'chevron-down': 'tabler:chevron-down',
      'github': 'tabler:brand-github',
      'star': 'tabler:star',
      'notion': 'logos:notion-icon',
      'calendar': 'ic:outline-calendar-month'
    }
  }
})

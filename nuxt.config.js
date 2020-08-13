
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'spa',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  ** Run nuxt build && nuxt export instead of nuxt generate
  ** https://nuxtjs.org/blog/going-full-static/
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    // https://stackoverflow.com/a/48239378
    htmlAttrs: { lang: 'en' },
    title: 'Harmony of Gospels',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Gospels are paired, chronological, supported by interactive map, and completed by a merged extra "gospel" for logic and completeness'
      },
      { 
        hid: 'keywords',
        name: 'keywords', 
        content: 'harmony, gospels, synoptic, four, interactive, map, chronological, event'
      }
      // title: process.env.npm_package_name || '',
      // { 
      //   hid: 'description', 
      //   name: 'description', 
      //   content: process.env.npm_package_description || '' 
      // }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    // '~/assets/global.css'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}

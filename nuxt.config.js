
require('dotenv').config()
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.site_name || '',
    titleTemplate: '%s - ' + process.env.site_name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.site_description || '' },
      { hid: 'og:site_name', property: 'og:site_name', content: process.env.site_name },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: this.$route },
      { hid: 'og:title', property: 'og:title', content: process.env.site_name },
      { hid: 'og:description', property: 'og:description', content: process.env.site_description },
      { hid: 'og:image', property: 'og:image', content: this.$route + '/img/ogp.jpg' },
      { property: 'article:publisher', content: 'FacebookURL' },
      { property: 'fb:app_id', content: 'FacebookAppID' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans+JP&display=swap' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/reset.css',
    '~/assets/css/fonts.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
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
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    'https': true
  },
  env: {
    baseUrl: process.env.api_url
  },
  styleResources: {
    scss: [
      '~/assets/css/variables.scss'
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}

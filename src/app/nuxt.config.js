const axios = require('axios')
require('dotenv').config()
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.site_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1 ,user-scalable=no' },
      { hid: 'description', name: 'description', content: process.env.site_description || '' },
      { hid: 'og:site_name', property: 'og:site_name', content: process.env.site_name },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: this.$route },
      { hid: 'og:title', property: 'og:title', content: process.env.site_name },
      { hid: 'og:description', property: 'og:description', content: process.env.site_description },
      { hid: 'og:image', property: 'og:image', content: 'https://sereal.jp/img/ogp.png' },
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
    '~/assets/css/fonts.css',
    '~/assets/css/transition.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/scroll.js'
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
    '@nuxtjs/style-resources',
    '@nuxtjs/sitemap'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    'https': true,
    baseUrl: process.env.API_URL
  },
  env: {
    baseUrl: process.env.API_URL
  },
  styleResources: {
    scss: [
      '~/assets/css/variables.scss'
    ]
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://sereal.jp',
    // generate: true,
    routes (callback) {
      axios.get(process.env.API_URL + '/projects')
      .then((res) => {
        var routes = res.data.projects.map((project) => {
          return '/project/' + project.slug
        })
        callback(null, routes)
      })
      .catch(callback)
    }
  },
  generate: {
    routes (callback) {
      axios.get(process.env.API_URL + '/projects')
      .then((res) => {
        var routes = res.data.projects.map((project) => {
          return '/project/' + project.slug
        })
        callback(null, routes)
      })
      .catch(callback)
    }
  },
  buildModules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-168132650-1'
    }]
  ],
  /*
  ** Build configuration
  */
  // buildDir: '../functions/nuxt',
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
    // publicPath: '/',
    // extractCss: true,
    babel: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: { ie: 11, uglify: true },
            useBuiltIns: 'usage',
            'corejs': 2
          }
        ]
      ],
      plugins: [
        '@babel/transform-runtime',
        '@babel/plugin-syntax-dynamic-import'
      ]
    },
    vender: ['babel-polyfill']
  }
}

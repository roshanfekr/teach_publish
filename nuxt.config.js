import serveStatic from 'serve-static'

const axios = require('axios')

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'TuteLoop',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  loading: {
    color: '#1affde'
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/myStyle.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {src: '~/plugins/star-rating.js', mode: 'client'},
    {src: '~/plugins/vue-select',mode:'client'},
    {src: '~/plugins/vue-editor',mode:'client'},
    {src: '~/plugins/vue-range-slider',mode:'client'},
    {src: '~/plugins/Vuelidate'},
    {src: '~/plugins/customToolbar'},
    {src: '~/plugins/ObserverVisibility'},
    {src: '~/plugins/vuep-moment'},
    {src: '~/plugins/vue-chart.js', mode: 'client' },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    ['nuxt-fontawesome', {
      component: 'font-awesome-icon', //customize component name
      imports: [{
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['faLightbulb']
      },
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['faGraduationCap']
        },
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: ['faLeanpub']
        },
        {
          set: '@fortawesome/free-regular-svg-icons',
          icons: ['faLightbulb']
        },
      ]
    }],
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [

    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    'vue-scrollto/nuxt',
    'nuxt-i18n',
    '@nuxtjs/sitemap',
    [
      "@nuxtjs/recaptcha",
        {
          /* reCAPTCHA options */
          hideBadge: false, // Boolean Hide badge element (v3 & v2 via size=invisible)
          language: "English", // String Recaptcha language (v2)
          siteKey: "6LcLqf4cAAAAABNPHyXFAHr0i5WOQrNFn0dI7Tep", // String Site key for requests
          version: 3, // Number Version
          size: "normal" // String Size: 'compact', 'normal', 'invisible' (v2)
        }
        ],
    'nuxt-socket-io',


  ],
  io: {
    // module options
    sockets: [{
      name: 'home',
      url: 'http://localhost:3000',
      default: true,
      vuex: { /* see section below */ },
      namespaces: { /* see section below */ },
    }]
  },
  auth: {
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/login',
      home: '/'
    },
    plugins: [
      { src: '~plugins/axios' }
    ],
    strategies: {
      local: {
        // scopeKey :'roles',
        token: {
          property: 'token',
          global: true,
          required: true,
          type:  false
        },
        user: {
          property: false,
          autoFetch: false
        },
        endpoints: {
          login: { url: '/user/login', method: 'post' },
          logout: false, // { url: '/user/logout', method: 'post' },
          user: false, // { url: '/user', method: 'get' }
        },
      }
    }
  },

  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en-US.js'
      },
      {
        code: 'fr',
        name: 'Français',
        file: 'fr-FR.js'
      },
      {
        code: 'fa',
        name: 'فارسی',
        file: 'fa-FA.js'
      }
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'en'
  },
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    proxy: true,
    prefix: '/api'
  },
  proxy: {
    '/api': process.env.BASE_CLIENT_URL
  },
  env: {
    PerPage: 10,
    WS_URL: process.env.WS_URL || 'http://localhost:3000'
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  serverMiddleware: [
    {path: '/api', handler: '~/api/index.js'},
    {path: '/storage', handler: serveStatic(__dirname + '/api/storage')},
    {path: '/admin/storage', handler: serveStatic(__dirname + '/api/storage')}
  ],

  router: {
    scrollBehavior(to, from, savedPosition) {
      if (to.hash) {
        return savedPosition
      } else {
        return {x: 0, y: 0}
      }
    }
  },

  sitemap: {
    hostname: process.env.HTTPS_BASE_URL,
    gzip: true,
    exclude: [
      '/admin',
      '/admin/**',
      '/login'
    ],
    // routes: async () => {
    //   const baseUrl = process.env.HTTPS_BASE_URL + '/api/'
    //   const res = await axios.get(baseUrl + 'allArticleForSiteMap')
    //   let ret = res.data.map((item) => `/article/${item.id}/${item.title}`)
    //   ret.push('/article')
    //   ret.push('/film')
    //   return ret
    // }
  },
  server: {
    port: 6386, // default: 3000
    host: 'localhost' // default: localhost
  }
}

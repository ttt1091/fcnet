export default {
  // Target: https://go.nuxtjs.dev/config-target
  // target: 'static',
  target: 'server',
  ssr: true,
  srcDir: 'src/',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'fcnet',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: "robots", name: "robots", content: "noindex" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/scss/glasses.scss',
    '~/assets/css/scss/main.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/datechange.js', ssr: true },
    { src: "~/plugins/lazyload.js" },
    { src: "~/plugins/firebase.js" }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/dayjs',
    '@nuxtjs/proxy',
    '@nuxt/content',
    '@nuxtjs/sitemap',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
    retry: { retries: 3 }
  },
  proxy: {
    '/api/': { target: 'https://live.fc2.com/adult/contents/allchannellist.php', pathRewrite: {'^/api/': ''} },
    '/girl/': { target: 'https://live.fc2.com/api/memberApi.php', pathRewrite: {'^/girl/': ''} },

  },

  content: {
    // Options
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'ja'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  generate: {
    dir: 'public',
    exclude: [
      '/admin'
    ]
  },

  sitemap: {
    // options
    hostname: 'http://localhost:3000',
    gzip: true,
    exclude: [
      '/admin'
    ],
  },

}

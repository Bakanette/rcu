export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'rcu',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '../assets/img/favicon_rcu.ico' },
      { rel: "preconnect", href: "https://fonts.googleapis.com/css2?family=Oswald&family=Roboto&display=swap"}
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["~/assets/styles.css"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/style-resources'
  ],
  
  /*
  styleResources: {
    scss: [
      '~assets/scss/_colors.scss'
    ] 
  }
  */

  bootstrapVue: {
    // Install the `IconsPlugin` plugin (in addition to `BootstrapVue` plugin)
    icons: true
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}

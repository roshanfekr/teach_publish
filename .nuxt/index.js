import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '..\\layouts\\error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_plugin_e6e6a272 from 'nuxt_plugin_plugin_e6e6a272' // Source: .\\components\\plugin.js (mode: 'all')
import nuxt_plugin_bootstrapvue_59c0a999 from 'nuxt_plugin_bootstrapvue_59c0a999' // Source: .\\bootstrap-vue.js (mode: 'all')
import nuxt_plugin_nuxtsocketio_1b38ed90 from 'nuxt_plugin_nuxtsocketio_1b38ed90' // Source: .\\nuxt-socket-io.js (mode: 'all')
import nuxt_plugin_recaptcha_c9b2c24e from 'nuxt_plugin_recaptcha_c9b2c24e' // Source: .\\recaptcha.js (mode: 'all')
import nuxt_plugin_pluginutils_f1804b78 from 'nuxt_plugin_pluginutils_f1804b78' // Source: .\\nuxt-i18n\\plugin.utils.js (mode: 'all')
import nuxt_plugin_pluginrouting_6cb2e68f from 'nuxt_plugin_pluginrouting_6cb2e68f' // Source: .\\nuxt-i18n\\plugin.routing.js (mode: 'all')
import nuxt_plugin_pluginmain_5dc72740 from 'nuxt_plugin_pluginmain_5dc72740' // Source: .\\nuxt-i18n\\plugin.main.js (mode: 'all')
import nuxt_plugin_vuescrollto_ba81b542 from 'nuxt_plugin_vuescrollto_ba81b542' // Source: .\\vue-scrollto.js (mode: 'client')
import nuxt_plugin_axios_9912552c from 'nuxt_plugin_axios_9912552c' // Source: .\\axios.js (mode: 'all')
import nuxt_plugin_templatesplugin2c9acbec_506867c4 from 'nuxt_plugin_templatesplugin2c9acbec_506867c4' // Source: .\\templates.plugin.2c9acbec.js (mode: 'all')
import nuxt_plugin_starrating_3d884675 from 'nuxt_plugin_starrating_3d884675' // Source: ..\\plugins\\star-rating.js (mode: 'client')
import nuxt_plugin_vueselect_0c6a19ce from 'nuxt_plugin_vueselect_0c6a19ce' // Source: ..\\plugins\\vue-select (mode: 'client')
import nuxt_plugin_vueeditor_3c5040ec from 'nuxt_plugin_vueeditor_3c5040ec' // Source: ..\\plugins\\vue-editor (mode: 'client')
import nuxt_plugin_vuerangeslider_53242fce from 'nuxt_plugin_vuerangeslider_53242fce' // Source: ..\\plugins\\vue-range-slider (mode: 'client')
import nuxt_plugin_Vuelidate_55cf8cdb from 'nuxt_plugin_Vuelidate_55cf8cdb' // Source: ..\\plugins\\Vuelidate (mode: 'all')
import nuxt_plugin_customToolbar_389089d8 from 'nuxt_plugin_customToolbar_389089d8' // Source: ..\\plugins\\customToolbar (mode: 'all')
import nuxt_plugin_ObserverVisibility_be9cb6c4 from 'nuxt_plugin_ObserverVisibility_be9cb6c4' // Source: ..\\plugins\\ObserverVisibility (mode: 'all')
import nuxt_plugin_vuepmoment_0662b04d from 'nuxt_plugin_vuepmoment_0662b04d' // Source: ..\\plugins\\vuep-moment (mode: 'all')
import nuxt_plugin_vuechart_7d19cf94 from 'nuxt_plugin_vuechart_7d19cf94' // Source: ..\\plugins\\vue-chart.js (mode: 'client')
import nuxt_plugin_auth_d43102f4 from 'nuxt_plugin_auth_d43102f4' // Source: .\\auth.js (mode: 'all')
import nuxt_plugin_axios_fb9c9a02 from 'nuxt_plugin_axios_fb9c9a02' // Source: ..\\plugins\\axios (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"TuteLoop","htmlAttrs":{"lang":"en"},"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":""},{"name":"format-detection","content":"telephone=no"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"}],"style":[],"script":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_e6e6a272 === 'function') {
    await nuxt_plugin_plugin_e6e6a272(app.context, inject)
  }

  if (typeof nuxt_plugin_bootstrapvue_59c0a999 === 'function') {
    await nuxt_plugin_bootstrapvue_59c0a999(app.context, inject)
  }

  if (typeof nuxt_plugin_nuxtsocketio_1b38ed90 === 'function') {
    await nuxt_plugin_nuxtsocketio_1b38ed90(app.context, inject)
  }

  if (typeof nuxt_plugin_recaptcha_c9b2c24e === 'function') {
    await nuxt_plugin_recaptcha_c9b2c24e(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginutils_f1804b78 === 'function') {
    await nuxt_plugin_pluginutils_f1804b78(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginrouting_6cb2e68f === 'function') {
    await nuxt_plugin_pluginrouting_6cb2e68f(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginmain_5dc72740 === 'function') {
    await nuxt_plugin_pluginmain_5dc72740(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuescrollto_ba81b542 === 'function') {
    await nuxt_plugin_vuescrollto_ba81b542(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_9912552c === 'function') {
    await nuxt_plugin_axios_9912552c(app.context, inject)
  }

  if (typeof nuxt_plugin_templatesplugin2c9acbec_506867c4 === 'function') {
    await nuxt_plugin_templatesplugin2c9acbec_506867c4(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_starrating_3d884675 === 'function') {
    await nuxt_plugin_starrating_3d884675(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vueselect_0c6a19ce === 'function') {
    await nuxt_plugin_vueselect_0c6a19ce(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vueeditor_3c5040ec === 'function') {
    await nuxt_plugin_vueeditor_3c5040ec(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuerangeslider_53242fce === 'function') {
    await nuxt_plugin_vuerangeslider_53242fce(app.context, inject)
  }

  if (typeof nuxt_plugin_Vuelidate_55cf8cdb === 'function') {
    await nuxt_plugin_Vuelidate_55cf8cdb(app.context, inject)
  }

  if (typeof nuxt_plugin_customToolbar_389089d8 === 'function') {
    await nuxt_plugin_customToolbar_389089d8(app.context, inject)
  }

  if (typeof nuxt_plugin_ObserverVisibility_be9cb6c4 === 'function') {
    await nuxt_plugin_ObserverVisibility_be9cb6c4(app.context, inject)
  }

  if (typeof nuxt_plugin_vuepmoment_0662b04d === 'function') {
    await nuxt_plugin_vuepmoment_0662b04d(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuechart_7d19cf94 === 'function') {
    await nuxt_plugin_vuechart_7d19cf94(app.context, inject)
  }

  if (typeof nuxt_plugin_auth_d43102f4 === 'function') {
    await nuxt_plugin_auth_d43102f4(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_fb9c9a02 === 'function') {
    await nuxt_plugin_axios_fb9c9a02(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    const { route } = router.resolve(app.context.route.fullPath)
    // Ignore 404s rather than blindly replacing URL
    if (!route.matched.length && process.client) {
      return resolve()
    }
    router.replace(route, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }

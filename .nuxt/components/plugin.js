import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  IoSocketStatus: () => import('../..\\node_modules\\nuxt-socket-io\\lib\\components\\SocketStatus.js' /* webpackChunkName: "components/io-socket-status" */).then(c => wrapFunctional(c.default || c)),
  Booklesson: () => import('../..\\components\\booklesson.vue' /* webpackChunkName: "components/booklesson" */).then(c => wrapFunctional(c.default || c)),
  Logo: () => import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}

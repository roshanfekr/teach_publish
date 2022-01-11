import { wrapFunctional } from './utils'

export { default as IoSocketStatus } from '../..\\node_modules\\nuxt-socket-io\\lib\\components\\SocketStatus.js'
export { default as Booklesson } from '../..\\components\\booklesson.vue'
export { default as Logo } from '../..\\components\\Logo.vue'

export const LazyIoSocketStatus = import('../..\\node_modules\\nuxt-socket-io\\lib\\components\\SocketStatus.js' /* webpackChunkName: "components/io-socket-status" */).then(c => wrapFunctional(c.default || c))
export const LazyBooklesson = import('../..\\components\\booklesson.vue' /* webpackChunkName: "components/booklesson" */).then(c => wrapFunctional(c.default || c))
export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))

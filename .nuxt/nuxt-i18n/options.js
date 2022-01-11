

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
}
export const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {},
  vueI18nLoader: false,
  locales: [{"code":"en","name":"English","file":"en-US.js"},{"code":"fr","name":"Français","file":"fr-FR.js"},{"code":"fa","name":"فارسی","file":"fa-FA.js"}],
  defaultLocale: "en",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  strategy: "prefix_except_default",
  lazy: true,
  langDir: "C:\\Repository\\teach\\lang",
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","onlyOnNoPrefix":false,"onlyOnRoot":false,"useCookie":true},
  differentDomains: false,
  seo: false,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncLocale":false,"syncMessages":false,"syncRouteParams":true},
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  beforeLanguageSwitch: () => null,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  normalizedLocales: [{"code":"en","name":"English","file":"en-US.js"},{"code":"fr","name":"Français","file":"fr-FR.js"},{"code":"fa","name":"فارسی","file":"fa-FA.js"}],
  localeCodes: ["en","fr","fa"],
}

export const localeMessages = {
  'en-US.js': () => import('../..\\lang\\en-US.js' /* webpackChunkName: "lang-en-US.js" */),
  'fr-FR.js': () => import('../..\\lang\\fr-FR.js' /* webpackChunkName: "lang-fr-FR.js" */),
  'fa-FA.js': () => import('../..\\lang\\fa-FA.js' /* webpackChunkName: "lang-fa-FA.js" */),
}

import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6aa959ce = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _4e39b5ba = () => interopDefault(import('..\\pages\\activation.vue' /* webpackChunkName: "pages/activation" */))
const _a903d372 = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _79d02bef = () => interopDefault(import('..\\pages\\client.vue' /* webpackChunkName: "pages/client" */))
const _3ad3a18f = () => interopDefault(import('..\\pages\\contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _2b39a444 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _6394a1fc = () => interopDefault(import('..\\pages\\FAQ.vue' /* webpackChunkName: "pages/FAQ" */))
const _57b27e07 = () => interopDefault(import('..\\pages\\forget-password.vue' /* webpackChunkName: "pages/forget-password" */))
const _97ea5e16 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _33b48be1 = () => interopDefault(import('..\\pages\\reg-cert.vue' /* webpackChunkName: "pages/reg-cert" */))
const _5a80b6ac = () => interopDefault(import('..\\pages\\reg-educ.vue' /* webpackChunkName: "pages/reg-educ" */))
const _275f8cb6 = () => interopDefault(import('..\\pages\\reg-expe.vue' /* webpackChunkName: "pages/reg-expe" */))
const _7503a7c7 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _5ab8c306 = () => interopDefault(import('..\\pages\\reset-password.vue' /* webpackChunkName: "pages/reset-password" */))
const _f033dc88 = () => interopDefault(import('..\\pages\\student-details.vue' /* webpackChunkName: "pages/student-details" */))
const _b21ad992 = () => interopDefault(import('..\\pages\\tutor-details.vue' /* webpackChunkName: "pages/tutor-details" */))
const _cfa002a4 = () => interopDefault(import('..\\pages\\tutor-finish.vue' /* webpackChunkName: "pages/tutor-finish" */))
const _07b71dbe = () => interopDefault(import('..\\pages\\tutor-subject.vue' /* webpackChunkName: "pages/tutor-subject" */))
const _f886a236 = () => interopDefault(import('..\\pages\\tutor-timing.vue' /* webpackChunkName: "pages/tutor-timing" */))
const _29ede6d1 = () => interopDefault(import('..\\pages\\tutor-transcript.vue' /* webpackChunkName: "pages/tutor-transcript" */))
const _299d3b25 = () => interopDefault(import('..\\pages\\upload.vue' /* webpackChunkName: "pages/upload" */))
const _25e637b4 = () => interopDefault(import('..\\pages\\user-panel.vue' /* webpackChunkName: "pages/user-panel" */))
const _f1acccc8 = () => interopDefault(import('..\\pages\\user-panel\\index.vue' /* webpackChunkName: "pages/user-panel/index" */))
const _f4aa5e12 = () => interopDefault(import('..\\pages\\user-panel\\account.vue' /* webpackChunkName: "pages/user-panel/account" */))
const _648de519 = () => interopDefault(import('..\\pages\\user-panel\\certs.vue' /* webpackChunkName: "pages/user-panel/certs" */))
const _4e22ad02 = () => interopDefault(import('..\\pages\\user-panel\\courses.vue' /* webpackChunkName: "pages/user-panel/courses" */))
const _b2343520 = () => interopDefault(import('..\\pages\\user-panel\\educs.vue' /* webpackChunkName: "pages/user-panel/educs" */))
const _81302056 = () => interopDefault(import('..\\pages\\user-panel\\expes.vue' /* webpackChunkName: "pages/user-panel/expes" */))
const _7a698a05 = () => interopDefault(import('..\\pages\\user-panel\\lessons.vue' /* webpackChunkName: "pages/user-panel/lessons" */))
const _520d4cc0 = () => interopDefault(import('..\\pages\\user-panel\\my-lessons.vue' /* webpackChunkName: "pages/user-panel/my-lessons" */))
const _5ca1b273 = () => interopDefault(import('..\\pages\\user-panel\\profile.vue' /* webpackChunkName: "pages/user-panel/profile" */))
const _d2d18f4e = () => interopDefault(import('..\\pages\\user-panel\\request.vue' /* webpackChunkName: "pages/user-panel/request" */))
const _3ffb73ea = () => interopDefault(import('..\\pages\\user-panel\\requests.vue' /* webpackChunkName: "pages/user-panel/requests" */))
const _522de33a = () => interopDefault(import('..\\pages\\user-panel\\st-profile.vue' /* webpackChunkName: "pages/user-panel/st-profile" */))
const _2e160476 = () => interopDefault(import('..\\pages\\user-panel\\subject.vue' /* webpackChunkName: "pages/user-panel/subject" */))
const _1bdea009 = () => interopDefault(import('..\\pages\\user-panel\\system-msg.vue' /* webpackChunkName: "pages/user-panel/system-msg" */))
const _0f9bb87f = () => interopDefault(import('..\\pages\\user-panel\\taken-lessons.vue' /* webpackChunkName: "pages/user-panel/taken-lessons" */))
const _6450dcf0 = () => interopDefault(import('..\\pages\\user-panel\\timing.vue' /* webpackChunkName: "pages/user-panel/timing" */))
const _29414f5a = () => interopDefault(import('..\\pages\\user-panel\\tutor-transcript.vue' /* webpackChunkName: "pages/user-panel/tutor-transcript" */))
const _d908acaa = () => interopDefault(import('..\\pages\\admin\\faq-manager.vue' /* webpackChunkName: "pages/admin/faq-manager" */))
const _6260e49c = () => interopDefault(import('..\\pages\\admin\\gender.vue' /* webpackChunkName: "pages/admin/gender" */))
const _45bd74d3 = () => interopDefault(import('..\\pages\\admin\\language-manager.vue' /* webpackChunkName: "pages/admin/language-manager" */))
const _48dcf020 = () => interopDefault(import('..\\pages\\admin\\lessons.vue' /* webpackChunkName: "pages/admin/lessons" */))
const _69483786 = () => interopDefault(import('..\\pages\\admin\\notification.vue' /* webpackChunkName: "pages/admin/notification" */))
const _9ad4558c = () => interopDefault(import('..\\pages\\admin\\online-user.vue' /* webpackChunkName: "pages/admin/online-user" */))
const _3308be56 = () => interopDefault(import('..\\pages\\admin\\report-dashboard.vue' /* webpackChunkName: "pages/admin/report-dashboard" */))
const _054c91d0 = () => interopDefault(import('..\\pages\\admin\\reviews.vue' /* webpackChunkName: "pages/admin/reviews" */))
const _25b99469 = () => interopDefault(import('..\\pages\\admin\\university.vue' /* webpackChunkName: "pages/admin/university" */))
const _48760ba7 = () => interopDefault(import('..\\pages\\admin\\user-change.vue' /* webpackChunkName: "pages/admin/user-change" */))
const _1e301f06 = () => interopDefault(import('..\\pages\\admin\\users.vue' /* webpackChunkName: "pages/admin/users" */))
const _5edb4d5c = () => interopDefault(import('..\\pages\\legal\\privacy-policy.vue' /* webpackChunkName: "pages/legal/privacy-policy" */))
const _5ec6425f = () => interopDefault(import('..\\pages\\legal\\terms-of-agreement.vue' /* webpackChunkName: "pages/legal/terms-of-agreement" */))
const _b2961dcc = () => interopDefault(import('..\\pages\\tutor\\_id\\index.vue' /* webpackChunkName: "pages/tutor/_id/index" */))
const _e69c862e = () => interopDefault(import('..\\pages\\tutors\\_id.vue' /* webpackChunkName: "pages/tutors/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _6aa959ce,
    name: "about___en"
  }, {
    path: "/activation",
    component: _4e39b5ba,
    name: "activation___en"
  }, {
    path: "/admin",
    component: _a903d372,
    name: "admin___en"
  }, {
    path: "/client",
    component: _79d02bef,
    name: "client___en"
  }, {
    path: "/contact-us",
    component: _3ad3a18f,
    name: "contact-us___en"
  }, {
    path: "/fa",
    component: _2b39a444,
    name: "index___fa"
  }, {
    path: "/FAQ",
    component: _6394a1fc,
    name: "FAQ___en"
  }, {
    path: "/forget-password",
    component: _57b27e07,
    name: "forget-password___en"
  }, {
    path: "/fr",
    component: _2b39a444,
    name: "index___fr"
  }, {
    path: "/login",
    component: _97ea5e16,
    name: "login___en"
  }, {
    path: "/reg-cert",
    component: _33b48be1,
    name: "reg-cert___en"
  }, {
    path: "/reg-educ",
    component: _5a80b6ac,
    name: "reg-educ___en"
  }, {
    path: "/reg-expe",
    component: _275f8cb6,
    name: "reg-expe___en"
  }, {
    path: "/register",
    component: _7503a7c7,
    name: "register___en"
  }, {
    path: "/reset-password",
    component: _5ab8c306,
    name: "reset-password___en"
  }, {
    path: "/student-details",
    component: _f033dc88,
    name: "student-details___en"
  }, {
    path: "/tutor-details",
    component: _b21ad992,
    name: "tutor-details___en"
  }, {
    path: "/tutor-finish",
    component: _cfa002a4,
    name: "tutor-finish___en"
  }, {
    path: "/tutor-subject",
    component: _07b71dbe,
    name: "tutor-subject___en"
  }, {
    path: "/tutor-timing",
    component: _f886a236,
    name: "tutor-timing___en"
  }, {
    path: "/tutor-transcript",
    component: _29ede6d1,
    name: "tutor-transcript___en"
  }, {
    path: "/upload",
    component: _299d3b25,
    name: "upload___en"
  }, {
    path: "/user-panel",
    component: _25e637b4,
    children: [{
      path: "",
      component: _f1acccc8,
      name: "user-panel___en"
    }, {
      path: "account",
      component: _f4aa5e12,
      name: "user-panel-account___en"
    }, {
      path: "certs",
      component: _648de519,
      name: "user-panel-certs___en"
    }, {
      path: "courses",
      component: _4e22ad02,
      name: "user-panel-courses___en"
    }, {
      path: "educs",
      component: _b2343520,
      name: "user-panel-educs___en"
    }, {
      path: "expes",
      component: _81302056,
      name: "user-panel-expes___en"
    }, {
      path: "lessons",
      component: _7a698a05,
      name: "user-panel-lessons___en"
    }, {
      path: "my-lessons",
      component: _520d4cc0,
      name: "user-panel-my-lessons___en"
    }, {
      path: "profile",
      component: _5ca1b273,
      name: "user-panel-profile___en"
    }, {
      path: "request",
      component: _d2d18f4e,
      name: "user-panel-request___en"
    }, {
      path: "requests",
      component: _3ffb73ea,
      name: "user-panel-requests___en"
    }, {
      path: "st-profile",
      component: _522de33a,
      name: "user-panel-st-profile___en"
    }, {
      path: "subject",
      component: _2e160476,
      name: "user-panel-subject___en"
    }, {
      path: "system-msg",
      component: _1bdea009,
      name: "user-panel-system-msg___en"
    }, {
      path: "taken-lessons",
      component: _0f9bb87f,
      name: "user-panel-taken-lessons___en"
    }, {
      path: "timing",
      component: _6450dcf0,
      name: "user-panel-timing___en"
    }, {
      path: "tutor-transcript",
      component: _29414f5a,
      name: "user-panel-tutor-transcript___en"
    }]
  }, {
    path: "/admin/faq-manager",
    component: _d908acaa,
    name: "admin-faq-manager___en"
  }, {
    path: "/admin/gender",
    component: _6260e49c,
    name: "admin-gender___en"
  }, {
    path: "/admin/language-manager",
    component: _45bd74d3,
    name: "admin-language-manager___en"
  }, {
    path: "/admin/lessons",
    component: _48dcf020,
    name: "admin-lessons___en"
  }, {
    path: "/admin/notification",
    component: _69483786,
    name: "admin-notification___en"
  }, {
    path: "/admin/online-user",
    component: _9ad4558c,
    name: "admin-online-user___en"
  }, {
    path: "/admin/report-dashboard",
    component: _3308be56,
    name: "admin-report-dashboard___en"
  }, {
    path: "/admin/reviews",
    component: _054c91d0,
    name: "admin-reviews___en"
  }, {
    path: "/admin/university",
    component: _25b99469,
    name: "admin-university___en"
  }, {
    path: "/admin/user-change",
    component: _48760ba7,
    name: "admin-user-change___en"
  }, {
    path: "/admin/users",
    component: _1e301f06,
    name: "admin-users___en"
  }, {
    path: "/fa/about",
    component: _6aa959ce,
    name: "about___fa"
  }, {
    path: "/fa/activation",
    component: _4e39b5ba,
    name: "activation___fa"
  }, {
    path: "/fa/admin",
    component: _a903d372,
    name: "admin___fa"
  }, {
    path: "/fa/client",
    component: _79d02bef,
    name: "client___fa"
  }, {
    path: "/fa/contact-us",
    component: _3ad3a18f,
    name: "contact-us___fa"
  }, {
    path: "/fa/FAQ",
    component: _6394a1fc,
    name: "FAQ___fa"
  }, {
    path: "/fa/forget-password",
    component: _57b27e07,
    name: "forget-password___fa"
  }, {
    path: "/fa/login",
    component: _97ea5e16,
    name: "login___fa"
  }, {
    path: "/fa/reg-cert",
    component: _33b48be1,
    name: "reg-cert___fa"
  }, {
    path: "/fa/reg-educ",
    component: _5a80b6ac,
    name: "reg-educ___fa"
  }, {
    path: "/fa/reg-expe",
    component: _275f8cb6,
    name: "reg-expe___fa"
  }, {
    path: "/fa/register",
    component: _7503a7c7,
    name: "register___fa"
  }, {
    path: "/fa/reset-password",
    component: _5ab8c306,
    name: "reset-password___fa"
  }, {
    path: "/fa/student-details",
    component: _f033dc88,
    name: "student-details___fa"
  }, {
    path: "/fa/tutor-details",
    component: _b21ad992,
    name: "tutor-details___fa"
  }, {
    path: "/fa/tutor-finish",
    component: _cfa002a4,
    name: "tutor-finish___fa"
  }, {
    path: "/fa/tutor-subject",
    component: _07b71dbe,
    name: "tutor-subject___fa"
  }, {
    path: "/fa/tutor-timing",
    component: _f886a236,
    name: "tutor-timing___fa"
  }, {
    path: "/fa/tutor-transcript",
    component: _29ede6d1,
    name: "tutor-transcript___fa"
  }, {
    path: "/fa/upload",
    component: _299d3b25,
    name: "upload___fa"
  }, {
    path: "/fa/user-panel",
    component: _25e637b4,
    children: [{
      path: "",
      component: _f1acccc8,
      name: "user-panel___fa"
    }, {
      path: "account",
      component: _f4aa5e12,
      name: "user-panel-account___fa"
    }, {
      path: "certs",
      component: _648de519,
      name: "user-panel-certs___fa"
    }, {
      path: "courses",
      component: _4e22ad02,
      name: "user-panel-courses___fa"
    }, {
      path: "educs",
      component: _b2343520,
      name: "user-panel-educs___fa"
    }, {
      path: "expes",
      component: _81302056,
      name: "user-panel-expes___fa"
    }, {
      path: "lessons",
      component: _7a698a05,
      name: "user-panel-lessons___fa"
    }, {
      path: "my-lessons",
      component: _520d4cc0,
      name: "user-panel-my-lessons___fa"
    }, {
      path: "profile",
      component: _5ca1b273,
      name: "user-panel-profile___fa"
    }, {
      path: "request",
      component: _d2d18f4e,
      name: "user-panel-request___fa"
    }, {
      path: "requests",
      component: _3ffb73ea,
      name: "user-panel-requests___fa"
    }, {
      path: "st-profile",
      component: _522de33a,
      name: "user-panel-st-profile___fa"
    }, {
      path: "subject",
      component: _2e160476,
      name: "user-panel-subject___fa"
    }, {
      path: "system-msg",
      component: _1bdea009,
      name: "user-panel-system-msg___fa"
    }, {
      path: "taken-lessons",
      component: _0f9bb87f,
      name: "user-panel-taken-lessons___fa"
    }, {
      path: "timing",
      component: _6450dcf0,
      name: "user-panel-timing___fa"
    }, {
      path: "tutor-transcript",
      component: _29414f5a,
      name: "user-panel-tutor-transcript___fa"
    }]
  }, {
    path: "/fr/about",
    component: _6aa959ce,
    name: "about___fr"
  }, {
    path: "/fr/activation",
    component: _4e39b5ba,
    name: "activation___fr"
  }, {
    path: "/fr/admin",
    component: _a903d372,
    name: "admin___fr"
  }, {
    path: "/fr/client",
    component: _79d02bef,
    name: "client___fr"
  }, {
    path: "/fr/contact-us",
    component: _3ad3a18f,
    name: "contact-us___fr"
  }, {
    path: "/fr/FAQ",
    component: _6394a1fc,
    name: "FAQ___fr"
  }, {
    path: "/fr/forget-password",
    component: _57b27e07,
    name: "forget-password___fr"
  }, {
    path: "/fr/login",
    component: _97ea5e16,
    name: "login___fr"
  }, {
    path: "/fr/reg-cert",
    component: _33b48be1,
    name: "reg-cert___fr"
  }, {
    path: "/fr/reg-educ",
    component: _5a80b6ac,
    name: "reg-educ___fr"
  }, {
    path: "/fr/reg-expe",
    component: _275f8cb6,
    name: "reg-expe___fr"
  }, {
    path: "/fr/register",
    component: _7503a7c7,
    name: "register___fr"
  }, {
    path: "/fr/reset-password",
    component: _5ab8c306,
    name: "reset-password___fr"
  }, {
    path: "/fr/student-details",
    component: _f033dc88,
    name: "student-details___fr"
  }, {
    path: "/fr/tutor-details",
    component: _b21ad992,
    name: "tutor-details___fr"
  }, {
    path: "/fr/tutor-finish",
    component: _cfa002a4,
    name: "tutor-finish___fr"
  }, {
    path: "/fr/tutor-subject",
    component: _07b71dbe,
    name: "tutor-subject___fr"
  }, {
    path: "/fr/tutor-timing",
    component: _f886a236,
    name: "tutor-timing___fr"
  }, {
    path: "/fr/tutor-transcript",
    component: _29ede6d1,
    name: "tutor-transcript___fr"
  }, {
    path: "/fr/upload",
    component: _299d3b25,
    name: "upload___fr"
  }, {
    path: "/fr/user-panel",
    component: _25e637b4,
    children: [{
      path: "",
      component: _f1acccc8,
      name: "user-panel___fr"
    }, {
      path: "account",
      component: _f4aa5e12,
      name: "user-panel-account___fr"
    }, {
      path: "certs",
      component: _648de519,
      name: "user-panel-certs___fr"
    }, {
      path: "courses",
      component: _4e22ad02,
      name: "user-panel-courses___fr"
    }, {
      path: "educs",
      component: _b2343520,
      name: "user-panel-educs___fr"
    }, {
      path: "expes",
      component: _81302056,
      name: "user-panel-expes___fr"
    }, {
      path: "lessons",
      component: _7a698a05,
      name: "user-panel-lessons___fr"
    }, {
      path: "my-lessons",
      component: _520d4cc0,
      name: "user-panel-my-lessons___fr"
    }, {
      path: "profile",
      component: _5ca1b273,
      name: "user-panel-profile___fr"
    }, {
      path: "request",
      component: _d2d18f4e,
      name: "user-panel-request___fr"
    }, {
      path: "requests",
      component: _3ffb73ea,
      name: "user-panel-requests___fr"
    }, {
      path: "st-profile",
      component: _522de33a,
      name: "user-panel-st-profile___fr"
    }, {
      path: "subject",
      component: _2e160476,
      name: "user-panel-subject___fr"
    }, {
      path: "system-msg",
      component: _1bdea009,
      name: "user-panel-system-msg___fr"
    }, {
      path: "taken-lessons",
      component: _0f9bb87f,
      name: "user-panel-taken-lessons___fr"
    }, {
      path: "timing",
      component: _6450dcf0,
      name: "user-panel-timing___fr"
    }, {
      path: "tutor-transcript",
      component: _29414f5a,
      name: "user-panel-tutor-transcript___fr"
    }]
  }, {
    path: "/legal/privacy-policy",
    component: _5edb4d5c,
    name: "legal-privacy-policy___en"
  }, {
    path: "/legal/terms-of-agreement",
    component: _5ec6425f,
    name: "legal-terms-of-agreement___en"
  }, {
    path: "/fa/admin/faq-manager",
    component: _d908acaa,
    name: "admin-faq-manager___fa"
  }, {
    path: "/fa/admin/gender",
    component: _6260e49c,
    name: "admin-gender___fa"
  }, {
    path: "/fa/admin/language-manager",
    component: _45bd74d3,
    name: "admin-language-manager___fa"
  }, {
    path: "/fa/admin/lessons",
    component: _48dcf020,
    name: "admin-lessons___fa"
  }, {
    path: "/fa/admin/notification",
    component: _69483786,
    name: "admin-notification___fa"
  }, {
    path: "/fa/admin/online-user",
    component: _9ad4558c,
    name: "admin-online-user___fa"
  }, {
    path: "/fa/admin/report-dashboard",
    component: _3308be56,
    name: "admin-report-dashboard___fa"
  }, {
    path: "/fa/admin/reviews",
    component: _054c91d0,
    name: "admin-reviews___fa"
  }, {
    path: "/fa/admin/university",
    component: _25b99469,
    name: "admin-university___fa"
  }, {
    path: "/fa/admin/user-change",
    component: _48760ba7,
    name: "admin-user-change___fa"
  }, {
    path: "/fa/admin/users",
    component: _1e301f06,
    name: "admin-users___fa"
  }, {
    path: "/fa/legal/privacy-policy",
    component: _5edb4d5c,
    name: "legal-privacy-policy___fa"
  }, {
    path: "/fa/legal/terms-of-agreement",
    component: _5ec6425f,
    name: "legal-terms-of-agreement___fa"
  }, {
    path: "/fr/admin/faq-manager",
    component: _d908acaa,
    name: "admin-faq-manager___fr"
  }, {
    path: "/fr/admin/gender",
    component: _6260e49c,
    name: "admin-gender___fr"
  }, {
    path: "/fr/admin/language-manager",
    component: _45bd74d3,
    name: "admin-language-manager___fr"
  }, {
    path: "/fr/admin/lessons",
    component: _48dcf020,
    name: "admin-lessons___fr"
  }, {
    path: "/fr/admin/notification",
    component: _69483786,
    name: "admin-notification___fr"
  }, {
    path: "/fr/admin/online-user",
    component: _9ad4558c,
    name: "admin-online-user___fr"
  }, {
    path: "/fr/admin/report-dashboard",
    component: _3308be56,
    name: "admin-report-dashboard___fr"
  }, {
    path: "/fr/admin/reviews",
    component: _054c91d0,
    name: "admin-reviews___fr"
  }, {
    path: "/fr/admin/university",
    component: _25b99469,
    name: "admin-university___fr"
  }, {
    path: "/fr/admin/user-change",
    component: _48760ba7,
    name: "admin-user-change___fr"
  }, {
    path: "/fr/admin/users",
    component: _1e301f06,
    name: "admin-users___fr"
  }, {
    path: "/fr/legal/privacy-policy",
    component: _5edb4d5c,
    name: "legal-privacy-policy___fr"
  }, {
    path: "/fr/legal/terms-of-agreement",
    component: _5ec6425f,
    name: "legal-terms-of-agreement___fr"
  }, {
    path: "/fa/tutor/:id",
    component: _b2961dcc,
    name: "tutor-id___fa"
  }, {
    path: "/fa/tutors/:id?",
    component: _e69c862e,
    name: "tutors-id___fa"
  }, {
    path: "/fr/tutor/:id",
    component: _b2961dcc,
    name: "tutor-id___fr"
  }, {
    path: "/fr/tutors/:id?",
    component: _e69c862e,
    name: "tutors-id___fr"
  }, {
    path: "/tutor/:id",
    component: _b2961dcc,
    name: "tutor-id___en"
  }, {
    path: "/tutors/:id?",
    component: _e69c862e,
    name: "tutors-id___en"
  }, {
    path: "/",
    component: _2b39a444,
    name: "index___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}

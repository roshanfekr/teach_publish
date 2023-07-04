import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3d9a6e57 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _55601d88 = () => interopDefault(import('..\\pages\\activation.vue' /* webpackChunkName: "pages/activation" */))
const _74190d6e = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _64c47871 = () => interopDefault(import('..\\pages\\client.vue' /* webpackChunkName: "pages/client" */))
const _7c2c45de = () => interopDefault(import('..\\pages\\contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _5d52491c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _540e81c0 = () => interopDefault(import('..\\pages\\FAQ.vue' /* webpackChunkName: "pages/FAQ" */))
const _5a1f23c5 = () => interopDefault(import('..\\pages\\forget-password.vue' /* webpackChunkName: "pages/forget-password" */))
const _26f9ec33 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _32c7bfe3 = () => interopDefault(import('..\\pages\\reg-cert.vue' /* webpackChunkName: "pages/reg-cert" */))
const _5c5a4ea8 = () => interopDefault(import('..\\pages\\reg-educ.vue' /* webpackChunkName: "pages/reg-educ" */))
const _293924b2 = () => interopDefault(import('..\\pages\\reg-expe.vue' /* webpackChunkName: "pages/reg-expe" */))
const _7416dbc9 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _254c48ff = () => interopDefault(import('..\\pages\\reset-password.vue' /* webpackChunkName: "pages/reset-password" */))
const _eb5a910c = () => interopDefault(import('..\\pages\\student-details.vue' /* webpackChunkName: "pages/student-details" */))
const _49acdf16 = () => interopDefault(import('..\\pages\\tutor-details.vue' /* webpackChunkName: "pages/tutor-details" */))
const _9ab53ca0 = () => interopDefault(import('..\\pages\\tutor-finish.vue' /* webpackChunkName: "pages/tutor-finish" */))
const _305b6e5f = () => interopDefault(import('..\\pages\\tutor-subject.vue' /* webpackChunkName: "pages/tutor-subject" */))
const _c39bdc32 = () => interopDefault(import('..\\pages\\tutor-timing.vue' /* webpackChunkName: "pages/tutor-timing" */))
const _7515f8d3 = () => interopDefault(import('..\\pages\\tutor-transcript.vue' /* webpackChunkName: "pages/tutor-transcript" */))
const _149187a7 = () => interopDefault(import('..\\pages\\upload.vue' /* webpackChunkName: "pages/upload" */))
const _74231fa8 = () => interopDefault(import('..\\pages\\user-panel.vue' /* webpackChunkName: "pages/user-panel" */))
const _bdf8704c = () => interopDefault(import('..\\pages\\user-panel\\index.vue' /* webpackChunkName: "pages/user-panel/index" */))
const _dc9b3096 = () => interopDefault(import('..\\pages\\user-panel\\account.vue' /* webpackChunkName: "pages/user-panel/account" */))
const _7e681357 = () => interopDefault(import('..\\pages\\user-panel\\certs.vue' /* webpackChunkName: "pages/user-panel/certs" */))
const _5a2a43c0 = () => interopDefault(import('..\\pages\\user-panel\\courses.vue' /* webpackChunkName: "pages/user-panel/courses" */))
const _7e7fd8a4 = () => interopDefault(import('..\\pages\\user-panel\\educs.vue' /* webpackChunkName: "pages/user-panel/educs" */))
const _4d7bc3da = () => interopDefault(import('..\\pages\\user-panel\\expes.vue' /* webpackChunkName: "pages/user-panel/expes" */))
const _f31dbe7a = () => interopDefault(import('..\\pages\\user-panel\\lessons.vue' /* webpackChunkName: "pages/user-panel/lessons" */))
const _392c5542 = () => interopDefault(import('..\\pages\\user-panel\\my-lessons.vue' /* webpackChunkName: "pages/user-panel/my-lessons" */))
const _68a94931 = () => interopDefault(import('..\\pages\\user-panel\\profile.vue' /* webpackChunkName: "pages/user-panel/profile" */))
const _bac261d2 = () => interopDefault(import('..\\pages\\user-panel\\request.vue' /* webpackChunkName: "pages/user-panel/request" */))
const _96329628 = () => interopDefault(import('..\\pages\\user-panel\\requests.vue' /* webpackChunkName: "pages/user-panel/requests" */))
const _83efd236 = () => interopDefault(import('..\\pages\\user-panel\\st-profile.vue' /* webpackChunkName: "pages/user-panel/st-profile" */))
const _3a1d9b34 = () => interopDefault(import('..\\pages\\user-panel\\subject.vue' /* webpackChunkName: "pages/user-panel/subject" */))
const _02fda88b = () => interopDefault(import('..\\pages\\user-panel\\system-msg.vue' /* webpackChunkName: "pages/user-panel/system-msg" */))
const _380a6e86 = () => interopDefault(import('..\\pages\\user-panel\\taken-lessons.vue' /* webpackChunkName: "pages/user-panel/taken-lessons" */))
const _f487131c = () => interopDefault(import('..\\pages\\user-panel\\timing.vue' /* webpackChunkName: "pages/user-panel/timing" */))
const _63fb1156 = () => interopDefault(import('..\\pages\\user-panel\\tutor-transcript.vue' /* webpackChunkName: "pages/user-panel/tutor-transcript" */))
const _963179a6 = () => interopDefault(import('..\\pages\\admin\\faq-manager.vue' /* webpackChunkName: "pages/admin/faq-manager" */))
const _d2d03c4c = () => interopDefault(import('..\\pages\\admin\\gender.vue' /* webpackChunkName: "pages/admin/gender" */))
const _427f7c91 = () => interopDefault(import('..\\pages\\admin\\language-manager.vue' /* webpackChunkName: "pages/admin/language-manager" */))
const _2e3a3272 = () => interopDefault(import('..\\pages\\admin\\lessons.vue' /* webpackChunkName: "pages/admin/lessons" */))
const _754fce44 = () => interopDefault(import('..\\pages\\admin\\notification.vue' /* webpackChunkName: "pages/admin/notification" */))
const _57fd2288 = () => interopDefault(import('..\\pages\\admin\\online-user.vue' /* webpackChunkName: "pages/admin/online-user" */))
const _2fcac614 = () => interopDefault(import('..\\pages\\admin\\report-dashboard.vue' /* webpackChunkName: "pages/admin/report-dashboard" */))
const _57f53c52 = () => interopDefault(import('..\\pages\\admin\\reviews.vue' /* webpackChunkName: "pages/admin/reviews" */))
const _3f93c2a7 = () => interopDefault(import('..\\pages\\admin\\university.vue' /* webpackChunkName: "pages/admin/university" */))
const _69e1a529 = () => interopDefault(import('..\\pages\\admin\\user-change.vue' /* webpackChunkName: "pages/admin/user-change" */))
const _0b5d537f = () => interopDefault(import('..\\pages\\admin\\users.vue' /* webpackChunkName: "pages/admin/users" */))
const _f14fa6cc = () => interopDefault(import('..\\pages\\legal\\privacy-policy.vue' /* webpackChunkName: "pages/legal/privacy-policy" */))
const _3325529d = () => interopDefault(import('..\\pages\\legal\\terms-of-agreement.vue' /* webpackChunkName: "pages/legal/terms-of-agreement" */))
const _7ee1c150 = () => interopDefault(import('..\\pages\\tutor\\_id\\index.vue' /* webpackChunkName: "pages/tutor/_id/index" */))
const _2f3a1cb2 = () => interopDefault(import('..\\pages\\tutors\\_id.vue' /* webpackChunkName: "pages/tutors/_id" */))

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
    component: _3d9a6e57,
    name: "about___en"
  }, {
    path: "/activation",
    component: _55601d88,
    name: "activation___en"
  }, {
    path: "/admin",
    component: _74190d6e,
    name: "admin___en"
  }, {
    path: "/client",
    component: _64c47871,
    name: "client___en"
  }, {
    path: "/contact-us",
    component: _7c2c45de,
    name: "contact-us___en"
  }, {
    path: "/fa",
    component: _5d52491c,
    name: "index___fa"
  }, {
    path: "/FAQ",
    component: _540e81c0,
    name: "FAQ___en"
  }, {
    path: "/forget-password",
    component: _5a1f23c5,
    name: "forget-password___en"
  }, {
    path: "/fr",
    component: _5d52491c,
    name: "index___fr"
  }, {
    path: "/login",
    component: _26f9ec33,
    name: "login___en"
  }, {
    path: "/reg-cert",
    component: _32c7bfe3,
    name: "reg-cert___en"
  }, {
    path: "/reg-educ",
    component: _5c5a4ea8,
    name: "reg-educ___en"
  }, {
    path: "/reg-expe",
    component: _293924b2,
    name: "reg-expe___en"
  }, {
    path: "/register",
    component: _7416dbc9,
    name: "register___en"
  }, {
    path: "/reset-password",
    component: _254c48ff,
    name: "reset-password___en"
  }, {
    path: "/student-details",
    component: _eb5a910c,
    name: "student-details___en"
  }, {
    path: "/tutor-details",
    component: _49acdf16,
    name: "tutor-details___en"
  }, {
    path: "/tutor-finish",
    component: _9ab53ca0,
    name: "tutor-finish___en"
  }, {
    path: "/tutor-subject",
    component: _305b6e5f,
    name: "tutor-subject___en"
  }, {
    path: "/tutor-timing",
    component: _c39bdc32,
    name: "tutor-timing___en"
  }, {
    path: "/tutor-transcript",
    component: _7515f8d3,
    name: "tutor-transcript___en"
  }, {
    path: "/upload",
    component: _149187a7,
    name: "upload___en"
  }, {
    path: "/user-panel",
    component: _74231fa8,
    children: [{
      path: "",
      component: _bdf8704c,
      name: "user-panel___en"
    }, {
      path: "account",
      component: _dc9b3096,
      name: "user-panel-account___en"
    }, {
      path: "certs",
      component: _7e681357,
      name: "user-panel-certs___en"
    }, {
      path: "courses",
      component: _5a2a43c0,
      name: "user-panel-courses___en"
    }, {
      path: "educs",
      component: _7e7fd8a4,
      name: "user-panel-educs___en"
    }, {
      path: "expes",
      component: _4d7bc3da,
      name: "user-panel-expes___en"
    }, {
      path: "lessons",
      component: _f31dbe7a,
      name: "user-panel-lessons___en"
    }, {
      path: "my-lessons",
      component: _392c5542,
      name: "user-panel-my-lessons___en"
    }, {
      path: "profile",
      component: _68a94931,
      name: "user-panel-profile___en"
    }, {
      path: "request",
      component: _bac261d2,
      name: "user-panel-request___en"
    }, {
      path: "requests",
      component: _96329628,
      name: "user-panel-requests___en"
    }, {
      path: "st-profile",
      component: _83efd236,
      name: "user-panel-st-profile___en"
    }, {
      path: "subject",
      component: _3a1d9b34,
      name: "user-panel-subject___en"
    }, {
      path: "system-msg",
      component: _02fda88b,
      name: "user-panel-system-msg___en"
    }, {
      path: "taken-lessons",
      component: _380a6e86,
      name: "user-panel-taken-lessons___en"
    }, {
      path: "timing",
      component: _f487131c,
      name: "user-panel-timing___en"
    }, {
      path: "tutor-transcript",
      component: _63fb1156,
      name: "user-panel-tutor-transcript___en"
    }]
  }, {
    path: "/admin/faq-manager",
    component: _963179a6,
    name: "admin-faq-manager___en"
  }, {
    path: "/admin/gender",
    component: _d2d03c4c,
    name: "admin-gender___en"
  }, {
    path: "/admin/language-manager",
    component: _427f7c91,
    name: "admin-language-manager___en"
  }, {
    path: "/admin/lessons",
    component: _2e3a3272,
    name: "admin-lessons___en"
  }, {
    path: "/admin/notification",
    component: _754fce44,
    name: "admin-notification___en"
  }, {
    path: "/admin/online-user",
    component: _57fd2288,
    name: "admin-online-user___en"
  }, {
    path: "/admin/report-dashboard",
    component: _2fcac614,
    name: "admin-report-dashboard___en"
  }, {
    path: "/admin/reviews",
    component: _57f53c52,
    name: "admin-reviews___en"
  }, {
    path: "/admin/university",
    component: _3f93c2a7,
    name: "admin-university___en"
  }, {
    path: "/admin/user-change",
    component: _69e1a529,
    name: "admin-user-change___en"
  }, {
    path: "/admin/users",
    component: _0b5d537f,
    name: "admin-users___en"
  }, {
    path: "/fa/about",
    component: _3d9a6e57,
    name: "about___fa"
  }, {
    path: "/fa/activation",
    component: _55601d88,
    name: "activation___fa"
  }, {
    path: "/fa/admin",
    component: _74190d6e,
    name: "admin___fa"
  }, {
    path: "/fa/client",
    component: _64c47871,
    name: "client___fa"
  }, {
    path: "/fa/contact-us",
    component: _7c2c45de,
    name: "contact-us___fa"
  }, {
    path: "/fa/FAQ",
    component: _540e81c0,
    name: "FAQ___fa"
  }, {
    path: "/fa/forget-password",
    component: _5a1f23c5,
    name: "forget-password___fa"
  }, {
    path: "/fa/login",
    component: _26f9ec33,
    name: "login___fa"
  }, {
    path: "/fa/reg-cert",
    component: _32c7bfe3,
    name: "reg-cert___fa"
  }, {
    path: "/fa/reg-educ",
    component: _5c5a4ea8,
    name: "reg-educ___fa"
  }, {
    path: "/fa/reg-expe",
    component: _293924b2,
    name: "reg-expe___fa"
  }, {
    path: "/fa/register",
    component: _7416dbc9,
    name: "register___fa"
  }, {
    path: "/fa/reset-password",
    component: _254c48ff,
    name: "reset-password___fa"
  }, {
    path: "/fa/student-details",
    component: _eb5a910c,
    name: "student-details___fa"
  }, {
    path: "/fa/tutor-details",
    component: _49acdf16,
    name: "tutor-details___fa"
  }, {
    path: "/fa/tutor-finish",
    component: _9ab53ca0,
    name: "tutor-finish___fa"
  }, {
    path: "/fa/tutor-subject",
    component: _305b6e5f,
    name: "tutor-subject___fa"
  }, {
    path: "/fa/tutor-timing",
    component: _c39bdc32,
    name: "tutor-timing___fa"
  }, {
    path: "/fa/tutor-transcript",
    component: _7515f8d3,
    name: "tutor-transcript___fa"
  }, {
    path: "/fa/upload",
    component: _149187a7,
    name: "upload___fa"
  }, {
    path: "/fa/user-panel",
    component: _74231fa8,
    children: [{
      path: "",
      component: _bdf8704c,
      name: "user-panel___fa"
    }, {
      path: "account",
      component: _dc9b3096,
      name: "user-panel-account___fa"
    }, {
      path: "certs",
      component: _7e681357,
      name: "user-panel-certs___fa"
    }, {
      path: "courses",
      component: _5a2a43c0,
      name: "user-panel-courses___fa"
    }, {
      path: "educs",
      component: _7e7fd8a4,
      name: "user-panel-educs___fa"
    }, {
      path: "expes",
      component: _4d7bc3da,
      name: "user-panel-expes___fa"
    }, {
      path: "lessons",
      component: _f31dbe7a,
      name: "user-panel-lessons___fa"
    }, {
      path: "my-lessons",
      component: _392c5542,
      name: "user-panel-my-lessons___fa"
    }, {
      path: "profile",
      component: _68a94931,
      name: "user-panel-profile___fa"
    }, {
      path: "request",
      component: _bac261d2,
      name: "user-panel-request___fa"
    }, {
      path: "requests",
      component: _96329628,
      name: "user-panel-requests___fa"
    }, {
      path: "st-profile",
      component: _83efd236,
      name: "user-panel-st-profile___fa"
    }, {
      path: "subject",
      component: _3a1d9b34,
      name: "user-panel-subject___fa"
    }, {
      path: "system-msg",
      component: _02fda88b,
      name: "user-panel-system-msg___fa"
    }, {
      path: "taken-lessons",
      component: _380a6e86,
      name: "user-panel-taken-lessons___fa"
    }, {
      path: "timing",
      component: _f487131c,
      name: "user-panel-timing___fa"
    }, {
      path: "tutor-transcript",
      component: _63fb1156,
      name: "user-panel-tutor-transcript___fa"
    }]
  }, {
    path: "/fr/about",
    component: _3d9a6e57,
    name: "about___fr"
  }, {
    path: "/fr/activation",
    component: _55601d88,
    name: "activation___fr"
  }, {
    path: "/fr/admin",
    component: _74190d6e,
    name: "admin___fr"
  }, {
    path: "/fr/client",
    component: _64c47871,
    name: "client___fr"
  }, {
    path: "/fr/contact-us",
    component: _7c2c45de,
    name: "contact-us___fr"
  }, {
    path: "/fr/FAQ",
    component: _540e81c0,
    name: "FAQ___fr"
  }, {
    path: "/fr/forget-password",
    component: _5a1f23c5,
    name: "forget-password___fr"
  }, {
    path: "/fr/login",
    component: _26f9ec33,
    name: "login___fr"
  }, {
    path: "/fr/reg-cert",
    component: _32c7bfe3,
    name: "reg-cert___fr"
  }, {
    path: "/fr/reg-educ",
    component: _5c5a4ea8,
    name: "reg-educ___fr"
  }, {
    path: "/fr/reg-expe",
    component: _293924b2,
    name: "reg-expe___fr"
  }, {
    path: "/fr/register",
    component: _7416dbc9,
    name: "register___fr"
  }, {
    path: "/fr/reset-password",
    component: _254c48ff,
    name: "reset-password___fr"
  }, {
    path: "/fr/student-details",
    component: _eb5a910c,
    name: "student-details___fr"
  }, {
    path: "/fr/tutor-details",
    component: _49acdf16,
    name: "tutor-details___fr"
  }, {
    path: "/fr/tutor-finish",
    component: _9ab53ca0,
    name: "tutor-finish___fr"
  }, {
    path: "/fr/tutor-subject",
    component: _305b6e5f,
    name: "tutor-subject___fr"
  }, {
    path: "/fr/tutor-timing",
    component: _c39bdc32,
    name: "tutor-timing___fr"
  }, {
    path: "/fr/tutor-transcript",
    component: _7515f8d3,
    name: "tutor-transcript___fr"
  }, {
    path: "/fr/upload",
    component: _149187a7,
    name: "upload___fr"
  }, {
    path: "/fr/user-panel",
    component: _74231fa8,
    children: [{
      path: "",
      component: _bdf8704c,
      name: "user-panel___fr"
    }, {
      path: "account",
      component: _dc9b3096,
      name: "user-panel-account___fr"
    }, {
      path: "certs",
      component: _7e681357,
      name: "user-panel-certs___fr"
    }, {
      path: "courses",
      component: _5a2a43c0,
      name: "user-panel-courses___fr"
    }, {
      path: "educs",
      component: _7e7fd8a4,
      name: "user-panel-educs___fr"
    }, {
      path: "expes",
      component: _4d7bc3da,
      name: "user-panel-expes___fr"
    }, {
      path: "lessons",
      component: _f31dbe7a,
      name: "user-panel-lessons___fr"
    }, {
      path: "my-lessons",
      component: _392c5542,
      name: "user-panel-my-lessons___fr"
    }, {
      path: "profile",
      component: _68a94931,
      name: "user-panel-profile___fr"
    }, {
      path: "request",
      component: _bac261d2,
      name: "user-panel-request___fr"
    }, {
      path: "requests",
      component: _96329628,
      name: "user-panel-requests___fr"
    }, {
      path: "st-profile",
      component: _83efd236,
      name: "user-panel-st-profile___fr"
    }, {
      path: "subject",
      component: _3a1d9b34,
      name: "user-panel-subject___fr"
    }, {
      path: "system-msg",
      component: _02fda88b,
      name: "user-panel-system-msg___fr"
    }, {
      path: "taken-lessons",
      component: _380a6e86,
      name: "user-panel-taken-lessons___fr"
    }, {
      path: "timing",
      component: _f487131c,
      name: "user-panel-timing___fr"
    }, {
      path: "tutor-transcript",
      component: _63fb1156,
      name: "user-panel-tutor-transcript___fr"
    }]
  }, {
    path: "/legal/privacy-policy",
    component: _f14fa6cc,
    name: "legal-privacy-policy___en"
  }, {
    path: "/legal/terms-of-agreement",
    component: _3325529d,
    name: "legal-terms-of-agreement___en"
  }, {
    path: "/fa/admin/faq-manager",
    component: _963179a6,
    name: "admin-faq-manager___fa"
  }, {
    path: "/fa/admin/gender",
    component: _d2d03c4c,
    name: "admin-gender___fa"
  }, {
    path: "/fa/admin/language-manager",
    component: _427f7c91,
    name: "admin-language-manager___fa"
  }, {
    path: "/fa/admin/lessons",
    component: _2e3a3272,
    name: "admin-lessons___fa"
  }, {
    path: "/fa/admin/notification",
    component: _754fce44,
    name: "admin-notification___fa"
  }, {
    path: "/fa/admin/online-user",
    component: _57fd2288,
    name: "admin-online-user___fa"
  }, {
    path: "/fa/admin/report-dashboard",
    component: _2fcac614,
    name: "admin-report-dashboard___fa"
  }, {
    path: "/fa/admin/reviews",
    component: _57f53c52,
    name: "admin-reviews___fa"
  }, {
    path: "/fa/admin/university",
    component: _3f93c2a7,
    name: "admin-university___fa"
  }, {
    path: "/fa/admin/user-change",
    component: _69e1a529,
    name: "admin-user-change___fa"
  }, {
    path: "/fa/admin/users",
    component: _0b5d537f,
    name: "admin-users___fa"
  }, {
    path: "/fa/legal/privacy-policy",
    component: _f14fa6cc,
    name: "legal-privacy-policy___fa"
  }, {
    path: "/fa/legal/terms-of-agreement",
    component: _3325529d,
    name: "legal-terms-of-agreement___fa"
  }, {
    path: "/fr/admin/faq-manager",
    component: _963179a6,
    name: "admin-faq-manager___fr"
  }, {
    path: "/fr/admin/gender",
    component: _d2d03c4c,
    name: "admin-gender___fr"
  }, {
    path: "/fr/admin/language-manager",
    component: _427f7c91,
    name: "admin-language-manager___fr"
  }, {
    path: "/fr/admin/lessons",
    component: _2e3a3272,
    name: "admin-lessons___fr"
  }, {
    path: "/fr/admin/notification",
    component: _754fce44,
    name: "admin-notification___fr"
  }, {
    path: "/fr/admin/online-user",
    component: _57fd2288,
    name: "admin-online-user___fr"
  }, {
    path: "/fr/admin/report-dashboard",
    component: _2fcac614,
    name: "admin-report-dashboard___fr"
  }, {
    path: "/fr/admin/reviews",
    component: _57f53c52,
    name: "admin-reviews___fr"
  }, {
    path: "/fr/admin/university",
    component: _3f93c2a7,
    name: "admin-university___fr"
  }, {
    path: "/fr/admin/user-change",
    component: _69e1a529,
    name: "admin-user-change___fr"
  }, {
    path: "/fr/admin/users",
    component: _0b5d537f,
    name: "admin-users___fr"
  }, {
    path: "/fr/legal/privacy-policy",
    component: _f14fa6cc,
    name: "legal-privacy-policy___fr"
  }, {
    path: "/fr/legal/terms-of-agreement",
    component: _3325529d,
    name: "legal-terms-of-agreement___fr"
  }, {
    path: "/fa/tutor/:id",
    component: _7ee1c150,
    name: "tutor-id___fa"
  }, {
    path: "/fa/tutors/:id?",
    component: _2f3a1cb2,
    name: "tutors-id___fa"
  }, {
    path: "/fr/tutor/:id",
    component: _7ee1c150,
    name: "tutor-id___fr"
  }, {
    path: "/fr/tutors/:id?",
    component: _2f3a1cb2,
    name: "tutors-id___fr"
  }, {
    path: "/tutor/:id",
    component: _7ee1c150,
    name: "tutor-id___en"
  }, {
    path: "/tutors/:id?",
    component: _2f3a1cb2,
    name: "tutors-id___en"
  }, {
    path: "/",
    component: _5d52491c,
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

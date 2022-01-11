import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5e34d4bf = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _76856858 = () => interopDefault(import('..\\pages\\activation.vue' /* webpackChunkName: "pages/activation" */))
const _e116e43e = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _5776df09 = () => interopDefault(import('..\\pages\\client.vue' /* webpackChunkName: "pages/client" */))
const _9d5190ae = () => interopDefault(import('..\\pages\\contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _7decaf84 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _f5413bb0 = () => interopDefault(import('..\\pages\\FAQ.vue' /* webpackChunkName: "pages/FAQ" */))
const _c34aafa6 = () => interopDefault(import('..\\pages\\forget-password.vue' /* webpackChunkName: "pages/forget-password" */))
const _4794529b = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _427ae07b = () => interopDefault(import('..\\pages\\reg-cert.vue' /* webpackChunkName: "pages/reg-cert" */))
const _3cf40d78 = () => interopDefault(import('..\\pages\\reg-educ.vue' /* webpackChunkName: "pages/reg-educ" */))
const _09d2e382 = () => interopDefault(import('..\\pages\\reg-expe.vue' /* webpackChunkName: "pages/reg-expe" */))
const _f86c073e = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _da4ad0d2 = () => interopDefault(import('..\\pages\\reset-password.vue' /* webpackChunkName: "pages/reset-password" */))
const _62e3883c = () => interopDefault(import('..\\pages\\student-details.vue' /* webpackChunkName: "pages/student-details" */))
const _41cb0edd = () => interopDefault(import('..\\pages\\tutor-details.vue' /* webpackChunkName: "pages/tutor-details" */))
const _7c267648 = () => interopDefault(import('..\\pages\\tutor-finish.vue' /* webpackChunkName: "pages/tutor-finish" */))
const _d2062672 = () => interopDefault(import('..\\pages\\tutor-subject.vue' /* webpackChunkName: "pages/tutor-subject" */))
const _67b3267f = () => interopDefault(import('..\\pages\\tutor-timing.vue' /* webpackChunkName: "pages/tutor-timing" */))
const _8f69fd2a = () => interopDefault(import('..\\pages\\tutor-transcript.vue' /* webpackChunkName: "pages/tutor-transcript" */))
const _0743ee3f = () => interopDefault(import('..\\pages\\upload.vue' /* webpackChunkName: "pages/upload" */))
const _63907a40 = () => interopDefault(import('..\\pages\\user-panel.vue' /* webpackChunkName: "pages/user-panel" */))
const _77205b7c = () => interopDefault(import('..\\pages\\user-panel\\index.vue' /* webpackChunkName: "pages/user-panel/index" */))
const _eb750fc6 = () => interopDefault(import('..\\pages\\user-panel\\account.vue' /* webpackChunkName: "pages/user-panel/account" */))
const _bc57c482 = () => interopDefault(import('..\\pages\\user-panel\\certs.vue' /* webpackChunkName: "pages/user-panel/certs" */))
const _52bd5428 = () => interopDefault(import('..\\pages\\user-panel\\courses.vue' /* webpackChunkName: "pages/user-panel/courses" */))
const _37a7c3d4 = () => interopDefault(import('..\\pages\\user-panel\\educs.vue' /* webpackChunkName: "pages/user-panel/educs" */))
const _06a3af0a = () => interopDefault(import('..\\pages\\user-panel\\expes.vue' /* webpackChunkName: "pages/user-panel/expes" */))
const _7f04312b = () => interopDefault(import('..\\pages\\user-panel\\lessons.vue' /* webpackChunkName: "pages/user-panel/lessons" */))
const _1b2e8bda = () => interopDefault(import('..\\pages\\user-panel\\my-lessons.vue' /* webpackChunkName: "pages/user-panel/my-lessons" */))
const _613c5999 = () => interopDefault(import('..\\pages\\user-panel\\profile.vue' /* webpackChunkName: "pages/user-panel/profile" */))
const _c99c4102 = () => interopDefault(import('..\\pages\\user-panel\\request.vue' /* webpackChunkName: "pages/user-panel/request" */))
const _62949cf8 = () => interopDefault(import('..\\pages\\user-panel\\requests.vue' /* webpackChunkName: "pages/user-panel/requests" */))
const _bfeb6506 = () => interopDefault(import('..\\pages\\user-panel\\st-profile.vue' /* webpackChunkName: "pages/user-panel/st-profile" */))
const _32b0ab9c = () => interopDefault(import('..\\pages\\user-panel\\subject.vue' /* webpackChunkName: "pages/user-panel/subject" */))
const _360041ba = () => interopDefault(import('..\\pages\\user-panel\\system-msg.vue' /* webpackChunkName: "pages/user-panel/system-msg" */))
const _78ec29b6 = () => interopDefault(import('..\\pages\\user-panel\\taken-lessons.vue' /* webpackChunkName: "pages/user-panel/taken-lessons" */))
const _605c8dec = () => interopDefault(import('..\\pages\\user-panel\\timing.vue' /* webpackChunkName: "pages/user-panel/timing" */))
const _c0914826 = () => interopDefault(import('..\\pages\\user-panel\\tutor-transcript.vue' /* webpackChunkName: "pages/user-panel/tutor-transcript" */))
const _0206f476 = () => interopDefault(import('..\\pages\\admin\\faq-manager.vue' /* webpackChunkName: "pages/admin/faq-manager" */))
const _058d3f7c = () => interopDefault(import('..\\pages\\admin\\gender.vue' /* webpackChunkName: "pages/admin/gender" */))
const _be77ce0e = () => interopDefault(import('..\\pages\\admin\\language-manager.vue' /* webpackChunkName: "pages/admin/language-manager" */))
const _c86efdec = () => interopDefault(import('..\\pages\\admin\\lessons.vue' /* webpackChunkName: "pages/admin/lessons" */))
const _6de2deac = () => interopDefault(import('..\\pages\\admin\\notification.vue' /* webpackChunkName: "pages/admin/notification" */))
const _74f8ea2c = () => interopDefault(import('..\\pages\\admin\\reviews.vue' /* webpackChunkName: "pages/admin/reviews" */))
const _62ffcd0f = () => interopDefault(import('..\\pages\\admin\\university.vue' /* webpackChunkName: "pages/admin/university" */))
const _9812307e = () => interopDefault(import('..\\pages\\admin\\user-change.vue' /* webpackChunkName: "pages/admin/user-change" */))
const _56432fd2 = () => interopDefault(import('..\\pages\\admin\\users.vue' /* webpackChunkName: "pages/admin/users" */))
const _b12e79fc = () => interopDefault(import('..\\pages\\legal\\privacy-policy.vue' /* webpackChunkName: "pages/legal/privacy-policy" */))
const _12b47505 = () => interopDefault(import('..\\pages\\legal\\terms-of-agreement.vue' /* webpackChunkName: "pages/legal/terms-of-agreement" */))
const _3809ac80 = () => interopDefault(import('..\\pages\\tutor\\_id\\index.vue' /* webpackChunkName: "pages/tutor/_id/index" */))
const _32be2be2 = () => interopDefault(import('..\\pages\\tutors\\_id.vue' /* webpackChunkName: "pages/tutors/_id" */))

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
    component: _5e34d4bf,
    name: "about___en"
  }, {
    path: "/activation",
    component: _76856858,
    name: "activation___en"
  }, {
    path: "/admin",
    component: _e116e43e,
    name: "admin___en"
  }, {
    path: "/client",
    component: _5776df09,
    name: "client___en"
  }, {
    path: "/contact-us",
    component: _9d5190ae,
    name: "contact-us___en"
  }, {
    path: "/fa",
    component: _7decaf84,
    name: "index___fa"
  }, {
    path: "/FAQ",
    component: _f5413bb0,
    name: "FAQ___en"
  }, {
    path: "/forget-password",
    component: _c34aafa6,
    name: "forget-password___en"
  }, {
    path: "/fr",
    component: _7decaf84,
    name: "index___fr"
  }, {
    path: "/login",
    component: _4794529b,
    name: "login___en"
  }, {
    path: "/reg-cert",
    component: _427ae07b,
    name: "reg-cert___en"
  }, {
    path: "/reg-educ",
    component: _3cf40d78,
    name: "reg-educ___en"
  }, {
    path: "/reg-expe",
    component: _09d2e382,
    name: "reg-expe___en"
  }, {
    path: "/register",
    component: _f86c073e,
    name: "register___en"
  }, {
    path: "/reset-password",
    component: _da4ad0d2,
    name: "reset-password___en"
  }, {
    path: "/student-details",
    component: _62e3883c,
    name: "student-details___en"
  }, {
    path: "/tutor-details",
    component: _41cb0edd,
    name: "tutor-details___en"
  }, {
    path: "/tutor-finish",
    component: _7c267648,
    name: "tutor-finish___en"
  }, {
    path: "/tutor-subject",
    component: _d2062672,
    name: "tutor-subject___en"
  }, {
    path: "/tutor-timing",
    component: _67b3267f,
    name: "tutor-timing___en"
  }, {
    path: "/tutor-transcript",
    component: _8f69fd2a,
    name: "tutor-transcript___en"
  }, {
    path: "/upload",
    component: _0743ee3f,
    name: "upload___en"
  }, {
    path: "/user-panel",
    component: _63907a40,
    children: [{
      path: "",
      component: _77205b7c,
      name: "user-panel___en"
    }, {
      path: "account",
      component: _eb750fc6,
      name: "user-panel-account___en"
    }, {
      path: "certs",
      component: _bc57c482,
      name: "user-panel-certs___en"
    }, {
      path: "courses",
      component: _52bd5428,
      name: "user-panel-courses___en"
    }, {
      path: "educs",
      component: _37a7c3d4,
      name: "user-panel-educs___en"
    }, {
      path: "expes",
      component: _06a3af0a,
      name: "user-panel-expes___en"
    }, {
      path: "lessons",
      component: _7f04312b,
      name: "user-panel-lessons___en"
    }, {
      path: "my-lessons",
      component: _1b2e8bda,
      name: "user-panel-my-lessons___en"
    }, {
      path: "profile",
      component: _613c5999,
      name: "user-panel-profile___en"
    }, {
      path: "request",
      component: _c99c4102,
      name: "user-panel-request___en"
    }, {
      path: "requests",
      component: _62949cf8,
      name: "user-panel-requests___en"
    }, {
      path: "st-profile",
      component: _bfeb6506,
      name: "user-panel-st-profile___en"
    }, {
      path: "subject",
      component: _32b0ab9c,
      name: "user-panel-subject___en"
    }, {
      path: "system-msg",
      component: _360041ba,
      name: "user-panel-system-msg___en"
    }, {
      path: "taken-lessons",
      component: _78ec29b6,
      name: "user-panel-taken-lessons___en"
    }, {
      path: "timing",
      component: _605c8dec,
      name: "user-panel-timing___en"
    }, {
      path: "tutor-transcript",
      component: _c0914826,
      name: "user-panel-tutor-transcript___en"
    }]
  }, {
    path: "/admin/faq-manager",
    component: _0206f476,
    name: "admin-faq-manager___en"
  }, {
    path: "/admin/gender",
    component: _058d3f7c,
    name: "admin-gender___en"
  }, {
    path: "/admin/language-manager",
    component: _be77ce0e,
    name: "admin-language-manager___en"
  }, {
    path: "/admin/lessons",
    component: _c86efdec,
    name: "admin-lessons___en"
  }, {
    path: "/admin/notification",
    component: _6de2deac,
    name: "admin-notification___en"
  }, {
    path: "/admin/reviews",
    component: _74f8ea2c,
    name: "admin-reviews___en"
  }, {
    path: "/admin/university",
    component: _62ffcd0f,
    name: "admin-university___en"
  }, {
    path: "/admin/user-change",
    component: _9812307e,
    name: "admin-user-change___en"
  }, {
    path: "/admin/users",
    component: _56432fd2,
    name: "admin-users___en"
  }, {
    path: "/fa/about",
    component: _5e34d4bf,
    name: "about___fa"
  }, {
    path: "/fa/activation",
    component: _76856858,
    name: "activation___fa"
  }, {
    path: "/fa/admin",
    component: _e116e43e,
    name: "admin___fa"
  }, {
    path: "/fa/client",
    component: _5776df09,
    name: "client___fa"
  }, {
    path: "/fa/contact-us",
    component: _9d5190ae,
    name: "contact-us___fa"
  }, {
    path: "/fa/FAQ",
    component: _f5413bb0,
    name: "FAQ___fa"
  }, {
    path: "/fa/forget-password",
    component: _c34aafa6,
    name: "forget-password___fa"
  }, {
    path: "/fa/login",
    component: _4794529b,
    name: "login___fa"
  }, {
    path: "/fa/reg-cert",
    component: _427ae07b,
    name: "reg-cert___fa"
  }, {
    path: "/fa/reg-educ",
    component: _3cf40d78,
    name: "reg-educ___fa"
  }, {
    path: "/fa/reg-expe",
    component: _09d2e382,
    name: "reg-expe___fa"
  }, {
    path: "/fa/register",
    component: _f86c073e,
    name: "register___fa"
  }, {
    path: "/fa/reset-password",
    component: _da4ad0d2,
    name: "reset-password___fa"
  }, {
    path: "/fa/student-details",
    component: _62e3883c,
    name: "student-details___fa"
  }, {
    path: "/fa/tutor-details",
    component: _41cb0edd,
    name: "tutor-details___fa"
  }, {
    path: "/fa/tutor-finish",
    component: _7c267648,
    name: "tutor-finish___fa"
  }, {
    path: "/fa/tutor-subject",
    component: _d2062672,
    name: "tutor-subject___fa"
  }, {
    path: "/fa/tutor-timing",
    component: _67b3267f,
    name: "tutor-timing___fa"
  }, {
    path: "/fa/tutor-transcript",
    component: _8f69fd2a,
    name: "tutor-transcript___fa"
  }, {
    path: "/fa/upload",
    component: _0743ee3f,
    name: "upload___fa"
  }, {
    path: "/fa/user-panel",
    component: _63907a40,
    children: [{
      path: "",
      component: _77205b7c,
      name: "user-panel___fa"
    }, {
      path: "account",
      component: _eb750fc6,
      name: "user-panel-account___fa"
    }, {
      path: "certs",
      component: _bc57c482,
      name: "user-panel-certs___fa"
    }, {
      path: "courses",
      component: _52bd5428,
      name: "user-panel-courses___fa"
    }, {
      path: "educs",
      component: _37a7c3d4,
      name: "user-panel-educs___fa"
    }, {
      path: "expes",
      component: _06a3af0a,
      name: "user-panel-expes___fa"
    }, {
      path: "lessons",
      component: _7f04312b,
      name: "user-panel-lessons___fa"
    }, {
      path: "my-lessons",
      component: _1b2e8bda,
      name: "user-panel-my-lessons___fa"
    }, {
      path: "profile",
      component: _613c5999,
      name: "user-panel-profile___fa"
    }, {
      path: "request",
      component: _c99c4102,
      name: "user-panel-request___fa"
    }, {
      path: "requests",
      component: _62949cf8,
      name: "user-panel-requests___fa"
    }, {
      path: "st-profile",
      component: _bfeb6506,
      name: "user-panel-st-profile___fa"
    }, {
      path: "subject",
      component: _32b0ab9c,
      name: "user-panel-subject___fa"
    }, {
      path: "system-msg",
      component: _360041ba,
      name: "user-panel-system-msg___fa"
    }, {
      path: "taken-lessons",
      component: _78ec29b6,
      name: "user-panel-taken-lessons___fa"
    }, {
      path: "timing",
      component: _605c8dec,
      name: "user-panel-timing___fa"
    }, {
      path: "tutor-transcript",
      component: _c0914826,
      name: "user-panel-tutor-transcript___fa"
    }]
  }, {
    path: "/fr/about",
    component: _5e34d4bf,
    name: "about___fr"
  }, {
    path: "/fr/activation",
    component: _76856858,
    name: "activation___fr"
  }, {
    path: "/fr/admin",
    component: _e116e43e,
    name: "admin___fr"
  }, {
    path: "/fr/client",
    component: _5776df09,
    name: "client___fr"
  }, {
    path: "/fr/contact-us",
    component: _9d5190ae,
    name: "contact-us___fr"
  }, {
    path: "/fr/FAQ",
    component: _f5413bb0,
    name: "FAQ___fr"
  }, {
    path: "/fr/forget-password",
    component: _c34aafa6,
    name: "forget-password___fr"
  }, {
    path: "/fr/login",
    component: _4794529b,
    name: "login___fr"
  }, {
    path: "/fr/reg-cert",
    component: _427ae07b,
    name: "reg-cert___fr"
  }, {
    path: "/fr/reg-educ",
    component: _3cf40d78,
    name: "reg-educ___fr"
  }, {
    path: "/fr/reg-expe",
    component: _09d2e382,
    name: "reg-expe___fr"
  }, {
    path: "/fr/register",
    component: _f86c073e,
    name: "register___fr"
  }, {
    path: "/fr/reset-password",
    component: _da4ad0d2,
    name: "reset-password___fr"
  }, {
    path: "/fr/student-details",
    component: _62e3883c,
    name: "student-details___fr"
  }, {
    path: "/fr/tutor-details",
    component: _41cb0edd,
    name: "tutor-details___fr"
  }, {
    path: "/fr/tutor-finish",
    component: _7c267648,
    name: "tutor-finish___fr"
  }, {
    path: "/fr/tutor-subject",
    component: _d2062672,
    name: "tutor-subject___fr"
  }, {
    path: "/fr/tutor-timing",
    component: _67b3267f,
    name: "tutor-timing___fr"
  }, {
    path: "/fr/tutor-transcript",
    component: _8f69fd2a,
    name: "tutor-transcript___fr"
  }, {
    path: "/fr/upload",
    component: _0743ee3f,
    name: "upload___fr"
  }, {
    path: "/fr/user-panel",
    component: _63907a40,
    children: [{
      path: "",
      component: _77205b7c,
      name: "user-panel___fr"
    }, {
      path: "account",
      component: _eb750fc6,
      name: "user-panel-account___fr"
    }, {
      path: "certs",
      component: _bc57c482,
      name: "user-panel-certs___fr"
    }, {
      path: "courses",
      component: _52bd5428,
      name: "user-panel-courses___fr"
    }, {
      path: "educs",
      component: _37a7c3d4,
      name: "user-panel-educs___fr"
    }, {
      path: "expes",
      component: _06a3af0a,
      name: "user-panel-expes___fr"
    }, {
      path: "lessons",
      component: _7f04312b,
      name: "user-panel-lessons___fr"
    }, {
      path: "my-lessons",
      component: _1b2e8bda,
      name: "user-panel-my-lessons___fr"
    }, {
      path: "profile",
      component: _613c5999,
      name: "user-panel-profile___fr"
    }, {
      path: "request",
      component: _c99c4102,
      name: "user-panel-request___fr"
    }, {
      path: "requests",
      component: _62949cf8,
      name: "user-panel-requests___fr"
    }, {
      path: "st-profile",
      component: _bfeb6506,
      name: "user-panel-st-profile___fr"
    }, {
      path: "subject",
      component: _32b0ab9c,
      name: "user-panel-subject___fr"
    }, {
      path: "system-msg",
      component: _360041ba,
      name: "user-panel-system-msg___fr"
    }, {
      path: "taken-lessons",
      component: _78ec29b6,
      name: "user-panel-taken-lessons___fr"
    }, {
      path: "timing",
      component: _605c8dec,
      name: "user-panel-timing___fr"
    }, {
      path: "tutor-transcript",
      component: _c0914826,
      name: "user-panel-tutor-transcript___fr"
    }]
  }, {
    path: "/legal/privacy-policy",
    component: _b12e79fc,
    name: "legal-privacy-policy___en"
  }, {
    path: "/legal/terms-of-agreement",
    component: _12b47505,
    name: "legal-terms-of-agreement___en"
  }, {
    path: "/fa/admin/faq-manager",
    component: _0206f476,
    name: "admin-faq-manager___fa"
  }, {
    path: "/fa/admin/gender",
    component: _058d3f7c,
    name: "admin-gender___fa"
  }, {
    path: "/fa/admin/language-manager",
    component: _be77ce0e,
    name: "admin-language-manager___fa"
  }, {
    path: "/fa/admin/lessons",
    component: _c86efdec,
    name: "admin-lessons___fa"
  }, {
    path: "/fa/admin/notification",
    component: _6de2deac,
    name: "admin-notification___fa"
  }, {
    path: "/fa/admin/reviews",
    component: _74f8ea2c,
    name: "admin-reviews___fa"
  }, {
    path: "/fa/admin/university",
    component: _62ffcd0f,
    name: "admin-university___fa"
  }, {
    path: "/fa/admin/user-change",
    component: _9812307e,
    name: "admin-user-change___fa"
  }, {
    path: "/fa/admin/users",
    component: _56432fd2,
    name: "admin-users___fa"
  }, {
    path: "/fa/legal/privacy-policy",
    component: _b12e79fc,
    name: "legal-privacy-policy___fa"
  }, {
    path: "/fa/legal/terms-of-agreement",
    component: _12b47505,
    name: "legal-terms-of-agreement___fa"
  }, {
    path: "/fr/admin/faq-manager",
    component: _0206f476,
    name: "admin-faq-manager___fr"
  }, {
    path: "/fr/admin/gender",
    component: _058d3f7c,
    name: "admin-gender___fr"
  }, {
    path: "/fr/admin/language-manager",
    component: _be77ce0e,
    name: "admin-language-manager___fr"
  }, {
    path: "/fr/admin/lessons",
    component: _c86efdec,
    name: "admin-lessons___fr"
  }, {
    path: "/fr/admin/notification",
    component: _6de2deac,
    name: "admin-notification___fr"
  }, {
    path: "/fr/admin/reviews",
    component: _74f8ea2c,
    name: "admin-reviews___fr"
  }, {
    path: "/fr/admin/university",
    component: _62ffcd0f,
    name: "admin-university___fr"
  }, {
    path: "/fr/admin/user-change",
    component: _9812307e,
    name: "admin-user-change___fr"
  }, {
    path: "/fr/admin/users",
    component: _56432fd2,
    name: "admin-users___fr"
  }, {
    path: "/fr/legal/privacy-policy",
    component: _b12e79fc,
    name: "legal-privacy-policy___fr"
  }, {
    path: "/fr/legal/terms-of-agreement",
    component: _12b47505,
    name: "legal-terms-of-agreement___fr"
  }, {
    path: "/fa/tutor/:id",
    component: _3809ac80,
    name: "tutor-id___fa"
  }, {
    path: "/fa/tutors/:id?",
    component: _32be2be2,
    name: "tutors-id___fa"
  }, {
    path: "/fr/tutor/:id",
    component: _3809ac80,
    name: "tutor-id___fr"
  }, {
    path: "/fr/tutors/:id?",
    component: _32be2be2,
    name: "tutors-id___fr"
  }, {
    path: "/tutor/:id",
    component: _3809ac80,
    name: "tutor-id___en"
  }, {
    path: "/tutors/:id?",
    component: _32be2be2,
    name: "tutors-id___en"
  }, {
    path: "/",
    component: _7decaf84,
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

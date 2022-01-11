exports.ids = [41];
exports.modules = {

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(196);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("6386add8", content, true, context)
};

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_user_panel_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(132);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_user_panel_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_user_panel_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_user_panel_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_user_panel_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nav-item .active,.nav-item a:hover{color:var(--color1)}.sub .nav-item{padding-left:30px!important}.m-menu-icon{font-size:larger;width:30px!important;margin-right:10px}.m-menu-icon-sub{font-size:medium;width:30px!important}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/user-panel.vue?vue&type=template&id=f8594ffa&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-container',{staticClass:"h-100 mx-0 px-0",attrs:{"fluid":""}},[_c('div',{staticClass:"d-flex min-vh-100"},[_c('client-only',[_c('b-button',{directives:[{name:"show",rawName:"v-show",value:(_vm.windowWidth!== 'xl' && _vm.windowWidth !== 'lg'),expression:"windowWidth!== 'xl' && windowWidth !== 'lg'"},{name:"b-toggle",rawName:"v-b-toggle.sidebar-1",modifiers:{"sidebar-1":true}}],staticClass:"btn  btn-primary",staticStyle:{"border-bottom-right-radius":"25px!important","border-top-right-radius":"25px!important","position":"fixed","left":"-5px","margin-top":"25px","z-index":"999"},attrs:{"squared":""}},[_c('font-awesome-icon',{staticStyle:{"font-size":"small","margin-bottom":"1px","color":"#fff"},attrs:{"icon":['fas', 'chevron-right']}})],1),_vm._v(" "),_c('b-nav',{directives:[{name:"show",rawName:"v-show",value:(_vm.windowWidth=== 'xl' || _vm.windowWidth === 'lg'),expression:"windowWidth=== 'xl' || windowWidth === 'lg'"}],staticClass:"px-3 py-4 shadow",staticStyle:{"width":"400px"},attrs:{"vertical":""}},[(_vm.hasPermission('student') || _vm.hasPermission('tutor'))?_c('b-nav-item',{attrs:{"to":"/user-panel/taken-lessons","active":this.$route.path === '/user-panel/taken-lessons' || this.$route.path === '/user-panel/taken-lessons'}},[_c('font-awesome-icon',{staticClass:"m-menu-icon",attrs:{"icon":['far', 'address-book']}}),_vm._v("\n          "+_vm._s(_vm.$t('myLessons.taken'))+"\n        ")],1):_vm._e(),_vm._v(" "),_c('b-nav-item',{attrs:{"to":"/user-panel/requests","active":this.$route.path === '/user-panel/requests'}},[_c('font-awesome-icon',{staticClass:"m-menu-icon",attrs:{"icon":['far', 'comment']}}),_vm._v("\n          "+_vm._s(_vm.$t('requests'))+"\n        ")],1),_vm._v(" "),(_vm.hasPermission('tutor'))?_c('b-nav-item',{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-1",modifiers:{"accordion-1":true}}],staticClass:"accordion"},[_c('font-awesome-icon',{staticClass:"m-menu-icon",attrs:{"icon":['fas', 'chalkboard-teacher']}}),_vm._v("\n          "+_vm._s(_vm.$t('tutor_account_profile'))+"\n        ")],1):_vm._e(),_vm._v(" "),_c('b-collapse',{attrs:{"id":"accordion-1","visible":"","accordion":"my-accordion"}},[_c('b-nav',{staticClass:"sub",attrs:{"vertical":""}},[(_vm.hasPermission('tutor'))?_c('b-nav-item',{attrs:{"to":"/user-panel/my-lessons","active":this.$route.path === '/user-panel/my-lessons' || this.$route.path === '/user-panel/my-lessons'}},[_c('font-awesome-icon',{staticClass:"m-menu-icon-sub",attrs:{"icon":['far', 'calendar-alt']}}),_vm._v("\n              "+_vm._s(_vm.$t('myLessons'))+"\n            ")],1):_vm._e(),_vm._v(" "),(_vm.hasPermission('tutor'))?_c('b-nav-item',{attrs:{"to":"/user-panel/subject","active":this.$route.path === '/user-panel/subject'}},[_c('font-awesome-icon',{staticClass:"m-menu-icon-sub",attrs:{"icon":['fas', 'book-open']}}),_vm._v("\n              "+_vm._s(_vm.$t('Course.label'))+"\n            ")],1):_vm._e(),_vm._v(" "),(_vm.hasPermission('tutor'))?_c('b-nav-item',{attrs:{"to":"/user-panel/tutor-transcript","active":this.$route.path === '/user-panel/tutor-transcript'}},[_c('font-awesome-icon',{staticClass:"m-menu-icon-sub",attrs:{"icon":['fas', 'scroll']}}),_vm._v("\n              "+_vm._s(_vm.$t('transcript.title'))+"\n            ")],1):_vm._e(),_vm._v(" "),(_vm.hasPermission('tutor'))?_c('b-nav-item',{attrs:{"to":"/user-panel/educs","active":this.$route.path === '/user-panel/educs'}},[_c('font-awesome-icon',{staticClass:"m-menu-icon-sub",attrs:{"icon":['fas', 'graduation-cap']}}),_vm._v("\n              "+_vm._s(_vm.$t('education'))+"\n            ")],1):_vm._e(),_vm._v("\n            "+_vm._s(_vm.$t())+"\n\n            "),(_vm.hasPermission('tutor'))?_c('b-nav-item',{attrs:{"to":"/user-panel/timing","active":this.$route.path === '/user-panel/timing'}},[_c('font-awesome-icon',{staticClass:"m-menu-icon-sub",attrs:{"icon":['fas', 'clock']}}),_vm._v("\n              "+_vm._s(_vm.$t('Timing'))+"\n            ")],1):_vm._e()],1)],1),_vm._v(" "),_c('b-nav-item',{attrs:{"to":"/user-panel/system-msg","active":this.$route.path === '/user-panel/system-msg'}},[_c('font-awesome-icon',{staticClass:"m-menu-icon",staticStyle:{"font-size":"22px","margin-top":"2px"},attrs:{"icon":['far', 'bell']}}),_vm._v("\n\n          "+_vm._s(_vm.$t('tutor_account_system_msg'))+"\n        ")],1),_vm._v(" "),(_vm.hasPermission('tutor'))?_c('b-nav-item',{attrs:{"to":"/user-panel/profile","active":this.$route.path === '/user-panel/profile'}},[_c('font-awesome-icon',{staticClass:"m-menu-icon",attrs:{"icon":['fas', 'user']}}),_vm._v("\n          "+_vm._s(_vm.$t('profile'))+"\n        ")],1):_c('b-nav-item',{attrs:{"to":"/user-panel/st-profile","active":this.$route.path === '/user-panel/st-profile'}},[_c('font-awesome-icon',{staticClass:"m-menu-icon",attrs:{"icon":['fas', 'user']}}),_vm._v("\n          "+_vm._s(_vm.$t('profile'))+"\n        ")],1),_vm._v(" "),_c('b-nav-item',{attrs:{"to":"/user-panel/account","active":this.$route.path === '/user-panel/account'}},[_c('font-awesome-icon',{staticClass:"m-menu-icon",attrs:{"icon":['fas', 'lock']}}),_vm._v("\n          "+_vm._s(_vm.$t('account'))+"\n        ")],1)],1),_vm._v(" "),_c('b-sidebar',{directives:[{name:"show",rawName:"v-show",value:(_vm.windowWidth !== 'xl' && _vm.windowWidth !== 'lg'),expression:"windowWidth !== 'xl' && windowWidth !== 'lg'"}],attrs:{"id":"sidebar-1","backdrop":"","no-header":"","no-close-on-route-change":true,"bg-variant":"white","shadow":""}},[_c('b-button',{directives:[{name:"show",rawName:"v-show",value:(_vm.windowWidth !== 'xl' && _vm.windowWidth !== 'lg'),expression:"windowWidth !== 'xl' && windowWidth !== 'lg'"},{name:"b-toggle",rawName:"v-b-toggle.sidebar-1",modifiers:{"sidebar-1":true}}],staticClass:"btn",staticStyle:{"color":"var(--color1)","border-bottom-right-radius":"25px!important","border-top-right-radius":"25px!important","position":"absolute","right":"0px","z-index":"999"},attrs:{"variant":"link"}},[_c('font-awesome-icon',{staticStyle:{"font-size":"small","margin-bottom":"1px"},attrs:{"icon":['fas', 'chevron-left']}})],1),_vm._v(" "),_c('b-nav',{staticClass:"pt-4",attrs:{"vertical":""}},[(_vm.hasPermission('student') || _vm.hasPermission('tutor'))?_c('b-nav-item',{attrs:{"to":"/user-panel/taken-lessons","active":this.$route.path === '/user-panel/taken-lessons' || this.$route.path === '/user-panel/taken-lessons'}},[_c('font-awesome-icon',{staticClass:"m-menu-icon",attrs:{"icon":['far', 'address-book']}}),_vm._v("\n            "+_vm._s(_vm.$t('myLessons.taken'))+"\n          ")],1):_vm._e(),_vm._v(" "),_c('b-nav-item',{attrs:{"to":"/user-panel/requests","active":this.$route.path === '/user-panel/requests'}},[_c('font-awesome-icon',{staticClass:"m-menu-icon",attrs:{"icon":['far', 'comment']}}),_vm._v("\n            "+_vm._s(_vm.$t('requests'))+"\n          ")],1),_vm._v(" "),(_vm.hasPermission('tutor'))?_c('b-nav-item',{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-1",modifiers:{"accordion-1":true}}],staticClass:"accordion"},[_c('font-awesome-icon',{staticClass:"m-menu-icon",attrs:{"icon":['fas', 'chalkboard-teacher']}}),_vm._v("\n            "+_vm._s(_vm.$t('tutor_account_profile'))+"\n          ")],1):_vm._e(),_vm._v(" "),_c('b-collapse',{attrs:{"id":"accordion-1","visible":"","accordion":"my-accordion"}},[_c('b-nav',{staticClass:"sub",attrs:{"vertical":""}},[(_vm.hasPermission('tutor'))?_c('b-nav-item',{attrs:{"to":"/user-panel/my-lessons","active":this.$route.path === '/user-panel/my-lessons' || this.$route.path === '/user-panel/my-lessons'}},[_c('font-awesome-icon',{staticClass:"m-menu-icon-sub",attrs:{"icon":['far', 'calendar-alt']}}),_vm._v("\n                "+_vm._s(_vm.$t('myLessons'))+"\n              ")],1):_vm._e(),_vm._v(" "),(_vm.hasPermission('tutor'))?_c('b-nav-item',{attrs:{"to":"/user-panel/subject","active":this.$route.path === '/user-panel/subject'}},[_c('font-awesome-icon',{staticClass:"m-menu-icon-sub",attrs:{"icon":['fas', 'book-open']}}),_vm._v("\n                "+_vm._s(_vm.$t('Course.label'))+"\n              ")],1):_vm._e(),_vm._v(" "),(_vm.hasPermission('tutor'))?_c('b-nav-item',{attrs:{"to":"/user-panel/tutor-transcript","active":this.$route.path === '/user-panel/tutor-transcript'}},[_c('font-awesome-icon',{staticClass:"m-menu-icon-sub",attrs:{"icon":['fas', 'scroll']}}),_vm._v("\n                "+_vm._s(_vm.$t('transcript.title'))+"\n              ")],1):_vm._e(),_vm._v(" "),(_vm.hasPermission('tutor'))?_c('b-nav-item',{attrs:{"to":"/user-panel/educs","active":this.$route.path === '/user-panel/educs'}},[_c('font-awesome-icon',{staticClass:"m-menu-icon-sub",attrs:{"icon":['fas', 'graduation-cap']}}),_vm._v("\n                "+_vm._s(_vm.$t('education'))+"\n              ")],1):_vm._e(),_vm._v("\n              "+_vm._s(_vm.$t())+"\n\n              "),(_vm.hasPermission('tutor'))?_c('b-nav-item',{attrs:{"to":"/user-panel/timing","active":this.$route.path === '/user-panel/timing'}},[_c('font-awesome-icon',{staticClass:"m-menu-icon-sub",attrs:{"icon":['fas', 'clock']}}),_vm._v("\n                "+_vm._s(_vm.$t('Timing'))+"\n              ")],1):_vm._e()],1)],1),_vm._v(" "),_c('b-nav-item',{attrs:{"to":"/user-panel/system-msg","active":this.$route.path === '/user-panel/system-msg'}},[_c('font-awesome-icon',{staticClass:"m-menu-icon",staticStyle:{"font-size":"22px","margin-top":"2px"},attrs:{"icon":['far', 'bell']}}),_vm._v("\n\n            "+_vm._s(_vm.$t('tutor_account_system_msg'))+"\n          ")],1),_vm._v(" "),(_vm.hasPermission('tutor'))?_c('b-nav-item',{attrs:{"to":"/user-panel/profile","active":this.$route.path === '/user-panel/profile'}},[_c('font-awesome-icon',{staticClass:"m-menu-icon",attrs:{"icon":['fas', 'user']}}),_vm._v("\n            "+_vm._s(_vm.$t('profile'))+"\n          ")],1):_c('b-nav-item',{attrs:{"to":"/user-panel/st-profile","active":this.$route.path === '/user-panel/st-profile'}},[_c('font-awesome-icon',{staticClass:"m-menu-icon",attrs:{"icon":['fas', 'user']}}),_vm._v("\n            "+_vm._s(_vm.$t('profile'))+"\n          ")],1),_vm._v(" "),_c('b-nav-item',{attrs:{"to":"/user-panel/account","active":this.$route.path === '/user-panel/account'}},[_c('font-awesome-icon',{staticClass:"m-menu-icon",attrs:{"icon":['fas', 'lock']}}),_vm._v("\n            "+_vm._s(_vm.$t('account'))+"\n          ")],1)],1)],1)],1),_vm._v(" "),_c('div',{staticStyle:{"width":"100%"}},[_c('NuxtChild')],1)],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/user-panel.vue?vue&type=template&id=f8594ffa&

// EXTERNAL MODULE: external "@fortawesome/fontawesome-svg-core"
var fontawesome_svg_core_ = __webpack_require__(4);

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(1);

// EXTERNAL MODULE: external "@fortawesome/free-regular-svg-icons"
var free_regular_svg_icons_ = __webpack_require__(9);

// EXTERNAL MODULE: external "@fortawesome/free-brands-svg-icons"
var free_brands_svg_icons_ = __webpack_require__(23);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/user-panel.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




fontawesome_svg_core_["library"].add([free_solid_svg_icons_["faChalkboardTeacher"], free_regular_svg_icons_["faAddressBook"], free_solid_svg_icons_["faScroll"], free_solid_svg_icons_["faBriefcase"], free_solid_svg_icons_["faCertificate"], free_solid_svg_icons_["faClock"], free_solid_svg_icons_["faGraduationCap"], free_regular_svg_icons_["faCalendarAlt"], free_solid_svg_icons_["faCog"], free_solid_svg_icons_["faBookOpen"], free_regular_svg_icons_["faComment"], free_solid_svg_icons_["faTasks"], free_solid_svg_icons_["faUser"], free_solid_svg_icons_["faLock"], free_solid_svg_icons_["faChevronRight"], free_solid_svg_icons_["faChevronLeft"]]);
/* harmony default export */ var user_panelvue_type_script_lang_js_ = ({
  middleware: 'auth',
  name: "UserPanel",

  data() {
    return {
      windowWidth:  false ? undefined : 'sm',
      user: null,
      errors: null
    };
  },

  head() {
    return {
      title: 'TuteLoop',
      htmlAttrs: {
        lang: 'fa',
        amp: undefined
      },
      headAttrs: {
        TuteLoop: true
      },
      bodyAttrs: {
        tabIndex: 0
      }
    };
  },

  watch: {
    windowWidth(newHeight) {
      console.log(`it changed to ${newHeight} `);
    }

  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    });
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },

  methods: {
    hasExactPermission(role) {
      return this.$auth.hasScope(role);
    },

    hasPermission(role) {
      if (this.$auth.hasScope('admin')) {
        return true;
      }

      return this.$auth.hasScope(role);
    },

    onResize() {
      if (false) {}
    }

  },
  computed: {
    availableLocales() {
      return this.$i18n.locales;
    }

  }
});
// CONCATENATED MODULE: ./pages/user-panel.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_user_panelvue_type_script_lang_js_ = (user_panelvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./pages/user-panel.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(195)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_user_panelvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "66d8374e"
  
)

/* harmony default export */ var user_panel = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=user-panel.js.map
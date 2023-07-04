exports.ids = [36];
exports.modules = {

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(192);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("c8037a12", content, true, context)
};

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tutor_finish_vue_vue_type_style_index_0_id_68adb9e8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(131);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tutor_finish_vue_vue_type_style_index_0_id_68adb9e8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tutor_finish_vue_vue_type_style_index_0_id_68adb9e8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tutor_finish_vue_vue_type_style_index_0_id_68adb9e8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tutor_finish_vue_vue_type_style_index_0_id_68adb9e8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\n.m-selected[data-v-68adb9e8] {\r\n  padding-top: 16px;\r\n  z-index: 99;\r\n  height: 50px;\r\n  width: calc(100% + 2px);\r\n  position: absolute;\r\n  background-color: rgba(var(--gradian-color4));\r\n  color: white;\r\n  margin: -1px;\r\n  font-size: small;\r\n  text-align: center;\r\n  box-shadow: inset 0 0 15px rgba(var(--gradian-color1));\n}\n.m-even-time[data-v-68adb9e8] {\r\n  padding-top: 14px;\r\n  width: 100%;\r\n  z-index: 999;\r\n  position: absolute;\r\n  height: 49px;\r\n  background-color: white;\r\n  margin-left: -15px;\r\n  text-align: center;\n}\r\n\r\n\r\n", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/tutor-finish.vue?vue&type=template&id=68adb9e8&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('b-container', {
    attrs: {
      "fluid": ""
    }
  }, [_c('b-row', {
    staticClass: "mt-5 scol-md-12 pb-5 col-lg-10 m-center"
  }, [_c('b-overlay', {
    staticClass: "w-100",
    attrs: {
      "show": _vm.loadOverlay,
      "variant": "white",
      "opacity": 1,
      "blur": "3px",
      "rounded": "sm"
    }
  }, [_c('b-row', {
    staticClass: "mt-4 font-weight-bold mx-0"
  }, [_c('b-col', {
    staticClass: "col-xl-8 col-lg-8 mx-auto"
  }, [_c('svg', {
    staticClass: "bi bi-patch-check",
    staticStyle: {
      "color": "#04CB28",
      "margin-bottom": "10px"
    },
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "50",
      "height": "50",
      "fill": "currentColor",
      "viewBox": "0 0 16 16"
    }
  }, [_c('path', {
    attrs: {
      "fill-rule": "evenodd",
      "d": "M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z"
    }
  })]), _vm._v(" "), _c('span', {
    staticStyle: {
      "color": "#04CB28",
      "font-size": "24px"
    }
  }, [_vm._v(_vm._s(_vm.$t("tutor_register_finish")))])])], 1), _vm._v(" "), !_vm.result.emailComfirmed ? _c('b-row', {
    staticClass: "mt-4 font-weight-bold mx-0"
  }, [_c('b-col', {
    staticClass: "col-xl-8 col-lg-8 mx-auto"
  }, [_c('font-awesome-icon', {
    staticStyle: {
      "color": "#ffc252",
      "margin-bottom": "1px"
    },
    attrs: {
      "icon": ['fas', 'exclamation-triangle']
    }
  }), _vm._v("\n          " + _vm._s(_vm.$t("account.unVerifiedAlert")) + "\n        ")], 1)], 1) : _vm._e(), _vm._v(" "), !_vm.result.subject ? _c('b-row', {
    staticClass: "mt-4 font-weight-bold mx-0"
  }, [_c('b-col', {
    staticClass: "col-xl-8 col-lg-8 mx-auto"
  }, [_c('font-awesome-icon', {
    staticStyle: {
      "color": "#ffc252",
      "margin-bottom": "1px"
    },
    attrs: {
      "icon": ['fas', 'exclamation-triangle']
    }
  }), _vm._v("\n          " + _vm._s(_vm.$t("tutor_register_finish.nosubject")) + "\n        ")], 1)], 1) : _vm._e(), _vm._v(" "), !_vm.result.tutorTiming ? _c('b-row', {
    staticClass: "mt-4 font-weight-bold mx-0"
  }, [_c('b-col', {
    staticClass: "col-xl-8 col-lg-8 mx-auto"
  }, [_c('font-awesome-icon', {
    staticClass: "font-color",
    staticStyle: {
      "color": "#FFC252FF",
      "margin-bottom": "1px"
    },
    attrs: {
      "icon": ['fas', 'exclamation-triangle']
    }
  }), _vm._v("\n          " + _vm._s(_vm.$t("tutor_register_finish.timing")) + "\n        ")], 1)], 1) : _vm._e(), _vm._v(" "), _c('b-row', {
    staticClass: "mt-5 font-weight-bold mx-0"
  }, [_c('b-col', {
    staticClass: "col-xl-8 col-lg-8 mx-auto"
  }, [_c('b-button', {
    staticClass: "btn btn-crl btn-primary px-4",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Continue to Home Page")])], 1)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/tutor-finish.vue?vue&type=template&id=68adb9e8&scoped=true&

// EXTERNAL MODULE: external "@fortawesome/fontawesome-svg-core"
var fontawesome_svg_core_ = __webpack_require__(4);

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/tutor-finish.vue?vue&type=script&lang=js&


fontawesome_svg_core_["library"].add(free_solid_svg_icons_["faExclamationTriangle"]);
/* harmony default export */ var tutor_finishvue_type_script_lang_js_ = ({
  middleware: 'auth',
  name: "tutor-finish",
  data() {
    return {
      loadOverlay: true,
      result: {
        emailComfirmed: false,
        subject: false,
        tutorTiming: false
      }
    };
  },
  mounted() {
    this.check();
  },
  methods: {
    check() {
      this.$axios.post("/user/getTutorStatus", null).then(res => {
        this.loadOverlay = false;
        this.result = res.data;
      }).catch(err => {}).finally(() => {
        this.loadOverlay = false;
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/tutor-finish.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_tutor_finishvue_type_script_lang_js_ = (tutor_finishvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./pages/tutor-finish.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(191)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_tutor_finishvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "68adb9e8",
  "e8c5586c"
  
)

/* harmony default export */ var tutor_finish = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=tutor-finish.js.map
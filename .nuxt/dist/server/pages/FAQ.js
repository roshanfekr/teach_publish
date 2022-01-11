exports.ids = [7];
exports.modules = {

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(168);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("f66ee06c", content, true, context)
};

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FAQ_vue_vue_type_style_index_0_id_32dc7a90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(119);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FAQ_vue_vue_type_style_index_0_id_32dc7a90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FAQ_vue_vue_type_style_index_0_id_32dc7a90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FAQ_vue_vue_type_style_index_0_id_32dc7a90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FAQ_vue_vue_type_style_index_0_id_32dc7a90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".question-icon[data-v-32dc7a90]{font-size:60px;color:#d65c4b}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/FAQ.vue?vue&type=template&id=32dc7a90&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-body-container-content"},[_c('b-container',{staticClass:"container-padding"},[_c('h1',{staticClass:"pb-5"},[_vm._v("Frequently Asked Questions")]),_vm._v(" "),_vm._l((_vm.data),function(item){return _c('div',{key:item.id},[_c('b-row',[_c('b-col',{staticClass:"col-xl-1 col-lg-1 col-md-12 col-sm-12 col-12 text-center"},[_c('font-awesome-icon',{staticClass:"font-color mb-3 question-icon",attrs:{"icon":['far', 'question-circle']}})],1),_vm._v(" "),_c('b-col',{staticClass:"col-xl-11 col-lg-11 col-md-12 col-sm-12 col-12"},[_c('div',{staticClass:"m-right text-justify"},[_c('h1',{staticClass:"content-title"},[_vm._v(_vm._s(item.question))]),_vm._v(" "),_c('div',{domProps:{"innerHTML":_vm._s(item.answer)}})])])],1),_vm._v(" "),_c('div',{staticClass:"fusion-separator"},[_c('span',{staticClass:"icon-wrapper"},[_c('font-awesome-icon',{staticClass:"font-color",attrs:{"icon":['fas', 'graduation-cap']}})],1)])],1)})],2)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/FAQ.vue?vue&type=template&id=32dc7a90&scoped=true&

// EXTERNAL MODULE: external "@fortawesome/fontawesome-svg-core"
var fontawesome_svg_core_ = __webpack_require__(4);

// EXTERNAL MODULE: external "@fortawesome/free-regular-svg-icons"
var free_regular_svg_icons_ = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/FAQ.vue?vue&type=script&lang=js&
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


fontawesome_svg_core_["library"].add(free_regular_svg_icons_["faQuestionCircle"]);
/* harmony default export */ var FAQvue_type_script_lang_js_ = ({
  name: 'FAQ',

  head() {
    return {
      title: 'FAQ',
      meta: [{
        name: 'description',
        content: 'FAQ is Here'
      }, {
        name: 'keywords',
        content: 'Question, Answer ,'
      }]
    };
  },

  data() {
    return {
      data: [],
      search: {
        question: ''
      }
    };
  },

  mounted() {
    this.getAll();
  },

  methods: {
    getAll() {
      let sendData = {
        // perPage: this.perPage,
        // currentPage: this.currentPage,
        search: this.search
      };
      this.$axios.post('/faq/getAllEnabled', sendData).then(res => {
        this.data = res.data.rows;
        console.log(this.data);
      }).catch(error => {
        console.log(error.response);
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/FAQ.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_FAQvue_type_script_lang_js_ = (FAQvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./pages/FAQ.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(167)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_FAQvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "32dc7a90",
  "5c9018da"
  
)

/* harmony default export */ var FAQ = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=FAQ.js.map
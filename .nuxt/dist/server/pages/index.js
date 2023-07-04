exports.ids = [25];
exports.modules = {

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(167);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("13a75b1e", content, true, context)
};

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(169);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("45aea812", content, true, context)
};

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg-main.d05f5f1.png";

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/online-learning.2a36f4b.jpg";

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/quick.05067f2.png";

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/vetted.553a756.png";

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/free.3dca414.png";

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/booklesson.61c2193.png";

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/register.241fd89.png";

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a12bd3f2_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(120);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a12bd3f2_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a12bd3f2_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a12bd3f2_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a12bd3f2_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\n.m-v-select-1{\n  width: calc(100% - 60px);\n}\n.m-v-select-2{\n  margin-top: 10px;\n  width: calc(100% - 60px);\n}\n.m-v-select {\n  font-size: 1.3rem;\n}\n.m-v-select-2 .vs__search::placeholder,\n.m-v-select-2 .vs__dropdown-toggle,\n.m-v-select-2 .vs__dropdown-menu {\n  border-left-width: 0px!important;\n  background: #FFFFFF !important;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 0px;\n  border-bottom-right-radius: 0px;\n  border-bottom-left-radius: 4px;\n}\n.m-v-select-1 .vs__search::placeholder,\n.m-v-select-1 .vs__dropdown-toggle,\n.m-v-select-1 .vs__dropdown-menu {\n  background: #FFFFFF !important;\n  border-top-left-radius: 4px;\n  border-top-right-radius:4px;\n  border-bottom-right-radius:4px;\n  border-bottom-left-radius: 4px;\n}\n.m-v-select .vs__clear {\n  margin-top: -4px;\n  margin-right: 10px;\n  fill: var(--color1);\n}\n.m-v-select .vs__open-indicator {\n  margin-right: 5px;\n  fill: var(--color1);\n}\n\n/*.vs__dropdown-option{*/\n/*  background: #ededed;*/\n/*  color: #3b3b3b;*/\n/*}*/\n/*.vs__dropdown-option--disabled {*/\n/*  background: #ededed;*/\n/*  color: #3b3b3b;*/\n/*}*/\n.img-fluid {\n  display: none !important;\n}\n.carousel {\n  min-height: 500px !important;\n}\n.carousel-caption {\n  position: relative !important;\n  top: 0px;\n  right: 0px;\n  left: 0px;\n}\n.carousel-indicators li {\n  background-color: var(--color1) !important;\n}\n.m-slider {\n  color: #888888;\n}\n", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_a12bd3f2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(121);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_a12bd3f2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_a12bd3f2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_a12bd3f2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_a12bd3f2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(54);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(170);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\n.btn-search[data-v-a12bd3f2] {\n  margin-top: 10px;\n  width: 60px;\n}\n@media (max-width: 575.98px) {\n}\n@media (min-width: 576px) and (max-width: 767.98px) {\n}\n@media (min-width: 768px) and (max-width: 991.98px) {\n}\n@media (min-width: 992px) and (max-width: 1199.98px) {\n}\n@media (min-width: 1200px) {\n}\n.m-icon[data-v-a12bd3f2] {\n  font-size: xxx-large;\n  color: var(--color1);\n}\n.main-bg[data-v-a12bd3f2] {\n  min-height: calc(100vh - 63px);\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: 100% 100%;\n  background-position: top center;\n  background-repeat: no-repeat;\n\n  /*background: var(--color2) !important;*/\n  /*border: 1px solid var(--color2) !important;*/\n  /*color: #fff !important;*/\n  /*background: var(--color1) !important;*/\n  /*background: -moz-linear-gradient(-45deg, rgba(var(--gradian-color1)) 0%, rgba(var(--gradian-color2)) 100%) !important;*/\n  /*background: -webkit-gradient(left top, right bottom, color-stop(0%, rgba(var(--gradian-color1))), color-stop(100%, rgba(var(--gradian-color2)))) !important;*/\n  /*background: -webkit-linear-gradient(*/\n  /*  -45deg, rgba(var(--gradian-color1)) 0%, rgba(var(--gradian-color2)) 100%) !important;*/\n  /*background: -o-linear-gradient(-45deg, rgba(var(--gradian-color1)) 0%, rgba(var(--gradian-color2)) 100%) !important;*/\n  /*background: -ms-linear-gradient(-45deg, rgba(var(--gradian-color1)) 0%, rgba(var(--gradian-color2)) 100%) !important;*/\n  /*background: -webkit-linear-gradient(*/\n  /*  315deg, rgba(var(--gradian-color1)) 0%, var(--gradian-color2) 100%) !important;*/\n  /*background: -o-linear-gradient(315deg, rgba(var(--gradian-color1)) 0%, rgba(var(--gradian-color2)) 100%) !important;*/\n  /*background: linear-gradient(*/\n  /*  135deg, rgba(var(--gradian-color1)) 0%, rgba(var(--gradian-color2)) 100%) !important;*/\n  /*filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=rgba(var(--gradian-color1)), endColorstr=rgba(var(--gradian-color2)), GradientType=1) !important;*/\n}\n.search-container[data-v-a12bd3f2] {\n  padding-top: 7%;\n}\n.m-panel[data-v-a12bd3f2] {\n  z-index: 999;\n  margin-top: -100px;\n  background: transparent !important;\n}\n.round-panel[data-v-a12bd3f2] {\n  background: white;\n  border-radius: 20px;\n}\n\n\n", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg.6a44aae.jpg";

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=a12bd3f2&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"main-bg\" data-v-a12bd3f2>", "</div>", [_vm._ssrNode("<div class=\"container search-container\" data-v-a12bd3f2>", "</div>", [_c('b-row', {
    staticClass: "w-100 mx-0"
  }, [_c('b-col', {
    staticClass: "col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12"
  }, [_c('h2', {
    staticClass: "text-white mb-4"
  }, [_vm._v("\n          Central Tutoring Hub to Connect Students to Students\n        ")]), _vm._v(" "), _c('h5', {
    staticClass: "text-white text-justify mb-3"
  }, [_vm._v("\n            TuteLoop seamlessly connects students to other students that offer tutoring. This website is exclusive to\n            Carleton University students. Get help from your senior colleagues who have taken the class you are\n            struggling with, maybe even with the same professor and TAs. Just choose a course and then select a tutor\n            to set up a session.\n          ")]), _vm._v(" "), !_vm.$auth.loggedIn ? _c('h6', {
    staticClass: "text-white mb-3"
  }, [_vm._v("\n            " + _vm._s(_vm.$t("Become_tutor_txt")) + "  "), _c('b-button', {
    attrs: {
      "variant": "success",
      "to": "/register"
    }
  }, [_vm._v(_vm._s(_vm.$t("Become_tutor_btn")))])], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "w-100 mb-3 d-block",
    staticStyle: {
      "height": "10px"
    }
  }), _vm._v(" "), _c('b-input-group', {
    staticClass: "w-100"
  }, [_c('client-only', [_vm.universities_options.length > 1 ? _c('v-select', {
    staticClass: "m-v-select-1 m-v-select",
    attrs: {
      "placeholder": _vm.$t('page.first.universities.placeholder'),
      "options": _vm.universities_options,
      "label": "text"
    },
    on: {
      "input": _vm.loadSubjects
    },
    scopedSlots: _vm._u([{
      key: "option",
      fn: function ({
        text
      }) {
        return [_vm._v("\n                  " + _vm._s(text) + "\n                ")];
      }
    }, {
      key: "no-options",
      fn: function ({
        search,
        searching,
        loading
      }) {
        return [_vm._v("\n                  This is the no options slot.\n                ")];
      }
    }], null, false, 3133451459),
    model: {
      value: _vm.selectedUniversity,
      callback: function ($$v) {
        _vm.selectedUniversity = $$v;
      },
      expression: "selectedUniversity"
    }
  }) : _vm._e(), _vm._v(" "), _c('v-select', {
    staticClass: "m-v-select-2 m-v-select",
    attrs: {
      "placeholder": _vm.$t('page.first.subjets.placeholder'),
      "loading": _vm.lessonLoading,
      "filterBy": _vm.filterBy,
      "options": _vm.options,
      "label": "code"
    },
    scopedSlots: _vm._u([{
      key: "option",
      fn: function ({
        code
      }) {
        return [_vm._v("\n                  " + _vm._s(code) + "\n                ")];
      }
    }, {
      key: "no-options",
      fn: function ({
        search,
        searching,
        loading
      }) {
        return [_vm._v("\n                  This is the no options slot.\n                ")];
      }
    }]),
    model: {
      value: _vm.selectedSubject,
      callback: function ($$v) {
        _vm.selectedSubject = $$v;
      },
      expression: "selectedSubject"
    }
  })], 1), _vm._v(" "), _c('b-input-group-append', [_c('b-button', {
    staticClass: "btn-search",
    attrs: {
      "variant": "dark"
    },
    on: {
      "click": _vm.clickSearch
    }
  }, [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'search']
    }
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c('b-col', {
    staticClass: "col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12"
  }, [_c('b-img', {
    staticClass: "w-100",
    staticStyle: {
      "z-index": "2"
    },
    attrs: {
      "alt": "",
      "src": __webpack_require__(159)
    }
  })], 1)], 1)], 1)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"container bg-white mb-5 m-panel\" data-v-a12bd3f2>", "</div>", [_vm._ssrNode("<div class=\"shadow round-panel\" data-v-a12bd3f2>", "</div>", [_c('b-carousel', {
    staticClass: "py-4 px-xl-4 px-lg-4 px-md-4",
    attrs: {
      "id": "carousel-1",
      "interval": 4000,
      "indicators": ""
    }
  }, [_c('b-carousel-slide', {
    attrs: {
      "img-blank": ""
    }
  }, [_c('b-row', {
    staticClass: "m-slider w-100 mb-3 mx-0 mt-xl-1 mt-lg-1 mt-md-1 mt-sm-4 mt-5"
  }, [_c('h4', {
    staticClass: "w-100 text-center"
  }, [_vm._v("\n              What’s TuteLoop?\n            ")])]), _vm._v(" "), _c('b-row', {
    staticClass: "m-slider mx-0"
  }, [_c('b-col', {
    staticClass: "col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 text-justify pb-2",
    staticStyle: {
      "line-height": "1.8rem"
    }
  }, [_vm._v("\n              TuteLoop is a free website operated by students for students. This platform is exclusive to University\n              of Carleton University and acts as a central hub to help tutors and students connect. The tutors you will\n              find here are your senior colleagues who have taken the class you are struggling with, maybe even with\n              the same professor and TAs. Therefore, you will get specific, targeted and time-effective tutoring. Do\n              well in your class with help of your senior colleagues and later you can tutor the same course to\n              others.\n            ")]), _vm._v(" "), _c('b-col', {
    staticClass: "col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5"
  }, [_c('b-img', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "src": __webpack_require__(160)
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('b-carousel-slide', {
    attrs: {
      "img-blank": ""
    }
  }, [_c('b-row', {
    staticClass: "m-slider w-100 mb-3 mx-0 mt-xl-1 mt-lg-1 mt-md-1 mt-sm-4 mt-5"
  }, [_c('h4', {
    staticClass: "w-100 text-center"
  }, [_vm._v("\n              Why you’ll like TuteLoop\n            ")])]), _vm._v(" "), _c('b-row', {
    staticClass: "m-slider mx-0 mt-5"
  }, [_c('b-col', {
    staticClass: "col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-4"
  }, [_c('div', {
    staticClass: "w-100 text-center"
  }, [_c('b-img', {
    attrs: {
      "src": __webpack_require__(161)
    }
  })], 1), _vm._v(" "), _c('h4', {
    staticClass: "pt-3"
  }, [_vm._v("\n                It’s Quick\n              ")]), _vm._v(" "), _c('div', {
    staticClass: "w-100 text-center mt-4"
  }, [_vm._v("\n                Just search for a class and find a tutor that’s right for you\n              ")])]), _vm._v(" "), _c('b-col', {
    staticClass: "col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-4"
  }, [_c('div', {
    staticClass: "w-100 text-center"
  }, [_c('b-img', {
    attrs: {
      "src": __webpack_require__(162)
    }
  })], 1), _vm._v(" "), _c('h4', {
    staticClass: "pt-3"
  }, [_vm._v("\n                It’s Vetted\n              ")]), _vm._v(" "), _c('div', {
    staticClass: "w-100 text-center mt-4"
  }, [_vm._v("\n                Students can leave reviews and a five-star rating for their tutors.\n              ")])]), _vm._v(" "), _c('b-col', {
    staticClass: "col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-4"
  }, [_c('div', {
    staticClass: "w-100 text-center"
  }, [_c('b-img', {
    attrs: {
      "src": __webpack_require__(163)
    }
  })], 1), _vm._v(" "), _c('h4', {
    staticClass: "pt-3"
  }, [_vm._v("\n                It’s Free\n              ")]), _vm._v(" "), _c('div', {
    staticClass: "w-100 text-center mt-4"
  }, [_vm._v("\n                There are no hidden fees. This service is completely free to use.\n              ")])])], 1)], 1), _vm._v(" "), _c('b-carousel-slide', {
    attrs: {
      "img-blank": ""
    }
  }, [_c('b-row', {
    staticClass: "m-slider w-100 mb-3 mx-0 mt-xl-1 mt-lg-1 mt-md-1 mt-sm-4 mt-5"
  }, [_c('h4', {
    staticClass: "w-100 text-center"
  }, [_vm._v("\n              How to find a tutor\n            ")])]), _vm._v(" "), _c('b-row', {
    staticClass: "m-slider mx-0 mt-5 w-100"
  }, [_c('b-col', {
    staticClass: "col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 mb-4"
  }, [_c('b-img', {
    staticClass: "mt-n5",
    staticStyle: {
      "width": "90%"
    },
    attrs: {
      "src": __webpack_require__(164)
    }
  })], 1), _vm._v(" "), _c('b-col', {
    staticClass: "col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 text-left mt-xl-5 mt-lg-5 mt-md-5 mt-sm-1 mt-1"
  }, [_c('h6', {
    staticClass: "pb-2"
  }, [_vm._v("Search for a Course")]), _vm._v(" "), _c('h6', {
    staticClass: "pb-2"
  }, [_vm._v("Pick a tutor based on preferences")]), _vm._v(" "), _c('h6', [_vm._v(" Create a profile in two steps to message and arrange a session. ")])])], 1)], 1), _vm._v(" "), _c('b-carousel-slide', {
    attrs: {
      "img-blank": ""
    }
  }, [_c('b-row', {
    staticClass: "m-slider w-100 mb-3 mx-0 mt-xl-1 mt-lg-1 mt-md-1 mt-sm-4 mt-5"
  }, [_c('h4', {
    staticClass: "w-100 text-center"
  }, [_vm._v("\n              How to register as a tutor\n            ")]), _vm._v(" "), _c('h6', {
    staticClass: "w-100 text-center"
  }, [_vm._v("\n              Just 3 steps to set up a professional tutoring page\n            ")])]), _vm._v(" "), _c('b-row', {
    staticClass: "m-slider mx-0 mt-5 w-100"
  }, [_c('b-col', {
    staticClass: "col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 mb-4"
  }, [_c('b-img', {
    staticClass: "mt-n3",
    staticStyle: {
      "width": "80%"
    },
    attrs: {
      "src": __webpack_require__(165)
    }
  })], 1), _vm._v(" "), _c('b-col', {
    staticClass: "col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 text-left mt-xl-5 mt-lg-5 mt-md-5 mt-sm-1 mt-1"
  }, [_c('h6', {
    staticClass: "pb-2"
  }, [_vm._v(" Create a profile using your University email address")]), _vm._v(" "), _c('h6', {
    staticClass: "pb-2"
  }, [_vm._v("Optional: upload your transcript to become a Verified Tutor")]), _vm._v(" "), _c('h6', [_vm._v("Start making a reputation for yourself!")])])], 1)], 1), _vm._v(" "), _c('b-carousel-slide', {
    attrs: {
      "img-blank": ""
    }
  }, [_c('b-row', {
    staticClass: "mx-0 mt-5 m-slider w-100 mb-3 mx-0"
  }, [_c('h4', {
    staticClass: "w-100 text-center mt-5"
  }, [_vm._v("\n              Ready to get started?\n            ")]), _vm._v(" "), _c('h6', {
    staticClass: "w-100 mt-4 text-center mx-0"
  }, [_vm._v("\n              Find your tutor right now!\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "w-100 text-center mt-3 mx-0"
  }, [_c('b-button', {
    staticClass: "btn btn-crl btn-primary submit px-4 my-4",
    attrs: {
      "to": "/tutors"
    }
  }, [_vm._v("\n                Find a Tutor\n              ")])], 1)])], 1)], 1)], 1)])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=a12bd3f2&scoped=true&

// EXTERNAL MODULE: external "@fortawesome/fontawesome-svg-core"
var fontawesome_svg_core_ = __webpack_require__(4);

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(1);

// EXTERNAL MODULE: external "vuelidate/lib/validators"
var validators_ = __webpack_require__(105);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&








// import {required, numeric, minLength, maxLength} from "vuelidate/lib/validators";

fontawesome_svg_core_["library"].add(free_solid_svg_icons_["faMicroscope"]);
fontawesome_svg_core_["library"].add(free_solid_svg_icons_["faSquareRootAlt"]);
fontawesome_svg_core_["library"].add(free_solid_svg_icons_["faStethoscope"]);
fontawesome_svg_core_["library"].add(free_solid_svg_icons_["faGraduationCap"]);
fontawesome_svg_core_["library"].add(free_solid_svg_icons_["faLaptop"]);
fontawesome_svg_core_["library"].add(free_solid_svg_icons_["faSearch"]);
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  name: 'Home',
  head() {
    return {
      title: 'Online one-to-one tutors',
      meta: [{
        name: 'description',
        content: ''
      }, {
        name: 'keywords',
        content: ''
      }]
    };
  },
  data() {
    return {
      subName: "",
      subdomain: true,
      host: "",
      lessonLoading: false,
      universities_options: [],
      options: [],
      selectedUniversity: null,
      selectedSubject: null
    };
  },
  mounted() {
    this.loadUniversity();
    // this.Init()
  },

  methods: {
    filterBy: (option, label, search) => {
      return (label || '').toLocaleLowerCase().startsWith(search.toLocaleLowerCase());
    },
    loadUniversity() {
      this.$axios.post('/definitions/universityList').then(res => {
        var rows = res.data;
        this.universities_options = [];
        for (let i = 0; i < rows.length; i++) {
          var row = rows[i];
          this.universities_options.push({
            id: row.id,
            text: row.name
          });
        }
        if (rows.length === 1) {
          this.selectedUniversity = this.universities_options[0];
          this.loadSubjects();
        }
      }).catch(error => {
        console.log(error);
      });
    },
    loadSubjects() {
      this.lessonLoading = true;
      let data = {};
      if (this.selectedUniversity != null && this.selectedUniversity.id > 0) data["uniId"] = this.selectedUniversity.id;else {
        this.options = [];
        this.selectedSubject = null;
        this.lessonLoading = false;
        return;
      }
      this.$axios.post('/definitions/getAllLessons', data).then(res => {
        this.options = res.data;
        this.lessonLoading = false;
      }).catch(error => {
        console.log(error);
      });
    },
    clickSearch() {
      if (this.selectedUniversity && this.selectedSubject) this.$router.push("/tutors/1?university=" + this.selectedUniversity.id + "&subject=" + this.selectedSubject.id);
    }
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(166)
if (style0.__inject__) style0.__inject__(context)
var style1 = __webpack_require__(168)
if (style1.__inject__) style1.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "a12bd3f2",
  "0bf72042"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map
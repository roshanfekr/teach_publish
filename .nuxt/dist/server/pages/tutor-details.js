exports.ids = [35];
exports.modules = {

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(111);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(8).default("3d7923ff", content, true)

/***/ }),

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * Cropper.js v1.5.13\n * https://fengyuanchen.github.io/cropperjs\n *\n * Copyright 2015-present Chen Fengyuan\n * Released under the MIT license\n *\n * Date: 2022-11-20T05:30:43.444Z\n */\n\n.cropper-container {\n  direction: ltr;\n  font-size: 0;\n  line-height: 0;\n  position: relative;\n  -ms-touch-action: none;\n      touch-action: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.cropper-container img {\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    display: block;\n    height: 100%;\n    image-orientation: 0deg;\n    max-height: none !important;\n    max-width: none !important;\n    min-height: 0 !important;\n    min-width: 0 !important;\n    width: 100%;\n  }\n\n.cropper-wrap-box,\n.cropper-canvas,\n.cropper-drag-box,\n.cropper-crop-box,\n.cropper-modal {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.cropper-wrap-box,\n.cropper-canvas {\n  overflow: hidden;\n}\n\n.cropper-drag-box {\n  background-color: #fff;\n  opacity: 0;\n}\n\n.cropper-modal {\n  background-color: #000;\n  opacity: 0.5;\n}\n\n.cropper-view-box {\n  display: block;\n  height: 100%;\n  outline: 1px solid #39f;\n  outline-color: rgba(51, 153, 255, 75%);\n  overflow: hidden;\n  width: 100%;\n}\n\n.cropper-dashed {\n  border: 0 dashed #eee;\n  display: block;\n  opacity: 0.5;\n  position: absolute;\n}\n\n.cropper-dashed.dashed-h {\n    border-bottom-width: 1px;\n    border-top-width: 1px;\n    height: calc(100% / 3);\n    left: 0;\n    top: calc(100% / 3);\n    width: 100%;\n  }\n\n.cropper-dashed.dashed-v {\n    border-left-width: 1px;\n    border-right-width: 1px;\n    height: 100%;\n    left: calc(100% / 3);\n    top: 0;\n    width: calc(100% / 3);\n  }\n\n.cropper-center {\n  display: block;\n  height: 0;\n  left: 50%;\n  opacity: 0.75;\n  position: absolute;\n  top: 50%;\n  width: 0;\n}\n\n.cropper-center::before,\n  .cropper-center::after {\n    background-color: #eee;\n    content: \" \";\n    display: block;\n    position: absolute;\n  }\n\n.cropper-center::before {\n    height: 1px;\n    left: -3px;\n    top: 0;\n    width: 7px;\n  }\n\n.cropper-center::after {\n    height: 7px;\n    left: 0;\n    top: -3px;\n    width: 1px;\n  }\n\n.cropper-face,\n.cropper-line,\n.cropper-point {\n  display: block;\n  height: 100%;\n  opacity: 0.1;\n  position: absolute;\n  width: 100%;\n}\n\n.cropper-face {\n  background-color: #fff;\n  left: 0;\n  top: 0;\n}\n\n.cropper-line {\n  background-color: #39f;\n}\n\n.cropper-line.line-e {\n    cursor: ew-resize;\n    right: -3px;\n    top: 0;\n    width: 5px;\n  }\n\n.cropper-line.line-n {\n    cursor: ns-resize;\n    height: 5px;\n    left: 0;\n    top: -3px;\n  }\n\n.cropper-line.line-w {\n    cursor: ew-resize;\n    left: -3px;\n    top: 0;\n    width: 5px;\n  }\n\n.cropper-line.line-s {\n    bottom: -3px;\n    cursor: ns-resize;\n    height: 5px;\n    left: 0;\n  }\n\n.cropper-point {\n  background-color: #39f;\n  height: 5px;\n  opacity: 0.75;\n  width: 5px;\n}\n\n.cropper-point.point-e {\n    cursor: ew-resize;\n    margin-top: -3px;\n    right: -3px;\n    top: 50%;\n  }\n\n.cropper-point.point-n {\n    cursor: ns-resize;\n    left: 50%;\n    margin-left: -3px;\n    top: -3px;\n  }\n\n.cropper-point.point-w {\n    cursor: ew-resize;\n    left: -3px;\n    margin-top: -3px;\n    top: 50%;\n  }\n\n.cropper-point.point-s {\n    bottom: -3px;\n    cursor: s-resize;\n    left: 50%;\n    margin-left: -3px;\n  }\n\n.cropper-point.point-ne {\n    cursor: nesw-resize;\n    right: -3px;\n    top: -3px;\n  }\n\n.cropper-point.point-nw {\n    cursor: nwse-resize;\n    left: -3px;\n    top: -3px;\n  }\n\n.cropper-point.point-sw {\n    bottom: -3px;\n    cursor: nesw-resize;\n    left: -3px;\n  }\n\n.cropper-point.point-se {\n    bottom: -3px;\n    cursor: nwse-resize;\n    height: 20px;\n    opacity: 1;\n    right: -3px;\n    width: 20px;\n  }\n\n@media (min-width: 768px) {\n\n.cropper-point.point-se {\n      height: 15px;\n      width: 15px;\n  }\n    }\n\n@media (min-width: 992px) {\n\n.cropper-point.point-se {\n      height: 10px;\n      width: 10px;\n  }\n    }\n\n@media (min-width: 1200px) {\n\n.cropper-point.point-se {\n      height: 5px;\n      opacity: 0.75;\n      width: 5px;\n  }\n    }\n\n.cropper-point.point-se::before {\n    background-color: #39f;\n    bottom: -50%;\n    content: \" \";\n    display: block;\n    height: 200%;\n    opacity: 0;\n    position: absolute;\n    right: -50%;\n    width: 200%;\n  }\n\n.cropper-invisible {\n  opacity: 0;\n}\n\n.cropper-bg {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC\");\n}\n\n.cropper-hide {\n  display: block;\n  height: 0;\n  position: absolute;\n  width: 0;\n}\n\n.cropper-hidden {\n  display: none !important;\n}\n\n.cropper-move {\n  cursor: move;\n}\n\n.cropper-crop {\n  cursor: crosshair;\n}\n\n.cropper-disabled .cropper-drag-box,\n.cropper-disabled .cropper-face,\n.cropper-disabled .cropper-line,\n.cropper-disabled .cropper-point {\n  cursor: not-allowed;\n}\n", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(190);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("4bc4b352", content, true, context)
};

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tutor_details_vue_vue_type_style_index_0_id_2adc4444_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(130);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tutor_details_vue_vue_type_style_index_0_id_2adc4444_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tutor_details_vue_vue_type_style_index_0_id_2adc4444_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tutor_details_vue_vue_type_style_index_0_id_2adc4444_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tutor_details_vue_vue_type_style_index_0_id_2adc4444_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\ninput[type=\"file\"][data-v-2adc4444] {\n  display: none;\n}\n.header h2[data-v-2adc4444] {\n  margin: 0;\n}\n.header a[data-v-2adc4444] {\n  text-decoration: none;\n  color: black;\n}\n.actions[data-v-2adc4444] {\n  margin-top: 1rem;\n}\n\n", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/tutor-details.vue?vue&type=template&id=2adc4444&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "main-body-container-content"
  }, [_c('b-container', {
    staticClass: "container-padding"
  }, [_c('b-overlay', {
    attrs: {
      "show": _vm.busy,
      "rounded": "lg",
      "variant": "white",
      "blur": "",
      "opacity": "0.9"
    }
  }, [_c('b-row', {
    staticClass: "col-md-12 pb-5 col-lg-10 m-center"
  }, [_c('div', {
    staticClass: "w-100"
  }, [_c('h3', {
    staticClass: "mb-4 text-center"
  }, [_vm._v(_vm._s(_vm.$t('completeRegistration')))])]), _vm._v(" "), _c('b-row', {
    staticClass: "w-100 mx-0"
  }, [_c('h4', {
    staticClass: "mb-2"
  }, [_vm._v(_vm._s(_vm.$t('generalInfo')))]), _vm._v(" "), _c('b-progress', {
    staticClass: "w-100",
    attrs: {
      "value": "1",
      "max": "5",
      "height": "10px",
      "variant": "danger"
    }
  }), _vm._v(" "), _c('span', [_vm._v("1/5")])], 1), _vm._v(" "), _c('b-row', {
    staticClass: "mx-0 py-5 col-xl-7 col-lg-8 col-md-12"
  }, [_c('b-form', {
    staticClass: "w-100 py-4",
    on: {
      "submit": function ($event) {
        $event.stopPropagation();
        $event.preventDefault();
        return _vm.onSubmit.apply(null, arguments);
      },
      "reset": _vm.onReset
    }
  }, [_c('b-form-group', [_c('b-form-row', {
    staticClass: "w-100"
  }, [_c('input', {
    ref: "input",
    staticClass: "d-none",
    attrs: {
      "type": "file",
      "name": "image",
      "accept": "image/png, image/jpeg"
    },
    on: {
      "click": _vm.removeInputImage,
      "change": _vm.setImage
    }
  }), _vm._v(" "), !_vm.hasImage ? _c('b-row', {
    staticClass: "mx-0"
  }, [_c('b-col', {
    staticClass: "col-12 col-md-4 col-xl-4 col-lg-4"
  }, [_c('b-avatar', {
    attrs: {
      "size": "7rem",
      "src": _vm.registerForm.File != null ? '/' + _vm.registerForm.File.path : '',
      "alt": "Cropped Image"
    }
  })], 1), _vm._v(" "), _c('b-col', {
    staticClass: "col-12 pt-3 col-md-8 col-xl-8 col-lg-8"
  }, [_c('b-row', {
    staticClass: "text-large pb-2"
  }, [_vm._v("Profile photo")]), _vm._v(" "), _c('b-row', {
    staticClass: "small text-small"
  }, [_vm._v("\n                    Please make sure your photo with appropriate attire. Face should be in focus. Maximum size – 1MB.\n                    JPG or PNG\n                  ")]), _vm._v(" "), _c('b-row', {
    staticClass: "small text-small"
  }, [_c('b-button', {
    staticClass: "btn-primary btn-add py-1 mt-2 mr-2",
    on: {
      "click": _vm.showEditPhoto
    }
  }, [_vm._v("\n                      " + _vm._s(_vm.$t('upload')) + "\n                    ")]), _vm._v(" "), _vm.registerForm.File !== null ? _c('b-button', {
    staticClass: "btn-primary btn-add py-1 mt-2",
    on: {
      "click": _vm.removeImage
    }
  }, [_vm._v("\n                      " + _vm._s(_vm.$t('remove')) + "\n                    ")]) : _vm._e()], 1)], 1)], 1) : _c('div', [_c('section', [_c('div', {
    staticClass: "img-cropper"
  }, [_c('client-only', [_c('vue-cropper', {
    ref: "cropper",
    staticStyle: {
      "aspect-ratio": "1/1",
      "width": "15rem",
      "height": "15rem"
    },
    attrs: {
      "drag-mode": "move",
      "view-mode": 3,
      "auto-crop-area": 0.6,
      "aspect-ratio": 1 / 1,
      "toggle-drag-mode-on-dblclick": false,
      "src": _vm.imgSrc,
      "preview": ".preview"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "actions"
  }, [_c('b-button', {
    staticClass: "btn-primary btn-add py-1 mt-2",
    on: {
      "click": function ($event) {
        $event.preventDefault();
        return _vm.cropImage.apply(null, arguments);
      }
    }
  }, [_vm._v("\n                      " + _vm._s(_vm.$t('save')) + "\n                    ")]), _vm._v(" "), _c('b-button', {
    staticClass: "btn-primary btn-add py-1 mt-2",
    on: {
      "click": function ($event) {
        $event.preventDefault();
        return _vm.showFileChooser.apply(null, arguments);
      }
    }
  }, [_vm._v("\n                      " + _vm._s(_vm.$t('upload')) + "\n                    ")]), _vm._v(" "), _c('b-button', {
    staticClass: "btn-primary btn-add py-1 mt-2",
    on: {
      "click": function ($event) {
        $event.preventDefault();
        return _vm.rotate(90);
      }
    }
  }, [_c('svg', {
    staticClass: "bi bi-arrow-90deg-right",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "16",
      "height": "16",
      "fill": "currentColor",
      "viewBox": "0 0 16 16"
    }
  }, [_c('path', {
    attrs: {
      "fill-rule": "evenodd",
      "d": "M14.854 4.854a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 4H3.5A2.5 2.5 0 0 0 1 6.5v8a.5.5 0 0 0 1 0v-8A1.5 1.5 0 0 1 3.5 5h9.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4z"
    }
  })])]), _vm._v(" "), _c('b-button', {
    staticClass: "btn-primary btn-add py-1 mt-2",
    on: {
      "click": function ($event) {
        $event.preventDefault();
        return _vm.rotate(-90);
      }
    }
  }, [_c('svg', {
    staticClass: "bi bi-arrow-90deg-left",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "16",
      "height": "16",
      "fill": "currentColor",
      "viewBox": "0 0 16 16"
    }
  }, [_c('path', {
    attrs: {
      "fill-rule": "evenodd",
      "d": "M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z"
    }
  })])]), _vm._v(" "), _c('b-button', {
    ref: "flipX",
    staticClass: "btn-primary btn-add py-1 mt-2",
    on: {
      "click": function ($event) {
        $event.preventDefault();
        return _vm.flipX.apply(null, arguments);
      }
    }
  }, [_c('svg', {
    staticClass: "bi bi-symmetry-vertical",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "16",
      "height": "16",
      "fill": "currentColor",
      "viewBox": "0 0 16 16"
    }
  }, [_c('path', {
    attrs: {
      "d": "M7 2.5a.5.5 0 0 0-.939-.24l-6 11A.5.5 0 0 0 .5 14h6a.5.5 0 0 0 .5-.5v-11zm2.376-.484a.5.5 0 0 1 .563.245l6 11A.5.5 0 0 1 15.5 14h-6a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .376-.484zM10 4.46V13h4.658L10 4.46z"
    }
  })])]), _vm._v(" "), _c('b-button', {
    ref: "flipY",
    staticClass: "btn-primary btn-add py-1 mt-2",
    on: {
      "click": function ($event) {
        $event.preventDefault();
        return _vm.flipY.apply(null, arguments);
      }
    }
  }, [_c('svg', {
    staticClass: "bi bi-symmetry-horizontal",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "16",
      "height": "16",
      "fill": "currentColor",
      "viewBox": "0 0 16 16"
    }
  }, [_c('path', {
    attrs: {
      "d": "M13.5 7a.5.5 0 0 0 .24-.939l-11-6A.5.5 0 0 0 2 .5v6a.5.5 0 0 0 .5.5h11zm.485 2.376a.5.5 0 0 1-.246.563l-11 6A.5.5 0 0 1 2 15.5v-6a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .485.376zM11.539 10H3v4.658L11.54 10z"
    }
  })])]), _vm._v(" "), _c('b-button', {
    staticClass: "btn-primary btn-add py-1 mt-2",
    on: {
      "click": function ($event) {
        $event.preventDefault();
        return _vm.cancelUploadImage.apply(null, arguments);
      }
    }
  }, [_vm._v("\n                      " + _vm._s(_vm.$t('cancel')) + "\n                    ")])], 1)]), _vm._v(" "), _vm.fileSizeNotValid ? _c('div', {
    staticClass: "invalid-feedback d-block"
  }, [_vm._v(_vm._s(_vm.$t('file.isValidSize')) + "\n                ")]) : _vm._e()])], 1)], 1), _vm._v(" "), _c('b-form-group', {
    staticClass: "pt-3",
    attrs: {
      "id": "input-group-name",
      "label": _vm.$t('fName'),
      "label-for": "input-name"
    }
  }, [_c('b-form-input', {
    class: {
      'is-invalid': _vm.$v.registerForm.name.$error
    },
    attrs: {
      "autocomplete": "off",
      "id": "input-name"
    },
    model: {
      value: _vm.$v.registerForm.name.$model,
      callback: function ($$v) {
        _vm.$set(_vm.$v.registerForm.name, "$model", typeof $$v === 'string' ? $$v.trim() : $$v);
      },
      expression: "$v.registerForm.name.$model"
    }
  }), _vm._v(" "), !_vm.$v.registerForm.name.required ? _c('div', {
    staticClass: "invalid-feedback"
  }, [_vm._v(_vm._s(_vm.$t('firstNameRequired')) + "\n            ")]) : _vm._e(), _vm._v(" "), !_vm.$v.registerForm.name.serverError ? _c('div', {
    staticClass: "invalid-feedback"
  }, [_vm._v(_vm._s(_vm.$t(_vm.errors.name.msg)))]) : _vm._e()], 1), _vm._v(" "), _c('b-form-group', {
    attrs: {
      "id": "input-group-lastname",
      "label": _vm.$t('lName'),
      "label-for": "input-lastname"
    }
  }, [_c('b-form-input', {
    class: {
      'is-invalid': _vm.$v.registerForm.lastName.$error
    },
    attrs: {
      "autocomplete": "off",
      "id": "input-lastname"
    },
    model: {
      value: _vm.$v.registerForm.lastName.$model,
      callback: function ($$v) {
        _vm.$set(_vm.$v.registerForm.lastName, "$model", typeof $$v === 'string' ? $$v.trim() : $$v);
      },
      expression: "$v.registerForm.lastName.$model"
    }
  }), _vm._v(" "), !_vm.$v.registerForm.lastName.required ? _c('div', {
    staticClass: "invalid-feedback"
  }, [_vm._v(_vm._s(_vm.$t('lastNameRequired')))]) : _vm._e()], 1), _vm._v(" "), _c('b-form-group', {
    attrs: {
      "id": "input-group-headline",
      "label": _vm.$t('headline'),
      "label-for": "input-headline"
    }
  }, [_c('b-form-input', {
    class: {
      'is-invalid': _vm.$v.registerForm.headline.$error
    },
    attrs: {
      "autocomplete": "off",
      "id": "input-headline",
      "placeholder": _vm.$t('headline_placeholder')
    },
    model: {
      value: _vm.$v.registerForm.headline.$model,
      callback: function ($$v) {
        _vm.$set(_vm.$v.registerForm.headline, "$model", typeof $$v === 'string' ? $$v.trim() : $$v);
      },
      expression: "$v.registerForm.headline.$model"
    }
  }), _vm._v(" "), !_vm.$v.registerForm.headline.required ? _c('div', {
    staticClass: "invalid-feedback"
  }, [_vm._v(_vm._s(_vm.$t('headlineRequired')) + "\n            ")]) : _vm._e()], 1), _vm._v(" "), _c('b-form-group', {
    attrs: {
      "id": "input-group-bioMore",
      "label": _vm.$t('bioMore'),
      "label-for": "input-bioMore"
    }
  }, [_c('b-form-textarea', {
    class: {
      'is-invalid': _vm.$v.registerForm.bioMore.$error
    },
    attrs: {
      "autocomplete": "off",
      "rows": "4",
      "id": "input-bioMore",
      "placeholder": _vm.$t('bioMore_placeholder')
    },
    model: {
      value: _vm.$v.registerForm.bioMore.$model,
      callback: function ($$v) {
        _vm.$set(_vm.$v.registerForm.bioMore, "$model", typeof $$v === 'string' ? $$v.trim() : $$v);
      },
      expression: "$v.registerForm.bioMore.$model"
    }
  }), _vm._v(" "), !_vm.$v.registerForm.bioMore.required ? _c('div', {
    staticClass: "invalid-feedback"
  }, [_vm._v(_vm._s(_vm.$t('bioMoreRequired')) + "\n            ")]) : _vm._e()], 1), _vm._v(" "), _c('b-form-group', {
    staticClass: "w-75",
    attrs: {
      "id": "input-group-trainingMethods",
      "label": _vm.$t('information.trainingMethods.label'),
      "label-for": "input-trainingMethods"
    }
  }, [_c('v-select', {
    staticClass: "m-v-select2 w-70",
    class: {
      'is-invalid  d-block': _vm.$v.registerForm.trainingMethod.$error
    },
    attrs: {
      "id": "input-trainingMethods",
      "placeholder": _vm.$t('information.trainingMethods.placeholder'),
      "label": "text",
      "reduce": x => x.value,
      "options": _vm.options_methods
    },
    model: {
      value: _vm.registerForm.trainingMethod,
      callback: function ($$v) {
        _vm.$set(_vm.registerForm, "trainingMethod", typeof $$v === 'string' ? $$v.trim() : $$v);
      },
      expression: "registerForm.trainingMethod"
    }
  }), _vm._v(" "), !_vm.$v.registerForm.trainingMethod.required ? _c('div', {
    staticClass: "invalid-feedback"
  }, [_vm._v("\n              " + _vm._s(_vm.$t('information.trainingMethods.required')) + "\n            ")]) : _vm._e()], 1), _vm._v(" "), _c('div', {
    staticClass: "mt-5"
  }, [_c('b-button', {
    staticClass: "form-control btn btn-crl btn-primary submit px-3 mt-4 btn-reg mr-2",
    attrs: {
      "type": "submit"
    }
  }, [_vm._v("\n              " + _vm._s(_vm.$t('next')) + "\n            ")])], 1)], 1)], 1)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/tutor-details.vue?vue&type=template&id=2adc4444&scoped=true&

// EXTERNAL MODULE: external "core-js/modules/es.typed-array.set.js"
var es_typed_array_set_js_ = __webpack_require__(106);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-svg-core"
var fontawesome_svg_core_ = __webpack_require__(4);

// EXTERNAL MODULE: external "@fortawesome/free-brands-svg-icons"
var free_brands_svg_icons_ = __webpack_require__(25);

// EXTERNAL MODULE: external "vuelidate/lib/validators"
var validators_ = __webpack_require__(105);

// EXTERNAL MODULE: external "vue-cropperjs"
var external_vue_cropperjs_ = __webpack_require__(107);
var external_vue_cropperjs_default = /*#__PURE__*/__webpack_require__.n(external_vue_cropperjs_);

// EXTERNAL MODULE: ./node_modules/cropperjs/dist/cropper.css
var cropper = __webpack_require__(110);

// EXTERNAL MODULE: external "jwt-decode"
var external_jwt_decode_ = __webpack_require__(5);
var external_jwt_decode_default = /*#__PURE__*/__webpack_require__.n(external_jwt_decode_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/tutor-details.vue?vue&type=script&lang=js&








fontawesome_svg_core_["library"].add(free_brands_svg_icons_["faGoogle"]);
fontawesome_svg_core_["library"].add(free_brands_svg_icons_["faFacebookF"]);
/* harmony default export */ var tutor_detailsvue_type_script_lang_js_ = ({
  middleware: 'auth',
  name: 'ToturDetails',
  mounted() {
    if (!this.$auth.hasScope("tutor") && !this.$auth.hasScope("admin")) {
      this.$router.push("/");
      return;
    }
    this.fillUserInfo();
  },
  components: {
    VueCropper: external_vue_cropperjs_default.a
  },
  data() {
    return {
      busy: true,
      options_methods: [{
        value: 1,
        text: "Online"
      }, {
        value: 2,
        text: "In-Person"
      }, {
        value: 3,
        text: "Both"
      }],
      selectedFile: null,
      hasImage: false,
      imgSrc: null,
      cropImg: '',
      data: null,
      fileSizeNotValid: false,
      registerForm: {
        File: null,
        trainingMethod: null,
        name: '',
        lastName: '',
        headline: '',
        bioMore: ''
      },
      errors: null
    };
  },
  validations: {
    selectedFile: {
      isValidSize(file) {
        if (!file) {
          return true;
        }
        return file.size < 2 * 1024 * 1024;
      }
    },
    registerForm: {
      name: {
        required: validators_["required"],
        serverError(value) {
          if (value === '') {
            return true;
          }
          return !(this.errors != null && this.errors.name && value === this.errors.name.value);
        }
      },
      lastName: {
        required: validators_["required"],
        serverError(value) {
          if (value === '') {
            return true;
          }
          return !(this.errors != null && this.errors.lastName && value === this.errors.lastName.value);
        }
      },
      headline: {
        required: validators_["required"],
        serverError(value) {
          if (value === '') {
            return true;
          }
          return !(this.errors != null && this.errors.headline && value === this.errors.headline.value);
        }
      },
      bioMore: {
        required: validators_["required"],
        serverError(value) {
          if (value === '') {
            return true;
          }
          return !(this.errors != null && this.errors.bioMore && value === this.errors.bioMore.value);
        }
      },
      File: {
        // required: requiredIf(function () {
        //   return this.registerForm.File === null;
        // })
      },
      trainingMethod: {
        required: validators_["required"]
      }
    }
  },
  methods: {
    removeInputImage(event) {
      event.target.value = null;
    },
    cancelUploadImage() {
      this.hasImage = false;
    },
    removeImage() {
      this.$bvModal.msgBoxConfirm(this.$t('remove.image.confirm.msg'), {
        title: 'Confirm',
        size: 'md',
        buttonSize: 'sm',
        okVariant: 'danger',
        okTitle: 'YES',
        cancelTitle: 'NO',
        footerClass: 'p-2 border-top-0',
        hideHeaderClose: false,
        headerClass: 'p-2 border-bottom-0',
        centered: true
      }).then(value => {
        if (value === true) {
          if (this.registerForm.File !== null) this.$axios.post('/user/remove-user-image').then(res => {
            this.registerForm.File = null;
          }).catch(error => {
            if (error.response.data.errors) {
              this.errors = error.response.data.errors;
            }
            // console.log(error)
          });
        } else {}
      }).catch(err => {});
    },
    showEditPhoto() {
      this.showFileChooser();
    },
    cropImage() {
      var imgFileSize = Math.round(this.$refs.cropper.getCroppedCanvas().toDataURL().length * 3 / 4);
      if (imgFileSize > 1 * 1024 * 1024) {
        this.fileSizeNotValid = true;
        return;
      }
      this.hasImage = false;
      // get image data for post processing, e.g. upload or setting image src

      this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
      this.registerForm.File = this.dataURLtoFile(this.cropImg, 'avatar.jpg');
      var form1 = new FormData();
      form1.append("file", this.registerForm.File, this.registerForm.File.name);
      this.$axios.post('/user/save-user-image', form1).then(res => {
        this.registerForm.File = res.data;
      }).catch(error => {
        if (error.response.data.errors) {
          this.errors = error.response.data.errors;
        }
        // console.log(error)
      });
    },

    flipX() {
      const dom = this.$refs.flipX;
      let scale = dom.getAttribute('data-scale');
      scale = scale ? -scale : -1;
      this.$refs.cropper.scaleX(scale);
      dom.setAttribute('data-scale', scale);
    },
    flipY() {
      const dom = this.$refs.flipY;
      let scale = dom.getAttribute('data-scale');
      scale = scale ? -scale : -1;
      this.$refs.cropper.scaleY(scale);
      dom.setAttribute('data-scale', scale);
    },
    rotate(deg) {
      this.$refs.cropper.rotate(deg);
    },
    setImage(e) {
      const file = e.target.files[0];
      if (file === undefined) return;
      this.fileSizeNotValid = false;
      if (file.type.indexOf('image/jpeg') === -1 && file.type.indexOf('image/png') === -1) {
        alert('Please select an image file with JPEG or PNG type');
        return;
      }
      if (typeof FileReader === 'function') {
        const reader = new FileReader();
        reader.onload = event => {
          this.imgSrc = event.target.result;
          // rebuild cropperjs with the updated source
          this.$refs.cropper.replace(event.target.result);
        };
        this.hasImage = true;
        reader.readAsDataURL(file);
      } else {
        alert('Sorry, FileReader API not supported');
      }
    },
    showFileChooser() {
      this.$refs.input.click();
    },
    dataURLtoFile(dataurl, filename) {
      var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], filename, {
        type: mime
      });
    },
    downloadFile(fileId) {
      try {
        var c = {
          responseType: 'blob'
        };
        this.$axios.get(`/download/${fileId}`, c).then(response => {
          var fileURL = window.URL.createObjectURL(new Blob([response.data], {
            type: 'application/file'
          }));
          var fileLink = document.createElement('a');
          var filename = response.headers['filename'];
          fileLink.href = fileURL;
          fileLink.setAttribute('download', filename);
          document.body.appendChild(fileLink);
          fileLink.click();
        });
      } catch (e) {
        // console.log(e);
      }
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our registerForm values
      this.registerForm.name = '';
      this.registerForm.lastName = '';
      this.registerForm.headline = '';
      this.registerForm.bioMore = '';
    },
    makeToast(variant = 'success', header = 'Message', msg = '') {
      this.$bvToast.toast(this.$t(msg), {
        autoHideDelay: 3000,
        title: header,
        variant: variant,
        solid: true,
        appendToast: true,
        headerClass: "d-none"
      });
    },
    onSubmit(evt) {
      this.$v.$reset();
      const self = this;
      this.errors = null;
      evt.preventDefault();
      this.$v.registerForm.$touch();
      if (this.$v.registerForm.$invalid) {
        console.log("vuelidate error");
      } else {
        var formData = new FormData();
        if (this.selectedFile !== null) formData.append("file", this.selectedFile, this.selectedFile.name);
        formData.append('registerForm', JSON.stringify(this.registerForm));
        this.busy = true;
        this.$axios.post('/user/save-student-detail', formData).then(async res => {
          this.registerForm = res.data;
          this.$router.push('/tutor-subject');
          const oldRedirect = self.$auth.options.redirect;
          self.$auth.options.redirect = false;
          await self.$auth.setUserToken(res.data.token);
          let decoded = external_jwt_decode_default()(res.data.token);
          self.$auth.setUser(decoded);
          self.$auth.options.rewriteRedirects = oldRedirect;
          this.makeToast('success', 'Message', this.$t('done_successfully'));
        }).catch(error => {
          if (error.response.data.errors) {
            this.errors = error.response.data.errors;
          }
          // console.log(error)
        }).finally(() => {
          this.busy = false;
        });
      }
    },
    fillUserInfo() {
      this.$axios.post('/user/get-student-detail').then(res => {
        // this.registerForm.Communications = res.data.Communications
        this.registerForm = res.data;
      }).catch(error => {
        if (error.response.data.errors) {
          this.errors = error.response.data.errors;
        }
        // console.log(error)
      }).finally(() => {
        this.busy = false;
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/tutor-details.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_tutor_detailsvue_type_script_lang_js_ = (tutor_detailsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./pages/tutor-details.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(189)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_tutor_detailsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2adc4444",
  "212fe19b"
  
)

/* harmony default export */ var tutor_details = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=tutor-details.js.map
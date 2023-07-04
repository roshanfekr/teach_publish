exports.ids = [60];
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

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(221);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("69c81232", content, true, context)
};

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tutor_transcript_vue_vue_type_style_index_0_id_151df270_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(145);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tutor_transcript_vue_vue_type_style_index_0_id_151df270_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tutor_transcript_vue_vue_type_style_index_0_id_151df270_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tutor_transcript_vue_vue_type_style_index_0_id_151df270_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tutor_transcript_vue_vue_type_style_index_0_id_151df270_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\ninput[type=\"file\"][data-v-151df270] {\n  display: none;\n}\n.header h2[data-v-151df270] {\n  margin: 0;\n}\n.header a[data-v-151df270] {\n  text-decoration: none;\n  color: black;\n}\n.actions[data-v-151df270] {\n  margin-top: 1rem;\n}\n\n", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/user-panel/tutor-transcript.vue?vue&type=template&id=151df270&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {}, [_c('b-container', {
    staticClass: "container-padding"
  }, [_c('b-row', {
    staticClass: "col-md-12 pb-5 col-lg-10 m-center"
  }, [_c('b-row', {
    staticClass: "float-left"
  }, [_c('h3', {
    staticClass: "mb-2"
  }, [_vm._v(_vm._s(_vm.$t('transcript.title')))])]), _vm._v(" "), _c('b-row', {
    staticClass: "w-100 mx-0"
  }, [_c('p', {
    staticClass: "w-100 mt-2",
    staticStyle: {
      "font-size": "small"
    }
  }, [_c('svg', {
    staticClass: "bi bi-exclamation-circle",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "20",
      "height": "20",
      "fill": "currentColor",
      "viewBox": "0 0 16 16"
    }
  }, [_c('path', {
    attrs: {
      "d": "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"
    }
  })]), _vm._v(" "), _c('span', {
    staticClass: "ml-1"
  }, [_vm._v(_vm._s(_vm.$t("transcript.header_alert")))])])]), _vm._v(" "), _c('b-row', {
    staticClass: "mx-0 py-3 col-xl-7 col-lg-8 col-md-12"
  }, [_c('b-form', {
    staticClass: "w-100",
    on: {
      "submit": function ($event) {
        $event.stopPropagation();
        $event.preventDefault();
        return _vm.onSubmit.apply(null, arguments);
      },
      "reset": _vm.onReset
    }
  }, [_c('b-overlay', {
    attrs: {
      "show": _vm.busy,
      "rounded": "lg",
      "variant": "white",
      "opacity": "0.8"
    }
  }, [_vm.fileInfo !== null && _vm.fileInfo.fileId > 0 ? _c('p', {
    staticClass: "border-bottom"
  }, [_vm._v(_vm._s(_vm.$t("transcript.history")))]) : _vm._e(), _vm._v(" "), _vm.fileInfo !== null && _vm.fileInfo.fileId > 0 ? _c('b-row', {
    staticClass: "w-100 ml-1 mb-4 border-bottom pt-2 pb-3"
  }, [_vm.fileInfo !== null && _vm.fileInfo.fileId > 0 ? _c('div', {
    staticClass: "w-100"
  }, [_c('font-awesome-icon', {
    staticStyle: {
      "font-size": "x-large"
    },
    attrs: {
      "icon": ['fas', 'file-alt']
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "mx-2"
  }, [_vm._v(_vm._s(Math.trunc(_vm.fileInfo.size) + " KB"))]), _vm._v(" "), _c('a', {
    staticClass: "white-icon align-items-center justify-content-center",
    staticStyle: {
      "cursor": "pointer"
    },
    on: {
      "click": function ($event) {
        return _vm.downloadFile(_vm.fileInfo.fileId);
      }
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.$t("transcript.download")) + "\n                ")])], 1) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('div', {}, [_c('b-form-group', {
    attrs: {
      "id": "input-group-4",
      "label": _vm.$t('transcript.label'),
      "label-for": "input4"
    }
  }, [_c('b-form-file', {
    class: {
      'is-invalid': _vm.$v.selectedFile.$error
    },
    staticStyle: {
      "direction": "ltr"
    },
    attrs: {
      "browse-text": _vm.$t('browse'),
      "id": "input4",
      "placeholder": _vm.$t('chooseFile'),
      "drop-placeholder": _vm.$t('dropFile')
    },
    model: {
      value: _vm.$v.selectedFile.$model,
      callback: function ($$v) {
        _vm.$set(_vm.$v.selectedFile, "$model", $$v);
      },
      expression: "$v.selectedFile.$model"
    }
  }), _vm._v(" "), !_vm.$v.selectedFile.isValidSize ? _c('div', {
    staticClass: "invalid-feedback d-block"
  }, [_vm._v(_vm._s(_vm.$t('file.isValidSize')) + "\n                ")]) : _vm._e(), _vm._v(" "), _vm.selectedFile ? _c('div', {
    staticClass: "mt-3"
  }, [_c('font-awesome-icon', {
    staticStyle: {
      "font-size": "x-large"
    },
    attrs: {
      "icon": ['fas', 'file-alt']
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "mx-2"
  }, [_vm._v(_vm._s(_vm.selectedFile ? Math.trunc(_vm.selectedFile.size / 1024) + " KB" : ''))])], 1) : _vm._e()], 1)], 1)], 1), _vm._v(" "), _c('div', [_c('div', {
    staticClass: "float-left d-block"
  }, [_c('b-button', {
    staticClass: "form-control btn btn-crl btn-primary submit btn-reg px-3 mt-4",
    attrs: {
      "type": "submit"
    }
  }, [_c('span', {
    staticClass: "mt-2"
  }, [_vm._v(_vm._s(_vm.$t('save')))])])], 1)])], 1)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/user-panel/tutor-transcript.vue?vue&type=template&id=151df270&scoped=true&

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

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/user-panel/tutor-transcript.vue?vue&type=script&lang=js&







fontawesome_svg_core_["library"].add(free_brands_svg_icons_["faGoogle"]);
fontawesome_svg_core_["library"].add(free_brands_svg_icons_["faFacebookF"]);
/* harmony default export */ var tutor_transcriptvue_type_script_lang_js_ = ({
  middleware: 'auth',
  name: 'ToturDetails',
  mounted() {
    this.fillUserInfo();
  },
  components: {
    VueCropper: external_vue_cropperjs_default.a
  },
  data() {
    return {
      nextPush: "/reg-educ",
      fileInfo: null,
      busy: false,
      hasImage: null,
      selectedFile: null,
      data: null,
      fileSizeNotValid: false,
      registerForm: {
        File: null,
        transcript_fileId: 0
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
    registerForm: {}
  },
  methods: {
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
        console.log(e);
      }
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
    nextStep() {
      this.$router.push(this.nextPush);
    },
    onSubmit(evt) {
      this.$v.$reset();
      this.errors = null;
      evt.preventDefault();
      this.$v.registerForm.$touch();
      if (this.$v.registerForm.$invalid) {
        console.log("vuelidate error");
      } else {
        if (this.selectedFile === null) {
          this.busy = false;
          return;
        }
        this.busy = true;
        var formData = new FormData();
        if (this.selectedFile !== null) formData.append("file", this.selectedFile, this.selectedFile.name);
        formData.append('registerForm', JSON.stringify(this.registerForm));
        this.$axios.post('/user/save-transcript', formData).then(res => {
          this.busy = false;
          this.registerForm = res.data;
          this.selectedFile = null;
          this.makeToast('success', 'Message', this.$t('done_successfully'));
          this.fillUserInfo();
        }).catch(error => {
          this.busy = false;
          if (error.response.data.errors) {
            this.errors = error.response.data.errors;
          }
        }).finally(() => {
          this.busy = false;
        });
      }
    },
    fillUserInfo() {
      this.$axios.post('/user/get-transcript').then(res => {
        // this.registerForm.Communications = res.data.Communications
        this.fileInfo = res.data;
        this.imagePath = res.data != null ? res.data.fileId : '';
      }).catch(error => {
        if (error.response.data.errors) {
          this.errors = error.response.data.errors;
        }
        console.log(error);
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/user-panel/tutor-transcript.vue?vue&type=script&lang=js&
 /* harmony default export */ var user_panel_tutor_transcriptvue_type_script_lang_js_ = (tutor_transcriptvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./pages/user-panel/tutor-transcript.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(220)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  user_panel_tutor_transcriptvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "151df270",
  "1931c8b7"
  
)

/* harmony default export */ var tutor_transcript = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=tutor-transcript.js.map
exports.ids = [48];
exports.modules = {

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(204);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("a54fcabe", content, true, context)
};

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_expes_vue_vue_type_style_index_0_id_7fbdd59e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(136);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_expes_vue_vue_type_style_index_0_id_7fbdd59e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_expes_vue_vue_type_style_index_0_id_7fbdd59e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_expes_vue_vue_type_style_index_0_id_7fbdd59e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_expes_vue_vue_type_style_index_0_id_7fbdd59e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".title-color[data-v-7fbdd59e]{color:#b6bbc7}.font-color[data-v-7fbdd59e]{cursor:pointer;color:var(--color2)}.font-color[data-v-7fbdd59e]:hover{color:#000}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/user-panel/expes.vue?vue&type=template&id=7fbdd59e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-container',{staticClass:"container-padding",attrs:{"fluid":""}},[_c('b-row',{staticClass:"d-md-flex m-center"},[_c('div',{staticClass:"login-wrap px-xl-5 px-lg-5 px-md-3 px-sm-2 px-2 col-md-12 col-lg-12 col-xl-12"},[_c('b-row',{staticClass:"w-100"},[_c('h3',{staticClass:"mb-2"},[_vm._v(_vm._s(_vm.$t('experience.title')))])]),_vm._v(" "),_c('b-row',{staticClass:"mt-2 w-100"},[_c('b-button',{directives:[{name:"b-toggle",rawName:"v-b-toggle.add_panel",modifiers:{"add_panel":true}}],staticClass:"btn btn-crl  btn-primary ",on:{"click":_vm.addButton}},[_vm._v("Add New\n          ")]),_vm._v(" "),_c('b-modal',{attrs:{"hide-header":"","hide-footer":"","centered":"","id":"add_panel"},model:{value:(_vm.visible),callback:function ($$v) {_vm.visible=$$v},expression:"visible"}},[_c('b-form',{staticClass:"w-100",on:{"submit":function($event){$event.stopPropagation();$event.preventDefault();return _vm.onSubmit.apply(null, arguments)},"reset":_vm.onReset}},[_c('b-form-group',{attrs:{"id":"input-group-name","label":_vm.$t('experience-company-label')+':',"label-for":"input-company"}},[_c('b-form-input',{class:{ 'is-invalid': _vm.$v.formData.company.$error },attrs:{"id":"input-company","placeholder":_vm.$t('experience-company-enterHelp')},model:{value:(_vm.$v.formData.company.$model),callback:function ($$v) {_vm.$set(_vm.$v.formData.company, "$model", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"$v.formData.company.$model"}}),_vm._v(" "),(!_vm.$v.formData.company.required)?_c('div',{staticClass:"invalid-feedback"},[_vm._v("\n                  "+_vm._s(_vm.$t('experience-company-required'))+"\n                ")]):_vm._e(),_vm._v(" "),(!_vm.$v.formData.company.serverError)?_c('div',{staticClass:"invalid-feedback"},[_vm._v(_vm._s(_vm.$t(_vm.errors.company.msg))+"\n                ")]):_vm._e()],1),_vm._v(" "),_c('b-form-group',{attrs:{"id":"input-group-position","label":_vm.$t('experience.position.label')+':',"label-for":"input-position"}},[_c('b-form-input',{class:{ 'is-invalid': _vm.$v.formData.position.$error },attrs:{"id":"input-position","placeholder":_vm.$t('experience.position.enterHelp')},model:{value:(_vm.$v.formData.position.$model),callback:function ($$v) {_vm.$set(_vm.$v.formData.position, "$model", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"$v.formData.position.$model"}}),_vm._v(" "),(!_vm.$v.formData.position.required)?_c('div',{staticClass:"invalid-feedback"},[_vm._v("\n                  "+_vm._s(_vm.$t('experience.position.required'))+"\n                ")]):_vm._e(),_vm._v(" "),(!_vm.$v.formData.position.serverError)?_c('div',{staticClass:"invalid-feedback"},[_vm._v(_vm._s(_vm.$t(_vm.errors.position.msg))+"\n                ")]):_vm._e()],1),_vm._v(" "),_c('b-form-row',[_c('b-form-group',{staticClass:"col-6",attrs:{"id":"input-group-startYear","label":_vm.$t('startYear.label')+':',"label-for":"input-startYear"}},[_c('b-form-select',{class:{ 'is-invalid': _vm.$v.formData.startYear.$error },attrs:{"id":"input-startYear","options":_vm.computedYears},model:{value:(_vm.$v.formData.startYear.$model),callback:function ($$v) {_vm.$set(_vm.$v.formData.startYear, "$model", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"$v.formData.startYear.$model"}}),_vm._v(" "),(!_vm.$v.formData.startYear.required)?_c('div',{staticClass:"invalid-feedback"},[_vm._v(_vm._s(_vm.$t('startYear.required'))+"\n                  ")]):_vm._e(),_vm._v(" "),(!_vm.$v.formData.startYear.checkErrorEndYear)?_c('div',{staticClass:"invalid-feedback"},[_vm._v("\n                    "+_vm._s(_vm.$t("start_year_not_valid"))+"\n                  ")]):_vm._e()],1),_vm._v(" "),_c('b-form-group',{staticClass:"col-6",attrs:{"id":"input-group-name","label":_vm.$t('endYear.label')+':',"label-for":"input-endYear"}},[_c('b-form-select',{class:{ 'is-invalid': _vm.$v.formData.endYear.$error },attrs:{"id":"input-endYear","options":_vm.computedYears},model:{value:(_vm.$v.formData.endYear.$model),callback:function ($$v) {_vm.$set(_vm.$v.formData.endYear, "$model", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"$v.formData.endYear.$model"}}),_vm._v(" "),(!_vm.$v.formData.endYear.required)?_c('div',{staticClass:"invalid-feedback"},[_vm._v(_vm._s(_vm.$t('endYear.required'))+"\n                  ")]):_vm._e(),_vm._v(" "),(!_vm.$v.formData.endYear.checkErrorEndYear)?_c('div',{staticClass:"invalid-feedback"},[_vm._v("\n                    "+_vm._s(_vm.$t("end_year_not_valid"))+"\n                  ")]):_vm._e()],1)],1),_vm._v(" "),_c('b-form-row',[_c('div',{staticClass:"p-2 w-100"},[_c('b-button',{staticClass:"form-control btn btn-crl btn-primary submit px-3 btn-reg mr-2",attrs:{"type":"submit"}},[_vm._v("\n                    "+_vm._s(_vm.$t('add'))+"\n                  ")]),_vm._v(" "),_c('b-button',{staticClass:"form-control btn btn-crl btn-primary submit px-3 btn-reg mr-2",on:{"click":_vm.cancel}},[_vm._v("\n                    "+_vm._s(_vm.$t('cancel'))+"\n                  ")])],1)])],1)],1)],1),_vm._v(" "),_c('b-overlay',{staticClass:"w-100",staticStyle:{"margin":"-15px!important"},attrs:{"show":_vm.loaded,"variant":"transparent","opacity":0.8,"blur":"3px","rounded":"sm"}},[_c('b-row',{staticClass:"mt-4 w-100 mx-0"},[(_vm.t_items.length == 0)?_c('div',[_vm._v("\n              Loading ...\n            ")]):_vm._e(),_vm._v(" "),_vm._l((_vm.t_items),function(item){return _c('div',{key:item.id,staticClass:"col-lg-4 p-1"},[_c('b-card',{staticClass:"h-100"},[_c('a',{staticClass:"font-color float-right",on:{"click":function($event){return _vm.showDeleteComfirm(item)}}},[_c('font-awesome-icon',{attrs:{"icon":['fas', 'trash-alt']}})],1),_vm._v(" "),_c('div',{staticClass:"small font-weight-bold title-color"},[_vm._v("\n                  Company Name:\n                ")]),_vm._v(" "),_c('div',[_vm._v("\n                  "+_vm._s(item.company)+"\n                ")]),_vm._v(" "),_c('hr',{staticClass:"my-2"}),_vm._v(" "),_c('div',{staticClass:"small font-weight-bold title-color"},[_vm._v("\n                  "+_vm._s(_vm.$t("Status"))+":\n                ")]),_vm._v(" "),_c('div',[(item.acceptStatus === 1)?_c('b-badge',{attrs:{"variant":"success"}},[_vm._v(_vm._s(_vm.$t("accepted")))]):_vm._e(),_vm._v(" "),(item.acceptStatus === -1)?_c('b-badge',{attrs:{"variant":"danger"}},[_vm._v(_vm._s(_vm.$t("disable")))]):_vm._e(),_vm._v(" "),(item.acceptStatus === 0 || item.acceptStatus === null )?_c('b-badge',{attrs:{"variant":"warning"}},[_vm._v("\n                    "+_vm._s(_vm.$t("pending"))+"\n                  ")]):_vm._e()],1),_vm._v(" "),_c('hr',{staticClass:"my-2"}),_vm._v(" "),_c('div',{staticClass:"small font-weight-bold title-color"},[_vm._v("\n                  Work Position:\n                ")]),_vm._v(" "),_c('div',[_vm._v("\n                  "+_vm._s(item.position)+"\n                ")]),_vm._v(" "),_c('hr',{staticClass:"my-2"}),_vm._v(" "),_c('div',{staticClass:"small font-weight-bold title-color"},[_vm._v("\n                  Years:\n                ")]),_vm._v(" "),_c('div',[_vm._v(" "+_vm._s(item.startYear)+" - "+_vm._s(item.endYear))])])],1)})],2)],1)],1)])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/user-panel/expes.vue?vue&type=template&id=7fbdd59e&scoped=true&

// EXTERNAL MODULE: external "@fortawesome/fontawesome-svg-core"
var fontawesome_svg_core_ = __webpack_require__(4);

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(1);

// EXTERNAL MODULE: external "vuelidate/lib/validators"
var validators_ = __webpack_require__(103);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/user-panel/expes.vue?vue&type=script&lang=js&
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


 // import {required, numeric, minLength, maxLength} from "vuelidate/lib/validators";

fontawesome_svg_core_["library"].add(free_solid_svg_icons_["faFileAlt"]);
fontawesome_svg_core_["library"].add(free_solid_svg_icons_["faTrashAlt"]);
/* harmony default export */ var expesvue_type_script_lang_js_ = ({
  name: "reg-cert",

  data() {
    return {
      addButtonVisible: true,
      loaded: false,
      visible: false,
      errors: null,
      defaultData: {
        id: 0
      },
      delData: {
        certId: 0
      },
      t_items: [],
      formData: {
        userId: 0,
        company: '',
        position: '',
        startYear: 1960,
        endYear: 1961
      }
    };
  },

  validations: {
    formData: {
      company: {
        required: validators_["required"],

        serverError(value) {
          return this.serverError(value, "company");
        }

      },
      position: {
        required: validators_["required"],

        serverError(value) {
          return this.serverError(value, "position");
        }

      },
      startYear: {
        required: validators_["required"]
      },
      endYear: {
        required: validators_["required"],

        checkErrorEndYear(value) {
          return this.formData.startYear == null || value > this.formData.startYear;
        }

      }
    }
  },
  computed: {
    computedYears: function () {
      var years = [];

      for (var i = 1960; i < new Date().getFullYear(); i++) {
        years.push(i);
      }

      return years;
    }
  },

  mounted() {
    this.reloadTable();
  },

  methods: {
    onSubmit(evt) {
      this.$v.$reset();
      this.errors = null;
      evt.preventDefault();
      this.$v.formData.$touch();

      if (this.$v.formData.$invalid) {
        console.log("vuelidate error");
      } else {
        this.loaded = true;
        this.$axios.post('/experience/create', this.formData).then(rsp => {
          this.t_items = rsp.data;
          this.clear();
        }).catch(error => {
          if (error.response.data.errors) {
            this.errors = error.response.data.errors;
          }
        }).finally(() => {
          this.loaded = false;
        });
      }
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

    onReset(evt) {
      evt.preventDefault();
    },

    serverError(value, attrib) {
      if (value === '') {
        return true;
      }

      return !(this.errors != null && this.errors[attrib] && value === this.errors[attrib].value);
    },

    reloadTable() {
      this.loaded = true;
      this.$axios.post('experience/list', null).then(res => {
        this.loaded = true;
        this.t_items = res.data;
      }).catch(error => {
        this.loaded = true;

        if (error.response.data.errors) {
          this.errors = error.response.data.errors;
        }
      }).finally(() => {
        this.loaded = false;
      });
    },

    clear() {
      this.formData.userId = 0;
      this.formData.company = '';
      this.formData.position = '';
      this.formData.startYear = 1960;
      this.formData.endYear = 1961;
      this.visible = false;
      this.addButtonVisible = true;
      this.$v.$reset();
    },

    addButton() {
      this.clear();
      this.addButtonVisible = false;
      this.visible = true;
    },

    cancel() {
      this.clear();
      this.addButtonVisible = true;
      this.visible = false;
    },

    showDeleteComfirm(item) {
      try {
        this.$bvModal.msgBoxConfirm(this.$t('delete_confirm'), {
          title: 'Please Confirm',
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'danger',
          okTitle: 'YES',
          cancelTitle: 'NO',
          headerClass: 'p-2 border-bottom-0',
          footerClass: 'p-2 border-top-0',
          hideHeaderClose: false,
          centered: true
        }).then(value => {
          this.loaded = true;
          this.delComfirm = value;

          if (value === true) {
            this.delData.expeId = item.id;
            this.$axios.post('/experience/delete', this.delData).then(res => {
              this.makeToast('success', 'Message', this.$t('success_delete')); //debug

              console.log(res.data);
              this.reloadTable();
            }).catch(error => {
              if (error.response.data.errors) {
                this.errors = error.response.data.errors;
              }

              console.log(error);
            });
          }
        }).catch(err => {
          // An error occurred
          console.log(err);
        }).finally(() => {
          this.loaded = false;
        });
      } catch (e) {
        console.log(e);
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/user-panel/expes.vue?vue&type=script&lang=js&
 /* harmony default export */ var user_panel_expesvue_type_script_lang_js_ = (expesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./pages/user-panel/expes.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(203)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  user_panel_expesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7fbdd59e",
  "def0061a"
  
)

/* harmony default export */ var expes = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=expes.js.map
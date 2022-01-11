exports.ids = [29];
exports.modules = {

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(178);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("4d7d531a", content, true, context)
};

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reg_expe_vue_vue_type_style_index_0_id_5379c196_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(124);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reg_expe_vue_vue_type_style_index_0_id_5379c196_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reg_expe_vue_vue_type_style_index_0_id_5379c196_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reg_expe_vue_vue_type_style_index_0_id_5379c196_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reg_expe_vue_vue_type_style_index_0_id_5379c196_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".title-color[data-v-5379c196]{color:#b6bbc7}.font-color[data-v-5379c196]{cursor:pointer;color:var(--color2)}.font-color[data-v-5379c196]:hover{color:#000}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/reg-expe.vue?vue&type=template&id=5379c196&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-body-container-content"},[_c('b-container',{staticClass:"container-padding"},[_c('b-row',{staticClass:"col-md-12 pb-5 col-lg-10 m-center"},[_c('div',{staticClass:"w-100"},[_c('h3',{staticClass:"mb-4 text-center"},[_vm._v(_vm._s(_vm.$t('completeRegistration')))])]),_vm._v(" "),_c('b-row',{staticClass:"w-100 mx-0"},[_c('h4',{staticClass:"mb-2"},[_vm._v(_vm._s(_vm.$t('resume')))]),_vm._v(" "),_c('b-progress',{staticClass:"w-100",attrs:{"value":"5","max":"5","height":"10px","variant":"danger"}}),_vm._v(" "),_c('span',[_vm._v("5/6")])],1),_vm._v(" "),_c('b-row',{staticClass:"mx-0 pt-5 pb-4 col-xl-7 col-lg-8 col-md-12"},[_c('b-form',{staticClass:"w-100",on:{"submit":function($event){$event.stopPropagation();$event.preventDefault();return _vm.onSubmit.apply(null, arguments)},"reset":_vm.onReset}},[_c('b-form-group',{attrs:{"id":"input-group-name","label":_vm.$t('company-label')+':',"label-for":"input-company"}},[_c('b-form-input',{class:{ 'is-invalid': _vm.$v.formData.company.$error },attrs:{"id":"input-company","placeholder":_vm.$t('enterTitle')},model:{value:(_vm.$v.formData.company.$model),callback:function ($$v) {_vm.$set(_vm.$v.formData.company, "$model", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"$v.formData.company.$model"}}),_vm._v(" "),(!_vm.$v.formData.company.required)?_c('div',{staticClass:"invalid-feedback"},[_vm._v(_vm._s(_vm.$t('company-required')))]):_vm._e(),_vm._v(" "),(!_vm.$v.formData.company.serverError)?_c('div',{staticClass:"invalid-feedback"},[_vm._v(_vm._s(_vm.$t(_vm.errors.company.msg))+"\n              ")]):_vm._e()],1),_vm._v(" "),_c('b-form-group',{attrs:{"id":"input-group-name","label":_vm.$t('position.label')+':',"label-for":"input-position"}},[_c('b-form-input',{class:{ 'is-invalid': _vm.$v.formData.position.$error },attrs:{"id":"input-position","placeholder":_vm.$t('enterPosition')},model:{value:(_vm.$v.formData.position.$model),callback:function ($$v) {_vm.$set(_vm.$v.formData.position, "$model", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"$v.formData.position.$model"}}),_vm._v(" "),(!_vm.$v.formData.position.required)?_c('div',{staticClass:"invalid-feedback"},[_vm._v(_vm._s(_vm.$t('position.required')))]):_vm._e(),_vm._v(" "),(!_vm.$v.formData.position.serverError)?_c('div',{staticClass:"invalid-feedback"},[_vm._v(_vm._s(_vm.$t(_vm.errors.position.msg))+"\n              ")]):_vm._e()],1),_vm._v(" "),_c('b-form-row',[_c('b-form-group',{staticClass:"col-6",attrs:{"id":"input-group-name","label":_vm.$t('startYear.label')+':',"label-for":"input-startYear"}},[_c('b-form-select',{class:{ 'is-invalid': _vm.$v.formData.startYear.$error },attrs:{"id":"input-startYear","options":_vm.computedYears},model:{value:(_vm.$v.formData.startYear.$model),callback:function ($$v) {_vm.$set(_vm.$v.formData.startYear, "$model", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"$v.formData.startYear.$model"}}),_vm._v(" "),(!_vm.$v.formData.startYear.required)?_c('div',{staticClass:"invalid-feedback"},[_vm._v(_vm._s(_vm.$t('startYear.required'))+"\n              ")]):_vm._e(),_vm._v(" "),(!_vm.$v.formData.startYear.checkErrorEndYear)?_c('div',{staticClass:"invalid-feedback"},[_vm._v("\n                "+_vm._s(_vm.$t("start_year_not_valid"))+"\n              ")]):_vm._e()],1),_vm._v(" "),_c('b-form-group',{staticClass:"col-6",attrs:{"id":"input-group-name","label":_vm.$t('endYear.label')+':',"label-for":"input-endYear"}},[_c('b-form-select',{class:{ 'is-invalid': _vm.$v.formData.endYear.$error },attrs:{"id":"input-endYear","options":_vm.computedYears},model:{value:(_vm.$v.formData.endYear.$model),callback:function ($$v) {_vm.$set(_vm.$v.formData.endYear, "$model", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"$v.formData.endYear.$model"}}),_vm._v(" "),(!_vm.$v.formData.endYear.required)?_c('div',{staticClass:"invalid-feedback"},[_vm._v(_vm._s(_vm.$t('endYear.required')))]):_vm._e(),_vm._v(" "),(!_vm.$v.formData.endYear.checkErrorEndYear)?_c('div',{staticClass:"invalid-feedback"},[_vm._v("\n                "+_vm._s(_vm.$t("end_year_not_valid"))+"\n              ")]):_vm._e()],1)],1),_vm._v(" "),_c('b-form-row',[_c('b-button',{staticClass:"col-4 float-right form-control btn btn-crl  btn-primary submit px-3",attrs:{"type":"submit"}},[_vm._v("\n              "+_vm._s(_vm.$t('add'))+"\n            ")])],1)],1)],1),_vm._v(" "),_c('b-row',{staticClass:"w-100 mx-0"},_vm._l((_vm.t_items),function(item){return _c('div',{key:item.id,staticClass:"col-lg-4 p-1"},[_c('b-card',[_c('a',{staticClass:"font-color float-right",on:{"click":function($event){return _vm.showDeleteComfirm(item)}}},[_c('font-awesome-icon',{attrs:{"icon":['fas', 'trash-alt']}})],1),_vm._v(" "),_c('div',{staticClass:"small font-weight-bold title-color"},[_vm._v("\n              Company Name:\n            ")]),_vm._v(" "),_c('div',[_vm._v("\n              "+_vm._s(item.company)+"\n            ")]),_vm._v(" "),_c('hr',{staticClass:"my-2"}),_vm._v(" "),_c('div',{staticClass:"small font-weight-bold title-color"},[_vm._v("\n              Work Position:\n            ")]),_vm._v(" "),_c('div',[_vm._v("\n              "+_vm._s(item.position)+"\n            ")]),_vm._v(" "),_c('hr',{staticClass:"my-2"}),_vm._v(" "),_c('div',{staticClass:"small font-weight-bold title-color"},[_vm._v("\n              Years:\n            ")]),_vm._v(" "),_c('div',[_vm._v("  "+_vm._s(item.startYear)+" - "+_vm._s(item.endYear))])])],1)}),0),_vm._v(" "),_c('div',{staticClass:"p-4"},[_c('b-button',{staticClass:"form-control btn btn-crl  btn-primary submit px-3 mt-4 btn-reg mr-2",attrs:{"to":"/reg-educ"}},[_vm._v(_vm._s(_vm.$t('back'))+"\n        ")]),_vm._v(" "),_c('b-button',{staticClass:"form-control btn btn-crl  btn-primary submit px-3 mt-4 btn-reg",attrs:{"to":"/tutor-timing"}},[_vm._v("\n          "+_vm._s(_vm.$t('next'))+"\n        ")])],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/reg-expe.vue?vue&type=template&id=5379c196&scoped=true&

// EXTERNAL MODULE: external "@fortawesome/fontawesome-svg-core"
var fontawesome_svg_core_ = __webpack_require__(4);

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(1);

// EXTERNAL MODULE: external "vuelidate/lib/validators"
var validators_ = __webpack_require__(103);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/reg-expe.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
/* harmony default export */ var reg_expevue_type_script_lang_js_ = ({
  middleware: 'auth',
  name: "reg-cert",

  data() {
    return {
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
        this.$axios.post('/experience/create', this.formData).then(rsp => {
          this.t_items = rsp.data;
          console.log(rsp);
        }).catch(error => {
          if (error.response.data.errors) {
            this.errors = error.response.data.errors;
          }

          console.log(error);
        });
      }
    },

    makeToast(variant = 'success', header = 'Message', msg = '') {
      this.$bvToast.toast(this.$t(msg), {
        title: header,
        variant: variant,
        solid: true
      });
    },

    onReset(evt) {
      evt.preventDefault(); // Reset our registerForm values
    },

    serverError(value, attrib) {
      if (value === '') {
        return true;
      }

      return !(this.errors != null && this.errors[attrib] && value === this.errors[attrib].value);
    },

    reloadTable() {
      this.$axios.post('experience/list', null).then(res => {
        this.t_items = res.data; //debug

        console.log(res.data);
      }).catch(error => {
        if (error.response.data.errors) {
          this.errors = error.response.data.errors;
        }

        console.log(error);
      });
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
        });
      } catch (e) {
        console.log(e);
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/reg-expe.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_reg_expevue_type_script_lang_js_ = (reg_expevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./pages/reg-expe.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(177)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_reg_expevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5379c196",
  "38b39266"
  
)

/* harmony default export */ var reg_expe = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=reg-expe.js.map
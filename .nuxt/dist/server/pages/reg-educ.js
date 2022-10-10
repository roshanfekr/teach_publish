exports.ids = [30];
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
  add("734d5dfa", content, true, context)
};

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reg_educ_vue_vue_type_style_index_0_id_a5628114_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(124);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reg_educ_vue_vue_type_style_index_0_id_a5628114_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reg_educ_vue_vue_type_style_index_0_id_a5628114_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reg_educ_vue_vue_type_style_index_0_id_a5628114_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reg_educ_vue_vue_type_style_index_0_id_a5628114_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".title-color[data-v-a5628114]{color:#b6bbc7}.font-color[data-v-a5628114]{cursor:pointer;color:var(--color2)}.font-color[data-v-a5628114]:hover{color:#000}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/reg-educ.vue?vue&type=template&id=a5628114&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-body-container-content"},[_c('b-container',{staticClass:"container-padding"},[_c('b-row',{staticClass:"col-md-12 pb-5 col-lg-10 m-center"},[_c('div',{staticClass:"w-100"},[_c('h3',{staticClass:"mb-4 text-center"},[_vm._v(_vm._s(_vm.$t('completeRegistration')))])]),_vm._v(" "),_c('b-row',{staticClass:"w-100 mx-0"},[_c('h4',{staticClass:"mb-2"},[_vm._v(_vm._s(_vm.$t('educations.title')))]),_vm._v(" "),_c('b-progress',{staticClass:"w-100",attrs:{"value":"4","max":"5","height":"10px","variant":"danger"}}),_vm._v(" "),_c('span',[_vm._v("4/5")])],1),_vm._v(" "),_c('p',{staticClass:"w-100 mt-2",staticStyle:{"font-size":"small"}},[_c('svg',{staticClass:"bi bi-exclamation-circle",attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"20","height":"20","fill":"currentColor","viewBox":"0 0 16 16"}},[_c('path',{attrs:{"d":"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}}),_vm._v(" "),_c('path',{attrs:{"d":"M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"}})]),_vm._v(" "),_c('span',{staticClass:"ml-1"},[_vm._v(_vm._s(_vm.$t("educations.header_alert")))])]),_vm._v(" "),_c('b-row',{staticClass:"mx-0 pt-3 pb-4 col-xl-7 col-lg-8 col-md-12"},[_c('b-overlay',{staticClass:"w-100",attrs:{"show":_vm.busy,"rounded":"lg","variant":"white","opacity":"0.8"}},[_c('b-form',{staticClass:"w-100",attrs:{"enctype":"multipart/form-data"},on:{"submit":function($event){$event.stopPropagation();$event.preventDefault();return _vm.onSubmit.apply(null, arguments)},"reset":_vm.onReset}},[_c('b-form-group',{attrs:{"id":"input-group-name","label":_vm.$t('educations.university.label'),"label-for":"input-company"}},[_c('b-form-input',{class:{ 'is-invalid': _vm.$v.formData.university.$error },attrs:{"id":"input-company","placeholder":_vm.$t('educations.enterUniversity')},model:{value:(_vm.$v.formData.university.$model),callback:function ($$v) {_vm.$set(_vm.$v.formData.university, "$model", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"$v.formData.university.$model"}}),_vm._v(" "),(!_vm.$v.formData.university.required)?_c('div',{staticClass:"invalid-feedback"},[_vm._v("\n                "+_vm._s(_vm.$t('educations.university.required'))+"\n              ")]):_vm._e(),_vm._v(" "),(!_vm.$v.formData.university.serverError)?_c('div',{staticClass:"invalid-feedback"},[_vm._v(_vm._s(_vm.$t(_vm.errors.university.msg))+"\n              ")]):_vm._e()],1),_vm._v(" "),_c('b-form-group',{attrs:{"id":"input-group-name","label":_vm.$t('educations.levelEducation.label'),"label-for":"input-speciality"}},[_c('b-form-input',{class:{ 'is-invalid': _vm.$v.formData.levelEducation.$error },attrs:{"id":"input-speciality","placeholder":_vm.$t('educations.levelEducation.eg')},model:{value:(_vm.$v.formData.levelEducation.$model),callback:function ($$v) {_vm.$set(_vm.$v.formData.levelEducation, "$model", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"$v.formData.levelEducation.$model"}}),_vm._v(" "),(!_vm.$v.formData.levelEducation.required)?_c('div',{staticClass:"invalid-feedback"},[_vm._v("\n                "+_vm._s(_vm.$t('educations.levelEducation.required'))+"\n              ")]):_vm._e(),_vm._v(" "),(!_vm.$v.formData.levelEducation.serverError)?_c('div',{staticClass:"invalid-feedback"},[_vm._v(_vm._s(_vm.$t(_vm.errors.levelEducation.msg))+"\n              ")]):_vm._e()],1),_vm._v(" "),_c('b-form-group',{attrs:{"id":"input-group-name","label":_vm.$t('educations.department.label'),"label-for":"input-department"}},[_c('b-form-input',{class:{ 'is-invalid': _vm.$v.formData.department.$error },attrs:{"id":"input-department","placeholder":_vm.$t('educations.department.eg')},model:{value:(_vm.$v.formData.department.$model),callback:function ($$v) {_vm.$set(_vm.$v.formData.department, "$model", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"$v.formData.department.$model"}}),_vm._v(" "),(!_vm.$v.formData.department.required)?_c('div',{staticClass:"invalid-feedback"},[_vm._v("\n                "+_vm._s(_vm.$t('educations.department.required'))+"\n              ")]):_vm._e(),_vm._v(" "),(!_vm.$v.formData.department.serverError)?_c('div',{staticClass:"invalid-feedback"},[_vm._v(_vm._s(_vm.$t(_vm.errors.department.msg))+"\n              ")]):_vm._e()],1),_vm._v(" "),_c('b-form-row',[_c('b-form-group',{staticClass:"col-6",attrs:{"id":"input-group-name","label":_vm.$t('startYear.label'),"label-for":"input-startYear"}},[_c('v-select',{staticClass:"m-v-select2",class:{ 'is-invalid  d-block': _vm.$v.formData.startYear.$error },attrs:{"placeholder":"Start year","options":_vm.computedYears},model:{value:(_vm.$v.formData.startYear.$model),callback:function ($$v) {_vm.$set(_vm.$v.formData.startYear, "$model", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"$v.formData.startYear.$model"}}),_vm._v(" "),(!_vm.$v.formData.startYear.required)?_c('div',{staticClass:"invalid-feedback"},[_vm._v(_vm._s(_vm.$t('startYear.required'))+"\n                ")]):_vm._e(),_vm._v(" "),(!_vm.$v.formData.startYear.checkErrorEndYear)?_c('div',{staticClass:"invalid-feedback"},[_vm._v("\n                  "+_vm._s(_vm.$t("start_year_not_valid"))+"\n                ")]):_vm._e()],1),_vm._v(" "),_c('b-form-group',{staticClass:"col-6",attrs:{"id":"input-group-name","label":_vm.$t('endYear.label'),"label-for":"input-endYear"}},[_c('v-select',{staticClass:"m-v-select2",class:{ 'is-invalid  d-block': _vm.$v.formData.endYear.$error },attrs:{"placeholder":"End year","options":_vm.computedYears},model:{value:(_vm.$v.formData.endYear.$model),callback:function ($$v) {_vm.$set(_vm.$v.formData.endYear, "$model", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"$v.formData.endYear.$model"}}),_vm._v(" "),(!_vm.$v.formData.endYear.checkErrorEndYear)?_c('div',{staticClass:"invalid-feedback"},[_vm._v("\n                  "+_vm._s(_vm.$t("end_year_not_valid"))+"\n                ")]):_vm._e()],1)],1),_vm._v(" "),_c('b-form-group',{attrs:{"id":"input-group-4","label":"File:","label-for":"input4"}},[_c('b-form-file',{class:{ 'is-invalid': _vm.$v.formData.selectedFile.$error },staticStyle:{"direction":"ltr"},attrs:{"browse-text":_vm.$t('browse'),"id":"input4","placeholder":_vm.$t('chooseFile'),"drop-placeholder":_vm.$t('dropFile')},model:{value:(_vm.$v.formData.selectedFile.$model),callback:function ($$v) {_vm.$set(_vm.$v.formData.selectedFile, "$model", $$v)},expression:"$v.formData.selectedFile.$model"}}),_vm._v(" "),(_vm.$v.formData.selectedFile.$dirty && !_vm.$v.formData.selectedFile.isValidSize)?_c('div',{staticClass:"invalid-feedback d-block"},[_vm._v(_vm._s(_vm.$t('file.isValidSize'))+"\n              ")]):_vm._e(),_vm._v(" "),(_vm.formData.selectedFile)?_c('div',{staticClass:"mt-3"},[_c('font-awesome-icon',{staticStyle:{"font-size":"x-large"},attrs:{"icon":['fas', 'file-alt']}}),_vm._v(" "),_c('span',{staticClass:"mx-2"},[_vm._v(_vm._s(_vm.formData.selectedFile ? Math.trunc(_vm.formData.selectedFile.size / 1024) + " KB" : ''))])],1):_vm._e()],1),_vm._v(" "),_c('b-row',{staticClass:"w-100 overflow- text-left small text-small ml-2 mt-1"},[_c('span',[_vm._v(_vm._s(_vm.$t("educations.file.size_message")))]),_vm._v(" "),_c('span',{staticClass:"mt-1"},[_vm._v(_vm._s(_vm.$t("educations.file.message")))])]),_vm._v(" "),_c('b-row',{staticClass:"w-100 text-right d-block"},[_c('b-button',{staticClass:"form-control btn btn-crl btn-primary submit px-3 btn-reg mr-2 ",attrs:{"type":"save"}},[_vm._v("\n                "+_vm._s(_vm.$t('add'))+"\n              ")])],1)],1)],1)],1),_vm._v(" "),_c('b-row',{staticClass:"w-50"},[_c('div',{staticClass:"float-left d-block"},[_c('b-button',{staticClass:"form-control btn btn-crl  btn-primary submit px-3 mt-4 btn-reg mr-2",attrs:{"to":"/tutor-transcript"}},[_c('svg',{staticClass:"bi bi-chevron-left",attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16"}},[_c('path',{attrs:{"fill-rule":"evenodd","d":"M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"}})]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.$t('back')))])]),_vm._v(" "),_c('b-button',{staticClass:"form-control btn btn-crl  btn-primary submit btn-reg px-3 mt-4",on:{"click":_vm.nextStep}},[_c('span',{staticClass:"mt-2"},[_vm._v(_vm._s(_vm.$t('next')))]),_vm._v(" "),_c('svg',{staticClass:"bi bi-chevron-right",attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16"}},[_c('path',{attrs:{"fill-rule":"evenodd","d":"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"}})])])],1),_vm._v(" "),_c('div',{staticClass:"float-right mt-5 w-50 text-right"},[_c('b-link',{attrs:{"href":"","to":"/tutor-timing"}},[_vm._v("Skip step")])],1)]),_vm._v(" "),_c('b-row',{staticClass:"w-100 mt-4"},_vm._l((_vm.t_items),function(item){return _c('div',{key:item.id,staticClass:"col-lg-4 p-1"},[_c('b-card',[_c('div',{staticClass:"text-right"},[_c('b-link',{staticClass:"mr-4",staticStyle:{"color":"#bfbfbf"},attrs:{"size":"sm"},on:{"click":function($event){return _vm.showDeleteComfirm(item,_vm.index)}}},[_c('font-awesome-icon',{staticClass:"shop-icon",attrs:{"icon":['fas', 'trash']}})],1)],1),_vm._v(" "),_c('div',{staticClass:"small font-weight-bold title-color"},[_vm._v("\n                University Name:\n              ")]),_vm._v(" "),_c('div',[_vm._v("\n                "+_vm._s(item.university)+"\n              ")]),_vm._v(" "),_c('hr',{staticClass:"my-2"}),_vm._v(" "),_c('div',{staticClass:"small font-weight-bold title-color"},[_vm._v("\n                Level Of Education:\n              ")]),_vm._v(" "),_c('div',[_vm._v("\n                "+_vm._s(item.levelEducation)+"\n              ")]),_vm._v(" "),_c('hr',{staticClass:"my-2"}),_vm._v(" "),_c('div',{staticClass:"small font-weight-bold title-color"},[_vm._v("\n                "+_vm._s(_vm.$t("Status"))+"\n              ")]),_vm._v(" "),_c('div',[(item.acceptStatus === 1)?_c('b-badge',{attrs:{"variant":"success"}},[_vm._v(_vm._s(_vm.$t("accepted")))]):_vm._e(),_vm._v(" "),(item.acceptStatus === -1)?_c('b-badge',{attrs:{"variant":"danger"}},[_vm._v(_vm._s(_vm.$t("disable")))]):_vm._e(),_vm._v(" "),(item.acceptStatus === 0 || item.acceptStatus === null )?_c('b-badge',{attrs:{"variant":"warning"}},[_vm._v("\n                  "+_vm._s(_vm.$t("pending"))+"\n                ")]):_vm._e()],1),_vm._v(" "),_c('hr',{staticClass:"my-2"}),_vm._v(" "),_c('div',{staticClass:"small font-weight-bold title-color"},[_vm._v("\n                Department:\n              ")]),_vm._v(" "),_c('div',[_vm._v("\n                "+_vm._s(item.department)+"\n              ")]),_vm._v(" "),_c('hr',{staticClass:"my-2"}),_vm._v(" "),_c('div',{staticClass:"small font-weight-bold title-color"},[_vm._v("\n                Years:\n              ")]),_vm._v(" "),_c('div',[_vm._v("  "+_vm._s(item.startYear)+" - "+_vm._s(item.endYear))]),_vm._v(" "),_c('hr',{staticClass:"my-2"}),_vm._v(" "),( item.fileId>0 )?_c('a',{staticClass:"circle-icon white-icon d-flex align-items-center justify-content-center",on:{"click":function($event){return _vm.downloadFile(item)}}},[_c('font-awesome-icon',{attrs:{"icon":['fas', 'file-alt']}})],1):_vm._e()])],1)}),0)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/reg-educ.vue?vue&type=template&id=a5628114&scoped=true&

// EXTERNAL MODULE: external "@fortawesome/fontawesome-svg-core"
var fontawesome_svg_core_ = __webpack_require__(4);

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(1);

// EXTERNAL MODULE: external "vuelidate/lib/validators"
var validators_ = __webpack_require__(103);

// EXTERNAL MODULE: external "@fortawesome/free-regular-svg-icons"
var free_regular_svg_icons_ = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/reg-educ.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





fontawesome_svg_core_["library"].add(free_solid_svg_icons_["faTrash"]);
fontawesome_svg_core_["library"].add(free_regular_svg_icons_["faEdit"]);
fontawesome_svg_core_["library"].add(free_solid_svg_icons_["faFileAlt"]);
fontawesome_svg_core_["library"].add(free_solid_svg_icons_["faTrashAlt"]);
/* harmony default export */ var reg_educvue_type_script_lang_js_ = ({
  middleware: 'auth',
  name: "reg-educ",

  data() {
    return {
      nextPush: "/tutor-timing",
      busy: true,
      errors: null,
      defaultData: {
        id: 0
      },
      delData: {
        certId: 0
      },
      t_items: [],
      formData: {
        selectedFile: null,
        userId: 0,
        university: '',
        levelEducation: '',
        department: '',
        startYear: null,
        endYear: null
      },
      degree_option: [{
        value: 0,
        text: 'Please Select degree'
      }, {
        value: 1,
        text: 'Master'
      }, {
        value: 2,
        text: 'Bachelor'
      }]
    };
  },

  validations: {
    formData: {
      university: {
        required: validators_["required"],

        serverError(value) {
          return this.serverError(value, "university");
        }

      },
      department: {
        required: validators_["required"],

        serverError(value) {
          return this.serverError(value, "department");
        }

      },
      levelEducation: {
        required: validators_["required"],

        serverError(value) {
          return this.serverError(value, "levelEducation");
        }

      },
      startYear: {},
      endYear: {
        checkErrorEndYear(value) {
          return this.formData.startYear == null || value > this.formData.startYear;
        }

      },
      selectedFile: {
        // required: requiredIf(function () {
        //   return this.formData.selectedFile === null;
        // }),
        isValidSize(file) {
          if (!file) {
            return true;
          }

          return file.size < 2 * 1024 * 1024;
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
    async nextStep() {
      const self = this;
      let nextCancel = false;

      if (this.formData.university !== '' && this.formData.university != null || this.formData.department !== '' && this.formData.department != null || this.formData.levelEducation !== '' && this.formData.levelEducation != null || this.formData.selectedFile != null) {
        await this.$bvModal.msgBoxConfirm(this.$t('educations.incomplete_form'), {
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
            self.$router.push(this.nextPush);
          } else {}
        }).catch(err => {});
      } else {
        this.$router.push(this.nextPush);
      }
    },

    hideOverlay() {
      this.busy = false;
    },

    showOverlay() {
      this.busy = true;
    },

    downloadFile(rowId) {
      try {
        var c = {
          responseType: 'blob'
        };
        this.$axios.get(`/download/${rowId.fileId}`, c).then(response => {
          console.log(response);
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

    clear() {
      this.formData.selectedFile = null;
      this.formData.userId = 0;
      this.formData.university = "";
      this.formData.levelEducation = "";
      this.formData.department = "";
      this.formData.startYear = null;
      this.formData.endYear = null;
      this.$v.$reset();
    },

    onSubmit(evt) {
      this.$v.$reset();
      this.errors = null;
      evt.preventDefault();
      this.$v.formData.$touch();

      if (this.$v.formData.$invalid) {
        console.log("vuelidate error");
      } else {
        this.showOverlay();
        var formData = new FormData();
        if (this.formData.selectedFile !== null) formData.append("file", this.formData.selectedFile, this.formData.selectedFile.name);
        formData.append('university', this.formData.university);
        formData.append('department', this.formData.department);
        formData.append('levelEducation', this.formData.levelEducation);
        formData.append('startYear', this.formData.startYear);
        formData.append('endYear', this.formData.endYear);
        this.$axios.post('/educations/create', formData).then(rsp => {
          this.clear();
          this.makeToast('success', 'Message', this.$t('done_successfully'));
          this.t_items = rsp.data;
        }).catch(error => {
          if (error.response.data.errors) {
            this.errors = error.response.data.errors;
          }

          console.log(error);
        }).finally(() => {
          this.hideOverlay();
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
      try {
        this.showOverlay();
        this.$axios.post('educations/list', null).then(res => {
          this.t_items = res.data; //debug

          console.log(res.data);
        }).catch(error => {
          if (error.response.data.errors) {
            this.errors = error.response.data.errors;
          }
        }).finally(() => {
          this.hideOverlay();
        });
      } catch (e) {
        this.hideOverlay();
      }
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
            this.delData.educId = item.id;
            this.$axios.post('/educations/delete', this.delData).then(res => {
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
// CONCATENATED MODULE: ./pages/reg-educ.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_reg_educvue_type_script_lang_js_ = (reg_educvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./pages/reg-educ.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(177)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_reg_educvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "a5628114",
  "1a9c30c8"
  
)

/* harmony default export */ var reg_educ = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=reg-educ.js.map
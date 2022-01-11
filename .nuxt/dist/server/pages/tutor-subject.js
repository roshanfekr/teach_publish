exports.ids = [35];
exports.modules = {

/***/ 129:
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
  add("c058af0c", content, true, context)
};

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tutor_subject_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(129);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tutor_subject_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tutor_subject_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tutor_subject_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tutor_subject_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".is-invalid .vs__dropdown-toggle{border-color:#dc3545;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.m-v-select2 .vs__clear{margin-top:-2px;margin-right:7px;fill:var(--color1)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/tutor-subject.vue?vue&type=template&id=c7f72c3a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-body-container-content"},[_c('b-container',{staticClass:"container-padding"},[_c('b-row',{staticClass:"col-md-12 col-lg-10 m-center"},[_c('div',{staticClass:"w-100"},[_c('h3',{staticClass:"mb-4 text-center"},[_vm._v(_vm._s(_vm.$t('completeRegistration')))])]),_vm._v(" "),_c('b-row',{staticClass:"w-100  mx-0"},[_c('h4',{staticClass:"mb-2"},[_vm._v(_vm._s(_vm.$t('subjects.title')))]),_vm._v(" "),_c('b-progress',{staticClass:"w-100",attrs:{"value":"2","max":"5","height":"10px","variant":"danger"}}),_vm._v(" "),_c('span',[_vm._v("2/5")]),_vm._v(" "),_c('p',{staticClass:"w-100 mt-2",staticStyle:{"font-size":"small"}},[_c('svg',{staticClass:"bi bi-exclamation-circle",attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"20","height":"20","fill":"currentColor","viewBox":"0 0 16 16"}},[_c('path',{attrs:{"d":"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}}),_vm._v(" "),_c('path',{attrs:{"d":"M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"}})]),_vm._v(" "),_c('span',{staticClass:"ml-1"},[_vm._v(_vm._s(_vm.$t("subjects.header_alert")))])])],1),_vm._v(" "),_c('b-row',{staticClass:"mx-0 col-xl-7 col-lg-8 col-md-12"},[_c('b-overlay',{attrs:{"show":_vm.busy,"rounded":"lg","variant":"white","opacity":"0.8"}},[_c('b-form',{staticClass:"w-100  py-4",on:{"submit":function($event){$event.stopPropagation();$event.preventDefault();return _vm.onSubmit.apply(null, arguments)},"reset":_vm.onReset}},[_c('div',{},[_c('b-form-row',[_c('b-form-group',{staticClass:"col-11",attrs:{"id":"input-group-subject","label":_vm.$t('subjects.subject'),"label-for":"input-communication"}},[_c('v-select',{staticClass:"m-v-select2",class:{ 'is-invalid  d-block': _vm.$v.registerForm.lessonId.$error },attrs:{"placeholder":"Select one subject","reduce":function (x) { return x.id; },"options":_vm.options,"label":"subject","selectable":function (option) { return !option.hasOwnProperty('group'); }},scopedSlots:_vm._u([{key:"option",fn:function(ref){
var group = ref.group;
var subject = ref.subject;
return [(group)?_c('div',{staticClass:"group"},[_vm._v("\n                        "+_vm._s(group)+"\n                      ")]):_vm._e(),_vm._v("\n                      "+_vm._s(subject)+"\n                    ")]}}]),model:{value:(_vm.registerForm.lessonId),callback:function ($$v) {_vm.$set(_vm.registerForm, "lessonId", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"registerForm.lessonId"}}),_vm._v(" "),(!_vm.$v.registerForm.lessonId.required)?_c('div',{staticClass:"invalid-feedback"},[_vm._v("\n                    "+_vm._s(_vm.$t('subjects.lesson.required'))+"\n                  ")]):_vm._e()],1),_vm._v(" "),_c('b-form-group',{staticClass:"col-11",attrs:{"id":"input-group-grade","label":_vm.$t('subjects.grade_title'),"label-for":"input-communication"}},[_c('v-select',{staticClass:"m-v-select2",class:{ 'is-invalid  d-block': _vm.$v.registerForm.grade.$error },attrs:{"placeholder":_vm.$t('subjects.grade_placeholder'),"options":_vm.gradeOptions,"reduce":function (x) { return x.value; },"label":"text","selectable":function (option) { return !option.hasOwnProperty('group'); }},model:{value:(_vm.registerForm.grade),callback:function ($$v) {_vm.$set(_vm.registerForm, "grade", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"registerForm.grade"}}),_vm._v(" "),(!_vm.$v.registerForm.grade.required)?_c('div',{staticClass:"invalid-feedback"},[_vm._v("\n                    "+_vm._s(_vm.$t('subjects.grade.required'))+"\n                  ")]):_vm._e()],1),_vm._v(" "),_c('b-form-group',{staticClass:"col-6",attrs:{"id":"input-group-year","label":_vm.$t('subjects.year'),"label-for":"input-year"}},[_c('v-select',{staticClass:"m-v-select2",attrs:{"id":"input-year","placeholder":_vm.$t('subjects.year_placeholder'),"options":_vm.computedYears,"selectable":function (option) { return !option.hasOwnProperty('group'); }},model:{value:(_vm.registerForm.year),callback:function ($$v) {_vm.$set(_vm.registerForm, "year", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"registerForm.year"}})],1),_vm._v(" "),_c('b-form-group',{staticClass:"col-11 align-self-end",attrs:{"id":"input-group-description","label":_vm.$t('subjects.description'),"label-for":"input-description"}},[_c('b-form-textarea',{attrs:{"placeholder":_vm.$t('desc'),"autocomplete":"off","id":"input-description"},model:{value:(_vm.registerForm.description),callback:function ($$v) {_vm.$set(_vm.registerForm, "description", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"registerForm.description"}})],1)],1),_vm._v(" "),_c('b-form-group',{staticClass:"w-100",attrs:{"id":"input-group-price","label":_vm.$t('subjects.price.label'),"label-for":"input-price"}},[_c('div',{staticClass:"float-left d-block w-50"},[_c('b-form-input',{staticClass:"w-100",class:{ 'is-invalid': _vm.$v.registerForm.price.$error },attrs:{"type":"number","id":"input-price","placeholder":_vm.$t('subjects.price.placeholder')},model:{value:(_vm.registerForm.price),callback:function ($$v) {_vm.$set(_vm.registerForm, "price", $$v)},expression:"registerForm.price"}}),_vm._v(" "),(!_vm.$v.registerForm.price.required)?_c('div',{staticClass:"invalid-feedback"},[_vm._v(_vm._s(_vm.$t('subjects.price.required'))+"\n                  ")]):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"float-left d-block mt-2 ml-1"},[_vm._v("CAD")])]),_vm._v(" "),_c('p',{staticClass:"mt-5"}),_vm._v(" "),_c('b-row',{staticClass:"w-100 text-right d-block"},[_c('b-button',{staticClass:"form-control btn btn-crl btn-primary submit px-3 btn-reg mr-2 mt-4",attrs:{"type":"save"}},[_vm._v("\n                    "+_vm._s(_vm.$t('subjects.add'))+"\n                  ")])],1)],1),_vm._v(" "),_c('div',[_c('div',{staticClass:"float-left d-block"},[_c('b-button',{staticClass:"form-control btn btn-crl  btn-primary submit px-3 mt-4 btn-reg mr-2",attrs:{"to":"/tutor-details"}},[_c('svg',{staticClass:"bi bi-chevron-left",attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16"}},[_c('path',{attrs:{"fill-rule":"evenodd","d":"M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"}})]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.$t('back')))])]),_vm._v(" "),_c('b-button',{staticClass:"form-control btn btn-crl  btn-primary submit btn-reg px-3 mt-4",on:{"click":_vm.nextStep}},[_c('span',{staticClass:"mt-2"},[_vm._v(_vm._s(_vm.$t('next')))]),_vm._v(" "),_c('svg',{staticClass:"bi bi-chevron-right",attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16"}},[_c('path',{attrs:{"fill-rule":"evenodd","d":"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"}})])])],1),_vm._v(" "),_c('div',{staticClass:"float-right mt-5 w-50 text-right"},[_c('b-link',{attrs:{"href":""},on:{"click":_vm.nextStep}},[_vm._v(_vm._s(_vm.$t("skipStep")))])],1)])])],1)],1)],1),_vm._v(" "),_c('b-row',{staticClass:"mt-4 w-100 mx-0"},_vm._l((_vm.items),function(item,index){return _c('div',{key:item.id,staticClass:"col-lg-4 p-1"},[_c('b-card',{staticClass:"h-100"},[_c('b-overlay',{staticClass:"w-100",attrs:{"show":_vm.showDeleteOverlay(item.id),"variant":"transparent","opacity":0.8,"blur":"3px","rounded":"sm"}},[_c('div',{staticClass:"text-right"},[_c('b-link',{staticClass:"mr-4",staticStyle:{"color":"#bfbfbf"},attrs:{"size":"sm"},on:{"click":function($event){return _vm.showDeleteComfirm(item,index)}}},[_c('font-awesome-icon',{staticClass:"shop-icon",attrs:{"icon":['fas', 'trash']}})],1),_vm._v(" "),_c('b-link',{staticStyle:{"color":"#bfbfbf"},attrs:{"size":"sm"},on:{"click":function($event){return _vm.showEditDialog(item,index)}}},[_c('font-awesome-icon',{staticClass:"shop-icon",attrs:{"icon":['far', 'edit']}})],1)],1),_vm._v(" "),_c('div',{staticClass:"small font-weight-bold title-color"},[_vm._v("\n                "+_vm._s(_vm.$t("subjects.label"))+"\n              ")]),_vm._v(" "),_c('div',[_vm._v("\n                "+_vm._s(item.subject)+"\n              ")]),_vm._v(" "),_c('hr',{staticClass:"my-2"}),_vm._v(" "),_c('div',{staticClass:"small font-weight-bold title-color"},[_vm._v("\n                "+_vm._s(_vm.$t("Status"))+"\n              ")]),_vm._v(" "),_c('div',[(item.acceptStatus === 1)?_c('b-badge',{attrs:{"variant":"success"}},[_vm._v(_vm._s(_vm.$t("accepted")))]):_vm._e(),_vm._v(" "),(item.acceptStatus === -1)?_c('b-badge',{attrs:{"variant":"danger"}},[_vm._v(_vm._s(_vm.$t("disable")))]):_vm._e(),_vm._v(" "),(item.acceptStatus === 0 || item.acceptStatus === null )?_c('b-badge',{attrs:{"variant":"warning"}},[_vm._v("\n                  "+_vm._s(_vm.$t("pending"))+"\n                ")]):_vm._e()],1),_vm._v(" "),_c('hr',{staticClass:"my-2"}),_vm._v(" "),_c('div',{staticClass:"small font-weight-bold title-color"},[_vm._v("\n                Grade\n              ")]),_vm._v(" "),_c('div',[_vm._v("\n                "+_vm._s(item.grade)+"\n              ")]),_vm._v(" "),_c('hr',{staticClass:"my-2"}),_vm._v(" "),_c('div',{staticClass:"small font-weight-bold title-color"},[_vm._v("\n                Year\n              ")]),_vm._v(" "),_c('div',[_vm._v("\n                "+_vm._s(item.year)+"\n              ")]),_vm._v(" "),_c('hr',{staticClass:"my-2"}),_vm._v(" "),_c('div',{staticClass:"small font-weight-bold title-color"},[_vm._v("\n                Price\n              ")]),_vm._v(" "),_c('div',[_vm._v("\n                "+_vm._s(item.price)),_c('span',{staticClass:"small"},[_vm._v(" CAD")])]),_vm._v(" "),_c('hr',{staticClass:"my-2"}),_vm._v(" "),_c('div',{staticClass:"small font-weight-bold title-color"},[_vm._v("\n                Description\n              ")]),_vm._v(" "),_c('div',[_vm._v("\n                "+_vm._s(item.description)+"\n              ")])])],1)],1)}),0),_vm._v(" "),_c('b-modal',{ref:"editModal",attrs:{"hide-header":"","hide-footer":"","centered":""}},[_c('b-overlay',{attrs:{"show":_vm.showEditOverLayDialog,"rounded":"lg","variant":"white","opacity":"0.8"}},[_c('b-form',{staticClass:"w-100  py-4",on:{"submit":function($event){$event.stopPropagation();$event.preventDefault();return _vm.onSubmit.apply(null, arguments)},"reset":_vm.onReset}},[_c('b-form-row',[_c('b-form-group',{staticClass:"col-11",attrs:{"id":"input-group-grade","label":_vm.$t('subjects.grade_title'),"label-for":"input-communication"}},[_c('v-select',{staticClass:"m-v-select2",class:{ 'is-invalid  d-block': _vm.$v.editForm.grade.$error },attrs:{"placeholder":_vm.$t('subjects.grade_placeholder'),"options":_vm.gradeOptions,"reduce":function (x) { return x.value; },"label":"text","selectable":function (option) { return !option.hasOwnProperty('group'); }},model:{value:(_vm.editForm.grade),callback:function ($$v) {_vm.$set(_vm.editForm, "grade", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"editForm.grade"}}),_vm._v(" "),(!_vm.$v.editForm.grade.required)?_c('div',{staticClass:"invalid-feedback"},[_vm._v("\n                "+_vm._s(_vm.$t('subjects.grade.required'))+"\n              ")]):_vm._e()],1),_vm._v(" "),_c('b-form-group',{staticClass:"col-6",attrs:{"id":"input-group-year","label":_vm.$t('subjects.year')+':',"label-for":"input-year"}},[_c('v-select',{staticClass:"m-v-select2",attrs:{"placeholder":_vm.$t('subjects.year_placeholder'),"options":_vm.computedYears,"selectable":function (option) { return !option.hasOwnProperty('group'); }},model:{value:(_vm.editForm.year),callback:function ($$v) {_vm.$set(_vm.editForm, "year", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"editForm.year"}})],1),_vm._v(" "),_c('b-form-group',{staticClass:"col-11 align-self-end",attrs:{"id":"input-group-description","label":_vm.$t('subjects.description')+':',"label-for":"input-description"}},[_c('b-form-textarea',{attrs:{"placeholder":_vm.$t('desc'),"autocomplete":"off","id":"input-accountId"},model:{value:(_vm.editForm.description),callback:function ($$v) {_vm.$set(_vm.editForm, "description", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"editForm.description"}})],1),_vm._v(" "),_c('b-form-group',{staticClass:"w-100",attrs:{"id":"input-group-price","label":_vm.$t('subjects.price.label'),"label-for":"input-price"}},[_c('div',{staticClass:"float-left d-block w-50"},[_c('b-form-input',{staticClass:"w-100",class:{ 'is-invalid': _vm.$v.editForm.price.$error },attrs:{"type":"number","id":"input-price","placeholder":_vm.$t('subjects.price.placeholder')},model:{value:(_vm.editForm.price),callback:function ($$v) {_vm.$set(_vm.editForm, "price", $$v)},expression:"editForm.price"}}),_vm._v(" "),(!_vm.$v.editForm.price.required)?_c('div',{staticClass:"invalid-feedback"},[_vm._v(_vm._s(_vm.$t('subjects.price.required'))+"\n                ")]):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"float-left d-block mt-2 ml-1"},[_vm._v("CAD")])]),_vm._v(" "),_c('b-form-row',{staticClass:"w-100"},[_c('div',{staticClass:"p-2 "},[_c('b-button',{staticClass:"form-control btn btn-crl btn-primary submit px-3 btn-reg mr-2",on:{"click":_vm.saveEdit}},[_vm._v("\n                  "+_vm._s(_vm.$t('save'))+"\n                ")]),_vm._v(" "),_c('b-button',{staticClass:"form-control btn btn-crl btn-primary submit px-3 btn-reg mr-2",on:{"click":_vm.cancelEdit}},[_vm._v("\n                  "+_vm._s(_vm.$t('cancel'))+"\n                ")])],1)])],1)],1)],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/tutor-subject.vue?vue&type=template&id=c7f72c3a&

// EXTERNAL MODULE: external "@fortawesome/fontawesome-svg-core"
var fontawesome_svg_core_ = __webpack_require__(4);

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(1);

// EXTERNAL MODULE: external "@fortawesome/free-regular-svg-icons"
var free_regular_svg_icons_ = __webpack_require__(9);

// EXTERNAL MODULE: external "@fortawesome/free-brands-svg-icons"
var free_brands_svg_icons_ = __webpack_require__(23);

// EXTERNAL MODULE: external "vuelidate/lib/validators"
var validators_ = __webpack_require__(103);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/tutor-subject.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

fontawesome_svg_core_["library"].add(free_solid_svg_icons_["faTrash"]);
fontawesome_svg_core_["library"].add(free_regular_svg_icons_["faEdit"]);
fontawesome_svg_core_["library"].add(free_solid_svg_icons_["faFileAlt"]);
fontawesome_svg_core_["library"].add(free_solid_svg_icons_["faTrashAlt"]);
fontawesome_svg_core_["library"].add(free_brands_svg_icons_["faGoogle"]);
fontawesome_svg_core_["library"].add(free_brands_svg_icons_["faFacebookF"]);
/* harmony default export */ var tutor_subjectvue_type_script_lang_js_ = ({
  middleware: 'auth',
  name: 'ToturDetails',

  mounted() {
    if (!this.$auth.hasScope("tutor") && !this.$auth.hasScope("admin")) {
      this.$router.push("/");
      return;
    }

    this.loadSubjects();
    this.fillForm();
  },

  data() {
    return {
      showEditOverLayDialog: false,
      editIndex: -1,
      editVisible: false,
      busy: true,
      nextPush: "/tutor-transcript",
      deleteData: {
        id: 0,
        lessonId: 0
      },
      overlays: [],
      gradeOptions: [{
        value: 'D',
        text: 'D'
      }, {
        value: 'C-',
        text: 'C-'
      }, {
        value: 'C',
        text: 'C'
      }, {
        value: 'B-',
        text: 'B-'
      }, {
        value: 'B',
        text: 'B'
      }, {
        value: 'B+',
        text: 'B+'
      }, {
        value: 'A',
        text: 'A'
      }, {
        value: 'A-',
        text: 'A-'
      }, {
        value: 'A+',
        text: 'A+'
      }],
      options: [],
      transcriptFileId: null,
      transcriptFilePath: "",
      items: [],
      registerForm: {
        lessonName: '',
        lessonId: null,
        description: '',
        userId: 0,
        year: null,
        grade: null,
        price: null
      },
      editForm: {
        id: 0,
        description: null,
        year: null,
        grade: null,
        price: null
      },
      errors: null
    };
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
  validations: {
    registerForm: {
      grade: {
        required: validators_["required"]
      },
      year: {},
      lessonId: {
        required: validators_["required"]
      },
      description: {},
      price: {
        required: validators_["required"],
        numeric: validators_["numeric"]
      }
    },
    editForm: {
      grade: {
        required: validators_["required"]
      },
      year: {},
      description: {},
      price: {
        required: validators_["required"],
        numeric: validators_["numeric"]
      }
    }
  },
  methods: {
    showModal(id) {
      this.$refs[id].show();
    },

    hideModal(id) {
      this.$refs[id].hide();
    },

    clear() {
      this.registerForm.lessonId = null;
      this.registerForm.description = null;
      this.registerForm.grade = null;
      this.registerForm.year = null;
      this.registerForm.price = null;
      this.$v.$reset();
    },

    showEditDialog(item, index) {
      this.editIndex = index;
      this.editForm.id = item.id;
      this.editForm.description = item.description;
      this.editForm.grade = item.grade;
      this.editForm.year = item.year;
      this.editForm.price = item.price;
      this.showModal("editModal");
    },

    saveEdit() {
      this.$v.$reset();
      this.errors = null;
      this.$v.editForm.$touch();

      if (this.$v.editForm.$invalid) {
        console.log("vuelidate error");
      } else {
        this.showEditOverLayDialog = true;
        this.$axios.post('/subject/save-edit-tutor-subject-one', this.editForm).then(res => {
          this.showEditOverLayDialog = false;
          this.$set(this.items, this.editIndex, res.data);
          this.hideModal("editModal");
          this.makeToast('success', 'Message', this.$t('done_successfully'));
        }).catch(error => {
          if (error.response !== null) {
            if (error.response.data === "notexists") this.makeToast('danger', 'Error', this.$t('Item not exist.'));

            if (error.response.data.errors) {
              this.errors = error.response.data.errors;
            }
          }
        }).finally(() => {
          this.showEditOverLayDialog = false;
          this.loaded = false;
        });
      }
    },

    cancelEdit() {
      this.editForm.id = 0;
      this.editForm.description = null;
      this.editForm.grade = null;
      this.editForm.year = null;
      this.editForm.price = null;
      this.hideModal("editModal");
    },

    hideOverlay() {
      this.busy = false;
    },

    showOverlay() {
      this.busy = true;
    },

    async nextStep() {
      let nextCancel = false;

      if (this.registerForm.lessonId > 0) {
        await this.$bvModal.msgBoxConfirm(this.$t('subjects.incomplete_form'), {
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
            nextCancel = false;
          } else {
            nextCancel = true;
          }
        }).catch(err => {});
      }

      if (nextCancel) return;

      if (this.items.length === 0) {
        this.$bvModal.msgBoxConfirm(this.$t('subjects.subject_empty_alert'), {
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
            this.$router.push(this.nextPush);
          }
        }).catch(err => {});
      } else {
        this.$router.push(this.nextPush);
      }
    },

    showDeleteOverlay(id) {
      let result = false;
      this.overlays.filter(function (elem) {
        if (elem.key === id) {
          result = elem.value;
          return true;
        }
      });
      return result;
    },

    loadSubjects() {
      this.$axios.post('/definitions/getAllLessons').then(res => {
        this.options = res.data;
      }).catch(error => {
        if (error.response.data.errors) {
          this.errors = error.response.data.errors;
        }

        console.log(error);
      });
    },

    fillForm() {
      this.showOverlay();
      this.$axios.post('subject/items', null).then(res => {
        this.hideOverlay();
        this.items = res.data.data;
        this.transcriptFilePath = res.data.transcript.path;
        this.transcriptFileId = res.data.transcript.fileId;
      }).catch(error => {
        if (error.response.data.errors) {
          this.errors = error.response.data.errors;
        }

        console.log(error);
      });
    },

    delItem(index) {
      if (index > -1) {
        this.items.splice(index, 1);
      }
    },

    onReset(evt) {
      evt.preventDefault();
    },

    onSubmit(evt) {
      this.$v.$reset();
      this.errors = null;
      evt.preventDefault();
      this.$v.registerForm.$touch();

      if (this.$v.registerForm.$invalid) {
        console.log("vuelidate error");
      } else {
        this.showOverlay();
        this.loaded = true;
        this.$axios.post('/subject/save-tutor-subject-one', this.registerForm).then(res => {
          this.hideOverlay();
          this.items.push(res.data); //add overlay item

          this.overlays.push({
            key: res.data.id,
            value: false
          });
          this.clear();
          this.makeToast('success', 'Message', this.$t('done_successfully'));
        }).catch(error => {
          if (error.response.data === "duplicate") this.makeToast('danger', 'Error', this.$t('duplicateItem'));

          if (error.response.data.errors) {
            this.errors = error.response.data.errors;
          }

          console.log(error);
        }).finally(() => {
          this.loaded = false;
          this.hideOverlay();
        });
      }
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
        console.log(e);
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

    reloadTable() {
      this.loaded = true;
      this.$axios.post('subject/items', null).then(res => {
        this.items = res.data.data;
        let index = 0;

        for (const i in this.items) {
          let row = this.items[i];
          let json = {
            key: row.id,
            value: false
          };
          this.overlays.push(json);
        }
      }).catch(error => {
        if (error.response.data.errors) {
          this.errors = error.response.data.errors;
        }
      }).finally(() => {
        this.loaded = false;
      });
    },

    showDeleteComfirm(item, index) {
      try {
        this.$bvModal.msgBoxConfirm(this.$t('delete_confirm'), {
          title: 'Confirm',
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'danger',
          okTitle: 'YES',
          cancelTitle: 'NO',
          footerClass: 'p-2 border-top-0',
          hideHeaderClose: false,
          headerClass: 'p-2 border-bottom-0',
          centered: true
        }).then(value => {
          this.delComfirm = value;

          if (value === true) {
            this.setOverlayValue(item, true);
            this.deleteData.id = item.id;
            this.$axios.post('/subject/delete', this.deleteData).then(res => {
              this.makeToast('success', 'Message', this.$t('success_delete'));
              this.fillForm();
            }).catch(error => {
              this.setOverlayValue(item, false);
              this.makeToast('danger', 'Error', this.$t('success_failed'));

              if (error.response.data.errors) {
                this.errors = error.response.data.errors;
              }

              console.log(error);
            }).finally(() => {});
          }
        }).catch(err => {
          this.setOverlayValue(item, false); // An error occurred

          console.log(err);
        });
      } catch (e) {
        this.setOverlayValue(item, false);
        console.log(e);
      }
    },

    setOverlayValue(item, value) {
      this.overlays.filter(function (elem) {
        if (elem.key === item.id) elem.value = value;
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/tutor-subject.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_tutor_subjectvue_type_script_lang_js_ = (tutor_subjectvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./pages/tutor-subject.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(189)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_tutor_subjectvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "50466cf9"
  
)

/* harmony default export */ var tutor_subject = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=tutor-subject.js.map
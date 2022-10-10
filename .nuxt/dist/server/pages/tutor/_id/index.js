exports.ids = [40];
exports.modules = {

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(230);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("727fcc5c", content, true, context)
};

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_20e0c362_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(149);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_20e0c362_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_20e0c362_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_20e0c362_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_20e0c362_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".title-color[data-v-20e0c362]{color:#707175}.m-selected[data-v-20e0c362]{padding-top:16px;z-index:99;height:50px;width:calc(100% + 2px);position:absolute;background-color:rgba(var(--gradian-color4));color:#fff;margin:-1px;font-size:small;text-align:center;box-shadow:inset 0 0 15px rgba(var(--gradian-color1))}.m-selected_2[data-v-20e0c362]{background-color:#a2bb03}.m-selected_2[data-v-20e0c362],.m-selected_3[data-v-20e0c362]{padding-top:16px;z-index:99;height:50px;width:calc(100% + 2px);position:absolute;color:#fff;margin:-1px;font-size:small;text-align:center;box-shadow:inset 0 0 15px #628002}.m-selected_3[data-v-20e0c362]{background-color:#020202}.m-selected_1[data-v-20e0c362]{padding-top:16px;z-index:99;height:50px;width:calc(100% + 2px);position:absolute;background-color:#f90;color:#fff;margin:-1px;font-size:small;text-align:center;box-shadow:inset 0 0 15px #ef4203}.w-30[data-v-20e0c362],.w-35[data-v-20e0c362]{width:30%!important}.m-even-time[data-v-20e0c362]{padding-top:14px;width:100%;z-index:999;position:absolute;height:49px;background-color:#fff;margin-left:-15px;text-align:center}.vertical-center[data-v-20e0c362]{top:50%;transform:translateY(-50%)}.m-pointer[data-v-20e0c362]{cursor:pointer}.simple-menu .ty-menu__submenu .ty-menu__submenu-items .ty-menu__submenu-item[data-v-20e0c362]{padding:10px 20px!important}.simple-menu .ty-menu__submenu .ty-menu__submenu-items .ty-menu__submenu-item .ty-menu__submenu-link[data-v-20e0c362]{font-weight:400!important;padding-top:7px!important}.pnl-gray[data-v-20e0c362]{background-color:#f5f5f5;border:1px solid #ececec;border-radius:5px;height:55px;color:#878484;font-size:12px;width:75px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/tutor/_id/index.vue?vue&type=template&id=20e0c362&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.tutorData != null)?_c('b-row',{staticClass:"col-md-12 col-lg-10 m-center"},[_c('b-modal',{ref:"sm_modal",attrs:{"centered":"","size":"md","header-class":"border-bottom-0","hide-footer":"","title":"Send Message"}},[_c('b-overlay',{attrs:{"show":_vm.showOverlay,"rounded":"sm"}},[_c('b-row',{staticClass:"mt-1"},[_c('b-textarea',{staticClass:"ml-3 mr-3",attrs:{"id":"textarea-rows","placeholder":this.$t('please_type_message'),"rows":"4","lazy":true},model:{value:(_vm.textMessage),callback:function ($$v) {_vm.textMessage=$$v},expression:"textMessage"}})],1),_vm._v(" "),_c('b-row',{staticClass:"mt-3"},[_c('b-col',[_c('b-button',{staticClass:"float-right w-50",attrs:{"variant":"primary"},on:{"click":this.sendMessage}},[_vm._v(_vm._s(_vm.$t("Send"))+"\n              ")])],1),_vm._v(" "),_c('b-col',[_c('b-button',{staticClass:"float-left w-50",attrs:{"variant":"primary"},on:{"click":this.cancelSendMessage}},[_vm._v("\n                "+_vm._s(_vm.$t("cancel"))+"\n              ")])],1)],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"mx-0 w-100 shadow mt-5  pl-xl-5 p-lg-5 p-md-5 p-sm-3 p-3 d-xl-flex d-lg-flex d-md-flex"},[_c('b-avatar',{attrs:{"size":"7rem","src":_vm.tutorData.File != null ? '/'+_vm.tutorData.File.path : '',"alt":"Cropped Image"}}),_vm._v(" "),_c('div',{staticClass:"pt-4 px-lg-4 px-xl-4 px-md-4 w-100"},[_c('div',{staticClass:"d-xl-flex d-lg-flex d-md-flex"},[_c('div',{staticClass:"w-100"},[_c('h3',[_vm._v(" "+_vm._s(_vm.tutorData.name)+" "+_vm._s(_vm.tutorData.lastName))]),_vm._v(" "),_c('b-form-rating',{staticClass:"px-0 ml-n1",staticStyle:{"outline":"none","box-shadow":"none"},attrs:{"id":"rating-sm-no-border","variant":"warning","readonly":"","no-border":"","inline":"","size":"lg"},model:{value:(_vm.tutorData.AvgRate),callback:function ($$v) {_vm.$set(_vm.tutorData, "AvgRate", $$v)},expression:"tutorData.AvgRate"}})],1),_vm._v(" "),_c('div',{staticClass:"d-flex"},[(_vm.tutorData.Student_Count > 0)?_c('div',{staticClass:"m-y mr-2 p-2 pnl-gray text-center"},[_vm._v(_vm._s(_vm.tutorData.Student_Count)),_c('br'),_vm._v("Lessons")]):_vm._e(),_vm._v(" "),(_vm.tutorData.Lesson_Count > 0)?_c('div',{staticClass:"m-y p-2 pnl-gray text-center"},[_vm._v(_vm._s(_vm.tutorData.Lesson_Count)),_c('br'),_vm._v("Students")]):_vm._e(),_vm._v(" "),(_vm.tutorData.not_accept != null  && _vm.tutorData.not_accept === 0)?_c('div',{staticClass:"m-y p-2 pnl-gray text-center ml-2"},[_c('font-awesome-icon',{staticStyle:{"color":"green","height":"20px","width":"20px"},attrs:{"icon":['fas', 'check-circle']}}),_vm._v(" "),_c('br'),_vm._v("\n                  Transcript\n                ")],1):_vm._e()])]),_vm._v(" "),_c('h5',{staticClass:"pt-2"},[_vm._v(" "+_vm._s(_vm.tutorData.headline))]),_vm._v(" "),_c('div',{staticClass:"pt-2 mt-1"},[_c('span',{staticStyle:{"color":"var(--color2)"}},[_vm._v("University: ")]),_c('span',[_vm._v(_vm._s(_vm.tutorData.University.name))])]),_vm._v(" "),(_vm.tutorData.training_method !== undefined && _vm.tutorData.training_method !== null)?_c('div',{staticClass:"pt-2 mt-1"},[_c('span',{staticStyle:{"color":"var(--color2)"}},[_vm._v(_vm._s(_vm.$t('tutors.trainingMethods.label'))+": ")]),_vm._v("\n            "+_vm._s(_vm.trainingType(_vm.tutorData.training_method))+"\n          ")]):_vm._e(),_vm._v(" "),_c('h3',{staticClass:"pt-4 pb-2"},[_vm._v(" "+_vm._s(_vm.$t('aboutMe')))]),_vm._v(" "),_c('h6',[_vm._v(" "+_vm._s(_vm.tutorData.bioMore))])]),_vm._v(" "),_c('div',{staticClass:"pt-4"},[_c('div',{staticStyle:{"min-width":"160px","max-width":"160px"}},[_c('b-button',{staticClass:"w-100  btn btn-outline-primary",on:{"click":_vm.showMessageDialog}},[_vm._v("\n              "+_vm._s(_vm.$t("sendMessage"))+"\n              "),_c('font-awesome-icon',{staticStyle:{"margin-top":"5px","margin-right":"5px"},attrs:{"icon":['fas', 'paper-plane']}})],1),_vm._v(" "),_c('b-button',{staticClass:"w-100 mt-2  btn btn-primary",on:{"click":_vm.booklesson}},[_vm._v("\n              "+_vm._s(_vm.$t("bookLesson"))+"\n            ")])],1)])],1),_vm._v(" "),_c('b-row',{staticClass:"mx-0 w-100 shadow mt-5  pl-xl-5 p-lg-5 p-md-5 p-sm-3 p-3"},[_c('h3',{staticClass:"pb-3"},[_vm._v(_vm._s(_vm.$t("subjects.title")))]),_vm._v(" "),_vm._l((_vm.tutorData.UserLessons),function(item){return _c('div',{key:item.id,staticClass:"w-100"},[_c('div',{staticClass:" title-color  pb-2"},[(item.acceptStatus === 1)?_c('font-awesome-icon',{staticStyle:{"color":"#03ef1c"},attrs:{"icon":['fas', 'check-circle']}}):_vm._e(),_vm._v("\n            "+_vm._s(item.Lesson.subject)+"\n            "+_vm._s(item.Lesson.code)+"\n            "),(item.rate !== '' && item.rate > 0)?_c('span',{staticClass:"ml-1",staticStyle:{"width":"unset!important"}},[_c('span',{staticClass:"outline-badge",staticStyle:{"position":"absolute!important"},attrs:{"variant":"warning"}},[_c('font-awesome-icon',{staticStyle:{"color":"#ffc107"},attrs:{"icon":['fas', 'star']}}),_vm._v(" "),_c('span',{staticStyle:{"color":"#ffc107","left":"7px!important"}},[_vm._v(_vm._s(item.rate)+"\n                    ")])],1)]):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"small  title-color"},[_vm._v("\n            "+_vm._s(_vm.$t('subjects.grade_title'))+":"),_c('span',{staticClass:"font-weight-bold"},[_vm._v("  "+_vm._s(item.grade))])]),_vm._v(" "),_c('div',{staticClass:"small title-color"},[_vm._v("\n            "+_vm._s(_vm.$t('subjects.price.label'))+": "),_c('span',{staticClass:"font-weight-bold"},[_vm._v(" "+_vm._s(item.price > 0 ? item.price + ' CAD' : _vm.$t('price-0')))])]),_vm._v(" "),_c('div',{staticClass:"small title-color"},[_vm._v("\n\n            "+_vm._s(_vm.$t('subjects.tutor.year'))+": "),_c('span',{staticClass:"font-weight-bold"},[_vm._v(" "+_vm._s(item.year))])]),_vm._v(" "),_c('div',{staticClass:"small  title-color"},[_vm._v("\n            "+_vm._s(item.description)+"\n          ")]),_vm._v(" "),_c('hr',{staticClass:"my-2"})])})],2),_vm._v(" "),_c('b-row',{staticClass:"mx-0 w-100 shadow mt-5 pl-xl-5 p-lg-5 p-md-5 p-sm-3 p-3"},[_c('h3',{staticClass:"pb-3"},[_vm._v("Education")]),_vm._v(" "),_vm._l((_vm.tutorData.Educations),function(item){return _c('div',{key:item.id,staticClass:"w-100 "},[_c('div',{staticClass:"small  title-color"},[_vm._v("\n            "+_vm._s(_vm.$t('university'))+":"),_c('span',{staticClass:"font-weight-bold"},[_vm._v("   "+_vm._s(item.university))])]),_vm._v(" "),_c('div',{staticClass:"small  title-color"},[_vm._v("\n            "+_vm._s(_vm.$t('years'))+":"),_c('span',{staticClass:"font-weight-bold"},[_vm._v("   "+_vm._s(item.startYear)+" - "+_vm._s(item.endYear))])]),_vm._v(" "),_c('div',{staticClass:"small  title-color"},[_vm._v("\n            "+_vm._s(_vm.$t('levelEducation'))+":"),_c('span',{staticClass:"font-weight-bold"},[_vm._v("   "+_vm._s(item.levelEducation))])]),_vm._v(" "),_c('div',{staticClass:"small  title-color"},[_vm._v("\n            "+_vm._s(_vm.$t('department'))+":"),_c('span',{staticClass:"font-weight-bold"},[_vm._v("        "+_vm._s(item.department))])]),_vm._v(" "),_c('hr',{staticClass:"my-2"})])})],2),_vm._v(" "),_c('client-only',[_c('b-row',{staticClass:"mx-0 w-100 shadow mt-5  pl-xl-5 p-lg-5 p-md-5 p-sm-3 p-3 overflow: auto",attrs:{"id":"takeLesson"}},[_c('h3',{staticClass:"pb-3"},[_vm._v(_vm._s(_vm.$t('schedule.label')))]),_vm._v(" "),_c('div',{staticClass:"w-100 font-weight-bold mb-3"},[_vm._v(_vm._s(_vm.$t('schedule.title')))]),_vm._v(" "),_c('div',{staticClass:"w-100",staticStyle:{"overflow-x":"auto","overflow-y":"hidden"}},[_c('div',{staticClass:"w-100 ",staticStyle:{"min-width":"750px"}},[_c('b-row',{staticClass:"mx-0 w-100 text-center  border-bottom border-top  border-left border-right p-0 ",staticStyle:{"height":"50px"}},[_c('b-col',[_c('font-awesome-icon',{staticStyle:{"font-size":"x-large","margin-top":"11px","color":"#cccfd2"},attrs:{"icon":['far', 'clock']}})],1),_vm._v(" "),_vm._l((_vm.week),function(item,index){return _c('b-col',{key:index,staticClass:"border-left p-0"},[_c('div',{staticStyle:{"margin-top":"11px"}},[_vm._v(" "+_vm._s(item))])])})],2),_vm._v(" "),_vm._l((_vm.clock),function(clockItem,clockIndex){return _c('b-row',{key:clockIndex,staticClass:"mx-0 w-100 border-bottom border-right"},[_c('b-col',{staticClass:"border-left text-center "},[_c('div',{staticClass:"align-content-center align-middle",class:clockIndex % 2 === 0 ? 'm-even-time' : 'd-none'},[_vm._v("\n                    "+_vm._s(clockIndex < 10 ? '0' + Math.floor(clockIndex / 2) : clockIndex / 2)+":"+_vm._s((clockIndex % 2 === 0) ? '00' :
                        '30')+"\n                  ")])]),_vm._v(" "),_vm._l((_vm.week),function(item,index){return _c('b-col',{key:index,staticClass:"border-left p-0"},[_c('div',{class:(_vm.timing[index][clockIndex].value === true
                       && _vm.timing[index][clockIndex].acceptStatus === 0 )? 'm-selected_1' : (_vm.timing[index][clockIndex].value === true   ? 'm-selected m-pointer' : ''),attrs:{"id":'tooltip-timing-' + index + '_' + clockIndex},on:{"click":function($event){return _vm.selectTime(index,clockIndex)}}},[_vm._v("\n                    "+_vm._s(_vm.timing[index][clockIndex] ?
                        ((clockIndex < 10 ? '0' + Math.floor(clockIndex / 2) : Math.floor(clockIndex / 2)) + ':' + ((clockIndex % 2 === 0
                        ) ? '00' : '30')) + ' - ' +
                        (((clockIndex + 2) < 10 ? '0' + Math.floor((clockIndex + 2) / 2) : Math.floor((clockIndex + 2) / 2)
                        ) + ':' + (((clockIndex + 2) % 2 === 0) ? '00' : '30')) :
                        ' ')+"\n\n                    "),(_vm.timing[index][clockIndex].selected)?_c('b-tooltip',{attrs:{"target":'tooltip-timing-' + index + '_' + clockIndex}},[_vm._v("\n                      "+_vm._s(_vm.timing[index][clockIndex].subject)+"\n                      "),(_vm.timing[index][clockIndex].acceptStatus === 0)?_c('b-badge',{attrs:{"variant":"warning"}},[_vm._v("Pending")]):_vm._e()],1):_vm._e()],1)])})],2)})],2)])])],1),_vm._v(" "),_c('b-form-group',{staticClass:"mx-0 w-100 shadow mt-5  pl-xl-5 p-lg-5 p-md-5 p-sm-3 p-3"},[_c('h3',{staticClass:"pb-1"},[_vm._v(_vm._s(_vm.$t("Reviews")))]),_vm._v(" "),_c('div',{staticClass:"w-50 float-left d-block"},[_c('b-pagination',{directives:[{name:"show",rawName:"v-show",value:(_vm.perPage < _vm.reviewRowCount),expression:"perPage < reviewRowCount"}],staticClass:"mt-2",attrs:{"per-page":_vm.perPage,"pills":"","total-rows":_vm.reviewRowCount,"size":"sm"},on:{"change":_vm.reviewPageChange},model:{value:(_vm.reviewCurrentPage),callback:function ($$v) {_vm.reviewCurrentPage=$$v},expression:"reviewCurrentPage"}})],1),_vm._v(" "),( (_vm.reviewRowCount === 0 || _vm.reviewRowCount === null) && !_vm.$auth.loggedIn)?_c('div',{staticClass:"w-100 float-left d-block",staticStyle:{"font-size":"small"}},[_vm._v("\n          "+_vm._s(_vm.$t("reviews.no_comment"))+"\n          "),_c('b-link',{on:{"click":_vm.loginPage}},[_vm._v("Click here")])],1):_vm._e(),_vm._v(" "),_vm._l((_vm.reviewRows),function(reviewItem,index){return _c('b-row',{key:reviewItem.id,staticClass:"w-100 overflow-hidden mt-4 mx-0",staticStyle:{"border-bottom":"1px solid #dedcdc"}},[_c('div',{staticClass:"w-100 text-right position-relative"},[(reviewItem.stu_userId === _vm.$auth.user.id)?_c('span',[_c('a',{on:{"click":function($event){return _vm.editReview(index)}}},[_c('svg',{staticClass:"bi bi-pencil-square",attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16"}},[_c('path',{attrs:{"d":"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"}}),_vm._v(" "),_c('path',{attrs:{"fill-rule":"evenodd","d":"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"}})])]),_vm._v(" "),_c('a',{on:{"click":function($event){return _vm.deleteReview(index , reviewItem)}}},[_c('svg',{staticClass:"bi bi-trash ml-2",attrs:{"id":"delreview","xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16"}},[_c('path',{attrs:{"d":"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}}),_vm._v(" "),_c('path',{attrs:{"fill-rule":"evenodd","d":"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"}})])])]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"mx-0 w-100 d-xl-flex d-lg-flex d-md-flex ",class:reviewItem.stu_userId === _vm.$auth.user.id? 'mt-n3' : ''},[_c('b-avatar',{attrs:{"size":"3rem","alt":"Cropped Image","src":reviewItem.student !== null && reviewItem.student !== undefined
                && reviewItem.student.File !== undefined && reviewItem.student.File !== null &&
                  reviewItem.student.File.path != null && reviewItem.student.File.path !== undefined ? '/'+ reviewItem.student.File.path : ''}}),_vm._v(" "),_c('div',{staticClass:"pt-2 px-lg-2 px-xl-2 px-md-2 w-100"},[_vm._v("\n              "+_vm._s(reviewItem.student.name + " " + reviewItem.student.lastname)+"\n\n              "),_c('div',{staticStyle:{"font-size":"x-small"}},[_vm._v("\n                "+_vm._s(new Date(reviewItem.updatedAt).toDateString('YYYY/MM/DD'))+"\n              ")]),_vm._v(" "),_c('div',{staticClass:"mt-2 w-100 d-block"},[_vm._v("\n                Subject : "+_vm._s(reviewItem.Lesson.subject)+"\n              ")]),_vm._v(" "),_c('div',{staticClass:"w-100 d-block"},[_c('b-form-rating',{staticClass:"px-0 ml-n1",staticStyle:{"outline":"none","box-shadow":"none"},attrs:{"id":"rating-sm-no-border","variant":"warning","readonly":"","no-border":"","inline":""},model:{value:(reviewItem.rate),callback:function ($$v) {_vm.$set(reviewItem, "rate", $$v)},expression:"reviewItem.rate"}})],1),_vm._v(" "),_c('div',{staticClass:"mt-1"},[_c('p',{staticStyle:{"font-family":"'Segoe UI'","font-size":"18px","display":"flex","white-space":"normal","word-break":"break-word"}},[_vm._v(_vm._s(reviewItem.comment))])])])],1)])}),_vm._v(" "),(_vm.$auth.loggedIn)?_c('b-row',{staticClass:"w-100 mt-4 mx-0"},[_c('div',{staticClass:"w-100 font-weight-bold mb-3"},[_vm._v(_vm._s(_vm.$t('insert.review')))]),_vm._v(" "),(_vm.reviewError.exist)?_c('div',{staticClass:"invalid-feedback",class:{ 'is-invalid  d-block': _vm.reviewError.exist },attrs:{"id":"exixstid"}},[_vm._v(_vm._s(_vm.$t("review_exist"))+"\n          ")]):_vm._e(),_vm._v(" "),_c('b-form-group',{staticClass:"col-12 col-xl-6 col-lg-6",attrs:{"id":"input-group-subject","label":_vm.$t('review.reviewLessonId.label'),"label-for":"input-lessonId"}},[_c('v-select',{staticClass:"m-v-select2",class:{ 'is-invalid  d-block': _vm.$v.reviewForm.lessonId.$error },attrs:{"placeholder":_vm.$t('review.reviewLessonId.placeholder'),"id":"input-lessonId","reduce":function (x) { return x.id; },"options":_vm.reviewLessons,"label":"subject","selectable":function (option) { return !option.hasOwnProperty('group'); }},scopedSlots:_vm._u([{key:"option",fn:function(ref){
                  var group = ref.group;
                  var subject = ref.subject;
return [_vm._v("\n                "+_vm._s(subject)+"\n              ")]}}],null,false,2654601642),model:{value:(_vm.$v.reviewForm.lessonId.$model),callback:function ($$v) {_vm.$set(_vm.$v.reviewForm.lessonId, "$model", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"$v.reviewForm.lessonId.$model"}}),_vm._v(" "),(!_vm.$v.reviewForm.lessonId.serverError)?_c('div',{staticClass:"invalid-feedback"},[_vm._v(_vm._s(_vm.$t(_vm.errors.lessonId.msg))+"\n            ")]):_vm._e(),_vm._v(" "),(!_vm.$v.reviewForm.lessonId.required)?_c('div',{staticClass:"invalid-feedback"},[_vm._v("\n              "+_vm._s(_vm.$t('review.reviewLessonId.required'))+"\n            ")]):_vm._e()],1),_vm._v(" "),_c('b-form-group',{staticClass:"col-12",attrs:{"id":"input-group-rate","label":_vm.$t('review.rate.label'),"label-for":"input-rate"}},[_c('b-form-rating',{staticClass:"px-0 ml-n1",class:{ 'is-invalid  d-block': _vm.$v.reviewForm.rate.$error },staticStyle:{"outline":"none","box-shadow":"none"},attrs:{"id":"rating-sm-no-border","variant":"warning","no-border":"","inline":"","size":"lg"},model:{value:(_vm.reviewForm.rate),callback:function ($$v) {_vm.$set(_vm.reviewForm, "rate", $$v)},expression:"reviewForm.rate"}}),_vm._v(" "),(!_vm.$v.reviewForm.rate.required)?_c('div',{staticClass:"invalid-feedback"},[_vm._v("\n              "+_vm._s(_vm.$t('review.rate.required'))+"\n            ")]):_vm._e()],1),_vm._v(" "),_c('b-form-group',{staticClass:"col-12",attrs:{"id":"input-group-comment","label":_vm.$t('review.comment.label'),"label-for":"input-comment"}},[_c('b-form-textarea',{attrs:{"rows":"4","autocomplete":"off","placeholder":_vm.$t('review.comment.placeholder'),"id":"input-comment","lazy":true},model:{value:(_vm.reviewForm.comment),callback:function ($$v) {_vm.$set(_vm.reviewForm, "comment", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"reviewForm.comment"}})],1),_vm._v(" "),_c('b-form-group',{staticClass:"col-12"},[_c('b-button',{staticClass:"btn btn-crl btn-primary submit px-3 mr-2",attrs:{"disabled":_vm.reviewOverlay},on:{"click":_vm.saveReview}},[_vm._v(_vm._s(_vm.$t('PostReview'))+"\n              "),(_vm.reviewOverlay)?_c('b-spinner',{attrs:{"variant":"light","small":"","type":"grow"}}):_vm._e()],1),_vm._v(" "),(_vm.reviewForm.tutorId > 0)?_c('b-button',{staticClass:"btn btn-crl btn-primary submit px-3 mr-2",attrs:{"disabled":_vm.reviewOverlay},on:{"click":_vm.CancelReview}},[_vm._v(_vm._s(_vm.$t('Cancel'))+"\n            ")]):_vm._e()],1)],1):_vm._e()],2)],1):_vm._e(),_vm._ssrNode(" "),_c('b-modal',{attrs:{"hide-header":"","hide-footer":"","centered":"","id":"add_panel"},model:{value:(_vm.lessonDialogVisible),callback:function ($$v) {_vm.lessonDialogVisible=$$v},expression:"lessonDialogVisible"}},[_c('b-overlay',{attrs:{"id":"overlay-background","show":_vm.lessonDialogOverlay,"opacity":0.8,"variant":"white","rounded":"sm"}},[_c('b-form',{staticClass:"w-100"},[_c('div',{staticClass:"w-100 px-2 pb-2"},[_c('div',{staticClass:"w-100 text-center font-weight-bold mb-2"},[_vm._v("\n              "+_vm._s(_vm.$t('take.lesson'))+"\n            ")]),_vm._v(" "),_c('b-form-row',{staticClass:"w-100"},[_c('div',{staticClass:"rounded-lg p-2  border w-100 mb-3",staticStyle:{"background-color":"rgb(252, 253, 253)"}},[_c('div',{staticClass:"w-100 mt-2 "},[_c('span',{staticClass:"font-weight-bold",staticStyle:{"font-size":"smaller"}},[_vm._v("Week Day :")]),_vm._v(" "),_c('span',{staticClass:"w-100"},[_vm._v(_vm._s(_vm.DayOfWeek(_vm.myLessonData.dayOfWeek)))])]),_vm._v(" "),_c('div',{staticClass:"w-100 mt-2 mb-2"},[_c('span',{staticClass:"font-weight-bold",staticStyle:{"font-size":"smaller"}},[_vm._v("Time :")]),_vm._v(" "),_c('span',{staticClass:"w-100 "},[_vm._v(_vm._s(_vm.GetTime(_vm.myLessonData.timeStart , _vm.myLessonData.timeEnd)))])])])]),_vm._v(" "),_c('b-form-row',{staticClass:"w-100"},[_c('b-form-group',{staticClass:"w-100",attrs:{"label":"Lesson:","label-for":"subject-select"}},[_c('b-form-select',{attrs:{"id":"subject-select","options":_vm.selectLessonDialog_options,"state":!_vm.$v.myLessonData.userLesson.$error && _vm.myLessonData.userLesson !== null,"aria-describedby":"input-userlessonId-feedback"},model:{value:(_vm.$v.myLessonData.userLesson.$model),callback:function ($$v) {_vm.$set(_vm.$v.myLessonData.userLesson, "$model", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"$v.myLessonData.userLesson.$model"}}),_vm._v(" "),_c('b-form-invalid-feedback',{attrs:{"id":"input-userlessonId-feedback"}},[_vm._v("\n                "+_vm._s(this.$t("myLesson.userlessonId.required"))+"\n              ")])],1)],1),_vm._v(" "),_c('b-form-row',{staticClass:"w-100"},[_c('b-form-group',{staticClass:"w-100",attrs:{"label":"Description:","label-for":"descriptionField"}},[_c('b-form-textarea',{attrs:{"id":"descriptionField","placeholder":_vm.$t('myLesson.description_placeholder'),"autocomplete":"off","lazy":true},model:{value:(_vm.myLessonData.description),callback:function ($$v) {_vm.$set(_vm.myLessonData, "description", $$v)},expression:"myLessonData.description"}})],1)],1),_vm._v(" "),_c('b-form-row',{staticClass:" w-100  "},[_c('b-button',{staticClass:"  btn     btn-primary mr-2",on:{"click":_vm.sendLessonRequest}},[_vm._v("\n                "+_vm._s(_vm.$t('myLesson.SendRequest'))+"\n              ")]),_vm._v(" "),_c('b-button',{staticClass:"  btn   btn-primary px-4  ",on:{"click":_vm.cancelDialog}},[_vm._v("\n                "+_vm._s(_vm.$t('cancel'))+"\n              ")])],1)],1)])],1)],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/tutor/_id/index.vue?vue&type=template&id=20e0c362&scoped=true&

// EXTERNAL MODULE: external "@fortawesome/fontawesome-svg-core"
var fontawesome_svg_core_ = __webpack_require__(4);

// EXTERNAL MODULE: external "@fortawesome/free-regular-svg-icons"
var free_regular_svg_icons_ = __webpack_require__(9);

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(1);

// EXTERNAL MODULE: external "vuelidate/lib/validators"
var validators_ = __webpack_require__(103);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/tutor/_id/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




fontawesome_svg_core_["library"].add(free_regular_svg_icons_["faClock"]);
fontawesome_svg_core_["library"].add([free_solid_svg_icons_["faPaperPlane"], free_solid_svg_icons_["faStar"], free_solid_svg_icons_["faTimes"], free_solid_svg_icons_["faCheckCircle"]]);
/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  name: 'ToturDetails',

  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    });

    for (let i = 0; i < 48; i++) this.clock.push(i);

    this.week.forEach(() => {
      const sArr = [];
      this.clock.forEach(function (c) {
        sArr[c] = false;
      });
      this.timing.push(sArr);
      this.timingData.push(sArr);
    });
    this.loadTutor();
    this.loadUserLesson();
    this.loadReviews(1);
    this.rou = this.$router;
  },

  data() {
    return {
      rou: null,
      bookingSelectDay: null,
      bookingSelectTime: null,
      editReviewMode: false,
      reviewRowCount: 0,
      windowWidth:  false ? undefined : 'sm',
      reviewCurrentPage: 1,
      perPage: 10,
      reviewRows: [],
      reviewError: {
        exist: false,
        notexist: false
      },
      reviewOverlay: false,
      reviewLessons: [],
      reviewForm: {
        lessonId: null,
        comment: "",
        rate: null,
        tutorId: null
      },
      reviewDialog: true,
      lessonDialogOverlay: false,
      myLessons: [],
      myLessonData: {
        id: 0,
        timingId: 0,
        description: "",
        dayOfWeek: 0,
        timeStart: 0,
        timeEnd: 0,
        userlessonId: 0,
        userLesson: null
      },
      selectLessonDialog_options: [],
      description: "",
      timingItem: null,
      textMessage: "",
      showOverlay: false,
      lessonDialogVisible: false,
      week: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
      timing: [],
      timingData: [],
      clock: [],
      tutorId: this.$route.params.id === undefined ? 0 : this.$route.params.id,
      errors: null,
      tutorData: null
    };
  },

  validations: {
    reviewForm: {
      lessonId: {
        required: validators_["required"],

        serverError(value) {
          if (value === '') {
            return true;
          }

          return !(this.errors != null && this.errors.lessonId && value === this.errors.lessonId.value);
        }

      },
      // comment: {required},
      rate: {
        required: validators_["required"]
      }
    },
    myLessonData: {
      userlessonId: {
        required: validators_["required"],

        serverError(value) {
          if (value === '') {
            return true;
          }

          return !(this.errors != null && this.errors.userlessonId && value === this.errors.userlessonId.value);
        }

      },
      userLesson: {
        required: validators_["required"]
      }
    }
  },
  computed: {
    debounceText: {
      get() {
        return this.comment;
      },

      set: function (newValue) {
        this.comment = newValue;
      }
    }
  },
  methods: {
    GetTime(clockIndex, timeEnd) {
      let t1 = (clockIndex < 10 ? '0' + Math.floor(clockIndex / 2) : clockIndex / 2).toString();
      let t2 = clockIndex % 2 === 0 ? '00' : '30';
      let t1_1 = (timeEnd < 10 ? '0' + Math.floor(timeEnd / 2) : timeEnd / 2).toString();
      let t2_1 = timeEnd % 2 === 0 ? '00' : '30';
      return t1 + ":" + t2 + " - " + t1_1 + ":" + t2_1;
    },

    DayOfWeek(dw) {
      let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
      return week[dw];
    },

    loginPage() {
      this.$router.push('/login');
    },

    booklesson() {
      // let myElement = document.getElementById('takeLesson')
      // let topPos = myElement.offsetTop;
      // window.scrollTo({ top: topPos, behavior: 'smooth'});
      document.getElementById("takeLesson").scrollIntoView({
        behavior: 'smooth'
      });
    },

    trainingType(item) {
      switch (item) {
        case 1:
          return 'Online';

        case 2:
          return 'In-Person';

        case 3:
          return 'Online / In-Person';

        default:
          return '';
      }
    },

    reviewPageChange(pageIndex) {
      this.loadReviews(pageIndex);
    },

    showModal(modalId) {
      this.$bvModal.show(modalId);
    },

    hideModal(modalId) {
      this.$bvModal.hide(modalId);
    },

    showReviewDialog(visible) {
      if (visible) {
        this.clearReview();
        this.showModal("reviewModal");
      } else this.hideModal("reviewModal");
    },

    clearReview() {
      this.editReviewIndex = -1;
      this.editReviewMode = false;
      this.reviewError.exist = false;
      this.reviewError.notexist = false;
      this.reviewForm.comment = null;
      this.reviewForm.rate = null;
      this.reviewForm.lessonId = null;
      this.reviewForm.tutorId = null;
      this.$v.$reset();
    },

    onResize() {
      if (false) {}
    },

    editReview(index) {
      this.reviewError.exist = false;
      this.reviewError.notexist = false;
      this.$v.$reset();
      this.editReviewIndex = index;
      this.editReviewMode = true;
      this.reviewForm.id = this.reviewRows[index].id;
      this.reviewForm.rate = this.reviewRows[index].rate;
      this.reviewForm.comment = this.reviewRows[index].comment;
      this.reviewForm.lessonId = this.reviewRows[index].lessonId;
      this.reviewForm.tutorId = this.tutorId;
      this.showModal("reviewModal");
    },

    deleteReview(index, review) {
      let self = this;
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
        if (value === true) {
          let delData = {
            id: review.id,
            lessonId: review.lessonId,
            tutorId: review.tutor_userId
          };
          self.$axios.post('/review/delete', delData).then(res => {
            self.makeToast('success', 'Message', this.$t('success_delete')); //debug

            console.log(res.data);
            self.loadReviews();
          }).catch(error => {
            console.log(error);
          });
        }
      }).catch(err => {
        console.log(err); // An error occurred
      });
    },

    CancelReview() {
      this.clearReview();
    },

    saveReview() {
      try {
        this.reviewError.exist = false;
        this.$v.$reset();
        this.errors = null; //evt.preventDefault()

        this.$v.reviewForm.$touch();

        if (this.$v.reviewForm.$invalid) {
          console.log("vuelidate error");
        } else {
          this.reviewOverlay = true;
          this.reviewForm.tutorId = this.tutorId;
          let url = '/review/create';
          if (this.editReviewMode) url = '/review/edit';
          this.$axios.post(url, this.reviewForm).then(res => {
            if (res.data.id > 0) {
              if (this.editReviewMode) {
                this.reviewRows[this.editReviewIndex].rate = res.data.rate;
                this.reviewRows[this.editReviewIndex].comment = res.data.comment;
              } else this.reviewRows.push(res.data);

              this.clearReview();
              this.showReviewDialog(false);
              this.makeToast("success", "Message", "review.saveSuccess");
            }
          }).catch(error => {
            if (error.response.data === "review_notexist") this.reviewError.notexist = true;

            if (error.response.data === "review_exist") {
              this.reviewError.exist = true;
            }

            if (error.response.data.errors) {
              this.errors = error.response.data.errors;
            }
          }).finally(() => {
            this.reviewOverlay = false;
          });
        }
      } catch (e) {
        console.log(e);
      }
    },

    clearSendRequest() {
      this.myLessonData.description = "";
      this.myLessonData.dayOfWeek = 0;
      this.myLessonData.timeEnd = 0;
      this.myLessonData.id = 0;
      this.myLessonData.timingId = 0;
      this.myLessonData.userlessonId = 0;
    },

    sendLessonRequest() {
      this.$v.$reset();
      this.errors = null; //evt.preventDefault()

      this.$v.myLessonData.$touch();

      if (this.$v.myLessonData.$invalid) {
        console.log("vuelidate error");
        return;
      }

      try {
        let data = {
          timeStart: this.myLessonData.timeStart,
          timeEnd: this.myLessonData.timeEnd,
          dayOfWeek: this.myLessonData.dayOfWeek,
          tutorUserId: this.tutorId,
          lessonId: this.myLessonData.userLesson.lessonId,
          userLessonId: this.myLessonData.userLesson.id,
          description: this.myLessonData.description,
          timingId: this.myLessonData.timingId
        };
        this.lessonDialogOverlay = true;
        this.$axios.post('/mylessons/saveMyLesson', data).then(res => {
          let myLesson = res.data.data;

          if (myLesson != null) {
            if (myLesson.ID > 0) {
              let values = this.timing[myLesson.dayOfWeek][myLesson.timeStart];
              values["id"] = myLesson.id;
              values["selected"] = true;
              values["subject"] = this.myLessonData.userLesson.text;
              values["acceptStatus"] = myLesson.acceptStatus;
              this.$set(this.timing[myLesson.dayOfWeek], myLesson.timeStart, values);
              this.cancelDialog();
              this.myLessons.push(myLesson);
              this.makeToast("success", "Message", this.$t("mylesson.added"));
            }
          }

          this.lessonDialogVisible = false;
          this.lessonDialogOverlay = false;
        }).catch(error => {
          const err = error.response.data;

          if (err.error === true) {
            if (err.type === "exist") {
              this.makeToast("danger", "Message", this.$t("mylesson.exist"));
              this.lessonDialogError = true;
            }
          }

          this.lessonDialogOverlay = false;
        });
      } catch (e) {
        this.lessonDialogOverlay = false;
      }
    },

    selectTime(it, id) {
      if (!this.$auth.loggedIn) {
        this.$router.push('/login');
        return;
      }

      if (this.timing[it][id].value === true) {
        if (this.timingData[it][id].acceptStatus === undefined || this.timingData[it][id].acceptStatus !== 0) this.showSelectLessonDialog(this.timingData[it][id]);
      }
    },

    cancelDialog() {
      this.lessonDialogVisible = false;
      this.myLessonData.id = 0;
      this.myLessonData.timingId = 0;
      this.myLessonData.userlessonId = 0;
      this.myLessonData.description = "";
      this.myLessonData.timeEnd = 0;
      this.myLessonData.timeStart = 0;
      this.myLessonData.timingId = 0;
      this.myLessonData.dayOfWeek = 0;
    },

    showSelectLessonDialog(timingItem) {
      try {
        this.lessonDialogVisible = true;
        this.myLessonData.timeStart = timingItem.item.timeStart;
        this.myLessonData.timeEnd = timingItem.item.timeEnd;
        this.myLessonData.dayOfWeek = timingItem.item.dayOfWeek;
        this.myLessonData.timingId = timingItem.item.id;
      } catch (e) {}
    },

    loadUserLesson() {
      try {
        let data = {
          userId: this.tutorId
        };
        this.$axios.post('/subject/getUserLessonsByUserId', data).then(res => {
          let userLessons = res.data;
          if (userLessons != null) var index = 0;
          userLessons.forEach(item => {
            if (index === 0) this.myLessonData.userLesson = {
              id: item.id,
              lessonId: item.lessonId,
              text: item.subject
            };
            index = index + 1;
            this.selectLessonDialog_options.push({
              value: {
                id: item.id,
                lessonId: item.lessonId,
                text: item.subject
              },
              text: item.subject
            });
          });
        }).catch(error => {
          // this.$router.push('/404')
          console.log(error);
        });
      } catch (e) {}
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

    loadTutor() {
      const formData = {
        tutorId: this.tutorId
      };
      this.$axios.post('/user/getTutor', formData).then(async res => {
        this.tutorData = res.data;
        this.tutorData.TutorTimings.forEach(item => {
          let values = {
            value: true,
            item
          };
          this.$set(this.timing[item.dayOfWeek], item.timeStart, values);
        });
        let tempReviewLessons = [];
        this.tutorData.TutorMyLessons.forEach(item => {
          this.reviewLessons.push({
            id: item.lessonId,
            subject: item.Lesson.subject
          });
          let values = this.timing[item.dayOfWeek][item.timeStart];
          values["id"] = item.id;
          values["value"] = true;
          values["selected"] = true;
          values["subject"] = item.Lesson.subject;
          values["acceptStatus"] = item.acceptStatus;
          this.$set(this.timing[item.dayOfWeek], item.timeStart, values);
        });

        const uniqueElementsBy = (arr, fn) => arr.reduce((acc, v) => {
          if (!acc.some(x => fn(v, x))) acc.push(v);
          return acc;
        }, []);

        this.reviewLessons = uniqueElementsBy(this.reviewLessons, (a, b) => a.id === b.id);
      }).catch(error => {
        console.log(error);
      });
    },

    loadReviews(pageIndex) {
      let data = {
        tutorId: this.tutorId,
        perPage: this.perPage,
        pageIndex: pageIndex
      };
      this.$axios.post('/review/getReviews', data).then(res => {
        this.reviewRows = res.data.rows;
        this.reviewRowCount = res.data.row_count;
      }).catch(error => {
        console.log(error);
      });
    },

    sendMessage() {
      const formMsgData = {
        receiverId: this.tutorId,
        text: this.textMessage,
        type: 0,
        // simple message
        entityId: 0
      };
      this.showOverlay = true;
      this.$axios.post('/request/create', formMsgData).then(res => {
        if (res.data.ok === true) {
          this.textMessage = "";
          this.makeToast("success", "Message", "sendMessage_success");
        } else {
          this.makeToast("danger", "Message", "sendMessage_error");
        }

        this.hideMessageDialog();
        this.showOverlay = true;
      }).catch(error => {
        this.makeToast("danger", "Message", "sendMessage_error");
        this.showOverlay = true; // this.$router.push('/404')

        console.log(error);
      });
    },

    showMessageDialog() {
      if (!this.$auth.loggedIn) {
        this.$router.push('/login');
        return;
      }

      this.$refs['sm_modal'].show();
    },

    hideMessageDialog() {
      this.$refs['sm_modal'].hide();
    },

    cancelSendMessage() {
      this.hideMessageDialog();
    }

  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  }

});
// CONCATENATED MODULE: ./pages/tutor/_id/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var tutor_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./pages/tutor/_id/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(229)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  tutor_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "20e0c362",
  "5c7c9138"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map
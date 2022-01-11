exports.ids = [10];
exports.modules = {

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(218);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("0c92a647", content, true, context)
};

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_faq_manager_vue_vue_type_style_index_0_id_31482a7c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(143);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_faq_manager_vue_vue_type_style_index_0_id_31482a7c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_faq_manager_vue_vue_type_style_index_0_id_31482a7c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_faq_manager_vue_vue_type_style_index_0_id_31482a7c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_faq_manager_vue_vue_type_style_index_0_id_31482a7c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".gray-color[data-v-31482a7c]{color:#aaa}.orange-lick a[data-v-31482a7c]{color:#d65c4b!important}.orange-lick a[data-v-31482a7c]:hover{color:rgba(0,0,0,.5)!important}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/faq-manager.vue?vue&type=template&id=31482a7c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-container',{attrs:{"fluid":""}},[_c('h2',{staticClass:"pb-3"},[_vm._v("Manage FAQ")]),_vm._v(" "),_c('b-form',{staticClass:"w-100 pl-xl-4 pr-xl-4",on:{"submit":function($event){$event.stopPropagation();$event.preventDefault();return _vm.saveFaq.apply(null, arguments)}}},[_c('b-col',{staticClass:"col-xl-6 col-lg-6 col-md-8 col-sm-12 col-12"},[_c('b-form-group',{attrs:{"id":"input-group-1","label":_vm.$t('question'),"label-for":"input-1"}},[_c('b-form-input',{attrs:{"required":"","id":"input-1","autocomplete":"off"},model:{value:(_vm.question),callback:function ($$v) {_vm.question=$$v},expression:"question"}})],1)],1),_vm._v(" "),_c('b-col',{staticClass:"col-xl-6 col-lg-6 col-md-8 col-sm-12 col-12"},[_c('b-form-group',{attrs:{"id":"input-group-1","label":_vm.$t('sortNumber'),"label-for":"input-1"}},[_c('b-form-input',{attrs:{"required":"","type":"number","id":"input-1","autocomplete":"off"},model:{value:(_vm.sortNumber),callback:function ($$v) {_vm.sortNumber=$$v},expression:"sortNumber"}})],1)],1),_vm._v(" "),_c('b-col',{staticClass:"col-xl-6 col-lg-6 col-md-8 col-sm-12 col-12"},[_c('b-form-group',{attrs:{"id":"input-group-2","label":_vm.$t('answer'),"label-for":"input-2"}},[_c('vue-editor',{attrs:{"required":"","editorToolbar":_vm.editorToolbar},model:{value:(_vm.answer),callback:function ($$v) {_vm.answer=$$v},expression:"answer"}})],1)],1),_vm._v(" "),_c('b-col',{staticClass:"col-xl-5 col-lg-5 col-md-8 col-sm-12 col-12"},[_c('div',{staticClass:"custom-control custom-checkbox mb-3"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.isEnable),expression:"isEnable"}],staticClass:"custom-control-input",attrs:{"type":"checkbox","id":"customCheck","name":"example1"},domProps:{"checked":Array.isArray(_vm.isEnable)?_vm._i(_vm.isEnable,null)>-1:(_vm.isEnable)},on:{"change":function($event){var $$a=_vm.isEnable,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.isEnable=$$a.concat([$$v]))}else{$$i>-1&&(_vm.isEnable=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.isEnable=$$c}}}}),_vm._v(" "),_c('label',{staticClass:"custom-control-label",attrs:{"for":"customCheck"}},[_vm._v(_vm._s(_vm.$t('published')))])])]),_vm._v(" "),_c('b-button',{staticClass:"m-2",attrs:{"type":"submit","variant":"primary"}},[_vm._v(_vm._s(_vm.$t('save')))]),_vm._v(" "),_c('b-button',{staticClass:"m-2",attrs:{"variant":"warning"},on:{"click":_vm.clearForm}},[_vm._v(_vm._s(_vm.$t('clear')))])],1),_vm._v(" "),_c('b-row',{staticClass:"mt-5"},_vm._l((_vm.data),function(item){return _c('div',{key:item.id,staticClass:"col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12  p-2 ",attrs:{"id":"my-list"}},[_c('b-card',{staticClass:"h-100 "},[_c('b-card-text',[_c('div',{staticClass:"text-right"},[_c('b-link',{staticClass:"mr-4",staticStyle:{"color":"#bfbfbf"},attrs:{"size":"sm"},on:{"click":function($event){return _vm.deleteFaq(item)}}},[_c('font-awesome-icon',{staticClass:"shop-icon",attrs:{"icon":['fas', 'trash']}})],1),_vm._v(" "),_c('b-link',{staticStyle:{"color":"#bfbfbf"},attrs:{"size":"sm"},on:{"click":function($event){return _vm.editFaq(item)}}},[_c('font-awesome-icon',{staticClass:"shop-icon",attrs:{"icon":['far', 'edit']}})],1)],1),_vm._v(" "),_c('div',{staticClass:"pb-1 pt-1"},[_c('span',{staticClass:"gray-color"},[_vm._v("\n              Question: ")]),_vm._v(_vm._s(item.question)+"\n          ")]),_vm._v(" "),_c('div',{staticClass:"pb-1 pt-1"},[_c('span',{staticClass:"gray-color"},[_vm._v("\n              Sort Number: ")]),_vm._v(_vm._s(item.sortNumber)+"\n          ")]),_vm._v(" "),_c('div',{staticClass:"pb-1 pt-1"},[_c('span',{staticClass:"gray-color"},[_vm._v("\n              Enabled: ")]),_vm._v(_vm._s(item.isEnable)+"\n          ")]),_vm._v(" "),_c('span',{staticClass:"gray-color"},[_vm._v("  Answer: ")]),_c('div',{domProps:{"innerHTML":_vm._s(item.answer)}})])],1)],1)}),0),_vm._v(" "),_c('b-pagination',{directives:[{name:"show",rawName:"v-show",value:(_vm.perPage < _vm.totalRows),expression:"perPage < totalRows"}],staticClass:"pt-4",attrs:{"dir":"ltr","align":"center","total-rows":_vm.totalRows,"per-page":_vm.perPage,"aria-controls":"my-list"},on:{"input":_vm.getAll},model:{value:(_vm.currentPage),callback:function ($$v) {_vm.currentPage=$$v},expression:"currentPage"}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/admin/faq-manager.vue?vue&type=template&id=31482a7c&scoped=true&

// EXTERNAL MODULE: external "@fortawesome/fontawesome-svg-core"
var fontawesome_svg_core_ = __webpack_require__(4);

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(1);

// EXTERNAL MODULE: external "@fortawesome/free-regular-svg-icons"
var free_regular_svg_icons_ = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/faq-manager.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
/* harmony default export */ var faq_managervue_type_script_lang_js_ = ({
  layout: 'AdminTemplate',
  name: 'FAQManager',

  data() {
    return {
      perPage: 20,
      currentPage: 1,
      totalRows: 0,
      data: [],
      id: 0,
      isEnable: false,
      content: "",
      sortNumber: "",
      question: "",
      answer: "",
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
        perPage: this.perPage,
        currentPage: this.currentPage,
        search: this.search
      };
      this.$axios.post('/faq/getAll', sendData).then(res => {
        this.totalRows = res.data.total;
        this.data = res.data.rows;
        console.log(this.data);
      }).catch(error => {
        //               this.$router.push('/login')
        console.log(error.response);
      });
    },

    clearForm() {
      this.id = 0;
      this.isEnable = false;
      this.answer = '';
      this.sortNumber = '';
      this.question = '';
    },

    saveFaq() {
      var formData = {
        'id': this.id,
        'isEnable': this.isEnable,
        'question': this.question,
        'sortNumber': this.sortNumber,
        'answer': this.answer
      };
      this.$axios.post('/faq/create', formData).then(res => {
        this.id = res.data.id;
        this.clearForm();
        this.getAll();
      }).catch(error => {
        if (error.response.data.errors) {
          // console.log(JSON.stringify(error.response.data.errors))
          this.errors = error.response.data.errors;
        }

        console.log(error);
      });
    },

    deleteFaq(item) {
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
          if (this.id == item.id) this.id = 0;
          this.$axios.post('/faq/deleteFaq', {
            'id': item.id
          }).then(() => {
            this.getAll();
          }).catch(error => {
            console.log(error);
          });
        }
      }).catch(error => {
        console.log(error);
      });
    },

    editFaq(item) {
      this.clearForm();
      this.$axios.post('/faq/getFaqById', {
        'id': item.id
      }).then(res => {
        console.log(res.data);
        this.id = res.data.id;
        this.isEnable = res.data.isEnable;
        this.answer = res.data.answer;
        this.question = res.data.question;
        this.sortNumber = res.data.sortNumber;
      }).catch(error => {
        console.log(error.response);
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/admin/faq-manager.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_faq_managervue_type_script_lang_js_ = (faq_managervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./pages/admin/faq-manager.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(217)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_faq_managervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "31482a7c",
  "098fde4d"
  
)

/* harmony default export */ var faq_manager = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=faq-manager.js.map
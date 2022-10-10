exports.ids = [21];
exports.modules = {

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(224);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("5d2c763d", content, true, context)
};

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_users_vue_vue_type_style_index_0_id_7befca9b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(146);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_users_vue_vue_type_style_index_0_id_7befca9b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_users_vue_vue_type_style_index_0_id_7befca9b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_users_vue_vue_type_style_index_0_id_7befca9b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_users_vue_vue_type_style_index_0_id_7befca9b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".p-10[data-v-7befca9b]{padding-top:100px;padding-left:100px;padding-right:100px}.w-10[data-v-7befca9b]{width:10%!important}.w-5[data-v-7befca9b]{width:5%!important}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/users.vue?vue&type=template&id=7befca9b&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-modal',{ref:"role-modal",attrs:{"centered":"","hide-footer":"","size":"md","title":"Set Roles"}},[_c('div',{staticClass:"d-block text-center"},[_c('b-form-checkbox-group',{attrs:{"id":"checkbox-group-1","options":_vm.roleOptions,"name":"flavour-1"},model:{value:(_vm.roleSelected),callback:function ($$v) {_vm.roleSelected=$$v},expression:"roleSelected"}})],1),_vm._v(" "),_c('b-row',{staticClass:"mt-3"},[_c('b-col',[_c('b-button',{staticClass:"float-right w-50",attrs:{"variant":"primary"},on:{"click":this.setRoles}},[_vm._v(_vm._s(_vm.$t("set")))])],1),_vm._v(" "),_c('b-col',[_c('b-button',{staticClass:"float-left w-50",attrs:{"variant":"primary"},on:{"click":this.setRoleCancel}},[_vm._v(_vm._s(_vm.$t("cancel")))])],1)],1)],1),_vm._ssrNode(" "),_c('b-card',{staticClass:"mx-3",attrs:{"header-tag":"header","no-body":"","footer-tag":"footer"},scopedSlots:_vm._u([{key:"header",fn:function(){return [_vm._v("\n          "+_vm._s(_vm.$t("users"))+"\n          "),(_vm.visible)?_c('div',{staticClass:"float-right",on:{"click":function($event){_vm.visible = false}}},[_c('svg',{staticClass:"bi bi-caret-down",attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"20","height":"20","fill":"currentColor","viewBox":"0 0 16 16"}},[_c('path',{attrs:{"d":"M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"}})])]):_vm._e(),_vm._v(" "),(!_vm.visible)?_c('div',{staticClass:"float-right",on:{"click":function($event){_vm.visible = true}}},[_c('svg',{staticClass:"bi bi-caret-up-fill",attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"20","height":"20","fill":"currentColor","viewBox":"0 0 16 16"}},[_c('path',{attrs:{"d":"m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"}})])]):_vm._e()]},proxy:true}])},[_vm._v(" "),_c('b-row',{staticClass:"d-md-flex col-md-12 col-lg-12 m-center"},[_c('b-collapse',{staticClass:"w-100",attrs:{"id":"search-1","visible":"","accordion":"my-accordion","role":"tabpanel"},model:{value:(_vm.visible),callback:function ($$v) {_vm.visible=$$v},expression:"visible"}},[_c('b-row',{staticClass:"mt-3"},[_c('b-col',[_c('b-form-group',{attrs:{"label-cols":"4","label-cols-lg":"2","label-size":"sm","label-align-sm":"right","label":_vm.$t('email'),"label-for":"input-username"}},[_c('b-form-input',{attrs:{"id":"input-username","placeholder":"Email"},model:{value:(_vm.searchData.email),callback:function ($$v) {_vm.$set(_vm.searchData, "email", $$v)},expression:"searchData.email"}})],1)],1),_vm._v(" "),_c('b-col',[_c('b-form-group',{attrs:{"label-cols":"4","label-cols-lg":"2","label-align-sm":"right","label-size":"sm","label":_vm.$t('name'),"label-for":"input-name"}},[_c('b-form-input',{attrs:{"id":"input-name","placeholder":"Name"},model:{value:(_vm.searchData.name),callback:function ($$v) {_vm.$set(_vm.searchData, "name", $$v)},expression:"searchData.name"}})],1)],1)],1),_vm._v(" "),_c('b-row',{staticClass:"mt-2"},[_c('b-col',[_c('b-form-group',{attrs:{"label-cols":"4","label-cols-lg":"2","label-align-sm":"right","label-size":"sm","label":_vm.$t('lastname'),"label-for":"input-lastname"}},[_c('b-form-input',{attrs:{"id":"input-lastname","placeholder":"Last Name"},model:{value:(_vm.searchData.lastname),callback:function ($$v) {_vm.$set(_vm.searchData, "lastname", $$v)},expression:"searchData.lastname"}})],1)],1),_vm._v(" "),_c('b-col',[_c('b-form-group',{attrs:{"label-cols":"4","label-cols-lg":"2","label-align-sm":"right","label-size":"sm","label":_vm.$t('Status'),"label-for":"input-select"}},[_c('b-form-select',{attrs:{"id":"input-select","options":_vm.active_options},model:{value:(_vm.searchData.active),callback:function ($$v) {_vm.$set(_vm.searchData, "active", $$v)},expression:"searchData.active"}})],1)],1)],1),_vm._v(" "),_c('b-row',{staticClass:"mt-2 mb-3"},[_c('b-button',{staticClass:"m-center w-10",attrs:{"variant":"primary"},on:{"click":_vm.search}},[_vm._v("Search")])],1)],1)],1)],1),_vm._ssrNode(" "),_c('b-row',[_c('b-row',{staticClass:"d-md-flex col-md-12 col-lg-12 m-center mt-3"},[_c('b-col',[_c('b-pagination',{attrs:{"per-page":_vm.searchData.perPage,"total-rows":this.searchData.rowsCount,"first-text":"First","prev-text":"Prev","next-text":"Next","last-text":"Last"},on:{"change":_vm.search},model:{value:(_vm.searchData.pageIndex),callback:function ($$v) {_vm.$set(_vm.searchData, "pageIndex", $$v)},expression:"searchData.pageIndex"}})],1)],1),_vm._v(" "),_c('b-row',{staticClass:"d-md-flex col-md-12 col-lg-12 m-center mt-1"},[_c('b-overlay',{attrs:{"show":_vm.overlay_show,"no-wrap":""}}),_vm._v(" "),_c('b-col',[_c('b-table',{attrs:{"head-variant":"light","hover":"","items":_vm.t_items,"fields":_vm.t_fields},scopedSlots:_vm._u([{key:"cell(roles)",fn:function(row){return [(_vm.hasRole('student' ,row.item.roles))?_c('b-badge',{attrs:{"variant":"info"}},[_vm._v("Student")]):_vm._e(),_vm._v(" "),(_vm.hasRole('tutor', row.item.roles))?_c('b-badge',{attrs:{"variant":"danger"}},[_vm._v("Tutor")]):_vm._e(),_vm._v(" "),(_vm.hasRole('admin', row.item.roles))?_c('b-badge',{attrs:{"variant":"primary"}},[_vm._v("Admin")]):_vm._e()]}},{key:"cell(acceptStatus)",fn:function(row){return [(row.item.acceptStatus === 0 || row.item.acceptStatus === null)?_c('b-badge',{attrs:{"variant":"warning"}},[_vm._v(" "+_vm._s(_vm.$t("Pending")))]):_vm._e(),_vm._v(" "),(row.item.acceptStatus === 1)?_c('b-badge',{attrs:{"variant":"success"}},[_vm._v(" "+_vm._s(_vm.$t("Accepted")))]):_vm._e(),_vm._v(" "),(row.item.acceptStatus === 2)?_c('b-badge',{attrs:{"variant":"danger"}},[_vm._v(" "+_vm._s(_vm.$t("Rejected")))]):_vm._e()]}},{key:"cell(econfirmed)",fn:function(row){return [(row.item.emailConfirmed)?_c('b-badge',{attrs:{"pill":"","variant":"success"}},[_vm._v(_vm._s(_vm.$t("Confirmed")))]):_vm._e(),_vm._v(" "),(!row.item.emailConfirmed)?_c('b-badge',{attrs:{"pill":"","variant":"warning"}},[_vm._v(_vm._s(_vm.$t("Not Confirmed")))]):_vm._e()]}},{key:"cell(view)",fn:function(row){return [_c('b-button',{attrs:{"variant":"info","size":"sm"}},[_vm._v("View")])]}},{key:"cell(setrole)",fn:function(row){return [_c('b-button',{ref:'btnView' + row.index,attrs:{"variant":"info","size":"sm"},on:{"click":function($event){return _vm.setRoleDialog(row.item)}}},[_vm._v("Set")])]}}])})],1)],1)],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/admin/users.vue?vue&type=template&id=7befca9b&scoped=true&

// EXTERNAL MODULE: external "vuelidate/lib/validators"
var validators_ = __webpack_require__(103);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/users.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var usersvue_type_script_lang_js_ = ({
  layout: 'AdminTemplate',
  name: "users",

  data() {
    return {
      setRoleUserId: 0,
      roleSelected: [],
      roleOptions: [{
        text: 'Administrator',
        value: '1'
      }, {
        text: 'Tutor',
        value: '2'
      }, {
        text: 'Student',
        value: '3'
      }],
      overlay_show: false,
      visible: true,
      active_options: [{
        value: 2,
        text: 'All'
      }, {
        value: 0,
        text: 'Pending'
      }, {
        value: -1,
        text: 'Disable'
      }, {
        value: 1,
        text: 'Enable'
      }],
      searchData: {
        pageIndex: 1,
        rowsCount: 0,
        perPage: 10,
        email: "",
        name: "",
        lastname: "",
        active: 2 // 2=all , 0= disable , 1= enable

      },
      t_fields: [{
        key: 'email',
        label: 'Email/User',
        sortable: true
      }, {
        key: 'name',
        label: 'Name',
        sortable: true
      }, {
        key: 'lastname',
        label: 'Last Name',
        sortable: true
      }, {
        key: 'roles',
        label: 'Role',
        sortable: false
      }, {
        key: 'acceptStatus',
        label: 'Status',
        sortable: false
      }, {
        key: 'createdAt',
        label: this.$t('CreatedAt'),
        sortable: false
      }, {
        key: 'econfirmed',
        label: 'Email Confirmed',
        sortable: false
      }, {
        key: 'view',
        label: 'Action',
        sortable: false
      }, {
        key: 'setrole',
        label: this.$t('SetRole'),
        sortable: false
      }],
      t_items: []
    };
  },

  mounted() {
    this.search();
  },

  methods: {
    setRoleDialog(item) {
      this.roleSelected = item.rolesId;
      this.setRoleUserId = item.id;
      this.showModal();
    },

    setRoles() {
      try {
        const formData = {
          roles: this.roleSelected,
          userId: this.setRoleUserId
        };
        this.$axios.post("/users/setRole", formData).then(res => {
          if (res.data.result === true) {
            this.hideModal();
            this.search(this.searchData.pageIndex);
          }
        }).catch(err => {
          this.makeToast("danger", "Error", "search_error");
        });
      } catch (e) {}
    },

    setRoleCancel() {
      this.hideModal();
    },

    showModal() {
      this.$refs['role-modal'].show();
    },

    hideModal() {
      this.$refs['role-modal'].hide();
    },

    hasRole: function (role, roles) {
      if (roles !== undefined) return roles.indexOf(role) !== -1;
      return false;
    },

    makeToast(variant = 'success', header = 'Message', msg = '') {
      this.$bvToast.toast(this.$t(msg), {
        title: header,
        variant: variant,
        solid: true
      });
    },

    search(index) {
      if (index > 0) this.searchData.pageIndex = index;else this.searchData.pageIndex = 1;
      this.overlay_show = true;
      this.$axios.post('users/list', this.searchData).then(res => {
        this.t_items = res.data.rows;
        this.searchData.rowsCount = res.data.row_count;
        this.overlay_show = false;
      }).catch(error => {
        this.overlay_show = false;
        this.makeToast("danger", "Error", "search_error");
        console.log(error);
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/admin/users.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_usersvue_type_script_lang_js_ = (usersvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./pages/admin/users.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(223)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_usersvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7befca9b",
  "c0d1682e"
  
)

/* harmony default export */ var users = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=users.js.map
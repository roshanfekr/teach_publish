exports.ids = [19];
exports.modules = {

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/university.vue?vue&type=template&id=ddef45c4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-container',[_c('b-row',{staticClass:"mr-1"},[_c('b-col',[_c('p',{staticClass:"float-left mt-2"},[_vm._v(_vm._s(_vm.header_title))]),_vm._v(" "),_c('b-button',{staticClass:"float-right mb-2",attrs:{"variant":"success"},on:{"click":this.showAddModal}},[_vm._v("Add New")])],1)],1),_vm._v(" "),_c('b-modal',{ref:"edit-modal",attrs:{"centered":"","size":"lg","hide-footer":"","title":"Edit Lesson"}},[_c('b-row',{attrs:{"id":"toolbar"}},[_c('b-col',[_c('b-row',{staticClass:"mt-2"},[_c('b-col',[_c('b-form-group',{attrs:{"label-cols":"5","label-cols-lg":"4","label-align-sm":"right","label":_vm.$t('university_name'),"label-for":"input-university_name"}},[_c('b-form-input',{attrs:{"id":"input-university_name","placeholder":_vm.$t('Please_enter_university_name'),"state":!_vm.$v.nData.name.$error,"aria-describedby":"input-university_name-feedback","trim":""},model:{value:(_vm.$v.nData.name.$model),callback:function ($$v) {_vm.$set(_vm.$v.nData.name, "$model", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"$v.nData.name.$model"}}),_vm._v(" "),_c('b-form-invalid-feedback',{attrs:{"id":"input-university_name-feedback"}},[_vm._v("\n                    "+_vm._s(this.$t("v_enter_university_name"))+"\n                  ")])],1)],1)],1),_vm._v(" "),_c('b-row',{staticClass:"mt-2"},[_c('b-col',[_c('b-form-group',{attrs:{"label-cols":"4","label-cols-lg":"4","label-align-sm":"right","label":_vm.$t('university_email'),"label-for":"input-email"}},[_c('b-form-input',{attrs:{"id":"input-email","placeholder":_vm.$t('university_email'),"state":!_vm.$v.nData.email.$error,"aria-describedby":"input-email-feedback","trim":""},model:{value:(_vm.$v.nData.email.$model),callback:function ($$v) {_vm.$set(_vm.$v.nData.email, "$model", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"$v.nData.email.$model"}}),_vm._v(" "),_c('b-form-invalid-feedback',{attrs:{"id":"input-email-feedback"}},[_vm._v("\n                    "+_vm._s(this.$t("v_enter_university_email"))+"\n                  ")])],1)],1)],1),_vm._v(" "),_c('b-row',{staticClass:"mt-2"},[_c('b-col',[_c('b-form-group',{attrs:{"label-cols":"4","label-cols-lg":"4","label-align-sm":"right","label":_vm.$t('university_emailPattern'),"label-for":"input-university_emailPattern"}},[_c('b-form-input',{attrs:{"id":"input-university_emailPattern","placeholder":_vm.$t('university_emailPattern'),"state":!_vm.$v.nData.emailPattern.$error,"aria-describedby":"input-emailPattern-feedback","trim":""},model:{value:(_vm.$v.nData.emailPattern.$model),callback:function ($$v) {_vm.$set(_vm.$v.nData.emailPattern, "$model", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"$v.nData.emailPattern.$model"}}),_vm._v(" "),_c('b-form-invalid-feedback',{attrs:{"id":"input-emailPattern-feedback"}},[_vm._v("\n                    "+_vm._s(this.$t("v_enter_university_emailPattern"))+"\n                  ")])],1)],1)],1),_vm._v(" "),_c('b-row',{staticClass:"mt-2"},[_c('b-col',[_c('b-form-group',{attrs:{"label-cols":"4","label-cols-lg":"4","label-align-sm":"right","label":_vm.$t('admin.university.subdomain'),"label-for":"input-email"}},[_c('b-form-input',{attrs:{"id":"input-subdomain","placeholder":_vm.$t('admin.university.subdomain.placeholder'),"state":!_vm.$v.nData.host.$error,"aria-describedby":"input-subdomain-feedback","trim":""},model:{value:(_vm.$v.nData.host.$model),callback:function ($$v) {_vm.$set(_vm.$v.nData.host, "$model", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"$v.nData.host.$model"}}),_vm._v(" "),_c('b-form-invalid-feedback',{attrs:{"id":"input-subdomain-feedback"}},[_vm._v("\n                "+_vm._s(this.$t("admin.university.subdomain.required"))+"\n              ")])],1)],1)],1),_vm._v(" "),_c('b-row',{staticClass:"mt-2"},[_c('b-col',[_c('b-form-group',{attrs:{"label-cols":"4","label-cols-lg":"4","label-align-sm":"right","label":_vm.$t('isactive'),"label-for":"input-isenable"}},[_c('b-form-checkbox',{staticClass:"mt-2",attrs:{"id":"input-isenable","placeholder":_vm.$t('isenable'),"trim":""},model:{value:(_vm.nData.isenable),callback:function ($$v) {_vm.$set(_vm.nData, "isenable", $$v)},expression:"nData.isenable"}})],1)],1)],1),_vm._v(" "),_c('b-row',{staticClass:"mt-3"},[_c('b-col',[_c('b-button',{staticClass:"float-right w-50",attrs:{"disabled":_vm.savingProgress,"variant":"primary"},on:{"click":this.save}},[_vm._v(_vm._s(_vm.$t("save"))+"\n                  "),(_vm.savingProgress)?_c('b-spinner',{attrs:{"small":""}}):_vm._e()],1)],1),_vm._v(" "),_c('b-col',[_c('b-button',{staticClass:"float-left w-50",attrs:{"variant":"primary"},on:{"click":this.cancel}},[_vm._v(_vm._s(_vm.$t("cancel")))])],1)],1)],1)],1)],1),_vm._v(" "),_c('b-row',{},[_c('b-overlay',{attrs:{"show":_vm.overlay_show,"no-wrap":""}}),_vm._v(" "),_c('b-row',{staticClass:"d-md-flex col-md-12 col-lg-12 m-center mt-1"},[_c('b-col',[_c('b-table',{attrs:{"head-variant":"light","striped":"","hover":"","items":_vm.t_items,"fields":_vm.t_fields},scopedSlots:_vm._u([{key:"cell(actions)",fn:function(row){return [_c('b-button',{ref:'btnEdit' + row.index,attrs:{"variant":"info","size":"sm"},on:{"click":function($event){return _vm.showEditModal(row.item)}}},[_vm._v("Edit")])]}},{key:"cell(action_del)",fn:function(row){return [_c('b-button',{ref:'btnDel' + row.index,attrs:{"variant":"info","size":"sm"},on:{"click":function($event){return _vm.deleteUniversity(row.item)}}},[_vm._v("Delete")])]}}])})],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/admin/university.vue?vue&type=template&id=ddef45c4&scoped=true&

// EXTERNAL MODULE: external "vuelidate/lib/validators"
var validators_ = __webpack_require__(103);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/university.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var universityvue_type_script_lang_js_ = ({
  layout: 'AdminTemplate',
  name: "university",

  data() {
    return {
      savingProgress: false,
      editId: 0,
      header_title: '',
      overlay_show: false,
      tabVisible: 0,
      pageIndex: 1,
      search_visible: true,
      add_visible: false,
      nData: {
        id: 0,
        name: "",
        host: null,
        emailPattern: "",
        email: "",
        isenable: true
      },
      active_options: [{
        value: 2,
        text: 'All'
      }, {
        value: 0,
        text: 'Disable'
      }, {
        value: 1,
        text: 'Enable'
      }],
      t_fields: [{
        key: 'name',
        label: 'Name',
        sortable: true
      }, {
        key: 'emailPattern',
        label: 'Email Pattern',
        sortable: false
      }, {
        key: 'email',
        label: 'Email',
        sortable: false
      }, {
        key: 'host',
        label: 'Subdomain',
        sortable: false
      }, {
        key: 'status',
        label: 'Status',
        sortable: false
      }, {
        key: 'actions',
        label: 'Edit',
        sortable: false
      }, {
        key: 'action_del',
        label: '',
        sortable: false
      }],
      t_items: []
    };
  },

  mounted() {
    this.loadUniversity();
  },

  validations: {
    nData: {
      name: {
        required: validators_["required"]
      },
      host: {
        required: validators_["required"]
      },
      email: {
        required: validators_["required"]
      },
      emailPattern: {
        required: validators_["required"]
      }
    }
  },
  methods: {
    deleteUniversity(item) {
      this.$bvModal.msgBoxConfirm(this.$t('delete_confirm'), {
        title: 'Confirm',
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
          if (this.id === item.id) this.id = 0;
          this.$axios.post('/university/delete-university', {
            'uniId': item.id
          }).then(() => {
            this.loadUniversity();
          }).catch(error => {
            console.log(error);
          });
        }
      }).catch(error => {
        console.log(error);
      });
    },

    showAddModal() {
      this.editId = 0;
      this.nData.id = 0;
      this.nData.emailPattern = "";
      this.nData.name = "";
      this.nData.isenable = true;
      this.nData.email = "";
      this.nData.host = null;
      this.$refs['edit-modal'].show();
    },

    showEditModal(item) {
      this.editId = item.id;
      this.nData.id = item.id;
      this.nData.emailPattern = item.emailPattern;
      this.nData.name = item.name;
      this.nData.isenable = item.isenable;
      this.nData.email = item.email;
      this.nData.host = item.host;
      this.$refs['edit-modal'].show();
    },

    hideModal(name) {
      this.editId = 0;
      this.$refs[name].hide();
    },

    makeToast(variant = 'success', header = 'Message', msg = '') {
      this.$bvToast.toast(this.$t(msg), {
        title: header,
        variant: variant,
        solid: true
      });
    },

    save(evt) {
      this.$v.$reset();
      this.errors = null;
      evt.preventDefault();
      this.$v.nData.$touch();

      if (this.$v.nData.$invalid) {
        console.log("vuelidate error");
      } else {
        // add new record
        if (this.nData.id === 0) {
          this.savingProgress = true;
          this.$axios.post('/definitions/createUny', this.nData).then(rsp => {
            this.savingProgress = false; //this.t_items = rsp.data

            this.t_items.push({
              id: rsp.data.id,
              name: rsp.data.name,
              emailPattern: rsp.data.emailPattern,
              email: rsp.data.email,
              isenable: rsp.data.isenable ? "Enable" : "Disable"
            });
            this.hideModal('edit-modal');
            this.makeToast("success", "Success", this.$t("done_successfully"));
          }).finally(f => {
            this.savingProgress = false;
          });
        } else {
          this.savingProgress = true;
          this.$axios.post('/definitions/editUny', this.nData).then(rsp => {
            this.hideModal('edit-modal');
            this.makeToast("success", "Success", this.$t("done_successfully"));
            this.loadUniversity();
          }).finally(f => {
            this.savingProgress = false;
          });
        }
      }
    },

    cancel() {
      this.editId = 0;
      this.nData.id = 0;
      this.hideModal('edit-modal');
    },

    loadUniversity() {
      let searchData = {
        all: true
      };
      this.$axios.post('/definitions/universityList', searchData).then(res => {
        this.t_items = res.data;
        this.overlay_show = false;
      }).catch(error => {
        this.overlay_show = false;
        this.makeToast("danger", "Error", this.$t("search_error"));
        console.log(error);
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/admin/university.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_universityvue_type_script_lang_js_ = (universityvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./pages/admin/university.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_universityvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "ddef45c4",
  "4db67c7d"
  
)

/* harmony default export */ var university = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=university.js.map
exports.ids = [11];
exports.modules = {

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/gender.vue?vue&type=template&id=22c8c5fa&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-container',[_c('b-row',{staticClass:"mr-1"},[_c('b-col',[_c('p',{staticClass:"float-left mt-2"},[_vm._v(_vm._s(_vm.$t("admin.gender.header")))]),_vm._v(" "),_c('b-button',{staticClass:"float-right mb-2",attrs:{"variant":"success"},on:{"click":this.showAddModal}},[_vm._v("Add New")])],1)],1),_vm._v(" "),_c('b-modal',{ref:"edit-modal",attrs:{"centered":"","size":"lg","hide-footer":"","title":"Edit Gender"}},[_c('b-row',{attrs:{"id":"toolbar"}},[_c('b-col',[_c('b-row',{staticClass:"mt-2"},[_c('b-col',[_c('b-form-group',{attrs:{"label-cols":"5","label-cols-lg":"4","label-align-sm":"right","label":_vm.$t('admin.gender.field.title'),"label-for":"input-gender-title"}},[_c('b-form-input',{attrs:{"id":"input-gender-title","placeholder":_vm.$t('admin.gender.field.placeholder'),"state":!_vm.$v.nData.title.$error,"aria-describedby":"input-gender-title-feedback","trim":""},model:{value:(_vm.$v.nData.title.$model),callback:function ($$v) {_vm.$set(_vm.$v.nData.title, "$model", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"$v.nData.title.$model"}}),_vm._v(" "),_c('b-form-invalid-feedback',{attrs:{"id":"input-gender-title-feedback"}},[_vm._v("\n                    "+_vm._s(this.$t("admin.gender.v.title"))+"\n                  ")])],1)],1)],1),_vm._v(" "),_c('b-row',{staticClass:"mt-2"},[_c('b-col',[_c('b-form-group',{attrs:{"label-cols":"4","label-cols-lg":"4","label-align-sm":"right","label":_vm.$t('university_email'),"label-for":"input-email"}},[_c('b-check',{attrs:{"id":"input-email"},model:{value:(_vm.nData.disable),callback:function ($$v) {_vm.$set(_vm.nData, "disable", $$v)},expression:"nData.disable"}},[_vm._v("\n                    Disable\n                  ")])],1)],1)],1),_vm._v(" "),_c('b-row',{staticClass:"mt-3"},[_c('b-col',[_c('b-button',{staticClass:"float-right w-50",attrs:{"variant":"primary"},on:{"click":this.save}},[_vm._v(_vm._s(_vm.$t("save")))])],1),_vm._v(" "),_c('b-col',[_c('b-button',{staticClass:"float-left w-50",attrs:{"variant":"primary"},on:{"click":this.cancel}},[_vm._v(_vm._s(_vm.$t("cancel")))])],1)],1)],1)],1)],1),_vm._v(" "),_c('b-row',{},[_c('b-overlay',{attrs:{"show":_vm.overlay_show,"no-wrap":""}}),_vm._v(" "),_c('b-row',{staticClass:"d-md-flex col-md-12 col-lg-12 m-center mt-1"},[_c('b-col',[_c('b-table',{attrs:{"head-variant":"light","striped":"","hover":"","items":_vm.t_items,"fields":_vm.t_fields},scopedSlots:_vm._u([{key:"cell(actions)",fn:function(row){return [_c('b-button',{ref:'btnEdit' + row.index,attrs:{"variant":"info","size":"sm"},on:{"click":function($event){return _vm.showEditModal(row.item)}}},[_vm._v("Edit")])]}}])})],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/admin/gender.vue?vue&type=template&id=22c8c5fa&scoped=true&

// EXTERNAL MODULE: external "vuelidate/lib/validators"
var validators_ = __webpack_require__(103);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/gender.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var gendervue_type_script_lang_js_ = ({
  layout: 'AdminTemplate',
  name: "Gender",

  data() {
    return {
      header_title: '',
      overlay_show: false,
      tabVisible: 0,
      pageIndex: 1,
      search_visible: true,
      add_visible: false,
      nData: {
        id: 0,
        title: null,
        disable: false
      },
      t_fields: [{
        key: 'title',
        label: 'Title',
        sortable: true
      }, {
        key: 'disable',
        label: 'Disable',
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
      title: {
        required: validators_["required"]
      }
    }
  },
  methods: {
    showAddModal() {
      this.nData.id = 0;
      this.nData.title = null;
      this.nData.disable = false;
      this.$refs['edit-modal'].show();
    },

    showEditModal(item) {
      this.nData.id = item.id;
      this.nData.title = item.title;
      this.nData.disable = item.disable;
      this.$refs['edit-modal'].show();
    },

    hideModal(name) {
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
          this.$axios.post('/definitions/create-gender', this.nData).then(rsp => {
            //this.t_items = rsp.data
            this.t_items.push({
              id: rsp.data.id,
              title: rsp.data.title,
              disable: rsp.data.disable
            });
            this.hideModal('edit-modal');
            this.makeToast("success", "Success", this.$t("done_successfully"));
          });
        } else {
          this.$axios.post('/definitions/edit-gender', this.nData).then(rsp => {
            this.hideModal('edit-modal');
            this.makeToast("success", "Success", this.$t("done_successfully"));
            this.loadUniversity();
          });
        }
      }
    },

    cancel() {
      this.nData.id = 0;
      this.hideModal('edit-modal');
    },

    loadGender() {
      this.$axios.post('/definitions/list-gender', null).then(res => {
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
// CONCATENATED MODULE: ./pages/admin/gender.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_gendervue_type_script_lang_js_ = (gendervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./pages/admin/gender.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_gendervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "22c8c5fa",
  "0d82d2ba"
  
)

/* harmony default export */ var gender = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=gender.js.map
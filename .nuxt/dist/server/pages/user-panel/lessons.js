exports.ids = [48];
exports.modules = {

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/user-panel/lessons.vue?vue&type=template&id=89ccc0fc&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"p-4"},[_c('b-modal',{ref:"edit-modal",attrs:{"centered":"","hide-footer":"","title":_vm.header_title}},[_c('div',{staticClass:"login-wrap p-4 p-lg-5"},[_c('b-form-group',{attrs:{"id":"input-group-name","label":_vm.$t('subject')+':',"label-for":"input-subject"}},[_c('b-form-select',{attrs:{"id":"input-subject","state":!_vm.$v.formData.lessonId.$error,"aria-describedby":"input-v-subject-feedback","options":_vm.subjet_options,"trim":""},model:{value:(_vm.$v.formData.lessonId.$model),callback:function ($$v) {_vm.$set(_vm.$v.formData.lessonId, "$model", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"$v.formData.lessonId.$model"}}),_vm._v(" "),_c('b-form-invalid-feedback',{attrs:{"id":"input-v-subject-feedback"}},[_vm._v("\n                "+_vm._s(this.$t("v_enter_Required"))+"\n              ")])],1),_vm._v(" "),_c('b-form-group',{attrs:{"id":"input-group-description","label":_vm.$t('desc')+':',"label-for":"input-description"}},[_c('textarea',{directives:[{name:"model",rawName:"v-model.trim",value:(_vm.$v.formData.description.$model),expression:"$v.formData.description.$model",modifiers:{"trim":true}}],staticClass:"w-100",attrs:{"id":"input-description","state":!_vm.$v.formData.description.$error,"aria-describedby":"input-v-description-feedback","trim":""},domProps:{"value":(_vm.$v.formData.description.$model)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.$v.formData.description, "$model", $event.target.value.trim())},"blur":function($event){return _vm.$forceUpdate()}}}),_vm._v(" "),_c('b-form-invalid-feedback',{attrs:{"id":"input-v-description-feedback"}},[_vm._v("\n                "+_vm._s(this.$t("v_enter_Required"))+"\n              ")])],1),_vm._v(" "),_c('b-row',{staticClass:"mt-2"},[_c('b-col',{staticClass:"float-right"},[_c('b-button',{staticClass:"m-center w-50 float-right",attrs:{"variant":"primary"},on:{"click":this.saveEdit}},[_vm._v("Save")])],1),_vm._v(" "),_c('b-col',{staticClass:"float-left"},[_c('b-button',{staticClass:"m-center w-50 float-left",attrs:{"variant":"primary"},on:{"click":this.cancel}},[_vm._v("Cancel")])],1)],1)],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div data-v-89ccc0fc>","</div>",[_c('b-card',{staticClass:"mt-4 w-100",attrs:{"header-tag":"header","no-body":"","footer-tag":"footer"},scopedSlots:_vm._u([{key:"header",fn:function(){return [_c('b-button',{staticClass:"btn btn-crl  btn-primary ",on:{"click":_vm.prepareAddNew}},[_vm._v("Add New")])]},proxy:true},{key:"footer",fn:function(){return [_c('b-button',{attrs:{"size":"sm","variant":"btn-primary"},on:{"click":_vm.reloadTable}},[_c('svg',{staticClass:"bi bi-arrow-repeat",attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","fill":"currentColor","viewBox":"0 0 16 16"}},[_c('path',{attrs:{"d":"M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"}}),_vm._v(" "),_c('path',{attrs:{"fill-rule":"evenodd","d":"M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"}})])])]},proxy:true}])},[_vm._v(" "),_c('b-table',{attrs:{"responsive":"sm","outlined":"","show-empty":"","hover":"","items":_vm.t_subject_items,"fields":_vm.t_table_fields},scopedSlots:_vm._u([{key:"cell(description)",fn:function(data){return [_c('p',{staticClass:"float-left"},[_vm._v("\n                "+_vm._s(data.item.description.substr(1,20))+"\n                  ")]),(data.item.description.length > 20)?_c('p',{staticClass:"float-left ml-1",staticStyle:{"cursor":"pointer"}},[_vm._v("\n                    ...\n                    "),_c('svg',{staticClass:"bi bi-eye-fill",attrs:{"id":'tooltip-description' + data.item.id,"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16"}},[_c('path',{attrs:{"d":"M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"}}),_vm._v(" "),_c('path',{attrs:{"d":"M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"}})]),_vm._v(" "),_c('b-tooltip',{attrs:{"target":'tooltip-description' + data.item.id}},[_vm._v("\n                      "+_vm._s(data.item.description)+"\n                    ")])],1):_vm._e(),_vm._v(" "),_c('p')]}},{key:"cell(edit)",fn:function(data){return [_c('button',{staticClass:"btn btn-dark",on:{"click":function($event){return _vm.prepareEdit(data)}}},[_vm._v(_vm._s(_vm.$t("edit")))])]}},{key:"cell(remove)",fn:function(data){return [_c('button',{staticClass:"btn btn-dark",on:{"click":function($event){return _vm.showDeleteComfirm(data)}}},[_vm._v(_vm._s(_vm.$t("remove")))])]}},{key:"cell(acceptStatus)",fn:function(data){return [(data.item.acceptStatus === 0 || data.item.acceptStatus === null || data.item.acceptStatus === undefined)?_c('b-badge',{attrs:{"variant":"warning"}},[_vm._v(_vm._s(_vm.$t("pending")))]):_vm._e(),_vm._v(" "),(data.item.acceptStatus === 1)?_c('b-badge',{attrs:{"variant":"success"}},[_vm._v(_vm._s(_vm.$t("accept")))]):_vm._e()]}}])})],1)],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/user-panel/lessons.vue?vue&type=template&id=89ccc0fc&scoped=true&

// EXTERNAL MODULE: external "vuelidate/lib/validators"
var validators_ = __webpack_require__(103);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/user-panel/lessons.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var lessonsvue_type_script_lang_js_ = ({
  name: "reg-subject",

  data() {
    return {
      header_title: "",
      dismissCountDown: 10,
      delComfirm: false,
      formData: {
        id: 0,
        lessonId: 0,
        description: ''
      },
      subjet_options: [],
      t_table_fields: [{
        key: 'subject',
        label: 'Subject',
        sortable: true
      }, {
        key: 'description',
        label: 'Description',
        sortable: true
      }, {
        key: 'createdAt',
        label: 'Created At',
        sortable: true
      }, {
        key: 'acceptStatus',
        label: 'Status',
        sortable: true
      }, {
        key: 'edit',
        label: '',
        sortable: false
      }, {
        key: 'remove',
        label: '',
        sortable: false
      }],
      t_subject_items: []
    };
  },

  validations: {
    formData: {
      lessonId: {
        required: validators_["required"]
      },
      description: {
        required: validators_["required"]
      }
    }
  },

  mounted() {
    this.fillSubject();
    this.reloadTable();
  },

  methods: {
    hideModal() {
      this.$refs['edit-modal'].hide();
    },

    prepareAddNew() {
      this.header_title = "Add New Lesson";
      this.formData.id = 0;
      this.formData.description = "";
      this.formData.lessonId = 0;
      this.$refs['edit-modal'].show();
    },

    prepareEdit(row) {
      this.header_title = "Edit Lesson";
      this.formData.id = row.item.id;
      this.formData.description = row.item.description;
      this.formData.lessonId = row.item.lessonId;
      this.$refs['edit-modal'].show();
    },

    cancel() {
      this.formData.id = 0;
      this.hideModal('edit-modal');
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

    fillSubject() {
      this.$axios.post('subject/subjectlist', null, this.config).then(res => {
        // localStorage.setItem('userToken', res.data)
        // this.$router.push('/profile')
        this.subjet_options = res.data;
        console.log(res.data);
      }).catch(error => {
        if (error.response.data.errors) {
          this.errors = error.response.data.errors;
        }

        console.log(error);
      });
    },

    reloadTable() {
      this.$axios.post('/subject/items', null, this.config).then(res => {
        this.t_subject_items = [];
        this.t_subject_items = res.data;
      }).catch(error => {
        if (error.response.data.errors) {
          this.errors = error.response.data.errors;
        }

        console.log(error);
      });
    },

    showDeleteComfirm(rowId) {
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

        function deleteRow(id) {
          this.$axios.post('subject/delete', null, this.config).then(res => {
            this.makeToast('success', 'Message', this.$t('success_delete')); //debug

            console.log(res.data);
            return true;
          }).catch(error => {
            if (error.response.data.errors) {
              this.errors = error.response.data.errors;
            }

            console.log(error);
          });
        }

        if (value === true) {
          let retValue = deleteRow(rowId.id);
          if (retValue.result === true) reloadTable();
        }
      }).catch(err => {// An error occurred
      });
    },

    saveEdit() {
      this.$v.$reset();
      this.$v.formData.$touch();

      if (this.$v.formData.$invalid) {
        console.log("vuelidate error");
      } else {
        if (this.formData.id > 0) {
          this.$axios.post('subject/edit', this.formData).then(res => {
            this.hideModal();
            this.overlay_show = false;
            this.reloadTable();
          }).catch(error => {
            this.overlay_show = false;
            this.makeToast("danger", "Error", "save_error");
            console.log(error);
          });
        } else {
          this.$axios.post('subject/create', this.formData).then(res => {
            //this.t_items = res.data
            this.formData.lessonId = 0;
            this.formData.description = "";
            this.formData.id = 0;
            this.hideModal();
            this.search();
          }).catch(error => {
            this.overlay_show = false;
            this.makeToast("danger", "Error", error);
            console.log(error);
          });
        }
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/user-panel/lessons.vue?vue&type=script&lang=js&
 /* harmony default export */ var user_panel_lessonsvue_type_script_lang_js_ = (lessonsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./pages/user-panel/lessons.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  user_panel_lessonsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "89ccc0fc",
  "986c17a6"
  
)

/* harmony default export */ var lessons = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=lessons.js.map
exports.ids = [14];
exports.modules = {

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/lessons.vue?vue&type=template&id=cb53752c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-container',[_c('b-row',{staticClass:"d-md-flex col-md-12 col-lg-12 m-center w-100 ",attrs:{"id":"toolbar"}},[_c('b-col',[_c('b-card',{staticClass:"pb-3 mb-1 w-100",attrs:{"no-body":""}},[_c('b-card-header',{attrs:{"header-tag":"header","role":"tab"}},[_c('b-button',{staticClass:" mb-2",attrs:{"variant":"success"},on:{"click":this.addNewToggle}},[_vm._v("Add New")]),_vm._v(" "),_c('b-button',{staticClass:" mb-2 ml-2",attrs:{"variant":"success"},on:{"click":this.addFromCVS}},[_vm._v("Add From CVS")])],1),_vm._v(" "),_c('div',{staticClass:"mt-4"},[_c('b-row',{staticClass:"mt-2"},[_c('b-col',[_c('b-form-group',{attrs:{"label-cols":"4","label-cols-lg":"2","label-size":"sm","label-align-sm":"right","label":_vm.$t('lesson'),"label-for":"input-lesson"}},[_c('b-form-input',{attrs:{"id":"input-lesson","placeholder":"Please enter subject title"},model:{value:(_vm.searchData.subject),callback:function ($$v) {_vm.$set(_vm.searchData, "subject", $$v)},expression:"searchData.subject"}})],1)],1),_vm._v(" "),_c('b-col',[_c('b-form-group',{staticClass:"w-75",attrs:{"label-cols":"4","label-cols-lg":"2","label-align-sm":"right","label-size":"sm","label":_vm.$t('Status'),"label-for":"input-select"}},[_c('b-form-select',{staticClass:"pt-2",attrs:{"options":_vm.active_options},model:{value:(_vm.searchData.active),callback:function ($$v) {_vm.$set(_vm.searchData, "active", $$v)},expression:"searchData.active"}})],1)],1)],1),_vm._v(" "),_c('b-row',{staticClass:"mt-2"},[_c('b-col',[_c('b-form-group',{staticClass:"w-75",attrs:{"label-cols":"4","label-cols-lg":"3","label-align-sm":"right","label-size":"sm","label":_vm.$t('admin.lessons.universities'),"label-for":"input-select-universities"}},[_c('b-form-select',{attrs:{"id":"input-select-universities","options":_vm.universities_options},model:{value:(_vm.searchData.uniId),callback:function ($$v) {_vm.$set(_vm.searchData, "uniId", $$v)},expression:"searchData.uniId"}})],1)],1),_vm._v(" "),_c('b-col',{staticClass:"w-50"})],1),_vm._v(" "),_c('b-row',{staticClass:"mt-2"},[_c('b-button',{staticClass:"m-center w-25",attrs:{"variant":"primary"},on:{"click":this.search}},[_vm._v("Search")])],1)],1)],1)],1)],1),_vm._v(" "),_c('b-row',{staticClass:"d-md-flex col-md-12 col-lg-12 m-center mt-1"},[_c('b-overlay',{attrs:{"show":_vm.overlay_show,"no-wrap":""}}),_vm._v(" "),_c('b-row',{staticClass:"d-md-flex col-md-12 col-lg-12 m-center mt-3"},[_c('b-col',[_c('b-pagination',{attrs:{"total-rows":this.searchData.pageCount,"per-page":this.searchData.perPage,"first-text":"First","prev-text":"Prev","next-text":"Next","last-text":"Last"},on:{"change":_vm.search},model:{value:(_vm.pageIndex),callback:function ($$v) {_vm.pageIndex=$$v},expression:"pageIndex"}})],1)],1),_vm._v(" "),_c('b-row',{staticClass:"d-md-flex col-md-12 col-lg-12 m-center mt-1"},[_c('b-col',[_c('b-table',{attrs:{"head-variant":"light","striped":"","hover":"","items":_vm.t_items,"fields":_vm.t_fields},scopedSlots:_vm._u([{key:"cell(state)",fn:function(row){return [(row.item.stateValue)?_c('b-badge',{attrs:{"variant":"info"}},[_vm._v("Enable")]):_vm._e(),_vm._v(" "),(!row.item.stateValue)?_c('b-badge',{attrs:{"variant":"warning"}},[_vm._v("Disable")]):_vm._e()]}},{key:"cell(actions)",fn:function(row){return [_c('b-button',{ref:'btnEdit' + row.index,attrs:{"variant":"info","size":"sm"},on:{"click":function($event){return _vm.prepare_edit(row.item)}}},[_vm._v("Edit")])]}},{key:"cell(action_del)",fn:function(row){return [_c('b-button',{ref:'btnDel' + row.index,attrs:{"variant":"info","size":"sm"},on:{"click":function($event){return _vm.deleteLesson(row.item)}}},[_vm._v("Delete")])]}}])})],1)],1)],1),_vm._v(" "),_c('b-modal',{ref:"edit-modal",attrs:{"centered":"","hide-footer":"","title":_vm.header_title}},[_c('b-row',{staticClass:"mt-2"},[_c('b-col',[_c('b-form-group',{attrs:{"label-cols":"3","label-cols-lg":"2","label-align-sm":"right","label":_vm.$t('subject'),"label-for":"input-subject_name"}},[_c('b-form-input',{attrs:{"id":"input-subject","placeholder":_vm.$t('please_enter_subject'),"state":!_vm.$v.nData.subject.$error,"aria-describedby":"input-lesson_subject-feedback","trim":""},model:{value:(_vm.$v.nData.subject.$model),callback:function ($$v) {_vm.$set(_vm.$v.nData.subject, "$model", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"$v.nData.subject.$model"}}),_vm._v(" "),_c('b-form-invalid-feedback',{attrs:{"id":"input-lesson_subject-feedback"}},[_vm._v("\n              "+_vm._s(this.$t("v_enter_Required"))+"\n            ")])],1),_vm._v(" "),_c('b-form-group',{attrs:{"label-cols":"3","label-cols-lg":"2","label-align-sm":"right","label":_vm.$t('admin.lessons.universities'),"label-for":"input-subject-universities"}},[_c('b-form-select',{attrs:{"id":"input-select-universities","options":_vm.universities_options},model:{value:(_vm.nData.uniId),callback:function ($$v) {_vm.$set(_vm.nData, "uniId", $$v)},expression:"nData.uniId"}}),_vm._v(" "),_c('b-form-invalid-feedback',{attrs:{"id":"input-lesson-universities-feedback"}},[_vm._v("\n              "+_vm._s(this.$t("v_enter_Required"))+"\n            ")])],1)],1)],1),_vm._v(" "),_c('b-row',{staticClass:"mt-2"},[_c('b-col',[_c('b-form-group',{staticClass:"mb-2",attrs:{"label-cols":"3","label-cols-lg":"2","label-align-sm":"right","label":_vm.$t('active'),"label-for":"checkbox-active"}},[_c('b-form-checkbox',{staticClass:"mt-2",attrs:{"id":"checkbox-edit-active","name":"checkbox-1","value":true,"unchecked-value":false},model:{value:(_vm.nData.active),callback:function ($$v) {_vm.$set(_vm.nData, "active", $$v)},expression:"nData.active"}})],1)],1)],1),_vm._v(" "),_c('b-row',{staticClass:"mt-2"},[_c('b-col',{staticClass:"float-right"},[_c('b-button',{staticClass:"m-center w-50 float-right",attrs:{"variant":"primary"},on:{"click":this.saveEdit}},[_vm._v("Save")])],1),_vm._v(" "),_c('b-col',{staticClass:"float-left"},[_c('b-button',{staticClass:"m-center w-50 float-left",attrs:{"variant":"primary"},on:{"click":this.cancel}},[_vm._v("Cancel")])],1)],1)],1),_vm._v(" "),_c('b-modal',{ref:"add-modal-cvs",attrs:{"size":"lg","centered":"","hide-footer":"","title":_vm.header_title}},[_c('b-row',{staticClass:"mt-2"},[_c('b-col',[_c('b-form-group',{attrs:{"label-cols":"3","label-cols-lg":"2","label-align-sm":"right","label":_vm.$t('admin.lessons.universities'),"label-for":"input-subject-universities"}},[_c('b-form-select',{attrs:{"id":"input-select-universities","options":_vm.universities_options},model:{value:(_vm.cvsData.uniId),callback:function ($$v) {_vm.$set(_vm.cvsData, "uniId", $$v)},expression:"cvsData.uniId"}}),_vm._v(" "),_c('b-form-invalid-feedback',{attrs:{"id":"input-lesson-universities-feedback"}},[_vm._v("\n            "+_vm._s(this.$t("v_enter_Required"))+"\n          ")])],1)],1)],1),_vm._v(" "),_c('b-row',{staticClass:"mt-2"},[_c('b-col',[_c('b-form-group',{staticClass:"mb-2",attrs:{"label-cols":"3","label-cols-lg":"2","label-align-sm":"right","label":_vm.$t('active'),"label-for":"checkbox-active"}},[_c('b-form-checkbox',{staticClass:"mt-2",attrs:{"id":"checkbox-edit-active","name":"checkbox-1","value":true,"unchecked-value":false},model:{value:(_vm.cvsData.active),callback:function ($$v) {_vm.$set(_vm.cvsData, "active", $$v)},expression:"cvsData.active"}})],1)],1)],1),_vm._v(" "),_c('b-row',{staticClass:"mt-2"},[_c('b-col',[_c('b-form-group',{staticClass:"mb-2",attrs:{"id":"input-group-4","label-cols":"3","label-cols-lg":"2","label-align-sm":"right","label":_vm.$t('admin.lessons.csv.upload.label'),"label-for":"input4"}},[_c('b-form-file',{class:{ 'is-invalid': _vm.$v.cvsData.selectedFile.$error },staticStyle:{"direction":"ltr"},attrs:{"browse-text":_vm.$t('browse'),"id":"input4","placeholder":_vm.$t('chooseFile'),"drop-placeholder":_vm.$t('dropFile')},model:{value:(_vm.$v.cvsData.selectedFile.$model),callback:function ($$v) {_vm.$set(_vm.$v.cvsData.selectedFile, "$model", $$v)},expression:"$v.cvsData.selectedFile.$model"}}),_vm._v(" "),(_vm.cvsData.selectedFile)?_c('div',{staticClass:"mt-3"},[_c('font-awesome-icon',{staticStyle:{"font-size":"x-large"},attrs:{"icon":['fas', 'file-alt']}}),_vm._v(" "),_c('span',{staticClass:"mx-2"},[_vm._v(_vm._s(_vm.cvsData.selectedFile ? Math.trunc(_vm.cvsData.selectedFile.size / 1024) + " KB" : ''))])],1):_vm._e()],1)],1)],1),_vm._v(" "),_c('b-row',{staticClass:"mt-2"},[_c('b-col',{staticClass:"float-right"},[_c('b-button',{staticClass:"m-center w-50 float-right",attrs:{"disabled":_vm.cvsSavingProgress,"variant":"primary"},on:{"click":this.saveCVSEdit}},[(_vm.cvsSavingProgress)?_c('b-spinner',{attrs:{"small":""}}):_vm._e(),_vm._v("\n          Save")],1)],1),_vm._v(" "),_c('b-col',{staticClass:"float-left"},[_c('b-button',{staticClass:"m-center w-50 float-left",attrs:{"variant":"primary"},on:{"click":this.closeCVS}},[_vm._v("Cancel")])],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/admin/lessons.vue?vue&type=template&id=cb53752c&scoped=true&

// EXTERNAL MODULE: external "vuelidate/lib/validators"
var validators_ = __webpack_require__(103);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/lessons.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  layout: 'AdminTemplate',
  name: "users",

  data() {
    return {
      cvsSavingProgress: false,
      file1: null,
      checkView: false,
      cvs_data: null,
      selected: null,
      options: ['list', 'of', 'options'],
      header_title: '',
      overlay_show: false,
      tabVisible: 0,
      pageIndex: 1,
      nData: {
        id: 0,
        subject: "",
        active: true,
        uniId: null
      },
      cvsData: {
        id: 0,
        active: true,
        uniId: null,
        selectedFile: null
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
      universities_options: [],
      searchData: {
        pageIndex: 0,
        pageCount: 0,
        perPage: 10,
        id: 0,
        subject: "",
        uniId: null,
        active: 2 // 2=all , 0= disable , 1= enable

      },
      t_fields: [{
        key: 'subject',
        label: 'Subject',
        sortable: true
      }, {
        key: 'code',
        label: 'Code',
        sortable: true
      }, {
        key: 'University',
        label: 'University',
        sortable: true
      }, {
        key: 'state',
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
    this.searchToggle();
    this.search();
    this.init();
  },

  validations: {
    nData: {
      subject: {
        required: validators_["required"]
      }
    },
    cvsData: {
      uniId: {
        required: validators_["required"]
      },
      selectedFile: {
        required: validators_["required"]
      }
    }
  },
  methods: {
    init() {
      this.$axios.post('/definitions/universityList', null).then(res => {
        var rows = res.data;
        this.universities_options = [];

        for (let i = 0; i < res.data.length; i++) {
          var row = rows[i];
          this.universities_options.push({
            value: row.id,
            text: row.name
          });
        }
      }).catch(error => {
        console.log(error);
      });
    },

    showModal() {
      this.$refs['edit-modal'].show();
    },

    hideModal(id) {
      this.$refs[id].hide();
    },

    addNewToggle() {
      this.header_title = this.$t('Add_new_lesson');
      this.add_visible = true;
      this.nData.id = 0;
      this.nData.subject = "";
      this.nData.active = true;
      this.$refs['edit-modal'].show();
    },

    addFromCVS() {
      this.header_title = this.$t('Add_new_lesson');
      this.add_visible = true;
      this.nData.id = 0;
      this.nData.subject = "";
      this.nData.active = true;
      this.$refs['add-modal-cvs'].show();
    },

    searchToggle() {
      this.header_title = this.$t('search');
      this.add_visible = false;
    },

    makeToast(variant = 'success', header = 'Message', msg = '') {
      this.$bvToast.toast(this.$t(msg), {
        title: header,
        variant: variant,
        solid: true
      });
    },

    search(index) {
      if (index > 0) this.searchData.pageIndex = index;else this.searchData.pageIndex = 0;
      this.overlay_show = true;
      this.$axios.post('/definitions/lessonList', this.searchData).then(res => {
        this.t_items = res.data.data;
        this.searchData.pageCount = res.data.count;
        this.overlay_show = false;
      }).catch(error => {
        this.overlay_show = false;
        this.makeToast("danger", "Error", "search_error");
        console.log(error);
      });
    },

    cancel() {
      this.nData.id = 0;
      this.hideModal('edit-modal');
    },

    closeCVS() {
      this.cvsData.cvs = null;
      this.cvsData.uniId = null;
      this.cvsData.id = 0;
      this.cvsData.active = true;
      this.hideModal('add-modal-cvs');
    },

    prepare_edit(item) {
      this.header_title = this.$t("edit_lesson");
      this.nData.id = item.id;
      this.nData.subject = item.subject;
      this.nData.active = item.state !== "Disable";
      this.nData.uniId = item.UniversityId;
      this.showModal();
    },

    saveEdit() {
      this.$v.$reset();
      this.$v.nData.$touch();

      if (this.$v.nData.$invalid) {
        console.log("vuelidate error");
      } else {
        if (this.nData.id > 0) {
          this.$axios.post('definitions/editLesson', this.nData).then(res => {
            this.hideModal("edit-modal");
            this.nData.active = true;
            this.overlay_show = false;
            this.search();
          }).catch(error => {
            this.overlay_show = false;
            this.makeToast("danger", "Error", "save_error");
            console.log(error);
          });
        } else {
          this.$axios.post('definitions/createLesson', this.nData).then(res => {
            //this.t_items = res.data
            this.nData.subject = "";
            this.nData.active = true;
            this.hideModal();
            this.search();
          }).catch(error => {
            this.overlay_show = false;
            this.makeToast("danger", "Error", error);
            console.log(error);
          });
        }

        this.nData.id = 0;
      }
    },

    deleteLesson(item) {
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
          this.$axios.post('/definitions/delete-lesson', {
            'lessonId': item.id
          }).then(() => {
            this.search(this.pageIndex);
          }).catch(error => {
            console.log(error);
          });
        }
      }).catch(error => {
        console.log(error);
      });
    },

    saveCVSEdit() {
      this.$v.$reset();
      this.$v.cvsData.$touch();

      if (this.$v.cvsData.$invalid) {
        console.log("vuelidate error");
      } else {
        this.busy = true;
        var formData = new FormData();
        if (this.cvsData.selectedFile !== null) formData.append("file", this.cvsData.selectedFile, this.cvsData.selectedFile.name);
        formData.append('id', this.cvsData.id);
        formData.append('active', this.cvsData.active);
        formData.append('uniId', this.cvsData.uniId);
        this.cvsSavingProgress = true;
        this.$axios.post('definitions/createLessonBulk', formData).then(res => {
          this.search();
          this.closeCVS();
        }).catch(error => {
          this.cvsSavingProgress = false;
          this.overlay_show = false;
          this.makeToast("danger", "Error", error);
          console.log(error);
        }).finally(m => {
          this.cvsSavingProgress = false;
        });
      }

      this.cvsData.id = 0;
    }

  }
});
// CONCATENATED MODULE: ./pages/admin/lessons.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_lessonsvue_type_script_lang_js_ = (lessonsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./pages/admin/lessons.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_lessonsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "cb53752c",
  "d6a544dc"
  
)

/* harmony default export */ var lessons = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=lessons.js.map
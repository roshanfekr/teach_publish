exports.ids = [56];
exports.modules = {

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/user-panel/subject.vue?vue&type=template&id=04ed4b5e&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('b-container', {
    staticClass: "container-padding",
    attrs: {
      "fluid": ""
    }
  }, [_c('b-row', {
    staticClass: "d-md-flex m-center"
  }, [_c('div', {
    staticClass: "px-xl-5 px-lg-5 px-md-3 px-sm-2 px-2 col-md-12 col-lg-12 col-xl-12"
  }, [_c('b-row', {
    staticClass: "float-left"
  }, [_c('h3', {
    staticClass: "mb-2"
  }, [_vm._v(_vm._s(_vm.$t('subjects.title')))])]), _vm._v(" "), _c('b-row', {
    staticClass: "w-25 float-left ml-4"
  }, [_c('b-button', {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.addModal",
      modifiers: {
        "addModal": true
      }
    }],
    staticClass: "btn btn-crl-mini btn-primary",
    on: {
      "click": _vm.addButton
    }
  }, [_c('svg', {
    staticClass: "bi bi-plus",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "24",
      "height": "24",
      "fill": "currentColor",
      "viewBox": "0 0 16 16"
    }
  }, [_c('path', {
    attrs: {
      "d": "M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
    }
  })])]), _vm._v(" "), _c('b-modal', {
    ref: "addModal",
    attrs: {
      "hide-header": "",
      "hide-footer": "",
      "centered": "",
      "id": "addModal"
    },
    model: {
      value: _vm.visible,
      callback: function ($$v) {
        _vm.visible = $$v;
      },
      expression: "visible"
    }
  }, [_c('b-form', {
    staticClass: "w-100 py-4",
    on: {
      "submit": function ($event) {
        $event.stopPropagation();
        $event.preventDefault();
        return _vm.onSubmit.apply(null, arguments);
      },
      "reset": _vm.onReset
    }
  }, [_c('b-form-row', [_vm.vSelectUnivercityVisable ? _c('b-form-group', {
    staticClass: "col-11",
    attrs: {
      "id": "input-group-university",
      "label": _vm.$t('subjects.university'),
      "label-for": "input-select-university"
    }
  }, [_c('v-select', {
    staticClass: "m-v-select2",
    attrs: {
      "id": "input-select-university",
      "placeholder": _vm.$t('tutors.universities.placeholder'),
      "reduce": x => x.host,
      "options": _vm.universities_options,
      "label": "text"
    },
    on: {
      "input": _vm.loadSubjects
    },
    scopedSlots: _vm._u([{
      key: "option",
      fn: function ({
        text
      }) {
        return [_vm._v("\n                        " + _vm._s(text) + "\n                      ")];
      }
    }], null, false, 1680328377),
    model: {
      value: _vm.uniHost,
      callback: function ($$v) {
        _vm.uniHost = $$v;
      },
      expression: "uniHost"
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm.formData.id === null ? _c('b-form-group', {
    staticClass: "col-11",
    attrs: {
      "id": "input-group-subject",
      "label": _vm.$t('subjects.subject'),
      "label-for": "input-subject"
    }
  }, [_c('v-select', {
    staticClass: "m-v-select2",
    class: {
      'is-invalid  d-block': _vm.$v.formData.lessonId.$error
    },
    attrs: {
      "id": "input-subject",
      "placeholder": "Select one subject",
      "reduce": x => x.id,
      "options": _vm.options,
      "label": "subject",
      "selectable": option => !option.hasOwnProperty('group')
    },
    scopedSlots: _vm._u([{
      key: "option",
      fn: function ({
        group,
        subject
      }) {
        return [group ? _c('div', {
          staticClass: "group"
        }, [_vm._v("\n                          " + _vm._s(group) + "\n                        ")]) : _vm._e(), _vm._v("\n                        " + _vm._s(subject) + "\n                      ")];
      }
    }], null, false, 1687498761),
    model: {
      value: _vm.formData.lessonId,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "lessonId", typeof $$v === 'string' ? $$v.trim() : $$v);
      },
      expression: "formData.lessonId"
    }
  }), _vm._v(" "), !_vm.$v.formData.lessonId.required ? _c('div', {
    staticClass: "invalid-feedback"
  }, [_vm._v("\n                      " + _vm._s(_vm.$t('subjects-lesson-required')) + "\n                    ")]) : _vm._e()], 1) : _vm._e(), _vm._v(" "), _c('b-form-group', {
    staticClass: "col-11",
    attrs: {
      "id": "input-group-grade",
      "label": _vm.$t('subjects.grade_title'),
      "label-for": "input-grade"
    }
  }, [_c('v-select', {
    staticClass: "m-v-select2",
    class: {
      'is-invalid  d-block': _vm.$v.formData.grade.$error
    },
    attrs: {
      "id": "input-grade",
      "placeholder": _vm.$t('subjects.grade_placeholder'),
      "options": _vm.gradeOptions,
      "reduce": x => x.value,
      "label": "text",
      "selectable": option => !option.hasOwnProperty('group')
    },
    model: {
      value: _vm.formData.grade,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "grade", typeof $$v === 'string' ? $$v.trim() : $$v);
      },
      expression: "formData.grade"
    }
  }), _vm._v(" "), !_vm.$v.formData.grade.required ? _c('div', {
    staticClass: "invalid-feedback"
  }, [_vm._v("\n                      " + _vm._s(_vm.$t('subjects.grade.required')) + "\n                    ")]) : _vm._e()], 1), _vm._v(" "), _c('b-form-group', {
    staticClass: "col-6",
    attrs: {
      "id": "input-group-year",
      "label": _vm.$t('subjects.year'),
      "label-for": "input-year"
    }
  }, [_c('v-select', {
    staticClass: "m-v-select2",
    attrs: {
      "id": "input-year",
      "placeholder": _vm.$t('subjects.year_placeholder'),
      "options": _vm.computedYears,
      "selectable": option => !option.hasOwnProperty('group')
    },
    model: {
      value: _vm.formData.year,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "year", typeof $$v === 'string' ? $$v.trim() : $$v);
      },
      expression: "formData.year"
    }
  })], 1), _vm._v(" "), _c('b-form-group', {
    staticClass: "col-11 align-self-end",
    attrs: {
      "id": "input-group-description",
      "label": _vm.$t('subjects.description'),
      "label-for": "input-description"
    }
  }, [_c('b-form-textarea', {
    attrs: {
      "placeholder": _vm.$t('desc'),
      "autocomplete": "off",
      "lazy": true,
      "id": "input-description"
    },
    model: {
      value: _vm.formData.description,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "description", typeof $$v === 'string' ? $$v.trim() : $$v);
      },
      expression: "formData.description"
    }
  })], 1), _vm._v(" "), _c('b-form-group', {
    staticClass: "col-11 align-self-end w-100",
    attrs: {
      "id": "input-group-price",
      "label": _vm.$t('subjects.price.label'),
      "label-for": "input-price"
    }
  }, [_c('div', {
    staticClass: "float-left d-block w-50"
  }, [_c('b-form-input', {
    staticClass: "w-100",
    class: {
      'is-invalid': _vm.$v.formData.price.$error
    },
    attrs: {
      "type": "number",
      "min": "0",
      "id": "input-price",
      "placeholder": _vm.$t('subjects.price.placeholder')
    },
    model: {
      value: _vm.formData.price,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "price", $$v);
      },
      expression: "formData.price"
    }
  }), _vm._v(" "), !_vm.$v.formData.price.required ? _c('div', {
    staticClass: "invalid-feedback"
  }, [_vm._v(_vm._s(_vm.$t('subjects.price.required')) + "\n                      ")]) : _vm._e()], 1), _vm._v(" "), _c('div', {
    staticClass: "float-left d-block mt-2 ml-1"
  }, [_vm._v("CAD")])]), _vm._v(" "), _c('p', {
    staticClass: "mt-5"
  }), _vm._v(" "), _c('b-form-row', {
    staticClass: "w-100"
  }, [_c('div', {
    staticClass: "p-2"
  }, [_c('b-button', {
    staticClass: "form-control btn btn-crl btn-primary submit px-3 btn-reg mr-2",
    attrs: {
      "type": "submit"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.$t('add')) + "\n                      ")]), _vm._v(" "), _c('b-button', {
    staticClass: "form-control btn btn-crl btn-primary submit px-3 btn-reg mr-2",
    on: {
      "click": _vm.cancel
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.$t('cancel')) + "\n                      ")])], 1)])], 1)], 1)], 1)], 1), _vm._v(" "), _c('b-row', {
    staticClass: "mt-4 w-100 mx-0"
  }, [_c('div', [_c('b-overlay', {
    attrs: {
      "show": _vm.loadOverlay,
      "variant": "white",
      "opacity": "0.5",
      "no-wrap": ""
    }
  }, [_vm._v("\n                Loading ...\n              ")])], 1), _vm._v(" "), _c('b-row', {
    staticClass: "mt-4 w-100 mx-0"
  }, _vm._l(_vm.items, function (item, index) {
    return _c('div', {
      key: item.id,
      staticClass: "col-lg-4 p-1"
    }, [_c('b-card', {
      staticClass: "h-100"
    }, [_c('b-overlay', {
      staticClass: "w-100",
      attrs: {
        "show": _vm.showDeleteOverlay(item.id),
        "variant": "transparent",
        "opacity": 0.8,
        "blur": "3px",
        "rounded": "sm"
      }
    }, [_c('div', {
      staticClass: "text-right"
    }, [_c('b-link', {
      staticClass: "mr-4",
      staticStyle: {
        "color": "#bfbfbf"
      },
      attrs: {
        "size": "sm"
      },
      on: {
        "click": function ($event) {
          return _vm.showDeleteComfirm(item, index);
        }
      }
    }, [_c('font-awesome-icon', {
      staticClass: "shop-icon",
      attrs: {
        "icon": ['fas', 'trash']
      }
    })], 1), _vm._v(" "), _c('b-link', {
      staticStyle: {
        "color": "#bfbfbf"
      },
      attrs: {
        "size": "sm"
      },
      on: {
        "click": function ($event) {
          return _vm.showEditDialog(item, index);
        }
      }
    }, [_c('font-awesome-icon', {
      staticClass: "shop-icon",
      attrs: {
        "icon": ['far', 'edit']
      }
    })], 1)], 1), _vm._v(" "), _c('div', {
      staticClass: "small font-weight-bold title-color"
    }, [_vm._v("\n                    " + _vm._s(_vm.$t("subjects.label")) + "\n                  ")]), _vm._v(" "), _c('div', [_vm._v("\n                    " + _vm._s(item.subject) + "\n                  ")]), _vm._v(" "), _c('hr', {
      staticClass: "my-2"
    }), _vm._v(" "), _c('div', {
      staticClass: "small font-weight-bold title-color"
    }, [_vm._v("\n                    " + _vm._s(_vm.$t("Status")) + "\n                  ")]), _vm._v(" "), _c('div', [item.acceptStatus === 1 ? _c('b-badge', {
      attrs: {
        "variant": "success"
      }
    }, [_vm._v(_vm._s(_vm.$t("accepted")))]) : _vm._e(), _vm._v(" "), item.acceptStatus === -1 ? _c('b-badge', {
      attrs: {
        "variant": "danger"
      }
    }, [_vm._v(_vm._s(_vm.$t("disable")))]) : _vm._e(), _vm._v(" "), item.acceptStatus === 0 || item.acceptStatus === null ? _c('b-badge', {
      attrs: {
        "variant": "warning"
      }
    }, [_vm._v("\n                      " + _vm._s(_vm.$t("pending")) + "\n                    ")]) : _vm._e()], 1), _vm._v(" "), _c('hr', {
      staticClass: "my-2"
    }), _vm._v(" "), _c('div', {
      staticClass: "small font-weight-bold title-color"
    }, [_vm._v("\n                    Grade\n                  ")]), _vm._v(" "), _c('div', [_vm._v("\n                    " + _vm._s(item.grade) + "\n                  ")]), _vm._v(" "), _c('hr', {
      staticClass: "my-2"
    }), _vm._v(" "), _c('div', {
      staticClass: "small font-weight-bold title-color"
    }, [_vm._v("\n                    Year\n                  ")]), _vm._v(" "), _c('div', [_vm._v("\n                    " + _vm._s(item.year) + "\n                  ")]), _vm._v(" "), _c('hr', {
      staticClass: "my-2"
    }), _vm._v(" "), _c('div', {
      staticClass: "small font-weight-bold title-color"
    }, [_vm._v("\n                    Price\n                  ")]), _vm._v(" "), _c('div', [_vm._v("\n                    " + _vm._s(item.price) + " CAD\n                  ")]), _vm._v(" "), _c('hr', {
      staticClass: "my-2"
    }), _vm._v(" "), _c('div', {
      staticClass: "small font-weight-bold title-color"
    }, [_vm._v("\n                    Description\n                  ")]), _vm._v(" "), _c('div', [_vm._v("\n                    " + _vm._s(item.description) + "\n                  ")])])], 1)], 1);
  }), 0)], 1)], 1)])], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/user-panel/subject.vue?vue&type=template&id=04ed4b5e&scoped=true&

// EXTERNAL MODULE: external "@fortawesome/fontawesome-svg-core"
var fontawesome_svg_core_ = __webpack_require__(4);

// EXTERNAL MODULE: external "@fortawesome/free-brands-svg-icons"
var free_brands_svg_icons_ = __webpack_require__(25);

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(1);

// EXTERNAL MODULE: external "vuelidate/lib/validators"
var validators_ = __webpack_require__(105);

// EXTERNAL MODULE: external "@fortawesome/free-regular-svg-icons"
var free_regular_svg_icons_ = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/user-panel/subject.vue?vue&type=script&lang=js&







fontawesome_svg_core_["library"].add(free_solid_svg_icons_["faTrash"]);
fontawesome_svg_core_["library"].add(free_regular_svg_icons_["faEdit"]);
/* harmony default export */ var subjectvue_type_script_lang_js_ = ({
  name: 'lessons',
  mounted() {
    this.getUserUniversity();
    this.loadUniversity();
    this.reloadTable();
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
  data() {
    return {
      vSelectUnivercityVisable: false,
      uniHost: "",
      university: null,
      universities_options: [],
      loadOverlay: true,
      overlays: [],
      addButtonVisible: true,
      loaded: false,
      visible: false,
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
      items: [],
      deleteData: {
        id: 0,
        lessonId: 0
      },
      formData: {
        id: null,
        lessonId: null,
        description: null,
        userId: 0,
        grade: null,
        year: null,
        price: null
      },
      errors: null
    };
  },
  validations: {
    formData: {
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
    }
  },
  methods: {
    async getUserUniversity() {
      this.$axios.post('/university/getUserUniversity', null).then(res => {
        let ret = res.data.ret;
        if (ret !== null) {
          this.university = ret;
          this.uniHost = this.university.host;
          this.loadSubjects(this.uniHost);
          this.vSelectUnivercityVisable = false;
        } else {
          this.vSelectUnivercityVisable = true;
        }
      }).catch(error => {
        console.log(error);
      });
    },
    showModal(id) {
      this.$refs[id].show();
    },
    hideModal(id) {
      this.$refs[id].hide();
    },
    showEditDialog(item, index) {
      this.editIndex = index;
      this.formData.id = item.id;
      this.formData.description = item.description;
      this.formData.grade = item.grade;
      this.formData.lessonId = item.lessonId;
      this.formData.year = item.year;
      this.formData.price = item.price;
      this.showModal("addModal");
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
    loadSubjects(subname) {
      this.lessonLoading = true;
      let data = {};
      data["host"] = this.uniHost;
      this.$axios.post('/definitions/getAllLessons', data).then(res => {
        this.options = res.data;
        this.lessonLoading = false;
      }).catch(error => {
        console.log(error);
      });
    },
    setOverlayValue(item, value) {
      this.overlays.filter(function (elem) {
        if (elem.key === item.id) elem.value = value;
      });
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
    reloadTable() {
      this.loaded = true;
      this.loadOverlay = true;
      this.$axios.post('subject/items', null).then(res => {
        this.loadOverlay = false;
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
        this.loadOverlay = false;
      });
    },
    addNewItem() {
      this.items.push({
        id: null,
        lessonId: -1,
        description: ''
      });
    },
    onReset(evt) {
      evt.preventDefault();
    },
    onSubmit(evt) {
      this.$v.$reset();
      this.errors = null;
      evt.preventDefault();
      this.$v.formData.$touch();
      if (this.$v.formData.$invalid) {
        console.log("vuelidate error");
      } else {
        this.loaded = true;
        let url = '/subject/save-tutor-subject-one';
        if (this.formData.id > 0) url = '/subject/save-edit-tutor-subject-one';
        this.$axios.post(url, this.formData).then(res => {
          if (this.formData.id > 0) {
            this.clear();
            this.$set(this.items, this.editIndex, res.data);
            this.hideModal("editModal");
            this.makeToast('success', 'Message', this.$t('done_successfully'));
            return;
          } else {
            this.items.push(res.data);
          }
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
        });
      }
    },
    addButton() {
      this.clear();
      this.addButtonVisible = false;
      this.visible = true;
    },
    cancel() {
      this.clear();
      this.addButtonVisible = true;
      this.visible = false;
    },
    clear() {
      this.formData.id = null;
      this.formData.userId = 0;
      this.formData.lessonId = null;
      this.formData.description = null;
      this.formData.year = null;
      this.formData.grade = null;
      this.visible = false;
      this.addButtonVisible = true;
      this.$v.$reset();
    },
    loadUniversity() {
      this.$axios.post('/definitions/universityList').then(res => {
        var rows = res.data;
        this.universities_options = [];
        for (let i = 0; i < rows.length; i++) {
          var row = rows[i];
          this.universities_options.push({
            host: row.host,
            text: row.name
          });
        }
      }).catch(error => {
        console.log(error);
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
              this.reloadTable();
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
          this.setOverlayValue(item, false);

          // An error occurred
          console.log(err);
        });
      } catch (e) {
        this.setOverlayValue(item, false);
        console.log(e);
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/user-panel/subject.vue?vue&type=script&lang=js&
 /* harmony default export */ var user_panel_subjectvue_type_script_lang_js_ = (subjectvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./pages/user-panel/subject.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  user_panel_subjectvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "04ed4b5e",
  "92f658dc"
  
)

/* harmony default export */ var subject = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=subject.js.map
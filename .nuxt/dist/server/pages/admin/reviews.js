exports.ids = [18];
exports.modules = {

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/reviews.vue?vue&type=template&id=9bae9300&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('b-container', [_c('b-row', {
    staticClass: "d-md-flex col-md-12 col-lg-12 m-center w-100",
    attrs: {
      "id": "toolbar"
    }
  }, [_c('b-col', [_c('b-card', {
    staticClass: "pb-3 mb-1 w-100",
    attrs: {
      "no-body": ""
    }
  }, [_c('b-card-header', {
    attrs: {
      "header-tag": "header",
      "role": "tab"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "mt-4"
  }, [_c('b-row', {
    staticClass: "mt-2"
  }, [_c('b-col', [_c('b-form-group', {
    attrs: {
      "label-cols": "4",
      "label-cols-lg": "2",
      "label-size": "sm",
      "label-align-sm": "right",
      "label": _vm.$t('lesson'),
      "label-for": "input-lesson"
    }
  }, [_c('v-select', {
    staticClass: "m-v-select2 w-75",
    attrs: {
      "placeholder": "Select one subject",
      "reduce": x => x.id,
      "options": _vm.subjectOptions,
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
        }, [_vm._v("\n                        " + _vm._s(group) + "\n                      ")]) : _vm._e(), _vm._v("\n                      " + _vm._s(subject) + "\n                    ")];
      }
    }]),
    model: {
      value: _vm.searchData.lessonId,
      callback: function ($$v) {
        _vm.$set(_vm.searchData, "lessonId", typeof $$v === 'string' ? $$v.trim() : $$v);
      },
      expression: "searchData.lessonId"
    }
  })], 1)], 1), _vm._v(" "), _c('b-col', [_c('b-form-group', {
    staticClass: "w-75",
    attrs: {
      "label-cols": "4",
      "label-cols-lg": "2",
      "label-align-sm": "right",
      "label-size": "sm",
      "label": _vm.$t('Status'),
      "label-for": "input-acceptStatus"
    }
  }, [_c('b-form-select', {
    staticClass: "pt-2 w-75",
    attrs: {
      "id": "input-acceptStatus",
      "options": _vm.active_options
    },
    model: {
      value: _vm.searchData.acceptStatus,
      callback: function ($$v) {
        _vm.$set(_vm.searchData, "acceptStatus", $$v);
      },
      expression: "searchData.acceptStatus"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('b-row', {
    staticClass: "mt-2"
  }, [_c('b-col', [_c('b-form-group', {
    attrs: {
      "label-cols": "4",
      "label-cols-lg": "2",
      "label-size": "sm",
      "label-align-sm": "right",
      "label": _vm.$t('tutorName'),
      "label-for": "input-tutorName"
    }
  }, [_c('b-form-input', {
    staticClass: "pt-2 w-75",
    attrs: {
      "id": "input-tutorName"
    },
    model: {
      value: _vm.searchData.tutorName,
      callback: function ($$v) {
        _vm.$set(_vm.searchData, "tutorName", $$v);
      },
      expression: "searchData.tutorName"
    }
  })], 1)], 1), _vm._v(" "), _c('b-col', [_c('b-form-group', {
    staticClass: "w-75",
    attrs: {
      "label-cols": "4",
      "label-align-sm": "right",
      "label-size": "sm",
      "label": _vm.$t('tutorLname'),
      "label-for": "input-tutorLname"
    }
  }, [_c('b-form-input', {
    staticClass: "pt-2",
    attrs: {
      "id": "input-tutorLname"
    },
    model: {
      value: _vm.searchData.tutorLname,
      callback: function ($$v) {
        _vm.$set(_vm.searchData, "tutorLname", $$v);
      },
      expression: "searchData.tutorLname"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('b-row', {
    staticClass: "mt-2"
  }, [_c('b-button', {
    staticClass: "m-center w-25",
    attrs: {
      "variant": "primary"
    },
    on: {
      "click": this.search
    }
  }, [_vm._v("Search")])], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c('b-row', {
    staticClass: "d-md-flex col-md-12 col-lg-12 m-center mt-1"
  }, [_c('b-overlay', {
    attrs: {
      "show": _vm.overlay_show,
      "variant": "white",
      "no-wrap": ""
    }
  }), _vm._v(" "), _c('b-row', {
    staticClass: "d-md-flex col-md-12 col-lg-12 m-center mt-3"
  }, [_c('b-col', [_c('b-pagination', {
    attrs: {
      "total-rows": this.searchData.rowCount,
      "per-page": this.searchData.perPage,
      "first-text": "First",
      "prev-text": "Prev",
      "next-text": "Next",
      "last-text": "Last"
    },
    on: {
      "change": _vm.search
    },
    model: {
      value: _vm.pageIndex,
      callback: function ($$v) {
        _vm.pageIndex = $$v;
      },
      expression: "pageIndex"
    }
  })], 1)], 1), _vm._v(" "), _c('b-row', {
    staticClass: "d-md-flex col-md-12 col-lg-12 m-center mt-1"
  }, [_c('b-col', [_c('b-table', {
    attrs: {
      "head-variant": "light",
      "striped": "",
      "hover": "",
      "items": _vm.t_items,
      "fields": _vm.t_fields
    },
    scopedSlots: _vm._u([{
      key: "cell(acceptStatus)",
      fn: function (row) {
        return [row.item.acceptStatus === 0 ? _c('b-badge', {
          attrs: {
            "variant": "warning"
          }
        }, [_vm._v(" " + _vm._s(_vm.$t("Pending")))]) : _vm._e(), _vm._v(" "), row.item.acceptStatus === 1 ? _c('b-badge', {
          attrs: {
            "variant": "success"
          }
        }, [_vm._v(" " + _vm._s(_vm.$t("Accepted")))]) : _vm._e(), _vm._v(" "), row.item.acceptStatus === 2 ? _c('b-badge', {
          attrs: {
            "variant": "danger"
          }
        }, [_vm._v(" " + _vm._s(_vm.$t("Rejected")))]) : _vm._e()];
      }
    }, {
      key: "cell(show_details)",
      fn: function (row) {
        return [_c('b-button', {
          staticClass: "mr-2",
          attrs: {
            "size": "sm"
          },
          on: {
            "click": row.toggleDetails
          }
        }, [_vm._v("\n                " + _vm._s(row.detailsShowing ? 'Hide' : 'Show') + " Comment\n              ")])];
      }
    }, {
      key: "cell(verify_action)",
      fn: function (row) {
        return [_c('b-button', {
          ref: 'btnEdit' + row.index,
          attrs: {
            "variant": "info",
            "size": "sm"
          },
          on: {
            "click": function ($event) {
              return _vm.verify(row);
            }
          }
        }, [_vm._v("Verify")])];
      }
    }, {
      key: "cell(reject_action)",
      fn: function (row) {
        return [_c('b-button', {
          ref: 'btnEdit' + row.index,
          attrs: {
            "variant": "info",
            "size": "sm"
          },
          on: {
            "click": function ($event) {
              return _vm.reject(row);
            }
          }
        }, [_vm._v("Reject")])];
      }
    }, {
      key: "row-details",
      fn: function (row) {
        return [_c('b-card', [_c('b-row', {
          staticClass: "mb-2"
        }, [_c('b-col', {
          staticClass: "text-sm-right",
          attrs: {
            "sm": "3"
          }
        }, [_c('b', [_vm._v("Comment:")])]), _vm._v(" "), _c('b-col', [_vm._v(_vm._s(row.item.comment))])], 1)], 1)];
      }
    }])
  })], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/reviews.vue?vue&type=template&id=9bae9300&scoped=true&

// EXTERNAL MODULE: external "vuelidate/lib/validators"
var validators_ = __webpack_require__(105);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/reviews.vue?vue&type=script&lang=js&

/* harmony default export */ var reviewsvue_type_script_lang_js_ = ({
  layout: 'AdminTemplate',
  name: "users",
  data() {
    return {
      subjectOptions: [],
      selected: null,
      // options: ['list', 'of', 'options'],
      header_title: '',
      overlay_show: false,
      tabVisible: 0,
      pageIndex: 1,
      active_options: [{
        value: 0,
        text: this.$t('pending')
      }, {
        value: 1,
        text: this.$t('accept')
      }, {
        value: 2,
        text: this.$t('reject')
      }, {
        value: -1,
        text: this.$t('all')
      }],
      searchData: {
        pageIndex: 0,
        rowCount: 0,
        perPage: 10,
        id: 0,
        lessonId: 0,
        acceptStatus: 0,
        // 0=unverified , 1= verified , 2= rejected
        tutorId: 0,
        tutorName: null,
        tutorLname: null
      },
      t_fields: [{
        key: 'tutor.name',
        label: 'Tutor Name',
        sortable: true
      }, {
        key: 'tutor.lastname',
        label: 'Tutor LName',
        sortable: true
      }, {
        key: 'acceptStatus',
        label: 'Status',
        sortable: false
      },
      // {
      //   key: 'comment',
      //   label: 'Comment',
      //   sortable: false,
      // },
      {
        key: 'show_details',
        label: 'Comment',
        sortable: false
      }, {
        key: 'verify_action',
        label: 'Action',
        sortable: false
      }, {
        key: 'reject_action',
        label: 'Action',
        sortable: false
      }],
      t_items: []
    };
  },
  mounted() {
    this.loadSubjects();
    this.search();
  },
  validations: {
    nData: {
      subject: {
        required: validators_["required"]
      }
    }
  },
  methods: {
    verify(row) {
      try {
        let item = row.item;
        let data = {
          id: item.id,
          acceptStatus: 1
        };
        this.$axios.post('/review/changeAcceptStatus', data).then(res => {
          if (res.data) this.makeToast("success", "Success", this.$t("verified_msg"));else this.makeToast("danger", "Failed", "verify_failed_msg");
        }).catch(error => {
          this.overlay_show = false;
          this.makeToast("danger", "Error", "verify_failed_msg");
          console.log(error);
        });
      } catch (e) {}
    },
    reject(row) {
      try {
        let item = row.item;
        let data = {
          id: item.id,
          acceptStatus: 2
        };
        this.$axios.post('/review/changeAcceptStatus', data).then(res => {
          if (res.data) this.makeToast("success", "Success", this.$t("reject_msg"));else this.makeToast("danger", "Failed", "reject_failed_msg");
        }).catch(error => {
          this.overlay_show = false;
          this.makeToast("danger", "Error", "reject_failed_msg");
          console.log(error);
        });
      } catch (e) {}
    },
    loadSubjects() {
      this.$axios.post('/definitions/getAllLessons').then(res => {
        this.subjectOptions = res.data;
      }).catch(error => {
        if (error.response.data.errors) {
          this.errors = error.response.data.errors;
        }
      });
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
      this.$axios.post('/review/getReviewSearch', this.searchData).then(res => {
        this.t_items = res.data.rows;
        // for (let i = 0; i < res.data.rows; i++) {
        //   let row = res.data.rows[]
        // }
        this.searchData.rowCount = res.data.row_count;
        this.overlay_show = false;
      }).catch(error => {
        this.overlay_show = false;
        this.makeToast("danger", "Error", "search_error");
        console.log(error);
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/admin/reviews.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_reviewsvue_type_script_lang_js_ = (reviewsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./pages/admin/reviews.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_reviewsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "9bae9300",
  "36f88c04"
  
)

/* harmony default export */ var reviews = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=reviews.js.map
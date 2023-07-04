exports.ids = [13];
exports.modules = {

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/language-manager.vue?vue&type=template&id=008355ce&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "w-100"
  }, [_c('b-container', {
    attrs: {
      "fluid": ""
    }
  }, [_c('b-row', [_c('b-col', {
    staticClass: "my-1",
    attrs: {
      "lg": "4"
    }
  }, [_c('b-form-group', {
    staticClass: "mb-0",
    attrs: {
      "label": "Filter",
      "label-for": "filter-input",
      "label-cols-sm": "3",
      "label-align-sm": "right",
      "label-size": "sm"
    }
  }, [_c('b-input-group', {
    attrs: {
      "size": "sm"
    }
  }, [_c('b-form-input', {
    attrs: {
      "id": "filter-input",
      "type": "search",
      "placeholder": "Type to Search"
    },
    model: {
      value: _vm.filter,
      callback: function ($$v) {
        _vm.filter = $$v;
      },
      expression: "filter"
    }
  }), _vm._v(" "), _c('b-input-group-append', [_c('b-button', {
    attrs: {
      "disabled": !_vm.filter
    },
    on: {
      "click": function ($event) {
        _vm.filter = '';
      }
    }
  }, [_vm._v("Clear")])], 1)], 1)], 1)], 1), _vm._v(" "), _c('b-col', {
    staticClass: "my-1",
    attrs: {
      "lg": "4"
    }
  }, [_c('b-form-group', {
    staticClass: "mb-0",
    attrs: {
      "label": "Filter On",
      "description": "Leave all unchecked to filter on all data",
      "label-cols-sm": "3",
      "label-align-sm": "right",
      "label-size": "sm"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        ariaDescribedby
      }) {
        return [_c('b-form-checkbox-group', {
          staticClass: "mt-1",
          attrs: {
            "aria-describedby": ariaDescribedby
          },
          model: {
            value: _vm.filterOn,
            callback: function ($$v) {
              _vm.filterOn = $$v;
            },
            expression: "filterOn"
          }
        }, [_c('b-form-checkbox', {
          attrs: {
            "value": "key"
          }
        }, [_vm._v("Key")]), _vm._v(" "), _c('b-form-checkbox', {
          attrs: {
            "value": "value"
          }
        }, [_vm._v("Value")])], 1)];
      }
    }])
  })], 1), _vm._v(" "), _c('b-col', {
    staticClass: "my-1",
    attrs: {
      "lg": "4"
    }
  }, [_c('b-button', {
    attrs: {
      "size": "sm"
    },
    on: {
      "click": _vm.saveAndReload
    }
  }, [_vm._v("Reload language Now")])], 1)], 1), _vm._v(" "), _c('b-table', {
    attrs: {
      "items": _vm.items,
      "fields": _vm.fields,
      "filter": _vm.filter,
      "filter-included-fields": _vm.filterOn,
      "stacked": "md",
      "show-empty": "",
      "small": ""
    },
    on: {
      "filtered": _vm.onFiltered
    },
    scopedSlots: _vm._u([{
      key: "cell(index)",
      fn: function (row) {
        return [_vm._v("\n        " + _vm._s(row.index + 1) + "\n      ")];
      }
    }, {
      key: "cell(name)",
      fn: function (row) {
        return [_vm._v("\n        " + _vm._s(row.value.first) + " " + _vm._s(row.value.last) + "\n      ")];
      }
    }, {
      key: "cell(actions)",
      fn: function (row) {
        return [_c('b-button', {
          staticClass: "mr-1",
          attrs: {
            "size": "sm"
          },
          on: {
            "click": function ($event) {
              return _vm.info(row.item, row.index, $event.target);
            }
          }
        }, [_vm._v("\n          Edit\n        ")])];
      }
    }])
  }), _vm._v(" "), _c('b-modal', {
    attrs: {
      "id": "lang-modal",
      "centered": "",
      "title": _vm.infoModal.title,
      "ok-title": "Save"
    },
    on: {
      "ok": _vm.saveLanguage,
      "hide": _vm.resetInfoModal
    }
  }, [_c('b-form-group', {
    attrs: {
      "id": "input-g-key",
      "label": "Key",
      "label-for": "input-key"
    }
  }, [_c('b-form-input', {
    staticClass: "w-100",
    attrs: {
      "disabled": "",
      "id": "input-value"
    },
    model: {
      value: _vm.infoModal.key,
      callback: function ($$v) {
        _vm.$set(_vm.infoModal, "key", $$v);
      },
      expression: "infoModal.key"
    }
  })], 1), _vm._v(" "), _c('b-form-group', {
    attrs: {
      "id": "input-g-value",
      "label": "Value",
      "label-for": "input-value"
    }
  }, [_c('b-form-textarea', {
    staticClass: "w-100",
    attrs: {
      "id": "input-value"
    },
    model: {
      value: _vm.infoModal.value,
      callback: function ($$v) {
        _vm.$set(_vm.infoModal, "value", $$v);
      },
      expression: "infoModal.value"
    }
  })], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/language-manager.vue?vue&type=template&id=008355ce&scoped=true&

// EXTERNAL MODULE: external "vuelidate/lib/validators"
var validators_ = __webpack_require__(105);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/language-manager.vue?vue&type=script&lang=js&

/* harmony default export */ var language_managervue_type_script_lang_js_ = ({
  layout: 'AdminTemplate',
  name: "users",
  data() {
    return {
      items: [],
      fields: [{
        key: 'index',
        label: 'index',
        sortable: false,
        thStyle: {
          width: '80px'
        }
      }, {
        key: 'key',
        label: 'Key',
        sortable: true
      }, {
        key: 'value',
        label: 'Value',
        sortable: true
      }, {
        key: 'actions',
        label: 'Actions',
        sortable: false,
        thStyle: {
          width: '100px'
        }
      }],
      filter: null,
      filterOn: [],
      infoModal: {
        title: '',
        id: '',
        key: '',
        value: ''
      }
    };
  },
  mounted() {
    this.readFiles();
    this.getAll();
  },
  methods: {
    info(item, index, button) {
      this.infoModal.title = `Row index: ${index + 1}`;
      this.infoModal.id = item.id;
      this.infoModal.key = item.key;
      this.infoModal.value = item.value;
      this.$root.$emit('bv::show::modal', 'lang-modal', button);
    },
    resetInfoModal() {
      this.infoModal.id = 0;
      this.infoModal.title = '';
      this.infoModal.key = '';
      this.infoModal.value = '';
    },
    saveLanguage() {
      this.$axios.post("language/saveLanguage", this.infoModal).then(res => {
        let idx = this.items.findIndex(function (obj) {
          return obj.id === res.data.id;
        });
        this.$set(this.items, idx, res.data);
        console.log(res.data);
      }).catch(err => {});
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    saveAndReload() {
      this.$axios.post("language/saveAndReload").then(res => {
        console.log(res.data);
      }).catch(err => {});
    },
    getAll() {
      this.$axios.post("language/getAll").then(res => {
        console.log(res.data);
        this.items = res.data;
      }).catch(err => {});
    },
    readFiles() {
      this.$axios.post("language/readFiles").then(res => {
        console.log(res.data);
      }).catch(err => {});
    }
  }
});
// CONCATENATED MODULE: ./pages/admin/language-manager.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_language_managervue_type_script_lang_js_ = (language_managervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./pages/admin/language-manager.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_language_managervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "008355ce",
  "1974bf36"
  
)

/* harmony default export */ var language_manager = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=language-manager.js.map
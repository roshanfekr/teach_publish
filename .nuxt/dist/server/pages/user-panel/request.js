exports.ids = [53];
exports.modules = {

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(212);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("3a926eab", content, true, context)
};

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_request_vue_vue_type_style_index_0_id_190cf49c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(141);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_request_vue_vue_type_style_index_0_id_190cf49c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_request_vue_vue_type_style_index_0_id_190cf49c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_request_vue_vue_type_style_index_0_id_190cf49c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_request_vue_vue_type_style_index_0_id_190cf49c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(213);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.i(___CSS_LOADER_AT_RULE_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\n.social-media .social-icon[data-v-190cf49c] {\r\n  display: block;\r\n  width: 40px;\r\n  height: 40px;\r\n  background: transparent;\r\n  color: white;\r\n  border: 1px solid rgba(255, 255, 255, 1);\r\n  font-size: 16px;\r\n  margin-right: 5px;\r\n  border-radius: 50%;\n}\n.social-media .social-icon[data-v-190cf49c]:hover, .social-media .social-icon[data-v-190cf49c]:focus {\r\n  background: #fff;\r\n  color: var(--color2);\n}\r\n\r\n", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');*/\n.adiv {\r\n  background: #04CB28;\r\n  border-radius: 15px;\r\n  border-bottom-right-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n  font-size: 16px;\r\n  height: 46px\n}\n.chat {\r\n  border: none;\r\n  background: #E2FFE8;\r\n  font-size: 16px;\r\n  border-radius: 20px\n}\n.bg-white {\r\n  border: 1px solid #E7E7E9;\r\n  font-size: 16px;\r\n  border-radius: 20px;\n}\n.myvideo img {\r\n  border-radius: 20px\n}\n.dot {\r\n  font-weight: bold\n}\r\n/* Chat containers */\r\n/*.container {*/\r\n/*  border: 2px solid #dedede;*/\r\n/*  background-color: #f1f1f1;*/\r\n/*  border-radius: 5px;*/\r\n/*  padding: 10px;*/\r\n/*  margin: 10px 0;*/\r\n/*}*/\r\n\r\n/*!* Darker chat container *!*/\r\n/*.darker {*/\r\n/*  border-color: #ccc;*/\r\n/*  background-color: #ddd;*/\r\n/*}*/\r\n\r\n/*!* Clear floats *!*/\r\n/*.container::after {*/\r\n/*  content: \"\";*/\r\n/*  clear: both;*/\r\n/*  display: table;*/\r\n/*}*/\r\n\r\n/*!* Style images *!*/\r\n/*.container img {*/\r\n/*  float: left;*/\r\n/*  max-width: 60px;*/\r\n/*  width: 100%;*/\r\n/*  margin-right: 20px;*/\r\n/*  border-radius: 50%;*/\r\n/*}*/\r\n\r\n/* Style the right image */\n.right {\r\n  float: right;\r\n  margin-left: 20px;\r\n  margin-right:0;\n}\r\n\r\n/* Style time text */\n.time-right {\r\n  float: right;\r\n  color: #aaa;\n}\r\n\r\n/* Style time text */\n.time-left {\r\n  float: left;\r\n  color: #999;\n}\r\n\r\n\r\n", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/user-panel/request.vue?vue&type=template&id=190cf49c&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('b-container', {
    attrs: {
      "fluid": ""
    }
  }, [_vm.visibleMain ? _c('div', [_c('div', {
    staticStyle: {
      "height": "15px"
    }
  }, [_vm.visibleProgress ? _c('b-spinner', {
    attrs: {
      "small": "",
      "label": "Small Spinner",
      "type": "grow"
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('b-row', [_c('b-col', {
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
            "value": "viewName"
          }
        }, [_vm._v("Name")]), _vm._v(" "), _c('b-form-checkbox', {
          attrs: {
            "value": "text"
          }
        }, [_vm._v("Message")])], 1)];
      }
    }], null, false, 3375923224)
  })], 1)], 1), _vm._v(" "), _c('b-overlay', {
    attrs: {
      "id": "overlay-background",
      "show": _vm.showChatMessagesOverlay,
      "variant": "white",
      "opacity": 0.81,
      "rounded": "sm"
    }
  }, [_c('b-table', {
    staticClass: "mt-3",
    attrs: {
      "hover": "",
      "fields": _vm.fields,
      "filter": _vm.filter,
      "items": _vm.request_rows,
      "filter-included-fields": _vm.filterOn,
      "show-empty": "",
      "tbody-tr-class": _vm.rowClass
    },
    on: {
      "row-clicked": _vm.onclick
    },
    scopedSlots: _vm._u([{
      key: "cell(viewName)",
      fn: function (row) {
        return [_c('b-avatar', {
          attrs: {
            "size": "3rem",
            "src": row.item.image_ru != null ? '/' + row.item.image_ru : '',
            "alt": "Cropped Image"
          }
        }), _vm._v(" "), _c('span', [_vm._v(" " + _vm._s(row.item.viewName + " " + row.item.viewLname))])];
      }
    }, {
      key: "cell(test)",
      fn: function (row) {
        return [_c('span', [_vm._v(_vm._s(row.item.text + " ") + " "), row.item.unread > 0 ? _c('b-badge', {
          attrs: {
            "variant": "success"
          }
        }, [_vm._v(_vm._s(row.item.unread))]) : _vm._e()], 1)];
      }
    }, {
      key: "cell(updatedAt)",
      fn: function (row) {
        return [_c('i', [_vm._v(_vm._s(_vm.cDate(row.item.updatedAt)))])];
      }
    }], null, false, 933988337)
  })], 1)], 1) : _vm._e(), _vm._v(" "), !_vm.visibleMain ? _c('div', {
    staticClass: "w-100 h-100"
  }, [_c('b-button', {
    staticClass: "mt-2 mb-2",
    attrs: {
      "variant": "light"
    },
    on: {
      "click": _vm.back
    }
  }, [_c('svg', {
    staticClass: "bi bi-arrow-left-circle",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "16",
      "height": "16",
      "fill": "currentColor",
      "viewBox": "0 0 16 16"
    }
  }, [_c('path', {
    attrs: {
      "fill-rule": "evenodd",
      "d": "M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "card",
    staticStyle: {
      "min-height": "400px"
    }
  }, [_c('div', {
    staticStyle: {
      "max-height": "400px",
      "overflow-y": "auto"
    },
    attrs: {
      "id": "chatbox"
    }
  }, _vm._l(_vm.messagesHtml, function (item) {
    return _c('div', [item.receiverId === _vm.userId && item.type === 0 ? _c('div', {
      staticClass: "d-flex flex-row p-3 w-100",
      attrs: {
        "id": 'msg_' + item.id
      }
    }, [_c('b-avatar', {
      attrs: {
        "size": "3rem",
        "src": _vm.currentChatRoom.image_ru != null ? '/' + _vm.currentChatRoom.image_ru : '',
        "alt": "Cropped Image"
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "chat ml-2 p-3",
      staticStyle: {
        "white-space": "pre"
      }
    }, [_vm._v(" " + _vm._s(item.text) + "\n\n                    "), _c('span', {
      staticClass: "time-right"
    }, [_vm._v(_vm._s(item.createdAt != null ? item.createdAt : ""))])])], 1) : _vm._e(), _vm._v(" "), item.receiverId !== _vm.userId && item.type === 0 ? _c('div', {
      staticClass: "d-flex flex-row p-3 w-100 float-right",
      attrs: {
        "id": 'msg_' + item.id
      }
    }, [_c('div', {
      staticClass: "bg-white mr-2 p-3 w-100 text-right"
    }, [_c('span', {
      staticClass: "text-muted",
      staticStyle: {
        "white-space": "pre"
      }
    }, [_vm._v(" " + _vm._s(item.text) + " ")]), _vm._v(" "), _c('span', {
      staticClass: "time-left"
    }, [_vm._v(_vm._s(item.createdAt != null ? item.createdAt : "") + "\n                    "), item.viewed === 0 || item.viewed === null ? _c('svg', {
      staticClass: "bi bi-check",
      attrs: {
        "xmlns": "http://www.w3.org/2000/svg",
        "width": "16",
        "height": "16",
        "fill": "currentColor",
        "viewBox": "0 0 16 16"
      }
    }, [_c('path', {
      attrs: {
        "d": "M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"
      }
    })]) : _vm._e(), _vm._v(" "), item.viewed === true ? _c('svg', {
      staticClass: "bi bi-check-all",
      attrs: {
        "xmlns": "http://www.w3.org/2000/svg",
        "width": "16",
        "height": "16",
        "fill": "currentColor",
        "viewBox": "0 0 16 16"
      }
    }, [_c('path', {
      attrs: {
        "d": "M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z"
      }
    })]) : _vm._e()])]), _vm._v(" "), _c('b-avatar', {
      staticClass: "right",
      attrs: {
        "size": "3rem",
        "src": _vm.currentChatRoom.image_su != null ? '/' + _vm.currentChatRoom.image_su : '',
        "alt": "Cropped Image"
      }
    })], 1) : _vm._e(), _vm._v(" "), item.receiverId !== _vm.userId && item.type === 1 ? _c('div', {
      staticClass: "d-flex flex-row p-3 w-100 float-right",
      attrs: {
        "id": 'msg_' + item.id
      }
    }, [_c('div', {
      staticClass: "bg-white mr-2 p-3 w-100 text-right"
    }, [_c('span', {
      staticClass: "text-muted",
      staticStyle: {
        "white-space": "pre"
      }
    }, [_vm._v(" " + _vm._s(item.text) + " ")]), _vm._v(" "), _c('span', {
      staticClass: "time-left"
    }, [_vm._v(_vm._s(item.createdAt != null ? item.createdAt : "") + "\n                    "), item.viewed === 0 || item.viewed === null ? _c('svg', {
      staticClass: "bi bi-check",
      attrs: {
        "xmlns": "http://www.w3.org/2000/svg",
        "width": "16",
        "height": "16",
        "fill": "currentColor",
        "viewBox": "0 0 16 16"
      }
    }, [_c('path', {
      attrs: {
        "d": "M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"
      }
    })]) : _vm._e(), _vm._v(" "), item.viewed === true ? _c('svg', {
      staticClass: "bi bi-check-all",
      attrs: {
        "xmlns": "http://www.w3.org/2000/svg",
        "width": "16",
        "height": "16",
        "fill": "currentColor",
        "viewBox": "0 0 16 16"
      }
    }, [_c('path', {
      attrs: {
        "d": "M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z"
      }
    })]) : _vm._e()])]), _vm._v(" "), _c('b-avatar', {
      staticClass: "right",
      attrs: {
        "size": "3rem",
        "src": _vm.currentChatRoom.image_su != null ? '/' + _vm.currentChatRoom.image_su : '',
        "alt": "Cropped Image"
      }
    })], 1) : _vm._e()]);
  }), 0)]), _vm._v(" "), _c('div', {
    staticClass: "p-3",
    staticStyle: {
      "width": "100%"
    }
  }, [_c('b-overlay', {
    attrs: {
      "show": _vm.busy,
      "rounded": "lg",
      "opacity": "0.6"
    },
    scopedSlots: _vm._u([{
      key: "overlay",
      fn: function () {
        return [_c('div', {
          staticClass: "d-flex align-items-center"
        }, [_c('b-spinner', {
          attrs: {
            "small": "",
            "type": "grow",
            "variant": "secondary"
          }
        }), _vm._v(" "), _c('b-spinner', {
          attrs: {
            "type": "grow",
            "variant": "dark"
          }
        }), _vm._v(" "), _c('b-spinner', {
          attrs: {
            "small": "",
            "type": "grow",
            "variant": "secondary"
          }
        }), _vm._v(" "), _c('span', {
          staticClass: "sr-only"
        }, [_vm._v("Please wait...")])], 1)];
      },
      proxy: true
    }], null, false, 1445552771)
  }, [_vm._v(" "), _c('b-input-group', {
    attrs: {
      "size": "lg"
    }
  }, [_c('b-form-textarea', {
    attrs: {
      "id": "textarea",
      "placeholder": "Enter Message...",
      "rows": "3",
      "max-rows": "6"
    },
    model: {
      value: _vm.msgTextBox,
      callback: function ($$v) {
        _vm.msgTextBox = $$v;
      },
      expression: "msgTextBox"
    }
  }), _vm._v(" "), _c('b-input-group-append', [_c('b-button', {
    directives: [{
      name: "scroll-to",
      rawName: "v-scroll-to",
      value: '#msg_8',
      expression: "'#msg_8'"
    }],
    ref: "button",
    attrs: {
      "disabled": _vm.busy,
      "variant": "primary"
    },
    on: {
      "click": _vm.sendMessage
    }
  }, [_vm._v("\n              Send\n            ")])], 1)], 1)], 1)], 1)], 1) : _vm._e()]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/user-panel/request.vue?vue&type=template&id=190cf49c&scoped=true&

// EXTERNAL MODULE: external "url"
var external_url_ = __webpack_require__(55);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-svg-core"
var fontawesome_svg_core_ = __webpack_require__(4);

// EXTERNAL MODULE: external "@fortawesome/free-brands-svg-icons"
var free_brands_svg_icons_ = __webpack_require__(25);

// EXTERNAL MODULE: external "@fortawesome/free-regular-svg-icons"
var free_regular_svg_icons_ = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/user-panel/request.vue?vue&type=script&lang=js&





fontawesome_svg_core_["library"].add(free_regular_svg_icons_["faQuestionCircle"]);
fontawesome_svg_core_["library"].add(free_brands_svg_icons_["faGoogle"]);
/* harmony default export */ var requestvue_type_script_lang_js_ = ({
  name: 'Index',
  data() {
    return {
      value: 'Some value',
      busy: false,
      timeout: null,
      userId: 0,
      msgTextBox: "",
      currentChatRoom: null,
      showChatMessagesOverlay: false,
      messagesHtml: [],
      visibleMain: true,
      visibleProgress: false,
      intervalX: null,
      filter: null,
      filterOn: [],
      fields: [{
        key: 'viewName',
        label: 'Name',
        sortable: true,
        thStyle: {
          width: '25%'
        }
      }, {
        key: 'text',
        label: 'Message',
        sortable: true,
        thStyle: {
          width: '50%'
        }
      }, {
        key: 'updatedAt',
        label: 'Date',
        sortable: true,
        thStyle: {
          width: '25%'
        }
      }],
      request_rows: []
    };
  },
  mounted() {
    this.showRequests();
    this.intervalX = setInterval(this.refreshTimer, 20 * 1000);
    this.userId = this.$auth.user.id;
  },
  methods: {
    rowClass(item, type) {
      if (!item || type !== 'row') return;
      let font = "";
      if (item.unread > 0) font = 'font-weight-bold font-italic w-100';
      return 'mt-7 ' + font;
    },
    showRequests() {
      try {
        if (!this.visibleMain) return;
        this.visibleProgress = true;
        this.$axios.post(`request/getRequests`, null).then(res => {
          this.visibleProgress = false;
          this.request_rows = res.data.data;
        }).catch(err => {
          this.visibleProgress = false;
        });
      } catch (e) {
        console.log(e);
        this.visibleProgress = false;
      }
    },
    onclick(row, index) {
      try {
        let sUid = this.$auth.user.id;
        if (sUid === row.receiverId) sUid = row.senderId;else sUid = row.receiverId;
        this.visibleProgress = false;
        this.showChatMessagesOverlay = true;
        let reqData = {
          sUid: sUid
        };
        this.currentChatRoom = row;
        this.$axios.post(`request/getUserRequests`, reqData).then(res => {
          if (res.data.data.length > 0) {
            this.messagesHtml = res.data.data;
          }
          this.visibleMain = false;
          this.showChatMessagesOverlay = false;
          this.$axios.post(`/request/setview`, reqData).then(res => {
            row.viewed = 1;
          }).catch(error => {});
        }).catch(err => {
          this.showChatMessagesOverlay = false;
          this.visibleMain = true;
        });
      } catch (e) {
        this.showChatMessagesOverlay = false;
      }
    },
    sendMessage() {
      try {
        if (this.msgTextBox.length === 0) return;
        let reqData = {
          receiverId: this.currentChatRoom.receiverId === this.userId ? this.currentChatRoom.senderId : this.currentChatRoom.receiverId,
          text: this.msgTextBox,
          type: 0,
          // simple message
          entityId: 0
        };
        var options = {
          container: '#chatbox',
          easing: 'ease-in',
          lazy: false,
          offset: -60,
          force: true,
          cancelable: true,
          onStart: function (element) {
            // scrolling started
          },
          onDone: function (element) {
            // scrolling is done
          },
          onCancel: function () {
            // scrolling has been interrupted
          },
          x: false,
          y: true
        };
        this.$axios.post(`/request/create`, reqData).then(res => {
          if (res.data.ok === true) {
            this.msgTextBox = "";
            this.messagesHtml.push(res.data.data);
            let element = '#msg_' + (res.data.data.id - 1);
            var VueScrollTo = __webpack_require__(108);
            VueScrollTo.scrollTo(element, 100, options);
          }
        }).catch(err => {
          console.log(err);
        });
      } catch (e) {}
    },
    chatMessages() {},
    cDate(date) {
      return date.toLocaleString();
    },
    back() {
      this.visibleMain = true;
      this.visibleProgress = true;
    },
    refreshTimer() {
      console.log('----hi------');
      if (this.visibleMain) {
        this.showRequests();
      }
    }
  },
  beforeDestroy() {
    console.log('----bye------');
    clearInterval(this.intervalX);
  }
});
// CONCATENATED MODULE: ./pages/user-panel/request.vue?vue&type=script&lang=js&
 /* harmony default export */ var user_panel_requestvue_type_script_lang_js_ = (requestvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./pages/user-panel/request.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(211)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  user_panel_requestvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "190cf49c",
  "1f060775"
  
)

/* harmony default export */ var request = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=request.js.map
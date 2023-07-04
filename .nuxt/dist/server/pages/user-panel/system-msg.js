exports.ids = [57];
exports.modules = {

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/user-panel/system-msg.vue?vue&type=template&id=624f71db&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('b-container', {
    staticClass: "h-100",
    attrs: {
      "fluid": ""
    }
  }, [_c('div', {
    staticClass: "w-100 h-100 d-flex"
  }, [_c('b-row', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.selectedNotification === null,
      expression: "(selectedNotification === null)"
    }],
    staticClass: "m-0",
    class: _vm.windowWidth === 'xl' || _vm.windowWidth === 'lg' ? 'w-100' : 'w-100'
  }, [_c('b-overlay', {
    staticClass: "w-100",
    attrs: {
      "show": _vm.loadingNotification,
      "variant": "transparent",
      "opacity": 0.8,
      "blur": "3px",
      "rounded": "sm"
    }
  }, [_c('div', {
    staticClass: "mt-2",
    style: _vm.windowWidth === 'xl' || _vm.windowWidth === 'lg' ? ' min-width: 400px;' : 'min-width: 100%; '
  }, _vm._l(_vm.notifications, function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "mt-1 w-100",
      staticStyle: {
        "height": "50px"
      },
      on: {
        "click": function ($event) {
          return _vm.selectUser(item, index);
        }
      }
    }, [_c('div', {
      staticClass: "w-100 p-2 mt-0 shadow-sm d-flex e rounded-lg",
      staticStyle: {
        "cursor": "pointer"
      },
      style: _vm.Rows[index] === true ? 'background-color: rgba(144,169,244,0.32)' : ''
    }, [_c('div', {
      staticClass: "pl-3 w-100"
    }, [_c('span', {
      staticClass: "font-weight-bold"
    }, [_vm._v(" " + _vm._s(item.Notification.title))]), _vm._v(" "), _c('span', {
      staticClass: "float-right small"
    }, [_vm._v(_vm._s(_vm._f("moment")(item.Notification.updatedAt, 'MMM Do YYYY, h:mm:ss a')))]), _vm._v(" "), _c('div', {
      staticClass: "w-100 three-dot-one-line"
    }, [item.view === 0 || item.view === false || item.view === null ? _c('b-badge', {
      attrs: {
        "variant": "success"
      }
    }, [_vm._v("Unread")]) : _vm._e()], 1)])])]);
  }), 0)])], 1), _vm._v(" "), _vm.selectedNotification !== null ? _c('div', {
    staticClass: "w-100 shadow h-100 mt-2 ml-3 p-1 rounded-bottom",
    staticStyle: {
      "border-radius": "20px"
    }
  }, [_c('div', {
    staticClass: "rounded-bottom",
    staticStyle: {
      "background-color": "#fad2dc",
      "border-radius": "20px"
    }
  }, [_c('div', {
    staticClass: "d-flex"
  }, [_c('div', [_c('b-button', {
    staticClass: "btn-crl-mini btn-primary",
    on: {
      "click": _vm.backButton
    }
  }, [_vm._v("Back")])], 1), _vm._v(" "), _c('div', {
    staticClass: "pl-2 w-100 mt-1"
  }, [_c('span', {
    staticClass: "font-weight-bold"
  }, [_vm._v(" " + _vm._s(_vm.selectedNotification.Notification.title))])])]), _vm._v(" "), _c('div', {
    staticClass: "small mb-n1 ml-5"
  }, [_c('span', [_vm._v(" " + _vm._s(_vm._f("moment")(_vm.selectedNotification.Notification.createdAt != null ? _vm.selectedNotification.Notification.createdAt : "", 'MMM Do YYYY, h:mm:ss a')) + " ")])])]), _vm._v(" "), _c('div', {
    staticClass: "h-100"
  }, [_c('div', {
    staticClass: "d-flex"
  }, [_c('b-link', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.windowWidth !== 'xl' && _vm.windowWidth !== 'lg',
      expression: "windowWidth !== 'xl' && windowWidth !== 'lg'"
    }],
    staticClass: "float-right",
    on: {
      "click": function ($event) {
        _vm.selectedNotification = null;
      }
    }
  }, [_c('svg', {
    staticClass: "bi-arrow90deg-left mx-auto b-icon bi",
    attrs: {
      "data-v-41be6633": "",
      "viewBox": "0 0 16 16",
      "width": "1em",
      "height": "1em",
      "focusable": "false",
      "role": "img",
      "aria-label": "arrow90deg left",
      "xmlns": "http://www.w3.org/2000/svg",
      "fill": "currentColor"
    }
  }, [_c('g', {
    attrs: {
      "data-v-41be6633": ""
    }
  }, [_c('path', {
    attrs: {
      "fill-rule": "evenodd",
      "d": "M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z"
    }
  })])])])], 1), _vm._v(" "), _c('div', {
    staticClass: "h-100 mt-2",
    staticStyle: {
      "max-height": "400px",
      "overflow": "auto"
    },
    attrs: {
      "id": "chatBox"
    }
  }, [_c('span', {
    staticClass: "p-3",
    staticStyle: {
      "white-space": "pre-wrap"
    }
  }, [_vm._v(_vm._s(_vm.selectedNotification.Notification.text))])])])]) : _vm._e()], 1)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/user-panel/system-msg.vue?vue&type=template&id=624f71db&scoped=true&

// EXTERNAL MODULE: external "@fortawesome/fontawesome-svg-core"
var fontawesome_svg_core_ = __webpack_require__(4);

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/user-panel/system-msg.vue?vue&type=script&lang=js&


fontawesome_svg_core_["library"].add(free_solid_svg_icons_["faPaperPlane"]);
/* harmony default export */ var system_msgvue_type_script_lang_js_ = ({
  name: 'system-msg',
  data() {
    return {
      notifDetail: null,
      Rows: [],
      windowWidth:  false ? undefined : 'sm',
      selectedNotification: null,
      notifications: [],
      loadingNotificationSelect: true,
      loadingNotification: false
    };
  },
  mounted() {
    this.loadingNotification = true;
    this.getNotifications();
    // this.refreshTimer()
    this.userId = this.$auth.user.id;
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    });
  },
  methods: {
    onResize() {
      if (false) {}
    },
    backButton() {
      this.selectedNotification = null;
    },
    selectUser(item, index) {
      this.loadingNotificationSelect = true;
      this.getNotificationDetail(item, index);
    },
    getNotifications() {
      try {
        this.$axios.post(`/notification/get-all`, null).then(res => {
          this.notifications = res.data.rows;
          this.loadingNotification = false;
          console.log(res.data);
        }).catch(err => {});
      } catch (e) {
        console.log(e);
      }
    },
    getNotificationDetail(row, index) {
      // this.selectedNotification = item
      let reqData = {
        Id: row.id
      };
      this.$axios.post(`/notification/get-notification-detail`, reqData).then(res => {
        this.loadingNotificationSelect = false;
        this.notifications[index] = res.data.data;
        this.notifDetail = res.data.data;
        this.selectedNotification = res.data.data;
      }).catch(err => {
        this.loadingNotificationSelect = false;
      }).finally(() => {
        this.loadingNotificationSelect = false;
      });
    }

    // refreshTimer() {
    //   this.getNotifications();
    //   if (this.selectedNotification !== null)
    //     this.getNotificationDetail(this.selectedNotification, false);
    // }
  },

  beforeDestroy() {
    clearInterval(this.intervalX);
    window.removeEventListener('resize', this.onResize);
  }
});
// CONCATENATED MODULE: ./pages/user-panel/system-msg.vue?vue&type=script&lang=js&
 /* harmony default export */ var user_panel_system_msgvue_type_script_lang_js_ = (system_msgvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./pages/user-panel/system-msg.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  user_panel_system_msgvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "624f71db",
  "1a53a926"
  
)

/* harmony default export */ var system_msg = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=system-msg.js.map
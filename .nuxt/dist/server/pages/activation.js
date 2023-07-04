exports.ids = [9];
exports.modules = {

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activation.vue?vue&type=template&id=62d5771e&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "main-body-container-content"
  }, [_c('b-container', {
    staticClass: "container-padding"
  }, [_vm.response.variant === '' ? _c('div', {
    staticClass: "w-100 d-flex justify-content-center mb-3"
  }, [_c('b-spinner', {
    staticStyle: {
      "width": "3rem",
      "height": "3rem"
    },
    attrs: {
      "variant": "danger",
      "type": "grow",
      "label": "Loading..."
    }
  })], 1) : _c('b-row', {
    staticClass: "d-md-flex col-md-12 col-lg-10 m-center"
  }, [_c('b-alert', {
    staticClass: "w-100",
    attrs: {
      "variant": _vm.response.variant,
      "show": ""
    }
  }, [_vm._v(_vm._s(_vm.response.msg))])], 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/activation.vue?vue&type=template&id=62d5771e&scoped=true&

// EXTERNAL MODULE: external "jwt-decode"
var external_jwt_decode_ = __webpack_require__(5);
var external_jwt_decode_default = /*#__PURE__*/__webpack_require__.n(external_jwt_decode_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activation.vue?vue&type=script&lang=js&

/* harmony default export */ var activationvue_type_script_lang_js_ = ({
  name: 'Activation',
  components: {},
  data() {
    return {
      formData: {
        email: '',
        activeCode: ''
      },
      response: {
        msg: '',
        variant: ''
      },
      errors: null
    };
  },
  head() {
    return {
      title: 'Activation',
      meta: [{
        name: 'description',
        content: 'Activation your account , email'
      }, {
        name: 'keywords',
        content: 'active, account, email'
      }]
    };
  },
  mounted() {
    this.formData.activeCode = this.$route.query.code;
    this.formData.email = this.$route.query.email;
    this.checkActivation();
  },
  methods: {
    checkActivation() {
      const self = this;
      this.$axios.post('user/activation', this.formData).then(async res => {
        this.response = res.data;
        if (this.response.variant === 'success') {
          const oldRedirect = self.$auth.options.redirect;
          self.$auth.options.redirect = false;
          await self.$auth.setUserToken(res.data.token);
          let decoded = external_jwt_decode_default()(res.data.token);
          self.$auth.setUser(decoded);
          self.$auth.options.rewriteRedirects = oldRedirect;
        }
      }).catch(error => {
        if (error.response !== undefined) this.response = error.response.data;
        console.log(error);
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/activation.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_activationvue_type_script_lang_js_ = (activationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./pages/activation.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_activationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "62d5771e",
  "601cbc54"
  
)

/* harmony default export */ var activation = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=activation.js.map
exports.ids = [28];
exports.modules = {

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(176);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("7de093de", content, true, context)
};

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_2bcb299a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(124);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_2bcb299a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_2bcb299a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_2bcb299a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_2bcb299a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\n@media (max-width: 991.98px) {\n.text-wrap[data-v-2bcb299a], .login-wrap[data-v-2bcb299a] {\n    width: 100% !important;\n}\n}\n.text-wrap[data-v-2bcb299a], .login-wrap[data-v-2bcb299a] {\n  width: 50%;\n}\n.text-wrap[data-v-2bcb299a] {\n  background: var(--color2);\n  border: 1px solid var(--color2);\n  color: #fff;\n  background: var(--color1);\n  background: -moz-linear-gradient(-45deg, rgba(var(--gradian-color1)) 0%, rgba(var(--gradian-color2)) 100%);\n  background: -webkit-gradient(left top, right bottom, color-stop(0%, rgba(var(--gradian-color1))), color-stop(100%, rgba(var(--gradian-color2))));\n  background: -webkit-linear-gradient(\n    -45deg, rgba(var(--gradian-color1)) 0%, rgba(var(--gradian-color2)) 100%);\n  background: -o-linear-gradient(-45deg, rgba(var(--gradian-color1)) 0%, rgba(var(--gradian-color2)) 100%);\n  background: -ms-linear-gradient(-45deg, rgba(var(--gradian-color1)) 0%, rgba(var(--gradian-color2)) 100%);\n  background: -webkit-linear-gradient(\n    315deg, rgba(var(--gradian-color1)) 0%, rgba(var(--gradian-color2)) 100%);\n  background: -o-linear-gradient(315deg, rgba(var(--gradian-color1)) 0%, rgba(var(--gradian-color2)) 100%);\n  background: linear-gradient(\n    135deg, rgba(var(--gradian-color1)) 0%, rgba(var(--gradian-color2)) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=rgba(var(--gradian-color1)), endColorstr=rgba(var(--gradian-color2)), GradientType=1);\n}\n.btn.btn-white.btn-outline-white[data-v-2bcb299a] {\n  border: 1px solid #fff;\n  background: transparent;\n  color: #fff;\n}\n.btn.btn-white[data-v-2bcb299a] {\n  background: #fff;\n  border: 1px solid #fff;\n  color: #fff;\n}\n.btn[data-v-2bcb299a] {\n  height: 48px !important;\n\n  cursor: pointer;\n  -webkit-box-shadow: none !important;\n  box-shadow: none !important;\n  font-size: 15px;\n  padding: 12px 20px;\n  border-radius: 50px;\n}\n.btn.btn-white.btn-outline-white[data-v-2bcb299a]:hover {\n  border: 1px solid transparent;\n  background: #fff;\n  color: #000;\n}\n.btn.btn-primary[data-v-2bcb299a] {\n  background: var(--color2);\n  border: 1px solid var(--color2);\n  color: #fff;\n  background: var(--color1);\n  background: -moz-linear-gradient(-45deg, rgba(var(--gradian-color1)) 0%, rgba(var(--gradian-color2)) 100%);\n  background: -webkit-gradient(left top, right bottom, color-stop(0%, rgba(var(--gradian-color1))), color-stop(100%, rgba(var(--gradian-color2))));\n  background: -webkit-linear-gradient(\n    -45deg, rgba(var(--gradian-color1)) 0%, rgba(var(--gradian-color2)) 100%);\n  background: -o-linear-gradient(-45deg, rgba(var(--gradian-color1)) 0%, rgba(var(--gradian-color2)) 100%);\n  background: -ms-linear-gradient(-45deg, rgba(var(--gradian-color1)) 0%, rgba(var(--gradian-color2)) 100%);\n  background: -webkit-linear-gradient(\n    315deg, rgba(var(--gradian-color1)) 0%, rgba(var(--gradian-color2)) 100%);\n  background: -o-linear-gradient(315deg, rgba(var(--gradian-color1)) 0%, rgba(var(--gradian-color2)) 100%);\n  background: linear-gradient(\n    135deg, rgba(var(--gradian-color1)) 0%, rgba(var(--gradian-color2)) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=rgba(var(--gradian-color1)), endColorstr=rgba(var(--gradian-color2)), GradientType=1);\n}\n.btn.btn-primary[data-v-2bcb299a]:hover {\n  border: 1px solid var(--color2);\n  background: linear-gradient( 135deg, rgba(var(--gradian-color2)) 0%,rgba(var(--gradian-color1)) 100%);\n  color: #fff;\n}\n.social-media .social-icon[data-v-2bcb299a] {\n  display: block;\n  width: 40px;\n  height: 40px;\n  background: transparent;\n  border: 1px solid rgba(0, 0, 0, 0.05);\n  font-size: 16px;\n  margin-right: 5px;\n  border-radius: 50%;\n}\n.social-media .social-icon[data-v-2bcb299a]:hover, .social-media .social-icon[data-v-2bcb299a]:focus {\n  background: linear-gradient( 135deg, rgba(var(--gradian-color2)) 0%,rgba(var(--gradian-color1)) 100%);\n  color: #fff;\n}\ninput[data-v-2bcb299a]:focus, textarea[data-v-2bcb299a]:focus, select[data-v-2bcb299a]:focus {\n  outline: none !important;\n}\n\n", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login.vue?vue&type=template&id=2bcb299a&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "main-body-container-content"
  }, [_vm._ssrNode("<script src=\"https://www.google.com/recaptcha/api.js?render=6LcLqf4cAAAAABNPHyXFAHr0i5WOQrNFn0dI7Tep\" data-v-2bcb299a></script> "), _c('b-container', {
    staticClass: "container-padding"
  }, [_c('b-row', {
    staticClass: "d-md-flex col-md-12 col-lg-10 m-center"
  }, [_c('div', {
    staticClass: "text-wrap p-4 p-lg-5 d-flex text-center align-items-center"
  }, [_c('div', {
    staticClass: "text w-100"
  }, [_c('h2', [_vm._v(_vm._s(_vm.$t('welcomeLogin')))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.$t('dontAccount')))]), _vm._v(" "), _c('b-button', {
    staticClass: "my-3 btn-white btn-outline-white",
    attrs: {
      "pill": "",
      "to": _vm.localePath('/register')
    }
  }, [_vm._v(_vm._s(_vm.$t('signUp')))])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "login-wrap p-4 p-lg-5"
  }, [_c('b-form', {
    staticClass: "m-right",
    on: {
      "submit": function ($event) {
        $event.stopPropagation();
        $event.preventDefault();
        return _vm.onSubmit.apply(null, arguments);
      },
      "reset": _vm.onReset
    }
  }, [_c('b-overlay', {
    staticClass: "w-100",
    staticStyle: {
      "margin": "-15px!important"
    },
    attrs: {
      "show": _vm.busy,
      "variant": "white",
      "opacity": 0.5,
      "blur": "3px",
      "rounded": "sm"
    }
  }, [_c('div', {
    staticClass: "d-flex"
  }, [_c('div', {
    staticClass: "w-100"
  }, [_c('h3', {
    staticClass: "mb-4"
  }, [_vm._v(_vm._s(_vm.$t('signIn')))])])]), _vm._v(" "), _c('b-form-group', {
    attrs: {
      "id": "input-group-Login1",
      "label": _vm.$t('email'),
      "label-for": "input-email-login"
    }
  }, [_c('b-form-input', {
    class: {
      'is-invalid': _vm.$v.loginForm.email.$error
    },
    attrs: {
      "autocomplete": "off",
      "id": "input-email-login"
    },
    model: {
      value: _vm.$v.loginForm.email.$model,
      callback: function ($$v) {
        _vm.$set(_vm.$v.loginForm.email, "$model", typeof $$v === 'string' ? $$v.trim() : $$v);
      },
      expression: "$v.loginForm.email.$model"
    }
  }), _vm._v(" "), !_vm.$v.loginForm.email.required ? _c('div', {
    staticClass: "invalid-feedback"
  }, [_vm._v(_vm._s(_vm.$t('emailRequired')) + "\n              ")]) : _vm._e(), _vm._v(" "), !_vm.$v.loginForm.email.serverError ? _c('div', {
    staticClass: "invalid-feedback"
  }, [_vm._v("\n                " + _vm._s(_vm.$t(_vm.errors.email.msg)) + "\n              ")]) : _vm._e()], 1), _vm._v(" "), _c('b-form-group', {
    attrs: {
      "id": "input-group-Login2",
      "label": _vm.$t('password'),
      "label-for": "input-password-login"
    }
  }, [_c('b-form-input', {
    class: {
      'is-invalid': _vm.$v.loginForm.password.$error
    },
    attrs: {
      "autocomplete": "off",
      "type": "password",
      "id": "input-password-login"
    },
    model: {
      value: _vm.$v.loginForm.password.$model,
      callback: function ($$v) {
        _vm.$set(_vm.$v.loginForm.password, "$model", typeof $$v === 'string' ? $$v.trim() : $$v);
      },
      expression: "$v.loginForm.password.$model"
    }
  }), _vm._v(" "), !_vm.$v.loginForm.password.required ? _c('div', {
    staticClass: "invalid-feedback"
  }, [_vm._v(_vm._s(_vm.$t('passwordRequired')) + "\n              ")]) : _vm._e()], 1), _vm._v(" "), _c('b-form-group', [_c('b-button', {
    staticClass: "form-control btn btn-primary submit px-3",
    attrs: {
      "type": "submit"
    }
  }, [_vm._v(_vm._s(_vm.$t('signIn')))])], 1), _vm._v(" "), _c('b-form-group', [_c('div', {
    staticClass: "form-group d-md-flex"
  }, [_c('div', {
    staticClass: "ml-2 text-md-left",
    staticStyle: {
      "font-size": "small"
    }
  }, [_c('b-link', {
    attrs: {
      "to": _vm.localePath('/forget-password')
    }
  }, [_vm._v(_vm._s(_vm.$t('forgotPassword')))])], 1)])])], 1)], 1)], 1)])], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/login.vue?vue&type=template&id=2bcb299a&scoped=true&

// EXTERNAL MODULE: external "@fortawesome/fontawesome-svg-core"
var fontawesome_svg_core_ = __webpack_require__(4);

// EXTERNAL MODULE: external "@fortawesome/free-brands-svg-icons"
var free_brands_svg_icons_ = __webpack_require__(25);

// EXTERNAL MODULE: external "vuelidate/lib/validators"
var validators_ = __webpack_require__(105);

// EXTERNAL MODULE: external "jwt-decode"
var external_jwt_decode_ = __webpack_require__(5);
var external_jwt_decode_default = /*#__PURE__*/__webpack_require__.n(external_jwt_decode_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login.vue?vue&type=script&lang=js&






// import {required, numeric, minLength, maxLength} from "vuelidate/lib/validators";

fontawesome_svg_core_["library"].add(free_brands_svg_icons_["faGoogle"]);
fontawesome_svg_core_["library"].add(free_brands_svg_icons_["faFacebookF"]);
/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  middleware: 'auth',
  auth: 'guest',
  name: 'Login',
  components: {},
  data() {
    return {
      busy: false,
      loginForm: {
        email: '',
        password: '',
        token: ""
      },
      errors: null
    };
  },
  validations: {
    loginForm: {
      email: {
        required: validators_["required"],
        serverError(value) {
          if (value === '') return true;
          return !(this.errors != null && this.errors.email && value == this.errors.email.value);
        }
      },
      password: {
        required: validators_["required"]
      }
    }
  },
  head() {
    return {
      title: 'Sign In',
      meta: [{
        name: 'description',
        content: 'sign in with Google or Facebook or can create an account'
      }, {
        name: 'keywords',
        content: 'sign in, login, google, facebook, account'
      }]
    };
  },
  async mounted() {
    try {
      await this.$recaptcha.init();
    } catch (e) {
      console.log(e);
    }
  },
  methods: {
    onReset(evt) {
      evt.preventDefault();
      // Reset our loginForm values
      this.loginForm.email = '';
      this.loginForm.password = '';
    },
    async onSubmit(evt) {
      const self = this;
      this.$v.$reset();
      this.errors = null;
      evt.preventDefault();
      this.$v.loginForm.$touch();
      if (this.$v.loginForm.$invalid) {
        console.log("vuelidate error");
      } else {
        try {
          this.busy = true;
          let token = await this.$recaptcha.execute('login');
          self.loginForm.token = token;
          let response = await self.$auth.loginWith('local', {
            data: self.loginForm
          });
          await self.$auth.setUserToken(response.data.token);
          let decoded = external_jwt_decode_default()(response.data.token);
          self.$auth.setUser(decoded);
          this.busy = false;
          self.$router.push('/');
        } catch (error) {
          this.busy = false;
          if (error.response !== null) if (error.response.data.errors) {
            // console.log(JSON.stringify(error.response.data.errors))
            self.errors = error.response.data.errors;
          }
          console.log(error);
        }
      }
    }
  },
  beforeDestroy() {
    this.$recaptcha.destroy();
  }
});
// CONCATENATED MODULE: ./pages/login.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./pages/login.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(175)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2bcb299a",
  "54c2794e"
  
)

/* harmony default export */ var login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=login.js.map
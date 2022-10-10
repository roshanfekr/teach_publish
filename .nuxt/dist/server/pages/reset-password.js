exports.ids = [33];
exports.modules = {

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/reset-password.vue?vue&type=template&id=7a692e5a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-container',{staticClass:"container-padding"},[_c('b-row',{staticClass:"d-md-flex col-md-12 col-lg-10 m-center"},[(_vm.response.variant === '')?_c('div',{staticClass:"w-100 d-flex justify-content-center mb-3"},[_c('b-spinner',{staticStyle:{"width":"3rem","height":"3rem"},attrs:{"variant":"danger","type":"grow","label":"Loading..."}})],1):(_vm.response.variant=== 'danger' )?_c('b-row',{staticClass:"d-md-flex col-md-12 col-lg-10 m-center"},[_c('b-alert',{staticClass:"w-100",attrs:{"variant":_vm.response.variant,"show":""}},[_vm._v(_vm._s(_vm.response.msg))])],1):(_vm.response.variant=== 'success' )?_c('div',{staticClass:"login-wrap p-4 p-lg-5"},[_c('b-form',{on:{"submit":function($event){$event.stopPropagation();$event.preventDefault();return _vm.onSubmit.apply(null, arguments)},"reset":_vm.onReset}},[_c('div',{staticClass:"d-flex"},[_c('div',{staticClass:"w-100"},[_c('h3',{staticClass:"mb-4"},[_vm._v(_vm._s(_vm.$t('accountSetting')))])])]),_vm._v(" "),_c('h5',[_vm._v("\n        "+_vm._s(_vm.$t('changePassword'))+"\n      ")]),_vm._v(" "),_c('hr',{staticClass:"mt-0 mb-2"}),_vm._v(" "),_c('b-form-group',{attrs:{"id":"input-group-Login2","label":_vm.$t('newPassword'),"label-for":"input-password-login"}},[_c('b-form-input',{class:{ 'is-invalid': _vm.$v.formData.password.$error},attrs:{"autocomplete":"off","type":"password","id":"input-password-login"},model:{value:(_vm.$v.formData.password.$model),callback:function ($$v) {_vm.$set(_vm.$v.formData.password, "$model", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"$v.formData.password.$model"}}),_vm._v(" "),(!_vm.$v.formData.password.minLength)?_c('div',{staticClass:"invalid-feedback"},[_vm._v("\n          "+_vm._s(_vm.$t('passwordMinLen',{minLenNum:_vm.$v.formData.password.$params.minLength.min}))+"\n        ")]):_vm._e(),_vm._v(" "),(!_vm.$v.formData.password.required)?_c('div',{staticClass:"invalid-feedback"},[_vm._v(_vm._s(_vm.$t('passwordRequired')))]):_vm._e(),_vm._v(" "),(!_vm.$v.formData.password.serverError)?_c('div',{staticClass:"invalid-feedback"},[_vm._v(_vm._s(_vm.$t(_vm.errors.password.msg)))]):_vm._e()],1),_vm._v(" "),_c('b-form-group',{attrs:{"id":"input-group-Login2","label":_vm.$t('confirmNewPassword'),"label-for":"input-cPassword-login"}},[_c('b-form-input',{class:{ 'is-invalid': _vm.$v.formData.cPassword.$error},attrs:{"autocomplete":"off","type":"password","id":"input-cPassword-login"},model:{value:(_vm.$v.formData.cPassword.$model),callback:function ($$v) {_vm.$set(_vm.$v.formData.cPassword, "$model", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"$v.formData.cPassword.$model"}}),_vm._v(" "),(!_vm.$v.formData.cPassword.sameAsPassword)?_c('div',{staticClass:"invalid-feedback"},[_vm._v(_vm._s(_vm.$t('passwordsIdentical'))+"\n        ")]):_vm._e()],1),_vm._v(" "),_c('b-form-group',[_c('b-button',{staticClass:"form-control btn btn-crl  btn-primary submit px-3 mt-4 btn-reg mr-2",attrs:{"type":"submit"}},[_vm._v(_vm._s(_vm.$t('save'))+"\n        ")])],1)],1)],1):_vm._e()],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/reset-password.vue?vue&type=template&id=7a692e5a&scoped=true&

// EXTERNAL MODULE: external "vuelidate/lib/validators"
var validators_ = __webpack_require__(103);

// EXTERNAL MODULE: external "jwt-decode"
var external_jwt_decode_ = __webpack_require__(5);
var external_jwt_decode_default = /*#__PURE__*/__webpack_require__.n(external_jwt_decode_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/reset-password.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var reset_passwordvue_type_script_lang_js_ = ({
  middleware: 'auth',
  auth: 'guest',
  name: 'reset-password',
  components: {},

  data() {
    return {
      formData: {
        email: '',
        resetCode: '',
        password: '',
        cPassword: ''
      },
      response: {
        msg: '',
        variant: ''
      },
      errors: null
    };
  },

  validations: {
    formData: {
      password: {
        required: validators_["required"],
        minLength: Object(validators_["minLength"])(6),

        serverError(value) {
          if (value === '') {
            return true;
          }

          return !(this.errors != null && this.errors.password && value === this.errors.password.value);
        }

      },
      cPassword: {
        sameAsPassword: Object(validators_["sameAs"])('password')
      }
    }
  },

  head() {
    return {
      title: 'Reset Password',
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
    this.formData.resetCode = this.$route.query.code;
    this.formData.email = this.$route.query.email;
    this.checkResetCode();
  },

  methods: {
    checkResetCode() {
      this.$axios.post('user/reset-password-code', this.formData).then(async res => {
        console.log(res.data);
        this.response = res.data;
      }).catch(error => {
        this.response = error.response.data;
        console.log(error);
      });
    },

    onReset(evt) {
      evt.preventDefault();
      this.formData.password = '';
      this.formData.cPassword = '';
    },

    onSubmit(evt) {
      this.$v.$reset();
      this.errors = null;
      evt.preventDefault();
      this.$v.formData.$touch();

      if (this.$v.formData.$invalid) {
        console.log("vuelidate error");
      } else {
        this.$axios.post('user/reset-password', this.formData).then(async res => {
          this.makeToast('success', 'Message', this.$t('passwordChanged'));
          let loginForm = {
            email: this.formData.email,
            password: this.formData.password
          };
          let response = await this.$auth.loginWith('local', {
            data: loginForm
          });
          await this.$auth.setUserToken(response.data.token);
          let decoded = external_jwt_decode_default()(response.data.token);
          this.$auth.setUser(decoded);
          this.$router.push('/');
          console.log(res.data);
        }).catch(error => {
          if (error.response.data.errors) {
            this.errors = error.response.data.errors;
          }

          console.log(error.response);
        });
      }
    },

    makeToast(variant = 'success', header = 'Message', msg = '') {
      this.$bvToast.toast(this.$t(msg), {
        title: header,
        variant: variant,
        solid: true
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/reset-password.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_reset_passwordvue_type_script_lang_js_ = (reset_passwordvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./pages/reset-password.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_reset_passwordvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7a692e5a",
  "3e3bc7ca"
  
)

/* harmony default export */ var reset_password = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=reset-password.js.map
exports.ids = [44];
exports.modules = {

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/user-panel/account.vue?vue&type=template&id=f8f62d04&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('b-container', {
    staticClass: "container-padding"
  }, [_c('b-row', {
    staticClass: "d-md-flex m-center"
  }, [_c('div', {
    staticClass: "login-wrap px-xl-5 px-lg-5 px-md-3 px-sm-2 px-2 col-md-12 col-lg-10 col-xl-8"
  }, [_c('b-form', {
    on: {
      "submit": function ($event) {
        $event.stopPropagation();
        $event.preventDefault();
        return _vm.onSubmit.apply(null, arguments);
      },
      "reset": _vm.onReset
    }
  }, [_c('div', {
    staticClass: "d-flex"
  }, [_c('div', {
    staticClass: "w-100"
  }, [_c('h3', {
    staticClass: "mb-4"
  }, [_vm._v(_vm._s(_vm.$t('accountSetting')))])])]), _vm._v(" "), _c('h5', [_vm._v(" " + _vm._s(_vm.$t('email')))]), _vm._v(" "), _c('hr', {
    staticClass: "mt-0 mb-2"
  }), _vm._v(" "), _c('div', {
    staticClass: "mt-4"
  }, [_c('span', {
    staticClass: "font-weight-bold",
    staticStyle: {
      "font-size": "large"
    }
  }, [_vm._v(_vm._s(_vm.$auth.user.email))]), _vm._v(" "), _vm.$auth.loggedIn && _vm.$auth.user.emailConfirmed === true ? _c('b-badge', {
    attrs: {
      "variant": "success"
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("account.verified")) + "\n            "), _c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'check-circle']
    }
  })], 1) : _c('b-badge', {
    attrs: {
      "variant": "warning"
    }
  }, [_vm._v(_vm._s(_vm.$t("account.unVerified")) + "\n            "), _c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'exclamation-triangle']
    }
  })], 1), _vm._v(" "), _c('b-alert', {
    staticClass: "mt-3",
    attrs: {
      "show": _vm.$auth.loggedIn && _vm.$auth.user.emailConfirmed !== true,
      "variant": "warning"
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("account.unVerifiedAlert")) + "\n            "), _c('br'), _vm._v(" "), _c('br'), _vm._v("\n            " + _vm._s(_vm.$t("account.reSendMessage")) + "\n            "), _c('br'), _vm._v(" "), _c('b-button', {
    staticClass: "mt-2",
    attrs: {
      "variant": "info",
      "size": "sm"
    },
    on: {
      "click": _vm.reSendVerificationEmail
    }
  }, [_vm._v("\n              " + _vm._s(_vm.$t('account.sendEmailAgain')) + "\n            ")])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "mt-4"
  }, [_vm.hasRole('tutor') ? _c('b-alert', {
    staticClass: "mt-3",
    attrs: {
      "show": _vm.$auth.loggedIn,
      "variant": _vm.disable === null || _vm.disable === false ? 'danger' : 'info'
    }
  }, [_vm._v("\n            " + _vm._s(_vm.disable === null || _vm.disable === false ? _vm.$t("account.disableMessage") : _vm.$t("account.activeMessage")) + "\n            "), _c('br'), _vm._v(" "), _vm.disable === null || _vm.disable === false ? _c('b-button', {
    staticClass: "mt-2",
    attrs: {
      "variant": "warning",
      "size": "sm"
    },
    on: {
      "click": _vm.disableAccount
    }
  }, [_c('b-spinner', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.disBusy,
      expression: "disBusy"
    }],
    attrs: {
      "small": "",
      "type": "grow"
    }
  }), _vm._v("\n              " + _vm._s(_vm.$t('account.disable')) + "\n            ")], 1) : _vm._e(), _vm._v(" "), _vm.disable === true ? _c('b-button', {
    staticClass: "mt-2",
    attrs: {
      "variant": "info",
      "size": "sm"
    },
    on: {
      "click": _vm.activeAccount
    }
  }, [_c('b-spinner', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.disBusy,
      expression: "disBusy"
    }],
    attrs: {
      "small": "",
      "type": "grow"
    }
  }), _vm._v("\n\n              " + _vm._s(_vm.$t('account.active')) + "\n            ")], 1) : _vm._e()], 1) : _vm._e()], 1), _vm._v(" "), _c('h5', {
    staticClass: "mt-5"
  }, [_vm._v("\n          " + _vm._s(_vm.$t('changePassword')) + "\n        ")]), _vm._v(" "), _c('hr', {
    staticClass: "mt-0 mb-2"
  }), _vm._v(" "), _c('b-form-group', {
    attrs: {
      "label": _vm.$t('oldPassword') + ':',
      "label-for": "input-oldPassword-login"
    }
  }, [_c('b-form-input', {
    class: {
      'is-invalid': _vm.$v.formData.oldPassword.$error
    },
    attrs: {
      "autocomplete": "off",
      "type": "password",
      "id": "input-oldPassword-login"
    },
    model: {
      value: _vm.$v.formData.oldPassword.$model,
      callback: function ($$v) {
        _vm.$set(_vm.$v.formData.oldPassword, "$model", typeof $$v === 'string' ? $$v.trim() : $$v);
      },
      expression: "$v.formData.oldPassword.$model"
    }
  }), _vm._v(" "), !_vm.$v.formData.oldPassword.required ? _c('div', {
    staticClass: "invalid-feedback"
  }, [_vm._v(_vm._s(_vm.$t('oldPasswordRequired')) + "\n          ")]) : _vm._e(), _vm._v(" "), !_vm.$v.formData.oldPassword.serverError ? _c('div', {
    staticClass: "invalid-feedback"
  }, [_vm._v(_vm._s(_vm.$t(_vm.errors.oldPassword.msg)) + "\n          ")]) : _vm._e()], 1), _vm._v(" "), _c('b-form-group', {
    attrs: {
      "id": "input-group-Login2",
      "label": _vm.$t('newPassword') + ':',
      "label-for": "input-password-login"
    }
  }, [_c('b-form-input', {
    class: {
      'is-invalid': _vm.$v.formData.password.$error
    },
    attrs: {
      "autocomplete": "off",
      "type": "password",
      "id": "input-password-login"
    },
    model: {
      value: _vm.$v.formData.password.$model,
      callback: function ($$v) {
        _vm.$set(_vm.$v.formData.password, "$model", typeof $$v === 'string' ? $$v.trim() : $$v);
      },
      expression: "$v.formData.password.$model"
    }
  }), _vm._v(" "), !_vm.$v.formData.password.minLength ? _c('div', {
    staticClass: "invalid-feedback"
  }, [_vm._v("\n            " + _vm._s(_vm.$t('passwordMinLen', {
    minLenNum: _vm.$v.formData.password.$params.minLength.min
  })) + "\n          ")]) : _vm._e(), _vm._v(" "), !_vm.$v.formData.password.required ? _c('div', {
    staticClass: "invalid-feedback"
  }, [_vm._v(_vm._s(_vm.$t('passwordRequired')))]) : _vm._e(), _vm._v(" "), !_vm.$v.formData.password.serverError ? _c('div', {
    staticClass: "invalid-feedback"
  }, [_vm._v(_vm._s(_vm.$t(_vm.errors.password.msg)))]) : _vm._e()], 1), _vm._v(" "), _c('b-form-group', {
    attrs: {
      "id": "input-group-Login2",
      "label": _vm.$t('confirmNewPassword') + ':',
      "label-for": "input-cPassword-login"
    }
  }, [_c('b-form-input', {
    class: {
      'is-invalid': _vm.$v.formData.cPassword.$error
    },
    attrs: {
      "autocomplete": "off",
      "type": "password",
      "id": "input-cPassword-login"
    },
    model: {
      value: _vm.$v.formData.cPassword.$model,
      callback: function ($$v) {
        _vm.$set(_vm.$v.formData.cPassword, "$model", typeof $$v === 'string' ? $$v.trim() : $$v);
      },
      expression: "$v.formData.cPassword.$model"
    }
  }), _vm._v(" "), !_vm.$v.formData.cPassword.sameAsPassword ? _c('div', {
    staticClass: "invalid-feedback"
  }, [_vm._v(_vm._s(_vm.$t('passwordsIdentical')) + "\n          ")]) : _vm._e()], 1), _vm._v(" "), _c('b-form-group', [_c('b-button', {
    staticClass: "form-control btn btn-crl btn-primary submit mt-4 btn-reg",
    class: _vm.windowWidth === 'xl' || _vm.windowWidth === 'lg' ? 'w-40' : _vm.windowWidth === 'md' ? 'w-50' : 'w-65',
    attrs: {
      "type": "submit"
    }
  }, [_vm._v(_vm._s(_vm.$t('changePassword')) + "\n          ")])], 1)], 1)], 1)])], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/user-panel/account.vue?vue&type=template&id=f8f62d04&scoped=true&

// EXTERNAL MODULE: external "@fortawesome/fontawesome-svg-core"
var fontawesome_svg_core_ = __webpack_require__(4);

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(1);

// EXTERNAL MODULE: external "vuelidate/lib/validators"
var validators_ = __webpack_require__(105);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/user-panel/account.vue?vue&type=script&lang=js&


fontawesome_svg_core_["library"].add(free_solid_svg_icons_["faCheckCircle"], free_solid_svg_icons_["faExclamationTriangle"]);

/* harmony default export */ var accountvue_type_script_lang_js_ = ({
  layout: 'UserPanel',
  name: 'Account',
  components: {},
  data() {
    return {
      windowWidth:  false ? undefined : 'sm',
      disBusy: false,
      delbusy: false,
      disable: null,
      deleteAccount: null,
      errors: null,
      formData: {
        oldPassword: '',
        password: '',
        cPassword: ''
      }
    };
  },
  validations: {
    formData: {
      oldPassword: {
        required: validators_["required"],
        serverError(value) {
          if (value === '') {
            return true;
          }
          return !(this.errors != null && this.errors.oldPassword && value === this.errors.oldPassword.value);
        }
      },
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
  mounted() {
    this.getDisableStatus();
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    });
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    onResize() {
      if (false) {}
    },
    hasRole: function (role) {
      return this.$auth.hasScope(role);
    },
    onReset(evt) {
      evt.preventDefault();
      this.formData.oldPassword = '';
      this.formData.password = '';
      this.formData.cPassword = '';
    },
    reSendVerificationEmail() {
      this.$axios.post('user/reSendVerificationEmail').then(res => {
        this.makeToast('success', 'Message', this.$t('account.reSendSuccessFull'));
        console.log(res.data);
      }).catch(error => {
        if (error.response.data.errors) {
          this.errors = error.response.data.errors;
        }
        console.log(error.response);
      });
    },
    getDisableStatus() {
      this.$axios.post('/user/get-disable-status').then(res => {
        this.disable = res.data.disable;
        this.deleteAccount = res.data.del;
      }).catch(error => {
        if (error.response.data.errors) {
          this.errors = error.response.data.errors;
        }
        console.log(error.response);
      });
    },
    disableAccount() {
      this.$bvModal.msgBoxConfirm(this.$t('account.disable.alert'), {
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
        if (value === true) {
          let data = {
            dis: true
          };
          this.disBusy = true;
          this.$axios.post('/user/set-disable-status', data).then(res => {
            this.disable = res.data.disable;
            this.deleteAccount = res.data.del;
            location.reload();
          }).catch(error => {
            if (error.response.data.errors) {
              this.errors = error.response.data.errors;
            }
          }).finally(() => {
            this.disBusy = false;
          });
        }
      });
    },
    activeAccount() {
      this.$bvModal.msgBoxConfirm(this.$t('account.disable.alert'), {
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
        if (value === true) {
          let data = {
            dis: false
          };
          this.disBusy = true;
          this.$axios.post('/user/set-disable-status', data).then(res => {
            this.disable = res.data.disable;
            this.deleteAccount = res.data.del;
            location.reload();
          }).catch(error => {
            if (error.response.data.errors) {
              this.errors = error.response.data.errors;
            }
            console.log(error.response);
          }).finally(() => {
            this.disBusy = false;
          });
        }
      });
    },
    async logout() {
      await this.$auth.logout(); // this method will logout the user and make token to false on the local storage of the user browser
      this.$router.push('/login');
    },
    onSubmit(evt) {
      this.$v.$reset();
      this.errors = null;
      evt.preventDefault();
      this.$v.formData.$touch();
      if (this.$v.formData.$invalid) {
        console.log("vuelidate error");
      } else {
        this.$axios.post('user/change-password', this.formData, {
          withCredentials: true
        }).then(res => {
          this.makeToast('success', 'Message', this.$t('account.passwordChanged'));
          this.logout();
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
// CONCATENATED MODULE: ./pages/user-panel/account.vue?vue&type=script&lang=js&
 /* harmony default export */ var user_panel_accountvue_type_script_lang_js_ = (accountvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./pages/user-panel/account.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  user_panel_accountvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "f8f62d04",
  "0e19a013"
  
)

/* harmony default export */ var account = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=account.js.map
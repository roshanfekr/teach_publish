exports.ids = [23];
exports.modules = {

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo-b.8032370.png";

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/knowledge.0cabd54.jpg";

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/contact-us.vue?vue&type=template&id=b7280734&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-body-container-content mb-5"},[_c('b-container',{staticClass:"container-padding"},[_c('b-row',[_c('b-col',{staticClass:"text-center col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"},[_c('b-img',{attrs:{"alt":"teach","width":"200","src":__webpack_require__(112)}}),_vm._v(" "),_c('div',{staticClass:"text-left",staticStyle:{"font-size":"larger","font-family":"sans-serif"}},[_c('br'),_vm._v("\n                  "+_vm._s(_vm.$t("contactus.text"))+"\n                    "),_c('br'),_vm._v("\n                  "+_vm._s(_vm.$t("contactus.text1"))+"\n                  "),_c('br'),_vm._v(" "),_c('br'),_vm._v(" "),_c('span',{staticClass:"font-weight-bold",staticStyle:{"font-size":"smaller","color":"#1c92ff"}},[_vm._v("info@tuteloop.ca")])])],1),_vm._v(" "),_c('b-col',{staticClass:"col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"},[_c('div',{staticClass:"image-panel"},[_c('b-img',{attrs:{"alt":"teach","src":__webpack_require__(156)}})],1)])],1),_vm._v(" "),_c('div',{staticClass:"fusion-separator"},[_c('span',{staticClass:"icon-wrapper"},[_c('font-awesome-icon',{staticClass:"font-color",attrs:{"icon":['fas', 'graduation-cap']}})],1)]),_vm._v(" "),_c('b-row',{staticClass:"pr-2 pl-2"},[_c('b-col',{staticClass:"col-xl-6 col-lg-6 col-md-7 col-sm-12 col-12"},[(_vm.show)?_c('b-form',{staticClass:"w-100",on:{"submit":function($event){$event.stopPropagation();$event.preventDefault();return _vm.onSubmit.apply(null, arguments)},"reset":_vm.onReset}},[_c('div',{staticClass:"mb-4 text-primary"},[_vm._v("Send your message")]),_vm._v(" "),_c('b-form-group',{attrs:{"id":"input-group-1","label":"Name ","label-for":"input-1"}},[_c('b-form-input',{class:{ 'is-invalid': _vm.$v.form.name.$error , 'is-valid': !_vm.$v.form.name.$invalid },attrs:{"id":"input-1","autocomplete":"off"},model:{value:(_vm.$v.form.name.$model),callback:function ($$v) {_vm.$set(_vm.$v.form.name, "$model", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"$v.form.name.$model"}}),_vm._v(" "),(!_vm.$v.form.name.required)?_c('div',{staticClass:"invalid-feedback"},[_vm._v("Name is required\n                ")]):_vm._e(),_vm._v(" "),(!_vm.$v.form.name.serverError)?_c('div',{staticClass:"invalid-feedback"},[_vm._v(_vm._s(_vm.errors.name.msg))]):_vm._e()],1),_vm._v(" "),_c('b-form-group',{attrs:{"id":"input-group-2","label":"Subject ","label-for":"input-2"}},[_c('b-form-input',{class:{ 'is-invalid': _vm.$v.form.subject.$error , 'is-valid': !_vm.$v.form.subject.$invalid },attrs:{"autocomplete":"off","id":"input-2"},model:{value:(_vm.$v.form.subject.$model),callback:function ($$v) {_vm.$set(_vm.$v.form.subject, "$model", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"$v.form.subject.$model"}}),_vm._v(" "),(!_vm.$v.form.subject.required)?_c('div',{staticClass:"invalid-feedback"},[_vm._v("Required\n                ")]):_vm._e(),_vm._v(" "),(!_vm.$v.form.subject.serverError)?_c('div',{staticClass:"invalid-feedback"},[_vm._v(_vm._s(_vm.errors.subject.msg))]):_vm._e()],1),_vm._v(" "),_c('b-form-group',{attrs:{"id":"input-group-3","label":"Email ","label-for":"input-3"}},[_c('b-form-input',{class:{ 'is-invalid': _vm.$v.form.email.$error , 'is-valid': !_vm.$v.form.email.$invalid },attrs:{"autocomplete":"off","id":"input-3"},model:{value:(_vm.$v.form.email.$model),callback:function ($$v) {_vm.$set(_vm.$v.form.email, "$model", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"$v.form.email.$model"}}),_vm._v(" "),(!_vm.$v.form.email.required)?_c('div',{staticClass:"invalid-feedback"},[_vm._v("Required\n                ")]):_vm._e(),_vm._v(" "),(!_vm.$v.form.email.email)?_c('div',{staticClass:"invalid-feedback"},[_vm._v("Email format not correct\n                ")]):_vm._e(),_vm._v(" "),(!_vm.$v.form.email.serverError)?_c('div',{staticClass:"invalid-feedback"},[_vm._v(_vm._s(_vm.errors.email.msg))]):_vm._e()],1),_vm._v(" "),_c('b-form-group',{attrs:{"id":"input-group-4","label":"Message ","label-for":"input-4"}},[_c('b-form-textarea',{class:{ 'is-invalid': _vm.$v.form.msg.$error , 'is-valid': !_vm.$v.form.msg.$invalid },attrs:{"id":"input-4","autocomplete":"off","rows":"4","placeholder":"Insert your message"},model:{value:(_vm.$v.form.msg.$model),callback:function ($$v) {_vm.$set(_vm.$v.form.msg, "$model", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"$v.form.msg.$model"}}),_vm._v(" "),(!_vm.$v.form.msg.required)?_c('div',{staticClass:"invalid-feedback"},[_vm._v("Message is required\n                ")]):_vm._e(),_vm._v(" "),(!_vm.$v.form.msg.serverError)?_c('div',{staticClass:"invalid-feedback"},[_vm._v(_vm._s(_vm.errors.msg.msg))]):_vm._e()],1),_vm._v(" "),_c('b-button',{staticClass:"m-2",attrs:{"type":"submit","variant":"primary"}},[_vm._v("Send\n                "),_c('b-spinner',{directives:[{name:"show",rawName:"v-show",value:(_vm.inProgress),expression:"inProgress"}],staticStyle:{"width":"24px","height":"24px","color":"#ffffff"},attrs:{"type":"grow"}})],1),_vm._v(" "),_c('b-button',{staticClass:"m-2",attrs:{"type":"reset","variant":"danger"}},[_vm._v("Clear Form")])],1):_c('b-row',{staticClass:"w-100"},[_c('b-alert',{staticClass:"w-100",attrs:{"variant":"success","show":""}},[_vm._v("Send message success.")]),_vm._v(" "),_c('b-button',{staticClass:"m-2",attrs:{"variant":"primary"},on:{"click":_vm.onReset}},[_vm._v("New message")])],1)],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/contact-us.vue?vue&type=template&id=b7280734&scoped=true&

// EXTERNAL MODULE: external "vuelidate/lib/validators"
var validators_ = __webpack_require__(103);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/contact-us.vue?vue&type=script&lang=js&
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

/* harmony default export */ var contact_usvue_type_script_lang_js_ = ({
  name: 'ContactUs',
  components: {},

  data() {
    return {
      inProgress: false,
      form: {
        name: '',
        subject: '',
        tel: '',
        email: '',
        msg: '',
        token: ''
      },
      show: true
    };
  },

  head() {
    return {
      title: 'Contact Us',
      meta: [{
        name: 'description',
        content: ''
      }, {
        name: 'keywords',
        content: ''
      }]
    };
  },

  validations: {
    form: {
      name: {
        required: validators_["required"],

        serverError(value) {
          if (value === '') {
            return true;
          }

          return !(this.errors != null && this.errors.username && value === this.errors.username.value);
        }

      },
      subject: {
        required: validators_["required"],

        serverError(value) {
          if (value === '') {
            return true;
          }

          return !(this.errors != null && this.errors.subject && value === this.errors.subject.value);
        }

      },
      email: {
        required: validators_["required"],
        email: validators_["email"],

        serverError(value) {
          if (value === '') {
            return true;
          }

          return !(this.errors != null && this.errors.email && value === this.errors.email.value);
        }

      },
      msg: {
        required: validators_["required"],

        serverError(value) {
          if (value === '') {
            return true;
          }

          return !(this.errors != null && this.errors.msg && value === this.errors.msg.value);
        }

      }
    }
  },

  async mounted() {
    try {
      await this.$recaptcha.init();
    } catch (e) {
      console.log(e);
    }
  },

  methods: {
    async onSubmit(evt) {
      this.inProgress = true;
      this.errors = null;
      this.$v.$reset();
      evt.preventDefault();
      this.$v.form.$touch();

      if (this.$v.form.$invalid) {
        this.inProgress = false;
        console.log('vuelidate error');
      } else {
        this.form.token = await this.$recaptcha.execute('contactus');
        this.$axios.post('message/create', this.form).then(() => {
          this.show = false;
        }).catch(error => {
          if (error.response.data.errors) {
            // console.log(JSON.stringify(error.response.data.errors))
            this.errors = error.response.data.errors;
          }

          console.log(error);
        }).finally(() => {
          this.inProgress = false;
        });
      }
    },

    onReset(evt) {
      this.errors = null;
      this.$v.$reset();
      evt.preventDefault(); // Reset our form values

      this.form.email = '';
      this.form.name = '';
      this.form.tel = '';
      this.form.subject = '';
      this.form.msg = '';
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }

  },

  beforeDestroy() {
    this.$recaptcha.destroy();
  }

});
// CONCATENATED MODULE: ./pages/contact-us.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_contact_usvue_type_script_lang_js_ = (contact_usvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./pages/contact-us.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_contact_usvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "b7280734",
  "0484c3a6"
  
)

/* harmony default export */ var contact_us = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=contact-us.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{365:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return o.default}}),t.regex=t.ref=t.len=t.req=void 0;var n,o=(n=r(368))&&n.__esModule?n:{default:n};function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var d=function(e){if(Array.isArray(e))return!!e.length;if(null==e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===l(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=d;t.len=function(e){return Array.isArray(e)?e.length:"object"===l(e)?Object.keys(e).length:String(e).length};t.ref=function(e,t,r){return"function"==typeof e?e.call(t,r):r[e]};t.regex=function(e,t){return(0,o.default)({type:e},(function(e){return!d(e)||t.test(e)}))}},366:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return $.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return x.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return O.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return j.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return C.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return D.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return M.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return A.default}}),t.helpers=void 0;var n=z(r(367)),o=z(r(370)),l=z(r(371)),d=z(r(372)),c=z(r(373)),f=z(r(374)),v=z(r(375)),m=z(r(376)),h=z(r(377)),y=z(r(378)),_=z(r(379)),w=z(r(380)),P=z(r(381)),$=z(r(382)),x=z(r(383)),O=z(r(384)),j=z(r(385)),C=z(r(386)),D=z(r(387)),M=z(r(388)),A=z(r(389)),S=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};desc.get||desc.set?Object.defineProperty(t,r,desc):t[r]=e[r]}return t.default=e,t}(r(365));function z(e){return e&&e.__esModule?e:{default:e}}t.helpers=S},367:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(365).regex)("alpha",/^[a-zA-Z]*$/);t.default=n},368:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="web"===e.env.BUILD?r(369).withParams:r(253).withParams;t.default=n}).call(this,r(116))},369:function(e,t,r){"use strict";(function(e){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var n="undefined"!=typeof window?window:void 0!==e?e:{},o=n.vuelidate?n.vuelidate.withParams:function(e,t){return"object"===r(e)&&void 0!==t?t:e((function(){}))};t.withParams=o}).call(this,r(36))},370:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(365).regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=n},371:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(365).regex)("numeric",/^[0-9]*$/);t.default=n},372:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(365);t.default=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},(function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r}))}},373:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(365).regex)("email",/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/);t.default=n},374:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(365),o=(0,n.withParams)({type:"ipAddress"},(function(e){if(!(0,n.req)(e))return!0;if("string"!=typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(l)}));t.default=o;var l=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},375:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(365);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},(function(t){if(!(0,n.req)(t))return!0;if("string"!=typeof t)return!1;var r="string"==typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(o)}))};var o=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},376:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(365);t.default=function(e){return(0,n.withParams)({type:"maxLength",max:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e}))}},377:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(365);t.default=function(e){return(0,n.withParams)({type:"minLength",min:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e}))}},378:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(365),o=(0,n.withParams)({type:"required"},(function(e){return"string"==typeof e?(0,n.req)(e.trim()):(0,n.req)(e)}));t.default=o},379:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(365);t.default=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},(function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)}))}},380:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(365);t.default=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},(function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)}))}},381:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(365);t.default=function(e){return(0,n.withParams)({type:"sameAs",eq:e},(function(t,r){return t===(0,n.ref)(e,this,r)}))}},382:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(365).regex)("url",/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i);t.default=n},383:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(365);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t.length>0&&t.reduce((function(t,r){return t||r.apply(e,n)}),!1)}))}},384:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(365);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t.length>0&&t.reduce((function(t,r){return t&&r.apply(e,n)}),!0)}))}},385:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(365);t.default=function(e){return(0,n.withParams)({type:"not"},(function(t,r){return!(0,n.req)(t)||!e.call(this,t,r)}))}},386:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(365);t.default=function(e){return(0,n.withParams)({type:"minValue",min:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))}},387:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(365);t.default=function(e){return(0,n.withParams)({type:"maxValue",max:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))}},388:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(365).regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=n},389:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(365).regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=n},593:function(e,t,r){"use strict";r.r(t);var n=r(10),o=(r(49),r(19),r(30)),l=r(37),d=r(366);o.c.add(l.e,l.j);var c={layout:"UserPanel",name:"Account",components:{},data:function(){return{disBusy:!1,delbusy:!1,disable:null,deleteAccount:null,errors:null,formData:{oldPassword:"",password:"",cPassword:""}}},validations:{formData:{oldPassword:{required:d.required,serverError:function(e){return""===e||!(null!=this.errors&&this.errors.oldPassword&&e===this.errors.oldPassword.value)}},password:{required:d.required,minLength:Object(d.minLength)(6),serverError:function(e){return""===e||!(null!=this.errors&&this.errors.password&&e===this.errors.password.value)}},cPassword:{sameAsPassword:Object(d.sameAs)("password")}}},mounted:function(){this.getDisableStatus()},methods:{hasRole:function(e){return this.$auth.hasScope(e)},onReset:function(e){e.preventDefault(),this.formData.oldPassword="",this.formData.password="",this.formData.cPassword=""},reSendVerificationEmail:function(){var e=this;this.$axios.post("user/reSendVerificationEmail").then((function(t){e.makeToast("success","Message",e.$t("account.reSendSuccessFull")),console.log(t.data)})).catch((function(t){t.response.data.errors&&(e.errors=t.response.data.errors),console.log(t.response)}))},getDisableStatus:function(){var e=this;this.$axios.post("/user/get-disable-status").then((function(t){e.disable=t.data.disable,e.deleteAccount=t.data.del})).catch((function(t){t.response.data.errors&&(e.errors=t.response.data.errors),console.log(t.response)}))},disableAccount:function(){var e=this;this.$bvModal.msgBoxConfirm(this.$t("account.disable.alert"),{title:"Confirm",size:"sm",buttonSize:"sm",okVariant:"danger",okTitle:"YES",cancelTitle:"NO",footerClass:"p-2 border-top-0",hideHeaderClose:!1,headerClass:"p-2 border-bottom-0",centered:!0}).then((function(t){if(!0===t){e.disBusy=!0,e.$axios.post("/user/set-disable-status",{dis:!0}).then((function(t){e.disable=t.data.disable,e.deleteAccount=t.data.del,location.reload()})).catch((function(t){t.response.data.errors&&(e.errors=t.response.data.errors)})).finally((function(){e.disBusy=!1}))}}))},activeAccount:function(){var e=this;this.$bvModal.msgBoxConfirm(this.$t("account.disable.alert"),{title:"Confirm",size:"sm",buttonSize:"sm",okVariant:"danger",okTitle:"YES",cancelTitle:"NO",footerClass:"p-2 border-top-0",hideHeaderClose:!1,headerClass:"p-2 border-bottom-0",centered:!0}).then((function(t){if(!0===t){e.disBusy=!0,e.$axios.post("/user/set-disable-status",{dis:!1}).then((function(t){e.disable=t.data.disable,e.deleteAccount=t.data.del,location.reload()})).catch((function(t){t.response.data.errors&&(e.errors=t.response.data.errors),console.log(t.response)})).finally((function(){e.disBusy=!1}))}}))},logout:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$auth.logout();case 2:e.$router.push("/login");case 3:case"end":return t.stop()}}),t)})))()},onSubmit:function(e){var t=this;this.$v.$reset(),this.errors=null,e.preventDefault(),this.$v.formData.$touch(),this.$v.formData.$invalid?console.log("vuelidate error"):this.$axios.post("user/change-password",this.formData,{withCredentials:!0}).then((function(e){t.makeToast("success","Message",t.$t("account.passwordChanged")),t.logout()})).catch((function(e){e.response.data.errors&&(t.errors=e.response.data.errors),console.log(e.response)}))},makeToast:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"success",header=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Message",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";this.$bvToast.toast(this.$t(t),{title:header,variant:e,solid:!0})}}},f=r(73),component=Object(f.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{staticClass:"container-padding"},[r("b-row",{staticClass:"d-md-flex m-center"},[r("div",{staticClass:"login-wrap px-xl-5 px-lg-5 px-md-3 px-sm-2 px-2 col-md-12 col-lg-10 col-xl-8"},[r("b-form",{on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.onSubmit.apply(null,arguments)},reset:e.onReset}},[r("div",{staticClass:"d-flex"},[r("div",{staticClass:"w-100"},[r("h3",{staticClass:"mb-4"},[e._v(e._s(e.$t("accountSetting")))])])]),e._v(" "),r("h5",[e._v(" "+e._s(e.$t("email")))]),e._v(" "),r("hr",{staticClass:"mt-0 mb-2"}),e._v(" "),r("div",{staticClass:"mt-4"},[r("span",{staticClass:"font-weight-bold ",staticStyle:{"font-size":"large"}},[e._v(e._s(e.$auth.user.email))]),e._v(" "),e.$auth.loggedIn&&!0===e.$auth.user.emailConfirmed?r("b-badge",{attrs:{variant:"success"}},[e._v(e._s(e.$t("account.verified"))+"\n            "),r("font-awesome-icon",{attrs:{icon:["fas","check-circle"]}})],1):r("b-badge",{attrs:{variant:"warning"}},[e._v(e._s(e.$t("account.unVerified"))+"  "),r("font-awesome-icon",{attrs:{icon:["fas","exclamation-triangle"]}})],1),e._v(" "),r("b-alert",{staticClass:"mt-3",attrs:{show:e.$auth.loggedIn&&!0!==e.$auth.user.emailConfirmed,variant:"warning"}},[e._v("\n            "+e._s(e.$t("account.unVerifiedAlert"))+"\n            "),r("br"),e._v(" "),r("br"),e._v("\n            "+e._s(e.$t("account.reSendMessage"))+"\n            "),r("br"),e._v(" "),r("b-button",{staticClass:"mt-2",attrs:{variant:"info",size:"sm"},on:{click:e.reSendVerificationEmail}},[e._v(e._s(e.$t("account.sendEmailAgain")))])],1)],1),e._v(" "),r("div",{staticClass:"mt-4"},[e.hasRole("tutor")?r("b-alert",{staticClass:"mt-3",attrs:{show:e.$auth.loggedIn,variant:null===e.disable||!1===e.disable?"danger":"info"}},[e._v("\n            "+e._s(null===e.disable||!1===e.disable?e.$t("account.disableMessage"):e.$t("account.activeMessage"))+"\n            "),r("br"),e._v(" "),null===e.disable||!1===e.disable?r("b-button",{staticClass:"mt-2",attrs:{variant:"warning",size:"sm"},on:{click:e.disableAccount}},[r("b-spinner",{directives:[{name:"show",rawName:"v-show",value:e.disBusy,expression:"disBusy"}],attrs:{small:"",type:"grow"}}),e._v("\n              "+e._s(e.$t("account.disable")))],1):e._e(),e._v(" "),!0===e.disable?r("b-button",{staticClass:"mt-2",attrs:{variant:"info",size:"sm"},on:{click:e.activeAccount}},[r("b-spinner",{directives:[{name:"show",rawName:"v-show",value:e.disBusy,expression:"disBusy"}],attrs:{small:"",type:"grow"}}),e._v("\n\n              "+e._s(e.$t("account.active")))],1):e._e()],1):e._e()],1),e._v(" "),r("h5",{staticClass:"mt-5"},[e._v("\n          "+e._s(e.$t("changePassword"))+"\n        ")]),e._v(" "),r("hr",{staticClass:"mt-0 mb-2"}),e._v(" "),r("b-form-group",{attrs:{label:e.$t("oldPassword")+":","label-for":"input-oldPassword-login"}},[r("b-form-input",{class:{"is-invalid":e.$v.formData.oldPassword.$error},attrs:{autocomplete:"off",type:"password",id:"input-oldPassword-login"},model:{value:e.$v.formData.oldPassword.$model,callback:function(t){e.$set(e.$v.formData.oldPassword,"$model","string"==typeof t?t.trim():t)},expression:"$v.formData.oldPassword.$model"}}),e._v(" "),e.$v.formData.oldPassword.required?e._e():r("div",{staticClass:"invalid-feedback"},[e._v(e._s(e.$t("oldPasswordRequired"))+"\n          ")]),e._v(" "),e.$v.formData.oldPassword.serverError?e._e():r("div",{staticClass:"invalid-feedback"},[e._v(e._s(e.$t(e.errors.oldPassword.msg))+"\n          ")])],1),e._v(" "),r("b-form-group",{attrs:{id:"input-group-Login2",label:e.$t("newPassword")+":","label-for":"input-password-login"}},[r("b-form-input",{class:{"is-invalid":e.$v.formData.password.$error},attrs:{autocomplete:"off",type:"password",id:"input-password-login"},model:{value:e.$v.formData.password.$model,callback:function(t){e.$set(e.$v.formData.password,"$model","string"==typeof t?t.trim():t)},expression:"$v.formData.password.$model"}}),e._v(" "),e.$v.formData.password.minLength?e._e():r("div",{staticClass:"invalid-feedback"},[e._v("\n            "+e._s(e.$t("passwordMinLen",{minLenNum:e.$v.formData.password.$params.minLength.min}))+"\n          ")]),e._v(" "),e.$v.formData.password.required?e._e():r("div",{staticClass:"invalid-feedback"},[e._v(e._s(e.$t("passwordRequired")))]),e._v(" "),e.$v.formData.password.serverError?e._e():r("div",{staticClass:"invalid-feedback"},[e._v(e._s(e.$t(e.errors.password.msg)))])],1),e._v(" "),r("b-form-group",{attrs:{id:"input-group-Login2",label:e.$t("confirmNewPassword")+":","label-for":"input-cPassword-login"}},[r("b-form-input",{class:{"is-invalid":e.$v.formData.cPassword.$error},attrs:{autocomplete:"off",type:"password",id:"input-cPassword-login"},model:{value:e.$v.formData.cPassword.$model,callback:function(t){e.$set(e.$v.formData.cPassword,"$model","string"==typeof t?t.trim():t)},expression:"$v.formData.cPassword.$model"}}),e._v(" "),e.$v.formData.cPassword.sameAsPassword?e._e():r("div",{staticClass:"invalid-feedback"},[e._v(e._s(e.$t("passwordsIdentical"))+"\n          ")])],1),e._v(" "),r("b-form-group",[r("b-button",{staticClass:"form-control btn btn-crl  btn-primary submit  mt-4 btn-reg w-30",attrs:{type:"submit"}},[e._v(e._s(e.$t("changePassword"))+"\n          ")])],1)],1)],1)])],1)}),[],!1,null,"0a109864",null);t.default=component.exports}}]);
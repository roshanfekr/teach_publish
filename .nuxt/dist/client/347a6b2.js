(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{365:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return o.default}}),t.regex=t.ref=t.len=t.req=void 0;var n,o=(n=r(368))&&n.__esModule?n:{default:n};function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var l=function(e){if(Array.isArray(e))return!!e.length;if(null==e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===f(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=l;t.len=function(e){return Array.isArray(e)?e.length:"object"===f(e)?Object.keys(e).length:String(e).length};t.ref=function(e,t,r){return"function"==typeof e?e.call(t,r):r[e]};t.regex=function(e,t){return(0,o.default)({type:e},(function(e){return!l(e)||t.test(e)}))}},366:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return x.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return j.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return O.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return $.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return M.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return k.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return C.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return D.default}}),t.helpers=void 0;var n=A(r(367)),o=A(r(370)),f=A(r(371)),l=A(r(372)),d=A(r(373)),c=A(r(374)),v=A(r(375)),m=A(r(376)),y=A(r(377)),h=A(r(378)),_=A(r(379)),x=A(r(380)),w=A(r(381)),P=A(r(382)),j=A(r(383)),O=A(r(384)),$=A(r(385)),M=A(r(386)),k=A(r(387)),C=A(r(388)),D=A(r(389)),z=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};desc.get||desc.set?Object.defineProperty(t,r,desc):t[r]=e[r]}return t.default=e,t}(r(365));function A(e){return e&&e.__esModule?e:{default:e}}t.helpers=z},367:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(365).regex)("alpha",/^[a-zA-Z]*$/);t.default=n},368:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="web"===e.env.BUILD?r(369).withParams:r(253).withParams;t.default=n}).call(this,r(116))},369:function(e,t,r){"use strict";(function(e){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var n="undefined"!=typeof window?window:void 0!==e?e:{},o=n.vuelidate?n.vuelidate.withParams:function(e,t){return"object"===r(e)&&void 0!==t?t:e((function(){}))};t.withParams=o}).call(this,r(36))},370:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(365).regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=n},371:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(365).regex)("numeric",/^[0-9]*$/);t.default=n},372:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(365);t.default=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},(function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r}))}},373:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(365).regex)("email",/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/);t.default=n},374:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(365),o=(0,n.withParams)({type:"ipAddress"},(function(e){if(!(0,n.req)(e))return!0;if("string"!=typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(f)}));t.default=o;var f=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},375:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(365);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},(function(t){if(!(0,n.req)(t))return!0;if("string"!=typeof t)return!1;var r="string"==typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(o)}))};var o=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},376:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(365);t.default=function(e){return(0,n.withParams)({type:"maxLength",max:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e}))}},377:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(365);t.default=function(e){return(0,n.withParams)({type:"minLength",min:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e}))}},378:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(365),o=(0,n.withParams)({type:"required"},(function(e){return"string"==typeof e?(0,n.req)(e.trim()):(0,n.req)(e)}));t.default=o},379:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(365);t.default=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},(function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)}))}},380:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(365);t.default=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},(function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)}))}},381:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(365);t.default=function(e){return(0,n.withParams)({type:"sameAs",eq:e},(function(t,r){return t===(0,n.ref)(e,this,r)}))}},382:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(365).regex)("url",/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i);t.default=n},383:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(365);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t.length>0&&t.reduce((function(t,r){return t||r.apply(e,n)}),!1)}))}},384:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(365);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t.length>0&&t.reduce((function(t,r){return t&&r.apply(e,n)}),!0)}))}},385:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(365);t.default=function(e){return(0,n.withParams)({type:"not"},(function(t,r){return!(0,n.req)(t)||!e.call(this,t,r)}))}},386:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(365);t.default=function(e){return(0,n.withParams)({type:"minValue",min:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))}},387:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(365);t.default=function(e){return(0,n.withParams)({type:"maxValue",max:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))}},388:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(365).regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=n},389:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(365).regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=n},425:function(e,t,r){var content=r(481);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(63).default)("266b5609",content,!0,{sourceMap:!1})},480:function(e,t,r){"use strict";r(425)},481:function(e,t,r){var n=r(62)(!1);n.push([e.i,"@media (max-width:991.98px){.login-wrap[data-v-1ffb1839],.text-wrap[data-v-1ffb1839]{width:100%!important}}.login-wrap[data-v-1ffb1839],.text-wrap[data-v-1ffb1839]{width:50%}.text-wrap[data-v-1ffb1839]{background:var(--color2);border:1px solid var(--color2);color:#fff;background:var(--color1);background:-webkit-gradient(left top,right bottom,color-stop(0,rgba(var(--gradian-color1))),color-stop(100%,rgba(var(--gradian-color2))));background:linear-gradient(135deg,rgba(var(--gradian-color1)),rgba(var(--gradian-color2)));filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=rgba(var(--gradian-color1)),endColorstr=rgba(var(--gradian-color2)),GradientType=1)}.btn.btn-white.btn-outline-white[data-v-1ffb1839]{border:1px solid #fff;background:transparent;color:#fff}.btn.btn-white[data-v-1ffb1839]{background:#fff;border:1px solid #fff;color:#fff}.btn[data-v-1ffb1839]{height:48px!important;cursor:pointer;box-shadow:none!important;font-size:15px;padding:12px 20px;border-radius:50px}.btn.btn-white.btn-outline-white[data-v-1ffb1839]:hover{border:1px solid transparent;background:#fff;color:#000}.btn.btn-primary[data-v-1ffb1839]{background:var(--color2);background:var(--color1);background:-webkit-gradient(left top,right bottom,color-stop(0,rgba(var(--gradian-color1))),color-stop(100%,rgba(var(--gradian-color2))));background:linear-gradient(135deg,rgba(var(--gradian-color1)),rgba(var(--gradian-color2)));filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=rgba(var(--gradian-color1)),endColorstr=rgba(var(--gradian-color2)),GradientType=1)}.btn.btn-primary[data-v-1ffb1839],.btn.btn-primary[data-v-1ffb1839]:hover{border:1px solid var(--color2);color:#fff}.btn.btn-primary[data-v-1ffb1839]:hover{background:linear-gradient(135deg,rgba(var(--gradian-color2)),rgba(var(--gradian-color1)))}.social-media .social-icon[data-v-1ffb1839]{display:block;width:40px;height:40px;background:transparent;border:1px solid rgba(0,0,0,.05);font-size:16px;margin-right:5px;border-radius:50%}.social-media .social-icon[data-v-1ffb1839]:focus,.social-media .social-icon[data-v-1ffb1839]:hover{background:linear-gradient(135deg,rgba(var(--gradian-color2)),rgba(var(--gradian-color1)));color:#fff}input[data-v-1ffb1839]:focus,select[data-v-1ffb1839]:focus,textarea[data-v-1ffb1839]:focus{outline:none!important}",""]),e.exports=n},577:function(e,t,r){"use strict";r.r(t);var n=r(10),o=(r(49),{middleware:"auth",auth:"guest",name:"ForgetPassword",components:{},data:function(){return{response:{msg:"",variant:""},formData:{email:""},errors:null}},validations:{formData:{email:{required:r(366).required,serverError:function(e){return""===e||!(null!=this.errors&&this.errors.email&&e==this.errors.email.value)}}}},head:function(){return{title:"Forget Password",meta:[{name:"description",content:"sign in with Google or Facebook or can create an account"},{name:"keywords",content:"sign in, login, google, facebook, account"}]}},mounted:function(){},methods:{onReset:function(e){e.preventDefault(),this.formData.email=""},onSubmit:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:t.$v.$reset(),t.errors=null,e.preventDefault(),t.$v.formData.$touch(),t.$v.formData.$invalid?console.log("vuelidate error"):t.$axios.post("user/forget-password",t.formData).then(function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.response=r.data;case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){e.response.data.errors&&(t.errors=e.response.data.errors),console.log(e)}));case 5:case"end":return r.stop()}}),r)})))()}}}),f=(r(480),r(73)),component=Object(f.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"main-body-container-content"},[r("b-container",{staticClass:"container-padding"},[""!=e.response.msg?r("b-row",{staticClass:"d-md-flex col-md-12 col-lg-10 m-center"},[r("b-row",{staticClass:"d-md-flex col-md-12 col-lg-10 m-center"},[r("b-alert",{staticClass:"w-100",attrs:{variant:e.response.variant,show:""}},[e._v(e._s(e.response.msg))])],1),e._v(" "),r("b-row",{staticClass:"d-md-flex col-md-12 col-lg-10 m-center"},[r("b-button",{staticClass:"btn btn-crl-mini btn-primary ",attrs:{to:"/login"}},[e._v("Continue")])],1)],1):r("b-row",{staticClass:"d-md-flex col-md-12 col-lg-10 m-center"},[r("div",{staticClass:"text-wrap p-4 p-lg-5   d-flex text-center align-items-center "},[r("div",{staticClass:"text w-100"},[r("h2",[e._v(e._s(e.$t("forgetPasswordTitle")))]),e._v(" "),r("p",{staticClass:"mt-5"},[e._v(e._s(e.$t("rememberPassword")))]),e._v(" "),r("b-button",{staticClass:"my-3 btn-white btn-outline-white",attrs:{pill:"",to:e.localePath("/login")}},[e._v(e._s(e.$t("signIn")))])],1)]),e._v(" "),r("div",{staticClass:"login-wrap p-4 p-lg-5"},[r("b-form",{staticClass:"m-right",on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.onSubmit.apply(null,arguments)},reset:e.onReset}},[r("div",{staticClass:"d-flex"},[r("div",{staticClass:"w-100"},[r("h3",{staticClass:"mb-4 font-weight-bold",staticStyle:{"font-size":"medium"}},[e._v(e._s(e.$t("forgetPassword")))])])]),e._v(" "),r("b-form-group",{attrs:{id:"input-group-Login1",label:e.$t("email"),"label-for":"input-email-login"}},[r("b-form-input",{class:{"is-invalid":e.$v.formData.email.$error},attrs:{autocomplete:"off",id:"input-email-login"},model:{value:e.$v.formData.email.$model,callback:function(t){e.$set(e.$v.formData.email,"$model","string"==typeof t?t.trim():t)},expression:"$v.formData.email.$model"}}),e._v(" "),e.$v.formData.email.required?e._e():r("div",{staticClass:"invalid-feedback"},[e._v(e._s(e.$t("emailRequired"))+"\n            ")]),e._v(" "),e.$v.formData.email.serverError?e._e():r("div",{staticClass:"invalid-feedback"},[e._v("\n              "+e._s(e.errors.email.msg)+"\n            ")])],1),e._v(" "),r("b-form-group",[r("b-button",{staticClass:"form-control btn btn-primary submit px-3",attrs:{type:"submit"}},[e._v(e._s(e.$t("send")))])],1)],1)],1)])],1)],1)}),[],!1,null,"1ffb1839",null);t.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{365:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return o.default}}),t.regex=t.ref=t.len=t.req=void 0;var n,o=(n=r(368))&&n.__esModule?n:{default:n};function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var f=function(e){if(Array.isArray(e))return!!e.length;if(null==e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===l(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=f;t.len=function(e){return Array.isArray(e)?e.length:"object"===l(e)?Object.keys(e).length:String(e).length};t.ref=function(e,t,r){return"function"==typeof e?e.call(t,r):r[e]};t.regex=function(e,t){return(0,o.default)({type:e},(function(e){return!f(e)||t.test(e)}))}},366:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return $.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return x.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return j.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return O.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return C.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return M.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return k.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return S.default}}),t.helpers=void 0;var n=A(r(367)),o=A(r(370)),l=A(r(371)),f=A(r(372)),c=A(r(373)),d=A(r(374)),m=A(r(375)),v=A(r(376)),y=A(r(377)),h=A(r(378)),_=A(r(379)),$=A(r(380)),P=A(r(381)),x=A(r(382)),j=A(r(383)),w=A(r(384)),O=A(r(385)),C=A(r(386)),M=A(r(387)),k=A(r(388)),S=A(r(389)),z=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};desc.get||desc.set?Object.defineProperty(t,r,desc):t[r]=e[r]}return t.default=e,t}(r(365));function A(e){return e&&e.__esModule?e:{default:e}}t.helpers=z},367:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(365).regex)("alpha",/^[a-zA-Z]*$/);t.default=n},368:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="web"===e.env.BUILD?r(369).withParams:r(253).withParams;t.default=n}).call(this,r(116))},369:function(e,t,r){"use strict";(function(e){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var n="undefined"!=typeof window?window:void 0!==e?e:{},o=n.vuelidate?n.vuelidate.withParams:function(e,t){return"object"===r(e)&&void 0!==t?t:e((function(){}))};t.withParams=o}).call(this,r(36))},370:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(365).regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=n},371:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(365).regex)("numeric",/^[0-9]*$/);t.default=n},372:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(365);t.default=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},(function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r}))}},373:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(365).regex)("email",/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/);t.default=n},374:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(365),o=(0,n.withParams)({type:"ipAddress"},(function(e){if(!(0,n.req)(e))return!0;if("string"!=typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(l)}));t.default=o;var l=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},375:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(365);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},(function(t){if(!(0,n.req)(t))return!0;if("string"!=typeof t)return!1;var r="string"==typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(o)}))};var o=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},376:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(365);t.default=function(e){return(0,n.withParams)({type:"maxLength",max:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e}))}},377:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(365);t.default=function(e){return(0,n.withParams)({type:"minLength",min:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e}))}},378:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(365),o=(0,n.withParams)({type:"required"},(function(e){return"string"==typeof e?(0,n.req)(e.trim()):(0,n.req)(e)}));t.default=o},379:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(365);t.default=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},(function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)}))}},380:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(365);t.default=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},(function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)}))}},381:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(365);t.default=function(e){return(0,n.withParams)({type:"sameAs",eq:e},(function(t,r){return t===(0,n.ref)(e,this,r)}))}},382:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(365).regex)("url",/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i);t.default=n},383:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(365);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t.length>0&&t.reduce((function(t,r){return t||r.apply(e,n)}),!1)}))}},384:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(365);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t.length>0&&t.reduce((function(t,r){return t&&r.apply(e,n)}),!0)}))}},385:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(365);t.default=function(e){return(0,n.withParams)({type:"not"},(function(t,r){return!(0,n.req)(t)||!e.call(this,t,r)}))}},386:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(365);t.default=function(e){return(0,n.withParams)({type:"minValue",min:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))}},387:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(365);t.default=function(e){return(0,n.withParams)({type:"maxValue",max:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))}},388:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(365).regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=n},389:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(365).regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=n},465:function(e,t,r){e.exports=r.p+"img/knowledge.0cabd54.jpg"},574:function(e,t,r){"use strict";r.r(t);var n=r(10),o=(r(19),r(21),r(49),r(366)),l={name:"ContactUs",components:{},data:function(){return{inProgress:!1,form:{name:"",subject:"",tel:"",email:"",msg:"",token:""},show:!0}},head:function(){return{title:"Contact Us",meta:[{name:"description",content:""},{name:"keywords",content:""}]}},validations:{form:{name:{required:o.required,serverError:function(e){return""===e||!(null!=this.errors&&this.errors.username&&e===this.errors.username.value)}},subject:{required:o.required,serverError:function(e){return""===e||!(null!=this.errors&&this.errors.subject&&e===this.errors.subject.value)}},email:{required:o.required,email:o.email,serverError:function(e){return""===e||!(null!=this.errors&&this.errors.email&&e===this.errors.email.value)}},msg:{required:o.required,serverError:function(e){return""===e||!(null!=this.errors&&this.errors.msg&&e===this.errors.msg.value)}}}},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$recaptcha.init();case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.log(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})))()},methods:{onSubmit:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t.inProgress=!0,t.errors=null,t.$v.$reset(),e.preventDefault(),t.$v.form.$touch(),!t.$v.form.$invalid){r.next=10;break}t.inProgress=!1,console.log("vuelidate error"),r.next=14;break;case 10:return r.next=12,t.$recaptcha.execute("contactus");case 12:t.form.token=r.sent,t.$axios.post("message/create",t.form).then((function(){t.show=!1})).catch((function(e){e.response.data.errors&&(t.errors=e.response.data.errors),console.log(e)})).finally((function(){t.inProgress=!1}));case 14:case"end":return r.stop()}}),r)})))()},onReset:function(e){var t=this;this.errors=null,this.$v.$reset(),e.preventDefault(),this.form.email="",this.form.name="",this.form.tel="",this.form.subject="",this.form.msg="",this.show=!1,this.$nextTick((function(){t.show=!0}))}},beforeDestroy:function(){this.$recaptcha.destroy()}},f=r(73),component=Object(f.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-body-container-content mb-5"},[n("b-container",{staticClass:"container-padding"},[n("b-row",[n("b-col",{staticClass:"text-center col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"},[n("b-img",{attrs:{alt:"teach",width:"100px",src:r(256)}}),e._v(" "),n("div",{staticClass:"text-left",staticStyle:{"font-size":"larger","font-family":"sans-serif"}},[n("br"),e._v("\n                  "+e._s(e.$t("contactus.text"))+"\n                    "),n("br"),e._v("\n                  "+e._s(e.$t("contactus.text1"))+"\n                  "),n("br"),e._v(" "),n("br"),e._v(" "),n("span",{staticClass:"font-weight-bold",staticStyle:{"font-size":"smaller",color:"#1c92ff"}},[e._v("info@tuteloop.ca")])])],1),e._v(" "),n("b-col",{staticClass:"col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"},[n("div",{staticClass:"image-panel"},[n("b-img",{attrs:{alt:"teach",src:r(465)}})],1)])],1),e._v(" "),n("div",{staticClass:"fusion-separator"},[n("span",{staticClass:"icon-wrapper"},[n("font-awesome-icon",{staticClass:"font-color",attrs:{icon:["fas","graduation-cap"]}})],1)]),e._v(" "),n("b-row",{staticClass:"pr-2 pl-2"},[n("b-col",{staticClass:"col-xl-6 col-lg-6 col-md-7 col-sm-12 col-12"},[e.show?n("b-form",{staticClass:"w-100",on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.onSubmit.apply(null,arguments)},reset:e.onReset}},[n("div",{staticClass:"mb-4 text-primary"},[e._v("Send your message")]),e._v(" "),n("b-form-group",{attrs:{id:"input-group-1",label:"Name ","label-for":"input-1"}},[n("b-form-input",{class:{"is-invalid":e.$v.form.name.$error,"is-valid":!e.$v.form.name.$invalid},attrs:{id:"input-1",autocomplete:"off"},model:{value:e.$v.form.name.$model,callback:function(t){e.$set(e.$v.form.name,"$model","string"==typeof t?t.trim():t)},expression:"$v.form.name.$model"}}),e._v(" "),e.$v.form.name.required?e._e():n("div",{staticClass:"invalid-feedback"},[e._v("Name is required\n                ")]),e._v(" "),e.$v.form.name.serverError?e._e():n("div",{staticClass:"invalid-feedback"},[e._v(e._s(e.errors.name.msg))])],1),e._v(" "),n("b-form-group",{attrs:{id:"input-group-2",label:"Subject ","label-for":"input-2"}},[n("b-form-input",{class:{"is-invalid":e.$v.form.subject.$error,"is-valid":!e.$v.form.subject.$invalid},attrs:{autocomplete:"off",id:"input-2"},model:{value:e.$v.form.subject.$model,callback:function(t){e.$set(e.$v.form.subject,"$model","string"==typeof t?t.trim():t)},expression:"$v.form.subject.$model"}}),e._v(" "),e.$v.form.subject.required?e._e():n("div",{staticClass:"invalid-feedback"},[e._v("Required\n                ")]),e._v(" "),e.$v.form.subject.serverError?e._e():n("div",{staticClass:"invalid-feedback"},[e._v(e._s(e.errors.subject.msg))])],1),e._v(" "),n("b-form-group",{attrs:{id:"input-group-3",label:"Email ","label-for":"input-3"}},[n("b-form-input",{class:{"is-invalid":e.$v.form.email.$error,"is-valid":!e.$v.form.email.$invalid},attrs:{autocomplete:"off",id:"input-3"},model:{value:e.$v.form.email.$model,callback:function(t){e.$set(e.$v.form.email,"$model","string"==typeof t?t.trim():t)},expression:"$v.form.email.$model"}}),e._v(" "),e.$v.form.email.required?e._e():n("div",{staticClass:"invalid-feedback"},[e._v("Required\n                ")]),e._v(" "),e.$v.form.email.email?e._e():n("div",{staticClass:"invalid-feedback"},[e._v("Email format not correct\n                ")]),e._v(" "),e.$v.form.email.serverError?e._e():n("div",{staticClass:"invalid-feedback"},[e._v(e._s(e.errors.email.msg))])],1),e._v(" "),n("b-form-group",{attrs:{id:"input-group-4",label:"Message ","label-for":"input-4"}},[n("b-form-textarea",{class:{"is-invalid":e.$v.form.msg.$error,"is-valid":!e.$v.form.msg.$invalid},attrs:{id:"input-4",autocomplete:"off",rows:"4",placeholder:"Insert your message"},model:{value:e.$v.form.msg.$model,callback:function(t){e.$set(e.$v.form.msg,"$model","string"==typeof t?t.trim():t)},expression:"$v.form.msg.$model"}}),e._v(" "),e.$v.form.msg.required?e._e():n("div",{staticClass:"invalid-feedback"},[e._v("Message is required\n                ")]),e._v(" "),e.$v.form.msg.serverError?e._e():n("div",{staticClass:"invalid-feedback"},[e._v(e._s(e.errors.msg.msg))])],1),e._v(" "),n("b-button",{staticClass:"m-2",attrs:{type:"submit",variant:"primary"}},[e._v("Send\n                "),n("b-spinner",{directives:[{name:"show",rawName:"v-show",value:e.inProgress,expression:"inProgress"}],staticStyle:{width:"24px",height:"24px",color:"#ffffff"},attrs:{type:"grow"}})],1),e._v(" "),n("b-button",{staticClass:"m-2",attrs:{type:"reset",variant:"danger"}},[e._v("Clear Form")])],1):n("b-row",{staticClass:"w-100"},[n("b-alert",{staticClass:"w-100",attrs:{variant:"success",show:""}},[e._v("Send message success.")]),e._v(" "),n("b-button",{staticClass:"m-2",attrs:{variant:"primary"},on:{click:e.onReset}},[e._v("New message")])],1)],1)],1)],1)],1)}),[],!1,null,"6922c674",null);t.default=component.exports}}]);
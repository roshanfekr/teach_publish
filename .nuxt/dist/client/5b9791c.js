(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{432:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.req=t.regex=t.ref=t.len=void 0,Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return o.default}});var n,o=(n=r(435))&&n.__esModule?n:{default:n};function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}var f=function(e){if(Array.isArray(e))return!!e.length;if(null==e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===l(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=f;t.len=function(e){return Array.isArray(e)?e.length:"object"===l(e)?Object.keys(e).length:String(e).length};t.ref=function(e,t,r){return"function"==typeof e?e.call(t,r):r[e]};t.regex=function(e,t){return(0,o.default)({type:e},(function(e){return!f(e)||t.test(e)}))}},433:function(e,t,r){"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return O.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return z.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return d.default}}),t.helpers=void 0,Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return S.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return k.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return C.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return M.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return $.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return x.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return j.default}});var o=E(r(434)),l=E(r(437)),f=E(r(438)),c=E(r(439)),d=E(r(440)),m=E(r(441)),v=E(r(442)),y=E(r(443)),h=E(r(444)),_=E(r(445)),$=E(r(446)),P=E(r(447)),x=E(r(448)),j=E(r(449)),w=E(r(450)),O=E(r(451)),M=E(r(452)),C=E(r(453)),k=E(r(454)),S=E(r(455)),z=E(r(456)),A=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=D(t);if(r&&r.has(e))return r.get(e);var o={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in e)if("default"!==f&&Object.prototype.hasOwnProperty.call(e,f)){var desc=l?Object.getOwnPropertyDescriptor(e,f):null;desc&&(desc.get||desc.set)?Object.defineProperty(o,f,desc):o[f]=e[f]}o.default=e,r&&r.set(e,o);return o}(r(432));function D(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(D=function(e){return e?r:t})(e)}function E(e){return e&&e.__esModule?e:{default:e}}t.helpers=A},434:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(432).regex)("alpha",/^[a-zA-Z]*$/);t.default=n},435:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="web"===e.env.BUILD?r(436).withParams:r(293).withParams;t.default=n}).call(this,r(116))},436:function(e,t,r){"use strict";(function(e){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var n="undefined"!=typeof window?window:void 0!==e?e:{},o=n.vuelidate?n.vuelidate.withParams:function(e,t){return"object"===r(e)&&void 0!==t?t:e((function(){}))};t.withParams=o}).call(this,r(39))},437:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(432).regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=n},438:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(432).regex)("numeric",/^[0-9]*$/);t.default=n},439:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(432);t.default=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},(function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r}))}},440:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(432).regex)("email",/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i);t.default=n},441:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(432),o=(0,n.withParams)({type:"ipAddress"},(function(e){if(!(0,n.req)(e))return!0;if("string"!=typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(l)}));t.default=o;var l=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},442:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(432);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},(function(t){if(!(0,n.req)(t))return!0;if("string"!=typeof t)return!1;var r="string"==typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(o)}))};var o=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},443:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(432);t.default=function(e){return(0,n.withParams)({type:"maxLength",max:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e}))}},444:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(432);t.default=function(e){return(0,n.withParams)({type:"minLength",min:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e}))}},445:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(432),o=(0,n.withParams)({type:"required"},(function(e){return"string"==typeof e?(0,n.req)(e.trim()):(0,n.req)(e)}));t.default=o},446:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(432);t.default=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},(function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)}))}},447:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(432);t.default=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},(function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)}))}},448:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(432);t.default=function(e){return(0,n.withParams)({type:"sameAs",eq:e},(function(t,r){return t===(0,n.ref)(e,this,r)}))}},449:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(432).regex)("url",/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i);t.default=n},450:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(432);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t.length>0&&t.reduce((function(t,r){return t||r.apply(e,n)}),!1)}))}},451:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(432);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t.length>0&&t.reduce((function(t,r){return t&&r.apply(e,n)}),!0)}))}},452:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(432);t.default=function(e){return(0,n.withParams)({type:"not"},(function(t,r){return!(0,n.req)(t)||!e.call(this,t,r)}))}},453:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(432);t.default=function(e){return(0,n.withParams)({type:"minValue",min:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))}},454:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(432);t.default=function(e){return(0,n.withParams)({type:"maxValue",max:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))}},455:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(432).regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=n},456:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(432).regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=n},489:function(e,t,r){e.exports=r.p+"img/logo-b.8032370.png"},542:function(e,t,r){e.exports=r.p+"img/knowledge.0cabd54.jpg"},668:function(e,t,r){"use strict";r.r(t);r(24),r(40);var n=r(12),o=(r(1),r(53),r(433)),l={name:"ContactUs",components:{},data:function(){return{inProgress:!1,form:{name:"",subject:"",tel:"",email:"",msg:"",token:""},show:!0}},head:function(){return{title:"Contact Us",meta:[{name:"description",content:""},{name:"keywords",content:""}]}},validations:{form:{name:{required:o.required,serverError:function(e){return""===e||!(null!=this.errors&&this.errors.username&&e===this.errors.username.value)}},subject:{required:o.required,serverError:function(e){return""===e||!(null!=this.errors&&this.errors.subject&&e===this.errors.subject.value)}},email:{required:o.required,email:o.email,serverError:function(e){return""===e||!(null!=this.errors&&this.errors.email&&e===this.errors.email.value)}},msg:{required:o.required,serverError:function(e){return""===e||!(null!=this.errors&&this.errors.msg&&e===this.errors.msg.value)}}}},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$recaptcha.init();case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.log(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})))()},methods:{onSubmit:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t.inProgress=!0,t.errors=null,t.$v.$reset(),e.preventDefault(),t.$v.form.$touch(),!t.$v.form.$invalid){r.next=10;break}t.inProgress=!1,console.log("vuelidate error"),r.next=14;break;case 10:return r.next=12,t.$recaptcha.execute("contactus");case 12:t.form.token=r.sent,t.$axios.post("message/create",t.form).then((function(){t.show=!1})).catch((function(e){e.response.data.errors&&(t.errors=e.response.data.errors),console.log(e)})).finally((function(){t.inProgress=!1}));case 14:case"end":return r.stop()}}),r)})))()},onReset:function(e){var t=this;this.errors=null,this.$v.$reset(),e.preventDefault(),this.form.email="",this.form.name="",this.form.tel="",this.form.subject="",this.form.msg="",this.show=!1,this.$nextTick((function(){t.show=!0}))}},beforeDestroy:function(){this.$recaptcha.destroy()}},f=r(80),component=Object(f.a)(l,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"main-body-container-content mb-5"},[t("b-container",{staticClass:"container-padding"},[t("b-row",[t("b-col",{staticClass:"text-center col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"},[t("b-img",{attrs:{alt:"teach",width:"200",src:r(489)}}),e._v(" "),t("div",{staticClass:"text-left",staticStyle:{"font-size":"larger","font-family":"sans-serif"}},[t("br"),e._v("\n                  "+e._s(e.$t("contactus.text"))+"\n                    "),t("br"),e._v("\n                  "+e._s(e.$t("contactus.text1"))+"\n                  "),t("br"),e._v(" "),t("br"),e._v(" "),t("span",{staticClass:"font-weight-bold",staticStyle:{"font-size":"smaller",color:"#1c92ff"}},[e._v("info@tuteloop.ca")])])],1),e._v(" "),t("b-col",{staticClass:"col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"},[t("div",{staticClass:"image-panel"},[t("b-img",{attrs:{alt:"teach",src:r(542)}})],1)])],1),e._v(" "),t("div",{staticClass:"fusion-separator"},[t("span",{staticClass:"icon-wrapper"},[t("font-awesome-icon",{staticClass:"font-color",attrs:{icon:["fas","graduation-cap"]}})],1)]),e._v(" "),t("b-row",{staticClass:"pr-2 pl-2"},[t("b-col",{staticClass:"col-xl-6 col-lg-6 col-md-7 col-sm-12 col-12"},[e.show?t("b-form",{staticClass:"w-100",on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.onSubmit.apply(null,arguments)},reset:e.onReset}},[t("div",{staticClass:"mb-4 text-primary"},[e._v("Send your message")]),e._v(" "),t("b-form-group",{attrs:{id:"input-group-1",label:"Name ","label-for":"input-1"}},[t("b-form-input",{class:{"is-invalid":e.$v.form.name.$error,"is-valid":!e.$v.form.name.$invalid},attrs:{id:"input-1",autocomplete:"off"},model:{value:e.$v.form.name.$model,callback:function(t){e.$set(e.$v.form.name,"$model","string"==typeof t?t.trim():t)},expression:"$v.form.name.$model"}}),e._v(" "),e.$v.form.name.required?e._e():t("div",{staticClass:"invalid-feedback"},[e._v("Name is required\n                ")]),e._v(" "),e.$v.form.name.serverError?e._e():t("div",{staticClass:"invalid-feedback"},[e._v(e._s(e.errors.name.msg))])],1),e._v(" "),t("b-form-group",{attrs:{id:"input-group-2",label:"Subject ","label-for":"input-2"}},[t("b-form-input",{class:{"is-invalid":e.$v.form.subject.$error,"is-valid":!e.$v.form.subject.$invalid},attrs:{autocomplete:"off",id:"input-2"},model:{value:e.$v.form.subject.$model,callback:function(t){e.$set(e.$v.form.subject,"$model","string"==typeof t?t.trim():t)},expression:"$v.form.subject.$model"}}),e._v(" "),e.$v.form.subject.required?e._e():t("div",{staticClass:"invalid-feedback"},[e._v("Required\n                ")]),e._v(" "),e.$v.form.subject.serverError?e._e():t("div",{staticClass:"invalid-feedback"},[e._v(e._s(e.errors.subject.msg))])],1),e._v(" "),t("b-form-group",{attrs:{id:"input-group-3",label:"Email ","label-for":"input-3"}},[t("b-form-input",{class:{"is-invalid":e.$v.form.email.$error,"is-valid":!e.$v.form.email.$invalid},attrs:{autocomplete:"off",id:"input-3"},model:{value:e.$v.form.email.$model,callback:function(t){e.$set(e.$v.form.email,"$model","string"==typeof t?t.trim():t)},expression:"$v.form.email.$model"}}),e._v(" "),e.$v.form.email.required?e._e():t("div",{staticClass:"invalid-feedback"},[e._v("Required\n                ")]),e._v(" "),e.$v.form.email.email?e._e():t("div",{staticClass:"invalid-feedback"},[e._v("Email format not correct\n                ")]),e._v(" "),e.$v.form.email.serverError?e._e():t("div",{staticClass:"invalid-feedback"},[e._v(e._s(e.errors.email.msg))])],1),e._v(" "),t("b-form-group",{attrs:{id:"input-group-4",label:"Message ","label-for":"input-4"}},[t("b-form-textarea",{class:{"is-invalid":e.$v.form.msg.$error,"is-valid":!e.$v.form.msg.$invalid},attrs:{id:"input-4",autocomplete:"off",rows:"4",placeholder:"Insert your message"},model:{value:e.$v.form.msg.$model,callback:function(t){e.$set(e.$v.form.msg,"$model","string"==typeof t?t.trim():t)},expression:"$v.form.msg.$model"}}),e._v(" "),e.$v.form.msg.required?e._e():t("div",{staticClass:"invalid-feedback"},[e._v("Message is required\n                ")]),e._v(" "),e.$v.form.msg.serverError?e._e():t("div",{staticClass:"invalid-feedback"},[e._v(e._s(e.errors.msg.msg))])],1),e._v(" "),t("b-button",{staticClass:"m-2",attrs:{type:"submit",variant:"primary"}},[e._v("Send\n                "),t("b-spinner",{directives:[{name:"show",rawName:"v-show",value:e.inProgress,expression:"inProgress"}],staticStyle:{width:"24px",height:"24px",color:"#ffffff"},attrs:{type:"grow"}})],1),e._v(" "),t("b-button",{staticClass:"m-2",attrs:{type:"reset",variant:"danger"}},[e._v("Clear Form")])],1):t("b-row",{staticClass:"w-100"},[t("b-alert",{staticClass:"w-100",attrs:{variant:"success",show:""}},[e._v("Send message success.")]),e._v(" "),t("b-button",{staticClass:"m-2",attrs:{variant:"primary"},on:{click:e.onReset}},[e._v("New message")])],1)],1)],1)],1)],1)}),[],!1,null,"b7280734",null);t.default=component.exports}}]);
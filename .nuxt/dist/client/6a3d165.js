(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{432:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.req=t.regex=t.ref=t.len=void 0,Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return o.default}});var n,o=(n=r(435))&&n.__esModule?n:{default:n};function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}var d=function(e){if(Array.isArray(e))return!!e.length;if(null==e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===l(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=d;t.len=function(e){return Array.isArray(e)?e.length:"object"===l(e)?Object.keys(e).length:String(e).length};t.ref=function(e,t,r){return"function"==typeof e?e.call(t,r):r[e]};t.regex=function(e,t){return(0,o.default)({type:e},(function(e){return!d(e)||t.test(e)}))}},433:function(e,t,r){"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return M.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return S.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return f.default}}),t.helpers=void 0,Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return j.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return O.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return C.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return F.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return k.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return x.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return $.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return P.default}});var o=I(r(434)),l=I(r(437)),d=I(r(438)),c=I(r(439)),f=I(r(440)),v=I(r(441)),m=I(r(442)),h=I(r(443)),y=I(r(444)),_=I(r(445)),w=I(r(446)),x=I(r(447)),$=I(r(448)),P=I(r(449)),k=I(r(450)),M=I(r(451)),F=I(r(452)),C=I(r(453)),O=I(r(454)),j=I(r(455)),S=I(r(456)),z=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=A(t);if(r&&r.has(e))return r.get(e);var o={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&Object.prototype.hasOwnProperty.call(e,d)){var desc=l?Object.getOwnPropertyDescriptor(e,d):null;desc&&(desc.get||desc.set)?Object.defineProperty(o,d,desc):o[d]=e[d]}o.default=e,r&&r.set(e,o);return o}(r(432));function A(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(A=function(e){return e?r:t})(e)}function I(e){return e&&e.__esModule?e:{default:e}}t.helpers=z},434:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(432).regex)("alpha",/^[a-zA-Z]*$/);t.default=n},435:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="web"===e.env.BUILD?r(436).withParams:r(293).withParams;t.default=n}).call(this,r(116))},436:function(e,t,r){"use strict";(function(e){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var n="undefined"!=typeof window?window:void 0!==e?e:{},o=n.vuelidate?n.vuelidate.withParams:function(e,t){return"object"===r(e)&&void 0!==t?t:e((function(){}))};t.withParams=o}).call(this,r(39))},437:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(432).regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=n},438:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(432).regex)("numeric",/^[0-9]*$/);t.default=n},439:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(432);t.default=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},(function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r}))}},440:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(432).regex)("email",/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i);t.default=n},441:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(432),o=(0,n.withParams)({type:"ipAddress"},(function(e){if(!(0,n.req)(e))return!0;if("string"!=typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(l)}));t.default=o;var l=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},442:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(432);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},(function(t){if(!(0,n.req)(t))return!0;if("string"!=typeof t)return!1;var r="string"==typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(o)}))};var o=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},443:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(432);t.default=function(e){return(0,n.withParams)({type:"maxLength",max:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e}))}},444:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(432);t.default=function(e){return(0,n.withParams)({type:"minLength",min:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e}))}},445:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(432),o=(0,n.withParams)({type:"required"},(function(e){return"string"==typeof e?(0,n.req)(e.trim()):(0,n.req)(e)}));t.default=o},446:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(432);t.default=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},(function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)}))}},447:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(432);t.default=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},(function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)}))}},448:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(432);t.default=function(e){return(0,n.withParams)({type:"sameAs",eq:e},(function(t,r){return t===(0,n.ref)(e,this,r)}))}},449:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(432).regex)("url",/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i);t.default=n},450:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(432);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t.length>0&&t.reduce((function(t,r){return t||r.apply(e,n)}),!1)}))}},451:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(432);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t.length>0&&t.reduce((function(t,r){return t&&r.apply(e,n)}),!0)}))}},452:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(432);t.default=function(e){return(0,n.withParams)({type:"not"},(function(t,r){return!(0,n.req)(t)||!e.call(this,t,r)}))}},453:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(432);t.default=function(e){return(0,n.withParams)({type:"minValue",min:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))}},454:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(432);t.default=function(e){return(0,n.withParams)({type:"maxValue",max:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))}},455:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(432).regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=n},456:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(432).regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=n},522:function(e,t,r){var content=r(609);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(70).default)("321bea30",content,!0,{sourceMap:!1})},608:function(e,t,r){"use strict";r(522)},609:function(e,t,r){var n=r(69)(!1);n.push([e.i,"\n@media (max-width: 991.98px) {\n.text-wrap[data-v-183d5797], .login-wrap[data-v-183d5797] {\n    width: 100% !important;\n}\n}\n.text-wrap[data-v-183d5797], .login-wrap[data-v-183d5797] {\n  width: 50%;\n}\n.text-wrap[data-v-183d5797] {\n  background: var(--color2);\n  border: 1px solid var(--color2);\n  color: #fff;\n  background: var(--color1);\n  background: -moz-linear-gradient(-45deg, rgba(var(--gradian-color1)) 0%, rgba(var(--gradian-color2)) 100%);\n  background: -webkit-gradient(left top, right bottom, color-stop(0%, rgba(var(--gradian-color1))), color-stop(100%, rgba(var(--gradian-color2))));\n  background: -webkit-linear-gradient(\n    -45deg, rgba(var(--gradian-color1)) 0%, rgba(var(--gradian-color2)) 100%);\n  background: -o-linear-gradient(-45deg, rgba(var(--gradian-color1)) 0%, rgba(var(--gradian-color2)) 100%);\n  background: -ms-linear-gradient(-45deg, rgba(var(--gradian-color1)) 0%, rgba(var(--gradian-color2)) 100%);\n  background: -webkit-linear-gradient(\n    315deg, rgba(var(--gradian-color1)) 0%, rgba(var(--gradian-color2)) 100%);\n  background: -o-linear-gradient(315deg, rgba(var(--gradian-color1)) 0%, rgba(var(--gradian-color2)) 100%);\n  background: linear-gradient(\n    135deg, rgba(var(--gradian-color1)) 0%, rgba(var(--gradian-color2)) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=rgba(var(--gradian-color1)), endColorstr=rgba(var(--gradian-color2)), GradientType=1);\n}\n.btn.btn-white.btn-outline-white[data-v-183d5797] {\n  border: 1px solid #fff;\n  background: transparent;\n  color: #fff;\n}\n.btn.btn-white[data-v-183d5797] {\n  background: #fff;\n  border: 1px solid #fff;\n  color: #fff;\n}\n.btn.btn-white[data-v-183d5797] {\n  background: #fff;\n  border: 1px solid #fff;\n  color: #fff;\n}\n.btn-add[data-v-183d5797] {\n  cursor: pointer;\n  -webkit-box-shadow: none !important;\n  box-shadow: none !important;\n  font-size: 15px;\n  border-radius: 50px;\n}\n.btn-crl[data-v-183d5797] {\n  height: 48px !important;\n  cursor: pointer;\n  -webkit-box-shadow: none !important;\n  box-shadow: none !important;\n  font-size: 15px;\n  padding: 12px 20px;\n  border-radius: 50px;\n}\n.btn-crl.btn-white.btn-outline-white[data-v-183d5797]:hover {\n  border: 1px solid transparent;\n  background: #fff;\n  color: #000;\n}\n.btn.btn-primary[data-v-183d5797] {\n  background: var(--color2);\n  border: 1px solid var(--color2);\n  color: #fff;\n  background: var(--color1);\n  background: -moz-linear-gradient(-45deg, rgba(var(--gradian-color1)) 0%, rgba(var(--gradian-color2)) 100%);\n  background: -webkit-gradient(left top, right bottom, color-stop(0%, rgba(var(--gradian-color1))), color-stop(100%, rgba(var(--gradian-color2))));\n  background: -webkit-linear-gradient(\n    -45deg, rgba(var(--gradian-color1)) 0%, rgba(var(--gradian-color2)) 100%);\n  background: -o-linear-gradient(-45deg, rgba(var(--gradian-color1)) 0%, rgba(var(--gradian-color2)) 100%);\n  background: -ms-linear-gradient(-45deg, rgba(var(--gradian-color1)) 0%, rgba(var(--gradian-color2)) 100%);\n  background: -webkit-linear-gradient(\n    315deg, rgba(var(--gradian-color1)) 0%, rgba(var(--gradian-color2)) 100%);\n  background: -o-linear-gradient(315deg, rgba(var(--gradian-color1)) 0%, rgba(var(--gradian-color2)) 100%);\n  background: linear-gradient(\n    135deg, rgba(var(--gradian-color1)) 0%, rgba(var(--gradian-color2)) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=rgba(var(--gradian-color1)), endColorstr=rgba(var(--gradian-color2)), GradientType=1);\n}\n.btn.btn-primary[data-v-183d5797]:hover {\n  border: 1px solid var(--color1);\n  background: linear-gradient(135deg, rgba(var(--gradian-color2)) 0%, rgba(var(--gradian-color1)) 100%);\n  color: #fff;\n}\n.social-media .social-icon[data-v-183d5797] {\n  display: block;\n  width: 40px;\n  height: 40px;\n  background: transparent;\n  color: white;\n  border: 1px solid rgba(255, 255, 255, 1);\n  font-size: 16px;\n  margin-right: 5px;\n  border-radius: 50%;\n}\n.social-media .social-icon[data-v-183d5797]:hover, .social-media .social-icon[data-v-183d5797]:focus {\n  background: #fff;\n  color: var(--color2);\n}\ninput[data-v-183d5797]:focus, textarea[data-v-183d5797]:focus, select[data-v-183d5797]:focus {\n  outline: none !important;\n}\n.reg-type[data-v-183d5797] {\n  border: 3px solid #ccc;\n  cursor: pointer;\n}\n.reg-type-active img[data-v-183d5797] {\n  border: 3px solid var(--color2) !important;\n}\n.reg-type-active div[data-v-183d5797] {\n  color: var(--color2) !important;\n}\n",""]),e.exports=n},694:function(e,t,r){"use strict";r.r(t);r(24),r(40);var n=r(12),o=(r(53),r(11),r(22),r(117),r(460),r(1),r(461),r(462),r(463),r(464),r(465),r(466),r(467),r(468),r(469),r(470),r(471),r(472),r(473),r(474),r(475),r(476),r(477),r(478),r(479),r(480),r(481),r(482),r(483),r(484),r(37)),l=r(170),d=r(485),c=r.n(d),f=(r(486),r(433)),v=r(88);o.c.add(l.b),o.c.add(l.a);var m={name:"StudentDetails",components:{VueCropper:c.a},mounted:function(){this.fillUserInfo(),this.$auth.hasScope("tutor")||this.$auth.hasScope("admin")||this.$router.push("/user-panel/st-profile")},data:function(){return{options_methods:[{value:1,text:"Online"},{value:2,text:"In-Person"},{value:3,text:"Both"}],busy:!0,hasImage:!1,imgSrc:null,cropImg:"",data:null,options:[{value:"Skype",text:"Skype"},{value:"Hangout",text:"Hangout"}],fileSizeNotValid:!1,registerForm:{File:null,name:"",lastName:"",headline:"",bioMore:"",trainingMethod:null},errors:null}},validations:{registerForm:{name:{required:f.required,serverError:function(e){return""===e||!(null!=this.errors&&this.errors.name&&e===this.errors.name.value)}},trainingMethod:{required:f.required},lastName:{required:f.required,serverError:function(e){return""===e||!(null!=this.errors&&this.errors.lastName&&e===this.errors.lastName.value)}},headline:{required:f.required,serverError:function(e){return""===e||!(null!=this.errors&&this.errors.headline&&e===this.errors.headline.value)}},bioMore:{required:f.required,serverError:function(e){return""===e||!(null!=this.errors&&this.errors.bioMore&&e===this.errors.bioMore.value)}},File:{}}},methods:{removeInputImage:function(e){e.target.value=null},cancelUploadImage:function(){this.hasImage=!1},removeImage:function(){var e=this;this.$bvModal.msgBoxConfirm(this.$t("remove.image.confirm.msg"),{title:"Confirm",size:"md",buttonSize:"sm",okVariant:"danger",okTitle:"YES",cancelTitle:"NO",footerClass:"p-2 border-top-0",hideHeaderClose:!1,headerClass:"p-2 border-bottom-0",centered:!0}).then((function(t){!0===t&&null!==e.registerForm.File&&e.$axios.post("/user/remove-user-image").then((function(t){e.registerForm.File=null})).catch((function(t){t.response.data.errors&&(e.errors=t.response.data.errors)}))})).catch((function(e){}))},showEditPhoto:function(){this.showFileChooser()},cropImage:function(){var e=this;if(Math.round(3*this.$refs.cropper.getCroppedCanvas().toDataURL().length/4)>1048576)this.fileSizeNotValid=!0;else{this.hasImage=!1,this.cropImg=this.$refs.cropper.getCroppedCanvas().toDataURL(),this.registerForm.File=this.dataURLtoFile(this.cropImg,"avatar.jpg");var t=new FormData;t.append("file",this.registerForm.File,this.registerForm.File.name),this.$axios.post("/user/save-user-image",t).then((function(t){e.registerForm.File=t.data})).catch((function(t){t.response.data.errors&&(e.errors=t.response.data.errors)}))}},flipX:function(){var e=this.$refs.flipX,t=e.getAttribute("data-scale");t=t?-t:-1,this.$refs.cropper.scaleX(t),e.setAttribute("data-scale",t)},flipY:function(){var e=this.$refs.flipY,t=e.getAttribute("data-scale");t=t?-t:-1,this.$refs.cropper.scaleY(t),e.setAttribute("data-scale",t)},rotate:function(e){this.$refs.cropper.rotate(e)},setImage:function(e){var t=this,r=e.target.files[0];if(void 0!==r)if(this.fileSizeNotValid=!1,-1!==r.type.indexOf("image/jpeg")||-1!==r.type.indexOf("image/png"))if("function"==typeof FileReader){var n=new FileReader;n.onload=function(e){t.imgSrc=e.target.result,t.$refs.cropper.replace(e.target.result)},this.hasImage=!0,n.readAsDataURL(r)}else alert("Sorry, FileReader API not supported");else alert("Please select an image file with JPEG or PNG type")},showFileChooser:function(){this.$refs.input.click()},dataURLtoFile:function(e,t){for(var r=e.split(","),n=r[0].match(/:(.*?);/)[1],o=atob(r[1]),l=o.length,d=new Uint8Array(l);l--;)d[l]=o.charCodeAt(l);return new File([d],t,{type:n})},makeToast:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"success",header=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Message",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";this.$bvToast.toast(this.$t(t),{autoHideDelay:3e3,title:header,variant:e,solid:!0,appendToast:!0,headerClass:"d-none"})},onReset:function(e){e.preventDefault(),this.registerForm.name="",this.registerForm.lastName=""},onSubmit:function(e){var t=this;try{var r=this;if(this.$v.$reset(),this.errors=null,e.preventDefault(),this.$v.registerForm.$touch(),this.$v.registerForm.$invalid)console.log("vuelidate error");else{this.busy=!0;var o=new FormData;o.append("registerForm",JSON.stringify(this.registerForm)),this.$axios.post("/user/save-student-detail",o).then(function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(n){var o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=r.$auth.options.redirect,r.$auth.options.redirect=!1,e.next=4,r.$auth.setUserToken(n.data.token);case 4:l=Object(v.a)(n.data.token),r.$auth.setUser(l),r.$auth.options.rewriteRedirects=o,t.makeToast("success","Message",t.$t("done_successfully"));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){e.response.data.errors&&(t.errors=e.response.data.errors),t.makeToast("danger","Error",t.$t("faild_message"))})).finally((function(){t.busy=!1}))}}catch(e){this.busy=!1}},fillUserInfo:function(){var e=this;try{this.busy=!0,this.$axios.post("/user/get-student-detail").then((function(t){e.registerForm=t.data})).catch((function(t){t.response.data.errors&&(e.errors=t.response.data.errors)})).finally((function(){e.busy=!1}))}catch(e){this.busy=!1}}}},h=m,y=(r(608),r(80)),component=Object(y.a)(h,(function(){var e=this,t=e._self._c;return t("b-container",{staticClass:"container-padding"},[t("b-row",{staticClass:"d-md-flex m-center"},[t("div",{staticClass:"login-wrap px-xl-5 px-lg-5 px-md-3 px-sm-2 px-2 col-md-12 col-lg-10 col-xl-8"},[t("b-form",{staticClass:"m-right",on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.onSubmit.apply(null,arguments)},reset:e.onReset}},[t("div",{staticClass:"d-flex"},[t("div",{staticClass:"w-100"},[t("h3",{staticClass:"mb-4"},[e._v(e._s(e.$t("profile")))])])]),e._v(" "),t("b-overlay",{attrs:{show:e.busy,rounded:"lg",variant:"white",opacity:"0.8"}},[t("b-form-group",[t("b-form-row",{staticClass:"w-100"},[t("input",{ref:"input",staticClass:"d-none",attrs:{type:"file",name:"image",accept:"image/png, image/jpeg"},on:{click:e.removeInputImage,change:e.setImage}}),e._v(" "),e.hasImage?t("div",[t("section",[t("div",{staticClass:"img-cropper"},[t("client-only",[t("vue-cropper",{ref:"cropper",staticStyle:{"aspect-ratio":"1/1",width:"15rem",height:"15rem"},attrs:{"drag-mode":"move","view-mode":3,"auto-crop-area":.6,"aspect-ratio":1,"toggle-drag-mode-on-dblclick":!1,src:e.imgSrc,preview:".preview"}})],1)],1),e._v(" "),t("div",{staticClass:"actions"},[t("b-button",{staticClass:"btn-primary btn-add py-1 mt-2",on:{click:function(t){return t.preventDefault(),e.cropImage.apply(null,arguments)}}},[e._v("\n                        "+e._s(e.$t("save"))+"\n                      ")]),e._v(" "),t("b-button",{staticClass:"btn-primary btn-add py-1 mt-2",on:{click:function(t){return t.preventDefault(),e.showFileChooser.apply(null,arguments)}}},[e._v("\n                        "+e._s(e.$t("upload"))+"\n                      ")]),e._v(" "),t("b-button",{staticClass:"btn-primary btn-add py-1 mt-2",on:{click:function(t){return t.preventDefault(),e.rotate(90)}}},[t("svg",{staticClass:"bi bi-arrow-90deg-right",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[t("path",{attrs:{"fill-rule":"evenodd",d:"M14.854 4.854a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 4H3.5A2.5 2.5 0 0 0 1 6.5v8a.5.5 0 0 0 1 0v-8A1.5 1.5 0 0 1 3.5 5h9.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4z"}})])]),e._v(" "),t("b-button",{staticClass:"btn-primary btn-add py-1 mt-2",on:{click:function(t){return t.preventDefault(),e.rotate(-90)}}},[t("svg",{staticClass:"bi bi-arrow-90deg-left",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[t("path",{attrs:{"fill-rule":"evenodd",d:"M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z"}})])]),e._v(" "),t("b-button",{ref:"flipX",staticClass:"btn-primary btn-add py-1 mt-2",on:{click:function(t){return t.preventDefault(),e.flipX.apply(null,arguments)}}},[t("svg",{staticClass:"bi bi-symmetry-vertical",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[t("path",{attrs:{d:"M7 2.5a.5.5 0 0 0-.939-.24l-6 11A.5.5 0 0 0 .5 14h6a.5.5 0 0 0 .5-.5v-11zm2.376-.484a.5.5 0 0 1 .563.245l6 11A.5.5 0 0 1 15.5 14h-6a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .376-.484zM10 4.46V13h4.658L10 4.46z"}})])]),e._v(" "),t("b-button",{ref:"flipY",staticClass:"btn-primary btn-add py-1 mt-2",on:{click:function(t){return t.preventDefault(),e.flipY.apply(null,arguments)}}},[t("svg",{staticClass:"bi bi-symmetry-horizontal",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[t("path",{attrs:{d:"M13.5 7a.5.5 0 0 0 .24-.939l-11-6A.5.5 0 0 0 2 .5v6a.5.5 0 0 0 .5.5h11zm.485 2.376a.5.5 0 0 1-.246.563l-11 6A.5.5 0 0 1 2 15.5v-6a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .485.376zM11.539 10H3v4.658L11.54 10z"}})])]),e._v(" "),t("b-button",{staticClass:"btn-primary btn-add py-1 mt-2",on:{click:function(t){return t.preventDefault(),e.cancelUploadImage.apply(null,arguments)}}},[e._v("\n                        "+e._s(e.$t("cancel"))+"\n                      ")])],1)]),e._v(" "),e.fileSizeNotValid?t("div",{staticClass:"invalid-feedback d-block"},[e._v(e._s(e.$t("file.isValidSize"))+"\n                  ")]):e._e()]):t("b-row",{staticClass:"mx-0"},[t("b-col",{staticClass:"col-12 col-md-4 col-xl-4 col-lg-4"},[t("b-avatar",{attrs:{size:"7rem",src:null!=e.registerForm.File?"/"+e.registerForm.File.path:"",alt:"Cropped Image"}})],1),e._v(" "),t("b-col",{staticClass:"col-12 pt-3 col-md-8 col-xl-8 col-lg-8"},[t("b-row",{staticClass:"text-large pb-2"},[e._v("Profile photo")]),e._v(" "),t("b-row",{staticClass:"small text-small"},[e._v("\n                      Please make sure your photo with appropriate attire. Face should be in focus. Maximum size – 1MB.\n                      JPG or PNG\n                    ")]),e._v(" "),t("b-row",{staticClass:"small text-small"},[t("b-button",{staticClass:"btn-primary btn-add py-1 mt-2 mr-2",on:{click:e.showEditPhoto}},[e._v("\n                        "+e._s(e.$t("upload"))+"\n                      ")]),e._v(" "),null!==e.registerForm.File?t("b-button",{staticClass:"btn-primary btn-add py-1 mt-2",on:{click:e.removeImage}},[e._v("\n                        "+e._s(e.$t("remove"))+"\n                      ")]):e._e()],1),e._v(" "),t("b-row")],1)],1)],1)],1),e._v(" "),t("b-form-group",{staticClass:"pt-3",attrs:{id:"input-group-name",label:e.$t("fName")+":","label-for":"input-name"}},[t("b-form-input",{class:{"is-invalid":e.$v.registerForm.name.$error},attrs:{autocomplete:"off",id:"input-name"},model:{value:e.$v.registerForm.name.$model,callback:function(t){e.$set(e.$v.registerForm.name,"$model","string"==typeof t?t.trim():t)},expression:"$v.registerForm.name.$model"}}),e._v(" "),e.$v.registerForm.name.required?e._e():t("div",{staticClass:"invalid-feedback"},[e._v(e._s(e.$t("firstNameRequired"))+"\n              ")]),e._v(" "),e.$v.registerForm.name.serverError?e._e():t("div",{staticClass:"invalid-feedback"},[e._v(e._s(e.$t(e.errors.name.msg)))])],1),e._v(" "),t("b-form-group",{attrs:{id:"input-group-lastname",label:e.$t("lName")+":","label-for":"input-lastname"}},[t("b-form-input",{class:{"is-invalid":e.$v.registerForm.lastName.$error},attrs:{autocomplete:"off",id:"input-lastname"},model:{value:e.$v.registerForm.lastName.$model,callback:function(t){e.$set(e.$v.registerForm.lastName,"$model","string"==typeof t?t.trim():t)},expression:"$v.registerForm.lastName.$model"}}),e._v(" "),e.$v.registerForm.lastName.required?e._e():t("div",{staticClass:"invalid-feedback"},[e._v(e._s(e.$t("lastNameRequired")))])],1),e._v(" "),t("b-form-group",{attrs:{id:"input-group-headline",label:e.$t("headline")+":","label-for":"input-headline"}},[t("b-form-input",{class:{"is-invalid":e.$v.registerForm.headline.$error},attrs:{autocomplete:"off",id:"input-headline"},model:{value:e.$v.registerForm.headline.$model,callback:function(t){e.$set(e.$v.registerForm.headline,"$model","string"==typeof t?t.trim():t)},expression:"$v.registerForm.headline.$model"}}),e._v(" "),e.$v.registerForm.headline.required?e._e():t("div",{staticClass:"invalid-feedback"},[e._v(e._s(e.$t("headlineRequired"))+"\n              ")])],1),e._v(" "),t("b-form-group",{attrs:{id:"input-group-bioMore",label:e.$t("bioMore")+":","label-for":"input-bioMore"}},[t("b-form-textarea",{class:{"is-invalid":e.$v.registerForm.bioMore.$error},attrs:{autocomplete:"off",rows:"4",id:"input-bioMore"},model:{value:e.$v.registerForm.bioMore.$model,callback:function(t){e.$set(e.$v.registerForm.bioMore,"$model","string"==typeof t?t.trim():t)},expression:"$v.registerForm.bioMore.$model"}}),e._v(" "),e.$v.registerForm.bioMore.required?e._e():t("div",{staticClass:"invalid-feedback"},[e._v(e._s(e.$t("bioMoreRequired"))+"\n              ")])],1),e._v(" "),t("b-form-group",{staticClass:"w-75",attrs:{id:"input-group-trainingMethods",label:e.$t("information.trainingMethods.label"),"label-for":"input-trainingMethods"}},[t("v-select",{staticClass:"m-v-select2 w-70",class:{"is-invalid  d-block":e.$v.registerForm.trainingMethod.$error},attrs:{id:"input-trainingMethods",placeholder:e.$t("information.trainingMethods.placeholder"),label:"text",reduce:function(e){return e.value},options:e.options_methods},model:{value:e.registerForm.trainingMethod,callback:function(t){e.$set(e.registerForm,"trainingMethod","string"==typeof t?t.trim():t)},expression:"registerForm.trainingMethod"}}),e._v(" "),e.$v.registerForm.trainingMethod.required?e._e():t("div",{staticClass:"invalid-feedback"},[e._v("\n                "+e._s(e.$t("information.trainingMethods.required"))+"\n              ")])],1),e._v(" "),t("b-form-group",[t("b-button",{staticClass:"form-control btn btn-crl btn-primary submit px-3 mt-4 btn-reg mr-2",attrs:{type:"submit"}},[e._v(e._s(e.$t("save"))+"\n              ")])],1)],1)],1)],1)])],1)}),[],!1,null,"183d5797",null);t.default=component.exports}}]);
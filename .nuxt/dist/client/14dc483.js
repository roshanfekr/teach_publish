(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{367:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return o.default}}),t.regex=t.ref=t.len=t.req=void 0;var n,o=(n=r(370))&&n.__esModule?n:{default:n};function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}var c=function(e){if(Array.isArray(e))return!!e.length;if(null==e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===l(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=c;t.len=function(e){return Array.isArray(e)?e.length:"object"===l(e)?Object.keys(e).length:String(e).length};t.ref=function(e,t,r){return"function"==typeof e?e.call(t,r):r[e]};t.regex=function(e,t){return(0,o.default)({type:e},(function(e){return!c(e)||t.test(e)}))}},368:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return x.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return $.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return C.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return O.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return j.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return k.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return F.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return M.default}}),t.helpers=void 0;var n=A(r(369)),o=A(r(372)),l=A(r(373)),c=A(r(374)),d=A(r(375)),f=A(r(376)),m=A(r(377)),v=A(r(378)),h=A(r(379)),y=A(r(380)),_=A(r(381)),w=A(r(382)),x=A(r(383)),$=A(r(384)),P=A(r(385)),C=A(r(386)),O=A(r(387)),j=A(r(388)),k=A(r(389)),F=A(r(390)),M=A(r(391)),z=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};desc.get||desc.set?Object.defineProperty(t,r,desc):t[r]=e[r]}return t.default=e,t}(r(367));function A(e){return e&&e.__esModule?e:{default:e}}t.helpers=z},369:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(367).regex)("alpha",/^[a-zA-Z]*$/);t.default=n},370:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="web"===e.env.BUILD?r(371).withParams:r(255).withParams;t.default=n}).call(this,r(117))},371:function(e,t,r){"use strict";(function(e){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var n="undefined"!=typeof window?window:void 0!==e?e:{},o=n.vuelidate?n.vuelidate.withParams:function(e,t){return"object"===r(e)&&void 0!==t?t:e((function(){}))};t.withParams=o}).call(this,r(37))},372:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(367).regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=n},373:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(367).regex)("numeric",/^[0-9]*$/);t.default=n},374:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(367);t.default=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},(function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r}))}},375:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(367).regex)("email",/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/);t.default=n},376:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(367),o=(0,n.withParams)({type:"ipAddress"},(function(e){if(!(0,n.req)(e))return!0;if("string"!=typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(l)}));t.default=o;var l=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},377:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(367);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},(function(t){if(!(0,n.req)(t))return!0;if("string"!=typeof t)return!1;var r="string"==typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(o)}))};var o=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},378:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(367);t.default=function(e){return(0,n.withParams)({type:"maxLength",max:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e}))}},379:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(367);t.default=function(e){return(0,n.withParams)({type:"minLength",min:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e}))}},380:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(367),o=(0,n.withParams)({type:"required"},(function(e){return"string"==typeof e?(0,n.req)(e.trim()):(0,n.req)(e)}));t.default=o},381:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(367);t.default=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},(function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)}))}},382:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(367);t.default=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},(function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)}))}},383:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(367);t.default=function(e){return(0,n.withParams)({type:"sameAs",eq:e},(function(t,r){return t===(0,n.ref)(e,this,r)}))}},384:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(367).regex)("url",/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i);t.default=n},385:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(367);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t.length>0&&t.reduce((function(t,r){return t||r.apply(e,n)}),!1)}))}},386:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(367);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t.length>0&&t.reduce((function(t,r){return t&&r.apply(e,n)}),!0)}))}},387:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(367);t.default=function(e){return(0,n.withParams)({type:"not"},(function(t,r){return!(0,n.req)(t)||!e.call(this,t,r)}))}},388:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(367);t.default=function(e){return(0,n.withParams)({type:"minValue",min:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))}},389:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(367);t.default=function(e){return(0,n.withParams)({type:"maxValue",max:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))}},390:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(367).regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=n},391:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(367).regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=n},453:function(e,t,r){var content=r(544);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(64).default)("1983920d",content,!0,{sourceMap:!1})},543:function(e,t,r){"use strict";r(453)},544:function(e,t,r){var n=r(63)(!1);n.push([e.i,"@media (max-width:991.98px){.login-wrap[data-v-4924802e],.text-wrap[data-v-4924802e]{width:100%!important}}.login-wrap[data-v-4924802e],.text-wrap[data-v-4924802e]{width:50%}.text-wrap[data-v-4924802e]{background:var(--color2);border:1px solid var(--color2);color:#fff;background:var(--color1);background:-webkit-gradient(left top,right bottom,color-stop(0,rgba(var(--gradian-color1))),color-stop(100%,rgba(var(--gradian-color2))));background:linear-gradient(135deg,rgba(var(--gradian-color1)),rgba(var(--gradian-color2)));filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=rgba(var(--gradian-color1)),endColorstr=rgba(var(--gradian-color2)),GradientType=1)}.btn.btn-white.btn-outline-white[data-v-4924802e]{border:1px solid #fff;background:transparent;color:#fff}.btn.btn-white[data-v-4924802e]{background:#fff;border:1px solid #fff;color:#fff}.btn-add[data-v-4924802e],.btn-crl[data-v-4924802e]{cursor:pointer;box-shadow:none!important;font-size:15px;border-radius:50px}.btn-crl[data-v-4924802e]{height:48px!important;padding:12px 20px}.btn-crl.btn-white.btn-outline-white[data-v-4924802e]:hover{border:1px solid transparent;background:#fff;color:#000}.btn.btn-primary[data-v-4924802e]{background:var(--color2);border:1px solid var(--color2);color:#fff;background:var(--color1);background:-webkit-gradient(left top,right bottom,color-stop(0,rgba(var(--gradian-color1))),color-stop(100%,rgba(var(--gradian-color2))));background:linear-gradient(135deg,rgba(var(--gradian-color1)),rgba(var(--gradian-color2)));filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=rgba(var(--gradian-color1)),endColorstr=rgba(var(--gradian-color2)),GradientType=1)}.btn.btn-primary[data-v-4924802e]:hover{border:1px solid var(--color1);background:linear-gradient(135deg,rgba(var(--gradian-color2)),rgba(var(--gradian-color1)));color:#fff}.social-media .social-icon[data-v-4924802e]{display:block;width:40px;height:40px;background:transparent;color:#fff;border:1px solid #fff;font-size:16px;margin-right:5px;border-radius:50%}.social-media .social-icon[data-v-4924802e]:focus,.social-media .social-icon[data-v-4924802e]:hover{background:#fff;color:var(--color2)}input[data-v-4924802e]:focus,select[data-v-4924802e]:focus,textarea[data-v-4924802e]:focus{outline:none!important}.reg-type[data-v-4924802e]{border:3px solid #ccc;cursor:pointer}.reg-type-active img[data-v-4924802e]{border:3px solid var(--color2)!important}.reg-type-active div[data-v-4924802e]{color:var(--color2)!important}",""]),e.exports=n},609:function(e,t,r){"use strict";r.r(t);var n=r(10),o=(r(50),r(21),r(11),r(20),r(24),r(99),r(393),r(19),r(394),r(395),r(396),r(397),r(398),r(399),r(400),r(401),r(402),r(403),r(404),r(405),r(406),r(407),r(408),r(409),r(410),r(411),r(412),r(413),r(414),r(415),r(416),r(417),r(31)),l=r(137),c=r(418),d=r.n(c),f=(r(419),r(368)),m=r(80);o.c.add(l.b),o.c.add(l.a);var v={name:"StudentDetails",components:{VueCropper:d.a},mounted:function(){this.fillUserInfo(),this.$auth.hasScope("tutor")&&this.$router.push("/user-panel/profile")},data:function(){return{busy:!0,hasImage:!1,imgSrc:null,cropImg:"",data:null,options:[{value:"Skype",text:"Skype"},{value:"Hangout",text:"Hangout"}],fileSizeNotValid:!1,registerForm:{File:null,name:"",lastName:"",program:null},errors:null}},validations:{registerForm:{name:{required:f.required,serverError:function(e){return""===e||!(null!=this.errors&&this.errors.name&&e===this.errors.name.value)}},lastName:{required:f.required,serverError:function(e){return""===e||!(null!=this.errors&&this.errors.lastName&&e===this.errors.lastName.value)}},program:{}}},methods:{removeInputImage:function(e){e.target.value=null},cancelUploadImage:function(){this.hasImage=!1},removeImage:function(){var e=this;this.$bvModal.msgBoxConfirm(this.$t("remove.image.confirm.msg"),{title:"Confirm",size:"md",buttonSize:"sm",okVariant:"danger",okTitle:"YES",cancelTitle:"NO",footerClass:"p-2 border-top-0",hideHeaderClose:!1,headerClass:"p-2 border-bottom-0",centered:!0}).then((function(t){!0===t&&null!==e.registerForm.File&&e.$axios.post("/user/remove-user-image").then((function(t){e.registerForm.File=null})).catch((function(t){t.response.data.errors&&(e.errors=t.response.data.errors)}))})).catch((function(e){}))},showEditPhoto:function(){this.showFileChooser()},cropImage:function(){var e=this;if(Math.round(3*this.$refs.cropper.getCroppedCanvas().toDataURL().length/4)>1048576)this.fileSizeNotValid=!0;else{this.hasImage=!1,this.cropImg=this.$refs.cropper.getCroppedCanvas().toDataURL(),this.registerForm.File=this.dataURLtoFile(this.cropImg,"avatar.jpg");var t=new FormData;t.append("file",this.registerForm.File,this.registerForm.File.name),this.$axios.post("/user/save-user-image",t).then((function(t){e.registerForm.File=t.data})).catch((function(t){t.response.data.errors&&(e.errors=t.response.data.errors)}))}},flipX:function(){var e=this.$refs.flipX,t=e.getAttribute("data-scale");t=t?-t:-1,this.$refs.cropper.scaleX(t),e.setAttribute("data-scale",t)},flipY:function(){var e=this.$refs.flipY,t=e.getAttribute("data-scale");t=t?-t:-1,this.$refs.cropper.scaleY(t),e.setAttribute("data-scale",t)},rotate:function(e){this.$refs.cropper.rotate(e)},setImage:function(e){var t=this,r=e.target.files[0];if(void 0!==r)if(this.fileSizeNotValid=!1,-1!==r.type.indexOf("image/jpeg")||-1!==r.type.indexOf("image/png"))if("function"==typeof FileReader){var n=new FileReader;n.onload=function(e){t.imgSrc=e.target.result,t.$refs.cropper.replace(e.target.result)},this.hasImage=!0,n.readAsDataURL(r)}else alert("Sorry, FileReader API not supported");else alert("Please select an image file with JPEG or PNG type")},showFileChooser:function(){this.$refs.input.click()},dataURLtoFile:function(e,t){for(var r=e.split(","),n=r[0].match(/:(.*?);/)[1],o=atob(r[1]),l=o.length,c=new Uint8Array(l);l--;)c[l]=o.charCodeAt(l);return new File([c],t,{type:n})},makeToast:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"success",header=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Message",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";this.$bvToast.toast(this.$t(t),{autoHideDelay:3e3,title:header,variant:e,solid:!0,appendToast:!0,headerClass:"d-none"})},onReset:function(e){e.preventDefault(),this.registerForm.name="",this.registerForm.lastName=""},onSubmit:function(e){var t=this;try{if(this.$v.$reset(),this.errors=null,e.preventDefault(),this.$v.registerForm.$touch(),this.$v.registerForm.$invalid)console.log("vuelidate error");else{this.busy=!0;var r=new FormData;r.append("registerForm",JSON.stringify(this.registerForm)),this.$axios.post("/user/save-student-detail",r).then((function(e){t.makeToast("success","Message","done_successfully")})).catch((function(e){e.response.data.errors&&(t.errors=e.response.data.errors),t.makeToast("danger","Error","faild_message"),console.log(e)})).finally((function(){t.busy=!1}))}}catch(e){console.log(e),this.busy=!1}},fillUserInfo:function(){var e=this;try{this.busy=!0,this.$axios.post("/user/get-student-detail").then((function(t){e.registerForm=t.data,console.log(t.data)})).catch((function(t){t.response.data.errors&&(e.errors=t.response.data.errors),console.log(t)})).finally((function(){e.busy=!1}))}catch(e){this.busy=!1}},changeToTutorDialog:function(){this.$refs["change-tutor-modal"].show()},changeToTutor:function(){var e=this;try{var t=this;this.$axios.post("/user/change-to-tutor",null).then(function(){var r=Object(n.a)(regeneratorRuntime.mark((function r(n){var o,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!0!==n.data.result){r.next=11;break}return o=t.$auth.options.redirect,t.$auth.options.redirect=!1,r.next=5,t.$auth.setUserToken(n.data.token);case 5:l=Object(m.a)(n.data.token),t.$auth.setUser(l),t.$auth.options.rewriteRedirects=o,e.makeToast("success","Message",e.$t("done_successfully")),e.$refs["change-tutor-modal"].hide(),e.$router.push("/tutor-details");case 11:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()).catch((function(e){}))}catch(e){}}}},h=v,y=(r(543),r(74)),component=Object(y.a)(h,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{},[r("div",{staticClass:"w-100"},[r("div",{staticClass:"mt-5 d-block mb-3"},[e._v(" "+e._s(e.$t("change_to_tutor.title"))+"\n      "),r("b-button",{staticClass:"btn-crl-mini btn-primary",on:{click:e.changeToTutorDialog}},[e._v(e._s(e.$t("change_to_tutor")))])],1),e._v(" "),r("b-modal",{ref:"change-tutor-modal",attrs:{centered:"","hide-footer":"",title:"Change"}},[r("div",{staticClass:"w-100"},[r("b-row",{staticClass:"m-3"},[e._v("\n          "+e._s(e.$t("change_to_tutor.alert"))+"\n        ")]),e._v(" "),r("div",{staticClass:"w-100 text-center mt-5"},[r("b-button",{staticClass:"btn-primary btn",on:{click:e.changeToTutor}},[e._v("Change")])],1)],1)])],1),e._v(" "),r("hr",{staticClass:"mt-0 mb-2"}),e._v(" "),r("b-row",{staticClass:"d-md-flex m-center"},[r("div",{staticClass:"login-wrap px-xl-5 px-lg-5 px-md-3 px-sm-2 px-2 col-md-12 col-lg-10 col-xl-8"},[r("b-form",{staticClass:"m-right",on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.onSubmit.apply(null,arguments)},reset:e.onReset}},[r("div",{staticClass:"d-flex"},[r("div",{staticClass:"w-100"},[r("h3",{staticClass:"mb-4"},[e._v(e._s(e.$t("profile")))])])]),e._v(" "),r("b-overlay",{attrs:{show:e.busy,rounded:"lg",variant:"white",opacity:"0.8"}},[r("b-form-group",[r("b-form-row",{staticClass:"w-100"},[r("input",{ref:"input",staticClass:"d-none",attrs:{type:"file",name:"image",accept:"image/png, image/jpeg"},on:{click:e.removeInputImage,change:e.setImage}}),e._v(" "),e.hasImage?r("div",[r("section",[r("div",{staticClass:"img-cropper"},[r("client-only",[r("vue-cropper",{ref:"cropper",staticStyle:{"aspect-ratio":"1/1",width:"15rem",height:"15rem"},attrs:{"drag-mode":"move","view-mode":3,"auto-crop-area":.6,"aspect-ratio":1,"toggle-drag-mode-on-dblclick":!1,src:e.imgSrc,preview:".preview"}})],1)],1),e._v(" "),r("div",{staticClass:"actions"},[r("b-button",{staticClass:"btn-primary btn-add py-1 mt-2",on:{click:function(t){return t.preventDefault(),e.cropImage.apply(null,arguments)}}},[e._v("\n                      "+e._s(e.$t("save"))+"\n                    ")]),e._v(" "),r("b-button",{staticClass:"btn-primary btn-add py-1 mt-2",on:{click:function(t){return t.preventDefault(),e.showFileChooser.apply(null,arguments)}}},[e._v("\n                      "+e._s(e.$t("upload"))+"\n                    ")]),e._v(" "),r("b-button",{staticClass:"btn-primary btn-add py-1 mt-2",on:{click:function(t){return t.preventDefault(),e.rotate(90)}}},[r("svg",{staticClass:"bi bi-arrow-90deg-right",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M14.854 4.854a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 4H3.5A2.5 2.5 0 0 0 1 6.5v8a.5.5 0 0 0 1 0v-8A1.5 1.5 0 0 1 3.5 5h9.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4z"}})])]),e._v(" "),r("b-button",{staticClass:"btn-primary btn-add py-1 mt-2",on:{click:function(t){return t.preventDefault(),e.rotate(-90)}}},[r("svg",{staticClass:"bi bi-arrow-90deg-left",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z"}})])]),e._v(" "),r("b-button",{ref:"flipX",staticClass:"btn-primary btn-add py-1 mt-2",on:{click:function(t){return t.preventDefault(),e.flipX.apply(null,arguments)}}},[r("svg",{staticClass:"bi bi-symmetry-vertical",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[r("path",{attrs:{d:"M7 2.5a.5.5 0 0 0-.939-.24l-6 11A.5.5 0 0 0 .5 14h6a.5.5 0 0 0 .5-.5v-11zm2.376-.484a.5.5 0 0 1 .563.245l6 11A.5.5 0 0 1 15.5 14h-6a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .376-.484zM10 4.46V13h4.658L10 4.46z"}})])]),e._v(" "),r("b-button",{ref:"flipY",staticClass:"btn-primary btn-add py-1 mt-2",on:{click:function(t){return t.preventDefault(),e.flipY.apply(null,arguments)}}},[r("svg",{staticClass:"bi bi-symmetry-horizontal",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[r("path",{attrs:{d:"M13.5 7a.5.5 0 0 0 .24-.939l-11-6A.5.5 0 0 0 2 .5v6a.5.5 0 0 0 .5.5h11zm.485 2.376a.5.5 0 0 1-.246.563l-11 6A.5.5 0 0 1 2 15.5v-6a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .485.376zM11.539 10H3v4.658L11.54 10z"}})])]),e._v(" "),r("b-button",{staticClass:"btn-primary btn-add py-1 mt-2",on:{click:function(t){return t.preventDefault(),e.cancelUploadImage.apply(null,arguments)}}},[e._v("\n                      "+e._s(e.$t("cancel"))+"\n                    ")])],1)]),e._v(" "),e.fileSizeNotValid?r("div",{staticClass:"invalid-feedback d-block"},[e._v(e._s(e.$t("file.isValidSize"))+"\n                ")]):e._e()]):r("b-row",{staticClass:"mx-0"},[r("b-col",{staticClass:"col-12 col-md-4 col-xl-4 col-lg-4"},[r("b-avatar",{attrs:{size:"7rem",src:null!=e.registerForm.File?"/"+e.registerForm.File.path:"",alt:"Cropped Image"}})],1),e._v(" "),r("b-col",{staticClass:"col-12 pt-3 col-md-8 col-xl-8 col-lg-8"},[r("b-row",{staticClass:"text-large pb-2"},[e._v("Profile photo")]),e._v(" "),r("b-row",{staticClass:"small text-small"},[e._v("\n                    Please make sure your photo with appropriate attire. Face should be in focus. Maximum size – 1MB.\n                    JPG or PNG\n                  ")]),e._v(" "),r("b-row",{staticClass:"small text-small"},[r("b-button",{staticClass:"btn-primary btn-add py-1 mt-2 mr-2",on:{click:e.showEditPhoto}},[e._v("\n                      "+e._s(e.$t("upload"))+"\n                    ")]),e._v(" "),null!==e.registerForm.File?r("b-button",{staticClass:"btn-primary btn-add py-1 mt-2",on:{click:e.removeImage}},[e._v("\n                      "+e._s(e.$t("remove"))+"\n                    ")]):e._e()],1),e._v(" "),r("b-row")],1)],1)],1)],1),e._v(" "),r("b-form-group",{staticClass:"mt-3",attrs:{id:"input-group-name",label:e.$t("fName")+":","label-for":"input-name"}},[r("b-form-input",{class:{"is-invalid":e.$v.registerForm.name.$error},attrs:{autocomplete:"off",id:"input-name"},model:{value:e.$v.registerForm.name.$model,callback:function(t){e.$set(e.$v.registerForm.name,"$model","string"==typeof t?t.trim():t)},expression:"$v.registerForm.name.$model"}}),e._v(" "),e.$v.registerForm.name.required?e._e():r("div",{staticClass:"invalid-feedback"},[e._v(e._s(e.$t("firstNameRequired"))+"\n            ")]),e._v(" "),e.$v.registerForm.name.serverError?e._e():r("div",{staticClass:"invalid-feedback"},[e._v(e._s(e.$t(e.errors.name.msg)))])],1),e._v(" "),r("b-form-group",{attrs:{id:"input-group-lastname",label:e.$t("lName")+":","label-for":"input-lastname"}},[r("b-form-input",{class:{"is-invalid":e.$v.registerForm.lastName.$error},attrs:{autocomplete:"off",id:"input-lastname"},model:{value:e.$v.registerForm.lastName.$model,callback:function(t){e.$set(e.$v.registerForm.lastName,"$model","string"==typeof t?t.trim():t)},expression:"$v.registerForm.lastName.$model"}}),e._v(" "),e.$v.registerForm.lastName.required?e._e():r("div",{staticClass:"invalid-feedback"},[e._v(e._s(e.$t("lastNameRequired")))])],1),e._v(" "),r("b-form-group",{attrs:{id:"input-group-program",label:e.$t("program")+":","label-for":"input-program"}},[r("b-form-input",{class:{"is-invalid":e.$v.registerForm.program.$error},attrs:{placeholder:e.$t("program_placeholder"),autocomplete:"off",id:"input-program"},model:{value:e.$v.registerForm.program.$model,callback:function(t){e.$set(e.$v.registerForm.program,"$model","string"==typeof t?t.trim():t)},expression:"$v.registerForm.program.$model"}}),e._v(" "),e.$v.registerForm.program.required?e._e():r("div",{staticClass:"invalid-feedback"},[e._v(e._s(e.$t("lastNameRequired")))])],1),e._v(" "),r("b-form-group",[r("b-button",{staticClass:"form-control btn btn-crl  btn-primary submit px-3 mt-4 btn-reg mr-2",attrs:{type:"submit"}},[e._v(e._s(e.$t("save"))+"\n            ")])],1)],1)],1)],1)])],1)}),[],!1,null,"4924802e",null);t.default=component.exports}}]);
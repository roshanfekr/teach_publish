(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{365:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return o.default}}),t.regex=t.ref=t.len=t.req=void 0;var n,o=(n=r(368))&&n.__esModule?n:{default:n};function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var c=function(e){if(Array.isArray(e))return!!e.length;if(null==e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===l(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=c;t.len=function(e){return Array.isArray(e)?e.length:"object"===l(e)?Object.keys(e).length:String(e).length};t.ref=function(e,t,r){return"function"==typeof e?e.call(t,r):r[e]};t.regex=function(e,t){return(0,o.default)({type:e},(function(e){return!c(e)||t.test(e)}))}},366:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return x.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return $.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return C.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return j.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return O.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return F.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return k.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return M.default}}),t.helpers=void 0;var n=z(r(367)),o=z(r(370)),l=z(r(371)),c=z(r(372)),d=z(r(373)),f=z(r(374)),v=z(r(375)),m=z(r(376)),h=z(r(377)),y=z(r(378)),_=z(r(379)),w=z(r(380)),x=z(r(381)),$=z(r(382)),C=z(r(383)),j=z(r(384)),O=z(r(385)),P=z(r(386)),F=z(r(387)),k=z(r(388)),M=z(r(389)),S=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};desc.get||desc.set?Object.defineProperty(t,r,desc):t[r]=e[r]}return t.default=e,t}(r(365));function z(e){return e&&e.__esModule?e:{default:e}}t.helpers=S},367:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(365).regex)("alpha",/^[a-zA-Z]*$/);t.default=n},368:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="web"===e.env.BUILD?r(369).withParams:r(253).withParams;t.default=n}).call(this,r(116))},369:function(e,t,r){"use strict";(function(e){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var n="undefined"!=typeof window?window:void 0!==e?e:{},o=n.vuelidate?n.vuelidate.withParams:function(e,t){return"object"===r(e)&&void 0!==t?t:e((function(){}))};t.withParams=o}).call(this,r(36))},370:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(365).regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=n},371:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(365).regex)("numeric",/^[0-9]*$/);t.default=n},372:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(365);t.default=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},(function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r}))}},373:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(365).regex)("email",/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/);t.default=n},374:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(365),o=(0,n.withParams)({type:"ipAddress"},(function(e){if(!(0,n.req)(e))return!0;if("string"!=typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(l)}));t.default=o;var l=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},375:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(365);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},(function(t){if(!(0,n.req)(t))return!0;if("string"!=typeof t)return!1;var r="string"==typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(o)}))};var o=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},376:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(365);t.default=function(e){return(0,n.withParams)({type:"maxLength",max:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e}))}},377:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(365);t.default=function(e){return(0,n.withParams)({type:"minLength",min:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e}))}},378:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(365),o=(0,n.withParams)({type:"required"},(function(e){return"string"==typeof e?(0,n.req)(e.trim()):(0,n.req)(e)}));t.default=o},379:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(365);t.default=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},(function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)}))}},380:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(365);t.default=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},(function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)}))}},381:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(365);t.default=function(e){return(0,n.withParams)({type:"sameAs",eq:e},(function(t,r){return t===(0,n.ref)(e,this,r)}))}},382:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(365).regex)("url",/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i);t.default=n},383:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(365);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t.length>0&&t.reduce((function(t,r){return t||r.apply(e,n)}),!1)}))}},384:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(365);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t.length>0&&t.reduce((function(t,r){return t&&r.apply(e,n)}),!0)}))}},385:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(365);t.default=function(e){return(0,n.withParams)({type:"not"},(function(t,r){return!(0,n.req)(t)||!e.call(this,t,r)}))}},386:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(365);t.default=function(e){return(0,n.withParams)({type:"minValue",min:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))}},387:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(365);t.default=function(e){return(0,n.withParams)({type:"maxValue",max:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))}},388:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(365).regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=n},389:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(365).regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=n},439:function(e,t,r){var content=r(511);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(63).default)("c058af0c",content,!0,{sourceMap:!1})},510:function(e,t,r){"use strict";r(439)},511:function(e,t,r){var n=r(62)(!1);n.push([e.i,".is-invalid .vs__dropdown-toggle{border-color:#dc3545;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.m-v-select2 .vs__clear{margin-top:-2px;margin-right:7px;fill:var(--color1)}",""]),e.exports=n},587:function(e,t,r){"use strict";r.r(t);var n=r(10),o=(r(49),r(21),r(3),r(64),r(19),r(1),r(187),r(33),r(43),r(254),r(30)),l=r(37),c=r(74),d=r(136),f=r(366);o.c.add(l.B),o.c.add(c.f),o.c.add(l.m),o.c.add(l.C),o.c.add(d.b),o.c.add(d.a);var v={middleware:"auth",name:"ToturDetails",mounted:function(){this.$auth.hasScope("tutor")||this.$auth.hasScope("admin")?(this.getUserUniversity(),this.loadUniversity(),this.fillForm()):this.$router.push("/")},data:function(){return{vSelectUnivercityVisable:!1,uniHost:"",university:null,universities_options:[],showEditOverLayDialog:!1,editIndex:-1,editVisible:!1,busy:!0,nextPush:"/tutor-transcript",deleteData:{id:0,lessonId:0},overlays:[],gradeOptions:[{value:"D",text:"D"},{value:"C-",text:"C-"},{value:"C",text:"C"},{value:"B-",text:"B-"},{value:"B",text:"B"},{value:"B+",text:"B+"},{value:"A",text:"A"},{value:"A-",text:"A-"},{value:"A+",text:"A+"}],options:[],transcriptFileId:null,transcriptFilePath:"",items:[],registerForm:{lessonName:"",lessonId:null,description:"",userId:0,year:null,grade:null,price:null},editForm:{id:0,description:null,year:null,grade:null,price:null},errors:null}},computed:{computedYears:function(){for(var e=[],i=1960;i<(new Date).getFullYear();i++)e.push(i);return e}},validations:{registerForm:{grade:{required:f.required},year:{},lessonId:{required:f.required},description:{},price:{required:f.required,numeric:f.numeric}},editForm:{grade:{required:f.required},year:{},description:{},price:{required:f.required,numeric:f.numeric}}},methods:{loadUniversity:function(){var e=this;this.$axios.post("/definitions/universityList").then((function(t){var r=t.data;e.universities_options=[];for(var i=0;i<r.length;i++){var n=r[i];e.universities_options.push({host:n.host,text:n.name})}})).catch((function(e){console.log(e)}))},getUserUniversity:function(){var e=this;this.$axios.post("/university/getUserUniversity",null).then((function(t){var r=t.data.ret;null!==r?(e.university=r,e.uniHost=e.university.host,e.loadSubjects(e.uniHost),e.vSelectUnivercityVisable=!1):e.vSelectUnivercityVisable=!0})).catch((function(e){console.log(e)}))},showModal:function(e){this.$refs[e].show()},hideModal:function(e){this.$refs[e].hide()},clear:function(){this.registerForm.lessonId=null,this.registerForm.description=null,this.registerForm.grade=null,this.registerForm.year=null,this.registerForm.price=null,this.$v.$reset()},showEditDialog:function(e,t){this.editIndex=t,this.editForm.id=e.id,this.editForm.description=e.description,this.editForm.grade=e.grade,this.editForm.year=e.year,this.editForm.price=e.price,this.showModal("editModal")},saveEdit:function(){var e=this;this.$v.$reset(),this.errors=null,this.$v.editForm.$touch(),this.$v.editForm.$invalid?console.log("vuelidate error"):(this.showEditOverLayDialog=!0,this.$axios.post("/subject/save-edit-tutor-subject-one",this.editForm).then((function(t){e.showEditOverLayDialog=!1,e.$set(e.items,e.editIndex,t.data),e.hideModal("editModal"),e.makeToast("success","Message",e.$t("done_successfully"))})).catch((function(t){null!==t.response&&("notexists"===t.response.data&&e.makeToast("danger","Error",e.$t("Item not exist.")),t.response.data.errors&&(e.errors=t.response.data.errors))})).finally((function(){e.showEditOverLayDialog=!1,e.loaded=!1})))},cancelEdit:function(){this.editForm.id=0,this.editForm.description=null,this.editForm.grade=null,this.editForm.year=null,this.editForm.price=null,this.hideModal("editModal")},hideOverlay:function(){this.busy=!1},showOverlay:function(){this.busy=!0},nextStep:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=!1,!(e.registerForm.lessonId>0)){t.next=4;break}return t.next=4,e.$bvModal.msgBoxConfirm(e.$t("subjects.incomplete_form"),{title:"Confirm",size:"md",buttonSize:"sm",okVariant:"danger",okTitle:"YES",cancelTitle:"NO",footerClass:"p-2 border-top-0",hideHeaderClose:!1,headerClass:"p-2 border-bottom-0",centered:!0}).then((function(e){r=!0!==e})).catch((function(e){}));case 4:if(!r){t.next=6;break}return t.abrupt("return");case 6:0===e.items.length?e.$bvModal.msgBoxConfirm(e.$t("subjects.subject_empty_alert"),{title:"Confirm",size:"md",buttonSize:"sm",okVariant:"danger",okTitle:"YES",cancelTitle:"NO",footerClass:"p-2 border-top-0",hideHeaderClose:!1,headerClass:"p-2 border-bottom-0",centered:!0}).then((function(t){!0===t&&e.$router.push(e.nextPush)})).catch((function(e){})):e.$router.push(e.nextPush);case 7:case"end":return t.stop()}}),t)})))()},showDeleteOverlay:function(e){var t=!1;return this.overlays.filter((function(r){if(r.key===e)return t=r.value,!0})),t},loadSubjects:function(e){var t=this;this.lessonLoading=!0;var data={};data.host=this.uniHost,this.$axios.post("/definitions/getAllLessons",data).then((function(e){t.options=e.data,t.lessonLoading=!1})).catch((function(e){console.log(e)}))},fillForm:function(){var e=this;this.showOverlay(),this.$axios.post("subject/items",null).then((function(t){e.hideOverlay(),e.items=t.data.data,e.transcriptFilePath=t.data.transcript.path,e.transcriptFileId=t.data.transcript.fileId})).catch((function(t){t.response.data.errors&&(e.errors=t.response.data.errors),console.log(t)}))},delItem:function(e){e>-1&&this.items.splice(e,1)},onReset:function(e){e.preventDefault()},onSubmit:function(e){var t=this;this.$v.$reset(),this.errors=null,e.preventDefault(),this.$v.registerForm.$touch(),this.$v.registerForm.$invalid?console.log("vuelidate error"):(this.showOverlay(),this.loaded=!0,this.$axios.post("/subject/save-tutor-subject-one",this.registerForm).then((function(e){t.hideOverlay(),t.items.push(e.data),t.overlays.push({key:e.data.id,value:!1}),t.clear(),t.makeToast("success","Message",t.$t("done_successfully"))})).catch((function(e){"duplicate"===e.response.data&&t.makeToast("danger","Error",t.$t("duplicateItem")),e.response.data.errors&&(t.errors=e.response.data.errors),console.log(e)})).finally((function(){t.loaded=!1,t.hideOverlay()})))},downloadFile:function(e){try{this.$axios.get("/download/".concat(e),{responseType:"blob"}).then((function(e){var t=window.URL.createObjectURL(new Blob([e.data],{type:"application/file"})),r=document.createElement("a"),n=e.headers.filename;r.href=t,r.setAttribute("download",n),document.body.appendChild(r),r.click()}))}catch(e){console.log(e)}},makeToast:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"success",header=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Message",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";this.$bvToast.toast(this.$t(t),{autoHideDelay:3e3,title:header,variant:e,solid:!0,appendToast:!0,headerClass:"d-none"})},reloadTable:function(){var e=this;this.loaded=!0,this.$axios.post("subject/items",null).then((function(t){e.items=t.data.data;for(var i in e.items){var r={key:e.items[i].id,value:!1};e.overlays.push(r)}})).catch((function(t){t.response.data.errors&&(e.errors=t.response.data.errors)})).finally((function(){e.loaded=!1}))},showDeleteComfirm:function(e,t){var r=this;try{this.$bvModal.msgBoxConfirm(this.$t("delete_confirm"),{title:"Confirm",size:"sm",buttonSize:"sm",okVariant:"danger",okTitle:"YES",cancelTitle:"NO",footerClass:"p-2 border-top-0",hideHeaderClose:!1,headerClass:"p-2 border-bottom-0",centered:!0}).then((function(t){r.delComfirm=t,!0===t&&(r.setOverlayValue(e,!0),r.deleteData.id=e.id,r.$axios.post("/subject/delete",r.deleteData).then((function(e){r.makeToast("success","Message",r.$t("success_delete")),r.fillForm()})).catch((function(t){r.setOverlayValue(e,!1),r.makeToast("danger","Error",r.$t("success_failed")),t.response.data.errors&&(r.errors=t.response.data.errors),console.log(t)})).finally((function(){})))})).catch((function(t){r.setOverlayValue(e,!1),console.log(t)}))}catch(t){this.setOverlayValue(e,!1),console.log(t)}},setOverlayValue:function(e,t){this.overlays.filter((function(r){r.key===e.id&&(r.value=t)}))}}},m=(r(510),r(73)),component=Object(m.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"main-body-container-content"},[r("b-container",{staticClass:"container-padding"},[r("b-row",{staticClass:"col-md-12 col-lg-10 m-center"},[r("div",{staticClass:"w-100"},[r("h3",{staticClass:"mb-4 text-center"},[e._v(e._s(e.$t("completeRegistration")))])]),e._v(" "),r("b-row",{staticClass:"w-100  mx-0"},[r("h4",{staticClass:"mb-2"},[e._v(e._s(e.$t("subjects.title")))]),e._v(" "),r("b-progress",{staticClass:"w-100",attrs:{value:"2",max:"5",height:"10px",variant:"danger"}}),e._v(" "),r("span",[e._v("2/5")]),e._v(" "),r("p",{staticClass:"w-100 mt-2",staticStyle:{"font-size":"small"}},[r("svg",{staticClass:"bi bi-exclamation-circle",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[r("path",{attrs:{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}}),e._v(" "),r("path",{attrs:{d:"M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"}})]),e._v(" "),r("span",{staticClass:"ml-1"},[e._v(e._s(e.$t("subjects.header_alert")))])])],1),e._v(" "),r("b-row",{staticClass:"mx-0 col-xl-7 col-lg-8 col-md-12"},[r("b-overlay",{attrs:{show:e.busy,rounded:"lg",variant:"white",opacity:"0.8"}},[r("b-form",{staticClass:"w-100  py-4",on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.onSubmit.apply(null,arguments)},reset:e.onReset}},[r("div",{},[r("b-form-row",[e.vSelectUnivercityVisable?r("b-form-group",{staticClass:"col-11",attrs:{id:"input-group-university",label:e.$t("subjects.university"),"label-for":"input-select-university"}},[r("v-select",{staticClass:"m-v-select2",attrs:{id:"input-select-university",placeholder:e.$t("tutors.universities.placeholder"),reduce:function(e){return e.host},options:e.universities_options,label:"text"},on:{input:e.loadSubjects},scopedSlots:e._u([{key:"option",fn:function(t){var text=t.text;return[e._v("\n                      "+e._s(text)+"\n                    ")]}}],null,!1,2825000377),model:{value:e.uniHost,callback:function(t){e.uniHost=t},expression:"uniHost"}})],1):e._e(),e._v(" "),r("b-form-group",{staticClass:"col-11",attrs:{id:"input-group-subject",label:e.$t("subjects.subject"),"label-for":"input-communication"}},[r("v-select",{staticClass:"m-v-select2",class:{"is-invalid  d-block":e.$v.registerForm.lessonId.$error},attrs:{placeholder:"Select one subject",reduce:function(e){return e.id},options:e.options,label:"subject",selectable:function(option){return!option.hasOwnProperty("group")}},scopedSlots:e._u([{key:"option",fn:function(t){var n=t.group,o=t.subject;return[n?r("div",{staticClass:"group"},[e._v("\n                        "+e._s(n)+"\n                      ")]):e._e(),e._v("\n                      "+e._s(o)+"\n                    ")]}}]),model:{value:e.registerForm.lessonId,callback:function(t){e.$set(e.registerForm,"lessonId","string"==typeof t?t.trim():t)},expression:"registerForm.lessonId"}}),e._v(" "),e.$v.registerForm.lessonId.required?e._e():r("div",{staticClass:"invalid-feedback"},[e._v("\n                    "+e._s(e.$t("subjects.lesson.required"))+"\n                  ")])],1),e._v(" "),r("b-form-group",{staticClass:"col-11",attrs:{id:"input-group-grade",label:e.$t("subjects.grade_title"),"label-for":"input-communication"}},[r("v-select",{staticClass:"m-v-select2",class:{"is-invalid  d-block":e.$v.registerForm.grade.$error},attrs:{placeholder:e.$t("subjects.grade_placeholder"),options:e.gradeOptions,reduce:function(e){return e.value},label:"text",selectable:function(option){return!option.hasOwnProperty("group")}},model:{value:e.registerForm.grade,callback:function(t){e.$set(e.registerForm,"grade","string"==typeof t?t.trim():t)},expression:"registerForm.grade"}}),e._v(" "),e.$v.registerForm.grade.required?e._e():r("div",{staticClass:"invalid-feedback"},[e._v("\n                    "+e._s(e.$t("subjects.grade.required"))+"\n                  ")])],1),e._v(" "),r("b-form-group",{staticClass:"col-6",attrs:{id:"input-group-year",label:e.$t("subjects.year"),"label-for":"input-year"}},[r("v-select",{staticClass:"m-v-select2",attrs:{id:"input-year",placeholder:e.$t("subjects.year_placeholder"),options:e.computedYears,selectable:function(option){return!option.hasOwnProperty("group")}},model:{value:e.registerForm.year,callback:function(t){e.$set(e.registerForm,"year","string"==typeof t?t.trim():t)},expression:"registerForm.year"}})],1),e._v(" "),r("b-form-group",{staticClass:"col-11 align-self-end",attrs:{id:"input-group-description",label:e.$t("subjects.description"),"label-for":"input-description"}},[r("b-form-textarea",{attrs:{placeholder:e.$t("desc"),autocomplete:"off",id:"input-description"},model:{value:e.registerForm.description,callback:function(t){e.$set(e.registerForm,"description","string"==typeof t?t.trim():t)},expression:"registerForm.description"}})],1)],1),e._v(" "),r("b-form-group",{staticClass:"w-100",attrs:{id:"input-group-price",label:e.$t("subjects.price.label"),"label-for":"input-price"}},[r("div",{staticClass:"float-left d-block w-50"},[r("b-form-input",{staticClass:"w-100",class:{"is-invalid":e.$v.registerForm.price.$error},attrs:{type:"number",id:"input-price",placeholder:e.$t("subjects.price.placeholder")},model:{value:e.registerForm.price,callback:function(t){e.$set(e.registerForm,"price",t)},expression:"registerForm.price"}}),e._v(" "),e.$v.registerForm.price.required?e._e():r("div",{staticClass:"invalid-feedback"},[e._v(e._s(e.$t("subjects.price.required"))+"\n                  ")])],1),e._v(" "),r("div",{staticClass:"float-left d-block mt-2 ml-1"},[e._v("CAD")])]),e._v(" "),r("p",{staticClass:"mt-5"}),e._v(" "),r("b-row",{staticClass:"w-100 text-right d-block"},[r("b-button",{staticClass:"form-control btn btn-crl btn-primary submit px-3 btn-reg mr-2 mt-4",attrs:{type:"save"}},[e._v("\n                    "+e._s(e.$t("subjects.add"))+"\n                  ")])],1)],1),e._v(" "),r("div",[r("div",{staticClass:"float-left d-block"},[r("b-button",{staticClass:"form-control btn btn-crl  btn-primary submit px-3 mt-4 btn-reg mr-2",attrs:{to:"/tutor-details"}},[r("svg",{staticClass:"bi bi-chevron-left",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"}})]),e._v(" "),r("span",[e._v(e._s(e.$t("back")))])]),e._v(" "),r("b-button",{staticClass:"form-control btn btn-crl  btn-primary submit btn-reg px-3 mt-4",on:{click:e.nextStep}},[r("span",{staticClass:"mt-2"},[e._v(e._s(e.$t("next")))]),e._v(" "),r("svg",{staticClass:"bi bi-chevron-right",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"}})])])],1),e._v(" "),r("div",{staticClass:"float-right mt-5 w-50 text-right"},[r("b-link",{attrs:{href:""},on:{click:e.nextStep}},[e._v(e._s(e.$t("skipStep")))])],1)])])],1)],1)],1),e._v(" "),r("b-row",{staticClass:"mt-4 w-100 mx-0"},e._l(e.items,(function(t,n){return r("div",{key:t.id,staticClass:"col-lg-4 p-1"},[r("b-card",{staticClass:"h-100"},[r("b-overlay",{staticClass:"w-100",attrs:{show:e.showDeleteOverlay(t.id),variant:"transparent",opacity:.8,blur:"3px",rounded:"sm"}},[r("div",{staticClass:"text-right"},[r("b-link",{staticClass:"mr-4",staticStyle:{color:"#bfbfbf"},attrs:{size:"sm"},on:{click:function(r){return e.showDeleteComfirm(t,n)}}},[r("font-awesome-icon",{staticClass:"shop-icon",attrs:{icon:["fas","trash"]}})],1),e._v(" "),r("b-link",{staticStyle:{color:"#bfbfbf"},attrs:{size:"sm"},on:{click:function(r){return e.showEditDialog(t,n)}}},[r("font-awesome-icon",{staticClass:"shop-icon",attrs:{icon:["far","edit"]}})],1)],1),e._v(" "),r("div",{staticClass:"small font-weight-bold title-color"},[e._v("\n                "+e._s(e.$t("subjects.label"))+"\n              ")]),e._v(" "),r("div",[e._v("\n                "+e._s(t.subject)+"\n              ")]),e._v(" "),r("hr",{staticClass:"my-2"}),e._v(" "),r("div",{staticClass:"small font-weight-bold title-color"},[e._v("\n                "+e._s(e.$t("Status"))+"\n              ")]),e._v(" "),r("div",[1===t.acceptStatus?r("b-badge",{attrs:{variant:"success"}},[e._v(e._s(e.$t("accepted")))]):e._e(),e._v(" "),-1===t.acceptStatus?r("b-badge",{attrs:{variant:"danger"}},[e._v(e._s(e.$t("disable")))]):e._e(),e._v(" "),0===t.acceptStatus||null===t.acceptStatus?r("b-badge",{attrs:{variant:"warning"}},[e._v("\n                  "+e._s(e.$t("pending"))+"\n                ")]):e._e()],1),e._v(" "),r("hr",{staticClass:"my-2"}),e._v(" "),r("div",{staticClass:"small font-weight-bold title-color"},[e._v("\n                Grade\n              ")]),e._v(" "),r("div",[e._v("\n                "+e._s(t.grade)+"\n              ")]),e._v(" "),r("hr",{staticClass:"my-2"}),e._v(" "),r("div",{staticClass:"small font-weight-bold title-color"},[e._v("\n                Year\n              ")]),e._v(" "),r("div",[e._v("\n                "+e._s(t.year)+"\n              ")]),e._v(" "),r("hr",{staticClass:"my-2"}),e._v(" "),r("div",{staticClass:"small font-weight-bold title-color"},[e._v("\n                Price\n              ")]),e._v(" "),r("div",[e._v("\n                "+e._s(t.price)),r("span",{staticClass:"small"},[e._v(" CAD")])]),e._v(" "),r("hr",{staticClass:"my-2"}),e._v(" "),r("div",{staticClass:"small font-weight-bold title-color"},[e._v("\n                Description\n              ")]),e._v(" "),r("div",[e._v("\n                "+e._s(t.description)+"\n              ")])])],1)],1)})),0),e._v(" "),r("b-modal",{ref:"editModal",attrs:{"hide-header":"","hide-footer":"",centered:""}},[r("b-overlay",{attrs:{show:e.showEditOverLayDialog,rounded:"lg",variant:"white",opacity:"0.8"}},[r("b-form",{staticClass:"w-100  py-4",on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.onSubmit.apply(null,arguments)},reset:e.onReset}},[r("b-form-row",[r("b-form-group",{staticClass:"col-11",attrs:{id:"input-group-grade",label:e.$t("subjects.grade_title"),"label-for":"input-communication"}},[r("v-select",{staticClass:"m-v-select2",class:{"is-invalid  d-block":e.$v.editForm.grade.$error},attrs:{placeholder:e.$t("subjects.grade_placeholder"),options:e.gradeOptions,reduce:function(e){return e.value},label:"text",selectable:function(option){return!option.hasOwnProperty("group")}},model:{value:e.editForm.grade,callback:function(t){e.$set(e.editForm,"grade","string"==typeof t?t.trim():t)},expression:"editForm.grade"}}),e._v(" "),e.$v.editForm.grade.required?e._e():r("div",{staticClass:"invalid-feedback"},[e._v("\n                "+e._s(e.$t("subjects.grade.required"))+"\n              ")])],1),e._v(" "),r("b-form-group",{staticClass:"col-6",attrs:{id:"input-group-year",label:e.$t("subjects.year")+":","label-for":"input-year"}},[r("v-select",{staticClass:"m-v-select2",attrs:{placeholder:e.$t("subjects.year_placeholder"),options:e.computedYears,selectable:function(option){return!option.hasOwnProperty("group")}},model:{value:e.editForm.year,callback:function(t){e.$set(e.editForm,"year","string"==typeof t?t.trim():t)},expression:"editForm.year"}})],1),e._v(" "),r("b-form-group",{staticClass:"col-11 align-self-end",attrs:{id:"input-group-description",label:e.$t("subjects.description")+":","label-for":"input-description"}},[r("b-form-textarea",{attrs:{placeholder:e.$t("desc"),autocomplete:"off",id:"input-accountId"},model:{value:e.editForm.description,callback:function(t){e.$set(e.editForm,"description","string"==typeof t?t.trim():t)},expression:"editForm.description"}})],1),e._v(" "),r("b-form-group",{staticClass:"w-100",attrs:{id:"input-group-price",label:e.$t("subjects.price.label"),"label-for":"input-price"}},[r("div",{staticClass:"float-left d-block w-50"},[r("b-form-input",{staticClass:"w-100",class:{"is-invalid":e.$v.editForm.price.$error},attrs:{type:"number",id:"input-price",placeholder:e.$t("subjects.price.placeholder")},model:{value:e.editForm.price,callback:function(t){e.$set(e.editForm,"price",t)},expression:"editForm.price"}}),e._v(" "),e.$v.editForm.price.required?e._e():r("div",{staticClass:"invalid-feedback"},[e._v(e._s(e.$t("subjects.price.required"))+"\n                ")])],1),e._v(" "),r("div",{staticClass:"float-left d-block mt-2 ml-1"},[e._v("CAD")])]),e._v(" "),r("b-form-row",{staticClass:"w-100"},[r("div",{staticClass:"p-2 "},[r("b-button",{staticClass:"form-control btn btn-crl btn-primary submit px-3 btn-reg mr-2",on:{click:e.saveEdit}},[e._v("\n                  "+e._s(e.$t("save"))+"\n                ")]),e._v(" "),r("b-button",{staticClass:"form-control btn btn-crl btn-primary submit px-3 btn-reg mr-2",on:{click:e.cancelEdit}},[e._v("\n                  "+e._s(e.$t("cancel"))+"\n                ")])],1)])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);
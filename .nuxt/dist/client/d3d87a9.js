(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{513:function(t,o,l){var content=l(591);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(70).default)("c8037a12",content,!0,{sourceMap:!1})},590:function(t,o,l){"use strict";l(513)},591:function(t,o,l){var n=l(69)(!1);n.push([t.i,"\n.m-selected[data-v-68adb9e8] {\r\n  padding-top: 16px;\r\n  z-index: 99;\r\n  height: 50px;\r\n  width: calc(100% + 2px);\r\n  position: absolute;\r\n  background-color: rgba(var(--gradian-color4));\r\n  color: white;\r\n  margin: -1px;\r\n  font-size: small;\r\n  text-align: center;\r\n  box-shadow: inset 0 0 15px rgba(var(--gradian-color1));\n}\n.m-even-time[data-v-68adb9e8] {\r\n  padding-top: 14px;\r\n  width: 100%;\r\n  z-index: 999;\r\n  position: absolute;\r\n  height: 49px;\r\n  background-color: white;\r\n  margin-left: -15px;\r\n  text-align: center;\n}\r\n\r\n\r\n",""]),t.exports=n},680:function(t,o,l){"use strict";l.r(o);l(1);var n=l(37),r=l(41);n.c.add(r.l);var e={middleware:"auth",name:"tutor-finish",data:function(){return{loadOverlay:!0,result:{emailComfirmed:!1,subject:!1,tutorTiming:!1}}},mounted:function(){this.check()},methods:{check:function(){var t=this;this.$axios.post("/user/getTutorStatus",null).then((function(o){t.loadOverlay=!1,t.result=o.data})).catch((function(t){})).finally((function(){t.loadOverlay=!1}))}}},c=(l(590),l(80)),component=Object(c.a)(e,(function(){var t=this,o=t._self._c;return o("b-container",{attrs:{fluid:""}},[o("b-row",{staticClass:"mt-5 scol-md-12 pb-5 col-lg-10 m-center"},[o("b-overlay",{staticClass:"w-100",attrs:{show:t.loadOverlay,variant:"white",opacity:1,blur:"3px",rounded:"sm"}},[o("b-row",{staticClass:"mt-4 font-weight-bold mx-0"},[o("b-col",{staticClass:"col-xl-8 col-lg-8 mx-auto"},[o("svg",{staticClass:"bi bi-patch-check",staticStyle:{color:"#04CB28","margin-bottom":"10px"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",fill:"currentColor",viewBox:"0 0 16 16"}},[o("path",{attrs:{"fill-rule":"evenodd",d:"M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"}}),t._v(" "),o("path",{attrs:{d:"m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z"}})]),t._v(" "),o("span",{staticStyle:{color:"#04CB28","font-size":"24px"}},[t._v(t._s(t.$t("tutor_register_finish")))])])],1),t._v(" "),t.result.emailComfirmed?t._e():o("b-row",{staticClass:"mt-4 font-weight-bold mx-0"},[o("b-col",{staticClass:"col-xl-8 col-lg-8 mx-auto"},[o("font-awesome-icon",{staticStyle:{color:"#ffc252","margin-bottom":"1px"},attrs:{icon:["fas","exclamation-triangle"]}}),t._v("\n          "+t._s(t.$t("account.unVerifiedAlert"))+"\n        ")],1)],1),t._v(" "),t.result.subject?t._e():o("b-row",{staticClass:"mt-4 font-weight-bold mx-0"},[o("b-col",{staticClass:"col-xl-8 col-lg-8 mx-auto"},[o("font-awesome-icon",{staticStyle:{color:"#ffc252","margin-bottom":"1px"},attrs:{icon:["fas","exclamation-triangle"]}}),t._v("\n          "+t._s(t.$t("tutor_register_finish.nosubject"))+"\n        ")],1)],1),t._v(" "),t.result.tutorTiming?t._e():o("b-row",{staticClass:"mt-4 font-weight-bold mx-0"},[o("b-col",{staticClass:"col-xl-8 col-lg-8 mx-auto"},[o("font-awesome-icon",{staticClass:"font-color",staticStyle:{color:"#FFC252FF","margin-bottom":"1px"},attrs:{icon:["fas","exclamation-triangle"]}}),t._v("\n          "+t._s(t.$t("tutor_register_finish.timing"))+"\n        ")],1)],1),t._v(" "),o("b-row",{staticClass:"mt-5 font-weight-bold mx-0"},[o("b-col",{staticClass:"col-xl-8 col-lg-8 mx-auto"},[o("b-button",{staticClass:"btn btn-crl btn-primary px-4",attrs:{to:"/"}},[t._v("Continue to Home Page")])],1)],1)],1)],1)],1)}),[],!1,null,"68adb9e8",null);o.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{442:function(t,e,n){var content=n(517);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(63).default)("6386add8",content,!0,{sourceMap:!1})},516:function(t,e,n){"use strict";n(442)},517:function(t,e,n){var o=n(62)(!1);o.push([t.i,".nav-item .active,.nav-item a:hover{color:var(--color1)}.sub .nav-item{padding-left:30px!important}.m-menu-icon{font-size:larger;width:30px!important;margin-right:10px}.m-menu-icon-sub{font-size:medium;width:30px!important}",""]),t.exports=o},591:function(t,e,n){"use strict";n.r(e);var o=n(30),r=n(37),c=n(74);o.c.add([r.d,c.a,r.u,r.b,r.c,r.j,r.o,c.c,r.k,r.a,c.e,r.z,r.D,r.r,r.h,r.g]);var l={middleware:"auth",name:"UserPanel",data:function(){return{windowWidth:window.getComputedStyle(document.documentElement).getPropertyValue("--screen-mode"),user:null,errors:null}},head:function(){return{title:"TuteLoop",htmlAttrs:{lang:"fa",amp:void 0},headAttrs:{TuteLoop:!0},bodyAttrs:{tabIndex:0}}},watch:{windowWidth:function(t){console.log("it changed to ".concat(t," "))}},mounted:function(){var t=this;this.$nextTick((function(){window.addEventListener("resize",t.onResize)}))},beforeDestroy:function(){window.removeEventListener("resize",this.onResize)},methods:{hasExactPermission:function(t){return this.$auth.hasScope(t)},hasPermission:function(t){return!!this.$auth.hasScope("admin")||this.$auth.hasScope(t)},onResize:function(){this.windowWidth=window.getComputedStyle(document.documentElement).getPropertyValue("--screen-mode")}},computed:{availableLocales:function(){return this.$i18n.locales}}},m=(n(516),n(73)),component=Object(m.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{staticClass:"h-100 mx-0 px-0",attrs:{fluid:""}},[n("div",{staticClass:"d-flex min-vh-100"},[n("client-only",[n("b-button",{directives:[{name:"show",rawName:"v-show",value:"xl"!==t.windowWidth&&"lg"!==t.windowWidth,expression:"windowWidth!== 'xl' && windowWidth !== 'lg'"},{name:"b-toggle",rawName:"v-b-toggle.sidebar-1",modifiers:{"sidebar-1":!0}}],staticClass:"btn  btn-primary",staticStyle:{"border-bottom-right-radius":"25px!important","border-top-right-radius":"25px!important",position:"fixed",left:"-5px","margin-top":"25px","z-index":"999"},attrs:{squared:""}},[n("font-awesome-icon",{staticStyle:{"font-size":"small","margin-bottom":"1px",color:"#fff"},attrs:{icon:["fas","chevron-right"]}})],1),t._v(" "),n("b-nav",{directives:[{name:"show",rawName:"v-show",value:"xl"===t.windowWidth||"lg"===t.windowWidth,expression:"windowWidth=== 'xl' || windowWidth === 'lg'"}],staticClass:"px-3 py-4 shadow",staticStyle:{width:"400px"},attrs:{vertical:""}},[t.hasPermission("student")||t.hasPermission("tutor")?n("b-nav-item",{attrs:{to:"/user-panel/taken-lessons",active:"/user-panel/taken-lessons"===this.$route.path||"/user-panel/taken-lessons"===this.$route.path}},[n("font-awesome-icon",{staticClass:"m-menu-icon",attrs:{icon:["far","address-book"]}}),t._v("\n          "+t._s(t.$t("myLessons.taken"))+"\n        ")],1):t._e(),t._v(" "),n("b-nav-item",{attrs:{to:"/user-panel/requests",active:"/user-panel/requests"===this.$route.path}},[n("font-awesome-icon",{staticClass:"m-menu-icon",attrs:{icon:["far","comment"]}}),t._v("\n          "+t._s(t.$t("requests"))+"\n        ")],1),t._v(" "),t.hasPermission("tutor")?n("b-nav-item",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-1",modifiers:{"accordion-1":!0}}],staticClass:"accordion"},[n("font-awesome-icon",{staticClass:"m-menu-icon",attrs:{icon:["fas","chalkboard-teacher"]}}),t._v("\n          "+t._s(t.$t("tutor_account_profile"))+"\n        ")],1):t._e(),t._v(" "),n("b-collapse",{attrs:{id:"accordion-1",visible:"",accordion:"my-accordion"}},[n("b-nav",{staticClass:"sub",attrs:{vertical:""}},[t.hasPermission("tutor")?n("b-nav-item",{attrs:{to:"/user-panel/my-lessons",active:"/user-panel/my-lessons"===this.$route.path||"/user-panel/my-lessons"===this.$route.path}},[n("font-awesome-icon",{staticClass:"m-menu-icon-sub",attrs:{icon:["far","calendar-alt"]}}),t._v("\n              "+t._s(t.$t("myLessons"))+"\n            ")],1):t._e(),t._v(" "),t.hasPermission("tutor")?n("b-nav-item",{attrs:{to:"/user-panel/subject",active:"/user-panel/subject"===this.$route.path}},[n("font-awesome-icon",{staticClass:"m-menu-icon-sub",attrs:{icon:["fas","book-open"]}}),t._v("\n              "+t._s(t.$t("Course.label"))+"\n            ")],1):t._e(),t._v(" "),t.hasPermission("tutor")?n("b-nav-item",{attrs:{to:"/user-panel/tutor-transcript",active:"/user-panel/tutor-transcript"===this.$route.path}},[n("font-awesome-icon",{staticClass:"m-menu-icon-sub",attrs:{icon:["fas","scroll"]}}),t._v("\n              "+t._s(t.$t("transcript.title"))+"\n            ")],1):t._e(),t._v(" "),t.hasPermission("tutor")?n("b-nav-item",{attrs:{to:"/user-panel/educs",active:"/user-panel/educs"===this.$route.path}},[n("font-awesome-icon",{staticClass:"m-menu-icon-sub",attrs:{icon:["fas","graduation-cap"]}}),t._v("\n              "+t._s(t.$t("education"))+"\n            ")],1):t._e(),t._v("\n            "+t._s(t.$t())+"\n\n            "),t.hasPermission("tutor")?n("b-nav-item",{attrs:{to:"/user-panel/timing",active:"/user-panel/timing"===this.$route.path}},[n("font-awesome-icon",{staticClass:"m-menu-icon-sub",attrs:{icon:["fas","clock"]}}),t._v("\n              "+t._s(t.$t("Timing"))+"\n            ")],1):t._e()],1)],1),t._v(" "),n("b-nav-item",{attrs:{to:"/user-panel/system-msg",active:"/user-panel/system-msg"===this.$route.path}},[n("font-awesome-icon",{staticClass:"m-menu-icon",staticStyle:{"font-size":"22px","margin-top":"2px"},attrs:{icon:["far","bell"]}}),t._v("\n\n          "+t._s(t.$t("tutor_account_system_msg"))+"\n        ")],1),t._v(" "),t.hasPermission("tutor")?n("b-nav-item",{attrs:{to:"/user-panel/profile",active:"/user-panel/profile"===this.$route.path}},[n("font-awesome-icon",{staticClass:"m-menu-icon",attrs:{icon:["fas","user"]}}),t._v("\n          "+t._s(t.$t("profile"))+"\n        ")],1):n("b-nav-item",{attrs:{to:"/user-panel/st-profile",active:"/user-panel/st-profile"===this.$route.path}},[n("font-awesome-icon",{staticClass:"m-menu-icon",attrs:{icon:["fas","user"]}}),t._v("\n          "+t._s(t.$t("profile"))+"\n        ")],1),t._v(" "),n("b-nav-item",{attrs:{to:"/user-panel/account",active:"/user-panel/account"===this.$route.path}},[n("font-awesome-icon",{staticClass:"m-menu-icon",attrs:{icon:["fas","lock"]}}),t._v("\n          "+t._s(t.$t("account"))+"\n        ")],1)],1),t._v(" "),n("b-sidebar",{directives:[{name:"show",rawName:"v-show",value:"xl"!==t.windowWidth&&"lg"!==t.windowWidth,expression:"windowWidth !== 'xl' && windowWidth !== 'lg'"}],attrs:{id:"sidebar-1",backdrop:"","no-header":"","no-close-on-route-change":!0,"bg-variant":"white",shadow:""}},[n("b-button",{directives:[{name:"show",rawName:"v-show",value:"xl"!==t.windowWidth&&"lg"!==t.windowWidth,expression:"windowWidth !== 'xl' && windowWidth !== 'lg'"},{name:"b-toggle",rawName:"v-b-toggle.sidebar-1",modifiers:{"sidebar-1":!0}}],staticClass:"btn",staticStyle:{color:"var(--color1)","border-bottom-right-radius":"25px!important","border-top-right-radius":"25px!important",position:"absolute",right:"0px","z-index":"999"},attrs:{variant:"link"}},[n("font-awesome-icon",{staticStyle:{"font-size":"small","margin-bottom":"1px"},attrs:{icon:["fas","chevron-left"]}})],1),t._v(" "),n("b-nav",{staticClass:"pt-4",attrs:{vertical:""}},[t.hasPermission("student")||t.hasPermission("tutor")?n("b-nav-item",{attrs:{to:"/user-panel/taken-lessons",active:"/user-panel/taken-lessons"===this.$route.path||"/user-panel/taken-lessons"===this.$route.path}},[n("font-awesome-icon",{staticClass:"m-menu-icon",attrs:{icon:["far","address-book"]}}),t._v("\n            "+t._s(t.$t("myLessons.taken"))+"\n          ")],1):t._e(),t._v(" "),n("b-nav-item",{attrs:{to:"/user-panel/requests",active:"/user-panel/requests"===this.$route.path}},[n("font-awesome-icon",{staticClass:"m-menu-icon",attrs:{icon:["far","comment"]}}),t._v("\n            "+t._s(t.$t("requests"))+"\n          ")],1),t._v(" "),t.hasPermission("tutor")?n("b-nav-item",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-1",modifiers:{"accordion-1":!0}}],staticClass:"accordion"},[n("font-awesome-icon",{staticClass:"m-menu-icon",attrs:{icon:["fas","chalkboard-teacher"]}}),t._v("\n            "+t._s(t.$t("tutor_account_profile"))+"\n          ")],1):t._e(),t._v(" "),n("b-collapse",{attrs:{id:"accordion-1",visible:"",accordion:"my-accordion"}},[n("b-nav",{staticClass:"sub",attrs:{vertical:""}},[t.hasPermission("tutor")?n("b-nav-item",{attrs:{to:"/user-panel/my-lessons",active:"/user-panel/my-lessons"===this.$route.path||"/user-panel/my-lessons"===this.$route.path}},[n("font-awesome-icon",{staticClass:"m-menu-icon-sub",attrs:{icon:["far","calendar-alt"]}}),t._v("\n                "+t._s(t.$t("myLessons"))+"\n              ")],1):t._e(),t._v(" "),t.hasPermission("tutor")?n("b-nav-item",{attrs:{to:"/user-panel/subject",active:"/user-panel/subject"===this.$route.path}},[n("font-awesome-icon",{staticClass:"m-menu-icon-sub",attrs:{icon:["fas","book-open"]}}),t._v("\n                "+t._s(t.$t("Course.label"))+"\n              ")],1):t._e(),t._v(" "),t.hasPermission("tutor")?n("b-nav-item",{attrs:{to:"/user-panel/tutor-transcript",active:"/user-panel/tutor-transcript"===this.$route.path}},[n("font-awesome-icon",{staticClass:"m-menu-icon-sub",attrs:{icon:["fas","scroll"]}}),t._v("\n                "+t._s(t.$t("transcript.title"))+"\n              ")],1):t._e(),t._v(" "),t.hasPermission("tutor")?n("b-nav-item",{attrs:{to:"/user-panel/educs",active:"/user-panel/educs"===this.$route.path}},[n("font-awesome-icon",{staticClass:"m-menu-icon-sub",attrs:{icon:["fas","graduation-cap"]}}),t._v("\n                "+t._s(t.$t("education"))+"\n              ")],1):t._e(),t._v("\n              "+t._s(t.$t())+"\n\n              "),t.hasPermission("tutor")?n("b-nav-item",{attrs:{to:"/user-panel/timing",active:"/user-panel/timing"===this.$route.path}},[n("font-awesome-icon",{staticClass:"m-menu-icon-sub",attrs:{icon:["fas","clock"]}}),t._v("\n                "+t._s(t.$t("Timing"))+"\n              ")],1):t._e()],1)],1),t._v(" "),n("b-nav-item",{attrs:{to:"/user-panel/system-msg",active:"/user-panel/system-msg"===this.$route.path}},[n("font-awesome-icon",{staticClass:"m-menu-icon",staticStyle:{"font-size":"22px","margin-top":"2px"},attrs:{icon:["far","bell"]}}),t._v("\n\n            "+t._s(t.$t("tutor_account_system_msg"))+"\n          ")],1),t._v(" "),t.hasPermission("tutor")?n("b-nav-item",{attrs:{to:"/user-panel/profile",active:"/user-panel/profile"===this.$route.path}},[n("font-awesome-icon",{staticClass:"m-menu-icon",attrs:{icon:["fas","user"]}}),t._v("\n            "+t._s(t.$t("profile"))+"\n          ")],1):n("b-nav-item",{attrs:{to:"/user-panel/st-profile",active:"/user-panel/st-profile"===this.$route.path}},[n("font-awesome-icon",{staticClass:"m-menu-icon",attrs:{icon:["fas","user"]}}),t._v("\n            "+t._s(t.$t("profile"))+"\n          ")],1),t._v(" "),n("b-nav-item",{attrs:{to:"/user-panel/account",active:"/user-panel/account"===this.$route.path}},[n("font-awesome-icon",{staticClass:"m-menu-icon",attrs:{icon:["fas","lock"]}}),t._v("\n            "+t._s(t.$t("account"))+"\n          ")],1)],1)],1)],1),t._v(" "),n("div",{staticStyle:{width:"100%"}},[n("NuxtChild")],1)],1)])}),[],!1,null,null,null);e.default=component.exports}}]);
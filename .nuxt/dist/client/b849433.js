(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{459:function(t,e,o){var content=o(559);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(63).default)("697824f9",content,!0,{sourceMap:!1})},558:function(t,e,o){"use strict";o(459)},559:function(t,e,o){var r=o(62)(!1);r.push([t.i,".m-v-select2{margin-right:5px}.m-v-select2 .vs__clear{margin-top:-2px;margin-right:7px;fill:var(--color1)}.m-selected,.m-selected2{padding-top:16px;z-index:99;height:27px;width:calc(100% + 2px);position:absolute;background-color:rgba(var(--gradian-color4));color:#fff;margin:-1px;font-size:small;text-align:center;box-shadow:inset 0 0 15px rgba(var(--gradian-color1))}.nav-item .active,.nav-item a:hover{color:var(--color1)}.sub .nav-item{padding-left:30px!important}.m-menu-icon{font-size:larger;width:30px!important;margin-right:10px}.m-menu-icon-sub{font-size:medium;width:30px!important}.btn-crl{padding:12px 17px}",""]),t.exports=r},620:function(t,e,o){"use strict";o.r(e);var r=o(10),n=(o(49),o(11),o(20),o(137),o(24),o(21),o(2),o(255),o(19),o(30)),l=o(74),c=o(37),d=o(564);n.c.add(l.d),n.c.add(c.l),n.c.add(c.u),n.c.add(c.x),n.c.add(c.e),n.c.add(c.r);var h={name:"Tutors",components:{BooklessonModal:d.default},data:function(){var t=this.$createElement;return{uniHost:"",subName:"",subdomain:!0,host:"",lessonLoading:!1,universities_options:[],formatter2:function(t){return"".concat((""+t).replace(/\B(?=(\d{3})+(?!\d))/g,","))},cc:23,options_methods:[{value:1,text:"Online"},{value:2,text:"In-Person"},{value:3,text:"Both"}],showm:!1,showOverlay:!1,windowWidth:window.getComputedStyle(document.documentElement).getPropertyValue("--screen-mode"),week:["MON","TUE","WED","THU","FRI","SAT","SUN"],timing:[],clock:[],perPage:10,currentPage:void 0===this.$route.params.id?1:this.$route.params.id,data:[],totalRows:0,subject:null,trainingMethod:null,rangeRate:[0,5],rangePrice:[0,0],MaxPrice:25,MinPrice:-1,marks:{0:{label:t("svg",{attrs:{viewBox:"0 0 16 16",width:"1em",height:"1em",focusable:"false",role:"img","aria-label":"star",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},class:"bi-star b-icon bi text-warning"},[t("g",[t("path",{attrs:{d:"M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"}})])])},1:{label:t("svg",{attrs:{viewBox:"0 0 16 16",width:"1em",height:"1em",focusable:"false",role:"img","aria-label":"star",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},class:"bi-star b-icon bi text-warning"},[t("g",[t("path",{attrs:{d:"M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"}})])])},2:{label:t("svg",{attrs:{viewBox:"0 0 16 16",width:"1em",height:"1em",focusable:"false",role:"img","aria-label":"star",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},class:"bi-star b-icon bi text-warning"},[t("g",[t("path",{attrs:{d:"M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"}})])])},3:{label:t("svg",{attrs:{viewBox:"0 0 16 16",width:"1em",height:"1em",focusable:"false",role:"img","aria-label":"star",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},class:"bi-star b-icon bi text-warning"},[t("g",[t("path",{attrs:{d:"M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"}})])])},4:{label:t("svg",{attrs:{viewBox:"0 0 16 16",width:"1em",height:"1em",focusable:"false",role:"img","aria-label":"star",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},class:"bi-star b-icon bi text-warning"},[t("g",[t("path",{attrs:{d:"M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"}})])])},5:{label:t("svg",{attrs:{viewBox:"0 0 16 16",width:"1em",height:"1em",focusable:"false",role:"img","aria-label":"star",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},class:"bi-star b-icon bi text-warning"},[t("g",[t("path",{attrs:{d:"M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"}})])])}},tutorName:"",options:[],errors:null,tutorId:0,textMessage:null}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var o,r,n,l,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.$axios,r=t.params,n=t.query,l={currentPage:void 0===r.id?1:r.id,perPage:10,sortDesc:!0,sortBy:"id",subject:n.subject,tutorName:n.tutor,days:n.days,rangeRate:n.rate,rangePrice:n.price,trainingMethod:n.method},e.next=4,o.$post("user/tutors",l).catch((function(t){console.log(t.response)}));case 4:return c=e.sent,e.abrupt("return",{data:c.rows,totalRows:c.totalRows});case 6:case"end":return e.stop()}}),e)})))()},created:function(){},mounted:function(){var t=this;this.$nextTick((function(){window.addEventListener("resize",t.onResize)})),this.loadUniversity(),this.fillMenuCalender(),this.initMaxPrice(),this.fillFilterItems(),this.Init()},methods:{Init:function(){if(this.host=window.location.hostname,this.host=this.host.replace("www.",""),-1===this.host.search("."))this.subdomain=!1;else{var t=this.host.split(".");this.subName=t[0],this.subdomain=!0}this.subdomain?(this.uniHost=this.host,this.loadSubjects(this.host)):this.loadUniversity()},loadUniversity:function(){var t=this;this.$axios.post("/definitions/universityList").then((function(e){var o=e.data;t.universities_options=[];for(var i=0;i<o.length;i++){var r=o[i];t.universities_options.push({host:r.host,text:r.name})}t.loadSubjects()})).catch((function(t){console.log(t)}))},fillFilterItems:function(){var t=this;if(this.$route.query.days){var e=this.$route.query.days;if(e.constructor===Array)e.forEach((function(e){var o=e.split("-");2===o.length&&t.$set(t.timing[o[0]],o[1],!0)}));else{var o=e.split("-");2===o.length&&this.$set(this.timing[o[0]],o[1],!0)}}if(this.$route.query.tutor&&(this.tutorName=this.$route.query.tutor),this.$route.query.subject&&(this.subject=this.$route.query.subject<0?null:Number(this.$route.query.subject)),this.$route.query.method&&(this.trainingMethod=this.$route.query.method<0?null:Number(this.$route.query.method)),this.$route.query.price){var r=this.$route.query.price;r.constructor===Array&&r.forEach((function(e,o){t.$set(t.rangePrice,o,e)}))}if(this.$route.query.rate){var n=this.$route.query.rate;n.constructor===Array&&n.forEach((function(e,o){t.$set(t.rangeRate,o,e)}))}},booklesson:function(t){this.tutorId=t,this.$auth.loggedIn?this.$refs.booklesson_modal.show():this.$router.push("/login")},cancelSendMessage:function(){this.hideMessageDialog()},showMessageDialog:function(t){this.tutorId=t,this.$auth.loggedIn?this.$refs.sm_modal.show():this.$router.push("/login")},hideMessageDialog:function(){this.$refs.sm_modal.hide()},makeToast:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"success",header=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Message",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";this.$bvToast.toast(this.$t(e),{autoHideDelay:3e3,title:header,variant:t,solid:!0,appendToast:!0,headerClass:"d-none"})},sendMessage:function(){var t=this,e={receiverId:this.tutorId,text:this.textMessage,type:0,entityId:0};this.showOverlay=!0,this.$axios.post("/request/create",e).then((function(e){!0===e.data.ok?(t.textMessage="",t.makeToast("success","Message","sendMessage_success")):t.makeToast("danger","Message","sendMessage_error"),t.hideMessageDialog(),t.showOverlay=!0})).catch((function(e){t.makeToast("danger","Message","sendMessage_error"),t.showOverlay=!1,console.log(e)})).finally((function(){t.showOverlay=!1}))},trainingType:function(t){switch(t){case 1:return"Online";case 2:return"In-Person";case 3:return"Online / In-Person";default:return""}},subjectPars:function(t){var e=[];null!=t&&t.split(",").forEach((function(t,o){var r=t.split("-"),n={};n.name=r[0],n.rate=r[1],n.accepted=r[2],n.price=r[3],e.push(n)}));return e},loadSubjects:function(t){var e=this;this.lessonLoading=!0;var data={};this.subdomain&&(data.host=this.uniHost),this.$axios.post("/definitions/getAllLessons",data).then((function(t){e.options=t.data,e.lessonLoading=!1})).catch((function(t){console.log(t)}))},fillMenuCalender:function(){for(var t=this,i=0;i<4;i++)this.clock.push(i);this.week.forEach((function(e,o){var r=[];t.clock.forEach((function(t,e){r[t]=!1})),t.timing.push(r)}))},changeTutorName:function(){},changeSubject:function(){},filterAvalibility:function(t,e){this.$set(this.timing[t],e,!this.timing[t][e])},checkTiming:function(t,i,e){var o=!1;t&&t.split(",").forEach((function(t){var r=t.split("-");r[0]==e&&r[1]>=12*i&&r[1]<12*(i+1)&&(o=!0)}));return o},initMaxPrice:function(){var t=this;try{this.$axios.post("/subject/max-price",null).then((function(e){t.MinPrice=e.data.result.min,t.MaxPrice=e.data.result.max,t.$set(t.rangePrice,0,t.MinPrice),t.$set(t.rangePrice,1,t.MaxPrice)})).catch((function(e){e.response.data.errors&&(t.errors=e.response.data.errors),console.log(e)}))}catch(t){}},getTutors:function(){var t=this,e={tutorName:this.tutorName,subject:this.subject?this.subject:-1,currentPage:this.currentPage,perPage:this.perPage,sortDesc:!0,sortBy:"id",days:this.$route.query.days,rangeRate:this.$route.query.rate,rangePrice:this.$route.query.price,trainingMethod:this.$route.query.method};this.$axios.post("user/tutors",e).then((function(e){console.log(e.data),t.totalRows=e.data.totalRows,t.data=e.data.rows})).catch((function(e){e.response.data.errors&&(t.errors=e.response.data.errors),console.log(e)}))},getSelectedTimes:function(){var t=[];return this.timing.forEach((function(e,o){e.forEach((function(e,r){e&&t.push(o+"-"+r)}))})),t},clearFillter:function(){var t=this;this.tutorName=null,this.subject=null,this.timing.forEach((function(e,o){e.forEach((function(e,r){t.$set(t.timing[o],r,!1)}))})),this.rangeRate=[0,5],this.rangePrice=[0,0],this.trainingMethod=null,this.initMaxPrice()},changeUrl:function(t){var e=this,o=this.getSelectedTimes(),r=this.subject?this.subject:-1;this.$router.replace({path:"/tutors/".concat(this.currentPage),query:{tutor:this.tutorName,subject:r,days:o,method:this.trainingMethod,price:this.rangePrice,rate:this.rangeRate}}).then((function(){t&&e.getTutors()})).catch((function(o){t&&e.getTutors()}))},goPage:function(){this.changeUrl(!1)},onResize:function(){this.windowWidth=window.getComputedStyle(document.documentElement).getPropertyValue("--screen-mode")}},watch:{windowWidth:function(t){console.log("it changed to ".concat(t," "))}},beforeDestroy:function(){window.removeEventListener("resize",this.onResize)}},v=(o(558),o(73)),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-container",{staticClass:"h-100 mx-0 px-0",attrs:{fluid:""}},[o("div",{staticClass:"d-flex min-vh-100"},[o("client-only",["xl"!==t.windowWidth&&"lg"!==t.windowWidth?o("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar-1",modifiers:{"sidebar-1":!0}}],staticClass:"btn btn-crl  btn-primary  ",staticStyle:{position:"fixed",right:"0px","margin-top":"20px","margin-right":"25px","z-index":"999"}},[o("font-awesome-icon",{staticStyle:{"font-size":"small","margin-bottom":"1px",color:"#fff"},attrs:{icon:["fas","filter"]}})],1):t._e(),t._v(" "),"xl"===t.windowWidth||"lg"===t.windowWidth?o("b-nav",{staticClass:"px-3 py-4 shadow",staticStyle:{width:"280px"},attrs:{vertical:""}},[o("h5",{staticClass:"pb-3 my-0",staticStyle:{color:"#bbb"}},[t._v("Filter")]),t._v(" "),o("div",{staticClass:"pb-1"},[t._v(t._s(t.$t("tutorName")))]),t._v(" "),o("b-form-input",{on:{keyup:function(e){return t.changeTutorName()}},model:{value:t.tutorName,callback:function(e){t.tutorName="string"==typeof e?e.trim():e},expression:"tutorName"}}),t._v(" "),o("hr",{staticClass:"w-100"}),t._v(" "),o("div",{staticClass:"pb-1"},[t._v(t._s(t.$t("tutors.universities")))]),t._v(" "),o("v-select",{staticClass:"m-v-select2",attrs:{placeholder:t.$t("tutors.universities.placeholder"),reduce:function(t){return t.host},options:t.universities_options,label:"text"},on:{input:t.loadSubjects},model:{value:t.uniHost,callback:function(e){t.uniHost=e},expression:"uniHost"}}),t._v(" "),o("div",{staticClass:"pb-1 mt-2"},[t._v(t._s(t.$t("subject")))]),t._v(" "),o("v-select",{staticClass:"m-v-select2",attrs:{placeholder:"Select one subject",reduce:function(t){return t.id},loading:t.lessonLoading,options:t.options,label:"subject",selectable:function(option){return!option.hasOwnProperty("group")}},on:{input:function(e){return t.changeSubject()}},scopedSlots:t._u([{key:"option",fn:function(e){var r=e.group,n=e.subject;return[r?o("div",{staticClass:"group"},[t._v("\n              "+t._s(r)+"\n            ")]):t._e(),t._v("\n            "+t._s(n)+"\n          ")]}}],null,!1,2565347593),model:{value:t.subject,callback:function(e){t.subject=e},expression:"subject"}}),t._v(" "),o("hr",{staticClass:"w-100"}),t._v(" "),o("div",{staticClass:"pb-1"},[t._v(t._s(t.$t("tutors.trainingMethods.label")))]),t._v(" "),o("v-select",{staticClass:"m-v-select2",attrs:{id:"input-trainingMethods",placeholder:"Select one method",label:"text",reduce:function(t){return t.value},options:t.options_methods},model:{value:t.trainingMethod,callback:function(e){t.trainingMethod=e},expression:"trainingMethod"}}),t._v(" "),o("hr",{staticClass:"w-100"}),t._v(" "),o("div",{staticClass:"pb-1"},[t._v(t._s(t.$t("price.label"))+"(CAD)")]),t._v(" "),o("div",{staticClass:"py-4 pl-1 pr-2"},[o("vue-slider",{staticClass:"w-100",attrs:{tooltip:"always","tooltip-placement":["bottom","top"],min:t.MinPrice,"tooltip-formatter":t.formatter2,"process-style":{backgroundColor:"var(--color1)"},"tooltip-style":{backgroundColor:"var(--color1)",borderColor:"var(--color1)"},max:t.MaxPrice},model:{value:t.rangePrice,callback:function(e){t.rangePrice=e},expression:"rangePrice"}})],1),t._v(" "),o("hr",{staticClass:"w-100"}),t._v(" "),o("div",{staticClass:"pb-1"},[t._v(t._s(t.$t("rate.label")))]),t._v(" "),o("div",{staticClass:"py-4 pl-1 pr-2"},[o("vue-slider",{staticClass:"w-100",attrs:{tooltip:"always","tooltip-placement":["top","top"],min:0,marks:t.marks,"process-style":{backgroundColor:"#ffc107"},"tooltip-style":{backgroundColor:"#ffc107",borderColor:"#ffc107"},max:5},model:{value:t.rangeRate,callback:function(e){t.rangeRate=e},expression:"rangeRate"}})],1),t._v(" "),o("hr",{staticClass:"w-100"}),t._v(" "),o("div",{staticClass:"pb-1"},[t._v(t._s(t.$t("availability")))]),t._v(" "),o("div",{staticStyle:{"min-width":"255px"}},[o("b-row",{staticClass:"m-0 w-100 text-center border-left border-bottom border-top border-right p-0 ",staticStyle:{height:"25px"}},[o("b-col",{staticClass:"p-0",staticStyle:{"min-width":"62px!important"}},[o("font-awesome-icon",{staticStyle:{"font-size":"small","margin-bottom":"1px",color:"#bbb"},attrs:{icon:["far","clock"]}})],1),t._v(" "),t._l(t.week,(function(e,i){return o("b-col",{key:i,staticClass:"border-left p-0"},[o("div",{staticStyle:{"margin-top":"5px","font-size":"xx-small"}},[t._v(" "+t._s(e))])])}))],2),t._v(" "),t._l(t.clock,(function(e,r){return o("b-row",{key:r,staticClass:"m-0 w-100 border-bottom  border-left border-right"},[o("b-col",{staticClass:"text-center px-0",staticStyle:{"min-width":"62px!important","padding-top":"7px","min-height":"25px"}},[o("div",{staticClass:"align-content-center align-middle ",staticStyle:{"font-size":"xx-small"}},[0===r?o("div",[t._v("\n                  00:00 - 06:00\n                ")]):t._e(),t._v(" "),1===r?o("div",[t._v("\n                  00:06 - 12:00\n                ")]):t._e(),t._v(" "),2===r?o("div",[t._v("\n                  12:00 - 18:00\n                ")]):t._e(),t._v(" "),3===r?o("div",[t._v("\n                  18:00 - 00:00\n                ")]):t._e()])]),t._v(" "),t._l(t.week,(function(e,n){return o("b-col",{key:n,staticClass:"border-left p-0"},[o("div",{staticClass:"m-pointer",class:t.timing[n][r]?"m-selected":"",staticStyle:{"min-height":"25px"},on:{click:function(e){return t.filterAvalibility(n,r)}}})])}))],2)}))],2),t._v(" "),o("div",{staticClass:"d-flex"},[o("b-button",{staticClass:"btn btn-crl  btn-primary submit px-3 mt-4 btn-reg mr-2",on:{click:function(e){return t.changeUrl(!0)}}},[t._v("Filter\n          ")]),t._v(" "),o("b-button",{staticClass:"btn btn-crl  btn-primary submit px-3 mt-4 btn-reg mr-2",on:{click:function(e){return t.clearFillter()}}},[t._v("Clear\n          ")])],1)],1):o("b-sidebar",{attrs:{id:"sidebar-1",backdrop:"","no-header":"","no-close-on-route-change":!0,"bg-variant":"white",shadow:""}},[o("b-button",{directives:[{name:"show",rawName:"v-show",value:"xl"!==t.windowWidth&&"lg"!==t.windowWidth,expression:"windowWidth !== 'xl' && windowWidth !== 'lg'"},{name:"b-toggle",rawName:"v-b-toggle.sidebar-1",modifiers:{"sidebar-1":!0}}],staticClass:"btn",staticStyle:{color:"var(--color1)","border-bottom-right-radius":"25px!important","border-top-right-radius":"25px!important",position:"relative",float:"right","z-index":"999"},attrs:{variant:"link"}},[o("font-awesome-icon",{staticStyle:{"font-size":"small","margin-bottom":"1px"},attrs:{icon:["fas","times"]}})],1),t._v(" "),o("h5",{staticClass:"p-3 my-0",staticStyle:{color:"#bbb"}},[t._v("Filter")]),t._v(" "),o("div",{staticClass:"px-3 pt-0 pb-3"},[o("div",{staticClass:"pb-1"},[t._v(t._s(t.$t("tutorName")))]),t._v(" "),o("b-form-input",{on:{keyup:function(e){return t.changeTutorName()}},model:{value:t.tutorName,callback:function(e){t.tutorName="string"==typeof e?e.trim():e},expression:"tutorName"}}),t._v(" "),o("hr",{staticClass:"w-100"}),t._v(" "),o("div",{staticClass:"pb-1"},[t._v(t._s(t.$t("subject")))]),t._v(" "),o("v-select",{staticClass:"m-v-select2",attrs:{placeholder:"Select one subject",reduce:function(t){return t.id},options:t.options,label:"subject",selectable:function(option){return!option.hasOwnProperty("group")}},on:{input:function(e){return t.changeSubject()}},scopedSlots:t._u([{key:"option",fn:function(e){var r=e.group,n=e.subject;return[r?o("div",{staticClass:"group"},[t._v("\n                "+t._s(r)+"\n              ")]):t._e(),t._v("\n              "+t._s(n)+"\n            ")]}}]),model:{value:t.subject,callback:function(e){t.subject=e},expression:"subject"}}),t._v(" "),o("hr",{staticClass:"w-100"}),t._v(" "),o("div",{staticClass:"pb-1"},[t._v(t._s(t.$t("tutors.trainingMethods.label")))]),t._v(" "),o("v-select",{staticClass:"m-v-select2",attrs:{id:"input-trainingMethods",placeholder:"Select one method",label:"text",reduce:function(t){return t.value},options:t.options_methods},model:{value:t.trainingMethod,callback:function(e){t.trainingMethod=e},expression:"trainingMethod"}}),t._v(" "),o("hr",{staticClass:"w-100"}),t._v(" "),o("div",{staticClass:"pb-1"},[t._v(t._s(t.$t("price.label"))+"(CAD)")]),t._v(" "),o("div",{staticClass:"py-4 pl-1 pr-3"},[o("vue-slider",{staticClass:"w-100",attrs:{tooltip:"always","tooltip-placement":["bottom","top"],min:t.MinPrice,"tooltip-formatter":t.formatter2,"process-style":{backgroundColor:"var(--color1)"},"tooltip-style":{backgroundColor:"var(--color1)",borderColor:"var(--color1)"},max:t.MaxPrice},model:{value:t.rangePrice,callback:function(e){t.rangePrice=e},expression:"rangePrice"}})],1),t._v(" "),o("hr",{staticClass:"w-100"}),t._v(" "),o("div",{staticClass:"pb-1"},[t._v(t._s(t.$t("rate.label")))]),t._v(" "),o("div",{staticClass:"py-4 pl-1 pr-3"},[o("vue-slider",{staticClass:"w-100",attrs:{tooltip:"always","tooltip-placement":["top","top"],min:0,marks:t.marks,"process-style":{backgroundColor:"#ffc107"},"tooltip-style":{backgroundColor:"#ffc107",borderColor:"#ffc107"},max:5},model:{value:t.rangeRate,callback:function(e){t.rangeRate=e},expression:"rangeRate"}})],1),t._v(" "),o("hr",{staticClass:"w-100"}),t._v(" "),o("div",{staticClass:"pb-1"},[t._v(t._s(t.$t("availability")))]),t._v(" "),o("div",{staticStyle:{"min-width":"255px"}},[o("b-row",{staticClass:"m-0 w-100 text-center border-left border-bottom border-top border-right p-0 ",staticStyle:{height:"25px"}},[o("b-col",{staticClass:"p-0",staticStyle:{"min-width":"62px!important"}},[o("font-awesome-icon",{staticStyle:{"font-size":"small","margin-bottom":"1px",color:"#cccfd2"},attrs:{icon:["far","clock"]}})],1),t._v(" "),t._l(t.week,(function(e,i){return o("b-col",{key:i,staticClass:"border-left p-0"},[o("div",{staticStyle:{"margin-top":"5px","font-size":"xx-small"}},[t._v(" "+t._s(e))])])}))],2),t._v(" "),t._l(t.clock,(function(e,r){return o("b-row",{key:r,staticClass:"m-0 w-100 border-bottom  border-left border-right"},[o("b-col",{staticClass:"text-center px-0",staticStyle:{"min-width":"62px!important","padding-top":"7px","min-height":"25px"}},[o("div",{staticClass:"align-content-center align-middle ",staticStyle:{"font-size":"xx-small"}},[0==r?o("div",[t._v("\n                    00:00 - 06:00\n                  ")]):t._e(),t._v(" "),1==r?o("div",[t._v("\n                    00:06 - 12:00\n                  ")]):t._e(),t._v(" "),2==r?o("div",[t._v("\n                    12:00 - 18:00\n                  ")]):t._e(),t._v(" "),3==r?o("div",[t._v("\n                    18:00 - 00:00\n                  ")]):t._e()])]),t._v(" "),t._l(t.week,(function(e,n){return o("b-col",{key:n,staticClass:"border-left p-0"},[o("div",{staticClass:"m-pointer",class:t.timing[n][r]?"m-selected":"",staticStyle:{"min-height":"25px"},on:{click:function(e){return t.filterAvalibility(n,r)}}})])}))],2)}))],2),t._v(" "),o("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar-1",modifiers:{"sidebar-1":!0}}],staticClass:"btn btn-crl  btn-primary submit px-3 mt-4 btn-reg mr-2",on:{click:function(e){return t.changeUrl(!0)}}},[t._v("Filter\n          ")]),t._v(" "),o("b-button",{staticClass:"btn btn-crl  btn-primary submit px-3 mt-4 btn-reg mr-2",on:{click:function(e){return t.clearFillter()}}},[t._v("Clear\n          ")])],1)],1)],1),t._v(" "),o("div",{staticStyle:{width:"100%"}},[o("div",{staticClass:"w-100"},[t.data.length>0?o("div",{staticClass:"px-5 pt-4 w-100"},[t._v("\n          "+t._s(t.$t("findTutors"))+"\n        ")]):o("div",{staticClass:"px-5 pt-4 w-100  text-center",staticStyle:{color:"gray","font-size":"medium"}},[t._v("\n          "+t._s(t.$t("findTutors-notFound"))+"\n        ")])]),t._v(" "),t._l(t.data,(function(e,r){return o("div",{key:r,staticClass:"shadow m-4 p-4 d-xl-flex d-lg-flex d-md-flex",attrs:{id:"my-list"}},[o("b-avatar",{attrs:{to:"/tutor/"+e.id,size:"7rem",src:null!=e.File?"/"+e.File.path:"",alt:"Cropped Image"}}),t._v(" "),o("div",{staticClass:"pt-3 px-lg-4 px-xl-4 px-md-4 w-100"},[o("div",[o("h3",[o("b-link",{attrs:{to:"/tutor/"+e.id}},[t._v(" "+t._s(e.name)+" "+t._s(e.lastName))])],1)]),t._v(" "),o("b-form-rating",{staticClass:"px-0 ml-n1",staticStyle:{outline:"none","box-shadow":"none"},attrs:{id:"rating-sm-no-border",variant:"warning",readonly:"","no-border":"",inline:"",size:"lg"},model:{value:e.AvgRate,callback:function(o){t.$set(e,"AvgRate",o)},expression:"item.AvgRate"}}),t._v(" "),o("div",{staticClass:"pt-2 font-weight-bold"},[t._v("\n            "+t._s(e.headline)+"\n          ")]),t._v(" "),o("div",{staticClass:"pt-2"},[o("span",{staticStyle:{color:"var(--color2)"}},[t._v("Subject: ")]),t._v(" "),t._l(t.subjectPars(e.Subjects),(function(e,r){return o("span",[0!=r?o("span",[t._v(",")]):t._e(),t._v(" "),o("span",{staticStyle:{"white-space":"nowrap"}},[1==e.accepted?o("font-awesome-icon",{staticStyle:{color:"#03ef1c"},attrs:{icon:["fas","check-circle"]}}):t._e(),t._v("\n              "+t._s(e.name)+"\n              "),o("span",{staticStyle:{color:"#dc3545","text-decoration":"underline"}},[t._v("\n                 "+t._s(e.price>0?e.price+" CAD":t.$t("price-0"))+"\n              ")]),t._v(" "),""!==e.rate&&e.rate>0?o("span",{staticClass:"ml-1",staticStyle:{width:"unset!important"}},[o("span",{staticClass:"outline-badge",staticStyle:{display:"inline-flex!important"},attrs:{variant:"warning"}},[o("font-awesome-icon",{staticStyle:{color:"#ffc107"},attrs:{icon:["fas","star"]}}),t._v(" "),o("span",{staticStyle:{color:"#ffc107","padding-left":"3px!important"}},[t._v(t._s(e.rate)+"\n                  ")])],1)]):t._e()],1)])}))],2),t._v(" "),void 0!==e.training_method&&null!==e.training_method?o("div",{staticClass:"pt-2 mt-1"},[o("span",{staticStyle:{color:"var(--color2)"}},[t._v(t._s(t.$t("tutors.trainingMethods.label"))+": ")]),t._v("\n            "+t._s(t.trainingType(e.training_method))+"\n          ")]):t._e(),t._v(" "),o("div",{staticClass:"pt-2 three-dot mt-3"},[t._v("\n            "+t._s(e.bioMore)+"\n          ")])],1),t._v(" "),o("div",{staticClass:"mt-3",staticStyle:{"min-width":"255px"}},[o("b-row",{staticClass:"w-100 mx-0 "},[o("b-button",{staticClass:"btn btn-outline-primary w-100",on:{click:function(o){return t.showMessageDialog(e.id)}}},[t._v("\n              "+t._s(t.$t("sendMessage"))+"\n              "),o("font-awesome-icon",{staticStyle:{"margin-top":"5px","margin-right":"5px"},attrs:{icon:["fas","paper-plane"]}})],1)],1),t._v(" "),o("b-row",{staticClass:"mt-2 w-100 mx-0 text-center border-left border-bottom border-top border-right p-0 ",staticStyle:{height:"25px"}},[o("b-col",{staticClass:"p-0",staticStyle:{"min-width":"62px!important"}},[o("font-awesome-icon",{staticStyle:{"font-size":"small","margin-bottom":"1px",color:"#cccfd2"},attrs:{icon:["far","clock"]}})],1),t._v(" "),t._l(t.week,(function(e,i){return o("b-col",{key:i,staticClass:"border-left p-0"},[o("div",{staticStyle:{"margin-top":"5px","font-size":"xx-small"}},[t._v(" "+t._s(e))])])}))],2),t._v(" "),t._l(t.clock,(function(r,i){return o("b-row",{key:i,staticClass:"w-100 mx-0 border-bottom  border-left border-right"},[o("b-col",{staticClass:"text-center px-0",staticStyle:{"min-width":"62px!important","padding-top":"7px","min-height":"25px"}},[o("div",{staticClass:"align-content-center align-middle",staticStyle:{"font-size":"xx-small"}},[0==i?o("div",[t._v("\n                  00:00 - 06:00\n                ")]):t._e(),t._v(" "),1==i?o("div",[t._v("\n                  00:06 - 12:00\n                ")]):t._e(),t._v(" "),2==i?o("div",[t._v("\n                  12:00 - 18:00\n                ")]):t._e(),t._v(" "),3==i?o("div",[t._v("\n                  18:00 - 00:00\n                ")]):t._e()])]),t._v(" "),t._l(t.week,(function(r,n){return o("b-col",{key:n,staticClass:"border-left p-0"},[o("div",{class:t.checkTiming(e.Timings,i,n)?"m-selected2":"",staticStyle:{"min-height":"25px"}})])}))],2)})),t._v(" "),o("b-row",{staticClass:"w-100 mx-0 mt-2"},[o("b-button",{staticClass:"btn btn-primary w-100",on:{click:function(o){return t.booklesson(e.id)}}},[t._v("\n              "+t._s(t.$t("bookLesson"))+"\n            ")])],1)],2)],1)})),t._v(" "),o("div",{staticClass:"w-100"},[o("b-pagination",{directives:[{name:"show",rawName:"v-show",value:t.perPage<t.totalRows,expression:"perPage < totalRows"}],staticClass:"pt-4",attrs:{dir:"ltr",align:"center","total-rows":t.totalRows,"per-page":t.perPage,"aria-controls":"my-list"},on:{input:t.goPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],2)],1),t._v(" "),o("b-modal",{ref:"sm_modal",attrs:{centered:"",size:"md","hide-footer":"",title:"Send Message"}},[o("b-overlay",{attrs:{show:t.showOverlay,rounded:"sm",variant:"white",opacity:"0.5"}},[o("b-row",{staticClass:"mt-1"},[o("b-textarea",{staticClass:"ml-3 mr-3",attrs:{id:"textarea-rows",placeholder:this.$t("please_type_message"),rows:"4",lazy:!0},model:{value:t.textMessage,callback:function(e){t.textMessage=e},expression:"textMessage"}})],1),t._v(" "),o("b-row",{staticClass:"mt-3"},[o("b-col",[o("b-button",{staticClass:"float-right w-50",attrs:{variant:"primary"},on:{click:this.sendMessage}},[t._v(t._s(t.$t("Send"))+"\n          ")])],1),t._v(" "),o("b-col",[o("b-button",{staticClass:"float-left w-50",attrs:{variant:"primary"},on:{click:this.cancelSendMessage}},[t._v("\n            "+t._s(t.$t("cancel"))+"\n          ")])],1)],1)],1)],1),t._v(" "),o("b-modal",{ref:"booklesson_modal",attrs:{centered:"",scrollable:"",size:"xl","hide-footer":"",title:"Book Lesson"}},[o("BooklessonModal",{model:{value:t.tutorId,callback:function(e){t.tutorId=e},expression:"tutorId"}})],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{425:function(t,e,o){var content=o(478);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(64).default)("1b7833da",content,!0,{sourceMap:!1})},426:function(t,e,o){var content=o(480);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(64).default)("64f118b2",content,!0,{sourceMap:!1})},470:function(t,e,o){t.exports=o.p+"img/bg-main.d05f5f1.png"},471:function(t,e,o){t.exports=o.p+"img/online-learning.2a36f4b.jpg"},472:function(t,e,o){t.exports=o.p+"img/quick.05067f2.png"},473:function(t,e,o){t.exports=o.p+"img/vetted.553a756.png"},474:function(t,e,o){t.exports=o.p+"img/free.3dca414.png"},475:function(t,e,o){t.exports=o.p+"img/booklesson.61c2193.png"},476:function(t,e,o){t.exports=o.p+"img/register.241fd89.png"},477:function(t,e,o){"use strict";o(425)},478:function(t,e,o){var r=o(63)(!1);r.push([t.i,".m-v-select-1,.m-v-select-2{width:calc(100% - 60px)}.m-v-select-2{margin-top:10px}.m-v-select{font-size:1.3rem}.m-v-select-2 .vs__search::-moz-placeholder{border-left-width:0!important;background:#fff!important;border-top-left-radius:4px;border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px}.m-v-select-2 .vs__search:-ms-input-placeholder{border-left-width:0!important;background:#fff!important;border-top-left-radius:4px;border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px}.m-v-select-2 .vs__dropdown-menu,.m-v-select-2 .vs__dropdown-toggle,.m-v-select-2 .vs__search::placeholder{border-left-width:0!important;background:#fff!important;border-top-left-radius:4px;border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px}.m-v-select-1 .vs__search::-moz-placeholder{background:#fff!important;border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-right-radius:4px;border-bottom-left-radius:4px}.m-v-select-1 .vs__search:-ms-input-placeholder{background:#fff!important;border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-right-radius:4px;border-bottom-left-radius:4px}.m-v-select-1 .vs__dropdown-menu,.m-v-select-1 .vs__dropdown-toggle,.m-v-select-1 .vs__search::placeholder{background:#fff!important;border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-right-radius:4px;border-bottom-left-radius:4px}.m-v-select .vs__clear{margin-top:-4px;margin-right:10px;fill:var(--color1)}.m-v-select .vs__open-indicator{margin-right:5px;fill:var(--color1)}.img-fluid{display:none!important}.carousel{min-height:500px!important}.carousel-caption{position:relative!important;top:0;right:0;left:0}.carousel-indicators li{background-color:var(--color1)!important}.m-slider{color:#888}",""]),t.exports=r},479:function(t,e,o){"use strict";o(426)},480:function(t,e,o){var r=o(63),n=o(260),l=o(481),c=r(!1),d=n(l);c.push([t.i,".btn-search[data-v-60fafbc8]{margin-top:10px;width:60px}.m-icon[data-v-60fafbc8]{font-size:xxx-large;color:var(--color1)}.main-bg[data-v-60fafbc8]{min-height:calc(100vh - 63px);background-image:url("+d+");background-size:100% 100%;background-position:top;background-repeat:no-repeat}.search-container[data-v-60fafbc8]{padding-top:7%}.m-panel[data-v-60fafbc8]{z-index:999;margin-top:-100px;background:transparent!important}.round-panel[data-v-60fafbc8]{background:#fff;border-radius:20px}",""]),t.exports=c},481:function(t,e,o){t.exports=o.p+"img/bg.6a44aae.jpg"},581:function(t,e,o){"use strict";o.r(e);o(142),o(21);var r=o(31),n=o(38);r.c.add(n.s),r.c.add(n.w),r.c.add(n.y),r.c.add(n.o),r.c.add(n.p),r.c.add(n.v);var l={name:"Home",head:function(){return{title:"Online one-to-one tutors",meta:[{name:"description",content:""},{name:"keywords",content:""}]}},data:function(){return{subName:"",subdomain:!0,host:"",lessonLoading:!1,universities_options:[],options:[],selectedUniversity:null,selectedSubject:null}},mounted:function(){this.loadUniversity()},methods:{filterBy:function(option,label,t){return(label||"").toLocaleLowerCase().startsWith(t.toLocaleLowerCase())},loadUniversity:function(){var t=this;this.$axios.post("/definitions/universityList").then((function(e){var o=e.data;t.universities_options=[];for(var i=0;i<o.length;i++){var r=o[i];t.universities_options.push({id:r.id,text:r.name})}1===o.length&&(t.selectedUniversity=t.universities_options[0],t.loadSubjects())})).catch((function(t){console.log(t)}))},loadSubjects:function(){var t=this;this.lessonLoading=!0;var data={};if(!(null!=this.selectedUniversity&&this.selectedUniversity.id>0))return this.options=[],this.selectedSubject=null,void(this.lessonLoading=!1);data.uniId=this.selectedUniversity.id,this.$axios.post("/definitions/getAllLessons",data).then((function(e){t.options=e.data,t.lessonLoading=!1})).catch((function(t){console.log(t)}))},clickSearch:function(){this.selectedUniversity&&this.selectedSubject&&this.$router.push("/tutors/1?university="+this.selectedUniversity.id+"&subject="+this.selectedSubject.id)}}},c=(o(477),o(479),o(74)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"main-bg "},[r("div",{staticClass:"container search-container "},[r("b-row",{staticClass:"w-100 mx-0"},[r("b-col",{staticClass:"col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12"},[r("h2",{staticClass:"text-white mb-4"},[t._v("\n          Central Tutoring Hub to Connect Students to Students\n        ")]),t._v(" "),r("h5",{staticClass:"text-white text-justify mb-3"},[t._v("\n            TuteLoop seamlessly connects students to other students that offer tutoring. This website is exclusive to\n            University of Manitoba students. Get help from your senior colleagues who have taken the class you are\n            struggling with, maybe even with the same professor and TAs. Just choose a course and then select a tutor\n            to set up a session.\n          ")]),t._v(" "),t.$auth.loggedIn?t._e():r("h6",{staticClass:"text-white mb-3"},[t._v("\n            "+t._s(t.$t("Become_tutor_txt"))+"  "),r("b-button",{attrs:{variant:"success",to:"/register"}},[t._v(t._s(t.$t("Become_tutor_btn")))])],1),t._v(" "),r("div",{staticClass:"w-100 mb-3 d-block",staticStyle:{height:"10px"}}),t._v(" "),r("b-input-group",{staticClass:"w-100"},[r("client-only",[t.universities_options.length>1?r("v-select",{staticClass:"m-v-select-1 m-v-select",attrs:{placeholder:t.$t("page.first.universities.placeholder"),options:t.universities_options,label:"text"},on:{input:t.loadSubjects},scopedSlots:t._u([{key:"option",fn:function(e){var text=e.text;return[t._v("\n                  "+t._s(text)+"\n                ")]}},{key:"no-options",fn:function(e){e.search,e.searching,e.loading;return[t._v("\n                  This is the no options slot.\n                ")]}}],null,!1,3133451459),model:{value:t.selectedUniversity,callback:function(e){t.selectedUniversity=e},expression:"selectedUniversity"}}):t._e(),t._v(" "),r("v-select",{staticClass:"m-v-select-2 m-v-select",attrs:{placeholder:t.$t("page.first.subjets.placeholder"),loading:t.lessonLoading,filterBy:t.filterBy,options:t.options,label:"code"},scopedSlots:t._u([{key:"option",fn:function(e){var code=e.code;return[t._v("\n                  "+t._s(code)+"\n                ")]}},{key:"no-options",fn:function(e){e.search,e.searching,e.loading;return[t._v("\n                  This is the no options slot.\n                ")]}}]),model:{value:t.selectedSubject,callback:function(e){t.selectedSubject=e},expression:"selectedSubject"}})],1),t._v(" "),r("b-input-group-append",[r("b-button",{staticClass:"btn-search",attrs:{variant:"dark"},on:{click:t.clickSearch}},[r("font-awesome-icon",{attrs:{icon:["fas","search"]}})],1)],1)],1)],1),t._v(" "),r("b-col",{staticClass:"col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12"},[r("b-img",{staticClass:"w-100",staticStyle:{"z-index":"2"},attrs:{alt:"",src:o(470)}})],1)],1)],1)]),t._v(" "),r("div",{staticClass:"container bg-white mb-5 m-panel"},[r("div",{staticClass:"shadow round-panel"},[r("b-carousel",{staticClass:"py-4 px-xl-4 px-lg-4 px-md-4",attrs:{id:"carousel-1",interval:4e3,indicators:""}},[r("b-carousel-slide",{attrs:{"img-blank":""}},[r("b-row",{staticClass:"m-slider w-100  mb-3 mx-0 mt-xl-1 mt-lg-1 mt-md-1 mt-sm-4 mt-5"},[r("h4",{staticClass:"w-100 text-center"},[t._v("\n              What’s TuteLoop?\n            ")])]),t._v(" "),r("b-row",{staticClass:"m-slider mx-0"},[r("b-col",{staticClass:"col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 text-justify pb-2",staticStyle:{"line-height":"1.8rem"}},[t._v("\n              TuteLoop is a free website operated by students for students. This platform is exclusive to University\n              of Manitoba students and acts as a central hub to help tutors and students connect. The tutors you will\n              find here are your senior colleagues who have taken the class you are struggling with, maybe even with\n              the same professor and TAs. Therefore, you will get specific, targeted and time-effective tutoring. Do\n              well in your class with help of your senior colleagues and later you can tutor the same course to\n              others.\n            ")]),t._v(" "),r("b-col",{staticClass:"col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5"},[r("b-img",{staticStyle:{width:"100%"},attrs:{src:o(471)}})],1)],1)],1),t._v(" "),r("b-carousel-slide",{attrs:{"img-blank":""}},[r("b-row",{staticClass:"m-slider w-100  mb-3 mx-0 mt-xl-1 mt-lg-1 mt-md-1 mt-sm-4 mt-5"},[r("h4",{staticClass:"w-100 text-center"},[t._v("\n              Why you’ll like TuteLoop\n            ")])]),t._v(" "),r("b-row",{staticClass:"m-slider mx-0 mt-5"},[r("b-col",{staticClass:"col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-4"},[r("div",{staticClass:"w-100 text-center"},[r("b-img",{attrs:{src:o(472)}})],1),t._v(" "),r("h4",{staticClass:"pt-3"},[t._v("\n                It’s Quick\n              ")]),t._v(" "),r("div",{staticClass:"w-100 text-center mt-4"},[t._v("\n                Just search for a class and find a tutor that’s right for you\n              ")])]),t._v(" "),r("b-col",{staticClass:"col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-4"},[r("div",{staticClass:"w-100 text-center"},[r("b-img",{attrs:{src:o(473)}})],1),t._v(" "),r("h4",{staticClass:"pt-3"},[t._v("\n                It’s Vetted\n              ")]),t._v(" "),r("div",{staticClass:"w-100 text-center mt-4"},[t._v("\n                Students can leave reviews and a five-star rating for their tutors.\n              ")])]),t._v(" "),r("b-col",{staticClass:"col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-4"},[r("div",{staticClass:"w-100 text-center"},[r("b-img",{attrs:{src:o(474)}})],1),t._v(" "),r("h4",{staticClass:"pt-3"},[t._v("\n                It’s Free\n              ")]),t._v(" "),r("div",{staticClass:"w-100 text-center mt-4"},[t._v("\n                There are no hidden fees. This service is completely free to use.\n              ")])])],1)],1),t._v(" "),r("b-carousel-slide",{attrs:{"img-blank":""}},[r("b-row",{staticClass:"m-slider w-100  mb-3 mx-0 mt-xl-1 mt-lg-1 mt-md-1 mt-sm-4 mt-5"},[r("h4",{staticClass:"w-100 text-center"},[t._v("\n              How to find a tutor\n            ")])]),t._v(" "),r("b-row",{staticClass:"m-slider mx-0 mt-5 w-100"},[r("b-col",{staticClass:"col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 mb-4"},[r("b-img",{staticClass:"mt-n5",staticStyle:{width:"90%"},attrs:{src:o(475)}})],1),t._v(" "),r("b-col",{staticClass:"col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7  text-left mt-xl-5 mt-lg-5 mt-md-5 mt-sm-1 mt-1"},[r("h6",{staticClass:"pb-2"},[t._v("Search for a Course")]),t._v(" "),r("h6",{staticClass:"pb-2"},[t._v("Pick a tutor based on preferences")]),t._v(" "),r("h6",[t._v(" Create a profile in two steps to message and arrange a session. ")])])],1)],1),t._v(" "),r("b-carousel-slide",{attrs:{"img-blank":""}},[r("b-row",{staticClass:"m-slider w-100  mb-3 mx-0 mt-xl-1 mt-lg-1 mt-md-1 mt-sm-4 mt-5"},[r("h4",{staticClass:"w-100 text-center"},[t._v("\n              How to register as a tutor\n            ")]),t._v(" "),r("h6",{staticClass:"w-100 text-center"},[t._v("\n              Just 3 steps to set up a professional tutoring page\n            ")])]),t._v(" "),r("b-row",{staticClass:"m-slider mx-0 mt-5 w-100"},[r("b-col",{staticClass:"col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 mb-4"},[r("b-img",{staticClass:"mt-n3",staticStyle:{width:"80%"},attrs:{src:o(476)}})],1),t._v(" "),r("b-col",{staticClass:"col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7  text-left mt-xl-5 mt-lg-5 mt-md-5 mt-sm-1 mt-1"},[r("h6",{staticClass:"pb-2"},[t._v(" Create a profile using your University email address")]),t._v(" "),r("h6",{staticClass:"pb-2"},[t._v("Optional: upload your transcript to become a Verified Tutor")]),t._v(" "),r("h6",[t._v("Start making a reputation for yourself!")])])],1)],1),t._v(" "),r("b-carousel-slide",{attrs:{"img-blank":""}},[r("b-row",{staticClass:"mx-0 mt-5 m-slider w-100  mb-3 mx-0"},[r("h4",{staticClass:"w-100 text-center mt-5"},[t._v("\n              Ready to get started?\n            ")]),t._v(" "),r("h6",{staticClass:"w-100 mt-4 text-center mx-0"},[t._v("\n              Find your tutor right now!\n            ")]),t._v(" "),r("div",{staticClass:"w-100 text-center mt-3 mx-0"},[r("b-button",{staticClass:"btn btn-crl  btn-primary submit px-4 my-4",attrs:{to:"/tutors"}},[t._v("\n                Find a Tutor\n              ")])],1)])],1)],1)],1)])])}),[],!1,null,"60fafbc8",null);e.default=component.exports}}]);
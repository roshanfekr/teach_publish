(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{449:function(e,t,n){var content=n(538);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(63).default)("22ad83cd",content,!0,{sourceMap:!1})},537:function(e,t,n){"use strict";n(449)},538:function(e,t,n){var r=n(62)(!1);r.push([e.i,"textarea[data-v-2937d050]{height:auto}.message[data-v-2937d050]{width:45%;border-radius:10px;padding:.5em;font-size:.8em}.message-out[data-v-2937d050]{background-color:#d2fba8;margin-left:50%}.message-in[data-v-2937d050]{background:#f5f5f5;color:#000;border:1px solid #b6bbc7}.e[data-v-2937d050]:hover{background-color:rgba(0,51,244,.05)}",""]),e.exports=r},602:function(e,t,n){"use strict";n.r(t);var r=n(10),l=(n(49),n(39),n(19),n(34),n(30)),o=n(37),c=n(74);l.c.add(o.y),l.c.add(c.f),l.c.add(o.r);var d={name:"requests",data:function(){return{firstRunflag:!1,cid:null,Rows:[],windowWidth:window.getComputedStyle(document.documentElement).getPropertyValue("--screen-mode"),selectedChat:null,messages:[],requests:[],msgTextBox:"",loadingChat:!0,loadingRequest:!1}},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loadingRequest=!0,t.next=3,e.getRequests();case 3:e.intervalX=setInterval(e.refreshTimer,5e3),e.userId=e.$auth.user.id,e.$nextTick((function(){window.addEventListener("resize",e.onResize)}));case 6:case"end":return t.stop()}}),t)})))()},methods:{gotoChat:function(){if(this.cid=this.$route.query.cid,this.cid>0&&null!==this.requests)for(var i=0;i<this.requests.length;i++)try{var e=this.requests[i];if(e.receiverId==this.cid&&e.senderId==this.cid)return void this.selectUser(e,i);if(e.receiverId==this.cid&&e.senderId==this.$auth.user.id)return void this.selectUser(e,i);if(e.senderId==this.cid&&e.receiverId==this.$auth.user.id)return void this.selectUser(e,i)}catch(e){}},GetTime:function(e,t){return(e<10?"0"+Math.floor(e/2):e/2).toString()+":"+(e%2==0?"00":"30")+" - "+(t<10?"0"+Math.floor(t/2):t/2).toString()+":"+(t%2==0?"00":"30")},DayOfWeek:function(e){return["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"][e]},deleteMessage:function(e,t){var n=this,r=e;e===this.$auth.user.id&&(r=t);var l={senderId:r};this.$bvModal.msgBoxConfirm(this.$t("requests.delete_all"),{title:"Confirm",size:"md",buttonSize:"sm",okVariant:"danger",okTitle:"YES",cancelTitle:"NO",footerClass:"p-2 border-top-0",hideHeaderClose:!1,headerClass:"p-2 border-bottom-0",centered:!0}).then((function(e){!0===e&&n.$axios.post("/request/delete-all-request",l).then((function(e){"removed"===e.data&&(n.selectedChat=null,n.messages=[])})).catch((function(e){console.log(e)}))}))},onResize:function(){this.windowWidth=window.getComputedStyle(document.documentElement).getPropertyValue("--screen-mode")},sendMessage:function(){var e=this;try{if(0===this.msgTextBox.length)return;var t={receiverId:this.selectedChat.receiverId===this.userId?this.selectedChat.senderId:this.selectedChat.receiverId,text:this.msgTextBox,createdAt:new Date,type:0,entityId:0};this.msgTextBox="",this.$axios.post("/request/create",t).then((function(t){!0===t.data.ok&&(e.messages.push(t.data.data),setTimeout((function(){var e=document.getElementById("chatBox");e.scrollTop=e.scrollHeight}),20))})).catch((function(e){console.log(e)}))}catch(e){}},selectUser:function(e,t){this.deselect(t),this.loadingChat=!0,this.selectedChat=e,this.getChat(e,!0)},deselect:function(e){for(var i=0;i<this.requests.length;i++)this.Rows[i]=!1;e>-1&&(this.Rows[e]=!0)},getRequests:function(){var e=this;try{this.$axios.post("request/getRequests",null).then((function(t){e.requests=t.data.data;for(var i=0;i<e.requests.length;i++)e.Rows[i]=!1;e.loadingRequest=!1,!1===e.firstRunflag&&(e.firstRunflag=!0,e.gotoChat())})).catch((function(e){}))}catch(e){console.log(e)}},getChat:function(e,t){var n=this,r=this.$auth.user.id,l={sUid:r=r===e.receiverId?e.senderId:e.receiverId};this.$axios.post("request/getUserRequests",l).then((function(r){n.loadingChat=!1,n.messages=r.data.data,t&&setTimeout((function(){var e=document.getElementById("chatBox");e.scrollTop=e.scrollHeight}),20),n.$axios.post("/request/setview",l).then((function(t){e.viewed=1})).catch((function(e){}))})).catch((function(e){n.loadingChat=!1}))},refreshTimer:function(){this.getRequests(),null!==this.selectedChat&&this.getChat(this.selectedChat,!1)}},beforeDestroy:function(){clearInterval(this.intervalX),window.removeEventListener("resize",this.onResize)}},h=(n(537),n(73)),component=Object(h.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",{staticClass:"h-100",attrs:{fluid:""}},[n("div",{staticClass:"w-100 h-100 d-flex"},[n("b-row",{directives:[{name:"show",rawName:"v-show",value:"xl"===e.windowWidth||"lg"===e.windowWidth||null===e.selectedChat,expression:" (windowWidth === 'xl' || windowWidth === 'lg') ?true :(selectedChat === null)"}],staticClass:"m-0",class:"xl"===e.windowWidth||"lg"===e.windowWidth?"w-70":"w-100"},[0===e.requests.length?n("p",{staticClass:"text-center w-100 mt-3",staticStyle:{color:"#a8a7a7"}},[e._v(e._s(e.$t("no_message")))]):e._e(),e._v(" "),n("b-overlay",{staticClass:"w-100",attrs:{show:e.loadingRequest,variant:"transparent",opacity:.8,blur:"3px",rounded:"sm"}},[n("div",{staticClass:"mt-2",style:"xl"===e.windowWidth||"lg"===e.windowWidth?" min-width: 400px;":"min-width: 100%;"},e._l(e.requests,(function(t,r){return n("div",{key:r,staticClass:"mt-1 w-100 ",on:{click:function(n){return e.selectUser(t,r)}}},[n("div",{staticClass:"w-100 p-2 mt-0 shadow-sm d-flex e rounded-lg",staticStyle:{cursor:"pointer"},style:!0===e.Rows[r]?"background-color: rgba(144,169,244,0.32)":""},[n("b-avatar",{attrs:{size:"3rem",src:null!=t.image_ru?"/"+t.image_ru:"",alt:"Cropped Image"}}),e._v(" "),n("div",{staticClass:"pl-3 w-100"},[n("span",{staticClass:"font-weight-bold"},[e._v(" "+e._s(t.viewName+" "+(null!==t.viewLname?t.viewLname:"")))]),e._v(" "),n("span",{staticClass:"float-right small"},[e._v("\n                  "+e._s(e._f("moment")(t.createdAt,"ddd, MMM DD, YYYY, hh:mm:ss a"))+"\n                "),n("b-link",{staticClass:"mr-4",staticStyle:{color:"#bfbfbf"},attrs:{size:"sm"},on:{click:function(n){return e.deleteMessage(t.senderId,t.receiverId)}}},[n("font-awesome-icon",{staticClass:"shop-icon",attrs:{icon:["fas","trash"]}})],1)],1),e._v(" "),n("div",{staticClass:"w-100 three-dot-one-line"},[e._v("\n                  "+e._s(t.text+" ")+"\n                  "),t.unread>0?n("b-badge",{attrs:{variant:"success"}},[e._v(e._s(t.unread)+"\n                  ")]):e._e()],1)])],1)])})),0)])],1),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:"xl"===e.windowWidth||"lg"===e.windowWidth||null!==e.selectedChat,expression:"(windowWidth === 'xl' || windowWidth === 'lg' )?true :(selectedChat!==null)"}],staticClass:"w-100 shadow h-100 mt-2 ml-3 p-3"},[null===e.selectedChat?n("div",{staticClass:"text-center",staticStyle:{color:"#a8a7a7"}},[e._v("\n        "+e._s(e.$t("Please_select_one_message"))+"\n      ")]):n("div",[n("b-overlay",{attrs:{show:e.loadingChat,variant:"transparent",opacity:.8,blur:"3px",rounded:"sm"}},[n("div",{staticClass:"d-flex"},[n("b-avatar",{attrs:{size:"3rem",src:null!=e.selectedChat.image_ru?"/"+e.selectedChat.image_ru:"",alt:"Cropped Image"}}),e._v(" "),n("div",{staticClass:"pl-3 w-100 mt-3"},[n("span",{staticClass:"font-weight-bold"},[e._v(" "+e._s(e.selectedChat.viewName+" "+e.selectedChat.viewLname))])]),e._v(" "),n("b-link",{directives:[{name:"show",rawName:"v-show",value:"xl"!==e.windowWidth&&"lg"!==e.windowWidth,expression:"windowWidth !== 'xl' && windowWidth !== 'lg'"}],staticClass:"float-right",on:{click:function(t){e.selectedChat=null}}},[n("svg",{staticClass:"bi-arrow90deg-left mx-auto b-icon bi",attrs:{"data-v-41be6633":"",viewBox:"0 0 16 16",width:"1em",height:"1em",focusable:"false",role:"img","aria-label":"arrow90deg left",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"}},[n("g",{attrs:{"data-v-41be6633":""}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z"}})])])])],1),e._v(" "),n("div",{staticClass:"h-100 mt-2",staticStyle:{"max-height":"400px",overflow:"auto"},attrs:{id:"chatBox"}},e._l(e.messages,(function(t){return n("div",{staticClass:"message mb-2",class:t.receiverId===e.userId?"message-in":"message-out"},[0===t.type?n("span",{staticStyle:{"white-space":"pre-wrap"}},[e._v(e._s(t.text))]):e._e(),e._v(" "),1===t.type?n("span",{staticStyle:{"white-space":"pre-wrap"}},[n("div",{staticClass:"p-2 mx-1",staticStyle:{"background-color":"white","border-radius":"10px"}},[n("span",{staticClass:"font-weight-bold",staticStyle:{color:"#dc3545"}},[e._v(e._s(e.$t("mylesson.request.from.user"))+" ")]),e._v(" "),n("div",{staticClass:"mt-2",staticStyle:{"white-space":"normal"}},[n("div",[n("span",{staticStyle:{color:"black"}},[e._v("Lesson: ")]),e._v(e._s(null!=t.MyLesson?t.MyLesson.Lesson.subject:""))]),e._v(" "),n("div",[n("span",{staticStyle:{color:"black"}},[e._v("Week Day :")]),e._v(e._s(null!=t.MyLesson?e.DayOfWeek(t.MyLesson.dayOfWeek):"")+" ")]),e._v(" "),n("div",[n("span",{staticStyle:{color:"black"}},[e._v("Time :"+e._s(null!=t.MyLesson?e.GetTime(t.MyLesson.timeStart,t.MyLesson.timeEnd):""))])]),e._v(" "),n("div",{staticClass:"text-center"},[n("b-button",{staticClass:"btn btn-info small mt-2 ",attrs:{size:"sm",to:t.senderId===e.userId?"/user-panel/taken-lessons":"/user-panel/my-lessons"}},[e._v(e._s(e.$t("mylesson.request.from.user.link"))+" ")])],1)])]),e._v(" "),n("div",{staticStyle:{"white-space":"normal"}},[n("hr",{staticClass:"my-0",staticStyle:{width:"100%","text-align":"left","margin-left":"0"}}),e._v(" "),n("span",{staticStyle:{"white-space":"pre-wrap"}},[e._v(e._s(t.text))])])]):e._e(),e._v(" "),2===t.type?n("span",{staticStyle:{"white-space":"pre-wrap"}},[n("div",{staticClass:"p-2 mx-1",staticStyle:{"background-color":"#e3fde3","border-radius":"10px"}},[n("span",{staticClass:"font-weight-bold",staticStyle:{color:"#046b0f"}},[e._v(e._s(e.$t("mylesson.request.verify.user"))+" ")]),e._v(" "),n("div",{staticClass:"mt-2",staticStyle:{"white-space":"normal"}},[n("div",[n("span",{staticStyle:{color:"black"}},[e._v("Lesson: ")]),e._v(e._s(null!=t.MyLesson?t.MyLesson.Lesson.subject:""))]),e._v(" "),n("div",[n("span",{staticStyle:{color:"black"}},[e._v("Week Day :")]),e._v(e._s(null!=t.MyLesson?e.DayOfWeek(t.MyLesson.dayOfWeek):"")+" ")]),e._v(" "),n("div",[n("span",{staticStyle:{color:"black"}},[e._v("Time :"+e._s(null!=t.MyLesson?e.GetTime(t.MyLesson.timeStart,t.MyLesson.timeEnd):""))])]),e._v(" "),n("div",{staticClass:"text-center"},[n("b-button",{staticClass:"btn btn-info small mt-2 ",attrs:{size:"sm",to:t.senderId!==e.userId?"/user-panel/taken-lessons":"/user-panel/my-lessons"}},[e._v(e._s(e.$t("mylesson.request.from.user.link"))+" ")])],1)])]),e._v(" "),n("div",{staticStyle:{"white-space":"normal"}},[n("hr",{staticClass:"my-0",staticStyle:{width:"100%","text-align":"left","margin-left":"0"}}),e._v(" "),n("span",{staticStyle:{"white-space":"pre-wrap"}},[e._v(e._s(t.text))])])]):e._e(),e._v(" "),3===t.type?n("span",{staticStyle:{"white-space":"pre-wrap"}},[n("div",{staticClass:"p-2 mx-1",staticStyle:{"background-color":"#ffe7e8","border-radius":"10px"}},[n("span",{staticClass:"font-weight-bold",staticStyle:{color:"#f81f1f"}},[e._v(e._s(e.$t("mylesson.request.reject.user"))+" ")]),e._v(" "),n("div",{staticClass:"mt-2",staticStyle:{"white-space":"normal"}},[n("div",[n("span",{staticStyle:{color:"black"}},[e._v("Lesson: ")]),e._v(e._s(null!=t.MyLesson?t.MyLesson.Lesson.subject:""))]),e._v(" "),n("div",[n("span",{staticStyle:{color:"black"}},[e._v("Week Day :")]),e._v(e._s(null!=t.MyLesson?e.DayOfWeek(t.MyLesson.dayOfWeek):"")+" ")]),e._v(" "),n("div",[n("span",{staticStyle:{color:"black"}},[e._v("Time :"+e._s(null!=t.MyLesson?e.GetTime(t.MyLesson.timeStart,t.MyLesson.timeEnd):""))])]),e._v(" "),n("div",{staticClass:"text-center"},[n("b-button",{staticClass:"btn btn-info small mt-2 ",attrs:{size:"sm",to:t.senderId!==e.userId?"/user-panel/taken-lessons":"/user-panel/my-lessons"}},[e._v(e._s(e.$t("mylesson.request.from.user.link"))+" ")])],1)])]),e._v(" "),n("div",{staticStyle:{"white-space":"normal"}},[n("hr",{staticClass:"my-0",staticStyle:{width:"100%","text-align":"left","margin-left":"0"}}),e._v(" "),n("span",{staticStyle:{"white-space":"pre-wrap"}},[e._v(e._s(t.text))])])]):e._e(),e._v(" "),n("div",{staticClass:"text-right small mr-2 mb-n1"},[n("span",[e._v(" "+e._s(e._f("moment")(null!=t.createdAt?t.createdAt:"","ddd, MMM DD, YYYY, hh:mm:ss a"))+" ")]),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.receiverId!==e.userId,expression:"message.receiverId !== userId"}]},[!1===t.viewed||0===t.viewed||null===t.viewed?n("svg",{staticClass:"bi bi-check",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[n("path",{attrs:{d:"M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"}})]):e._e(),e._v(" "),!0===t.viewed?n("svg",{staticClass:"bi bi-check-all",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[n("path",{attrs:{d:"M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z"}})]):e._e()])])])})),0)]),e._v(" "),n("div",{staticClass:"d-flex mt-2"},[n("b-input-group",[n("b-form-textarea",{staticClass:"overflow-hidden",attrs:{"no-resize":"",rows:"2"},on:{keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")||t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:(t.preventDefault(),e.sendMessage.apply(null,arguments))}},model:{value:e.msgTextBox,callback:function(t){e.msgTextBox=t},expression:"msgTextBox"}}),e._v(" "),n("b-input-group-append",[n("b-button",{staticClass:"btn btn-primary px-4",on:{click:e.sendMessage}},[n("font-awesome-icon",{staticStyle:{"margin-right":"5px"},attrs:{icon:["fas","paper-plane"]}})],1)],1)],1)],1)],1)])],1)])}),[],!1,null,"2937d050",null);t.default=component.exports}}]);
exports.ids = [54];
exports.modules = {

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(212);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("8dd20dc8", content, true, context)
};

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_requests_vue_vue_type_style_index_0_id_56d381a9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(140);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_requests_vue_vue_type_style_index_0_id_56d381a9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_requests_vue_vue_type_style_index_0_id_56d381a9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_requests_vue_vue_type_style_index_0_id_56d381a9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_requests_vue_vue_type_style_index_0_id_56d381a9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "textarea[data-v-56d381a9]{height:auto}.message[data-v-56d381a9]{width:45%;border-radius:10px;padding:.5em;font-size:.8em}.message-out[data-v-56d381a9]{background-color:#d2fba8;margin-left:50%}.message-in[data-v-56d381a9]{background:#f5f5f5;color:#000;border:1px solid #b6bbc7}.e[data-v-56d381a9]:hover{background-color:rgba(0,51,244,.05)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/user-panel/requests.vue?vue&type=template&id=56d381a9&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-container',{staticClass:"h-100",attrs:{"fluid":""}},[_c('div',{staticClass:"w-100 my-3"},[_c('b-checkbox',{attrs:{"switch":""},on:{"change":_vm.toggleSendEmailOnNewMessage},model:{value:(_vm.sendEmailWhenReceiveMessage),callback:function ($$v) {_vm.sendEmailWhenReceiveMessage=$$v},expression:"sendEmailWhenReceiveMessage"}},[_vm._v(_vm._s(_vm.$t("email_on_new_message")))])],1),_vm._v(" "),_c('div',{staticClass:"w-100 h-100 d-flex"},[_c('b-row',{directives:[{name:"show",rawName:"v-show",value:( (_vm.windowWidth === 'xl' || _vm.windowWidth === 'lg') ?true :(_vm.selectedChat === null)),expression:" (windowWidth === 'xl' || windowWidth === 'lg') ?true :(selectedChat === null)"}],staticClass:"m-0",class:(_vm.windowWidth === 'xl' || _vm.windowWidth === 'lg') ? 'w-70' : 'w-100'},[(_vm.requests.length === 0)?_c('p',{staticClass:"text-center w-100 mt-3",staticStyle:{"color":"#a8a7a7"}},[_vm._v(_vm._s(_vm.$t("no_message")))]):_vm._e(),_vm._v(" "),_c('b-overlay',{staticClass:"w-100",attrs:{"show":_vm.loadingRequest,"variant":"transparent","opacity":0.8,"blur":"3px","rounded":"sm"}},[_c('div',{staticClass:"mt-2",style:((_vm.windowWidth === 'xl' || _vm.windowWidth === 'lg')?' min-width: 400px;':'min-width: 100%;')},_vm._l((_vm.requests),function(item,index){return _c('div',{key:index,staticClass:"mt-1 w-100 ",on:{"click":function($event){return _vm.selectUser(item,index)}}},[_c('div',{staticClass:"w-100 p-2 mt-0 shadow-sm d-flex e rounded-lg",staticStyle:{"cursor":"pointer"},style:(_vm.Rows[index] === true ? 'background-color: rgba(144,169,244,0.32)': '')},[_c('b-avatar',{attrs:{"size":"3rem","src":item.image_ru != null ? '/'+ item.image_ru : '',"alt":"Cropped Image"}}),_vm._v(" "),_c('div',{staticClass:"pl-3 w-100"},[_c('span',{staticClass:"font-weight-bold"},[_vm._v(" "+_vm._s(item.viewName + " " + (item.viewLname !== null ? item.viewLname : "")))]),_vm._v(" "),_c('span',{staticClass:"float-right small"},[_vm._v("\n                  "+_vm._s(_vm._f("moment")(item.createdAt,'ddd, MMM DD, YYYY, hh:mm:ss a'))+"\n                "),_c('b-link',{staticClass:"mr-4",staticStyle:{"color":"#bfbfbf"},attrs:{"size":"sm"},on:{"click":function($event){return _vm.deleteMessage(item.senderId, item.receiverId)}}},[_c('font-awesome-icon',{staticClass:"shop-icon",attrs:{"icon":['fas', 'trash']}})],1)],1),_vm._v(" "),_c('div',{staticClass:"w-100 three-dot-one-line"},[_vm._v("\n                  "+_vm._s(item.text + " ")+"\n                  "),(item.unread > 0)?_c('b-badge',{attrs:{"variant":"success"}},[_vm._v(_vm._s(item.unread)+"\n                  ")]):_vm._e()],1)])],1)])}),0)])],1),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:((_vm.windowWidth === 'xl' || _vm.windowWidth === 'lg' )?true :(_vm.selectedChat!==null)),expression:"(windowWidth === 'xl' || windowWidth === 'lg' )?true :(selectedChat!==null)"}],staticClass:"w-100 shadow h-100 mt-2 ml-3 p-3"},[(_vm.selectedChat === null)?_c('div',{staticClass:"text-center",staticStyle:{"color":"#a8a7a7"}},[_vm._v("\n        "+_vm._s(_vm.$t("Please_select_one_message"))+"\n      ")]):_c('div',[_c('b-overlay',{attrs:{"show":_vm.loadingChat,"variant":"transparent","opacity":0.8,"blur":"3px","rounded":"sm"}},[_c('div',{staticClass:"d-flex"},[_c('b-avatar',{attrs:{"size":"3rem","src":_vm.selectedChat.image_ru != null ? '/'+ _vm.selectedChat.image_ru : '',"alt":"Cropped Image"}}),_vm._v(" "),_c('div',{staticClass:"pl-3 w-100 mt-3"},[_c('span',{staticClass:"font-weight-bold"},[_vm._v(" "+_vm._s(_vm.selectedChat.viewName + " " + _vm.selectedChat.viewLname))])]),_vm._v(" "),_c('b-link',{directives:[{name:"show",rawName:"v-show",value:(_vm.windowWidth !== 'xl' && _vm.windowWidth !== 'lg'),expression:"windowWidth !== 'xl' && windowWidth !== 'lg'"}],staticClass:"float-right",on:{"click":function($event){_vm.selectedChat = null}}},[_c('svg',{staticClass:"bi-arrow90deg-left mx-auto b-icon bi",attrs:{"data-v-41be6633":"","viewBox":"0 0 16 16","width":"1em","height":"1em","focusable":"false","role":"img","aria-label":"arrow90deg left","xmlns":"http://www.w3.org/2000/svg","fill":"currentColor"}},[_c('g',{attrs:{"data-v-41be6633":""}},[_c('path',{attrs:{"fill-rule":"evenodd","d":"M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z"}})])])])],1),_vm._v(" "),_c('div',{staticClass:"h-100 mt-2",staticStyle:{"max-height":"400px","overflow":"auto"},attrs:{"id":"chatBox"}},_vm._l((_vm.messages),function(message){return _c('div',{staticClass:"message mb-2",class:message.receiverId === _vm.userId ? 'message-in' : 'message-out'},[(message.type === 0)?_c('span',{staticStyle:{"white-space":"pre-wrap"}},[_vm._v(_vm._s(message.text))]):_vm._e(),_vm._v(" "),(message.type === 1)?_c('span',{staticStyle:{"white-space":"pre-wrap"}},[_c('div',{staticClass:"p-2 mx-1",staticStyle:{"background-color":"white","border-radius":"10px"}},[_c('span',{staticClass:"font-weight-bold",staticStyle:{"color":"#dc3545"}},[_vm._v(_vm._s(_vm.$t("mylesson.request.from.user"))+" ")]),_vm._v(" "),_c('div',{staticClass:"mt-2",staticStyle:{"white-space":"normal"}},[_c('div',[_c('span',{staticStyle:{"color":"black"}},[_vm._v("Lesson: ")]),_vm._v(_vm._s(message.MyLesson != null ?message.MyLesson.Lesson.subject : ""))]),_vm._v(" "),_c('div',[_c('span',{staticStyle:{"color":"black"}},[_vm._v("Week Day :")]),_vm._v(_vm._s(message.MyLesson!= null ? _vm.DayOfWeek(message.MyLesson.dayOfWeek) : "")+" ")]),_vm._v(" "),_c('div',[_c('span',{staticStyle:{"color":"black"}},[_vm._v("Time :"+_vm._s(message.MyLesson!= null ? _vm.GetTime(message.MyLesson.timeStart , message.MyLesson.timeEnd) : ""))])]),_vm._v(" "),_c('div',{staticClass:"text-center"},[_c('b-button',{staticClass:"btn btn-info small mt-2 ",attrs:{"size":"sm","to":message.senderId === _vm.userId ? '/user-panel/taken-lessons' : '/user-panel/my-lessons'}},[_vm._v(_vm._s(_vm.$t("mylesson.request.from.user.link"))+" ")])],1)])]),_vm._v(" "),_c('div',{staticStyle:{"white-space":"normal"}},[_c('hr',{staticClass:"my-0",staticStyle:{"width":"100%","text-align":"left","margin-left":"0"}}),_vm._v(" "),_c('span',{staticStyle:{"white-space":"pre-wrap"}},[_vm._v(_vm._s(message.text))])])]):_vm._e(),_vm._v(" "),(message.type === 2)?_c('span',{staticStyle:{"white-space":"pre-wrap"}},[_c('div',{staticClass:"p-2 mx-1",staticStyle:{"background-color":"#e3fde3","border-radius":"10px"}},[_c('span',{staticClass:"font-weight-bold",staticStyle:{"color":"#046b0f"}},[_vm._v(_vm._s(_vm.$t("mylesson.request.verify.user"))+" ")]),_vm._v(" "),_c('div',{staticClass:"mt-2",staticStyle:{"white-space":"normal"}},[_c('div',[_c('span',{staticStyle:{"color":"black"}},[_vm._v("Lesson: ")]),_vm._v(_vm._s(message.MyLesson != null ?message.MyLesson.Lesson.subject : ""))]),_vm._v(" "),_c('div',[_c('span',{staticStyle:{"color":"black"}},[_vm._v("Week Day :")]),_vm._v(_vm._s(message.MyLesson!= null ? _vm.DayOfWeek(message.MyLesson.dayOfWeek) : "")+" ")]),_vm._v(" "),_c('div',[_c('span',{staticStyle:{"color":"black"}},[_vm._v("Time :"+_vm._s(message.MyLesson!= null ? _vm.GetTime(message.MyLesson.timeStart , message.MyLesson.timeEnd) : ""))])]),_vm._v(" "),_c('div',{staticClass:"text-center"},[_c('b-button',{staticClass:"btn btn-info small mt-2 ",attrs:{"size":"sm","to":message.senderId !== _vm.userId ? '/user-panel/taken-lessons' : '/user-panel/my-lessons'}},[_vm._v(_vm._s(_vm.$t("mylesson.request.from.user.link"))+" ")])],1)])]),_vm._v(" "),_c('div',{staticStyle:{"white-space":"normal"}},[_c('hr',{staticClass:"my-0",staticStyle:{"width":"100%","text-align":"left","margin-left":"0"}}),_vm._v(" "),_c('span',{staticStyle:{"white-space":"pre-wrap"}},[_vm._v(_vm._s(message.text))])])]):_vm._e(),_vm._v(" "),(message.type === 3)?_c('span',{staticStyle:{"white-space":"pre-wrap"}},[_c('div',{staticClass:"p-2 mx-1",staticStyle:{"background-color":"#ffe7e8","border-radius":"10px"}},[_c('span',{staticClass:"font-weight-bold",staticStyle:{"color":"#f81f1f"}},[_vm._v(_vm._s(_vm.$t("mylesson.request.reject.user"))+" ")]),_vm._v(" "),_c('div',{staticClass:"mt-2",staticStyle:{"white-space":"normal"}},[_c('div',[_c('span',{staticStyle:{"color":"black"}},[_vm._v("Lesson: ")]),_vm._v(_vm._s(message.MyLesson != null ?message.MyLesson.Lesson.subject : ""))]),_vm._v(" "),_c('div',[_c('span',{staticStyle:{"color":"black"}},[_vm._v("Week Day :")]),_vm._v(_vm._s(message.MyLesson!= null ? _vm.DayOfWeek(message.MyLesson.dayOfWeek) : "")+" ")]),_vm._v(" "),_c('div',[_c('span',{staticStyle:{"color":"black"}},[_vm._v("Time :"+_vm._s(message.MyLesson!= null ? _vm.GetTime(message.MyLesson.timeStart , message.MyLesson.timeEnd) : ""))])]),_vm._v(" "),_c('div',{staticClass:"text-center"},[_c('b-button',{staticClass:"btn btn-info small mt-2 ",attrs:{"size":"sm","to":message.senderId !== _vm.userId ? '/user-panel/taken-lessons' : '/user-panel/my-lessons'}},[_vm._v(_vm._s(_vm.$t("mylesson.request.from.user.link"))+" ")])],1)])]),_vm._v(" "),_c('div',{staticStyle:{"white-space":"normal"}},[_c('hr',{staticClass:"my-0",staticStyle:{"width":"100%","text-align":"left","margin-left":"0"}}),_vm._v(" "),_c('span',{staticStyle:{"white-space":"pre-wrap"}},[_vm._v(_vm._s(message.text))])])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"text-right small mr-2 mb-n1"},[_c('span',[_vm._v(" "+_vm._s(_vm._f("moment")((message.createdAt != null ? message.createdAt : ""),'ddd, MMM DD, YYYY, hh:mm:ss a'))+" ")]),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(message.receiverId !== _vm.userId),expression:"message.receiverId !== userId"}]},[(message.viewed === false ||message.viewed === 0 || message.viewed === null)?_c('svg',{staticClass:"bi bi-check",attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16"}},[_c('path',{attrs:{"d":"M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"}})]):_vm._e(),_vm._v(" "),(message.viewed === true)?_c('svg',{staticClass:"bi bi-check-all",attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16"}},[_c('path',{attrs:{"d":"M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z"}})]):_vm._e()])])])}),0)]),_vm._v(" "),_c('div',{staticClass:"d-flex mt-2"},[_c('b-input-group',[_c('b-form-textarea',{staticClass:"overflow-hidden",attrs:{"no-resize":"","rows":"2"},on:{"keypress":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }if($event.ctrlKey||$event.shiftKey||$event.altKey||$event.metaKey){ return null; }$event.preventDefault();return _vm.sendMessage.apply(null, arguments)}},model:{value:(_vm.msgTextBox),callback:function ($$v) {_vm.msgTextBox=$$v},expression:"msgTextBox"}}),_vm._v(" "),_c('b-input-group-append',[_c('b-button',{staticClass:"btn btn-primary px-4",on:{"click":_vm.sendMessage}},[_c('font-awesome-icon',{staticStyle:{"margin-right":"5px"},attrs:{"icon":['fas', 'paper-plane']}})],1)],1)],1)],1)],1)])],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/user-panel/requests.vue?vue&type=template&id=56d381a9&scoped=true&

// EXTERNAL MODULE: external "@fortawesome/fontawesome-svg-core"
var fontawesome_svg_core_ = __webpack_require__(4);

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(1);

// EXTERNAL MODULE: external "@fortawesome/free-regular-svg-icons"
var free_regular_svg_icons_ = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/user-panel/requests.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




fontawesome_svg_core_["library"].add(free_solid_svg_icons_["faTrash"]);
fontawesome_svg_core_["library"].add(free_regular_svg_icons_["faEdit"]);
fontawesome_svg_core_["library"].add(free_solid_svg_icons_["faPaperPlane"]);
/* harmony default export */ var requestsvue_type_script_lang_js_ = ({
  name: 'requests',

  data() {
    return {
      sendEmailWhenReceiveMessage: true,
      firstRunflag: false,
      cid: null,
      Rows: [],
      windowWidth:  false ? undefined : 'sm',
      selectedChat: null,
      messages: [],
      requests: [],
      msgTextBox: "",
      loadingChat: true,
      loadingRequest: false
    };
  },

  async mounted() {
    this.loadingRequest = true;
    await this.getRequests();
    this.intervalX = setInterval(this.refreshTimer, 5 * 1000);
    this.userId = this.$auth.user.id;
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    });
    this.getCurrentUser();
  },

  methods: {
    toggleSendEmailOnNewMessage(checked) {
      try {
        this.$axios.post("/users/changeSendEmailOnNewMessage", {
          status: checked
        }).then(res => {}).catch(err => {});
      } catch (e) {}
    },

    getCurrentUser() {
      try {
        this.$axios.post("/users/getCurrentUser").then(res => {
          this.sendEmailWhenReceiveMessage = res.data.receiveEmailOnMessage;
        }).catch(err => {});
      } catch (e) {}
    },

    gotoChat() {
      this.cid = this.$route.query.cid;

      if (this.cid > 0 && this.requests !== null) {
        for (let i = 0; i < this.requests.length; i++) {
          try {
            let rItem = this.requests[i];

            if (rItem.receiverId == this.cid && rItem.senderId == this.cid) {
              this.selectUser(rItem, i);
              return;
            } else if (rItem.receiverId == this.cid && rItem.senderId == this.$auth.user.id) {
              this.selectUser(rItem, i);
              return;
            } else if (rItem.senderId == this.cid && rItem.receiverId == this.$auth.user.id) {
              this.selectUser(rItem, i);
              return;
            }
          } catch (e) {}
        }
      }
    },

    GetTime(clockIndex, timeEnd) {
      let t1 = (clockIndex < 10 ? '0' + Math.floor(clockIndex / 2) : clockIndex / 2).toString();
      let t2 = clockIndex % 2 === 0 ? '00' : '30';
      let t1_1 = (timeEnd < 10 ? '0' + Math.floor(timeEnd / 2) : timeEnd / 2).toString();
      let t2_1 = timeEnd % 2 === 0 ? '00' : '30';
      return t1 + ":" + t2 + " - " + t1_1 + ":" + t2_1;
    },

    DayOfWeek(dw) {
      let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
      return week[dw];
    },

    deleteMessage(senderId, receiverId) {
      let userId = senderId;
      if (senderId === this.$auth.user.id) userId = receiverId;
      let reqData = {
        senderId: userId
      };
      this.$bvModal.msgBoxConfirm(this.$t('requests.delete_all'), {
        title: 'Confirm',
        size: 'md',
        buttonSize: 'sm',
        okVariant: 'danger',
        okTitle: 'YES',
        cancelTitle: 'NO',
        footerClass: 'p-2 border-top-0',
        hideHeaderClose: false,
        headerClass: 'p-2 border-bottom-0',
        centered: true
      }).then(value => {
        if (value === true) {
          this.$axios.post('/request/delete-all-request', reqData).then(res => {
            if (res.data === "removed") {
              // clear all
              this.selectedChat = null;
              this.messages = [];
            }
          }).catch(err => {
            console.log(err);
          });
        }
      });
    },

    onResize() {
      if (false) {}
    },

    sendMessage() {
      try {
        if (this.msgTextBox.length === 0) return;
        let reqData = {
          receiverId: this.selectedChat.receiverId === this.userId ? this.selectedChat.senderId : this.selectedChat.receiverId,
          text: this.msgTextBox,
          createdAt: new Date(),
          type: 0,
          // simple messate.now()age
          entityId: 0
        };
        this.msgTextBox = ""; //this.messages.push(reqData)

        this.$axios.post(`/request/create`, reqData).then(res => {
          if (res.data.ok === true) {
            // this.messages = res.data.data
            this.messages.push(res.data.data);
            setTimeout(() => {
              let chatBox = document.getElementById('chatBox');
              chatBox.scrollTop = chatBox.scrollHeight;
            }, 20);
          }
        }).catch(err => {
          console.log(err);
        });
      } catch (e) {}
    },

    selectUser(item, index) {
      this.deselect(index);
      this.loadingChat = true;
      this.selectedChat = item;
      this.getChat(item, true);
    },

    deselect(index) {
      for (let i = 0; i < this.requests.length; i++) {
        this.Rows[i] = false;
      }

      if (index > -1) this.Rows[index] = true;
    },

    getRequests() {
      try {
        this.$axios.post(`request/getRequests`, null).then(res => {
          this.requests = res.data.data;

          for (let i = 0; i < this.requests.length; i++) {
            this.Rows[i] = false;
          }

          this.loadingRequest = false;

          if (this.firstRunflag === false) {
            this.firstRunflag = true;
            this.gotoChat();
          }
        }).catch(err => {});
      } catch (e) {
        console.log(e);
      }
    },

    getChat(row, canScroll) {
      let sUid = this.$auth.user.id;
      if (sUid === row.receiverId) sUid = row.senderId;else sUid = row.receiverId;
      let reqData = {
        sUid: sUid
      };
      this.$axios.post(`request/getUserRequests`, reqData).then(res => {
        this.loadingChat = false;
        this.messages = res.data.data;

        if (canScroll) {
          setTimeout(() => {
            let chatBox = document.getElementById('chatBox');
            chatBox.scrollTop = chatBox.scrollHeight;
          }, 20);
        }

        this.$axios.post(`/request/setview`, reqData).then(res => {
          row.viewed = 1;
        }).catch(error => {});
      }).catch(err => {
        this.loadingChat = false;
      });
    },

    refreshTimer() {
      this.getRequests();
      if (this.selectedChat !== null) this.getChat(this.selectedChat, false);
    }

  },

  beforeDestroy() {
    clearInterval(this.intervalX);
    window.removeEventListener('resize', this.onResize);
  }

});
// CONCATENATED MODULE: ./pages/user-panel/requests.vue?vue&type=script&lang=js&
 /* harmony default export */ var user_panel_requestsvue_type_script_lang_js_ = (requestsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./pages/user-panel/requests.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(211)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  user_panel_requestsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "56d381a9",
  "60d1ea0c"
  
)

/* harmony default export */ var requests = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=requests.js.map
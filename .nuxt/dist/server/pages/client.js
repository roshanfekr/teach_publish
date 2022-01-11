exports.ids = [20];
exports.modules = {

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(153);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("6583b0ea", content, true, context)
};

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_client_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(116);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_client_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_client_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_client_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_client_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*{box-sizing:border-box}html{font-weight:300;-webkit-font-smoothing:antialiased}html,input{font-family:\"HelveticaNeue-Light\",\"Helvetica Neue Light\",\"Helvetica Neue\",Helvetica,Arial,\"Lucida Grande\",sans-serif}body,html{height:100%;margin:0;padding:0}ul{list-style:none;word-wrap:break-word}.pages{margin:0;padding:0}.page,.pages{height:100%;width:100%}.page{position:absolute}.messages{font-size:150%}.inputMessage{font-size:100%}.log{color:grey;font-size:70%;margin:5px;text-align:center}.chatArea{height:100%;padding-bottom:60px}.messages{height:100%;margin:0;overflow-y:scroll;padding:10px 20px}.inputMessage{border:10px solid #3b8070;bottom:0;height:60px;left:0;outline:none;padding-left:10px;position:absolute;right:0;width:100%}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/client.vue?vue&type=template&id=b489ca34&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<ul class=\"pages\"><li class=\"chat page\"><div class=\"chatArea\"><ul class=\"messages\">"+(_vm._ssrList((_vm.messages),function(msg,index){return ("<li class=\"message\"><i"+(_vm._ssrAttr("title",msg.date))+">"+_vm._ssrEscape("\n              "+_vm._s(msg.date.split('T')[1].slice(0, -2))+"\n            ")+"</i>"+_vm._ssrEscape(": "+_vm._s(msg.text)+"\n          ")+"</li>")}))+"</ul></div> <input type=\"text\" placeholder=\"Type here...\""+(_vm._ssrAttr("value",(_vm.message)))+" class=\"inputMessage\"></li></ul>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/client.vue?vue&type=template&id=b489ca34&

// EXTERNAL MODULE: ./node_modules/socket.io-client/build/cjs/index.js
var cjs = __webpack_require__(27);
var cjs_default = /*#__PURE__*/__webpack_require__.n(cjs);

// CONCATENATED MODULE: ./plugins/socket.io.js

const socket = cjs_default()("http://localhost:3000");
/* harmony default export */ var socket_io = (socket);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/client.vue?vue&type=script&lang=js&
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

/* harmony default export */ var clientvue_type_script_lang_js_ = ({
  asyncData() {
    return new Promise(resolve => socket_io.emit('last-messages', messages => resolve({
      messages
    })));
  },

  data() {
    return {
      message: ''
    };
  },

  head: {
    title: 'Nuxt.js with Socket.io'
  },
  watch: {
    messages: 'scrollToBottom'
  },

  beforeMount() {
    socket_io.on('new-message', message => {
      this.messages.push(message);
    });
  },

  mounted() {
    this.scrollToBottom();
  },

  methods: {
    sendMessage() {
      if (!this.message.trim()) {
        return;
      }

      const message = {
        date: new Date().toJSON(),
        text: this.message.trim()
      };
      this.messages.push(message);
      this.message = '';
      socket_io.emit('send-message', message);
    },

    scrollToBottom() {
      this.$nextTick(() => {
        this.$refs.messages.scrollTop = this.$refs.messages.scrollHeight;
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/client.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_clientvue_type_script_lang_js_ = (clientvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./pages/client.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(152)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_clientvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "45535317"
  
)

/* harmony default export */ var client = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=client.js.map
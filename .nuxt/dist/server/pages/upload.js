exports.ids = [42];
exports.modules = {

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/upload.vue?vue&type=template&id=6a1c5c21&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-form',{staticClass:"m-right",attrs:{"enctype":"multipart/form-data"},on:{"submit":function($event){$event.stopPropagation();$event.preventDefault();return _vm.onSubmit.apply(null, arguments)}}},[_c('h1',[_vm._v("\n    Upload files\n  ")]),_vm._v(" "),_c('input',{attrs:{"type":"file","name":"file"},on:{"change":function($event){return _vm.filesChange($event.target.name, $event.target.files)}}})])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/upload.vue?vue&type=template&id=6a1c5c21&scoped=true&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/upload.vue?vue&type=script&lang=js&
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

/* harmony default export */ var uploadvue_type_script_lang_js_ = ({
  name: 'App',

  data() {
    return {};
  },

  methods: {
    onSubmit(evt) {},

    filesChange(filename, files) {
      if (!files.length) {
        return;
      }

      console.log(filename, files);
      const formData = new FormData();

      for (let i = 0; i < files.length; i++) {
        formData.append(filename, files[i], files[i].name);
      }

      this.$axios.post('cert/create', formData, {
        onUploadProgress: progress => {
          const {
            total,
            loaded
          } = progress;
          const totalSizeInMB = total / 1000000;
          const loadedSizeInMB = loaded / 1000000;
          const uploadPercentage = loadedSizeInMB / totalSizeInMB * 100;
          console.log("total size in MB ==> ", totalSizeInMB);
          console.log("uploaded size in MB ==> ", loadedSizeInMB);
        }
      }).then(rsp => {
        console.log(rsp);
      }).catch(err => {
        console.log(err);
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/upload.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_uploadvue_type_script_lang_js_ = (uploadvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./pages/upload.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_uploadvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6a1c5c21",
  "ee6b927a"
  
)

/* harmony default export */ var upload = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=upload.js.map
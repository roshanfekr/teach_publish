exports.ids = [1];
exports.modules = {

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(115);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("997113fa", content, true, context)
};

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_booklesson_vue_vue_type_style_index_0_id_70e3438d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(111);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_booklesson_vue_vue_type_style_index_0_id_70e3438d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_booklesson_vue_vue_type_style_index_0_id_70e3438d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_booklesson_vue_vue_type_style_index_0_id_70e3438d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_booklesson_vue_vue_type_style_index_0_id_70e3438d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".title-color[data-v-70e3438d]{color:#707175}.m-selected[data-v-70e3438d]{background-color:rgba(var(--gradian-color4));box-shadow:inset 0 0 15px rgba(var(--gradian-color1))}.m-selected[data-v-70e3438d],.m-selected_1[data-v-70e3438d]{padding-top:16px;z-index:99;height:50px;width:calc(100% + 2px);position:absolute;color:#fff;margin:-1px;font-size:small;text-align:center}.m-selected_1[data-v-70e3438d]{background-color:#7bc372;box-shadow:inset 0 0 15px #130e0e}.w-30[data-v-70e3438d],.w-35[data-v-70e3438d]{width:30%!important}.m-even-time[data-v-70e3438d]{padding-top:14px;width:100%;z-index:999;position:absolute;height:49px;background-color:#fff;margin-left:-15px;text-align:center}.vertical-center[data-v-70e3438d]{top:50%;transform:translateY(-50%)}.m-pointer[data-v-70e3438d]{cursor:pointer}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/booklesson.vue?vue&type=template&id=70e3438d&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"w-100"},[_c('b-overlay',{attrs:{"variant":"white","opacity":"0.8","blur":"1"},model:{value:(_vm.loading),callback:function ($$v) {_vm.loading=$$v},expression:"loading"}},[_c('b-row',{staticClass:"mx-0 w-100 shadow"},[_c('div',{staticClass:"w-100",staticStyle:{"overflow-x":"auto","overflow-y":"hidden"}},[_c('div',{staticClass:"w-100 ",staticStyle:{"min-width":"750px"}},[_c('b-row',{staticClass:"mx-0 w-100 text-center  border-bottom border-top  border-left border-right p-0 ",staticStyle:{"height":"50px"}},[_c('b-col',[_c('font-awesome-icon',{staticStyle:{"font-size":"x-large","margin-top":"11px","color":"#cccfd2"},attrs:{"icon":['far', 'clock']}})],1),_vm._v(" "),_vm._l((_vm.week),function(item,index){return _c('b-col',{key:index,staticClass:"border-left p-0"},[_c('div',{staticStyle:{"margin-top":"11px"}},[_vm._v(" "+_vm._s(item))])])})],2),_vm._v(" "),_vm._l((_vm.clock),function(clockItem,clockIndex){return _c('b-row',{key:clockIndex,staticClass:"mx-0 w-100 border-bottom border-right"},[_c('b-col',{staticClass:"border-left text-center "},[_c('div',{staticClass:"align-content-center align-middle",class:clockIndex % 2 === 0 ? 'm-even-time' : 'd-none'},[_vm._v("\n                "+_vm._s(clockIndex < 10 ? '0' + Math.floor(clockIndex / 2) : clockIndex / 2)+":"+_vm._s((clockIndex % 2 === 0) ? '00' :
                    '30')+"\n              ")])]),_vm._v(" "),_vm._l((_vm.week),function(item,index){return _c('b-col',{key:index,staticClass:"border-left p-0"},[_c('div',{class:_vm.timing[index][clockIndex].value === true && _vm.timing[index][clockIndex].selected !== true ?'m-selected m-pointer'
          : _vm.timing[index][clockIndex].selected === true? 'm-selected_1' : '',attrs:{"id":'tooltip-timing-' + _vm.timing[index][clockIndex].id},on:{"click":function($event){return _vm.selectTime(index,clockIndex)}}},[_vm._v("\n                "+_vm._s(_vm.timing[index][clockIndex] ?
                    ((clockIndex < 10 ? '0' + Math.floor(clockIndex / 2) : Math.floor(clockIndex / 2)) + ':' + ((clockIndex % 2 === 0
                    ) ? '00' : '30')) + ' - ' +
                    (((clockIndex + 2) < 10 ? '0' + Math.floor((clockIndex + 2) / 2) : Math.floor((clockIndex + 2) / 2)
                    ) + ':' + (((clockIndex + 2) % 2 === 0) ? '00' : '30')) :
                    ' ')+"\n\n                "),_c('b-tooltip',{directives:[{name:"show",rawName:"v-show",value:(_vm.timing[index][clockIndex].selected),expression:"timing[index][clockIndex].selected"}],attrs:{"target":'tooltip-timing-' + _vm.timing[index][clockIndex].id}},[_vm._v("\n                  "+_vm._s(_vm.timing[index][clockIndex].subject)+"\n                  "),_c('b-badge',{attrs:{"variant":"warning"}},[_vm._v("Pending")])],1)],1)])})],2)})],2)])])],1),_vm._ssrNode(" "),_c('b-modal',{attrs:{"hide-header":"","hide-footer":"","centered":"","id":"add_panel"},model:{value:(_vm.lessonDialogVisible),callback:function ($$v) {_vm.lessonDialogVisible=$$v},expression:"lessonDialogVisible"}},[_c('b-overlay',{attrs:{"id":"overlay-background","show":_vm.lessonDialogOverlay,"opacity":0.65,"rounded":"sm"}},[_c('b-form',{staticClass:"w-100"},[_c('div',{staticClass:"w-100"},[_c('div',{staticClass:"rounded-lg p-2 m-1 border",staticStyle:{"background-color":"rgb(252, 253, 253)"}},[_c('div',{staticClass:"w-100 mt-2 "},[_c('span',{staticClass:"font-weight-bold",staticStyle:{"font-size":"smaller"}},[_vm._v("Week Day :")]),_vm._v(" "),_c('span',{staticClass:"w-100 "},[_vm._v(_vm._s(_vm.DayOfWeek(_vm.myLessonData.dayOfWeek)))])]),_vm._v(" "),_c('div',{staticClass:"w-100 mt-2 mb-2"},[_c('span',{staticClass:"font-weight-bold",staticStyle:{"font-size":"smaller"}},[_vm._v("Time :")]),_vm._v(" "),_c('span',{staticClass:"w-100 "},[_vm._v(_vm._s(_vm.GetTime(_vm.myLessonData.timeStart , _vm.myLessonData.timeEnd)))])])]),_vm._v(" "),_c('b-form-group',{staticClass:"mb-0",attrs:{"label":"Lesson:","label-for":"subject-select"}},[_c('b-form-select',{attrs:{"id":"subject-select","options":_vm.selectLessonDialog_options,"state":!_vm.$v.myLessonData.userLesson.$error && _vm.myLessonData.userLesson !== null,"aria-describedby":"input-userlessonId-feedback"},model:{value:(_vm.$v.myLessonData.userLesson.$model),callback:function ($$v) {_vm.$set(_vm.$v.myLessonData.userLesson, "$model", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"$v.myLessonData.userLesson.$model"}}),_vm._v(" "),_c('b-form-invalid-feedback',{attrs:{"id":"input-userlessonId-feedback"}},[_vm._v("\n              "+_vm._s(this.$t("myLesson.userlessonId.required"))+"\n            ")])],1),_vm._v(" "),_c('b-form-group',{staticClass:"mb-0",attrs:{"label":"Description:","label-for":"descriptionField"}},[_c('b-form-textarea',{attrs:{"id":"descriptionField","placeholder":_vm.$t('myLesson.description_placeholder'),"autocomplete":"off","lazy":true},model:{value:(_vm.myLessonData.description),callback:function ($$v) {_vm.$set(_vm.myLessonData, "description", $$v)},expression:"myLessonData.description"}})],1),_vm._v(" "),_c('div',{staticClass:"p-2 w-100"},[_c('b-button',{staticClass:"form-control btn btn-crl btn-primary btn-reg mr-2 w-35",on:{"click":_vm.sendLessonRequest}},[_vm._v("\n              "+_vm._s(_vm.$t('myLesson.SendRequest'))+"\n            ")]),_vm._v(" "),_c('b-button',{staticClass:"form-control btn btn-crl btn-primary submit px-3 btn-reg mr-2",on:{"click":_vm.cancelDialog}},[_vm._v("\n              "+_vm._s(_vm.$t('cancel'))+"\n            ")])],1)],1)])],1)],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/booklesson.vue?vue&type=template&id=70e3438d&scoped=true&

// EXTERNAL MODULE: external "vuelidate/lib/validators"
var validators_ = __webpack_require__(103);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/booklesson.vue?vue&type=script&lang=js&
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

/* harmony default export */ var booklessonvue_type_script_lang_js_ = ({
  name: "booklesson-component",
  model: {
    prop: 'value'
  },
  props: {
    // this allows using the `value` prop for a different purpose
    value: Number,
    // use `title` as the prop which take the place of `value`
    title: {
      type: String,
      default: 'Default title'
    }
  },
  validations: {
    myLessonData: {
      userlessonId: {
        required: validators_["required"],

        serverError(value) {
          if (value === '') {
            return true;
          }

          return !(this.errors != null && this.errors.userlessonId && value === this.errors.userlessonId.value);
        }

      },
      userLesson: {
        required: validators_["required"]
      }
    }
  },

  data() {
    return {
      loading: true,
      tutorId: this.value,
      lessonDialogOverlay: false,
      myLessons: [],
      myLessonData: {
        id: 0,
        timingId: 0,
        description: "",
        dayOfWeek: 0,
        timeStart: 0,
        timeEnd: 0,
        userlessonId: 0,
        userLesson: null
      },
      selectLessonDialog_options: [],
      description: "",
      timingItem: null,
      showOverlay: false,
      lessonDialogVisible: false,
      week: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
      timing: [],
      timingData: [],
      clock: []
    };
  },

  mounted() {
    for (let i = 0; i < 48; i++) this.clock.push(i);

    this.week.forEach(() => {
      const sArr = [];
      this.clock.forEach(function (c) {
        sArr[c] = false;
      });
      this.timing.push(sArr);
      this.timingData.push(sArr);
    });
    this.loadTutor();
    this.loadUserLesson();
  },

  methods: {
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

    selectTime(it, id) {
      if (this.timing[it][id].value === true) {
        if (this.timingData[it][id].selected === undefined) this.showSelectLessonDialog(this.timingData[it][id]);
      }
    },

    showSelectLessonDialog(timingItem) {
      try {
        this.lessonDialogVisible = true;
        this.myLessonData.timeStart = timingItem.item.timeStart;
        this.myLessonData.timeEnd = timingItem.item.timeEnd;
        this.myLessonData.dayOfWeek = timingItem.item.dayOfWeek;
        this.myLessonData.timingId = timingItem.item.id;
      } catch (e) {}
    },

    cancelDialog() {
      this.lessonDialogVisible = false;
      this.myLessonData.id = 0;
      this.myLessonData.timingId = 0;
      this.myLessonData.userlessonId = 0;
      this.myLessonData.description = "";
      this.myLessonData.timeEnd = 0;
      this.myLessonData.timeStart = 0;
      this.myLessonData.timingId = 0;
      this.myLessonData.dayOfWeek = 0;
    },

    sendLessonRequest() {
      this.$v.$reset();
      this.errors = null; //evt.preventDefault()

      this.$v.myLessonData.$touch();

      if (this.$v.myLessonData.$invalid) {
        console.log("vuelidate error");
        return;
      }

      try {
        let data = {
          timeStart: this.myLessonData.timeStart,
          timeEnd: this.myLessonData.timeEnd,
          dayOfWeek: this.myLessonData.dayOfWeek,
          tutorUserId: this.tutorId,
          lessonId: this.myLessonData.userLesson.lessonId,
          userLessonId: this.myLessonData.userLesson.id,
          description: this.myLessonData.description,
          timingId: this.myLessonData.timingId
        };
        this.lessonDialogOverlay = true;
        this.$axios.post('/mylessons/saveMyLesson', data).then(res => {
          let myLesson = res.data.data;

          if (myLesson != null) {
            if (myLesson.ID > 0) {
              let values = this.timing[myLesson.dayOfWeek][myLesson.timeStart];
              values["id"] = myLesson.id;
              values["selected"] = true;
              values["subject"] = this.myLessonData.userLesson.text;
              values["acceptStatus"] = myLesson.acceptStatus;
              this.$set(this.timing[myLesson.dayOfWeek], myLesson.timeStart, values);
              this.cancelDialog();
              this.myLessons.push(myLesson);
              this.makeToast("success", "Message", this.$t("mylesson.added"));
            }
          }

          this.lessonDialogVisible = false;
          this.lessonDialogOverlay = false;
        }).catch(error => {
          const err = error.response.data;

          if (err.error === true) {
            if (err.type === "exist") {
              this.makeToast("danger", "Message", this.$t("mylesson.exist"));
              this.lessonDialogError = true;
            }
          }

          this.lessonDialogOverlay = false;
        });
      } catch (e) {
        this.lessonDialogOverlay = false;
      }
    },

    loadUserLesson() {
      try {
        let data = {
          userId: this.tutorId
        };
        this.$axios.post('/subject/getUserLessonsByUserId', data).then(res => {
          let userLessons = res.data;
          if (userLessons != null) var index = 0;
          userLessons.forEach(item => {
            if (index === 0) this.myLessonData.userLesson = {
              id: item.id,
              lessonId: item.lessonId,
              text: item.subject
            };
            index = index + 1;
            this.selectLessonDialog_options.push({
              value: {
                id: item.id,
                lessonId: item.lessonId,
                text: item.subject
              },
              text: item.subject
            });
          });
        }).catch(error => {
          // this.$router.push('/404')
          console.log(error);
        });
      } catch (e) {}
    },

    makeToast(variant = 'success', header = 'Message', msg = '') {
      this.$bvToast.toast(this.$t(msg), {
        autoHideDelay: 3000,
        title: header,
        variant: variant,
        solid: true,
        appendToast: true,
        headerClass: "d-none"
      });
    },

    loadTutor() {
      const formData = {
        tutorId: this.value
      };
      this.loading = true;
      this.$axios.post('/user/getTutor', formData).then(res => {
        this.loading = false;
        this.tutorData = res.data;
        this.tutorData.TutorTimings.forEach(item => {
          let values = {
            value: true,
            item
          };
          this.$set(this.timing[item.dayOfWeek], item.timeStart, values);
        });
        this.tutorData.MyLessons.forEach(item => {
          let values = {};
          values["id"] = item.id;
          values["selected"] = true;
          values["subject"] = item.Lesson.subject;
          values["acceptStatus"] = item.acceptStatus;
          this.$set(this.timing[item.dayOfWeek], item.timeStart, values);
        });
      }).catch(error => {
        console.log(error);
      }).finally(() => {
        this.loading = false;
      });
    }

  }
});
// CONCATENATED MODULE: ./components/booklesson.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_booklessonvue_type_script_lang_js_ = (booklessonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./components/booklesson.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(114)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_booklessonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "70e3438d",
  "1d330d63"
  
)

/* harmony default export */ var booklesson = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=booklesson.js.map
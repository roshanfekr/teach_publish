exports.ids = [17];
exports.modules = {

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/report-dashboard.vue?vue&type=template&id=241b0e61&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "w-100",
    staticStyle: {
      "overflow-x": "auto",
      "overflow-y": "hidden"
    }
  }, [_vm._ssrNode("<div class=\"m-3 pt-2\" data-v-241b0e61>", "</div>", [_c('b-row', [_c('b-col', {
    attrs: {
      "lg": "6"
    }
  }, [_c('h4', [_vm._v("User Requests")]), _vm._v(" "), _c('b-row', {
    staticClass: "px-3"
  }, [_c('b-button-group', {
    attrs: {
      "size": "sm"
    }
  }, _vm._l(_vm.reqButtons, function (btn, idx) {
    return _c('b-button', {
      key: idx,
      attrs: {
        "variant": btn.state ? 'success' : 'secondary'
      },
      on: {
        "click": function ($event) {
          return _vm.reportRequestTake(btn);
        }
      }
    }, [_vm._v("\n                  " + _vm._s(btn.caption) + "\n                ")]);
  }), 1)], 1), _vm._v(" "), _c('client-only', [_c('line-chart', {
    attrs: {
      "chart-options": _vm.chartOptions,
      "chart-data": _vm.chartData,
      "height": 400,
      "width": 400,
      "chart-id": "lineChart"
    }
  })], 1)], 1), _vm._v(" "), _c('b-col', {
    attrs: {
      "lg": "6"
    }
  }, [_c('h4', [_vm._v("User Report")]), _vm._v(" "), _c('b-row', {
    staticClass: "px-3"
  }, [_c('b-button-group', {
    attrs: {
      "size": "sm"
    }
  }, _vm._l(_vm.userButtons, function (btn, idx) {
    return _c('b-button', {
      key: idx,
      attrs: {
        "variant": btn.state ? 'success' : 'secondary'
      },
      on: {
        "click": function ($event) {
          return _vm.reportUsers(btn);
        }
      }
    }, [_vm._v("\n                " + _vm._s(btn.caption) + "\n              ")]);
  }), 1)], 1), _vm._v(" "), _c('client-only', [_c('line-chart', {
    attrs: {
      "chart-options": _vm.chartOptions,
      "chart-data": _vm.userChartData,
      "height": 400,
      "width": 400,
      "chart-id": "lineChart1"
    }
  })], 1)], 1)], 1), _vm._ssrNode(" "), _c('b-row', [_c('b-row', {
    staticClass: "w-100 mb-1 pl-3 pt-4",
    attrs: {
      "id": "toolbar"
    }
  }, [_c('b-col', {
    attrs: {
      "lg": "4"
    }
  }, [_c('h4', [_vm._v("Online Users")])])], 1), _vm._v(" "), _c('b-col', {
    staticClass: "w-100"
  }, [_c('div', {
    staticStyle: {
      "min-width": "750px"
    }
  }, [_c('b-row', {
    staticClass: "d-md-flex col-md-12 col-lg-12 m-center"
  }, [this.searchData.rowCount / this.searchData.perPage > 1 ? _c('b-pagination', {
    attrs: {
      "total-rows": this.searchData.rowCount,
      "per-page": this.searchData.perPage
    },
    on: {
      "change": _vm.loadData
    },
    model: {
      value: _vm.searchData.pageIndex,
      callback: function ($$v) {
        _vm.$set(_vm.searchData, "pageIndex", $$v);
      },
      expression: "searchData.pageIndex"
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('div', {
    staticClass: "w-100 h-100",
    staticStyle: {
      "border": "1px solid #d8d6d6"
    }
  }, [_c('div', {
    staticClass: "w-100 px-2 py-1 shadow-sm d-flex border",
    staticStyle: {
      "background": "#d8d6d6"
    }
  }, [_c('div', {
    staticClass: "px-2 mt-1",
    staticStyle: {
      "width": "100%",
      "min-width": "300px"
    }
  }, [_vm._v("\n              Email\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "px-2 mt-1",
    staticStyle: {
      "min-width": "180px"
    }
  }, [_vm._v("\n              Last Online\n            ")])]), _vm._v(" "), _vm.data.length === 0 ? _c('div', {
    staticClass: "w-100 text-center py-4",
    staticStyle: {
      "color": "#b4b4b4"
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("noRecordFound")) + "\n          ")]) : _vm._e(), _vm._v(" "), _vm._l(_vm.data, function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "mx-0 w-100"
    }, [_c('div', {
      staticClass: "w-100 p-2 shadow-sm"
    }, [_c('div', {
      staticClass: "w-100 d-flex"
    }, [_c('div', {
      staticClass: "text-left px-2",
      staticStyle: {
        "width": "100%",
        "min-width": "300px"
      }
    }, [_vm._v("\n                  " + _vm._s(item.email) + "\n                ")]), _vm._v(" "), _c('div', {
      staticClass: "text-left px-2",
      staticStyle: {
        "min-width": "180px"
      }
    }, [_c('span', {
      staticClass: "small"
    }, [_vm._v(_vm._s(_vm._f("moment")(item.updatedAt, "ddd ,MMM DD, YYYY - hh:mm")))])])])])]);
  })], 2)], 1)])], 1)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/report-dashboard.vue?vue&type=template&id=241b0e61&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/report-dashboard.vue?vue&type=script&lang=js&
/* harmony default export */ var report_dashboardvue_type_script_lang_js_ = ({
  layout: 'AdminTemplate',
  name: "chart-dashboard",
  data() {
    return {
      reqButtons: [{
        caption: 'Last Month',
        index: 0,
        state: false,
        value: "month"
      },
      // { caption: 'Weekly', state: false, value: "weekly" },
      {
        caption: 'Monthly',
        index: 1,
        state: false,
        value: "monthly"
      }, {
        caption: 'Yearly',
        index: 2,
        state: true,
        value: "yearly"
      }],
      userButtons: [{
        caption: 'Last Month',
        index: 0,
        state: false,
        value: "month"
      },
      // { caption: 'Weekly', state: false, value: "weekly" },
      {
        caption: 'Monthly',
        index: 1,
        state: false,
        value: "monthly"
      }, {
        caption: 'Yearly',
        index: 2,
        state: true,
        value: "yearly"
      }],
      chartData: {
        labels: [],
        datasets: [{
          label: '',
          backgroundColor: '#f87979',
          data: []
        }]
      },
      userChartData: {
        labels: [],
        datasets: [{
          label: 'Data One',
          backgroundColor: '#f87979',
          data: []
        }]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      },
      data: [],
      windowWidth:  false ? undefined : 'sm',
      busy: true,
      searchData: {
        pageIndex: 0,
        rowCount: 0,
        perPage: 10
      }
    };
  },
  mounted() {
    this.loadData();
    this.reportRequestTake(this.reqButtons[0]);
    this.reportUsers(this.userButtons[0]);
  },
  methods: {
    loadData(index) {
      try {
        this.busy = true;
        this.searchData.pageIndex = index;
        this.$axios.post("/user/get-online-user", this.searchData).then(res => {
          this.data = res.data.rows;
          this.searchData.rowCount = res.data.count;
        }).catch(err => {}).finally(() => {
          this.busy = false;
        });
      } catch (e) {
        this.busy = false;
      }
    },
    reportRequestTake(btn) {
      // user change count
      // MESSAGE: 0,
      // REQUEST_FOR_TAKE: 1,
      // ACCEPTED: 2,
      // REJECTED: 3,
      this.activeDateButton(this.reqButtons, btn);
      let dtype = null;
      if (btn != null) dtype = btn.value;
      var data = {
        dateType: "month"
      }; // week
      if (dtype != null) data.dateType = dtype;
      this.$axios.post('/report/report-request-take', data).then(res => {
        var result = res.data.result;
        let valuesType1 = [];
        let labels = {};
        result.forEach(function (item, index) {
          let val = {
            type_1: 0,
            type_2: 0,
            type_3: 0
          };
          if (labels[item["d"]] == null) {
            labels[item["d"]] = val;
          } else {
            val = labels[item["d"]];
          }
          if (item["type"] === 1) val.type_1 = item["count"];
          if (item["type"] === 2) val.type_2 = item["count"];
          if (item["type"] === 3) val.type_3 = item["count"];
          labels[item["d"]] = val;
        });
        let valType_1 = [];
        let valType_2 = [];
        let valType_3 = [];
        let lbs = [];
        for (const key in labels) {
          let item = labels[key];
          lbs.push(key);
          valType_1.push(item.type_1);
          valType_2.push(item.type_2);
          valType_3.push(item.type_3);
        }
        this.chartData.labels = lbs;
        this.chartData.datasets = [{
          label: 'Request',
          backgroundColor: '#f87979',
          data: valType_1
        }, {
          label: 'Accepted Request',
          backgroundColor: '#00c4ff',
          data: valType_2
        }, {
          label: 'Rejected Request',
          backgroundColor: '#6ae200',
          data: valType_3
        }];
      }).catch(error => {
        console.log(error);
      });
    },
    activeDateButton(butns, btn) {
      butns.forEach(item => {
        item.state = false;
      });
      btn.state = true;
    },
    reportUsers(btn) {
      let dtype = null;
      var data = {
        dateType: "month",
        userType: "tutor"
      }; // week
      if (btn != null) dtype = btn.value;
      if (dtype != null) data.dateType = dtype;
      this.activeDateButton(this.userButtons, btn);
      this.$axios.post('/report/report-users', data).then(res => {
        var result = res.data.result;
        let labels = {};
        result.forEach(function (item, index) {
          let val = {
            type_1: 0,
            type_2: 0,
            type_3: 0
          };
          if (labels[item["year"]] == null) {
            labels[item["year"]] = val;
          } else {
            val = labels[item["year"]];
          }
          if (item["name"] === "tutor") val.type_1 = item["count"];
          if (item["name"] === "student") val.type_2 = item["count"];
          if (item["name"] === "guest") val.type_3 = item["count"];
          labels[item["year"]] = val;
        });
        let valType_1 = [];
        let valType_2 = [];
        let valType_3 = [];
        let lbs = [];
        for (const key in labels) {
          let item = labels[key];
          lbs.push(key);
          valType_1.push(item.type_1);
          valType_2.push(item.type_2);
          valType_3.push(item.type_3);
        }
        this.userChartData.labels = lbs;
        this.userChartData.datasets = [{
          label: 'Tutor',
          backgroundColor: '#f10a0a',
          data: valType_1
        }, {
          label: 'Student',
          backgroundColor: '#0074ff',
          data: valType_2
        }, {
          label: 'Guest',
          backgroundColor: '#39ff00',
          data: valType_3
        }];
      }).catch(error => {
        console.log(error);
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/admin/report-dashboard.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_report_dashboardvue_type_script_lang_js_ = (report_dashboardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./pages/admin/report-dashboard.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_report_dashboardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "241b0e61",
  "3ede2c30"
  
)

/* harmony default export */ var report_dashboard = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=report-dashboard.js.map
exports.ids = [20];
exports.modules = {

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/user-change.vue?vue&type=template&id=094167e2&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('b-container', {
    attrs: {
      "fluid": ""
    }
  }, [_c('b-row', {
    staticClass: "mx-0 bg-info"
  }, [_c('b-col', {
    staticClass: "float-left"
  }, [_c('h3', [_vm._v(" " + _vm._s(this.$t("user_change")) + " ")])]), _vm._v(" "), _c('b-col', [_vm.reviewMode ? _c('b-button', {
    staticClass: "float-right",
    on: {
      "click": _vm.backBtn
    }
  }, [_c('svg', {
    staticClass: "bi bi-arrow-counterclockwise",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "20",
      "height": "20",
      "fill": "currentColor",
      "viewBox": "0 0 16 16"
    }
  }, [_c('path', {
    attrs: {
      "fill-rule": "evenodd",
      "d": "M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"
    }
  })]), _vm._v(" " + _vm._s(_vm.$t("back")) + "\n      ")]) : _vm._e()], 1)], 1), _vm._v(" "), !_vm.reviewMode ? _c('b-row', {
    staticClass: "mt-1"
  }, [_c('b-row', {
    staticClass: "row ml-3 mr-3 p-2 w-100"
  }), _vm._v(" "), _c('b-row', {
    staticClass: "d-md-flex col-md-12 col-lg-12 m-center mt-3"
  }, [_c('b-col', [_c('b-pagination', {
    attrs: {
      "total-rows": _vm.searchData.count,
      "per-page": _vm.searchData.perPage,
      "first-text": "First",
      "prev-text": "Prev",
      "next-text": "Next",
      "last-text": "Last"
    },
    on: {
      "change": _vm.show
    },
    model: {
      value: _vm.searchData.pageIndex,
      callback: function ($$v) {
        _vm.$set(_vm.searchData, "pageIndex", $$v);
      },
      expression: "searchData.pageIndex"
    }
  })], 1)], 1), _vm._v(" "), _c('b-row', {
    staticClass: "d-md-flex col-md-12 col-lg-12 m-center mt-1"
  }, [_c('b-col', [_c('b-overlay', {
    attrs: {
      "show": _vm.overlay_show,
      "no-wrap": ""
    }
  }), _vm._v(" "), _c('b-table', {
    attrs: {
      "head-variant": "light",
      "striped": "",
      "hover": "",
      "small": "",
      "items": _vm.t_items,
      "fields": _vm.t_fields
    },
    scopedSlots: _vm._u([{
      key: "cell(email)",
      fn: function (row) {
        return [_vm._v("\n            " + _vm._s(row.item.email) + "\n            "), row.item.changed === 1 ? _c('b-badge', {
          attrs: {
            "pill": "",
            "variant": "success"
          }
        }, [_vm._v("\n             Changed\n            ")]) : _vm._e()];
      }
    }, {
      key: "cell(state)",
      fn: function (row) {
        return [row.item.acceptStatus === -1 ? _c('b-badge', {
          attrs: {
            "pill": "",
            "variant": "danger"
          }
        }, [_vm._v("\n              " + _vm._s(_vm.$t('Disable')) + "\n            ")]) : _vm._e(), _vm._v(" "), row.item.acceptStatus === 0 || row.item.acceptStatus === null ? _c('b-badge', {
          attrs: {
            "pill": "",
            "variant": "warning"
          }
        }, [_vm._v("\n              " + _vm._s(_vm.$t('Pending')) + "\n            ")]) : _vm._e(), _vm._v(" "), row.item.acceptStatus === 1 ? _c('b-badge', {
          attrs: {
            "pill": "",
            "variant": "success"
          }
        }, [_vm._v("\n              " + _vm._s(_vm.$t('Accepted')) + "\n            ")]) : _vm._e()];
      }
    }, {
      key: "cell(econfirmed)",
      fn: function (row) {
        return [row.item.emailConfirmed === 1 ? _c('b-badge', {
          attrs: {
            "pill": "",
            "variant": "success"
          }
        }, [_vm._v(_vm._s(_vm.$t("Confirmed")))]) : _vm._e(), _vm._v(" "), row.item.emailConfirmed === 0 || row.item.emailConfirmed === null ? _c('b-badge', {
          attrs: {
            "pill": "",
            "variant": "warning"
          }
        }, [_vm._v(_vm._s(_vm.$t("Not Confirmed")))]) : _vm._e()];
      }
    }, {
      key: "cell(view)",
      fn: function (row) {
        return [_c('b-button', {
          ref: 'btnEdit' + row.index,
          staticClass: "w-50",
          attrs: {
            "variant": "info",
            "size": "sm"
          },
          on: {
            "click": function ($event) {
              return _vm.showEditModal(row);
            }
          }
        }, [_c('svg', {
          staticClass: "bi bi-pencil",
          attrs: {
            "xmlns": "http://www.w3.org/2000/svg",
            "width": "16",
            "height": "16",
            "fill": "currentColor",
            "viewBox": "0 0 16 16"
          }
        }, [_c('path', {
          attrs: {
            "d": "M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
          }
        })]), _vm._v("\n                Edit")])];
      }
    }], null, false, 1459046391)
  })], 1)], 1)], 1) : _vm._e(), _vm._v(" "), _vm.reviewMode && (_vm.reviewItem.acceptStatus === 0 || _vm.reviewItem.acceptStatus === null) ? _c('b-row', {
    staticClass: "pt-3 mt-3 paper panel panel-default d-md-flex col-md-12 col-lg-12 m-center mt-1",
    staticStyle: {
      "box-shadow": "0 1px 15px 1px rgb(0 0 20%)"
    },
    attrs: {
      "id": "review_panel_master"
    }
  }, [_c('b-card', {
    staticClass: "text-center mb-1 w-100",
    attrs: {
      "border-variant": "secondary",
      "header": this.$t("User Information"),
      "header-border-variant": "secondary",
      "no-body": ""
    }
  }, [_c('b-collapse', {
    attrs: {
      "id": "certCollapse",
      "visible": "",
      "accordion": "certCollapse",
      "role": "tabpanel"
    }
  }, [_c('b-row', {
    staticClass: "d-md-flex col-md-12 col-lg-12 m-center mt-1",
    attrs: {
      "id": "review_panel_master_2"
    }
  }, [_c('b-col', {
    staticClass: "w-50 text-left"
  }, [_c('p', [_c('b-avatar', {
    attrs: {
      "size": "7rem",
      "src": _vm.reviewItem.path != null ? '/' + _vm.reviewItem.path : '',
      "alt": "Cropped Image"
    }
  })], 1), _vm._v(" "), _c('p', [_vm._v(_vm._s(this.$t("email")) + " :\n              "), _c('span', {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.reviewItem.email))])]), _vm._v(" "), _c('p', [_vm._v(_vm._s(this.$t("fName")) + " :\n              "), _c('span', {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.reviewItem.name))])]), _vm._v(" "), _c('p', [_vm._v(_vm._s(this.$t("lName")) + " :\n              "), _c('span', {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.reviewItem.lastName))])]), _vm._v(" "), _c('p', [_vm._v(_vm._s(this.$t("bioMore")) + " :\n              "), _c('span', {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.reviewItem.bioMore))])]), _vm._v(" "), _c('p', [_vm._v(_vm._s(this.$t("headline")) + " :\n              "), _c('span', {
    staticClass: "text-bold"
  }, [_vm._v(_vm._s(_vm.reviewItem.headLine))])]), _vm._v(" "), _c('p', [_vm._v(_vm._s(this.$t("CreatedAt")) + " :\n              "), _c('span', {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.reviewItem.createdAt))])]), _vm._v(" "), _c('p', [_vm._v(_vm._s(this.$t("UpdatedAt")) + " :\n              "), _c('span', {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.reviewItem.updatedAt))])]), _vm._v(" "), _vm.reviewItem.transcript_fileId > 0 ? _c('b-button', {
    ref: 'btnDownloadTranscript' + _vm.reviewItem.id,
    staticClass: "w-100",
    attrs: {
      "variant": "info",
      "size": "sm"
    },
    on: {
      "click": function ($event) {
        return _vm.downloadFile(_vm.reviewItem.transcript_fileId);
      }
    }
  }, [_vm._v("Download Transcript")]) : _vm._e(), _vm._v(" "), _c('p', [_c('b-button', {
    staticClass: "w-20",
    attrs: {
      "variant": "info",
      "size": "sm"
    },
    on: {
      "click": function ($event) {
        return _vm.accept('user', _vm.reviewItem.id);
      }
    }
  }, [_vm._v("Accept")])], 1)], 1)], 1)], 1)], 1)], 1) : _vm._e(), _vm._v(" "), _vm.reviewMode && _vm.transcriptItem.length > 0 ? _c('b-row', {
    staticClass: "pt-3 mt-3 paper panel panel-default d-md-flex col-md-12 col-lg-12 m-center mt-1",
    staticStyle: {
      "box-shadow": "0 1px 15px 1px rgb(0 0 20%)"
    },
    attrs: {
      "id": "review_panel1"
    }
  }, [_c('b-card', {
    staticClass: "text-center mb-1 w-100",
    attrs: {
      "border-variant": "secondary",
      "header": this.$t("transcript.title"),
      "header-border-variant": "secondary",
      "no-body": ""
    }
  }, [_c('b-collapse', {
    attrs: {
      "id": "certCollapse",
      "visible": "",
      "accordion": "certCollapse",
      "role": "tabpanel"
    },
    model: {
      value: _vm.certVisible,
      callback: function ($$v) {
        _vm.certVisible = $$v;
      },
      expression: "certVisible"
    }
  }, [_c('b-row', {
    staticClass: "d-md-flex col-md-12 col-lg-12 m-center mt-1",
    attrs: {
      "id": "review_panel_transcript"
    }
  }, [_c('b-col', {
    staticClass: "w-100"
  }, [_c('b-table', {
    attrs: {
      "head-variant": "light",
      "striped": "",
      "hover": "",
      "small": "",
      "items": _vm.transcriptItem,
      "fields": _vm.r_transcript_fields
    },
    scopedSlots: _vm._u([{
      key: "cell(acceptStatus)",
      fn: function (row) {
        return [row.item.acceptStatus === 0 || row.item.acceptStatus === null ? _c('b-badge', {
          attrs: {
            "variant": "warning"
          }
        }, [_vm._v(" " + _vm._s(_vm.$t("Pending")))]) : _vm._e(), _vm._v(" "), row.item.acceptStatus === 1 ? _c('b-badge', {
          attrs: {
            "variant": "success"
          }
        }, [_vm._v(" " + _vm._s(_vm.$t("Accepted")))]) : _vm._e(), _vm._v(" "), row.item.acceptStatus === 2 ? _c('b-badge', {
          attrs: {
            "variant": "danger"
          }
        }, [_vm._v(" " + _vm._s(_vm.$t("Rejected")))]) : _vm._e()];
      }
    }, {
      key: "cell(action_download)",
      fn: function (row) {
        return [_c('b-button', {
          ref: 'btnEdit' + row.index,
          staticClass: "w-100",
          attrs: {
            "variant": "info",
            "size": "sm"
          },
          on: {
            "click": function ($event) {
              return _vm.downloadFile(row.item.fileId);
            }
          }
        }, [_vm._v("\n                  Download")])];
      }
    }, {
      key: "cell(action_accept)",
      fn: function (row) {
        return [_c('b-button', {
          ref: 'btnEdit' + row.index,
          staticClass: "w-100",
          attrs: {
            "variant": "info",
            "size": "sm"
          },
          on: {
            "click": function ($event) {
              return _vm.accept('transcript', row.item.userId);
            }
          }
        }, [_vm._v("\n                  Accept")])];
      }
    }, {
      key: "cell(action_reject)",
      fn: function (row) {
        return [_c('b-button', {
          ref: 'btnEdit' + row.index,
          staticClass: "w-100",
          attrs: {
            "variant": "info",
            "size": "sm"
          },
          on: {
            "click": function ($event) {
              return _vm.reject('transcript', row.item.userId);
            }
          }
        }, [_vm._v("\n                  Reject")])];
      }
    }], null, false, 1070202415)
  })], 1)], 1)], 1)], 1)], 1) : _vm._e(), _vm._v(" "), _vm.reviewMode && _vm.certItems.length > 0 ? _c('b-row', {
    staticClass: "pt-3 mt-3 paper panel panel-default d-md-flex col-md-12 col-lg-12 m-center mt-1",
    staticStyle: {
      "box-shadow": "0 1px 15px 1px rgb(0 0 20%)"
    },
    attrs: {
      "id": "review_panel1"
    }
  }, [_c('b-card', {
    staticClass: "text-center mb-1 w-100",
    attrs: {
      "border-variant": "secondary",
      "header": this.$t("certificate.title"),
      "header-border-variant": "secondary",
      "no-body": ""
    }
  }, [_c('b-collapse', {
    attrs: {
      "id": "certCollapse",
      "visible": "",
      "accordion": "certCollapse",
      "role": "tabpanel"
    },
    model: {
      value: _vm.certVisible,
      callback: function ($$v) {
        _vm.certVisible = $$v;
      },
      expression: "certVisible"
    }
  }, [_c('b-row', {
    staticClass: "d-md-flex col-md-12 col-lg-12 m-center mt-1",
    attrs: {
      "id": "review_panel_cert"
    }
  }, [_c('b-col', {
    staticClass: "w-100"
  }, [_c('b-table', {
    attrs: {
      "head-variant": "light",
      "striped": "",
      "hover": "",
      "small": "",
      "items": _vm.certItems,
      "fields": _vm.r_cert_fields
    },
    scopedSlots: _vm._u([{
      key: "cell(description)",
      fn: function (row) {
        return [_c('p', {
          staticClass: "float-left"
        }, [_vm._v("\n                    " + _vm._s(row.item.description.substr(1, 20)) + "\n                    ")]), row.item.description.length > 20 ? _c('p', {
          staticClass: "float-left ml-1",
          staticStyle: {
            "cursor": "pointer"
          }
        }, [_vm._v("\n                      ...\n                      "), _c('svg', {
          staticClass: "bi bi-eye-fill",
          attrs: {
            "id": 'tooltip-description' + row.item.id,
            "xmlns": "http://www.w3.org/2000/svg",
            "width": "16",
            "height": "16",
            "fill": "currentColor",
            "viewBox": "0 0 16 16"
          }
        }, [_c('path', {
          attrs: {
            "d": "M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"
          }
        }), _vm._v(" "), _c('path', {
          attrs: {
            "d": "M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
          }
        })]), _vm._v(" "), _c('b-tooltip', {
          attrs: {
            "target": 'tooltip-description' + row.item.id
          }
        }, [_vm._v("\n                        " + _vm._s(row.item.description) + "\n                      ")])], 1) : _vm._e(), _vm._v(" "), _c('p')];
      }
    }, {
      key: "cell(acceptStatus)",
      fn: function (row) {
        return [row.item.acceptStatus === 0 || row.item.acceptStatus === null ? _c('b-badge', {
          attrs: {
            "variant": "warning"
          }
        }, [_vm._v(" " + _vm._s(_vm.$t("Pending")))]) : _vm._e(), _vm._v(" "), row.item.acceptStatus === 1 ? _c('b-badge', {
          attrs: {
            "variant": "success"
          }
        }, [_vm._v(" " + _vm._s(_vm.$t("Accepted")))]) : _vm._e(), _vm._v(" "), row.item.acceptStatus === 2 ? _c('b-badge', {
          attrs: {
            "variant": "danger"
          }
        }, [_vm._v(" " + _vm._s(_vm.$t("Rejected")))]) : _vm._e()];
      }
    }, {
      key: "cell(action_download)",
      fn: function (row) {
        return [_c('b-button', {
          ref: 'btnEdit' + row.index,
          staticClass: "w-100",
          attrs: {
            "variant": "info",
            "size": "sm"
          },
          on: {
            "click": function ($event) {
              return _vm.downloadFile(row.item.id);
            }
          }
        }, [_vm._v("\n                    Download")])];
      }
    }, {
      key: "cell(action_accept)",
      fn: function (row) {
        return [_c('b-button', {
          ref: 'btnEdit' + row.index,
          staticClass: "w-100",
          attrs: {
            "variant": "info",
            "size": "sm"
          },
          on: {
            "click": function ($event) {
              return _vm.accept('cert', row.item.id);
            }
          }
        }, [_vm._v("\n                    Accept")])];
      }
    }, {
      key: "cell(action_reject)",
      fn: function (row) {
        return [_c('b-button', {
          ref: 'btnEdit' + row.index,
          staticClass: "w-100",
          attrs: {
            "variant": "info",
            "size": "sm"
          },
          on: {
            "click": function ($event) {
              return _vm.reject('cert', row.item.id);
            }
          }
        }, [_vm._v("\n                    Reject")])];
      }
    }], null, false, 3508885488)
  })], 1)], 1)], 1)], 1)], 1) : _vm._e(), _vm._v(" "), _vm.reviewMode && _vm.eduItems.length > 0 ? _c('b-row', {
    staticClass: "pt-3 mt-3 paper panel panel-default d-md-flex col-md-12 col-lg-12 m-center mt-1",
    staticStyle: {
      "box-shadow": "0 1px 15px 1px rgb(0 0 20%)"
    },
    attrs: {
      "id": "review_panel2"
    }
  }, [_c('b-card', {
    staticClass: "text-center mb-1 w-100",
    attrs: {
      "border-variant": "secondary",
      "header": this.$t("education"),
      "header-border-variant": "secondary",
      "no-body": ""
    }
  }, [_c('b-row', {
    staticClass: "d-md-flex col-md-12 col-lg-12 m-center mt-1",
    attrs: {
      "id": "review_panel_educ"
    }
  }, [_c('b-col', {
    staticClass: "w-100"
  }, [_c('b-table', {
    attrs: {
      "head-variant": "light",
      "striped": "",
      "hover": "",
      "small": "",
      "items": _vm.eduItems,
      "fields": _vm.r_educ_fields
    },
    scopedSlots: _vm._u([{
      key: "cell(acceptStatus)",
      fn: function (row) {
        return [row.item.acceptStatus === 0 ? _c('b-badge', {
          attrs: {
            "variant": "warning"
          }
        }, [_vm._v(" " + _vm._s(_vm.$t("Pending")))]) : _vm._e(), _vm._v(" "), row.item.acceptStatus === 1 ? _c('b-badge', {
          attrs: {
            "variant": "success"
          }
        }, [_vm._v(" " + _vm._s(_vm.$t("Accepted")))]) : _vm._e(), _vm._v(" "), row.item.acceptStatus === 2 ? _c('b-badge', {
          attrs: {
            "variant": "danger"
          }
        }, [_vm._v(" " + _vm._s(_vm.$t("Rejected")))]) : _vm._e()];
      }
    }, {
      key: "cell(action_download)",
      fn: function (row) {
        return [_c('b-button', {
          ref: 'btnEdit_educ' + row.index,
          staticClass: "w-100",
          attrs: {
            "variant": "info",
            "size": "sm"
          },
          on: {
            "click": function ($event) {
              return _vm.downloadFile(row.item.id);
            }
          }
        }, [_vm._v("\n                  Download")])];
      }
    }, {
      key: "cell(action_accept)",
      fn: function (row) {
        return [_c('b-button', {
          ref: 'btnEdit_educ' + row.index,
          staticClass: "w-100",
          attrs: {
            "variant": "info",
            "size": "sm"
          },
          on: {
            "click": function ($event) {
              return _vm.accept('educ', row.item.id);
            }
          }
        }, [_vm._v("\n                  Accept")])];
      }
    }, {
      key: "cell(action_reject)",
      fn: function (row) {
        return [_c('b-button', {
          ref: 'btnEdit_educ' + row.index,
          staticClass: "w-100",
          attrs: {
            "variant": "info",
            "size": "sm"
          },
          on: {
            "click": function ($event) {
              return _vm.reject('educ', row.item.id);
            }
          }
        }, [_vm._v("\n                  Reject")])];
      }
    }], null, false, 2381944268)
  })], 1)], 1)], 1)], 1) : _vm._e(), _vm._v(" "), _vm.reviewMode && _vm.lessonItems.length > 0 ? _c('b-row', {
    staticClass: "pt-3 mt-3 paper panel panel-default d-md-flex col-md-12 col-lg-12 m-center mt-1",
    staticStyle: {
      "box-shadow": "0 1px 15px 1px rgb(0 0 20%)"
    },
    attrs: {
      "id": "review_panel3"
    }
  }, [_c('b-card', {
    staticClass: "text-center mb-1 w-100",
    attrs: {
      "border-variant": "secondary",
      "header": this.$t("Lessons"),
      "header-border-variant": "secondary",
      "no-body": ""
    }
  }, [_c('b-row', {
    staticClass: "d-md-flex col-md-12 col-lg-12 m-center mt-1",
    attrs: {
      "id": "review_panel_lesson"
    }
  }, [_c('b-col', {
    staticClass: "w-100"
  }, [_c('b-table', {
    attrs: {
      "head-variant": "light",
      "striped": "",
      "hover": "",
      "small": "",
      "items": _vm.lessonItems,
      "fields": _vm.r_lesson_fields
    },
    scopedSlots: _vm._u([{
      key: "cell(acceptStatus)",
      fn: function (row) {
        return [row.item.acceptStatus === 0 ? _c('b-badge', {
          attrs: {
            "variant": "warning"
          }
        }, [_vm._v(" " + _vm._s(_vm.$t("Pending")))]) : _vm._e(), _vm._v(" "), row.item.acceptStatus === 1 ? _c('b-badge', {
          attrs: {
            "variant": "success"
          }
        }, [_vm._v(" " + _vm._s(_vm.$t("Accepted")))]) : _vm._e(), _vm._v(" "), row.item.acceptStatus === 2 ? _c('b-badge', {
          attrs: {
            "variant": "danger"
          }
        }, [_vm._v(" " + _vm._s(_vm.$t("Rejected")))]) : _vm._e()];
      }
    }, {
      key: "cell(action_download)",
      fn: function (row) {
        return [_c('b-button', {
          ref: 'btnEdit_lesson' + row.index,
          staticClass: "w-100",
          attrs: {
            "variant": "info",
            "size": "sm"
          },
          on: {
            "click": function ($event) {
              return _vm.downloadFile(row.item.id);
            }
          }
        }, [_vm._v("\n                Download")])];
      }
    }, {
      key: "cell(action_accept)",
      fn: function (row) {
        return [_c('b-button', {
          ref: 'btnEdit_lesson' + row.index,
          staticClass: "w-100",
          attrs: {
            "variant": "info",
            "size": "sm"
          },
          on: {
            "click": function ($event) {
              return _vm.accept('lesson', row.item.id);
            }
          }
        }, [_vm._v("\n                Accept")])];
      }
    }, {
      key: "cell(action_reject)",
      fn: function (row) {
        return [_c('b-button', {
          ref: 'btnEdit_lesson' + row.index,
          staticClass: "w-100",
          attrs: {
            "variant": "info",
            "size": "sm"
          },
          on: {
            "click": function ($event) {
              return _vm.reject('lesson', row.item.id);
            }
          }
        }, [_vm._v("\n                Reject")])];
      }
    }], null, false, 3435035443)
  })], 1)], 1)], 1)], 1) : _vm._e()], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/user-change.vue?vue&type=template&id=094167e2&scoped=true&

// EXTERNAL MODULE: external "bootstrap-vue"
var external_bootstrap_vue_ = __webpack_require__(37);

// EXTERNAL MODULE: external "vuelidate/lib/validators"
var validators_ = __webpack_require__(105);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/user-change.vue?vue&type=script&lang=js&


/* harmony default export */ var user_changevue_type_script_lang_js_ = ({
  layout: 'AdminTemplate',
  name: "user-change",
  data() {
    return {
      thisp: this,
      userId: 0,
      reviewMode: false,
      visible: true,
      r_lesson_fields: [{
        key: 'subject',
        label: 'Subject',
        sortable: true
      }, {
        key: 'description',
        label: 'Description',
        sortable: true
      }, {
        key: 'acceptStatus',
        label: 'Status',
        sortable: false
      }, {
        key: 'action_download',
        label: 'Download'
      }, {
        key: 'action_accept',
        label: this.$t('accept')
      }, {
        key: 'action_reject',
        label: this.$t('reject')
      }],
      r_educ_fields: [{
        key: 'university',
        label: 'University',
        sortable: true
      }, {
        key: 'degree',
        label: 'Degree',
        sortable: true
      }, {
        key: 'speciality',
        label: 'Speciality',
        sortable: true
      }, {
        key: 'acceptStatus',
        label: 'Status',
        sortable: false
      }, {
        key: 'action_download',
        label: 'Download'
      }, {
        key: 'action_accept',
        label: this.$t('accept')
      }, {
        key: 'action_reject',
        label: this.$t('reject')
      }],
      r_cert_fields: [{
        key: 'certName',
        label: 'Certificate Name',
        sortable: true
      }, {
        key: 'description',
        label: 'Description',
        sortable: true
      }, {
        key: 'issuedby',
        label: 'Issued By',
        sortable: true
      }, {
        key: 'startYear',
        label: 'Start Year',
        sortable: false
      }, {
        key: 'endYear',
        label: 'End Year',
        sortable: false
      }, {
        key: 'acceptStatus',
        label: 'Status',
        sortable: false
      }, {
        key: 'action_download',
        label: 'Download'
      }, {
        key: 'action_accept',
        label: this.$t('accept')
      }, {
        key: 'action_reject',
        label: this.$t('reject')
      }],
      r_transcript_fields: [{
        key: 'createdAt',
        label: 'CreatedAt'
      }, {
        key: 'updatedAt',
        label: 'UpdatedAt'
      }, {
        key: 'action_download',
        label: 'Download'
      }, {
        key: 'acceptStatus',
        label: 'Status',
        sortable: false
      }, {
        key: 'action_accept',
        label: this.$t('accept')
      }, {
        key: 'action_reject',
        label: this.$t('reject')
      }],
      t_fields: [{
        key: 'email',
        label: 'Email/User',
        sortable: true
      }, {
        key: 'name',
        label: 'Name',
        sortable: true
      }, {
        key: 'lastName',
        label: 'Last Name',
        sortable: true
      }, {
        key: 'state',
        label: 'Status',
        sortable: false
      }, {
        key: 'econfirmed',
        label: 'Email Confirmed',
        sortable: false
      }, {
        key: 'view',
        label: 'Action',
        sortable: false
      }],
      t_items: [],
      overlay_show: false,
      certItems: [],
      transcriptItem: [],
      eduItems: [],
      lessonItems: [],
      reviewItem: null,
      certVisible: true,
      lessonVisible: true,
      educVisible: true,
      cert_icon: false,
      userCount: 0,
      searchData: {
        pageIndex: 1,
        count: 0,
        perPage: 10,
        email: "",
        name: "",
        lastname: ""
      }
    };
  },
  mounted() {
    this.checkPermission();
    this.show();
  },
  methods: {
    checkPermission() {
      this.$axios.post("permisson/hasPermission", {
        permission: "admin"
      }).then(res => {
        if (res.data.permission === false) {
          this.$router.push('/');
        }
      }).catch(err => {
        this.$router.push('/');
      });
    },
    makeToast(variant = 'success', header = 'Message', msg = '') {
      this.$bvToast.toast(this.$t(msg), {
        title: header,
        variant: variant,
        solid: true
      });
    },
    show(index) {
      if (index > 0) this.searchData.pageIndex = index;else this.searchData.pageIndex = 0;
      this.overlay_show = true;
      this.$axios.post('/users/changes', this.searchData).then(res => {
        this.t_items = res.data.rows;
        this.searchData.count = res.data.count;
        this.overlay_show = false;
      }).catch(error => {
        this.overlay_show = false;
        this.makeToast("danger", "Error", "search_error");
        console.log(error);
      });
    },
    showEditModal(item) {
      this.userId = item.item.id;
      this.certItems = item.item.certItems;
      this.transcriptItem = item.item.transcriptItem;
      this.eduItems = item.item.eduItems;
      this.reviewItem = item.item;
      this.lessonItems = item.item.lessonItems;
      this.reviewMode = true;
    },
    accept(type, id) {
      this.$bvModal.msgBoxConfirm(this.$t('accept_confim'), {
        title: 'Please Confirm',
        size: 'sm',
        buttonSize: 'sm',
        okVariant: 'danger',
        okTitle: 'YES',
        cancelTitle: 'NO',
        headerClass: 'p-2 border-bottom-0',
        footerClass: 'p-2 border-top-0',
        hideHeaderClose: false,
        centered: true
      }).then(value => {
        if (value) {
          const ACCEPTED = 1;
          let changeStatus = {
            type: type,
            id: id,
            status: ACCEPTED,
            userId: this.userId
          };
          this.$axios.post('/users/changeStatus', changeStatus).then(res => {
            if (res.data === "success") {
              if (type === "cert") {
                this.certItems.forEach(function (item, index, object) {
                  if (item.id === id) item.acceptStatus = 1;
                  //object.splice(index, 1);
                });
              }

              if (type === "educ") {
                this.eduItems.forEach(function (item, index, object) {
                  if (item.id === id) item.acceptStatus = 1;
                });
              }
              if (type === "lesson") {
                this.lessonItems.forEach(function (item, index, object) {
                  if (item.id === id) item.acceptStatus = 1;
                });
              }
              if (type === "user") {
                this.reviewItem.acceptStatus = 1;
              }
              if (type === "transcript") {
                this.transcriptItem.acceptStatus = 1;
              }
            }
          }).catch(error => {
            this.overlay_show = false;
            this.makeToast("danger", "Error", "search_error");
            console.log(error);
          });
        }
      }).catch(err => {
        // An error occurred
      });
    },
    reject(type, id) {
      const REJECT = 2;
      this.$bvModal.msgBoxConfirm(this.$t('accept_confim'), {
        title: 'Please Confirm',
        size: 'sm',
        buttonSize: 'sm',
        okVariant: 'danger',
        okTitle: 'YES',
        cancelTitle: 'NO',
        headerClass: 'p-2 border-bottom-0',
        footerClass: 'p-2 border-top-0',
        hideHeaderClose: false,
        centered: true
      }).then(value => {
        if (value) {
          const ACCEPTED = 1;
          let changeStatus = {
            type: type,
            id: id,
            status: REJECT,
            userId: this.userId
          };
          this.$axios.post('/users/changeStatus', changeStatus).then(res => {
            if (res.data === "success") {
              if (type === "cert") {
                this.certItems.forEach(function (item, index, object) {
                  if (item.id === id) item.acceptStatus = 2;
                });
              }
              if (type === "educ") {
                this.eduItems.forEach(function (item, index, object) {
                  if (item.id === id) item.acceptStatus = 2;
                });
              }
              if (type === "lesson") {
                this.lessonItems.forEach(function (item, index, object) {
                  if (item.id === id) item.acceptStatus = 2;
                });
              }
            }
          }).catch(error => {
            this.overlay_show = false;
            this.makeToast("danger", "Error", "search_error");
            console.log(error);
          });
        }
      }).catch(err => {
        // An error occurred
      });
    },
    sendMessage(msg) {},
    downloadFile(rowId) {
      try {
        var c = {
          responseType: 'blob'
        };
        this.$axios.get(`/download/${rowId}`, c).then(response => {
          console.log(response);
          var fileURL = window.URL.createObjectURL(new Blob([response.data], {
            type: 'application/file'
          }));
          var fileLink = document.createElement('a');
          var filename = response.headers['filename'];
          fileLink.href = fileURL;
          fileLink.setAttribute('download', filename);
          document.body.appendChild(fileLink);
          fileLink.click();
        });
      } catch (e) {
        console.log(e);
      }
    },
    backBtn() {
      this.$nuxt.$emit('initAdmin');
      this.reviewMode = false;
    }
  }
});
// CONCATENATED MODULE: ./pages/admin/user-change.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_user_changevue_type_script_lang_js_ = (user_changevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./pages/admin/user-change.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_user_changevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "094167e2",
  "2b3d2656"
  
)

/* harmony default export */ var user_change = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=user-change.js.map
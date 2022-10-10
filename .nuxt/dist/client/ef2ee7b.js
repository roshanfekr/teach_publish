(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{623:function(t,e,n){"use strict";n.r(e);n(2),n(19),n(34),n(44),n(256);var r={layout:"AdminTemplate",name:"user-change",data:function(){return{thisp:this,userId:0,reviewMode:!1,visible:!0,r_lesson_fields:[{key:"subject",label:"Subject",sortable:!0},{key:"description",label:"Description",sortable:!0},{key:"acceptStatus",label:"Status",sortable:!1},{key:"action_download",label:"Download"},{key:"action_accept",label:this.$t("accept")},{key:"action_reject",label:this.$t("reject")}],r_educ_fields:[{key:"university",label:"University",sortable:!0},{key:"degree",label:"Degree",sortable:!0},{key:"speciality",label:"Speciality",sortable:!0},{key:"acceptStatus",label:"Status",sortable:!1},{key:"action_download",label:"Download"},{key:"action_accept",label:this.$t("accept")},{key:"action_reject",label:this.$t("reject")}],r_cert_fields:[{key:"certName",label:"Certificate Name",sortable:!0},{key:"description",label:"Description",sortable:!0},{key:"issuedby",label:"Issued By",sortable:!0},{key:"startYear",label:"Start Year",sortable:!1},{key:"endYear",label:"End Year",sortable:!1},{key:"acceptStatus",label:"Status",sortable:!1},{key:"action_download",label:"Download"},{key:"action_accept",label:this.$t("accept")},{key:"action_reject",label:this.$t("reject")}],r_transcript_fields:[{key:"createdAt",label:"CreatedAt"},{key:"updatedAt",label:"UpdatedAt"},{key:"action_download",label:"Download"},{key:"acceptStatus",label:"Status",sortable:!1},{key:"action_accept",label:this.$t("accept")},{key:"action_reject",label:this.$t("reject")}],t_fields:[{key:"email",label:"Email/User",sortable:!0},{key:"name",label:"Name",sortable:!0},{key:"lastName",label:"Last Name",sortable:!0},{key:"state",label:"Status",sortable:!1},{key:"econfirmed",label:"Email Confirmed",sortable:!1},{key:"view",label:"Action",sortable:!1}],t_items:[],overlay_show:!1,certItems:[],transcriptItem:[],eduItems:[],lessonItems:[],reviewItem:null,certVisible:!0,lessonVisible:!0,educVisible:!0,cert_icon:!1,userCount:0,searchData:{pageIndex:1,count:0,perPage:10,email:"",name:"",lastname:""}}},mounted:function(){this.checkPermission(),this.show()},methods:{checkPermission:function(){var t=this;this.$axios.post("permisson/hasPermission",{permission:"admin"}).then((function(e){!1===e.data.permission&&t.$router.push("/")})).catch((function(e){t.$router.push("/")}))},makeToast:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"success",header=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Message",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";this.$bvToast.toast(this.$t(e),{title:header,variant:t,solid:!0})},show:function(t){var e=this;this.searchData.pageIndex=t>0?t:0,this.overlay_show=!0,this.$axios.post("/users/changes",this.searchData).then((function(t){e.t_items=t.data.rows,e.searchData.count=t.data.count,e.overlay_show=!1})).catch((function(t){e.overlay_show=!1,e.makeToast("danger","Error","search_error"),console.log(t)}))},showEditModal:function(t){this.userId=t.item.id,this.certItems=t.item.certItems,this.transcriptItem=t.item.transcriptItem,this.eduItems=t.item.eduItems,this.reviewItem=t.item,this.lessonItems=t.item.lessonItems,this.reviewMode=!0},accept:function(t,e){var n=this;this.$bvModal.msgBoxConfirm(this.$t("accept_confim"),{title:"Please Confirm",size:"sm",buttonSize:"sm",okVariant:"danger",okTitle:"YES",cancelTitle:"NO",headerClass:"p-2 border-bottom-0",footerClass:"p-2 border-top-0",hideHeaderClose:!1,centered:!0}).then((function(r){if(r){var c={type:t,id:e,status:1,userId:n.userId};n.$axios.post("/users/changeStatus",c).then((function(r){"success"===r.data&&("cert"===t&&n.certItems.forEach((function(t,n,object){t.id===e&&(t.acceptStatus=1)})),"educ"===t&&n.eduItems.forEach((function(t,n,object){t.id===e&&(t.acceptStatus=1)})),"lesson"===t&&n.lessonItems.forEach((function(t,n,object){t.id===e&&(t.acceptStatus=1)})),"user"===t&&(n.reviewItem.acceptStatus=1),"transcript"===t&&(n.transcriptItem.acceptStatus=1))})).catch((function(t){n.overlay_show=!1,n.makeToast("danger","Error","search_error"),console.log(t)}))}})).catch((function(t){}))},reject:function(t,e){var n=this;this.$bvModal.msgBoxConfirm(this.$t("accept_confim"),{title:"Please Confirm",size:"sm",buttonSize:"sm",okVariant:"danger",okTitle:"YES",cancelTitle:"NO",headerClass:"p-2 border-bottom-0",footerClass:"p-2 border-top-0",hideHeaderClose:!1,centered:!0}).then((function(r){if(r){var c={type:t,id:e,status:2,userId:n.userId};n.$axios.post("/users/changeStatus",c).then((function(r){"success"===r.data&&("cert"===t&&n.certItems.forEach((function(t,n,object){t.id===e&&(t.acceptStatus=2)})),"educ"===t&&n.eduItems.forEach((function(t,n,object){t.id===e&&(t.acceptStatus=2)})),"lesson"===t&&n.lessonItems.forEach((function(t,n,object){t.id===e&&(t.acceptStatus=2)})))})).catch((function(t){n.overlay_show=!1,n.makeToast("danger","Error","search_error"),console.log(t)}))}})).catch((function(t){}))},sendMessage:function(t){},downloadFile:function(t){try{this.$axios.get("/download/".concat(t),{responseType:"blob"}).then((function(t){console.log(t);var e=window.URL.createObjectURL(new Blob([t.data],{type:"application/file"})),n=document.createElement("a"),r=t.headers.filename;n.href=e,n.setAttribute("download",r),document.body.appendChild(n),n.click()}))}catch(t){console.log(t)}},backBtn:function(){this.$nuxt.$emit("initAdmin"),this.reviewMode=!1}}},c=r,l=n(74),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{attrs:{fluid:""}},[n("b-row",{staticClass:"mx-0 bg-info"},[n("b-col",{staticClass:"float-left"},[n("h3",[t._v(" "+t._s(this.$t("user_change"))+" ")])]),t._v(" "),n("b-col",[t.reviewMode?n("b-button",{staticClass:"float-right",on:{click:t.backBtn}},[n("svg",{staticClass:"bi bi-arrow-counterclockwise",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"}}),t._v(" "),n("path",{attrs:{d:"M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"}})]),t._v(" "+t._s(t.$t("back"))+"\n      ")]):t._e()],1)],1),t._v(" "),t.reviewMode?t._e():n("b-row",{staticClass:"mt-1"},[n("b-row",{staticClass:"row ml-3 mr-3 p-2 w-100"}),t._v(" "),n("b-row",{staticClass:"d-md-flex col-md-12 col-lg-12 m-center mt-3"},[n("b-col",[n("b-pagination",{attrs:{"total-rows":t.searchData.count,"per-page":t.searchData.perPage,"first-text":"First","prev-text":"Prev","next-text":"Next","last-text":"Last"},on:{change:t.show},model:{value:t.searchData.pageIndex,callback:function(e){t.$set(t.searchData,"pageIndex",e)},expression:"searchData.pageIndex"}})],1)],1),t._v(" "),n("b-row",{staticClass:"d-md-flex col-md-12 col-lg-12 m-center mt-1"},[n("b-col",[n("b-overlay",{attrs:{show:t.overlay_show,"no-wrap":""}}),t._v(" "),n("b-table",{attrs:{"head-variant":"light",striped:"",hover:"",small:"",items:t.t_items,fields:t.t_fields},scopedSlots:t._u([{key:"cell(email)",fn:function(e){return[t._v("\n            "+t._s(e.item.email)+"\n            "),1===e.item.changed?n("b-badge",{attrs:{pill:"",variant:"success"}},[t._v("\n             Changed\n            ")]):t._e()]}},{key:"cell(state)",fn:function(e){return[-1===e.item.acceptStatus?n("b-badge",{attrs:{pill:"",variant:"danger"}},[t._v("\n              "+t._s(t.$t("Disable"))+"\n            ")]):t._e(),t._v(" "),0===e.item.acceptStatus||null===e.item.acceptStatus?n("b-badge",{attrs:{pill:"",variant:"warning"}},[t._v("\n              "+t._s(t.$t("Pending"))+"\n            ")]):t._e(),t._v(" "),1===e.item.acceptStatus?n("b-badge",{attrs:{pill:"",variant:"success"}},[t._v("\n              "+t._s(t.$t("Accepted"))+"\n            ")]):t._e()]}},{key:"cell(econfirmed)",fn:function(e){return[1===e.item.emailConfirmed?n("b-badge",{attrs:{pill:"",variant:"success"}},[t._v(t._s(t.$t("Confirmed")))]):t._e(),t._v(" "),0===e.item.emailConfirmed||null===e.item.emailConfirmed?n("b-badge",{attrs:{pill:"",variant:"warning"}},[t._v(t._s(t.$t("Not Confirmed")))]):t._e()]}},{key:"cell(view)",fn:function(e){return[n("b-button",{ref:"btnEdit"+e.index,staticClass:"w-50",attrs:{variant:"info",size:"sm"},on:{click:function(n){return t.showEditModal(e)}}},[n("svg",{staticClass:"bi bi-pencil",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[n("path",{attrs:{d:"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"}})]),t._v("\n                Edit")])]}}],null,!1,1459046391)})],1)],1)],1),t._v(" "),!t.reviewMode||0!==t.reviewItem.acceptStatus&&null!==t.reviewItem.acceptStatus?t._e():n("b-row",{staticClass:"pt-3 mt-3 paper  panel panel-default d-md-flex col-md-12 col-lg-12 m-center mt-1",staticStyle:{"box-shadow":"0 1px 15px 1px rgb(0 0 20%)"},attrs:{id:"review_panel_master"}},[n("b-card",{staticClass:"text-center mb-1 w-100 ",attrs:{"border-variant":"secondary",header:this.$t("User Information"),"header-border-variant":"secondary","no-body":""}},[n("b-collapse",{attrs:{id:"certCollapse",visible:"",accordion:"certCollapse",role:"tabpanel"}},[n("b-row",{staticClass:"d-md-flex col-md-12 col-lg-12 m-center mt-1",attrs:{id:"review_panel_master_2"}},[n("b-col",{staticClass:"w-50 text-left"},[n("p",[n("b-avatar",{attrs:{size:"7rem",src:null!=t.reviewItem.path?"/"+t.reviewItem.path:"",alt:"Cropped Image"}})],1),t._v(" "),n("p",[t._v(t._s(this.$t("email"))+" :\n              "),n("span",{staticClass:" font-weight-bold"},[t._v(t._s(t.reviewItem.email))])]),t._v(" "),n("p",[t._v(t._s(this.$t("fName"))+" :\n              "),n("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.reviewItem.name))])]),t._v(" "),n("p",[t._v(t._s(this.$t("lName"))+" :\n              "),n("span",{staticClass:" font-weight-bold"},[t._v(t._s(t.reviewItem.lastName))])]),t._v(" "),n("p",[t._v(t._s(this.$t("bioMore"))+" :\n              "),n("span",{staticClass:" font-weight-bold"},[t._v(t._s(t.reviewItem.bioMore))])]),t._v(" "),n("p",[t._v(t._s(this.$t("headline"))+" :\n              "),n("span",{staticClass:" text-bold"},[t._v(t._s(t.reviewItem.headLine))])]),t._v(" "),n("p",[t._v(t._s(this.$t("CreatedAt"))+" :\n              "),n("span",{staticClass:" font-weight-bold"},[t._v(t._s(t.reviewItem.createdAt))])]),t._v(" "),n("p",[t._v(t._s(this.$t("UpdatedAt"))+" :\n              "),n("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.reviewItem.updatedAt))])]),t._v(" "),t.reviewItem.transcript_fileId>0?n("b-button",{ref:"btnDownloadTranscript"+t.reviewItem.id,staticClass:"w-100",attrs:{variant:"info",size:"sm"},on:{click:function(e){return t.downloadFile(t.reviewItem.transcript_fileId)}}},[t._v("Download Transcript")]):t._e(),t._v(" "),n("p",[n("b-button",{staticClass:"w-20",attrs:{variant:"info",size:"sm"},on:{click:function(e){return t.accept("user",t.reviewItem.id)}}},[t._v("Accept")])],1)],1)],1)],1)],1)],1),t._v(" "),t.reviewMode&&t.transcriptItem.length>0?n("b-row",{staticClass:"pt-3 mt-3 paper  panel panel-default d-md-flex col-md-12 col-lg-12 m-center mt-1",staticStyle:{"box-shadow":"0 1px 15px 1px rgb(0 0 20%)"},attrs:{id:"review_panel1"}},[n("b-card",{staticClass:"text-center mb-1 w-100 ",attrs:{"border-variant":"secondary",header:this.$t("transcript.title"),"header-border-variant":"secondary","no-body":""}},[n("b-collapse",{attrs:{id:"certCollapse",visible:"",accordion:"certCollapse",role:"tabpanel"},model:{value:t.certVisible,callback:function(e){t.certVisible=e},expression:"certVisible"}},[n("b-row",{staticClass:"d-md-flex col-md-12 col-lg-12 m-center mt-1",attrs:{id:"review_panel_transcript"}},[n("b-col",{staticClass:"w-100"},[n("b-table",{attrs:{"head-variant":"light",striped:"",hover:"",small:"",items:t.transcriptItem,fields:t.r_transcript_fields},scopedSlots:t._u([{key:"cell(acceptStatus)",fn:function(e){return[0===e.item.acceptStatus||null===e.item.acceptStatus?n("b-badge",{attrs:{variant:"warning"}},[t._v(" "+t._s(t.$t("Pending")))]):t._e(),t._v(" "),1===e.item.acceptStatus?n("b-badge",{attrs:{variant:"success"}},[t._v(" "+t._s(t.$t("Accepted")))]):t._e(),t._v(" "),2===e.item.acceptStatus?n("b-badge",{attrs:{variant:"danger"}},[t._v(" "+t._s(t.$t("Rejected")))]):t._e()]}},{key:"cell(action_download)",fn:function(e){return[n("b-button",{ref:"btnEdit"+e.index,staticClass:"w-100",attrs:{variant:"info",size:"sm"},on:{click:function(n){return t.downloadFile(e.item.fileId)}}},[t._v("\n                  Download")])]}},{key:"cell(action_accept)",fn:function(e){return[n("b-button",{ref:"btnEdit"+e.index,staticClass:"w-100",attrs:{variant:"info",size:"sm"},on:{click:function(n){return t.accept("transcript",e.item.userId)}}},[t._v("\n                  Accept")])]}},{key:"cell(action_reject)",fn:function(e){return[n("b-button",{ref:"btnEdit"+e.index,staticClass:"w-100",attrs:{variant:"info",size:"sm"},on:{click:function(n){return t.reject("transcript",e.item.userId)}}},[t._v("\n                  Reject")])]}}],null,!1,1070202415)})],1)],1)],1)],1)],1):t._e(),t._v(" "),t.reviewMode&&t.certItems.length>0?n("b-row",{staticClass:"pt-3 mt-3 paper  panel panel-default d-md-flex col-md-12 col-lg-12 m-center mt-1",staticStyle:{"box-shadow":"0 1px 15px 1px rgb(0 0 20%)"},attrs:{id:"review_panel1"}},[n("b-card",{staticClass:"text-center mb-1 w-100 ",attrs:{"border-variant":"secondary",header:this.$t("certificate.title"),"header-border-variant":"secondary","no-body":""}},[n("b-collapse",{attrs:{id:"certCollapse",visible:"",accordion:"certCollapse",role:"tabpanel"},model:{value:t.certVisible,callback:function(e){t.certVisible=e},expression:"certVisible"}},[n("b-row",{staticClass:"d-md-flex col-md-12 col-lg-12 m-center mt-1",attrs:{id:"review_panel_cert"}},[n("b-col",{staticClass:"w-100"},[n("b-table",{attrs:{"head-variant":"light",striped:"",hover:"",small:"",items:t.certItems,fields:t.r_cert_fields},scopedSlots:t._u([{key:"cell(description)",fn:function(e){return[n("p",{staticClass:"float-left"},[t._v("\n                    "+t._s(e.item.description.substr(1,20))+"\n                    ")]),e.item.description.length>20?n("p",{staticClass:"float-left ml-1",staticStyle:{cursor:"pointer"}},[t._v("\n                      ...\n                      "),n("svg",{staticClass:"bi bi-eye-fill",attrs:{id:"tooltip-description"+e.item.id,xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[n("path",{attrs:{d:"M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"}}),t._v(" "),n("path",{attrs:{d:"M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"}})]),t._v(" "),n("b-tooltip",{attrs:{target:"tooltip-description"+e.item.id}},[t._v("\n                        "+t._s(e.item.description)+"\n                      ")])],1):t._e(),t._v(" "),n("p")]}},{key:"cell(acceptStatus)",fn:function(e){return[0===e.item.acceptStatus||null===e.item.acceptStatus?n("b-badge",{attrs:{variant:"warning"}},[t._v(" "+t._s(t.$t("Pending")))]):t._e(),t._v(" "),1===e.item.acceptStatus?n("b-badge",{attrs:{variant:"success"}},[t._v(" "+t._s(t.$t("Accepted")))]):t._e(),t._v(" "),2===e.item.acceptStatus?n("b-badge",{attrs:{variant:"danger"}},[t._v(" "+t._s(t.$t("Rejected")))]):t._e()]}},{key:"cell(action_download)",fn:function(e){return[n("b-button",{ref:"btnEdit"+e.index,staticClass:"w-100",attrs:{variant:"info",size:"sm"},on:{click:function(n){return t.downloadFile(e.item.id)}}},[t._v("\n                    Download")])]}},{key:"cell(action_accept)",fn:function(e){return[n("b-button",{ref:"btnEdit"+e.index,staticClass:"w-100",attrs:{variant:"info",size:"sm"},on:{click:function(n){return t.accept("cert",e.item.id)}}},[t._v("\n                    Accept")])]}},{key:"cell(action_reject)",fn:function(e){return[n("b-button",{ref:"btnEdit"+e.index,staticClass:"w-100",attrs:{variant:"info",size:"sm"},on:{click:function(n){return t.reject("cert",e.item.id)}}},[t._v("\n                    Reject")])]}}],null,!1,3508885488)})],1)],1)],1)],1)],1):t._e(),t._v(" "),t.reviewMode&&t.eduItems.length>0?n("b-row",{staticClass:"pt-3 mt-3 paper  panel panel-default d-md-flex col-md-12 col-lg-12 m-center mt-1",staticStyle:{"box-shadow":"0 1px 15px 1px rgb(0 0 20%)"},attrs:{id:"review_panel2"}},[n("b-card",{staticClass:"text-center mb-1 w-100 ",attrs:{"border-variant":"secondary",header:this.$t("education"),"header-border-variant":"secondary","no-body":""}},[n("b-row",{staticClass:"d-md-flex col-md-12 col-lg-12 m-center mt-1",attrs:{id:"review_panel_educ"}},[n("b-col",{staticClass:"w-100"},[n("b-table",{attrs:{"head-variant":"light",striped:"",hover:"",small:"",items:t.eduItems,fields:t.r_educ_fields},scopedSlots:t._u([{key:"cell(acceptStatus)",fn:function(e){return[0===e.item.acceptStatus?n("b-badge",{attrs:{variant:"warning"}},[t._v(" "+t._s(t.$t("Pending")))]):t._e(),t._v(" "),1===e.item.acceptStatus?n("b-badge",{attrs:{variant:"success"}},[t._v(" "+t._s(t.$t("Accepted")))]):t._e(),t._v(" "),2===e.item.acceptStatus?n("b-badge",{attrs:{variant:"danger"}},[t._v(" "+t._s(t.$t("Rejected")))]):t._e()]}},{key:"cell(action_download)",fn:function(e){return[n("b-button",{ref:"btnEdit_educ"+e.index,staticClass:"w-100",attrs:{variant:"info",size:"sm"},on:{click:function(n){return t.downloadFile(e.item.id)}}},[t._v("\n                  Download")])]}},{key:"cell(action_accept)",fn:function(e){return[n("b-button",{ref:"btnEdit_educ"+e.index,staticClass:"w-100",attrs:{variant:"info",size:"sm"},on:{click:function(n){return t.accept("educ",e.item.id)}}},[t._v("\n                  Accept")])]}},{key:"cell(action_reject)",fn:function(e){return[n("b-button",{ref:"btnEdit_educ"+e.index,staticClass:"w-100",attrs:{variant:"info",size:"sm"},on:{click:function(n){return t.reject("educ",e.item.id)}}},[t._v("\n                  Reject")])]}}],null,!1,2381944268)})],1)],1)],1)],1):t._e(),t._v(" "),t.reviewMode&&t.lessonItems.length>0?n("b-row",{staticClass:"pt-3 mt-3 paper  panel panel-default d-md-flex col-md-12 col-lg-12 m-center mt-1",staticStyle:{"box-shadow":"0 1px 15px 1px rgb(0 0 20%)"},attrs:{id:"review_panel3"}},[n("b-card",{staticClass:"text-center mb-1 w-100 ",attrs:{"border-variant":"secondary",header:this.$t("Lessons"),"header-border-variant":"secondary","no-body":""}},[n("b-row",{staticClass:"d-md-flex col-md-12 col-lg-12 m-center mt-1",attrs:{id:"review_panel_lesson"}},[n("b-col",{staticClass:"w-100"},[n("b-table",{attrs:{"head-variant":"light",striped:"",hover:"",small:"",items:t.lessonItems,fields:t.r_lesson_fields},scopedSlots:t._u([{key:"cell(acceptStatus)",fn:function(e){return[0===e.item.acceptStatus?n("b-badge",{attrs:{variant:"warning"}},[t._v(" "+t._s(t.$t("Pending")))]):t._e(),t._v(" "),1===e.item.acceptStatus?n("b-badge",{attrs:{variant:"success"}},[t._v(" "+t._s(t.$t("Accepted")))]):t._e(),t._v(" "),2===e.item.acceptStatus?n("b-badge",{attrs:{variant:"danger"}},[t._v(" "+t._s(t.$t("Rejected")))]):t._e()]}},{key:"cell(action_download)",fn:function(e){return[n("b-button",{ref:"btnEdit_lesson"+e.index,staticClass:"w-100",attrs:{variant:"info",size:"sm"},on:{click:function(n){return t.downloadFile(e.item.id)}}},[t._v("\n                Download")])]}},{key:"cell(action_accept)",fn:function(e){return[n("b-button",{ref:"btnEdit_lesson"+e.index,staticClass:"w-100",attrs:{variant:"info",size:"sm"},on:{click:function(n){return t.accept("lesson",e.item.id)}}},[t._v("\n                Accept")])]}},{key:"cell(action_reject)",fn:function(e){return[n("b-button",{ref:"btnEdit_lesson"+e.index,staticClass:"w-100",attrs:{variant:"info",size:"sm"},on:{click:function(n){return t.reject("lesson",e.item.id)}}},[t._v("\n                Reject")])]}}],null,!1,3435035443)})],1)],1)],1)],1):t._e()],1)}),[],!1,null,"094167e2",null);e.default=component.exports}}]);
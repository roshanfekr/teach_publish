(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{639:function(t,e,l){"use strict";var n=l(10),o=l(97).findIndex,r=l(125),d="findIndex",c=!0;d in[]&&Array(1)[d]((function(){c=!1})),n({target:"Array",proto:!0,forced:c},{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),r(d)},704:function(t,e,l){"use strict";l.r(e);l(2),l(1),l(639);var n={layout:"AdminTemplate",name:"users",data:function(){return{items:[],fields:[{key:"index",label:"index",sortable:!1,thStyle:{width:"80px"}},{key:"key",label:"Key",sortable:!0},{key:"value",label:"Value",sortable:!0},{key:"actions",label:"Actions",sortable:!1,thStyle:{width:"100px"}}],filter:null,filterOn:[],infoModal:{title:"",id:"",key:"",value:""}}},mounted:function(){this.readFiles(),this.getAll()},methods:{info:function(t,e,button){this.infoModal.title="Row index: ".concat(e+1),this.infoModal.id=t.id,this.infoModal.key=t.key,this.infoModal.value=t.value,this.$root.$emit("bv::show::modal","lang-modal",button)},resetInfoModal:function(){this.infoModal.id=0,this.infoModal.title="",this.infoModal.key="",this.infoModal.value=""},saveLanguage:function(){var t=this;this.$axios.post("language/saveLanguage",this.infoModal).then((function(e){var l=t.items.findIndex((function(t){return t.id===e.data.id}));t.$set(t.items,l,e.data),console.log(e.data)})).catch((function(t){}))},onFiltered:function(t){this.totalRows=t.length,this.currentPage=1},saveAndReload:function(){this.$axios.post("language/saveAndReload").then((function(t){console.log(t.data)})).catch((function(t){}))},getAll:function(){var t=this;this.$axios.post("language/getAll").then((function(e){console.log(e.data),t.items=e.data})).catch((function(t){}))},readFiles:function(){this.$axios.post("language/readFiles").then((function(t){console.log(t.data)})).catch((function(t){}))}}},o=l(80),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-100"},[e("b-container",{attrs:{fluid:""}},[e("b-row",[e("b-col",{staticClass:"my-1",attrs:{lg:"4"}},[e("b-form-group",{staticClass:"mb-0",attrs:{label:"Filter","label-for":"filter-input","label-cols-sm":"3","label-align-sm":"right","label-size":"sm"}},[e("b-input-group",{attrs:{size:"sm"}},[e("b-form-input",{attrs:{id:"filter-input",type:"search",placeholder:"Type to Search"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}}),t._v(" "),e("b-input-group-append",[e("b-button",{attrs:{disabled:!t.filter},on:{click:function(e){t.filter=""}}},[t._v("Clear")])],1)],1)],1)],1),t._v(" "),e("b-col",{staticClass:"my-1",attrs:{lg:"4"}},[e("b-form-group",{staticClass:"mb-0",attrs:{label:"Filter On",description:"Leave all unchecked to filter on all data","label-cols-sm":"3","label-align-sm":"right","label-size":"sm"},scopedSlots:t._u([{key:"default",fn:function(l){var n=l.ariaDescribedby;return[e("b-form-checkbox-group",{staticClass:"mt-1",attrs:{"aria-describedby":n},model:{value:t.filterOn,callback:function(e){t.filterOn=e},expression:"filterOn"}},[e("b-form-checkbox",{attrs:{value:"key"}},[t._v("Key")]),t._v(" "),e("b-form-checkbox",{attrs:{value:"value"}},[t._v("Value")])],1)]}}])})],1),t._v(" "),e("b-col",{staticClass:"my-1",attrs:{lg:"4"}},[e("b-button",{attrs:{size:"sm"},on:{click:t.saveAndReload}},[t._v("Reload language Now")])],1)],1),t._v(" "),e("b-table",{attrs:{items:t.items,fields:t.fields,filter:t.filter,"filter-included-fields":t.filterOn,stacked:"md","show-empty":"",small:""},on:{filtered:t.onFiltered},scopedSlots:t._u([{key:"cell(index)",fn:function(e){return[t._v("\n        "+t._s(e.index+1)+"\n      ")]}},{key:"cell(name)",fn:function(e){return[t._v("\n        "+t._s(e.value.first)+" "+t._s(e.value.last)+"\n      ")]}},{key:"cell(actions)",fn:function(l){return[e("b-button",{staticClass:"mr-1",attrs:{size:"sm"},on:{click:function(e){return t.info(l.item,l.index,e.target)}}},[t._v("\n          Edit\n        ")])]}}])}),t._v(" "),e("b-modal",{attrs:{id:"lang-modal",centered:"",title:t.infoModal.title,"ok-title":"Save"},on:{ok:t.saveLanguage,hide:t.resetInfoModal}},[e("b-form-group",{attrs:{id:"input-g-key",label:"Key","label-for":"input-key"}},[e("b-form-input",{staticClass:"w-100",attrs:{disabled:"",id:"input-value"},model:{value:t.infoModal.key,callback:function(e){t.$set(t.infoModal,"key",e)},expression:"infoModal.key"}})],1),t._v(" "),e("b-form-group",{attrs:{id:"input-g-value",label:"Value","label-for":"input-value"}},[e("b-form-textarea",{staticClass:"w-100",attrs:{id:"input-value"},model:{value:t.infoModal.value,callback:function(e){t.$set(t.infoModal,"value",e)},expression:"infoModal.value"}})],1)],1)],1)],1)}),[],!1,null,"008355ce",null);e.default=component.exports}}]);
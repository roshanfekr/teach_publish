(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{572:function(t,e,n){"use strict";n.r(e);var r=n(10),o=(n(49),n(79)),c={name:"Activation",components:{},data:function(){return{formData:{email:"",activeCode:""},response:{msg:"",variant:""},errors:null}},head:function(){return{title:"Activation",meta:[{name:"description",content:"Activation your account , email"},{name:"keywords",content:"active, account, email"}]}},mounted:function(){this.formData.activeCode=this.$route.query.code,this.formData.email=this.$route.query.email,this.checkActivation()},methods:{checkActivation:function(){var t=this,e=this;this.$axios.post("user/activation",this.formData).then(function(){var n=Object(r.a)(regeneratorRuntime.mark((function n(r){var c,d;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.response=r.data,"success"!==t.response.variant){n.next=9;break}return c=e.$auth.options.redirect,e.$auth.options.redirect=!1,n.next=6,e.$auth.setUserToken(r.data.token);case 6:d=Object(o.a)(r.data.token),e.$auth.setUser(d),e.$auth.options.rewriteRedirects=c;case 9:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()).catch((function(e){void 0!==e.response&&(t.response=e.response.data),console.log(e)}))}}},d=n(73),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-body-container-content"},[n("b-container",{staticClass:"container-padding"},[""===t.response.variant?n("div",{staticClass:"w-100 d-flex justify-content-center mb-3"},[n("b-spinner",{staticStyle:{width:"3rem",height:"3rem"},attrs:{variant:"danger",type:"grow",label:"Loading..."}})],1):n("b-row",{staticClass:"d-md-flex col-md-12 col-lg-10 m-center"},[n("b-alert",{staticClass:"w-100",attrs:{variant:t.response.variant,show:""}},[t._v(t._s(t.response.msg))])],1)],1)],1)}),[],!1,null,"62d5771e",null);e.default=component.exports}}]);
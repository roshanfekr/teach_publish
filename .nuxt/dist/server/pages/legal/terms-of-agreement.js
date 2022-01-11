exports.ids = [25];
exports.modules = {

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(224);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("7e227c51", content, true, context)
};

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_terms_of_agreement_vue_vue_type_style_index_0_id_00867ce6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(146);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_terms_of_agreement_vue_vue_type_style_index_0_id_00867ce6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_terms_of_agreement_vue_vue_type_style_index_0_id_00867ce6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_terms_of_agreement_vue_vue_type_style_index_0_id_00867ce6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_terms_of_agreement_vue_vue_type_style_index_0_id_00867ce6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "ol[data-v-00867ce6]{margin:0}ol[data-v-00867ce6],table td[data-v-00867ce6],table th[data-v-00867ce6]{padding:0}.c1[data-v-00867ce6]{font-weight:400}.c1[data-v-00867ce6],.c3[data-v-00867ce6]{color:#000;text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:\"Calibri\";font-style:normal}.c3[data-v-00867ce6]{font-weight:700}.c0[data-v-00867ce6]{padding-top:0;padding-bottom:8pt;line-height:1.0791666666666666;orphans:2;widows:2;text-align:left}.c6[data-v-00867ce6]{background-color:#fff;max-width:468pt;padding:72pt}.c4[data-v-00867ce6]{-webkit-text-decoration-skip-ink:none;text-decoration-skip-ink:none;-webkit-text-decoration-skip:none;text-decoration:underline}.c2[data-v-00867ce6]{height:11pt}.c5[data-v-00867ce6]{font-weight:700}.title[data-v-00867ce6]{padding-top:24pt;color:#000;font-weight:700;font-size:36pt;padding-bottom:6pt;font-family:\"Calibri\"}.subtitle[data-v-00867ce6],.title[data-v-00867ce6]{line-height:1.0791666666666666;page-break-after:avoid;orphans:2;widows:2;text-align:left}.subtitle[data-v-00867ce6]{padding-top:18pt;color:#666;font-size:24pt;padding-bottom:4pt;font-family:\"Georgia\";font-style:italic}li[data-v-00867ce6],p[data-v-00867ce6]{color:#000;font-size:11pt;font-family:\"Calibri\"}p[data-v-00867ce6]{margin:0}h1[data-v-00867ce6]{padding-top:24pt;color:#000;font-weight:700;font-size:24pt;padding-bottom:6pt;font-family:\"Calibri\";line-height:1.0791666666666666;page-break-after:avoid;orphans:2;widows:2;text-align:left}h2[data-v-00867ce6]{padding-top:18pt;font-size:18pt}h2[data-v-00867ce6],h3[data-v-00867ce6]{color:#000;font-weight:700;padding-bottom:4pt;font-family:\"Calibri\";line-height:1.0791666666666666;page-break-after:avoid;orphans:2;widows:2;text-align:left}h3[data-v-00867ce6]{padding-top:14pt;font-size:14pt}h4[data-v-00867ce6]{padding-top:12pt;font-size:12pt}h4[data-v-00867ce6],h5[data-v-00867ce6]{color:#000;font-weight:700;padding-bottom:2pt;font-family:\"Calibri\";line-height:1.0791666666666666;page-break-after:avoid;orphans:2;widows:2;text-align:left}h5[data-v-00867ce6]{padding-top:11pt;font-size:11pt}h6[data-v-00867ce6]{padding-top:10pt;color:#000;font-weight:700;font-size:10pt;padding-bottom:2pt;font-family:\"Calibri\";line-height:1.0791666666666666;page-break-after:avoid;orphans:2;widows:2;text-align:left}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/legal/terms-of-agreement.vue?vue&type=template&id=00867ce6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container-padding"},[_vm._ssrNode("<p style=\"margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:\\\"Calibri\\\",\\\"sans-serif\\\";\" data-v-00867ce6><strong data-v-00867ce6>Terms and Conditions</strong></p> <p style=\"margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:\\\"Calibri\\\",\\\"sans-serif\\\";\" data-v-00867ce6>Welcome to TuteLoop! By Using Our Site You Accept These Terms and Conditions.</p> <p style=\"margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:\\\"Calibri\\\",\\\"sans-serif\\\";\" data-v-00867ce6>Please read these Terms and Conditions carefully and ensure that you understand them before using our Services. These Terms and Conditions, together with any other documents referred to herein, set out the terms of use governing your use of our services, website (www.tuteloop.ca), applications, and tools (collectively, from here on, these will be referred to as ‘Services’). You may wish to print a copy of these Terms and Conditions for your future reference. By using or accessing any of the Services, you agree to comply with all the terms specified in this document. These Terms and Conditions were last updated in February 2022.</p> <p style=\"margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:\\\"Calibri\\\",\\\"sans-serif\\\";\" data-v-00867ce6><strong data-v-00867ce6>Your Account</strong></p> <p style=\"margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:\\\"Calibri\\\",\\\"sans-serif\\\";\" data-v-00867ce6>To access and use some of our services, you may be required to set up an account with the email address provided to you by your educational institution and a password of your choice (from here on , this set of information will be referred to as your ‘Account’). The email address you provide must belong to you, and it is solely your responsibility to protect the confidentiality of your password. Passwords are fully encrypted and are impossible to read by webmasters or staff for recovery purposes. You are also solely responsible for the activity that occurs under your account, therefore, you should register an account with a strong password that is hard to guess. You are not permitted to transfer your account to another party without our consent. Accounts should not be transferred under any circumstances. Any user should be able to register his/her own account. If you believe that the security of your account has been compromised or that your account has been misused, contact us immediately at support@tuteloop.ca.</p> <p style=\"margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:\\\"Calibri\\\",\\\"sans-serif\\\";\" data-v-00867ce6><strong data-v-00867ce6>Using the Services </strong></p> <p style=\"margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:\\\"Calibri\\\",\\\"sans-serif\\\";\" data-v-00867ce6>While using our service, you will not do any of the following:</p> <p style=\"margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:\\\"Calibri\\\",\\\"sans-serif\\\";text-indent:.5in;\" data-v-00867ce6>- Violate academic integrity         </p> <p style=\"margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:\\\"Calibri\\\",\\\"sans-serif\\\";\" data-v-00867ce6>                - Violate any provincial or federal laws</p> <p style=\"margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:\\\"Calibri\\\",\\\"sans-serif\\\";\" data-v-00867ce6>                - Lie of mislead </p> <p style=\"margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:\\\"Calibri\\\",\\\"sans-serif\\\";\" data-v-00867ce6>                - Infringe on the rights of third parties</p> <p style=\"margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:\\\"Calibri\\\",\\\"sans-serif\\\";\" data-v-00867ce6>                - Distribute or host spam or chain letters on your account</p> <p style=\"margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:\\\"Calibri\\\",\\\"sans-serif\\\";\" data-v-00867ce6>                - Distribute viruses or other technologies that may harm our Services</p> <p style=\"margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:\\\"Calibri\\\",\\\"sans-serif\\\";\" data-v-00867ce6>                - Distribute robots, scrapers or other automated means of collecting content or information from</p> <p style=\"margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:\\\"Calibri\\\",\\\"sans-serif\\\";\" data-v-00867ce6>                TuteLoop without our express written consent.</p> <div style=\"margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:\\\"Calibri\\\",\\\"sans-serif\\\";\" data-v-00867ce6><ul style=\"margin-bottom:0in;list-style-type: undefined;margin-left:0in;\" data-v-00867ce6><li style=\"margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:\\\"Calibri\\\",\\\"sans-serif\\\";\" data-v-00867ce6>Bypass methods used to restrict access to our services </li></ul></div> <p style=\"margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:\\\"Calibri\\\",\\\"sans-serif\\\";\" data-v-00867ce6><strong data-v-00867ce6>Abusing Services </strong></p> <p style=\"margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:\\\"Calibri\\\",\\\"sans-serif\\\";\" data-v-00867ce6>Please work with our team to keep tuteloop.ca an open, inclusive, and welcoming platform for all our users by reporting any problematic or offensive content to us directly at support@tuteloop.ca. We may limit or terminate our services for users who we feel are not acting in good faith or are creating problems for other users of our platform. Claims against potential unauthorized activities of certain users will be investigated carefully and may not be processed immediately. During such investigations, both parties' access to the website may be temporarily restricted to some extent until the facts become clear. With that said, we do not accept any liability for monitoring tuteloop.ca or for any authorized or unlawful content on TuteLoop.ca.</p> <p style=\"margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:\\\"Calibri\\\",\\\"sans-serif\\\";\" data-v-00867ce6><strong data-v-00867ce6>Global Marketplace </strong></p> <p style=\"margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:\\\"Calibri\\\",\\\"sans-serif\\\";\" data-v-00867ce6>If your TuteLoop ad is found posted on another service or website outside of tuteloop.ca, for whatever reason, it is then subject to the rules and regulations of the platform it is hosted on and the rules and regulations of the country hosting that server. Therefore, if you choose to post your tuteloop.ca ad on another website, it is your responsibility to ensure that you follow the appropriate rules and regulations. We may also remove your ad if it is flagged, or if we believe that it causes problems or violates any laws of policies. We will cooperate properly in cases where for any reason other platforms complain about the ads related to our site and ask us to cooperate for further legal investigation against violations caused by mutual users. </p> <p style=\"margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:\\\"Calibri\\\",\\\"sans-serif\\\";\" data-v-00867ce6><strong data-v-00867ce6>Fees and Services</strong></p> <p style=\"margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:\\\"Calibri\\\",\\\"sans-serif\\\";\" data-v-00867ce6>Using the Services provided by this website is generally free. We may charge fees for certain Services, however, if the service you wish to use charges a fee, you will be able to review and accept that fee before it is processed. You will also be required to agree to the conditions set out by the third-party payment processing provider. Our fees are quoted in Canadian Dollars, and they can be charged in a variety of different ways. For example, some fees may be one-time fees, whereas others will be recurring. Users may not be able to cancel recurring fees if they are charged based on a contract. Nevertheless, some recurring fees for monthly or annual subscriptions could be changed in your profile at certain periods, depending on the type of service. We will notify you if our fee policies change. For example, we may reduce our fees for promotional events. These changes will be effective when the announcement of the promotion is posted on TuteLoop.ca.  Our fees are non-refundable, and you are responsible for paying them when they are due. Failure to pay fees may result in a limitation in the Services you can access. We may also collect fees owed using other collection mechanisms. Canadian taxes are associated with our services and will be collected where applicable. You will be notified if taxes are owed for a Service before that Service can be purchased. </p> <p style=\"margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:\\\"Calibri\\\",\\\"sans-serif\\\";\" data-v-00867ce6><strong data-v-00867ce6>Content </strong></p> <p style=\"margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:\\\"Calibri\\\",\\\"sans-serif\\\";\" data-v-00867ce6>By using our Services, you agree not to copy, modify, resell, or distribute the Services, our copyrights, trademarks, or any other intellectual property associated with TuteLoop. You also agree not to upload or use any content that infringes on the rights of a third party without their consent. This includes, but is not limited to, infringement on intellectual property rights such as copyright and trademarks. We reserve the right to remove content that we believe violates the aforementioned terms and suspend the responsible accounts indefinitely. When you upload content to tuteloop.ca, such as a promotional video or tutoring logo, you agree to grant us a non-exclusive, worldwide, perpetual, irrevocable, royalty-free right to that content until that content has been deleted from tuteloop.ca.  In other words, complaints or claims about hosting users' content will not have a legal burden and cannot be handled. If you believe that your rights have been violated, please contact  support@tuteloop.ca and we will investigate this matter.</p> <p style=\"margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:\\\"Calibri\\\",\\\"sans-serif\\\";\" data-v-00867ce6><strong data-v-00867ce6>Disclaimers and Limitations of Liability</strong></p> <p style=\"margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:\\\"Calibri\\\",\\\"sans-serif\\\";\" data-v-00867ce6>The Services are provided ‘as is’ and ‘as available. You agree not to hold us responsible for things other users of the Services post or do. We do not guarantee the accuracy, completeness, efficacy or timeliness of any postings or user communications or the quality, safety, or legality of what is offered. We also do not guarantee secure and consistent access to the Services. Notifications about the availability of our services may not occur in real-time. Such delays are subject to variables outside of our control, such as internet latency or physical location. We are not liable for any losses or damages (financial, reputational, emotional, physical, etc.) that arise due to the use of our Services. </p> <p style=\"margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:\\\"Calibri\\\",\\\"sans-serif\\\";\" data-v-00867ce6> </p> <p style=\"margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:\\\"Calibri\\\",\\\"sans-serif\\\";\" data-v-00867ce6><strong data-v-00867ce6>Indemnification</strong></p> <p style=\"margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:\\\"Calibri\\\",\\\"sans-serif\\\";\" data-v-00867ce6>You will indemnify and hold harmless Tuteloop.ca and its affiliates and our and their respective officers, directors, agents, and employees (each an ‘indemnified part’), from any claim made by any third party, together with any amounts payable to the third party whether in settlement or as may otherwise be awarded and reasonable legal costs incurred by any of the indemnified parties, arising from or relating to the use of the Services, any alleged violation by you of any applicable law or regulation. We reserve the right, at our own expense, to assume the exclusive defense and control of any matter subject to indemnification by you but doing so will not excuse your indemnity obligations.</p> <p style=\"margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:\\\"Calibri\\\",\\\"sans-serif\\\";\" data-v-00867ce6><strong data-v-00867ce6>Personal Information</strong></p> <p style=\"margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:\\\"Calibri\\\",\\\"sans-serif\\\";\" data-v-00867ce6>By using the Services, you agree to the collection, transfer, storage, and use of your personal information by tuteloop.ca, as described in our <u data-v-00867ce6>privacy policy</u> </p> <p style=\"margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:\\\"Calibri\\\",\\\"sans-serif\\\";\" data-v-00867ce6><strong data-v-00867ce6>Tutor agreement </strong></p> <p style=\"margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:\\\"Calibri\\\",\\\"sans-serif\\\";\" data-v-00867ce6>If you choose to become a tutor at TuteLoop, you understand and agree that TuteLoop is a platform that hosts your ad, and that your relationship with TuteLoop is that of a member, and not an employee, third-party contractor, agent, joint venturer or partner for any reason, and that you act exclusively on your own behalf and for your own benefit and not on behalf of or for the benefit of TuteLoop. Tuteloop has no control of the content in your listing or of your activities associated with the Services. As a member, you agree not to create a false impression that you are endorsed by, partnered with, or act on behalf or benefit of TuteLoop.</p> <p style=\"margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:\\\"Calibri\\\",\\\"sans-serif\\\";\" data-v-00867ce6><strong data-v-00867ce6>Reviews </strong></p> <p style=\"margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:\\\"Calibri\\\",\\\"sans-serif\\\";\" data-v-00867ce6>You may be asked to leave a review after interacting with a tutor on tuteloop.ca. These reviews consist of a 5-star system and a short message that explains your star rating. After submitting your review, your username, profile photo (if available), and review will be made public. User reviews should be made in good faith, ensuring that the tutor is depicted fairly. When leaving a review, the review should be:</p> <p style=\"margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:\\\"Calibri\\\",\\\"sans-serif\\\";\" data-v-00867ce6>                -truthful to what happened between you and the tutor</p> <p style=\"margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:\\\"Calibri\\\",\\\"sans-serif\\\";\" data-v-00867ce6>                -not be left to harass or abuse the tutor</p> <p style=\"margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:\\\"Calibri\\\",\\\"sans-serif\\\";\" data-v-00867ce6>                -not be left to manipulate or mislead other users of tuteloop.ca</p> <p style=\"margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:\\\"Calibri\\\",\\\"sans-serif\\\";\" data-v-00867ce6>To ensure the integrity of the review system, reviews cannot be edited after they are submitted. Tuteloop.ca will not intervene in any disputes relating to reviews unless they are found to be in violation of the terms laid out here. In such a case, TuteLoop reserves the right to remove that review. Tuteloop.ca does not endorse any reviews posted on our platform, and they are solely the opinion of the party who wrote the review.</p> <p style=\"margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:\\\"Calibri\\\",\\\"sans-serif\\\";\" data-v-00867ce6><strong data-v-00867ce6>General</strong></p> <p style=\"margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:\\\"Calibri\\\",\\\"sans-serif\\\";\" data-v-00867ce6>These terms and the other policies posted on the Services constitute the entire agreement between TuteLoop and you, superseding any prior agreements. This agreement is governed by the laws of the Province of Ontario and the federal laws of Canada applicable therein. We both submit to the jurisdiction of the courts of the Province of Ontario. This will not affect your statutory rights if you are a consumer and applicable consumer law requires the application of another law for certain topics. If we do not enforce any provisions, that does not mean that we are waiving our right to do so later. If a court strikes down any of these terms, the remaining terms will survive. We may automatically assign this agreement in our sole discretion in accordance with the notice provisions below. Except notices relating to illegal or infringing content, your notice to us must be sent by email to support@tuteloop.ca.</p> <p style=\"margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:\\\"Calibri\\\",\\\"sans-serif\\\";\" data-v-00867ce6>We will send you notices by email, and the notices will be deemed received five days following the time of mailing. We may update the terms at any time, with updates taking effect when you next use the Services or after 30 days, whichever is sooner. </p>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/legal/terms-of-agreement.vue?vue&type=template&id=00867ce6&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/legal/terms-of-agreement.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var terms_of_agreementvue_type_script_lang_js_ = ({
  name: "termsofagreement"
});
// CONCATENATED MODULE: ./pages/legal/terms-of-agreement.vue?vue&type=script&lang=js&
 /* harmony default export */ var legal_terms_of_agreementvue_type_script_lang_js_ = (terms_of_agreementvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./pages/legal/terms-of-agreement.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(223)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  legal_terms_of_agreementvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "00867ce6",
  "494e9b69"
  
)

/* harmony default export */ var terms_of_agreement = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=terms-of-agreement.js.map
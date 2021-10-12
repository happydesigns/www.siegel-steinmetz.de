function _mergeNamespaces(n, m) {
  for (var i = 0; i < m.length; i++) {
    const e = m[i];
    for (const k in e) {
      if (k !== 'default' && !(k in n)) {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    }
  }
  return Object.freeze(n);
}

var ueberUns$1 = {};

var ids = ueberUns$1.ids = [16,6,8];
var modules = ueberUns$1.modules = {

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(144);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default;
module.exports.__inject__ = function (context) {
  add("fa1b6c78", content, true, context);
};

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(146);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default;
module.exports.__inject__ = function (context) {
  add("245ec640", content, true, context);
};

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ __webpack_require__(2);
/* harmony import */ var _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_32_0_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_30_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_31_0_TitledImage_vue_vue_type_style_index_0_id_d204ce54_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(139);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_32_0_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_30_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_31_0_TitledImage_vue_vue_type_style_index_0_id_d204ce54_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_32_0_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_30_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_31_0_TitledImage_vue_vue_type_style_index_0_id_d204ce54_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__[key]; }); }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media (min-width:768px){.right figure[data-v-d204ce54]{margin-left:24px}.left figure[data-v-d204ce54]{margin-right:24px}}figcaption[data-v-d204ce54]{font-style:italic}img[data-v-d204ce54]{max-width:100%;border-radius:4px}figcaption[data-v-d204ce54]{text-align:center;font-weight:500;font-style:normal}.titled-image[data-v-d204ce54]{margin-bottom:1rem}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ __webpack_require__(2);
/* harmony import */ var _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_32_0_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_30_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_31_0_TextImage_vue_vue_type_style_index_0_id_0d9fc870_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(140);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_32_0_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_30_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_31_0_TextImage_vue_vue_type_style_index_0_id_0d9fc870_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_32_0_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_30_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_31_0_TextImage_vue_vue_type_style_index_0_id_0d9fc870_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__[key]; }); }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".text-image[data-v-0d9fc870]{overflow:auto}.titled-image[data-v-0d9fc870]{text-align:center}@media(min-width:768px){.right .titled-image[data-v-0d9fc870]{float:right}.left .titled-image[data-v-0d9fc870]{float:left}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@vue/composition-api/dist/vue-composition-api.mjs
__webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--32-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--30-0!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--31-0!./components/TitledImage.vue?vue&type=template&id=d204ce54&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"titled-image"},[_vm._ssrNode("<figure data-v-d204ce54>","</figure>",[_c('nuxt-img',{attrs:{"src":_vm.image,"alt":_vm.alt}}),_vm._ssrNode(" "),_vm._ssrNode("<figcaption data-v-d204ce54>","</figcaption>",[_vm._t("default")],2)],2)])};
var staticRenderFns = [];


// CONCATENATED MODULE: ./components/TitledImage.vue?vue&type=template&id=d204ce54&scoped=true&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--32-0!./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--30-0!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--31-0!./components/TitledImage.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var TitledImagevue_type_script_lang_js_ = ({
  name: "TitledImage",
  props: {
    image: String,
    title: String,
    alt: String
  }
});
// CONCATENATED MODULE: ./components/TitledImage.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TitledImagevue_type_script_lang_js_ = (TitledImagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./components/TitledImage.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(143);
if (style0.__inject__) style0.__inject__(context);

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TitledImagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "d204ce54",
  "3203ab7c"
  
);

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@vue/composition-api/dist/vue-composition-api.mjs
__webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--32-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--30-0!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--31-0!./components/TextImage.vue?vue&type=template&id=0d9fc870&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"text-image",class:_vm.side},[_vm._t("default")],2)};
var staticRenderFns = [];


// CONCATENATED MODULE: ./components/TextImage.vue?vue&type=template&id=0d9fc870&scoped=true&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--32-0!./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--30-0!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--31-0!./components/TextImage.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var TextImagevue_type_script_lang_js_ = ({
  name: "TombsOriginal",
  props: {
    side: String
  },

  data() {
    return {
      test: "tst"
    };
  }

});
// CONCATENATED MODULE: ./components/TextImage.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TextImagevue_type_script_lang_js_ = (TextImagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./components/TextImage.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(145);
if (style0.__inject__) style0.__inject__(context);

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TextImagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0d9fc870",
  "63db4dbb"
  
);

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(256);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default;
module.exports.__inject__ = function (context) {
  add("0483f18a", content, true, context);
};

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ __webpack_require__(2);
/* harmony import */ var _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_32_0_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_30_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_31_0_ueber_uns_vue_vue_type_style_index_0_id_4790d200_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(240);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_32_0_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_30_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_31_0_ueber_uns_vue_vue_type_style_index_0_id_4790d200_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_32_0_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_30_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_31_0_ueber_uns_vue_vue_type_style_index_0_id_4790d200_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__[key]; }); }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "a[data-v-4790d200]{color:#770019;font-weight:500}.text[data-v-4790d200]{text-align:justify}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@vue/composition-api/dist/vue-composition-api.mjs
__webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--32-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--30-0!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--31-0!./pages/ueber-uns.vue?vue&type=template&id=4790d200&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"document page\" data-v-4790d200>","</div>",[_vm._ssrNode("<div class=\"mt-8\" data-v-4790d200>","</div>",[_c('router-link',{attrs:{"to":"/ueber-uns"}},[_c('h1',[_vm._v("Über uns")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"content-wrapper\" data-v-4790d200>","</div>",[_c('TextImage',{staticClass:"mt-4",attrs:{"side":"right"}},[_c('TitledImage',{attrs:{"image":"about_1.jpg","alt":"Betriebsgelände Bernd Siegel"}},[_vm._v("Betriebsgelände Bernd Siegel")]),_vm._v(" "),_c('span',{staticClass:"text"},[_c('p',[_vm._v("Sie finden unsere Firma Bernd Siegel Steingestaltung in Neudenau. Nach mehr als 15 Jahren bieten wir Ihnen viel Erfahrung, Fachwissen und Freude an der Kreativität bei der Gestaltung und Bearbeitung des Naturstoffes Stein.")]),_vm._v(" "),_c('p',[_vm._v("Bernd Siegel ist als Firmengründer staatlich geprüfter Steintechniker und Meister seines Fachs. Als Steinmetzmeister und Steinbildhauermeister hat er sich auf die Restauration von Sandsteinfassaden und Gestaltung von Grabmalen spezialisiert.")]),_vm._v(" "),_c('p',[_vm._v("Wir sind ein dreiköpfiges, gut ausgebildetes Team. Als Meisterbetrieb arbeiten wir auf dem neuesten Stand der Technik und beherrschen zudem die traditionellen Arbeitsmethoden des Steinmetzhandwerks. Die Schonung unserer wertvollen Umwelt und unserer Ressourcen ist uns wichtig. Bei uns erhalten Sie zuverlässige Arbeit aus Meisterhand.")]),_vm._v(" "),_c('p',[_vm._v("Wir als erfahrener und fachkompetenter Steinmetzbetrieb haben einen umfassenden Service rund um den langlebigen und wandelbaren Naturstoff Stein: die fachmännische Pflege und Restauration von Gebäuden, Sandsteinfassaden, Fenstern, Treppen, Geländern, Ornamenten, Denkmälern und Grabsteinen.")]),_vm._v(" "),_c('p',[_vm._v("Des Weiteren bieten wir eine individuelle Grabmalgestaltung und Grabinschriften nach Ihren Wünschen.")]),_vm._v(" "),_c('p',[_vm._v("Wir reinigen Außenfassaden von Gebäuden im Niederdruckstrahlverfahren, vergleichbar dem JOS- oder Nebelstrahlverfahren. In unserem Angebot finden Sie Fensterbänke und Skulpturen aus Stein als auch Natursteinsanierung.")])])],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"content-wrapper\" data-v-4790d200>","</div>",[_c('TextImage',{staticClass:"mt-4",attrs:{"side":"left"}},[_c('TitledImage',{attrs:{"image":"about_2.jpg","alt":"Ausstellungsfläche"}},[_vm._v("Ausstellungsfläche")]),_vm._v(" "),_c('span',{staticClass:"text"},[_c('p',[_vm._v("Auf unserer Ausstellungsfläche bieten wir Grabmale in vielfältiger Art und Form aus eigener Produktion oder zugekauft. Wir beziehen unter anderem Grabmale der Firma Gräf Granit GmbH aus dem Fichtelgebirge.")]),_vm._v(" "),_c('p',[_vm._v("Auf Wunsch verwenden wir auch Steine aus Deutschland. Unser Angebot wird vervollständigt durch Grabzubehör. Wir nehmen auch Grababräumungen vor und lagern die Grabanlagen für sie bei uns ein.")]),_vm._v(" "),_c('p',[_vm._v("Wir sind von Montag bis Samstag von 07:00 Uhr bis 20:00 Uhr nach Vereinbarung für Sie da. Vor unserem Firmengebäude finden Sie ausreichend Parkplätze zu Ihrer Verfügung.")]),_vm._v(" "),_c('p',[_vm._v("\n            Überzeugen Sie sich von unserem umfassenden Angebot, vereinbaren Sie einen persönlichen und unverbindlichen Beratungstermin oder wenden Sie sich über unser\n            "),_c('router-link',{staticClass:"link-in",attrs:{"to":"/kontakt"}},[_vm._v("Kontaktformular")]),_vm._v(" an uns. Wir melden uns umgehend bei Ihnen und beraten Sie auch gerne bei Ihnen zu Hause.\n          ")],1)])],1)],1)],2)])};
var staticRenderFns = [];


// CONCATENATED MODULE: ./pages/ueber-uns.vue?vue&type=template&id=4790d200&scoped=true&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--32-0!./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--30-0!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--31-0!./pages/ueber-uns.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ueber_unsvue_type_script_lang_js_ = ({
  head() {
    return {
      title: "Über uns"
    };
  }

});
// CONCATENATED MODULE: ./pages/ueber-uns.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_ueber_unsvue_type_script_lang_js_ = (ueber_unsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./pages/ueber-uns.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(255);
if (style0.__inject__) style0.__inject__(context);

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_ueber_unsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4790d200",
  "2b1e54aa"
  
);

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {TitledImage: __webpack_require__(148).default,TextImage: __webpack_require__(149).default});


/***/ })

};

const ueberUns = /*#__PURE__*/Object.freeze(/*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  'default': ueberUns$1,
  ids: ids,
  modules: modules
}, [ueberUns$1]));

export { ueberUns as u };

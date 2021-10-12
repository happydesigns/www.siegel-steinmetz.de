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

var grabmale$1 = {};

var ids = grabmale$1.ids = [11,6,8];
var modules = grabmale$1.modules = {

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

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(248);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default;
module.exports.__inject__ = function (context) {
  add("311d32b8", content, true, context);
};

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ __webpack_require__(2);
/* harmony import */ var _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_32_0_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_30_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_31_0_grabmale_vue_vue_type_style_index_0_id_356d56a5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(236);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_32_0_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_30_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_31_0_grabmale_vue_vue_type_style_index_0_id_356d56a5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_32_0_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_30_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_31_0_grabmale_vue_vue_type_style_index_0_id_356d56a5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__[key]; }); }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".text[data-v-356d56a5]{text-align:justify}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@vue/composition-api/dist/vue-composition-api.mjs
__webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--32-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--30-0!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--31-0!./pages/grabmale.vue?vue&type=template&id=356d56a5&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"document page mb-4"},[_vm._ssrNode("<div class=\"mt-8\" data-v-356d56a5>","</div>",[_c('router-link',{attrs:{"to":"/grabmale"}},[_c('h1',[_vm._v("Grabmale")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"content-wrapper\" data-v-356d56a5>","</div>",[_c('TextImage',{staticClass:"mt-4",attrs:{"side":"right"}},[_c('TitledImage',{attrs:{"image":"tombs_1.jpg","alt":"Doppelstein Jura mit Bronze"}},[_vm._v("Doppelstein Jura mit Bronze")]),_vm._v(" "),_c('span',{staticClass:"text"},[_c('p',[_vm._v("\n          Ein Grabmal ist ein sichtbares und individuelles Andenken an einen geliebten Menschen.\n          "),_c('br'),_vm._v("Die Beschaffenheit des Materials, die Größe, Farbe und Form des Steins, seine Verarbeitung, die enthaltenen Symbole und Inschriften – all das legt Zeugnis ab über das Leben des lieben Verstorbenen und ist uns eine tröstliche Erinnerung und ein Ankerplatz, an dem wir die unauflösliche Verbindung zu ihm spüren dürfen. Das Grabmal drückt Wertschätzung dem Verstorbenen gegenüber aus und ist eine trostreiche Erinnerung.\n        ")]),_vm._v(" "),_c('p',[_vm._v("Seit Jahrtausenden werden für Grabmäler grob behauene Steine verwendet. Das robuste, lang haltbare, witterungsbeständige, unvergängliche Naturmaterial symbolisiert die unvergängliche Liebe und Verbundenheit zu einem geliebten Menschen und schmückt die Gräber der Angehörigen.")])])],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"content-wrapper\" data-v-356d56a5>","</div>",[_c('TextImage',{staticClass:"mt-6",attrs:{"side":"left"}},[_c('TitledImage',{attrs:{"image":"tombs_2.jpg","alt":"Doppelgrabmal Tarno Diorit"}},[_vm._v("Doppelgrabmal Tarno Diorit")]),_vm._v(" "),_c('span',{staticClass:"text"},[_c('p',[_vm._v("\n          Sie kennen Ihren geliebten Verstorbenen am besten. Wir erarbeiten mit Ihnen gemeinsam die ganz persönliche Erinnerung an Ihren verstorbenen Verwandten.\n          "),_c('br'),_vm._v("Sie haben eine große Auswahl an unterschiedlichen Materialien. Dies beginnt bei der Farbe eines Steins und seiner Größe. Bei den Formen wählen Sie zwischen schmalen Stelen oder großen, beeindruckenden Steinen. Das Grabmal kann fein und glatt bearbeitet sein oder ein grob behauener Stein, eine Bruchraue oder ein Findling. Wir versehen es mit Symbolen, Ornamenten und Verzierungen, die die Persönlichkeit Ihres lieben Angehörigen widerspiegeln.\n          "),_c('br'),_vm._v("Sehr gerne zeigen wir Ihnen unterschiedliche Ausstellungsstücke und geben Ihnen einen Eindruck der zahlreichen Gestaltungsmöglichkeiten.\n        ")]),_vm._v(" "),_c('p',[_vm._v("Auch die Grabinschrift wird mit Ihnen festgelegt. Sie kann schlicht, klar und edel gestaltet sein oder kunstvoll. Wir fertigen einen Entwurf an und bringen ihn in liebevoller Handarbeit auf das Grabmal auf.")]),_vm._v(" "),_c('p',[_vm._v("Grabzubehör wie Grableuchten aus Stahl, Aluminium oder Bronze sowie robuste Pflanzenschalen und wetterfeste Vasen in unterschiedlichen Materialausführungen und Größen komplettiert unser Angebot.")])])],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"content-wrapper\" data-v-356d56a5>","</div>",[_c('TextImage',{staticClass:"mt-6",attrs:{"side":"right"}},[_c('TitledImage',{attrs:{"image":"tombs_3.jpg","alt":"Urnengrab Kalkstein"}},[_vm._v("Urnengrab Kalkstein")]),_vm._v(" "),_c('span',{staticClass:"text"},[_c('p',[_vm._v("Grabsteine sind im Laufe der Jahre und Jahrzehnte dauerhaft wechselnden Witterungen ausgesetzt. Nässe, Kälte, aber auch Hitze setzen ihnen mit der Zeit zu. Inschriften verblassen, aufgesetzte Buchstaben, Insignien und Ornamente lockern sich und gehen möglicherweise verloren. Wir erneuern die Inschrift des Grabmals Ihrer Lieben. Auch Moos oder Verschmutzung entfernen wir. So wird der Grabstein wieder in den einwandfreien Originalzustand gebracht.")]),_vm._v(" "),_c('p',[_vm._v("Bei Beerdigungen bauen wir Grabanlagen ab und nach einer angemessen Zeit detailgenau und liebevoll mit Respekt gegenüber den Verstorbenen wieder auf. Des Weiteren bieten wir Ihnen eine regelmäßige und umfassende Betreuung des Grabmals Ihrer Angehörigen. Hierzu gehört die Reinigung und bei Bedarf die Instandsetzung des Steins. Gerne präsentieren wir Ihnen die unterschiedlichen Möglichkeiten der Wartung.")]),_vm._v(" "),_c('p',[_vm._v("\n          Wir beraten Sie gerne. Einfühlsamkeit, gepaart mit jahrelanger Erfahrung, Fachkönnen und Kompetenz zeichnen uns aus. Bei uns sind Sie in den besten Händen.\n          "),_c('br'),_vm._v("Rufen Sie uns unter der Tel.-Nr.:\n          "),_c('b',[_vm._v("06262 - 92 64 44")]),_vm._v(" an und vereinbaren Sie einen persönlichen, ausführlichen Beratungstermin.\n        ")])])],1)],1)],2)};
var staticRenderFns = [];


// CONCATENATED MODULE: ./pages/grabmale.vue?vue&type=template&id=356d56a5&scoped=true&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--32-0!./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--30-0!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--31-0!./pages/grabmale.vue?vue&type=script&lang=js&
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
/* harmony default export */ var grabmalevue_type_script_lang_js_ = ({
  head() {
    return {
      title: "Grabmale"
    };
  }

});
// CONCATENATED MODULE: ./pages/grabmale.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_grabmalevue_type_script_lang_js_ = (grabmalevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./pages/grabmale.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(247);
if (style0.__inject__) style0.__inject__(context);

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_grabmalevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "356d56a5",
  "53511caa"
  
);

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {TitledImage: __webpack_require__(148).default,TextImage: __webpack_require__(149).default});


/***/ })

};

const grabmale = /*#__PURE__*/Object.freeze(/*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  'default': grabmale$1,
  ids: ids,
  modules: modules
}, [grabmale$1]));

export { grabmale as g };

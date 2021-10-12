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

var restaurierungen$1 = {};

var ids = restaurierungen$1.ids = [15,6,8];
var modules = restaurierungen$1.modules = {

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

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(254);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default;
module.exports.__inject__ = function (context) {
  add("13681c7e", content, true, context);
};

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ __webpack_require__(2);
/* harmony import */ var _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_32_0_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_30_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_31_0_restaurierungen_vue_vue_type_style_index_0_id_637d03de_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(239);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_32_0_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_30_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_31_0_restaurierungen_vue_vue_type_style_index_0_id_637d03de_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_32_0_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_30_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_31_0_restaurierungen_vue_vue_type_style_index_0_id_637d03de_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__[key]; }); }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".text[data-v-637d03de]{text-align:justify}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@vue/composition-api/dist/vue-composition-api.mjs
__webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--32-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--30-0!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--31-0!./pages/restaurierungen.vue?vue&type=template&id=637d03de&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"document page"},[_vm._ssrNode("<div class=\"mt-8\" data-v-637d03de>","</div>",[_c('router-link',{attrs:{"to":"/restaurierungen"}},[_c('h1',[_vm._v("Restaurierungen")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<section data-v-637d03de>","</section>",[_vm._ssrNode("<div class=\"content-wrapper\" data-v-637d03de>","</div>",[_c('TextImage',{staticClass:"mt-4",attrs:{"side":"right"}},[_c('TitledImage',{attrs:{"image":"restorations_1.jpg","alt":"Fensterumrahmung Solitudestr. Ludwigsburg"}},[_vm._v("Restaurierung: Fensterumrahmung Solitudestr. Ludwigsburg")]),_vm._v(" "),_c('span',{staticClass:"text"},[_c('p',[_vm._v("Unsere Firma hat als einen Schwerpunkt ihrer Arbeit die Komplette und fachgemäße Restaurierung von historischen Gebäuden, Baudenkmalen und Bildhauerarbeiten.")]),_vm._v(" "),_c('p',[_vm._v("Bei der klassischen Vorgehensweise in der Denkmalpflege wird folgender Weg beschritten: Zuerst erfolgt die Reinigung von diversen Bauteilen der Fassade wie Eckquadern, Balustraden, Treppen, Fenster- und Türumrahmungen usw. Schäden, wie z.B. Risse, Ausbrüche und Rückwitterungen werden je nach Schadensumfang durch Antragungen oder Vierungen (nur teilweiser Austausch an den beschädigten Bauteilen) ersetzt.")]),_vm._v(" "),_c('p',[_vm._v("Bei allen auszuführenden Arbeiten orientieren wir uns so weit wie möglich am Original. Das beinhaltet die Materialauswahl bis hin zur Oberflächenstruktur. Auch wenn wir bei unseren Eingriffen in die historische Bausubstanz sehr zurückhaltend und vorsichtig agieren. Sobedeutet es doch für unsere Auftraggeber ein optimales Kosten-Nutzenverhältnis.")])])],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"content-wrapper\" data-v-637d03de>","</div>",[_c('TextImage',{staticClass:"mt-6",attrs:{"side":"left"}},[_c('TitledImage',{attrs:{"image":"restorations_2.jpg","alt":"Austausch einer Säulenbasis"}},[_vm._v("Austausch einer Säulenbasis aus dem Jahr 1890")]),_vm._v(" "),_c('span',{staticClass:"text"},[_c('p',[_vm._v("Für das Reinigen von Natursteinoberflächen nutzen wir das Niederdruckstrahlverfahren. Das Ergebnis entspricht der Reinigung mit dem Jos- bzw. dem Nebelstrahlverfahren. Die Reinigung kann individuell auf den Verschmutzungsgrad eingestellt werden. Dazu werden die Parameter unterschiedlich verändert. Veränderbar sind die Zufuhr von Wasser, Luftdruck (0,5-10 bar) und der Strahldüsenabstand. Unter denkmalpflegerischer Hinsicht darf die originale Oberflächenstruktur nicht zerstört werden. Meistens befindet man sich bei dieser Problemstellung auf einer Gratwanderung. Schwarze Krusten können nur aufgehellt werden, um die kostbare originale Oberflächenbearbeitung zu erhalten.")])])],1)],1),_vm._ssrNode(" "),_c('TextImage',{staticClass:"mt-6",attrs:{"side":"right"}},[_c('TitledImage',{attrs:{"image":"restorations_3.jpg","alt":"Uhu Statue"}}),_vm._v(" "),_c('span',{staticClass:"text"},[_c('p',[_vm._v("Sie können von uns perfekte, handwerkliche und traditionelle Arbeit erwarten, die wir mit viel Hingabe, Erfahrung und Engagement übernehmen. Daneben aber setzen wir modernste Technik ein, um optimale Ergebnisse zu erzielen, die Sie zufrieden stellen.")]),_vm._v(" "),_c('p',[_vm._v("Selbstverständlich übernehmen wir diese Arbeiten in wiederkehrenden Abständen für Sie, um das perfekte Aussehen jederzeit zu gewährleisten.")])])],1)],2)],2)};
var staticRenderFns = [];


// CONCATENATED MODULE: ./pages/restaurierungen.vue?vue&type=template&id=637d03de&scoped=true&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--32-0!./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--30-0!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--31-0!./pages/restaurierungen.vue?vue&type=script&lang=js&
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
/* harmony default export */ var restaurierungenvue_type_script_lang_js_ = ({
  head() {
    return {
      title: "Restaurierungen"
    };
  }

});
// CONCATENATED MODULE: ./pages/restaurierungen.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_restaurierungenvue_type_script_lang_js_ = (restaurierungenvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./pages/restaurierungen.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(253);
if (style0.__inject__) style0.__inject__(context);

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_restaurierungenvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "637d03de",
  "7206f02a"
  
);

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {TitledImage: __webpack_require__(148).default,TextImage: __webpack_require__(149).default});


/***/ })

};

const restaurierungen = /*#__PURE__*/Object.freeze(/*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  'default': restaurierungen$1,
  ids: ids,
  modules: modules
}, [restaurierungen$1]));

export { restaurierungen as r };

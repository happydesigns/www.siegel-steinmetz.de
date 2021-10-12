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

var textImage$1 = {};

var ids = textImage$1.ids = [6];
var modules = textImage$1.modules = {

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

/***/ })

};

const textImage = /*#__PURE__*/Object.freeze(/*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  'default': textImage$1,
  ids: ids,
  modules: modules
}, [textImage$1]));

export { textImage as t };

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

var kontakt$1 = {};

var ids = kontakt$1.ids = [14];
var modules = kontakt$1.modules = {

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(252);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default;
module.exports.__inject__ = function (context) {
  add("7e0d8fb3", content, true, context);
};

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ __webpack_require__(2);
/* harmony import */ var _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_32_0_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_30_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_31_0_kontakt_vue_vue_type_style_index_0_id_1d88ace0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(238);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_32_0_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_30_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_31_0_kontakt_vue_vue_type_style_index_0_id_1d88ace0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_32_0_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_30_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_31_0_kontakt_vue_vue_type_style_index_0_id_1d88ace0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__[key]; }); }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#map[data-v-1d88ace0]{width:100%;height:500px;border-radius:4px}.address a[data-v-1d88ace0]{color:#770019}i[data-v-1d88ace0]{color:var(--light-s2)!important}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@vue/composition-api/dist/vue-composition-api.mjs
__webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--32-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--30-0!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--31-0!./pages/kontakt.vue?vue&type=template&id=1d88ace0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"document page"},[_vm._ssrNode("<div class=\"mt-8\" data-v-1d88ace0>","</div>",[_c('router-link',{attrs:{"to":"/kontakt"}},[_c('h1',[_vm._v("Kontakt")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"mb-8\" data-v-1d88ace0>","</div>",[_vm._ssrNode("<div class=\"address mb-4\" data-v-1d88ace0>","</div>",[_vm._ssrNode("<h2 class=\"mb-1\" data-v-1d88ace0>Anschrift</h2> <p data-v-1d88ace0>\n        Bernd Siegel\n        <br data-v-1d88ace0>Steingestaltung\n      </p> <p data-v-1d88ace0>\n        Bahnhofstraße 13\n        <br data-v-1d88ace0>74861 Neudenau\n      </p> "),_vm._ssrNode("<a href=\"tel:+496264926444\" class=\"link-in\" data-v-1d88ace0>","</a>",[_c('v-icon',[_vm._v("mdi-phone")]),_vm._ssrNode("06264 / 92 64 44\n      ")],2),_vm._ssrNode(" <br data-v-1d88ace0> "),_vm._ssrNode("<a href=\"tel:+496264926445\" class=\"link-in\" data-v-1d88ace0>","</a>",[_c('v-icon',[_vm._v("mdi-printer")]),_vm._ssrNode("06264 / 92 64 45\n      ")],2),_vm._ssrNode(" <br data-v-1d88ace0> "),_vm._ssrNode("<a href=\"mailto:siegel.neudenau@t-online.de\" class=\"link-in\" data-v-1d88ace0>","</a>",[_c('v-icon',[_vm._v("mdi-email")]),_vm._ssrNode("info@siegel-steinmetz.de\n      ")],2)],2),_vm._ssrNode(" <div id=\"map\" data-v-1d88ace0></div>")],2)],2)};
var staticRenderFns = [];


// CONCATENATED MODULE: ./pages/kontakt.vue?vue&type=template&id=1d88ace0&scoped=true&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--32-0!./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--30-0!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--31-0!./pages/kontakt.vue?vue&type=script&lang=js&
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
/* harmony default export */ var kontaktvue_type_script_lang_js_ = ({
  head() {
    return {
      title: "Kontakt",
      script: [{
        hid: "maps",
        src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDIfUVcub6RqXsutLIVam2Q9mEP3BML_KA",
        defer: true,
        callback: () => {
          const center = {
            lat: 49.28869,
            lng: 9.27136
          };
          const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 17,
            center: center
          });
          new google.maps.Marker({
            position: center,
            map
          });
        }
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/kontakt.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_kontaktvue_type_script_lang_js_ = (kontaktvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(11);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/index.js + 2 modules
var VIcon = __webpack_require__(14);

// CONCATENATED MODULE: ./pages/kontakt.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(251);
if (style0.__inject__) style0.__inject__(context);

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_kontaktvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1d88ace0",
  "7768fb42"
  
);

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */


installComponents_default()(component, {VIcon: VIcon["a" /* VIcon */]});


/***/ })

};

const kontakt = /*#__PURE__*/Object.freeze(/*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  'default': kontakt$1,
  ids: ids,
  modules: modules
}, [kontakt$1]));

export { kontakt as k };

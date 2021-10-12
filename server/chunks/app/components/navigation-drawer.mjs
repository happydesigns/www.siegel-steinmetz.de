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

var navigationDrawer$1 = {};

var ids = navigationDrawer$1.ids = [5];
var modules = navigationDrawer$1.modules = {

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@vue/composition-api/dist/vue-composition-api.mjs
__webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--32-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--30-0!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--31-0!./components/NavigationDrawer.vue?vue&type=template&id=815f7d4a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-navigation-drawer',{staticClass:"deep-purple accent-4 nav-drawer",attrs:{"dark":"","temporary":"","absolute":""},on:{"close":function($event){_vm.drawer=false;}},model:{value:(_vm.drawer),callback:function ($$v) {_vm.drawer=$$v;},expression:"drawer"}},[_c('v-list',_vm._l((_vm.items),function(item){return _c('v-list-item',{key:item.title,attrs:{"link":""}},[_c('v-list-item-icon',[_c('v-icon',[_vm._v(_vm._s(item.icon))])],1),_vm._v(" "),_c('v-list-item-content',[_c('v-list-item-title',[_vm._v(_vm._s(item.title))])],1)],1)}),1)],1)};
var staticRenderFns = [];


// CONCATENATED MODULE: ./components/NavigationDrawer.vue?vue&type=template&id=815f7d4a&scoped=true&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--32-0!./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--30-0!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--31-0!./components/NavigationDrawer.vue?vue&type=script&lang=js&
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
/* harmony default export */ var NavigationDrawervue_type_script_lang_js_ = ({
  name: 'NavigationDrawer',

  data() {
    return {
      items: [{
        title: 'Dashboard',
        icon: 'dashboard'
      }, {
        title: 'Account',
        icon: 'account_box'
      }, {
        title: 'Admin',
        icon: 'gavel'
      }]
    };
  },

  props: {
    drawer: Boolean
  }
});
// CONCATENATED MODULE: ./components/NavigationDrawer.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_NavigationDrawervue_type_script_lang_js_ = (NavigationDrawervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(11);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/index.js + 2 modules
var VIcon = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js + 22 modules
var VList = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VNavigationDrawer/index.js + 17 modules
var VNavigationDrawer = __webpack_require__(51);

// CONCATENATED MODULE: ./components/NavigationDrawer.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_NavigationDrawervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "815f7d4a",
  "2d5540a8"
  
);

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */








installComponents_default()(component, {VIcon: VIcon["a" /* VIcon */],VList: VList["a" /* VList */],VListItem: VList["b" /* VListItem */],VListItemContent: VList["c" /* VListItemContent */],VListItemIcon: VList["d" /* VListItemIcon */],VListItemTitle: VList["f" /* VListItemTitle */],VNavigationDrawer: VNavigationDrawer["a" /* VNavigationDrawer */]});


/***/ })

};

const navigationDrawer = /*#__PURE__*/Object.freeze(/*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  'default': navigationDrawer$1,
  ids: ids,
  modules: modules
}, [navigationDrawer$1]));

export { navigationDrawer as n };

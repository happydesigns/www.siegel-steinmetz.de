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

var _slug$1 = {};

var ids = _slug$1.ids = [10,1];
var modules = _slug$1.modules = Array(150).concat([
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(233);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default;
module.exports.__inject__ = function (context) {
  add("06c4a8bb", content, true, context);
};

/***/ }),
/* 151 */,
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/grabmallager-001.d6b1839.jpg";

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/grabmallager-002.13f5beb.jpg";

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/grabmallager-003.9f3363f.jpg";

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/grabmallager-004.e197516.jpg";

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/grabmallager-005.595b4e3.jpg";

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/grabmallager-006.20e3da4.jpg";

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/grabmallager-007.d528c8e.jpg";

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/grabmallager-008.f1a15dc.jpg";

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/grabmallager-009.7d04c91.jpg";

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/grabmallager-010.3e04859.jpg";

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/grabmallager-011.0c39d82.jpg";

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/grabmallager-012.e45c10d.jpg";

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/grabmallager-013.0fb8469.jpg";

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/grabmallager-014.c42c60f.jpg";

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/grabmallager-015.e1f2938.jpg";

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/grabmallager-016.13c8d8a.jpg";

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/grabmallager-017.278f2dd.jpg";

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/grabmallager-018.f4cd7bb.jpg";

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/grabmallager-019.521459e.jpg";

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/grabmallager-020.98573ca.jpg";

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/grabmallager-021.593ddfe.jpg";

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/grabmallager-022.caefea7.jpg";

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/grabmallager-023.df83657.jpg";

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/grabmallager-024.3477306.jpg";

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/grabmallager-025.676faca.jpg";

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/grabmallager-026.36671a8.jpg";

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/grabmallager-027.9a9597c.jpg";

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/grabmallager-028.2eed563.jpg";

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/grabmallager-029.650a6ed.jpg";

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/grabmallager-030.3c95cfd.jpg";

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/grabmallager-031.a380979.jpg";

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/grabmallager-032.e22b043.jpg";

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/grabmallager-033.5963848.jpg";

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/grabmallager-034.f57c4f0.jpg";

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/grabmalreferenzen-001.97cbceb.jpg";

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/grabmalreferenzen-002.aa0928a.jpg";

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/grabmalreferenzen-003.6b35577.jpg";

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/grabmalreferenzen-004.27eeafb.jpg";

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/grabmalreferenzen-005.fd5e990.jpg";

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/grabmalreferenzen-006.a25dc1a.jpg";

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/grabmalreferenzen-007.bb80f10.jpg";

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/grabmalreferenzen-008.5789541.jpg";

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/grabmalreferenzen-009.c9c2ec4.jpg";

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/grabmalreferenzen-010.4cfd84b.jpg";

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/grabmalreferenzen-011.5126421.jpg";

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/grabmalreferenzen-012.5158a63.jpg";

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/grabmalreferenzen-013.8238f15.jpg";

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/grabmalreferenzen-014.6c3842e.jpg";

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/grabmalreferenzen-015.eab4983.jpg";

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/grabmalreferenzen-016.fe86ec3.jpg";

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/grabmalreferenzen-017.d82426a.jpg";

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/grabmalreferenzen-018.d526e20.jpg";

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/grabmalreferenzen-019.88cab2e.jpg";

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/grabmalreferenzen-020.fc28ffc.jpg";

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/grabmalreferenzen-021.5187b5e.jpg";

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/grabmalreferenzen-022.593ddfe.jpg";

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/grabmalreferenzen-023.676faca.jpg";

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/grabmalreferenzen-024.98573ca.jpg";

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/restaurierungen-001.23af6af.jpg";

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/restaurierungen-002.614e5e9.jpg";

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/restaurierungen-003.2af2567.jpg";

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/restaurierungen-004.b2a718b.jpg";

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/restaurierungen-005.2052c2b.jpg";

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/restaurierungen-006.ea0d3d8.jpg";

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/restaurierungen-007.3d1ad4f.jpg";

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./about_1.jpg": 218,
	"./about_2.jpg": 219,
	"./album/grabmallager/grabmallager-001.jpg": 152,
	"./album/grabmallager/grabmallager-002.jpg": 153,
	"./album/grabmallager/grabmallager-003.jpg": 154,
	"./album/grabmallager/grabmallager-004.jpg": 155,
	"./album/grabmallager/grabmallager-005.jpg": 156,
	"./album/grabmallager/grabmallager-006.jpg": 157,
	"./album/grabmallager/grabmallager-007.jpg": 158,
	"./album/grabmallager/grabmallager-008.jpg": 159,
	"./album/grabmallager/grabmallager-009.jpg": 160,
	"./album/grabmallager/grabmallager-010.jpg": 161,
	"./album/grabmallager/grabmallager-011.jpg": 162,
	"./album/grabmallager/grabmallager-012.jpg": 163,
	"./album/grabmallager/grabmallager-013.jpg": 164,
	"./album/grabmallager/grabmallager-014.jpg": 165,
	"./album/grabmallager/grabmallager-015.jpg": 166,
	"./album/grabmallager/grabmallager-016.jpg": 167,
	"./album/grabmallager/grabmallager-017.jpg": 168,
	"./album/grabmallager/grabmallager-018.jpg": 169,
	"./album/grabmallager/grabmallager-019.jpg": 170,
	"./album/grabmallager/grabmallager-020.jpg": 171,
	"./album/grabmallager/grabmallager-021.jpg": 172,
	"./album/grabmallager/grabmallager-022.jpg": 173,
	"./album/grabmallager/grabmallager-023.jpg": 174,
	"./album/grabmallager/grabmallager-024.jpg": 175,
	"./album/grabmallager/grabmallager-025.jpg": 176,
	"./album/grabmallager/grabmallager-026.jpg": 177,
	"./album/grabmallager/grabmallager-027.jpg": 178,
	"./album/grabmallager/grabmallager-028.jpg": 179,
	"./album/grabmallager/grabmallager-029.jpg": 180,
	"./album/grabmallager/grabmallager-030.jpg": 181,
	"./album/grabmallager/grabmallager-031.jpg": 182,
	"./album/grabmallager/grabmallager-032.jpg": 183,
	"./album/grabmallager/grabmallager-033.jpg": 184,
	"./album/grabmallager/grabmallager-034.jpg": 185,
	"./album/grabmalreferenzen/grabmalreferenzen-001.jpg": 186,
	"./album/grabmalreferenzen/grabmalreferenzen-002.jpg": 187,
	"./album/grabmalreferenzen/grabmalreferenzen-003.jpg": 188,
	"./album/grabmalreferenzen/grabmalreferenzen-004.jpg": 189,
	"./album/grabmalreferenzen/grabmalreferenzen-005.jpg": 190,
	"./album/grabmalreferenzen/grabmalreferenzen-006.jpg": 191,
	"./album/grabmalreferenzen/grabmalreferenzen-007.jpg": 192,
	"./album/grabmalreferenzen/grabmalreferenzen-008.jpg": 193,
	"./album/grabmalreferenzen/grabmalreferenzen-009.jpg": 194,
	"./album/grabmalreferenzen/grabmalreferenzen-010.jpg": 195,
	"./album/grabmalreferenzen/grabmalreferenzen-011.jpg": 196,
	"./album/grabmalreferenzen/grabmalreferenzen-012.jpg": 197,
	"./album/grabmalreferenzen/grabmalreferenzen-013.jpg": 198,
	"./album/grabmalreferenzen/grabmalreferenzen-014.jpg": 199,
	"./album/grabmalreferenzen/grabmalreferenzen-015.jpg": 200,
	"./album/grabmalreferenzen/grabmalreferenzen-016.jpg": 201,
	"./album/grabmalreferenzen/grabmalreferenzen-017.jpg": 202,
	"./album/grabmalreferenzen/grabmalreferenzen-018.jpg": 203,
	"./album/grabmalreferenzen/grabmalreferenzen-019.jpg": 204,
	"./album/grabmalreferenzen/grabmalreferenzen-020.jpg": 205,
	"./album/grabmalreferenzen/grabmalreferenzen-021.jpg": 206,
	"./album/grabmalreferenzen/grabmalreferenzen-022.jpg": 207,
	"./album/grabmalreferenzen/grabmalreferenzen-023.jpg": 208,
	"./album/grabmalreferenzen/grabmalreferenzen-024.jpg": 209,
	"./album/restaurierungen/restaurierungen-001.jpg": 210,
	"./album/restaurierungen/restaurierungen-002.jpg": 211,
	"./album/restaurierungen/restaurierungen-003.jpg": 212,
	"./album/restaurierungen/restaurierungen-004.jpg": 213,
	"./album/restaurierungen/restaurierungen-005.jpg": 214,
	"./album/restaurierungen/restaurierungen-006.jpg": 215,
	"./album/restaurierungen/restaurierungen-007.jpg": 216,
	"./banner.webp": 220,
	"./gallery_1.jpg": 221,
	"./gallery_2.jpg": 222,
	"./gallery_3.jpg": 223,
	"./home_1.jpg": 224,
	"./home_2.jpg": 225,
	"./restorations_1.jpg": 226,
	"./restorations_2.jpg": 227,
	"./restorations_3.jpg": 228,
	"./tombs_1.jpg": 229,
	"./tombs_2.jpg": 230,
	"./tombs_3.jpg": 231
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 217;

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/about_1.e37ec02.jpg";

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/about_2.8e2a437.jpg";

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/banner.d466f71.webp";

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/gallery_1.91aa961.jpg";

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/gallery_2.3332734.jpg";

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/gallery_3.04bf6d9.jpg";

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/home_1.ba67854.jpg";

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/home_2.e97d2de.jpg";

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/restorations_1.d73aafb.jpg";

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/restorations_2.ce11aa7.jpg";

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/restorations_3.50d1bec.jpg";

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/tombs_1.b9517c9.jpg";

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/tombs_2.34b6ac1.jpg";

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/tombs_3.c865cb7.jpg";

/***/ }),
/* 232 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ __webpack_require__(2);
/* harmony import */ var _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_32_0_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_30_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_31_0_GalleryAlbumCard_vue_vue_type_style_index_0_id_382780b2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(150);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_32_0_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_30_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_31_0_GalleryAlbumCard_vue_vue_type_style_index_0_id_382780b2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_32_0_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_30_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_31_0_GalleryAlbumCard_vue_vue_type_style_index_0_id_382780b2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__[key]; }); }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "li[data-v-382780b2]{display:inline-block;width:90%;margin:1rem 0;max-width:20rem;font-size:1rem;text-decoration:none;overflow:hidden;box-shadow:0 0 3rem -1rem rgba(0,0,0,.5);transition:transform .1s ease-in-out,box-shadow .1s;cursor:pointer;border-radius:4px}li[data-v-382780b2]:hover{transform:translateY(-.5rem) scale(1.0125);box-shadow:0 .5em 3rem -1rem rgba(0,0,0,.5)}figure[data-v-382780b2]{list-style:none;display:block;min-height:20rem;background-size:cover;filter:none;transition:filter 1s}span[data-v-382780b2]{font-size:1rem;padding:1em .5em;text-decoration:none}h2[data-v-382780b2],span[data-v-382780b2]{font-family:sans-serif;list-style:none;display:block;color:#515151}h2[data-v-382780b2]{margin:0 0 .5rem!important}h2[data-v-382780b2],p[data-v-382780b2]{text-align:center}p[data-v-382780b2]{font-family:sans-serif;list-style:none;font-size:1rem;color:#515151;margin:0!important}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(261);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default;
module.exports.__inject__ = function (context) {
  add("1f2e46fe", content, true, context);
};

/***/ }),
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@vue/composition-api/dist/vue-composition-api.mjs
__webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--32-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--30-0!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--31-0!./components/GalleryAlbumCard.vue?vue&type=template&id=382780b2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',[_c('NuxtLink',{attrs:{"to":_vm.path}},[_c('figure',{style:({
        backgroundImage: ("url('" + (__webpack_require__(217)("./" + _vm.thumbnail)) + "')"),
      })}),_vm._v(" "),_c('span',[_c('h2',[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.amount)+" Bilder")])])])],1)};
var staticRenderFns = [];


// CONCATENATED MODULE: ./components/GalleryAlbumCard.vue?vue&type=template&id=382780b2&scoped=true&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--32-0!./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--30-0!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--31-0!./components/GalleryAlbumCard.vue?vue&type=script&lang=js&
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
/* harmony default export */ var GalleryAlbumCardvue_type_script_lang_js_ = ({
  name: "GalleryAlbumCard",
  props: {
    title: String,
    thumbnail: String,
    amount: Number,
    path: String
  }
});
// CONCATENATED MODULE: ./components/GalleryAlbumCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_GalleryAlbumCardvue_type_script_lang_js_ = (GalleryAlbumCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./components/GalleryAlbumCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(232);
if (style0.__inject__) style0.__inject__(context);

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_GalleryAlbumCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "382780b2",
  "c4b42120"
  
);

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./grabmallager-001.jpg": 152,
	"./grabmallager-002.jpg": 153,
	"./grabmallager-003.jpg": 154,
	"./grabmallager-004.jpg": 155,
	"./grabmallager-005.jpg": 156,
	"./grabmallager-006.jpg": 157,
	"./grabmallager-007.jpg": 158,
	"./grabmallager-008.jpg": 159,
	"./grabmallager-009.jpg": 160,
	"./grabmallager-010.jpg": 161,
	"./grabmallager-011.jpg": 162,
	"./grabmallager-012.jpg": 163,
	"./grabmallager-013.jpg": 164,
	"./grabmallager-014.jpg": 165,
	"./grabmallager-015.jpg": 166,
	"./grabmallager-016.jpg": 167,
	"./grabmallager-017.jpg": 168,
	"./grabmallager-018.jpg": 169,
	"./grabmallager-019.jpg": 170,
	"./grabmallager-020.jpg": 171,
	"./grabmallager-021.jpg": 172,
	"./grabmallager-022.jpg": 173,
	"./grabmallager-023.jpg": 174,
	"./grabmallager-024.jpg": 175,
	"./grabmallager-025.jpg": 176,
	"./grabmallager-026.jpg": 177,
	"./grabmallager-027.jpg": 178,
	"./grabmallager-028.jpg": 179,
	"./grabmallager-029.jpg": 180,
	"./grabmallager-030.jpg": 181,
	"./grabmallager-031.jpg": 182,
	"./grabmallager-032.jpg": 183,
	"./grabmallager-033.jpg": 184,
	"./grabmallager-034.jpg": 185
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 257;

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./grabmalreferenzen-001.jpg": 186,
	"./grabmalreferenzen-002.jpg": 187,
	"./grabmalreferenzen-003.jpg": 188,
	"./grabmalreferenzen-004.jpg": 189,
	"./grabmalreferenzen-005.jpg": 190,
	"./grabmalreferenzen-006.jpg": 191,
	"./grabmalreferenzen-007.jpg": 192,
	"./grabmalreferenzen-008.jpg": 193,
	"./grabmalreferenzen-009.jpg": 194,
	"./grabmalreferenzen-010.jpg": 195,
	"./grabmalreferenzen-011.jpg": 196,
	"./grabmalreferenzen-012.jpg": 197,
	"./grabmalreferenzen-013.jpg": 198,
	"./grabmalreferenzen-014.jpg": 199,
	"./grabmalreferenzen-015.jpg": 200,
	"./grabmalreferenzen-016.jpg": 201,
	"./grabmalreferenzen-017.jpg": 202,
	"./grabmalreferenzen-018.jpg": 203,
	"./grabmalreferenzen-019.jpg": 204,
	"./grabmalreferenzen-020.jpg": 205,
	"./grabmalreferenzen-021.jpg": 206,
	"./grabmalreferenzen-022.jpg": 207,
	"./grabmalreferenzen-023.jpg": 208,
	"./grabmalreferenzen-024.jpg": 209
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 258;

/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./restaurierungen-001.jpg": 210,
	"./restaurierungen-002.jpg": 211,
	"./restaurierungen-003.jpg": 212,
	"./restaurierungen-004.jpg": 213,
	"./restaurierungen-005.jpg": 214,
	"./restaurierungen-006.jpg": 215,
	"./restaurierungen-007.jpg": 216
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 259;

/***/ }),
/* 260 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ __webpack_require__(2);
/* harmony import */ var _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_32_0_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_30_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_31_0_slug_vue_vue_type_style_index_0_id_a133b7dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(241);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_32_0_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_30_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_31_0_slug_vue_vue_type_style_index_0_id_a133b7dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_32_0_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_30_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_31_0_slug_vue_vue_type_style_index_0_id_a133b7dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__[key]; }); }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "section[data-v-a133b7dc]{position:relative}.v-application ul[data-v-a133b7dc]{padding:initial}.card-container[data-v-a133b7dc]{display:flex;flex-wrap:wrap;justify-content:space-around;margin:0 auto;padding:0;font-size:0;text-align:center;list-style:none}.card-container[data-v-a133b7dc]::-webkit-scrollbar{width:0!important}.card-container>span[data-v-a133b7dc]{margin:16px}.image-container[data-v-a133b7dc]{display:flex;flex-wrap:wrap}.image-container[data-v-a133b7dc]:after{content:\"\";flex-grow:999999999}.image-container span[data-v-a133b7dc]{margin:4px;position:relative}.image-container i[data-v-a133b7dc]{display:block}.image-container img[data-v-a133b7dc]{border-radius:4px;position:absolute;top:0;width:100%;vertical-align:bottom;transition:all .3s ease 0s}.image-container img[data-v-a133b7dc]:hover{box-shadow:0 .5rem 3rem -.5rem rgba(0,0,0,.5);z-index:8;cursor:pointer}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@vue/composition-api/dist/vue-composition-api.mjs
__webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--32-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--30-0!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--31-0!./pages/galerie/_slug.vue?vue&type=template&id=a133b7dc&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"document page"},[_vm._ssrNode("<div class=\"mt-8\" data-v-a133b7dc>","</div>",[_c('router-link',{attrs:{"to":"/galerie"}},[_c('h1',[_vm._v("Galerie")])])],1),_vm._ssrNode(" <p data-v-a133b7dc>\n    Eine kleine Übersicht über unsere bisherigen Leistungen finden Sie hier.\n  </p> "),_vm._ssrNode("<section data-v-a133b7dc>","</section>",[_vm._ssrNode("<ul class=\"card-container\" data-v-a133b7dc>","</ul>",_vm._l((_vm.albums),function(album){return _c('GalleryAlbumCard',{key:album.path,attrs:{"title":album.title,"path":_vm.galleryPath + '/' + album.path,"thumbnail":album.thumbnail,"amount":album.context.keys().length}})}),1),_vm._ssrNode(" "),(_vm.renderedImages)?_vm._ssrNode("<div class=\"my-8 image-container\" data-v-a133b7dc>","</div>",_vm._l((_vm.renderedImages),function(image){return _vm._ssrNode("<span"+(_vm._ssrStyle(null,("width:" + ((image.width * 384) / image.height) + "px;flex-grow:" + ((image.width * 300) / image.height)), null))+" data-v-a133b7dc>","</span>",[_vm._ssrNode("<i"+(_vm._ssrStyle(null,("padding-top:" + ((image.height / image.width) * 100) + "%"), null))+" data-v-a133b7dc></i> "),_c('nuxt-img',{attrs:{"src":image.src,"alt":""}})],2)}),0):_vm._e()],2)],2)};
var staticRenderFns = [];


// CONCATENATED MODULE: ./pages/galerie/_slug.vue?vue&type=template&id=a133b7dc&scoped=true&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--32-0!./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--30-0!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--31-0!./pages/galerie/_slug.vue?vue&type=script&lang=js&
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
let albums = [{
  path: "grabmallager",
  title: "Grabmallager",
  thumbnail: "gallery_1.jpg",
  context: __webpack_require__(257)
}, {
  path: "grabmalreferenzen",
  title: "Grabmalreferenzen",
  thumbnail: "gallery_2.jpg",
  context: __webpack_require__(258)
}, {
  path: "restaurierungen",
  title: "Restaurierungen",
  thumbnail: "gallery_3.jpg",
  context: __webpack_require__(259)
}];
/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  head() {
    return {
      title: "Galerie"
    };
  },

  data() {
    return {
      albums: albums,
      imageKey: 0,
      images: []
    };
  },

  computed: {
    galleryPath: function () {
      let path = this.$nuxt.$route.path.split("/").filter(e => e);

      if (path.length > 1) {
        path.pop();
      }

      return "/" + path.join("/");
    },
    albumPath: function () {
      const path = this.$nuxt.$route.path.split("/").filter(e => e);

      if (path.length > 1) {
        return path[path.length - 1];
      }

      return "";
    },
    currentAlbum: function () {
      return this.albums.find(album => album.path == this.albumPath);
    },
    preloadAlbum: function () {
      let images = [];

      if (this.currentAlbum) {
        this.currentAlbum.context.keys().forEach(img => {
          images.push({
            src: `album/${this.albumPath}${img.substring(1)}`
          });
        });
      }

      return images;
    },
    renderedImages: function () {
      if (this.images.length) {
        return this.images;
      }

      return this.preloadAlbum;
    }
  },

  mounted() {
    if (this.currentAlbum) {
      let images = [];
      let i = 0;
      const length = this.currentAlbum.context.keys().length;
      this.currentAlbum.context.keys().forEach(img => {
        const src = `album/${this.albumPath}${img.substring(1)}`;
        const image = new Image();

        image.onload = () => {
          images.push({
            src: src,
            width: image.width,
            height: image.height
          });

          if (++i == length) {
            this.images = images;
          }
        };

        image.src = this.$img(src);
      });
    }
  }

});
// CONCATENATED MODULE: ./pages/galerie/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var galerie_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./pages/galerie/_slug.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(260);
if (style0.__inject__) style0.__inject__(context);

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  galerie_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "a133b7dc",
  "433a4fd5"
  
);

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {GalleryAlbumCard: __webpack_require__(245).default});


/***/ })
]);

const _slug = /*#__PURE__*/Object.freeze(/*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	'default': _slug$1,
	ids: ids,
	modules: modules
}, [_slug$1]));

export { _slug as _ };

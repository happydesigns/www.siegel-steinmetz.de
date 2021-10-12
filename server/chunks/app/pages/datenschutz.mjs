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

var datenschutz$1 = {};

var ids = datenschutz$1.ids = [9,4];
var modules = datenschutz$1.modules = {

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(142);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default;
module.exports.__inject__ = function (context) {
  add("4d4b4e9e", content, true, context);
};

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ __webpack_require__(2);
/* harmony import */ var _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_32_0_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_30_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_31_0_LinkExternal_vue_vue_type_style_index_0_id_f1f67810_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(138);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_32_0_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_30_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_31_0_LinkExternal_vue_vue_type_style_index_0_id_f1f67810_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_32_0_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_30_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_31_0_LinkExternal_vue_vue_type_style_index_0_id_f1f67810_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__[key]; }); }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "a[data-v-f1f67810]{color:#1976d2}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@vue/composition-api/dist/vue-composition-api.mjs
__webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--32-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--30-0!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--31-0!./components/LinkExternal.vue?vue&type=template&id=f1f67810&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{attrs:{"target":"_blank"}},[_vm._t("default")],2)};
var staticRenderFns = [];


// CONCATENATED MODULE: ./components/LinkExternal.vue?vue&type=template&id=f1f67810&scoped=true&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--32-0!./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--30-0!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--31-0!./components/LinkExternal.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
/* harmony default export */ var LinkExternalvue_type_script_lang_js_ = ({
  name: 'LinkExternal'
});
// CONCATENATED MODULE: ./components/LinkExternal.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_LinkExternalvue_type_script_lang_js_ = (LinkExternalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./components/LinkExternal.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(141);
if (style0.__inject__) style0.__inject__(context);

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_LinkExternalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "f1f67810",
  "2ebe1be8"
  
);

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@vue/composition-api/dist/vue-composition-api.mjs
__webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--32-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--30-0!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--31-0!./pages/datenschutz.vue?vue&type=template&id=403cf2ae&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"document page"},[_vm._ssrNode("<div class=\"mt-8\">","</div>",[_c('router-link',{attrs:{"to":"/datenschutz"}},[_c('h1',[_vm._v("Datenschutzerklärung")])])],1),_vm._ssrNode(" <p>Stand: 15.05.2018, in Bearbeitung</p> "),_vm._ssrNode("<div class=\"my-8\">","</div>",[_vm._ssrNode("<h2>Maßgebliche Rechtsgrundlagen</h2> <p>Nach Maßgabe des Art. 13 DSGVO teilen wir Ihnen die Rechtsgrundlagen unserer Datenverarbeitungen mit. Sofern die Rechtsgrundlage in der Datenschutzerklärung nicht genannt wird, gilt Folgendes: Die Rechtsgrundlage für die Einholung von Einwilligungen ist Art. 6 Abs. 1 lit. a und Art. 7 DSGVO, die Rechtsgrundlage für die Verarbeitung zur Erfüllung unserer Leistungen und Durchführung vertraglicher Maßnahmen sowie Beantwortung von Anfragen ist Art. 6 Abs. 1 lit. b DSGVO, die Rechtsgrundlage für die Verarbeitung zur Erfüllung unserer rechtlichen Verpflichtungen ist Art. 6 Abs. 1 lit. c DSGVO, und die Rechtsgrundlage für die Verarbeitung zur Wahrung unserer berechtigten Interessen ist Art. 6 Abs. 1 lit. f DSGVO. Für den Fall, dass lebenswichtige Interessen der betroffenen Person oder einer anderen natürlichen Person eine Verarbeitung personenbezogener Daten erforderlich machen, dient Art. 6 Abs. 1 lit. d DSGVO als Rechtsgrundlage.</p> <h2>Änderungen und Aktualisierungen der Datenschutzerklärung</h2> <p>Wir bitten Sie, sich regelmäßig über den Inhalt unserer Datenschutzerklärung zu informieren. Wir passen die Datenschutzerklärung an, sobald die Änderungen der von uns durchgeführten Datenverarbeitungen dies erforderlich machen. Wir informieren Sie, sobald durch die Änderungen eine Mitwirkungshandlung Ihrerseits (z.B. Einwilligung) oder eine sonstige individuelle Benachrichtigung erforderlich wird.</p> <h2>Sicherheitsmaßnahmen</h2> <p>Wir treffen nach Maßgabe des Art. 32 DSGVO unter Berücksichtigung des Stands der Technik, der Implementierungskosten und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeit und Schwere des Risikos für die Rechte und Freiheiten natürlicher Personen, geeignete technische und organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten; Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch Kontrolle des physischen Zugangs zu den Daten, als auch des sie betreffenden Zugriffs, der Eingabe, Weitergabe, der Sicherung der Verfügbarkeit und ihrer Trennung. Des Weiteren haben wir Verfahren eingerichtet, die eine Wahrnehmung von Betroffenenrechten, Löschung von Daten und Reaktion auf Gefährdung der Daten gewährleisten. Ferner berücksichtigen wir den Schutz personenbezogener Daten bereits bei der Entwicklung, bzw. Auswahl von Hardware, Software sowie Verfahren, entsprechend dem Prinzip des Datenschutzes durch Technikgestaltung und durch datenschutzfreundliche Voreinstellungen berücksichtigt (Art. 25 DSGVO).</p> <p>Zu den Sicherheitsmaßnahmen gehört insbesondere die verschlüsselte Übertragung von Daten zwischen Ihrem Browser und unserem Server.</p> <h2>Zusammenarbeit mit Auftragsverarbeitern und Dritten</h2> <p>Sofern wir im Rahmen unserer Verarbeitung Daten gegenüber anderen Personen und Unternehmen (Auftragsverarbeitern oder Dritten) offenbaren, sie an diese übermitteln oder ihnen sonst Zugriff auf die Daten gewähren, erfolgt dies nur auf Grundlage einer gesetzlichen Erlaubnis (z.B. wenn eine Übermittlung der Daten an Dritte, wie an Zahlungsdienstleister, gem. Art. 6 Abs. 1 lit. b DSGVO zur Vertragserfüllung erforderlich ist), Sie eingewilligt haben, eine rechtliche Verpflichtung dies vorsieht oder auf Grundlage unserer berechtigten Interessen (z.B. beim Einsatz von Beauftragten, Webhostern, etc.).</p> <p>Sofern wir Dritte mit der Verarbeitung von Daten auf Grundlage eines sog. „Auftragsverarbeitungsvertrages“ beauftragen, geschieht dies auf Grundlage des Art. 28 DSGVO.</p> <h2>Datenübermittlung in Drittstaaten</h2> <p>Außer bei den oben genannten Anwendungen erfolgt keine Übermittlung in Staaten außerhalb der EU und ist auch nicht geplant.</p> <h2>Betroffenenrechte</h2> <p>Sie haben das Recht auf:</p> <ul><li>Auskunft über Ihre gespeicherten Daten</li> <li>Berichtigung und Vervollständigung Ihrer hinterlegten Daten</li> <li>Löschung Ihrer nicht mehr benötigten Daten</li> <li>Einschränkung der Verarbeitung Ihrer Daten</li> <li>Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft</li> <li>Widerspruch bezüglich der künftigen Verarbeitung der Sie betreffenden Daten, insbesondere gegen die Verarbeitung für Zwecke der Direktwerbung</li> <li>Erhalt und Übermittlung an andere Verantwortliche der Sie betreffenden Daten</li></ul> <h2>Erbringung vertraglicher Leistungen</h2> <p>Sofern Bestandsdaten (z.B., Namen und Adressen sowie Kontaktdaten von Nutzern) verarbeitet werden, geschieht dies zur Erfüllung unserer vertraglichen Verpflichtungen und Serviceleistungen gem. Art. 6 Abs. 1 lit b. DSGVO. So sind die in Onlineformularen als verpflichtend gekennzeichneten Eingaben für den Vertragsschluss erforderlich.</p> <h2>Löschung von Daten</h2> <p>Die von uns verarbeiteten Daten werden nach Maßgabe der Art. 17 und 18 DSGVO gelöscht oder in ihrer Verarbeitung eingeschränkt. Sofern nicht im Rahmen dieser Datenschutzerklärung ausdrücklich angegeben, werden die bei uns gespeicherten Daten gelöscht, sobald sie für ihre Zweckbestimmung nicht mehr erforderlich sind und der Löschung keine gesetzlichen Aufbewahrungspflichten entgegenstehen. Sofern die Daten nicht gelöscht werden, weil sie für andere und gesetzlich zulässige Zwecke erforderlich sind, wird deren Verarbeitung eingeschränkt. D.h. die Daten werden gesperrt und nicht für andere Zwecke verarbeitet. Das gilt z.B. für Daten, die aus handels- oder steuerrechtlichen Gründen aufbewahrt werden müssen.</p> <h2>Kontaktaufnahme</h2> <p>Bei der Kontaktaufnahme mit uns (per Kontaktformular oder E-Mail) werden die Angaben des Nutzers zur Bearbeitung der Kontaktanfrage und deren Abwicklung gem. Art. 6 Abs. 1 lit. b) DSGVO verarbeitet.</p> <p>Die Angaben der Nutzer können in einem Customer-Relationship-Management System (&quot;CRM System&quot;) oder vergleichbarer Anfragenorganisation gespeichert werden.</p> <p>Wir löschen die Anfragen, sofern diese nicht mehr erforderlich sind. Wir überprüfen die Erforderlichkeit alle zwei Jahre; Anfragen von Kunden, die über ein Kundenkonto verfügen, speichern wir dauerhaft und verweisen zur Löschung auf die Angaben zum Kundenkonto. Im Fall der gesetzlichen Archivierungspflichten erfolgt die Löschung nach deren Ablauf (Ende handelsrechtlicher (6 Jahre) und steuerrechtlicher (10 Jahre) Aufbewahrungspflicht).</p> <h2>Erhebung von Zugriffsdaten und Logfiles</h2> <p>Wir erheben auf Grundlage unserer berechtigten Interessen im Sinne des Art. 6 Abs. 1 lit. f. DSGVO Daten über jeden Zugriff auf den Server, auf dem sich dieser Dienst befindet (sogenannte Serverlogfiles). Zu den Zugriffsdaten gehören Name der abgerufenen Webseite, Datei, Datum und Uhrzeit des Abrufs, übertragene Datenmenge, Meldung über erfolgreichen Abruf, Browsertyp nebst Version, das Betriebssystem des Nutzers, Referrer URL (die zuvor besuchte Seite), IP-Adresse und der anfragende Provider.</p> <p>Logfile-Informationen werden aus Sicherheitsgründen (z.B. zur Aufklärung von Missbrauchs- oder Betrugshandlungen) für die Dauer von maximal sieben Tagen gespeichert und danach gelöscht. Daten, deren weitere Aufbewahrung zu Beweiszwecken erforderlich ist, sind bis zur endgültigen Klärung des jeweiligen Vorfalls von der Löschung ausgenommen.</p> <h2>Onlinepräsenzen in sozialen Medien</h2> <p>Wir betreiben im Rahmen unserer berechtigten Interessen im Sinne des Art. 6 Abs. 1 lit. f. DSGVO Onlinepräsenzen innerhalb sozialer Netzwerke und Plattformen, um mit den dort aktiven Kunden, Interessenten und Nutzern zu kommunizieren und sie dort über unsere Leistungen informieren zu können. Beim Aufruf der jeweiligen Netzwerke und Plattformen gelten die Geschäftsbedingungen und die Datenverarbeitungsrichtlinien deren jeweiligen Betreiber.</p> <p>Soweit nicht anders im Rahmen unserer Datenschutzerklärung angegeben, verarbeiten wir die Daten der Nutzer sofern diese mit uns innerhalb der sozialen Netzwerke und Plattformen kommunizieren, z.B. Beiträge auf unseren Onlinepräsenzen verfassen oder uns Nachrichten zusenden.</p> <h2>Einbindung von Diensten und Inhalten Dritter</h2> <p>Wir setzen innerhalb unseres Onlineangebotes auf Grundlage unserer berechtigten Interessen (d.h. Interesse an der Analyse, Optimierung und wirtschaftlichem Betrieb unseres Onlineangebotes im Sinne des Art. 6 Abs. 1 lit. f. DSGVO) Inhalts- oder Serviceangebote von Drittanbietern ein, um deren Inhalte und Services, wie z.B. Videos oder Schriftarten einzubinden (nachfolgend einheitlich bezeichnet als “Inhalte”). Dies setzt immer voraus, dass die Drittanbieter dieser Inhalte, die IP-Adresse der Nutzer wahrnehmen, da sie ohne die IP-Adresse die Inhalte nicht an deren Browser senden könnten. Die IP-Adresse ist damit für die Darstellung dieser Inhalte erforderlich. Wir bemühen uns, nur solche Inhalte zu verwenden, deren jeweilige Anbieter die IP-Adresse lediglich zur Auslieferung der Inhalte verwenden. Drittanbieter können ferner sogenannte Pixel-Tags (unsichtbare Grafiken, auch als &quot;Web Beacons&quot; bezeichnet) für statistische oder Marketingzwecke verwenden. Durch die &quot;Pixel-Tags&quot; können Informationen, wie der Besucherverkehr auf den Seiten dieser Website ausgewertet werden. Die pseudonymen Informationen können ferner in Cookies auf dem Gerät der Nutzer gespeichert werden und unter anderem technische Informationen zum Browser und Betriebssystem, verweisende Webseiten, Besuchszeit sowie weitere Angaben zur Nutzung unseres Onlineangebotes enthalten, als auch mit solchen Informationen aus anderen Quellen verbunden werden können.</p> <p>Die nachfolgende Darstellung bietet eine Übersicht von Drittanbietern sowie ihrer Inhalte, nebst Links zu deren Datenschutzerklärungen, welche weitere Hinweise zur Verarbeitung von Daten und, z.T. bereits hier genannt, Widerspruchsmöglichkeiten (sog. Opt-Out) enthalten:</p> "),_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_vm._ssrNode("Externe Schriftarten von Google, LLC., "),_c('LinkExternal',{attrs:{"href":"https://fonts.google.com"}},[_vm._v("https://fonts.google.com")]),_vm._ssrNode(" („Google Fonts“). Die Einbindung der Google Fonts erfolgt durch einen Serveraufruf bei Google (in der Regel in den USA). Datenschutzerklärung: "),_c('LinkExternal',{attrs:{"href":"https://policies.google.com/privacy"}},[_vm._v("https://policies.google.com/privacy")]),_vm._ssrNode(", Opt-Out: "),_c('LinkExternal',{attrs:{"href":"https://adssettings.google.com"}},[_vm._v("https://adssettings.google.com")]),_vm._ssrNode(".")],2),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_vm._ssrNode("Landkarten des Dienstes „Google Maps“ des Drittanbieters Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA, gestellt. Datenschutzerklärung: "),_c('LinkExternal',{attrs:{"href":"https://policies.google.com/privacy"}},[_vm._v("https://policies.google.com/privacy")]),_vm._ssrNode(", Opt-Out: "),_c('LinkExternal',{attrs:{"href":"https://adssettings.google.com"}},[_vm._v("https://adssettings.google.com")]),_vm._ssrNode(".")],2),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_vm._ssrNode("Videos der Plattform “YouTube” des Drittanbieters Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA. Datenschutzerklärung: "),_c('LinkExternal',{attrs:{"href":""}},[_vm._v("https://policies.google.com/privacy")]),_vm._ssrNode(", Opt-Out: "),_c('LinkExternal',{attrs:{"href":"https://adssettings.google.com"}},[_vm._v("https://adssettings.google.com")]),_vm._ssrNode(".")],2),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_vm._ssrNode("Innerhalb unseres Onlineangebotes können Funktionen des Dienstes, bzw. der Plattform Twitter eingebunden sein (nachfolgend bezeichnet als „Twitter“). Twitter ist ein Angebot der Twitter Inc., 1355 Market Street, Suite 900, San Francisco, CA 94103, USA. Die Funktionen beinhalten die Darstellung unserer Beiträge innerhalb von Twitter innerhalb unseres Onlineangebotes, die Verknüpfung zu unserem Profil bei Twitter sowie die Möglichkeit mit den Beiträgen und den Funktionen von Twitter zu interagieren, als auch zu messen, ob Nutzer über die von uns bei Twitter geschalteten Werbeanzeigen auf unser "),_c('LinkExternal',{attrs:{"href":"https://foe-fa.de"}},[_vm._v("Onlineangebot")]),_vm._ssrNode(" gelangen (sog. Conversion-Messung). Twitter ist unter dem Privacy-Shield-Abkommen zertifiziert und bietet hierdurch eine Garantie, das europäische Datenschutzrecht einzuhalten ("),_c('LinkExternal',{attrs:{"href":"https://www.privacyshield.gov/participant?id=a2zt0000000TORzAAO"}},[_vm._v("https://www.privacyshield.gov/participant?id=a2zt0000000TORzAAO")]),_vm._ssrNode("). Datenschutzerklärung: "),_c('LinkExternal',{attrs:{"href":"https://twitter.com/de/privacy"}},[_vm._v("https://twitter.com/de/privacy")]),_vm._ssrNode(", Opt-Out: "),_c('LinkExternal',{attrs:{"href":"https://twitter.com/personalization"}},[_vm._v("https://twitter.com/personalization")]),_vm._ssrNode(".")],2),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_vm._ssrNode("\n        Plugins des Videoportals Vimeo, Vimeo-Channels\n        <br>Auf unseren Websites sind Plugins des Videoportals „Vimeo“ der Vimeo, LLC, 555 West 18th Street, New York, New York 10011, USA eingebunden. Bei jedem Aufruf einer Seite, die ein oder mehrere Vimeo-Videoclips anbietet, wird eine direkte Verbindung zwischen Ihrem Browser und einem Server von Vimeo in den USA hergestellt. Dabei werden Informationen über Ihren Besuch und Ihre IP-Adresse dort gespeichert. Durch Interaktionen mit den Vimeo-Plugins (z.B. Klicken des Start-Buttons) werden diese Informationen ebenfalls an Vimeo übermittelt und dort gespeichert.\n        <br>Die Datenschutzerklärung für Vimeo mit näheren Informationen zur Erhebung und Nutzung Ihrer Daten durch Vimeo finden Sie unter "),_c('LinkExternal',{attrs:{"href":"https://vimeo.com/privacy"}},[_vm._v("https://vimeo.com/privacy")]),_vm._ssrNode(".\n        <br>Außerdem ruft Vimeo über einen iFrame, in dem das Video aufgerufen wird, den Tracker Google Analytics auf. Dabei handelt es sich um ein eigenes Tracking von Vimeo, auf das wir keinen Zugriff haben. Sie können das Tracking durch Google Analytics unterbinden, indem Sie die Deaktivierungs-Tools einsetzen, die Google für einige Internet-Browser anbietet. Die Nutzer können darüber hinaus die Erfassung der durch Google Analytics erzeugten und auf ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem sie das unter dem folgenden Link verfügbare Browser-Plugin herunterladen und installieren:\n        "),_c('LinkExternal',{attrs:{"href":"https://tools.google.com/dlpage/gaoptout"}},[_vm._v("https://tools.google.com/dlpage/gaoptout")])],2),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_vm._ssrNode("\n        Externer Code des JavaScript-Frameworks “jQuery”, bereitgestellt durch den Dritt-Anbieter jQuery Foundation,\n        "),_c('LinkExternal',{attrs:{"href":"https://jquery.org"}},[_vm._v("https://jquery.org")]),_vm._ssrNode(".\n      ")],2)],2),_vm._ssrNode(" <h2>Aufsichtsbehörde</h2> <p>Gemäß Artikel 77 EU-DSGVO können Sie Beschwerde bei einer Aufsichtsbehörde erheben, wenn Sie der Ansicht sind, dass die Verarbeitung der sie betreffenden personenbezogenen Daten gegen die EU-DSGVO oder das BDSG verstößt.</p> <h2>Newsletter</h2> <p>Mit den nachfolgenden Hinweisen informieren wir Sie über die Inhalte unseres Newsletters sowie das Anmelde-, Versand- und das statistische Auswertungsverfahren sowie Ihre Widerspruchsrechte. Indem Sie unseren Newsletter abonnieren, erklären Sie sich mit dem Empfang und den beschriebenen Verfahren einverstanden.</p> <p>Inhalt des Newsletters: Wir versenden Newsletter, E-Mails und weitere elektronische Benachrichtigungen mit werblichen Informationen (nachfolgend „Newsletter“) nur mit der Einwilligung der Empfänger oder einer gesetzlichen Erlaubnis. Sofern im Rahmen einer Anmeldung zum Newsletter dessen Inhalte konkret umschrieben werden, sind sie für die Einwilligung der Nutzer maßgeblich. Im Übrigen enthalten unsere Newsletter Informationen zu unseren Produkten, Angeboten, Aktionen und unserem Unternehmen.</p> <p>Double-Opt-In und Protokollierung: Die Anmeldung zu unserem Newsletter erfolgt in einem sog. Double-Opt-In-Verfahren. D.h. Sie erhalten nach der Anmeldung eine E-Mail, in der Sie um die Bestätigung Ihrer Anmeldung gebeten werden. Diese Bestätigung ist notwendig, damit sich niemand mit fremden E-Mailadressen anmelden kann. Die Anmeldungen zum Newsletter werden protokolliert, um den Anmeldeprozess entsprechend den rechtlichen Anforderungen nachweisen zu können. Hierzu gehört die Speicherung des Anmelde- und des Bestätigungszeitpunkts, als auch der IP-Adresse. Ebenso werden die Änderungen Ihrer bei dem Versanddienstleister gespeicherten Daten protokolliert.</p> "),_vm._ssrNode("<p>","</p>",[_vm._ssrNode("Versanddienstleister: Der Versand der Newsletter erfolgt mittels „MailChimp“, einer Newsletterversandplattform des US-Anbieters Rocket Science Group, LLC, 675 Ponce De Leon Ave NE #5000, Atlanta, GA 30308, USA. Die Datenschutzbestimmungen des Versanddienstleisters können Sie hier einsehen: "),_c('LinkExternal',{attrs:{"href":""}},[_vm._v("mailchimp.com/legal/privacy/.")])],2),_vm._ssrNode(" "),_vm._ssrNode("<p>","</p>",[_vm._ssrNode("The Rocket Science Group LLC d/b/a MailChimp ist unter dem Privacy-Shield-Abkommen zertifiziert und bietet hierdurch eine Garantie, das europäisches Datenschutzniveau einzuhalten ("),_c('LinkExternal',{attrs:{"href":"https://www.privacyshield.gov/participant?id=a2zt0000000TO6hAAG"}},[_vm._v("https://www.privacyshield.gov/participant?id=a2zt0000000TO6hAAG")]),_vm._ssrNode(")")],2),_vm._ssrNode(" <p>Anmeldedaten: Um sich für den Newsletter anzumelden, reicht es aus, wenn Sie Ihre E-Mailadresse angeben.</p> <h2>Einsatz von Cookies</h2> <p>Cookies sind Informationen, die von unserem Webserver oder Webservern Dritter an die Web-Browser der Nutzer übertragen und dort für einen späteren Abruf gespeichert werden. Bei Cookies kann es sich um kleine Dateien oder sonstige Arten der Informationsspeicherung handeln.</p> <p>Wir verwenden „Session-Cookies“, die nur für die Zeitdauer des aktuellen Besuchs auf unserer Onlinepräsenz abgelegt werden (z.B. um die Speicherung Ihres Login-Status oder die Warenkorbfunktion und somit die Nutzung unseres Onlineangebotes überhaupt ermöglichen zu können). In einem Session-Cookie wird eine zufällig erzeugte eindeutige Identifikationsnummer abgelegt, eine sogenannte Session-ID. Außerdem enthält ein Cookie die Angabe über seine Herkunft und die Speicherfrist. Diese Cookies können keine anderen Daten speichern. Session-Cookies werden gelöscht, wenn Sie die Nutzung unseres Onlineangebotes beendet haben und sich z.B. ausloggen oder den Browser schließen.</p> <p>Über den Einsatz von Cookies im Rahmen pseudonymer Reichweitenmessung werden die Nutzer im Rahmen dieser Datenschutzerklärung informiert.</p> <p>Falls Sie nicht möchten, dass Cookies auf Ihrem Rechner gespeichert werden, werden Sie gebeten, die entsprechende Option in den Systemeinstellungen Ihres Browsers zu deaktivieren. Gespeicherte Cookies können in den Systemeinstellungen des Browsers gelöscht werden. Der Ausschluss von Cookies kann zu Funktionseinschränkungen dieses Onlineangebotes führen.</p> "),_vm._ssrNode("<p>","</p>",[_vm._ssrNode("Sie können dem Einsatz von Cookies, die der Reichweitenmessung und Werbezwecken dienen, über die Deaktivierungsseite der Netzwerkwerbeinitiative ("),_c('LinkExternal',{attrs:{"href":""}},[_vm._v("http://optout.networkadvertising.org/")]),_vm._ssrNode(") und zusätzlich die US-amerikanische Webseite ("),_c('LinkExternal',{attrs:{"href":"http://www.aboutads.info/choices"}},[_vm._v("http://www.aboutads.info/choices")]),_vm._ssrNode(") oder die europäische Webseite ("),_c('LinkExternal',{attrs:{"href":"http://www.youronlinechoices.com/uk/your-ad-choices"}},[_vm._v("http://www.youronlinechoices.com/uk/your-ad-choices")]),_vm._ssrNode(") widersprechen.")],2),_vm._ssrNode(" <h2>Verwendung von Matomo (ehemals Piwik)</h2> <p>Diese Webseite benutzt Matomo, eine Open-Source-Software zur statistischen Auswertung von Besucherzugriffen. Matomo verwendet sog. „Cookies“, Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen.</p> <p>Die durch den Cookie erzeugten Informationen über Ihre Nutzung des Internetangebotes werden auf einem Server in Deutschland gespeichert.</p> <p>Die IP-Adresse wird unmittelbar nach der Verarbeitung und vor deren Speicherung anonymisiert. Sie haben die Möglichkeit, die Installation der Cookies durch Änderung der Einstellung Ihrer Browser-Software zu verhindern. Wir weisen Sie darauf hin, dass bei entsprechender Einstellung eventuell nicht mehr alle Funktionen dieser Website zur Verfügung stehen.</p> <h2>Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit</h2> <p>\n      Königstr. 10a\n      <br>70173 Stuttgart\n      <br>Telefon: 0711/6155410\n      <br>E-Mail: poststelle@lfdi.bwl.de\n    </p>")],2)],2)};
var staticRenderFns = [];


// CONCATENATED MODULE: ./pages/datenschutz.vue?vue&type=template&id=403cf2ae&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--32-0!./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--30-0!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--31-0!./pages/datenschutz.vue?vue&type=script&lang=js&
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
/* harmony default export */ var datenschutzvue_type_script_lang_js_ = ({
  head() {
    return {
      title: "Datenschutz"
    };
  }

});
// CONCATENATED MODULE: ./pages/datenschutz.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_datenschutzvue_type_script_lang_js_ = (datenschutzvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./pages/datenschutz.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_datenschutzvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "54fa913c"
  
);

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LinkExternal: __webpack_require__(147).default});


/***/ })

};

const datenschutz = /*#__PURE__*/Object.freeze(/*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  'default': datenschutz$1,
  ids: ids,
  modules: modules
}, [datenschutz$1]));

export { datenschutz as d };

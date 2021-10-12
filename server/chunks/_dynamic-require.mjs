const dynamicChunks = {
 ['components/gallery-album-card.js']: () => import('./app/components/gallery-album-card.mjs').then(function (n) { return n.g; }),
 ['components/header-fixed.js']: () => import('./app/components/header-fixed.mjs').then(function (n) { return n.h; }),
 ['components/hero-section.js']: () => import('./app/components/hero-section.mjs').then(function (n) { return n.h; }),
 ['components/link-external.js']: () => import('./app/components/link-external.mjs').then(function (n) { return n.l; }),
 ['components/navigation-drawer.js']: () => import('./app/components/navigation-drawer.mjs').then(function (n) { return n.n; }),
 ['components/text-image.js']: () => import('./app/components/text-image.mjs').then(function (n) { return n.t; }),
 ['components/text-introduction.js']: () => import('./app/components/text-introduction.mjs').then(function (n) { return n.t; }),
 ['components/titled-image.js']: () => import('./app/components/titled-image.mjs').then(function (n) { return n.t; }),
 ['pages/datenschutz.js']: () => import('./app/pages/datenschutz.mjs').then(function (n) { return n.d; }),
 ['pages/grabmale.js']: () => import('./app/pages/grabmale.mjs').then(function (n) { return n.g; }),
 ['pages/impressum.js']: () => import('./app/pages/impressum.mjs').then(function (n) { return n.i; }),
 ['pages/index.js']: () => import('./app/pages/index.mjs').then(function (n) { return n.i; }),
 ['pages/kontakt.js']: () => import('./app/pages/kontakt.mjs').then(function (n) { return n.k; }),
 ['pages/restaurierungen.js']: () => import('./app/pages/restaurierungen.mjs').then(function (n) { return n.r; }),
 ['pages/ueber-uns.js']: () => import('./app/pages/ueber-uns.mjs').then(function (n) { return n.u; }),
 ['pages/galerie/_slug.js']: () => import('./app/pages/galerie/_slug.mjs').then(function (n) { return n._; })
};

function dynamicRequire(id) {
  return dynamicChunks[id]();
}

export { dynamicRequire as default };

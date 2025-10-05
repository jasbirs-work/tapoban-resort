
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/jasbirs-work.github.io/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-YDAQUZGN.js"
    ],
    "route": "/jasbirs-work.github.io"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-V43TIDHD.js"
    ],
    "route": "/jasbirs-work.github.io/about"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7LUKLOSO.js"
    ],
    "route": "/jasbirs-work.github.io/amenities"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OYEJUPNQ.js"
    ],
    "route": "/jasbirs-work.github.io/gallery"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MLY7DC26.js"
    ],
    "route": "/jasbirs-work.github.io/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/jasbirs-work.github.io",
    "route": "/jasbirs-work.github.io/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5615, hash: '16cc6eb16cd64408faa3390734e8c2cf2e73abb1364b4824c25ecd3270426521', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 6128, hash: 'bd71f7d7ecafcf89e4b979a2c147e7956bfc47ea1a506b98e82a65341c1cdc26', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'gallery/index.html': {size: 16467, hash: 'd6678a9039c356fc938d6d8379de9ad64da6932c67a1e906d505bf8c7077e66e', text: () => import('./assets-chunks/gallery_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 16748, hash: '54405e9b281162acf7a1f409fcf3ae7998b318adc16ba45b9a1e0d2653e3e95b', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 18630, hash: 'd2f6502df24ecf79afcd3c7f2d8b184e03ab6bf2e9f2d2c4ab0c2b3a2ac383e3', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 16822, hash: 'd5b2d9f5e2c8e0f86ce5807e84dd8e7699777638759695dcc0cb7dea57b5bcfd', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'amenities/index.html': {size: 16369, hash: '9bdd6005c9efb44924f3c1d7585d05c6c8219a73d18f62feccba9c0300c33804', text: () => import('./assets-chunks/amenities_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};

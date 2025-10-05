
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/tapoban-resort/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-YDAQUZGN.js"
    ],
    "route": "/tapoban-resort"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-V43TIDHD.js"
    ],
    "route": "/tapoban-resort/about"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7LUKLOSO.js"
    ],
    "route": "/tapoban-resort/amenities"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OYEJUPNQ.js"
    ],
    "route": "/tapoban-resort/gallery"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MLY7DC26.js"
    ],
    "route": "/tapoban-resort/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/tapoban-resort",
    "route": "/tapoban-resort/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5607, hash: 'edbd3d46d1aaf58a324075a198f26c3b8c1aa030b56e47f7cbe7f2cdb20c8a97', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 6120, hash: 'd0f9acd58ae2561acdb41a04d306def8a99545609be5c5bfd7f52b7a45557b99', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 16766, hash: 'dc587de02a9f60194e225631c3fad8ecbd241390025d32164974d2607c0f0793', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 16692, hash: '7d4a35b1b4beb43f0d551bcd7fa3917c19aa183ffd4734d5db7a9f0a0adb59f6', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'gallery/index.html': {size: 16411, hash: '029829384e2d6f50b9610c546032004213f58aec2e6a63608f913c1ba777002d', text: () => import('./assets-chunks/gallery_index_html.mjs').then(m => m.default)},
    'amenities/index.html': {size: 16313, hash: '08da6dec5e952ef5783759a7c3f45b4ed8ea6f66bf2bf543c13c3a4a08cb6575', text: () => import('./assets-chunks/amenities_index_html.mjs').then(m => m.default)},
    'index.html': {size: 18574, hash: 'cc7fa08d30b73c7e9623453e524a622aa91b77982d6a57f3effc1e98da1b2a71', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};

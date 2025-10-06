
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
      "chunk-IXHNSQTD.js"
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
    'index.csr.html': {size: 5607, hash: '025a5a5f7055b8701943de62b883a66b4de8b6aa56505fe9fe3d046fc17d15c4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 6120, hash: 'dce24725c65f2e40a48fc9d49ccbdac6768268ba7d5213f70e55dbfad86caaa8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 16775, hash: '6fcee94eccc4b75b45488b172ea4143cc044490146897ca3c6b0111f9e7e02cd', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 16692, hash: '3e60e3cccbdae6d32f2d19a4fbeee7c1cf3ed0869546e85127a359d31f8bbc8a', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'gallery/index.html': {size: 16411, hash: '2db26e4934bd87c89633cd84ef9e54688a789938968cd242e96395263b0c7954', text: () => import('./assets-chunks/gallery_index_html.mjs').then(m => m.default)},
    'index.html': {size: 18574, hash: 'f4bcc779ce61594081b0498e82b7d0f4c0aee8cf29aba7a9f31835b114a135cb', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'amenities/index.html': {size: 16313, hash: 'aa5b0dd436a23923d4a6baa0027fce085358944bd3dce2ae81247a96110c9f4c', text: () => import('./assets-chunks/amenities_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};

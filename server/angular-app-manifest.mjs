
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://cheikyadam.github.io/portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portfolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6313, hash: '93584e728beaa24614ef5fcb686be57774c75b9649e84e586604b46f15356688', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1036, hash: '15c8a77779bbe4402012dad2eaab8b8c2c05f8d1a41c96f20a80e1af1848c2a1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 113094, hash: 'cf1d67e650dd03e3f6417216984efb4cb2b21ec191c5652a5a8655d50d4f2875', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-R2FPZTV4.css': {size: 313964, hash: 'jg779ERrU64', text: () => import('./assets-chunks/styles-R2FPZTV4_css.mjs').then(m => m.default)}
  },
};

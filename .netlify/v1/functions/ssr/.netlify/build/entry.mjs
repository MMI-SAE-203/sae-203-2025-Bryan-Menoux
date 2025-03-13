import { renderers } from './renderers.mjs';
import { a as actions } from './chunks/_noop-actions_CfKMStZn.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_D1-eCHwu.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/a-propos.astro.mjs');
const _page2 = () => import('./pages/activite.astro.mjs');
const _page3 = () => import('./pages/contact.astro.mjs');
const _page4 = () => import('./pages/film/_id_.astro.mjs');
const _page5 = () => import('./pages/infos-pratiques.astro.mjs');
const _page6 = () => import('./pages/invite/_id_.astro.mjs');
const _page7 = () => import('./pages/invite.astro.mjs');
const _page8 = () => import('./pages/programme/_genre_.astro.mjs');
const _page9 = () => import('./pages/programme.astro.mjs');
const _page10 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/a-propos.astro", _page1],
    ["src/pages/activite/index.astro", _page2],
    ["src/pages/contact.astro", _page3],
    ["src/pages/film/[id].astro", _page4],
    ["src/pages/infos-pratiques.astro", _page5],
    ["src/pages/invite/[id].astro", _page6],
    ["src/pages/invite/index.astro", _page7],
    ["src/pages/programme/[genre].astro", _page8],
    ["src/pages/programme/index.astro", _page9],
    ["src/pages/index.astro", _page10]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "0c8b54f6-0405-4796-976d-fa926cfb8b1b"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };

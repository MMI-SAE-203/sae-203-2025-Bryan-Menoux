import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { n as NOOP_MIDDLEWARE_HEADER, o as decodeKey } from './chunks/astro/server_BqO5gSP-.mjs';
import 'cookie';
import 'es-module-lexer';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/","cacheDir":"file:///C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/node_modules/.astro/","outDir":"file:///C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/dist/","srcDir":"file:///C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/src/","publicDir":"file:///C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/public/","buildClientDir":"file:///C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/dist/","buildServerDir":"file:///C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCFd37Sx.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCFd37Sx.js"}],"styles":[{"type":"external","src":"/_astro/a-propos.Bj6CxNlU.css"}],"routeData":{"route":"/a-propos","isIndex":false,"type":"page","pattern":"^\\/a-propos\\/?$","segments":[[{"content":"a-propos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/a-propos.astro","pathname":"/a-propos","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCFd37Sx.js"}],"styles":[{"type":"external","src":"/_astro/a-propos.Bj6CxNlU.css"}],"routeData":{"route":"/activite","isIndex":true,"type":"page","pattern":"^\\/activite\\/?$","segments":[[{"content":"activite","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/activite/index.astro","pathname":"/activite","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCFd37Sx.js"}],"styles":[{"type":"external","src":"/_astro/a-propos.Bj6CxNlU.css"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCFd37Sx.js"}],"styles":[{"type":"external","src":"/_astro/a-propos.Bj6CxNlU.css"}],"routeData":{"route":"/film/[id]","isIndex":false,"type":"page","pattern":"^\\/film\\/([^/]+?)\\/?$","segments":[[{"content":"film","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/film/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCFd37Sx.js"}],"styles":[{"type":"external","src":"/_astro/a-propos.Bj6CxNlU.css"}],"routeData":{"route":"/infos-pratiques","isIndex":false,"type":"page","pattern":"^\\/infos-pratiques\\/?$","segments":[[{"content":"infos-pratiques","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/infos-pratiques.astro","pathname":"/infos-pratiques","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCFd37Sx.js"}],"styles":[{"type":"external","src":"/_astro/a-propos.Bj6CxNlU.css"}],"routeData":{"route":"/invite/[id]","isIndex":false,"type":"page","pattern":"^\\/invite\\/([^/]+?)\\/?$","segments":[[{"content":"invite","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/invite/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCFd37Sx.js"}],"styles":[{"type":"external","src":"/_astro/a-propos.Bj6CxNlU.css"}],"routeData":{"route":"/invite","isIndex":true,"type":"page","pattern":"^\\/invite\\/?$","segments":[[{"content":"invite","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/invite/index.astro","pathname":"/invite","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCFd37Sx.js"}],"styles":[{"type":"external","src":"/_astro/a-propos.Bj6CxNlU.css"}],"routeData":{"route":"/programme/[genre]","isIndex":false,"type":"page","pattern":"^\\/programme\\/([^/]+?)\\/?$","segments":[[{"content":"programme","dynamic":false,"spread":false}],[{"content":"genre","dynamic":true,"spread":false}]],"params":["genre"],"component":"src/pages/programme/[genre].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCFd37Sx.js"}],"styles":[{"type":"external","src":"/_astro/a-propos.Bj6CxNlU.css"}],"routeData":{"route":"/programme","isIndex":true,"type":"page","pattern":"^\\/programme\\/?$","segments":[[{"content":"programme","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/programme/index.astro","pathname":"/programme","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCFd37Sx.js"}],"styles":[{"type":"external","src":"/_astro/a-propos.Bj6CxNlU.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/src/pages/a-propos.astro",{"propagation":"none","containsHead":true}],["C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/src/pages/activite/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/src/pages/film/[id].astro",{"propagation":"none","containsHead":true}],["C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/src/pages/infos-pratiques.astro",{"propagation":"none","containsHead":true}],["C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/src/pages/invite/[id].astro",{"propagation":"none","containsHead":true}],["C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/src/pages/invite/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/src/pages/programme/[genre].astro",{"propagation":"none","containsHead":true}],["C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/src/pages/programme/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/a-propos@_@astro":"pages/a-propos.astro.mjs","\u0000@astro-page:src/pages/activite/index@_@astro":"pages/activite.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/film/[id]@_@astro":"pages/film/_id_.astro.mjs","\u0000@astro-page:src/pages/infos-pratiques@_@astro":"pages/infos-pratiques.astro.mjs","\u0000@astro-page:src/pages/invite/[id]@_@astro":"pages/invite/_id_.astro.mjs","\u0000@astro-page:src/pages/invite/index@_@astro":"pages/invite.astro.mjs","\u0000@astro-page:src/pages/programme/[genre]@_@astro":"pages/programme/_genre_.astro.mjs","\u0000@astro-page:src/pages/programme/index@_@astro":"pages/programme.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_D5eY6KBZ.mjs","C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_UylsgZ7B.mjs","C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/src/components/Carousel.astro?astro&type=script&index=0&lang.ts":"_astro/Carousel.astro_astro_type_script_index_0_lang.Dg5077i_.js","C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/src/components/GenreSelector.astro?astro&type=script&index=0&lang.ts":"_astro/GenreSelector.astro_astro_type_script_index_0_lang.BUmg2x4M.js","C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.CMRwQkKZ.js","C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/src/components/Hero.astro?astro&type=script&index=0&lang.ts":"_astro/Hero.astro_astro_type_script_index_0_lang.Db6Bdm0g.js","astro:scripts/page.js":"_astro/page.BCFd37Sx.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/src/components/Carousel.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const e=document.getElementById(\"carousel\"),n=document.getElementById(\"prev\"),o=document.getElementById(\"next\");if(!e||!n||!o)return;function l(){const t=e.querySelector(\".snap-center\");if(!t)return 300;const c=parseInt(window.getComputedStyle(e).gap)||0;return t.offsetWidth+c}function r(){return e.scrollWidth-e.clientWidth}n.addEventListener(\"click\",()=>{let t=l();e.scrollBy({left:-t,behavior:\"smooth\"})}),o.addEventListener(\"click\",()=>{let t=l();r(),e.scrollLeft+t,e.scrollBy({left:t,behavior:\"smooth\"})})});"],["C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/src/components/GenreSelector.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const t=document.getElementById(\"genre\"),e=document.getElementById(\"filter-button\");e&&t&&e.addEventListener(\"click\",()=>{const n=t.value;e.textContent=\"Chargement...\",e.classList.add(\"opacity-50\",\"cursor-not-allowed\"),setTimeout(()=>{window.location.href=n?`/programme/${n}`:\"/programme\"},500)})});"],["C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/src/components/Header.astro?astro&type=script&index=0&lang.ts","const e=document.querySelector(\"#menu-btn\"),r=document.querySelector(\"#menu\"),c=document.body;e&&r&&e.addEventListener(\"click\",()=>{const t=e.ariaExpanded===\"true\",n=!t;e.ariaExpanded=String(n),r.ariaHidden=String(t),c.classList.toggle(\"noscroll\",n)});const o=document.querySelector(\".hero\");console.log(o?.clientHeight);window.addEventListener(\"scroll\",()=>{o?.clientHeight&&(window.scrollY>o.clientHeight?document.querySelector(\"header\")?.classList.add(\"bg-[var(--color-green)]\"):document.querySelector(\"header\")?.classList.remove(\"bg-[var(--color-green)]\"))});"],["C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/src/components/Hero.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const r=document.querySelectorAll('a[href^=\"#\"]'),e=document.querySelector(\"header\");r.forEach(t=>{t.addEventListener(\"click\",c=>{c.preventDefault();const o=t.getAttribute(\"href\");if(!o)return;const n=document.querySelector(o);if(n){const d=e?e.offsetHeight:0,i=n.getBoundingClientRect().top+window.scrollY-d;window.scrollTo({top:i,behavior:\"smooth\"})}})})});"]],"assets":["/_astro/carte.DNmZRk5M.webp","/_astro/ticket.BLpC1kJp.webp","/_astro/malsaucy_2.B-voPjUb.webp","/_astro/cinema_aujourdhui.DgMdW2bf.webp","/_astro/territoire_belfort.Jb2w6p-i.webp","/_astro/invites.T9CKXX2v.webp","/_astro/malsaucy.B84Vgx5t.webp","/_astro/region_bourgogne_franche_comte.i6V1YlLD.webp","/_astro/cnc.Bx72NtiJ.webp","/_astro/logo_blanc.dFNJn3be.svg","/_astro/fleche_bas_nue.DbH3KG18.webp","/_astro/logo_noir.Bi4fulHb.svg","/_astro/fleche_bas.B_LXeYvU.webp","/_astro/facebook.Cnw1wb4d.svg","/_astro/twitter.mwe3uF2W.svg","/_astro/footer_mobile_popcorn.Byef4aSn.svg","/_astro/tiktok.zWoWSWZw.svg","/_astro/instagram.DGuS_oIG.svg","/_astro/footer_desktop_popcorn.KPweCn3M.svg","/_astro/poppins-latin-ext-400-normal.by3JarPu.woff2","/_astro/poppins-latin-400-normal.cpxAROuN.woff2","/_astro/montserrat-vietnamese-wght-normal.BcziCZ2I.woff2","/_astro/montserrat-latin-wght-normal.AeMhpAKq.woff2","/_astro/montserrat-cyrillic-wght-normal.D3on441i.woff2","/_astro/montserrat-cyrillic-ext-wght-normal.DV_LRdWn.woff2","/_astro/montserrat-latin-ext-wght-normal.BLkAzDQP.woff2","/_astro/poppins-latin-ext-400-normal.DaBSavcJ.woff","/_astro/poppins-latin-400-normal.BOb3E3N0.woff","/_astro/a-propos.Bj6CxNlU.css","/favicon.svg","/_astro/page.BCFd37Sx.js","/_astro/page.BCFd37Sx.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"u3Rjaf0d19U4cw9ZLyMeoGXMf1H2rkoERSOOLhBKDw0="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };

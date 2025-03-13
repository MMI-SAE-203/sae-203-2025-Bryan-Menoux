import { e as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BqO5gSP-.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout, a as $$Button } from '../chunks/Layout_Cd7jAVUF.mjs';
import { g as getActivitesByDate, f as formatDate } from '../chunks/backend_CkmBqhTo.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  let hero = {
    title: "Activit\xE9s",
    date: "Du 5 au 8 juillet 2025"
  };
  let activites = await getActivitesByDate();
  activites.forEach((activite) => {
    activite.date_activite = formatDate(activite.date_activite);
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "hero": hero, "title": "Activit\xE9s" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Button", $$Button, {}, { "default": ($$result3) => renderTemplate`${maybeRenderHead()}<a href="/programme">Accéder à la programmation complète</a>` })} <div id="first" class="container mx-auto px-4 py-8"> ${activites.map((activite) => renderTemplate`<div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"> <h2 class="text-2xl font-bold text-green-600 mb-2 md:mb-0"> ${activite.nom} </h2> <div class="bg-green-50 p-4 rounded-lg w-full md:w-auto"> <p class="text-gray-600 font-medium mb-2"> ${activite.date_activite.date} </p> <p class="flex items-center text-gray-700 mb-2"> <span class="inline-block w-24 font-semibold">Type:</span> <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"> ${activite.type} </span> </p> <p class="flex items-center text-gray-700"> <span class="inline-block w-24 font-semibold">Lieu:</span> <span>${activite.lieu}</span> </p> </div> </div>`)} </div> ` })}`;
}, "C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/src/pages/activite/index.astro", void 0);

const $$file = "C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/src/pages/activite/index.astro";
const $$url = "/activite";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

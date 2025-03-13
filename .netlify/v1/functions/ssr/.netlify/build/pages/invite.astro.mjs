import { e as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_BqO5gSP-.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout, a as $$Button } from '../chunks/Layout_Cd7jAVUF.mjs';
import { c as getAllInvites } from '../chunks/backend_CkmBqhTo.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  let invites = await getAllInvites();
  const hero = {
    title: "Nos Invit\xE9s",
    description: "D\xE9couvrez les intervenants du festival Cin\xE9nature",
    heroImg: "",
    heroImgLg: ""
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "hero": hero, "title": "Invit\xE9s" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="first" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6"> ${invites.map((invite) => renderTemplate`<div class="flex flex-col items-center gap-4 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"> <img${addAttribute(invite.photo, "src")}${addAttribute(`Photo de ${invite.nom} ${invite.prenom}`, "alt")} class="h-48 w-48 rounded-full object-cover border-4 border-gray-200 shadow-md"> <div class="text-center"> <h2 class="text-xl font-bold text-gray-800"> ${invite.nom} ${invite.prenom} </h2> <p class="text-sm text-gray-600 font-semibold">${invite.role}</p> </div> ${renderComponent($$result2, "Button", $$Button, {}, { "default": ($$result3) => renderTemplate` <a${addAttribute(`/invite/${invite.id}`, "href")} class="text-white">
En savoir plus
</a> ` })} </div>`)} </div> ` })}`;
}, "C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/src/pages/invite/index.astro", void 0);

const $$file = "C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/src/pages/invite/index.astro";
const $$url = "/invite";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

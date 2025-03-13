import { e as createComponent, f as createAstro, i as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_BqO5gSP-.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_Dy1rCzIv.mjs';
import { b as getOneInvite } from '../../chunks/backend_CkmBqhTo.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const invite = await getOneInvite(Astro2.params.id);
  const hero = {
    title: `En savoir plus sur ${invite.nom} ${invite.prenom}`,
    description: "Voici les d\xE9tails de l'invit\xE9",
    heroImg: ""
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "hero": hero, "title": `${invite.nom} ${invite.prenom}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="first" class="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row gap-8 items-center"> <img loading="lazy"${addAttribute(invite.photo, "src")}${addAttribute(`Photo de ${invite.prenom} ${invite.nom}`, "alt")} class="w-48 h-48 object-cover rounded-full shadow-md"> <div class="flex flex-col gap-4"> <h2 class="text-2xl font-bold text-gray-800"> ${invite.prenom} ${invite.nom} </h2> <p class="text-sm text-gray-600 font-semibold">${invite.role}</p> <p class="text-gray-700 leading-relaxed">${invite.biographie}</p> <a${addAttribute(`mailto:${invite.email}`, "href")} class="text-blue-500 hover:underline">
Contacter ${invite.prenom} </a> </div> </div> ` })}; ---`;
}, "C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/src/pages/invite/[id].astro", void 0);

const $$file = "C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/src/pages/invite/[id].astro";
const $$url = "/invite/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

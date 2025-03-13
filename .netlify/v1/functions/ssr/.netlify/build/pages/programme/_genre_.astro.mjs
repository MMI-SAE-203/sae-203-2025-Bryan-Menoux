import { e as createComponent, f as createAstro, i as renderComponent, r as renderTemplate } from '../../chunks/astro/server_BqO5gSP-.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_Dy1rCzIv.mjs';
import { d as getFilmByGenre } from '../../chunks/backend_CkmBqhTo.mjs';
import { $ as $$GenreSelector, a as $$Carousel } from '../../chunks/GenreSelector_e43laMoC.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$genre = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$genre;
  const genre = Astro2.params.genre;
  let films = await getFilmByGenre(genre);
  const hero = {
    title: genre,
    description: `D\xE9couvrez les films du genre ${genre}`,
    heroImg: "",
    heroImgLg: ""
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "hero": hero, "title": genre }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GenreSelector", $$GenreSelector, { "films": films })} ${renderComponent($$result2, "Carousel", $$Carousel, { "films": films })} ` })}`;
}, "C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/src/pages/programme/[genre].astro", void 0);

const $$file = "C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/src/pages/programme/[genre].astro";
const $$url = "/programme/[genre]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$genre,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

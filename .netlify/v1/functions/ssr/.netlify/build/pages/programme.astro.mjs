import { e as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BqO5gSP-.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_Cd7jAVUF.mjs';
import { $ as $$GenreSelector, a as $$Carousel, b as $$CardFilm } from '../chunks/GenreSelector_DCL2GVja.mjs';
import { e as getFilmsByDate, f as formatDate, g as getActivitesByDate } from '../chunks/backend_CkmBqhTo.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  let films = await getFilmsByDate();
  films = films.map((film) => {
    return {
      ...film,
      date_projection: formatDate(film.date_projection)
    };
  });
  let activites = await getActivitesByDate();
  activites = activites.map((activite) => {
    return {
      ...activite,
      date: formatDate(activite.date_activite)
    };
  });
  let dates = [...new Set(films.map((film) => film.date_projection.date))];
  let hero = {
    title: "Programme",
    description: "D\xE9couvrez la programmation du festival Cin\xE9nature",
    heroImg: "",
    heroImgLg: ""
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "hero": hero, "title": "Programme" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="first" class="px-6 md:px-12"> ${renderComponent($$result2, "GenreSelector", $$GenreSelector, {})} ${renderComponent($$result2, "Carousel", $$Carousel, { "films": films })} </div> <div class="text-green-700 text-center my-12 px-4 max-w-3xl mx-auto"> <h2 class="text-3xl font-bold mb-4">À propos du festival</h2> <p class="text-lg text-gray-700">
Le festival Cinénature est un festival de cinéma qui met en avant les
      films documentaires sur la nature et l'environnement. Il se déroule chaque
      année au mois de juin à la Cité des sciences et de l'industrie à Paris. Le
      festival propose des projections de films, des rencontres avec des
      réalisateurs, des conférences et des ateliers pour les enfants.
</p> </div> <div class="container mx-auto px-6 md:px-12 mb-16"> <div class="flex flex-col gap-12 md:gap-16"> ${dates.map((date) => renderTemplate`<div class="flex flex-col items-center gap-6 bg-green-50 p-6 md:p-8 rounded-lg shadow-md"> <h3 class="text-2xl font-bold text-green-700">
Programmation du ${date} </h3> <div class="flex flex-wrap justify-center gap-6"> ${films.filter((film) => film.date_projection.date === date).map((film) => renderTemplate`${renderComponent($$result2, "CardFilm", $$CardFilm, { "film": film })}`)} </div> </div>`)} </div> </div> <div class="bg-gray-50 py-12 px-6 md:px-12"> <div class="container mx-auto"> <h2 class="text-3xl font-bold text-green-700 text-center mb-8">
Activités
</h2> <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3"> ${activites.map((activite) => renderTemplate`<div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all"> <h4 class="text-xl font-semibold text-green-700 mb-2"> ${activite.titre} </h4> <p class="text-gray-600 mb-4">${activite.description}</p> <div class="flex justify-between items-center pt-3 border-t border-gray-100"> <p class="text-sm text-gray-500">${activite.date.date}</p> <p class="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full"> ${activite.date.heure} </p> </div> </div>`)} </div> </div> </div> ` })}`;
}, "C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/src/pages/programme/index.astro", void 0);

const $$file = "C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/src/pages/programme/index.astro";
const $$url = "/programme";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

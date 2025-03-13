import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, i as renderComponent, r as renderTemplate, j as renderScript } from './astro/server_BqO5gSP-.mjs';
import 'kleur/colors';
import 'html-escaper';
import { a as getOneFilm, f as formatDate, e as getFilmsByDate } from './backend_CkmBqhTo.mjs';
import { a as $$Button } from './Layout_Dy1rCzIv.mjs';
import 'clsx';

const $$Astro$1 = createAstro();
const $$CardFilm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardFilm;
  const props = Astro2.props;
  let filmId = props.film.id;
  let film = await getOneFilm(filmId);
  let date = formatDate(film.date_projection);
  return renderTemplate`${maybeRenderHead()}<div class="bg-white flex-col gap-4 w-[70dvw] h-[70dvh] md:w-[40dvw] lg:w-[25dvw] max-w-[300px] md:max-w-auto lg:max-w-auto rounded-sm shadow-md snap-center flex-shrink-0 text-black"> <img loading="lazy"${addAttribute(film.affiche, "src")}${addAttribute(`affiche ${film.titre}`, "alt")} class="h-2/3 w-full max-w-[300px] object-top object-cover"> <div class="px-4 py-2 flex flex-col justify-between h-1/3 gap-4"> <h3 class="uppercase">${film.titre}</h3> <p>${date.date} - ${date.heure}</p> <div class="self-center w-full flex justify-center items-center bg-(--color-dark-blue) rounded-sm"> ${renderComponent($$result, "Button", $$Button, {}, { "default": ($$result2) => renderTemplate` <a${addAttribute(`/film/${film.id}`, "href")}>En savoir plus</a> ` })} </div> </div> </div>`;
}, "C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/src/components/CardFilm.astro", void 0);

const fleche = new Proxy({"src":"/_astro/fleche_bas_nue.DbH3KG18.webp","width":60,"height":52,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/src/assets/fleche_bas_nue.webp";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$Carousel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Carousel;
  const props = Astro2.props;
  let films = props.films;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col justify-center items-center gap-2"> <div class="relative w-full flex items-center justify-center"> <div id="carousel" class="flex gap-8 lg:gap-32 px-16 lg:px-48 py-4 lg:py-8 overflow-x-scroll scroll-smooth snap-x snap-mandatory no-scrollbar"> ${films.map((film) => renderTemplate`<div class="snap-center flex-shrink-0"> ${renderComponent($$result, "CardFilm", $$CardFilm, { "film": film })} </div>`)} </div> </div> <div class="flex gap-4"> <button id="prev" class="px-6 py-2 rounded-4xl bg-(--color-light-blue)"><img loading="lazy"${addAttribute(fleche.src, "src")} alt="fleche gauche" class="w-12 rotate-90"></button> <button id="next" class="px-6 py-2 rounded-4xl bg-(--color-light-blue)"><img loading="lazy"${addAttribute(fleche.src, "src")} alt="fleche droite" class="w-12 -rotate-90"></button> </div> </div> ${renderScript($$result, "C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/src/components/Carousel.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/src/components/Carousel.astro", void 0);

const $$GenreSelector = createComponent(async ($$result, $$props, $$slots) => {
  let films = await getFilmsByDate();
  films = films.map((film) => ({
    ...film,
    date_projection: formatDate(film.date_projection)
  }));
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-between items-center gap-4 md:max-w-[50dvw] md:gap-8 bg-white p-4 rounded-lg shadow-md"> <select name="genre" id="genre" class="py-3 px-4 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 w-full"> <option value="">Tous les genres</option> ${[
    ...new Set(
      films.flatMap((film) => film.genre).filter((genre) => genre)
    )
  ].map((genre) => renderTemplate`<option${addAttribute(genre, "value")}>${genre}</option>`)} </select> <button id="filter-button" class="px-6 py-3 rounded-md bg-green-600 text-white font-bold transition-all hover:bg-green-700 focus:ring-2 focus:ring-green-400 focus:outline-none">
Filtrer
</button> </div> ${renderScript($$result, "C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/src/components/GenreSelector.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/src/components/GenreSelector.astro", void 0);

export { $$GenreSelector as $, $$Carousel as a, $$CardFilm as b };

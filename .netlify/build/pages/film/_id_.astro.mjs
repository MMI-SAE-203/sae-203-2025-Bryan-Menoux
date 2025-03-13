import { e as createComponent, f as createAstro, i as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_BqO5gSP-.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_Dy1rCzIv.mjs';
import { a as getOneFilm, f as formatDate } from '../../chunks/backend_CkmBqhTo.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const id = Astro2.params.id;
  let film = await getOneFilm(id);
  const date = formatDate(film.annee_sortie);
  const hero = {
    title: film.titre,
    affiche: film.affiche
  };
  function transformYoutubeLink(url) {
    if (!url) return null;
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    if (match && match[7].length === 11) {
      return `https://www.youtube.com/embed/${match[7]}`;
    }
    return null;
  }
  const youtubeTrailerUrl = film.bande_annonce || null;
  const embedUrl = transformYoutubeLink(youtubeTrailerUrl);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "hero": hero, "title": film.titre }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col items-center md:flex-row lg:items-start shadow-xl rounded-lg gap-4 lg:gap-8 bg-white w-[80dvw] md:w-auto self-center text-(--color-dark-green)"> <img loading="lazy"${addAttribute(film.affiche, "src")}${addAttribute(`affiche du film ${film.titre}`, "alt")} class="w-full max-h-[60dvh] lg:h-[60dvh] object-cover"> <div class="px-4 py-8 flex flex-col gap-4 lg:gap-8"> <h2>${film.titre}</h2> <div> <p> ${film.expand?.realisateur.nom} ${film.expand?.realisateur.prenom}, ${date.year}, Durée : ${film.duree} min
</p> </div> <p>${film.description}</p> </div> </div> ${embedUrl && renderTemplate`<div class="w-[80dvw] md:w-full self-center my-8"> <h3 class="mb-4 text-(--color-dark-green)">Bande-annonce</h3> <div class="relative w-full pb-[56.25%]"> <iframe class="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"${addAttribute(embedUrl, "src")}${addAttribute(`Bande-annonce de ${film.titre}`, "title")} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </div> </div>`}<div class="flex flex-col md:flex-row h-full w-[80dvw] md:w-auto bg-white shadow-xl rounded-lg self-center md:max-h-[70dvh] text-(--color-dark-green)"> <img loading="lazy"${addAttribute(film.expand?.realisateur.photo, "src")}${addAttribute(`Photographie de ${film.expand?.realisateur.nom} ${film.expand?.realisateur.prenom}`, "alt")} class="md:min-h-full max-h-[70dvw] md:max-h-auto max-w-full md:max-w-[35dvw] object-cover object-top"> <div class="flex flex-col gap-4 lg:gap-8 p-4 lg:p-8"> <h3>Réalisateur</h3> <p> ${film.expand?.realisateur.nom} ${film.expand?.realisateur.prenom} </p> <p>${film.expand?.realisateur.biographie}</p> </div> </div> <div class="flex flex-col md:flex-row h-full w-[80dvw] md:w-auto bg-white shadow-xl rounded-lg self-center md:max-h-[70dvh] text-(--color-dark-green)"> <img loading="lazy"${addAttribute(film.expand?.invite.photo, "src")}${addAttribute(`Photographie de ${film.expand?.invite.nom} ${film.expand?.invite.prenom}`, "alt")} class="md:min-h-full max-h-[70dvw] md:max-h-auto max-w-full md:max-w-[35dvw] object-cover object-top"> <div class="flex flex-col gap-4 lg:gap-8 p-4 lg:p-8"> <h3>Invité(e)</h3> <p> <span class="font-bold"> ${film.expand?.invite.nom} ${film.expand?.invite.prenom} </span>
sera présent(e) pour une rencontre exceptionnelle autour de son film
</p> ${film.expand?.invite.nom != film.expand?.realisateur.nom && renderTemplate`<p>${film.expand?.invite.biographie}</p>`} </div> </div> ` })}`;
}, "C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/src/pages/film/[id].astro", void 0);

const $$file = "C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/src/pages/film/[id].astro";
const $$url = "/film/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

import { e as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_BqO5gSP-.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_Dy1rCzIv.mjs';
import { m as map } from '../chunks/carte_DsA8ooxZ.mjs';
export { renderers } from '../renderers.mjs';

const $$APropos = createComponent(($$result, $$props, $$slots) => {
  const hero = {
    title: "Lieu & Infos Pratiques"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "hero": hero, "title": "Lieu & Infos Pratiques" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-12"> <section class="bg-white shadow-md rounded-xl p-6 md:p-8 transition-all duration-300 hover:shadow-xl border-l-4 border-l-emerald-700"> <h2 class="text-2xl md:text-3xl font-bold mb-4 text-[color:var(--color-dark-green)] border-b border-gray-200 pb-3">
Lieu & Infos Pratiques
</h2> <p class="text-gray-700 leading-relaxed text-base md:text-lg">
Le Festival CinéNature se déroule sur la presqu'île du Malsaucy, un
        cadre naturel exceptionnel situé près de Belfort. Retrouvez ici toutes
        les informations nécessaires pour profiter pleinement de votre
        expérience au festival : accès, hébergements, restauration, et bien
        plus.
</p> </section> <section class="bg-white shadow-md rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl border-l-4 border-l-emerald-700"> <h2 class="text-2xl md:text-3xl font-bold p-6 md:p-8 pb-3 text-[color:var(--color-dark-green)] border-b border-gray-200">
Adresse du Festival
</h2> <div class="p-6 md:p-8 pt-4 md:flex md:items-start md:gap-8"> <div class="md:w-1/3 mb-6 md:mb-0"> <p class="text-gray-800 font-medium mb-4 text-base md:text-lg">
Presqu'île du Malsaucy<br>
90 000 Belfort, France
</p> <a href="https://maps.google.com/?q=Presqu'île+du+Malsaucy+90000+Belfort+France" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2 bg-[color:var(--color-dark-green)] text-white rounded-lg hover:bg-opacity-90 hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-opacity-50"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg>
Ouvrir dans Google Maps
</a> </div> <div class="md:w-2/3"> <img${addAttribute(map.src, "src")} alt="Carte de la presqu'île du Malsaucy" class="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow object-cover" loading="lazy"> </div> </div> </section> <section class="bg-white shadow-md rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl border-l-4 border-l-emerald-700"> <h2 class="text-2xl md:text-3xl font-bold p-6 md:p-8 pb-3 text-[color:var(--color-dark-green)] border-b border-gray-200">
Accès au Festival
</h2> <div class="p-6 md:p-8 pt-4 grid md:grid-cols-2 gap-6"> <div class="bg-gray-50 p-5 rounded-lg shadow-sm hover:shadow transition-shadow"> <h3 class="font-bold text-lg mb-3 flex items-center text-gray-800"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-[color:var(--color-dark-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path> </svg>
En Voiture
</h3> <p class="text-gray-700 mb-3"> <strong class="text-gray-800">Adresse :</strong> Suivez les indications
            pour Belfort, puis prenez la sortie Malsaucy. Des parkings gratuits sont
            mis à disposition près du site.
</p> <p class="text-gray-700"> <strong class="text-gray-800">Covoiturage :</strong> Nous encourageons
            le covoiturage ! Rejoignez notre plateforme de partage pour vos trajets
            tout en adoptant une démarche écologique.
</p> </div> <div class="bg-gray-50 p-5 rounded-lg shadow-sm hover:shadow transition-shadow"> <h3 class="font-bold text-lg mb-3 flex items-center text-gray-800"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-[color:var(--color-dark-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path> </svg>
En Transport en Commun
</h3> <p class="text-gray-700 mb-3"> <strong class="text-gray-800">Navettes :</strong> Des navettes seront
            disponibles depuis la gare de Belfort jusqu'au site.
</p> <p class="text-gray-700"> <strong class="text-gray-800">Train :</strong> Gare de Belfort à 15 minutes
            en navette.
</p> </div> </div> </section> <section class="bg-white shadow-md rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl border-l-4 border-l-emerald-700"> <h2 class="text-2xl md:text-3xl font-bold p-6 md:p-8 pb-3 text-[color:var(--color-dark-green)] border-b border-gray-200">
Hébergement
</h2> <div class="p-6 md:p-8 pt-4"> <p class="text-gray-700 mb-6 text-base md:text-lg">
Pour votre séjour, plusieurs options d'hébergement sont disponibles :
</p> <div class="grid md:grid-cols-2 gap-6"> <div class="border border-gray-200 rounded-lg p-5 hover:border-[color:var(--color-dark-green)] transition-colors hover:shadow-md bg-white"> <h3 class="font-bold text-lg mb-3 text-gray-800">
Camping du Festival
</h3> <p class="text-gray-700 mb-4">
Situé à proximité immédiate du site, réservez votre place dès
              maintenant (places limitées).
</p> <a href="#" class="inline-flex items-center text-[color:var(--color-dark-green)] font-medium hover:underline focus:outline-none">
Réserver une place
<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path> </svg> </a> </div> <div class="border border-gray-200 rounded-lg p-5 hover:border-[color:var(--color-dark-green)] transition-colors hover:shadow-md bg-white"> <h3 class="font-bold text-lg mb-3 text-gray-800">
Hôtels Partenaires
</h3> <p class="text-gray-700 mb-4">
Profitez de tarifs préférentiels dans les hôtels de Belfort et aux
              alentours.
</p> <a href="#" class="inline-flex items-center text-[color:var(--color-dark-green)] font-medium hover:underline focus:outline-none">
Voir les partenaires
<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path> </svg> </a> </div> </div> </div> </section> <section class="bg-white shadow-md rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl border-l-4 border-l-emerald-700"> <h2 class="text-2xl md:text-3xl font-bold p-6 md:p-8 pb-3 text-[color:var(--color-dark-green)] border-b border-gray-200">
Restauration
</h2> <div class="p-6 md:p-8 pt-4 md:flex md:gap-8 items-center"> <div class="md:w-2/3"> <p class="text-gray-700 leading-relaxed text-base md:text-lg">
Le festival propose une offre de restauration bio et locale, avec
            des food trucks et stands proposant des repas végétariens et
            durables. N'oubliez pas d'apporter votre propre gourde, des stations
            de remplissage d'eau sont disponibles sur place.
</p> </div> <div class="mt-6 md:mt-0 md:w-1/3"> <a href="#" class="block group"> <div class="bg-emerald-50 rounded-lg p-5 text-center transition-all hover:shadow-md group-hover:bg-emerald-100"> <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto text-[color:var(--color-dark-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path> </svg> <p class="font-medium mt-3 text-gray-800 group-hover:text-[color:var(--color-dark-green)]">
Télécharger la carte des restaurants
</p> </div> </a> </div> </div> </section> <section class="bg-white shadow-md rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl border-l-4 border-l-emerald-700"> <h2 class="text-2xl md:text-3xl font-bold p-6 md:p-8 pb-3 text-[color:var(--color-dark-green)] border-b border-gray-200">
Horaires du Festival
</h2> <div class="p-6 md:p-8 pt-4 flex flex-col md:flex-row md:gap-12"> <div class="flex-1 mb-6 md:mb-0"> <div class="flex items-center mb-3"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 text-[color:var(--color-dark-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> <strong class="text-gray-800 text-lg">Ouverture des portes</strong> </div> <p class="text-gray-700 pl-9 text-base md:text-lg">
Tous les jours à partir de 10h
</p> </div> <div class="flex-1"> <div class="flex items-center mb-3"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 text-[color:var(--color-dark-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path> </svg> <strong class="text-gray-800 text-lg">Projections et événements</strong> </div> <p class="text-gray-700 pl-9 text-base md:text-lg">
De 10h à 23h, chaque jour du festival
</p> </div> </div> </section> <section class="bg-white shadow-md rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl border-l-4 border-l-emerald-700"> <h2 class="text-2xl md:text-3xl font-bold p-6 md:p-8 pb-3 text-[color:var(--color-dark-green)] border-b border-gray-200">
Recommandations Éco-Responsables
</h2> <div class="p-6 md:p-8 pt-4"> <p class="text-gray-700 mb-6 text-base md:text-lg">
Pour contribuer à un événement plus respectueux de l'environnement,
          nous vous invitons à :
</p> <ul class="space-y-4"> <li class="flex items-start"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span class="text-gray-700 text-base md:text-lg">Utiliser des gobelets réutilisables et apporter vos propres sacs.</span> </li> <li class="flex items-start"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span class="text-gray-700 text-base md:text-lg">Participer à notre programme de tri sélectif et de recyclage.</span> </li> <li class="flex items-start"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span class="text-gray-700 text-base md:text-lg">Privilégier les transports en commun ou le covoiturage.</span> </li> </ul> </div> </section> </div> ` })}`;
}, "C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/src/pages/a-propos.astro", void 0);

const $$file = "C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/src/pages/a-propos.astro";
const $$url = "/a-propos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$APropos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

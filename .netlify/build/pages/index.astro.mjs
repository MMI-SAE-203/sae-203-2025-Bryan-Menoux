import { e as createComponent, m as maybeRenderHead, k as renderSlot, r as renderTemplate, i as renderComponent, h as addAttribute } from '../chunks/astro/server_BqO5gSP-.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout, a as $$Button } from '../chunks/Layout_Cd7jAVUF.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const heroImg = new Proxy({"src":"/_astro/malsaucy.B84Vgx5t.webp","width":786,"height":1706,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/src/assets/malsaucy.webp";
							}
							
							return target[name];
						}
					});

const malsaucy = new Proxy({"src":"/_astro/malsaucy_2.B-voPjUb.webp","width":706,"height":410,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/src/assets/malsaucy_2.webp";
							}
							
							return target[name];
						}
					});

const $$Card = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<article class="px-4 lg:px-0 flex flex-col lg:flex-row lg:gap-6 text-(--color-dark-green) bg-white rounded-lg shadow-lg"> <div class="flex justify-center items-center lg:w-[70dvw]"> ${renderSlot($$result, $$slots["image"])} </div> <div class="flex flex-col lg:w-fit py-4 lg:py-8 gap-4 lg:gap-8"> <h2> ${renderSlot($$result, $$slots["title"])} </h2> <p class="mr-4"> ${renderSlot($$result, $$slots["chapo"])} </p> <div class="self-end lg:self-start"> ${renderSlot($$result, $$slots["button"])} </div> </div> </article>`;
}, "C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/src/components/Card.astro", void 0);

const ticket = new Proxy({"src":"/_astro/ticket.BLpC1kJp.webp","width":706,"height":410,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/src/assets/ticket.webp";
							}
							
							return target[name];
						}
					});

const invite = new Proxy({"src":"/_astro/invites.T9CKXX2v.webp","width":706,"height":410,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/src/assets/invites.webp";
							}
							
							return target[name];
						}
					});

const cinemaAujourdhui = new Proxy({"src":"/_astro/cinema_aujourdhui.DgMdW2bf.webp","width":224,"height":179,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/src/assets/cinema_aujourdhui.webp";
							}
							
							return target[name];
						}
					});

const territoireBelfort = new Proxy({"src":"/_astro/territoire_belfort.Jb2w6p-i.webp","width":225,"height":106,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/src/assets/territoire_belfort.webp";
							}
							
							return target[name];
						}
					});

const bourgogneFrancheCompte = new Proxy({"src":"/_astro/region_bourgogne_franche_comte.i6V1YlLD.webp","width":225,"height":128,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/src/assets/region_bourgogne_franche_comte.webp";
							}
							
							return target[name];
						}
					});

const cnc = new Proxy({"src":"/_astro/cnc.Bx72NtiJ.webp","width":224,"height":224,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/src/assets/cnc.webp";
							}
							
							return target[name];
						}
					});

const $$Index = createComponent(($$result, $$props, $$slots) => {
  let hero = {
    title: "CIN\xC9NATURE",
    description: "Festival de cin\xE9ma \xE9co-responsable du territoire de Belfort",
    date: "Du 5 au 8 juillet 2025",
    button: "Voir la Programmation",
    heroImg: heroImg.src,
    heroImgLg: malsaucy.src,
    duotone: true
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "hero": hero, "title": "Accueil" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Card", $$Card, {}, { "button": ($$result3) => renderTemplate`${renderComponent($$result3, "Button", $$Button, { "slot": "button" }, { "default": ($$result4) => renderTemplate`${maybeRenderHead()}<a href="/a-propos">En savoir plus</a>` })}`, "chapo": ($$result3) => renderTemplate`<span>Le Festival CinéNature, du 5 au 8 juillet 2025 sur la presqu’île du
      Malsaucy près de Belfort, vous invite à une expérience cinématographique
      en plein air. Ce festival célèbre la rencontre entre le cinéma engagé et
      la nature, avec une programmation de films d’auteur et de documentaires
      abordant des thématiques environnementales et sociétales.</span>`, "image": ($$result3) => renderTemplate`<img id="first"${addAttribute(malsaucy.src, "src")} alt="photographie de la presqu'île du malsaucy" class="object-center object-cover h-full w-full">`, "title": ($$result3) => renderTemplate`<span>Le Festival</span>` })} ${renderComponent($$result2, "Card", $$Card, {}, { "button": ($$result3) => renderTemplate`${renderComponent($$result3, "Button", $$Button, { "slot": "button" }, { "default": ($$result4) => renderTemplate`<a href="/activite">En savoir plus</a>` })}`, "chapo": ($$result3) => renderTemplate`<span>Le Festival CinéNature, du 5 au 8 juillet 2025 sur la presqu’île du
      Malsaucy près de Belfort, vous invite à une expérience cinématographique
      en plein air. Ce festival célèbre la rencontre entre le cinéma engagé et
      la nature, avec une programmation de films d’auteur et de documentaires
      abordant des thématiques environnementales et sociétales.</span>`, "image": ($$result3) => renderTemplate`<img loading="lazy"${addAttribute(malsaucy.src, "src")} alt="photographie de la presqu'île du malsaucy" class="object-center object-cover h-full w-full">`, "title": ($$result3) => renderTemplate`<span>Les activités</span>` })} ${renderComponent($$result2, "Card", $$Card, {}, { "button": ($$result3) => renderTemplate`${renderComponent($$result3, "Button", $$Button, { "slot": "button" }, { "default": ($$result4) => renderTemplate`<a href="/billeterie">En savoir plus</a>` })}`, "chapo": ($$result3) => renderTemplate`<span>En plus des projections, CinéNature propose des ateliers, des rencontres
      avec des réalisateurs, et des discussions autour de l’écologie. Le
      festival s’engage à réduire son empreinte écologique en mettant en place
      des pratiques éco-responsables et en collaborant avec des partenaires
      locaux.</span>`, "image": ($$result3) => renderTemplate`<img loading="lazy"${addAttribute(ticket.src, "src")} alt="photographie de la presqu'île du malsaucy" class="object-center object-cover h-full w-full">`, "title": ($$result3) => renderTemplate`<span>La billetterie</span>` })} ${renderComponent($$result2, "Card", $$Card, {}, { "button": ($$result3) => renderTemplate`${renderComponent($$result3, "Button", $$Button, { "slot": "button" }, { "default": ($$result4) => renderTemplate`<a href="/invite">En savoir plus</a>` })}`, "chapo": ($$result3) => renderTemplate`<span>Le Festival CinéNature met à l'honneur des réalisateurs, experts et
      acteurs engagés qui partageront leur passion et leurs expériences. À
      travers échanges exclusifs et débats inspirants, découvrez des regards
      uniques sur le cinéma et l’écologie. Vivez des rencontres
      inoubliables avec ces personnalités qui font vibrer l'âme du festival.</span>`, "image": ($$result3) => renderTemplate`<img loading="lazy"${addAttribute(invite.src, "src")} alt="photographie de la presqu'île du malsaucy" class="object-center object-cover h-full w-full">`, "title": ($$result3) => renderTemplate`<span>Rencontrez nos invités d'exception !</span>` })} <article class="grid grid-cols-2 gap-4 items-center justify-center px-8 md:grid-cols-4"> <img loading="lazy"${addAttribute(cinemaAujourdhui.src, "src")} alt="logo cinéma d'aujourd'hui" class="object-center object-contain h-full w-full"><img loading="lazy"${addAttribute(territoireBelfort.src, "src")} alt="logo du territoire de belfort" class="object-center object-contain h-full w-full"><img loading="lazy"${addAttribute(bourgogneFrancheCompte.src, "src")} alt="logo de la région bourgogne franche comté" class="object-center object-contain h-full w-full"><img loading="lazy"${addAttribute(cnc.src, "src")} alt="logo du cnc" class="object-center object-contain h-full w-full"> </article> ` })}`;
}, "C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/src/pages/index.astro", void 0);

const $$file = "C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

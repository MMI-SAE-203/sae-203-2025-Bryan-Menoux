import { e as createComponent, m as maybeRenderHead, h as addAttribute, j as renderScript, r as renderTemplate, k as renderSlot, f as createAstro, i as renderComponent, l as renderHead } from './astro/server_BqO5gSP-.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                            */
import 'clsx';

const icon = new Proxy({"src":"/_astro/logo_blanc.dFNJn3be.svg","width":65,"height":65,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/src/assets/logo_blanc.svg";
							}
							
							return target[name];
						}
					});

const logoNoir = new Proxy({"src":"/_astro/logo_noir.Bi4fulHb.svg","width":65,"height":65,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/src/assets/logo_noir.svg";
							}
							
							return target[name];
						}
					});

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="fixed inset-x-0 top-0 lg:py-0 lg:bg-white lg:flex lg:justify-between z-20"> <div class="px-4
  flex
  items-center
  justify-between"> <a href="/"><img${addAttribute(icon.src, "src")} alt="logo cinenature" class="h-16 min-w-full block lg:hidden"><img${addAttribute(logoNoir.src, "src")} alt="logo cinenature" class="h-18 min-w-full hidden lg:block"></a> <button class="group relative z-20 flex h-6 w-8 flex-col justify-between *:h-[2px] *:w-full *:bg-white *:transition-all *:duration-300 *:ease lg:hidden lg:*:hidden" id="menu-btn" aria-label="Menu" aria-controls="menu" aria-expanded="false"> <span class="group-aria-expanded:translate-y-[11px] group-aria-expanded:rotate-45"></span> <span class="group-aria-expanded:opacity-0"></span> <span class="group-aria-expanded:-translate-y-[11px] group-aria-expanded:-rotate-45"></span> </button> </div> <nav class="visible fixed z-10 inset-0 text-2xl text-white opacity-100 transition-all duration-300 ease-in-out max-lg:aria-hidden:invisible max-lg:aria-hidden:opacity-0 lg:relative lg:flex lg:items-center lg:bg-transparent lg:text-sm lg:font-bold lg:uppercase lg:tracking-wide bg-(--color-green) lg:text-black lg:opacity-100 lg:whitespace-nowrap" id="menu" aria-hidden="true"> <ul class="mt-[25vh] px-8 lg:m-0 lg:flex *:relative *:overflow-hidden *:lg:before:absolute *:lg:before:bottom-0 *:lg:before:left-0 *:lg:before:h-2 *:lg:before:w-full *:lg:before:translate-y-2 *:lg:before:bg-black *:lg:before:transition-all *:lg:before:duration-300 *:lg:before:ease-in-out *:lg:hover:before:translate-y-0"> <li> <a class="block px-5 py-4" href="/programme">Programme</a> </li> <li> <a class="block px-5 py-4" href="/invite">Invités</a> </li> <li> <a class="block px-5 py-4" href="/billeterie">Billeterie</a> </li> <li> <a class="block px-5 py-4" href="/infos-pratiques">Lieu & Infos Pratiques</a> </li> <li> <a class="block px-5 py-4" href="/eco-responsabilite">Éco-Responsabilité</a> </li> <li> <a class="block px-5 py-4" href="/contact">Contact</a> </li> <li> <a class="block px-5 py-4" href="/a-propos">À Propos</a> </li> </ul> </nav> </header> ${renderScript($$result, "C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/src/components/Header.astro", void 0);

const fleche = new Proxy({"src":"/_astro/fleche_bas.B_LXeYvU.webp","width":52,"height":52,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/src/assets/fleche_bas.webp";
							}
							
							return target[name];
						}
					});

const $$Button = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button class="bg-(--color-dark-blue) max-w-fit px-8 py-2 rounded-lg text-white uppercase text-button md:text-base lg:text-md font-bold"> ${renderSlot($$result, $$slots["default"])} </button>`;
}, "C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/src/components/Button.astro", void 0);

const $$Astro$1 = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Hero;
  const props = Astro2.props;
  const hero = props.hero || {};
  let heroImg = hero.heroImg;
  let heroImgLg = hero.heroImgLg ?? heroImg;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute((heroImg ? "h-full bg-transparent max-h-[100dvh]" : "bg-(--color-green) max-h-[45dvh] lg:max-h-[70dvh] items-start") + " hero relative h-screen  text-white flex flex-col", "class")}> <div${addAttribute((heroImg ? "absolute h-screen inset-0 -z-10" : "relative h-0") + (hero.duotone ? " duotone" : ""), "class")}> ${heroImg && renderTemplate`<img loading="lazy"${addAttribute(heroImg, "src")} alt="Hero Image" class="w-full h-full block lg:hidden">`} ${heroImgLg && renderTemplate`<img loading="lazy"${addAttribute(heroImgLg, "src")} alt="Hero Image Large" class="w-full h-full hidden lg:block">`} </div> <div${addAttribute((heroImg ? "absolute inset-0 h-full w-full" : "relative mt-0 lg:mt-32 w-full") + " flex flex-col justify-center w-full gap-4 relative z-10 px-4 lg:px-16 pt-34", "class")}> <h1>${hero.title}</h1> <div> <p>${hero.description}</p> <p>${hero.date}</p> </div> ${hero.button && renderTemplate`${renderComponent($$result, "Button", $$Button, {}, { "default": ($$result2) => renderTemplate` <a href="/programme/">${hero.button}</a> ` })}`} </div> <div class="absolute bottom-6 left-0 right-0 flex justify-center py-8 z-10"> <a href="#first"> <img${addAttribute(fleche.src, "src")} alt="flèche vers le bas"> </a> </div> </div> ${renderScript($$result, "C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/src/components/Hero.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/src/components/Hero.astro", void 0);

const footerMobileImg = new Proxy({"src":"/_astro/footer_mobile_popcorn.Byef4aSn.svg","width":393,"height":771,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/src/assets/footer_mobile_popcorn.svg";
							}
							
							return target[name];
						}
					});

const footerDesktopImg = new Proxy({"src":"/_astro/footer_desktop_popcorn.KPweCn3M.svg","width":1440,"height":609,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/src/assets/footer_desktop_popcorn.svg";
							}
							
							return target[name];
						}
					});

const twitterIcon = new Proxy({"src":"/_astro/twitter.mwe3uF2W.svg","width":26,"height":26,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/src/assets/icons/twitter.svg";
							}
							
							return target[name];
						}
					});

const facebookIcon = new Proxy({"src":"/_astro/facebook.Cnw1wb4d.svg","width":26,"height":26,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/src/assets/icons/facebook.svg";
							}
							
							return target[name];
						}
					});

const instagramIcon = new Proxy({"src":"/_astro/instagram.DGuS_oIG.svg","width":26,"height":26,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/src/assets/icons/instagram.svg";
							}
							
							return target[name];
						}
					});

const tiktokIcon = new Proxy({"src":"/_astro/tiktok.zWoWSWZw.svg","width":26,"height":26,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/src/assets/icons/tiktok.svg";
							}
							
							return target[name];
						}
					});

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="relative flex flex-col text-white"> <img loading="lazy"${addAttribute(footerMobileImg.src, "src")} class="object-cover object-top min-w-full max-h-[60dvw] block md:hidden"> <img loading="lazy"${addAttribute(footerDesktopImg.src, "src")} class="object-cover object-top min-w-full h-[20dvw] md:block hidden"> <div class="w-full bg-(--color-green) grid grid-cols-1 md:grid-cols-2 gap-y-8 px-6 py-12 lg:px-48 lg:pb-24 lg: gap-x-24"> <ul> <li><a href="/contact">Contact</a></li> <li> <a href="/politique-de-confidentialite">Politique de confidentialite</a> </li> <li><a href="/mentions-legales">Mentions légales</a></li> </ul> <div class="flex flex-col gap-2"> <h4>Nous Suivre</h4> <ul class="flex gap-2"> <li> <a href="https://x.com/mmimontbeliard/" target="_blank"><img loading="lazy"${addAttribute(twitterIcon.src, "src")} alt="twitter"></a> </li> <li> <a href="https://www.facebook.com/mmimontbeliard/" target="_blank"><img loading="lazy"${addAttribute(facebookIcon.src, "src")} alt="facebook"></a> </li> <li> <a href="https://www.tiktok.com/@mmi_montbeliard" target="_blank"><img loading="lazy"${addAttribute(tiktokIcon.src, "src")} alt="tiktok"></a> </li> <li> <a href="https://www.instagram.com/mmi_montbeliard/" target="_blank"><img loading="lazy"${addAttribute(instagramIcon.src, "src")} alt="instagram"></a> </li> </ul> </div> <div class="flex flex-col md:col-span-2 gap-2"> <h4>S'inscrire à la Newsletter</h4> <form action="" class="flex flex-wrap gap-x-8 gap-y-2 items-center"> <label for="email" class="sr-only">Votre adresse email</label> <input type="email" placeholder="Votre adresse email" class="px-4 py-2 bg-transparent border-b border-(--color-beige) text-(--color-beige) focus:outline-(--color-beige) focus:outline-1 focus:rounded-l placeholder:text-white w-md lg:w-2xl h-10"> <button type="submit" class="border border-(--color-beige) text-(--color-beige) px-6 rounded-md h-10 flex items-center">
S'inscrire
</button> </form> </div> </div> </footer>`;
}, "C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const props = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="stylesheet" href="/src/styles/global.css"><link rel="icon"${addAttribute(icon.src, "href")}><title>CINENATURE - ${props.title}</title>${renderHead()}</head> <body class="bg-(--color-beige)"> ${renderComponent($$result, "Header", $$Header, {})} ${renderComponent($$result, "Hero", $$Hero, { "hero": props.hero })} <main class="px-2 lg:px-32 py-8 lg:py-48 flex flex-col gap-8 lg:gap-32 md:py-32 md:gap16"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/src/layouts/Layout.astro", void 0);

export { $$Layout as $, $$Button as a };

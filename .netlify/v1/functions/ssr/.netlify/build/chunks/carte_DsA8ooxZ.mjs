const map = new Proxy({"src":"/_astro/carte.DNmZRk5M.webp","width":630,"height":344,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Nekros/Documents/GitHub/R213_agence/sae-203-2025-Bryan-Menoux/src/assets/carte.webp";
							}
							
							return target[name];
						}
					});

export { map as m };

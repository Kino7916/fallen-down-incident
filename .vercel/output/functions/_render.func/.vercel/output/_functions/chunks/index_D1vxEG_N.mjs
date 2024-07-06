import { k as createComponent, l as renderTemplate, n as addAttribute, p as renderHead, q as renderSlot, o as createAstro, t as renderComponent, m as maybeRenderHead } from './astro/server_cKPxeRc_.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description" content="The most impactful incident of Fallen Down that will change the community forever."><meta name="theme-color" content="#1f186d"><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description" content="The most impactful incident of Fallen Down that will change the community forever."><meta property="og:type" content="website"><meta property="og:image" content="/brand.png"><meta property="og:color" content="#1f186d"><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "F:/A Programming Projects/nah/src/layouts/Layout.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Fallen Down Incident", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> <div class="real" data-astro-cid-j7pv25f6> <img src="/brand.png" alt="" data-astro-cid-j7pv25f6> </div> <h2 data-astro-cid-j7pv25f6>July 6th, 2024 Incident</h2> <hr data-astro-cid-j7pv25f6> <p data-astro-cid-j7pv25f6>
A couple of members from the community have decided to do a gamenights in a Discord Voice Channel.
			They play the Discord Activity called <code data-astro-cid-j7pv25f6>Death by AI</code>. A fun game where the AI predicts your death based from the prompt and your actions.
			It had quite the accident to make a memorial day for the Fallen Down Community.
			After the incident the administrator, Yora, decides to make community changes after a long time.
</p> <h3 data-astro-cid-j7pv25f6>Community Changelog</h3> <ul data-astro-cid-j7pv25f6> <li data-astro-cid-j7pv25f6>Pat has invented "okay, so you see.." an undoubtedly amazing substitute for "Hear me out"</li> <li data-astro-cid-j7pv25f6>Yora will give you iframes if you ping her (Proven by @Kali (@RelevantZone) )</li> <li data-astro-cid-j7pv25f6>Sukuna hosting the best death by AI rounds in FD General VC</li> <li data-astro-cid-j7pv25f6>never ping Eric</li> <li data-astro-cid-j7pv25f6>what ban??</li> </ul> <h3 data-astro-cid-j7pv25f6>Documentaries</h3> <div class="docs" data-astro-cid-j7pv25f6> <picture data-astro-cid-j7pv25f6> <img src="/sukuna-cook-pat.png" alt="" data-astro-cid-j7pv25f6> <details data-astro-cid-j7pv25f6> <summary data-astro-cid-j7pv25f6>Ok, so you see</summary>
After being confronted by such kind of prompt, the user 'pat' has decided to make attempts to seduce sukuna.
</details> </picture> <picture data-astro-cid-j7pv25f6> <img src="/soulshatter-furi.png" alt="" data-astro-cid-j7pv25f6> <details data-astro-cid-j7pv25f6> <summary data-astro-cid-j7pv25f6>Soulshatters Incident</summary>
The surprising decision from the user pat took action to do such (idk anymore)
</details> </picture> <picture data-astro-cid-j7pv25f6> <img src="/i-frames.png" alt="" data-astro-cid-j7pv25f6> <details data-astro-cid-j7pv25f6>
Proven by @Kali (@RelevantZone), successfull attempts were made to survive the sealed fate from Death AI by taking action for <code data-astro-cid-j7pv25f6>Yora gave me I-Frames</code>.
<summary data-astro-cid-j7pv25f6>
Ability of I-Frames
</summary> </details> </picture> </div> </main> ` })} `;
}, "F:/A Programming Projects/nah/src/pages/index.astro", void 0);

const $$file = "F:/A Programming Projects/nah/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };

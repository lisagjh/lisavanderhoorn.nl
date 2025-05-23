import { c as createAstro, a as createComponent, r as renderTemplate, d as addAttribute, b as renderComponent, g as renderHead, f as renderSlot, h as createTransitionScope } from './astro/server_D0qiNZvn.mjs';
import 'kleur/colors';
import { $ as $$Index, a as $$Index$1, b as $$ClientRouter, c as $$Header, d as $$Footer } from './Footer_BYjpebua.mjs';
/* empty css                         */

const $$Astro = createAstro("https://lisavanderhoorn.nl/");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { pageTitle } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><meta name="description" content="I'm Lisa van der Hoorn, a frontend developer working with modern frontend tools, specializing in accessibility."><link rel="canonical" href="https://lisavanderhoorn.nl"><link rel="icon" type="image/svg+xml" href="/favicon.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="stylesheet" href="/styles/global.css">${renderComponent($$result, "SpeedInsights", $$Index, {})}${renderComponent($$result, "Analytics", $$Index$1, {})}${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}<title>${pageTitle}</title>${renderHead()}</head> <body${addAttribute(createTransitionScope($$result, "5g5eesqo"), "data-astro-transition-persist")}> ${renderComponent($$result, "Header", $$Header, {})} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/lisa/Documents/Personal Projects/lisavanderhoorn.nl/src/layouts/BaseLayout.astro", "self");

export { $$BaseLayout as $ };

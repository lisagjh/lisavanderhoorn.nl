import { a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute, e as renderTransition } from '../chunks/astro/server_D0qiNZvn.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Dxx61ApU.mjs';
import { g as getCollection } from '../chunks/Footer_BYjpebua.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getCollection("blog");
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, { "data-astro-cid-wjxvifns": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="wrapper" data-astro-cid-wjxvifns> <button class="back" onclick="history.back()" data-astro-cid-wjxvifns>Back Home</button> <h2 class="pill" data-astro-cid-wjxvifns>CSS Day</h2> <p data-astro-cid-wjxvifns>I tried out some new CSS features. Read about them here!</p> <ul class="grid" data-astro-cid-wjxvifns> ${allPosts.filter((post) => post.tags?.includes("cssday")).map((post, index) => renderTemplate`<li${addAttribute(index, "data-index")} data-astro-cid-wjxvifns${addAttribute(renderTransition($$result2, "xbx7ahyj", "", `post-${post.id}`), "data-astro-transition-scope")}> <a${addAttribute(`/cssday/${post.id}`, "href")} data-astro-cid-wjxvifns> <h3 data-astro-cid-wjxvifns${addAttribute(renderTransition($$result2, "tv6eq5px", "", `title-${post.id}`), "data-astro-transition-scope")}>${post.data.title}</h3> <p data-astro-cid-wjxvifns>${post.data.description}</p> </a> </li>`)} </ul> </section> ` })} `;
}, "/Users/lisa/Documents/Personal Projects/lisavanderhoorn.nl/src/pages/cssday/index.astro", "self");

const $$file = "/Users/lisa/Documents/Personal Projects/lisavanderhoorn.nl/src/pages/cssday/index.astro";
const $$url = "/cssday";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

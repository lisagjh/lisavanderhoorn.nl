import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute, f as renderSlot, e as renderTransition } from '../../chunks/astro/server_D0qiNZvn.mjs';
import 'kleur/colors';
import { g as getCollection, r as renderEntry } from '../../chunks/Footer_BYjpebua.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_Dxx61ApU.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Image } from '../../chunks/_astro_assets_DDk7qquH.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://lisavanderhoorn.nl/");
const $$CSSLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CSSLayout;
  const { frontmatter } = Astro2.props;
  const allPosts = await getCollection("blog");
  const relatedPostsData = allPosts.filter((post) => frontmatter.relatedPosts.includes(post.id)).filter(
    (post) => frontmatter.relatedPosts.includes(post.id) && post.data.tags?.includes("cssday")
  ).map((post) => ({
    title: post.data.title,
    // date: new Date(post.data.pubDate).toLocaleDateString("nl-NL", {
    //   year: "numeric",
    //   month: "2-digit",
    //   day: "2-digit",
    // }),
    slug: post.id,
    // Use id for linking
    description: post.data.description,
    image: post.data.image
  }));
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": `${frontmatter.title}`, "data-astro-cid-kjxqdsv7": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="markdown-post" data-astro-cid-kjxqdsv7${addAttribute(renderTransition($$result2, "mrgzph6o", "", `post-${frontmatter.id}`), "data-astro-transition-scope")}> <button class="back" onclick="history.back()" data-astro-cid-kjxqdsv7>Ga terug</button> <h1 data-astro-cid-kjxqdsv7${addAttribute(renderTransition($$result2, "gfyjhrjy", "", `title-${frontmatter.id}`), "data-astro-transition-scope")}>${frontmatter.title}</h1> ${frontmatter.date ? renderTemplate`<p class="date" data-astro-cid-kjxqdsv7>${frontmatter.date}</p>` : null} <p data-astro-cid-kjxqdsv7><em data-astro-cid-kjxqdsv7>${frontmatter.description}</em></p> ${frontmatter.liveiste ? renderTemplate`<a${addAttribute(frontmatter.livesite, "href")} data-astro-cid-kjxqdsv7>View this project here</a>` : null} ${frontmatter.image && renderTemplate`${renderComponent($$result2, "Image", $$Image, { "src": frontmatter.image.url, "width": "300", "height": "200", "alt": frontmatter.image.alt, "data-astro-cid-kjxqdsv7": true })}`} ${renderSlot($$result2, $$slots["default"])} ${frontmatter.notes ? renderTemplate`<div class="notes" data-astro-cid-kjxqdsv7> <svg width="23" height="119" viewBox="0 0 23 119" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-kjxqdsv7> <path d="M20.6863 8.5C20.6863 3.79844 16.5812 0 11.5 0C6.41882 0 2.31369 3.79844 2.31369 8.5V76.5C2.31369 81.2016 6.41882 85 11.5 85C16.5812 85 20.6863 81.2016 20.6863 76.5V8.5ZM11.5 119C20.3396 119 25.8643 110.146 21.4444 103.062C19.3933 99.7752 15.6025 97.75 11.5 97.75C2.66043 97.75 -2.86427 106.604 1.55561 113.687C3.60674 116.975 7.39753 119 11.5 119Z" fill="black" data-astro-cid-kjxqdsv7></path> </svg> <p data-astro-cid-kjxqdsv7>${frontmatter.notes}</p> </div>` : null} ${relatedPostsData.length > 0 && renderTemplate`<div class="related-posts" data-astro-cid-kjxqdsv7> <h4 data-astro-cid-kjxqdsv7>Related posts</h4> <ul data-astro-cid-kjxqdsv7> ${relatedPostsData.map((post) => renderTemplate`<li data-astro-cid-kjxqdsv7> <a${addAttribute(`/cssday/${post.slug}`, "href")} data-astro-cid-kjxqdsv7> <img${addAttribute(post.image.url, "src")}${addAttribute(post.image.alt, "alt")} width="150" data-astro-cid-kjxqdsv7> <h5 data-astro-cid-kjxqdsv7>${post.title}</h5> <p data-astro-cid-kjxqdsv7>${post.description}</p> </a> </li>`)} </ul> </div>`} </section> ` })} `;
}, "/Users/lisa/Documents/Personal Projects/lisavanderhoorn.nl/src/layouts/CSSLayout.astro", "self");

const $$Astro = createAstro("https://lisavanderhoorn.nl/");
async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.id },
    props: { post }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { post } = Astro2.props;
  const { Content } = await renderEntry(post);
  return renderTemplate`${renderComponent($$result, "MarkdownPostLayout", $$CSSLayout, { "frontmatter": post.data, "pageTitle": post.data.title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/Users/lisa/Documents/Personal Projects/lisavanderhoorn.nl/src/pages/cssday/[...slug].astro", void 0);

const $$file = "/Users/lisa/Documents/Personal Projects/lisavanderhoorn.nl/src/pages/cssday/[...slug].astro";
const $$url = "/cssday/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

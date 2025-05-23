import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent } from '../../chunks/astro/server_D0qiNZvn.mjs';
import 'kleur/colors';
import { r as renderEntry, g as getCollection } from '../../chunks/Footer_BYjpebua.mjs';
import { $ as $$MarkdownPostLayout } from '../../chunks/MarkdownPostLayout_4LMV8FAt.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://lisavanderhoorn.nl/");
async function getStaticPaths() {
  const posts = await getCollection("projects");
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
  return renderTemplate`${renderComponent($$result, "MarkdownPostLayout", $$MarkdownPostLayout, { "frontmatter": post.data, "pageTitle": post.title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/Users/lisa/Documents/Personal Projects/lisavanderhoorn.nl/src/pages/posts/[...slug].astro", void 0);

const $$file = "/Users/lisa/Documents/Personal Projects/lisavanderhoorn.nl/src/pages/posts/[...slug].astro";
const $$url = "/posts/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

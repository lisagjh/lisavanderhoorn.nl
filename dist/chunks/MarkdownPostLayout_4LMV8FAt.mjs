import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute, f as renderSlot, e as renderTransition } from './astro/server_D0qiNZvn.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from './BaseLayout_Dxx61ApU.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Image } from './_astro_assets_DDk7qquH.mjs';
import { g as getCollection } from './Footer_BYjpebua.mjs';
/* empty css                         */

const $$Astro = createAstro("https://lisavanderhoorn.nl/");
const $$MarkdownPostLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MarkdownPostLayout;
  const { frontmatter } = Astro2.props;
  await getCollection("projects");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": `${frontmatter.title}`, "data-astro-cid-5grsw2hi": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="markdown-post" data-astro-cid-5grsw2hi${addAttribute(renderTransition($$result2, "24ikj4zz", "", `post-${frontmatter.id}`), "data-astro-transition-scope")}> <button class="back-home" onclick="history.back()" data-astro-cid-5grsw2hi>Ga terug</button> <h2 data-astro-cid-5grsw2hi${addAttribute(renderTransition($$result2, "t5k7mbsc", "", `title-${frontmatter.id}`), "data-astro-transition-scope")}>${frontmatter.title}</h2> ${frontmatter.date ? renderTemplate`<p class="date" data-astro-cid-5grsw2hi>${frontmatter.date}</p>` : null} <p data-astro-cid-5grsw2hi><em data-astro-cid-5grsw2hi>${frontmatter.description}</em></p> ${frontmatter.liveiste ? renderTemplate`<a${addAttribute(frontmatter.livesite, "href")} data-astro-cid-5grsw2hi>View this project here</a>` : null} ${frontmatter.image && renderTemplate`${renderComponent($$result2, "Image", $$Image, { "src": frontmatter.image.url, "width": "300", "height": "200", "alt": frontmatter.image.alt, "data-astro-cid-5grsw2hi": true })}`} ${renderSlot($$result2, $$slots["default"])} ${frontmatter.notes ? renderTemplate`<div class="notes" data-astro-cid-5grsw2hi> <svg width="23" height="119" viewBox="0 0 23 119" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-5grsw2hi> <path d="M20.6863 8.5C20.6863 3.79844 16.5812 0 11.5 0C6.41882 0 2.31369 3.79844 2.31369 8.5V76.5C2.31369 81.2016 6.41882 85 11.5 85C16.5812 85 20.6863 81.2016 20.6863 76.5V8.5ZM11.5 119C20.3396 119 25.8643 110.146 21.4444 103.062C19.3933 99.7752 15.6025 97.75 11.5 97.75C2.66043 97.75 -2.86427 106.604 1.55561 113.687C3.60674 116.975 7.39753 119 11.5 119Z" fill="black" data-astro-cid-5grsw2hi></path> </svg> <p data-astro-cid-5grsw2hi>${frontmatter.notes}</p> </div>` : null} <!-- {
      relatedPostsData.length > 0 && (
        <section class="related-posts">
          <h3>Related Posts</h3>
          <ul>
            {relatedPostsData.map((post) => (
              <li class="related">
                <a href={\`/posts/\${post.slug}\`}>
                  <Image
                    src={post.image.url}
                    width="100"
                    height="70"
                    alt={post.image.alt}
                  />
                  <h4>{post.title}</h4>
                </a>
              </li>
            ))}
          </ul>
        </section>
      )
    } --> </section> ` })} `;
}, "/Users/lisa/Documents/Personal Projects/lisavanderhoorn.nl/src/layouts/MarkdownPostLayout.astro", "self");

export { $$MarkdownPostLayout as $ };

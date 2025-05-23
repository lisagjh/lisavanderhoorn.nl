import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, f as renderSlot, d as addAttribute, h as createTransitionScope, g as renderHead, m as maybeRenderHead, e as renderTransition } from '../chunks/astro/server_D0qiNZvn.mjs';
import 'kleur/colors';
import { d as $$Footer, $ as $$Index$1, a as $$Index$2, b as $$ClientRouter, g as getCollection, c as $$Header } from '../chunks/Footer_BYjpebua.mjs';
/* empty css                                 */
import 'clsx';
export { renderers } from '../renderers.mjs';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$1 = createAstro("https://lisavanderhoorn.nl/");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { pageTitle } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><meta name="description" content="Lisa van der Hoorn is an aspiring frontend developer, focused on creating accessible websites. Lisa has experience with modern frontend technologies, and fundamental knowledge of UI/UX design."><link rel="icon" type="image/svg+xml" href="/favicon.png"><link rel="stylesheet" href="/styles/global.css"><meta name="generator"', "><title>", "</title>", "", "", "", "</head> <body", "> <main> ", " </main> ", ' <script type="module">\n  import { gsap } from "../../node_modules/gsap";\n  import { SplitText } from "../../node_modules/gsap/SplitText";\n\n  gsap.registerPlugin(SplitText);\n<\/script></body></html>'])), addAttribute(Astro2.generator, "content"), pageTitle, renderComponent($$result, "ClientRouter", $$ClientRouter, {}), renderComponent($$result, "Analytics", $$Index$2, {}), renderComponent($$result, "SpeedInsights", $$Index$1, {}), renderHead(), addAttribute(createTransitionScope($$result, "ekcrbxgw"), "data-astro-transition-persist"), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Users/lisa/Documents/Personal Projects/lisavanderhoorn.nl/src/layouts/Layout.astro", "self");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Intro = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<section class="intro" data-astro-cid-ulpew5ss> <h1 class="title" data-astro-cid-ulpew5ss>Lisa van der Hoorn</h1> <div class="wrapper js-hidden" data-astro-cid-ulpew5ss> <p class="split" data-astro-cid-ulpew5ss>Frontend <span class="dev" data-astro-cid-ulpew5ss>Developer</span></p> </div> </section>  <script type="module">\n  import { gsap } from "../../node_modules/gsap";\n  import { SplitText } from "../../node_modules/gsap/SplitText";\n  import { ScrambleTextPlugin } from "../../node_modules/gsap/ScrambleTextPlugin.js";\n  gsap.registerPlugin(SplitText);\n  gsap.registerPlugin(ScrambleTextPlugin);\n\n  const wrapper = document.querySelector(".wrapper");\n\n  // Show the wrapper after a short delay\n  setTimeout(() => {\n    wrapper.classList.remove("js-hidden");\n  }, 200);\n\n  const split = new SplitText(wrapper, {\n    type: "words",\n    linesClass: "split",\n    mask: "span",\n  });\n\n  gsap.fromTo(\n    split.words,\n    {\n      y: "50%",\n      opacity: 0,\n      rotate: () => Math.random() * 20 - 15,\n    },\n    {\n      y: "0%",\n      opacity: 1,\n      duration: 0.75,\n      delay: 0.75,\n      rotate: 0,\n      stagger: {\n        each: 0.05,\n      },\n    }\n  );\n\n  const dev = document.querySelector(".dev");\n\n  const original = "Developer";\n  const replacement = "Nerd";\n\n  let timer;\n\n  wrapper.addEventListener("mouseenter", () => {\n    if (timer) clearTimeout(timer);\n    timer = setTimeout(() => {\n      gsap.to(dev, {\n        scrambleText: {\n          text: replacement,\n          chars: "abcdefghijklmnopqrstuvwxyz",\n          speed: 0.15,\n        },\n        duration: 0.45,\n        ease: "power2.in",\n      });\n    }, 250);\n  });\n\n  wrapper.addEventListener("mouseleave", () => {\n    if (timer) clearTimeout(timer);\n    timer = setTimeout(() => {\n      gsap.to(dev, {\n        scrambleText: {\n          text: original,\n          chars: "abcdefghijklmnopqrstuvwxyz",\n          speed: 0.15,\n        },\n        duration: 0.45,\n        ease: "power2.inOut",\n      });\n    }, 250);\n  });\n<\/script>'])), maybeRenderHead());
}, "/Users/lisa/Documents/Personal Projects/lisavanderhoorn.nl/src/components/display/Intro.astro", void 0);

const $$Astro = createAstro("https://lisavanderhoorn.nl/");
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${maybeRenderHead()}<section class="about" id="about" data-astro-cid-klxk3r47> <div data-astro-cid-klxk3r47> <h2 class="pill" data-astro-cid-klxk3r47>About Me</h2> <p data-astro-cid-klxk3r47>
Hi, I'm Lisa! I'm a frontend developer with a passion for creating
      accessible and visually appealing web experiences.
</p> <p data-astro-cid-klxk3r47>
I work with HTML, CSS, and JavaScript, and have built dynamic websites
      using Node.js, Express, and EJS. I also enjoy working with modern
      frameworks like SvelteKit and Astro.
</p> <p data-astro-cid-klxk3r47>Currently I'm learning some React and diving into PHP.</p> </div> <div data-astro-cid-klxk3r47> <h2 class="pill" data-astro-cid-klxk3r47>More About Me</h2> <p data-astro-cid-klxk3r47>
I enjoy combining code and creativity, whether it's in experimenting with
      UX/UI design in Figma, playing with animations in CSS, or messing with
      P5.js.
</p> <p data-astro-cid-klxk3r47>When I'm not coding, I'm reading a good book or playing some games!</p> <a href="/#" class="pill" data-astro-cid-klxk3r47>Learn More</a> </div> </section> `;
}, "/Users/lisa/Documents/Personal Projects/lisavanderhoorn.nl/src/components/display/About.astro", void 0);

const $$WorkShowcase = createComponent(async ($$result, $$props, $$slots) => {
  const projects = await getCollection("projects");
  const allProjects = projects.sort((a, b) => a.data.id - b.data.id);
  return renderTemplate`${maybeRenderHead()}<section id="work" data-astro-cid-pzmqxqis> <div class="wrapper" data-astro-cid-pzmqxqis> <h2 class="pill" data-astro-cid-pzmqxqis>Work</h2> <p data-astro-cid-pzmqxqis>${allProjects.length}</p> <p data-astro-cid-pzmqxqis>Check out some projects I've worked on.</p> </div> <ul class="grid" data-astro-cid-pzmqxqis> ${allProjects.map((project, index) => renderTemplate`<li${addAttribute(index % 2 !== 0 ? "odd" : "even", "class")}${addAttribute(index, "data-index")} data-astro-cid-pzmqxqis> <a${addAttribute(`/posts/${project.id}`, "href")} data-astro-cid-pzmqxqis> <img${addAttribute(project.data.image.url, "src")}${addAttribute(project.data.image.alt, "alt")} loading="lazy" width="180" data-astro-cid-pzmqxqis> <h3 data-astro-cid-pzmqxqis>${project.data.title}</h3> <p data-astro-cid-pzmqxqis>${project.data.description}</p> </a> </li>`)} </ul> <div class="wrapper" data-astro-cid-pzmqxqis> <a href="/#" class="pill" data-astro-cid-pzmqxqis>More </a> </div> </section> `;
}, "/Users/lisa/Documents/Personal Projects/lisavanderhoorn.nl/src/components/display/WorkShowcase.astro", void 0);

const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getCollection("blog");
  return renderTemplate`${maybeRenderHead()}<section id="blog" data-astro-cid-3mzarhv7> <div class="wrapper" data-astro-cid-3mzarhv7> <h2 class="pill" data-astro-cid-3mzarhv7>Blog</h2> <p data-astro-cid-3mzarhv7>Maybe I very occassionally share some stuff here?</p> </div> <ul class="grid" data-astro-cid-3mzarhv7> ${allPosts.map((post) => renderTemplate`<li data-astro-cid-3mzarhv7${addAttribute(renderTransition($$result, "k67ze7pu", "", `post-${post.id}`), "data-astro-transition-scope")}> <a${addAttribute(`/blog/${post.id}`, "href")} data-astro-cid-3mzarhv7> <h3 data-astro-cid-3mzarhv7${addAttribute(renderTransition($$result, "46sxgegi", "", `title-${post.id}`), "data-astro-transition-scope")}>${post.data.title}</h3> <p data-astro-cid-3mzarhv7>${post.data.description}</p> </a> </li>`)} </ul> </section> `;
}, "/Users/lisa/Documents/Personal Projects/lisavanderhoorn.nl/src/components/display/Blog.astro", "self");

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "pageTitle": "Frontend Developer - Lisa van der Hoorn" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Intro", $$Intro, {})} ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "About", $$About, {})} ${renderComponent($$result2, "WorkShowcase", $$WorkShowcase, {})} ${renderComponent($$result2, "Blog", $$Blog, {})} ` })}`;
}, "/Users/lisa/Documents/Personal Projects/lisavanderhoorn.nl/src/pages/index.astro", void 0);

const $$file = "/Users/lisa/Documents/Personal Projects/lisavanderhoorn.nl/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

/** @jsx h */

import { configureBlog, createBlogHandler, h } from "blog";
import { ColorScheme, html, UnoCSS } from "https://raw.githubusercontent.com/denoland/deno_blog/589c4750d001ae2a4e921385be558d97060e3933/deps.ts";

html.use(UnoCSS());
html.use(ColorScheme("auto"));

const IS_DEV = Deno.args.includes("--dev") && "watchFs" in Deno;

const state = await configureBlog(import.meta.url, IS_DEV, {
  title: "Holden Malinchock's Blog",
  description: "Thoughts and opinions are my own.",
  // header: <header>Your custom header</header>,
  // section: <section>Your custom section</section>,
  // footer: <footer>Your custom footer</footer>,
  avatar: "https://deno-avatar.deno.dev/avatar/blog.svg",
  avatarClass: "rounded-full",
  author: "Holden Malinchock",
  links: [
    { title: "Email", url: "mailto:digits_jigs.07@icloud.com" },
    { title: "GitHub", url: "https://github.com/HoldenMalinchock" },
  ],

  // middlewares: [

  //   // If you want to set up Google Analytics, paste your GA key here.
  //   ga("UA-XXXXXXXX-X"),

  //   // If you want to provide some redirections, you can specify them here,
  //   // pathname specified in a key will redirect to pathname in the value.
  //   redirects({
  //    "/hello_world.html": "/hello_world",
  //   }),

  // ]
});

Deno.serve(createBlogHandler(state) as Deno.ServeHandler);

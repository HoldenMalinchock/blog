/** @jsx h */

import blog, { ga, redirects, h } from "@hmalinchock/blog";

blog({
  title: "Holden Malinchock's Blog",
  description: "Thoughts and opinions are my own.",
  // header: <header>Your custom header</header>,
  // section: (post) => <section>Your custom section with access to Post props.</section>,
  // footer: <footer>Your custom footer</footer>,
  avatar: "https://deno-avatar.hmalinch.deno.net/avatar/blog.svg",
  avatarClass: "rounded-full",
  author: "Holden Malinchock",
  links: [
    { title: "Email", url: "mailto:digits_jigs.07@icloud.com" },
    { title: "GitHub", url: "https://github.com/HoldenMalinchock" },
  ],

  // middlewares: [

    // If you want to set up Google Analytics 4, paste your Measurement ID here.
    // ga("G-XXXXXXXXXX"),

    // If you want to provide some redirections, you can specify them here,
    // pathname specified in a key will redirect to pathname in the value.
    // redirects({
    //  "/hello_world.html": "/hello_world",
    // }),

  // ]
});

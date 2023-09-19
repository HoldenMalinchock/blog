---
title: My Dream Stack
publish_date: 2023-09-18
---

A few months ago the founder of NodeJS and now the founder of Deno, Ryan Dahl, gave a talk on his "Dream Stack".  Clearly an influential developer in the world today, node is universal and Deno is hot on Node's heels.  In fact Deno powers this very blog site, Deno runs the backend which renders this site with zero javascript sent to the server and the cloud it runs on it Deno Deploy which runs javascript at the edge.

Since I agree with all of his views on his Dream Stack I thought I would get a little more specific on what my dream stack would have.  I have worked on multiple different projects ranging from corporate to personal and I have a few thoughts on what I would do if I was architecting a stack.

## Shared Frontend and Backend
One of the more important things that I have learned from different projects is simplicity is usually better.  The best way I have found to do this is sharing backend and frontend tech.  Javascript is getting faster and with edge technology it's getting even better.  The majority of software made for generic users do not require massive optimization with languages that don't match the backend.  It is true that things like go and rust can speed up servers and API's but there are trade offs.  It is difficult to optimize these languages and you require engineers to learn new languages or hire specific language experts in these.  Rust is only slightly faster by default you have to manage the memory correctly and use tricks to make it worth it.

With things runtimes like Deno javascript is faster than ever, more than fast enough for your app, assuming you arent trying to shoot down rockets.  Deno is already more optimized than node without special tricks.

My backend and frontend would be the same language and I would make both typescript.  Deno on the backend with node running the frontend.  Deno is still not ready to take over react/nuxt type applications.  However you can now have all developers working on both sides.  My code looks the same, I need an API on the backend, a frontend dev can make the API and then consume it on the frontend themselves.  And with typescript you can share types as well.

## Use Vue
Just use Vue.  Having developed in both React and Vue I cannot encourage Vue to be used enough.  Vue is vastly simpler, more cohesive and easier to pick up for entry level developers.  I cannot get over the developer experience I get when writing in Vue vs React.  With the Vue composition API you get many of the abstractions you want without the ones you don't.  Vue has enough structure and features to do very complex actions while still being easy to read and smiple.  Prop drilling and watchers in Vue are a pleasure to use.  Everything just makes sense, computed values are great, lazy component loading is a one line addition.  

JSX is great and all but I still give the advantage to Vue's template structure.  Everything connects so well, elements in this template are easier to read and easier to use.  Vue's two way binding with `v-model` and short hands for clicks built in with `.stop` and `.prevent` out of the box.  Emitting and responding to events in Vue is not only easier but makes more sense to look at.  No callbacks just emit an event and let the parent use `@event` to preform an action.

Vue is far superior to React at this point and the development team is continuing to make it better every update.  A perfect blend between Angular and React, you get the structure of Angular with the library freedom of React.
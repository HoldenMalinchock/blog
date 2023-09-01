---
title: Revisiting Vue3's Composition API
publish_date: 2023-08-31
---

After going to VueConf 2023 I have re-newed thoughts about the composition api. I want to aknowledge that I was very wrong before and provide my re-newed experience of why.

My two big complaints with Vue in general was the composition api complexity and typescript support with the Vue language in general. After visiting VueConf and getting the opportunity to attend a workshop with Evan You himself, the composition api made so much more sense. I now understand why it is I have to define my reactivity, and the advantages. The biggest advantage by far was also my main complaint with Vue as a whole and that is typescript support.

When using the composition api we are able to use types as I would expect in something like react where I define a variable with a type I define in my `@/types`. I then can use that variable anywhere with that type support. Since we are defining variables and functions in real javascript script tags via setup, types just work. This was a huge hole and issue with Vue before in my opinon, I could define types for my props and variables but they were not really types since it was visual only. Vue was made before typescript so it's understandable why this was an issue but the advancement of the composition api fixed this.

The composition api also provided tons of features that I didn't know I was missing until I had them. Things like dependency injection, composables and flexable code became much easier. Coming from react projects I cannot get over how nice composables and dependency injection is. It also makes my projects feel more frontend language universal, it feels closer to react than before which helps devs switch between the two. I now get all the great things of react and vue together.

I now use the composition api for everything and once you get over some of the quirks of the composition api and reactivity it is worth it.

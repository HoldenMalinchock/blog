---
title: Vue3 Typescript Rant
publish_date: 2023-04-02
---

As a user of React and Vue I needed to contribute to the recent react complaints. Rather than disucssing the current react issues I wanted to talk about my biggest complaint with the alternative Vue.

I am not interested in the many specific comaprisons there are millions of websites that can compare them, I want to talk about the typescript support between the two. Anyone who has used react knows that the typescript support is top tier. I have typescript in my HTML code and it is terrific. I am seemlessly writing javascript code the entire time. My props are parameters to a function just the same as TS works with any util function. When I write vue there is more separation.

Everything I do with child components that use props of data from the parent is an `any`. It doesn't matter if I use the syntax `prop1: Object as PropType<T>`. When I display that prop in my template Volar with VScode will label this as `any`. It kills me and is so painful to work with any's all over the place when I label my props. I want to define the object structure of data that goes into my child, and when I display the 4 fields of that object in my HTML I want intellisense in my `<template />` telling me what is available.

This is my largest complaint with vue, I hate the TS support and I wish it was easier. I am not sure how possible this is to improve, Vue's structure is specific and intentionally designed the way it is. This design leads to lots of advantages but I can't help but be blinded by this glaring lack of developer experience.

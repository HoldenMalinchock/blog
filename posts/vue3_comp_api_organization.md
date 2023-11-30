---
title: Organizing Vue3 Composition API
publish_date: 2023-11-30
---

I hate boilerplate code, I want to avoid as much boilerplate code as possible.  Switching from the options API to composition API in vue came with the removal of lots of boilerplate code which I thought I would like a lot.  However after converting dozens of files at this point I find myself struggling to keep code locations consistent.

The options API had defined locations for different parts, watchers here, computed values there.  There were established eslint configurations enforcing these orders.  Even though this wasn't always the logical order it felt contained.  Now in the composition api the guard rails are off and best practices and rules are just whatever I say they are.  On larger teams this gets messy.  Just imagining the merge conflicts of a 10 person team changing like files sounds nightmarish.

With the guard rails down I've been thinking a lot about what I think is the best way to format our script tag in components.  And here is what I have used:
```
- Imports 
- Props/Emits
- Injections/Composables
- Data
- Computed Data
- Methods
- Lifecycle Methods
- Watchers
```

This just looks like the options API, and you would be right.  The one oddity here is watchers at the botttom.  In previous standard eslint rules watchers were at the top after the data section.  The reason I need these here is watchers interact across your component.  So they take data changes, and do things with this often involving methods.  For this reason they need to be after your Methods and after the Data.

When you look at Vue's Documentation and discussions online it seems the benefits of the composition API speak to the formatting of logic remaining together in a component, but I haven't found this to be what I gravitate to in practice.  I don't find myself in positions where I can keep logic together in small sections of a component.  I find that defining Data variables not at the top creates strange looking files.  Data variables tend to be used in a lot of places, and I ran into issues being consistent.  Some Data variables were with their logical "group" but others were apart for the purpose of being used in a few other logical "groups".

Right now I don't like the look of logical "groups" together, however I plan to revisit this as VueJS and discussion groups point toward this being the Best Practice.  I could argue that my distaste for the look and feel of this setup is rooted in my familiarity with the options API format.
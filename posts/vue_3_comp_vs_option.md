---
title: Vue3 Composition API vs Options API
publish_date: 2023-02-18
---

If you have paid any attention to Vue latetly you might have noticed there is a new "way" to write Vue with the Composition API.  Every post I see discusses all the wonders of the new composition API and how to use it.  I seek to provide a short personal breakdown between the two and what my experience with them has been.

The TLDR is you should use both.  
-The composition API is great for small abstracted components that have little internal logic and the logic is not closely connected.  
-The Options API is great for writing more complex components with closely coupled pieces that work together.

My main complaint with the Composition API is reactivity.  When I started writing my first components I immediately was confused what the purpose of me defining what variables are reactive and creating this relationship explicit.  It felt strange and I didn't like it.  As ive written more components with the composition api creating `refs` and `reactive` variables have contributed nothing more than time debugging and fixing reactivity.  They do not react, no pun intended, in the way I would expect them to.  I have never been one for Comp Sci theory or being able to recite every definition reguarding references.  I hate that its hard to update my data.

### My Most Hated Example
If I am displaying a list of objects `[{name:"Bob", age: 20}]` and I need to add 10 to their age I would expect to be able to do something like this:
```
let data = [{name:"Bob", age: 20}]

data.value = data.value.map((person) => {
    person.age += 10
})
```
This is not how it works.  If I re-assign my variable I no longer have reactivity in my template.  It makes no sense and I hate having to do gymnastics to get my data to update.

In the options API this would work exactly how I expect, I run a map on my data, set it equal to itself and my template updates.  I dont want to care about my reference pointers when making a todo app.  If I change my variable I want it to update in my template, simple as that.

If you now imagine a complex page that requires 3 components talking to each other and sending data to a 4th, all the while seperate options can change the data of those 3 components it quickly becomes a nightmare making all my components update together.  The Options API makes this simple, change a variable it updates wherever its refenced, clean.

While there are many pro's to the composition api that I aknowledge; less boilerplate, more code reuse.  I have not felt the positives outweigh my main complaint of reactivity.

Software should be simple and easy to use for both the user and the developer.  Vue's Options API is easier to use and just works.

Maybe it's a skill issue, it probably is, but I dont want to think about how to keep my list reactive in a webapp.  It should just work.
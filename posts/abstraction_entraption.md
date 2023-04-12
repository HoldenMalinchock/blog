---
title: Abstraction Entraption
publish_date: 2023-04-12
---

Software engineers strive to be efficient, we hate resuing code, we hate writing the same thing twice and we hate simple changes affecting multiple places of our code. We get a hit of seratonin whenever we see an opportunity to make something a function that we can use in another place.

However, abstraction has trade-offs, large ones, that are never considered. It leads to complexity and coupling. Software engineers have this obsession with making things as `correct` as possible, whatever that means. Problems are often not as complex as they may appear. Solutions are over engineered when plain functions would do, but instead we see the chance to abstract and create dozens of functions and hoops to just get the reference name.

Software engineers need to drop some of the ego, stop whiteboarding and just solve the problem. Not everything is the moon landing. Coding requires iteration, this is why no file is ever complete. By starting with the most abstracted and bulletproof solution for the off chance we might reuse this code in the future just makes iteration harder and harder.

I believe the obsession with premature abstraction stems from OOP infecting the ecosystem and problems are seen throught the light of maximum abstraction at all costs.

Abstraction should come from refactoring and code iteration, abstracting too quickly and before you need to leads to unre-factorable code and special cases as requirements change.

Solve the problem without abstraction first.

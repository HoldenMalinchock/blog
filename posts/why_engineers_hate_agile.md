---
title: Why Engineers Hate Agile
publish_date: 2026-05-22
---

If you go to any Software Engineering community online you are sure to see engineers complaining or joking on agile.  Yet you wouldnt find a company or a job posting today that doesn't use or list agile.  When I say agile, I really mean scrum specifically but ill use agile since this speaks to the overall process.  Why is such a hated work management framework the universal solution?  After working in multiple agile teams with reworks of the practice within those teams I want to share my opinions on why I think it's so hated by engineers and what would actually be a good solution.

Before agile the primary system for software management was waterfall.  When agile was "created" it was revolutionary for the time and given the problems with waterfall I think it's easy to understand why it quickly became the accepted solution.  But after almost 20 years I think teams should rethink how they implement agile given the hatred from engineers.

Problem 1

Abstract formalized education of agile.  Atlassian as well as others have pushed agile eduction and companies have gladly shelled out the money to send their people to this education.  The rigid and formal eduction of agile is the core problem for all other issues ill talk about later.  This might seem like a strange issue, how could certified scrum master courses and agile principle courses be the cause of so many problems?  As someone who was once a certified scrum master, since lapsed, I can speak to this first hand.  The courses that teach agile, approach it from a idealistic and non software environment.  Everything is nice and clean, and not complex.  When you aren't actually working in a real environment doing a retrospective every two weeks to talk about what went well or poorly in a sprint sounds like a good idea.  In practice this has never created value for anyone.

This whole system becomes a feedback loop where project managers, product owners, scrum masters get formal education of all the things they should be doing.  Teams implement the idealistic plan and hate it, and then more eductation is scheduled for the engineers to learn the ideal.  Money is funneling into these companies that sell eduction that only works in theory.

Problem 2

Too many meetings.  This is probably the largest complaint by engineers who want to just do the work.  Daily standups, sprint planning, sprint retro, sprint demo, backlog grooming.  There are so many meetings and most of them don't have value.  I already spoke about retro's above, there has never been an interesting discovery talking about what went well in the last two weeks.  Daily standup's are always longer than planned, always have too many members and fail to add value.  This ties in closely with the idealistic education people are taught.

In your agile dream team you have a team of 6-10 engineers and all of them work on a single web app project and all of them have the same skill level, background knowledge everything.  Agile teaches you that stand ups are great because anyone in the team should be able to grab any ticket off the backlog but rarely is this the case.  Teams are built of all kinds of different engineers with different backgrounds to be successful, often on multiple projects with sprawling requirements.  Its not typically 8 Mid level web developers, it more like 2 System admins, one Linux admin, a network engineer, 2 Full stack developers, a front and backend engineer.  It is unreasonable to assume they can all pick up work from each other at any moment.

This completely breaks the nice fantasy land you got from your Certified Scum Master course where all 6 engineers are the exact same.  This means a daily stand up typically involves updates that only 1 or two other people on the 10 person call care about.

Problem 3

Managing Tickets and overlapping of duties.  Engineers hate managing tickets, sometimes this is justified.  When I have worked on great agile teams they correctly setup the infrastucture for an agile team to be successful.  This means there is a product owner, who descibes what they want the product to do at a high level.  The Scrum Master then takes those and is supposed to build tickets based on the feedback from the product owner.  In practice many teams have engineers write their tickets because the Scrum Master is not technical enough to do it themselves.  So they make blank tickets with broad titles and then rely on egnineers to go fill out all of those tickets with actual useful information.  This is not how it is supposed to work and leads to engineers giving up ticket management all together.  This is further compounded by grooming the backlog also involving engineers when most of this should be done by scrum management.  But most ticket management ends up falling on engineers who would rather spend their time doing the work their yearly review depends on.


How would I actually do it?

Scrum groups need to be smaller.  The entire 20 person engineering team should not be in a single scrum team.  Build scrum teams of people who care about every single task the other does.  Yes this means you might have teams of 2 or 3 people.  You need a scrum master who is technical and can add resonable detail to a ticket, they don't have to describe how to do things or define each sub task of building a custom analytics page.  But they should be able to break an analytics board out into reasonable chunks.  The product owner and scrum master should be different people.  In many spaces, the product owner isn't the actual person who is getting the product, so the product owner is internal.  The scrum master and product owner should do 90% of grooming.  Engineers should provide small input on grooming, in cases where there are dependencies agross projects that a Scrum Master might not be aware of.  

We already shrunk the amount of people on the scrum team so daily stand ups are shortened, 10-20% of grooming requires engineers so this cuts down on that meeting.  Remove retrospectives entirely.  Planning takes place after grooming.  When engineers get together to plan the sprint, tickets should be groomed.  Ungroomed backlogs distract from the purpose of the meeting and increase the time of the meeting exponentially.

This requires compromise from both management and engineers.  Management needs to give up the core principles from the formal agile eduction.  Engineers need to give more effort to comment on their tickets, correctly manage the state of their tickets and keep meetings on topic.

I think if teams follow this structure and leave the perfect safe space of agile theory behind agile might not be so bad.  There is no one true way to do agile, so this should be adapted to fit your needs, however the core principles remain.
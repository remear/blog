---
layout: post
title: "I asked for a t-shirt, I got a job"
date: 2013-09-07 11:18
comments: false
categories: balanced
draft: false
---


### I'm not just a developer

Can a person truly be happy at their job? As I pondered this question over several months, I was arriving at a negative conclusion. I had what I considered to be a good job– I made decent money, the benefits were good, my bills were getting paid, and I was living a relatively comfortable life. Something was still lacking, though, and I began to notice I wasn’t happy. I love writing software, and I feel fortunate to have my interests coincide with my profession. I very much enjoy being creative and taking pride in my work. Coding makes me happy. So why wasn’t I?

At the time, I was working for a “closed” company. One, in fact, that practiced stacked ranking, and prohibited contributing work back to open source projects. This company placed no value on developer involvement in feature planning and expected developers to just code what they ask for. All the credit for a successful feature addition would go to the project manager, and all the blame for a problem or failure would land on the developer. Opportunities for learning new technologies and methodologies were practically non-existent as the company demonstrated a strong bias to arcane technologies because that's "how it's always been." This environment was crushing my creativity, and that was something I refused to lose.


### Pursuing a creative outlet

My creativity is the core for everything I do. It's what motivates me. My job wasn't challenging; it stood as a blockade to learning and creativity. I decided to retain my creativity by beginning work on a free time project; something that would allow me to apply knowledge gained though leisurely studies. This project required a payments solution.

I've never liked dealing with payment gateways and wasn't looking forward to, once again, dealing with companies like PayPal and Authorize.net; whose integration, documentation, agreements, and pricing are vastly overcomplicated. I was looking for one with two specific features. First, I needed to accomplish a payment scenario where I would charge buyer A, then pay out to seller B without being a middleman – a marketplace solution of sorts. Second, I needed the ability to debit bank accounts. I spent several months researching various payments solutions, but results proved disappointing. Some only processed credit cards. Some had vague pricing. Some had horrible documentation. Most were generally very overcomplicated. Many had horrible support. Then, I found [Balanced](https://www.balancedpayments.com).

Balanced had an [IRC](http://en.wikipedia.org/wiki/IRC) channel where I could get support directly from developers. I inquired about [ACH debit](https://www.balancedpayments.com/ach-debits) support and they said they didn't have the ability yet but that it was on the [roadmap](https://github.com/balanced/balanced-api/issues/2) for the near future. Since I wasn't in a hurry, I decided to continue implementing Balanced into my application while they developed the feature I needed. I began by hanging around in the [Balanced IRC channel](http://webchat.freenode.net/?channels=balanced&uio=MTE9OTIaf) asking questions here and there. I was impressed by the Balanced team's helpfulness and politeness. On several occasions they directly asked me for my feedback on their style of operation. Balanced completely changed my opinion of working with payment gateways.

In a short space of time, I started to find the Balanced IRC channel to be an enjoyable place to hang out. I appreciated the help I received from them, so I began answering questions in the channel as a means of giving back and saying thanks. This was often followed up by a series of appreciative remarks from several Balanced employees. Before I knew it, my creative outlet had become Balanced. It was like my second job, my fun job. I couldn't wait to get through the day at that boring company and return home to work on exciting Balanced projects.


### I asked for a t-shirt

It was at about this point when I had a breakthrough. Balanced had been using Github in a very unique way. They used Github issues to not only track problems, but also to openly design features and prioritize them for implementation. I then realized Balanced wasn’t just an open source company, it was an “open company”. My contributions, be it code pull requests, comments, questions, or feature requests, all meant something. I wasn’t just contributing to open source, I was contributing to the company. My creativity was welcomed. I was helping shape Balanced.

I really liked the direction Balanced was going and had a genuine desire to see them grow to become a leading player in the payments industry. I felt honored to contribute to such a great company, help realize their vision, and become a part of the Balanced legacy. The satisfaction I felt drove me to more actively contribute to [balanced-ruby](https://github.com/balanced/balanced-ruby) and look for other areas where Balanced could possibly benefit from my skills. While hanging out in IRC, a frequent question asked was if Balanced had an iOS library. The answer was always the same- “not yet, but we hope to have one soon!” Since I work a lot with Mac OS X and iOS Objective-C applications, I saw the opportunity to contribute and spent the next few evenings creating [balanced-ios](https://github.com/balanced/balanced-ios). I can only imagine the incredulous surprise that must have ensued when I presented it to Balanced. They openly mentioned me in interviews and articles, thanking me for my work [1]. For weeks they pestered me about paying for my contributions. Each time I replied that I wasn’t motivated by money; I contributed because I believed in Balanced and wanted to see it grow and succeed. They were relentless though, so I asked if I could just have a Balanced t-shirt. They sent me four.

{% img /images/posts/balanced-box.jpg 740 352 %}

### I got a job

What's the worth of a t-shirt? The company which employed me showed no appreciation for my work, so I decided to give my work where it would be valued. The t-shirt is my badge of recognition and I consider it to be priceless.

Shortly after the first release of balanced-ios, I was asked if I wanted to work full-time at Balanced. At the time, Balanced had a strict no remote worker policy, so I reluctantly declined because I couldn’t move away from family. This deterrent didn’t change my drive to keep contributing to Balanced, though. Another few months passed, and I started to see more requests for an Android library. So I made [balanced-android](https://github.com/balanced/balanced-android) over the course of a few evenings and gave it to Balanced. I’m not sure what made them rethink their policy, but Balanced again asked me to come work for them, this time as their first remote developer.

I’m now a full-time remote employee at Balanced, and I’m loving every minute of it. In complete contrast to my old job, I’m able to be creative and work on new things to make the payments industry better, especially for marketplaces. It's refreshing and inspiring to work in an environment where it's commonplace to hear, "Want to take a whack at it?" when asking about an issue or proposing a feature. I feel that I am a valued member of the company. I asked for a t-shirt, and I got a job, plus much more. I now know that the key to finding happiness in my career isn’t just by doing what I love, but by also being part of a team that openly appreciates everyone’s achievements and gives people the freedom to thrive in their passions.


Discussion on HackerNews: [https://news.ycombinator.com/item?id=6529696](https://news.ycombinator.com/item?id=6529696)

<small>
1. [Why I Made My Payments Startup An Open Company][] <br>
&nbsp;&nbsp;&nbsp;&nbsp;[Balanced adds Andreessen Horowitz and Collaborative...][]
<small>

[Why I Made My Payments Startup An Open Company]: http://www.fastcolabs.com/3008944/open-company/why-i-made-my-payments-startup-an-open-company
[Balanced adds Andreessen Horowitz and Collaborative...]: http://pandodaily.com/2013/04/02/balanced-adds-andreessen-horowitz-and-collaboration-fund-as-investors-and-opens-up-about-opening-up/
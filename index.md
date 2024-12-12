---
layout: page
title: Buzz, bust and bounce-back
subtitle: A data-driven strategy to deal with YouTubers’ decline
cover-img: /assets/img/fond.png
thumbnail-img: /assets/img/fond.png
share-img: /assets/img/fond.png

use-site-title: true
---

## The 3Bs: meet our team of community managers

Are you a Youtuber struggling with their stats ?

Has the exponential increase of new creators on the platform left you with a declining viewership ?

Are you sick and tired of losing energy and time without figuring out how to be back on trends ?

![](/assets/img/suit.jpg)

You are not alone, and our team of experts at 3Bs are here to dedicate their talents to make you regain your popularity, without judgement and with full confidence. May it be from a big controversy or a simple popularity decline, our goal is to <b>develop a data-driven strategy for navigating the aftermath of public disinterest using insights from YouTube’s ecosystem</b>.

By drawing on patterns from previous YouTuber experiences, we’ll analyse key metrics—such as your channel type, initial popularity, posting frequency—to offer tailored strategies for re-engagement, so that you can fully focus on the fun and creative aspect of your job!

Our motivation stems from the spread of <b>online backlash</b>, that has visibly impacted creators on YouTube and other platforms. Eager to offer them unforeseen solutions and break the stigma on subscribers loss, we aim to help you make informed decisions about your next steps to rebuild audience trust.

## Research Questions

<div style="border: 2px solid red; padding: 10px; display: inline-block;">
  <ol>
    <li> How do we define decline for Youtubers ? How do we define a recovery ?</li>
    <li> Is a Youtube channel category affecting the effective response strategies after a decline?</li>
    <li> What timing and content strategies are best for re-engagement following public backlash? Should you change your posting strategy?</li>
    <li> In the exact case of a ‘bad buzz’, how to define it using Youtuber statistics? Are apology videos really useful?</li>
  </ol>
</div>

## Why should you trust us ?

HTML YOUTUBE + texte

### Before any piece of advice, how do we define a decline ?

**You feel like your viewership is going down and your stats are struggling ?** We know how painful that can be when you're trying to be on your A-game and you're putting all of your time and energy into your channel.
Let's keep it real, there are very few chances you're actively losing subscribers (or maybe you actually did fumble, you can go check out our bad buzz section ;)). If you're not in the middle of a controversy and cancel culture hasn't got the best of you, chances are you are just experiencing a decline. In most cases, your situation will fix by itself. However, if this has been going on for more than a month, maybe you should check out our analytical tool !

Since Youtube hasn't stopped gaining new users, we have reached the conclusion that very few channels will actively face a decrease in their total subscriber count. However, we can detect decline by noticing in your stats a significant slowdown in the growth rate, which may indicate potential issues such as reduced engagement or a negative reception by the audience. To go further, we compared the actual growth rate (`delta_subs`) against the rolling average growth rate (`rolling_growth_rate`).

**Why ?** Because the rolling average acts as a smoothed baseline, calculated using a defined window (we arbitrarily used a `ROLLING_WINDOW` of 20 weeks), which helps to identify deviations from the expected trend. When the growth of your channel falls below the rolling average, it suggests that the channel's performance has dipped relative to its typical trend.

After playing around with parameters, we have decided on the following:

- a minimum duration of a decline of 8 weeks: you could be on holidays without it being a decline !
- if the decline was 'intense', meaning that there was a 80% growth difference, we consider that the channel underwent a massive backlash, and may it be shorter or longer than 2, it should be counted as a decline (and a big one, what did you do ?)

To make you visualise a bit more, here is a little glimpse at the biggest Youtubers' declines, so you can see how well our detection works !

PUT subs trends for 5 big youtubers

Okay, okay, we might just be rubbing salt on the wound right now with loss and declines, let's talk about more positive things... the recovery ! So what do we considered being an efficient recovery ? Since we do not want you to fall into the unknown for too long, but we still consider normal that a recovery is not happening in a flash, we consider that your recovery was successful if it happened in the span of 16 weeks, or 4 months. More and our model will sadly announce that you have one foot in the grave, and that Youtuber might not be a durable hobbie for you... sad, but your mom told you so years ago!

# Our research team's findings on how to maximise your chances of recovery

## How to measure creator reactions

To get an idea of what's at stake, let's first take a look at some statistics about recovery.

TODO: PUT nice viz for recovery distribution among categories

We can't hide the evidences : by our standards, the majority fails to recover, especially in some categories.

That's why it is important to think before acting. Lucky you, we did the work for you so that you can put all the chances by your side.

Taking advantage of all the data that we have at hand, our research team identified the key metrics that measure creator's reactions in times of
crisis, and will now walk you through them.

todo display reaction groups horizontally

### - Upload frequency

Considering the upload frequencies of creators before the start of a decline throughout the latter draws lines between three groups. # todo garder cette phrase?

- Most creators keep uploading the same amount of content # TODO dolce vita image
- Some try to blend within the platform by posting less # TODO fantome image
- Others get it together and start spamming videos # TODO working hard/stressed image

### - Video duration

Similarly, a natural reaction is to play around with the video length to understand what content the audience prefers (are they trying to beat the [video monetization allegations](https://www.reddit.com/r/PartneredYoutube/comments/4v6bmy/why_so_many_youtubers_are_making_their_videos/)?).

### - Content category

A third path that few dare to take is to try new things by changing their Youtube identity. However, we have to emphasize that this approach can have mixed results, and the impact on your recovery rate will depend heavily on the types of topics you choose to pivot to.\
   Topic_Change  Recovered\
0         False   0.424674\
1          True   0.435916\
Our analysis shows that, on average, channels that change their video topics experience a slight increase in recovery rates  compared to those that don't change. While this is encouraging, it’s important to note that not all topic changes yield positive results. In fact, the effect of switching topics can be both positive and negative, depending on the content direction you decide to take.

TODO Add viz bar chart recovery rates

TODO Add viz chord chart to visualize common topic changes
 
Some changes occur more frequently than others, so, in order to give you meaningful insights, we will only consider the most significant trends (>30 occurences in our database).


![](/assets/img/RecoveryRatesByTopicTransition.png)

While changing your video topics could help reverse the audience loss, it’s crucial to choose your new topic strategically. Some changes will work better than others, so let's see which topic transition works in your niche:

![](/assets/img/Sankey.png)


For instance, certain transitions lead to significant improvements in recovery rates, while others may not be as beneficial. Specifically, channels focused on movie reviews tend to see positive changes in recovery when they switch topics, though transitioning to topics like politics could negatively impact your recovery. On the other hand, gameplay channels should be careful when changing topics, as only a shift to Fortnite-related content seems to maintain or increase engagement.

If you’re considering making a shift, we recommend focusing on topics that have historically shown positive outcomes, such as beauty and lifestyle or gaming-related content, while being cautious about venturing into politics or kids videos, where the change could backfire.

## What factors really matter

TODO TODO TODO jeudi EVA il manque quoi par rapport aux categories ici? Je sais pas si on peut tirer une conclusion générale, je vous laisse regarder la section juste au-dessus, mais peut-être qu'on a intérêt à pas mettre la partie category change dans cette partie.

- look at correlation

TODO interactive correlation heatmap (rendre ça stylé : category names on hover)

- regression : we find that posted more is important

TODO regression viz

- matching to confirm our findings

TODO matching viz

- key findings

## Exploiting the levers in the best possible way

- conclusions on upload freq:
  - it is good
  - what freqs are best
- conclusions on video duration
  - mostly bad
  - can still be used if necessary but not to display as necessary
- conclusions on category change
  - double-edged decision
  - choose wisely the new topic
  - some topics are safer (Movie reviews, Beauty & lifestyle)

TODO chaines +1M

TODO QUIZ

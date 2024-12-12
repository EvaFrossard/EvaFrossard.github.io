---
layout: page
title: Buzz, bust and bounce-back
subtitle: A data-driven strategy to deal with YouTubers’ decline
cover-img: /assets/img/fond.png
thumbnail-img: /assets/img/fond.png
share-img: /assets/imgfond.png

use-site-title: true
---

<p style="font-size: 1em; font-family: 'Open Sans', serif; color: #bf0906; line-height: 1.5; text-align: center; font-weight: bold;">
  Are you a Youtuber struggling with their stats ? <br>
  Has the exponential increase of new creators on the platform left you with a declining viewership ? <br>
  Are you sick and tired of losing energy and time without figuring out how to be back on trends ? <br>
</p>

## The 3Bs: meet our team of community managers

You are not alone, and our team of experts at 3Bs are here to dedicate their talents to make you regain your popularity, without judgement and with full confidence. May it be from a big controversy or a simple popularity decline, our goal is to <b>develop a data-driven strategy for navigating the aftermath of public disinterest using insights from YouTube’s ecosystem</b>. 

![](/assets/img/suit.jpg)

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






## Methods

We chose not to explore another dataset, considering the size of YouNiverse.
We used the following methods:

### Before any data exploration, preprocessing of the used dataframes in the Youniverse dataset

Although the provided dataset was already cleaned, we found some heterogeneity in the dates that needed to be fixed : the sample rate is not constant and some dates are different by a few hours or a few days. To solve this:

- Use of ‘week indexes’ in df_timeseries_en.tsv and `yt_metadata_en.json`.
- Since delta_views and delta_subs are never negative even when a decrease occurs (before preprocessing, they are 0 in this case), we replaced those columns with the deltas computed from the values directly
- Augmented the time-series with the sum of likes, dislikes and views (found in yt_metadata_helper.feather) of the videos that were uploaded during the week associated with each datapoint. It is important to keep in mind that the likes, dislikes and views of the videos were all sampled in 2019 when comparing two different weeks : a recent video might have less views than an older one but still be more popular.

### Manipulation of the dataset, and discovery analysis

Initially, we had in mind to explore and mathematically detect **‘bad buzz’** or controversy only.

To do so, we followed the below process:

- Creation of a dataset containing **only known Youtube channels that underwent a bad buzz**: `df_bb_timeseries_en.tsv`.
- Qualify what a ‘bad buzz’ is from data, and see if we could map the date of their bad buzz to specific data points.
  - **First attempt**: look for losses of subs, as we assumed that it was the general consequence of a bad buzz. We were able to conclude that a Youtube channel will rarely ‘lose’ subscribers due to the increasing traffic on the platform.
  - **Second attempt**: we used reduction or stagnation of growth coefficient of subscribers. We were able to graphically compare the delta subs to the rolling growth average of the growth coefficient and determine the moments where both diverged.

However, the bad buzz dataset containing only around 40 Youtubers, we were afraid that it would not allow us to pursue ML techniques (regression, mapping..). Therefore, we made the decision to open up our subject and tackle **“viewership decline"** instead of only big controversy, which will be tackled in a separate alternative discussion in P3.

The following analysis was performed on the dataset, to prepare for P3:

- General and **visual overview** of the whole dataset through the prism of viewership declines
- For each decline in growth, observe around those timestamps what was happening concerning like/ratios, views, activities (number of posted videos) to see if any correlation could be found (using p-values...), which could lead to a pertinent ML analysis.

### LLMs

In the aim of using an **on-device LLM** to analyse the metadata of videos that follow a popularity crisis, we applied a special treatment to the large `yt_metadata_en.json` dataset, since it contains the title and description of all crawled videos. To make it usable, we:

- split it into smaller, handable chunks
- got rid of the unneeded columns
- preprocessed them by indexing by [“channel”, “week”]
- deleted the rows that contained missing values.
- kept track of what channel appeared in each chunk in `channel_chunk_dict.json` to make them more accessible.

Videos title and description will be used as input to the LLM to detect potential **apology videos** in the alternative discussion about bad buzz. On a broader aspect, it will also be used to identify potential similarities between videos from channels which recovered from popularity decrease and others that did not manage to do so.

## Proposed timeline and organisation within the team

### Week 1 (18/11 - 24/11)

1. Finalise method to find channels of interest (Eva + Martina + Pauline)
2. Identify/create the metrics that characterise the channel’s popularity (magnitude, time scale) => used for recovery level after a fall down. (Eva + Martina + Pauline)
3. Identify the behaviour/reaction from the channel metrics to differentiate channels which failed to recover from those that managed to recover. (Nathan + Nicolas)

### Week 2 (25/11 - 01/12)

4. Matched observational study using propensity score to find out which factors have the greatest impact on recovery. (Nathan + Pauline)
5. Perform a regression of the recovery level on channels' aftermath reactions (Martina + Nicolas + Eva)

### Week 3 (02/12 - 08/12)

6. Look for patterns among reactions that led to recovery (Nicolas + Martina + Eva)
7. Focus on the alternative discussion on bad buzzes : use the LLM to find apologies and study their impact, determining if and when it is profitable to post them, study the interesting case of Jake Paul... (Nathan + Pauline)

### Week 4/5 (09/12 - 19/12)

8. Create an interactive quiz (suggesting reactions based on profile) to make the results of our study more accessible and fun (Pauline)
9. Data story and repository finalization (All)
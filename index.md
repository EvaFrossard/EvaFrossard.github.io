---
layout: page
title: Buzz, bust and bounce-back
subtitle: A data-driven strategy to deal with YouTubers’ decline
cover-img: /assets/img/fond.avif
thumbnail-img: /assets/img/fond.avif
share-img: /assets/img/fond.avif

use-site-title: true
mathjax: true
---

![](/assets/img/comments_intro.png)

### Does that sound (too) familiar ? Then you might just need our help...

<hr>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Text with Image</title>
    <style>
        .container {
            max-width: 920px;
            margin: auto;
        }
        .text {
            float: right;
            width: 60%;
            margin-right: 20px;
        }
        .image {
            float: left;
            width: 35%;
        }
        .clearfix::after {
            content: "";
            display: table;
            clear: both;
        }
        .reactionlist {
          display: grid;
          grid-auto-flow: column;
          grid-auto-columns: 1fr;
          column-gap: 41px;
        }
        .reactionlistelem {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          text-align: center;
        }
        .reactionlistelem::after {
          display: block;
          content: "";
          background: #004AAD;
          width: 2px;
          height: 100%;
          position: absolute;
          top: 0px;
          right: -21px;
        }
        .reactionlistelem:last-child::after {
          display: none;
        }
        .reactiondesc {
          margin: 10px 0 0 0;
          height: fit-content;
        }
        .reactionimg {
          aspect-ratio: 1 / 1;
          object-fit: cover;
        }
    </style>
</head>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Table with Div</title>
    <style>
      .table {
          display: grid;
          grid-template-columns: 1fr 1fr;
          /* Two equal columns */
          width: 50%;
          margin: 20px auto;
          border: 1px solid #000;
      }

      .cell {
          border: 1px solid #000;
          padding: 8px;
          text-align: center;
      }

      .header {
        font-weight: bold;
        background-color: #f4f4f4;
      }
  </style>
</head>



<body>
    <div class="container clearfix">
        <div class="text">
            <p>
                As community managers, we can guarantee you that <u>you are not alone</u>, but you just made the <b>BEST</b> decision of your career by coming to us. Our team of experts is here to 
                dedicate their talents to make YOU regain your popularity, without judgement and with full trust, in a record time. May it be from a big controversy or a simple popularity 
                decline, our goal is to <b>develop a data-driven strategy for navigating the aftermath of public disinterest using insights from YouTube’s ecosystem</b>. 
               
            </p>
        </div>
        <div class="image">
            <img src="/assets/img/thumbnail.jpg" alt="AI generated, Dali" style="width:100%;">
        </div>
    </div>
</body>
</html>

**How ?** By drawing on patterns from previous YouTuber experiences, we’ll analyse key metrics—such as your channel type, initial popularity, posting frequency
to offer tailored strategies for re-engagement, so that you can fully focus on the fun and creative aspect of your job! Should you do clickbait ?
Adress your decline in an apology video ? Post more often or change topics slightly ? Our motivation stems from the spread of <b>online backlash</b>, that has visibly impacted
creators on YouTube and other platforms. Eager to offer them unforeseen solutions and break the stigma on subscribers loss, we aim to help you make informed decisions about your next steps to rebuild audience trust.

<div style="border: 2px solid red; padding: 10px; display: inline-block; border-radius: 15px">
  <h3> Research Questions </h3>
  <ol>
    <li> How do we define decline for Youtubers ? How do we define a recovery ?</li>
    <li> Is a Youtube channel category affecting the effective response strategies after a decline?</li>
    <li> What timing and content strategies are best for re-engagement following public backlash? Should you change your posting strategy?</li>
    <li> In the exact case of a ‘bad buzz’, how to define it using Youtuber statistics? Are apology videos really useful?</li>
  </ol>
</div>

## Why should you trust us ?

Why us and not some wanabee adviser on YouTube ? Well, because we based all our work on a scientific, multi-dimensional, and extensive dataset... **YouNiverse**[1]. This dataset, released in 2021 is a precious ingredient in our recipe, because Youtube is such a colossal platform that it is quite discouraging to try and sample it. With data from over 136k channels and 72.9M videos published between May 2005 and October 2019. Cool, right ? Well that's our biggest asset in this quest for recovery. It is a long, tidious process, with the main negative aspect being the fact that he only sampled english-speaking videos... oups. Lots of things to say about this great dataset, if you're eager to know just check the below easter egg :)))

![](/assets/img/fake_youtube.jpg)

## Before any piece of advice, how do we define a decline ?

**You feel like your viewership is going down and your stats are struggling ?** We know how painful that can be when you're trying to be on your A-game and you're putting all of your time and energy into your channel.

<div style="display: flex; align-items: center;">
  <p style="flex: 1; margin-right: 20px;">
    Let's keep it real, there are very few chances you're actively losing subscribers (or maybe you actually did fumble, you can go check out our bad buzz section ;)). If you're not in the middle of a controversy and cancel culture hasn't got the best of you, chances are you are just experiencing a decline. In most cases, your situation will fix by itself. <b>However, if this has been going on for more than a month, maybe you should check out our analytical tool ! </b>
  </p>
  <img src="/assets/img/curve_icon.jpg" alt="Description of image" style="width: 150px;">
</div>

Since Youtube hasn't stopped gaining new users, we have reached the conclusion that very few channels will actively face a decrease in their total subscriber count. However, we can detect decline by noticing in your stats a significant slowdown in the growth rate of your subscribers, which may indicate potential issues such as reduced engagement or a negative reception by the audience. 

<div style="border-left: 4px solid #51247a; padding-left: 20px; font-size: 18px; background-color: #DFC5FE">
  To go further, we compared the actual growth rate of channels against the <b>rolling growth average</b> rate.
</div>

<div style="border-left: 4px solid #51247a; padding-left: 20px; font-size: 18px; margin-top: 2;">
  <details open> 
    <summary style = "font-size: 18px; cursor: pointer;"><b>Rolling average</b></summary>     
        <b> Why ?</b> Because the rolling average acts as a smoothed baseline, calculated using a defined window (we arbitrarily used a 'window' of 20 weeks), which helps to identify deviations from the expected trend. When the growth of your channel falls below the rolling average, it suggests that the channel's performance has dipped relative to its typical trend. 
   </details>
</div>

<div style="width: 100%; max-width: 800px; margin: 0 auto;">
    <iframe 
        src="/assets/data/plot_lancet.html" 
        width="100%" 
        height="600px" 
        style="border: none;">
    </iframe>
</div>

As you can see here, the channel of this mysterious Lance Stewart underwent 2 declines represented by the colored purple zones. Not a good job Lance....

After playing around with parameters, we have decided on the following:

- a **minimum duration of a decline of 8 weeks**: you could be on holidays without it being a decline !
- if the decline was 'intense', meaning that there was a 80% growth difference between growth index of your channel and the rolling average, we consider that the channel underwent a **massive backlash**, and may it be shorter or longer than 2 months, it should be counted as a decline (and a big one, what did you do ?)

After doing so, a little update on what our database is: we had 74788 channels that had declines, with more than 121998 episodes... see ? You're really not alone ! And more than enough to pursue our study ! 

<body>
  <div class="table">
    <!-- Header Row -->
    <div class="cell header">Stats</div>
    <div class="cell header">Length of decline (weeks)</div>
    <!-- Row 1 -->
    <div class="cell">Median</div>
    <div class="cell">17.4</div>
    <!-- Row 2 -->
    <div class="cell">Average</div>
    <div class="cell">16</div>
    <!-- Row 3 -->
    <div class="cell">Maximum</div>
    <div class="cell">104</div>
    </div>
</body>

From our data, if your experiencing a decline, you might just be in it for more than 3 months... and maybe even forever ! Let's get those number down for you...

To make you visualise a bit more, here is a little glimpse at the biggest Youtubers' declines, so you can see how well our detection works (with a little drama too...)! 

<div class="flourish-embed flourish-cards" data-src="visualisation/20775803"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/20775803/thumbnail" width="100%" alt="cards visualization" /></noscript></div>


Okay, okay, we might just be rubbing salt into the wound right now with loss and declines, let's talk about more positive things... the recovery ! 

So what do we considered being an **efficient recovery** ? Since we do not want you to fall into the unknown for too long, but we still consider normal that a recovery is not happening in a flash, we consider that your recovery was successful if it happened <b>in the span of 16 weeks, or 4 months</b>. Yes, that's the median, and that may seem not very ambitious BUT Youtube is not a forgiving space, and we would consider ourselves happy if you do better than half of the population. 

More than 16 weeks and our model will sadly announce that you have one foot in the grave, and that Youtuber might not be a durable hobbie for you... sad, but your mom told you so years ago!
Here, using our tools, our goal is to put you out of the woods before this deadline and if declines didn't end in 4 months, our program will consider that your recovery has failed...

## What are the factors available to analyse your decline  ? 

<div class="flourish-embed flourish-election" data-src="visualisation/20802367"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/20802367/thumbnail" width="100%" alt="election visualization" /></noscript></div>

Okay, here is the state-of-the-art with some stats about recovery, not good right ? We can't hide the evidences: **by our standards, the majority fails to recover**. No time for thumbnail fine-tuning and title brainstorming here. As the stakes are high and time is running out, we have decided to focus on the most important metrics that can help you recover from a decline, let's explore them ! 

So what could be the first metric is actually very naive but still shows some results: it's the **category**. You might have thought this was an insignificant parameter when you opened your channel years ago (shout out to the 12 years old you), and even if your content doesn't fit with the category name today... well the latter might still play a role.

<div class="flourish-embed flourish-chart" data-src="visualisation/20801957"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/20801957/thumbnail" width="100%" alt="chart visualization" /></noscript></div>

<div style="display: flex; align-items: center;">
  <p style="flex: 1; margin-right: 20px;">
    <b>Best categories to have a decline in ? </b> Little podium: News & Politics (the 24/24 activity might be in your favor here), Gaming and Travels and Events... 
    <br>
    On the other side, <b>the big losers</b> are music -where controversial music is probably quite unforgivable- and Pets and Animals. 

  </p>
  <img src="/assets/img/podium.png" alt="Description of image" style="width: 150px;">
</div>

Interesting metric, but don't start sweating just yet, we're just getting started... 

So what about **views and subscribers** ? Is being a renowned Youtuber providing you with more chances to recover efficiently ? Well... not really quite the opposite. Yet again, trends are not too scarred, but even though we see the usual 60-40 proportions appearing, we also see that small channels (under x subscribers) seem to recover better than your usual golden trophee youtubers ? 

![](/assets/img/Subs&views_plot.png)

<div style="display: flex; align-items: center;">
  <p style="flex: 1; margin-right: 20px;">
    About <b>activities</b> (whether you post once a day, once a week, every now and then), this metric doesn't display any noticeable trend, and we can't really conclude that the try harder has more chances of getting out of the woods than the chill guy.
  </p>
  <img src="/assets/img/activity_plot.png" alt="Description of image" style="width: 400px;">
</div>

<div style="display: flex; align-items: center; flex-direction: row;">
  <img src="/assets/img/duration_plot.png" alt="Description of image" style="width: 400px; margin-right: 20px;">
  <p style="flex: 1;">
    Finally, about the <b>length of your videos</b>, we obtain some unforeseen results. Channels that were producing on average 'short' videos (below 10min) before their decline seem to have less chance of recovery. Again, small difference, but the lazy you that might do junk posting of quick efficient videos might not be winning here !  
  </p>
</div>

Okay, we've used the holy quatuor: **categories, fame, activity of your channel and duration of video** to see if they provided us info on your channel chances to regain it's previous flourishment. Let's now get into how YOU can impact the health of your channel, meaning how YOU can react. We will start by citing all the different strategies we have observed (yes the same strategies you have probably been wracking your brain with), before putting our lab coat and taking our calculator to see if those methods are truly useful. 

## What are the possible strategies observed when facing a decline ? 

Taking advantage of all the data that we have at hand, our research team identified the key metrics that measure creator's reactions in times of
crisis, and will now walk you through them. Take notes !

### Upload frequency

You might have thought that getting **more active on the platform** would make you regain your audience or at least will make you gain a new public, because the Youtube algorithm would put you forward. Without entering into the specifics of this dark and unknown algorithm... NO, not really how that works :) 

Maybe you've considered **taking a break**, make them wait a little and be more desirable (we see you mister pick-me) before making a big come back, maybe ? 

Or you are just a chill guy, you also want your audience to just be chill guys and be alike you, and you didn't want to force yourself to post or take an unwanted break... so you just **kept uploading at the same rythm**. 

**Thus, we have 3 separate groups:**

<div class='reactionlist'>
  <div class='reactionlistelem'>
    <img src="/assets/img/PostLessBD.png" class="reactionimg" alt="Someone leaving on a plane" style="width: 100%;">
    <p class="reactiondesc">Some creators step back from the platform by posting less</p>
  </div>
  <div class='reactionlistelem'>
    <img src="/assets/img/PostNormalBD.png" class="reactionimg" alt="Someone working but not too hard"
    style="width: 100%;">
    <p class="reactiondesc">Most of them keep uploading the same amount of content</p>
  </div>
  <div class='reactionlistelem'>
    <img src="/assets/img/PostMoreBD.png" class="reactionimg" alt="Someone working hard" style="width: 100%;">
    <p class="reactiondesc">Others get it together and start spamming videos</p>
  </div>
</div>

### Video duration

<div style="display: flex; align-items: center; flex-direction: row;">
  <img src="/assets/img/pic_durationvid.png" alt="Description of image" style="width: 150px; margin-right: 20px;">
  <p style="flex: 1;">
    Keeping up with durations, here we are focusing on the length of videos. More in the Shorts mindsets or into the long documentary styles videos. Or maybe you like your comedy sketch around the 5min, or maybe it's the cash coming with the monetization and the <a href="https://www.reddit.com/r/PartneredYoutube/comments/4v6bmy/why_so_many_youtubers_are_making_their_videos/" target="_blank">multiple ads in over 10min videos</a> (yes, we see you Uncle Scroodge!). 
  </p>
</div>

### Content category

A third and more daring reaction is to experiment and go out of your comfort zone, by trying new things (new topics, new styles...) and changing their Youtube identity. Maybe you're starting to think that Fortnite might be a tiny bit too restrictive ! 

<div style="display: flex; align-items: center;">
  <p style="flex: 1; margin-right: 20px;">
    <b>So how did we measure that ?</b> Well we could have used titles and description but this would have required a massive computation strength... and our computer just couldn't handle it. <b>But we did better !</b> We used an awesome feature given by Youtube... <b>TAGS</b>. Those help direct to your channel people that have similar interest and would watch videos with the same topic. Tags are fully customizable so can be as precise as 'Daily vlogs of an esthetician in Utah' and as vague as 'Gaming'. 
  </p>
  <img src="/assets/img/tags.png" alt="Description of image" style="width: 150px;">
</div>

Getting this data allows us determine whether the reactions include changing the topics of interest, and we will use these statistics to find the best strategy. Burning question: **How to determine topics based on tags?**

<div style="border-left: 4px solid #51247a; padding-left: 20px; font-size: 18px; background-color: #DFC5FE">
  Using <b>Latent Dirichlet Allocation</b> (a natural language processing technique), we are able to extract the main topic of a channel based on the tags <b>before</b> and <b>during</b> crises. The results obtained give us the words that have been put into the same category, but to obtain an overall topic name, we passed the lists through the LLM <b>Ollama</b>. We use 20 different categories to remain broad and not be too sensitive to small content changes.
</div>

<div style="border-left: 4px solid #51247a; padding-left: 20px; font-size: 18px; margin-top: 0;">
  <details open> 
    <summary style = "font-size: 18px; cursor: pointer;"><b>Latent Dirichlet Allocation</b></summary>     
      <b>Unsupervised classification of documents</b>, similar to clustering on numeric data, which finds some natural groups of items (topics). The aim of LDA is to find topics a document (seen as a 'bag of words') belongs to, based on the words in it. Each topic is characterized by a list of words (the tokens with the greatest probabilities of appearing in the document). The LDA can be used to reduce the complexity of text data by representing documents in terms of a small number of topics instead of all individual words.

   </details>
</div>

<div style="border-left: 4px solid #51247a; padding-left: 20px; font-size: 18px; margin-top: 2;">
  <details open> 
    <summary style = "font-size: 18px; cursor: pointer;"><b>Ollama</b></summary>     
      <b>Type of large language model (LLM)</b>, locally loaded into a computer, we here used the model Mistral but we will explain more about it later, in the bad buzz section.
   </details>
</div>

After using the Latent Dirichlet Allocation, we obtained the following **20 categories** named by the LLM:

<div class="flourish-embed flourish-hierarchy" data-src="visualisation/20798533"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/20798533/thumbnail" width="100%" alt="hierarchy visualization" /></noscript></div>

A little bit of explanation: each topic contains a set of **15 words and their probabilities of appearing within that topic**. The selection of 20 topics offers a balance betweeen coherence and interpretability, ensuring that each topic is distinct yet not too niche to be irrelevant. With these parameters, we obtained a **coherence score of 58%**, that could be improved if we decided to create more topics (the best coherence score we obtained was 65% with 55 topics), but we decided to stick to 20 topics for our analysis, to take the trade-off between granularity and interpretability into account.

The 20-topic model captures a **broad spectrum of interests**, ranging from Politics to Fortnite Gameplay. While some of the topics seem to capture content categories very well, like the topic "Movie Reviews" that contains words like "movie", "review", "trailer" and "film" and that revolves around content creators who analyze or review films, there is also some overlap between different topics, for example in the topic "Art and Spirituality" that also contains the words "golf" and "f1" and therefore may also touch on certain hobbies or sports.  However, these 20 topics are distinct enough to provide meaningful classifications that will support an analysis of the topic transitions and their correlation with recovery.

<div style="border-left: 4px solid #3BB143; padding-left: 20px; font-size: 18px; margin-top: 0;">
  <details> 
    <summary style = "font-size: 18px; cursor: pointer;"><b>For ADA specialists</b> </summary>     
   </details>
</div>

<div style="display: flex; align-items: center;">
  <p style="flex: 1; margin-right: 20px;">
    Using this natural processing language, we are able to determine whether the reactions to decline include <b>changing topics of interest</b>. Before entering into the maths of it, just have fun looking at all the topic transition and we will use these statistics to find the best strategy and YES the transition between Pokemon and Politics does exists!

  </p>
  <img src="/assets/img/pokemon.png" alt="Description of image" style="width: 150px;">
</div>

<div class="flourish-embed flourish-chord" data-src="visualisation/20782429"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/20782429/thumbnail" width="100%" alt="chord visualization" /></noscript></div>


As you can see, everything is possible when it comes to changing the topic of your videos! However, since some changes occur more frequently than others, we don't have enough data to give you meaningful analysis of every transition (sorry for those who wanted to go from News to League of Legends :)). We will thus focus on the **most common topic transitions**, with more than 30 occurences in our database:

<div class="flourish-embed flourish-chord" data-src="visualisation/20781676"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/20781676/thumbnail" width="100%" alt="chord visualization" /></noscript></div>

## All of those factors... but which one matters ! 

We have so far just listed the possible reactions, an easy task... but which one do work ? We are going to experiment with a couple of methods to find out about it: Pearson's correlation, logistic regression, t-tests and others...

<div style="border-left: 4px solid #51247a; padding-left: 20px; font-size: 18px; background-color: #DFC5FE">
  Let's start by figuring out if some have some linear relationship. To do so, we are going to perform <b>Pearson's correlation</b> between every pair of reaction, and visualize them performing a correlation matrix.
</div>

<div style="border-left: 4px solid #51247a; padding-left: 20px; font-size: 18px; margin-top: 0;">
  <details open> 
    <summary style = "font-size: 18px; cursor: pointer;"><b>Pearson's correlation</b></summary>     
      Measurement of both the strength and direction of a linear relationship between two continuous variables. It ranges from  \(-1\( showing perfect negative correlation and \(1\( for perfect positive correlation. When using Pearson's correlation, it is assumed that the relationship between the two variables is linear, that their distribution is normal and that the variance is homogeneous across all levels of the independent variable.
   </details>
</div>

<br>

<div class="flourish-embed flourish-heatmap" data-src="visualisation/20877783"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/20877783/thumbnail" width="70%" alt="heatmap visualization" /></noscript></div>

TODO: analyse correlation


<div style="border-left: 4px solid #51247a; padding-left: 20px; font-size: 18px; background-color: #DFC5FE">
  First of all, here are the results of a <b>Logistic regression</b> of recovery on the reactions. Basically, this means that we make use of all the data we have to compute the average impact of each reaction on the recovery. Before performing it, we standardize our attributes to put them  all on the same scale, and be able to compare coefficients better. 
</div>

<div style="border-left: 4px solid #51247a; padding-left: 20px; font-size: 18px; margin-top: 0;">
  <details open> 
    <summary style = "font-size: 18px; cursor: pointer;"><b>Logistic Regression</b></summary>     
    Supervised learning Machine Learning model where the latter log odds as a linear function of X.
   </details>
</div>

<img src="/assets/img/logit_coefficients.png" alt="Logistic regression summary showing coefficients and p-values" style="width: 60%; margin: auto; display: block;">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>4-Column Table</title>
  <style>
    table {
      width: 80%;
      margin: auto;
      border-collapse: collapse;
      text-align: center;
      font-family: Arial, sans-serif;
    }

    th, td {
      border: 1px solid black;
      padding: 10px;
    }

    th {
      background-color: #f2f2f2;
      font-weight: bold;
    }

    tr:nth-child(even) {
      background-color: #f9f9f9;
    }

    tr:hover {
      background-color: #f1f1f1;
    }
  </style>
</head>
<body>
  <table>
    <tr>
      <th>Variable</th>
      <th>Coefficient</th>
      <th>p-value</th>
      <th>Significant (p&lt;0.05)</th>
    </tr>
    <tr>
      <td>const</td>
      <td>-0.3</td>
      <td>0.00</td>
      <td>True</td>
    </tr>
    <tr>
      <td>Posted_longer_videos</td>
      <td>4e-4</td>
      <td>0.97</td>
      <td>False</td>
    </tr>
    <tr>
      <td>Posted_shorter_videos</td>
      <td>2.3e-2</td>
      <td>0.08</td>
      <td>False</td>
    </tr>
    <tr>
      <td>Posted_more</td>
      <td>0.06</td>
      <td>4.05e-6</td>
      <td>True</td>
    </tr>
    <tr>
      <td>Posted_less</td>
      <td>-0.3</td>
      <td>0</td>
      <td>True</td>
    </tr>
    <tr>
      <td>Topic_change</td>
      <td>-0.02</td>
      <td>0.08</td>
      <td>False</td>
    </tr>
  </table>
</body>

All put together, here is the **formula** for the logistic regression produces on standardized predictor variables: 

<div style="border: 2px solid red; padding: 10px; display: inline-block;">
  <ol>
      $Recovery = -0.3 + 4\times 10^{-04} \times D_\text{Posted longer videos} + 2.3 \times 10^{-02} \times D_\text{Posted shorter videos + 0.06 \times D_\text{Posted more}$  
      $ - 0.3 \times D_\text{Posted less} - 0.02 \times D_\text{Topic change}$  
  </ol>
</div>  

Where \\( D_{\text{group}} \\) represents a dummy variable that is \\(1\\) if the decline belongs to the \\( group \\) and \\(0\\) otherwise.

<!-- LaTeX equation corresponding to the image :
\begin{equation}
-0.1867 + 4.398 \times 10^{-08} \times \text{Subs}{s} + 0.0009 \times \text{Activity}{s} - 8.471 \times 10^{-11} \times \text{Views}{s} + \\ 0.0027 \times D\text{Posted longer videos} + 0.0844 \times D_\text{Posted shorter videos} + 0.1481 \times D_\text{Posted more} - 0.6959 \times D_\text{Posted less} - 0.0471 \times D_\text{Topic change}
\end{equation}
--->

**This regression allows us to find how the predictor variables (as stated in the table) influence your recovery.** The bigger in absolute size, the more the variable weight in on your recovery. Here, posting less videos, posted more videos and posted shorter videos hold the most importance. **But don't get ahead of yourself yet !** That's where the p-value comes into play... 



<div style="border-left: 4px solid #51247a; padding-left: 20px; font-size: 18px; margin-top: 0;">
  <details open> 
    <summary style = "font-size: 18px; cursor: pointer;"><b>p-value</b> </summary>     
      The <b>p-value</b> is a number that tells you how likely it is that the results you see in your data happened only by chance. We will take the threshold of 0.05.
      <ul>
        <li><b> A small p-value (less than 0.05)</b> signifies that it is unlikely that results are random, so there is probably a real effect and it is not up to chance</li>
        <li><b>A large p-value (more than 0.05)</b> on the other hand means that the results could easily be due to chance, so there might not be a real effect.</li>
      </ul>
   </details>
</div>

Here, only the variable representing posting more and posting less were significant ! However in different direction... **Posting more has a positive coefficient so it influences positively your recovery**, whereas posting less influences it even more, but not on the side you would desire... 

<div style="border-left: 4px solid #3BB143; padding-left: 20px; font-size: 18px; margin-top: 0;">
  <details> 
    <summary style = "font-size: 18px; cursor: pointer;"><b>For ADA specialists</b> </summary>     
      Here is our table of result from the regression. We are very much aware of the extremely low value of the R-squared, and the overall low significance of coefficients. The database has all and every possible values and we tried to find some sort of 'trend', we base ourselves on lowly significant values, but needed to pursue a correct data story.
      <img src="/assets/img/regression_results.png" alt="Description of image">
   </details>
</div>

While analysing and drawing immediate conclusions from this simple regression would be quite naive, it highlights an essential fact : **Each reaction influences the recovery in a unique way.** That is why caution is needed when handling your popularity crisis: One wrong move, and it's **done** ! (You sense then gravity ?)

<div style="border-left: 4px solid #51247a; padding-left: 20px; font-size: 18px; background-color: #DFC5FE">
  As the next step, and in order to get some unbiased results and make the proportion of recoveries meaningful, we chose to perform <b>propensity score matching</b> on our decline dataset. This will balance the dataset regarding the variable whose effect we want to observe, enabling us (and you !) to draw more accurate conclusions.
</div>


<div style="border-left: 4px solid #51247a; padding-left: 20px; font-size: 18px; margin-top: 0;">
  <details open> 
    <summary style = "font-size: 18px; cursor: pointer;"><b>Propensity score matching</b> </summary>     
      <b>Propensity score matching</b> is a statistical technique used to estimate the effect of a treatment by accounting for the features that predict receiving the treatment. It is used to reduce selection bias by balancing the features between treated and untreated subjects, taking into account the various confounding variables. 
   </details>
</div>

This gives us the following results :

<div class="flourish-embed flourish-chart" data-src="visualisation/20782011"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/20782011/thumbnail" width="100%" alt="chart visualization" /></noscript></div>

Finally, some long awaited results ! The balanced data suggests that whilst increasing upload frequency has a relatively great effect on recovery, whereas changing video duration does not seem to play such an important role, same with topic change.
TODO: More text

<div style="border-left: 4px solid #51247a; padding-left: 20px; font-size: 18px; background-color: #DFC5FE">
  In order to see if these strategies led to statistically significant differences in recovery rates, we performed a <b>t-test analysis</b> with a significance level of 0.05.
</div>

<div style="border-left: 4px solid #51247a; padding-left: 20px; font-size: 18px; margin-top: 0;">
  <details open> 
    <summary style = "font-size: 18px; cursor: pointer;"><b>t-test analysis</b></summary>     
    A t-test is used to determine whether a difference between two groups is likely due to random chance or if it reflects a statistically significant difference in the populations. A t-test calculates a statistic called the <b>t-value</b>, which measures how much the two means differ, relative to the variability in the data. 
    $$ t = \frac{\bar{X_1} - \bar{X_2}}{\sqrt{\frac{s_1^2}{n_1} + \frac{s_2^2}{n_2}}} $$
    Then, the probability of obtaining a result at least as extreme as the one observed (p-value) is computed and compared to a chosen significance level. In this whole project, we always used a significance level of 0.05 and discarded the null hypothesis, stating that there is no difference in recovery rates between the two group, whenever the p-value is less than this significance level.
   </details>
</div>

The results are as follows:

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Treatment Table</title>
  <style>
    table {
      width: 80%;
      margin: auto;
      border-collapse: collapse;
      text-align: center;
      font-family: Arial, sans-serif;
    }

    th, td {
      border: 1px solid black;
      padding: 10px;
    }

    th {
      background-color: #f2f2f2;
      font-weight: bold;
    }

    tr:nth-child(even) {
      background-color: #f9f9f9;
    }

    tr:hover {
      background-color: #f1f1f1;
    }
  </style>
</head>
<body>
  <table>
    <tr>
      <th>Treatment</th>
      <th>t-statistic</th>
      <th>p-value</th>
      <th>Significant (p&lt;0.05)</th>
    </tr>
    <tr>
      <td>Posted more</td>
      <td>10.69</td>
      <td>1.43e-26</td>
      <td>True</td>
    </tr>
    <tr>
      <td>Posted less</td>
      <td>-19.94</td>
      <td>4.57e-87</td>
      <td>True</td>
    </tr>
    <tr>
      <td>Posted longer videos</td>
      <td>-0.15</td>
      <td>0.88</td>
      <td>False</td>
    </tr>
    <tr>
      <td>Posted shorter videos</td>
      <td>1.69</td>
      <td>0.09</td>
      <td>False</td>
    </tr>
    <tr>
      <td>Topic change</td>
      <td>0.034</td>
      <td>0.97</td>
      <td>False</td>
    </tr>
  </table>
</body>

The t-test results reveal that only the two strategies concerning the **video upload frequency** show statistically significant differences in recovery rated, which is an accordance with the regression results. An increase in video frequency shows a higher mean recovery rate for those who adopted the strategy compared to those who did not. Conversely, posting less videos is associated with a lower mean recovery rate.

This being a very generic results, we will dive deeper into all of those subjects to make you maximise your chances with personnalized advices, since further analysis leads us to insteresting results that are worth detailing ! **Onto the solutions now !**

### Posting frequency

Good news! Our detailed analysis reveals that increasing your upload frequency is more effective than reducing it. **So what does it mean to increase upload frequency ?**

<!-- 
After identifying the most influential features affecting the recovery of YouTube creators, let’s dig a bit deeper into their implications to extract actionable insights. Let’s focus on the most impactful feature and explore it comprehensively.
Should You Increase or Decrease Uploading Frequency During a Decline?
A key question for creators facing a decline is:
“As a YouTuber, should I upload more content or less? And if I need to adjust my frequency, how should I do it?”
 --->

<div style="border: 2px solid red; padding: 10px; display: inline-block; border-radius: 15px">
  <b>Let's get you onto a little recipe, shall we ?</b>
  <ol>
      <li> Start by determining your upload frequency by computing your average uploads per week or per month </li>
      <li> ⁠Adjust your frequency using our little guide to align your upload schedule with recovery trends. </li>
  </ol>
</div>  

<div class="flourish-embed flourish-quiz" data-src="visualisation/20839812"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/20839812/thumbnail" width="100%" alt="quiz visualization" /></noscript></div>

This quizz is based on the following graph:

<div class="flourish-embed flourish-chart" data-src="visualisation/20874403">
  <script src="https://public.flourish.studio/resources/embed.js"></script>
  <noscript>
    <img src="https://public.flourish.studio/visualisation/20874403/thumbnail" width="100%" alt="chart visualization" />
  </noscript>
</div>
<!-- TODO: changer les valeurs après que nath ait rerun le matching -->
We can see that the lowest recovery rate corresponds to the channels posting less than 0.5 times per week and then increases with the frequency until reaching a peak at a moderate frequency of <b>3-4 times per week</b>. This upload frequency beats all records with a recovery rate of 65.1%. Maintaining a consistent publication schedule is beneficial for keeping your audience engaged and improving your chances of recovering from your decline, but be careful not to overwhelm your audience or compromise content quality! Posting too often (more than 4-5 times per week) might lead to diminishing returns, as seen in the dip in recovery rates beyond 4 videos per week.

TODO: add icon 

### Video duration

Now, about video duration ! Are you feeling more Spielberg or TikTok star ? While our regression analysis suggests that duration has a limited impact on recovery, we decided to investigate further, looking for hidden patterns.

<div style="display: flex; align-items: center; flex-direction: row;">
  <div class="flourish-embed flourish-chart" data-src="visualisation/20874600">
  <script src="https://public.flourish.studio/resources/embed.js"></script>
  <noscript>
    <img src="https://public.flourish.studio/visualisation/20874600/thumbnail" width="100%" alt="chart visualization" />
  </noscript>
  </div>
  <p style="flex: 1;">
    In conclusion, our team of experts is confident in saying that you do not need to adjust their average length significantly. However, creators producing videos that last between <b>15 to 20 minutes show a slightly higher probability of recovery</b>. This duration may resonate better with your audience, not too long (sorry but you might bore people) whilst still providing interesting content ! <b> While this insight is subtle, it can guide creators aiming to maximize their recovery potential.</b>

  </p>
</div>

In this analysis of video durations and frequencies, we used Propensity Score Matching to ensure fair comparisons between the different strategies. Since Youtubers differ in many ways (channel size, category, publication schedule, ...) and we don't want to compare channels with vastly different characteristics, we used PSM to match the channels of each duration or frequency bin with similar channels in the remaining database and ensure that any observed differences in recovery rates are more likely due to upload frequency or mean video duration than other confounding factors.

As a side note, since the data from the YouNiverse stopped being sampled in 2019, we do not have any data on new updates Youtube introduce... and this include the great invention of the **Youtube Shorts**. This Tiktok wanabee might be a key for your Youtube rising fame if you're into short and dynamic videos ! Just fyi...

TODO: add icon

### A deep dive into topic transitions

<div style="display: flex; align-items: center; flex-direction: row;">
  <img src="/assets/img/crossroads.png" alt="Description of image" style="width: 150px; margin-right: 20px;">
  <p style="flex: 1;">
      Back into the more fun stuff ! <b>Do we recommend you to change subjects ?</b> Of course, we are here talking to the desesperate that do not mind doing a 180°, promise we do not judge (a little), we're just being a guide in the process. 
      Evaluating the impact of subject changes should not be done as a whole: the categories and possible transitions are too numerous to be aggregated into one variable. To go into greater detail, we analyze the consequences by direction: going from <b>Politics</b> to <b>Lifestyle</b> videos should be distinguished from changing from <b>Movie reviews</b> to <b>League of Legends</b> content. 
  </p>
</div>

<iframe src="/assets/data/topic_change_bar_chart.html" width="100%" height="600" frameborder="0"></iframe>

On average, channels that change their video topics experience a slight increase in recovery rates compared to those that do not.
<!--  t-test ? something to prove it --> 
While this is encouraging, we have to emphasize that **this approach can have mixed results**, and the impact on your recovery rate will depend heavily on the types of topics you choose to pivot to. **It is not about if you change or not, it is from where and to where you change !**
Let's investigate using a interactive Sankey diagram showing topic transitions and their recovery rates, colored by recovery rate (cooler colors represent higher recovery rates)

<div style="display: flex; justify-content: space-around; align-items: center; flex-wrap: wrap;">

  <!-- Sankey Plot -->
  <div id="sankey-plot" style="flex: 5; min-width: 400px; max-width: 100%;">
    <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
    <script type="text/javascript">
      // Function to map normalized recovery rate to color (coolwarm)
      function rate_to_color(rate) {
        const cmap = ['#3b4cc0', '#4a63d3', '#5a78e4', '#6c8ff1', '#7ea1fa', '#92b4fe',  '#a3c2fe', '#b6cefa', '#c6d6f1', '#d6dce4', '#e3d9d3', '#efcfbf',  '#f5c2aa', '#f7b194', '#f59f80', '#ef886b', '#e57058', '#d75445',  '#c73635', '#b40426'];  // Cool to Warm colors
        const normalized = Math.min(Math.max(rate, 0), 1);
        const idx = Math.floor(normalized * (cmap.length - 1));
        return cmap[idx];
      }


      // Load the JSON file dynamically
      fetch("/assets/data/topic_transitions_sankey.json")
        .then(response => response.json())
        .then(data => {
          // Normalize recovery rates and invert them for color mapping
          let min_rate = Math.min(...data.map(d => d.recovery_rate));
          let max_rate = Math.max(...data.map(d => d.recovery_rate));
          
          // Normalize and invert recovery rates
          data.forEach(d => {
            d.normalized_rate = (d.recovery_rate - min_rate) / (max_rate - min_rate);
            d.inverted_rate = 1 - d.normalized_rate; // Inverted for cool-to-warm effect
            d.link_color = rate_to_color(d.inverted_rate); // Color based on inverted rate
          });

          // Generate nodes and labels, ensuring they are distinct
          let nodes_before = [...new Set(data.map(d => d.Topic_before))];
          let nodes_after = [...new Set(data.map(d => d.Topic_after))];
          
          // Create distinct labels for "Before" and "After"
          let nodes = nodes_before.map(node => node + " (Before)").concat(nodes_after.map(node => node + " (After)"));

          let node_indices = {};
          nodes.forEach((node, idx) => node_indices[node] = idx);

          // Prepare Sankey diagram data
          let sources = data.map(d => node_indices[d.Topic_before + " (Before)"]);
          let targets = data.map(d => node_indices[d.Topic_after + " (After)"]);
          let values = data.map(d => d.count);
          let link_colors = data.map(d => d.link_color);
          let hover_texts = data.map(d => {
            return `Transition: ${d.Topic_before} → ${d.Topic_after}<br>Recovery Rate: ${d.recovery_rate.toFixed(2)}%<br>Count: ${d.count}`;
          });

          // Set x positions manually for "Before" and "After" nodes
          let x_positions = [];
          x_positions = x_positions.concat(new Array(nodes_before.length).fill(0));  // Before nodes at x=0
          x_positions = x_positions.concat(new Array(nodes_after.length).fill(1));   // After nodes at x=1

          // Create the Sankey diagram with Plotly
          let sankey_data = [{
            type: "sankey",
            node: {
              pad: 15,
              thickness: 10,
              line: { color: "black", width: 0.5 },
              label: nodes,
              color: "#004AAD",
              x: x_positions,  // Use x_positions array for manual positioning
            },
            link: {
              source: sources,
              target: targets,
              value: values,
              color: link_colors,
              customdata: hover_texts,
              hovertemplate: '%{customdata}<extra></extra>'
            }
          }];

          // Create the Plotly layout for the Sankey diagram
          let layout = {
            hovermode: "closest",  // Closest hover behavior
            title: "Topic Transitions and Recovery Rates",
            font_size: 12,
            height: 800,
            xaxis: { showgrid: false, zeroline: false }, // Hide grid and zero line for clarity
            yaxis: { showgrid: false, zeroline: false }, // Hide grid and zero line for clarity
          };

          let plotDiv = document.getElementById("sankey-plot");

          // Render the initial Sankey diagram
          Plotly.newPlot(plotDiv, sankey_data, layout);

          // Add hover effect
          plotDiv.on('plotly_hover', function(data) {
            if (data.points[0].source || data.points[0].target) {
              // Hovering over a flow
              let hoveredFlow = data.points[0].pointNumber;
              let currentLinkColors = link_colors.map((color, index) => {
                return (index === hoveredFlow) ? color : 'rgba(200,200,200,0.2)';
              });
              Plotly.restyle(plotDiv, {'link.color': [currentLinkColors]});
            } else {
              // Hovering over a node
              let hoveredNode = data.points[0].pointNumber;
              let currentLinkColors = link_colors.map((color, index) => {
                // Highlight outgoing flows for "before" nodes, incoming flows for "after" nodes
                return (sources[index] === hoveredNode || targets[index] === hoveredNode) ? color : 'rgba(200,200,200,0.2)';
              });
              Plotly.restyle(plotDiv, {'link.color': [currentLinkColors]});
            }
          });

          // Reset colors on hover out
          plotDiv.on('plotly_unhover', function() {
            Plotly.restyle(plotDiv, {'link.color': [link_colors]});
          });

          // // Render the plot
          // Plotly.newPlot("sankey-plot", sankey_data, layout);
        })
        .catch(error => console.error('Error loading the JSON data:', error));
    </script>
  </div>

  <!-- PNG Image -->
  <div style="flex: 1; min-width: 15px; max-width: 10%; text-align: center;">
    <img src="/assets/img/legend_sankey.png" alt="Legend for Sankey Plot" style="width: 100%; height: auto;" />
  </div>

</div>

<p>Looking to see which topic transitions work in your niche is quite a hassle. For instance, channels focused on movie reviews often see positive changes in recovery when they switch topics, though transitioning to topics like politics could negatively impact your recovery. On the other hand, gameplay channels should be careful when changing topics, as only a shift to Fortnite-related content seems to maintain or increase engagement. <b>It's all on a very thin line!</b> </p>
If you’re considering making a shift, we recommend focusing on topics that have historically shown positive outcomes, such as **beauty and lifestyle or gaming-related content**, while being cautious about venturing into politics or kids videos, where the change could backfire. Remember that your choice should be guided by your category of origin!


<!-- need tp talk about all of this ?
### How to upload when people want it the most

An important point to consider is the current frequency of your uploads.

While it may seem like a good idea to post more content to become relevant again based on what we presented until now, our data suggests that this strategy may not always be effective as posting **more** does not mean posting **more than average**.

![Videos per week before the start of the decline](/assets/img/vids_per_week_before.png)

![Videos per week after the start of the decline](/assets/img/vids_per_week_after.png)

TODO make a plot where you click to choose what to see :

- before/during


### Key findings

In short, TODO

TODO QUIZ

-->

<div style="border: 2px solid red; padding: 10px; display: inline-block; border-radius: 15px"><p>
  <h2>Suffering from a bad buzz ? Here is where it's at... </h2>

  Let’s face it — you wouldn’t still be reading this unless you’d royally messed up, would you? You’ve stepped on the internet landmine, and now your channel is caught in the crosshairs of a… <b>BAD BUZZ </b> 😱. <br/>

  If you’ve scrolled through the previous sections and still can’t find a fix, it’s because your situation requires more than the usual “post more consistently” or “engage with your audience” advice. But fear not! While the internet’s collective fury can feel like a raging storm, we’ve armed ourselves with data analysis and research to help you turn this ship around. <br />

  <h3>The Challenges of a Big YouTuber in a Crisis </h3>

  Our analysis of big YouTubers (think >1M subscribers — we feel flattered that you're here) has revealed some fascinating trends. Whether it’s a Twitter faux pas, a controversial statement, or a scandal you never saw coming, the strategies for clawing back your reputation vary dramatically depending on the moves you make right now.(Insert dramatic pause for effect. You’re feeling the pressure, aren’t you?) <br />

  But hey, before you run off to film a tearful apology, let’s talk about why some YouTubers manage to recover from their digital nightmares while others end up in the dreaded “where are they now?” category. Spoiler: it’s not all about talent or luck. <br />

  <h3>The Secret Sauce? Your Titles </h3>

  Yes, you read that right. <b>Titles</b>. Those few dozen characters can either save your channel or sink it further. Think about it: what’s the first thing a viewer sees before they even decide to click? Your title! And if you’ve learned anything from this wild ride of YouTube, it’s that first impressions are everything. <br />

  Now, here’s where the science kicks in. You’ve probably heard of <b>LLMs (Large Language Models)</b>, right? They’re super-smart AI tools that can analyse and recognise patterns in text faster than you can say, “Oops, I tweeted what?!” <br />

  We used this tech wizardry to dive into the aftermath of bad buzz for dozens of big YouTubers. By leveraging the OLLAMA open source project [TODO: ref] , we analysed the types of videos uploaded immediately following their PR disasters. What did we look for? Patterns. Specifically, whether these videos fell into one (or more) of these categories:

  <ul>
    <li><b>Apology videos:</b> The classic “I’m sorry” trope—effective or overdone? </li>
    <li><b>Addressing the decline:</b> Are you facing the issue head-on or pretending nothing’s wrong?</li>
    <li><b>Comeback announcements:</b> Bold, confident, and ready to win back hearts.</li>
    <li><b>Break announcements:</b> Sometimes, stepping back is stepping forward.</li>
    <li><b>Collaboration videos:</b> Is strength in numbers the way to go? </li>
    <li><b>Clickbait videos:</b> Risky, but can it work in your favor? </li>
  </ul>

  And guess what? Our findings are as wild as the comment section on your latest video !

  <h3> The Plan </h3>

  We’re not going to leave you hanging with just data and no solutions. Let’s reclaim that subscribe button together.

  </p>
</div>

## Let's wrap it up: Conclusion


## Ethical consideration

Data analysis includes many biases that would impact ethical aspects, and we tried our best to make ours an exception. The initial sampling performed and obtained through the dataset does not display any clear bias since gender, age and ethnicities etc... aren't available, making it as inclusive as possible. However, due to the 'english-speaking' initial criteria, we remove myriads of country of origin which can include geographical bias. 

No individual consent was needed since all info displayed has been and is made public on the Youtube platform. The only point of concern would be the Youtube channel that have been deleted since we still have their gathered data, but since they have been made public at some time period, it still seems acceptable to use them (especially since we mainly use only the ID from the channel more than the usernames). 

The data required by our questionnaire is not saved and is only present locally on the viewer machine.

Our project is a fun whilst being serious study, contributing as positively as possible to society.

## References

@inproceedings{ribeiro2021youniverse,
      title={YouNiverse: Large-Scale Channel and Video Metadata from English-Speaking YouTube}, 
      author={Ribeiro, Manoel Horta and West Robert},
      year={2021},
      booktitle={{Proceedings of the 15th International AAAI Conference 
                  on Weblogs and Social Media (ICWSM'21)}}
}

All icons have been taken from Canva.

Most of the interactive graphs have been done using [flourish](https://flourish.studio).

[1] Introduction picture: AI generated using Dali

[2] Picture PewDiePie: <https://www.washingtonpost.com/technology/2018/12/20/forever-war-pewdiepie-youtubes-biggest-creator/>

[3] Picture Jake Paul: <https://commons.wikimedia.org/wiki/File:Jake_Paul_(53116882732).jpg?uselang=fr>

[4] Picture Tana Mongeau: <https://www.refinery29.com/en-us/2020/04/9640958/tana-mongeau-xanax-suicidal-thoughts-new-video>

[5] Picture Logan Paul: <https://www.nbcnews.com/tech/logan-paul-announces-buy-back-nfts-cryptozoo-rcna132390>

[6] 3 pictures about upload frequency: AI generated using Dali

Color code: #004AAD
---
layout: page
title: Buzz, bust and bounce-back
subtitle: A data-driven strategy to deal with YouTubers’ decline
cover-img: /assets/img/fond.avif
thumbnail-img: /assets/img/fond.avif
share-img: /assets/img/fond.avif

use-site-title: true
---
![](/assets/img/comments_intro.png)
Does that sound (too) familiar ? Then you might just need our help...

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
            <img src="/assets/img/thumbnail.jpg" alt="" style="width:100%;">
        </div>
    </div>
</body>
</html>

**How ?**  By drawing on patterns from previous YouTuber experiences, we’ll analyse key metrics—such as your channel type, initial popularity, posting frequency
to offer tailored strategies for re-engagement, so that you can fully focus on the fun and creative aspect of your job! Should you do clickbait ? 
Adress your decline in an apology video ? Post more often or change topics slightly ? Our motivation stems from the spread of <b>online backlash</b>, that has visibly impacted 
creators on YouTube and other platforms. Eager to offer them unforeseen solutions and break the stigma on subscribers loss, we aim to help you make informed decisions about your next steps to rebuild audience trust.

<div style="border: 2px solid red; padding: 10px; display: inline-block;">
  <h2> Research Questions </h2>
  <ol>
    <li> How do we define decline for Youtubers ? How do we define a recovery ?</li>
    <li> Is a Youtube channel category affecting the effective response strategies after a decline?</li>
    <li> What timing and content strategies are best for re-engagement following public backlash? Should you change your posting strategy?</li>
    <li> In the exact case of a ‘bad buzz’, how to define it using Youtuber statistics? Are apology videos really useful?</li>
  </ol>
</div>

## Why should you trust us ? 

-> TODO: HTML YOUTUBE + texte

### Before any piece of advice, how do we define a decline ?

**You feel like your viewership is going down and your stats are struggling ?** We know how painful that can be when you're trying to be on your A-game and you're putting all of your time and energy into your channel. 

<div style="display: flex; align-items: center;">
  <p style="flex: 1; margin-right: 20px;">
    Let's keep it real, there are very few chances you're actively losing subscribers (or maybe you actually did fumble, you can go check out our bad buzz section ;)). If you're not in the middle of a controversy and cancel culture hasn't got the best of you, chances are you are just experiencing a decline. In most cases, your situation will fix by itself. <b>However, if this has been going on for more than a month, maybe you should check out our analytical tool ! </b>
  </p>
  <img src="/assets/img/arrow.png" alt="Description of image" style="width: 150px;">
</div>

Since Youtube hasn't stopped gaining new users, we have reached the conclusion that very few channels will actively face a decrease in their total subscriber count. However, we can detect decline by noticing in your stats a significant slowdown in the growth rate, which may indicate potential issues such as reduced engagement or a negative reception by the audience. To go further, we compared the actual growth rate of channels (`delta_subs`) against the rolling average growth rate (`rolling_growth_rate`). 

<div style="border-left: 4px solid #51247a; padding-left: 20px; font-size: 18px; background-color: #DFC5FE">
  <b> Why ?</b> Because the rolling average acts as a smoothed baseline, calculated using a defined window (we arbitrarily used a 'window' of 20 weeks), which helps to identify deviations from the expected trend. When the growth of your channel falls below the rolling average, it suggests that the channel's performance has dipped relative to its typical trend. 
</div>


After playing around with parameters, we have decided on the following: 
- a minimum duration of a decline of 8 weeks: you could be on holidays without it being a decline ! 
- if the decline was 'intense', meaning that there was a 80% growth difference, we consider that the channel underwent a massive backlash, and may it be shorter or longer than 2 months, it should be counted as a decline (and a big one, what did you do ?)

To make you visualise a bit more, here is a little glimpse at the biggest Youtubers' declines, so you can see how well our detection works ! 

-> TODO: put subs trends for 5 big youtubers

Okay, okay, we might just be rubbing salt on the wound right now with loss and declines, let's talk about more positive things... the recovery ! So what do we considered being an efficient recovery ? Since we do not want you to fall into the unknown for too long, but we still consider normal that a recovery is not happening in a flash, we consider that your recovery was successful if it happened in the span of 16 weeks, or 4 months. More and our model will sadly announce that you have one foot in the grave, and that Youtuber might not be a durable hobbie for you... sad, but your mom told you so years ago! 




Color code: #004AAD
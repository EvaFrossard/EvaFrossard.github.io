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

### Does that sound (too) familiar ? Then you might just need our help...

<br />

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

**How ?** By drawing on patterns from previous YouTuber experiences, we’ll analyse key metrics—such as your channel type, initial popularity, posting frequency
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

![](/assets/img/fake_youtube3.png)

### Before any piece of advice, how do we define a decline ?

**You feel like your viewership is going down and your stats are struggling ?** We know how painful that can be when you're trying to be on your A-game and you're putting all of your time and energy into your channel.

<div style="display: flex; align-items: center;">
  <p style="flex: 1; margin-right: 20px;">
    Let's keep it real, there are very few chances you're actively losing subscribers (or maybe you actually did fumble, you can go check out our bad buzz section ;)). If you're not in the middle of a controversy and cancel culture hasn't got the best of you, chances are you are just experiencing a decline. In most cases, your situation will fix by itself. <b>However, if this has been going on for more than a month, maybe you should check out our analytical tool ! </b>
  </p>
  <img src="/assets/img/curve_icon.jpg" alt="Description of image" style="width: 150px;">
</div>

Since Youtube hasn't stopped gaining new users, we have reached the conclusion that very few channels will actively face a decrease in their total subscriber count. However, we can detect decline by noticing in your stats a significant slowdown in the growth rate of your subscribers, which may indicate potential issues such as reduced engagement or a negative reception by the audience. To go further, we compared the actual growth rate of channels (`delta_subs`) against the rolling average growth rate (`rolling_growth_rate`).

<div style="border-left: 4px solid #51247a; padding-left: 20px; font-size: 18px; background-color: #DFC5FE">
  <b> Why ?</b> Because the rolling average acts as a smoothed baseline, calculated using a defined window (we arbitrarily used a 'window' of 20 weeks), which helps to identify deviations from the expected trend. When the growth of your channel falls below the rolling average, it suggests that the channel's performance has dipped relative to its typical trend. 
</div>

![](/assets/img/plotrollingaverage.png)
-> maybe another one because this is pewdiepie

After playing around with parameters, we have decided on the following:

- a minimum duration of a decline of 8 weeks: you could be on holidays without it being a decline !
- if the decline was 'intense', meaning that there was a 80% growth difference between growth index of your channel and the rolling average, we consider that the channel underwent a massive backlash, and may it be shorter or longer than 2 months, it should be counted as a decline (and a big one, what did you do ?)

After doing so, a little update on what our database is: we had 74788 channels that had declines, with more than 121998 episodes... see ? You're really not alone !

<div class="flourish-embed flourish-bubble-chart" data-src="visualisation/20775833"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/20775833/thumbnail" width="100%" alt="bubble-chart visualization" /></noscript></div>

To make you visualise a bit more, here is a little glimpse at the biggest Youtubers' declines, so you can see how well our detection works ! (with a little drama too...)

<div class="flourish-embed flourish-cards" data-src="visualisation/20775803"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/20775803/thumbnail" width="100%" alt="cards visualization" /></noscript></div>

<div class="colored-container">
    <p> Okay, okay, we might just be rubbing salt on the wound right now with loss and declines, let's talk about more positive things... the recovery ! So what do we considered being an efficient recovery ? Since we do not want you to fall into the unknown for too long, but we still consider normal that a recovery is not happening in a flash, we consider that your recovery was successful if it happened <b>in the span of 16 weeks, or 4 months</b>. More and our model will sadly announce that you have one foot in the grave, and that Youtuber might not be a durable hobbie for you... sad, but your mom told you so years ago! <br />
    Here, using our tools, our goal is to put you out of the woods in the less time possible. If declines didn't end in 4 months, our program will consider that your recovery has failed.</p>
</div>

# Our research team's work/findings on how to maximise your chances of recovery

No time for thumbnail fine-tuning and title brainstorming here.

As the stakes are high and time is running out, we have decided to focus on the most important metrics that can help you recover from a decline.

To get an idea of what the risk is, let's first take a look at some statistics about recovery.

<div class="flourish-embed flourish-election" data-src="visualisation/20802367"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/20802367/thumbnail" width="100%" alt="election visualization" /></noscript></div>

<div class="flourish-embed flourish-chart" data-src="visualisation/20801957"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/20801957/thumbnail" width="100%" alt="chart visualization" /></noscript></div>

<!-- ![Statistics about recovery : subs, views & activity at the start of decline & decline duration](/assets/img/RecoStats.png) --->

We can't hide the evidences : by our standards, the majority fails to recover, especially in some categories.

That's why it is important to think before acting. Lucky you, we did the work for you so that you can put all the chances by your side.

## How to measure creator reactions

Taking advantage of all the data that we have at hand, our research team identified the key metrics that measure creator's reactions in times of
crisis, and will now walk you through them.

### Upload frequency

Considering the upload frequencies of creators before the start of a decline and throughout the latter highlights three separate groups.

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

TODO OU

<div class='reactionlist'>
  <div class='reactionlistelem'>
    <img src="/assets/img/PostLess.jpg" class="reactionimg" alt="Someone leaving on a plane" style="width: 100%;">
    <p class="reactiondesc">Some creators step back from the platform by posting less</p>
  </div>
  <div class='reactionlistelem'>
    <img src="/assets/img/PostNormal.webp" class="reactionimg" alt="Someone working but not too hard"
    style="width: 100%;">
    <p class="reactiondesc">Most of them keep uploading the same amount of content</p>
  </div>
  <div class='reactionlistelem'>
    <img src="/assets/img/PostMore.jpg" class="reactionimg" alt="Someone working hard" style="width: 100%;">
    <p class="reactiondesc">Others get it together and start spamming videos</p>
  </div>
</div>

### Video duration

Similarly, a natural reaction is to play around with the video length to understand what content the audience prefers (could creators be trying to beat accusations of [tuning video length for monetization](https://www.reddit.com/r/PartneredYoutube/comments/4v6bmy/why_so_many_youtubers_are_making_their_videos/){:target="\_blank"}?).

### Content category

A third, daring path is to try new things by changing their Youtube identity.

Using Latent Dirichlet Allocation (a natural language processing technique), we are able to extract the video categories of channels **before** and **during** crises, which are then passed through the large language model TODO oLlama to annotated as they initially are weighted sets of words. We use 20 different categories to remain broad and not be too sensitive to small content changes.

Getting this data allows us determine whether the reactions include changing the topics of interest, and we will use these statistics to find the best strategy.

<div class="flourish-embed flourish-chord" data-src="visualisation/20782429"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/20782429/thumbnail" width="100%" alt="chord visualization" /></noscript></div>

As you see, everything is possible when it comes to changing the topic of your videos! However, since some changes occur more frequently than others, we don't have enough data to give you meaningful analysis of every transition and we will thus focus on the most common topic transitions, with more than 30 occurences in our database:

<div class="flourish-embed flourish-chord" data-src="visualisation/20781676"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/20781676/thumbnail" width="100%" alt="chord visualization" /></noscript></div>

## What factors matter : an overview

First of all, here are the results of a logistic regression of **recovery** on the **reactions**. Basically, this means that we make use of all the data we have to compute the average impact of each reaction on the recovery.

<img src="/assets/img/LogistSummary.png" alt="Logistic regression summary showing coefficients and p-values" style="width: 60%; margin: auto; display: block;">

While analysing and drawing conclusions from this simple regression would be quite naive, it highlights an essential fact :

**Each reaction influences the recovery in a unique way.**

That is why caution is needed when handling your popularity crisis : One wrong move, and it's **done**.

As the next step, and in order to get some unbiased results and make the proportion of recoveries meaningful, we sample our dataset through **propensity score matching**. This balances the dataset regarding the variable whose effect we want to observe, enabling us (and you !) to draw more accurate conclusions.

<div style="border-left: 4px solid #51247a; font-size: 18px">
  <p style="padding-left: 20px; background-color: #DFC5FE">
  <b>Propensity score matching</b> is a statistical technique used to estimate the effect of a treatment by accounting for the features that predict receiving the treatment. It is used to reduce selection bias by balancing the features between treated and untreated subjects.
  </p>
</div>

This gives us :

<div class="flourish-embed flourish-chart" data-src="visualisation/20782011"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/20782011/thumbnail" width="100%" alt="chart visualization" /></noscript></div>

As you can see, the balanced data suggests that upload frequency has a relatively great effect on recovery while video duration does not play such an important role.

Though it could seem that topic change does not have great a average effect, further analysis leads us to insteresting results that are worth detailing.

## Exploiting the levers in the best possible way

Having set the stage, it is time to analyze the reactions and bring you the solutions.

### A deep dive into topic transitions

Evalutating the impact of subject changes should not be done as a whole : the categories and possible transitions are too numerous to be aggregated as one variable. To go into greater detail, we analyze the consequences by direction : going from **politics** to **lifestyle** videos should be distinguished from changing from **movie reviews** to **league of legends** content.

<iframe src="/assets/data/topic_change_bar_chart.html" width="100%" height="600" frameborder="0"></iframe>

On average, channels that change their video topics experience a slight increase in recovery rates compared to those that do not. While this is encouraging, we have to emphasize that this approach can have mixed results, and the impact on your recovery rate will depend heavily on the types of topics you choose to pivot to.

Below is the interactive Sankey diagram showing topic transitions and their recovery rates, colored by recovery rate (cooler colors represent higher recovery rates):

<div id="sankey-plot" style="width:100%; height:600px;"></div>

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

Looking see which topic transitions works in your niche is not obvious. For instance, channels focused on movie reviews often see positive changes in recovery when they switch topics, though transitioning to topics like politics could negatively impact your recovery. On the other hand, gameplay channels should be careful when changing topics, as only a shift to Fortnite-related content seems to maintain or increase engagement.

If you’re considering making a shift, we recommend focusing on topics that have historically shown positive outcomes, such as beauty and lifestyle or gaming-related content, while being cautious about venturing into politics or kids videos, where the change could backfire. Remember that your choice should be guided by your category of origin!

### How to upload when people want it the most

An important point to consider is the current frequency of your uploads.

While it may seem like a good idea to post more content to become relevant again based on what we presented until now, our data suggests that this strategy may not always be effective as posting **more** does not mean posting **more than average**.

![Videos per week before the start of the decline](/assets/img/vids_per_week_before.png)

![Videos per week after the start of the decline](/assets/img/vids_per_week_after.png)

TODO make a plot where you click to choose what to see :

- before/during

Notice that those that post more used to post less than average!

- conclusions on upload freq:
  - it is good
  - what freqs are best

### Are long videos that boring ?

- conclusions on video duration
  - mostly bad
  - can still be used if necessary but not to display as necessary

TODO mention shorts, which did not exist in 2019? in any case are not tracked but now play a big role

### Key findings

In short, TODO

TODO QUIZ

### Suffering from a bad buzz ? Here is where it's at...

Let’s face it — you wouldn’t still be reading this unless you’d royally messed up, would you? You’ve stepped on the internet landmine, and now your channel is caught in the crosshairs of a… **BAD BUZZ** 😱. <br />

If you’ve scrolled through the previous sections and still can’t find a fix, it’s because your situation requires more than the usual “post more consistently” or “engage with your audience” advice. But fear not! While the internet’s collective fury can feel like a raging storm, we’ve armed ourselves with data analysis and research to help you turn this ship around. <br />

### The Challenges of a Big YouTuber in a Crisis

Our analysis of big YouTubers (think >1M subscribers — we feel flattered that you're here) has revealed some fascinating trends. Whether it’s a Twitter faux pas, a controversial statement, or a scandal you never saw coming, the strategies for clawing back your reputation vary dramatically depending on the moves you make right now.(Insert dramatic pause for effect. You’re feeling the pressure, aren’t you?) <br />

But hey, before you run off to film a tearful apology, let’s talk about why some YouTubers manage to recover from their digital nightmares while others end up in the dreaded “where are they now?” category. Spoiler: it’s not all about talent or luck. <br />

### The Secret Sauce? Your Titles

Yes, you read that right. **Titles.** Those few dozen characters can either save your channel or sink it further. Think about it: what’s the first thing a viewer sees before they even decide to click? Your title! And if you’ve learned anything from this wild ride of YouTube, it’s that first impressions are everything. <br />

Now, here’s where the science kicks in. You’ve probably heard of **LLMs (Large Language Models)**, right? They’re super-smart AI tools that can analyse and recognise patterns in text faster than you can say, “Oops, I tweeted what?!” <br />

We used this tech wizardry to dive into the aftermath of bad buzz for dozens of big YouTubers. By leveraging the OLLAMA open source project [TODO: ref] , we analysed the types of videos uploaded immediately following their PR disasters. What did we look for? Patterns. Specifically, whether these videos fell into one (or more) of these categories:

  <ol>
    <li> Apology videos: The classic “I’m sorry” trope—effective or overdone?
    <li> Addressing the decline: Are you facing the issue head-on or pretending nothing’s wrong?
    <li> Comeback announcements: Bold, confident, and ready to win back hearts.
    <li> Break announcements: Sometimes, stepping back is stepping forward.
    <li> Collaboration videos: Is strength in numbers the way to go?
    <li> Clickbait videos: Risky, but can it work in your favor?

And guess what? Our findings are as wild as the comment section on your latest video !

### The Plan

We’re not going to leave you hanging with just data and no solutions. Let’s reclaim that subscribe button together.

Color code: #004AAD

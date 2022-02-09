# Enhancing server-side MathJax rendering with common ARIA patterns to provide robust, richly accessible equation layout at scale

*[ATHEN](https://athenpro.org) STEM Accessibility Conference 2022*

By Peter Krautzberger, [krautzource](https://krautzource.com)

Scroll left/right to move through slides. Click headings to anchor the slide. {style="margin-top: 10%; font-size: 0.8em"}

## Hi!

* Former [mathematician](https://genealogy.math.ndsu.nodak.edu/id.php?id=140155)
* Former Manager at [the MathJax Consortium](https://www.mathjax.org)
* [Independent developer and consultant](https://krautzource.com/)
  focus on STEM publishing conversion pipelines
* [Invited Expert at W3C](https://www.w3.org/participate/invited-experts/), 
  co-editor of [the ARIA Specification](https://w3c.github.io/aria/)

## Let's jump right in

Demo time!

## What are we looking at?

HTML production at the [American Mathematical Society](https://www.ams.org) includes ebooks and [journals](https://www.ams.org/publications/journals/journalsframework/AMSMathViewer).

The demos use a journal article, [Disproof of a conjecture by Rademacher on partial fractions](https://www.ams.org/journals/bproc/2014-01-11/S2330-1511-2014-00014-6/viewer/)
## NVDA

[NVDA](https://www.nvaccess.org/) using Chrome

<video controls>
<source src="./nvda_bproc14_chrome.mp4" type="video/mp4">
Sorry, your browser doesn't support embedded videos.
</video>

(Firefox and Edge work, too.)


<my-notes hidden>
* just hear it out

* vanilla NVDA in Windows 10 VM
* me following a typical screenreader navigation
* jump by heading
* then browse mode in section
* some inline expressions are read along
* then a block expression shows up (and NVDA focus bug)
* we listen to it but it's long so we explore
* exploration
* moving back into browse mode for the next paragraph
* for good measure, explore some inline content
</my-notes>


## JAWS

[JAWS](https://www.freedomscientific.com/products/software/jaws/) using Chrome

<video controls>
<source src="./jaws_bproc14_chrome.mp4" type="video/mp4">
Sorry, your browser doesn't support embedded videos.
</video>

Firefox and Edge work, too.

## VoiceOver (Mac OS)

[VoiceOver](https://support.apple.com/accessibility) using Safari 

<video controls>
<source src="./vo-bproc14-safari.mp4" type="video/mp4">
Sorry, your browser doesn't support embedded videos.
</video>

Chrome works, too (better even).

## Orca

[Orca](https://help.gnome.org/users/orca/stable/) using Firefox

<video controls>
<source src="./orca_bproc14_firefox.mp4" type="video/mp4">
Sorry, your browser doesn't support embedded videos.
</video>

Chrome works, too.

## VoiceOver (iOS)

Touch AT is tricky. But we should at least get something:

<video controls>
<source src="./ios-bproc14-bug.mp4" type="video/mp4">
Sorry, your browser doesn't support embedded videos.
</video>

Oops. [It's a regression](https://bugs.webkit.org/show_bug.cgi?id=236291).

## Talkback (Android)

[Talkback](https://support.google.com/accessibility/android/topic/3529932?hl=en&ref_topic=9078845) is better:

<video controls>
<source src="./talkback_bproc14_chrome.mp4" type="video/mp4">
Sorry, your browser doesn't support embedded videos.
</video>

(Firefox for Android works, too.)

## NVDA in Thorium

NVDA using the epub reader [Thorium](https://www.edrlab.org/software/thorium-reader/)

<video controls>
<source src="./thorium_bproc14_nvda.mp4" type="video/mp4">
Sorry, your browser doesn't support embedded videos.
</video>

Disclosure: needs extra key during exploration (e.g., <kbd>ctrl</kbd>) to prevent Thorium pagination.

## Thorium read-aloud

[Thorium](https://www.edrlab.org/software/thorium-reader/) using its built-in read-aloud functionality.

<video controls>
<source src="./thorium_bproc14_readaloud.mp4" type="video/mp4">
Sorry, your browser doesn't support embedded videos.
</video>

## And on its own

* visit [the article's settings panel](https://www.ams.org/journals/bproc/2014-01-11/S2330-1511-2014-00014-6/viewer/#settings)
* activate subtitles or speech synthesis
* focus an equation (e.g., click on or tab to it)
* explore!

## Demo Recap

The demos show print equation layout that 

* voices everywhere & consistently
  * both screenreaders and read-aloud
  * both web and epub
* provides keyboard exploration
  * following standard tree patterns
* synchronous highlighting (both CSS and AT driven)
* can provide simultaneous (alternative) braille
* can be extended (e.g., self-voicing, subtitling)

## a personal observation

Equation layout is really a bit problematic.

* Limited to print traditions (and limitations)
* Its accessibility traditions are based in print and focused layout
  * and require extensive heuristics
* Web accessibility resolves around semantics not layout
  * clashes with user needs (e.g., copy&paste layout)
  * also: [WCAG 1.1.1](https://w3c.github.io/wcag/21/guidelines/#non-text-content) applies

<my-notes hidden>

Don't forget heuristics and incongruencies (e.g., SRE's cycle heuristics)

</my-notes>

## The big tools

[MathJax](https://www.mathjax.org/) the leading visual rendering technology for print equation layout on the web

[Speech Rule Engine](https://speechruleengine.org/) the leading non-visual rendering technology for print equation layout

For web content, you can do no better than use these.

## What if the big tools aren't around?

MathJax's integration of Speech Rule Engine brings the highest quality of visual and non-visual rendering with a trove of features and affordances.

But JavaScript is not always an option - either due to availability or performance.

<my-notes hidden>
</my-notes>

## Real life

From [The Mobile Performance Inequality Gap, 2021](https://infrequently.org/2021/03/the-performance-inequality-gap/) (Alex Russel)

> 2020’s high-end Androids sport the single-core performance of an iPhone 8, a phone released in Q3’17 <br>
> Mid-priced Androids were slightly faster than 2014’s iPhone 6 <br>
> Low-end Androids have finally caught up to the iPhone 5 from 2012

## Real life at scale (1)

An real life example of scale at the AMS:

[Existence of minimal models for varieties of log general type, Birkar et al.](https://www.ams.org/journals/jams/2010-23-02/S0894-0347-09-00649-3/)

* 64 pages (slighly above average)
* ~5000 equations (in PDF)
* ~6400 equations (in HTML)

<my-notes hidden>
jams649
</my-notes>

## Real life at scale (2)

The AMS publishes roughly 45,000 pages across over 1,000 journal articles and nearly 100 books each year.

A solution must scale to process these not just once but on multiple iterations of web products per year.

## Real life at scale (3)

The AMS publishes research-level mathematics.

Bleeding-edge research means bleeding-edge notation, i.e., equation layout.

## Design considerations


Author responsibility through author ability ("users before authors before vendors")

* no heuristics affecting users
  * heuristics should be a burden on authors
* **fixable** heuristics (& fixable bugs)
* enable author customizations
* enabling additional services (e.g., subtitles, speech synthesis)
* minimal performance impact (even for longest articles)
* web standards focus (present and future)
* reliable user experience (e.g., [Jakob's Law](https://lawsofux.com/jakobs-law/))
* [progressive enhancement](https://en.wikipedia.org/wiki/Progressive_enhancement) // [graceful degradation](https://en.wikipedia.org/wiki/Fault_tolerance)

<my-notes hidden>
* SRE allows overrides
* promote multi-purpose standards
</my-notes>

## Example "fixable"

Remember VoiceOver (iOS)? Here it is again, with a quick workaround:

<video controls>
<source src="./ios-bproc14-fix.mp4" type="video/mp4">
Sorry, your browser doesn't support embedded videos.
</video>

(A 1 line fix, targeting only iOS/iPadOS.)
## Quick History

* 2018: AIM Workshop [ Web accessibility of mathematics ](https://aimath.org/workshops/upcoming/webmath/)
* 2019 & 2020: Initial demo expanded as [mathjax-sre-walker](https://github.com/krautzource/mathjax-sre-walker/)
  * moving "closer to the metal"
  * evaluating different [ARIA](https://w3c.github.io/aria/) patterns for best results
  * [Speech-Rule-Engine](https://github.com/zorkow/speech-rule-engine/) adds new APIs to expose its enrichment
  * [MathJax](https://www.mathjax.org/) releases version 3 with necessary markup improvements
* 2020 - today: Continued as a general purpose [ARIA Tree Walker](https://github.com/krautzource/aria-tree-walker)

<my-notes hidden>
</my-notes>

## SSR to the rescue

Server Side Rendering allows for performant pages at this scale.

[MathJax demos for NodeJS](https://github.com/mathjax/MathJax-demos-node/) offers a range of example code snippets, even for [speech output](https://github.com/mathjax/MathJax-demos-node/tree/master/speech).

☑ performance at scale <br>
☑ heuristics "move left"

But: how do we get MathJax+SRE client-side accessibility benefits?

<my-notes hidden>
* SSR robustness and stability -- MathJax changes its output but SSR output will not
</my-notes>


## ARIA to the rescue

[The ARIA specification](https://w3c.github.io/aria/) offers many patterns for complex interation beyond the scope of HTML.

Most interaction patterns are derived from OS-level widgets and application interface to follow [Jakob's Law](https://lawsofux.com/jakobs-law/).

Which one do we choose?

## A look inside Speech Rule Engine

Speech Rule Engine offers a visualizer to inspect its heuristic analysis, creating its "semantic tree".

[A simple example](https://speech-rule-engine.github.io/semantic-tree-visualiser/visualise.html?110001111100f%3A%20X%20%5Cto%20Y%2C%20x%20%5Cmapsto%20%5Csin%28x%29)

<img alt="screenshot from the above webpage, showing various UI options and the resulting semantic tree for a simple function declaration for sine of x" src="Semantic_Tree_Visualisation.png" style="height: 50vh">

Also, the [DOM](https://en.wikipedia.org/wiki/Document_Object_Model) is a tree.

## ARIA tree pattern

[ARIA's tree role](https://w3c.github.io/aria/#tree)

> A widget that allows the user to select one or more items from a hierarchically organized collection.

[ARIA Authoring Practices Tree Pattern](https://w3c.github.io/aria-practices/#TreeView)

> A tree view widget presents a hierarchical list. Any item in the hierarchy may have child items, and items that have children may be expanded or collapsed to show or hide the children. 

## AT affordances for ARIA trees

* good browse mode support
* enter + esc for quickly switching in and out of focus mode
* customizable level information (level, setsize, posinset)
* easy future enhancements (e.g., braille labels)

## The tiny tools

* In MathJax *SSR* setup, configure SRE to add structural markup
* *SSR* post-process: [github.com/krautzource/sre-to-tree](https://github.com/krautzource/sre-to-tree), a small NodeJS module for post-processing MathJax+SRE output into ARIA tree markup.
* *Client-side*: [github.com/krautzource/aria-tree-walker](https://github.com/krautzource/aria-tree-walker), a tiny JavaScript module to enable a basic exploration for this kind of ARIA tree markup

**Caveat Emptor** Think of these more as [educational resources](https://notes.baldurbjarnason.com/2021/05/03/idle-thought-most.html). Don't force your content to work with them -- adjust them to work for your content.

<my-notes hidden>
</my-notes>


## Beyond print equation layout

Trees are fairly generic so [aria-tree-walker's documentation](https://krautzource.github.io/aria-tree-walker/) offers several other examples

* line art
* chemical diagrams
* d3.js-driven diagrams
* musical score
* tikz diagrams


## User testing 

Is it any good? Some quotes from testers at Portland Community College:

> I think this is a much better solution to the extension for NVDA as you can get very very
granular. I really really like this approach. I will be testing using other SVG vector images to see
how flexible this can be.

> I feel like this simple arrow-key-driven, branching and hierarchical approach can be
useful in a lot of situations. I see it as particularly useful in mathematical, chemical,
[...], and similar fine-scale representations, as well as mapping.

> I would have to use the product more extensively in a production environment. But it’s the best I’ve seen thus far for making
STEM material comprehensible with screen reading technology.

Thanks to [Alex Jordan](https://www.linkedin.com/in/alex-jordan-12122a161/) from PCC (and [PreTeXt](https://pretextbook.org/)) as well as the team at PCC's Accessibility Office.

## Quirks, bugs and future improvements

Is this perfect? Of course not.

* inline trees are iffy
* VoiceOver is iffy
* touch support is very hard
* better noOps
* lots to "steal" from client-side MathJax+SRE

## Wrapping up

The approach gives us

* robust server-side rendering with great progressive enhancement
* flexible and extensible patterns to improve upon
* well-tested ARIA patterns
* can be enhanced (e.g. CSS based highlighting, subtitles, speech synthesis)
## Thank you!


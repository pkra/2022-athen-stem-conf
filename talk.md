# Enhancing server-side MathJax rendering with common ARIA patterns to provide robust, richly accessible equation layout at scale

*ATHEN STEM Accessibility Conference*

By Peter Krautzberger, [krautzource](https://krautzource.com)

Scroll left/right to move through slides. Click headings to anchor the slide. {style="margin-top: 10%; font-size: 0.8em"}

## Overview

1. [Introduction](#introduction)
2. [Restraints](#restraints)

## 1. Introduction {#introduction}

## Hi

* Former mathematician
* Former Manager at the [MathJax](https://www.mathjax.org) Consortium
* Independent developer and consultant, focus on STEM publishing conversion pipelines
  * e.g., at [AMS](https://www.ams.org) ebook and [journals](https://www.ams.org/publications/journals/journalsframework/AMSMathViewer) HTML production
* Invited Expert at W3C
* co-editor of the ARIA Specification

## "Print equation layout" - a framing device

[From Wikipedia](https://en.wikipedia.org/wiki/Framing_(social_sciences)):

> [...] framing comprises a set of concepts and theoretical perspectives on how individuals, groups, and societies organize, perceive, and communicate about reality. 

Examples of "print equation layout":

* math mode TeX/LaTeX
* asciimath, groff/eqn
* MathML, OMML
* Mathematica traditionalForm, Maple 1-D/2-D Math

("Typical output" - you can frequently draw anything with these notations.)

<my-notes hidden>

What I call "print equation layout" most people just call "math layout", "formula layout", or just "math" (that last one is somewhat insulting, speaking as a former mathematician). 

This may seem unnnecessary and convoluted. To some degree, I agree. 

For example, I personally don't believe we have seen "web equation layout" come into existence during these first 30 years of the web.

But as a framing device it serves to ground the conversation and keep aspects in focus that I find critical to the discussion. 
</my-notes>

## What's the problem (1)

Print equation layout is ... 

* an elaborate, two-dimensional form of abbreviated notation for highly complex, context dependent abstract thought.
  * even at an elementary level (e.g., long division).
* highly ambiguous (examples: [whystartat.xyz](https://whystartat.xyz/wiki/Category:Ambiguities))
* often integrated into additional complex notation (e.g., text annotation, graphical documents).
* "non-text content" (so [WCAG 1.1.1](https://w3c.github.io/wcag/21/guidelines/#non-text-content) applies).

<my-notes hidden>
* 2d abbreviation: just because it uses text glyphs does not make it text (cf. ascii art).
* non-text: 
  * TeX text vs math mode, or "formula blocks" in MS Word et al).
* e.g., spacing used to infer semantics
* e.g., invisible/implied characters
</my-notes>

## What's the problem (2)

Print equation layout ... 

* has (print) accessibility traditions 
  * tactile and aural traditions (e.g. Nemeth Braille / MathSpeak)
  * many regional variations (cf. [D. Archambault](https://chezdom.net/mathematicalbraillecodes/))
  * require human intervention
* is incompatible with contemporary web accessibility
  * is layout, not semantics
    * so we fall back to print accessibility traditions
  * print accessibility traditions are also about layout
    * limited; modalities are incongruent
  * require heuristics for (non-visual) rendering
  * incongruent to core concepts, e.g., [Accessible Name Computation](https://w3c.github.io/accname/)

<my-notes hidden>

not accessible - cf. WCAG, accname


Print equation layout has its own accessibility traditions (e.g. Nemeth Braille and MathSpeak) which create a set of orthogonal expectations that is difficult to address on the web.

Print equation accessibility traditions (e.g., Nemeth Braille and MathSpeak) exacerbate the problem:

On the one hand, these traditions reduce expectations to the limitations of print technology (e.g., semantics are largely out of scope) [cf svg house made of triangle, rectangle, circle]
On the other hand, these traditions rely on human intervention (through narration or specialized Braille transcribers) which leads to them being underspecified and easily malleable by the assisting person.

</my-notes>

## What's the problem (3)

But what's _really_ the problem?

**Heuristics**

Imagine they fail you. 

* a superscript 2 is voiced squared but isn't
* your layout is interpreted as fraction but it's not. [Legendre_symbol]

> Now you have 2 problems

How do you fix that?

<my-notes hidden>
* heuristics are strongly avoided in web a11y (except to fix broken things)
* if you try to fix something, you now have to work around heuristics as well
  * unspecified heuristics
</my-notes>
 

## Overview

1. [Introduction: Accessibility and the Web Platform](#introduction)
2. [Understanding Accessibility](#understanding)
3. [Definining Accessibility](#definining)
4. [Evaluating Accessibility](#evaluating)
5. [Beyond requirements](#beyond)











## 1. Introduction {#introduction}


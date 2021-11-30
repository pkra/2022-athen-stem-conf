# Enhancing server-side MathJax rendering with common ARIA patterns to provide robust, richly accessible equation layout at scale 

Peter Krautzberger, [krautzource](https://krautzource.com)


## Presentation Summary

Equation layout (e.g., math mode TeX/LaTeX, asciimath, groff/eqn, MathML) provides a particular challenge to render visually on the web. Additionally, accessibility traditions for equation layout (e.g. Nemeth Braille and MathSpeak) create a set of orthogonal expectations that is difficult to address.

[MathJax](https://www.mathjax.org/) and [Speech-Rule-Engine (SRE)](https://speechruleengine.org/) provide state-of-the-art visual and non-visual rendering, applying complex heuristics to enrich content for use on the web. However, when publishing on the web (and adjacent technologies such as epub), content providers may not be able to reliably expect MathJax+SRE to work client-side because JavaScript technologies can fail to work either for technical reasons (e.g., poor network conditions, JS blocked) or practical limitations (e.g., JS performance on mobile devices).

In this talk, I will present an approach to enhance server-side generated MathJax rendering using common ARIA patterns, in particular in the shape of [aria-tree-walker](https://github.com/krautzource/aria-tree-walker). This combination allows for a robust visual and non-visual rendering together with client-side progressive enhancement. The result is a richly detailed navigation/exploration experience on contemporary screen readers flanked by a solid baseline/fallback experience. This approach can even work in web-adjacent technologies such as epub. I will also discuss practical considerations arising from the experience of implementing this approach in the production workflow at the [American Mathematical Society](https://www.ams.org) as well as benefits this approach can offer for non-AT users.

## Key Point 1 - (Maximum 110 characters) 

Server-side MathJax+SRE rendering can be progressively enhanced for fully explorable rendering.

## Key Point 2 - (Maximum 110 characters) 

Standard ARIA patterns provide a robust, user-friendly approach to accessible equation layout.

## Key Point 3 - (Maximum 110 characters) 

This approach works at large scale and provides paths towards further enhancements.

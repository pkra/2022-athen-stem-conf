# Enhancing server-side MathJax rendering with common ARIA patterns to provide robust, richly accessible print equation layout at scale 

Peter Krautzberger, [krautzource](https://krautzource.com)


## Presentation Summary

Print equation layout (e.g., math mode TeX/LaTeX, asciimath, groff/eqn, MathML) provides a particular challenge to render visually on the web. Additionally, accessibility traditions for print equation layout (e.g. Nemeth Braille and MathSpeak) create a set of orthogonal expectations that is difficult to address.

MathJax and Speech-Rule-Engine (SRE) provide state-of-the-art visual and non-visual rendering, applying complex heuristics to enrich content for use on the web. However, when publishing on the web (and adjacent technologies such as epub), content providers may not be able to reliably expect MathJax+SRE to work client-side because JavaScript technologies can fail to work either for technical reasons (e.g., poor network conditions) or practical limitations (e.g., JS performance on mobile devices).

In this talk, I will present an approach to enhance server-side generated MathJax rendering using common ARIA patterns, in particular in the shape of [aria-tree-walker](https://github.com/krautzource/aria-tree-walker). This combination allows for a robust visual and non-visual rendering together with client-side progressive enhancement. The result is a richly detailed navigation/exploration experience on contemporary screenreaders flanked by a solid baseline/fallback experience which can even work in web-adjacent technologies such as epub. I will also discuss practical considerations arising from the experience of implementing this approach in the production workflow at the American Mathematical Society as well as benefits this approach can offer for non-AT users.

## Key Point 1 - (Maximum 110 characters) 

## Key Point 2 - (Maximum 110 characters) 

## Key Point 3 - (Maximum 110 characters) 

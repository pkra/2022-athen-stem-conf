console.log(new Date());
const md = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true
});
md.use(require('markdown-it-attrs'));
const anchor = require('markdown-it-anchor');
md.use(require('markdown-it-header-sections'), {
  html: true,
  linkify: true,
  typographer: true
}).use(anchor, {
  permalink: anchor.permalink.headerLink()
});
const fs = require('fs');
const slides = md.render(fs.readFileSync('talk.md').toString())


const html = `
<!DOCTYPE html>
<html lang="en">
<head>
<link rel="icon" href="favicon.ico" type="image/x-icon">
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Enhancing server-side MathJax rendering with common ARIA patterns</title>
<style>${fs.readFileSync('./styles.css').toString()}</style>
</head>
<body>
${slides}
<script>
const sl = document.querySelector('section');
sl.classList.add('slider');
const s = document.createElement('section');
document.querySelectorAll('.slider > *:not(section)').forEach(n => s.appendChild(n));
sl.insertAdjacentElement('afterbegin', s);
</script>
</body>
</html>
`;

fs.writeFileSync('index.html', html);

'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkdownView = MarkdownView;
var jsx_runtime_1 = require("react/jsx-runtime");
var _mock_1 = require("lib/_mock");
var paths_1 = require("lib/routes/paths");
var markdown_1 = require("lib/components/markdown");
var custom_breadcrumbs_1 = require("lib/components/custom-breadcrumbs");
var component_hero_1 = require("../../component-hero");
var component_block_1 = require("../../component-block");
// ----------------------------------------------------------------------
var imgPath = _mock_1._mock.image.cover(18);
var htmlContent = "\n<h1>h1</h1>\n<h2>h2</h2>\n<p> <strong>Paragraph</strong> Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups</p>\n<p>\n  <a href='https://www.google.com/'>Link (https://www.google.com/)</a>\n</p>\n\n<h6>Lists</h6>\n<ul>\n  <li>\n    <input type=\"checkbox\" disabled=\"\" checked=\"\"> Write the press release\n  </li>\n  <li>\n    <input type=\"checkbox\" disabled=\"\"> Update the website\n  </li>\n  <li>\n    <input type=\"checkbox\" disabled=\"\"> Contact the media\n  </li>\n</ul>\n\n<hr/>\n\n<h6>A table:</h6>\n\n<table>\n  <thead>\n    <tr>\n      <th style=\"text-align: left;\">Syntax</th>\n      <th style=\"text-align: center;\">Description</th>\n      <th style=\"text-align: right;\">Test Text</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td style=\"text-align: left;\">Header</td>\n      <td style=\"text-align: center;\">Title</td>\n      <td style=\"text-align: right;\">Here's this</td>\n    </tr>\n    <tr>\n      <td style=\"text-align: left;\">Paragraph</td>\n      <td style=\"text-align: center;\">Text</td>\n      <td style=\"text-align: right;\">And more</td>\n    </tr>\n  </tbody>\n</table>\n\n<code>Code inline</code>\n\n<pre><code class=\"language-javascript\">for (var i=1; i &#x3C;= 20; i++) {\n  if (i % 15 == 0)\n    return \"FizzBuzz\"\n  else if (i % 3 == 0)\n    return \"Fizz\"\n  else if (i % 5 == 0)\n    return \"Buzz\"\n  else\n    return i\n  }</code></pre>\n\n<p><img alt='cover' src=".concat(imgPath, "></p>\n\n<blockquote> <p>A block quote with <s>strikethrough</s> and a URL: <a href='https://reactjs.org'>https://reactjs.org</a>.</p> </blockquote>\n");
var mardownContent = "\n# h1\n\n## h2\n\n**Paragraph** Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.\n\n[Link (https://www.google.com/)](https://www.google.com/)\n\n###### Lists\n- [x] Write the press release\n- [ ] Update the website\n- [ ] Contact the media\n\n---\n\n###### A table:\n\n\n| Syntax      | Description | Test Text     |\n| :---        |    :----:   |          ---: |\n| Header      | Title       | Here's this   |\n| Paragraph   | Text        | And more      |\n\n`code inline`\n\n```tsx\nfor (var i=1; i &#x3C;= 20; i++) {\n  if (i % 15 == 0)\n    return \"FizzBuzz\"\n  else if (i % 3 == 0)\n    return \"Fizz\"\n  else if (i % 5 == 0)\n    return \"Buzz\"\n  else\n    return i\n  }\n```\n\n![cover](".concat(imgPath, ")\n\n> A block quote with ~~strikethrough~~ and a URL: [https://reactjs.org](https://reactjs.org).\n");
function MarkdownView() {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(component_hero_1.ComponentHero, { children: (0, jsx_runtime_1.jsx)(custom_breadcrumbs_1.CustomBreadcrumbs, { heading: "Markdown", links: [{ name: 'Components', href: paths_1.paths.docs.components.root }, { name: 'Markdown' }], moreLink: ['https://www.npmjs.com/package/react-markdown'] }) }), (0, jsx_runtime_1.jsxs)(component_block_1.ComponentContainer, { sx: {
                    rowGap: 5,
                    columnGap: 3,
                    display: 'grid',
                    gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' },
                }, children: [(0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { title: "Html content", sx: { pt: 0 }, children: (0, jsx_runtime_1.jsx)(markdown_1.Markdown, { children: htmlContent }) }), (0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { title: "Mardown content", sx: { pt: 0 }, children: (0, jsx_runtime_1.jsx)(markdown_1.Markdown, { children: mardownContent }) })] })] }));
}

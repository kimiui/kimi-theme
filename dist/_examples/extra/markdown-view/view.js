'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { _mock } from '../../../_mock';
import { paths } from '../../../routes/paths';
import { Markdown } from '../../../components/markdown';
import { CustomBreadcrumbs } from '../../../components/custom-breadcrumbs';
import { ComponentHero } from '../../component-hero';
import { ComponentBlock, ComponentContainer } from '../../component-block';
// ----------------------------------------------------------------------
const imgPath = _mock.image.cover(18);
const htmlContent = `
<h1>h1</h1>
<h2>h2</h2>
<p> <strong>Paragraph</strong> Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups</p>
<p>
  <a href='https://www.google.com/'>Link (https://www.google.com/)</a>
</p>

<h6>Lists</h6>
<ul>
  <li>
    <input type="checkbox" disabled="" checked=""> Write the press release
  </li>
  <li>
    <input type="checkbox" disabled=""> Update the website
  </li>
  <li>
    <input type="checkbox" disabled=""> Contact the media
  </li>
</ul>

<hr/>

<h6>A table:</h6>

<table>
  <thead>
    <tr>
      <th style="text-align: left;">Syntax</th>
      <th style="text-align: center;">Description</th>
      <th style="text-align: right;">Test Text</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align: left;">Header</td>
      <td style="text-align: center;">Title</td>
      <td style="text-align: right;">Here's this</td>
    </tr>
    <tr>
      <td style="text-align: left;">Paragraph</td>
      <td style="text-align: center;">Text</td>
      <td style="text-align: right;">And more</td>
    </tr>
  </tbody>
</table>

<code>Code inline</code>

<pre><code class="language-javascript">for (var i=1; i &#x3C;= 20; i++) {
  if (i % 15 == 0)
    return "FizzBuzz"
  else if (i % 3 == 0)
    return "Fizz"
  else if (i % 5 == 0)
    return "Buzz"
  else
    return i
  }</code></pre>

<p><img alt='cover' src=${imgPath}></p>

<blockquote> <p>A block quote with <s>strikethrough</s> and a URL: <a href='https://reactjs.org'>https://reactjs.org</a>.</p> </blockquote>
`;
const mardownContent = `
# h1

## h2

**Paragraph** Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.

[Link (https://www.google.com/)](https://www.google.com/)

###### Lists
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

---

###### A table:


| Syntax      | Description | Test Text     |
| :---        |    :----:   |          ---: |
| Header      | Title       | Here's this   |
| Paragraph   | Text        | And more      |

\`code inline\`

\`\`\`tsx
for (var i=1; i &#x3C;= 20; i++) {
  if (i % 15 == 0)
    return "FizzBuzz"
  else if (i % 3 == 0)
    return "Fizz"
  else if (i % 5 == 0)
    return "Buzz"
  else
    return i
  }
\`\`\`

![cover](${imgPath})

> A block quote with ~~strikethrough~~ and a URL: [https://reactjs.org](https://reactjs.org).
`;
export function MarkdownView() {
    return (_jsxs(_Fragment, { children: [_jsx(ComponentHero, { children: _jsx(CustomBreadcrumbs, { heading: "Markdown", links: [{ name: 'Components', href: paths.docs.components.root }, { name: 'Markdown' }], moreLink: ['https://www.npmjs.com/package/react-markdown'] }) }), _jsxs(ComponentContainer, { sx: {
                    rowGap: 5,
                    columnGap: 3,
                    display: 'grid',
                    gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' },
                }, children: [_jsx(ComponentBlock, { title: "Html content", sx: { pt: 0 }, children: _jsx(Markdown, { children: htmlContent }) }), _jsx(ComponentBlock, { title: "Mardown content", sx: { pt: 0 }, children: _jsx(Markdown, { children: mardownContent }) })] })] }));
}

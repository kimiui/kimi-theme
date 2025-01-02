'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import { paths } from '../../../routes/paths';
import { Editor } from '../../../components/editor';
import { Markdown } from '../../../components/markdown';
import { CustomBreadcrumbs } from '../../../components/custom-breadcrumbs';
import { ComponentHero } from '../../component-hero';
import { ComponentContainer } from '../../component-block';
// ----------------------------------------------------------------------
const defaultValue = `

<h4>This is Heading 4</h4>
<code>This is code</code>

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
`;
export function EditorView() {
    const [checked, setChecked] = useState(true);
    const [content, setContent] = useState(defaultValue);
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    return (_jsxs(_Fragment, { children: [_jsx(ComponentHero, { children: _jsx(CustomBreadcrumbs, { heading: "Editor", links: [{ name: 'Components', href: paths.docs.components.root }, { name: 'Editor' }], moreLink: ['https://tiptap.dev/docs/editor/introduction'] }) }), _jsxs(ComponentContainer, { maxWidth: false, sx: {
                    rowGap: 5,
                    columnGap: 3,
                    display: 'grid',
                    gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' },
                }, children: [_jsxs(Card, { sx: {
                            p: 3,
                            gap: 2,
                            flexShrink: 0,
                            display: 'flex',
                            flexDirection: 'column',
                        }, children: [_jsx(FormControlLabel, { control: _jsx(Switch, { name: "fullItem", checked: checked, onChange: handleChange }), label: "Full item", labelPlacement: "start", sx: { ml: 'auto' } }), _jsx(Editor, { fullItem: checked, value: content, onChange: (value) => setContent(value), sx: { maxHeight: 720 } })] }), _jsxs(Stack, { spacing: 1, sx: {
                            p: 3,
                            borderRadius: 2,
                            overflowX: 'auto',
                            bgcolor: 'background.neutral',
                        }, children: [_jsx(Typography, { variant: "h6", children: "Preview" }), _jsx(Markdown, { children: content })] })] })] }));
}

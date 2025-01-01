'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditorView = EditorView;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Card_1 = __importDefault(require("@mui/material/Card"));
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var Switch_1 = __importDefault(require("@mui/material/Switch"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var FormControlLabel_1 = __importDefault(require("@mui/material/FormControlLabel"));
var paths_1 = require("lib/routes/paths");
var editor_1 = require("lib/components/editor");
var markdown_1 = require("lib/components/markdown");
var custom_breadcrumbs_1 = require("lib/components/custom-breadcrumbs");
var component_hero_1 = require("../../component-hero");
var component_block_1 = require("../../component-block");
// ----------------------------------------------------------------------
var defaultValue = "\n\n<h4>This is Heading 4</h4>\n<code>This is code</code>\n\n<pre><code class=\"language-javascript\">for (var i=1; i &#x3C;= 20; i++) {\n  if (i % 15 == 0)\n    return \"FizzBuzz\"\n  else if (i % 3 == 0)\n    return \"Fizz\"\n  else if (i % 5 == 0)\n    return \"Buzz\"\n  else\n    return i\n  }</code></pre>\n";
function EditorView() {
    var _a = (0, react_1.useState)(true), checked = _a[0], setChecked = _a[1];
    var _b = (0, react_1.useState)(defaultValue), content = _b[0], setContent = _b[1];
    var handleChange = function (event) {
        setChecked(event.target.checked);
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(component_hero_1.ComponentHero, { children: (0, jsx_runtime_1.jsx)(custom_breadcrumbs_1.CustomBreadcrumbs, { heading: "Editor", links: [{ name: 'Components', href: paths_1.paths.docs.components.root }, { name: 'Editor' }], moreLink: ['https://tiptap.dev/docs/editor/introduction'] }) }), (0, jsx_runtime_1.jsxs)(component_block_1.ComponentContainer, { maxWidth: false, sx: {
                    rowGap: 5,
                    columnGap: 3,
                    display: 'grid',
                    gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' },
                }, children: [(0, jsx_runtime_1.jsxs)(Card_1.default, { sx: {
                            p: 3,
                            gap: 2,
                            flexShrink: 0,
                            display: 'flex',
                            flexDirection: 'column',
                        }, children: [(0, jsx_runtime_1.jsx)(FormControlLabel_1.default, { control: (0, jsx_runtime_1.jsx)(Switch_1.default, { name: "fullItem", checked: checked, onChange: handleChange }), label: "Full item", labelPlacement: "start", sx: { ml: 'auto' } }), (0, jsx_runtime_1.jsx)(editor_1.Editor, { fullItem: checked, value: content, onChange: function (value) { return setContent(value); }, sx: { maxHeight: 720 } })] }), (0, jsx_runtime_1.jsxs)(Stack_1.default, { spacing: 1, sx: {
                            p: 3,
                            borderRadius: 2,
                            overflowX: 'auto',
                            bgcolor: 'background.neutral',
                        }, children: [(0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "h6", children: "Preview" }), (0, jsx_runtime_1.jsx)(markdown_1.Markdown, { children: content })] })] })] }));
}

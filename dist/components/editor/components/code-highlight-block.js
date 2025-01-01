"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeHighlightBlock = CodeHighlightBlock;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@tiptap/react");
require("./code-highlight-block.css");
var classes_1 = require("../classes");
// ----------------------------------------------------------------------
function CodeHighlightBlock(_a) {
    var defaultLanguage = _a.node.attrs.language, extension = _a.extension, updateAttributes = _a.updateAttributes;
    return ((0, jsx_runtime_1.jsxs)(react_1.NodeViewWrapper, { className: classes_1.editorClasses.content.codeBlock, children: [(0, jsx_runtime_1.jsxs)("select", { name: "language", contentEditable: false, defaultValue: defaultLanguage, onChange: function (event) { return updateAttributes({ language: event.target.value }); }, className: classes_1.editorClasses.content.langSelect, children: [(0, jsx_runtime_1.jsx)("option", { value: "null", children: "auto" }), (0, jsx_runtime_1.jsx)("option", { disabled: true, children: "\u2014" }), extension.options.lowlight.listLanguages().map(function (lang) { return ((0, jsx_runtime_1.jsx)("option", { value: lang, children: lang }, lang)); })] }), (0, jsx_runtime_1.jsx)("pre", { children: (0, jsx_runtime_1.jsx)(react_1.NodeViewContent, { as: "code" }) })] }));
}

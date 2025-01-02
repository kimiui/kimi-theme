import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NodeViewContent, NodeViewWrapper } from '@tiptap/react';
import './code-highlight-block.css';
import { editorClasses } from '../classes';
// ----------------------------------------------------------------------
export function CodeHighlightBlock({ node: { attrs: { language: defaultLanguage }, }, extension, updateAttributes, }) {
    return (_jsxs(NodeViewWrapper, { className: editorClasses.content.codeBlock, children: [_jsxs("select", { name: "language", contentEditable: false, defaultValue: defaultLanguage, onChange: (event) => updateAttributes({ language: event.target.value }), className: editorClasses.content.langSelect, children: [_jsx("option", { value: "null", children: "auto" }), _jsx("option", { disabled: true, children: "\u2014" }), extension.options.lowlight.listLanguages().map((lang) => (_jsx("option", { value: lang, children: lang }, lang)))] }), _jsx("pre", { children: _jsx(NodeViewContent, { as: "code" }) })] }));
}

'use client';
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Editor = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var Portal_1 = __importDefault(require("@mui/material/Portal"));
var Backdrop_1 = __importDefault(require("@mui/material/Backdrop"));
var lowlight_1 = require("lowlight");
var extension_link_1 = __importDefault(require("@tiptap/extension-link"));
var extension_image_1 = __importDefault(require("@tiptap/extension-image"));
var starter_kit_1 = __importDefault(require("@tiptap/starter-kit"));
var FormHelperText_1 = __importDefault(require("@mui/material/FormHelperText"));
var extension_text_align_1 = __importDefault(require("@tiptap/extension-text-align"));
var extension_placeholder_1 = __importDefault(require("@tiptap/extension-placeholder"));
var react_1 = require("react");
var extension_code_block_lowlight_1 = __importDefault(require("@tiptap/extension-code-block-lowlight"));
var react_2 = require("@tiptap/react");
var toolbar_1 = require("./toolbar");
var styles_1 = require("./styles");
var classes_1 = require("./classes");
var code_highlight_block_1 = require("./components/code-highlight-block");
// ----------------------------------------------------------------------
exports.Editor = (0, react_1.forwardRef)(function (_a, ref) {
    var sx = _a.sx, error = _a.error, onChange = _a.onChange, slotProps = _a.slotProps, helperText = _a.helperText, resetValue = _a.resetValue, _b = _a.editable, editable = _b === void 0 ? true : _b, _c = _a.fullItem, fullItem = _c === void 0 ? false : _c, _d = _a.value, content = _d === void 0 ? '' : _d, _e = _a.placeholder, placeholder = _e === void 0 ? 'Write something awesome...' : _e, other = __rest(_a, ["sx", "error", "onChange", "slotProps", "helperText", "resetValue", "editable", "fullItem", "value", "placeholder"]);
    var _f = (0, react_1.useState)(false), fullScreen = _f[0], setFullScreen = _f[1];
    var handleToggleFullScreen = (0, react_1.useCallback)(function () {
        setFullScreen(function (prev) { return !prev; });
    }, []);
    var lowlight = (0, lowlight_1.createLowlight)(lowlight_1.common);
    var editor = (0, react_2.useEditor)(__assign({ content: content, editable: editable, extensions: [
            starter_kit_1.default.configure({
                codeBlock: false,
                code: { HTMLAttributes: { class: classes_1.editorClasses.content.codeInline } },
                heading: { HTMLAttributes: { class: classes_1.editorClasses.content.heading } },
                horizontalRule: {
                    HTMLAttributes: { class: classes_1.editorClasses.content.hr },
                },
                listItem: {
                    HTMLAttributes: { class: classes_1.editorClasses.content.listItem },
                },
                blockquote: {
                    HTMLAttributes: { class: classes_1.editorClasses.content.blockquote },
                },
                bulletList: {
                    HTMLAttributes: { class: classes_1.editorClasses.content.bulletList },
                },
                orderedList: {
                    HTMLAttributes: { class: classes_1.editorClasses.content.orderedList },
                },
            }),
            extension_placeholder_1.default.configure({
                placeholder: placeholder,
                emptyEditorClass: classes_1.editorClasses.content.placeholder,
            }),
            extension_image_1.default.configure({
                HTMLAttributes: { class: classes_1.editorClasses.content.image },
            }),
            extension_text_align_1.default.configure({ types: ['heading', 'paragraph'] }),
            extension_link_1.default.configure({
                autolink: true,
                openOnClick: false,
                HTMLAttributes: { class: classes_1.editorClasses.content.link },
            }),
            extension_code_block_lowlight_1.default.extend({
                addNodeView: function () {
                    return (0, react_2.ReactNodeViewRenderer)(code_highlight_block_1.CodeHighlightBlock);
                },
            }).configure({
                lowlight: lowlight,
                HTMLAttributes: { class: classes_1.editorClasses.content.codeBlock },
            }),
        ], onUpdate: function (_a) {
            var _editor = _a.editor;
            var html = _editor.getHTML();
            onChange === null || onChange === void 0 ? void 0 : onChange(html);
        } }, other));
    (0, react_1.useEffect)(function () {
        var timer = setTimeout(function () {
            if ((editor === null || editor === void 0 ? void 0 : editor.isEmpty) && content !== '<p></p>') {
                editor.commands.setContent(content);
            }
        }, 100);
        return function () { return clearTimeout(timer); };
    }, [content, editor]);
    (0, react_1.useEffect)(function () {
        if (resetValue && !content) {
            editor === null || editor === void 0 ? void 0 : editor.commands.clearContent();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [content]);
    (0, react_1.useEffect)(function () {
        if (fullScreen) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = '';
        }
    }, [fullScreen]);
    return ((0, jsx_runtime_1.jsxs)(Portal_1.default, { disablePortal: !fullScreen, children: [fullScreen && (0, jsx_runtime_1.jsx)(Backdrop_1.default, { open: true, sx: { zIndex: function (theme) { return theme.zIndex.modal - 1; } } }), (0, jsx_runtime_1.jsxs)(Stack_1.default, { sx: __assign(__assign({}, (!editable && { cursor: 'not-allowed' })), slotProps === null || slotProps === void 0 ? void 0 : slotProps.wrap), children: [(0, jsx_runtime_1.jsxs)(styles_1.StyledRoot, { error: !!error, disabled: !editable, fullScreen: fullScreen, className: classes_1.editorClasses.root, sx: sx, children: [(0, jsx_runtime_1.jsx)(toolbar_1.Toolbar, { editor: editor, fullItem: fullItem, fullScreen: fullScreen, onToggleFullScreen: handleToggleFullScreen }), (0, jsx_runtime_1.jsx)(react_2.EditorContent, { ref: ref, spellCheck: "false", autoComplete: "off", autoCapitalize: "off", editor: editor, className: classes_1.editorClasses.content.root })] }), helperText && ((0, jsx_runtime_1.jsx)(FormHelperText_1.default, { error: !!error, sx: { px: 2 }, children: helperText }))] })] }));
});

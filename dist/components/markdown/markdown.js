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
exports.Markdown = Markdown;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var remark_gfm_1 = __importDefault(require("remark-gfm"));
var rehype_raw_1 = __importDefault(require("rehype-raw"));
var Link_1 = __importDefault(require("@mui/material/Link"));
var rehype_highlight_1 = __importDefault(require("rehype-highlight"));
var utils_1 = require("lib/utils");
var image_1 = require("lib/components/image");
require("./code-highlight-block.css");
var styles_1 = require("./styles");
var classes_1 = require("./classes");
var html_to_markdown_1 = require("./html-to-markdown");
// ----------------------------------------------------------------------
function Markdown(_a) {
    var children = _a.children, sx = _a.sx, other = __rest(_a, ["children", "sx"]);
    var content = (0, react_1.useMemo)(function () {
        if ((0, html_to_markdown_1.isMarkdownContent)("".concat(children))) {
            return children;
        }
        return (0, html_to_markdown_1.htmlToMarkdown)("".concat(children).trim());
    }, [children]);
    return ((0, jsx_runtime_1.jsx)(styles_1.StyledRoot, __assign({ components: components, rehypePlugins: rehypePlugins, 
        /* base64-encoded images
         * https://github.com/remarkjs/react-markdown/issues/774
         * urlTransform={(value: string) => value}
         */
        className: classes_1.markdownClasses.root, sx: sx }, other, { children: content })));
}
var rehypePlugins = [rehype_raw_1.default, rehype_highlight_1.default, [remark_gfm_1.default, { singleTilde: false }]];
var components = function (RouterLink) { return ({
    img: function (_a) {
        var node = _a.node, other = __rest(_a, ["node"]);
        return ((0, jsx_runtime_1.jsx)(image_1.Image, __assign({ ratio: "16/9", className: classes_1.markdownClasses.content.image, sx: { borderRadius: 2 } }, other)));
    },
    a: function (_a) {
        var href = _a.href, children = _a.children, node = _a.node, other = __rest(_a, ["href", "children", "node"]);
        var linkProps = (0, utils_1.isExternalLink)(href)
            ? { target: '_blank', rel: 'noopener' }
            : { component: RouterLink };
        return ((0, jsx_runtime_1.jsx)(Link_1.default, __assign({}, linkProps, { href: href, className: classes_1.markdownClasses.content.link }, other, { children: children })));
    },
    pre: function (_a) {
        var children = _a.children;
        return ((0, jsx_runtime_1.jsx)("div", { className: classes_1.markdownClasses.content.codeBlock, children: (0, jsx_runtime_1.jsx)("pre", { children: children }) }));
    },
    code: function (_a) {
        var className = _a.className, children = _a.children, node = _a.node, other = __rest(_a, ["className", "children", "node"]);
        var language = /language-(\w+)/.exec(className || '');
        return language ? ((0, jsx_runtime_1.jsx)("code", __assign({}, other, { className: className, children: children }))) : ((0, jsx_runtime_1.jsx)("code", __assign({}, other, { className: classes_1.markdownClasses.content.codeInline, children: children })));
    },
}); };

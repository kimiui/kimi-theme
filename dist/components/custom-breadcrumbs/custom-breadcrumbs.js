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
exports.CustomBreadcrumbs = CustomBreadcrumbs;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Link_1 = __importDefault(require("@mui/material/Link"));
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var Breadcrumbs_1 = __importDefault(require("@mui/material/Breadcrumbs"));
var breadcrumb_link_1 = require("./breadcrumb-link");
// ----------------------------------------------------------------------
function CustomBreadcrumbs(_a) {
    var links = _a.links, action = _a.action, heading = _a.heading, moreLink = _a.moreLink, activeLast = _a.activeLast, slotProps = _a.slotProps, sx = _a.sx, other = __rest(_a, ["links", "action", "heading", "moreLink", "activeLast", "slotProps", "sx"]);
    var lastLink = links[links.length - 1].name;
    var renderHeading = ((0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "h4", sx: __assign({ mb: 2 }, slotProps === null || slotProps === void 0 ? void 0 : slotProps.heading), children: heading }));
    var renderLinks = ((0, jsx_runtime_1.jsx)(Breadcrumbs_1.default, __assign({ separator: (0, jsx_runtime_1.jsx)(Separator, {}), sx: slotProps === null || slotProps === void 0 ? void 0 : slotProps.breadcrumbs }, other, { children: links.map(function (link, index) {
            var _a;
            return ((0, jsx_runtime_1.jsx)(breadcrumb_link_1.BreadcrumbsLink, { link: link, activeLast: activeLast, disabled: link.name === lastLink }, (_a = link.name) !== null && _a !== void 0 ? _a : index));
        }) })));
    var renderAction = (0, jsx_runtime_1.jsxs)(Box_1.default, { sx: __assign({ flexShrink: 0 }, slotProps === null || slotProps === void 0 ? void 0 : slotProps.action), children: [" ", action, " "] });
    var renderMoreLink = ((0, jsx_runtime_1.jsx)(Box_1.default, { component: "ul", sx: { p: 0 }, children: moreLink === null || moreLink === void 0 ? void 0 : moreLink.map(function (href) { return ((0, jsx_runtime_1.jsx)(Box_1.default, { component: "li", sx: { display: 'flex' }, children: (0, jsx_runtime_1.jsx)(Link_1.default, { href: href, variant: "body2", target: "_blank", rel: "noopener", sx: slotProps === null || slotProps === void 0 ? void 0 : slotProps.moreLink, children: href }) }, href)); }) }));
    return ((0, jsx_runtime_1.jsxs)(Stack_1.default, { spacing: 2, sx: sx, children: [(0, jsx_runtime_1.jsxs)(Stack_1.default, { direction: "row", alignItems: "center", children: [(0, jsx_runtime_1.jsxs)(Box_1.default, { sx: { flexGrow: 1 }, children: [heading && renderHeading, !!links.length && renderLinks] }), action && renderAction] }), !!moreLink && renderMoreLink] }));
}
// ----------------------------------------------------------------------
function Separator() {
    return ((0, jsx_runtime_1.jsx)(Box_1.default, { component: "span", sx: {
            width: 4,
            height: 4,
            borderRadius: '50%',
            bgcolor: 'text.disabled',
        } }));
}

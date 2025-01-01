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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavSectionMini = NavSectionMini;
var jsx_runtime_1 = require("react/jsx-runtime");
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var styles_1 = require("@mui/material/styles");
var nav_list_1 = require("./nav-list");
var styles_2 = require("../styles");
var classes_1 = require("../classes");
var css_vars_1 = require("../css-vars");
// ----------------------------------------------------------------------
function NavSectionMini(_a) {
    var sx = _a.sx, data = _a.data, render = _a.render, slotProps = _a.slotProps, enabledRootRedirect = _a.enabledRootRedirect, overridesVars = _a.cssVars;
    var theme = (0, styles_1.useTheme)();
    var cssVars = __assign(__assign({}, css_vars_1.navSectionCssVars.mini(theme)), overridesVars);
    return ((0, jsx_runtime_1.jsx)(Stack_1.default, { component: "nav", className: classes_1.navSectionClasses.mini.root, sx: __assign(__assign({}, cssVars), sx), children: (0, jsx_runtime_1.jsx)(styles_2.NavUl, { sx: { flex: '1 1 auto', gap: 'var(--nav-item-gap)' }, children: data.map(function (group) {
                var _a;
                return ((0, jsx_runtime_1.jsx)(Group, { render: render, cssVars: cssVars, items: group.items, slotProps: slotProps, enabledRootRedirect: enabledRootRedirect }, (_a = group.subheader) !== null && _a !== void 0 ? _a : group.items[0].title));
            }) }) }));
}
// ----------------------------------------------------------------------
function Group(_a) {
    var items = _a.items, render = _a.render, slotProps = _a.slotProps, enabledRootRedirect = _a.enabledRootRedirect, cssVars = _a.cssVars;
    return ((0, jsx_runtime_1.jsx)(styles_2.NavLi, { children: (0, jsx_runtime_1.jsx)(styles_2.NavUl, { sx: { gap: 'var(--nav-item-gap)' }, children: items.map(function (list) { return ((0, jsx_runtime_1.jsx)(nav_list_1.NavList, { depth: 1, data: list, render: render, cssVars: cssVars, slotProps: slotProps, enabledRootRedirect: enabledRootRedirect }, list.title)); }) }) }));
}

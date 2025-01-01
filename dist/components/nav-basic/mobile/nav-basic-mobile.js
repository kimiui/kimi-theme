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
exports.NavBasicMobile = NavBasicMobile;
var jsx_runtime_1 = require("react/jsx-runtime");
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var styles_1 = require("@mui/material/styles");
var nav_list_1 = require("./nav-list");
var nav_section_1 = require("../../nav-section");
var classes_1 = require("../classes");
var css_vars_1 = require("../css-vars");
// ----------------------------------------------------------------------
function NavBasicMobile(_a) {
    var sx = _a.sx, data = _a.data, render = _a.render, slotProps = _a.slotProps, enabledRootRedirect = _a.enabledRootRedirect, overridesVars = _a.cssVars, other = __rest(_a, ["sx", "data", "render", "slotProps", "enabledRootRedirect", "cssVars"]);
    var theme = (0, styles_1.useTheme)();
    var cssVars = __assign(__assign({}, css_vars_1.navBasicCssVars.mobile(theme)), overridesVars);
    return ((0, jsx_runtime_1.jsx)(Stack_1.default, __assign({ component: "nav", className: classes_1.navBasicClasses.mobile.root, sx: __assign(__assign({}, cssVars), sx) }, other, { children: (0, jsx_runtime_1.jsx)(nav_section_1.NavUl, { sx: { flex: '1 1 auto', gap: 'var(--nav-item-gap)' }, children: data.map(function (list) { return ((0, jsx_runtime_1.jsx)(nav_list_1.NavList, { depth: 1, data: list, render: render, slotProps: slotProps, enabledRootRedirect: enabledRootRedirect }, list.title)); }) }) })));
}

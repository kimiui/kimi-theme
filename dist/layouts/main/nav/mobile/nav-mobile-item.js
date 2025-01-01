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
exports.NavItem = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Box_1 = __importDefault(require("@mui/material/Box"));
var styles_1 = require("@mui/material/styles");
var ButtonBase_1 = __importDefault(require("@mui/material/ButtonBase"));
var styles_2 = require("../../../../theme/styles");
var iconify_1 = require("../../../../components/iconify");
var hooks_1 = require("../../../../components/nav-section/hooks");
// ----------------------------------------------------------------------
exports.NavItem = (0, react_1.forwardRef)(function (_a, ref) {
    var title = _a.title, path = _a.path, icon = _a.icon, open = _a.open, active = _a.active, hasChild = _a.hasChild, externalLink = _a.externalLink, other = __rest(_a, ["title", "path", "icon", "open", "active", "hasChild", "externalLink"]);
    var navItem = (0, hooks_1.useNavItem)({
        path: path,
        icon: icon,
        hasChild: hasChild,
        externalLink: externalLink,
    });
    return ((0, jsx_runtime_1.jsxs)(StyledNavItem, __assign({ ref: ref, "aria-label": title, open: open, active: active }, navItem.baseProps, other, { children: [navItem.renderIcon, (0, jsx_runtime_1.jsx)(Box_1.default, { component: "span", sx: { flex: '1 1 auto' }, children: title }), hasChild && ((0, jsx_runtime_1.jsx)(iconify_1.Iconify, { width: 16, icon: open ? 'eva:arrow-ios-downward-fill' : 'eva:arrow-ios-forward-fill' }))] })));
});
// ----------------------------------------------------------------------
var StyledNavItem = (0, styles_1.styled)(ButtonBase_1.default, {
    shouldForwardProp: function (prop) { return prop !== 'active' && prop !== 'open'; },
})(function (_a) {
    var active = _a.active, open = _a.open, theme = _a.theme;
    return (__assign(__assign(__assign(__assign({}, theme.typography.body2), { gap: 16, height: 48, width: '100%', paddingLeft: theme.spacing(2.5), paddingRight: theme.spacing(1.5), color: theme.vars.palette.text.secondary, fontWeight: theme.typography.fontWeightMedium }), (active && {
        color: theme.vars.palette.primary.main,
        fontWeight: theme.typography.fontWeightSemiBold,
        backgroundColor: (0, styles_2.varAlpha)(theme.vars.palette.primary.mainChannel, 0.08),
        '&:hover': { backgroundColor: (0, styles_2.varAlpha)(theme.vars.palette.primary.mainChannel, 0.16) },
    })), (open && {
        color: theme.vars.palette.text.primary,
        backgroundColor: theme.vars.palette.action.hover,
    })));
});

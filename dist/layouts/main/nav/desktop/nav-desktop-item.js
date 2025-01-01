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
exports.NavItemDashboard = NavItemDashboard;
var jsx_runtime_1 = require("react/jsx-runtime");
var framer_motion_1 = require("framer-motion");
var react_1 = require("react");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Link_1 = __importDefault(require("@mui/material/Link"));
var routes_react_1 = require("routes-react");
var styles_1 = require("@mui/material/styles");
var ButtonBase_1 = __importDefault(require("@mui/material/ButtonBase"));
var CardActionArea_1 = __importDefault(require("@mui/material/CardActionArea"));
var iconify_1 = require("../../../../components/iconify");
var hooks_1 = require("../../../../components/nav-section/hooks");
// ----------------------------------------------------------------------
exports.NavItem = (0, react_1.forwardRef)(function (_a, ref) {
    var title = _a.title, path = _a.path, open = _a.open, active = _a.active, hasChild = _a.hasChild, externalLink = _a.externalLink, subItem = _a.subItem, other = __rest(_a, ["title", "path", "open", "active", "hasChild", "externalLink", "subItem"]);
    var navItem = (0, hooks_1.useNavItem)({ path: path, hasChild: hasChild, externalLink: externalLink });
    return ((0, jsx_runtime_1.jsxs)(StyledNavItem, __assign({ disableRipple: true, ref: ref, "aria-label": title, open: open, active: active, subItem: subItem }, navItem.baseProps, other, { children: [title, hasChild && (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { width: 16, icon: "eva:arrow-ios-downward-fill", sx: { ml: 0.75 } })] })));
});
// ----------------------------------------------------------------------
var StyledNavItem = (0, styles_1.styled)(ButtonBase_1.default, {
    shouldForwardProp: function (prop) { return prop !== 'active' && prop !== 'open' && prop !== 'subItem'; },
})(function (_a) {
    var active = _a.active, open = _a.open, subItem = _a.subItem, theme = _a.theme;
    var rootItem = !subItem;
    var baseStyles = {
        item: __assign(__assign({}, theme.typography.body2), { fontWeight: theme.typography.fontWeightMedium, transition: theme.transitions.create(['all'], {
                duration: theme.transitions.duration.shorter,
            }) }),
        dot: __assign({ width: 6, height: 6, left: -12, opacity: 0.64, content: '""', borderRadius: '50%', position: 'absolute', backgroundColor: theme.vars.palette.text.disabled }, (active && {
            opacity: 1,
            backgroundColor: theme.vars.palette.primary.main,
        })),
    };
    return __assign(__assign({}, (rootItem && __assign(__assign(__assign(__assign({}, baseStyles.item), { height: '100%', '&:hover': { opacity: 0.64, '&::before': baseStyles.dot } }), (active && {
        color: theme.vars.palette.primary.main,
        fontWeight: theme.typography.fontWeightSemiBold,
        '&::before': baseStyles.dot,
    })), (open && { opacity: 0.64, '&::before': baseStyles.dot })))), (subItem && __assign(__assign(__assign({}, baseStyles.item), { justifyContent: 'flex-start', color: theme.vars.palette.text.secondary, fontSize: theme.typography.pxToRem(13), '&:hover': {
            color: theme.vars.palette.text.primary,
            '&::before': baseStyles.dot,
        } }), (active && {
        color: theme.vars.palette.text.primary,
        fontWeight: theme.typography.fontWeightSemiBold,
        '&::before': baseStyles.dot,
    }))));
});
function NavItemDashboard(_a) {
    var path = _a.path, sx = _a.sx, other = __rest(_a, ["path", "sx"]);
    return ((0, jsx_runtime_1.jsx)(Link_1.default, __assign({ component: routes_react_1.RouterLink, href: path, sx: { width: 1, height: 1 } }, other, { children: (0, jsx_runtime_1.jsx)(CardActionArea_1.default, { sx: __assign({ height: 1, minHeight: 360, borderRadius: 1.5, color: 'text.disabled', bgcolor: 'background.neutral', px: { md: 3, lg: 10 } }, sx), children: (0, jsx_runtime_1.jsx)(framer_motion_1.m.div, { whileTap: "tap", whileHover: "hover", variants: { hover: { scale: 1.02 }, tap: { scale: 0.98 } }, children: (0, jsx_runtime_1.jsx)(Box_1.default, { component: "img", alt: "illustration-dashboard", src: "/assets/illustrations/illustration-dashboard.webp", sx: {
                        width: 640,
                        objectFit: 'cover',
                        aspectRatio: '4/3',
                    } }) }) }) })));
}

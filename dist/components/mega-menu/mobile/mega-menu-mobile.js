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
exports.MegaMenuMobile = MegaMenuMobile;
var jsx_runtime_1 = require("react/jsx-runtime");
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var Drawer_1 = __importDefault(require("@mui/material/Drawer"));
var routes_react_1 = require("routes-react");
var SvgIcon_1 = __importDefault(require("@mui/material/SvgIcon"));
var styles_1 = require("@mui/material/styles");
var IconButton_1 = __importDefault(require("@mui/material/IconButton"));
var react_1 = require("react");
var scrollbar_1 = require("../../../components/scrollbar");
var nav_list_1 = require("./nav-list");
var nav_section_1 = require("../../nav-section");
var classes_1 = require("../classes");
var css_vars_1 = require("../css-vars");
// ----------------------------------------------------------------------
function MegaMenuMobile(_a) {
    var sx = _a.sx, data = _a.data, slots = _a.slots, render = _a.render, slotProps = _a.slotProps, overridesVars = _a.cssVars, other = __rest(_a, ["sx", "data", "slots", "render", "slotProps", "cssVars"]);
    var theme = (0, styles_1.useTheme)();
    var pathname = (0, routes_react_1.usePathname)();
    var _b = (0, react_1.useState)(false), openDrawer = _b[0], setOpenDrawer = _b[1];
    var cssVars = __assign(__assign({}, css_vars_1.megaMenuCssVars.mobile(theme)), overridesVars);
    var handleOpenDrawer = (0, react_1.useCallback)(function () {
        setOpenDrawer(function (prev) { return !prev; });
    }, []);
    var handleCloseDrawer = (0, react_1.useCallback)(function () {
        setOpenDrawer(false);
    }, []);
    (0, react_1.useEffect)(function () {
        if (openDrawer) {
            handleCloseDrawer();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);
    var renderButton = (slots === null || slots === void 0 ? void 0 : slots.button) ? ((0, react_1.cloneElement)(slots.button, { onClick: handleOpenDrawer })) : ((0, jsx_runtime_1.jsx)(IconButton_1.default, { onClick: handleOpenDrawer, children: (0, jsx_runtime_1.jsxs)(SvgIcon_1.default, { children: [(0, jsx_runtime_1.jsx)("path", { opacity: "0.32", d: "M15.7798 4.5H5.2202C4.27169 4.5 3.5 5.06057 3.5 5.75042C3.5 6.43943 4.27169 7 5.2202 7H15.7798C16.7283 7 17.5 6.43943 17.5 5.75042C17.5 5.06054 16.7283 4.5 15.7798 4.5Z", fill: "currentColor" }), (0, jsx_runtime_1.jsx)("path", { d: "M18.7798 10.75H8.2202C7.27169 10.75 6.5 11.3106 6.5 12.0004C6.5 12.6894 7.27169 13.25 8.2202 13.25H18.7798C19.7283 13.25 20.5 12.6894 20.5 12.0004C20.5 11.3105 19.7283 10.75 18.7798 10.75Z", fill: "currentColor" }), (0, jsx_runtime_1.jsx)("path", { d: "M15.7798 17H5.2202C4.27169 17 3.5 17.5606 3.5 18.2504C3.5 18.9394 4.27169 19.5 5.2202 19.5H15.7798C16.7283 19.5 17.5 18.9394 17.5 18.2504C17.5 17.5606 16.7283 17 15.7798 17Z", fill: "currentColor" })] }) }));
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [renderButton, (0, jsx_runtime_1.jsxs)(Drawer_1.default, { open: openDrawer, onClose: handleCloseDrawer, PaperProps: {
                    sx: {
                        display: 'flex',
                        flexDirection: 'column',
                        width: 'var(--nav-width)',
                    },
                }, sx: __assign({}, cssVars), children: [slots === null || slots === void 0 ? void 0 : slots.topArea, (0, jsx_runtime_1.jsx)(scrollbar_1.Scrollbar, { fillContent: true, children: (0, jsx_runtime_1.jsx)(Stack_1.default, __assign({ component: "nav", className: classes_1.megaMenuClasses.mobile.root, sx: sx }, other, { children: (0, jsx_runtime_1.jsx)(nav_section_1.NavUl, { sx: { gap: 'var(--nav-item-gap)' }, children: data.map(function (list) { return ((0, jsx_runtime_1.jsx)(nav_list_1.NavList, { data: list, render: render, cssVars: cssVars, slotProps: slotProps }, list.title)); }) }) })) }), slots === null || slots === void 0 ? void 0 : slots.bottomArea] })] }));
}

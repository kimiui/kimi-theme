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
exports.NavList = NavList;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Fade_1 = __importDefault(require("@mui/material/Fade"));
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var Portal_1 = __importDefault(require("@mui/material/Portal"));
var routes_react_1 = require("routes-react");
var styles_1 = require("@mui/material/styles");
var ListSubheader_1 = __importDefault(require("@mui/material/ListSubheader"));
var react_1 = require("react");
var styles_2 = require("../../../../theme/styles");
var useActiveLink_1 = require("../../../../hooks/useActiveLink");
var nav_section_1 = require("../../../../components/nav-section");
var utils_1 = require("../../../../utils");
var nav_desktop_item_1 = require("./nav-desktop-item");
// ----------------------------------------------------------------------
function NavList(_a) {
    var data = _a.data;
    var theme = (0, styles_1.useTheme)();
    var navItemRef = (0, react_1.useRef)(null);
    var pathname = (0, routes_react_1.usePathname)();
    var _b = (0, react_1.useState)(false), openMenu = _b[0], setOpenMenu = _b[1];
    var active = (0, useActiveLink_1.useActiveLink)(data.path, !!data.children);
    var _c = (0, react_1.useState)({
        top: 0,
        height: 0,
    }), clientRect = _c[0], setClientRect = _c[1];
    (0, react_1.useEffect)(function () {
        if (openMenu) {
            handleCloseMenu();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);
    var handleOpenMenu = (0, react_1.useCallback)(function () {
        if (data.children) {
            setOpenMenu(true);
        }
    }, [data.children]);
    var handleCloseMenu = (0, react_1.useCallback)(function () {
        setOpenMenu(false);
    }, []);
    var renderNavItem = ((0, jsx_runtime_1.jsx)(nav_desktop_item_1.NavItem, { ref: navItemRef, 
        // slots
        title: data.title, path: data.path, 
        // state
        active: active, hasChild: !!data.children, open: data.children && !!openMenu, externalLink: (0, utils_1.isExternalLink)(data.path), 
        // action
        onMouseEnter: handleOpenMenu, onMouseLeave: handleCloseMenu }));
    var handleGetClientRect = (0, react_1.useCallback)(function () {
        var element = navItemRef.current;
        if (element) {
            var rect = element.getBoundingClientRect();
            setClientRect({ top: rect.top, height: rect.height });
        }
    }, []);
    (0, react_1.useEffect)(function () {
        handleGetClientRect();
        window.addEventListener('scroll', handleGetClientRect);
        return function () {
            window.removeEventListener('scroll', handleGetClientRect);
        };
    }, [handleGetClientRect]);
    if (data.children) {
        return ((0, jsx_runtime_1.jsxs)(nav_section_1.NavLi, { sx: { height: 1 }, children: [renderNavItem, openMenu && ((0, jsx_runtime_1.jsx)(Portal_1.default, { children: (0, jsx_runtime_1.jsx)(Fade_1.default, { in: true, children: (0, jsx_runtime_1.jsx)(Box_1.default, { onMouseEnter: handleOpenMenu, onMouseLeave: handleCloseMenu, sx: {
                                pt: 0.5,
                                left: 0,
                                right: 0,
                                mx: 'auto',
                                position: 'fixed',
                                zIndex: theme.zIndex.modal,
                                maxWidth: theme.breakpoints.values.lg,
                                top: Math.round(clientRect.top + clientRect.height),
                            }, children: (0, jsx_runtime_1.jsx)(Box_1.default, { component: "nav", sx: __assign(__assign({}, (0, styles_2.paper)({ theme: theme, dropdown: true })), { borderRadius: 2, p: theme.spacing(5, 1, 1, 4) }), children: (0, jsx_runtime_1.jsx)(nav_section_1.NavUl, { sx: {
                                        gap: 3,
                                        width: 1,
                                        flexWrap: 'wrap',
                                        flexDirection: 'row',
                                    }, children: data.children.map(function (list) { return ((0, jsx_runtime_1.jsx)(NavSubList, { subheader: list.subheader, data: list.items }, list.subheader)); }) }) }) }) }) }))] }));
    }
    return (0, jsx_runtime_1.jsx)(nav_section_1.NavLi, { sx: { height: 1 }, children: renderNavItem });
}
// ----------------------------------------------------------------------
function NavSubList(_a) {
    var data = _a.data, subheader = _a.subheader, sx = _a.sx, other = __rest(_a, ["data", "subheader", "sx"]);
    var pathname = (0, routes_react_1.usePathname)();
    var isDashboard = subheader === 'Dashboard';
    return ((0, jsx_runtime_1.jsx)(Stack_1.default, __assign({ component: nav_section_1.NavLi, alignItems: "flex-start", sx: __assign(__assign({ flex: '1 1 auto' }, (isDashboard && { maxWidth: { md: 1 / 3, lg: 540 } })), sx) }, other, { children: (0, jsx_runtime_1.jsxs)(nav_section_1.NavUl, { children: [(0, jsx_runtime_1.jsx)(ListSubheader_1.default, { disableSticky: true, disableGutters: true, sx: { fontSize: 11, color: 'text.primary', typography: 'overline' }, children: subheader }), data.map(function (item) {
                    return isDashboard ? ((0, jsx_runtime_1.jsx)(nav_section_1.NavLi, { sx: { mt: 1.5 }, children: (0, jsx_runtime_1.jsx)(nav_desktop_item_1.NavItemDashboard, { path: item.path }) }, item.title)) : ((0, jsx_runtime_1.jsx)(nav_section_1.NavLi, { sx: { mt: 1.5 }, children: (0, jsx_runtime_1.jsx)(nav_desktop_item_1.NavItem, { subItem: true, title: item.title, path: item.path, active: item.path === (0, utils_1.removeLastSlash)(pathname) }) }, item.title));
                })] }) })));
}

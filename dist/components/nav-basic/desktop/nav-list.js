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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavList = NavList;
var jsx_runtime_1 = require("react/jsx-runtime");
var Paper_1 = __importDefault(require("@mui/material/Paper"));
var routes_react_1 = require("routes-react");
var Popover_1 = __importDefault(require("@mui/material/Popover"));
var styles_1 = require("@mui/material/styles");
var react_1 = require("react");
var styles_2 = require("../../../theme/styles");
var utils_1 = require("../../../utils");
var useActiveLink_1 = require("../../../hooks/useActiveLink");
var nav_item_1 = require("./nav-item");
var nav_section_1 = require("../../nav-section");
// ----------------------------------------------------------------------
function NavList(_a) {
    var data = _a.data, depth = _a.depth, render = _a.render, cssVars = _a.cssVars, slotProps = _a.slotProps, enabledRootRedirect = _a.enabledRootRedirect;
    var theme = (0, styles_1.useTheme)();
    var pathname = (0, routes_react_1.usePathname)();
    var navItemRef = (0, react_1.useRef)(null);
    var active = (0, useActiveLink_1.useActiveLink)(data.path, !!data.children);
    var _b = (0, react_1.useState)(false), openMenu = _b[0], setOpenMenu = _b[1];
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
    var renderNavItem = ((0, jsx_runtime_1.jsx)(nav_item_1.NavItem, { ref: navItemRef, render: render, 
        // slots
        path: data.path, icon: data.icon, info: data.info, title: data.title, caption: data.caption, 
        // state
        depth: depth, active: active, disabled: data.disabled, hasChild: !!data.children, open: data.children && openMenu, enabledRootRedirect: enabledRootRedirect, externalLink: (0, utils_1.isExternalLink)(data.path), 
        // styles
        slotProps: depth === 1 ? slotProps === null || slotProps === void 0 ? void 0 : slotProps.rootItem : slotProps === null || slotProps === void 0 ? void 0 : slotProps.subItem, 
        // actions
        onMouseEnter: handleOpenMenu, onMouseLeave: handleCloseMenu }));
    if (data.children) {
        return ((0, jsx_runtime_1.jsxs)(nav_section_1.NavLi, { disabled: data.disabled, children: [renderNavItem, (0, jsx_runtime_1.jsx)(Popover_1.default, { disableScrollLock: true, open: openMenu, anchorEl: navItemRef.current, anchorOrigin: depth === 1
                        ? { vertical: 'bottom', horizontal: 'left' }
                        : { vertical: 'center', horizontal: 'right' }, transformOrigin: depth === 1
                        ? { vertical: 'top', horizontal: 'left' }
                        : { vertical: 'center', horizontal: 'left' }, slotProps: {
                        paper: {
                            onMouseEnter: handleOpenMenu,
                            onMouseLeave: handleCloseMenu,
                            sx: __assign(__assign({ px: 0.75, overflow: 'unset', boxShadow: 'none', backdropFilter: 'none', background: 'transparent' }, (depth === 1 && { pt: 1, ml: -0.75 })), (openMenu && { pointerEvents: 'auto' })),
                        },
                    }, sx: __assign(__assign({}, cssVars), { pointerEvents: 'none' }), children: (0, jsx_runtime_1.jsx)(Paper_1.default, { className: nav_section_1.navSectionClasses.paper, sx: __assign(__assign({ minWidth: 180 }, (0, styles_2.paper)({ theme: theme, dropdown: true })), slotProps === null || slotProps === void 0 ? void 0 : slotProps.paper), children: (0, jsx_runtime_1.jsx)(NavSubList, { data: data.children, depth: depth, render: render, cssVars: cssVars, slotProps: slotProps, enabledRootRedirect: enabledRootRedirect }) }) })] }));
    }
    return (0, jsx_runtime_1.jsx)(nav_section_1.NavLi, { disabled: data.disabled, children: renderNavItem });
}
// ----------------------------------------------------------------------
function NavSubList(_a) {
    var data = _a.data, depth = _a.depth, render = _a.render, cssVars = _a.cssVars, slotProps = _a.slotProps, enabledRootRedirect = _a.enabledRootRedirect;
    return ((0, jsx_runtime_1.jsx)(nav_section_1.NavUl, { sx: { gap: 0.5 }, children: data.map(function (list) { return ((0, jsx_runtime_1.jsx)(NavList, { data: list, render: render, depth: depth + 1, cssVars: cssVars, slotProps: slotProps, enabledRootRedirect: enabledRootRedirect }, list.title)); }) }));
}

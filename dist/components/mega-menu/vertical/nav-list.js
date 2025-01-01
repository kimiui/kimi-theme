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
var hooks_1 = require("lib/hooks");
var utils_1 = require("lib/utils");
var styles_2 = require("lib/theme/styles");
var nav_item_1 = require("./nav-item");
var nav_section_1 = require("../../nav-section");
var classes_1 = require("../classes");
var nav_content_1 = require("../components/nav-content");
// ----------------------------------------------------------------------
function NavList(_a) {
    var _b;
    var data = _a.data, render = _a.render, slotProps = _a.slotProps, cssVars = _a.cssVars, enabledRootRedirect = _a.enabledRootRedirect;
    var theme = (0, styles_1.useTheme)();
    var pathname = (0, routes_react_1.usePathname)();
    var _c = (0, react_1.useState)(false), openMenu = _c[0], setOpenMenu = _c[1];
    var navItemRef = (0, react_1.useRef)(null);
    var active = (0, hooks_1.useActiveLink)(data.path, !!data.children);
    var _d = (0, react_1.useState)({
        x: 0,
        top: 0,
        width: 0,
        height: 0,
    }), clientRect = _d[0], setClientRect = _d[1];
    var singleList = ((_b = data.children) === null || _b === void 0 ? void 0 : _b.length) === 1;
    var multiList = !singleList;
    (0, react_1.useEffect)(function () {
        if (openMenu) {
            handleCloseMenu();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);
    var handleGetClientRect = (0, react_1.useCallback)(function () {
        var element = document.getElementsByClassName(classes_1.megaMenuClasses.vertical.root);
        if (element) {
            var rect = element[0].getBoundingClientRect();
            setClientRect({
                top: rect.top,
                width: rect.width,
                height: rect.height,
                x: rect.x,
            });
        }
    }, []);
    (0, react_1.useEffect)(function () {
        handleGetClientRect();
        window.addEventListener('scroll', handleGetClientRect);
        return function () {
            window.removeEventListener('scroll', handleGetClientRect);
        };
    }, [handleGetClientRect]);
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
        path: data.path, icon: data.icon, info: data.info, title: data.title, 
        // state
        active: active, disabled: data.disabled, hasChild: !!data.children, open: data.children && !!openMenu, externalLink: (0, utils_1.isExternalLink)(data.path), enabledRootRedirect: enabledRootRedirect, 
        // styles
        slotProps: slotProps === null || slotProps === void 0 ? void 0 : slotProps.rootItem, 
        // actions
        onMouseEnter: handleOpenMenu, onMouseLeave: handleCloseMenu }));
    if (data.children) {
        return ((0, jsx_runtime_1.jsxs)(nav_section_1.NavLi, { disabled: data.disabled, children: [renderNavItem, (0, jsx_runtime_1.jsx)(Popover_1.default, { disableScrollLock: true, keepMounted: multiList, open: openMenu, anchorEl: navItemRef.current, anchorReference: "anchorPosition", anchorPosition: {
                        top: clientRect.top - 20,
                        left: clientRect.x + clientRect.width,
                    }, anchorOrigin: { vertical: 'top', horizontal: 'right' }, transformOrigin: { vertical: 'top', horizontal: 'left' }, slotProps: {
                        paper: {
                            onMouseEnter: handleOpenMenu,
                            onMouseLeave: handleCloseMenu,
                            sx: __assign(__assign({ 
                                /* Reset */
                                boxShadow: 'none', overflow: 'unset', backdropFilter: 'none', background: 'transparent' }, (openMenu && { pointerEvents: 'auto' })), slotProps === null || slotProps === void 0 ? void 0 : slotProps.paper),
                        },
                    }, sx: __assign(__assign({}, cssVars), { pointerEvents: 'none' }), children: (0, jsx_runtime_1.jsx)(Paper_1.default, { sx: __assign(__assign(__assign(__assign(__assign({}, (0, styles_2.paper)({ theme: theme, dropdown: true })), { p: 2.5, borderRadius: 2 }), (singleList && __assign(__assign({}, styles_2.hideScrollY), { minWidth: 280, height: clientRect.height }))), (multiList && {
                            minWidth: 720,
                            maxWidth: 960,
                            minHeight: clientRect.height,
                            width: "calc(100vw - ".concat(clientRect.x * 2 + clientRect.width, "px)"),
                        })), slotProps === null || slotProps === void 0 ? void 0 : slotProps.paper), children: (0, jsx_runtime_1.jsx)(nav_content_1.NavContent, { singleList: singleList, data: data, slotProps: slotProps }) }) })] }));
    }
    return (0, jsx_runtime_1.jsx)(nav_section_1.NavLi, { disabled: data.disabled, children: renderNavItem });
}

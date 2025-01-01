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
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var Drawer_1 = __importDefault(require("@mui/material/Drawer"));
var routes_react_1 = require("routes-react");
var Divider_1 = __importDefault(require("@mui/material/Divider"));
var IconButton_1 = __importDefault(require("@mui/material/IconButton"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var react_1 = require("react");
var hooks_1 = require("../../../hooks");
var utils_1 = require("../../../utils");
var scrollbar_1 = require("../../../components/scrollbar");
var nav_item_1 = require("./nav-item");
var iconify_1 = require("../../iconify");
var nav_section_1 = require("../../nav-section");
var nav_sub_list_1 = require("../components/nav-sub-list");
// ----------------------------------------------------------------------
function NavList(_a) {
    var data = _a.data, render = _a.render, cssVars = _a.cssVars, slotProps = _a.slotProps;
    var pathname = (0, routes_react_1.usePathname)();
    var active = (0, hooks_1.useActiveLink)(data.path, !!data.children);
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
    var renderNavItem = ((0, jsx_runtime_1.jsx)(nav_item_1.NavItem, { render: render, 
        // slots
        path: data.path, icon: data.icon, info: data.info, title: data.title, 
        // state
        active: active, disabled: data.disabled, hasChild: !!data.children, open: data.children && !!openMenu, externalLink: (0, utils_1.isExternalLink)(data.path), 
        // styles
        slotProps: slotProps === null || slotProps === void 0 ? void 0 : slotProps.rootItem, 
        // actions
        onClick: handleOpenMenu }));
    if (data.children) {
        return ((0, jsx_runtime_1.jsxs)(nav_section_1.NavLi, { disabled: data.disabled, children: [renderNavItem, (0, jsx_runtime_1.jsxs)(Drawer_1.default, { open: openMenu, onClose: handleCloseMenu, slotProps: { backdrop: { invisible: true } }, PaperProps: {
                        sx: {
                            display: 'flex',
                            flexDirection: 'column',
                            width: 'calc(var(--nav-width) - 8px)',
                        },
                    }, sx: __assign({}, cssVars), children: [(0, jsx_runtime_1.jsxs)(Stack_1.default, { direction: "row", alignItems: "center", spacing: 1, sx: { px: 1, py: 1.5 }, children: [(0, jsx_runtime_1.jsx)(IconButton_1.default, { onClick: handleCloseMenu, children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "eva:arrow-ios-back-fill", width: 16 }) }), (0, jsx_runtime_1.jsx)(Typography_1.default, { noWrap: true, variant: "subtitle1", sx: { textTransform: 'capitalize' }, children: data.title })] }), (0, jsx_runtime_1.jsx)(Divider_1.default, {}), (0, jsx_runtime_1.jsx)(scrollbar_1.Scrollbar, { fillContent: true, sx: { p: 2 }, children: (0, jsx_runtime_1.jsx)(Stack_1.default, { component: "nav", spacing: 4, children: (0, jsx_runtime_1.jsx)(nav_section_1.NavUl, { sx: { gap: 3 }, children: (0, jsx_runtime_1.jsx)(nav_sub_list_1.NavSubList, { data: data.children, slotProps: slotProps }) }) }) })] })] }));
    }
    return (0, jsx_runtime_1.jsx)(nav_section_1.NavLi, { disabled: data.disabled, children: renderNavItem });
}

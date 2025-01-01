'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavList = NavList;
var jsx_runtime_1 = require("react/jsx-runtime");
var material_1 = require("@mui/material");
var routes_react_1 = require("routes-react");
var react_1 = require("react");
var utils_1 = require("lib/utils");
var useActiveLink_1 = require("lib/hooks/useActiveLink");
var nav_item_1 = require("./nav-item");
var classes_1 = require("../classes");
var styles_1 = require("../styles");
// ----------------------------------------------------------------------
function NavList(_a) {
    var _b;
    var _c;
    var data = _a.data, render = _a.render, depth = _a.depth, slotProps = _a.slotProps, enabledRootRedirect = _a.enabledRootRedirect;
    var pathname = (0, routes_react_1.usePathname)();
    var active = (0, useActiveLink_1.useActiveLink)(data.path, !!data.children);
    var _d = (0, react_1.useState)(active), openMenu = _d[0], setOpenMenu = _d[1];
    (0, react_1.useEffect)(function () {
        if (!active) {
            handleCloseMenu();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);
    var handleToggleMenu = (0, react_1.useCallback)(function () {
        if (data.children) {
            setOpenMenu(function (prev) { return !prev; });
        }
    }, [data.children]);
    var handleCloseMenu = (0, react_1.useCallback)(function () {
        setOpenMenu(false);
    }, []);
    var renderNavItem = ((0, jsx_runtime_1.jsx)(nav_item_1.NavItem, { render: render, 
        // slots
        path: data.path, icon: data.icon, info: data.info, title: data.title, caption: data.caption, 
        // state
        depth: depth, active: active, disabled: data.disabled, hasChild: !!data.children, open: data.children && openMenu, externalLink: (0, utils_1.isExternalLink)(data.path), enabledRootRedirect: enabledRootRedirect, 
        // styles
        slotProps: depth === 1 ? slotProps === null || slotProps === void 0 ? void 0 : slotProps.rootItem : slotProps === null || slotProps === void 0 ? void 0 : slotProps.subItem, 
        // actions
        onClick: handleToggleMenu }));
    // Hidden item by role
    if (data.roles && (slotProps === null || slotProps === void 0 ? void 0 : slotProps.currentRole)) {
        if (!((_c = data === null || data === void 0 ? void 0 : data.roles) === null || _c === void 0 ? void 0 : _c.includes(slotProps === null || slotProps === void 0 ? void 0 : slotProps.currentRole))) {
            return null;
        }
    }
    // Has children
    if (data.children) {
        return ((0, jsx_runtime_1.jsxs)(styles_1.NavLi, { disabled: data.disabled, sx: (_b = {},
                _b["& .".concat(classes_1.navSectionClasses.li)] = {
                    '&:first-of-type': { mt: 'var(--nav-item-gap)' },
                },
                _b), children: [renderNavItem, (0, jsx_runtime_1.jsx)(styles_1.NavCollapse, { "data-group": data.title, in: openMenu, depth: depth, unmountOnExit: true, mountOnEnter: true, children: (0, jsx_runtime_1.jsx)(NavSubList, { data: data.children, render: render, depth: depth, slotProps: slotProps, enabledRootRedirect: enabledRootRedirect }) })] }));
    }
    // Default
    return (0, jsx_runtime_1.jsx)(styles_1.NavLi, { disabled: data.disabled, children: renderNavItem });
}
// ----------------------------------------------------------------------
function NavSubList(_a) {
    var data = _a.data, render = _a.render, depth = _a.depth, slotProps = _a.slotProps, enabledRootRedirect = _a.enabledRootRedirect;
    return ((0, jsx_runtime_1.jsxs)(styles_1.NavUl, { sx: { gap: 'var(--nav-item-gap)' }, children: [data.map(function (list) { return ((0, jsx_runtime_1.jsx)(NavList, { data: list, render: render, depth: depth + 1, slotProps: slotProps, enabledRootRedirect: enabledRootRedirect }, list.title)); }), (0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "button", sx: { px: 2, color: 'text.disabled' } })] }));
}

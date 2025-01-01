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
var routes_react_1 = require("routes-react");
var Collapse_1 = __importDefault(require("@mui/material/Collapse"));
var react_1 = require("react");
var utils_1 = require("lib/utils");
var useActiveLink_1 = require("lib/hooks/useActiveLink");
var nav_item_1 = require("./nav-item");
var nav_section_1 = require("../../nav-section");
// ----------------------------------------------------------------------
function NavList(_a) {
    var _b, _c;
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
        path: data.path, icon: data.icon, title: data.title, info: data.info, caption: data.caption, 
        // state
        depth: depth, open: openMenu, hasChild: !!data.children, enabledRootRedirect: enabledRootRedirect, externalLink: (0, utils_1.isExternalLink)(data.path), 
        // styles
        slotProps: depth === 1 ? slotProps === null || slotProps === void 0 ? void 0 : slotProps.rootItem : slotProps === null || slotProps === void 0 ? void 0 : slotProps.subItem, 
        // actions
        onClick: handleToggleMenu }));
    if (data.children) {
        return ((0, jsx_runtime_1.jsxs)(nav_section_1.NavLi, { disabled: data.disabled, sx: (_b = {},
                _b["& .".concat(nav_section_1.navSectionClasses.li)] = {
                    '&:first-of-type': { mt: 'var(--nav-item-gap)' },
                },
                _b), children: [renderNavItem, (0, jsx_runtime_1.jsx)(Collapse_1.default, { in: openMenu, sx: __assign({}, (depth + 1 !== 1 && (_c = {
                            pl: 'calc(var(--nav-item-pl) - 2px + var(--nav-icon-size) / 2)'
                        },
                        _c["& .".concat(nav_section_1.navSectionClasses.ul)] = {
                            position: 'relative',
                            pl: '12px',
                            '&::before': {
                                top: 0,
                                left: 0,
                                bottom: 0,
                                width: '1px',
                                content: '""',
                                opacity: 0.24,
                                bgcolor: 'grey.500',
                                position: 'absolute',
                            },
                        },
                        _c))), children: (0, jsx_runtime_1.jsx)(NavSubList, { data: data.children, render: render, depth: depth, slotProps: slotProps, enabledRootRedirect: enabledRootRedirect }) })] }));
    }
    return (0, jsx_runtime_1.jsx)(nav_section_1.NavLi, { disabled: data.disabled, children: renderNavItem });
}
// ----------------------------------------------------------------------
function NavSubList(_a) {
    var data = _a.data, render = _a.render, depth = _a.depth, slotProps = _a.slotProps, enabledRootRedirect = _a.enabledRootRedirect;
    return ((0, jsx_runtime_1.jsx)(nav_section_1.NavUl, { sx: { gap: 'var(--nav-item-gap)' }, children: data.map(function (list) { return ((0, jsx_runtime_1.jsx)(NavList, { data: list, render: render, depth: depth + 1, slotProps: slotProps, enabledRootRedirect: enabledRootRedirect }, list.title)); }) }));
}

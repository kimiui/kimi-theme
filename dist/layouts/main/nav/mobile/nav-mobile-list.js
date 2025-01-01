"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavList = NavList;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Collapse_1 = __importDefault(require("@mui/material/Collapse"));
var utils_1 = require("../../../../utils");
var styles_1 = require("../../../../theme/styles");
var useActiveLink_1 = require("../../../../hooks/useActiveLink");
var nav_section_1 = require("../../../../components/nav-section");
var nav_mobile_item_1 = require("./nav-mobile-item");
// ----------------------------------------------------------------------
function NavList(_a) {
    var _b, _c;
    var data = _a.data;
    var active = (0, useActiveLink_1.useActiveLink)(data.path, !!data.children);
    var _d = (0, react_1.useState)(false), openMenu = _d[0], setOpenMenu = _d[1];
    var handleToggleMenu = (0, react_1.useCallback)(function () {
        if (data.children) {
            setOpenMenu(function (prev) { return !prev; });
        }
    }, [data.children]);
    var renderNavItem = ((0, jsx_runtime_1.jsx)(nav_mobile_item_1.NavItem
    // slots
    , { 
        // slots
        path: data.path, icon: data.icon, title: data.title, 
        // state
        active: active, hasChild: !!data.children, open: data.children && !!openMenu, externalLink: (0, utils_1.isExternalLink)(data.path), 
        // actions
        onClick: handleToggleMenu }));
    if (data.children) {
        return ((0, jsx_runtime_1.jsxs)(nav_section_1.NavLi, { children: [renderNavItem, (0, jsx_runtime_1.jsx)(Collapse_1.default, { in: openMenu, children: (0, jsx_runtime_1.jsx)(nav_section_1.NavSectionVertical, { data: data.children, slotProps: { rootItem: { sx: { minHeight: 36 } } }, sx: (_b = {
                                px: 1.5
                            },
                            _b["& .".concat(nav_section_1.navSectionClasses.item.root)] = {
                                '&[aria-label="Dashboard"]': (_c = {},
                                    _c["& .".concat(nav_section_1.navSectionClasses.item.title)] = { display: 'none' },
                                    _c.height = 180,
                                    _c.borderRadius = 1.5,
                                    _c.backgroundSize = 'auto 88%',
                                    _c.backgroundPosition = 'center',
                                    _c.backgroundRepeat = 'no-repeat',
                                    _c.backgroundImage = "url(/assets/illustrations/illustration-dashboard.webp)",
                                    _c.border = function (theme) {
                                        return "solid 1px ".concat((0, styles_1.varAlpha)(theme.palette.grey['500Channel'], 0.12));
                                    },
                                    _c),
                            },
                            _b) }) })] }));
    }
    return (0, jsx_runtime_1.jsx)(nav_section_1.NavLi, { children: renderNavItem });
}

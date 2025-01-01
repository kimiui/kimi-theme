"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoMegaMenuHorizontal = DemoMegaMenuHorizontal;
var jsx_runtime_1 = require("react/jsx-runtime");
var AppBar_1 = __importDefault(require("@mui/material/AppBar"));
var Toolbar_1 = __importDefault(require("@mui/material/Toolbar"));
var Container_1 = __importDefault(require("@mui/material/Container"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var label_1 = require("../../../components/label");
var iconify_1 = require("../../../components/iconify");
var mega_menu_1 = require("../../../components/mega-menu");
var data_1 = require("./data");
// ----------------------------------------------------------------------
function DemoMegaMenuHorizontal() {
    return ((0, jsx_runtime_1.jsx)(AppBar_1.default, { position: "sticky", sx: { bgcolor: 'background.paper', boxShadow: function (theme) { return theme.shadows[8]; } }, children: (0, jsx_runtime_1.jsxs)(Toolbar_1.default, { component: Container_1.default, children: [(0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "h6", sx: { flexGrow: 1 }, children: "Horizontal menu" }), (0, jsx_runtime_1.jsx)(mega_menu_1.MegaMenuHorizontal, { data: data_1.navItems2, render: {
                        navIcon: NAV_ICONS,
                        navInfo: NAV_INFO,
                    }, cssVars: {
                        '--nav-item-gap': '8px',
                    }, slotProps: {
                        rootItem: {
                            sx: {},
                            icon: {},
                            title: {
                                typography: 'subtitle1',
                                fontFamily: function (theme) { return theme.typography.fontSecondaryFamily; },
                            },
                            info: {},
                            arrow: {},
                        },
                        subItem: {},
                        paper: {},
                        subheader: {},
                        tags: {},
                        moreLink: {},
                        carousel: { sx: {}, displayCount: 8 },
                    } })] }) }));
}
// ----------------------------------------------------------------------
var NAV_ICONS = {
    'icon.item1': (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "solar:home-2-outline" }),
    'icon.item2': (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "solar:atom-outline" }),
    'icon.item3': (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "solar:chart-square-outline" }),
    'icon.item4': (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "solar:confetti-minimalistic-outline" }),
    'icon.item5': (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "solar:gallery-circle-outline" }),
};
var NAV_INFO = function (val) { return ({
    'info.item3': (0, jsx_runtime_1.jsx)(label_1.Label, { color: "info", children: val }),
    'info.item4': (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: val }),
}); };

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NAV_ITEMS = void 0;
exports.NavBasic = NavBasic;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var ahooks_1 = require("ahooks");
var Paper_1 = __importDefault(require("@mui/material/Paper"));
var Drawer_1 = __importDefault(require("@mui/material/Drawer"));
var IconButton_1 = __importDefault(require("@mui/material/IconButton"));
var logo_1 = require("lib/components/logo");
var label_1 = require("lib/components/label");
var iconify_1 = require("lib/components/iconify");
var svg_color_1 = require("lib/components/svg-color");
var nav_basic_1 = require("lib/components/nav-basic");
// ----------------------------------------------------------------------
function NavBasic() {
    var _a = (0, ahooks_1.useBoolean)(), mobileOpen = _a[0], mobileOpenActions = _a[1];
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(Paper_1.default, { variant: "outlined", sx: {
                    p: 2,
                    gap: 2,
                    width: 1,
                    borderRadius: 2,
                    display: 'flex',
                    overflowX: 'auto',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }, children: [(0, jsx_runtime_1.jsx)(IconButton_1.default, { onClick: mobileOpenActions.setTrue, children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "carbon:menu" }) }), (0, jsx_runtime_1.jsx)(nav_basic_1.NavBasicDesktop, { data: exports.NAV_ITEMS, cssVars: {
                            '--nav-item-gap': '16px',
                        }, slotProps: {
                            rootItem: {
                                sx: {},
                                icon: {},
                                texts: {},
                                title: {
                                // typography: 'subtitle1',
                                // fontFamily: (theme) => theme.typography.fontSecondaryFamily,
                                },
                                caption: {},
                                arrow: {},
                            },
                            subItem: {
                                sx: {},
                                icon: {},
                                texts: {},
                                title: {},
                                caption: {},
                                arrow: {},
                            },
                            paper: {},
                        } })] }), (0, jsx_runtime_1.jsxs)(Drawer_1.default, { open: mobileOpen, onClose: mobileOpenActions.setFalse, PaperProps: { sx: { width: 280 } }, children: [(0, jsx_runtime_1.jsx)(Box_1.default, { sx: { pl: 2.5, py: 2 }, children: (0, jsx_runtime_1.jsx)(logo_1.Logo, {}) }), (0, jsx_runtime_1.jsx)(nav_basic_1.NavBasicMobile, { sx: { px: 1.5 }, data: exports.NAV_ITEMS, cssVars: {
                            '--nav-item-gap': '8px',
                        }, slotProps: {
                            rootItem: {
                                sx: {},
                                icon: {},
                                texts: {},
                                title: {
                                // typography: 'subtitle1',
                                // fontFamily: (theme) => theme.typography.fontSecondaryFamily,
                                },
                                caption: {},
                                info: {},
                                arrow: {},
                            },
                            subItem: {
                                sx: {},
                                icon: {},
                                texts: {},
                                title: {},
                                caption: {},
                                info: {},
                                arrow: {},
                            },
                            paper: {},
                        } })] })] }));
}
// ----------------------------------------------------------------------
exports.NAV_ITEMS = [
    {
        title: 'Home',
        path: '#',
        icon: (0, jsx_runtime_1.jsx)(svg_color_1.SvgColor, { src: "/assets/icons/navbar/ic-analytics.svg" }),
    },
    {
        title: 'Page',
        path: '/basic/page',
        caption: 'This is the caption',
        icon: (0, jsx_runtime_1.jsx)(svg_color_1.SvgColor, { src: "/assets/icons/navbar/ic-banking.svg" }),
        info: (0, jsx_runtime_1.jsx)(label_1.Label, { color: "info", children: "+2" }),
        children: [
            {
                title: 'Page 1',
                path: '/basic/page/1',
                icon: (0, jsx_runtime_1.jsx)(svg_color_1.SvgColor, { src: "/assets/icons/navbar/ic-booking.svg" }),
                caption: 'This is the caption',
                info: '+3',
                children: [
                    { title: 'Page 1.1', path: '/basic/page/1/1' },
                    { title: 'Page 1.2', path: '/basic/page/1/2' },
                ],
            },
            {
                title: 'Page 2',
                path: '/basic/page/2',
                icon: (0, jsx_runtime_1.jsx)(svg_color_1.SvgColor, { src: "/assets/icons/navbar/ic-chat.svg" }),
                children: [
                    { title: 'Page 2.1', path: '/basic/page/2/1' },
                    { title: 'Page 2.2', path: '/basic/page/2/2' },
                    {
                        title: 'Page 2.3',
                        path: '/basic/page/2/3',
                        children: [
                            { title: 'Page 2.3.1', path: '/basic/page/2/3/1' },
                            { title: 'Page 2.3.2', path: '/basic/page/2/3/2' },
                            { title: 'Page 2.3.3', path: '/basic/page/2/3/3' },
                        ],
                    },
                ],
            },
            {
                title: 'Page 3',
                path: '#',
                icon: (0, jsx_runtime_1.jsx)(svg_color_1.SvgColor, { src: "/assets/icons/navbar/ic-lock.svg" }),
            },
        ],
    },
    {
        title: 'Blog',
        path: '#',
        icon: (0, jsx_runtime_1.jsx)(svg_color_1.SvgColor, { src: "/assets/icons/navbar/ic-mail.svg" }),
    },
    {
        title: 'Contact',
        path: '#',
        icon: (0, jsx_runtime_1.jsx)(svg_color_1.SvgColor, { src: "/assets/icons/navbar/ic-user.svg" }),
        disabled: true,
    },
    {
        title: 'External',
        path: 'https://www.google.com/',
        icon: (0, jsx_runtime_1.jsx)(svg_color_1.SvgColor, { src: "/assets/icons/navbar/ic-tour.svg" }),
    },
];

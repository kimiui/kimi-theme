"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NAV_ITEMS = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var label_1 = require("lib/components/label");
var svg_color_1 = require("lib/components/svg-color");
// ----------------------------------------------------------------------
exports.NAV_ITEMS = [
    {
        subheader: 'Marketing',
        items: [
            {
                title: 'Landing',
                path: '#landing',
                icon: (0, jsx_runtime_1.jsx)(svg_color_1.SvgColor, { src: "/assets/icons/navbar/ic-dashboard.svg" }),
                roles: ['admin'],
                caption: 'Display only admin role',
                info: (0, jsx_runtime_1.jsx)(label_1.Label, { color: "error", children: "+2 " }),
            },
            {
                title: 'Services',
                path: '#services',
                icon: (0, jsx_runtime_1.jsx)(svg_color_1.SvgColor, { src: "/assets/icons/navbar/ic-analytics.svg" }),
                roles: ['admin', 'user'],
            },
            {
                title: 'Blog',
                path: '#blog',
                icon: (0, jsx_runtime_1.jsx)(svg_color_1.SvgColor, { src: "/assets/icons/navbar/ic-blog.svg" }),
                info: (0, jsx_runtime_1.jsx)(label_1.Label, { color: "info", children: "+3 " }),
                children: [
                    {
                        title: 'Item 1',
                        path: '#blog/item-1',
                        caption: 'Display caption',
                        info: '+2',
                    },
                    { title: 'Item 2', path: '#blog/item-2' },
                ],
            },
        ],
    },
    {
        subheader: 'Travel',
        items: [
            {
                title: 'About',
                path: '#about',
                icon: (0, jsx_runtime_1.jsx)(svg_color_1.SvgColor, { src: "/assets/icons/navbar/ic-user.svg" }),
                info: '+4',
            },
            {
                title: 'Contact',
                path: '#contact',
                icon: (0, jsx_runtime_1.jsx)(svg_color_1.SvgColor, { src: "/assets/icons/navbar/ic-tour.svg" }),
            },
            {
                title: 'Level',
                path: '#level',
                icon: (0, jsx_runtime_1.jsx)(svg_color_1.SvgColor, { src: "/assets/icons/navbar/ic-menu-item.svg" }),
                children: [
                    {
                        title: 'Level 2a',
                        path: '#level/2a',
                        icon: (0, jsx_runtime_1.jsx)(svg_color_1.SvgColor, { src: "/assets/icons/navbar/ic-chat.svg" }),
                        caption: 'This is the caption',
                        children: [
                            { title: 'Level 3a', path: '#level/2a/3a' },
                            {
                                title: 'Level 3b',
                                path: '#level/2a/3b',
                                children: [
                                    { title: 'Level 4a', path: '#level/2a/3b/4a' },
                                    { title: 'Level 4b', path: '#level/2a/3b/4b' },
                                ],
                            },
                            { title: 'Level 3c', path: '#level/2a/3c' },
                        ],
                    },
                    {
                        title: 'Level 2b',
                        path: '#level/2b',
                        icon: (0, jsx_runtime_1.jsx)(svg_color_1.SvgColor, { src: "/assets/icons/navbar/ic-mail.svg" }),
                    },
                    {
                        title: 'Level 2c',
                        path: '#level/2c',
                        icon: (0, jsx_runtime_1.jsx)(svg_color_1.SvgColor, { src: "/assets/icons/navbar/ic-calendar.svg" }),
                    },
                ],
            },
        ],
    },
];

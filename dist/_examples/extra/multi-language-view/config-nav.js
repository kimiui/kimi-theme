"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.navData = navData;
var jsx_runtime_1 = require("react/jsx-runtime");
var label_1 = require("lib/components/label");
var iconify_1 = require("lib/components/iconify");
var svg_color_1 = require("lib/components/svg-color");
// ----------------------------------------------------------------------
function navData(t) {
    return [
        {
            subheader: t('subheader'),
            items: [
                {
                    title: t('travel'),
                    path: '#disabled',
                    icon: (0, jsx_runtime_1.jsx)(svg_color_1.SvgColor, { src: "/assets/icons/navbar/ic-tour.svg" }),
                },
                {
                    title: t('job'),
                    path: '#label',
                    icon: (0, jsx_runtime_1.jsx)(svg_color_1.SvgColor, { src: "/assets/icons/navbar/ic-job.svg" }),
                    info: ((0, jsx_runtime_1.jsx)(label_1.Label, { color: "info", variant: "inverted", startIcon: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "solar:bell-bing-bold-duotone" }), children: "NEW" })),
                },
                {
                    title: t('blog.title'),
                    path: '#caption',
                    icon: (0, jsx_runtime_1.jsx)(svg_color_1.SvgColor, { src: "/assets/icons/navbar/ic-blog.svg" }),
                    caption: t('blog.caption'),
                },
                {
                    title: t('user'),
                    path: 'https://www.google.com/',
                    icon: (0, jsx_runtime_1.jsx)(svg_color_1.SvgColor, { src: "/assets/icons/navbar/ic-user.svg" }),
                },
            ],
        },
    ];
}

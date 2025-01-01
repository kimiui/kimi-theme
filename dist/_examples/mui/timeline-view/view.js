'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineView = TimelineView;
var jsx_runtime_1 = require("react/jsx-runtime");
var Paper_1 = __importDefault(require("@mui/material/Paper"));
var Timeline_1 = __importDefault(require("@mui/lab/Timeline"));
var TimelineDot_1 = __importDefault(require("@mui/lab/TimelineDot"));
var TimelineItem_1 = __importDefault(require("@mui/lab/TimelineItem"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var TimelineContent_1 = __importDefault(require("@mui/lab/TimelineContent"));
var TimelineSeparator_1 = __importDefault(require("@mui/lab/TimelineSeparator"));
var TimelineConnector_1 = __importDefault(require("@mui/lab/TimelineConnector"));
var TimelineOppositeContent_1 = __importDefault(require("@mui/lab/TimelineOppositeContent"));
var paths_1 = require("lib/routes/paths");
var styles_1 = require("lib/theme/styles");
var iconify_1 = require("lib/components/iconify");
var custom_breadcrumbs_1 = require("lib/components/custom-breadcrumbs");
var component_hero_1 = require("../../component-hero");
var component_block_1 = require("../../component-block");
var component_template_1 = require("../../component-template");
var TIMELINES = [
    {
        key: 1,
        title: 'Default',
        des: 'Morbi mattis ullamcorper',
        time: '09:30 am',
        icon: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "eva:folder-add-fill", width: 24 }),
    },
    {
        key: 2,
        title: 'Primary',
        des: 'Morbi mattis ullamcorper',
        time: '10:00 am',
        color: 'primary',
        icon: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "eva:image-2-fill", width: 24 }),
    },
    {
        key: 3,
        title: 'Secondary',
        des: 'Morbi mattis ullamcorper',
        time: '10:00 am',
        color: 'secondary',
        icon: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "eva:pantone-fill", width: 24 }),
    },
    {
        key: 4,
        title: 'Info',
        des: 'Morbi mattis ullamcorper',
        time: '10:30 am',
        color: 'info',
        icon: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "eva:tv-fill", width: 24 }),
    },
    {
        key: 5,
        title: 'Success',
        des: 'Morbi mattis ullamcorper',
        time: '11:00 am',
        color: 'success',
        icon: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "eva:activity-fill", width: 24 }),
    },
    {
        key: 6,
        title: 'Warning',
        des: 'Morbi mattis ullamcorper',
        time: '11:30 am',
        color: 'warning',
        icon: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "eva:cube-fill", width: 24 }),
    },
    {
        key: 7,
        title: 'Error',
        des: 'Morbi mattis ullamcorper',
        time: '12:00 am',
        color: 'error',
        icon: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "eva:film-fill", width: 24 }),
    },
];
// ----------------------------------------------------------------------
function TimelineView() {
    var lastItem = TIMELINES[TIMELINES.length - 1].key;
    var reduceTimeLine = TIMELINES.slice(TIMELINES.length - 3);
    var DEMO = [
        {
            name: 'Left',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { children: (0, jsx_runtime_1.jsx)(Timeline_1.default, { position: "left", children: reduceTimeLine.map(function (item) { return ((0, jsx_runtime_1.jsxs)(TimelineItem_1.default, { children: [(0, jsx_runtime_1.jsxs)(TimelineSeparator_1.default, { children: [(0, jsx_runtime_1.jsx)(TimelineDot_1.default, {}), lastItem === item.key ? null : (0, jsx_runtime_1.jsx)(TimelineConnector_1.default, {})] }), (0, jsx_runtime_1.jsx)(TimelineContent_1.default, { children: item.title })] }, item.key)); }) }) })),
        },
        {
            name: 'Right',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { children: (0, jsx_runtime_1.jsx)(Timeline_1.default, { position: "right", children: reduceTimeLine.map(function (item) { return ((0, jsx_runtime_1.jsxs)(TimelineItem_1.default, { children: [(0, jsx_runtime_1.jsxs)(TimelineSeparator_1.default, { children: [(0, jsx_runtime_1.jsx)(TimelineDot_1.default, {}), lastItem === item.key ? null : (0, jsx_runtime_1.jsx)(TimelineConnector_1.default, {})] }), (0, jsx_runtime_1.jsx)(TimelineContent_1.default, { children: item.title })] }, item.key)); }) }) })),
        },
        {
            name: 'Alternating',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { children: (0, jsx_runtime_1.jsx)(Timeline_1.default, { position: "alternate", children: reduceTimeLine.map(function (item) { return ((0, jsx_runtime_1.jsxs)(TimelineItem_1.default, { children: [(0, jsx_runtime_1.jsxs)(TimelineSeparator_1.default, { children: [(0, jsx_runtime_1.jsx)(TimelineDot_1.default, {}), lastItem === item.key ? null : (0, jsx_runtime_1.jsx)(TimelineConnector_1.default, {})] }), (0, jsx_runtime_1.jsx)(TimelineContent_1.default, { children: item.title })] }, item.key)); }) }) })),
        },
        {
            name: 'Filled',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { children: (0, jsx_runtime_1.jsx)(Timeline_1.default, { position: "alternate", children: TIMELINES.map(function (item) { return ((0, jsx_runtime_1.jsxs)(TimelineItem_1.default, { children: [(0, jsx_runtime_1.jsxs)(TimelineSeparator_1.default, { children: [(0, jsx_runtime_1.jsx)(TimelineDot_1.default, { color: item.color }), lastItem === item.key ? null : (0, jsx_runtime_1.jsx)(TimelineConnector_1.default, {})] }), (0, jsx_runtime_1.jsx)(TimelineContent_1.default, { children: item.title })] }, item.key)); }) }) })),
        },
        {
            name: 'Outlined',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { children: (0, jsx_runtime_1.jsx)(Timeline_1.default, { position: "alternate", children: TIMELINES.map(function (item) { return ((0, jsx_runtime_1.jsxs)(TimelineItem_1.default, { children: [(0, jsx_runtime_1.jsxs)(TimelineSeparator_1.default, { children: [(0, jsx_runtime_1.jsx)(TimelineDot_1.default, { variant: "outlined", color: item.color }), lastItem === item.key ? null : (0, jsx_runtime_1.jsx)(TimelineConnector_1.default, {})] }), (0, jsx_runtime_1.jsx)(TimelineContent_1.default, { children: item.title })] }, item.key)); }) }) })),
        },
        {
            name: 'Opposite content',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { children: (0, jsx_runtime_1.jsx)(Timeline_1.default, { position: "alternate", children: TIMELINES.map(function (item) { return ((0, jsx_runtime_1.jsxs)(TimelineItem_1.default, { children: [(0, jsx_runtime_1.jsx)(TimelineOppositeContent_1.default, { children: (0, jsx_runtime_1.jsx)(Typography_1.default, { sx: { color: 'text.secondary' }, children: item.time }) }), (0, jsx_runtime_1.jsxs)(TimelineSeparator_1.default, { children: [(0, jsx_runtime_1.jsx)(TimelineDot_1.default, { color: item.color }), lastItem === item.key ? null : (0, jsx_runtime_1.jsx)(TimelineConnector_1.default, {})] }), (0, jsx_runtime_1.jsx)(TimelineContent_1.default, { children: (0, jsx_runtime_1.jsxs)(Typography_1.default, { children: [" ", item.title] }) })] }, item.key)); }) }) })),
        },
        {
            name: 'Customized',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { children: (0, jsx_runtime_1.jsx)(Timeline_1.default, { position: "alternate", children: TIMELINES.map(function (item) { return ((0, jsx_runtime_1.jsxs)(TimelineItem_1.default, { children: [(0, jsx_runtime_1.jsx)(TimelineOppositeContent_1.default, { children: (0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "body2", sx: { color: 'text.secondary' }, children: item.time }) }), (0, jsx_runtime_1.jsxs)(TimelineSeparator_1.default, { children: [(0, jsx_runtime_1.jsx)(TimelineDot_1.default, { color: item.color, children: item.icon }), (0, jsx_runtime_1.jsx)(TimelineConnector_1.default, {})] }), (0, jsx_runtime_1.jsx)(TimelineContent_1.default, { children: (0, jsx_runtime_1.jsxs)(Paper_1.default, { sx: {
                                        p: 3,
                                        bgcolor: function (theme) { return (0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0.12); },
                                    }, children: [(0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "subtitle2", children: item.title }), (0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "body2", sx: { color: 'text.secondary' }, children: item.des })] }) })] }, item.key)); }) }) })),
        },
    ];
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(component_hero_1.ComponentHero, { children: (0, jsx_runtime_1.jsx)(custom_breadcrumbs_1.CustomBreadcrumbs, { heading: "Timeline", links: [{ name: 'Components', href: paths_1.paths.docs.components.root }, { name: 'Timeline' }], moreLink: ['https://mui.com/components/timeline'] }) }), (0, jsx_runtime_1.jsx)(component_template_1.ScrollToViewTemplate, { data: DEMO })] }));
}

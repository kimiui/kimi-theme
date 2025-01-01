'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabsView = TabsView;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Tab_1 = __importDefault(require("@mui/material/Tab"));
var Tabs_1 = __importDefault(require("@mui/material/Tabs"));
var Paper_1 = __importDefault(require("@mui/material/Paper"));
var hooks_1 = require("lib/hooks");
var paths_1 = require("lib/routes/paths");
var iconify_1 = require("lib/components/iconify");
var custom_tabs_1 = require("lib/components/custom-tabs");
var custom_breadcrumbs_1 = require("lib/components/custom-breadcrumbs");
var component_hero_1 = require("../../component-hero");
var component_block_1 = require("../../component-block");
var component_template_1 = require("../../component-template");
// ----------------------------------------------------------------------
var TABS = [
    {
        value: 'one',
        icon: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "solar:phone-bold", width: 24 }),
        label: 'Item one',
    },
    {
        value: 'two',
        icon: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "solar:heart-bold", width: 24 }),
        label: 'Item two',
    },
    {
        value: 'three',
        icon: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "eva:headphones-fill", width: 24 }),
        label: 'Item three',
        disabled: true,
    },
    {
        value: 'four',
        icon: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "eva:headphones-fill", width: 24 }),
        label: 'Item four',
    },
    {
        value: 'five',
        icon: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "eva:headphones-fill", width: 24 }),
        label: 'Item five',
        disabled: true,
    },
    {
        value: 'six',
        icon: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "eva:headphones-fill", width: 24 }),
        label: 'Item six',
    },
    {
        value: 'seven',
        icon: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "eva:headphones-fill", width: 24 }),
        label: 'Item seven',
    },
];
// ----------------------------------------------------------------------
function TabsView() {
    var basicTabs = (0, hooks_1.useTabs)('one');
    var customTabs = (0, hooks_1.useTabs)('one');
    var scrollableTabs = (0, hooks_1.useTabs)('one');
    var DEMO = [
        {
            name: 'Text',
            component: ((0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { sx: { flexDirection: 'column', alignItems: 'unset' }, children: [(0, jsx_runtime_1.jsx)(Tabs_1.default, { value: basicTabs.value, onChange: basicTabs.onChange, children: TABS.slice(0, 3).map(function (tab) { return ((0, jsx_runtime_1.jsx)(Tab_1.default, { value: tab.value, label: tab.label }, tab.value)); }) }), (0, jsx_runtime_1.jsx)(Paper_1.default, { variant: "outlined", sx: { p: 2.5, typography: 'body2', borderRadius: 1.5 }, children: TABS.slice(0, 3).map(function (tab) {
                            return tab.value === basicTabs.value ? ((0, jsx_runtime_1.jsx)(react_1.Fragment, { children: tab.label }, tab.value)) : null;
                        }) })] })),
        },
        {
            name: 'Icon',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { children: (0, jsx_runtime_1.jsx)(Tabs_1.default, { value: basicTabs.value, onChange: basicTabs.onChange, children: TABS.slice(0, 3).map(function (tab) { return ((0, jsx_runtime_1.jsx)(Tab_1.default, { icon: tab.icon, value: tab.value }, tab.value)); }) }) })),
        },
        {
            name: 'Top',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { children: (0, jsx_runtime_1.jsx)(Tabs_1.default, { value: basicTabs.value, onChange: basicTabs.onChange, children: TABS.slice(0, 3).map(function (tab) { return ((0, jsx_runtime_1.jsx)(Tab_1.default, { iconPosition: "top", icon: tab.icon, label: tab.label, value: tab.value, disabled: tab.disabled }, tab.value)); }) }) })),
        },
        {
            name: 'Bottom',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { children: (0, jsx_runtime_1.jsx)(Tabs_1.default, { value: basicTabs.value, onChange: basicTabs.onChange, children: TABS.slice(0, 3).map(function (tab) { return ((0, jsx_runtime_1.jsx)(Tab_1.default, { iconPosition: "bottom", icon: tab.icon, label: tab.label, value: tab.value, disabled: tab.disabled }, tab.value)); }) }) })),
        },
        {
            name: 'Start',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { children: (0, jsx_runtime_1.jsx)(Tabs_1.default, { value: basicTabs.value, onChange: basicTabs.onChange, children: TABS.slice(0, 3).map(function (tab) { return ((0, jsx_runtime_1.jsx)(Tab_1.default, { icon: tab.icon, label: tab.label, value: tab.value, disabled: tab.disabled }, tab.value)); }) }) })),
        },
        {
            name: 'End',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { children: (0, jsx_runtime_1.jsx)(Tabs_1.default, { value: basicTabs.value, onChange: basicTabs.onChange, children: TABS.slice(0, 3).map(function (tab) { return ((0, jsx_runtime_1.jsx)(Tab_1.default, { iconPosition: "end", icon: tab.icon, label: tab.label, value: tab.value, disabled: tab.disabled }, tab.value)); }) }) })),
        },
        {
            name: 'Scrollable',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { children: (0, jsx_runtime_1.jsx)(Tabs_1.default, { value: scrollableTabs.value, onChange: scrollableTabs.onChange, sx: { maxWidth: 320 }, children: TABS.map(function (tab) { return ((0, jsx_runtime_1.jsx)(Tab_1.default, { label: tab.label, value: tab.value }, tab.value)); }) }) })),
        },
        {
            name: 'Custom',
            component: ((0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { sx: { flexDirection: 'column', alignItems: 'unset' }, children: [(0, jsx_runtime_1.jsx)(custom_tabs_1.CustomTabs, { value: customTabs.value, onChange: customTabs.onChange, variant: "scrollable", sx: { mx: 'auto', maxWidth: 320, borderRadius: 1 }, children: TABS.map(function (tab) { return ((0, jsx_runtime_1.jsx)(Tab_1.default, { value: tab.value, label: tab.label }, tab.value)); }) }), (0, jsx_runtime_1.jsx)(Paper_1.default, { variant: "outlined", sx: { p: 2.5, typography: 'body2', borderRadius: 1.5 }, children: TABS.map(function (tab) {
                            return tab.value === basicTabs.value ? ((0, jsx_runtime_1.jsx)(react_1.Fragment, { children: tab.label }, tab.value)) : null;
                        }) })] })),
        },
    ];
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(component_hero_1.ComponentHero, { children: (0, jsx_runtime_1.jsx)(custom_breadcrumbs_1.CustomBreadcrumbs, { heading: "Tabs", links: [{ name: 'Components', href: paths_1.paths.docs.components.root }, { name: 'Tabs' }], moreLink: ['https://mui.com/components/tabs'] }) }), (0, jsx_runtime_1.jsx)(component_template_1.ScrollToViewTemplate, { data: DEMO })] }));
}

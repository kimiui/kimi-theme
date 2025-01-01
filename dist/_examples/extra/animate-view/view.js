'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimateView = AnimateView;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Tab_1 = __importDefault(require("@mui/material/Tab"));
var Tabs_1 = __importDefault(require("@mui/material/Tabs"));
var hooks_1 = require("../../../hooks");
var paths_1 = require("../../../routes/paths");
var custom_breadcrumbs_1 = require("../../../components/custom-breadcrumbs");
var other_1 = require("./other");
var dialog_1 = require("./dialog");
var inview_1 = require("./inview");
var scroll_1 = require("./scroll");
var background_1 = require("./background");
var component_hero_1 = require("../../component-hero");
var component_block_1 = require("../../component-block");
// ----------------------------------------------------------------------
var TABS = [
    { value: 'inview', label: 'In View', component: (0, jsx_runtime_1.jsx)(inview_1.AnimateInview, {}) },
    { value: 'scroll', label: 'Scroll', component: (0, jsx_runtime_1.jsx)(scroll_1.AnimateScroll, {}) },
    { value: 'dialog', label: 'Dialog', component: (0, jsx_runtime_1.jsx)(dialog_1.AnimateDialog, {}) },
    {
        value: 'background',
        label: 'Background',
        component: (0, jsx_runtime_1.jsx)(background_1.AnimateBackground, {}),
    },
    { value: 'other', label: 'Other', component: (0, jsx_runtime_1.jsx)(other_1.AnimateOther, {}) },
];
// ----------------------------------------------------------------------
function AnimateView() {
    var tabs = (0, hooks_1.useTabs)('inview');
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(component_hero_1.ComponentHero, { children: (0, jsx_runtime_1.jsx)(custom_breadcrumbs_1.CustomBreadcrumbs, { heading: "Animate", links: [{ name: 'Components', href: paths_1.paths.docs.components.root }, { name: 'Animate' }], moreLink: ['https://www.framer.com/api/motion'] }) }), (0, jsx_runtime_1.jsxs)(component_block_1.ComponentContainer, { children: [(0, jsx_runtime_1.jsx)(Tabs_1.default, { value: tabs.value, onChange: tabs.onChange, children: TABS.map(function (tab) { return ((0, jsx_runtime_1.jsx)(Tab_1.default, { value: tab.value, label: tab.label }, tab.value)); }) }), TABS.map(function (tab) { return tab.value === tabs.value && (0, jsx_runtime_1.jsx)(Box_1.default, { children: tab.component }, tab.value); })] })] }));
}

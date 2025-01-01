'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChipView = ChipView;
var jsx_runtime_1 = require("react/jsx-runtime");
var paths_1 = require("lib/routes/paths");
var custom_breadcrumbs_1 = require("lib/components/custom-breadcrumbs");
var chip_1 = require("./chip");
var component_hero_1 = require("../../component-hero");
var component_template_1 = require("../../component-template");
// ----------------------------------------------------------------------
function ChipView() {
    var DEMO = [
        { name: 'Filled', component: (0, jsx_runtime_1.jsx)(chip_1.Chips, {}) },
        { name: 'Outlined', component: (0, jsx_runtime_1.jsx)(chip_1.Chips, { variant: "outlined" }) },
        { name: 'Soft', component: (0, jsx_runtime_1.jsx)(chip_1.Chips, { variant: "soft" }) },
    ];
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(component_hero_1.ComponentHero, { children: (0, jsx_runtime_1.jsx)(custom_breadcrumbs_1.CustomBreadcrumbs, { heading: "Chip", links: [{ name: 'Components', href: paths_1.paths.docs.components.root }, { name: 'Chip' }], moreLink: ['https://mui.com/components/chips'] }) }), (0, jsx_runtime_1.jsx)(component_template_1.ScrollToViewTemplate, { data: DEMO })] }));
}

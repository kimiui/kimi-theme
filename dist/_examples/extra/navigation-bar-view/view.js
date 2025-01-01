'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigationBarView = NavigationBarView;
var jsx_runtime_1 = require("react/jsx-runtime");
var paths_1 = require("../../../routes/paths");
var custom_breadcrumbs_1 = require("../../../components/custom-breadcrumbs");
var nav_api_1 = require("./nav-api");
var nav_mini_1 = require("./nav-mini");
var nav_basic_1 = require("./nav-basic");
var nav_vertical_1 = require("./nav-vertical");
var nav_horizontal_1 = require("./nav-horizontal");
var component_hero_1 = require("../../component-hero");
var component_template_1 = require("../../component-template");
// ----------------------------------------------------------------------
var DEMO = [
    { name: 'Basic', component: (0, jsx_runtime_1.jsx)(nav_basic_1.NavBasic, {}) },
    { name: 'Vertical', component: (0, jsx_runtime_1.jsx)(nav_vertical_1.NavVertical, {}) },
    { name: 'Mini', component: (0, jsx_runtime_1.jsx)(nav_mini_1.NavMini, {}) },
    { name: 'Horizontal', component: (0, jsx_runtime_1.jsx)(nav_horizontal_1.NavHorizontal, {}) },
    { name: 'Data from API', component: (0, jsx_runtime_1.jsx)(nav_api_1.NavAPI, {}) },
];
// ----------------------------------------------------------------------
function NavigationBarView() {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(component_hero_1.ComponentHero, { children: (0, jsx_runtime_1.jsx)(custom_breadcrumbs_1.CustomBreadcrumbs, { heading: "Navigation bar", links: [
                        { name: 'Components', href: paths_1.paths.docs.components.root },
                        { name: 'Navigation bar' },
                    ] }) }), (0, jsx_runtime_1.jsx)(component_template_1.ScrollToViewTemplate, { data: DEMO })] }));
}

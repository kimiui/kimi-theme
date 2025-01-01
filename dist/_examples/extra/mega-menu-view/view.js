'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MegaMenuView = MegaMenuView;
var jsx_runtime_1 = require("react/jsx-runtime");
var paths_1 = require("../../../routes/paths");
var custom_breadcrumbs_1 = require("../../../components/custom-breadcrumbs");
var mobile_1 = require("./mobile");
var vertical_1 = require("./vertical");
var component_hero_1 = require("../../component-hero");
var horizontal_1 = require("./horizontal");
var component_block_1 = require("../../component-block");
// ----------------------------------------------------------------------
function MegaMenuView() {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(component_hero_1.ComponentHero, { children: (0, jsx_runtime_1.jsx)(custom_breadcrumbs_1.CustomBreadcrumbs, { heading: "Mega Menu", links: [{ name: 'Components', href: paths_1.paths.docs.components.root }, { name: 'Mega Menu' }] }) }), (0, jsx_runtime_1.jsx)(horizontal_1.DemoMegaMenuHorizontal, {}), (0, jsx_runtime_1.jsxs)(component_block_1.ComponentContainer, { sx: { alignItems: 'flex-start' }, children: [(0, jsx_runtime_1.jsx)(mobile_1.DemoMegaMenuMobile, {}), (0, jsx_runtime_1.jsx)(vertical_1.DemoMegaMenuVertical, {})] })] }));
}

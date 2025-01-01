'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DndView = DndView;
var jsx_runtime_1 = require("react/jsx-runtime");
var paths_1 = require("lib/routes/paths");
var custom_breadcrumbs_1 = require("lib/components/custom-breadcrumbs");
var component_hero_1 = require("../../component-hero");
var sortable_container_1 = require("./sortable-container");
var component_template_1 = require("../../component-template");
// ----------------------------------------------------------------------
function DndView() {
    var DEMO = [
        { name: 'Grid', component: (0, jsx_runtime_1.jsx)(sortable_container_1.SortableContainer, { swap: true }) },
        {
            name: 'Vertical',
            component: (0, jsx_runtime_1.jsx)(sortable_container_1.SortableContainer, { layout: "vertical", itemCount: 4 }),
        },
        {
            name: 'Horizontal',
            component: (0, jsx_runtime_1.jsx)(sortable_container_1.SortableContainer, { layout: "horizontal", itemCount: 3 }),
        },
    ];
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(component_hero_1.ComponentHero, { children: (0, jsx_runtime_1.jsx)(custom_breadcrumbs_1.CustomBreadcrumbs, { heading: "Dnd", links: [{ name: 'Components', href: paths_1.paths.docs.components.root }, { name: 'Dnd' }], moreLink: ['https://docs.dndkit.com/'] }) }), (0, jsx_runtime_1.jsx)(component_template_1.ScrollToViewTemplate, { data: DEMO })] }));
}

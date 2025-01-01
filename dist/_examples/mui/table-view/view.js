'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableView = TableView;
var jsx_runtime_1 = require("react/jsx-runtime");
var paths_1 = require("lib/routes/paths");
var custom_breadcrumbs_1 = require("lib/components/custom-breadcrumbs");
var basic_1 = require("./basic");
var collapsible_1 = require("./collapsible");
var component_hero_1 = require("../../component-hero");
var component_block_1 = require("../../component-block");
var sorting_selecting_1 = require("./sorting-selecting");
var component_template_1 = require("../../component-template");
var grouping_fixed_header_1 = require("./grouping-fixed-header");
// ----------------------------------------------------------------------
var blockProps = {
    p: 0,
    overflow: 'hidden',
    alignItems: 'unset',
    flexDirection: 'column',
    bgcolor: 'background.paper',
};
var DEMO = [
    {
        name: 'Basic Table',
        component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { sx: blockProps, children: (0, jsx_runtime_1.jsx)(basic_1.BasicTable, {}) })),
    },
    {
        name: 'Sorting & selecting',
        component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { sx: blockProps, children: (0, jsx_runtime_1.jsx)(sorting_selecting_1.SortingSelectingTable, {}) })),
    },
    {
        name: 'Grouping & fixed header',
        component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { sx: blockProps, children: (0, jsx_runtime_1.jsx)(grouping_fixed_header_1.GroupingFixedHeaderTable, {}) })),
    },
    {
        name: 'Collapsible table',
        component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { sx: blockProps, children: (0, jsx_runtime_1.jsx)(collapsible_1.CollapsibleTable, {}) })),
    },
];
function TableView() {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(component_hero_1.ComponentHero, { children: (0, jsx_runtime_1.jsx)(custom_breadcrumbs_1.CustomBreadcrumbs, { heading: "Table", links: [{ name: 'Components', href: paths_1.paths.docs.components.root }, { name: 'Table' }], moreLink: ['https://mui.com/components/tables'] }) }), (0, jsx_runtime_1.jsx)(component_template_1.ScrollToViewTemplate, { data: DEMO })] }));
}

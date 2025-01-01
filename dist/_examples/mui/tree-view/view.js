"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeView = TreeView;
var jsx_runtime_1 = require("react/jsx-runtime");
var paths_1 = require("lib/routes/paths");
var custom_breadcrumbs_1 = require("lib/components/custom-breadcrumbs");
var custom_icon_1 = require("./custom-icon");
var custom_styling_1 = require("./custom-styling");
var component_hero_1 = require("../../component-hero");
var component_block_1 = require("../../component-block");
var basic_1 = require("./basic");
var component_template_1 = require("../../component-template");
// ----------------------------------------------------------------------
function TreeView() {
    var DEMO = [
        {
            name: 'Simple tree view',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { children: (0, jsx_runtime_1.jsx)(basic_1.BasicSimpleTree, {}) })),
        },
        {
            name: 'Rich tree view',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { children: (0, jsx_runtime_1.jsx)(basic_1.BasicRichTree, {}) })),
        },
        {
            name: 'Custom styling',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { children: (0, jsx_runtime_1.jsx)(custom_styling_1.CustomStyling, {}) })),
        },
        {
            name: 'Custom icon',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { children: (0, jsx_runtime_1.jsx)(custom_icon_1.CustomIcons, {}) })),
        },
    ];
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(component_hero_1.ComponentHero, { children: (0, jsx_runtime_1.jsx)(custom_breadcrumbs_1.CustomBreadcrumbs, { heading: "Tree View", links: [{ name: 'Components', href: paths_1.paths.docs.components.root }, { name: 'Tree View' }], moreLink: ['https://mui.com/x/react-tree-view/'] }) }), (0, jsx_runtime_1.jsx)(component_template_1.ScrollToViewTemplate, { data: DEMO })] }));
}

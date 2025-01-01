"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransferListView = TransferListView;
var jsx_runtime_1 = require("react/jsx-runtime");
var paths_1 = require("lib/routes/paths");
var custom_breadcrumbs_1 = require("lib/components/custom-breadcrumbs");
var component_hero_1 = require("../../component-hero");
var component_block_1 = require("../../component-block");
var simple_transfer_list_1 = require("./simple-transfer-list");
var component_template_1 = require("../../component-template");
var enhanced_transfer_list_1 = require("./enhanced-transfer-list");
// ----------------------------------------------------------------------
function TransferListView() {
    var DEMO = [
        {
            name: 'Simple',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { children: (0, jsx_runtime_1.jsx)(simple_transfer_list_1.SimpleTransferList, {}) })),
        },
        {
            name: 'Enhanced',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { children: (0, jsx_runtime_1.jsx)(enhanced_transfer_list_1.EnhancedTransferList, {}) })),
        },
    ];
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(component_hero_1.ComponentHero, { children: (0, jsx_runtime_1.jsx)(custom_breadcrumbs_1.CustomBreadcrumbs, { heading: "Transfer List", links: [
                        { name: 'Components', href: paths_1.paths.docs.components.root },
                        { name: 'Transfer List' },
                    ], moreLink: ['https://mui.com/components/transfer-list'] }) }), (0, jsx_runtime_1.jsx)(component_template_1.ScrollToViewTemplate, { data: DEMO })] }));
}

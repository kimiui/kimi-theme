'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DialogView = DialogView;
var jsx_runtime_1 = require("react/jsx-runtime");
var paths_1 = require("../../../routes/paths");
var custom_breadcrumbs_1 = require("../../../components/custom-breadcrumbs");
var form_dialog_1 = require("./form-dialog");
var alert_dialog_1 = require("./alert-dialog");
var scroll_dialog_1 = require("./scroll-dialog");
var simple_dialog_1 = require("./simple-dialog");
var max_width_dialog_1 = require("./max-width-dialog");
var component_hero_1 = require("../../component-hero");
var full_screen_dialog_1 = require("./full-screen-dialog");
var transitions_dialog_1 = require("./transitions-dialog");
var component_block_1 = require("../../component-block");
// ----------------------------------------------------------------------
function DialogView() {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(component_hero_1.ComponentHero, { children: (0, jsx_runtime_1.jsx)(custom_breadcrumbs_1.CustomBreadcrumbs, { heading: "Dialog", links: [{ name: 'Components', href: paths_1.paths.docs.components.root }, { name: 'Dialog' }], moreLink: ['https://mui.com/components/dialogs'] }) }), (0, jsx_runtime_1.jsxs)(component_block_1.ComponentContainer, { sx: {
                    rowGap: 5,
                    columnGap: 3,
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: 'repeat(1, 1fr)',
                        md: 'repeat(2, 1fr)',
                        lg: 'repeat(3, 1fr)',
                    },
                }, children: [(0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { title: "Simple", children: (0, jsx_runtime_1.jsx)(simple_dialog_1.SimpleDialog, {}) }), (0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { title: "Alerts", children: (0, jsx_runtime_1.jsx)(alert_dialog_1.AlertDialog, {}) }), (0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { title: "Transitions", children: (0, jsx_runtime_1.jsx)(transitions_dialog_1.TransitionsDialog, {}) }), (0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { title: "Form", children: (0, jsx_runtime_1.jsx)(form_dialog_1.FormDialog, {}) }), (0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { title: "Full Screen", children: (0, jsx_runtime_1.jsx)(full_screen_dialog_1.FullScreenDialog, {}) }), (0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { title: "Max width dialog", children: (0, jsx_runtime_1.jsx)(max_width_dialog_1.MaxWidthDialog, {}) }), (0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { title: "Scrolling content dialogs", children: (0, jsx_runtime_1.jsx)(scroll_dialog_1.ScrollDialog, {}) })] })] }));
}

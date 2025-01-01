'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilitiesView = UtilitiesView;
var jsx_runtime_1 = require("react/jsx-runtime");
var paths_1 = require("../../../routes/paths");
var custom_breadcrumbs_1 = require("../../../components/custom-breadcrumbs");
var gradient_1 = require("./gradient");
var text_max_line_1 = require("./text-max-line");
var component_hero_1 = require("../../component-hero");
var copy_to_clipboard_1 = require("./copy-to-clipboard");
var component_template_1 = require("../../component-template");
// ----------------------------------------------------------------------
function UtilitiesView() {
    var DEMO = [
        { name: 'Text max line', component: (0, jsx_runtime_1.jsx)(text_max_line_1.TextMaxLine, {}) },
        { name: 'Copy to clipboard', component: (0, jsx_runtime_1.jsx)(copy_to_clipboard_1.CopyToClipboard, {}) },
        { name: 'Gradient', component: (0, jsx_runtime_1.jsx)(gradient_1.Gradient, {}) },
    ];
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(component_hero_1.ComponentHero, { children: (0, jsx_runtime_1.jsx)(custom_breadcrumbs_1.CustomBreadcrumbs, { heading: "Utilities", links: [{ name: 'Components', href: paths_1.paths.docs.components.root }, { name: 'Utilities' }] }) }), (0, jsx_runtime_1.jsx)(component_template_1.ScrollToViewTemplate, { data: DEMO })] }));
}

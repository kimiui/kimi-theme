'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabelView = LabelView;
var jsx_runtime_1 = require("react/jsx-runtime");
var Tooltip_1 = __importDefault(require("@mui/material/Tooltip"));
var paths_1 = require("../../../routes/paths");
var label_1 = require("../../../components/label");
var iconify_1 = require("../../../components/iconify");
var custom_breadcrumbs_1 = require("../../../components/custom-breadcrumbs");
var component_hero_1 = require("../../component-hero");
var component_block_1 = require("../../component-block");
var component_template_1 = require("../../component-template");
// ----------------------------------------------------------------------
var COLORS = ['default', 'primary', 'secondary', 'info', 'success', 'warning', 'error'];
// ----------------------------------------------------------------------
function LabelView() {
    var DEMO = [
        {
            name: 'Filled',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { sx: { gap: 1 }, children: COLORS.map(function (color) { return ((0, jsx_runtime_1.jsx)(Tooltip_1.default, { title: color, children: (0, jsx_runtime_1.jsx)(label_1.Label, { color: color, variant: "filled", children: color }) }, color)); }) })),
        },
        {
            name: 'Outlined',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { sx: { gap: 1 }, children: COLORS.map(function (color) { return ((0, jsx_runtime_1.jsx)(label_1.Label, { color: color, variant: "outlined", children: color }, color)); }) })),
        },
        {
            name: 'Soft',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { sx: { gap: 1 }, children: COLORS.map(function (color) { return ((0, jsx_runtime_1.jsx)(label_1.Label, { color: color, variant: "soft", children: color }, color)); }) })),
        },
        {
            name: 'Inverted',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { sx: { gap: 1 }, children: COLORS.map(function (color) { return ((0, jsx_runtime_1.jsx)(label_1.Label, { color: color, variant: "inverted", children: color }, color)); }) })),
        },
        {
            name: 'With icon',
            component: ((0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { sx: { gap: 1 }, children: [(0, jsx_runtime_1.jsx)(label_1.Label, { variant: "filled", color: "primary", startIcon: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "fluent:mail-24-filled" }), children: "Start icon" }), (0, jsx_runtime_1.jsx)(label_1.Label, { variant: "filled", color: "primary", endIcon: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "fluent:mail-24-filled" }), children: "End icon" }), (0, jsx_runtime_1.jsx)(label_1.Label, { variant: "outlined", color: "primary", startIcon: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "fluent:mail-24-filled" }), children: "Start icon" }), (0, jsx_runtime_1.jsx)(label_1.Label, { variant: "outlined", color: "primary", endIcon: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "fluent:mail-24-filled" }), children: "End icon" }), (0, jsx_runtime_1.jsx)(label_1.Label, { color: "primary", startIcon: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "fluent:mail-24-filled" }), children: "Start icon" }), (0, jsx_runtime_1.jsx)(label_1.Label, { color: "primary", endIcon: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "fluent:mail-24-filled" }), children: "End icon" })] })),
        },
    ];
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(component_hero_1.ComponentHero, { children: (0, jsx_runtime_1.jsx)(custom_breadcrumbs_1.CustomBreadcrumbs, { heading: "Label", links: [{ name: 'Components', href: paths_1.paths.docs.components.root }, { name: 'Label' }] }) }), (0, jsx_runtime_1.jsx)(component_template_1.ScrollToViewTemplate, { data: DEMO })] }));
}

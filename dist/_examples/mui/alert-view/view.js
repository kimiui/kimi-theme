'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertView = AlertView;
var jsx_runtime_1 = require("react/jsx-runtime");
var Alert_1 = __importDefault(require("@mui/material/Alert"));
var Button_1 = __importDefault(require("@mui/material/Button"));
var AlertTitle_1 = __importDefault(require("@mui/material/AlertTitle"));
var paths_1 = require("lib/routes/paths");
var styles_1 = require("lib/theme/styles");
var custom_breadcrumbs_1 = require("lib/components/custom-breadcrumbs");
var component_hero_1 = require("../../component-hero");
var component_block_1 = require("../../component-block");
var component_template_1 = require("../../component-template");
// ----------------------------------------------------------------------
var COLORS = ['info', 'success', 'warning', 'error'];
// ----------------------------------------------------------------------
function AlertView() {
    var DEMO = [
        {
            name: 'Standard',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { sx: { flexDirection: 'column', alignItems: 'unset' }, children: COLORS.map(function (color) { return ((0, jsx_runtime_1.jsxs)(Alert_1.default, { severity: color, onClose: function () { }, children: ["This is an ", color, " alert \u2014 check it out!"] }, color)); }) })),
        },
        {
            name: 'Filled',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { sx: { flexDirection: 'column', alignItems: 'unset' }, children: COLORS.map(function (color) { return ((0, jsx_runtime_1.jsxs)(Alert_1.default, { severity: color, variant: "filled", onClose: function () { }, children: ["This is an ", color, " alert \u2014 check it out!"] }, color)); }) })),
        },
        {
            name: 'Outlined',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { sx: { flexDirection: 'column', alignItems: 'unset' }, children: COLORS.map(function (color) { return ((0, jsx_runtime_1.jsxs)(Alert_1.default, { severity: color, variant: "outlined", onClose: function () { }, children: ["This is an ", color, " alert \u2014 check it out!"] }, color)); }) })),
        },
        {
            name: 'Description',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { sx: { flexDirection: 'column', alignItems: 'unset' }, children: COLORS.map(function (color) { return ((0, jsx_runtime_1.jsxs)(Alert_1.default, { severity: color, onClose: function () { }, children: [(0, jsx_runtime_1.jsxs)(AlertTitle_1.default, { sx: { textTransform: 'capitalize' }, children: [" ", color, " "] }), "This is an ", color, " alert \u2014 ", (0, jsx_runtime_1.jsx)("strong", { children: "check it out!" })] }, color)); }) })),
        },
        {
            name: 'Actions',
            component: ((0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { sx: { flexDirection: 'column', alignItems: 'unset' }, children: [(0, jsx_runtime_1.jsx)(Alert_1.default, { severity: "info", action: (0, jsx_runtime_1.jsx)(Button_1.default, { color: "info", size: "small", variant: "soft", children: "Action" }), children: "This is an info alert \u2014 check it out!" }), (0, jsx_runtime_1.jsx)(Alert_1.default, { severity: "info", variant: "filled", action: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Button_1.default, { color: "inherit", size: "small", variant: "outlined", sx: {
                                        mr: 1,
                                        border: function (theme) {
                                            return "1px solid ".concat((0, styles_1.varAlpha)(theme.vars.palette.common.whiteChannel, 0.48));
                                        },
                                    }, children: "Undo" }), (0, jsx_runtime_1.jsx)(Button_1.default, { size: "small", color: "info", variant: "contained", sx: { bgcolor: 'info.dark' }, children: "Action" })] }), children: "This is an info alert \u2014 check it out!" }), (0, jsx_runtime_1.jsx)(Alert_1.default, { severity: "info", variant: "outlined", action: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Button_1.default, { color: "info", size: "small", variant: "outlined", sx: { mr: 1 }, children: "Undo" }), (0, jsx_runtime_1.jsx)(Button_1.default, { color: "info", size: "small", variant: "contained", sx: { bgcolor: 'info.dark' }, children: "Action" })] }), children: "This is an info alert \u2014 check it out!" })] })),
        },
    ];
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(component_hero_1.ComponentHero, { children: (0, jsx_runtime_1.jsx)(custom_breadcrumbs_1.CustomBreadcrumbs, { heading: "Alert", links: [{ name: 'Components', href: paths_1.paths.docs.components.root }, { name: 'Alert' }], moreLink: ['https://mui.com/components/alert'] }) }), (0, jsx_runtime_1.jsx)(component_template_1.ScrollToViewTemplate, { data: DEMO })] }));
}

'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckboxView = CheckboxView;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Checkbox_1 = __importDefault(require("@mui/material/Checkbox"));
var FormGroup_1 = __importDefault(require("@mui/material/FormGroup"));
var FormControl_1 = __importDefault(require("@mui/material/FormControl"));
var FormControlLabel_1 = __importDefault(require("@mui/material/FormControlLabel"));
var paths_1 = require("../../../routes/paths");
var iconify_1 = require("../../../components/iconify");
var custom_breadcrumbs_1 = require("../../../components/custom-breadcrumbs");
var component_hero_1 = require("../../component-hero");
var component_block_1 = require("../../component-block");
var component_template_1 = require("../../component-template");
// ----------------------------------------------------------------------
var COLORS = ['default', 'primary', 'secondary', 'info', 'success', 'warning', 'error'];
var PLACEMENTS = ['top', 'start', 'bottom', 'end'];
// ----------------------------------------------------------------------
function CheckboxView() {
    var _a = (0, react_1.useState)([true, false]), checked = _a[0], setChecked = _a[1];
    var handleChange1 = function (event) {
        setChecked([event.target.checked, event.target.checked]);
    };
    var handleChange2 = function (event) {
        setChecked([event.target.checked, checked[1]]);
    };
    var handleChange3 = function (event) {
        setChecked([checked[0], event.target.checked]);
    };
    var DEMO = [
        {
            name: 'Basic',
            component: ((0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { children: [(0, jsx_runtime_1.jsx)(Checkbox_1.default, { size: "medium" }), (0, jsx_runtime_1.jsx)(Checkbox_1.default, { size: "medium", defaultChecked: true }), (0, jsx_runtime_1.jsx)(Checkbox_1.default, { size: "medium", defaultChecked: true, indeterminate: true }), (0, jsx_runtime_1.jsx)(Checkbox_1.default, { size: "medium", disabled: true }), (0, jsx_runtime_1.jsx)(Checkbox_1.default, { size: "medium", disabled: true, defaultChecked: true }), (0, jsx_runtime_1.jsx)(Checkbox_1.default, { size: "medium", disabled: true, indeterminate: true })] })),
        },
        {
            name: 'Size & custom icon',
            component: ((0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { children: [(0, jsx_runtime_1.jsx)(FormControlLabel_1.default, { label: "Normal", control: (0, jsx_runtime_1.jsx)(Checkbox_1.default, { size: "medium", defaultChecked: true }) }), (0, jsx_runtime_1.jsx)(FormControlLabel_1.default, { label: "Small", control: (0, jsx_runtime_1.jsx)(Checkbox_1.default, { size: "small", defaultChecked: true }) }), (0, jsx_runtime_1.jsx)(FormControlLabel_1.default, { control: (0, jsx_runtime_1.jsx)(Checkbox_1.default, { color: "info", size: "small", icon: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "solar:heart-bold" }), checkedIcon: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "solar:heart-bold" }), inputProps: { id: 'favorite-checkbox' } }), label: "Custom icon" }), (0, jsx_runtime_1.jsx)(FormControlLabel_1.default, { control: (0, jsx_runtime_1.jsx)(Checkbox_1.default, { color: "error", size: "small", icon: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "eva:award-fill" }), checkedIcon: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "eva:award-fill" }), inputProps: { id: 'award-checkbox' } }), label: "Custom icon" })] })),
        },
        {
            name: 'Placement',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { children: (0, jsx_runtime_1.jsx)(FormControl_1.default, { component: "fieldset", children: (0, jsx_runtime_1.jsx)(FormGroup_1.default, { "aria-label": "position", row: true, children: PLACEMENTS.map(function (placement) { return ((0, jsx_runtime_1.jsx)(FormControlLabel_1.default, { value: placement, label: placement, labelPlacement: placement, control: (0, jsx_runtime_1.jsx)(Checkbox_1.default, { size: "medium" }), sx: { textTransform: 'capitalize' } }, placement)); }) }) }) })),
        },
        {
            name: 'Colors',
            component: ((0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { children: [(0, jsx_runtime_1.jsxs)(FormGroup_1.default, { children: [COLORS.map(function (color) { return ((0, jsx_runtime_1.jsx)(FormControlLabel_1.default, { control: (0, jsx_runtime_1.jsx)(Checkbox_1.default, { size: "medium", defaultChecked: true, color: color }), label: color, sx: { textTransform: 'capitalize' } }, color)); }), (0, jsx_runtime_1.jsx)(FormControlLabel_1.default, { disabled: true, control: (0, jsx_runtime_1.jsx)(Checkbox_1.default, { size: "medium", defaultChecked: true, color: "error" }), label: "Disabled" })] }), (0, jsx_runtime_1.jsx)(FormControl_1.default, { component: "fieldset", children: (0, jsx_runtime_1.jsxs)(FormGroup_1.default, { children: [COLORS.map(function (color) { return ((0, jsx_runtime_1.jsx)(FormControlLabel_1.default, { control: (0, jsx_runtime_1.jsx)(Checkbox_1.default, { size: "medium", defaultChecked: true, indeterminate: true, color: color }), label: color, sx: { textTransform: 'capitalize' } }, color)); }), (0, jsx_runtime_1.jsx)(FormControlLabel_1.default, { disabled: true, control: (0, jsx_runtime_1.jsx)(Checkbox_1.default, { size: "medium", defaultChecked: true, indeterminate: true, color: "error" }), label: "Disabled" })] }) })] })),
        },
        {
            name: 'Indeterminate',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { children: (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(FormControlLabel_1.default, { label: "Parent", control: (0, jsx_runtime_1.jsx)(Checkbox_1.default, { size: "medium", checked: checked[0] && checked[1], indeterminate: checked[0] !== checked[1], onChange: handleChange1 }) }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(FormControlLabel_1.default, { label: "Child 1", control: (0, jsx_runtime_1.jsx)(Checkbox_1.default, { size: "medium", checked: checked[0], onChange: handleChange2 }) }), (0, jsx_runtime_1.jsx)(FormControlLabel_1.default, { label: "Child 2", control: (0, jsx_runtime_1.jsx)(Checkbox_1.default, { size: "medium", checked: checked[1], onChange: handleChange3 }) })] })] }) })),
        },
    ];
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(component_hero_1.ComponentHero, { children: (0, jsx_runtime_1.jsx)(custom_breadcrumbs_1.CustomBreadcrumbs, { heading: "Checkboxes", links: [{ name: 'Components', href: paths_1.paths.docs.components.root }, { name: 'Checkboxes' }], moreLink: ['https://mui.com/components/checkboxes'] }) }), (0, jsx_runtime_1.jsx)(component_template_1.ScrollToViewTemplate, { data: DEMO })] }));
}

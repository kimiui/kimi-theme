'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadioButtonView = RadioButtonView;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Radio_1 = __importDefault(require("@mui/material/Radio"));
var RadioGroup_1 = __importDefault(require("@mui/material/RadioGroup"));
var FormControl_1 = __importDefault(require("@mui/material/FormControl"));
var FormControlLabel_1 = __importDefault(require("@mui/material/FormControlLabel"));
var paths_1 = require("../../../routes/paths");
var custom_breadcrumbs_1 = require("../../../components/custom-breadcrumbs");
var component_hero_1 = require("../../component-hero");
var component_block_1 = require("../../component-block");
var component_template_1 = require("../../component-template");
// ----------------------------------------------------------------------
var COLORS = ['default', 'primary', 'secondary', 'info', 'success', 'warning', 'error'];
var PLACEMENTS = ['top', 'start', 'bottom', 'end'];
// ----------------------------------------------------------------------
function RadioButtonView() {
    var _a = (0, react_1.useState)('a1'), value = _a[0], setValue = _a[1];
    var handleChange = function (event) {
        setValue(event.target.value);
    };
    var DEMO = [
        {
            name: 'Basic',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { children: (0, jsx_runtime_1.jsx)(FormControl_1.default, { component: "fieldset", children: (0, jsx_runtime_1.jsxs)(RadioGroup_1.default, { row: true, defaultValue: "nn", children: [(0, jsx_runtime_1.jsx)(Radio_1.default, { size: "medium", value: "nn" }), (0, jsx_runtime_1.jsx)(Radio_1.default, { size: "medium", value: "gg" }), (0, jsx_runtime_1.jsx)(Radio_1.default, { size: "medium", disabled: true, value: "hh" })] }) }) })),
        },
        {
            name: 'Sizes',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { children: (0, jsx_runtime_1.jsxs)(RadioGroup_1.default, { row: true, defaultValue: "g", children: [(0, jsx_runtime_1.jsx)(FormControlLabel_1.default, { value: "g", control: (0, jsx_runtime_1.jsx)(Radio_1.default, { size: "medium" }), label: "Normal" }), (0, jsx_runtime_1.jsx)(FormControlLabel_1.default, { value: "p", control: (0, jsx_runtime_1.jsx)(Radio_1.default, { size: "small" }), label: "Small" })] }) })),
        },
        {
            name: 'Placement',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { children: (0, jsx_runtime_1.jsx)(FormControl_1.default, { component: "fieldset", children: (0, jsx_runtime_1.jsx)(RadioGroup_1.default, { row: true, defaultValue: "top", children: PLACEMENTS.map(function (placement) { return ((0, jsx_runtime_1.jsx)(FormControlLabel_1.default, { value: placement, label: placement, labelPlacement: placement, control: (0, jsx_runtime_1.jsx)(Radio_1.default, { size: "medium" }), sx: { textTransform: 'capitalize' } }, placement)); }) }) }) })),
        },
        {
            name: 'Colors',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { children: (0, jsx_runtime_1.jsx)(FormControl_1.default, { component: "fieldset", children: (0, jsx_runtime_1.jsxs)(RadioGroup_1.default, { value: value, onChange: handleChange, children: [COLORS.map(function (color) { return ((0, jsx_runtime_1.jsx)(FormControlLabel_1.default, { value: color, control: (0, jsx_runtime_1.jsx)(Radio_1.default, { size: "medium", color: color }), label: color, sx: { textTransform: 'capitalize' } }, color)); }), (0, jsx_runtime_1.jsx)(FormControlLabel_1.default, { disabled: true, value: "a8", control: (0, jsx_runtime_1.jsx)(Radio_1.default, { size: "medium", color: "error" }), label: "Disabled" })] }) }) })),
        },
    ];
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(component_hero_1.ComponentHero, { children: (0, jsx_runtime_1.jsx)(custom_breadcrumbs_1.CustomBreadcrumbs, { heading: "Radio Buttons", links: [
                        { name: 'Components', href: paths_1.paths.docs.components.root },
                        { name: 'Radio Buttons' },
                    ], moreLink: ['https://mui.com/components/radio-buttons'] }) }), (0, jsx_runtime_1.jsx)(component_template_1.ScrollToViewTemplate, { data: DEMO })] }));
}

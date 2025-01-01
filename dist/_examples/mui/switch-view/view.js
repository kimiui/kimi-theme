"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwitchView = SwitchView;
var jsx_runtime_1 = require("react/jsx-runtime");
var Switch_1 = __importDefault(require("@mui/material/Switch"));
var FormGroup_1 = __importDefault(require("@mui/material/FormGroup"));
var FormControl_1 = __importDefault(require("@mui/material/FormControl"));
var FormControlLabel_1 = __importDefault(require("@mui/material/FormControlLabel"));
var paths_1 = require("lib/routes/paths");
var custom_breadcrumbs_1 = require("lib/components/custom-breadcrumbs");
var component_hero_1 = require("../../component-hero");
var component_block_1 = require("../../component-block");
var component_template_1 = require("../../component-template");
// ----------------------------------------------------------------------
var COLORS = ['default', 'primary', 'secondary', 'info', 'success', 'warning', 'error'];
var PLACEMENTS = ['top', 'start', 'bottom', 'end'];
// ----------------------------------------------------------------------
function SwitchView() {
    var DEMO = [
        {
            name: 'Basic',
            component: ((0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { children: [(0, jsx_runtime_1.jsx)(Switch_1.default, { name: "basic-1", defaultChecked: true }), (0, jsx_runtime_1.jsx)(Switch_1.default, { name: "basic-2" }), (0, jsx_runtime_1.jsx)(Switch_1.default, { name: "basic-3", disabled: true }), (0, jsx_runtime_1.jsx)(Switch_1.default, { name: "basic-4", disabled: true, checked: true }), (0, jsx_runtime_1.jsx)(Switch_1.default, { name: "basic-5", defaultChecked: true, color: "default" })] })),
        },
        {
            name: 'Sizes',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { children: (0, jsx_runtime_1.jsxs)(FormGroup_1.default, { row: true, children: [(0, jsx_runtime_1.jsx)(FormControlLabel_1.default, { control: (0, jsx_runtime_1.jsx)(Switch_1.default, { name: "small", size: "small" }), label: "Small" }), (0, jsx_runtime_1.jsx)(FormControlLabel_1.default, { control: (0, jsx_runtime_1.jsx)(Switch_1.default, { name: "normal" }), label: "Normal" })] }) })),
        },
        {
            name: 'Placement',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { children: (0, jsx_runtime_1.jsx)(FormGroup_1.default, { row: true, children: PLACEMENTS.map(function (placement) { return ((0, jsx_runtime_1.jsx)(FormControlLabel_1.default, { value: placement, label: placement, labelPlacement: placement, control: (0, jsx_runtime_1.jsx)(Switch_1.default, { name: placement }), sx: { textTransform: 'capitalize' } }, placement)); }) }) })),
        },
        {
            name: 'Colors',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { children: (0, jsx_runtime_1.jsx)(FormControl_1.default, { component: "fieldset", children: (0, jsx_runtime_1.jsxs)(FormGroup_1.default, { children: [COLORS.map(function (color) { return ((0, jsx_runtime_1.jsx)(FormControlLabel_1.default, { control: (0, jsx_runtime_1.jsx)(Switch_1.default, { defaultChecked: true, name: color, color: color }), label: color, sx: { textTransform: 'capitalize' } }, color)); }), (0, jsx_runtime_1.jsx)(FormControlLabel_1.default, { disabled: true, control: (0, jsx_runtime_1.jsx)(Switch_1.default, { name: "error-disabled", color: "error" }), label: "Disabled" })] }) }) })),
        },
    ];
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(component_hero_1.ComponentHero, { children: (0, jsx_runtime_1.jsx)(custom_breadcrumbs_1.CustomBreadcrumbs, { heading: "Switch", links: [{ name: 'Components', href: paths_1.paths.docs.components.root }, { name: 'Switch' }], moreLink: ['https://mui.com/components/switches'] }) }), (0, jsx_runtime_1.jsx)(component_template_1.ScrollToViewTemplate, { data: DEMO })] }));
}

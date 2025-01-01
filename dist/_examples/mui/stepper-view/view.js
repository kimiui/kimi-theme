"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StepperView = StepperView;
var jsx_runtime_1 = require("react/jsx-runtime");
var paths_1 = require("../../../routes/paths");
var custom_breadcrumbs_1 = require("../../../components/custom-breadcrumbs");
var component_hero_1 = require("../../component-hero");
var component_block_1 = require("../../component-block");
var customized_steppers_1 = require("./customized-steppers");
var component_template_1 = require("../../component-template");
var vertical_linear_stepper_1 = require("./vertical-linear-stepper");
var horizontal_linear_stepper_1 = require("./horizontal-linear-stepper");
var linear_alternative_label_stepper_1 = require("./linear-alternative-label-stepper");
// ----------------------------------------------------------------------
function StepperView() {
    var DEMO = [
        {
            name: 'Horizontal linear stepper',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { sx: { flexDirection: 'column', alignItems: 'unset' }, children: (0, jsx_runtime_1.jsx)(horizontal_linear_stepper_1.HorizontalLinearStepper, {}) })),
        },
        {
            name: 'Linear alternative label',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { sx: { flexDirection: 'column', alignItems: 'unset' }, children: (0, jsx_runtime_1.jsx)(linear_alternative_label_stepper_1.LinearAlternativeLabel, {}) })),
        },
        {
            name: 'Vertical linear stepper',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { sx: { flexDirection: 'column', alignItems: 'unset' }, children: (0, jsx_runtime_1.jsx)(vertical_linear_stepper_1.VerticalLinearStepper, {}) })),
        },
        {
            name: 'Customized stepper',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { sx: { flexDirection: 'column', alignItems: 'unset' }, children: (0, jsx_runtime_1.jsx)(customized_steppers_1.CustomizedSteppers, {}) })),
        },
    ];
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(component_hero_1.ComponentHero, { children: (0, jsx_runtime_1.jsx)(custom_breadcrumbs_1.CustomBreadcrumbs, { heading: "Stepper", links: [{ name: 'Components', href: paths_1.paths.docs.components.root }, { name: 'Stepper' }], moreLink: ['https://mui.com/components/steppers'] }) }), (0, jsx_runtime_1.jsx)(component_template_1.ScrollToViewTemplate, { data: DEMO })] }));
}

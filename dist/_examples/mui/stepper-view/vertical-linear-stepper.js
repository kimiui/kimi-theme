'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerticalLinearStepper = VerticalLinearStepper;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Step_1 = __importDefault(require("@mui/material/Step"));
var Paper_1 = __importDefault(require("@mui/material/Paper"));
var Button_1 = __importDefault(require("@mui/material/Button"));
var Stepper_1 = __importDefault(require("@mui/material/Stepper"));
var StepLabel_1 = __importDefault(require("@mui/material/StepLabel"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var StepContent_1 = __importDefault(require("@mui/material/StepContent"));
var styles_1 = require("lib/theme/styles");
// ----------------------------------------------------------------------
var steps = [
    {
        label: 'Select campaign settings',
        description: "For each ad campaign that you create, you can control how much\n              you're willing to spend on clicks and conversions, which networks\n              and geographical locations you want your ads to show on, and more.",
    },
    {
        label: 'Create an ad group',
        description: 'An ad group contains one or more ads which target a shared set of keywords.',
    },
    {
        label: 'Create an ad',
        description: "Try out different ad text to see what brings in the most customers,\n              and learn how to enhance your ads using features like ad extensions.\n              If you run into any problems with your ads, find out how to tell if\n              they're running and how to resolve approval issues.",
    },
];
// ----------------------------------------------------------------------
function VerticalLinearStepper() {
    var _a = (0, react_1.useState)(0), activeStep = _a[0], setActiveStep = _a[1];
    var handleNext = function () {
        setActiveStep(function (prevActiveStep) { return prevActiveStep + 1; });
    };
    var handleBack = function () {
        setActiveStep(function (prevActiveStep) { return prevActiveStep - 1; });
    };
    var handleReset = function () {
        setActiveStep(0);
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Stepper_1.default, { activeStep: activeStep, orientation: "vertical", children: steps.map(function (step, index) { return ((0, jsx_runtime_1.jsxs)(Step_1.default, { children: [(0, jsx_runtime_1.jsx)(StepLabel_1.default, { optional: index === 2 ? (0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "caption", children: "Last step" }) : null, children: step.label }), (0, jsx_runtime_1.jsxs)(StepContent_1.default, { children: [(0, jsx_runtime_1.jsx)(Typography_1.default, { children: step.description }), (0, jsx_runtime_1.jsxs)(Box_1.default, { sx: { mt: 3 }, children: [(0, jsx_runtime_1.jsx)(Button_1.default, { variant: "contained", onClick: handleNext, children: index === steps.length - 1 ? 'Finish' : 'Continue' }), (0, jsx_runtime_1.jsx)(Button_1.default, { disabled: index === 0, onClick: handleBack, children: "Back" })] })] })] }, step.label)); }) }), activeStep === steps.length && ((0, jsx_runtime_1.jsxs)(Paper_1.default, { sx: {
                    p: 3,
                    mt: 3,
                    bgcolor: function (theme) { return (0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0.12); },
                }, children: [(0, jsx_runtime_1.jsx)(Typography_1.default, { sx: { mb: 2 }, children: "All steps completed - you're finished" }), (0, jsx_runtime_1.jsx)(Button_1.default, { onClick: handleReset, children: "Reset" })] }))] }));
}

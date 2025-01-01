'use client';
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinearAlternativeLabel = LinearAlternativeLabel;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Step_1 = __importDefault(require("@mui/material/Step"));
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var Paper_1 = __importDefault(require("@mui/material/Paper"));
var Button_1 = __importDefault(require("@mui/material/Button"));
var Stepper_1 = __importDefault(require("@mui/material/Stepper"));
var StepLabel_1 = __importDefault(require("@mui/material/StepLabel"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var styles_1 = require("../../../theme/styles");
// ----------------------------------------------------------------------
var steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];
function LinearAlternativeLabel() {
    var _a = (0, react_1.useState)(0), activeStep = _a[0], setActiveStep = _a[1];
    var _b = (0, react_1.useState)(new Set()), skipped = _b[0], setSkipped = _b[1];
    var isStepOptional = function (step) { return step === 1; };
    var isStepSkipped = function (step) { return skipped.has(step); };
    var handleNext = function () {
        var newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }
        setActiveStep(function (prevActiveStep) { return prevActiveStep + 1; });
        setSkipped(newSkipped);
    };
    var handleBack = function () {
        setActiveStep(function (prevActiveStep) { return prevActiveStep - 1; });
    };
    var handleSkip = function () {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }
        setActiveStep(function (prevActiveStep) { return prevActiveStep + 1; });
        setSkipped(function (prevSkipped) {
            var newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };
    var handleReset = function () {
        setActiveStep(0);
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Stepper_1.default, { activeStep: activeStep, alternativeLabel: true, children: steps.map(function (label, index) {
                    var stepProps = {};
                    var labelProps = {};
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return ((0, jsx_runtime_1.jsx)(Step_1.default, __assign({}, stepProps, { children: (0, jsx_runtime_1.jsx)(StepLabel_1.default, __assign({}, labelProps, { children: label })) }), label));
                }) }), activeStep === steps.length ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Paper_1.default, { sx: {
                            p: 3,
                            my: 3,
                            minHeight: 120,
                            bgcolor: function (theme) { return (0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0.12); },
                        }, children: (0, jsx_runtime_1.jsx)(Typography_1.default, { sx: { my: 1 }, children: "All steps completed - you're finished" }) }), (0, jsx_runtime_1.jsxs)(Box_1.default, { sx: { display: 'flex' }, children: [(0, jsx_runtime_1.jsx)(Box_1.default, { sx: { flexGrow: 1 } }), (0, jsx_runtime_1.jsx)(Button_1.default, { onClick: handleReset, children: "Reset" })] })] })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Paper_1.default, { sx: {
                            p: 3,
                            my: 3,
                            minHeight: 120,
                            bgcolor: function (theme) { return (0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0.12); },
                        }, children: (0, jsx_runtime_1.jsxs)(Typography_1.default, { sx: { my: 1 }, children: [" Step ", activeStep + 1] }) }), (0, jsx_runtime_1.jsxs)(Stack_1.default, { direction: "row", children: [(0, jsx_runtime_1.jsx)(Button_1.default, { color: "inherit", disabled: activeStep === 0, onClick: handleBack, sx: { mr: 1 }, children: "Back" }), (0, jsx_runtime_1.jsx)(Box_1.default, { sx: { flexGrow: 1 } }), isStepOptional(activeStep) && ((0, jsx_runtime_1.jsx)(Button_1.default, { color: "inherit", onClick: handleSkip, sx: { mr: 1 }, children: "Skip" })), (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "contained", onClick: handleNext, children: activeStep === steps.length - 1 ? 'Finish' : 'Next' })] })] }))] }));
}

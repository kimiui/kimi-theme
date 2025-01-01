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
exports.Stepper = Stepper;
exports.StepOne = StepOne;
exports.StepTwo = StepTwo;
exports.StepThree = StepThree;
exports.StepCompleted = StepCompleted;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Step_1 = __importDefault(require("@mui/material/Step"));
var Button_1 = __importDefault(require("@mui/material/Button"));
var Stepper_1 = __importDefault(require("@mui/material/Stepper"));
var StepLabel_1 = __importDefault(require("@mui/material/StepLabel"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var iconify_1 = require("../../../components/iconify");
var hook_form_1 = require("../../../components/hook-form");
function Stepper(_a) {
    var steps = _a.steps, activeStep = _a.activeStep;
    return ((0, jsx_runtime_1.jsx)(Stepper_1.default, { activeStep: activeStep, alternativeLabel: true, sx: { mb: 5 }, children: steps.map(function (label, index) { return ((0, jsx_runtime_1.jsx)(Step_1.default, { children: (0, jsx_runtime_1.jsx)(StepLabel_1.default, { StepIconComponent: function (_a) {
                    var active = _a.active, completed = _a.completed;
                    return ((0, jsx_runtime_1.jsx)(Box_1.default, { display: "flex", alignItems: "center", justifyContent: "center", sx: __assign(__assign({ width: 24, height: 24, borderRadius: '50%', color: 'text.disabled', typography: 'subtitle2', bgcolor: 'action.disabledBackground' }, (active && { bgcolor: 'primary.main', color: 'primary.contrastText' })), (completed && { bgcolor: 'primary.main', color: 'primary.contrastText' })), children: completed ? ((0, jsx_runtime_1.jsx)(iconify_1.Iconify, { width: 14, icon: "mingcute:check-fill" })) : ((0, jsx_runtime_1.jsx)(Box_1.default, { sx: { typography: 'subtitle2' }, children: index + 1 })) }));
                }, children: label }) }, label)); }) }));
}
// ----------------------------------------------------------------------
function StepOne() {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(hook_form_1.Field.Text, { name: "stepOne.firstName", label: "First name", variant: "filled", InputLabelProps: { shrink: true } }), (0, jsx_runtime_1.jsx)(hook_form_1.Field.Text, { name: "stepOne.lastName", label: "Last name", variant: "filled", InputLabelProps: { shrink: true } })] }));
}
function StepTwo() {
    return ((0, jsx_runtime_1.jsx)(hook_form_1.Field.Text, { name: "stepTwo.age", label: "Age", type: "number", variant: "filled", InputLabelProps: { shrink: true }, helperText: "Age must be between 18 and 100" }));
}
function StepThree() {
    return ((0, jsx_runtime_1.jsx)(hook_form_1.Field.Text, { name: "stepThree.email", label: "Email", variant: "filled", InputLabelProps: { shrink: true } }));
}
function StepCompleted(_a) {
    var onReset = _a.onReset;
    return ((0, jsx_runtime_1.jsxs)(Box_1.default, { gap: 3, display: "flex", flex: "1 1 auto", alignItems: "center", flexDirection: "column", justifyContent: "center", sx: { borderRadius: 'inherit', bgcolor: 'background.neutral' }, children: [(0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "subtitle1", children: "All steps completed - you're finished" }), (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "outlined", onClick: onReset, startIcon: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "solar:restart-bold" }), children: "Reset" })] }));
}

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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomizedSteppers = CustomizedSteppers;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Step_1 = __importDefault(require("@mui/material/Step"));
var Paper_1 = __importDefault(require("@mui/material/Paper"));
var Button_1 = __importDefault(require("@mui/material/Button"));
var Stepper_1 = __importDefault(require("@mui/material/Stepper"));
var styles_1 = require("@mui/material/styles");
var StepLabel_1 = __importDefault(require("@mui/material/StepLabel"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var StepConnector_1 = __importStar(require("@mui/material/StepConnector"));
var iconify_1 = require("lib/components/iconify");
var styles_2 = require("lib/theme/styles");
// ----------------------------------------------------------------------
var STEPS = ['Select campaign settings', 'Create an ad group', 'Create an ad'];
var QontoConnector = (0, styles_1.styled)(StepConnector_1.default)(function (_a) {
    var _b, _c, _d;
    var theme = _a.theme;
    return (_b = {},
        _b["&.".concat(StepConnector_1.stepConnectorClasses.alternativeLabel)] = {
            top: 10,
            left: 'calc(-50% + 16px)',
            right: 'calc(50% + 16px)',
        },
        _b["&.".concat(StepConnector_1.stepConnectorClasses.active)] = (_c = {},
            _c["& .".concat(StepConnector_1.stepConnectorClasses.line)] = { borderColor: theme.vars.palette.success.main },
            _c),
        _b["&.".concat(StepConnector_1.stepConnectorClasses.completed)] = (_d = {},
            _d["& .".concat(StepConnector_1.stepConnectorClasses.line)] = { borderColor: theme.vars.palette.success.main },
            _d),
        _b["& .".concat(StepConnector_1.stepConnectorClasses.line)] = {
            borderRadius: 1,
            borderTopWidth: 3,
            borderColor: theme.vars.palette.divider,
        },
        _b);
});
var QontoStepIconRoot = (0, styles_1.styled)('div')(function (_a) {
    var theme = _a.theme, ownerState = _a.ownerState;
    return (__assign(__assign({ height: 22, display: 'flex', alignItems: 'center', color: theme.vars.palette.text.disabled }, (ownerState.active && { color: theme.vars.palette.success.main })), { '& .QontoStepIcon-completedIcon': {
            zIndex: 1,
            fontSize: 18,
            color: theme.vars.palette.success.main,
        }, '& .QontoStepIcon-circle': {
            width: 8,
            height: 8,
            borderRadius: '50%',
            backgroundColor: 'currentColor',
        } }));
});
function QontoStepIcon(props) {
    var active = props.active, completed = props.completed, className = props.className;
    return ((0, jsx_runtime_1.jsx)(QontoStepIconRoot, { ownerState: { active: active }, className: className, children: completed ? ((0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "eva:checkmark-fill", className: "QontoStepIcon-completedIcon", width: 24, height: 24 })) : ((0, jsx_runtime_1.jsx)("div", { className: "QontoStepIcon-circle" })) }));
}
var ColorlibConnector = (0, styles_1.styled)(StepConnector_1.default)(function (_a) {
    var _b, _c, _d;
    var theme = _a.theme;
    return (_b = {},
        _b["&.".concat(StepConnector_1.stepConnectorClasses.alternativeLabel)] = { top: 22 },
        _b["&.".concat(StepConnector_1.stepConnectorClasses.active)] = (_c = {},
            _c["& .".concat(StepConnector_1.stepConnectorClasses.line)] = __assign({}, (0, styles_2.bgGradient)({
                color: "0deg, ".concat(theme.vars.palette.error.light, ", ").concat(theme.vars.palette.error.main),
            })),
            _c),
        _b["&.".concat(StepConnector_1.stepConnectorClasses.completed)] = (_d = {},
            _d["& .".concat(StepConnector_1.stepConnectorClasses.line)] = __assign({}, (0, styles_2.bgGradient)({
                color: "0deg, ".concat(theme.vars.palette.error.light, ", ").concat(theme.vars.palette.error.main),
            })),
            _d),
        _b["& .".concat(StepConnector_1.stepConnectorClasses.line)] = {
            height: 3,
            border: 0,
            borderRadius: 1,
            backgroundColor: theme.vars.palette.divider,
        },
        _b);
});
var ColorlibStepIconRoot = (0, styles_1.styled)('div')(function (_a) {
    var _b;
    var theme = _a.theme, ownerState = _a.ownerState;
    return (__assign(__assign((_b = { zIndex: 1, width: 50, height: 50, display: 'flex', borderRadius: '50%', alignItems: 'center', justifyContent: 'center', color: theme.vars.palette.text.disabled, backgroundColor: theme.vars.palette.grey[300] }, _b[styles_2.stylesMode.dark] = { backgroundColor: theme.vars.palette.grey[700] }, _b), (ownerState.active && __assign(__assign({}, (0, styles_2.bgGradient)({
        color: "0deg, ".concat(theme.vars.palette.error.light, ", ").concat(theme.vars.palette.error.main),
    })), { color: theme.vars.palette.common.white, boxShadow: '0 4px 10px 0 rgba(0,0,0,0.25)' }))), (ownerState.completed && __assign({ color: theme.vars.palette.common.white }, (0, styles_2.bgGradient)({
        color: "0deg, ".concat(theme.vars.palette.error.light, ", ").concat(theme.vars.palette.error.main),
    })))));
});
function ColorlibStepIcon(_a) {
    var active = _a.active, completed = _a.completed, className = _a.className, icon = _a.icon;
    var icons = {
        1: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "eva:settings-2-outline", width: 24 }),
        2: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "eva:person-add-outline", width: 24 }),
        3: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "eva:monitor-outline", width: 24 }),
    };
    return ((0, jsx_runtime_1.jsx)(ColorlibStepIconRoot, { ownerState: { completed: completed, active: active }, className: className, children: icons[String(icon)] }));
}
function getStepContent(step) {
    switch (step) {
        case 0:
            return 'Select campaign settings...';
        case 1:
            return 'What is an ad group anyways?';
        case 2:
            return 'This is the bit I really care about!';
        default:
            return 'Unknown step';
    }
}
function CustomizedSteppers() {
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
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Stepper_1.default, { alternativeLabel: true, activeStep: activeStep, connector: (0, jsx_runtime_1.jsx)(QontoConnector, {}), children: STEPS.map(function (label) { return ((0, jsx_runtime_1.jsx)(Step_1.default, { children: (0, jsx_runtime_1.jsx)(StepLabel_1.default, { StepIconComponent: QontoStepIcon, children: label }) }, label)); }) }), (0, jsx_runtime_1.jsx)(Box_1.default, { sx: { mb: 5 } }), (0, jsx_runtime_1.jsx)(Stepper_1.default, { alternativeLabel: true, activeStep: activeStep, connector: (0, jsx_runtime_1.jsx)(ColorlibConnector, {}), children: STEPS.map(function (label) { return ((0, jsx_runtime_1.jsx)(Step_1.default, { children: (0, jsx_runtime_1.jsx)(StepLabel_1.default, { StepIconComponent: ColorlibStepIcon, children: label }) }, label)); }) }), activeStep === STEPS.length ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Paper_1.default, { sx: {
                            p: 3,
                            my: 3,
                            minHeight: 120,
                            bgcolor: function (theme) { return (0, styles_2.varAlpha)(theme.vars.palette.grey['500Channel'], 0.12); },
                        }, children: (0, jsx_runtime_1.jsx)(Typography_1.default, { sx: { my: 1 }, children: "All steps completed - you're finished" }) }), (0, jsx_runtime_1.jsx)(Button_1.default, { color: "inherit", onClick: handleReset, sx: { mr: 'auto' }, children: "Reset" })] })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Paper_1.default, { sx: {
                            p: 3,
                            my: 3,
                            minHeight: 120,
                            bgcolor: function (theme) { return (0, styles_2.varAlpha)(theme.vars.palette.grey['500Channel'], 0.12); },
                        }, children: (0, jsx_runtime_1.jsx)(Typography_1.default, { sx: { my: 1 }, children: getStepContent(activeStep) }) }), (0, jsx_runtime_1.jsxs)(Box_1.default, { sx: { textAlign: 'right' }, children: [(0, jsx_runtime_1.jsx)(Button_1.default, { disabled: activeStep === 0, onClick: handleBack, sx: { mr: 1 }, children: "Back" }), (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "contained", onClick: handleNext, sx: { mr: 1 }, children: activeStep === STEPS.length - 1 ? 'Finish' : 'Next' })] })] }))] }));
}

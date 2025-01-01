'use client';
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormWizard = FormWizard;
var jsx_runtime_1 = require("react/jsx-runtime");
var zod_1 = require("zod");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Card_1 = __importDefault(require("@mui/material/Card"));
var react_hook_form_1 = require("react-hook-form");
var Button_1 = __importDefault(require("@mui/material/Button"));
var react_1 = require("react");
var LoadingButton_1 = __importDefault(require("@mui/lab/LoadingButton"));
var zod_2 = require("@hookform/resolvers/zod");
var snackbar_1 = require("lib/components/snackbar");
var hook_form_1 = require("lib/components/hook-form");
var form_steps_1 = require("./form-steps");
// ----------------------------------------------------------------------
var steps = ['Step one', 'Step two', 'Step three'];
var StepOneSchema = zod_1.z.object({
    firstName: zod_1.z.string().min(1, { message: 'Full name is required!' }),
    lastName: zod_1.z.string().min(1, { message: 'Last name is required!' }),
});
var StepTwoSchema = zod_1.z.object({
    age: zod_1.z
        .number()
        .min(1, { message: 'Age is required!' })
        .min(18, { message: 'Age must be between 18 and 100' })
        .max(100, { message: 'Age must be between 18 and 100' }),
});
var StepThreeSchema = zod_1.z.object({
    email: zod_1.z
        .string()
        .min(1, { message: 'Email is required!' })
        .email({ message: 'Email must be a valid email address!' }),
});
var WizardSchema = zod_1.z.object({
    stepOne: StepOneSchema,
    stepTwo: StepTwoSchema,
    stepThree: StepThreeSchema,
});
// ----------------------------------------------------------------------
var defaultValues = {
    stepOne: { firstName: '', lastName: '' },
    stepTwo: { age: 0 },
    stepThree: { email: '' },
};
function FormWizard() {
    var _this = this;
    var _a = (0, react_1.useState)(0), activeStep = _a[0], setActiveStep = _a[1];
    var methods = (0, react_hook_form_1.useForm)({
        mode: 'onChange',
        resolver: (0, zod_2.zodResolver)(WizardSchema),
        defaultValues: defaultValues,
    });
    var reset = methods.reset, trigger = methods.trigger, handleSubmit = methods.handleSubmit, isSubmitting = methods.formState.isSubmitting;
    var handleNext = (0, react_1.useCallback)(function (step) { return __awaiter(_this, void 0, void 0, function () {
        var isValid;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!step) return [3 /*break*/, 2];
                    return [4 /*yield*/, trigger(step)];
                case 1:
                    isValid = _a.sent();
                    if (isValid) {
                        setActiveStep(function (prevActiveStep) { return prevActiveStep + 1; });
                    }
                    return [3 /*break*/, 3];
                case 2:
                    setActiveStep(function (prevActiveStep) { return prevActiveStep + 1; });
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    }); }, [trigger]);
    var handleBack = (0, react_1.useCallback)(function () {
        setActiveStep(function (prevActiveStep) { return prevActiveStep - 1; });
    }, []);
    var handleReset = (0, react_1.useCallback)(function () {
        reset();
        setActiveStep(0);
    }, [reset]);
    var onSubmit = handleSubmit(function (data) { return __awaiter(_this, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 1000); })];
                case 1:
                    _a.sent();
                    snackbar_1.toast.success('Create success!');
                    console.info('DATA', data);
                    handleNext();
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); });
    var completedStep = activeStep === steps.length;
    return ((0, jsx_runtime_1.jsx)(Card_1.default, { sx: { p: 5, width: 1, mx: 'auto', maxWidth: 720 }, children: (0, jsx_runtime_1.jsxs)(hook_form_1.Form, { methods: methods, onSubmit: onSubmit, children: [(0, jsx_runtime_1.jsx)(form_steps_1.Stepper, { steps: steps, activeStep: activeStep }), (0, jsx_runtime_1.jsxs)(Box_1.default, { gap: 3, display: "flex", flexDirection: "column", sx: {
                        p: 3,
                        mb: 3,
                        minHeight: 240,
                        borderRadius: 1.5,
                        border: function (theme) { return "dashed 1px ".concat(theme.vars.palette.divider); },
                    }, children: [activeStep === 0 && (0, jsx_runtime_1.jsx)(form_steps_1.StepOne, {}), activeStep === 1 && (0, jsx_runtime_1.jsx)(form_steps_1.StepTwo, {}), activeStep === 2 && (0, jsx_runtime_1.jsx)(form_steps_1.StepThree, {}), completedStep && (0, jsx_runtime_1.jsx)(form_steps_1.StepCompleted, { onReset: handleReset })] }), !completedStep && ((0, jsx_runtime_1.jsxs)(Box_1.default, { display: "flex", children: [activeStep !== 0 && (0, jsx_runtime_1.jsx)(Button_1.default, { onClick: handleBack, children: "Back" }), (0, jsx_runtime_1.jsx)(Box_1.default, { sx: { flex: '1 1 auto' } }), activeStep === 0 && ((0, jsx_runtime_1.jsx)(Button_1.default, { variant: "contained", onClick: function () { return handleNext('stepOne'); }, children: "Next" })), activeStep === 1 && ((0, jsx_runtime_1.jsx)(Button_1.default, { variant: "contained", onClick: function () { return handleNext('stepTwo'); }, children: "Next" })), activeStep === 2 && ((0, jsx_runtime_1.jsx)(LoadingButton_1.default, { type: "submit", variant: "contained", loading: isSubmitting, children: "Save changes" }))] }))] }) }));
}

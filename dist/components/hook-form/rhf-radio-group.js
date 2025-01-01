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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RHFRadioGroup = RHFRadioGroup;
var jsx_runtime_1 = require("react/jsx-runtime");
var Radio_1 = __importDefault(require("@mui/material/Radio"));
var FormLabel_1 = __importDefault(require("@mui/material/FormLabel"));
var RadioGroup_1 = __importDefault(require("@mui/material/RadioGroup"));
var FormControl_1 = __importDefault(require("@mui/material/FormControl"));
var FormHelperText_1 = __importDefault(require("@mui/material/FormHelperText"));
var react_hook_form_1 = require("react-hook-form");
var FormControlLabel_1 = __importDefault(require("@mui/material/FormControlLabel"));
function RHFRadioGroup(_a) {
    var name = _a.name, label = _a.label, options = _a.options, helperText = _a.helperText, slotProps = _a.slotProps, other = __rest(_a, ["name", "label", "options", "helperText", "slotProps"]);
    var control = (0, react_hook_form_1.useFormContext)().control;
    var labelledby = "".concat(name, "-radio-buttons-group-label");
    var ariaLabel = function (val) { return "Radio ".concat(val); };
    return ((0, jsx_runtime_1.jsx)(react_hook_form_1.Controller, { name: name, control: control, render: function (_a) {
            var field = _a.field, error = _a.fieldState.error;
            return ((0, jsx_runtime_1.jsxs)(FormControl_1.default, { component: "fieldset", sx: slotProps === null || slotProps === void 0 ? void 0 : slotProps.wrap, children: [label && ((0, jsx_runtime_1.jsx)(FormLabel_1.default, __assign({ id: labelledby, component: "legend" }, slotProps === null || slotProps === void 0 ? void 0 : slotProps.formLabel, { sx: __assign({ mb: 1, typography: 'body2' }, slotProps === null || slotProps === void 0 ? void 0 : slotProps.formLabel.sx), children: label }))), (0, jsx_runtime_1.jsx)(RadioGroup_1.default, __assign({}, field, { "aria-labelledby": labelledby }, other, { children: options.map(function (option) {
                            var _a;
                            return ((0, jsx_runtime_1.jsx)(FormControlLabel_1.default, { value: option.value, control: (0, jsx_runtime_1.jsx)(Radio_1.default, __assign({}, slotProps === null || slotProps === void 0 ? void 0 : slotProps.radio, { inputProps: __assign(__assign({}, (!option.label && { 'aria-label': ariaLabel(option.label) })), (_a = slotProps === null || slotProps === void 0 ? void 0 : slotProps.radio) === null || _a === void 0 ? void 0 : _a.inputProps) })), label: option.label }, option.value));
                        }) })), (!!error || helperText) && ((0, jsx_runtime_1.jsx)(FormHelperText_1.default, __assign({ error: !!error, sx: { mx: 0 } }, slotProps === null || slotProps === void 0 ? void 0 : slotProps.formHelperText, { children: error ? error === null || error === void 0 ? void 0 : error.message : helperText })))] }));
        } }));
}

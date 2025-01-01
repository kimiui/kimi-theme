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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RHFSwitch = RHFSwitch;
exports.RHFMultiSwitch = RHFMultiSwitch;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Switch_1 = __importDefault(require("@mui/material/Switch"));
var FormGroup_1 = __importDefault(require("@mui/material/FormGroup"));
var FormLabel_1 = __importDefault(require("@mui/material/FormLabel"));
var FormControl_1 = __importDefault(require("@mui/material/FormControl"));
var FormHelperText_1 = __importDefault(require("@mui/material/FormHelperText"));
var react_hook_form_1 = require("react-hook-form");
var FormControlLabel_1 = __importDefault(require("@mui/material/FormControlLabel"));
function RHFSwitch(_a) {
    var name = _a.name, helperText = _a.helperText, label = _a.label, slotProps = _a.slotProps, other = __rest(_a, ["name", "helperText", "label", "slotProps"]);
    var control = (0, react_hook_form_1.useFormContext)().control;
    var ariaLabel = "Switch ".concat(name);
    return ((0, jsx_runtime_1.jsx)(react_hook_form_1.Controller, { name: name, control: control, render: function (_a) {
            var _b, _c;
            var field = _a.field, error = _a.fieldState.error;
            return ((0, jsx_runtime_1.jsxs)(Box_1.default, { sx: slotProps === null || slotProps === void 0 ? void 0 : slotProps.wrap, children: [(0, jsx_runtime_1.jsx)(FormControlLabel_1.default, __assign({ control: (0, jsx_runtime_1.jsx)(Switch_1.default, __assign({}, field, { checked: field.value }, slotProps === null || slotProps === void 0 ? void 0 : slotProps.switch, { inputProps: __assign(__assign({}, (!label && { 'aria-label': ariaLabel })), (_b = slotProps === null || slotProps === void 0 ? void 0 : slotProps.switch) === null || _b === void 0 ? void 0 : _b.inputProps) })), label: label }, other)), (!!error || helperText) && ((0, jsx_runtime_1.jsx)(FormHelperText_1.default, __assign({ error: !!error }, slotProps === null || slotProps === void 0 ? void 0 : slotProps.formHelperText, { sx: (_c = slotProps === null || slotProps === void 0 ? void 0 : slotProps.formHelperText) === null || _c === void 0 ? void 0 : _c.sx, children: error ? error === null || error === void 0 ? void 0 : error.message : helperText })))] }));
        } }));
}
function RHFMultiSwitch(_a) {
    var name = _a.name, label = _a.label, options = _a.options, helperText = _a.helperText, slotProps = _a.slotProps, other = __rest(_a, ["name", "label", "options", "helperText", "slotProps"]);
    var control = (0, react_hook_form_1.useFormContext)().control;
    var getSelected = function (selectedItems, item) {
        return selectedItems.includes(item)
            ? selectedItems.filter(function (value) { return value !== item; })
            : __spreadArray(__spreadArray([], selectedItems, true), [item], false);
    };
    var accessibility = function (val) { return val; };
    var ariaLabel = function (val) { return "Switch ".concat(val); };
    return ((0, jsx_runtime_1.jsx)(react_hook_form_1.Controller, { name: name, control: control, render: function (_a) {
            var _b;
            var field = _a.field, error = _a.fieldState.error;
            return ((0, jsx_runtime_1.jsxs)(FormControl_1.default, { component: "fieldset", sx: slotProps === null || slotProps === void 0 ? void 0 : slotProps.wrap, children: [label && ((0, jsx_runtime_1.jsx)(FormLabel_1.default, __assign({ component: "legend" }, slotProps === null || slotProps === void 0 ? void 0 : slotProps.formLabel, { sx: __assign({ mb: 1, typography: 'body2' }, (_b = slotProps === null || slotProps === void 0 ? void 0 : slotProps.formLabel) === null || _b === void 0 ? void 0 : _b.sx), children: label }))), (0, jsx_runtime_1.jsx)(FormGroup_1.default, __assign({}, other, { children: options.map(function (option) {
                            var _a;
                            return ((0, jsx_runtime_1.jsx)(FormControlLabel_1.default, { control: (0, jsx_runtime_1.jsx)(Switch_1.default, __assign({ checked: field.value.includes(option.value), onChange: function () { return field.onChange(getSelected(field.value, option.value)); }, name: accessibility(option.label) }, slotProps === null || slotProps === void 0 ? void 0 : slotProps.switch, { inputProps: __assign(__assign({}, (!option.label && { 'aria-label': ariaLabel(option.label) })), (_a = slotProps === null || slotProps === void 0 ? void 0 : slotProps.switch) === null || _a === void 0 ? void 0 : _a.inputProps) })), label: option.label }, option.value));
                        }) })), (!!error || helperText) && ((0, jsx_runtime_1.jsx)(FormHelperText_1.default, __assign({ error: !!error, sx: { mx: 0 } }, slotProps === null || slotProps === void 0 ? void 0 : slotProps.formHelperText, { children: error ? error === null || error === void 0 ? void 0 : error.message : helperText })))] }));
        } }));
}

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
exports.RHFSelect = RHFSelect;
exports.RHFMultiSelect = RHFMultiSelect;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Chip_1 = __importDefault(require("@mui/material/Chip"));
var Select_1 = __importDefault(require("@mui/material/Select"));
var MenuItem_1 = __importDefault(require("@mui/material/MenuItem"));
var Checkbox_1 = __importDefault(require("@mui/material/Checkbox"));
var TextField_1 = __importDefault(require("@mui/material/TextField"));
var InputLabel_1 = __importDefault(require("@mui/material/InputLabel"));
var FormControl_1 = __importDefault(require("@mui/material/FormControl"));
var FormHelperText_1 = __importDefault(require("@mui/material/FormHelperText"));
var react_hook_form_1 = require("react-hook-form");
function RHFSelect(_a) {
    var name = _a.name, native = _a.native, children = _a.children, slotProps = _a.slotProps, helperText = _a.helperText, inputProps = _a.inputProps, InputLabelProps = _a.InputLabelProps, other = __rest(_a, ["name", "native", "children", "slotProps", "helperText", "inputProps", "InputLabelProps"]);
    var control = (0, react_hook_form_1.useFormContext)().control;
    var labelId = "".concat(name, "-select-label");
    return ((0, jsx_runtime_1.jsx)(react_hook_form_1.Controller, { name: name, control: control, render: function (_a) {
            var field = _a.field, error = _a.fieldState.error;
            return ((0, jsx_runtime_1.jsx)(TextField_1.default, __assign({}, field, { select: true, fullWidth: true, SelectProps: {
                    native: native,
                    MenuProps: { PaperProps: { sx: __assign({ maxHeight: 220 }, slotProps === null || slotProps === void 0 ? void 0 : slotProps.paper) } },
                    sx: { textTransform: 'capitalize' },
                }, InputLabelProps: __assign({ htmlFor: labelId }, InputLabelProps), inputProps: __assign({ id: labelId }, inputProps), error: !!error, helperText: error ? error === null || error === void 0 ? void 0 : error.message : helperText }, other, { children: children })));
        } }));
}
function RHFMultiSelect(_a) {
    var name = _a.name, chip = _a.chip, label = _a.label, options = _a.options, checkbox = _a.checkbox, placeholder = _a.placeholder, slotProps = _a.slotProps, helperText = _a.helperText, other = __rest(_a, ["name", "chip", "label", "options", "checkbox", "placeholder", "slotProps", "helperText"]);
    var control = (0, react_hook_form_1.useFormContext)().control;
    var labelId = "".concat(name, "-select-label");
    return ((0, jsx_runtime_1.jsx)(react_hook_form_1.Controller, { name: name, control: control, render: function (_a) {
            var _b;
            var field = _a.field, error = _a.fieldState.error;
            return ((0, jsx_runtime_1.jsxs)(FormControl_1.default, __assign({ error: !!error }, other, { children: [label && ((0, jsx_runtime_1.jsx)(InputLabel_1.default, __assign({ htmlFor: labelId }, slotProps === null || slotProps === void 0 ? void 0 : slotProps.inputLabel, { children: label }))), (0, jsx_runtime_1.jsx)(Select_1.default, __assign({}, field, { multiple: true, displayEmpty: !!placeholder, label: label, renderValue: function (selected) {
                            var selectedItems = options.filter(function (item) {
                                return selected.includes(item.value);
                            });
                            if (!selectedItems.length && placeholder) {
                                return (0, jsx_runtime_1.jsx)(Box_1.default, { sx: { color: 'text.disabled' }, children: placeholder });
                            }
                            if (chip) {
                                return ((0, jsx_runtime_1.jsx)(Box_1.default, { sx: { gap: 0.5, display: 'flex', flexWrap: 'wrap' }, children: selectedItems.map(function (item) { return ((0, jsx_runtime_1.jsx)(Chip_1.default, __assign({ size: "small", variant: "soft", label: item.label }, slotProps === null || slotProps === void 0 ? void 0 : slotProps.chip), item.value)); }) }));
                            }
                            return selectedItems.map(function (item) { return item.label; }).join(', ');
                        } }, slotProps === null || slotProps === void 0 ? void 0 : slotProps.select, { inputProps: __assign({ id: labelId }, (_b = slotProps === null || slotProps === void 0 ? void 0 : slotProps.select) === null || _b === void 0 ? void 0 : _b.inputProps), children: options.map(function (option) { return ((0, jsx_runtime_1.jsxs)(MenuItem_1.default, { value: option.value, children: [checkbox && ((0, jsx_runtime_1.jsx)(Checkbox_1.default, __assign({ size: "small", disableRipple: true, checked: field.value.includes(option.value) }, slotProps === null || slotProps === void 0 ? void 0 : slotProps.checkbox))), option.label] }, option.value)); }) })), (!!error || helperText) && ((0, jsx_runtime_1.jsx)(FormHelperText_1.default, __assign({ error: !!error }, slotProps === null || slotProps === void 0 ? void 0 : slotProps.formHelperText, { children: error ? error === null || error === void 0 ? void 0 : error.message : helperText })))] })));
        } }));
}

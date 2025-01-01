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
exports.RHFAutocomplete = RHFAutocomplete;
var jsx_runtime_1 = require("react/jsx-runtime");
var TextField_1 = __importDefault(require("@mui/material/TextField"));
var Autocomplete_1 = __importDefault(require("@mui/material/Autocomplete"));
var react_hook_form_1 = require("react-hook-form");
function RHFAutocomplete(_a) {
    var name = _a.name, label = _a.label, helperText = _a.helperText, hiddenLabel = _a.hiddenLabel, placeholder = _a.placeholder, other = __rest(_a, ["name", "label", "helperText", "hiddenLabel", "placeholder"]);
    var _b = (0, react_hook_form_1.useFormContext)(), control = _b.control, setValue = _b.setValue;
    return ((0, jsx_runtime_1.jsx)(react_hook_form_1.Controller, { name: name, control: control, render: function (_a) {
            var field = _a.field, error = _a.fieldState.error;
            return ((0, jsx_runtime_1.jsx)(Autocomplete_1.default, __assign({}, field, { id: "rhf-autocomplete-".concat(name), onChange: function (event, newValue) { return setValue(name, newValue, { shouldValidate: true }); }, renderInput: function (params) { return ((0, jsx_runtime_1.jsx)(TextField_1.default, __assign({}, params, { label: label, placeholder: placeholder, error: !!error, helperText: error ? error === null || error === void 0 ? void 0 : error.message : helperText, inputProps: __assign(__assign({}, params.inputProps), { autoComplete: 'new-password' }) }))); } }, other)));
        } }));
}

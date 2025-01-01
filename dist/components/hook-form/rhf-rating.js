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
exports.RHFRating = RHFRating;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Rating_1 = __importDefault(require("@mui/material/Rating"));
var FormHelperText_1 = __importDefault(require("@mui/material/FormHelperText"));
var react_hook_form_1 = require("react-hook-form");
function RHFRating(_a) {
    var name = _a.name, helperText = _a.helperText, slotProps = _a.slotProps, other = __rest(_a, ["name", "helperText", "slotProps"]);
    var control = (0, react_hook_form_1.useFormContext)().control;
    return ((0, jsx_runtime_1.jsx)(react_hook_form_1.Controller, { name: name, control: control, render: function (_a) {
            var _b;
            var field = _a.field, error = _a.fieldState.error;
            return ((0, jsx_runtime_1.jsxs)(Box_1.default, { sx: slotProps === null || slotProps === void 0 ? void 0 : slotProps.wrap, children: [(0, jsx_runtime_1.jsx)(Rating_1.default, __assign({}, field, { onChange: function (event, newValue) {
                            field.onChange(Number(newValue));
                        } }, other)), ((error === null || error === void 0 ? void 0 : error.message) || helperText) && ((0, jsx_runtime_1.jsx)(FormHelperText_1.default, __assign({ error: !!error }, slotProps === null || slotProps === void 0 ? void 0 : slotProps.formHelperText, { children: (_b = error === null || error === void 0 ? void 0 : error.message) !== null && _b !== void 0 ? _b : helperText })))] }));
        } }));
}

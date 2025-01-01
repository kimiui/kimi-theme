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
exports.RHFDatePicker = RHFDatePicker;
exports.RHFMobileDateTimePicker = RHFMobileDateTimePicker;
var jsx_runtime_1 = require("react/jsx-runtime");
var dayjs_1 = __importDefault(require("dayjs"));
var DatePicker_1 = require("@mui/x-date-pickers/DatePicker");
var react_hook_form_1 = require("react-hook-form");
var MobileDateTimePicker_1 = require("@mui/x-date-pickers/MobileDateTimePicker");
var format_time_1 = require("../../utils/format-time");
function RHFDatePicker(_a) {
    var name = _a.name, slotProps = _a.slotProps, other = __rest(_a, ["name", "slotProps"]);
    var control = (0, react_hook_form_1.useFormContext)().control;
    return ((0, jsx_runtime_1.jsx)(react_hook_form_1.Controller, { name: name, control: control, render: function (_a) {
            var _b, _c;
            var field = _a.field, error = _a.fieldState.error;
            return ((0, jsx_runtime_1.jsx)(DatePicker_1.DatePicker, __assign({}, field, { value: (0, dayjs_1.default)(field.value), onChange: function (newValue) { return field.onChange((0, dayjs_1.default)(newValue).format()); }, format: format_time_1.formatStr.split.date, slotProps: __assign({ textField: __assign({ fullWidth: true, error: !!error, helperText: (_b = error === null || error === void 0 ? void 0 : error.message) !== null && _b !== void 0 ? _b : (_c = slotProps === null || slotProps === void 0 ? void 0 : slotProps.textField) === null || _c === void 0 ? void 0 : _c.helperText }, slotProps === null || slotProps === void 0 ? void 0 : slotProps.textField) }, slotProps) }, other)));
        } }));
}
function RHFMobileDateTimePicker(_a) {
    var name = _a.name, slotProps = _a.slotProps, other = __rest(_a, ["name", "slotProps"]);
    var control = (0, react_hook_form_1.useFormContext)().control;
    return ((0, jsx_runtime_1.jsx)(react_hook_form_1.Controller, { name: name, control: control, render: function (_a) {
            var _b, _c;
            var field = _a.field, error = _a.fieldState.error;
            return ((0, jsx_runtime_1.jsx)(MobileDateTimePicker_1.MobileDateTimePicker, __assign({}, field, { value: (0, dayjs_1.default)(field.value), onChange: function (newValue) { return field.onChange((0, dayjs_1.default)(newValue).format()); }, format: format_time_1.formatStr.split.dateTime, slotProps: __assign({ textField: __assign({ fullWidth: true, error: !!error, helperText: (_b = error === null || error === void 0 ? void 0 : error.message) !== null && _b !== void 0 ? _b : (_c = slotProps === null || slotProps === void 0 ? void 0 : slotProps.textField) === null || _c === void 0 ? void 0 : _c.helperText }, slotProps === null || slotProps === void 0 ? void 0 : slotProps.textField) }, slotProps) }, other)));
        } }));
}

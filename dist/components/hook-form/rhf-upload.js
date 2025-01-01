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
exports.RHFUploadAvatar = RHFUploadAvatar;
exports.RHFUploadBox = RHFUploadBox;
exports.RHFUpload = RHFUpload;
var jsx_runtime_1 = require("react/jsx-runtime");
var FormHelperText_1 = __importDefault(require("@mui/material/FormHelperText"));
var react_hook_form_1 = require("react-hook-form");
var upload_1 = require("../upload");
// ----------------------------------------------------------------------
function RHFUploadAvatar(_a) {
    var name = _a.name, other = __rest(_a, ["name"]);
    var _b = (0, react_hook_form_1.useFormContext)(), control = _b.control, setValue = _b.setValue;
    return ((0, jsx_runtime_1.jsx)(react_hook_form_1.Controller, { name: name, control: control, render: function (_a) {
            var field = _a.field, error = _a.fieldState.error;
            var onDrop = function (acceptedFiles) {
                var value = acceptedFiles[0];
                setValue(name, value, { shouldValidate: true });
            };
            return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(upload_1.UploadAvatar, __assign({ value: field.value, error: !!error, onDrop: onDrop }, other)), !!error && ((0, jsx_runtime_1.jsx)(FormHelperText_1.default, { error: true, sx: { px: 2, textAlign: 'center' }, children: error.message }))] }));
        } }));
}
// ----------------------------------------------------------------------
function RHFUploadBox(_a) {
    var name = _a.name, other = __rest(_a, ["name"]);
    var control = (0, react_hook_form_1.useFormContext)().control;
    return ((0, jsx_runtime_1.jsx)(react_hook_form_1.Controller, { name: name, control: control, render: function (_a) {
            var field = _a.field, error = _a.fieldState.error;
            return ((0, jsx_runtime_1.jsx)(upload_1.UploadBox, __assign({ value: field.value, error: !!error }, other)));
        } }));
}
// ----------------------------------------------------------------------
function RHFUpload(_a) {
    var name = _a.name, multiple = _a.multiple, helperText = _a.helperText, other = __rest(_a, ["name", "multiple", "helperText"]);
    var _b = (0, react_hook_form_1.useFormContext)(), control = _b.control, setValue = _b.setValue;
    return ((0, jsx_runtime_1.jsx)(react_hook_form_1.Controller, { name: name, control: control, render: function (_a) {
            var _b;
            var field = _a.field, error = _a.fieldState.error;
            var uploadProps = {
                multiple: multiple,
                accept: { 'image/*': [] },
                error: !!error,
                helperText: (_b = error === null || error === void 0 ? void 0 : error.message) !== null && _b !== void 0 ? _b : helperText,
            };
            var onDrop = function (acceptedFiles) {
                var value = multiple ? __spreadArray(__spreadArray([], field.value, true), acceptedFiles, true) : acceptedFiles[0];
                setValue(name, value, { shouldValidate: true });
            };
            return (0, jsx_runtime_1.jsx)(upload_1.Upload, __assign({}, uploadProps, { value: field.value, onDrop: onDrop }, other));
        } }));
}

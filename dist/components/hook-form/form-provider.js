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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Form = Form;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_hook_form_1 = require("react-hook-form");
function Form(_a) {
    var children = _a.children, onSubmit = _a.onSubmit, methods = _a.methods;
    return ((0, jsx_runtime_1.jsx)(react_hook_form_1.FormProvider, __assign({}, methods, { children: (0, jsx_runtime_1.jsx)("form", { onSubmit: onSubmit, noValidate: true, autoComplete: "off", children: children }) })));
}

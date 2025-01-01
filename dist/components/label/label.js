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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var classes_1 = require("./classes");
var styles_1 = require("./styles");
// ----------------------------------------------------------------------
exports.Label = (0, react_1.forwardRef)(function (props, ref) {
    var endIcon = props.endIcon, children = props.children, startIcon = props.startIcon, className = props.className, disabled = props.disabled, _a = props.variant, variant = _a === void 0 ? 'soft' : _a, _b = props.color, color = _b === void 0 ? 'default' : _b, sx = props.sx, other = __rest(props, ["endIcon", "children", "startIcon", "className", "disabled", "variant", "color", "sx"]);
    return ((0, jsx_runtime_1.jsxs)(styles_1.LabelRoot, __assign({ ref: ref, color: color, variant: variant, disabled: disabled, className: [classes_1.labelClasses.root, className].join(' '), sx: sx }, other, { children: [startIcon && (0, jsx_runtime_1.jsx)(styles_1.LabelIcon, { className: classes_1.labelClasses.icon, children: startIcon }), typeof children === 'string' ? upperFirst(children) : children, endIcon && (0, jsx_runtime_1.jsx)(styles_1.LabelIcon, { className: classes_1.labelClasses.icon, children: endIcon })] })));
});
function upperFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

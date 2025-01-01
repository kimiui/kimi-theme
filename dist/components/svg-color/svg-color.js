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
exports.SvgColor = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Box_1 = __importDefault(require("@mui/material/Box"));
var classes_1 = require("./classes");
// ----------------------------------------------------------------------
exports.SvgColor = (0, react_1.forwardRef)(function (_a, ref) {
    var src = _a.src, className = _a.className, sx = _a.sx, other = __rest(_a, ["src", "className", "sx"]);
    return ((0, jsx_runtime_1.jsx)(Box_1.default, __assign({ ref: ref, component: "span", className: classes_1.svgColorClasses.root.concat(className ? " ".concat(className) : ''), sx: __assign({ width: 24, height: 24, flexShrink: 0, display: 'inline-flex', bgcolor: 'currentColor', mask: "url(".concat(src, ") no-repeat center / contain"), WebkitMask: "url(".concat(src, ") no-repeat center / contain") }, sx) }, other)));
});

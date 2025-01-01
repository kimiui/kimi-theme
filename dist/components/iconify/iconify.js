'use client';
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
exports.Iconify = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Box_1 = __importDefault(require("@mui/material/Box"));
var NoSsr_1 = __importDefault(require("@mui/material/NoSsr"));
var react_2 = require("@iconify/react");
var classes_1 = require("./classes");
// ----------------------------------------------------------------------
exports.Iconify = (0, react_1.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, _b = _a.width, width = _b === void 0 ? 20 : _b, sx = _a.sx, other = __rest(_a, ["children", "className", "width", "sx"]);
    var baseStyles = {
        width: width,
        height: width,
        flexShrink: 0,
        display: 'inline-flex',
    };
    var renderFallback = ((0, jsx_runtime_1.jsx)(Box_1.default, { component: "span", className: classes_1.iconifyClasses.root.concat(className ? " ".concat(className) : ''), sx: __assign(__assign({}, baseStyles), sx) }));
    return ((0, jsx_runtime_1.jsxs)(NoSsr_1.default, { fallback: renderFallback, children: [(0, jsx_runtime_1.jsx)(Box_1.default, __assign({ ssr: true, ref: ref, component: react_2.Icon, className: classes_1.iconifyClasses.root.concat(className ? " ".concat(className) : ''), sx: __assign(__assign({}, baseStyles), sx) }, other)), children] }));
});
// https://iconify.design/docs/iconify-icon/disable-cache.html
(0, react_2.disableCache)('local');

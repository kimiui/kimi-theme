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
exports.Logo = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Box_1 = __importDefault(require("@mui/material/Box"));
var NoSsr_1 = __importDefault(require("@mui/material/NoSsr"));
var routes_react_1 = require("routes-react");
var classes_1 = require("./classes");
exports.Logo = (0, react_1.forwardRef)(function (_a, ref) {
    var _b = _a.width, width = _b === void 0 ? 40 : _b, _c = _a.height, height = _c === void 0 ? 40 : _c, _d = _a.disableLink, disableLink = _d === void 0 ? false : _d, className = _a.className, _e = _a.href, href = _e === void 0 ? '/' : _e, sx = _a.sx, other = __rest(_a, ["width", "height", "disableLink", "className", "href", "sx"]);
    var logo = ((0, jsx_runtime_1.jsx)(Box_1.default, { alt: "logo", component: "img", src: "/logo/logo-single.svg", width: width, height: height }));
    return ((0, jsx_runtime_1.jsx)(NoSsr_1.default, { fallback: (0, jsx_runtime_1.jsx)(Box_1.default, { width: width, height: height, className: classes_1.logoClasses.root.concat(className ? " ".concat(className) : ''), sx: __assign({ flexShrink: 0, display: 'inline-flex', verticalAlign: 'middle' }, sx) }), children: (0, jsx_runtime_1.jsx)(Box_1.default, { component: routes_react_1.RouterLink, ref: ref, href: href, className: classes_1.logoClasses.root.concat(className ? " ".concat(className) : ''), "aria-label": "logo", sx: __assign(__assign({ width: width, height: height, flexShrink: 0, display: 'inline-flex', verticalAlign: 'middle' }, (disableLink && { pointerEvents: 'none' })), sx), children: logo }) }));
});

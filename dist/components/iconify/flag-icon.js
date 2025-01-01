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
exports.FlagIcon = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Box_1 = __importDefault(require("@mui/material/Box"));
var NoSsr_1 = __importDefault(require("@mui/material/NoSsr"));
var iconify_1 = require("./iconify");
exports.FlagIcon = (0, react_1.forwardRef)(function (_a, ref) {
    var code = _a.code, sx = _a.sx, other = __rest(_a, ["code", "sx"]);
    var baseStyles = {
        width: 26,
        height: 20,
        flexShrink: 0,
        overflow: 'hidden',
        borderRadius: '5px',
        display: 'inline-flex',
        bgcolor: 'background.neutral',
    };
    var renderFallback = (0, jsx_runtime_1.jsx)(Box_1.default, { component: "span", sx: __assign(__assign({}, baseStyles), sx) });
    if (!code) {
        return null;
    }
    return ((0, jsx_runtime_1.jsx)(NoSsr_1.default, { fallback: renderFallback, children: (0, jsx_runtime_1.jsx)(Box_1.default, __assign({ ref: ref, component: "span", sx: __assign(__assign({}, baseStyles), sx) }, other, { children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "flag:".concat(code === null || code === void 0 ? void 0 : code.toLowerCase(), "-1x1"), sx: { width: 26, height: 20 } }) })) }));
});

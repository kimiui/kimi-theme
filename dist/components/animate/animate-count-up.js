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
exports.AnimateCountUp = AnimateCountUp;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var framer_motion_1 = require("framer-motion");
function AnimateCountUp(_a) {
    var to = _a.to, sx = _a.sx, _b = _a.from, from = _b === void 0 ? 0 : _b, _c = _a.unit, unit = _c === void 0 ? '' : _c, _d = _a.toFixed, toFixed = _d === void 0 ? 0 : _d, _e = _a.duration, duration = _e === void 0 ? 2 : _e, _f = _a.once, once = _f === void 0 ? true : _f, _g = _a.amount, amount = _g === void 0 ? 0.5 : _g, _h = _a.component, component = _h === void 0 ? 'p' : _h, other = __rest(_a, ["to", "sx", "from", "unit", "toFixed", "duration", "once", "amount", "component"]);
    var ref = (0, react_1.useRef)(null);
    var inView = (0, framer_motion_1.useInView)(ref, { once: once, amount: amount });
    var count = (0, framer_motion_1.useMotionValue)(from);
    var rounded = (0, framer_motion_1.useTransform)(count, function (latest) { return latest.toFixed(toFixed); });
    (0, react_1.useEffect)(function () {
        if (inView) {
            (0, framer_motion_1.animate)(count, to, { duration: duration });
        }
    }, [count, duration, inView, to]);
    return ((0, jsx_runtime_1.jsxs)(Typography_1.default, __assign({ component: component, sx: __assign({ display: 'inline-flex', p: 0, m: 0 }, sx) }, other, { children: [(0, jsx_runtime_1.jsx)(framer_motion_1.m.span, { ref: ref, children: rounded }), unit] })));
}

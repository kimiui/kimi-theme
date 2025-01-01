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
exports.ContainerView = ContainerView;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var animate_1 = require("lib/components/animate");
var get_variant_1 = require("../get-variant");
function ContainerView(_a) {
    var selectVariant = _a.selectVariant, sx = _a.sx, other = __rest(_a, ["selectVariant", "sx"]);
    var scrollRef = (0, react_1.useRef)(null);
    return ((0, jsx_runtime_1.jsx)(Stack_1.default, __assign({ ref: scrollRef, component: framer_motion_1.m.div, variants: (0, animate_1.varContainer)(), sx: __assign({ py: 5, gap: 3, borderRadius: 2, flex: '1 1 auto', overflowX: 'auto', bgcolor: 'background.neutral' }, sx) }, other, { children: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: __spreadArray([], Array(40), true).map(function (_, index) { return ((0, jsx_runtime_1.jsx)(Box_1.default, { component: animate_1.MotionViewport, variants: (0, get_variant_1.getVariant)(selectVariant), viewport: { root: scrollRef, once: true, amount: 0.1 }, sx: {
                    py: 4,
                    width: 1,
                    mx: 'auto',
                    maxWidth: 480,
                    flexShrink: 0,
                    borderRadius: 1,
                    textAlign: 'center',
                    bgcolor: 'background.paper',
                    boxShadow: function (theme) { return theme.shadows[8]; },
                }, children: (0, jsx_runtime_1.jsxs)(Typography_1.default, { variant: "body2", children: ["Item ", index + 1] }) }, index)); }) }) })));
}

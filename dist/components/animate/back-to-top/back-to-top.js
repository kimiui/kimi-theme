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
exports.BackToTop = BackToTop;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Fab_1 = __importDefault(require("@mui/material/Fab"));
var framer_motion_1 = require("framer-motion");
var iconify_1 = require("lib/components/iconify");
function BackToTop(_a) {
    var _b = _a.value, value = _b === void 0 ? 90 : _b, sx = _a.sx, other = __rest(_a, ["value", "sx"]);
    var scrollYProgress = (0, framer_motion_1.useScroll)().scrollYProgress;
    var _c = (0, react_1.useState)(false), show = _c[0], setShow = _c[1];
    var backToTop = function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    (0, framer_motion_1.useMotionValueEvent)(scrollYProgress, 'change', function (latest) {
        var isEnd = Math.floor(latest * 100) > value; // unit is %
        setShow(isEnd);
    });
    return ((0, jsx_runtime_1.jsx)(Fab_1.default, __assign({ "aria-label": "Back to top", onClick: backToTop, sx: __assign(__assign({ width: 48, height: 48, position: 'fixed', transform: 'scale(0)', right: { xs: 24, md: 32 }, bottom: { xs: 24, md: 32 }, zIndex: function (theme) { return theme.zIndex.speedDial; }, transition: function (theme) { return theme.transitions.create(['transform']); } }, (show && { transform: 'scale(1)' })), sx) }, other, { children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { width: 24, icon: "solar:double-alt-arrow-up-bold-duotone" }) })));
}

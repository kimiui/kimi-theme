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
exports.AnimateLogo1 = AnimateLogo1;
exports.AnimateLogo2 = AnimateLogo2;
var jsx_runtime_1 = require("react/jsx-runtime");
var framer_motion_1 = require("framer-motion");
var Box_1 = __importDefault(require("@mui/material/Box"));
var styles_1 = require("@mui/material/styles");
var styles_2 = require("../../theme/styles");
var logo_1 = require("../logo");
function AnimateLogo1(_a) {
    var logo = _a.logo, sx = _a.sx, other = __rest(_a, ["logo", "sx"]);
    var theme = (0, styles_1.useTheme)();
    return ((0, jsx_runtime_1.jsxs)(Box_1.default, __assign({ sx: __assign({ width: 120, height: 120, alignItems: 'center', position: 'relative', display: 'inline-flex', justifyContent: 'center' }, sx) }, other, { children: [(0, jsx_runtime_1.jsx)(Box_1.default, { component: framer_motion_1.m.div, animate: { scale: [1, 0.9, 0.9, 1, 1], opacity: [1, 0.48, 0.48, 1, 1] }, transition: {
                    duration: 2,
                    repeatDelay: 1,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }, sx: { display: 'inline-flex' }, children: logo !== null && logo !== void 0 ? logo : (0, jsx_runtime_1.jsx)(logo_1.Logo, { disableLink: true, width: 64, height: 64 }) }), (0, jsx_runtime_1.jsx)(Box_1.default, { component: framer_motion_1.m.div, animate: {
                    scale: [1.6, 1, 1, 1.6, 1.6],
                    rotate: [270, 0, 0, 270, 270],
                    opacity: [0.25, 1, 1, 1, 0.25],
                    borderRadius: ['25%', '25%', '50%', '50%', '25%'],
                }, transition: { ease: 'linear', duration: 3.2, repeat: Infinity }, sx: {
                    position: 'absolute',
                    width: 'calc(100% - 20px)',
                    height: 'calc(100% - 20px)',
                    border: "solid 3px ".concat((0, styles_2.varAlpha)(theme.vars.palette.primary.darkChannel, 0.24)),
                } }), (0, jsx_runtime_1.jsx)(Box_1.default, { component: framer_motion_1.m.div, animate: {
                    scale: [1, 1.2, 1.2, 1, 1],
                    rotate: [0, 270, 270, 0, 0],
                    opacity: [1, 0.25, 0.25, 0.25, 1],
                    borderRadius: ['25%', '25%', '50%', '50%', '25%'],
                }, transition: { ease: 'linear', duration: 3.2, repeat: Infinity }, sx: {
                    width: 1,
                    height: 1,
                    position: 'absolute',
                    border: "solid 8px ".concat((0, styles_2.varAlpha)(theme.vars.palette.primary.darkChannel, 0.24)),
                } })] })));
}
// ----------------------------------------------------------------------
function AnimateLogo2(_a) {
    var logo = _a.logo, sx = _a.sx, other = __rest(_a, ["logo", "sx"]);
    return ((0, jsx_runtime_1.jsxs)(Box_1.default, __assign({ alignItems: "center", justifyContent: "center", sx: __assign({ width: 96, height: 96, position: 'relative', alignItems: 'center', display: 'inline-flex', justifyContent: 'center' }, sx) }, other, { children: [logo !== null && logo !== void 0 ? logo : (0, jsx_runtime_1.jsx)(logo_1.Logo, { sx: { zIndex: 9 } }), (0, jsx_runtime_1.jsx)(Box_1.default, { component: framer_motion_1.m.div, animate: { rotate: 360 }, transition: { duration: 10, ease: 'linear', repeat: Infinity }, sx: {
                    width: 1,
                    height: 1,
                    opacity: 0.16,
                    borderRadius: '50%',
                    position: 'absolute',
                    transition: function (theme) {
                        return theme.transitions.create(['opacity'], {
                            easing: theme.transitions.easing.easeInOut,
                            duration: theme.transitions.duration.shorter,
                        });
                    },
                    background: function (theme) {
                        return "linear-gradient(135deg, ".concat((0, styles_2.varAlpha)(theme.vars.palette.primary.mainChannel, 0), " 50%, ").concat(theme.vars.palette.primary.main, " 100%)");
                    },
                } })] })));
}

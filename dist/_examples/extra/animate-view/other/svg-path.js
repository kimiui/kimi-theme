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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SvgPath = SvgPath;
var jsx_runtime_1 = require("react/jsx-runtime");
var framer_motion_1 = require("framer-motion");
var Box_1 = __importDefault(require("@mui/material/Box"));
var styles_1 = require("@mui/material/styles");
var animate_1 = require("../../../../components/animate");
// ----------------------------------------------------------------------
function SvgPath() {
    var theme = (0, styles_1.useTheme)();
    var PRIMARY_LIGHT = theme.vars.palette.primary.light;
    var PRIMARY_MAIN = theme.vars.palette.primary.main;
    var PRIMARY_DARK = theme.vars.palette.primary.dark;
    return ((0, jsx_runtime_1.jsxs)(Box_1.default, { component: framer_motion_1.m.svg, viewBox: "0 0 512 512", sx: {
            width: 240,
            height: 240,
            strokeWidth: 4,
            stroke: PRIMARY_MAIN,
        }, children: [(0, jsx_runtime_1.jsxs)("defs", { children: [(0, jsx_runtime_1.jsxs)("linearGradient", { x1: "100%", y1: "9.946%", x2: "50%", y2: "50%", id: "a", children: [(0, jsx_runtime_1.jsx)("stop", { stopColor: PRIMARY_DARK, offset: "0%" }), (0, jsx_runtime_1.jsx)("stop", { stopColor: PRIMARY_MAIN, offset: "100%" })] }), (0, jsx_runtime_1.jsxs)("linearGradient", { x1: "50%", y1: "0%", x2: "50%", y2: "100%", id: "b", children: [(0, jsx_runtime_1.jsx)("stop", { stopColor: PRIMARY_LIGHT, offset: "0%" }), (0, jsx_runtime_1.jsx)("stop", { stopColor: PRIMARY_MAIN, offset: "100%" })] }), (0, jsx_runtime_1.jsxs)("linearGradient", { x1: "50%", y1: "0%", x2: "50%", y2: "100%", id: "c", children: [(0, jsx_runtime_1.jsx)("stop", { stopColor: PRIMARY_LIGHT, offset: "0%" }), (0, jsx_runtime_1.jsx)("stop", { stopColor: PRIMARY_MAIN, offset: "100%" })] })] }), (0, jsx_runtime_1.jsxs)("g", { fill: "none", fillRule: "nonzero", children: [(0, jsx_runtime_1.jsx)(framer_motion_1.m.path, __assign({}, animate_1.varPath, { d: "M183.168 285.573l-2.918 5.298-2.973 5.363-2.846 5.095-2.274 4.043-2.186 3.857-2.506 4.383-1.6 2.774-2.294 3.939-1.099 1.869-1.416 2.388-1.025 1.713-1.317 2.18-.95 1.558-1.514 2.447-.866 1.38-.833 1.312-.802 1.246-.77 1.18-.739 1.111-.935 1.38-.664.956-.425.6-.41.572-.59.8-.376.497-.537.69-.171.214c-10.76 13.37-22.496 23.493-36.93 29.334-30.346 14.262-68.07 14.929-97.202-2.704l72.347-124.682 2.8-1.72c49.257-29.326 73.08 1.117 94.02 40.927z", fill: "url(#a)" })), (0, jsx_runtime_1.jsx)(framer_motion_1.m.path, __assign({}, animate_1.varPath, { d: "M444.31 229.726c-46.27-80.956-94.1-157.228-149.043-45.344-7.516 14.384-12.995 42.337-25.267 42.337v-.142c-12.272 0-17.75-27.953-25.265-42.337C189.79 72.356 141.96 148.628 95.69 229.584c-3.483 6.106-6.828 11.932-9.69 16.996 106.038-67.127 97.11 135.667 184 137.278V384c86.891-1.611 77.962-204.405 184-137.28-2.86-5.062-6.206-10.888-9.69-16.994", fill: "url(#b)" })), (0, jsx_runtime_1.jsx)(framer_motion_1.m.path, __assign({}, animate_1.varPath, { d: "M450 384c26.509 0 48-21.491 48-48s-21.491-48-48-48-48 21.491-48 48 21.491 48 48 48", fill: "url(#c)" }))] })] }));
}

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
exports.ScrollProgress = ScrollProgress;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var framer_motion_1 = require("framer-motion");
var styles_1 = require("@mui/material/styles");
var ViewBox = (0, styles_1.styled)('svg', {
    shouldForwardProp: function (prop) { return prop !== 'progressSize'; },
})(function (_a) {
    var progressSize = _a.progressSize;
    return ({
        width: '100%',
        height: '100%',
        fill: 'none',
        viewBox: "0 0 ".concat(progressSize, " ").concat(progressSize),
        xmlns: 'http://www.w3.org/2000/svg',
    });
});
var StyledMDiv = (0, styles_1.styled)(framer_motion_1.m.div)(function (_a) {
    var theme = _a.theme;
    return ({});
});
function ScrollProgress(_a) {
    var size = _a.size, variant = _a.variant, progress = _a.progress, _b = _a.thickness, thickness = _b === void 0 ? 3.6 : _b, _c = _a.color, color = _c === void 0 ? 'primary' : _c, sx = _a.sx, other = __rest(_a, ["size", "variant", "progress", "thickness", "color", "sx"]);
    var scaleX = (0, framer_motion_1.useSpring)(progress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });
    var progressSize = variant === 'circular' ? (size !== null && size !== void 0 ? size : 64) : (size !== null && size !== void 0 ? size : 3);
    var renderCircular = ((0, jsx_runtime_1.jsxs)(ViewBox, { progressSize: progressSize, sx: __assign(__assign(__assign({ width: progressSize, height: progressSize, transform: 'rotate(-90deg)', color: function (theme) { return theme.vars.palette.text.primary; } }, (color !== 'inherit' && {
            color: function (theme) { return theme.vars.palette[color].main; },
        })), { circle: {
                fill: 'none',
                strokeDashoffset: 0,
                strokeWidth: thickness,
                stroke: 'currentColor',
            } }), sx), children: [(0, jsx_runtime_1.jsx)(Box_1.default, { component: "circle", cx: progressSize / 2, cy: progressSize / 2, r: progressSize / 2 - thickness - 4, strokeOpacity: "0.2", pathLength: "1" }), (0, jsx_runtime_1.jsx)(Box_1.default, { component: framer_motion_1.m.circle, cx: progressSize / 2, cy: progressSize / 2, r: progressSize / 2 - thickness - 4, pathLength: "1", style: { pathLength: progress } })] }));
    var renderLinear = ((0, jsx_runtime_1.jsx)(StyledMDiv, { sx: __assign(__assign({ top: 0, left: 0, right: 0, zIndex: 1999, height: progressSize, transformOrigin: '0%', bgcolor: 'text.primary' }, (color !== 'inherit' && {
            background: function (theme) {
                return "linear-gradient(135deg, ".concat(theme.vars.palette[color].light, ", ").concat(theme.vars.palette[color].main, ")");
            },
        })), sx), style: { scaleX: scaleX } }));
    return ((0, jsx_runtime_1.jsx)(Box_1.default, { sx: { overflow: 'hidden' }, children: variant === 'circular' ? renderCircular : renderLinear }));
}

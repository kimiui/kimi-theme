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
exports.AnimateBorder = AnimateBorder;
var jsx_runtime_1 = require("react/jsx-runtime");
var framer_motion_1 = require("framer-motion");
var Box_1 = __importDefault(require("@mui/material/Box"));
var react_1 = require("react");
var styles_1 = require("lib/theme/styles");
function AnimateBorder(_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    var animate = _a.animate, sx = _a.sx;
    var rootRef = (0, react_1.useRef)(null);
    var animateRef = (0, react_1.useRef)(null);
    var _o = (0, react_1.useState)(1), aspectRatio = _o[0], setAspectRatio = _o[1];
    var _p = (0, react_1.useState)(null), animateStyle = _p[0], setAnimateStyle = _p[1];
    var values = {
        disable: animate === null || animate === void 0 ? void 0 : animate.disable,
        delay: (_b = animate === null || animate === void 0 ? void 0 : animate.delay) !== null && _b !== void 0 ? _b : 0,
        loop: (_c = animate === null || animate === void 0 ? void 0 : animate.loop) !== null && _c !== void 0 ? _c : true,
        angle: (_d = animate === null || animate === void 0 ? void 0 : animate.angle) !== null && _d !== void 0 ? _d : 315,
        length: (_e = animate === null || animate === void 0 ? void 0 : animate.length) !== null && _e !== void 0 ? _e : 40,
        width: (_f = animate === null || animate === void 0 ? void 0 : animate.width) !== null && _f !== void 0 ? _f : '2px',
        color: (_g = animate === null || animate === void 0 ? void 0 : animate.color) !== null && _g !== void 0 ? _g : '#000',
        ease: (_h = animate === null || animate === void 0 ? void 0 : animate.ease) !== null && _h !== void 0 ? _h : 'linear',
        duration: (_j = animate === null || animate === void 0 ? void 0 : animate.duration) !== null && _j !== void 0 ? _j : 8,
        distance: (_k = animate === null || animate === void 0 ? void 0 : animate.distance) !== null && _k !== void 0 ? _k : 20,
        repeatType: (_l = animate === null || animate === void 0 ? void 0 : animate.repeatType) !== null && _l !== void 0 ? _l : 'loop',
        disableDoubleline: animate === null || animate === void 0 ? void 0 : animate.disableDoubleline,
        outline: (_m = animate === null || animate === void 0 ? void 0 : animate.outline) !== null && _m !== void 0 ? _m : "135deg, rgba(0,0,0,0.08), rgba(0,0,0,0.08)",
    };
    (0, react_1.useEffect)(function () {
        if (!values.disable) {
            if (rootRef.current) {
                var _a = rootRef.current.getBoundingClientRect(), width = _a.width, height = _a.height;
                setAspectRatio(width / height);
            }
            if (!values.disableDoubleline && animateRef.current) {
                var style = getComputedStyle(animateRef.current);
                setAnimateStyle({
                    paddingLeft: style.paddingLeft,
                    paddingRight: style.paddingRight,
                    paddingBottom: style.paddingBottom,
                    paddingTop: style.paddingTop,
                    borderTopLeftRadius: style.borderTopLeftRadius,
                    borderTopRightRadius: style.borderTopRightRadius,
                    borderBottomLeftRadius: style.borderBottomLeftRadius,
                    borderBottomRightRadius: style.borderBottomRightRadius,
                });
            }
        }
    }, [values.disable, values.disableDoubleline]);
    var background = function (color) {
        var degs = [-55, 35, 125, 215, 305];
        var end = "transparent ".concat(values.angle - (2 + values.length), "deg, ").concat(color, "  ").concat(values.angle, "deg, transparent ").concat(values.angle + values.length, "deg");
        return [
            "conic-gradient(from ".concat(degs[0], "deg at ").concat(values.distance / aspectRatio, "% ").concat(values.distance, "% , ").concat(end, ")"),
            "conic-gradient(from ".concat(degs[1], "deg at ").concat(100 - values.distance / aspectRatio, "% ").concat(values.distance, "% , ").concat(end, ")"),
            "conic-gradient(from ".concat(degs[2], "deg at ").concat(100 - values.distance / aspectRatio, "% ").concat(100 - values.distance, "% , ").concat(end, ")"),
            "conic-gradient(from ".concat(degs[3], "deg at ").concat(values.distance / aspectRatio, "% ").concat(100 - values.distance, "% , ").concat(end, ")"),
            "conic-gradient(from ".concat(degs[4], "deg at ").concat(values.distance / aspectRatio, "% ").concat(values.distance, "% , ").concat(end, ")"),
        ];
    };
    var transition = {
        ease: values.ease,
        delay: values.delay,
        duration: values.duration,
        repeatType: values.repeatType,
        repeat: values.loop ? Infinity : 1,
        times: aspectRatio > 1
            ? [0, 0.25 + 0.25 / aspectRatio, 0.5, 0.75 + 0.25 / aspectRatio, 1]
            : [0, aspectRatio * 0.25, 0.5, 0.5 + aspectRatio * 0.25, 1],
    };
    return ((0, jsx_runtime_1.jsxs)(Box_1.default, { ref: rootRef, sx: __assign({ minWidth: 40, minHeight: 40, position: 'relative', borderRadius: 'inherit', '&::before': __assign({}, (0, styles_1.borderGradient)({ color: values.outline, padding: values.width })) }, sx), children: [(0, jsx_runtime_1.jsx)(Box_1.default, { ref: animateRef, component: framer_motion_1.m.span, transition: transition, animate: !values.disable
                    ? {
                        background: background(typeof values.color === 'string' ? values.color : values.color[0]),
                    }
                    : undefined, sx: __assign({}, (0, styles_1.borderGradient)({ padding: values.width })) }), !values.disable && !values.disableDoubleline && ((0, jsx_runtime_1.jsx)(Box_1.default, { component: framer_motion_1.m.span, transition: transition, animate: {
                    background: background(typeof values.color === 'string' ? values.color : values.color[1]),
                }, sx: __assign(__assign(__assign({}, (0, styles_1.borderGradient)()), { transform: 'scale(-1)' }), (animateStyle && {
                    paddingTop: animateStyle === null || animateStyle === void 0 ? void 0 : animateStyle.paddingBottom,
                    paddingBottom: animateStyle === null || animateStyle === void 0 ? void 0 : animateStyle.paddingTop,
                    paddingLeft: animateStyle === null || animateStyle === void 0 ? void 0 : animateStyle.paddingRight,
                    paddingRight: animateStyle === null || animateStyle === void 0 ? void 0 : animateStyle.paddingLeft,
                    borderTopLeftRadius: animateStyle === null || animateStyle === void 0 ? void 0 : animateStyle.borderBottomRightRadius,
                    borderTopRightRadius: animateStyle === null || animateStyle === void 0 ? void 0 : animateStyle.borderBottomLeftRadius,
                    borderBottomLeftRadius: animateStyle === null || animateStyle === void 0 ? void 0 : animateStyle.borderTopRightRadius,
                    borderBottomRightRadius: animateStyle === null || animateStyle === void 0 ? void 0 : animateStyle.borderTopLeftRadius,
                })) }))] }));
}

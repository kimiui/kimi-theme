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
exports.MotionContainer = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var framer_motion_1 = require("framer-motion");
var react_1 = require("react");
var Box_1 = __importDefault(require("@mui/material/Box"));
var variants_1 = require("./variants");
exports.MotionContainer = (0, react_1.forwardRef)(function (_a, ref) {
    var animate = _a.animate, _b = _a.action, action = _b === void 0 ? false : _b, children = _a.children, other = __rest(_a, ["animate", "action", "children"]);
    var animationState = action ? (animate ? 'animate' : 'exit') : 'animate';
    var commonProps = __assign({ ref: ref, component: framer_motion_1.m.div, variants: (0, variants_1.varContainer)(), initial: action ? false : 'initial', animate: animationState, exit: action ? undefined : 'exit' }, other);
    return (0, jsx_runtime_1.jsx)(Box_1.default, __assign({}, commonProps, { children: children }));
});

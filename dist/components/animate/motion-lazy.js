"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MotionLazy = MotionLazy;
var jsx_runtime_1 = require("react/jsx-runtime");
var framer_motion_1 = require("framer-motion");
function MotionLazy(_a) {
    var children = _a.children;
    return ((0, jsx_runtime_1.jsx)(framer_motion_1.LazyMotion, { strict: true, features: framer_motion_1.domMax, children: children }));
}

'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimateButton = AnimateButton;
var jsx_runtime_1 = require("react/jsx-runtime");
var framer_motion_1 = require("framer-motion");
var Fab_1 = __importDefault(require("@mui/material/Fab"));
var IconButton_1 = __importDefault(require("@mui/material/IconButton"));
var iconify_1 = require("../../../../components/iconify");
var animate_1 = require("../../../../components/animate");
// ----------------------------------------------------------------------
function AnimateButton() {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Fab_1.default, { component: framer_motion_1.m.button, whileTap: "tap", whileHover: "hover", variants: (0, animate_1.varHover)(1.1, 0.95), color: "primary", size: "small", children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "mingcute:add-line", width: 24 }) }), (0, jsx_runtime_1.jsx)(Fab_1.default, { component: framer_motion_1.m.button, whileTap: "tap", whileHover: "hover", variants: (0, animate_1.varHover)(), color: "primary", size: "medium", children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "mingcute:add-line", width: 24 }) }), (0, jsx_runtime_1.jsx)(Fab_1.default, { component: framer_motion_1.m.button, whileTap: "tap", whileHover: "hover", variants: (0, animate_1.varHover)(1.08, 0.99), color: "primary", children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "mingcute:add-line", width: 24 }) }), (0, jsx_runtime_1.jsx)(IconButton_1.default, { component: framer_motion_1.m.button, whileTap: "tap", whileHover: "hover", variants: (0, animate_1.varHover)(1.1, 0.95), color: "primary", size: "small", children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "mingcute:add-line", width: 24 }) }), (0, jsx_runtime_1.jsx)(IconButton_1.default, { component: framer_motion_1.m.button, whileTap: "tap", whileHover: "hover", variants: (0, animate_1.varHover)(), color: "primary", children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "mingcute:add-line", width: 24 }) }), (0, jsx_runtime_1.jsx)(IconButton_1.default, { component: framer_motion_1.m.button, whileTap: "tap", whileHover: "hover", variants: (0, animate_1.varHover)(1.08, 0.99), color: "primary", size: "large", children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "mingcute:add-line", width: 24 }) })] }));
}

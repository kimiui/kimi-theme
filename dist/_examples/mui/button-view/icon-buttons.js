'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconButtons = IconButtons;
var jsx_runtime_1 = require("react/jsx-runtime");
var framer_motion_1 = require("framer-motion");
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var IconButton_1 = __importDefault(require("@mui/material/IconButton"));
var iconify_1 = require("../../../components/iconify");
var animate_1 = require("../../../components/animate");
var component_block_1 = require("../../component-block");
// ----------------------------------------------------------------------
var COLORS = [
    'inherit',
    'default',
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'error',
];
var SIZES = ['small', 'medium', 'large'];
// ----------------------------------------------------------------------
function IconButtons() {
    return ((0, jsx_runtime_1.jsxs)(Stack_1.default, { rowGap: 5, columnGap: 2.5, display: "grid", gridTemplateColumns: { xs: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }, children: [(0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { title: "Base", children: [(0, jsx_runtime_1.jsx)(IconButton_1.default, { color: "inherit", children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "ic:round-access-alarm" }) }), (0, jsx_runtime_1.jsx)(IconButton_1.default, { children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "ic:round-access-alarm" }) }), (0, jsx_runtime_1.jsx)(IconButton_1.default, { color: "primary", children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "ic:round-access-alarm" }) }), (0, jsx_runtime_1.jsx)(IconButton_1.default, { color: "secondary", children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "ic:round-access-alarm" }) }), (0, jsx_runtime_1.jsx)(IconButton_1.default, { disabled: true, children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "ic:round-access-alarm" }) })] }), (0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { title: "Colors", children: COLORS.map(function (color) { return ((0, jsx_runtime_1.jsx)(IconButton_1.default, { color: color, children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "ic:round-access-alarm" }) }, color)); }) }), (0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { title: "Sizes", children: SIZES.map(function (size) { return ((0, jsx_runtime_1.jsx)(IconButton_1.default, { size: size, color: "info", children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "ic:round-access-alarm" }) }, size)); }) }), (0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { title: "With Animate", children: SIZES.map(function (size) { return ((0, jsx_runtime_1.jsx)(IconButton_1.default, { component: framer_motion_1.m.button, whileTap: "tap", whileHover: "hover", variants: (size === 'small' && (0, animate_1.varHover)(1.1, 0.95)) ||
                        (size === 'large' && (0, animate_1.varHover)(1.08, 0.99)) ||
                        (0, animate_1.varHover)(), size: size, color: "error", children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { fontSize: "inherit", icon: "ic:round-access-alarm" }) }, size)); }) })] }));
}

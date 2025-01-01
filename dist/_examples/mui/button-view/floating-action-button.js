'use client';
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FloatingActionButton = FloatingActionButton;
var jsx_runtime_1 = require("react/jsx-runtime");
var framer_motion_1 = require("framer-motion");
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var Fab_1 = __importStar(require("@mui/material/Fab"));
var iconify_1 = require("lib/components/iconify");
var animate_1 = require("lib/components/animate");
var component_block_1 = require("../../component-block");
// ----------------------------------------------------------------------
var COLORS = [
    'default',
    'inherit',
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'error',
];
var SIZES = ['small', 'medium', 'large'];
// ----------------------------------------------------------------------
function FloatingActionButton() {
    var _a;
    return ((0, jsx_runtime_1.jsxs)(Stack_1.default, { rowGap: 5, columnGap: 2.5, display: "grid", gridTemplateColumns: { xs: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }, sx: (_a = {}, _a["& .".concat(Fab_1.fabClasses.root)] = { textTransform: 'capitalize' }, _a), children: [(0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { title: "Default", children: [COLORS.map(function (color) { return ((0, jsx_runtime_1.jsx)(Fab_1.default, { color: color, children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "ic:round-access-alarm", width: 24 }) }, color)); }), COLORS.map(function (color) { return ((0, jsx_runtime_1.jsxs)(Fab_1.default, { color: color, variant: "extended", children: [(0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "ic:round-access-alarm", width: 24 }), color] }, color)); }), (0, jsx_runtime_1.jsx)(Fab_1.default, { color: "info", disabled: true, children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "ic:round-access-alarm", width: 24 }) }), (0, jsx_runtime_1.jsxs)(Fab_1.default, { color: "info", disabled: true, variant: "extended", children: [(0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "ic:round-access-alarm", width: 24 }), "disabled"] })] }), (0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { title: "Outlined", children: [COLORS.map(function (color) { return ((0, jsx_runtime_1.jsx)(Fab_1.default, { color: color, variant: "outlined", children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "ic:round-access-alarm", width: 24 }) }, color)); }), COLORS.map(function (color) { return ((0, jsx_runtime_1.jsxs)(Fab_1.default, { color: color, variant: "outlinedExtended", children: [(0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "ic:round-access-alarm", width: 24 }), color] }, color)); }), (0, jsx_runtime_1.jsx)(Fab_1.default, { color: "info", disabled: true, variant: "outlined", children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "ic:round-access-alarm", width: 24 }) }), (0, jsx_runtime_1.jsxs)(Fab_1.default, { color: "info", disabled: true, variant: "outlinedExtended", children: [(0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "ic:round-access-alarm", width: 24 }), "disabled"] })] }), (0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { title: "Soft", children: [COLORS.map(function (color) { return ((0, jsx_runtime_1.jsx)(Fab_1.default, { color: color, variant: "soft", children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "ic:round-access-alarm", width: 24 }) }, color)); }), COLORS.map(function (color) { return ((0, jsx_runtime_1.jsxs)(Fab_1.default, { color: color, variant: "softExtended", children: [(0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "ic:round-access-alarm", width: 24 }), color] }, color)); }), (0, jsx_runtime_1.jsx)(Fab_1.default, { color: "info", disabled: true, variant: "soft", children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "ic:round-access-alarm", width: 24 }) }), (0, jsx_runtime_1.jsxs)(Fab_1.default, { color: "info", disabled: true, variant: "softExtended", children: [(0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "ic:round-access-alarm", width: 24 }), "disabled"] })] }), (0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { title: "Sizes", children: [SIZES.map(function (size) { return ((0, jsx_runtime_1.jsx)(Fab_1.default, { size: size, color: "info", children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "ic:round-access-alarm", width: 24 }) }, size)); }), SIZES.map(function (size) { return ((0, jsx_runtime_1.jsxs)(Fab_1.default, { size: size, color: "info", variant: "extended", children: [(0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "ic:round-access-alarm", width: 24 }), size] }, size)); }), SIZES.map(function (size) { return ((0, jsx_runtime_1.jsx)(Fab_1.default, { size: size, color: "info", variant: "soft", children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "ic:round-access-alarm", width: 24 }) }, size)); }), SIZES.map(function (size) { return ((0, jsx_runtime_1.jsxs)(Fab_1.default, { size: size, color: "info", variant: "softExtended", children: [(0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "ic:round-access-alarm", width: 24 }), size] }, size)); }), SIZES.map(function (size) { return ((0, jsx_runtime_1.jsx)(Fab_1.default, { size: size, color: "info", variant: "outlined", children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "ic:round-access-alarm", width: 24 }) }, size)); }), SIZES.map(function (size) { return ((0, jsx_runtime_1.jsxs)(Fab_1.default, { size: size, color: "info", variant: "outlinedExtended", children: [(0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "ic:round-access-alarm", width: 24 }), size] }, size)); })] }), (0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { title: "With Animate", children: SIZES.map(function (size) { return ((0, jsx_runtime_1.jsxs)(Fab_1.default, { component: framer_motion_1.m.button, whileTap: "tap", whileHover: "hover", variants: (size === 'small' && (0, animate_1.varHover)(1.1, 0.95)) ||
                        (size === 'large' && (0, animate_1.varHover)(1.08, 0.99)) ||
                        (0, animate_1.varHover)(), variant: "extended", size: size, color: "info", children: [(0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "ic:round-access-alarm", width: 24 }), size] }, size)); }) })] }));
}

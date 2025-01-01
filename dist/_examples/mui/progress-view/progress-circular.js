"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgressCircular = ProgressCircular;
var jsx_runtime_1 = require("react/jsx-runtime");
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var CircularProgress_1 = __importDefault(require("@mui/material/CircularProgress"));
var component_block_1 = require("../../component-block");
// ----------------------------------------------------------------------
var COLORS = ['inherit', 'primary', 'secondary', 'info', 'success', 'warning', 'error'];
function ProgressCircular(_a) {
    var progress = _a.progress;
    return ((0, jsx_runtime_1.jsxs)(Stack_1.default, { spacing: 5, children: [(0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { title: "Indeterminate", children: COLORS.map(function (color) { return ((0, jsx_runtime_1.jsx)(CircularProgress_1.default, { color: color }, color)); }) }), (0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { title: "Determinate", children: [(0, jsx_runtime_1.jsx)(CircularProgress_1.default, { color: "info" }), (0, jsx_runtime_1.jsx)(CircularProgress_1.default, { color: "info", variant: "determinate", value: 25 }), (0, jsx_runtime_1.jsx)(CircularProgress_1.default, { color: "info", variant: "determinate", value: 50 }), (0, jsx_runtime_1.jsx)(CircularProgress_1.default, { color: "info", variant: "determinate", value: 75 }), (0, jsx_runtime_1.jsx)(CircularProgress_1.default, { color: "info", variant: "determinate", value: 100 }), (0, jsx_runtime_1.jsx)(CircularProgress_1.default, { color: "info", variant: "determinate", value: progress })] }), (0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { title: "Sizes", children: [(0, jsx_runtime_1.jsx)(CircularProgress_1.default, { size: 48, color: "info" }), (0, jsx_runtime_1.jsx)(CircularProgress_1.default, { color: "info" }), (0, jsx_runtime_1.jsx)(CircularProgress_1.default, { size: 32, color: "info" }), (0, jsx_runtime_1.jsx)(CircularProgress_1.default, { size: 24, color: "info" })] })] }));
}

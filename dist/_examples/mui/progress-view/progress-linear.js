"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgressLinear = ProgressLinear;
var jsx_runtime_1 = require("react/jsx-runtime");
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var LinearProgress_1 = __importDefault(require("@mui/material/LinearProgress"));
var component_block_1 = require("../../component-block");
// ----------------------------------------------------------------------
var COLORS = ['inherit', 'primary', 'secondary', 'info', 'success', 'warning', 'error'];
function ProgressLinear(_a) {
    var progress = _a.progress, buffer = _a.buffer;
    return ((0, jsx_runtime_1.jsxs)(Stack_1.default, { sx: {
            rowGap: 5,
            columnGap: 3,
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' },
        }, children: [(0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { title: "Indeterminate", sx: { flexDirection: 'column' }, children: COLORS.map(function (color) { return ((0, jsx_runtime_1.jsx)(LinearProgress_1.default, { color: color, sx: { mb: 2, width: 1 } }, color)); }) }), (0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { title: "Determinate", sx: { flexDirection: 'column' }, children: COLORS.map(function (color) { return ((0, jsx_runtime_1.jsx)(LinearProgress_1.default, { color: color, value: progress, variant: "determinate", sx: { mb: 2, width: 1 } }, color)); }) }), (0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { title: "Buffer", sx: { flexDirection: 'column' }, children: COLORS.map(function (color) { return ((0, jsx_runtime_1.jsx)(LinearProgress_1.default, { color: color, variant: "buffer", value: progress, valueBuffer: buffer, sx: { mb: 2, width: 1 } }, color)); }) }), (0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { title: "Query", sx: { flexDirection: 'column' }, children: COLORS.map(function (color) { return ((0, jsx_runtime_1.jsx)(LinearProgress_1.default, { color: color, variant: "query", value: progress, valueBuffer: buffer, sx: { mb: 2, width: 1 } }, color)); }) })] }));
}

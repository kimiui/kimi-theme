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
exports.TextMaxLine = TextMaxLine;
var jsx_runtime_1 = require("react/jsx-runtime");
var Link_1 = __importDefault(require("@mui/material/Link"));
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var styles_1 = require("@mui/material/styles");
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var styles_2 = require("../../../theme/styles");
var component_block_1 = require("../../component-block");
// ----------------------------------------------------------------------
var content = "\nDonec posuere vulputate arcu. Fusce vulputate eleifend sapien. Phasellus magna. Proin\nsapien ipsum, porta a, auctor quis, euismod ut, mi. Suspendisse faucibus, nunc et\npellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor.\n";
function TextMaxLine() {
    var theme = (0, styles_1.useTheme)();
    return ((0, jsx_runtime_1.jsxs)(Stack_1.default, { sx: {
            rowGap: 5,
            columnGap: 3,
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' },
        }, children: [(0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { title: "1 Line", sx: { flexDirection: 'column', alignItems: 'unset', minWidth: 0 }, children: (0, jsx_runtime_1.jsx)(Typography_1.default, { noWrap: true, sx: { width: 1 }, children: content }) }), (0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { title: "2 Line", sx: { flexDirection: 'column', alignItems: 'unset', minWidth: 0 }, children: (0, jsx_runtime_1.jsx)(Typography_1.default, { sx: __assign({}, (0, styles_2.maxLine)({ line: 2 })), children: content }) }), (0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { title: "3 Line", sx: { flexDirection: 'column', alignItems: 'unset', minWidth: 0 }, children: (0, jsx_runtime_1.jsx)(Typography_1.default, { sx: __assign({}, (0, styles_2.maxLine)({ line: 3 })), children: content }) }), (0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { title: "4 Line", sx: { flexDirection: 'column', alignItems: 'unset', minWidth: 0 }, children: (0, jsx_runtime_1.jsx)(Typography_1.default, { sx: __assign({}, (0, styles_2.maxLine)({ line: 3 })), children: content }) }), (0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { title: "As Link", sx: { flexDirection: 'column', alignItems: 'unset', minWidth: 0 }, children: (0, jsx_runtime_1.jsx)(Link_1.default, { href: "#", color: "primary", sx: __assign({ maxWidth: 300 }, (0, styles_2.maxLine)({ line: 3 })), children: content }) }), (0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { title: "Persistent", sx: { flexDirection: 'column', alignItems: 'unset', minWidth: 0 }, children: (0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "h6", sx: __assign(__assign({}, (0, styles_2.maxLine)({ line: 3, persistent: theme.typography.h6 })), { bgcolor: 'background.neutral' }), children: "Donec posuere vulputate arcu." }) })] }));
}

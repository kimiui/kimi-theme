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
exports.Gradient = Gradient;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var styles_1 = require("@mui/material/styles");
var styles_2 = require("../../../theme/styles");
var component_block_1 = require("../../component-block");
// ----------------------------------------------------------------------
function Gradient() {
    var theme = (0, styles_1.useTheme)();
    return ((0, jsx_runtime_1.jsxs)(component_block_1.ComponentContainer, { sx: {
            rowGap: 5,
            columnGap: 3,
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' },
        }, children: [(0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { title: "Text", children: (0, jsx_runtime_1.jsx)(Box_1.default, { component: "h1", sx: __assign({ typography: 'h1' }, (0, styles_2.textGradient)("to right, ".concat(theme.vars.palette.warning.light, ", ").concat(theme.vars.palette.primary.main))), children: "Kimi UI" }) }), (0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { title: "Background", children: (0, jsx_runtime_1.jsx)(Box_1.default, { sx: __assign(__assign({}, (0, styles_2.bgGradient)({
                        color: "135deg, ".concat((0, styles_2.varAlpha)(theme.vars.palette.warning.lighterChannel, 0.8), ", ").concat((0, styles_2.varAlpha)(theme.vars.palette.primary.mainChannel, 0.8)),
                    })), { width: 1, height: 160 }) }) })] }));
}

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
exports.Block = Block;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Tooltip_1 = __importDefault(require("@mui/material/Tooltip"));
var iconify_1 = require("lib/components/iconify");
var styles_1 = require("lib/theme/styles");
function Block(_a) {
    var _b;
    var title = _a.title, tooltip = _a.tooltip, children = _a.children, sx = _a.sx;
    return ((0, jsx_runtime_1.jsxs)(Box_1.default, { sx: __assign({ px: 2, pb: 2, pt: 4, borderRadius: 2, display: 'flex', position: 'relative', flexDirection: 'column', border: function (theme) {
                return "solid 1px ".concat((0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0.12));
            } }, sx), children: [(0, jsx_runtime_1.jsxs)(Box_1.default, { component: "span", sx: (_b = {
                        px: 1.25,
                        top: -12,
                        fontSize: 13,
                        borderRadius: 22,
                        lineHeight: '22px',
                        position: 'absolute',
                        alignItems: 'center',
                        color: 'common.white',
                        display: 'inline-flex',
                        bgcolor: 'text.primary',
                        fontWeight: 'fontWeightSemiBold'
                    },
                    _b[styles_1.stylesMode.dark] = { color: 'grey.800' },
                    _b), children: [title, tooltip && ((0, jsx_runtime_1.jsx)(Tooltip_1.default, { title: tooltip, placement: "right", children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { width: 14, icon: "eva:info-outline", sx: { ml: 0.5, mr: -0.5, opacity: 0.48, cursor: 'pointer' } }) }))] }), children] }));
}

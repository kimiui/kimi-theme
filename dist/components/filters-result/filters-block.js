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
exports.FiltersBlock = FiltersBlock;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
function FiltersBlock(_a) {
    var label = _a.label, children = _a.children, isShow = _a.isShow, sx = _a.sx;
    if (!isShow) {
        return null;
    }
    return ((0, jsx_runtime_1.jsxs)(Box_1.default, { gap: 1, display: "flex", sx: __assign({ p: 1, borderRadius: 1, overflow: 'hidden', border: function (theme) { return "dashed 1px ".concat(theme.vars.palette.divider); } }, sx), children: [(0, jsx_runtime_1.jsx)(Box_1.default, { component: "span", sx: {
                    height: 24,
                    lineHeight: '24px',
                    fontSize: function (theme) { return theme.typography.subtitle2.fontSize; },
                    fontWeight: function (theme) { return theme.typography.subtitle2.fontWeight; },
                }, children: label }), (0, jsx_runtime_1.jsx)(Box_1.default, { gap: 1, display: "flex", flexWrap: "wrap", children: children })] }));
}

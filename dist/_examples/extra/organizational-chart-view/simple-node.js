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
exports.SimpleNode = SimpleNode;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var styles_1 = require("lib/theme/styles");
// ----------------------------------------------------------------------
function SimpleNode(_a) {
    var _b;
    var name = _a.name, role = _a.role, sx = _a.sx;
    return ((0, jsx_runtime_1.jsxs)(Box_1.default, { gap: 0.5, display: "inline-flex", flexDirection: "column", onClick: function () { return console.info(name); }, sx: __assign((_b = { p: 2, borderRadius: 1.5, cursor: 'pointer', color: 'primary.darker', bgcolor: function (theme) { return (0, styles_1.varAlpha)(theme.vars.palette.primary.mainChannel, 0.08); }, border: function (theme) { return "1px solid ".concat((0, styles_1.varAlpha)(theme.vars.palette.primary.mainChannel, 0.24)); } }, _b[styles_1.stylesMode.dark] = { color: 'primary.lighter' }, _b), sx), children: [(0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "subtitle2", children: name }), (0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "caption", sx: { opacity: 0.48 }, children: role })] }));
}

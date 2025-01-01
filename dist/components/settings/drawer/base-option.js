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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseOption = BaseOption;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Switch_1 = __importDefault(require("@mui/material/Switch"));
var Tooltip_1 = __importDefault(require("@mui/material/Tooltip"));
var ButtonBase_1 = __importDefault(require("@mui/material/ButtonBase"));
var styles_1 = require("../../../theme/styles");
var iconify_1 = require("../../../components/iconify");
var svg_color_1 = require("../../svg-color");
function BaseOption(_a) {
    var icon = _a.icon, label = _a.label, tooltip = _a.tooltip, selected = _a.selected, other = __rest(_a, ["icon", "label", "tooltip", "selected"]);
    return ((0, jsx_runtime_1.jsxs)(ButtonBase_1.default, __assign({ disableRipple: true, sx: __assign({ px: 2, py: 2.5, borderRadius: 2, cursor: 'pointer', flexDirection: 'column', alignItems: 'flex-start', border: function (theme) {
                return "solid 1px ".concat((0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0.12));
            }, '&:hover': {
                bgcolor: function (theme) { return (0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0.08); },
            } }, (selected && {
            bgcolor: function (theme) { return (0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0.08); },
        })) }, other, { children: [(0, jsx_runtime_1.jsxs)(Box_1.default, { display: "flex", alignItems: "center", justifyContent: "space-between", sx: { width: 1, mb: 3 }, children: [(0, jsx_runtime_1.jsx)(svg_color_1.SvgColor, { src: "/assets/icons/setting/ic-".concat(icon, ".svg") }), (0, jsx_runtime_1.jsx)(Switch_1.default, { name: label, size: "small", color: "default", checked: selected, sx: { mr: -0.75 } })] }), (0, jsx_runtime_1.jsxs)(Box_1.default, { display: "flex", alignItems: "center", justifyContent: "space-between", sx: { width: 1 }, children: [(0, jsx_runtime_1.jsx)(Box_1.default, { component: "span", sx: {
                            lineHeight: '18px',
                            fontWeight: 'fontWeightSemiBold',
                            fontSize: function (theme) { return theme.typography.pxToRem(13); },
                        }, children: label }), tooltip && ((0, jsx_runtime_1.jsx)(Tooltip_1.default, { arrow: true, title: tooltip, slotProps: {
                            tooltip: { sx: { maxWidth: 240, mr: 0.5 } },
                        }, children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { width: 16, icon: "eva:info-outline", sx: { cursor: 'pointer', color: 'text.disabled' } }) }))] })] })));
}

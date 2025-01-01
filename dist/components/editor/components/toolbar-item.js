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
exports.ToolbarItem = ToolbarItem;
var jsx_runtime_1 = require("react/jsx-runtime");
var SvgIcon_1 = __importDefault(require("@mui/material/SvgIcon"));
var ButtonBase_1 = __importDefault(require("@mui/material/ButtonBase"));
// ----------------------------------------------------------------------
function ToolbarItem(_a) {
    var sx = _a.sx, icon = _a.icon, label = _a.label, active = _a.active, disabled = _a.disabled, other = __rest(_a, ["sx", "icon", "label", "active", "disabled"]);
    return ((0, jsx_runtime_1.jsxs)(ButtonBase_1.default, __assign({ sx: __assign(__assign(__assign({ px: 0.75, width: 28, height: 28, borderRadius: 0.75, typography: 'body2', '&:hover': { bgcolor: 'action.hover' } }, (active && { bgcolor: 'action.selected' })), (disabled && { pointerEvents: 'none', cursor: 'not-allowed', opacity: 0.48 })), sx) }, other, { children: [icon && (0, jsx_runtime_1.jsx)(SvgIcon_1.default, { sx: { fontSize: 18 }, children: icon }), label && label] })));
}

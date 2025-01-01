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
exports.NavToggleButton = NavToggleButton;
var jsx_runtime_1 = require("react/jsx-runtime");
var SvgIcon_1 = __importDefault(require("@mui/material/SvgIcon"));
var IconButton_1 = __importDefault(require("@mui/material/IconButton"));
var styles_1 = require("lib/theme/styles");
function NavToggleButton(_a) {
    var isNavMini = _a.isNavMini, sx = _a.sx, other = __rest(_a, ["isNavMini", "sx"]);
    return ((0, jsx_runtime_1.jsx)(IconButton_1.default, __assign({ size: "small", sx: __assign({ p: 0.5, top: 24, position: 'fixed', color: 'action.active', bgcolor: 'background.default', transform: 'translateX(-50%)', zIndex: 'var(--layout-nav-zIndex)', left: isNavMini ? 'var(--layout-nav-mini-width)' : 'var(--layout-nav-vertical-width)', border: function (theme) { return "1px solid ".concat((0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0.12)); }, transition: function (theme) {
                return theme.transitions.create(['left'], {
                    easing: 'var(--layout-transition-easing)',
                    duration: 'var(--layout-transition-duration)',
                });
            }, '&:hover': {
                color: 'text.primary',
                bgcolor: 'background.neutral',
            } }, sx) }, other, { children: (0, jsx_runtime_1.jsx)(SvgIcon_1.default, { sx: __assign({ width: 16, height: 16 }, (isNavMini && {
                transform: 'scaleX(-1)',
            })), children: (0, jsx_runtime_1.jsx)("path", { fill: "currentColor", d: "M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64" }) }) })));
}

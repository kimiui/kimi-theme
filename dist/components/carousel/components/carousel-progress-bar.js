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
exports.CarouselProgressBar = CarouselProgressBar;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var styles_1 = require("@mui/material/styles");
var styles_2 = require("../../../theme/styles");
var classes_1 = require("../classes");
// ----------------------------------------------------------------------
var StyledRoot = (0, styles_1.styled)(Box_1.default)(function (_a) {
    var theme = _a.theme;
    return ({
        height: 6,
        maxWidth: 120,
        width: '100%',
        borderRadius: 6,
        overflow: 'hidden',
        position: 'relative',
        color: theme.vars.palette.text.primary,
        backgroundColor: (0, styles_2.varAlpha)(theme.vars.palette.grey['500Channel'], 0.2),
    });
});
var StyledProgress = (0, styles_1.styled)('div')({
    top: 0,
    bottom: 0,
    width: '100%',
    left: '-100%',
    position: 'absolute',
    backgroundColor: 'currentColor',
});
// ----------------------------------------------------------------------
function CarouselProgressBar(_a) {
    var value = _a.value, sx = _a.sx, other = __rest(_a, ["value", "sx"]);
    return ((0, jsx_runtime_1.jsx)(StyledRoot, __assign({ sx: sx, className: classes_1.carouselClasses.progress }, other, { children: (0, jsx_runtime_1.jsx)(StyledProgress, { className: classes_1.carouselClasses.progressBar, sx: {
                transform: "translate3d(".concat(value, "%, 0px, 0px)"),
            } }) })));
}

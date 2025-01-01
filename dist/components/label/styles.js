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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabelIcon = exports.LabelRoot = void 0;
var styles_1 = require("@mui/material/styles");
var styles_2 = require("../../theme/styles");
// ----------------------------------------------------------------------
exports.LabelRoot = (0, styles_1.styled)('span', {
    shouldForwardProp: function (prop) { return !['color', 'variant', 'disabled', 'sx'].includes(prop); },
})(function (_a) {
    var color = _a.color, variant = _a.variant, disabled = _a.disabled, theme = _a.theme;
    var defaultStyles = __assign({}, (color === 'default' && __assign(__assign(__assign(__assign({}, (variant === 'filled' && __assign({ color: theme.vars.palette.common.white, backgroundColor: theme.vars.palette.text.primary }, theme.applyStyles('dark', {
        color: theme.vars.palette.grey[800],
    })))), (variant === 'outlined' && {
        backgroundColor: 'transparent',
        color: theme.vars.palette.text.primary,
        border: "2px solid ".concat(theme.vars.palette.text.primary),
    })), (variant === 'soft' && {
        color: theme.vars.palette.text.secondary,
        backgroundColor: (0, styles_2.varAlpha)(theme.vars.palette.grey['500Channel'], 0.16),
    })), (variant === 'inverted' && {
        color: theme.vars.palette.grey[800],
        backgroundColor: theme.vars.palette.grey[300],
    }))));
    var colorStyles = __assign({}, (color &&
        color !== 'default' && __assign(__assign(__assign(__assign({}, (variant === 'filled' && {
        color: theme.vars.palette[color].contrastText,
        backgroundColor: theme.vars.palette[color].main,
    })), (variant === 'outlined' && {
        backgroundColor: 'transparent',
        color: theme.vars.palette[color].main,
        border: "2px solid ".concat(theme.vars.palette[color].main),
    })), (variant === 'soft' && __assign({ color: theme.vars.palette[color].dark, backgroundColor: (0, styles_2.varAlpha)(theme.vars.palette[color].mainChannel, 0.16) }, theme.applyStyles('dark', {
        color: theme.vars.palette[color].light,
    })))), (variant === 'inverted' && {
        color: theme.vars.palette[color].darker,
        backgroundColor: theme.vars.palette[color].lighter,
    }))));
    return __assign(__assign(__assign({ height: 24, minWidth: 24, lineHeight: 0, cursor: 'default', alignItems: 'center', whiteSpace: 'nowrap', display: 'inline-flex', gap: theme.spacing(0.75), justifyContent: 'center', padding: theme.spacing(0, 0.75), fontSize: theme.typography.pxToRem(12), fontWeight: theme.typography.fontWeightBold, borderRadius: theme.shape.borderRadius * 0.75, transition: theme.transitions.create(['all'], { duration: theme.transitions.duration.shorter }) }, defaultStyles), colorStyles), (disabled && { opacity: 0.48, pointerEvents: 'none' }));
});
exports.LabelIcon = (0, styles_1.styled)('span')({
    width: 16,
    height: 16,
    flexShrink: 0,
    '& svg, img': { width: '100%', height: '100%', objectFit: 'cover' },
});

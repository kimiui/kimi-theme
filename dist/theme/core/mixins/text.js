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
exports.textGradient = textGradient;
exports.maxLine = maxLine;
var styles_1 = require("@mui/material/styles");
var styles_2 = require("../../../theme/styles");
// ----------------------------------------------------------------------
/**
 * The original theme has not been customized.
 * Only use non-styling features such as breakpoints...
 */
var defaultMuiTheme = (0, styles_1.createTheme)();
/**
 * @usage
 * ...theme.mixins.textGradient(`to right, ${theme.vars.palette.text.primary}, ${alpha(theme.vars.palette.text.primary, 0.2)}`
 */
function textGradient(color) {
    return {
        background: "linear-gradient(".concat(color, ")"),
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textFillColor: 'transparent',
        color: 'transparent',
    };
}
function getFontSize(fontSize) {
    return typeof fontSize === 'string' ? (0, styles_2.remToPx)(fontSize) : fontSize;
}
function getLineHeight(lineHeight, fontSize) {
    if (typeof lineHeight === 'string') {
        return fontSize ? (0, styles_2.remToPx)(lineHeight) / fontSize : 1;
    }
    return lineHeight;
}
function calculateHeight(fontSize, lineHeight, line) {
    return fontSize * lineHeight * line;
}
function maxLine(_a) {
    var line = _a.line, persistent = _a.persistent;
    var breakpoints = defaultMuiTheme.breakpoints.keys;
    var baseStyles = {
        overflow: 'hidden',
        display: '-webkit-box',
        textOverflow: 'ellipsis',
        WebkitLineClamp: line,
        WebkitBoxOrient: 'vertical',
    };
    if (!persistent) {
        return baseStyles;
    }
    var fontSizeBase = getFontSize(persistent.fontSize);
    var lineHeight = getLineHeight(persistent.lineHeight, fontSizeBase);
    if (!lineHeight || !fontSizeBase) {
        return baseStyles;
    }
    var responsiveStyles = breakpoints.reduce(function (acc, breakpoint) {
        var _a;
        var fontSize = getFontSize((_a = persistent[defaultMuiTheme.breakpoints.up(breakpoint)]) === null || _a === void 0 ? void 0 : _a.fontSize);
        if (fontSize) {
            acc[defaultMuiTheme.breakpoints.up(breakpoint)] = {
                height: calculateHeight(fontSize, lineHeight, line),
            };
        }
        return acc;
    }, {});
    return __assign(__assign(__assign({}, baseStyles), { height: calculateHeight(fontSizeBase, lineHeight, line) }), responsiveStyles);
}

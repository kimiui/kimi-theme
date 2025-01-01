"use strict";
// ----------------------------------------------------------------------
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
exports.mediaQueries = exports.stylesMode = void 0;
exports.setFont = setFont;
exports.remToPx = remToPx;
exports.pxToRem = pxToRem;
exports.responsiveFontSizes = responsiveFontSizes;
exports.hexToRgbChannel = hexToRgbChannel;
exports.createPaletteChannel = createPaletteChannel;
exports.varAlpha = varAlpha;
exports.stylesMode = {
    light: '[data-mui-color-scheme="light"] &',
    dark: '[data-mui-color-scheme="dark"] &',
};
exports.mediaQueries = {
    upXs: '@media (min-width:0px)',
    upSm: '@media (min-width:600px)',
    upMd: '@media (min-width:900px)',
    upLg: '@media (min-width:1200px)',
    upXl: '@media (min-width:1536px)',
};
/**
 * Set font family
 */
function setFont(fontName) {
    return "\"".concat(fontName, "\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"");
}
/**
 * Converts rem to px
 */
function remToPx(value) {
    return Math.round(parseFloat(value) * 16);
}
/**
 * Converts px to rem
 */
function pxToRem(value) {
    return "".concat(value / 16, "rem");
}
/**
 * Responsive font sizes
 */
function responsiveFontSizes(_a) {
    var _b;
    var sm = _a.sm, md = _a.md, lg = _a.lg;
    return _b = {},
        _b[exports.mediaQueries.upSm] = { fontSize: pxToRem(sm) },
        _b[exports.mediaQueries.upMd] = { fontSize: pxToRem(md) },
        _b[exports.mediaQueries.upLg] = { fontSize: pxToRem(lg) },
        _b;
}
/**
 * Converts a hex color to RGB channels
 */
function hexToRgbChannel(hex) {
    if (!/^#[0-9A-F]{6}$/i.test(hex)) {
        throw new Error("Invalid hex color: ".concat(hex));
    }
    var r = parseInt(hex.substring(1, 3), 16);
    var g = parseInt(hex.substring(3, 5), 16);
    var b = parseInt(hex.substring(5, 7), 16);
    return "".concat(r, " ").concat(g, " ").concat(b);
}
/**
 * Converts a hex color to RGB channels
 */
function createPaletteChannel(hexPalette) {
    var channelPalette = {};
    Object.entries(hexPalette).forEach(function (_a) {
        var key = _a[0], value = _a[1];
        channelPalette["".concat(key, "Channel")] = hexToRgbChannel(value);
    });
    return __assign(__assign({}, hexPalette), channelPalette);
}
/**
 * Color with alpha channel
 */
function varAlpha(color, opacity) {
    if (opacity === void 0) { opacity = 1; }
    var unsupported = (color === null || color === void 0 ? void 0 : color.startsWith('#')) ||
        (color === null || color === void 0 ? void 0 : color.startsWith('rgb')) ||
        (color === null || color === void 0 ? void 0 : color.startsWith('rgba')) ||
        (!(color === null || color === void 0 ? void 0 : color.includes('var')) && (color === null || color === void 0 ? void 0 : color.includes('Channel')));
    if (unsupported) {
        throw new Error("[Alpha]: Unsupported color format \"".concat(color, "\".\n       Supported formats are:\n       - RGB channels: \"0 184 217\".\n       - CSS variables with \"Channel\" prefix: \"var(--palette-common-blackChannel, #000000)\".\n       Unsupported formats are:\n       - Hex: \"#00B8D9\".\n       - RGB: \"rgb(0, 184, 217)\".\n       - RGBA: \"rgba(0, 184, 217, 1)\".\n       "));
    }
    return "rgba(".concat(color, " / ").concat(opacity, ")");
}

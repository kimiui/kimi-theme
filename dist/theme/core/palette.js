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
exports.palette = exports.basePalette = exports.action = exports.baseAction = exports.background = exports.text = exports.grey = exports.common = exports.error = exports.warning = exports.success = exports.info = exports.secondary = exports.primary = void 0;
var styles_1 = require("../../theme/styles");
var theme_config_1 = require("../theme-config");
// ----------------------------------------------------------------------
// Primary color
exports.primary = (0, styles_1.createPaletteChannel)(theme_config_1.themeConfig.palette.primary);
// Secondary color
exports.secondary = (0, styles_1.createPaletteChannel)(theme_config_1.themeConfig.palette.secondary);
// Info color
exports.info = (0, styles_1.createPaletteChannel)(theme_config_1.themeConfig.palette.info);
// Success color
exports.success = (0, styles_1.createPaletteChannel)(theme_config_1.themeConfig.palette.success);
// Warning color
exports.warning = (0, styles_1.createPaletteChannel)(theme_config_1.themeConfig.palette.warning);
// Error color
exports.error = (0, styles_1.createPaletteChannel)(theme_config_1.themeConfig.palette.error);
// Common color
exports.common = (0, styles_1.createPaletteChannel)(theme_config_1.themeConfig.palette.common);
// Grey color
exports.grey = (0, styles_1.createPaletteChannel)(theme_config_1.themeConfig.palette.grey);
// Text color
exports.text = {
    light: (0, styles_1.createPaletteChannel)({ primary: exports.grey[800], secondary: exports.grey[600], disabled: exports.grey[500] }),
    dark: (0, styles_1.createPaletteChannel)({ primary: '#FFFFFF', secondary: exports.grey[500], disabled: exports.grey[600] }),
};
// Background color
exports.background = {
    light: (0, styles_1.createPaletteChannel)({ paper: '#FFFFFF', default: '#FFFFFF', neutral: exports.grey[200] }),
    dark: (0, styles_1.createPaletteChannel)({ paper: exports.grey[800], default: exports.grey[900], neutral: '#28323D' }),
};
// Base action color
exports.baseAction = {
    hover: (0, styles_1.varAlpha)(exports.grey['500Channel'], 0.08),
    selected: (0, styles_1.varAlpha)(exports.grey['500Channel'], 0.16),
    focus: (0, styles_1.varAlpha)(exports.grey['500Channel'], 0.24),
    disabled: (0, styles_1.varAlpha)(exports.grey['500Channel'], 0.8),
    disabledBackground: (0, styles_1.varAlpha)(exports.grey['500Channel'], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
};
// Action color
exports.action = {
    light: __assign(__assign({}, exports.baseAction), { active: exports.grey[600] }),
    dark: __assign(__assign({}, exports.baseAction), { active: exports.grey[500] }),
};
// ----------------------------------------------------------------------
// Base palette
exports.basePalette = {
    primary: exports.primary,
    secondary: exports.secondary,
    info: exports.info,
    success: exports.success,
    warning: exports.warning,
    error: exports.error,
    common: exports.common,
    grey: exports.grey,
    divider: (0, styles_1.varAlpha)(exports.grey['500Channel'], 0.2),
};
exports.palette = {
    light: __assign(__assign({}, exports.basePalette), { text: exports.text.light, background: exports.background.light, action: exports.action.light }),
    dark: __assign(__assign({}, exports.basePalette), { text: exports.text.dark, background: exports.background.dark, action: exports.action.dark }),
};

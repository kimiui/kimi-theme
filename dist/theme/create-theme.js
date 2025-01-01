'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseTheme = void 0;
exports.createTheme = createTheme;
var styles_1 = require("@mui/material/styles");
var mixins_1 = require("./core/mixins");
var shadows_1 = require("./core/shadows");
var palette_1 = require("./core/palette");
var theme_config_1 = require("./theme-config");
var typography_1 = require("./core/typography");
var components_1 = require("./core/components");
var index_1 = require("./with-settings/index");
// ----------------------------------------------------------------------
exports.baseTheme = {
    colorSchemes: {
        light: {
            palette: palette_1.palette.light,
            shadows: shadows_1.shadows.light,
        },
        dark: {
            palette: palette_1.palette.dark,
            shadows: shadows_1.shadows.dark,
        },
    },
    mixins: mixins_1.mixins,
    components: components_1.components,
    typography: typography_1.typography,
    shape: { borderRadius: 8 },
    direction: theme_config_1.themeConfig.direction,
    cssVariables: theme_config_1.themeConfig.cssVariables,
    defaultColorScheme: theme_config_1.themeConfig.defaultMode,
};
function createTheme(_a) {
    var _b = _a === void 0 ? {} : _a, settingsState = _b.settingsState, _c = _b.themeOverrides, themeOverrides = _c === void 0 ? {} : _c, _d = _b.localeComponents, localeComponents = _d === void 0 ? {} : _d;
    // Update core theme settings
    var updatedCore = settingsState ? (0, index_1.updateCoreWithSettings)(exports.baseTheme, settingsState) : exports.baseTheme;
    // Update component settings
    var updatedComponents = settingsState
        ? (0, index_1.updateComponentsWithSettings)(components_1.components, settingsState)
        : {};
    // Create and return the final theme
    var theme = (0, styles_1.createTheme)(updatedCore, updatedComponents, localeComponents, themeOverrides);
    return theme;
}

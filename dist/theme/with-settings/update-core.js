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
exports.updateCoreWithSettings = updateCoreWithSettings;
var styles_1 = require("lib/theme/styles");
// ----------------------------------------------------------------------
/**
 * Update the core theme with the settings state.
 * @contrast
 * @primaryColor
 */
function updateCoreWithSettings(theme, settingsState) {
    var _a;
    var _b = settingsState !== null && settingsState !== void 0 ? settingsState : {}, direction = _b.direction, fontFamily = _b.fontFamily, _c = _b.contrast, contrast = _c === void 0 ? 'default' : _c;
    var isDefaultContrast = contrast === 'default';
    var lightPalette = (_a = theme.colorSchemes) === null || _a === void 0 ? void 0 : _a.light.palette;
    var updateColorScheme = function (scheme) {
        var _a;
        var colorSchemes = (_a = theme.colorSchemes) === null || _a === void 0 ? void 0 : _a[scheme];
        var updatedPalette = __assign(__assign({}, colorSchemes === null || colorSchemes === void 0 ? void 0 : colorSchemes.palette), (scheme === 'light' && {
            background: __assign(__assign({}, lightPalette === null || lightPalette === void 0 ? void 0 : lightPalette.background), (!isDefaultContrast && {
                default: lightPalette.grey[200],
                defaultChannel: (0, styles_1.hexToRgbChannel)(lightPalette.grey[200]),
            })),
        }));
        return __assign(__assign({}, colorSchemes), { palette: updatedPalette });
    };
    return __assign(__assign({}, theme), { direction: direction, colorSchemes: {
            light: updateColorScheme('light'),
            dark: updateColorScheme('dark'),
        }, typography: __assign(__assign({}, theme.typography), { fontFamily: (0, styles_1.setFont)(fontFamily) }) });
}

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
exports.navSectionCssVars = exports.bulletColor = void 0;
var styles_1 = require("../../theme/styles");
// ----------------------------------------------------------------------
exports.bulletColor = {
    dark: '#282F37',
    light: '#EDEFF2',
};
function colorVars(theme, variant) {
    var palette = theme.vars.palette;
    return __assign({ '--nav-item-color': palette.text.secondary, '--nav-item-hover-bg': palette.action.hover, '--nav-item-caption-color': palette.text.disabled, 
        // root
        '--nav-item-root-active-color': palette.primary.dark, '--nav-item-root-active-color-on-dark': palette.primary.light, '--nav-item-root-active-bg': (0, styles_1.varAlpha)(palette.primary.mainChannel, 0.08), '--nav-item-root-active-hover-bg': (0, styles_1.varAlpha)(palette.primary.mainChannel, 0.16), '--nav-item-root-open-color': palette.text.primary, '--nav-item-root-open-bg': palette.action.hover, 
        // sub
        '--nav-item-sub-active-color': palette.text.primary, '--nav-item-sub-active-bg': palette.action.selected, '--nav-item-sub-open-color': palette.text.primary, '--nav-item-sub-open-bg': palette.action.hover }, (variant === 'vertical' && {
        '--nav-item-sub-active-bg': palette.action.hover,
        '--nav-subheader-color': palette.text.disabled,
        '--nav-subheader-hover-color': palette.text.primary,
    }));
}
// ----------------------------------------------------------------------
function verticalVars(theme) {
    var shape = theme.shape, spacing = theme.spacing;
    return __assign(__assign({}, colorVars(theme, 'vertical')), { '--nav-item-gap': spacing(0.5), '--nav-item-radius': "".concat(shape.borderRadius, "px"), '--nav-item-pt': spacing(0.5), '--nav-item-pr': spacing(1), '--nav-item-pb': spacing(0.5), '--nav-item-pl': spacing(1.5), 
        // root
        '--nav-item-root-height': '44px', 
        // sub
        '--nav-item-sub-height': '36px', 
        // icon
        '--nav-icon-size': '24px', '--nav-icon-margin': spacing(0, 1.5, 0, 0), 
        // bullet
        '--nav-bullet-size': '12px', '--nav-bullet-light-color': exports.bulletColor.light, '--nav-bullet-dark-color': exports.bulletColor.dark });
}
// ----------------------------------------------------------------------
function miniVars(theme) {
    var shape = theme.shape, spacing = theme.spacing;
    return __assign(__assign({}, colorVars(theme, 'mini')), { '--nav-item-gap': spacing(0.5), '--nav-item-radius': "".concat(shape.borderRadius, "px"), 
        // root
        '--nav-item-root-height': '56px', '--nav-item-root-padding': spacing(1, 0.5, 0.75, 0.5), 
        // sub
        '--nav-item-sub-height': '34px', '--nav-item-sub-padding': spacing(0, 1), 
        // icon
        '--nav-icon-size': '22px', '--nav-icon-root-margin': spacing(0, 0, 0.75, 0), '--nav-icon-sub-margin': spacing(0, 1, 0, 0) });
}
// ----------------------------------------------------------------------
function horizontalVars(theme) {
    var shape = theme.shape, spacing = theme.spacing;
    return __assign(__assign({}, colorVars(theme, 'horizontal')), { '--nav-item-gap': spacing(0.75), '--nav-height': '56px', '--nav-item-radius': "".concat(shape.borderRadius * 0.75, "px"), 
        // root
        '--nav-item-root-height': '32px', '--nav-item-root-padding': spacing(0, 0.75), 
        // sub
        '--nav-item-sub-height': '34px', '--nav-item-sub-padding': spacing(0, 1), 
        // icon
        '--nav-icon-size': '22px', '--nav-icon-sub-margin': spacing(0, 1, 0, 0), '--nav-icon-root-margin': spacing(0, 1, 0, 0) });
}
// ----------------------------------------------------------------------
exports.navSectionCssVars = {
    mini: miniVars,
    vertical: verticalVars,
    horizontal: horizontalVars,
};

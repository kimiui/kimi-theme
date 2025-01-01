"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.megaMenuCssVars = void 0;
var styles_1 = require("lib/theme/styles");
// ----------------------------------------------------------------------
function verticalVars(theme) {
    var spacing = theme.spacing, palette = theme.vars.palette;
    return {
        '--nav-item-gap': theme.spacing(0.5),
        '--nav-item-radius': '0',
        '--nav-item-height': '40px',
        '--nav-item-padding': spacing(1, 1.5, 1, 2.5),
        // hover
        '--nav-item-hover-bg': palette.action.hover,
        // active
        '--nav-item-active-color': palette.primary.main,
        '--nav-item-active-bg': (0, styles_1.varAlpha)(palette.primary.mainChannel, 0.08),
        '--nav-item-active-hover-bg': (0, styles_1.varAlpha)(palette.primary.mainChannel, 0.16),
        // open
        '--nav-item-open-color': palette.text.primary,
        '--nav-item-open-bg': palette.action.hover,
        // icon
        '--nav-icon-size': '22px',
        '--nav-icon-margin': spacing(0, 2, 0, 0),
    };
}
// ----------------------------------------------------------------------
function horizontalVars(theme) {
    var shape = theme.shape, spacing = theme.spacing, palette = theme.vars.palette;
    return {
        '--nav-item-gap': theme.spacing(2.5),
        '--nav-item-radius': "".concat(shape.borderRadius, "px"),
        '--nav-item-height': '32px',
        '--nav-item-padding': spacing(0.5, 1),
        // hover
        '--nav-item-hover-bg': palette.action.hover,
        // active
        '--nav-item-active-color': palette.primary.main,
        // open
        '--nav-item-open-bg': palette.action.hover,
        // icon
        '--nav-icon-size': '22px',
        '--nav-icon-margin': spacing(0, 1, 0, 0),
    };
}
// ----------------------------------------------------------------------
function mobileVars(theme) {
    var spacing = theme.spacing, palette = theme.vars.palette;
    return {
        '--nav-width': '280px',
        '--nav-item-gap': theme.spacing(0.5),
        '--nav-item-radius': '0',
        '--nav-item-height': '40px',
        '--nav-item-padding': spacing(1, 1.5, 1, 2.5),
        // hover
        '--nav-item-hover-color': palette.action.hover,
        // active
        '--nav-item-active-color': palette.primary.main,
        '--nav-item-active-bg': (0, styles_1.varAlpha)(palette.primary.mainChannel, 0.08),
        '--nav-item-active-hover-bg': (0, styles_1.varAlpha)(palette.primary.mainChannel, 0.16),
        // open
        '--nav-item-open-color': palette.text.primary,
        '--nav-item-open-bg': palette.action.hover,
        // icon
        '--nav-icon-size': '22px',
        '--nav-icon-margin': spacing(0, 2, 0, 0),
    };
}
// ----------------------------------------------------------------------
exports.megaMenuCssVars = {
    vertical: verticalVars,
    horizontal: horizontalVars,
    mobile: mobileVars,
};

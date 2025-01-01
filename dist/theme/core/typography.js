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
exports.typography = exports.secondaryFont = exports.primaryFont = exports.defaultFont = void 0;
var utils_1 = require("../styles/utils");
// ----------------------------------------------------------------------
exports.defaultFont = 'Public Sans';
exports.primaryFont = (0, utils_1.setFont)(exports.defaultFont);
exports.secondaryFont = (0, utils_1.setFont)('Barlow');
// ----------------------------------------------------------------------
exports.typography = {
    fontFamily: exports.primaryFont,
    fontSecondaryFamily: exports.secondaryFont,
    fontWeightLight: '300',
    fontWeightRegular: '400',
    fontWeightMedium: '500',
    fontWeightSemiBold: '600',
    fontWeightBold: '700',
    h1: __assign({ fontWeight: 800, lineHeight: 80 / 64, fontSize: (0, utils_1.pxToRem)(40), fontFamily: exports.secondaryFont }, (0, utils_1.responsiveFontSizes)({ sm: 52, md: 58, lg: 64 })),
    h2: __assign({ fontWeight: 800, lineHeight: 64 / 48, fontSize: (0, utils_1.pxToRem)(32), fontFamily: exports.secondaryFont }, (0, utils_1.responsiveFontSizes)({ sm: 40, md: 44, lg: 48 })),
    h3: __assign({ fontWeight: 700, lineHeight: 1.5, fontSize: (0, utils_1.pxToRem)(24), fontFamily: exports.secondaryFont }, (0, utils_1.responsiveFontSizes)({ sm: 26, md: 30, lg: 32 })),
    h4: __assign({ fontWeight: 700, lineHeight: 1.5, fontSize: (0, utils_1.pxToRem)(20) }, (0, utils_1.responsiveFontSizes)({ sm: 20, md: 24, lg: 24 })),
    h5: __assign({ fontWeight: 700, lineHeight: 1.5, fontSize: (0, utils_1.pxToRem)(18) }, (0, utils_1.responsiveFontSizes)({ sm: 19, md: 20, lg: 20 })),
    h6: __assign({ fontWeight: 600, lineHeight: 28 / 18, fontSize: (0, utils_1.pxToRem)(17) }, (0, utils_1.responsiveFontSizes)({ sm: 18, md: 18, lg: 18 })),
    subtitle1: {
        fontWeight: 600,
        lineHeight: 1.5,
        fontSize: (0, utils_1.pxToRem)(16),
    },
    subtitle2: {
        fontWeight: 600,
        lineHeight: 22 / 14,
        fontSize: (0, utils_1.pxToRem)(14),
    },
    body1: {
        lineHeight: 1.5,
        fontSize: (0, utils_1.pxToRem)(16),
    },
    body2: {
        lineHeight: 22 / 14,
        fontSize: (0, utils_1.pxToRem)(14),
    },
    caption: {
        lineHeight: 1.5,
        fontSize: (0, utils_1.pxToRem)(12),
    },
    overline: {
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: (0, utils_1.pxToRem)(12),
        textTransform: 'uppercase',
    },
    button: {
        fontWeight: 700,
        lineHeight: 24 / 14,
        fontSize: (0, utils_1.pxToRem)(14),
        textTransform: 'unset',
    },
};

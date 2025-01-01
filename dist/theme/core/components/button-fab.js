"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fab = void 0;
var Fab_1 = require("@mui/material/Fab");
var styles_1 = require("../../styles");
var COLORS = ['primary', 'secondary', 'info', 'success', 'warning', 'error'];
var DEFAULT_COLORS = ['default', 'inherit'];
var EXTENDED_VARIANT = ['extended', 'outlinedExtended', 'softExtended'];
var FILLED_VARIANT = ['circular', 'extended'];
var OUTLINED_VARIANT = ['outlined', 'outlinedExtended'];
var SOFT_VARIANT = ['soft', 'softExtended'];
// ----------------------------------------------------------------------
var filledVariant = {
    colors: COLORS.map(function (color) { return ({
        props: function (_a) {
            var ownerState = _a.ownerState;
            return !ownerState.disabled &&
                FILLED_VARIANT.includes(ownerState.variant) &&
                ownerState.color === color;
        },
        style: function (_a) {
            var theme = _a.theme;
            return ({
                '&:hover': { boxShadow: 'none' },
            });
        },
    }); }),
    base: [
        {
            props: function (_a) {
                var ownerState = _a.ownerState;
                return FILLED_VARIANT.includes(ownerState.variant) && DEFAULT_COLORS.includes(ownerState.color);
            },
            style: function (_a) {
                var _b, _c;
                var theme = _a.theme;
                return (_b = {
                        boxShadow: theme.shadows[8],
                        /**
                         * @color default
                         */
                        color: theme.vars.palette.grey[800],
                        backgroundColor: theme.vars.palette.grey[300],
                        '&:hover': { boxShadow: 'none', backgroundColor: theme.vars.palette.grey[400] }
                    },
                    /**
                     * @color inherit
                     */
                    _b["&.".concat(Fab_1.fabClasses.colorInherit)] = (_c = {
                            color: theme.vars.palette.common.white,
                            backgroundColor: theme.vars.palette.text.primary,
                            '&:hover': { backgroundColor: theme.vars.palette.grey[700] }
                        },
                        _c[styles_1.stylesMode.dark] = {
                            color: theme.vars.palette.grey[800],
                            '&:hover': { backgroundColor: theme.vars.palette.grey[400] },
                        },
                        _c),
                    _b);
            },
        },
    ],
};
var outlinedVariant = {
    colors: COLORS.map(function (color) { return ({
        props: function (_a) {
            var ownerState = _a.ownerState;
            return !ownerState.disabled &&
                OUTLINED_VARIANT.includes(ownerState.variant) &&
                ownerState.color === color;
        },
        style: function (_a) {
            var theme = _a.theme;
            return ({
                color: theme.vars.palette[color].main,
                border: "solid 1px ".concat((0, styles_1.varAlpha)(theme.vars.palette[color].mainChannel, 0.48)),
                '&:hover': { backgroundColor: (0, styles_1.varAlpha)(theme.vars.palette[color].mainChannel, 0.08) },
            });
        },
    }); }),
    base: [
        {
            props: function (_a) {
                var ownerState = _a.ownerState;
                return OUTLINED_VARIANT.includes(ownerState.variant);
            },
            style: function (_a) {
                var _b;
                var theme = _a.theme;
                return (_b = {
                        boxShadow: 'none',
                        backgroundColor: 'transparent',
                        color: theme.vars.palette.text.secondary,
                        border: "solid 1px ".concat((0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0.32)),
                        '&:hover': {
                            borderColor: 'currentColor',
                            boxShadow: '0 0 0 0.75px currentColor',
                            backgroundColor: theme.vars.palette.action.hover,
                        }
                    },
                    _b["&.".concat(Fab_1.fabClasses.colorInherit)] = { color: theme.vars.palette.text.primary },
                    _b["&.".concat(Fab_1.fabClasses.disabled)] = {
                        backgroundColor: 'transparent',
                        border: "1px solid ".concat(theme.vars.palette.action.disabledBackground),
                    },
                    _b);
            },
        },
    ],
};
var softVariant = {
    colors: COLORS.map(function (color) { return ({
        props: function (_a) {
            var ownerState = _a.ownerState;
            return !ownerState.disabled &&
                SOFT_VARIANT.includes(ownerState.variant) &&
                ownerState.color === color;
        },
        style: function (_a) {
            var _b;
            var theme = _a.theme;
            return (_b = {
                    boxShadow: 'none',
                    color: theme.vars.palette[color].dark,
                    backgroundColor: (0, styles_1.varAlpha)(theme.vars.palette[color].mainChannel, 0.16),
                    '&:hover': {
                        boxShadow: 'none',
                        backgroundColor: (0, styles_1.varAlpha)(theme.vars.palette[color].mainChannel, 0.32),
                    }
                },
                _b[styles_1.stylesMode.dark] = { color: theme.vars.palette[color].light },
                _b);
        },
    }); }),
    base: [
        {
            props: function (_a) {
                var ownerState = _a.ownerState;
                return SOFT_VARIANT.includes(ownerState.variant) && DEFAULT_COLORS.includes(ownerState.color);
            },
            style: function (_a) {
                var _b;
                var theme = _a.theme;
                return (_b = {
                        /**
                         * @color default
                         */
                        boxShadow: 'none',
                        color: theme.vars.palette.grey[800],
                        backgroundColor: theme.vars.palette.grey[300],
                        '&:hover': { boxShadow: 'none', backgroundColor: theme.vars.palette.grey[400] }
                    },
                    /**
                     * @color inherit
                     */
                    _b["&.".concat(Fab_1.fabClasses.colorInherit)] = {
                        color: theme.vars.palette.text.primary,
                        backgroundColor: (0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0.08),
                        '&:hover': { backgroundColor: (0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0.24) },
                    },
                    _b);
            },
        },
    ],
};
var sizes = [
    {
        props: function (_a) {
            var ownerState = _a.ownerState;
            return EXTENDED_VARIANT.includes(ownerState.variant);
        },
        style: function (_a) {
            var _b;
            var theme = _a.theme;
            return (_b = {
                    height: 48,
                    width: 'auto',
                    minHeight: 48,
                    borderRadius: 48 / 2,
                    gap: theme.spacing(1),
                    padding: theme.spacing(0, 2)
                },
                _b["&.".concat(Fab_1.fabClasses.sizeSmall)] = {
                    height: 34,
                    minHeight: 34,
                    borderRadius: 34 / 2,
                    gap: theme.spacing(0.5),
                    padding: theme.spacing(0, 1),
                },
                _b["&.".concat(Fab_1.fabClasses.sizeMedium)] = { height: 40, minHeight: 40, borderRadius: 40 / 2 },
                _b);
        },
    },
];
var MuiFab = {
    /** **************************************
     * DEFAULT PROPS
     *************************************** */
    defaultProps: { color: 'primary' },
    /** **************************************
     * VARIANTS
     *************************************** */
    variants: __spreadArray(__spreadArray(__spreadArray(__spreadArray([], __spreadArray(__spreadArray([], filledVariant.base, true), filledVariant.colors, true), true), __spreadArray(__spreadArray([], outlinedVariant.base, true), outlinedVariant.colors, true), true), __spreadArray(__spreadArray([], softVariant.base, true), softVariant.colors, true), true), sizes, true),
    /** **************************************
     * STYLE
     *************************************** */
    styleOverrides: {},
};
// ----------------------------------------------------------------------
exports.fab = { MuiFab: MuiFab };

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
exports.button = void 0;
var Button_1 = require("@mui/material/Button");
var LoadingButton_1 = require("@mui/lab/LoadingButton");
var styles_1 = require("../../styles");
var COLORS = ['primary', 'secondary', 'info', 'success', 'warning', 'error'];
// ----------------------------------------------------------------------
var MuiButtonBase = {
    /** **************************************
     * STYLE
     *************************************** */
    styleOverrides: {
        root: function (_a) {
            var theme = _a.theme;
            return ({
                fontFamily: theme.typography.fontFamily,
                borderRadius: theme.shape.borderRadius,
            });
        },
    },
};
// ----------------------------------------------------------------------
var softVariant = {
    colors: COLORS.map(function (color) { return ({
        props: function (_a) {
            var ownerState = _a.ownerState;
            return !ownerState.disabled && ownerState.variant === 'soft' && ownerState.color === color;
        },
        style: function (_a) {
            var _b;
            var theme = _a.theme;
            return (_b = {
                    color: theme.vars.palette[color].dark,
                    backgroundColor: (0, styles_1.varAlpha)(theme.vars.palette[color].mainChannel, 0.16),
                    '&:hover': {
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
                return ownerState.variant === 'soft';
            },
            style: function (_a) {
                var _b, _c;
                var theme = _a.theme;
                return (_b = {
                        backgroundColor: (0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0.08),
                        '&:hover': {
                            backgroundColor: (0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0.24),
                        }
                    },
                    _b["&.".concat(Button_1.buttonClasses.disabled)] = {
                        backgroundColor: theme.vars.palette.action.disabledBackground,
                    },
                    _b["& .".concat(LoadingButton_1.loadingButtonClasses.loadingIndicatorStart)] = { left: 14 },
                    _b["& .".concat(LoadingButton_1.loadingButtonClasses.loadingIndicatorEnd)] = { right: 14 },
                    _b["&.".concat(Button_1.buttonClasses.sizeSmall)] = (_c = {},
                        _c["& .".concat(LoadingButton_1.loadingButtonClasses.loadingIndicatorStart)] = { left: 10 },
                        _c["& .".concat(LoadingButton_1.loadingButtonClasses.loadingIndicatorEnd)] = { right: 10 },
                        _c),
                    _b);
            },
        },
    ],
};
var MuiButton = {
    /** **************************************
     * DEFAULT PROPS
     *************************************** */
    defaultProps: { color: 'inherit', disableElevation: true },
    /** **************************************
     * STYLE
     *************************************** */
    styleOverrides: {
        root: {
            borderRadius: 1000,
            /** **************************************
             * VARIANTS
             *************************************** */
            variants: __spreadArray(__spreadArray([], softVariant.base, true), softVariant.colors, true),
        },
        /**
         * @variant contained
         */
        contained: function (_a) {
            var _b;
            var theme = _a.theme;
            return ({
                variants: [
                    {
                        props: function (_a) {
                            var ownerState = _a.ownerState;
                            return ownerState.color === 'inherit' && !ownerState.disabled;
                        },
                        style: (_b = {
                                color: theme.vars.palette.common.white,
                                backgroundColor: theme.vars.palette.grey[800],
                                '&:hover': {
                                    boxShadow: theme.shadows[8],
                                    backgroundColor: theme.vars.palette.grey[700],
                                }
                            },
                            _b[styles_1.stylesMode.dark] = {
                                color: theme.vars.palette.grey[800],
                                backgroundColor: theme.vars.palette.common.white,
                                '&:hover': { backgroundColor: theme.vars.palette.grey[400] },
                            },
                            _b),
                    },
                    {
                        style: {
                            boxShadow: theme.shadows[8],
                            '&:hover': { boxShadow: theme.shadows[1] },
                        },
                    },
                ],
            });
        },
        /**
         * @variant outlined
         */
        outlined: function (_a) {
            var theme = _a.theme;
            return ({
                '&:hover': {
                    borderColor: 'currentColor',
                    boxShadow: '0 0 0 0.75px currentColor',
                },
                variants: [
                    {
                        props: function (_a) {
                            var ownerState = _a.ownerState;
                            return ownerState.color === 'inherit' && !ownerState.disabled;
                        },
                        style: {
                            borderColor: (0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0.24),
                            '&:hover': { backgroundColor: theme.vars.palette.action.hover },
                        },
                    },
                    {
                        style: {
                            borderColor: (0, styles_1.varAlpha)(theme.vars.palette.text.primary, 0.24),
                        },
                    },
                ],
            });
        },
        /**
         * @variant text
         */
        text: function (_a) {
            var _b;
            var theme = _a.theme;
            return ({
                variants: [
                    {
                        props: function (_a) {
                            var ownerState = _a.ownerState;
                            return ownerState.color === 'inherit' && !ownerState.disabled;
                        },
                        style: (_b = {
                                color: theme.vars.palette.text.primary,
                                '&:hover': { backgroundColor: theme.vars.palette.action.hover }
                            },
                            _b[styles_1.stylesMode.dark] = { color: theme.vars.palette.text.secondary },
                            _b),
                    },
                    {
                        style: {
                            color: theme.vars.palette.text.secondary,
                            '&:hover': { backgroundColor: theme.vars.palette.action.hover },
                        },
                    },
                ],
            });
        },
        /**
         * @size
         */
        sizeSmall: function () { return ({
            height: 30,
            variants: [
                {
                    props: {
                        variant: 'text',
                    },
                    style: { paddingLeft: '4px', paddingRight: '4px' },
                },
                {
                    props: function (_a) {
                        var ownerState = _a.ownerState;
                        return ownerState.variant !== 'text';
                    },
                    style: { paddingLeft: '8px', paddingRight: '8px' },
                },
            ],
        }); },
        sizeMedium: function () { return ({
            variants: [
                {
                    props: {
                        variant: 'text',
                    },
                    style: { paddingLeft: '8px', paddingRight: '8px' },
                },
                {
                    props: function (_a) {
                        var ownerState = _a.ownerState;
                        return ownerState.variant !== 'text';
                    },
                    style: { paddingLeft: '12px', paddingRight: '12px' },
                },
            ],
        }); },
        sizeLarge: function () { return ({
            height: 48,
            variants: [
                {
                    props: {
                        variant: 'text',
                    },
                    style: { paddingLeft: '10px', paddingRight: '10px' },
                },
                {
                    props: function (_a) {
                        var ownerState = _a.ownerState;
                        return ownerState.variant !== 'text';
                    },
                    style: { paddingLeft: '16px', paddingRight: '16px' },
                },
            ],
        }); },
    },
};
// ----------------------------------------------------------------------
exports.button = { MuiButtonBase: MuiButtonBase, MuiButton: MuiButton };

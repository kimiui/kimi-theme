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
exports.buttonGroup = void 0;
var ButtonGroup_1 = require("@mui/material/ButtonGroup");
var styles_1 = require("../../styles");
var COLORS = ['primary', 'secondary', 'info', 'success', 'warning', 'error'];
function styleColors(ownerState, styles) {
    var outputStyle = COLORS.reduce(function (acc, color) {
        if (!ownerState.disabled && ownerState.color === color) {
            acc = styles(color);
        }
        return acc;
    }, {});
    return outputStyle;
}
var buttonClasses = "& .".concat(ButtonGroup_1.buttonGroupClasses.firstButton, ", & .").concat(ButtonGroup_1.buttonGroupClasses.middleButton);
var softVariant = {
    colors: COLORS.map(function (color) { return ({
        props: function (_a) {
            var ownerState = _a.ownerState;
            return !ownerState.disabled && ownerState.variant === 'soft' && ownerState.color === color;
        },
        style: function (_a) {
            var _b, _c, _d, _e;
            var theme = _a.theme;
            return (_b = {},
                _b[buttonClasses] = (_c = {
                        borderColor: (0, styles_1.varAlpha)(theme.vars.palette[color].darkChannel, 0.24)
                    },
                    _c[styles_1.stylesMode.dark] = { borderColor: (0, styles_1.varAlpha)(theme.vars.palette[color].lightChannel, 0.24) },
                    _c),
                _b["&.".concat(ButtonGroup_1.buttonGroupClasses.vertical)] = (_d = {},
                    _d[buttonClasses] = (_e = {
                            borderColor: (0, styles_1.varAlpha)(theme.vars.palette[color].darkChannel, 0.24)
                        },
                        _e[styles_1.stylesMode.dark] = {
                            borderColor: (0, styles_1.varAlpha)(theme.vars.palette[color].lightChannel, 0.24),
                        },
                        _e),
                    _d),
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
                var _b, _c, _d, _e;
                var theme = _a.theme;
                return (_b = {},
                    _b[buttonClasses] = (_c = {
                            borderRight: "solid 1px ".concat((0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0.32))
                        },
                        _c["&.".concat(ButtonGroup_1.buttonGroupClasses.disabled)] = {
                            borderColor: theme.vars.palette.action.disabledBackground,
                        },
                        _c),
                    _b["&.".concat(ButtonGroup_1.buttonGroupClasses.vertical)] = (_d = {},
                        _d[buttonClasses] = (_e = {
                                borderRight: 'none',
                                borderBottom: "solid 1px ".concat((0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0.32))
                            },
                            _e["&.".concat(ButtonGroup_1.buttonGroupClasses.disabled)] = {
                                borderColor: theme.vars.palette.action.disabledBackground,
                            },
                            _e),
                        _d),
                    _b);
            },
        },
    ],
};
// ----------------------------------------------------------------------
var MuiButtonGroup = {
    /** **************************************
     * DEFAULT PROPS
     *************************************** */
    defaultProps: { disableElevation: true },
    /** **************************************
     * VARIANTS
     *************************************** */
    variants: __spreadArray(__spreadArray([], softVariant.base, true), softVariant.colors, true),
    /** **************************************
     * STYLE
     *************************************** */
    styleOverrides: {
        /**
         * @variant contained
         */
        contained: function (_a) {
            var _b, _c, _d;
            var theme = _a.theme, ownerState = _a.ownerState;
            var styled = {
                colors: styleColors(ownerState, function (color) {
                    var _a;
                    return (_a = {},
                        _a[buttonClasses] = { borderColor: (0, styles_1.varAlpha)(theme.vars.palette[color].darkChannel, 0.48) },
                        _a);
                }),
                inheritColor: __assign({}, (ownerState.color === 'inherit' && (_b = {},
                    _b[buttonClasses] = { borderColor: (0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0.32) },
                    _b))),
                disabled: __assign({}, (ownerState.disabled && (_c = {},
                    _c[buttonClasses] = (_d = {},
                        _d["&.".concat(ButtonGroup_1.buttonGroupClasses.disabled)] = {
                            borderColor: theme.vars.palette.action.disabledBackground,
                        },
                        _d),
                    _c))),
            };
            return __assign(__assign(__assign({}, styled.inheritColor), styled.colors), styled.disabled);
        },
        /**
         * @variant text
         */
        text: function (_a) {
            var _b, _c, _d;
            var theme = _a.theme, ownerState = _a.ownerState;
            var styled = {
                colors: styleColors(ownerState, function (color) {
                    var _a;
                    return (_a = {},
                        _a[buttonClasses] = { borderColor: (0, styles_1.varAlpha)(theme.vars.palette[color].mainChannel, 0.48) },
                        _a);
                }),
                inheritColor: __assign({}, (ownerState.color === 'inherit' && (_b = {},
                    _b[buttonClasses] = { borderColor: (0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0.32) },
                    _b))),
                disabled: __assign({}, (ownerState.disabled && (_c = {},
                    _c[buttonClasses] = (_d = {},
                        _d["&.".concat(ButtonGroup_1.buttonGroupClasses.disabled)] = {
                            borderColor: theme.vars.palette.action.disabledBackground,
                        },
                        _d),
                    _c))),
            };
            return __assign(__assign(__assign({}, styled.inheritColor), styled.colors), styled.disabled);
        },
    },
};
// ----------------------------------------------------------------------
exports.buttonGroup = { MuiButtonGroup: MuiButtonGroup };

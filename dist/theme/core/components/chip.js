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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.chip = exports.ChipDeleteIcon = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var SvgIcon_1 = __importDefault(require("@mui/material/SvgIcon"));
var Chip_1 = require("@mui/material/Chip");
var styles_1 = require("../../styles");
// ----------------------------------------------------------------------
/**
 * Icons
 * https://icon-sets.iconify.design/solar/close-circle-bold
 */
var ChipDeleteIcon = function (props) { return ((0, jsx_runtime_1.jsx)(SvgIcon_1.default, __assign({}, props, { children: (0, jsx_runtime_1.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M8.97 8.97a.75.75 0 0 1 1.06 0L12 10.94l1.97-1.97a.75.75 0 0 1 1.06 1.06L13.06 12l1.97 1.97a.75.75 0 0 1-1.06 1.06L12 13.06l-1.97 1.97a.75.75 0 0 1-1.06-1.06L10.94 12l-1.97-1.97a.75.75 0 0 1 0-1.06", clipRule: "evenodd" }) }))); };
exports.ChipDeleteIcon = ChipDeleteIcon;
var COLORS = ['primary', 'secondary', 'info', 'success', 'warning', 'error'];
// ----------------------------------------------------------------------
function styleColors(ownerState, styles) {
    var outputStyle = COLORS.reduce(function (acc, color) {
        if (!ownerState.disabled && ownerState.color === color) {
            acc = styles(color);
        }
        return acc;
    }, {});
    return outputStyle;
}
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
                    '&:hover': { backgroundColor: (0, styles_1.varAlpha)(theme.vars.palette[color].mainChannel, 0.32) }
                },
                _b[styles_1.stylesMode.dark] = { color: theme.vars.palette[color].light },
                _b);
        },
    }); }),
    inheritColor: [
        {
            props: function (_a) {
                var ownerState = _a.ownerState;
                return ownerState.variant === 'soft' && ownerState.color === 'default';
            },
            style: function (_a) {
                var theme = _a.theme;
                return ({
                    backgroundColor: (0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0.16),
                    '&:hover': { backgroundColor: (0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0.32) },
                });
            },
        },
    ],
};
// ----------------------------------------------------------------------
var MuiChip = {
    /** **************************************
     * DEFAULT PROPS
     *************************************** */
    defaultProps: { deleteIcon: (0, jsx_runtime_1.jsx)(exports.ChipDeleteIcon, {}) },
    /** **************************************
     * VARIANTS
     *************************************** */
    variants: __spreadArray(__spreadArray([], softVariant.inheritColor, true), softVariant.colors, true),
    /** **************************************
     * STYLE
     *************************************** */
    styleOverrides: {
        root: function (_a) {
            var _b, _c;
            var ownerState = _a.ownerState, theme = _a.theme;
            var styled = {
                colors: styleColors(ownerState, function (color) {
                    var _a;
                    return (_a = {},
                        _a["& .".concat(Chip_1.chipClasses.avatar)] = {
                            color: theme.vars.palette[color].lighter,
                            backgroundColor: theme.vars.palette[color].dark,
                        },
                        _a);
                }),
                disabled: (_b = {},
                    _b["&.".concat(Chip_1.chipClasses.disabled)] = __assign(__assign((_c = { opacity: 1 }, _c["& .".concat(Chip_1.chipClasses.avatar)] = {
                        color: theme.vars.palette.action.disabled,
                        backgroundColor: theme.vars.palette.action.disabledBackground,
                    }, _c), (ownerState.variant === 'outlined' && {
                        color: theme.vars.palette.action.disabled,
                        borderColor: theme.vars.palette.action.disabledBackground,
                    })), (['filled', 'soft'].includes(ownerState.variant) && {
                        color: theme.vars.palette.action.disabled,
                        backgroundColor: theme.vars.palette.action.disabledBackground,
                    })),
                    _b),
            };
            return __assign(__assign({}, styled.colors), styled.disabled);
        },
        label: function (_a) {
            var theme = _a.theme;
            return ({ fontWeight: theme.typography.fontWeightMedium });
        },
        icon: { color: 'currentColor' },
        deleteIcon: {
            opacity: 0.48,
            color: 'currentColor',
            '&:hover': { opacity: 1, color: 'currentColor' },
        },
        sizeMedium: function (_a) {
            var theme = _a.theme;
            return ({ borderRadius: theme.shape.borderRadius * 1.25 });
        },
        sizeSmall: function (_a) {
            var theme = _a.theme;
            return ({ borderRadius: theme.shape.borderRadius });
        },
        /**
         * @variant filled
         */
        filled: function (_a) {
            var _b;
            var ownerState = _a.ownerState, theme = _a.theme;
            var styled = {
                defaultColor: __assign({}, (!ownerState.disabled &&
                    ownerState.color === 'default' && (_b = {
                        color: theme.vars.palette.common.white,
                        backgroundColor: theme.vars.palette.text.primary
                    },
                    _b["& .".concat(Chip_1.chipClasses.avatar)] = { color: theme.vars.palette.text.primary },
                    _b['&:hover'] = { backgroundColor: theme.vars.palette.grey[700] },
                    _b[styles_1.stylesMode.dark] = {
                        color: theme.vars.palette.grey[800],
                        '&:hover': { backgroundColor: theme.vars.palette.grey[100] },
                    },
                    _b))),
            };
            return __assign({}, styled.defaultColor);
        },
        /**
         * @variant outlined
         */
        outlined: function (_a) {
            var ownerState = _a.ownerState, theme = _a.theme;
            var styled = {
                defaultColor: __assign({}, (!ownerState.disabled &&
                    ownerState.color === 'default' && {
                    borderColor: (0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0.32),
                })),
            };
            return __assign({}, styled.defaultColor);
        },
    },
};
// ----------------------------------------------------------------------
exports.chip = { MuiChip: MuiChip };

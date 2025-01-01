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
exports.avatar = void 0;
var AvatarGroup_1 = require("@mui/material/AvatarGroup");
var styles_1 = require("../../styles");
var COLORS = ['primary', 'secondary', 'info', 'success', 'warning', 'error'];
var colorByName = function (name) {
    var charAt = name.charAt(0).toLowerCase();
    if (['a', 'c', 'f'].includes(charAt))
        return 'primary';
    if (['e', 'd', 'h'].includes(charAt))
        return 'secondary';
    if (['i', 'k', 'l'].includes(charAt))
        return 'info';
    if (['m', 'n', 'p'].includes(charAt))
        return 'success';
    if (['q', 's', 't'].includes(charAt))
        return 'warning';
    if (['v', 'x', 'y'].includes(charAt))
        return 'error';
    return 'default';
};
// ----------------------------------------------------------------------
var avatarColors = {
    colors: COLORS.map(function (color) { return ({
        props: function (_a) {
            var ownerState = _a.ownerState;
            return ownerState.color === color;
        },
        style: function (_a) {
            var theme = _a.theme;
            return ({
                color: theme.vars.palette[color].contrastText,
                backgroundColor: theme.vars.palette[color].main,
            });
        },
    }); }),
    defaultColor: [
        {
            props: function (_a) {
                var ownerState = _a.ownerState;
                return ownerState.color === 'default';
            },
            style: function (_a) {
                var theme = _a.theme;
                return ({
                    color: theme.vars.palette.text.secondary,
                    backgroundColor: (0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0.24),
                });
            },
        },
    ],
};
var MuiAvatar = {
    /** **************************************
     * VARIANTS
     *************************************** */
    variants: __spreadArray(__spreadArray([], avatarColors.defaultColor, true), avatarColors.colors, true),
    /** **************************************
     * STYLE
     *************************************** */
    styleOverrides: {
        rounded: function (_a) {
            var theme = _a.theme;
            return ({ borderRadius: theme.shape.borderRadius * 1.5 });
        },
        colorDefault: function (_a) {
            var ownerState = _a.ownerState, theme = _a.theme;
            var color = colorByName("".concat(ownerState.alt));
            return __assign({}, (!!ownerState.alt && __assign({}, (color !== 'default'
                ? {
                    color: theme.vars.palette[color].contrastText,
                    backgroundColor: theme.vars.palette[color].main,
                }
                : {
                    color: theme.vars.palette.text.secondary,
                    backgroundColor: (0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0.24),
                }))));
        },
    },
};
// ----------------------------------------------------------------------
var MuiAvatarGroup = {
    /** **************************************
     * DEFAULT PROPS
     *************************************** */
    defaultProps: { max: 4 },
    /** **************************************
     * STYLE
     *************************************** */
    styleOverrides: {
        root: function (_a) {
            var _b;
            var ownerState = _a.ownerState;
            return (__assign({ justifyContent: 'flex-end' }, (ownerState.variant === 'compact' && (_b = {
                    width: 40,
                    height: 40,
                    position: 'relative'
                },
                _b["& .".concat(AvatarGroup_1.avatarGroupClasses.avatar)] = {
                    margin: 0,
                    width: 28,
                    height: 28,
                    position: 'absolute',
                    '&:first-of-type': { left: 0, bottom: 0, zIndex: 9 },
                    '&:last-of-type': { top: 0, right: 0 },
                },
                _b))));
        },
        avatar: function (_a) {
            var theme = _a.theme;
            return ({
                fontSize: 16,
                fontWeight: theme.typography.fontWeightSemiBold,
                '&:first-of-type': {
                    fontSize: 12,
                    color: theme.vars.palette.primary.dark,
                    backgroundColor: theme.vars.palette.primary.lighter,
                },
            });
        },
    },
};
// ----------------------------------------------------------------------
exports.avatar = { MuiAvatar: MuiAvatar, MuiAvatarGroup: MuiAvatarGroup };

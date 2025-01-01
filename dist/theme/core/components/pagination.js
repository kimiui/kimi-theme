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
exports.pagination = void 0;
var PaginationItem_1 = require("@mui/material/PaginationItem");
var styles_1 = require("../../styles");
var COLORS = ['primary', 'secondary', 'info', 'success', 'warning', 'error'];
// ----------------------------------------------------------------------
var softVariant = {
    colors: COLORS.map(function (color) { return ({
        props: function (_a) {
            var ownerState = _a.ownerState;
            return !ownerState.disabled && ownerState.variant === 'soft' && ownerState.color === color;
        },
        style: function (_a) {
            var _b, _c, _d;
            var theme = _a.theme;
            return (_b = {},
                _b["& .".concat(PaginationItem_1.paginationItemClasses.root)] = (_c = {},
                    _c["&.".concat(PaginationItem_1.paginationItemClasses.selected)] = (_d = {
                            fontWeight: theme.typography.fontWeightSemiBold,
                            color: theme.vars.palette[color].dark,
                            backgroundColor: (0, styles_1.varAlpha)(theme.vars.palette[color].mainChannel, 0.08),
                            '&:hover': { backgroundColor: (0, styles_1.varAlpha)(theme.vars.palette[color].mainChannel, 0.16) }
                        },
                        _d[styles_1.stylesMode.dark] = { color: theme.vars.palette[color].light },
                        _d),
                    _c),
                _b);
        },
    }); }),
    standardColor: [
        {
            props: function (_a) {
                var ownerState = _a.ownerState;
                return ownerState.variant === 'soft' && ownerState.color === 'standard';
            },
            style: function (_a) {
                var _b, _c;
                var theme = _a.theme;
                return (_b = {},
                    _b["& .".concat(PaginationItem_1.paginationItemClasses.root)] = (_c = {},
                        _c["&.".concat(PaginationItem_1.paginationItemClasses.selected)] = {
                            fontWeight: theme.typography.fontWeightSemiBold,
                            backgroundColor: (0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0.08),
                            '&:hover': { backgroundColor: (0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0.16) },
                        },
                        _c),
                    _b);
            },
        },
    ],
};
// ----------------------------------------------------------------------
var MuiPagination = {
    /** **************************************
     * VARIANTS
     *************************************** */
    variants: __spreadArray(__spreadArray([], softVariant.standardColor, true), softVariant.colors, true),
    /** **************************************
     * STYLE
     *************************************** */
    styleOverrides: {
        /**
         * @variant text
         */
        text: function (_a) {
            var _b, _c, _d;
            var ownerState = _a.ownerState, theme = _a.theme;
            return (_b = {},
                _b["& .".concat(PaginationItem_1.paginationItemClasses.root)] = (_c = {},
                    _c["&.".concat(PaginationItem_1.paginationItemClasses.selected)] = __assign({ fontWeight: theme.typography.fontWeightSemiBold }, (ownerState.color === 'standard' && (_d = {
                            color: theme.vars.palette.common.white,
                            backgroundColor: theme.vars.palette.text.primary,
                            '&:hover': { backgroundColor: theme.vars.palette.grey[700] }
                        },
                        _d[styles_1.stylesMode.dark] = {
                            color: theme.vars.palette.grey[800],
                            '&:hover': { backgroundColor: theme.vars.palette.grey[100] },
                        },
                        _d))),
                    _c),
                _b);
        },
        /**
         * @variant outlined
         */
        outlined: function (_a) {
            var _b, _c;
            var ownerState = _a.ownerState, theme = _a.theme;
            return (_b = {},
                _b["& .".concat(PaginationItem_1.paginationItemClasses.root)] = (_c = {
                        borderColor: (0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0.24)
                    },
                    _c["&.".concat(PaginationItem_1.paginationItemClasses.selected)] = __assign({ borderColor: 'currentColor', fontWeight: theme.typography.fontWeightSemiBold }, (ownerState.color === 'standard' && {
                        backgroundColor: (0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0.08),
                    })),
                    _c),
                _b);
        },
    },
};
// ----------------------------------------------------------------------
exports.pagination = { MuiPagination: MuiPagination };

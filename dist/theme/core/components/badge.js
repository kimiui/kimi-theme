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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.badge = void 0;
var Badge_1 = require("@mui/material/Badge");
// ----------------------------------------------------------------------
var baseStyles = function (theme) {
    var _a;
    return (_a = {
            width: 10,
            zIndex: 9,
            padding: 0,
            height: 10,
            minWidth: 'auto',
            '&::before, &::after': {
                content: "''",
                borderRadius: 1,
                backgroundColor: theme.vars.palette.common.white,
            }
        },
        _a["&.".concat(Badge_1.badgeClasses.invisible)] = { transform: 'unset' },
        _a);
};
var MuiBadge = {
    /** **************************************
     * VARIANTS
     *************************************** */
    variants: [
        /**
         * @variant online
         */
        {
            props: function (_a) {
                var ownerState = _a.ownerState;
                return ownerState.variant === 'online';
            },
            style: function (_a) {
                var _b;
                var theme = _a.theme;
                return (_b = {},
                    _b["& .".concat(Badge_1.badgeClasses.badge)] = __assign(__assign({}, baseStyles(theme)), { backgroundColor: theme.vars.palette.success.main }),
                    _b);
            },
        },
        /**
         * @variant alway
         */
        {
            props: function (_a) {
                var ownerState = _a.ownerState;
                return ownerState.variant === 'alway';
            },
            style: function (_a) {
                var _b;
                var theme = _a.theme;
                return (_b = {},
                    _b["& .".concat(Badge_1.badgeClasses.badge)] = __assign(__assign({}, baseStyles(theme)), { backgroundColor: theme.vars.palette.warning.main, '&::before': { width: 2, height: 4, transform: 'translateX(1px) translateY(-1px)' }, '&::after': { width: 2, height: 4, transform: 'translateY(1px) rotate(125deg)' } }),
                    _b);
            },
        },
        /**
         * @variant busy
         */
        {
            props: function (_a) {
                var ownerState = _a.ownerState;
                return ownerState.variant === 'busy';
            },
            style: function (_a) {
                var _b;
                var theme = _a.theme;
                return (_b = {},
                    _b["& .".concat(Badge_1.badgeClasses.badge)] = __assign(__assign({}, baseStyles(theme)), { backgroundColor: theme.vars.palette.error.main, '&::before': { width: 6, height: 2 } }),
                    _b);
            },
        },
        /**
         * @variant offline
         */
        {
            props: function (_a) {
                var ownerState = _a.ownerState;
                return ownerState.variant === 'offline';
            },
            style: function (_a) {
                var _b;
                var theme = _a.theme;
                return (_b = {},
                    _b["& .".concat(Badge_1.badgeClasses.badge)] = __assign(__assign({}, baseStyles(theme)), { backgroundColor: theme.vars.palette.text.disabled, '&::before': { width: 6, height: 6, borderRadius: '50%' } }),
                    _b);
            },
        },
        /**
         * @variant invisible
         */
        {
            props: function (_a) {
                var ownerState = _a.ownerState;
                return ownerState.variant === 'invisible';
            },
            style: (_a = {}, _a["& .".concat(Badge_1.badgeClasses.badge)] = { display: 'none' }, _a),
        },
    ],
    /** **************************************
     * STYLE
     *************************************** */
    styleOverrides: { dot: { borderRadius: '50%' } },
};
// ----------------------------------------------------------------------
exports.badge = { MuiBadge: MuiBadge };

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
exports.tabs = void 0;
var Tab_1 = require("@mui/material/Tab");
// ----------------------------------------------------------------------
var MuiTabs = {
    /** **************************************
     * DEFAULT PROPS
     *************************************** */
    defaultProps: {
        textColor: 'inherit',
        variant: 'scrollable',
        allowScrollButtonsMobile: true,
    },
    /** **************************************
     * STYLE
     *************************************** */
    styleOverrides: {
        flexContainer: function (_a) {
            var _b;
            var ownerState = _a.ownerState, theme = _a.theme;
            return (__assign({}, (ownerState.variant !== 'fullWidth' && (_b = {
                    gap: '24px'
                },
                _b[theme.breakpoints.up('sm')] = {
                    gap: '40px',
                },
                _b))));
        },
        indicator: { backgroundColor: 'currentColor' },
    },
};
// ----------------------------------------------------------------------
var MuiTab = {
    /** **************************************
     * DEFAULT PROPS
     *************************************** */
    defaultProps: { disableRipple: true, iconPosition: 'start' },
    /** **************************************
     * STYLE
     *************************************** */
    styleOverrides: {
        root: function (_a) {
            var _b;
            var theme = _a.theme;
            return (_b = {
                    opacity: 1,
                    minWidth: 48,
                    minHeight: 48,
                    padding: theme.spacing(1, 0),
                    color: theme.vars.palette.text.secondary,
                    fontWeight: theme.typography.fontWeightMedium,
                    lineHeight: theme.typography.body2.lineHeight
                },
                _b["&.".concat(Tab_1.tabClasses.selected)] = {
                    color: theme.vars.palette.text.primary,
                    fontWeight: theme.typography.fontWeightSemiBold,
                },
                _b);
        },
    },
};
// ----------------------------------------------------------------------
exports.tabs = { MuiTabs: MuiTabs, MuiTab: MuiTab };

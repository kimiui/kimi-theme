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
exports.dialog = void 0;
// ----------------------------------------------------------------------
var MuiDialog = {
    /** **************************************
     * STYLE
     *************************************** */
    styleOverrides: {
        paper: function (_a) {
            var ownerState = _a.ownerState, theme = _a.theme;
            return (__assign({ boxShadow: theme.shadows[8], borderRadius: theme.shape.borderRadius * 2 }, (!ownerState.fullScreen && { margin: theme.spacing(2) })));
        },
        paperFullScreen: { borderRadius: 0 },
    },
};
var MuiDialogTitle = {
    /** **************************************
     * STYLE
     *************************************** */
    styleOverrides: { root: function (_a) {
            var theme = _a.theme;
            return ({ padding: theme.spacing(3) });
        } },
};
var MuiDialogContent = {
    /** **************************************
     * STYLE
     *************************************** */
    styleOverrides: {
        root: function (_a) {
            var theme = _a.theme;
            return ({ padding: theme.spacing(0, 3) });
        },
        dividers: function (_a) {
            var theme = _a.theme;
            return ({
                borderTop: 0,
                borderBottomStyle: 'dashed',
                paddingBottom: theme.spacing(3),
            });
        },
    },
};
var MuiDialogActions = {
    /** **************************************
     * DEFAULT PROPS
     *************************************** */
    defaultProps: { disableSpacing: true },
    /** **************************************
     * STYLE
     *************************************** */
    styleOverrides: {
        root: function (_a) {
            var theme = _a.theme;
            return ({
                padding: theme.spacing(3),
                '& > :not(:first-of-type)': { marginLeft: theme.spacing(1.5) },
            });
        },
    },
};
// ----------------------------------------------------------------------
exports.dialog = {
    MuiDialog: MuiDialog,
    MuiDialogTitle: MuiDialogTitle,
    MuiDialogContent: MuiDialogContent,
    MuiDialogActions: MuiDialogActions,
};

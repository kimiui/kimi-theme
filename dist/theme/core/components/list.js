"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.list = void 0;
// ----------------------------------------------------------------------
var MuiListItemIcon = {
    /** **************************************
     * STYLE
     *************************************** */
    styleOverrides: {
        root: function (_a) {
            var theme = _a.theme;
            return ({ color: 'inherit', minWidth: 'auto', marginRight: theme.spacing(2) });
        },
    },
};
// ----------------------------------------------------------------------
var MuiListItemAvatar = {
    /** **************************************
     * STYLE
     *************************************** */
    styleOverrides: { root: function (_a) {
            var theme = _a.theme;
            return ({ minWidth: 'auto', marginRight: theme.spacing(2) });
        } },
};
// ----------------------------------------------------------------------
var MuiListItemText = {
    /** **************************************
     * DEFAULT PROPS
     *************************************** */
    defaultProps: { primaryTypographyProps: { typography: 'subtitle2' } },
    /** **************************************
     * STYLE
     *************************************** */
    styleOverrides: { root: { margin: 0 }, multiline: { margin: 0 } },
};
// ----------------------------------------------------------------------
exports.list = {
    MuiListItemIcon: MuiListItemIcon,
    MuiListItemAvatar: MuiListItemAvatar,
    MuiListItemText: MuiListItemText,
};

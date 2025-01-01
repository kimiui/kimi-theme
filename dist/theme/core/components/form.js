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
exports.form = void 0;
var InputLabel_1 = require("@mui/material/InputLabel");
// ----------------------------------------------------------------------
var MuiFormLabel = {
    /** **************************************
     * STYLE
     *************************************** */
    styleOverrides: {
        root: function (_a) {
            var _b, _c;
            var theme = _a.theme;
            return (__assign(__assign({}, theme.typography.body2), (_b = { color: theme.vars.palette.text.disabled }, _b["&.".concat(InputLabel_1.inputLabelClasses.shrink)] = __assign(__assign({}, theme.typography.body1), (_c = { fontWeight: 600, color: theme.vars.palette.text.secondary }, _c["&.".concat(InputLabel_1.inputLabelClasses.focused)] = { color: theme.vars.palette.text.primary }, _c["&.".concat(InputLabel_1.inputLabelClasses.error)] = { color: theme.vars.palette.error.main }, _c["&.".concat(InputLabel_1.inputLabelClasses.disabled)] = { color: theme.vars.palette.text.disabled }, _c["&.".concat(InputLabel_1.inputLabelClasses.filled)] = { transform: 'translate(12px, 6px) scale(0.75)' }, _c)), _b)));
        },
    },
};
// ----------------------------------------------------------------------
var MuiFormHelperText = {
    /** **************************************
     * DEFAULT PROPS
     *************************************** */
    defaultProps: { component: 'div' },
    /** **************************************
     * STYLE
     *************************************** */
    styleOverrides: { root: function (_a) {
            var theme = _a.theme;
            return ({ marginTop: theme.spacing(1) });
        } },
};
// ----------------------------------------------------------------------
var MuiFormControlLabel = {
    /** **************************************
     * STYLE
     *************************************** */
    styleOverrides: { label: function (_a) {
            var theme = _a.theme;
            return (__assign({}, theme.typography.body2));
        } },
};
// ----------------------------------------------------------------------
exports.form = { MuiFormLabel: MuiFormLabel, MuiFormHelperText: MuiFormHelperText, MuiFormControlLabel: MuiFormControlLabel };

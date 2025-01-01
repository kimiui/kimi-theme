"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.textfield = void 0;
var InputBase_1 = require("@mui/material/InputBase");
var FilledInput_1 = require("@mui/material/FilledInput");
var OutlinedInput_1 = require("@mui/material/OutlinedInput");
var styles_1 = require("../../styles");
// ----------------------------------------------------------------------
var MuiInputBase = {
    /** **************************************
     * STYLE
     *************************************** */
    styleOverrides: {
        root: function (_a) {
            var _b;
            var theme = _a.theme;
            return (_b = {},
                _b["&.".concat(InputBase_1.inputBaseClasses.disabled)] = {
                    '& svg': { color: theme.vars.palette.text.disabled },
                },
                _b);
        },
        input: function (_a) {
            var _b;
            var theme = _a.theme;
            return (_b = {
                    fontSize: theme.typography.pxToRem(15)
                },
                _b[theme.breakpoints.down('sm')] = {
                    // This will prevent zoom in Safari min font size ~ 16px
                    fontSize: theme.typography.pxToRem(16),
                },
                _b['&::placeholder'] = {
                    opacity: 1,
                    color: theme.vars.palette.text.disabled,
                },
                _b);
        },
    },
};
// ----------------------------------------------------------------------
var MuiInput = {
    /** **************************************
     * STYLE
     *************************************** */
    styleOverrides: {
        underline: function (_a) {
            var theme = _a.theme;
            return ({
                '&::before': { borderBottomColor: (0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0.32) },
                '&::after': { borderBottomColor: theme.vars.palette.text.primary },
            });
        },
    },
};
// ----------------------------------------------------------------------
var MuiOutlinedInput = {
    /** **************************************
     * STYLE
     *************************************** */
    styleOverrides: {
        root: function (_a) {
            var _b, _c, _d, _e;
            var theme = _a.theme;
            return (_b = {},
                _b["&.".concat(OutlinedInput_1.outlinedInputClasses.focused)] = (_c = {},
                    _c["& .".concat(OutlinedInput_1.outlinedInputClasses.notchedOutline)] = {
                        borderColor: theme.vars.palette.text.primary,
                    },
                    _c),
                _b["&.".concat(OutlinedInput_1.outlinedInputClasses.error)] = (_d = {},
                    _d["& .".concat(OutlinedInput_1.outlinedInputClasses.notchedOutline)] = {
                        borderColor: theme.vars.palette.error.main,
                    },
                    _d),
                _b["&.".concat(OutlinedInput_1.outlinedInputClasses.disabled)] = (_e = {},
                    _e["& .".concat(OutlinedInput_1.outlinedInputClasses.notchedOutline)] = {
                        borderColor: theme.vars.palette.action.disabledBackground,
                    },
                    _e),
                _b);
        },
        notchedOutline: function (_a) {
            var theme = _a.theme;
            return ({
                borderColor: (0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0.2),
                transition: theme.transitions.create(['border-color'], {
                    duration: theme.transitions.duration.shortest,
                }),
            });
        },
    },
};
// ----------------------------------------------------------------------
var MuiFilledInput = {
    /** **************************************
     * DEFAULT PROPS
     *************************************** */
    defaultProps: { disableUnderline: true },
    /** **************************************
     * STYLE
     *************************************** */
    styleOverrides: {
        root: function (_a) {
            var _b, _c;
            var theme = _a.theme;
            return (_b = {
                    borderRadius: theme.shape.borderRadius,
                    backgroundColor: (0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0.08),
                    '&:hover': { backgroundColor: (0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0.16) }
                },
                _b["&.".concat(FilledInput_1.filledInputClasses.focused)] = {
                    backgroundColor: (0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0.16),
                },
                _b["&.".concat(FilledInput_1.filledInputClasses.error)] = (_c = {
                        backgroundColor: (0, styles_1.varAlpha)(theme.vars.palette.error.mainChannel, 0.08)
                    },
                    _c["&.".concat(FilledInput_1.filledInputClasses.focused)] = {
                        backgroundColor: (0, styles_1.varAlpha)(theme.vars.palette.error.mainChannel, 0.16),
                    },
                    _c),
                _b["&.".concat(FilledInput_1.filledInputClasses.disabled)] = {
                    backgroundColor: theme.vars.palette.action.disabledBackground,
                },
                _b);
        },
    },
};
// ----------------------------------------------------------------------
exports.textfield = {
    MuiInput: MuiInput,
    MuiInputBase: MuiInputBase,
    MuiFilledInput: MuiFilledInput,
    MuiOutlinedInput: MuiOutlinedInput,
};

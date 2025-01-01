"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typography = void 0;
// ----------------------------------------------------------------------
var MuiTypography = {
    /** **************************************
     * STYLE
     *************************************** */
    styleOverrides: {
        paragraph: function (_a) {
            var theme = _a.theme;
            return ({ marginBottom: theme.spacing(2) });
        },
        gutterBottom: function (_a) {
            var theme = _a.theme;
            return ({ marginBottom: theme.spacing(1) });
        },
    },
};
// ----------------------------------------------------------------------
exports.typography = { MuiTypography: MuiTypography };

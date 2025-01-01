"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stepper = void 0;
// ----------------------------------------------------------------------
var MuiStepConnector = {
    /** **************************************
     * STYLE
     *************************************** */
    styleOverrides: { line: function (_a) {
            var theme = _a.theme;
            return ({ borderColor: theme.vars.palette.divider });
        } },
};
// ----------------------------------------------------------------------
exports.stepper = { MuiStepConnector: MuiStepConnector };

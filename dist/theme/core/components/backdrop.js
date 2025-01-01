"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.backdrop = void 0;
var styles_1 = require("../../styles");
// ----------------------------------------------------------------------
var MuiBackdrop = {
    /** **************************************
     * STYLE
     *************************************** */
    styleOverrides: {
        root: function (_a) {
            var theme = _a.theme;
            return ({
                backgroundColor: (0, styles_1.varAlpha)(theme.vars.palette.grey['800Channel'], 0.48),
            });
        },
        invisible: { background: 'transparent' },
    },
};
// ----------------------------------------------------------------------
exports.backdrop = { MuiBackdrop: MuiBackdrop };

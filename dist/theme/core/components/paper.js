"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paper = void 0;
var styles_1 = require("../../styles");
// ----------------------------------------------------------------------
var MuiPaper = {
    /** **************************************
     * DEFAULT PROPS
     *************************************** */
    defaultProps: { elevation: 0 },
    /** **************************************
     * STYLE
     *************************************** */
    styleOverrides: {
        root: { backgroundImage: 'none' },
        outlined: function (_a) {
            var theme = _a.theme;
            return ({
                borderColor: (0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0.16),
            });
        },
    },
};
// ----------------------------------------------------------------------
exports.paper = { MuiPaper: MuiPaper };

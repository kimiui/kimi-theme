"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.skeleton = void 0;
var styles_1 = require("../../styles");
// ----------------------------------------------------------------------
var MuiSkeleton = {
    /** **************************************
     * DEFAULT PROPS
     *************************************** */
    defaultProps: { animation: 'wave', variant: 'rounded' },
    /** **************************************
     * STYLE
     *************************************** */
    styleOverrides: {
        root: function (_a) {
            var theme = _a.theme;
            return ({
                backgroundColor: (0, styles_1.varAlpha)(theme.vars.palette.grey['400Channel'], 0.12),
            });
        },
        rounded: function (_a) {
            var theme = _a.theme;
            return ({ borderRadius: theme.shape.borderRadius * 2 });
        },
    },
};
// ----------------------------------------------------------------------
exports.skeleton = { MuiSkeleton: MuiSkeleton };

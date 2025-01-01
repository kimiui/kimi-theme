"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.card = void 0;
// ----------------------------------------------------------------------
var MuiCard = {
    /** **************************************
     * STYLE
     *************************************** */
    styleOverrides: {
        root: function (_a) {
            var theme = _a.theme;
            return ({
                position: 'relative',
                boxShadow: theme.shadows[8],
                borderRadius: theme.shape.borderRadius * 2,
                zIndex: 0, // Fix Safari overflow: hidden with border radius
            });
        },
    },
};
// ----------------------------------------------------------------------
var MuiCardHeader = {
    /** **************************************
     * DEFAULT PROPS
     *************************************** */
    defaultProps: {
        titleTypographyProps: { variant: 'h6' },
        subheaderTypographyProps: { variant: 'body2', marginTop: '4px' },
    },
    /** **************************************
     * STYLE
     *************************************** */
    styleOverrides: {
        root: function (_a) {
            var theme = _a.theme;
            return ({
                padding: theme.spacing(3, 3, 0),
            });
        },
    },
};
// ----------------------------------------------------------------------
var MuiCardContent = {
    /** **************************************
     * STYLE
     *************************************** */
    styleOverrides: { root: function (_a) {
            var theme = _a.theme;
            return ({ padding: theme.spacing(3) });
        } },
};
// ----------------------------------------------------------------------
exports.card = { MuiCard: MuiCard, MuiCardHeader: MuiCardHeader, MuiCardContent: MuiCardContent };

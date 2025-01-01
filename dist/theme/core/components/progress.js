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
exports.progress = void 0;
var styles_1 = require("../../styles");
// ----------------------------------------------------------------------
var COLORS = ['primary', 'secondary', 'info', 'success', 'warning', 'error'];
// ----------------------------------------------------------------------
function styleColors(ownerState, styles) {
    var outputStyle = COLORS.reduce(function (acc, color) {
        if (ownerState.color === color) {
            acc = styles(color);
        }
        return acc;
    }, {});
    return outputStyle;
}
var MuiLinearProgress = {
    /** **************************************
     * STYLE
     *************************************** */
    styleOverrides: {
        root: function (_a) {
            var theme = _a.theme, ownerState = _a.ownerState;
            var styled = {
                colors: styleColors(ownerState, function (color) { return ({
                    backgroundColor: (0, styles_1.varAlpha)(theme.vars.palette[color].mainChannel, 0.24),
                }); }),
                inheritColor: __assign({}, (ownerState.color === 'inherit' && {
                    '&::before': { display: 'none' },
                    backgroundColor: (0, styles_1.varAlpha)(theme.vars.palette.text.primaryChannel, 0.24),
                })),
            };
            return __assign({ borderRadius: 4 }, (ownerState.variant !== 'buffer' && __assign(__assign({}, styled.inheritColor), styled.colors)));
        },
        bar: { borderRadius: 'inherit' },
    },
};
// ----------------------------------------------------------------------
exports.progress = { MuiLinearProgress: MuiLinearProgress };

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
exports.drawer = void 0;
var styles_1 = require("../../styles");
// ----------------------------------------------------------------------
var MuiDrawer = {
    /** **************************************
     * STYLE
     *************************************** */
    styleOverrides: {
        paperAnchorRight: function (_a) {
            var _b;
            var ownerState = _a.ownerState, theme = _a.theme;
            return (__assign({}, (ownerState.variant === 'temporary' && __assign(__assign({}, (0, styles_1.paper)({ theme: theme })), (_b = { boxShadow: "-40px 40px 80px -8px ".concat((0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0.24)) }, _b[styles_1.stylesMode.dark] = {
                boxShadow: "-40px 40px 80px -8px ".concat((0, styles_1.varAlpha)(theme.vars.palette.common.blackChannel, 0.24)),
            }, _b)))));
        },
        paperAnchorLeft: function (_a) {
            var _b;
            var ownerState = _a.ownerState, theme = _a.theme;
            return (__assign({}, (ownerState.variant === 'temporary' && __assign(__assign({}, (0, styles_1.paper)({ theme: theme })), (_b = { boxShadow: "40px 40px 80px -8px ".concat((0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0.24)) }, _b[styles_1.stylesMode.dark] = {
                boxShadow: "40px 40px 80px -8px  ".concat((0, styles_1.varAlpha)(theme.vars.palette.common.blackChannel, 0.24)),
            }, _b)))));
        },
    },
};
// ----------------------------------------------------------------------
exports.drawer = { MuiDrawer: MuiDrawer };

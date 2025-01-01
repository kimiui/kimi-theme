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
exports.breadcrumbs = void 0;
// ----------------------------------------------------------------------
var MuiBreadcrumbs = {
    /** **************************************
     * STYLE
     *************************************** */
    styleOverrides: {
        ol: function (_a) {
            var theme = _a.theme;
            return ({ rowGap: theme.spacing(0.5), columnGap: theme.spacing(2) });
        },
        li: function (_a) {
            var theme = _a.theme;
            return ({ display: 'inline-flex', '& > *': __assign({}, theme.typography.body2) });
        },
        separator: { margin: 0 },
    },
};
// ----------------------------------------------------------------------
exports.breadcrumbs = { MuiBreadcrumbs: MuiBreadcrumbs };

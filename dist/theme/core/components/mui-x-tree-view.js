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
exports.treeView = void 0;
// ----------------------------------------------------------------------
var MuiTreeItem = {
    /** **************************************
     * STYLE
     *************************************** */
    styleOverrides: {
        label: function (_a) {
            var theme = _a.theme;
            return (__assign({}, theme.typography.body2));
        },
        iconContainer: { width: 'auto' },
    },
};
// ----------------------------------------------------------------------
exports.treeView = { MuiTreeItem: MuiTreeItem };

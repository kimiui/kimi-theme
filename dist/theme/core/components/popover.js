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
exports.popover = void 0;
var List_1 = require("@mui/material/List");
var styles_1 = require("../../styles");
// ----------------------------------------------------------------------
var MuiPopover = {
    /** **************************************
     * STYLE
     *************************************** */
    styleOverrides: {
        paper: function (_a) {
            var _b;
            var theme = _a.theme;
            return (__assign(__assign({}, (0, styles_1.paper)({ theme: theme, dropdown: true })), (_b = {}, _b["& .".concat(List_1.listClasses.root)] = { paddingTop: 0, paddingBottom: 0 }, _b)));
        },
    },
};
// ----------------------------------------------------------------------
exports.popover = { MuiPopover: MuiPopover };

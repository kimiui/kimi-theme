'use client';
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
exports.StyledControlPanel = void 0;
var styles_1 = require("@mui/material/styles");
var styles_2 = require("../../../theme/styles");
// ----------------------------------------------------------------------
exports.StyledControlPanel = (0, styles_1.styled)('div')(function (_a) {
    var theme = _a.theme;
    return (__assign(__assign({}, (0, styles_2.bgBlur)({ color: (0, styles_2.varAlpha)(theme.vars.palette.grey['900Channel'], 0.8) })), { zIndex: 9, minWidth: 200, position: 'absolute', top: theme.spacing(1), right: theme.spacing(1), padding: theme.spacing(2), borderRadius: theme.shape.borderRadius * 1.5 }));
});

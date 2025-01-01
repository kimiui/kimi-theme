'use client';
"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useResponsive = useResponsive;
exports.useWidth = useWidth;
var react_1 = require("react");
var styles_1 = require("@mui/material/styles");
var useMediaQuery_1 = __importDefault(require("@mui/material/useMediaQuery"));
function useResponsive(query, start, end) {
    var theme = (0, styles_1.useTheme)();
    var getQuery = (0, react_1.useMemo)(function () {
        switch (query) {
            case 'up':
                return theme.breakpoints.up(start);
            case 'down':
                return theme.breakpoints.down(start);
            case 'between':
                return theme.breakpoints.between(start, end);
            case 'only':
                return theme.breakpoints.only(start);
            default:
                return theme.breakpoints.up('xs');
        }
    }, [theme, query, start, end]);
    var mediaQueryResult = (0, useMediaQuery_1.default)(getQuery);
    return mediaQueryResult;
}
function useWidth() {
    var theme = (0, styles_1.useTheme)();
    var keys = (0, react_1.useMemo)(function () { return __spreadArray([], theme.breakpoints.keys, true).reverse(); }, [theme]);
    var width = keys.reduce(function (output, key) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        var matches = (0, useMediaQuery_1.default)(theme.breakpoints.up(key));
        return !output && matches ? key : output;
    }, null);
    return width !== null && width !== void 0 ? width : 'xs';
}

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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.select = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var SvgIcon_1 = __importDefault(require("@mui/material/SvgIcon"));
// ----------------------------------------------------------------------
/**
 * Icons
 * https://icon-sets.iconify.design/eva/arrow-ios-downward-fill/
 */
var ArrowDownIcon = function (props) { return ((0, jsx_runtime_1.jsx)(SvgIcon_1.default, __assign({}, props, { children: (0, jsx_runtime_1.jsx)("path", { fill: "currentColor", d: "M12 16a1 1 0 0 1-.64-.23l-6-5a1 1 0 1 1 1.28-1.54L12 13.71l5.36-4.32a1 1 0 0 1 1.41.15a1 1 0 0 1-.14 1.46l-6 4.83A1 1 0 0 1 12 16" }) }))); };
// ----------------------------------------------------------------------
var MuiSelect = {
    /** **************************************
     * DEFAULT PROPS
     *************************************** */
    defaultProps: { IconComponent: ArrowDownIcon },
    /** **************************************
     * STYLE
     *************************************** */
    styleOverrides: {
        icon: {
            right: 10,
            width: 18,
            height: 18,
            top: 'calc(50% - 9px)',
        },
    },
};
// ----------------------------------------------------------------------
var MuiNativeSelect = {
    /** **************************************
     * DEFAULT PROPS
     *************************************** */
    defaultProps: { IconComponent: ArrowDownIcon },
    /** **************************************
     * STYLE
     *************************************** */
    styleOverrides: {
        icon: {
            right: 10,
            width: 18,
            height: 18,
            top: 'calc(50% - 9px)',
        },
    },
};
// ----------------------------------------------------------------------
exports.select = { MuiSelect: MuiSelect, MuiNativeSelect: MuiNativeSelect };

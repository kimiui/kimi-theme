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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.autocomplete = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var SvgIcon_1 = __importStar(require("@mui/material/SvgIcon"));
var Autocomplete_1 = require("@mui/material/Autocomplete");
var styles_1 = require("../../styles");
// ----------------------------------------------------------------------
/**
 * Icons
 * https://icon-sets.iconify.design/eva/arrow-ios-downward-fill/
 */
var ArrowDownIcon = function (props) { return ((0, jsx_runtime_1.jsx)(SvgIcon_1.default, __assign({}, props, { children: (0, jsx_runtime_1.jsx)("path", { fill: "currentColor", d: "M12 16a1 1 0 0 1-.64-.23l-6-5a1 1 0 1 1 1.28-1.54L12 13.71l5.36-4.32a1 1 0 0 1 1.41.15a1 1 0 0 1-.14 1.46l-6 4.83A1 1 0 0 1 12 16" }) }))); };
// ----------------------------------------------------------------------
var MuiAutocomplete = {
    /** **************************************
     * DEFAULT PROPS
     *************************************** */
    defaultProps: { popupIcon: (0, jsx_runtime_1.jsx)(ArrowDownIcon, {}) },
    /** **************************************
     * STYLE
     *************************************** */
    styleOverrides: {
        root: function (_a) {
            var _b;
            var theme = _a.theme;
            return (_b = {},
                _b["& span.".concat(Autocomplete_1.autocompleteClasses.tag)] = __assign(__assign({}, theme.typography.subtitle2), { height: 24, minWidth: 24, lineHeight: '24px', textAlign: 'center', padding: theme.spacing(0, 0.75), color: theme.vars.palette.text.secondary, borderRadius: theme.shape.borderRadius, backgroundColor: (0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0.16) }),
                _b);
        },
        paper: function (_a) {
            var theme = _a.theme;
            return (__assign({}, (0, styles_1.paper)({ theme: theme, dropdown: true })));
        },
        listbox: function (_a) {
            var _b;
            var theme = _a.theme;
            return (_b = {
                    padding: 0
                },
                _b["& .".concat(Autocomplete_1.autocompleteClasses.option)] = __assign({}, (0, styles_1.menuItem)(theme)),
                _b);
        },
        endAdornment: (_a = {}, _a["& .".concat(SvgIcon_1.svgIconClasses.root)] = { width: 18, height: 18 }, _a),
    },
};
// ----------------------------------------------------------------------
exports.autocomplete = { MuiAutocomplete: MuiAutocomplete };

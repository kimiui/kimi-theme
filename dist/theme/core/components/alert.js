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
exports.alert = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var SvgIcon_1 = __importDefault(require("@mui/material/SvgIcon"));
var Alert_1 = require("@mui/material/Alert");
var styles_1 = require("../../styles");
/**
 * Icons
 */
/* https://icon-sets.iconify.design/solar/info-circle-bold/ */
var AlertInfoIcon = function (props) { return ((0, jsx_runtime_1.jsx)(SvgIcon_1.default, __assign({}, props, { children: (0, jsx_runtime_1.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-10 5.75a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75M12 7a1 1 0 1 1 0 2a1 1 0 0 1 0-2", clipRule: "evenodd" }) }))); };
/* https://icon-sets.iconify.design/solar/check-circle-bold/ */
var AlertSuccessIcon = function (props) { return ((0, jsx_runtime_1.jsx)(SvgIcon_1.default, __assign({}, props, { children: (0, jsx_runtime_1.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-5.97-3.03a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0", clipRule: "evenodd" }) }))); };
/* https:// icon-sets.iconify.design/solar/danger-triangle-bold/ */
var AlertWarningIcon = function (props) { return ((0, jsx_runtime_1.jsx)(SvgIcon_1.default, __assign({}, props, { children: (0, jsx_runtime_1.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M5.312 10.762C8.23 5.587 9.689 3 12 3c2.31 0 3.77 2.587 6.688 7.762l.364.644c2.425 4.3 3.638 6.45 2.542 8.022S17.786 21 12.364 21h-.728c-5.422 0-8.134 0-9.23-1.572s.117-3.722 2.542-8.022zM12 7.25a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75M12 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2", clipRule: "evenodd" }) }))); };
/* https://icon-sets.iconify.design/solar/danger-bold/ */
var AlertErrorIcon = function (props) { return ((0, jsx_runtime_1.jsx)(SvgIcon_1.default, __assign({}, props, { children: (0, jsx_runtime_1.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M7.843 3.802C9.872 2.601 10.886 2 12 2c1.114 0 2.128.6 4.157 1.802l.686.406c2.029 1.202 3.043 1.803 3.6 2.792c.557.99.557 2.19.557 4.594v.812c0 2.403 0 3.605-.557 4.594c-.557.99-1.571 1.59-3.6 2.791l-.686.407C14.128 21.399 13.114 22 12 22c-1.114 0-2.128-.6-4.157-1.802l-.686-.407c-2.029-1.2-3.043-1.802-3.6-2.791C3 16.01 3 14.81 3 12.406v-.812C3 9.19 3 7.989 3.557 7c.557-.99 1.571-1.59 3.6-2.792zM13 16a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1-9.75a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75", clipRule: "evenodd" }) }))); };
// ----------------------------------------------------------------------
var COLORS = ['info', 'success', 'warning', 'error'];
function styleColors(ownerState, styles) {
    var outputStyle = COLORS.reduce(function (acc, color) {
        if (ownerState.severity === color) {
            acc = styles(color);
        }
        return acc;
    }, {});
    return outputStyle;
}
// ----------------------------------------------------------------------
var MuiAlert = {
    /** **************************************
     * DEFAULT PROPS
     *************************************** */
    defaultProps: {
        iconMapping: {
            error: (0, jsx_runtime_1.jsx)(AlertErrorIcon, {}),
            info: (0, jsx_runtime_1.jsx)(AlertInfoIcon, {}),
            success: (0, jsx_runtime_1.jsx)(AlertSuccessIcon, {}),
            warning: (0, jsx_runtime_1.jsx)(AlertWarningIcon, {}),
        },
    },
    /** **************************************
     * STYLE
     *************************************** */
    styleOverrides: {
        icon: { opacity: 1 },
        /**
         * @variant standard
         */
        standard: function (_a) {
            var ownerState = _a.ownerState, theme = _a.theme;
            var styled = {
                colors: styleColors(ownerState, function (color) {
                    var _a, _b;
                    return (_a = {
                            color: theme.vars.palette[color].darker,
                            backgroundColor: theme.vars.palette[color].lighter
                        },
                        _a[styles_1.stylesMode.dark] = {
                            color: theme.vars.palette[color].lighter,
                            backgroundColor: theme.vars.palette[color].darker,
                        },
                        _a["& .".concat(Alert_1.alertClasses.icon)] = (_b = {
                                color: theme.vars.palette[color].main
                            },
                            _b[styles_1.stylesMode.dark] = { color: theme.vars.palette[color].light },
                            _b),
                        _a);
                }),
            };
            return __assign({}, styled.colors);
        },
        /**
         * @variant filled
         */
        filled: function (_a) {
            var ownerState = _a.ownerState, theme = _a.theme;
            var styled = {
                colors: styleColors(ownerState, function (color) { return ({
                    color: theme.vars.palette[color].contrastText,
                }); }),
            };
            return __assign({}, styled.colors);
        },
        /**
         * @variant outlined
         */
        outlined: function (_a) {
            var ownerState = _a.ownerState, theme = _a.theme;
            var styled = {
                colors: styleColors(ownerState, function (color) {
                    var _a;
                    return (_a = {
                            backgroundColor: (0, styles_1.varAlpha)(theme.vars.palette[color].mainChannel, 0.08),
                            color: theme.vars.palette[color].dark,
                            border: "solid 1px ".concat((0, styles_1.varAlpha)(theme.vars.palette[color].mainChannel, 0.16))
                        },
                        _a[styles_1.stylesMode.dark] = { color: theme.vars.palette[color].light },
                        _a["& .".concat(Alert_1.alertClasses.icon)] = { color: theme.vars.palette[color].main },
                        _a);
                }),
            };
            return __assign({}, styled.colors);
        },
    },
};
// ----------------------------------------------------------------------
var MuiAlertTitle = {
    /** **************************************
     * STYLE
     *************************************** */
    styleOverrides: {
        root: function (_a) {
            var theme = _a.theme;
            return ({
                marginBottom: theme.spacing(0.5),
                fontWeight: theme.typography.fontWeightSemiBold,
            });
        },
    },
};
// ----------------------------------------------------------------------
exports.alert = { MuiAlert: MuiAlert, MuiAlertTitle: MuiAlertTitle };

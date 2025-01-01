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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeProvider = ThemeProvider;
var jsx_runtime_1 = require("react/jsx-runtime");
var CssBaseline_1 = __importDefault(require("@mui/material/CssBaseline"));
var styles_1 = require("@mui/material/styles");
var locales_1 = require("lib/locales");
var settings_1 = require("lib/components/settings");
var create_theme_1 = require("./create-theme");
var right_to_left_1 = require("./with-settings/right-to-left");
function ThemeProvider(_a) {
    var children = _a.children, themeOverrides = _a.themeOverrides, other = __rest(_a, ["children", "themeOverrides"]);
    var currentLang = (0, locales_1.useTranslate)().currentLang;
    var settings = (0, settings_1.useSettingsContext)();
    var theme = (0, create_theme_1.createTheme)({
        localeComponents: currentLang === null || currentLang === void 0 ? void 0 : currentLang.systemValue,
        settingsState: settings,
        themeOverrides: themeOverrides,
    });
    return ((0, jsx_runtime_1.jsxs)(styles_1.ThemeProvider, __assign({ disableTransitionOnChange: true, theme: theme }, other, { children: [(0, jsx_runtime_1.jsx)(CssBaseline_1.default, {}), (0, jsx_runtime_1.jsx)(right_to_left_1.Rtl, { direction: settings.direction, children: children })] })));
}

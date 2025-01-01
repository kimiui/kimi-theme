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
exports.allLangs = void 0;
// core (MUI)
var locale_1 = require("@mui/material/locale");
// date pickers (MUI)
var locales_1 = require("@mui/x-date-pickers/locales");
// data grid (MUI)
var locales_2 = require("@mui/x-data-grid/locales");
// ----------------------------------------------------------------------
exports.allLangs = [
    {
        value: 'en',
        label: 'English',
        countryCode: 'GB',
        adapterLocale: 'en',
        numberFormat: { code: 'en-US', currency: 'USD' },
        systemValue: {
            components: __assign(__assign({}, locales_1.enUS.components), locales_2.enUS.components),
        },
    },
    {
        value: 'fr',
        label: 'French',
        countryCode: 'FR',
        adapterLocale: 'fr',
        numberFormat: { code: 'fr-Fr', currency: 'EUR' },
        systemValue: {
            components: __assign(__assign(__assign({}, locale_1.frFR.components), locales_1.frFR.components), locales_2.frFR.components),
        },
    },
    {
        value: 'vi',
        label: 'Vietnamese',
        countryCode: 'VN',
        adapterLocale: 'vi',
        numberFormat: { code: 'vi-VN', currency: 'VND' },
        systemValue: {
            components: __assign(__assign(__assign({}, locale_1.viVN.components), locales_1.viVN.components), locales_2.viVN.components),
        },
    },
    {
        value: 'cn',
        label: 'Chinese',
        countryCode: 'CN',
        adapterLocale: 'zh-cn',
        numberFormat: { code: 'zh-CN', currency: 'CNY' },
        systemValue: {
            components: __assign(__assign(__assign({}, locale_1.zhCN.components), locales_1.zhCN.components), locales_2.zhCN.components),
        },
    },
    {
        value: 'ar',
        label: 'Arabic',
        countryCode: 'SA',
        adapterLocale: 'ar-sa',
        numberFormat: { code: 'ar', currency: 'AED' },
        systemValue: {
            components: __assign(__assign({}, locale_1.arSA.components), locales_2.arSD.components),
        },
    },
];

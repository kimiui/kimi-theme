'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalizationProvider = LocalizationProvider;
var jsx_runtime_1 = require("react/jsx-runtime");
require("dayjs/locale/en");
require("dayjs/locale/fr");
require("dayjs/locale/vi");
var dayjs_1 = __importDefault(require("dayjs"));
require("dayjs/locale/ar-sa");
require("dayjs/locale/zh-cn");
var AdapterDayjs_1 = require("@mui/x-date-pickers/AdapterDayjs");
var LocalizationProvider_1 = require("@mui/x-date-pickers/LocalizationProvider");
var use_locales_1 = require("./use-locales");
function LocalizationProvider(_a) {
    var children = _a.children;
    var currentLang = (0, use_locales_1.useTranslate)().currentLang;
    dayjs_1.default.locale(currentLang.adapterLocale);
    return ((0, jsx_runtime_1.jsx)(LocalizationProvider_1.LocalizationProvider, { dateAdapter: AdapterDayjs_1.AdapterDayjs, adapterLocale: currentLang.adapterLocale, children: children }));
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultSettings = exports.STORAGE_KEY = void 0;
var typography_1 = require("lib/theme/core/typography");
// ----------------------------------------------------------------------
exports.STORAGE_KEY = 'app-settings';
exports.defaultSettings = {
    colorScheme: 'dark',
    direction: 'ltr',
    contrast: 'default',
    navLayout: 'vertical',
    primaryColor: 'default',
    navColor: 'integrate',
    compactLayout: true,
    fontFamily: typography_1.defaultFont,
    fontSize: 'normal',
};

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
exports.fNumber = fNumber;
exports.fCurrency = fCurrency;
exports.fPercent = fPercent;
exports.fShortenNumber = fShortenNumber;
exports.fData = fData;
var number_format_locale_1 = require("./number-format-locale");
var DEFAULT_LOCALE = { code: 'en-US', currency: 'USD' };
function processInput(inputValue) {
    if (inputValue == null || Number.isNaN(inputValue))
        return null;
    return Number(inputValue);
}
// ----------------------------------------------------------------------
function fNumber(inputValue, options) {
    var locale = (0, number_format_locale_1.formatNumberLocale)() || DEFAULT_LOCALE;
    var number = processInput(inputValue);
    if (number === null)
        return '';
    var fm = new Intl.NumberFormat(locale.code, __assign({ minimumFractionDigits: 0, maximumFractionDigits: 2 }, options)).format(number);
    return fm;
}
// ----------------------------------------------------------------------
function fCurrency(inputValue, options) {
    var locale = (0, number_format_locale_1.formatNumberLocale)() || DEFAULT_LOCALE;
    var number = processInput(inputValue);
    if (number === null)
        return '';
    var fm = new Intl.NumberFormat(locale.code, __assign({ style: 'currency', currency: locale.currency, minimumFractionDigits: 0, maximumFractionDigits: 2 }, options)).format(number);
    return fm;
}
// ----------------------------------------------------------------------
function fPercent(inputValue, options) {
    var locale = (0, number_format_locale_1.formatNumberLocale)() || DEFAULT_LOCALE;
    var number = processInput(inputValue);
    if (number === null)
        return '';
    var fm = new Intl.NumberFormat(locale.code, __assign({ style: 'percent', minimumFractionDigits: 0, maximumFractionDigits: 1 }, options)).format(number / 100);
    return fm;
}
// ----------------------------------------------------------------------
function fShortenNumber(inputValue, options) {
    var locale = (0, number_format_locale_1.formatNumberLocale)() || DEFAULT_LOCALE;
    var number = processInput(inputValue);
    if (number === null)
        return '';
    var fm = new Intl.NumberFormat(locale.code, __assign({ notation: 'compact', maximumFractionDigits: 2 }, options)).format(number);
    return fm.replace(/[A-Z]/g, function (match) { return match.toLowerCase(); });
}
// ----------------------------------------------------------------------
function fData(inputValue) {
    var number = processInput(inputValue);
    if (number === null || number === 0)
        return '0 bytes';
    var units = ['bytes', 'Kb', 'Mb', 'Gb', 'Tb', 'Pb', 'Eb', 'Zb', 'Yb'];
    var decimal = 2;
    var baseValue = 1024;
    var index = Math.floor(Math.log(number) / Math.log(baseValue));
    var fm = "".concat(parseFloat((number / Math.pow(baseValue, index)).toFixed(decimal)), " ").concat(units[index]);
    return fm;
}

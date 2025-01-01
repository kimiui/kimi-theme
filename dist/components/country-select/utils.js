"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCountry = getCountry;
exports.displayValueByCountryCode = displayValueByCountryCode;
var data_1 = require("lib/assets/data");
// ----------------------------------------------------------------------
function getCountry(inputValue) {
    var option = data_1.countries.filter(function (country) { return country.label === inputValue || country.code === inputValue; })[0];
    return { code: option === null || option === void 0 ? void 0 : option.code, label: option === null || option === void 0 ? void 0 : option.label, phone: option === null || option === void 0 ? void 0 : option.phone };
}
// ----------------------------------------------------------------------
function displayValueByCountryCode(inputValue) {
    var option = data_1.countries.filter(function (country) { return country.code === inputValue; })[0];
    return option.label;
}

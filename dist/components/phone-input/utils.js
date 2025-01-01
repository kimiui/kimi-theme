"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCountryCode = getCountryCode;
exports.getCountry = getCountry;
exports.applyFilter = applyFilter;
var react_phone_number_input_1 = require("react-phone-number-input");
var countries_1 = require("lib/assets/data/countries");
// ----------------------------------------------------------------------
function getCountryCode(inputValue, countryCode) {
    if (inputValue) {
        var phoneNumber = (0, react_phone_number_input_1.parsePhoneNumber)(inputValue);
        if (phoneNumber) {
            return phoneNumber === null || phoneNumber === void 0 ? void 0 : phoneNumber.country;
        }
    }
    return countryCode !== null && countryCode !== void 0 ? countryCode : 'US';
}
// ----------------------------------------------------------------------
function getCountry(countryCode) {
    var option = countries_1.countries.filter(function (country) { return country.code === countryCode; })[0];
    return option;
}
function applyFilter(_a) {
    var inputData = _a.inputData, query = _a.query;
    if (query) {
        return inputData.filter(function (country) {
            return country.label.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
                country.code.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
                country.phone.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        });
    }
    return inputData;
}

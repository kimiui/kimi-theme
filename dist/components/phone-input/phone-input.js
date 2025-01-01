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
exports.PhoneInput = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var TextField_1 = __importDefault(require("@mui/material/TextField"));
var InputAdornment_1 = __importDefault(require("@mui/material/InputAdornment"));
var input_1 = __importDefault(require("react-phone-number-input/input"));
var utils_1 = require("./utils");
var list_1 = require("./list");
// ----------------------------------------------------------------------
exports.PhoneInput = (0, react_1.forwardRef)(function (_a, ref) {
    var value = _a.value, onChange = _a.onChange, placeholder = _a.placeholder, inputCountryCode = _a.country, disableSelect = _a.disableSelect, other = __rest(_a, ["value", "onChange", "placeholder", "country", "disableSelect"]);
    var defaultCountryCode = (0, utils_1.getCountryCode)(value, inputCountryCode);
    var _b = (0, react_1.useState)(defaultCountryCode), selectedCountry = _b[0], setSelectedCountry = _b[1];
    return ((0, jsx_runtime_1.jsx)(input_1.default, __assign({ ref: ref, country: selectedCountry, inputComponent: CustomInput, value: value, onChange: onChange, placeholder: placeholder !== null && placeholder !== void 0 ? placeholder : 'Enter phone number', InputProps: disableSelect
            ? undefined
            : {
                startAdornment: ((0, jsx_runtime_1.jsx)(InputAdornment_1.default, { position: "start", sx: { ml: 1 }, children: (0, jsx_runtime_1.jsx)(list_1.CountryListPopover, { countryCode: selectedCountry, onClickCountry: function (inputValue) { return setSelectedCountry(inputValue); } }) })),
            } }, other)));
});
// ----------------------------------------------------------------------
var CustomInput = (0, react_1.forwardRef)(function (_a, ref) {
    var props = __rest(_a, []);
    return ((0, jsx_runtime_1.jsx)(TextField_1.default, __assign({ inputRef: ref }, props)));
});

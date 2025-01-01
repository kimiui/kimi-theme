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
exports.CountrySelect = CountrySelect;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Chip_1 = __importDefault(require("@mui/material/Chip"));
var TextField_1 = __importDefault(require("@mui/material/TextField"));
var Autocomplete_1 = __importDefault(require("@mui/material/Autocomplete"));
var InputAdornment_1 = __importDefault(require("@mui/material/InputAdornment"));
var FilledInput_1 = require("@mui/material/FilledInput");
var data_1 = require("../../assets/data");
var iconify_1 = require("../../components/iconify");
var utils_1 = require("./utils");
function CountrySelect(_a) {
    var id = _a.id, label = _a.label, error = _a.error, multiple = _a.multiple, helperText = _a.helperText, hiddenLabel = _a.hiddenLabel, placeholder = _a.placeholder, _b = _a.getValue, getValue = _b === void 0 ? 'label' : _b, other = __rest(_a, ["id", "label", "error", "multiple", "helperText", "hiddenLabel", "placeholder", "getValue"]);
    var options = data_1.countries.map(function (country) { return (getValue === 'label' ? country.label : country.code); });
    var renderOption = function (props, option) {
        var country = (0, utils_1.getCountry)(option);
        if (!country.label) {
            return null;
        }
        return ((0, react_1.createElement)("li", __assign({}, props, { key: country.label }),
            (0, jsx_runtime_1.jsx)(iconify_1.FlagIcon, { code: country.code, sx: { mr: 1, width: 22, height: 22, borderRadius: '50%' } }, country.label),
            country.label,
            " (",
            country.code,
            ") +",
            country.phone));
    };
    var renderInput = function (params) {
        var _a, _b;
        var country = (0, utils_1.getCountry)(params.inputProps.value);
        var baseField = __assign(__assign({}, params), { label: label, placeholder: placeholder, helperText: helperText, hiddenLabel: hiddenLabel, error: !!error, inputProps: __assign(__assign({}, params.inputProps), { autoComplete: 'new-password' }) });
        if (multiple) {
            return (0, jsx_runtime_1.jsx)(TextField_1.default, __assign({}, baseField));
        }
        return ((0, jsx_runtime_1.jsx)(TextField_1.default, __assign({}, baseField, { InputProps: __assign(__assign({}, params.InputProps), { startAdornment: ((0, jsx_runtime_1.jsx)(InputAdornment_1.default, { position: "start", sx: __assign({}, (!country.code && { display: 'none' })), children: (0, jsx_runtime_1.jsx)(iconify_1.FlagIcon, { code: country.code, sx: {
                            ml: 0.5,
                            mr: -0.5,
                            width: 22,
                            height: 22,
                            borderRadius: '50%',
                        } }, country.label) })) }), sx: __assign({}, (!hiddenLabel && (_a = {},
                _a["& .".concat(FilledInput_1.filledInputClasses.root)] = (_b = {},
                    _b["& .".concat(iconify_1.iconifyClasses.root)] = { mt: -2 },
                    _b),
                _a))) })));
    };
    var renderTags = function (selected, getTagProps) {
        return selected.map(function (option, index) {
            var country = (0, utils_1.getCountry)(option);
            return ((0, react_1.createElement)(Chip_1.default, __assign({}, getTagProps({ index: index }), { key: country.label, label: country.label, size: "small", variant: "soft", icon: (0, jsx_runtime_1.jsx)(iconify_1.FlagIcon, { code: country.code, sx: { width: 16, height: 16, borderRadius: '50%' } }, country.label) })));
        });
    };
    var getOptionLabel = function (option) {
        return getValue === 'label' ? option : (0, utils_1.displayValueByCountryCode)(option);
    };
    return ((0, jsx_runtime_1.jsx)(Autocomplete_1.default, __assign({ id: "country-select-".concat(id), multiple: multiple, options: options, autoHighlight: !multiple, disableCloseOnSelect: multiple, renderOption: renderOption, renderInput: renderInput, renderTags: multiple ? renderTags : undefined, getOptionLabel: getOptionLabel }, other)));
}

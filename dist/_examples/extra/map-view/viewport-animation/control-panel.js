"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlPanel = ControlPanel;
var jsx_runtime_1 = require("react/jsx-runtime");
var Radio_1 = __importDefault(require("@mui/material/Radio"));
var RadioGroup_1 = __importDefault(require("@mui/material/RadioGroup"));
var FormControlLabel_1 = __importDefault(require("@mui/material/FormControlLabel"));
var styles_1 = require("../styles");
function ControlPanel(_a) {
    var data = _a.data, selectedCity = _a.selectedCity, onSelectCity = _a.onSelectCity;
    return ((0, jsx_runtime_1.jsx)(styles_1.StyledControlPanel, { children: data.map(function (city) { return ((0, jsx_runtime_1.jsx)(RadioGroup_1.default, { value: selectedCity, onChange: function (event) { return onSelectCity(event, city); }, children: (0, jsx_runtime_1.jsx)(FormControlLabel_1.default, { value: city.city, label: city.city, control: (0, jsx_runtime_1.jsx)(Radio_1.default, { size: "small" }), sx: { color: 'common.white' } }) }, city.city)); }) }));
}

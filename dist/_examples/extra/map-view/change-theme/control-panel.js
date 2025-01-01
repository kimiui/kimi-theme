"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlPanel = ControlPanel;
var jsx_runtime_1 = require("react/jsx-runtime");
var Radio_1 = __importDefault(require("@mui/material/Radio"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var RadioGroup_1 = __importDefault(require("@mui/material/RadioGroup"));
var FormControlLabel_1 = __importDefault(require("@mui/material/FormControlLabel"));
var styles_1 = require("../styles");
function ControlPanel(_a) {
    var themes = _a.themes, selectTheme = _a.selectTheme, onChangeTheme = _a.onChangeTheme;
    return ((0, jsx_runtime_1.jsxs)(styles_1.StyledControlPanel, { children: [(0, jsx_runtime_1.jsx)(Typography_1.default, { gutterBottom: true, variant: "subtitle2", sx: { color: 'common.white' }, children: "Select theme:" }), (0, jsx_runtime_1.jsx)(RadioGroup_1.default, { value: selectTheme, onChange: function (event, newValue) { return onChangeTheme(newValue); }, children: Object.keys(themes).map(function (item) { return ((0, jsx_runtime_1.jsx)(FormControlLabel_1.default, { value: item, control: (0, jsx_runtime_1.jsx)(Radio_1.default, { size: "small" }), label: item, sx: { color: 'common.white', textTransform: 'capitalize' } }, item)); }) })] }));
}

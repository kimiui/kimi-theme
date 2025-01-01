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
exports.ControlPanel = ControlPanel;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Radio_1 = __importDefault(require("@mui/material/Radio"));
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var RadioGroup_1 = __importDefault(require("@mui/material/RadioGroup"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var FormControlLabel_1 = __importDefault(require("@mui/material/FormControlLabel"));
function ControlPanel(_a) {
    var variantKey = _a.variantKey, selectVariant = _a.selectVariant, onChangeVariant = _a.onChangeVariant, sx = _a.sx, other = __rest(_a, ["variantKey", "selectVariant", "onChangeVariant", "sx"]);
    return ((0, jsx_runtime_1.jsx)(Stack_1.default, __assign({ sx: __assign({ p: 2.5, width: 320, overflowX: 'auto', borderLeft: function (theme) { return "solid 1px ".concat(theme.vars.palette.divider); } }, sx) }, other, { children: (0, jsx_runtime_1.jsx)(RadioGroup_1.default, { value: selectVariant, onChange: onChangeVariant, children: variantKey.map(function (variant) { return ((0, jsx_runtime_1.jsxs)(Box_1.default, { sx: { my: 1.5 }, children: [(0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "overline", sx: { px: 1, mb: 1, display: 'block' }, children: variant.type }), variant.values.map(function (value) { return ((0, jsx_runtime_1.jsx)(FormControlLabel_1.default, { value: value, label: value, control: (0, jsx_runtime_1.jsx)(Radio_1.default, { sx: { display: 'none' } }), sx: __assign(__assign({ px: 1, py: 0.5, mx: 0, my: 0.25, width: '100%', borderRadius: 0.75, color: 'text.secondary' }, (selectVariant === value && { color: 'warning.contrastText' })), (selectVariant === value && { bgcolor: 'warning.main' })) }, value)); })] }, variant.type)); }) }) })));
}

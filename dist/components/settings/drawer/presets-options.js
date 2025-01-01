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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PresetsOptions = PresetsOptions;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var ButtonBase_1 = __importDefault(require("@mui/material/ButtonBase"));
var styles_1 = require("@mui/material/styles");
var styles_2 = require("./styles");
var svg_color_1 = require("../../svg-color");
function PresetsOptions(_a) {
    var value = _a.value, options = _a.options, onClickOption = _a.onClickOption;
    return ((0, jsx_runtime_1.jsx)(styles_2.Block, { title: "Presets", children: (0, jsx_runtime_1.jsx)(Box_1.default, { component: "ul", gap: 1.5, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", children: options.map(function (option) {
                var selected = value === option.name;
                return ((0, jsx_runtime_1.jsx)(Box_1.default, { component: "li", sx: { display: 'flex' }, children: (0, jsx_runtime_1.jsx)(ButtonBase_1.default, { onClick: function () { return onClickOption(option.name); }, sx: __assign({ width: 1, height: 64, borderRadius: 1.5, color: option.value }, (selected && {
                            bgcolor: (0, styles_1.alpha)(option.value, 0.08),
                        })), children: (0, jsx_runtime_1.jsx)(svg_color_1.SvgColor, { src: "/assets/icons/setting/ic-siderbar-duotone.svg", sx: { width: 28, height: 28, color: 'currentColor' } }) }) }, option.name));
            }) }) }));
}

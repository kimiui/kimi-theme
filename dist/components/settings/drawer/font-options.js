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
exports.FontOptions = FontOptions;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var ButtonBase_1 = __importDefault(require("@mui/material/ButtonBase"));
var styles_1 = require("lib/theme/styles");
var styles_2 = require("./styles");
var svg_color_1 = require("../../svg-color");
function FontOptions(_a) {
    var value = _a.value, options = _a.options, onClickOption = _a.onClickOption;
    return ((0, jsx_runtime_1.jsx)(styles_2.Block, { title: "Font", children: (0, jsx_runtime_1.jsx)(Box_1.default, { component: "ul", gap: 1.5, display: "grid", gridTemplateColumns: "repeat(2, 1fr)", children: options.map(function (option) {
                var _a;
                var selected = value === option;
                return ((0, jsx_runtime_1.jsx)(Box_1.default, { component: "li", sx: { display: 'inline-flex' }, children: (0, jsx_runtime_1.jsxs)(ButtonBase_1.default, { disableRipple: true, onClick: function () { return onClickOption(option); }, sx: __assign({ py: 2, width: 1, gap: 0.75, borderWidth: 1, borderRadius: 1.5, borderStyle: 'solid', display: 'inline-flex', flexDirection: 'column', borderColor: 'transparent', fontFamily: (0, styles_1.setFont)(option), fontWeight: 'fontWeightMedium', fontSize: function (theme) { return theme.typography.pxToRem(12); }, color: function (theme) { return theme.vars.palette.text.disabled; } }, (selected && (_a = {
                                color: function (theme) { return theme.vars.palette.text.primary; },
                                borderColor: function (theme) { return (0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0.08); },
                                boxShadow: function (theme) {
                                    return "-8px 8px 20px -4px ".concat((0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0.12));
                                }
                            },
                            _a[styles_1.stylesMode.dark] = {
                                boxShadow: function (theme) {
                                    return "-8px 8px 20px -4px ".concat((0, styles_1.varAlpha)(theme.vars.palette.common.blackChannel, 0.12));
                                },
                            },
                            _a))), children: [(0, jsx_runtime_1.jsx)(svg_color_1.SvgColor, { src: "/assets/icons/setting/ic-font.svg", sx: __assign({ width: 28, height: 28, color: 'currentColor' }, (selected && {
                                    background: function (theme) {
                                        return "linear-gradient(135deg, ".concat(theme.vars.palette.primary.light, ", ").concat(theme.vars.palette.primary.main, ")");
                                    },
                                })) }), option] }) }, option));
            }) }) }));
}

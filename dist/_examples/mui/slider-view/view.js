'use client';
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SliderView = SliderView;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var Slider_1 = __importStar(require("@mui/material/Slider"));
var paths_1 = require("lib/routes/paths");
var styles_1 = require("lib/theme/styles");
var iconify_1 = require("lib/components/iconify");
var custom_breadcrumbs_1 = require("lib/components/custom-breadcrumbs");
var component_hero_1 = require("../../component-hero");
var component_block_1 = require("../../component-block");
var component_template_1 = require("../../component-template");
// ----------------------------------------------------------------------
var COLORS = ['inherit', 'primary', 'secondary', 'error', 'info', 'success', 'warning'];
var marks = [
    { value: 0, label: '0°C' },
    { value: 20, label: '20°C' },
    { value: 37, label: '37°C' },
    { value: 100, label: '100°C' },
];
var prices = [
    { value: 0, label: '$0' },
    { value: 25, label: '250' },
    { value: 50, label: '500' },
    { value: 75, label: '750' },
    { value: 100, label: '1000' },
];
// ----------------------------------------------------------------------
function valuePrice(value) {
    return value > 0 ? "$".concat(value, "0") : "".concat(value);
}
function valueLabelFormatPrice(value) {
    return value > 0 ? "$".concat(value) : value;
}
function valuetext(value) {
    return "$".concat(value, "\u00B0C");
}
function valueLabelFormat(value) {
    return marks.findIndex(function (mark) { return mark.value === value; }) + 1;
}
// ----------------------------------------------------------------------
function SliderView() {
    var _a, _b, _c, _d, _e, _f;
    var _g = (0, react_1.useState)(30), value = _g[0], setValue = _g[1];
    var _h = (0, react_1.useState)([20, 37]), price = _h[0], setPrice = _h[1];
    var handleChange = function (event, newValue) {
        setValue(newValue);
    };
    var handleChangePrice = function (event, newValue) {
        setPrice(newValue);
    };
    var DEMO = [
        {
            name: 'Volume',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { children: (0, jsx_runtime_1.jsxs)(Stack_1.default, { direction: "row", alignItems: "center", spacing: 1, width: 1, children: [(0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "eva:volume-mute-fill", width: 24 }), (0, jsx_runtime_1.jsx)(Slider_1.default, { value: value, onChange: handleChange, "aria-labelledby": "continuous-slider" }), (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "eva:volume-up-fill", width: 24 })] }) })),
        },
        {
            name: 'Disabled',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { children: (0, jsx_runtime_1.jsx)(Slider_1.default, { disabled: true, defaultValue: 30 }) })),
        },
        {
            name: 'Temperature',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { children: (0, jsx_runtime_1.jsx)(Slider_1.default, { defaultValue: 30, getAriaValueText: valuetext, valueLabelDisplay: "auto", step: 10, marks: true, min: 10, max: 110, sx: (_a = {},
                        _a["& .".concat(Slider_1.sliderClasses.mark, "[data-index=\"10\"]")] = {
                            display: 'none',
                        },
                        _a) }) })),
        },
        {
            name: 'Sizes',
            component: ((0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { children: [(0, jsx_runtime_1.jsx)(Slider_1.default, { size: "medium", marks: true, min: 10, step: 10, max: 110, defaultValue: 30, valueLabelDisplay: "auto", getAriaValueText: valuetext, sx: (_b = {},
                            _b["& .".concat(Slider_1.sliderClasses.mark, "[data-index=\"10\"]")] = {
                                display: 'none',
                            },
                            _b) }), (0, jsx_runtime_1.jsx)(Slider_1.default, { size: "small", marks: true, min: 10, step: 10, max: 110, defaultValue: 30, valueLabelDisplay: "auto", getAriaValueText: valuetext, sx: (_c = {},
                            _c["& .".concat(Slider_1.sliderClasses.mark, "[data-index=\"10\"]")] = {
                                display: 'none',
                            },
                            _c) })] })),
        },
        {
            name: 'Small steps',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { children: (0, jsx_runtime_1.jsx)(Slider_1.default, { defaultValue: 0.00000005, getAriaValueText: valuetext, step: 0.00000001, marks: true, min: -0.00000005, max: 0.0000001, valueLabelDisplay: "auto" }) })),
        },
        {
            name: 'Custom marks',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { children: (0, jsx_runtime_1.jsx)(Slider_1.default, { defaultValue: 20, getAriaValueText: valuetext, step: 10, valueLabelDisplay: "auto", marks: marks, sx: (_d = {},
                        _d["& .".concat(Slider_1.sliderClasses.mark, "[data-index=\"3\"]")] = { display: 'none' },
                        _d) }) })),
        },
        {
            name: 'Restricted values',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { children: (0, jsx_runtime_1.jsx)(Slider_1.default, { defaultValue: 20, valueLabelFormat: valueLabelFormat, getAriaValueText: valuetext, step: null, valueLabelDisplay: "auto", marks: marks, sx: (_e = {},
                        _e["& .".concat(Slider_1.sliderClasses.mark, "[data-index=\"3\"]")] = { display: 'none' },
                        _e) }) })),
        },
        {
            name: 'Range',
            component: ((0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { sx: { gap: 8, flexDirection: 'column' }, children: [(0, jsx_runtime_1.jsx)(Slider_1.default, { scale: function (x) { return x * 10; }, step: 10, marks: prices, value: price, onChange: handleChangePrice, valueLabelDisplay: "on", getAriaValueText: valuePrice, valueLabelFormat: valueLabelFormatPrice, sx: (_f = {},
                            _f["& .".concat(Slider_1.sliderClasses.mark, "[data-index=\"4\"]")] = { display: 'none' },
                            _f) }), (0, jsx_runtime_1.jsxs)(Stack_1.default, { spacing: 5, direction: "row", sx: {
                            p: 2,
                            borderRadius: 1,
                            typography: 'subtitle2',
                            bgcolor: function (theme) { return (0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0.12); },
                        }, children: [(0, jsx_runtime_1.jsxs)(Box_1.default, { component: "span", children: ["Min: ", valuePrice(price[0])] }), (0, jsx_runtime_1.jsxs)(Box_1.default, { component: "span", children: ["Max: ", valuePrice(price[1])] })] })] })),
        },
        {
            name: 'Color',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { sx: { flexDirection: 'column' }, children: COLORS.map(function (color) {
                    var _a;
                    return ((0, jsx_runtime_1.jsx)(Slider_1.default, { color: color, marks: true, min: 10, step: 10, max: 110, defaultValue: 30, valueLabelDisplay: "auto", getAriaValueText: valuetext, sx: (_a = {},
                            _a["& .".concat(Slider_1.sliderClasses.mark, "[data-index=\"10\"]")] = {
                                display: 'none',
                            },
                            _a) }, color));
                }) })),
        },
    ];
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(component_hero_1.ComponentHero, { children: (0, jsx_runtime_1.jsx)(custom_breadcrumbs_1.CustomBreadcrumbs, { heading: "Slider", links: [{ name: 'Components', href: paths_1.paths.docs.components.root }, { name: 'Slider' }], moreLink: ['https://mui.com/components/slider'] }) }), (0, jsx_runtime_1.jsx)(component_template_1.ScrollToViewTemplate, { data: DEMO })] }));
}

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
exports.RatingView = RatingView;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Rating_1 = __importDefault(require("@mui/material/Rating"));
var paths_1 = require("../../../routes/paths");
var iconify_1 = require("../../../components/iconify");
var custom_breadcrumbs_1 = require("../../../components/custom-breadcrumbs");
var component_hero_1 = require("../../component-hero");
var component_block_1 = require("../../component-block");
var component_template_1 = require("../../component-template");
// ----------------------------------------------------------------------
var labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};
var customIcons = {
    1: {
        icon: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "ic:round-sentiment-very-dissatisfied" }),
        label: 'Very Dissatisfied',
    },
    2: {
        icon: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "ic:round-sentiment-dissatisfied" }),
        label: 'Dissatisfied',
    },
    3: { icon: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "ic:round-sentiment-neutral" }), label: 'Neutral' },
    4: {
        icon: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "ic:round-sentiment-satisfied" }),
        label: 'Satisfied',
    },
    5: {
        icon: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "ic:round-sentiment-very-satisfied" }),
        label: 'Very Satisfied',
    },
};
// ----------------------------------------------------------------------
function RatingView() {
    var _a = (0, react_1.useState)(2), value = _a[0], setValue = _a[1];
    var _b = (0, react_1.useState)(-1), hover = _b[0], setHover = _b[1];
    var DEMO = [
        {
            name: 'Controlled',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { children: (0, jsx_runtime_1.jsx)(Rating_1.default, { name: "simple-controlled", value: value, onChange: function (event, newValue) {
                        setValue(newValue);
                    } }) })),
        },
        {
            name: 'Read only',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { children: (0, jsx_runtime_1.jsx)(Rating_1.default, { name: "read-only", value: value, readOnly: true }) })),
        },
        {
            name: 'Disabled',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { children: (0, jsx_runtime_1.jsx)(Rating_1.default, { name: "disabled", value: value, disabled: true }) })),
        },
        {
            name: 'Pristine',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { children: (0, jsx_runtime_1.jsx)(Rating_1.default, { name: "pristine", value: null }) })),
        },
        {
            name: 'Custom empty icon',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { children: (0, jsx_runtime_1.jsx)(Rating_1.default, { name: "customized-empty", defaultValue: 2, precision: 0.5 }) })),
        },
        {
            name: 'Custom icon and color',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { children: (0, jsx_runtime_1.jsx)(Rating_1.default, { name: "customized-color", defaultValue: 2, getLabelText: function (ratingValue) { return "".concat(ratingValue, " Heart").concat(ratingValue !== 1 ? 's' : ''); }, precision: 0.5, icon: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "solar:heart-bold" }), emptyIcon: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "solar:heart-bold" }), sx: { color: 'info.main', '&:hover': { color: 'info.dark' } } }) })),
        },
        {
            name: '10 stars',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { children: (0, jsx_runtime_1.jsx)(Rating_1.default, { name: "customized-10", defaultValue: 2, max: 10 }) })),
        },
        {
            name: 'Custom icon set',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { children: (0, jsx_runtime_1.jsx)(Rating_1.default, { name: "customized-icons", defaultValue: 2, getLabelText: function (ratingValue) { return customIcons[ratingValue].label; }, IconContainerComponent: IconContainer }) })),
        },
        {
            name: 'Hover feedback',
            component: ((0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { children: [(0, jsx_runtime_1.jsx)(Rating_1.default, { name: "hover-feedback", value: value, precision: 0.5, onChange: function (event, newValue) {
                            setValue(newValue);
                        }, onChangeActive: function (event, newHover) {
                            setHover(newHover);
                        } }), value !== null && (0, jsx_runtime_1.jsx)(Box_1.default, { sx: { ml: 2 }, children: labels[hover !== -1 ? hover : value] })] })),
        },
        {
            name: 'Half ratings',
            component: ((0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { children: [(0, jsx_runtime_1.jsx)(Rating_1.default, { name: "half-rating", defaultValue: 2.5, precision: 0.5 }), (0, jsx_runtime_1.jsx)(Rating_1.default, { name: "half-rating-read", defaultValue: 2.5, precision: 0.5, readOnly: true })] })),
        },
        {
            name: 'Sizes',
            component: ((0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { children: [(0, jsx_runtime_1.jsx)(Rating_1.default, { name: "size-small", defaultValue: 2, size: "small" }), (0, jsx_runtime_1.jsx)(Rating_1.default, { name: "size-medium", defaultValue: 2 }), (0, jsx_runtime_1.jsx)(Rating_1.default, { name: "size-large", defaultValue: 2, size: "large" })] })),
        },
    ];
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(component_hero_1.ComponentHero, { children: (0, jsx_runtime_1.jsx)(custom_breadcrumbs_1.CustomBreadcrumbs, { heading: "Rating", links: [{ name: 'Components', href: paths_1.paths.docs.components.root }, { name: 'Rating' }], moreLink: ['https://mui.com/components/rating'] }) }), (0, jsx_runtime_1.jsx)(component_template_1.ScrollToViewTemplate, { data: DEMO })] }));
}
// ----------------------------------------------------------------------
function IconContainer(props) {
    var value = props.value, other = __rest(props, ["value"]);
    return (0, jsx_runtime_1.jsx)("span", __assign({}, other, { children: customIcons[value].icon }));
}

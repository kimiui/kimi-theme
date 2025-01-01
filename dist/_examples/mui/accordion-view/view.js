'use client';
"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccordionView = AccordionView;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Accordion_1 = __importDefault(require("@mui/material/Accordion"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var AccordionSummary_1 = __importDefault(require("@mui/material/AccordionSummary"));
var AccordionDetails_1 = __importDefault(require("@mui/material/AccordionDetails"));
var _mock_1 = require("../../../_mock");
var paths_1 = require("../../../routes/paths");
var iconify_1 = require("../../../components/iconify");
var custom_breadcrumbs_1 = require("../../../components/custom-breadcrumbs");
var component_hero_1 = require("../../component-hero");
var component_block_1 = require("../../component-block");
var component_template_1 = require("../../component-template");
// ----------------------------------------------------------------------
var _accordions = __spreadArray([], Array(4), true).map(function (_, index) { return ({
    id: _mock_1._mock.id(index),
    value: "panel".concat(index + 1),
    heading: "Accordion ".concat(index + 1),
    subHeading: _mock_1._mock.postTitle(index),
    detail: _mock_1._mock.description(index),
}); });
// ----------------------------------------------------------------------
function AccordionView() {
    var _a = (0, react_1.useState)(false), controlled = _a[0], setControlled = _a[1];
    var handleChangeControlled = function (panel) { return function (event, isExpanded) {
        setControlled(isExpanded ? panel : false);
    }; };
    var DEMO = [
        {
            name: 'Simple',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { children: (0, jsx_runtime_1.jsx)("div", { children: _accordions.map(function (accordion, index) { return ((0, jsx_runtime_1.jsxs)(Accordion_1.default, { disabled: index === 3, children: [(0, jsx_runtime_1.jsx)(AccordionSummary_1.default, { expandIcon: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "eva:arrow-ios-downward-fill" }), children: (0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "subtitle1", children: accordion.heading }) }), (0, jsx_runtime_1.jsx)(AccordionDetails_1.default, { children: (0, jsx_runtime_1.jsx)(Typography_1.default, { children: accordion.detail }) })] }, accordion.value)); }) }) })),
        },
        {
            name: 'Controlled',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { children: (0, jsx_runtime_1.jsx)("div", { children: _accordions.map(function (item, index) { return ((0, jsx_runtime_1.jsxs)(Accordion_1.default, { disabled: index === 3, expanded: controlled === item.value, onChange: handleChangeControlled(item.value), children: [(0, jsx_runtime_1.jsxs)(AccordionSummary_1.default, { expandIcon: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "eva:arrow-ios-downward-fill" }), children: [(0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "subtitle1", sx: { width: '33%', flexShrink: 0 }, children: item.heading }), (0, jsx_runtime_1.jsx)(Typography_1.default, { sx: { color: 'text.secondary' }, children: item.subHeading })] }), (0, jsx_runtime_1.jsx)(AccordionDetails_1.default, { children: (0, jsx_runtime_1.jsx)(Typography_1.default, { children: item.detail }) })] }, item.value)); }) }) })),
        },
    ];
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(component_hero_1.ComponentHero, { children: (0, jsx_runtime_1.jsx)(custom_breadcrumbs_1.CustomBreadcrumbs, { heading: "Accordion", links: [{ name: 'Components', href: paths_1.paths.docs.components.root }, { name: 'Accordion' }], moreLink: ['https://mui.com/components/accordion'] }) }), (0, jsx_runtime_1.jsx)(component_template_1.ScrollToViewTemplate, { data: DEMO })] }));
}

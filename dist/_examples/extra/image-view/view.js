'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageView = ImageView;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var _mock_1 = require("lib/_mock");
var paths_1 = require("lib/routes/paths");
var image_1 = require("lib/components/image");
var custom_breadcrumbs_1 = require("lib/components/custom-breadcrumbs");
var component_hero_1 = require("../../component-hero");
var component_template_1 = require("../../component-template");
// ----------------------------------------------------------------------
var RATIO = ['4/3', '3/4', '6/4', '4/6', '16/9', '9/16', '21/9', '9/21', '1/1'];
var IMAGES = RATIO.map(function (ratio, index) { return ({
    ratio: ratio,
    url: _mock_1._mock.image.cover(index + 1),
}); });
// ----------------------------------------------------------------------
function ImageView() {
    var DEMO = [
        {
            name: 'List',
            component: ((0, jsx_runtime_1.jsx)(Box_1.default, { gap: 2, display: "grid", gridTemplateColumns: {
                    xs: 'repeat(2, 1fr)',
                    sm: 'repeat(3, 1fr)',
                    md: 'repeat(4, 1fr)',
                }, children: IMAGES.map(function (img) { return ((0, jsx_runtime_1.jsx)(image_1.Image, { alt: img.ratio, src: img.url, ratio: "3/2", sx: { borderRadius: 2 } }, img.ratio)); }) })),
        },
        {
            name: 'Aspect ratio',
            component: ((0, jsx_runtime_1.jsx)(Box_1.default, { gap: 2, display: "grid", gridTemplateColumns: {
                    xs: 'repeat(2, 1fr)',
                    sm: 'repeat(3, 1fr)',
                    md: 'repeat(4, 1fr)',
                }, children: IMAGES.map(function (img) { return ((0, jsx_runtime_1.jsxs)(Stack_1.default, { spacing: 1, children: [(0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "overline", sx: { color: 'text.secondary' }, children: img.ratio }), (0, jsx_runtime_1.jsx)(image_1.Image, { alt: img.ratio, src: img.url, ratio: img.ratio, sx: { borderRadius: 2 } })] }, img.ratio)); }) })),
        },
    ];
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(component_hero_1.ComponentHero, { children: (0, jsx_runtime_1.jsx)(custom_breadcrumbs_1.CustomBreadcrumbs, { heading: "Image", links: [{ name: 'Components', href: paths_1.paths.docs.components.root }, { name: 'Image' }] }) }), (0, jsx_runtime_1.jsx)(component_template_1.ScrollToViewTemplate, { data: DEMO })] }));
}

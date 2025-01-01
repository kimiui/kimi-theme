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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarouselView = CarouselView;
var jsx_runtime_1 = require("react/jsx-runtime");
var _mock_1 = require("../../../_mock");
var paths_1 = require("../../../routes/paths");
var custom_breadcrumbs_1 = require("../../../components/custom-breadcrumbs");
var carousel_yaxis_1 = require("./carousel-yaxis");
var carousel_align_1 = require("./carousel-align");
var carousel_scale_1 = require("./carousel-scale");
var component_hero_1 = require("../../component-hero");
var carousel_opacity_1 = require("./carousel-opacity");
var carousel_customs_1 = require("./carousel-customs");
var carousel_thumbs_x_1 = require("./carousel-thumbs-x");
var carousel_thumbs_y_1 = require("./carousel-thumbs-y");
var carousel_autoplay_1 = require("./carousel-autoplay");
var carousel_progress_1 = require("./carousel-progress");
var carousel_parallax_1 = require("./carousel-parallax");
var carousel_animation_1 = require("./carousel-animation");
var carousel_auto_scroll_1 = require("./carousel-auto-scroll");
var carousel_dots_number_1 = require("./carousel-dots-number");
var carousel_auto_height_1 = require("./carousel-auto-height");
var carousel_right_to_left_1 = require("./carousel-right-to-left");
var component_template_1 = require("../../component-template");
var carousel_variable_widths_1 = require("./carousel-variable-widths");
// ----------------------------------------------------------------------
var SLIDES = __spreadArray([], Array(8), true).map(function (_, index) { return ({
    id: _mock_1._mock.id(index),
    title: _mock_1._mock.postTitle(index),
    coverUrl: _mock_1._mock.image.cover(index),
    description: _mock_1._mock.description(index),
}); });
var DEMO = [
    { name: 'Align', component: (0, jsx_runtime_1.jsx)(carousel_align_1.CarouselAlign, { data: SLIDES.slice(0, 4) }) },
    {
        name: 'Progress',
        component: (0, jsx_runtime_1.jsx)(carousel_progress_1.CarouselProgress, { data: SLIDES.slice(0, 4) }),
    },
    { name: 'Opacity', component: (0, jsx_runtime_1.jsx)(carousel_opacity_1.CarouselOpacity, { data: SLIDES.slice(0, 6) }) },
    { name: 'Scale', component: (0, jsx_runtime_1.jsx)(carousel_scale_1.CarouselScale, { data: SLIDES.slice(0, 4) }) },
    {
        name: 'Parallax',
        component: (0, jsx_runtime_1.jsx)(carousel_parallax_1.CarouselParallax, { data: SLIDES.slice(0, 6) }),
    },
    {
        name: 'Right-to-left',
        component: (0, jsx_runtime_1.jsx)(carousel_right_to_left_1.CarouselRightToLeft, { data: SLIDES.slice(0, 4) }),
    },
    {
        name: 'Autoplay',
        component: (0, jsx_runtime_1.jsx)(carousel_autoplay_1.CarouselAutoplay, { data: SLIDES.slice(0, 4) }),
    },
    {
        name: 'Auto Scroll',
        component: (0, jsx_runtime_1.jsx)(carousel_auto_scroll_1.CarouselAutoScroll, { data: SLIDES.slice(0, 4) }),
    },
    {
        name: 'Thumbs-x',
        component: (0, jsx_runtime_1.jsx)(carousel_thumbs_x_1.CarouselThumbsX, { data: SLIDES.slice(0, 8) }),
    },
    {
        name: 'Thumbs-y',
        component: (0, jsx_runtime_1.jsx)(carousel_thumbs_y_1.CarouselThumbsY, { data: SLIDES.slice(0, 8) }),
    },
    {
        name: 'Variable widths',
        component: (0, jsx_runtime_1.jsx)(carousel_variable_widths_1.CarouselVariableWidths, { data: SLIDES.slice(0, 4) }),
    },
    {
        name: 'Auto height',
        component: (0, jsx_runtime_1.jsx)(carousel_auto_height_1.CarouselAutoHeight, { data: SLIDES.slice(0, 4) }),
    },
    { name: 'Y-axis', component: (0, jsx_runtime_1.jsx)(carousel_yaxis_1.CarouselYaxis, { data: SLIDES.slice(0, 4) }) },
    {
        name: 'Dots number',
        component: (0, jsx_runtime_1.jsx)(carousel_dots_number_1.CarouselDotsNumber, { data: SLIDES.slice(0, 8) }),
    },
    {
        name: 'Animation',
        component: (0, jsx_runtime_1.jsx)(carousel_animation_1.CarouselAnimation, { data: SLIDES.slice(0, 4) }),
    },
    { name: 'Customs', component: (0, jsx_runtime_1.jsx)(carousel_customs_1.CarouselCustoms, { data: SLIDES.slice(0, 6) }) },
];
// ----------------------------------------------------------------------
function CarouselView() {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(component_hero_1.ComponentHero, { children: (0, jsx_runtime_1.jsx)(custom_breadcrumbs_1.CustomBreadcrumbs, { heading: "Carousel", links: [{ name: 'Components', href: paths_1.paths.docs.components.root }, { name: 'Carousel' }], moreLink: ['https://www.embla-carousel.com/'] }) }), (0, jsx_runtime_1.jsx)(component_template_1.ScrollToViewTemplate, { data: DEMO })] }));
}

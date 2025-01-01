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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarouselAnimation = CarouselAnimation;
var jsx_runtime_1 = require("react/jsx-runtime");
var framer_motion_1 = require("framer-motion");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Button_1 = __importDefault(require("@mui/material/Button"));
var styles_1 = require("@mui/material/styles");
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var image_1 = require("../../../components/image");
var styles_2 = require("../../../theme/styles");
var animate_1 = require("../../../components/animate");
var carousel_1 = require("../../../components/carousel");
var elements_1 = require("./elements");
function CarouselAnimation(_a) {
    var data = _a.data;
    var carousel = (0, carousel_1.useCarousel)();
    return ((0, jsx_runtime_1.jsxs)(Box_1.default, { sx: { position: 'relative' }, children: [(0, jsx_runtime_1.jsx)(carousel_1.Carousel, { carousel: carousel, sx: { borderRadius: 2 }, children: data.map(function (item, index) { return ((0, jsx_runtime_1.jsx)(CarouselItem, { index: index, item: item, selected: index === carousel.dots.selectedIndex }, item.id)); }) }), (0, jsx_runtime_1.jsx)(carousel_1.CarouselArrowNumberButtons, __assign({}, carousel.arrows, { options: carousel.options, totalSlides: carousel.dots.dotCount, selectedIndex: carousel.dots.selectedIndex + 1, sx: { top: 16, right: 16, position: 'absolute' } }))] }));
}
function CarouselItem(_a) {
    var item = _a.item, index = _a.index, selected = _a.selected;
    var theme = (0, styles_1.useTheme)();
    return ((0, jsx_runtime_1.jsxs)(Box_1.default, { sx: { position: 'relative' }, children: [(0, jsx_runtime_1.jsx)(elements_1.IndexLabel, { index: index + 1 }), (0, jsx_runtime_1.jsx)(image_1.Image, { visibleByDefault: true, alt: item.title, src: item.coverUrl, ratio: { xs: '4/3', sm: '16/10' } }), (0, jsx_runtime_1.jsx)(Box_1.default, { sx: __assign(__assign({}, (0, styles_2.bgGradient)({
                    color: "to top, ".concat(theme.vars.palette.grey[900], ", ").concat((0, styles_2.varAlpha)(theme.vars.palette.grey['900Channel'], 0)),
                })), { top: 0, width: 1, height: 1, position: 'absolute' }) }), (0, jsx_runtime_1.jsxs)(Box_1.default, { component: animate_1.MotionContainer, animate: selected, action: true, sx: {
                    p: 3,
                    left: 0,
                    width: 1,
                    bottom: 0,
                    position: 'absolute',
                    color: 'common.white',
                }, children: [(0, jsx_runtime_1.jsx)(framer_motion_1.m.div, { variants: (0, animate_1.varFade)().inRight, children: (0, jsx_runtime_1.jsx)(Typography_1.default, { noWrap: true, sx: {
                                mb: 1,
                                typography: { xs: 'subtitle1', md: 'h3' },
                            }, children: item.title }) }), (0, jsx_runtime_1.jsx)(framer_motion_1.m.div, { variants: (0, animate_1.varFade)().inRight, children: (0, jsx_runtime_1.jsx)(Typography_1.default, { noWrap: true, variant: "body2", children: item.description }) }), (0, jsx_runtime_1.jsx)(framer_motion_1.m.div, { variants: (0, animate_1.varFade)().inRight, children: (0, jsx_runtime_1.jsx)(Button_1.default, { color: "primary", variant: "contained", sx: { mt: 3, display: { xs: 'none', sm: 'inline-flex' } }, children: "View More" }) })] })] }));
}

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
exports.CarouselCustoms = CarouselCustoms;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var image_1 = require("lib/components/image");
var carousel_1 = require("lib/components/carousel");
var elements_1 = require("./elements");
function CarouselCustoms(_a) {
    var data = _a.data;
    var carousel = (0, carousel_1.useCarousel)({
        align: 'start',
        slideSpacing: '20px',
        slidesToShow: { xs: 1, sm: 2 },
    });
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(Box_1.default, { sx: { position: 'relative' }, children: [(0, jsx_runtime_1.jsx)(carousel_1.Carousel, { carousel: carousel, sx: { maxWidth: 640 }, children: data.map(function (item, index) { return ((0, jsx_runtime_1.jsx)(CarouselItem, { index: index, item: item }, item.id)); }) }), (0, jsx_runtime_1.jsx)(carousel_1.CarouselArrowFloatButtons, __assign({}, carousel.arrows, { options: carousel.options, slotProps: {
                            prevBtn: {
                                sx: { bgcolor: 'primary.main', color: 'primary.contrastText' },
                                svgIcon: ((0, jsx_runtime_1.jsx)("path", { fill: "currentColor", d: "M20 11.25a.75.75 0 0 1 0 1.5h-9.25V18a.75.75 0 0 1-1.28.53l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.28.53v5.25z" })),
                            },
                            nextBtn: {
                                sx: { bgcolor: 'primary.main', color: 'primary.contrastText' },
                                svgIcon: ((0, jsx_runtime_1.jsx)("path", { fill: "currentColor", d: "M4 11.25a.75.75 0 0 0 0 1.5h9.25V18a.75.75 0 0 0 1.28.53l6-6a.75.75 0 0 0 0-1.06l-6-6a.75.75 0 0 0-1.28.53v5.25z" })),
                            },
                        } }))] }), (0, jsx_runtime_1.jsxs)(Box_1.default, { gap: 3, display: "flex", alignItems: "center", flexDirection: "column", sx: {
                    p: 5,
                    mt: 5,
                    borderRadius: 2,
                    bgcolor: 'background.neutral',
                }, children: [(0, jsx_runtime_1.jsx)(carousel_1.CarouselArrowBasicButtons, __assign({}, carousel.arrows, { options: carousel.options, sx: { color: 'secondary.main' } })), (0, jsx_runtime_1.jsx)(carousel_1.CarouselArrowNumberButtons, __assign({}, carousel.arrows, { options: carousel.options, totalSlides: carousel.dots.dotCount, selectedIndex: carousel.dots.selectedIndex + 1, slotProps: {
                            prevBtn: {
                                svgIcon: ((0, jsx_runtime_1.jsx)("path", { fill: "currentColor", d: "M20 11.25a.75.75 0 0 1 0 1.5h-9.25V18a.75.75 0 0 1-1.28.53l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.28.53v5.25z" })),
                            },
                            nextBtn: {
                                svgIcon: ((0, jsx_runtime_1.jsx)("path", { fill: "currentColor", d: "M4 11.25a.75.75 0 0 0 0 1.5h9.25V18a.75.75 0 0 0 1.28.53l6-6a.75.75 0 0 0 0-1.06l-6-6a.75.75 0 0 0-1.28.53v5.25z" })),
                            },
                        }, sx: { bgcolor: 'info.main', color: 'info.contrastText' } })), (0, jsx_runtime_1.jsx)(carousel_1.CarouselDotButtons, { scrollSnaps: carousel.dots.scrollSnaps, selectedIndex: carousel.dots.selectedIndex, onClickDot: carousel.dots.onClickDot, fallbackCount: 5, sx: { color: 'primary.main' } }), (0, jsx_runtime_1.jsx)(carousel_1.CarouselDotButtons, { variant: "rounded", scrollSnaps: carousel.dots.scrollSnaps, selectedIndex: carousel.dots.selectedIndex, onClickDot: carousel.dots.onClickDot, fallbackCount: 5, sx: { color: 'info.main' } }), (0, jsx_runtime_1.jsx)(carousel_1.CarouselDotButtons, { variant: "number", scrollSnaps: carousel.dots.scrollSnaps, selectedIndex: carousel.dots.selectedIndex, onClickDot: carousel.dots.onClickDot, fallbackCount: 5, slotProps: {
                            dot: {
                                selected: {
                                    bgcolor: 'warning.main',
                                    color: 'warning.contrastText',
                                },
                            },
                        } })] })] }));
}
function CarouselItem(_a) {
    var item = _a.item, index = _a.index;
    return ((0, jsx_runtime_1.jsxs)(Box_1.default, { sx: { borderRadius: 2, overflow: 'hidden', position: 'relative' }, children: [(0, jsx_runtime_1.jsx)(elements_1.IndexLabel, { index: index + 1 }), (0, jsx_runtime_1.jsx)(image_1.Image, { visibleByDefault: true, alt: item.title, src: item.coverUrl, ratio: "4/3" })] }));
}

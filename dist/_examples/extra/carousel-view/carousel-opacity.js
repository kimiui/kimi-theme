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
exports.CarouselOpacity = CarouselOpacity;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var image_1 = require("../../../components/image");
var carousel_1 = require("../../../components/carousel");
var elements_1 = require("./elements");
function CarouselOpacity(_a) {
    var data = _a.data;
    var carousel = (0, carousel_1.useCarousel)({
        loop: true,
        slidesToShow: '70%',
        slideSpacing: '20px',
    });
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(carousel_1.Carousel, { carousel: carousel, children: data.map(function (item, index) { return ((0, jsx_runtime_1.jsx)(CarouselItem, { index: index, item: item, selected: carousel.dots.selectedIndex === index }, item.id)); }) }), (0, jsx_runtime_1.jsxs)(Box_1.default, { display: "flex", alignItems: "center", justifyContent: "space-between", sx: { mt: 3 }, children: [(0, jsx_runtime_1.jsx)(carousel_1.CarouselArrowBasicButtons, __assign({}, carousel.arrows, { options: carousel.options })), (0, jsx_runtime_1.jsx)(carousel_1.CarouselDotButtons, { scrollSnaps: carousel.dots.scrollSnaps, selectedIndex: carousel.dots.selectedIndex, onClickDot: carousel.dots.onClickDot })] })] }));
}
function CarouselItem(_a) {
    var item = _a.item, index = _a.index, selected = _a.selected;
    return ((0, jsx_runtime_1.jsxs)(Box_1.default, { sx: __assign({ opacity: 0.24, borderRadius: 2, overflow: 'hidden', position: 'relative', transition: function (theme) {
                return theme.transitions.create(['opacity'], {
                    easing: theme.transitions.easing.easeIn,
                    duration: theme.transitions.duration.complex,
                });
            } }, (selected && { opacity: 1 })), children: [(0, jsx_runtime_1.jsx)(elements_1.IndexLabel, { index: index + 1 }), (0, jsx_runtime_1.jsx)(image_1.Image, { visibleByDefault: true, alt: item.title, src: item.coverUrl, ratio: { xs: '4/3', sm: '16/10' } })] }));
}

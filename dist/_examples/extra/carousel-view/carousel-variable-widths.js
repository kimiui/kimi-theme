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
exports.CarouselVariableWidths = CarouselVariableWidths;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var image_1 = require("lib/components/image");
var carousel_1 = require("lib/components/carousel");
var elements_1 = require("./elements");
function CarouselVariableWidths(_a) {
    var data = _a.data;
    var carousel = (0, carousel_1.useCarousel)({
        slidesToShow: 'auto',
        slideSpacing: '20px',
    });
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(carousel_1.Carousel, { carousel: carousel, children: data.map(function (item, index) { return ((0, jsx_runtime_1.jsx)(CarouselItem, { index: index, item: item }, item.id)); }) }), (0, jsx_runtime_1.jsxs)(Box_1.default, { display: "flex", alignItems: "center", justifyContent: "space-between", sx: { mt: 3 }, children: [(0, jsx_runtime_1.jsx)(carousel_1.CarouselArrowBasicButtons, __assign({}, carousel.arrows, { options: carousel.options })), (0, jsx_runtime_1.jsx)(carousel_1.CarouselDotButtons, { scrollSnaps: carousel.dots.scrollSnaps, selectedIndex: carousel.dots.selectedIndex, onClickDot: carousel.dots.onClickDot })] })] }));
}
function CarouselItem(_a) {
    var item = _a.item, index = _a.index;
    var width = (index + 2) * 140;
    return ((0, jsx_runtime_1.jsxs)(Box_1.default, { sx: { position: 'relative' }, children: [(0, jsx_runtime_1.jsx)(elements_1.IndexLabel, { index: index + 1 }), (0, jsx_runtime_1.jsx)(image_1.Image, { alt: item.title, src: item.coverUrl, sx: {
                    borderRadius: 2,
                    width: { xs: width / 3, md: width },
                    height: { xs: 160, sm: 240, md: 320 },
                } })] }));
}

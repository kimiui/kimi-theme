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
exports.CarouselThumbsY = CarouselThumbsY;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var image_1 = require("../../../components/image");
var carousel_1 = require("../../../components/carousel");
var elements_1 = require("./elements");
function CarouselThumbsY(_a) {
    var _b;
    var data = _a.data;
    var carousel = (0, carousel_1.useCarousel)({
        thumbs: {
            axis: 'y',
            slideSpacing: '8px',
            slidesToShow: 'auto',
        },
    });
    return ((0, jsx_runtime_1.jsxs)(Box_1.default, { sx: { position: 'relative' }, children: [(0, jsx_runtime_1.jsx)(carousel_1.Carousel, { carousel: carousel, sx: { borderRadius: 2 }, children: data.map(function (item, index) { return ((0, jsx_runtime_1.jsxs)(Box_1.default, { sx: { position: 'relative' }, children: [(0, jsx_runtime_1.jsx)(elements_1.IndexLabel, { index: index + 1 }), (0, jsx_runtime_1.jsx)(image_1.Image, { visibleByDefault: true, alt: item.title, src: item.coverUrl, ratio: { xs: '3/4', sm: '16/10' } })] }, item.id)); }) }), (0, jsx_runtime_1.jsx)(carousel_1.CarouselArrowNumberButtons, __assign({}, carousel.arrows, { options: carousel.options, totalSlides: carousel.dots.dotCount, selectedIndex: carousel.dots.selectedIndex + 1, sx: { left: 16, bottom: 16, position: 'absolute' } })), (0, jsx_runtime_1.jsx)(Box_1.default, { sx: {
                    p: 0.5,
                    right: 8,
                    top: '50%',
                    borderRadius: 1.25,
                    position: 'absolute',
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%)',
                }, children: (0, jsx_runtime_1.jsx)(carousel_1.CarouselThumbs, { ref: carousel.thumbs.thumbsRef, options: (_b = carousel.options) === null || _b === void 0 ? void 0 : _b.thumbs, sx: { height: { xs: 200, md: 280 } }, children: data.map(function (item, index) { return ((0, jsx_runtime_1.jsx)(carousel_1.CarouselThumb, { index: index, src: item.coverUrl, selected: index === carousel.thumbs.selectedIndex, onClick: function () { return carousel.thumbs.onClickThumb(index); }, sx: { width: 48, height: 48 } }, item.id)); }) }) })] }));
}

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarouselAutoplay = CarouselAutoplay;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var embla_carousel_autoplay_1 = __importDefault(require("embla-carousel-autoplay"));
var image_1 = require("lib/components/image");
var carousel_1 = require("lib/components/carousel");
var elements_1 = require("./elements");
function CarouselAutoplay(_a) {
    var data = _a.data;
    var carousel = (0, carousel_1.useCarousel)({ loop: true }, [(0, embla_carousel_autoplay_1.default)({ playOnInit: false, delay: 2000 })]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(elements_1.PlayButton, { isPlaying: carousel.autoplay.isPlaying, onClick: carousel.autoplay.onTogglePlay }), (0, jsx_runtime_1.jsxs)(Box_1.default, { sx: { position: 'relative' }, children: [(0, jsx_runtime_1.jsx)(carousel_1.Carousel, { carousel: carousel, sx: { borderRadius: 2 }, children: data.map(function (item, index) { return ((0, jsx_runtime_1.jsx)(CarouselItem, { index: index, item: item }, item.id)); }) }), (0, jsx_runtime_1.jsx)(carousel_1.CarouselDotButtons, { scrollSnaps: carousel.dots.scrollSnaps, selectedIndex: carousel.dots.selectedIndex, onClickDot: carousel.dots.onClickDot, sx: { top: 16, right: 16, position: 'absolute', color: 'common.white' } })] })] }));
}
function CarouselItem(_a) {
    var item = _a.item, index = _a.index;
    return ((0, jsx_runtime_1.jsxs)(Box_1.default, { sx: { position: 'relative' }, children: [(0, jsx_runtime_1.jsx)(elements_1.IndexLabel, { index: index + 1 }), (0, jsx_runtime_1.jsx)(image_1.Image, { visibleByDefault: true, alt: item.title, src: item.coverUrl, ratio: { xs: '4/3', sm: '16/10' } })] }));
}

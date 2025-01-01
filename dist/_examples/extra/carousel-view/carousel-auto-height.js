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
exports.CarouselAutoHeight = CarouselAutoHeight;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var embla_carousel_auto_height_1 = __importDefault(require("embla-carousel-auto-height"));
var image_1 = require("../../../components/image");
var carousel_1 = require("../../../components/carousel");
var elements_1 = require("./elements");
function CarouselAutoHeight(_a) {
    var data = _a.data;
    var carousel = (0, carousel_1.useCarousel)({}, [(0, embla_carousel_auto_height_1.default)()]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(carousel_1.CarouselArrowBasicButtons, __assign({}, carousel.arrows, { options: carousel.options, sx: { top: 20, right: 16, position: 'absolute' } })), (0, jsx_runtime_1.jsx)(carousel_1.Carousel, { carousel: carousel, sx: { borderRadius: 2 }, children: data.map(function (item, index) { return ((0, jsx_runtime_1.jsx)(CarouselItem, { item: item, index: index }, item.id)); }) })] }));
}
function CarouselItem(_a) {
    var item = _a.item, index = _a.index;
    return ((0, jsx_runtime_1.jsxs)(Box_1.default, { sx: { position: 'relative', overflow: 'hidden', borderRadius: 2 }, children: [(0, jsx_runtime_1.jsx)(elements_1.IndexLabel, { index: index + 1 }), (0, jsx_runtime_1.jsx)(image_1.Image, { alt: item.title, src: item.coverUrl, sx: __assign(__assign(__assign(__assign({ width: 1 }, (index === 0 && { height: 200 })), (index === 1 && { height: 240 })), (index === 2 && { height: 160 })), (index === 3 && { height: 320 })) })] }));
}

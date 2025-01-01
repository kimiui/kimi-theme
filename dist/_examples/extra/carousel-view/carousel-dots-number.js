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
exports.CarouselDotsNumber = CarouselDotsNumber;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Link_1 = __importDefault(require("@mui/material/Link"));
var styles_1 = require("@mui/material/styles");
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var CardContent_1 = __importDefault(require("@mui/material/CardContent"));
var image_1 = require("lib/components/image");
var iconify_1 = require("lib/components/iconify");
var styles_2 = require("lib/theme/styles");
var carousel_1 = require("lib/components/carousel");
var elements_1 = require("./elements");
function CarouselDotsNumber(_a) {
    var data = _a.data;
    var carousel = (0, carousel_1.useCarousel)({
        loop: true,
        dragFree: true,
        slideSpacing: '20px',
        slidesToShow: { xs: 1, sm: 2, md: '36%' },
    });
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(Box_1.default, { sx: { position: 'relative' }, children: [(0, jsx_runtime_1.jsx)(carousel_1.Carousel, { carousel: carousel, children: data.map(function (item, index) { return ((0, jsx_runtime_1.jsx)(CarouselItem, { index: index, item: item }, item.id)); }) }), (0, jsx_runtime_1.jsx)(carousel_1.CarouselArrowFloatButtons, __assign({}, carousel.arrows, { options: carousel.options }))] }), (0, jsx_runtime_1.jsx)(carousel_1.CarouselDotButtons, { variant: "number", scrollSnaps: carousel.dots.scrollSnaps, selectedIndex: carousel.dots.selectedIndex, onClickDot: carousel.dots.onClickDot, sx: { mt: 5, mb: 2, width: 1, justifyContent: 'center' } })] }));
}
function CarouselItem(_a) {
    var item = _a.item, index = _a.index;
    var theme = (0, styles_1.useTheme)();
    return ((0, jsx_runtime_1.jsxs)(Box_1.default, { sx: { borderRadius: 2, overflow: 'hidden', position: 'relative' }, children: [(0, jsx_runtime_1.jsx)(elements_1.IndexLabel, { index: index + 1 }), (0, jsx_runtime_1.jsx)(image_1.Image, { visibleByDefault: true, alt: item.title, src: item.coverUrl, ratio: "3/4" }), (0, jsx_runtime_1.jsxs)(CardContent_1.default, { sx: __assign(__assign({}, (0, styles_2.bgGradient)({
                    color: "to top, ".concat(theme.vars.palette.grey[900], " 25%, ").concat((0, styles_2.varAlpha)(theme.vars.palette.grey['900Channel'], 0), " 100%"),
                })), { width: 1, bottom: 0, zIndex: 9, textAlign: 'left', position: 'absolute', color: 'common.white' }), children: [(0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "h5", sx: __assign(__assign({}, (0, styles_2.maxLine)({ line: 2 })), { mb: 2 }), children: item.title }), (0, jsx_runtime_1.jsxs)(Link_1.default, { color: "inherit", variant: "overline", sx: {
                            opacity: 0.72,
                            alignItems: 'center',
                            display: 'inline-flex',
                            transition: theme.transitions.create(['opacity']),
                            '&:hover': { opacity: 1 },
                        }, children: ["learn More", (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "eva:arrow-forward-fill", width: 16, sx: { ml: 1 } })] })] })] }));
}

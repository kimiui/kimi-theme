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
exports.CarouselRightToLeft = CarouselRightToLeft;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var styles_1 = require("@mui/material/styles");
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var IconButton_1 = __importDefault(require("@mui/material/IconButton"));
var styles_2 = require("../../../theme/styles");
var image_1 = require("../../../components/image");
var iconify_1 = require("../../../components/iconify");
var carousel_1 = require("../../../components/carousel");
var elements_1 = require("./elements");
function CarouselRightToLeft(_a) {
    var data = _a.data;
    var carousel = (0, carousel_1.useCarousel)({ direction: 'rtl' });
    return ((0, jsx_runtime_1.jsxs)(Box_1.default, { dir: "rtl", sx: { position: 'relative' }, children: [(0, jsx_runtime_1.jsx)(carousel_1.Carousel, { carousel: carousel, sx: { borderRadius: 2 }, children: data.map(function (item, index) { return ((0, jsx_runtime_1.jsx)(CarouselItem, { index: index, item: item }, item.id)); }) }), (0, jsx_runtime_1.jsx)(carousel_1.CarouselArrowFloatButtons, __assign({}, carousel.arrows, { options: carousel.options })), (0, jsx_runtime_1.jsx)(carousel_1.CarouselDotButtons, { scrollSnaps: carousel.dots.scrollSnaps, selectedIndex: carousel.dots.selectedIndex, onClickDot: carousel.dots.onClickDot, sx: {
                    top: 16,
                    right: 16,
                    color: 'info.main',
                    position: 'absolute',
                } })] }));
}
function CarouselItem(_a) {
    var item = _a.item, index = _a.index;
    var theme = (0, styles_1.useTheme)();
    return ((0, jsx_runtime_1.jsxs)(Box_1.default, { sx: { position: 'relative' }, children: [(0, jsx_runtime_1.jsx)(elements_1.IndexLabel, { index: index + 1 }), (0, jsx_runtime_1.jsx)(image_1.Image, { visibleByDefault: true, alt: item.title, src: item.coverUrl, ratio: { xs: '4/3', sm: '16/10' }, slotProps: {
                    overlay: {
                        background: "linear-gradient(to bottom, ".concat((0, styles_2.varAlpha)(theme.vars.palette.common.blackChannel, 0), " 20%, ").concat(theme.vars.palette.grey[900], " 80%)"),
                    },
                } }), (0, jsx_runtime_1.jsxs)(Box_1.default, { gap: 2, display: "flex", alignItems: "center", sx: {
                    p: 3,
                    left: 0,
                    width: 1,
                    bottom: 0,
                    zIndex: 9,
                    position: 'absolute',
                    color: 'common.white',
                }, children: [(0, jsx_runtime_1.jsx)(Typography_1.default, { component: "h6", sx: {
                            flexGrow: 1,
                            typography: { xs: 'subtitle2', sm: 'h6' },
                        }, children: item.title }), (0, jsx_runtime_1.jsx)(IconButton_1.default, { color: "inherit", children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "eva:more-horizontal-fill" }) })] })] }));
}

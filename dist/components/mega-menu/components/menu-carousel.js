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
exports.MenuCarousel = MenuCarousel;
var jsx_runtime_1 = require("react/jsx-runtime");
var Link_1 = __importDefault(require("@mui/material/Link"));
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var routes_react_1 = require("routes-react");
var styles_1 = require("@mui/material/styles");
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var styles_2 = require("lib/theme/styles");
var image_1 = require("lib/components/image");
var carousel_1 = require("../../carousel");
// ----------------------------------------------------------------------
function MenuCarousel(_a) {
    var slides = _a.slides, _b = _a.displayCount, displayCount = _b === void 0 ? 8 : _b, sx = _a.sx;
    var carousel = (0, carousel_1.useCarousel)({
        slidesToShow: displayCount,
        slidesToScroll: displayCount,
    });
    return ((0, jsx_runtime_1.jsxs)(Stack_1.default, { sx: __assign({ position: 'relative', pt: 2 }, sx), children: [(0, jsx_runtime_1.jsx)(carousel_1.Carousel, { carousel: carousel, children: slides.map(function (item) { return ((0, jsx_runtime_1.jsx)(CarouselItem, { item: item }, item.name)); }) }), (0, jsx_runtime_1.jsxs)(Stack_1.default, { direction: "row", alignItems: "center", justifyContent: "space-between", sx: { mt: 2 }, children: [(0, jsx_runtime_1.jsx)(carousel_1.CarouselArrowBasicButtons, __assign({}, carousel.arrows, { options: carousel.options })), (0, jsx_runtime_1.jsx)(carousel_1.CarouselDotButtons, { scrollSnaps: carousel.dots.scrollSnaps, selectedIndex: carousel.dots.selectedIndex, onClickDot: carousel.dots.onClickDot, sx: { color: 'primary.main' } })] })] }));
}
function CarouselItem(_a) {
    var item = _a.item;
    var theme = (0, styles_1.useTheme)();
    return ((0, jsx_runtime_1.jsxs)(Link_1.default, { component: routes_react_1.RouterLink, href: item.path, color: "inherit", underline: "none", sx: {
            px: 1,
            display: 'block',
            transition: theme.transitions.create('color'),
            '&:hover': { color: 'primary.main' },
        }, children: [(0, jsx_runtime_1.jsx)(image_1.Image, { alt: item.coverUrl, src: item.coverUrl, ratio: "1/1", sx: { borderRadius: 1, mb: 1 } }), (0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "caption", sx: __assign(__assign({}, (0, styles_2.maxLine)({ line: 2, persistent: theme.typography.caption })), { fontWeight: 'fontWeightSemiBold' }), children: item.name })] }));
}

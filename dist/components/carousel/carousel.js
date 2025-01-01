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
exports.StyledContainer = exports.StyledRoot = void 0;
exports.Carousel = Carousel;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var styles_1 = require("@mui/material/styles");
var react_1 = require("react");
var classes_1 = require("./classes");
var carousel_slide_1 = require("./components/carousel-slide");
exports.StyledRoot = (0, styles_1.styled)(Box_1.default, {
    shouldForwardProp: function (prop) { return prop !== 'axis'; },
})({
    margin: 'auto',
    maxWidth: '100%',
    overflow: 'hidden',
    position: 'relative',
    variants: [
        {
            props: {
                axis: 'y',
            },
            style: {
                height: '100%',
            },
        },
    ],
});
exports.StyledContainer = (0, styles_1.styled)('ul', {
    shouldForwardProp: function (prop) { return prop !== 'axis' && prop !== 'slideSpacing'; },
})(function (_a) {
    var slideSpacing = _a.slideSpacing;
    return ({
        display: 'flex',
        backfaceVisibility: 'hidden',
        variants: [
            {
                props: {
                    axis: 'x',
                },
                style: {
                    touchAction: 'pan-y pinch-zoom',
                    marginLeft: "calc(".concat(slideSpacing, " * -1)"),
                },
            },
            {
                props: {
                    axis: 'y',
                },
                style: {
                    height: '100%',
                    flexDirection: 'column',
                    touchAction: 'pan-x pinch-zoom',
                    marginTop: "calc(".concat(slideSpacing, " * -1)"),
                },
            },
        ],
    });
});
// ----------------------------------------------------------------------
function Carousel(_a) {
    var _b, _c, _d, _e;
    var carousel = _a.carousel, children = _a.children, sx = _a.sx, slotProps = _a.slotProps;
    var mainRef = carousel.mainRef, options = carousel.options;
    var axis = (_b = options === null || options === void 0 ? void 0 : options.axis) !== null && _b !== void 0 ? _b : 'x';
    var slideSpacing = (_c = options === null || options === void 0 ? void 0 : options.slideSpacing) !== null && _c !== void 0 ? _c : '0px';
    var direction = (_d = options === null || options === void 0 ? void 0 : options.direction) !== null && _d !== void 0 ? _d : 'ltr';
    var renderChildren = react_1.Children.map(children, function (child) {
        if ((0, react_1.isValidElement)(child)) {
            var reactChild = child;
            return ((0, jsx_runtime_1.jsx)(carousel_slide_1.CarouselSlide, { options: carousel.options, sx: slotProps === null || slotProps === void 0 ? void 0 : slotProps.slide, children: child }, reactChild.key));
        }
        return null;
    });
    return ((0, jsx_runtime_1.jsx)(exports.StyledRoot, { sx: sx, axis: axis, ref: mainRef, dir: direction, className: classes_1.carouselClasses.root, children: (0, jsx_runtime_1.jsx)(exports.StyledContainer, { axis: axis, slideSpacing: slideSpacing, className: classes_1.carouselClasses.container, sx: __assign(__assign({}, (((_e = carousel.pluginNames) === null || _e === void 0 ? void 0 : _e.includes('autoHeight')) && {
                alignItems: 'flex-start',
                transition: function (theme) {
                    return theme.transitions.create(['height'], {
                        easing: theme.transitions.easing.easeInOut,
                        duration: theme.transitions.duration.shorter,
                    });
                },
            })), slotProps === null || slotProps === void 0 ? void 0 : slotProps.container), children: renderChildren }) }));
}

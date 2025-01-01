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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarouselSlide = CarouselSlide;
var jsx_runtime_1 = require("react/jsx-runtime");
var styles_1 = require("@mui/material/styles");
var classes_1 = require("../classes");
var StyledRoot = (0, styles_1.styled)('li', {
    shouldForwardProp: function (prop) { return prop !== 'axis' && prop !== 'slideSpacing'; },
})(function (_a) {
    var slideSpacing = _a.slideSpacing;
    return ({
        display: 'block',
        position: 'relative',
        variants: [
            {
                props: {
                    axis: 'x',
                },
                style: {
                    minWidth: 0,
                    paddingLeft: slideSpacing,
                },
            },
            {
                props: {
                    axis: 'y',
                },
                style: {
                    minHeight: 0,
                    paddingTop: slideSpacing,
                },
            },
        ],
    });
});
var StyledContent = (0, styles_1.styled)('div')({
    overflow: 'hidden',
    position: 'relative',
    borderRadius: 'inherit',
});
// ----------------------------------------------------------------------
function CarouselSlide(_a) {
    var _b;
    var sx = _a.sx, options = _a.options, children = _a.children;
    var slideSize = getSize(options === null || options === void 0 ? void 0 : options.slidesToShow);
    return ((0, jsx_runtime_1.jsx)(StyledRoot, { axis: (_b = options === null || options === void 0 ? void 0 : options.axis) !== null && _b !== void 0 ? _b : 'x', slideSpacing: options === null || options === void 0 ? void 0 : options.slideSpacing, className: classes_1.carouselClasses.slide, sx: __assign({ flex: slideSize }, sx), children: (options === null || options === void 0 ? void 0 : options.parallax) ? ((0, jsx_runtime_1.jsx)(StyledContent, { className: classes_1.carouselClasses.slideContent, children: (0, jsx_runtime_1.jsx)("div", { className: "slide__parallax__layer", children: children }) })) : (children) }));
}
function getSize(slidesToShow) {
    if (slidesToShow && typeof slidesToShow === 'object') {
        return Object.keys(slidesToShow).reduce(function (acc, key) {
            var sizeByKey = slidesToShow[key];
            acc[key] = getValue(sizeByKey);
            return acc;
        }, {});
    }
    return getValue(slidesToShow);
}
function getValue(value) {
    if (value === void 0) { value = 1; }
    if (typeof value === 'string') {
        var isSupported = value === 'auto' || value.endsWith('%') || value.endsWith('px');
        if (!isSupported) {
            throw new Error("Only accepts values: auto, px, %, or number.");
        }
        // value is either 'auto', ends with '%', or ends with 'px'
        return "0 0 ".concat(value);
    }
    if (typeof value === 'number') {
        return "0 0 ".concat(100 / value, "%");
    }
    // Default case should not be reached due to the type signature, but we include it for safety
    throw new Error("Invalid value type. Only accepts values: auto, px, %, or number.");
}

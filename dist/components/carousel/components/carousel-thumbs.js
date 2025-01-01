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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarouselThumbs = void 0;
exports.CarouselThumb = CarouselThumb;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var styles_1 = require("@mui/material/styles");
var ButtonBase_1 = __importDefault(require("@mui/material/ButtonBase"));
var react_1 = require("react");
var styles_2 = require("../../../theme/styles");
var classes_1 = require("../classes");
var carousel_slide_1 = require("./carousel-slide");
var carousel_1 = require("../carousel");
// ----------------------------------------------------------------------
exports.CarouselThumbs = (0, react_1.forwardRef)(function (_a, ref) {
    var _b, _c;
    var children = _a.children, slotProps = _a.slotProps, options = _a.options, sx = _a.sx, other = __rest(_a, ["children", "slotProps", "options", "sx"]);
    var axis = (_b = options === null || options === void 0 ? void 0 : options.axis) !== null && _b !== void 0 ? _b : 'x';
    var slideSpacing = (_c = options === null || options === void 0 ? void 0 : options.slideSpacing) !== null && _c !== void 0 ? _c : '12px';
    var maskStyles = useMaskStyle(axis);
    var renderChildren = react_1.Children.map(children, function (child) {
        if ((0, react_1.isValidElement)(child)) {
            var reactChild = child;
            return ((0, jsx_runtime_1.jsx)(carousel_slide_1.CarouselSlide, { options: __assign(__assign({}, options), { slideSpacing: slideSpacing }), sx: slotProps === null || slotProps === void 0 ? void 0 : slotProps.slide, children: child }, reactChild.key));
        }
        return null;
    });
    return ((0, jsx_runtime_1.jsx)(carousel_1.StyledRoot, __assign({ ref: ref, axis: axis, className: classes_1.carouselClasses.thumbs, sx: __assign(__assign(__assign(__assign({ flexShrink: 0 }, (axis === 'x' && { p: 0.5, maxWidth: 1 })), (axis === 'y' && { p: 0.5, maxHeight: 1 })), (!(slotProps === null || slotProps === void 0 ? void 0 : slotProps.disableMask) && maskStyles)), sx) }, other, { children: (0, jsx_runtime_1.jsx)(carousel_1.StyledContainer, { axis: axis, slideSpacing: slideSpacing, className: classes_1.carouselClasses.thumbContainer, sx: __assign({}, slotProps === null || slotProps === void 0 ? void 0 : slotProps.container), children: renderChildren }) })));
});
// ----------------------------------------------------------------------
function CarouselThumb(_a) {
    var sx = _a.sx, src = _a.src, index = _a.index, selected = _a.selected, other = __rest(_a, ["sx", "src", "index", "selected"]);
    return ((0, jsx_runtime_1.jsx)(ButtonBase_1.default, __assign({ className: classes_1.carouselClasses.thumb, sx: __assign(__assign({ width: 64, height: 64, opacity: 0.48, flexShrink: 0, cursor: 'pointer', borderRadius: 1.25, transition: function (theme) {
                return theme.transitions.create(['opacity', 'box-shadow'], {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.short,
                });
            } }, (selected && {
            opacity: 1,
            boxShadow: function (theme) { return "0 0 0 2px ".concat(theme.vars.palette.primary.main); },
        })), sx) }, other, { children: (0, jsx_runtime_1.jsx)(Box_1.default, { component: "img", alt: "carousel-thumb-".concat(index), src: src, className: classes_1.carouselClasses.thumbImage, sx: {
                width: 1,
                height: 1,
                objectFit: 'cover',
                borderRadius: 'inherit',
            } }) })));
}
// ----------------------------------------------------------------------
function useMaskStyle(axis) {
    var theme = (0, styles_1.useTheme)();
    var baseStyles = {
        zIndex: 9,
        content: '""',
        position: 'absolute',
    };
    var bgcolor = "".concat(theme.vars.palette.background.paper, " 20%, ").concat((0, styles_2.varAlpha)(theme.vars.palette.background.paperChannel, 0), " 100%)");
    if (axis === 'y') {
        return {
            '&::before, &::after': __assign(__assign({}, baseStyles), { left: 0, height: 40, width: '100%' }),
            '&::before': {
                top: -8,
                background: "linear-gradient(to bottom, ".concat(bgcolor),
            },
            '&::after': {
                bottom: -8,
                background: "linear-gradient(to top, ".concat(bgcolor),
            },
        };
    }
    return {
        '&::before, &::after': __assign(__assign({}, baseStyles), { top: 0, width: 40, height: '100%' }),
        '&::before': {
            left: -8,
            background: "linear-gradient(to right, ".concat(bgcolor),
        },
        '&::after': {
            right: -8,
            background: "linear-gradient(to left, ".concat(bgcolor),
        },
    };
}

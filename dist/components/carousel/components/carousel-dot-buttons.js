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
exports.CarouselDotButtons = CarouselDotButtons;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var NoSsr_1 = __importDefault(require("@mui/material/NoSsr"));
var ButtonBase_1 = __importDefault(require("@mui/material/ButtonBase"));
var styles_1 = require("../../../theme/styles");
var classes_1 = require("../classes");
// ----------------------------------------------------------------------
function CarouselDotButtons(_a) {
    var _b, _c, _d, _e;
    var sx = _a.sx, gap = _a.gap, slotProps = _a.slotProps, onClickDot = _a.onClickDot, scrollSnaps = _a.scrollSnaps, selectedIndex = _a.selectedIndex, _f = _a.fallbackCount, fallbackCount = _f === void 0 ? 1 : _f, _g = _a.variant, variant = _g === void 0 ? 'circular' : _g, _h = _a.fallback, fallback = _h === void 0 ? false : _h, other = __rest(_a, ["sx", "gap", "slotProps", "onClickDot", "scrollSnaps", "selectedIndex", "fallbackCount", "variant", "fallback"]);
    var GAPS = {
        number: gap !== null && gap !== void 0 ? gap : 6,
        rounded: gap !== null && gap !== void 0 ? gap : 2,
        circular: gap !== null && gap !== void 0 ? gap : 2,
    };
    var SIZES = {
        circular: (_c = (_b = slotProps === null || slotProps === void 0 ? void 0 : slotProps.dot) === null || _b === void 0 ? void 0 : _b.size) !== null && _c !== void 0 ? _c : 18,
        number: (_e = (_d = slotProps === null || slotProps === void 0 ? void 0 : slotProps.dot) === null || _d === void 0 ? void 0 : _d.size) !== null && _e !== void 0 ? _e : 28,
    };
    var renderFallback = ((0, jsx_runtime_1.jsx)(Box_1.default, { sx: __assign({ height: SIZES.circular, width: "calc(".concat(fallbackCount * SIZES.circular + GAPS.circular * (fallbackCount - 1), "px )") }, (variant === 'number' && {
            height: SIZES.number,
            width: "calc(".concat(fallbackCount * SIZES.number + GAPS.number * (fallbackCount - 1), "px )"),
        })) }));
    var dotStyles = {
        circular: function (selected) { return ({
            width: SIZES.circular,
            height: SIZES.circular,
            '&::before': __assign({ width: 8, height: 8, content: '""', opacity: 0.24, borderRadius: '50%', bgcolor: 'currentColor', transition: function (theme) {
                    return theme.transitions.create(['opacity'], {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.short,
                    });
                } }, (selected && { opacity: 1 })),
        }); },
        rounded: function (selected) { return ({
            width: SIZES.circular,
            height: SIZES.circular,
            '&::before': __assign({ width: 8, height: 8, content: '""', opacity: 0.24, borderRadius: '50%', bgcolor: 'currentColor', transition: function (theme) {
                    return theme.transitions.create(['width', 'opacity'], {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.short,
                    });
                } }, (selected && {
                width: 'calc(100% - 4px)',
                opacity: 1,
                borderRadius: 1,
            })),
        }); },
        number: function (selected) {
            var _a;
            return (__assign({ width: SIZES.number, height: SIZES.number, borderRadius: '50%', typography: 'caption', color: 'text.disabled', border: function (theme) {
                    return "solid 1px ".concat((0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0.16));
                } }, (selected && (_a = {
                    color: 'common.white',
                    bgcolor: 'text.primary',
                    fontWeight: 'fontWeightSemiBold'
                },
                _a[styles_1.stylesMode.dark] = { color: 'grey.800' },
                _a))));
        },
    };
    return ((0, jsx_runtime_1.jsx)(NoSsr_1.default, { fallback: fallback ? renderFallback : null, children: (0, jsx_runtime_1.jsx)(Box_1.default, __assign({ component: "ul", className: classes_1.carouselClasses.dots, sx: __assign(__assign(__assign(__assign({ zIndex: 9, display: 'inline-flex' }, (variant === 'circular' && { gap: "".concat(GAPS.circular, "px") })), (variant === 'rounded' && { gap: "".concat(GAPS.rounded, "px") })), (variant === 'number' && { gap: "".concat(GAPS.number, "px") })), sx) }, other, { children: scrollSnaps.map(function (_, index) {
                var _a;
                var _b, _c;
                var selected = index === selectedIndex;
                return ((0, jsx_runtime_1.jsx)(Box_1.default, { component: "li", sx: { display: 'inline-flex' }, children: (0, jsx_runtime_1.jsx)(ButtonBase_1.default, { disableRipple: true, "aria-label": "dot-".concat(index), className: classes_1.carouselClasses.dot.concat(selected ? " ".concat(classes_1.carouselClasses.state.selected) : ''), onClick: function () { return onClickDot(index); }, sx: __assign(__assign(__assign(__assign(__assign({}, (variant === 'circular' && dotStyles.circular(selected))), (variant === 'rounded' && dotStyles.rounded(selected))), (variant === 'number' && dotStyles.number(selected))), (_a = {}, _a["&.".concat(classes_1.carouselClasses.state.selected)] = __assign({}, (_b = slotProps === null || slotProps === void 0 ? void 0 : slotProps.dot) === null || _b === void 0 ? void 0 : _b.selected), _a)), (_c = slotProps === null || slotProps === void 0 ? void 0 : slotProps.dot) === null || _c === void 0 ? void 0 : _c.sx), children: variant === 'number' && index + 1 }) }, index));
            }) })) }));
}

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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
exports.CarouselArrowBasicButtons = CarouselArrowBasicButtons;
exports.CarouselArrowNumberButtons = CarouselArrowNumberButtons;
exports.CarouselArrowFloatButtons = CarouselArrowFloatButtons;
exports.ArrowButton = ArrowButton;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var SvgIcon_1 = __importDefault(require("@mui/material/SvgIcon"));
var ButtonBase_1 = __importStar(require("@mui/material/ButtonBase"));
var styles_1 = require("lib/theme/styles");
var classes_1 = require("../classes");
// ----------------------------------------------------------------------
function CarouselArrowBasicButtons(_a) {
    var _b, _c, _d, _e, _f, _g;
    var options = _a.options, slotProps = _a.slotProps, totalSlides = _a.totalSlides, selectedIndex = _a.selectedIndex, 
    //
    onClickPrev = _a.onClickPrev, onClickNext = _a.onClickNext, disablePrev = _a.disablePrev, disableNext = _a.disableNext, sx = _a.sx, other = __rest(_a, ["options", "slotProps", "totalSlides", "selectedIndex", "onClickPrev", "onClickNext", "disablePrev", "disableNext", "sx"]);
    return ((0, jsx_runtime_1.jsxs)(Stack_1.default, __assign({ direction: "row", alignItems: "center", display: "inline-flex", className: classes_1.carouselClasses.arrows, sx: __assign({ gap: 0.5, zIndex: 9, color: 'action.active' }, sx) }, other, { children: [(0, jsx_runtime_1.jsx)(ArrowButton, { variant: "prev", options: options, disabled: disablePrev, onClick: onClickPrev, svgIcon: (_b = slotProps === null || slotProps === void 0 ? void 0 : slotProps.prevBtn) === null || _b === void 0 ? void 0 : _b.svgIcon, svgSize: (_c = slotProps === null || slotProps === void 0 ? void 0 : slotProps.prevBtn) === null || _c === void 0 ? void 0 : _c.svgSize, sx: (_d = slotProps === null || slotProps === void 0 ? void 0 : slotProps.prevBtn) === null || _d === void 0 ? void 0 : _d.sx }), (0, jsx_runtime_1.jsx)(ArrowButton, { variant: "next", options: options, disabled: disableNext, onClick: onClickNext, svgIcon: (_e = slotProps === null || slotProps === void 0 ? void 0 : slotProps.nextBtn) === null || _e === void 0 ? void 0 : _e.svgIcon, svgSize: (_f = slotProps === null || slotProps === void 0 ? void 0 : slotProps.prevBtn) === null || _f === void 0 ? void 0 : _f.svgSize, sx: (_g = slotProps === null || slotProps === void 0 ? void 0 : slotProps.prevBtn) === null || _g === void 0 ? void 0 : _g.sx })] })));
}
// ----------------------------------------------------------------------
function CarouselArrowNumberButtons(_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j;
    var options = _a.options, slotProps = _a.slotProps, totalSlides = _a.totalSlides, selectedIndex = _a.selectedIndex, 
    //
    onClickPrev = _a.onClickPrev, onClickNext = _a.onClickNext, disablePrev = _a.disablePrev, disableNext = _a.disableNext, sx = _a.sx, other = __rest(_a, ["options", "slotProps", "totalSlides", "selectedIndex", "onClickPrev", "onClickNext", "disablePrev", "disableNext", "sx"]);
    return ((0, jsx_runtime_1.jsxs)(Stack_1.default, __assign({ direction: "row", alignItems: "center", display: "inline-flex", className: classes_1.carouselClasses.arrows, sx: __assign({ p: 0.5, gap: 0.25, zIndex: 9, borderRadius: 1.25, color: 'common.white', bgcolor: function (theme) { return (0, styles_1.varAlpha)(theme.vars.palette.grey['900Channel'], 0.48); } }, sx) }, other, { children: [(0, jsx_runtime_1.jsx)(ArrowButton, { variant: "prev", options: options, disabled: disablePrev, onClick: onClickPrev, sx: __assign({ p: 0.75, borderRadius: 'inherit' }, (_b = slotProps === null || slotProps === void 0 ? void 0 : slotProps.prevBtn) === null || _b === void 0 ? void 0 : _b.sx), svgIcon: (_c = slotProps === null || slotProps === void 0 ? void 0 : slotProps.prevBtn) === null || _c === void 0 ? void 0 : _c.svgIcon, svgSize: (_e = (_d = slotProps === null || slotProps === void 0 ? void 0 : slotProps.prevBtn) === null || _d === void 0 ? void 0 : _d.svgSize) !== null && _e !== void 0 ? _e : 16 }), (0, jsx_runtime_1.jsxs)(Box_1.default, { component: "span", className: classes_1.carouselClasses.arrowsLabel, sx: { mx: 0.5, typography: 'subtitle2' }, children: [selectedIndex, "/", totalSlides] }), (0, jsx_runtime_1.jsx)(ArrowButton, { variant: "next", options: options, disabled: disableNext, onClick: onClickNext, sx: __assign({ p: 0.75, borderRadius: 'inherit' }, (_f = slotProps === null || slotProps === void 0 ? void 0 : slotProps.nextBtn) === null || _f === void 0 ? void 0 : _f.sx), svgIcon: (_g = slotProps === null || slotProps === void 0 ? void 0 : slotProps.nextBtn) === null || _g === void 0 ? void 0 : _g.svgIcon, svgSize: (_j = (_h = slotProps === null || slotProps === void 0 ? void 0 : slotProps.prevBtn) === null || _h === void 0 ? void 0 : _h.svgSize) !== null && _j !== void 0 ? _j : 16 })] })));
}
// ----------------------------------------------------------------------
function CarouselArrowFloatButtons(_a) {
    var _b;
    var _c, _d, _e, _f, _g, _h;
    var options = _a.options, slotProps = _a.slotProps, onClickPrev = _a.onClickPrev, onClickNext = _a.onClickNext, disablePrev = _a.disablePrev, disableNext = _a.disableNext;
    var baseStyles = (_b = {
            zIndex: 9,
            top: '50%',
            borderRadius: 1.5,
            position: 'absolute',
            color: 'common.white',
            bgcolor: 'text.primary',
            transform: 'translateY(-50%)',
            '&:hover': { opacity: 0.8 }
        },
        _b[styles_1.stylesMode.dark] = { color: 'grey.800' },
        _b);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(ArrowButton, { variant: "prev", options: options, disabled: disablePrev, onClick: onClickPrev, svgIcon: (_c = slotProps === null || slotProps === void 0 ? void 0 : slotProps.prevBtn) === null || _c === void 0 ? void 0 : _c.svgIcon, svgSize: (_d = slotProps === null || slotProps === void 0 ? void 0 : slotProps.prevBtn) === null || _d === void 0 ? void 0 : _d.svgSize, sx: __assign(__assign({ left: -16 }, baseStyles), (_e = slotProps === null || slotProps === void 0 ? void 0 : slotProps.prevBtn) === null || _e === void 0 ? void 0 : _e.sx) }), (0, jsx_runtime_1.jsx)(ArrowButton, { variant: "next", options: options, disabled: disableNext, onClick: onClickNext, svgIcon: (_f = slotProps === null || slotProps === void 0 ? void 0 : slotProps.nextBtn) === null || _f === void 0 ? void 0 : _f.svgIcon, svgSize: (_g = slotProps === null || slotProps === void 0 ? void 0 : slotProps.nextBtn) === null || _g === void 0 ? void 0 : _g.svgSize, sx: __assign(__assign({ right: -16 }, baseStyles), (_h = slotProps === null || slotProps === void 0 ? void 0 : slotProps.nextBtn) === null || _h === void 0 ? void 0 : _h.sx) })] }));
}
// ----------------------------------------------------------------------
function ArrowButton(_a) {
    var _b;
    var sx = _a.sx, svgIcon = _a.svgIcon, svgSize = _a.svgSize, options = _a.options, variant = _a.variant, other = __rest(_a, ["sx", "svgIcon", "svgSize", "options", "variant"]);
    var arrowPrev = variant === 'prev';
    var arrowNext = variant === 'next';
    var prevSvg = svgIcon || ((0, jsx_runtime_1.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M15.488 4.43a.75.75 0 0 1 .081 1.058L9.988 12l5.581 6.512a.75.75 0 1 1-1.138.976l-6-7a.75.75 0 0 1 0-.976l6-7a.75.75 0 0 1 1.057-.081", clipRule: "evenodd" }));
    var nextSvg = svgIcon || ((0, jsx_runtime_1.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M8.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L14.012 12L8.431 5.488a.75.75 0 0 1 .08-1.057", clipRule: "evenodd" }));
    return ((0, jsx_runtime_1.jsx)(ButtonBase_1.default, __assign({ className: arrowPrev ? classes_1.carouselClasses.arrowPrev : classes_1.carouselClasses.arrowPrev, "aria-label": arrowPrev ? 'Prev button' : 'Next button', sx: __assign(__assign((_b = { p: 1, borderRadius: '50%', boxSizing: 'content-box', transition: function (theme) {
                    return theme.transitions.create(['all'], {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.short,
                    });
                } }, _b["&.".concat(ButtonBase_1.buttonBaseClasses.disabled)] = {
            opacity: 0.4,
        }, _b), sx), ((options === null || options === void 0 ? void 0 : options.direction) === 'rtl' && __assign(__assign({}, (arrowPrev && { right: -16, left: 'auto' })), (arrowNext && { left: -16, right: 'auto' })))) }, other, { children: (0, jsx_runtime_1.jsx)(SvgIcon_1.default, { className: classes_1.carouselClasses.arrowSvg, sx: __assign(__assign({ width: svgSize !== null && svgSize !== void 0 ? svgSize : 20, height: svgSize !== null && svgSize !== void 0 ? svgSize : 20 }, ((options === null || options === void 0 ? void 0 : options.axis) === 'y' && { transform: ' rotate(90deg)' })), ((options === null || options === void 0 ? void 0 : options.direction) === 'rtl' && { transform: ' scaleX(-1)' })), children: arrowPrev ? prevSvg : nextSvg }) })));
}

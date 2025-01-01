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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var framer_motion_1 = require("framer-motion");
var react_1 = require("react");
var merge_classes_1 = require("../../utils/merge-classes");
var classes_1 = require("./classes");
var styles_1 = require("./styles");
var DEFAULT_DELAY = 0;
var DEFAULT_EFFECT = {
    style: 'blur',
    duration: 300,
    disabled: false,
};
exports.Image = (0, react_1.forwardRef)(function (props, ref) {
    var _a;
    var sx = props.sx, src = props.src, ratio = props.ratio, onLoad = props.onLoad, effect = props.effect, _b = props.alt, alt = _b === void 0 ? '' : _b, slotProps = props.slotProps, className = props.className, viewportOptions = props.viewportOptions, disablePlaceholder = props.disablePlaceholder, _c = props.visibleByDefault, visibleByDefault = _c === void 0 ? false : _c, _d = props.delayTime, delayTime = _d === void 0 ? DEFAULT_DELAY : _d, other = __rest(props, ["sx", "src", "ratio", "onLoad", "effect", "alt", "slotProps", "className", "viewportOptions", "disablePlaceholder", "visibleByDefault", "delayTime"]);
    var localRef = (0, react_1.useRef)(null);
    var _e = (0, react_1.useState)(false), isLoaded = _e[0], setIsLoaded = _e[1];
    var isInView = (0, framer_motion_1.useInView)(localRef, __assign({ once: true }, viewportOptions));
    var handleImageLoad = (0, react_1.useCallback)(function () {
        var timer = setTimeout(function () {
            (0, react_1.startTransition)(function () {
                setIsLoaded(true);
                onLoad === null || onLoad === void 0 ? void 0 : onLoad();
            });
        }, delayTime);
        return function () { return clearTimeout(timer); };
    }, [delayTime, onLoad]);
    var finalEffect = __assign(__assign({}, DEFAULT_EFFECT), effect);
    var shouldRenderImage = visibleByDefault || isInView;
    var showPlaceholder = !visibleByDefault && !isLoaded && !disablePlaceholder;
    return ((0, jsx_runtime_1.jsxs)(styles_1.ImageRoot, __assign({ ref: (0, merge_classes_1.mergeRefs)([localRef, ref]), effect: visibleByDefault || finalEffect.disabled ? undefined : finalEffect, className: (0, merge_classes_1.mergeClasses)([classes_1.imageClasses.root, className], (_a = {},
            _a[classes_1.imageClasses.state.loaded] = !visibleByDefault && isLoaded,
            _a)), sx: __spreadArray([
            __assign({ '--aspect-ratio': ratio }, (!!ratio && { width: 1 }))
        ], (Array.isArray(sx) ? sx : [sx]), true) }, other, { children: [(slotProps === null || slotProps === void 0 ? void 0 : slotProps.overlay) && ((0, jsx_runtime_1.jsx)(styles_1.ImageOverlay, __assign({ className: classes_1.imageClasses.overlay }, slotProps.overlay))), showPlaceholder && ((0, jsx_runtime_1.jsx)(styles_1.ImagePlaceholder, __assign({ className: classes_1.imageClasses.placeholder }, slotProps === null || slotProps === void 0 ? void 0 : slotProps.placeholder))), shouldRenderImage && ((0, jsx_runtime_1.jsx)(styles_1.ImageImg, __assign({ src: src, alt: alt, onLoad: handleImageLoad, className: classes_1.imageClasses.img }, slotProps === null || slotProps === void 0 ? void 0 : slotProps.img)))] })));
});

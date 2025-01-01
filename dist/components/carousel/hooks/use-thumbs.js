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
exports.useThumbs = useThumbs;
var embla_carousel_react_1 = __importDefault(require("embla-carousel-react"));
var react_1 = require("react");
// ----------------------------------------------------------------------
function useThumbs(mainApi, options) {
    var _a = (0, embla_carousel_react_1.default)(__assign({ containScroll: 'keepSnaps', dragFree: true }, options)), thumbsRef = _a[0], thumbsApi = _a[1];
    var _b = (0, react_1.useState)(0), selectedIndex = _b[0], setSelectedIndex = _b[1];
    var onClickThumb = (0, react_1.useCallback)(function (index) {
        if (!mainApi || !thumbsApi)
            return;
        mainApi.scrollTo(index);
    }, [mainApi, thumbsApi]);
    var onSelect = (0, react_1.useCallback)(function () {
        if (!mainApi || !thumbsApi)
            return;
        setSelectedIndex(mainApi.selectedScrollSnap());
        thumbsApi.scrollTo(mainApi.selectedScrollSnap());
    }, [mainApi, thumbsApi, setSelectedIndex]);
    (0, react_1.useEffect)(function () {
        if (!mainApi)
            return;
        onSelect();
        mainApi.on('select', onSelect);
        mainApi.on('reInit', onSelect);
    }, [mainApi, onSelect]);
    return {
        onClickThumb: onClickThumb,
        thumbsRef: thumbsRef,
        thumbsApi: thumbsApi,
        selectedIndex: selectedIndex,
    };
}

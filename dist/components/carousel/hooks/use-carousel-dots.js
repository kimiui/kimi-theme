'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCarouselDots = useCarouselDots;
var react_1 = require("react");
// ----------------------------------------------------------------------
function useCarouselDots(mainApi) {
    var _a = (0, react_1.useState)(0), dotCount = _a[0], setDotCount = _a[1];
    var _b = (0, react_1.useState)(0), selectedIndex = _b[0], setSelectedIndex = _b[1];
    var _c = (0, react_1.useState)([]), scrollSnaps = _c[0], setScrollSnaps = _c[1];
    var onClickDot = (0, react_1.useCallback)(function (index) {
        if (!mainApi)
            return;
        mainApi.scrollTo(index);
    }, [mainApi]);
    var onInit = (0, react_1.useCallback)(function (_mainApi) {
        setScrollSnaps(_mainApi.scrollSnapList());
    }, []);
    var onSelect = (0, react_1.useCallback)(function (_mainApi) {
        setSelectedIndex(_mainApi.selectedScrollSnap());
        setDotCount(_mainApi.scrollSnapList().length);
    }, []);
    (0, react_1.useEffect)(function () {
        if (!mainApi)
            return;
        onInit(mainApi);
        onSelect(mainApi);
        mainApi.on('reInit', onInit);
        mainApi.on('reInit', onSelect);
        mainApi.on('select', onSelect);
    }, [mainApi, onInit, onSelect]);
    return {
        dotCount: dotCount,
        scrollSnaps: scrollSnaps,
        selectedIndex: selectedIndex,
        onClickDot: onClickDot,
    };
}

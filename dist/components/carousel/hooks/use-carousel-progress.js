'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCarouselProgress = useCarouselProgress;
var react_1 = require("react");
// ----------------------------------------------------------------------
function useCarouselProgress(mainApi) {
    var _a = (0, react_1.useState)(0), scrollProgress = _a[0], setScrollProgress = _a[1];
    var onScroll = (0, react_1.useCallback)(function (_mainApi) {
        var progress = Math.max(0, Math.min(1, _mainApi.scrollProgress()));
        setScrollProgress(progress * 100);
    }, []);
    (0, react_1.useEffect)(function () {
        if (!mainApi)
            return;
        onScroll(mainApi);
        mainApi.on('reInit', onScroll);
        mainApi.on('scroll', onScroll);
    }, [mainApi, onScroll]);
    return { value: scrollProgress };
}

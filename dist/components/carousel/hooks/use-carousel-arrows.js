'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCarouselArrows = void 0;
var react_1 = require("react");
// ----------------------------------------------------------------------
var useCarouselArrows = function (mainApi) {
    var _a = (0, react_1.useState)(true), disablePrev = _a[0], setDisabledPrevBtn = _a[1];
    var _b = (0, react_1.useState)(true), disableNext = _b[0], setDisabledNextBtn = _b[1];
    var onClickPrev = (0, react_1.useCallback)(function () {
        if (!mainApi)
            return;
        mainApi.scrollPrev();
    }, [mainApi]);
    var onClickNext = (0, react_1.useCallback)(function () {
        if (!mainApi)
            return;
        mainApi.scrollNext();
    }, [mainApi]);
    var onSelect = (0, react_1.useCallback)(function (_mainApi) {
        setDisabledPrevBtn(!_mainApi.canScrollPrev());
        setDisabledNextBtn(!_mainApi.canScrollNext());
    }, []);
    (0, react_1.useEffect)(function () {
        if (!mainApi)
            return;
        onSelect(mainApi);
        mainApi.on('reInit', onSelect);
        mainApi.on('select', onSelect);
    }, [mainApi, onSelect]);
    return {
        disablePrev: disablePrev,
        disableNext: disableNext,
        onClickPrev: onClickPrev,
        onClickNext: onClickNext,
    };
};
exports.useCarouselArrows = useCarouselArrows;

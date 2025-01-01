'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCarouselAutoPlay = useCarouselAutoPlay;
var react_1 = require("react");
// ----------------------------------------------------------------------
function useCarouselAutoPlay(mainApi) {
    var _a = (0, react_1.useState)(false), isPlaying = _a[0], setIsPlaying = _a[1];
    var onClickAutoplay = (0, react_1.useCallback)(function (callback) {
        var _a;
        var autoplay = (_a = mainApi === null || mainApi === void 0 ? void 0 : mainApi.plugins()) === null || _a === void 0 ? void 0 : _a.autoplay;
        if (!autoplay)
            return;
        var resetOrStop = (autoplay.options.stopOnInteraction === false
            ? autoplay.reset
            : autoplay.stop);
        resetOrStop();
        callback();
    }, [mainApi]);
    var onTogglePlay = (0, react_1.useCallback)(function () {
        var _a;
        var autoplay = (_a = mainApi === null || mainApi === void 0 ? void 0 : mainApi.plugins()) === null || _a === void 0 ? void 0 : _a.autoplay;
        if (!autoplay)
            return;
        var playOrStop = autoplay.isPlaying() ? autoplay.stop : autoplay.play;
        playOrStop();
    }, [mainApi]);
    (0, react_1.useEffect)(function () {
        var _a;
        if (!mainApi)
            return;
        var autoplay = (_a = mainApi === null || mainApi === void 0 ? void 0 : mainApi.plugins()) === null || _a === void 0 ? void 0 : _a.autoplay;
        if (!autoplay)
            return;
        setIsPlaying(autoplay.isPlaying());
        mainApi
            .on('autoplay:play', function () { return setIsPlaying(true); })
            .on('autoplay:stop', function () { return setIsPlaying(false); })
            .on('reInit', function () { return setIsPlaying(false); });
    }, [mainApi]);
    return { isPlaying: isPlaying, onTogglePlay: onTogglePlay, onClickAutoplay: onClickAutoplay };
}

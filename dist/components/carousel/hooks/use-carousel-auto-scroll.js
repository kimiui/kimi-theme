'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCarouselAutoScroll = useCarouselAutoScroll;
var react_1 = require("react");
// ----------------------------------------------------------------------
function useCarouselAutoScroll(mainApi) {
    var _a = (0, react_1.useState)(false), isPlaying = _a[0], setIsPlaying = _a[1];
    var onClickAutoplay = (0, react_1.useCallback)(function (callback) {
        var _a;
        var autoScroll = (_a = mainApi === null || mainApi === void 0 ? void 0 : mainApi.plugins()) === null || _a === void 0 ? void 0 : _a.autoScroll;
        if (!autoScroll)
            return;
        var resetOrStop = (autoScroll.options.stopOnInteraction === false
            ? autoScroll.reset
            : autoScroll.stop);
        resetOrStop();
        callback();
    }, [mainApi]);
    var onTogglePlay = (0, react_1.useCallback)(function () {
        var _a;
        var autoScroll = (_a = mainApi === null || mainApi === void 0 ? void 0 : mainApi.plugins()) === null || _a === void 0 ? void 0 : _a.autoScroll;
        if (!autoScroll)
            return;
        var playOrStop = autoScroll.isPlaying() ? autoScroll.stop : autoScroll.play;
        playOrStop();
    }, [mainApi]);
    (0, react_1.useEffect)(function () {
        var _a;
        if (!mainApi)
            return;
        var autoScroll = (_a = mainApi === null || mainApi === void 0 ? void 0 : mainApi.plugins()) === null || _a === void 0 ? void 0 : _a.autoScroll;
        if (!autoScroll)
            return;
        setIsPlaying(autoScroll.isPlaying());
        mainApi
            .on('autoScroll:play', function () { return setIsPlaying(true); })
            .on('autoScroll:stop', function () { return setIsPlaying(false); })
            .on('reInit', function () { return setIsPlaying(false); });
    }, [mainApi]);
    return { isPlaying: isPlaying, onTogglePlay: onTogglePlay, onClickAutoplay: onClickAutoplay };
}

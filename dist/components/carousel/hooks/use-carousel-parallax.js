'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useParallax = useParallax;
var react_1 = require("react");
// ----------------------------------------------------------------------
function useParallax(mainApi, parallax) {
    var tweenFactor = (0, react_1.useRef)(0);
    var tweenNodes = (0, react_1.useRef)([]);
    var TWEEN_FACTOR_BASE = typeof parallax === 'number' ? parallax : 0.24;
    var setTweenNodes = (0, react_1.useCallback)(function (_mainApi) {
        tweenNodes.current = _mainApi
            .slideNodes()
            .map(function (slideNode) { return slideNode.querySelector('.slide__parallax__layer'); });
    }, []);
    var setTweenFactor = (0, react_1.useCallback)(function (_mainApi) {
        tweenFactor.current = TWEEN_FACTOR_BASE * _mainApi.scrollSnapList().length;
    }, [TWEEN_FACTOR_BASE]);
    var tweenParallax = (0, react_1.useCallback)(function (_mainApi, eventName) {
        var engine = _mainApi.internalEngine();
        var scrollProgress = _mainApi.scrollProgress();
        var slidesInView = _mainApi.slidesInView();
        var isScrollEvent = eventName === 'scroll';
        _mainApi.scrollSnapList().forEach(function (scrollSnap, snapIndex) {
            var diffToTarget = scrollSnap - scrollProgress;
            var slidesInSnap = engine.slideRegistry[snapIndex];
            slidesInSnap.forEach(function (slideIndex) {
                if (isScrollEvent && !slidesInView.includes(slideIndex))
                    return;
                if (engine.options.loop) {
                    engine.slideLooper.loopPoints.forEach(function (loopItem) {
                        var target = loopItem.target();
                        if (slideIndex === loopItem.index && target !== 0) {
                            var sign = Math.sign(target);
                            if (sign === -1) {
                                diffToTarget = scrollSnap - (1 + scrollProgress);
                            }
                            if (sign === 1) {
                                diffToTarget = scrollSnap + (1 - scrollProgress);
                            }
                        }
                    });
                }
                var translateValue = diffToTarget * (-1 * tweenFactor.current) * 100;
                var tweenNode = tweenNodes.current[slideIndex];
                if (tweenNode) {
                    tweenNode.style.transform = "translateX(".concat(translateValue, "%)");
                }
            });
        });
    }, []);
    (0, react_1.useEffect)(function () {
        if (!mainApi || !parallax)
            return;
        setTweenNodes(mainApi);
        setTweenFactor(mainApi);
        tweenParallax(mainApi);
        mainApi
            .on('reInit', setTweenNodes)
            .on('reInit', setTweenFactor)
            .on('reInit', tweenParallax)
            .on('scroll', tweenParallax);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mainApi, tweenParallax]);
    return null;
}

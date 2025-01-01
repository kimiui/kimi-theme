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
exports.useCarousel = void 0;
var react_1 = require("react");
var embla_carousel_react_1 = __importDefault(require("embla-carousel-react"));
var use_thumbs_1 = require("./use-thumbs");
var use_carousel_dots_1 = require("./use-carousel-dots");
var use_carousel_parallax_1 = require("./use-carousel-parallax");
var use_carousel_arrows_1 = require("./use-carousel-arrows");
var use_carousel_progress_1 = require("./use-carousel-progress");
var use_carousel_auto_play_1 = require("./use-carousel-auto-play");
var use_carousel_auto_scroll_1 = require("./use-carousel-auto-scroll");
// ----------------------------------------------------------------------
var useCarousel = function (options, plugins) {
    var _a = (0, embla_carousel_react_1.default)(options, plugins), mainRef = _a[0], mainApi = _a[1];
    var _b = (0, use_carousel_arrows_1.useCarouselArrows)(mainApi), disablePrev = _b.disablePrev, disableNext = _b.disableNext, onClickPrev = _b.onClickPrev, onClickNext = _b.onClickNext;
    var pluginNames = plugins === null || plugins === void 0 ? void 0 : plugins.map(function (plugin) { return plugin.name; });
    var _dots = (0, use_carousel_dots_1.useCarouselDots)(mainApi);
    var _autoplay = (0, use_carousel_auto_play_1.useCarouselAutoPlay)(mainApi);
    var _autoScroll = (0, use_carousel_auto_scroll_1.useCarouselAutoScroll)(mainApi);
    var _progress = (0, use_carousel_progress_1.useCarouselProgress)(mainApi);
    var _thumbs = (0, use_thumbs_1.useThumbs)(mainApi, options === null || options === void 0 ? void 0 : options.thumbs);
    (0, use_carousel_parallax_1.useParallax)(mainApi, options === null || options === void 0 ? void 0 : options.parallax);
    var controls = (0, react_1.useMemo)(function () {
        if (pluginNames === null || pluginNames === void 0 ? void 0 : pluginNames.includes('autoplay')) {
            return {
                onClickPrev: function () { return _autoplay.onClickAutoplay(onClickPrev); },
                onClickNext: function () { return _autoplay.onClickAutoplay(onClickNext); },
            };
        }
        if (pluginNames === null || pluginNames === void 0 ? void 0 : pluginNames.includes('autoScroll')) {
            return {
                onClickPrev: function () { return _autoScroll.onClickAutoplay(onClickPrev); },
                onClickNext: function () { return _autoScroll.onClickAutoplay(onClickNext); },
            };
        }
        return {
            onClickPrev: onClickPrev,
            onClickNext: onClickNext,
        };
    }, [_autoScroll, _autoplay, onClickNext, onClickPrev, pluginNames]);
    return {
        options: __assign(__assign({}, options), mainApi === null || mainApi === void 0 ? void 0 : mainApi.internalEngine().options),
        pluginNames: pluginNames,
        mainRef: mainRef,
        mainApi: mainApi,
        // arrows
        arrows: {
            disablePrev: disablePrev,
            disableNext: disableNext,
            onClickPrev: controls.onClickPrev,
            onClickNext: controls.onClickNext,
        },
        // dots
        dots: _dots,
        // thumbs
        thumbs: _thumbs,
        // progress
        progress: _progress,
        // autoplay
        autoplay: _autoplay,
        autoScroll: _autoScroll,
    };
};
exports.useCarousel = useCarousel;

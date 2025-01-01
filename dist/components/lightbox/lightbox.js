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
exports.Lightbox = Lightbox;
exports.getPlugins = getPlugins;
exports.DisplayTotal = DisplayTotal;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var zoom_1 = __importDefault(require("yet-another-react-lightbox/plugins/zoom"));
var video_1 = __importDefault(require("yet-another-react-lightbox/plugins/video"));
var captions_1 = __importDefault(require("yet-another-react-lightbox/plugins/captions"));
var slideshow_1 = __importDefault(require("yet-another-react-lightbox/plugins/slideshow"));
var fullscreen_1 = __importDefault(require("yet-another-react-lightbox/plugins/fullscreen"));
var thumbnails_1 = __importDefault(require("yet-another-react-lightbox/plugins/thumbnails"));
var yet_another_react_lightbox_1 = __importStar(require("yet-another-react-lightbox"));
var iconify_1 = require("../iconify");
var classes_1 = require("./classes");
// ----------------------------------------------------------------------
function Lightbox(_a) {
    var slides = _a.slides, disableZoom = _a.disableZoom, disableVideo = _a.disableVideo, disableTotal = _a.disableTotal, disableCaptions = _a.disableCaptions, disableSlideshow = _a.disableSlideshow, disableThumbnails = _a.disableThumbnails, disableFullscreen = _a.disableFullscreen, onGetCurrentIndex = _a.onGetCurrentIndex, other = __rest(_a, ["slides", "disableZoom", "disableVideo", "disableTotal", "disableCaptions", "disableSlideshow", "disableThumbnails", "disableFullscreen", "onGetCurrentIndex"]);
    var totalItems = slides ? slides.length : 0;
    return ((0, jsx_runtime_1.jsx)(yet_another_react_lightbox_1.default, __assign({ slides: slides, animation: { swipe: 240 }, carousel: { finite: totalItems < 5 }, controller: { closeOnBackdropClick: true }, plugins: getPlugins({
            disableZoom: disableZoom,
            disableVideo: disableVideo,
            disableCaptions: disableCaptions,
            disableSlideshow: disableSlideshow,
            disableThumbnails: disableThumbnails,
            disableFullscreen: disableFullscreen,
        }), on: {
            view: function (_a) {
                var index = _a.index;
                if (onGetCurrentIndex) {
                    onGetCurrentIndex(index);
                }
            },
        }, toolbar: {
            buttons: [
                (0, jsx_runtime_1.jsx)(DisplayTotal, { totalItems: totalItems, disableTotal: disableTotal }, 0),
                'close',
            ],
        }, render: {
            iconClose: function () { return (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { width: 24, icon: "carbon:close" }); },
            iconZoomIn: function () { return (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { width: 24, icon: "carbon:zoom-in" }); },
            iconZoomOut: function () { return (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { width: 24, icon: "carbon:zoom-out" }); },
            iconSlideshowPlay: function () { return (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { width: 24, icon: "carbon:play" }); },
            iconSlideshowPause: function () { return (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { width: 24, icon: "carbon:pause" }); },
            iconPrev: function () { return (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { width: 32, icon: "carbon:chevron-left" }); },
            iconNext: function () { return (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { width: 32, icon: "carbon:chevron-right" }); },
            iconExitFullscreen: function () { return (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { width: 24, icon: "carbon:center-to-fit" }); },
            iconEnterFullscreen: function () { return (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { width: 24, icon: "carbon:fit-to-screen" }); },
        }, className: classes_1.lightboxClasses.root }, other)));
}
// ----------------------------------------------------------------------
function getPlugins(_a) {
    var disableZoom = _a.disableZoom, disableVideo = _a.disableVideo, disableCaptions = _a.disableCaptions, disableSlideshow = _a.disableSlideshow, disableThumbnails = _a.disableThumbnails, disableFullscreen = _a.disableFullscreen;
    var plugins = [captions_1.default, fullscreen_1.default, slideshow_1.default, thumbnails_1.default, video_1.default, zoom_1.default];
    if (disableThumbnails) {
        plugins = plugins.filter(function (plugin) { return plugin !== thumbnails_1.default; });
    }
    if (disableCaptions) {
        plugins = plugins.filter(function (plugin) { return plugin !== captions_1.default; });
    }
    if (disableFullscreen) {
        plugins = plugins.filter(function (plugin) { return plugin !== fullscreen_1.default; });
    }
    if (disableSlideshow) {
        plugins = plugins.filter(function (plugin) { return plugin !== slideshow_1.default; });
    }
    if (disableZoom) {
        plugins = plugins.filter(function (plugin) { return plugin !== zoom_1.default; });
    }
    if (disableVideo) {
        plugins = plugins.filter(function (plugin) { return plugin !== video_1.default; });
    }
    return plugins;
}
function DisplayTotal(_a) {
    var totalItems = _a.totalItems, disableTotal = _a.disableTotal;
    var currentIndex = (0, yet_another_react_lightbox_1.useLightboxState)().currentIndex;
    if (disableTotal) {
        return null;
    }
    return ((0, jsx_runtime_1.jsxs)(Box_1.default, { component: "span", className: "yarl__button", sx: {
            typography: 'body2',
            alignItems: 'center',
            display: 'inline-flex',
            justifyContent: 'center',
        }, children: [(0, jsx_runtime_1.jsxs)("strong", { children: [" ", currentIndex + 1, " "] }), " / ", totalItems] }));
}

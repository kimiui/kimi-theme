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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LightboxView = LightboxView;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Card_1 = __importDefault(require("@mui/material/Card"));
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var Switch_1 = __importDefault(require("@mui/material/Switch"));
var FormLabel_1 = __importDefault(require("@mui/material/FormLabel"));
var FormControl_1 = __importDefault(require("@mui/material/FormControl"));
var FormControlLabel_1 = __importDefault(require("@mui/material/FormControlLabel"));
var _mock_1 = require("lib/_mock");
var paths_1 = require("lib/routes/paths");
var image_1 = require("lib/components/image");
var lightbox_1 = require("lib/components/lightbox");
var custom_breadcrumbs_1 = require("lib/components/custom-breadcrumbs");
var component_hero_1 = require("../../component-hero");
var component_block_1 = require("../../component-block");
// ----------------------------------------------------------------------
var images = __spreadArray([], Array(4), true).map(function (_, index) { return ({
    src: _mock_1._mock.image.cover(index + 1),
    title: 'Flamingo',
    description: 'Vicko Mozara \n Veliki zali, Dubravica, Croatia',
}); });
var slides = __spreadArray(__spreadArray([], images, true), [
    {
        type: 'video',
        width: 1280,
        height: 720,
        poster: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
        sources: [
            {
                src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                type: 'video/mp4',
            },
        ],
    },
], false);
// ----------------------------------------------------------------------
function LightboxView() {
    var lightbox = (0, lightbox_1.useLightBox)(slides);
    var _a = (0, react_1.useState)({
        disableZoom: false,
        disableVideo: false,
        disableTotal: false,
        disableCaptions: false,
        disableSlideshow: false,
        disableThumbnails: false,
        disableFullscreen: false,
    }), state = _a[0], setState = _a[1];
    var handleChange = function (event) {
        var _a;
        setState(__assign(__assign({}, state), (_a = {}, _a[event.target.name] = event.target.checked, _a)));
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(component_hero_1.ComponentHero, { children: (0, jsx_runtime_1.jsx)(custom_breadcrumbs_1.CustomBreadcrumbs, { heading: "Lightbox", links: [{ name: 'Components', href: paths_1.paths.docs.components.root }, { name: 'Lightbox' }], moreLink: ['https://www.npmjs.com/package/yet-another-react-lightbox'] }) }), (0, jsx_runtime_1.jsx)(component_block_1.ComponentContainer, { children: (0, jsx_runtime_1.jsxs)(Card_1.default, { sx: { display: 'flex' }, children: [(0, jsx_runtime_1.jsx)(Box_1.default, { gap: 2, display: "grid", gridTemplateColumns: {
                                xs: 'repeat(2, 1fr)',
                                sm: 'repeat(3, 1fr)',
                                md: 'repeat(4, 1fr)',
                            }, sx: { p: 3 }, children: slides.map(function (slide) {
                                var thumbnail = slide.type === 'video' ? slide.poster : slide.src;
                                return ((0, jsx_runtime_1.jsx)(image_1.Image, { alt: thumbnail, src: thumbnail, ratio: "1/1", onClick: function () { return lightbox.onOpen("".concat(thumbnail)); }, sx: { borderRadius: 1, cursor: 'pointer', width: 200 } }, thumbnail));
                            }) }), (0, jsx_runtime_1.jsx)(Stack_1.default, { sx: {
                                p: 2.5,
                                width: 320,
                                flexShrink: 0,
                                borderLeft: function (theme) { return "solid 1px ".concat(theme.vars.palette.divider); },
                            }, children: (0, jsx_runtime_1.jsx)(FormControl_1.default, { component: "fieldset", variant: "standard", children: (0, jsx_runtime_1.jsxs)(Stack_1.default, { spacing: 2, children: [(0, jsx_runtime_1.jsx)(FormLabel_1.default, { component: "legend", sx: { typography: 'body2' }, children: "Controls" }), (0, jsx_runtime_1.jsx)(FormControlLabel_1.default, { control: (0, jsx_runtime_1.jsx)(Switch_1.default, { size: "small", name: "disableZoom", checked: state.disableZoom, onChange: handleChange }), label: "Disable zoom" }), (0, jsx_runtime_1.jsx)(FormControlLabel_1.default, { control: (0, jsx_runtime_1.jsx)(Switch_1.default, { size: "small", name: "disableTotal", checked: state.disableTotal, onChange: handleChange }), label: "Disable total" }), (0, jsx_runtime_1.jsx)(FormControlLabel_1.default, { control: (0, jsx_runtime_1.jsx)(Switch_1.default, { size: "small", name: "disableVideo", checked: state.disableVideo, onChange: handleChange }), label: "Disable video" }), (0, jsx_runtime_1.jsx)(FormControlLabel_1.default, { control: (0, jsx_runtime_1.jsx)(Switch_1.default, { size: "small", name: "disableCaptions", checked: state.disableCaptions, onChange: handleChange }), label: "Disable captions" }), (0, jsx_runtime_1.jsx)(FormControlLabel_1.default, { control: (0, jsx_runtime_1.jsx)(Switch_1.default, { size: "small", name: "disableSlideshow", checked: state.disableSlideshow, onChange: handleChange }), label: "Disable slideshow" }), (0, jsx_runtime_1.jsx)(FormControlLabel_1.default, { control: (0, jsx_runtime_1.jsx)(Switch_1.default, { size: "small", name: "disableThumbnails", checked: state.disableThumbnails, onChange: handleChange }), label: "Disable thumbnails" }), (0, jsx_runtime_1.jsx)(FormControlLabel_1.default, { control: (0, jsx_runtime_1.jsx)(Switch_1.default, { size: "small", name: "disableFullscreen", checked: state.disableFullscreen, onChange: handleChange }), label: "Disable fullscreen" })] }) }) })] }) }), (0, jsx_runtime_1.jsx)(lightbox_1.Lightbox, { open: lightbox.open, close: lightbox.onClose, slides: slides, index: lightbox.selected, disableZoom: state.disableZoom, disableTotal: state.disableTotal, disableVideo: state.disableVideo, disableCaptions: state.disableCaptions, disableSlideshow: state.disableSlideshow, disableThumbnails: state.disableThumbnails, disableFullscreen: state.disableFullscreen })] }));
}

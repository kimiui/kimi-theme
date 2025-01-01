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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImagePlaceholder = exports.ImageOverlay = exports.ImageImg = exports.ImageRoot = void 0;
var styles_1 = require("@mui/material/styles");
var classes_1 = require("./classes");
// ----------------------------------------------------------------------
var placeholderImage = 'data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgPHJhZGlhbEdyYWRpZW50IGlkPSJhIiBjeD0iNTAlIiBjeT0iNDYuODAxMTAyJSIgcj0iOTUuNDk3MTEyJSI+CiAgICA8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMCIgLz4KICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzkxOWVhYiIgc3RvcC1vcGFjaXR5PSIuNDgiIC8+CiAgPC9yYWRpYWxHcmFkaWVudD4KICA8cGF0aCBkPSJtODggODZoNTEydjUxMmgtNTEyeiIgZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtODggLTg2KSIgLz4KPC9zdmc+Cg==';
var sharedStyles = {
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'inherit',
    aspectRatio: 'inherit',
    borderRadius: 'inherit',
};
exports.ImageRoot = (0, styles_1.styled)('span', {
    shouldForwardProp: function (prop) { return !['effect', 'sx', 'className'].includes(prop); },
})(function (_a) {
    var effect = _a.effect;
    return (__assign({ maxWidth: '100%', overflow: 'hidden', position: 'relative', display: 'inline-block', verticalAlign: 'bottom', aspectRatio: 'var(--aspect-ratio)' }, (effect && getEffectStyles(effect))));
});
exports.ImageImg = (0, styles_1.styled)('img')(__assign(__assign({}, sharedStyles), { objectFit: 'cover' }));
exports.ImageOverlay = (0, styles_1.styled)('span')(__assign(__assign({}, sharedStyles), { zIndex: 1, position: 'absolute' }));
exports.ImagePlaceholder = (0, styles_1.styled)('span')(__assign(__assign({}, sharedStyles), { content: '""', position: 'absolute', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundImage: "url(".concat(placeholderImage, ")") }));
var getEffectStyles = function (effect) {
    var _a;
    var _b = effect !== null && effect !== void 0 ? effect : {}, style = _b.style, duration = _b.duration;
    var transition = style === 'opacity'
        ? "opacity ".concat(duration, "ms")
        : "opacity ".concat(Number(duration) / 2, "ms, filter ").concat(duration, "ms");
    return _a = {},
        _a["& .".concat(classes_1.imageClasses.img)] = __assign(__assign(__assign({ transition: transition }, (style === 'opacity' && { opacity: 0 })), (style === 'blur' && { filter: 'blur(12px)', opacity: 0 })), (style === 'black-and-white' && { filter: 'grayscale(1)', opacity: 0 })),
        _a["&.".concat(classes_1.imageClasses.state.loaded, " .").concat(classes_1.imageClasses.img)] = __assign(__assign(__assign({}, (style === 'opacity' && { opacity: 1 })), (style === 'blur' && { filter: 'blur(0)', opacity: 1 })), (style === 'black-and-white' && { filter: 'grayscale(0)', opacity: 1 })),
        _a;
};

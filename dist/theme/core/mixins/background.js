"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bgGradient = bgGradient;
exports.bgBlur = bgBlur;
function bgGradient(_a) {
    var _b, _c, _d;
    var sizes = _a.sizes, repeats = _a.repeats, images = _a.images, positions = _a.positions;
    return {
        backgroundImage: images === null || images === void 0 ? void 0 : images.join(', '),
        backgroundSize: (_b = sizes === null || sizes === void 0 ? void 0 : sizes.join(', ')) !== null && _b !== void 0 ? _b : 'cover',
        backgroundRepeat: (_c = repeats === null || repeats === void 0 ? void 0 : repeats.join(', ')) !== null && _c !== void 0 ? _c : 'no-repeat',
        backgroundPosition: (_d = positions === null || positions === void 0 ? void 0 : positions.join(', ')) !== null && _d !== void 0 ? _d : 'center',
    };
}
function bgBlur(_a) {
    var color = _a.color, _b = _a.blur, blur = _b === void 0 ? 6 : _b, imgUrl = _a.imgUrl;
    if (imgUrl) {
        return {
            position: 'relative',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundImage: "url(".concat(imgUrl, ")"),
            '&::before': {
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 9,
                content: '""',
                width: '100%',
                height: '100%',
                backdropFilter: "blur(".concat(blur, "px)"),
                WebkitBackdropFilter: "blur(".concat(blur, "px)"),
                backgroundColor: color,
            },
        };
    }
    return {
        backdropFilter: "blur(".concat(blur, "px)"),
        WebkitBackdropFilter: "blur(".concat(blur, "px)"),
        backgroundColor: color,
    };
}

"use strict";
// ----------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
exports.varHover = void 0;
var varHover = function (hover, tap) {
    if (hover === void 0) { hover = 1.09; }
    if (tap === void 0) { tap = 0.97; }
    return ({
        hover: { scale: hover },
        tap: { scale: tap },
    });
};
exports.varHover = varHover;

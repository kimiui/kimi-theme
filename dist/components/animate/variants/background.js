"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.varBgPan = exports.varBgKenburns = exports.varBgColor = void 0;
// ----------------------------------------------------------------------
var varBgColor = function (props) {
    var colors = (props === null || props === void 0 ? void 0 : props.colors) || ['#19dcea', '#b22cff'];
    var duration = (props === null || props === void 0 ? void 0 : props.duration) || 5;
    var ease = (props === null || props === void 0 ? void 0 : props.ease) || 'linear';
    return { animate: { background: colors, transition: { duration: duration, ease: ease } } };
};
exports.varBgColor = varBgColor;
// ----------------------------------------------------------------------
var varBgKenburns = function (props) {
    var duration = (props === null || props === void 0 ? void 0 : props.duration) || 5;
    var ease = (props === null || props === void 0 ? void 0 : props.ease) || 'easeOut';
    return {
        top: {
            animate: {
                scale: [1, 1.25],
                y: [0, -15],
                transformOrigin: ['50% 16%', '50% top'],
                transition: { duration: duration, ease: ease },
            },
        },
        bottom: {
            animate: {
                scale: [1, 1.25],
                y: [0, 15],
                transformOrigin: ['50% 84%', '50% bottom'],
                transition: { duration: duration, ease: ease },
            },
        },
        left: {
            animate: {
                scale: [1, 1.25],
                x: [0, 20],
                y: [0, 15],
                transformOrigin: ['16% 50%', '0% left'],
                transition: { duration: duration, ease: ease },
            },
        },
        right: {
            animate: {
                scale: [1, 1.25],
                x: [0, -20],
                y: [0, -15],
                transformOrigin: ['84% 50%', '0% right'],
                transition: { duration: duration, ease: ease },
            },
        },
    };
};
exports.varBgKenburns = varBgKenburns;
// ----------------------------------------------------------------------
var varBgPan = function (props) {
    var colors = (props === null || props === void 0 ? void 0 : props.colors) || ['#ee7752', '#e73c7e', '#23a6d5', '#23d5ab'];
    var duration = (props === null || props === void 0 ? void 0 : props.duration) || 5;
    var ease = (props === null || props === void 0 ? void 0 : props.ease) || 'linear';
    var gradient = function (deg) { return "linear-gradient(".concat(deg, "deg, ").concat(colors, ")"); };
    return {
        top: {
            animate: {
                backgroundImage: [gradient(0), gradient(0)],
                backgroundPosition: ['center 99%', 'center 1%'],
                backgroundSize: ['100% 600%', '100% 600%'],
                transition: { duration: duration, ease: ease },
            },
        },
        right: {
            animate: {
                backgroundPosition: ['1% center', '99% center'],
                backgroundImage: [gradient(270), gradient(270)],
                backgroundSize: ['600% 100%', '600% 100%'],
                transition: { duration: duration, ease: ease },
            },
        },
        bottom: {
            animate: {
                backgroundImage: [gradient(0), gradient(0)],
                backgroundPosition: ['center 1%', 'center 99%'],
                backgroundSize: ['100% 600%', '100% 600%'],
                transition: { duration: duration, ease: ease },
            },
        },
        left: {
            animate: {
                backgroundPosition: ['99% center', '1% center'],
                backgroundImage: [gradient(270), gradient(270)],
                backgroundSize: ['600% 100%', '600% 100%'],
                transition: { duration: duration, ease: ease },
            },
        },
    };
};
exports.varBgPan = varBgPan;

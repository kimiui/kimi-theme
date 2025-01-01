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
exports.varBounce = void 0;
var transition_1 = require("./transition");
// ----------------------------------------------------------------------
var varBounce = function (props) {
    var durationIn = props === null || props === void 0 ? void 0 : props.durationIn;
    var durationOut = props === null || props === void 0 ? void 0 : props.durationOut;
    var easeIn = props === null || props === void 0 ? void 0 : props.easeIn;
    var easeOut = props === null || props === void 0 ? void 0 : props.easeOut;
    return {
        // IN
        in: {
            initial: {},
            animate: {
                scale: [0.3, 1.1, 0.9, 1.03, 0.97, 1],
                opacity: [0, 1, 1, 1, 1, 1],
                transition: (0, transition_1.varTranEnter)({ durationIn: durationIn, easeIn: easeIn }),
            },
            exit: { scale: [0.9, 1.1, 0.3], opacity: [1, 1, 0] },
        },
        inUp: {
            initial: {},
            animate: {
                y: [720, -24, 12, -4, 0],
                scaleY: [4, 0.9, 0.95, 0.985, 1],
                opacity: [0, 1, 1, 1, 1],
                transition: __assign({}, (0, transition_1.varTranEnter)({ durationIn: durationIn, easeIn: easeIn })),
            },
            exit: {
                y: [12, -24, 720],
                scaleY: [0.985, 0.9, 3],
                opacity: [1, 1, 0],
                transition: (0, transition_1.varTranExit)({ durationOut: durationOut, easeOut: easeOut }),
            },
        },
        inDown: {
            initial: {},
            animate: {
                y: [-720, 24, -12, 4, 0],
                scaleY: [4, 0.9, 0.95, 0.985, 1],
                opacity: [0, 1, 1, 1, 1],
                transition: (0, transition_1.varTranEnter)({ durationIn: durationIn, easeIn: easeIn }),
            },
            exit: {
                y: [-12, 24, -720],
                scaleY: [0.985, 0.9, 3],
                opacity: [1, 1, 0],
                transition: (0, transition_1.varTranExit)({ durationOut: durationOut, easeOut: easeOut }),
            },
        },
        inLeft: {
            initial: {},
            animate: {
                x: [-720, 24, -12, 4, 0],
                scaleX: [3, 1, 0.98, 0.995, 1],
                opacity: [0, 1, 1, 1, 1],
                transition: (0, transition_1.varTranEnter)({ durationIn: durationIn, easeIn: easeIn }),
            },
            exit: {
                x: [0, 24, -720],
                scaleX: [1, 0.9, 2],
                opacity: [1, 1, 0],
                transition: (0, transition_1.varTranExit)({ durationOut: durationOut, easeOut: easeOut }),
            },
        },
        inRight: {
            initial: {},
            animate: {
                x: [720, -24, 12, -4, 0],
                scaleX: [3, 1, 0.98, 0.995, 1],
                opacity: [0, 1, 1, 1, 1],
                transition: (0, transition_1.varTranEnter)({ durationIn: durationIn, easeIn: easeIn }),
            },
            exit: {
                x: [0, -24, 720],
                scaleX: [1, 0.9, 2],
                opacity: [1, 1, 0],
                transition: (0, transition_1.varTranExit)({ durationOut: durationOut, easeOut: easeOut }),
            },
        },
        // OUT
        out: { animate: { scale: [0.9, 1.1, 0.3], opacity: [1, 1, 0] } },
        outUp: { animate: { y: [-12, 24, -720], scaleY: [0.985, 0.9, 3], opacity: [1, 1, 0] } },
        outDown: { animate: { y: [12, -24, 720], scaleY: [0.985, 0.9, 3], opacity: [1, 1, 0] } },
        outLeft: { animate: { x: [0, 24, -720], scaleX: [1, 0.9, 2], opacity: [1, 1, 0] } },
        outRight: { animate: { x: [0, -24, 720], scaleX: [1, 0.9, 2], opacity: [1, 1, 0] } },
    };
};
exports.varBounce = varBounce;

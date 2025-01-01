"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.varZoom = void 0;
var transition_1 = require("./transition");
// ----------------------------------------------------------------------
var varZoom = function (props) {
    var distance = (props === null || props === void 0 ? void 0 : props.distance) || 720;
    var durationIn = props === null || props === void 0 ? void 0 : props.durationIn;
    var durationOut = props === null || props === void 0 ? void 0 : props.durationOut;
    var easeIn = props === null || props === void 0 ? void 0 : props.easeIn;
    var easeOut = props === null || props === void 0 ? void 0 : props.easeOut;
    return {
        // IN
        in: {
            initial: { scale: 0, opacity: 0 },
            animate: { scale: 1, opacity: 1, transition: (0, transition_1.varTranEnter)({ durationIn: durationIn, easeIn: easeIn }) },
            exit: { scale: 0, opacity: 0, transition: (0, transition_1.varTranExit)({ durationOut: durationOut, easeOut: easeOut }) },
        },
        inUp: {
            initial: { scale: 0, opacity: 0, translateY: distance },
            animate: {
                scale: 1,
                opacity: 1,
                translateY: 0,
                transition: (0, transition_1.varTranEnter)({ durationIn: durationIn, easeIn: easeIn }),
            },
            exit: {
                scale: 0,
                opacity: 0,
                translateY: distance,
                transition: (0, transition_1.varTranExit)({ durationOut: durationOut, easeOut: easeOut }),
            },
        },
        inDown: {
            initial: { scale: 0, opacity: 0, translateY: -distance },
            animate: {
                scale: 1,
                opacity: 1,
                translateY: 0,
                transition: (0, transition_1.varTranEnter)({ durationIn: durationIn, easeIn: easeIn }),
            },
            exit: {
                scale: 0,
                opacity: 0,
                translateY: -distance,
                transition: (0, transition_1.varTranExit)({ durationOut: durationOut, easeOut: easeOut }),
            },
        },
        inLeft: {
            initial: { scale: 0, opacity: 0, translateX: -distance },
            animate: {
                scale: 1,
                opacity: 1,
                translateX: 0,
                transition: (0, transition_1.varTranEnter)({ durationIn: durationIn, easeIn: easeIn }),
            },
            exit: {
                scale: 0,
                opacity: 0,
                translateX: -distance,
                transition: (0, transition_1.varTranExit)({ durationOut: durationOut, easeOut: easeOut }),
            },
        },
        inRight: {
            initial: { scale: 0, opacity: 0, translateX: distance },
            animate: {
                scale: 1,
                opacity: 1,
                translateX: 0,
                transition: (0, transition_1.varTranEnter)({ durationIn: durationIn, easeIn: easeIn }),
            },
            exit: {
                scale: 0,
                opacity: 0,
                translateX: distance,
                transition: (0, transition_1.varTranExit)({ durationOut: durationOut, easeOut: easeOut }),
            },
        },
        // OUT
        out: {
            initial: { scale: 1, opacity: 1 },
            animate: { scale: 0, opacity: 0, transition: (0, transition_1.varTranEnter)({ durationIn: durationIn, easeIn: easeIn }) },
        },
        outUp: {
            initial: { scale: 1, opacity: 1 },
            animate: {
                scale: 0,
                opacity: 0,
                translateY: -distance,
                transition: (0, transition_1.varTranEnter)({ durationIn: durationIn, easeIn: easeIn }),
            },
        },
        outDown: {
            initial: { scale: 1, opacity: 1 },
            animate: {
                scale: 0,
                opacity: 0,
                translateY: distance,
                transition: (0, transition_1.varTranEnter)({ durationIn: durationIn, easeIn: easeIn }),
            },
        },
        outLeft: {
            initial: { scale: 1, opacity: 1 },
            animate: {
                scale: 0,
                opacity: 0,
                translateX: -distance,
                transition: (0, transition_1.varTranEnter)({ durationIn: durationIn, easeIn: easeIn }),
            },
        },
        outRight: {
            initial: { scale: 1, opacity: 1 },
            animate: {
                scale: 0,
                opacity: 0,
                translateX: distance,
                transition: (0, transition_1.varTranEnter)({ durationIn: durationIn, easeIn: easeIn }),
            },
        },
    };
};
exports.varZoom = varZoom;

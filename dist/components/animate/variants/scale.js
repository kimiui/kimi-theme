"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.varScale = void 0;
var transition_1 = require("./transition");
// ----------------------------------------------------------------------
var varScale = function (props) {
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
        inX: {
            initial: { scaleX: 0, opacity: 0 },
            animate: { scaleX: 1, opacity: 1, transition: (0, transition_1.varTranEnter)({ durationIn: durationIn, easeIn: easeIn }) },
            exit: { scaleX: 0, opacity: 0, transition: (0, transition_1.varTranExit)({ durationOut: durationOut, easeOut: easeOut }) },
        },
        inY: {
            initial: { scaleY: 0, opacity: 0 },
            animate: { scaleY: 1, opacity: 1, transition: (0, transition_1.varTranEnter)({ durationIn: durationIn, easeIn: easeIn }) },
            exit: { scaleY: 0, opacity: 0, transition: (0, transition_1.varTranExit)({ durationOut: durationOut, easeOut: easeOut }) },
        },
        // OUT
        out: {
            initial: { scale: 1, opacity: 1 },
            animate: { scale: 0, opacity: 0, transition: (0, transition_1.varTranEnter)({ durationIn: durationIn, easeIn: easeIn }) },
        },
        outX: {
            initial: { scaleX: 1, opacity: 1 },
            animate: { scaleX: 0, opacity: 0, transition: (0, transition_1.varTranEnter)({ durationIn: durationIn, easeIn: easeIn }) },
        },
        outY: {
            initial: { scaleY: 1, opacity: 1 },
            animate: { scaleY: 0, opacity: 0, transition: (0, transition_1.varTranEnter)({ durationIn: durationIn, easeIn: easeIn }) },
        },
    };
};
exports.varScale = varScale;

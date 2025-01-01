"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.varFade = void 0;
var transition_1 = require("./transition");
// ----------------------------------------------------------------------
var varFade = function (props) {
    var distance = (props === null || props === void 0 ? void 0 : props.distance) || 120;
    var durationIn = props === null || props === void 0 ? void 0 : props.durationIn;
    var durationOut = props === null || props === void 0 ? void 0 : props.durationOut;
    var easeIn = props === null || props === void 0 ? void 0 : props.easeIn;
    var easeOut = props === null || props === void 0 ? void 0 : props.easeOut;
    return {
        // IN
        in: {
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: transition_1.varTranEnter },
            exit: { opacity: 0, transition: transition_1.varTranExit },
        },
        inUp: {
            initial: { y: distance, opacity: 0 },
            animate: { y: 0, opacity: 1, transition: (0, transition_1.varTranEnter)({ durationIn: durationIn, easeIn: easeIn }) },
            exit: { y: distance, opacity: 0, transition: (0, transition_1.varTranExit)({ durationOut: durationOut, easeOut: easeOut }) },
        },
        inDown: {
            initial: { y: -distance, opacity: 0 },
            animate: { y: 0, opacity: 1, transition: (0, transition_1.varTranEnter)({ durationIn: durationIn, easeIn: easeIn }) },
            exit: { y: -distance, opacity: 0, transition: (0, transition_1.varTranExit)({ durationOut: durationOut, easeOut: easeOut }) },
        },
        inLeft: {
            initial: { x: -distance, opacity: 0 },
            animate: { x: 0, opacity: 1, transition: (0, transition_1.varTranEnter)({ durationIn: durationIn, easeIn: easeIn }) },
            exit: { x: -distance, opacity: 0, transition: (0, transition_1.varTranExit)({ durationOut: durationOut, easeOut: easeOut }) },
        },
        inRight: {
            initial: { x: distance, opacity: 0 },
            animate: { x: 0, opacity: 1, transition: (0, transition_1.varTranEnter)({ durationIn: durationIn, easeIn: easeIn }) },
            exit: { x: distance, opacity: 0, transition: (0, transition_1.varTranExit)({ durationOut: durationOut, easeOut: easeOut }) },
        },
        // OUT
        out: {
            initial: { opacity: 1 },
            animate: { opacity: 0, transition: (0, transition_1.varTranEnter)({ durationIn: durationIn, easeIn: easeIn }) },
            exit: { opacity: 1, transition: (0, transition_1.varTranExit)({ durationOut: durationOut, easeOut: easeOut }) },
        },
        outUp: {
            initial: { y: 0, opacity: 1 },
            animate: { y: -distance, opacity: 0, transition: (0, transition_1.varTranEnter)({ durationIn: durationIn, easeIn: easeIn }) },
            exit: { y: 0, opacity: 1, transition: (0, transition_1.varTranExit)({ durationOut: durationOut, easeOut: easeOut }) },
        },
        outDown: {
            initial: { y: 0, opacity: 1 },
            animate: { y: distance, opacity: 0, transition: (0, transition_1.varTranEnter)({ durationIn: durationIn, easeIn: easeIn }) },
            exit: { y: 0, opacity: 1, transition: (0, transition_1.varTranExit)({ durationOut: durationOut, easeOut: easeOut }) },
        },
        outLeft: {
            initial: { x: 0, opacity: 1 },
            animate: { x: -distance, opacity: 0, transition: (0, transition_1.varTranEnter)({ durationIn: durationIn, easeIn: easeIn }) },
            exit: { x: 0, opacity: 1, transition: (0, transition_1.varTranExit)({ durationOut: durationOut, easeOut: easeOut }) },
        },
        outRight: {
            initial: { x: 0, opacity: 1 },
            animate: { x: distance, opacity: 0, transition: (0, transition_1.varTranEnter)({ durationIn: durationIn, easeIn: easeIn }) },
            exit: { x: 0, opacity: 1, transition: (0, transition_1.varTranExit)({ durationOut: durationOut, easeOut: easeOut }) },
        },
    };
};
exports.varFade = varFade;

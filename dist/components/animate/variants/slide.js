"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.varSlide = void 0;
var transition_1 = require("./transition");
// ----------------------------------------------------------------------
var varSlide = function (props) {
    var distance = (props === null || props === void 0 ? void 0 : props.distance) || 160;
    var durationIn = props === null || props === void 0 ? void 0 : props.durationIn;
    var durationOut = props === null || props === void 0 ? void 0 : props.durationOut;
    var easeIn = props === null || props === void 0 ? void 0 : props.easeIn;
    var easeOut = props === null || props === void 0 ? void 0 : props.easeOut;
    return {
        // IN
        inUp: {
            initial: { y: distance },
            animate: { y: 0, transition: (0, transition_1.varTranEnter)({ durationIn: durationIn, easeIn: easeIn }) },
            exit: { y: distance, transition: (0, transition_1.varTranExit)({ durationOut: durationOut, easeOut: easeOut }) },
        },
        inDown: {
            initial: { y: -distance },
            animate: { y: 0, transition: (0, transition_1.varTranEnter)({ durationIn: durationIn, easeIn: easeIn }) },
            exit: { y: -distance, transition: (0, transition_1.varTranExit)({ durationOut: durationOut, easeOut: easeOut }) },
        },
        inLeft: {
            initial: { x: -distance },
            animate: { x: 0, transition: (0, transition_1.varTranEnter)({ durationIn: durationIn, easeIn: easeIn }) },
            exit: { x: -distance, transition: (0, transition_1.varTranExit)({ durationOut: durationOut, easeOut: easeOut }) },
        },
        inRight: {
            initial: { x: distance },
            animate: { x: 0, transition: (0, transition_1.varTranEnter)({ durationIn: durationIn, easeIn: easeIn }) },
            exit: { x: distance, transition: (0, transition_1.varTranExit)({ durationOut: durationOut, easeOut: easeOut }) },
        },
        // OUT
        outUp: {
            initial: { y: 0 },
            animate: { y: -distance, transition: (0, transition_1.varTranEnter)({ durationIn: durationIn, easeIn: easeIn }) },
            exit: { y: 0, transition: (0, transition_1.varTranExit)({ durationOut: durationOut, easeOut: easeOut }) },
        },
        outDown: {
            initial: { y: 0 },
            animate: { y: distance, transition: (0, transition_1.varTranEnter)({ durationIn: durationIn, easeIn: easeIn }) },
            exit: { y: 0, transition: (0, transition_1.varTranExit)({ durationOut: durationOut, easeOut: easeOut }) },
        },
        outLeft: {
            initial: { x: 0 },
            animate: { x: -distance, transition: (0, transition_1.varTranEnter)({ durationIn: durationIn, easeIn: easeIn }) },
            exit: { x: 0, transition: (0, transition_1.varTranExit)({ durationOut: durationOut, easeOut: easeOut }) },
        },
        outRight: {
            initial: { x: 0 },
            animate: { x: distance, transition: (0, transition_1.varTranEnter)({ durationIn: durationIn, easeIn: easeIn }) },
            exit: { x: 0, transition: (0, transition_1.varTranExit)({ durationOut: durationOut, easeOut: easeOut }) },
        },
    };
};
exports.varSlide = varSlide;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.varFlip = void 0;
var transition_1 = require("./transition");
// ----------------------------------------------------------------------
var varFlip = function (props) {
    var durationIn = props === null || props === void 0 ? void 0 : props.durationIn;
    var durationOut = props === null || props === void 0 ? void 0 : props.durationOut;
    var easeIn = props === null || props === void 0 ? void 0 : props.easeIn;
    var easeOut = props === null || props === void 0 ? void 0 : props.easeOut;
    return {
        // IN
        inX: {
            initial: { rotateX: -180, opacity: 0 },
            animate: { rotateX: 0, opacity: 1, transition: (0, transition_1.varTranEnter)({ durationIn: durationIn, easeIn: easeIn }) },
            exit: { rotateX: -180, opacity: 0, transition: (0, transition_1.varTranExit)({ durationOut: durationOut, easeOut: easeOut }) },
        },
        inY: {
            initial: { rotateY: -180, opacity: 0 },
            animate: { rotateY: 0, opacity: 1, transition: (0, transition_1.varTranEnter)({ durationIn: durationIn, easeIn: easeIn }) },
            exit: { rotateY: -180, opacity: 0, transition: (0, transition_1.varTranExit)({ durationOut: durationOut, easeOut: easeOut }) },
        },
        // OUT
        outX: {
            initial: { rotateX: 0, opacity: 1 },
            animate: { rotateX: 70, opacity: 0, transition: (0, transition_1.varTranExit)({ durationOut: durationOut, easeOut: easeOut }) },
        },
        outY: {
            initial: { rotateY: 0, opacity: 1 },
            animate: { rotateY: 70, opacity: 0, transition: (0, transition_1.varTranExit)({ durationOut: durationOut, easeOut: easeOut }) },
        },
    };
};
exports.varFlip = varFlip;

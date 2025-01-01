"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.varRotate = void 0;
var transition_1 = require("./transition");
// ----------------------------------------------------------------------
var varRotate = function (props) {
    var durationIn = props === null || props === void 0 ? void 0 : props.durationIn;
    var durationOut = props === null || props === void 0 ? void 0 : props.durationOut;
    var easeIn = props === null || props === void 0 ? void 0 : props.easeIn;
    var easeOut = props === null || props === void 0 ? void 0 : props.easeOut;
    return {
        // IN
        in: {
            initial: { opacity: 0, rotate: -360 },
            animate: { opacity: 1, rotate: 0, transition: (0, transition_1.varTranEnter)({ durationIn: durationIn, easeIn: easeIn }) },
            exit: { opacity: 0, rotate: -360, transition: (0, transition_1.varTranExit)({ durationOut: durationOut, easeOut: easeOut }) },
        },
        // OUT
        out: {
            initial: { opacity: 1, rotate: 0 },
            animate: { opacity: 0, rotate: -360, transition: (0, transition_1.varTranExit)({ durationOut: durationOut, easeOut: easeOut }) },
        },
    };
};
exports.varRotate = varRotate;

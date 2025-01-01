"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.varTranExit = exports.varTranEnter = exports.varTranHover = void 0;
// ----------------------------------------------------------------------
var varTranHover = function (props) {
    var _a;
    var duration = (_a = props === null || props === void 0 ? void 0 : props.duration) !== null && _a !== void 0 ? _a : 0.32;
    var ease = (props === null || props === void 0 ? void 0 : props.ease) || [0.43, 0.13, 0.23, 0.96];
    return { duration: duration, ease: ease };
};
exports.varTranHover = varTranHover;
var varTranEnter = function (props) {
    var _a;
    var duration = (_a = props === null || props === void 0 ? void 0 : props.durationIn) !== null && _a !== void 0 ? _a : 0.64;
    var ease = (props === null || props === void 0 ? void 0 : props.easeIn) || [0.43, 0.13, 0.23, 0.96];
    return { duration: duration, ease: ease };
};
exports.varTranEnter = varTranEnter;
var varTranExit = function (props) {
    var _a;
    var duration = (_a = props === null || props === void 0 ? void 0 : props.durationOut) !== null && _a !== void 0 ? _a : 0.48;
    var ease = (props === null || props === void 0 ? void 0 : props.easeOut) || [0.43, 0.13, 0.23, 0.96];
    return { duration: duration, ease: ease };
};
exports.varTranExit = varTranExit;

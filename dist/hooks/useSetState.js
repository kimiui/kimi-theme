'use client';
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
exports.useSetState = useSetState;
var react_1 = require("react");
var helper_1 = require("lib/utils/helper");
function useSetState(initialState) {
    var _a = (0, react_1.useState)(initialState), state = _a[0], set = _a[1];
    var canReset = !(0, helper_1.isEqual)(state, initialState);
    var setState = (0, react_1.useCallback)(function (updateState) {
        set(function (prevValue) { return (__assign(__assign({}, prevValue), updateState)); });
    }, []);
    var setField = (0, react_1.useCallback)(function (name, updateValue) {
        var _a;
        setState((_a = {}, _a[name] = updateValue, _a));
    }, [setState]);
    var onResetState = (0, react_1.useCallback)(function () {
        set(initialState);
    }, [initialState]);
    var memoizedValue = (0, react_1.useMemo)(function () { return ({
        state: state,
        setState: setState,
        setField: setField,
        onResetState: onResetState,
        canReset: canReset,
    }); }, [canReset, onResetState, setField, setState, state]);
    return memoizedValue;
}

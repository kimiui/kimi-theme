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
exports.useLocalStorage = useLocalStorage;
exports.getStorage = getStorage;
exports.setStorage = setStorage;
exports.removeStorage = removeStorage;
var react_1 = require("react");
var helper_1 = require("lib/utils/helper");
var storage_available_1 = require("lib/utils/storage-available");
function useLocalStorage(key, initialState) {
    var _a = (0, react_1.useState)(initialState), state = _a[0], set = _a[1];
    var multiValue = initialState && typeof initialState === 'object';
    var canReset = !(0, helper_1.isEqual)(state, initialState);
    (0, react_1.useEffect)(function () {
        var restoredValue = getStorage(key);
        if (restoredValue) {
            if (multiValue) {
                set(function (prevValue) { return (__assign(__assign({}, prevValue), restoredValue)); });
            }
            else {
                set(restoredValue);
            }
        }
    }, [key, multiValue]);
    var setState = (0, react_1.useCallback)(function (updateState) {
        if (multiValue) {
            set(function (prevValue) {
                setStorage(key, __assign(__assign({}, prevValue), updateState));
                return __assign(__assign({}, prevValue), updateState);
            });
        }
        else {
            setStorage(key, updateState);
            set(updateState);
        }
    }, [key, multiValue]);
    var setField = (0, react_1.useCallback)(function (name, updateValue) {
        var _a;
        if (multiValue) {
            setState((_a = {}, _a[name] = updateValue, _a));
        }
    }, [multiValue, setState]);
    var resetState = (0, react_1.useCallback)(function () {
        set(initialState);
        removeStorage(key);
    }, [initialState, key]);
    var memoizedValue = (0, react_1.useMemo)(function () { return ({
        state: state,
        setState: setState,
        setField: setField,
        resetState: resetState,
        canReset: canReset,
    }); }, [canReset, resetState, setField, setState, state]);
    return memoizedValue;
}
// ----------------------------------------------------------------------
function getStorage(key) {
    try {
        var result = (0, storage_available_1.localStorageGetItem)(key);
        if (result) {
            return JSON.parse(result);
        }
    }
    catch (error) {
        console.error('Error while getting from storage:', error);
    }
    return null;
}
function setStorage(key, value) {
    try {
        var serializedValue = JSON.stringify(value);
        window.localStorage.setItem(key, serializedValue);
    }
    catch (error) {
        console.error('Error while setting storage:', error);
    }
}
function removeStorage(key) {
    try {
        window.localStorage.removeItem(key);
    }
    catch (error) {
        console.error('Error while removing from storage:', error);
    }
}

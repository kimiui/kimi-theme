'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDebounce = useDebounce;
var react_1 = require("react");
// ----------------------------------------------------------------------
function useDebounce(value, delay) {
    if (delay === void 0) { delay = 500; }
    var _a = (0, react_1.useState)(value), debouncedValue = _a[0], setDebouncedValue = _a[1];
    var debounceHandler = (0, react_1.useCallback)(function () {
        var handler = setTimeout(function () {
            setDebouncedValue(value);
        }, delay);
        return function () {
            clearTimeout(handler);
        };
    }, [value, delay]);
    (0, react_1.useEffect)(function () {
        debounceHandler();
    }, [debounceHandler]);
    var memoizedValue = (0, react_1.useMemo)(function () { return debouncedValue; }, [debouncedValue]);
    return memoizedValue;
}

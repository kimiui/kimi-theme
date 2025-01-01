'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTabs = useTabs;
var react_1 = require("react");
function useTabs(defaultValue) {
    var _a = (0, react_1.useState)(defaultValue), value = _a[0], setValue = _a[1];
    var onChange = (0, react_1.useCallback)(function (event, newValue) {
        setValue(newValue);
    }, []);
    var memoizedValue = (0, react_1.useMemo)(function () { return ({ value: value, setValue: setValue, onChange: onChange }); }, [onChange, value]);
    return memoizedValue;
}

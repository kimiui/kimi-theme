'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDoubleClick = useDoubleClick;
var react_1 = require("react");
function useDoubleClick(_a) {
    var click = _a.click, doubleClick = _a.doubleClick, _b = _a.timeout, timeout = _b === void 0 ? 250 : _b;
    var clickTimeout = (0, react_1.useRef)(null);
    var clearClickTimeout = (0, react_1.useCallback)(function () {
        if (clickTimeout.current) {
            clearTimeout(clickTimeout.current);
            clickTimeout.current = null;
        }
    }, []);
    var handleEvent = (0, react_1.useCallback)(function (event) {
        clearClickTimeout();
        if (click && event.detail === 1) {
            clickTimeout.current = setTimeout(function () {
                click(event);
            }, timeout);
        }
        if (event.detail % 2 === 0) {
            doubleClick(event);
        }
    }, [click, doubleClick, timeout, clearClickTimeout]);
    var memoizedValue = (0, react_1.useMemo)(function () { return handleEvent; }, [handleEvent]);
    return memoizedValue;
}

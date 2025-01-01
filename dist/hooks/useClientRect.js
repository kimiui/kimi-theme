'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useClientRect = useClientRect;
var react_1 = require("react");
var useEventListener_1 = require("./useEventListener");
function useClientRect(inputRef) {
    var initialRef = (0, react_1.useRef)(null);
    var elementRef = inputRef || initialRef;
    var _a = (0, react_1.useState)({
        elementRef: elementRef,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        scrollWidth: 0,
        scrollHeight: 0,
    }), state = _a[0], setState = _a[1];
    var handleResize = (0, react_1.useCallback)(function () {
        if (elementRef === null || elementRef === void 0 ? void 0 : elementRef.current) {
            var clientRect = elementRef.current.getBoundingClientRect();
            setState({
                elementRef: elementRef,
                top: clientRect.top,
                right: clientRect.right,
                bottom: clientRect.bottom,
                left: clientRect.left,
                x: clientRect.x,
                y: clientRect.y,
                width: clientRect.width,
                height: clientRect.height,
                scrollWidth: elementRef.current.scrollWidth,
                scrollHeight: elementRef.current.scrollHeight,
            });
        }
    }, [elementRef]);
    (0, useEventListener_1.useEventListener)('resize', handleResize);
    (0, react_1.useEffect)(function () {
        handleResize();
    }, [handleResize]);
    return state;
}

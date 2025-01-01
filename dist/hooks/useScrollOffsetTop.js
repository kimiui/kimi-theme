'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useScrollOffSetTop = useScrollOffSetTop;
var framer_motion_1 = require("framer-motion");
var react_1 = require("react");
function useScrollOffSetTop(top) {
    if (top === void 0) { top = 0; }
    var elementRef = (0, react_1.useRef)(null);
    var scrollY = (0, framer_motion_1.useScroll)().scrollY;
    var _a = (0, react_1.useState)(false), offsetTop = _a[0], setOffsetTop = _a[1];
    var handleScrollChange = (0, react_1.useCallback)(function (val) {
        var scrollHeight = Math.round(val);
        if (elementRef === null || elementRef === void 0 ? void 0 : elementRef.current) {
            var rect = elementRef.current.getBoundingClientRect();
            var elementTop = Math.round(rect.top);
            setOffsetTop(elementTop < top);
        }
        else {
            setOffsetTop(scrollHeight > top);
        }
    }, [elementRef, top]);
    (0, framer_motion_1.useMotionValueEvent)(scrollY, 'change', (0, react_1.useMemo)(function () { return handleScrollChange; }, [handleScrollChange]));
    var memoizedValue = (0, react_1.useMemo)(function () { return ({ elementRef: elementRef, offsetTop: offsetTop }); }, [offsetTop]);
    return memoizedValue;
}

'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useScrollProgress = useScrollProgress;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
function useScrollProgress(target) {
    if (target === void 0) { target = 'document'; }
    var elementRef = (0, react_1.useRef)(null);
    var options = { container: elementRef };
    var _a = (0, framer_motion_1.useScroll)(target === 'container' ? options : undefined), scrollYProgress = _a.scrollYProgress, scrollXProgress = _a.scrollXProgress;
    var memoizedValue = (0, react_1.useMemo)(function () { return ({ elementRef: elementRef, scrollXProgress: scrollXProgress, scrollYProgress: scrollYProgress }); }, [elementRef, scrollXProgress, scrollYProgress]);
    return memoizedValue;
}

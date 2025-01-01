'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEventListener = useEventListener;
var react_1 = require("react");
// ----------------------------------------------------------------------
var useIsomorphicLayoutEffect = typeof window !== 'undefined' ? react_1.useLayoutEffect : react_1.useEffect;
function useEventListener(eventName, handler, element, options) {
    // Create a ref that stores handler
    var savedHandler = (0, react_1.useRef)(handler);
    useIsomorphicLayoutEffect(function () {
        savedHandler.current = handler;
    }, [handler]);
    (0, react_1.useEffect)(function () {
        // Define the listening target
        var targetElement = (element === null || element === void 0 ? void 0 : element.current) || window;
        if (!(targetElement && targetElement.addEventListener)) {
            return;
        }
        // Create event listener that calls handler function stored in ref
        var eventListener = function (event) { return savedHandler.current(event); };
        targetElement.addEventListener(eventName, eventListener, options);
        // Remove event listener on cleanup
        // eslint-disable-next-line consistent-return
        return function () {
            targetElement.removeEventListener(eventName, eventListener);
        };
    }, [eventName, element, options]);
}

'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCountdownSeconds = useCountdownSeconds;
var react_1 = require("react");
function useCountdownSeconds(initCountdown) {
    var _a = (0, react_1.useState)(initCountdown), countdown = _a[0], setCountdown = _a[1];
    var remainingSecondsRef = (0, react_1.useRef)(countdown);
    var startCountdown = (0, react_1.useCallback)(function () {
        remainingSecondsRef.current = countdown;
        var intervalId = setInterval(function () {
            remainingSecondsRef.current -= 1;
            if (remainingSecondsRef.current === 0) {
                clearInterval(intervalId);
                setCountdown(initCountdown);
            }
            else {
                setCountdown(remainingSecondsRef.current);
            }
        }, 1000);
    }, [initCountdown, countdown]);
    var counting = initCountdown > countdown;
    return {
        counting: counting,
        countdown: countdown,
        startCountdown: startCountdown,
        setCountdown: setCountdown,
    };
}

'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgressBar = ProgressBar;
var nprogress_1 = __importDefault(require("nprogress"));
var routes_react_1 = require("routes-react");
var react_1 = require("react");
require("./styles.css");
// ----------------------------------------------------------------------
function ProgressBar() {
    var pathname = (0, routes_react_1.usePathname)();
    var _a = (0, react_1.useState)(false), mounted = _a[0], setMounted = _a[1];
    var _b = (0, react_1.useState)(false), visible = _b[0], setVisible = _b[1];
    (0, react_1.useEffect)(function () {
        setMounted(true);
    }, []);
    (0, react_1.useEffect)(function () {
        if (!visible) {
            nprogress_1.default.start();
            setVisible(true);
        }
        if (visible) {
            nprogress_1.default.done();
            setVisible(false);
        }
        if (!visible && mounted) {
            setVisible(false);
            nprogress_1.default.done();
        }
        return function () {
            nprogress_1.default.done();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname, mounted]);
    if (!mounted) {
        return null;
    }
    return null;
}

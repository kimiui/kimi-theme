'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useScrollToTop = useScrollToTop;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
// ----------------------------------------------------------------------
function useScrollToTop() {
    var pathname = (0, react_router_dom_1.useLocation)().pathname;
    (0, react_1.useEffect)(function () {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimateCountUpNumber = AnimateCountUpNumber;
var jsx_runtime_1 = require("react/jsx-runtime");
var animate_1 = require("lib/components/animate");
// ----------------------------------------------------------------------
function AnimateCountUpNumber() {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(animate_1.AnimateCountUp, { component: "h6", variant: "h1", to: 500, unit: "+" }), (0, jsx_runtime_1.jsx)(animate_1.AnimateCountUp, { component: "h6", variant: "h1", from: 200, to: 500.14, toFixed: 2, unit: "k" })] }));
}

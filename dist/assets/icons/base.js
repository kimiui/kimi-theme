'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseIcon = void 0;
var styles_1 = require("@mui/material/styles");
exports.BaseIcon = (0, styles_1.styled)('svg')(function (_a) {
    var theme = _a.theme;
    return ({
        width: '100%',
        height: '100%',
        fill: 'none',
        viewBox: '0 0 96 96',
        xmlns: 'http://www.w3.org/2000/svg',
    });
});

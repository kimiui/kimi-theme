'use client';
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerView = ContainerView;
var jsx_runtime_1 = require("react/jsx-runtime");
var framer_motion_1 = require("framer-motion");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var _mock_1 = require("../../../../_mock");
var get_variant_1 = require("../get-variant");
function ContainerView(_a) {
    var selectVariant = _a.selectVariant, sx = _a.sx, other = __rest(_a, ["selectVariant", "sx"]);
    var isKenburns = selectVariant.includes('kenburns');
    return ((0, jsx_runtime_1.jsx)(Stack_1.default, __assign({ sx: __assign({ flex: '1 1 auto', overflow: 'hidden', borderRadius: 2 }, sx) }, other, { children: isKenburns ? ((0, jsx_runtime_1.jsx)(Box_1.default, __assign({ component: framer_motion_1.m.img, src: _mock_1._mock.image.cover(7) }, (0, get_variant_1.getVariant)(selectVariant), { sx: { width: 1, height: 1, objectFit: 'cover' } }))) : ((0, jsx_runtime_1.jsx)(Box_1.default, __assign({ component: framer_motion_1.m.div }, (0, get_variant_1.getVariant)(selectVariant), { sx: { height: 1, width: 1 } }))) })));
}

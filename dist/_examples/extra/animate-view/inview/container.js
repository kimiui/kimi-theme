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
var animate_1 = require("../../../../components/animate");
var get_variant_1 = require("../get-variant");
// ----------------------------------------------------------------------
var TEXT = 'Kimi Admin';
var IMG = [
    _mock_1._mock.image.cover(2),
    _mock_1._mock.image.cover(3),
    _mock_1._mock.image.cover(4),
    _mock_1._mock.image.cover(5),
];
function ContainerView(_a) {
    var isText = _a.isText, isMulti = _a.isMulti, selectVariant = _a.selectVariant, sx = _a.sx, other = __rest(_a, ["isText", "isMulti", "selectVariant", "sx"]);
    var items = isMulti ? IMG : IMG.slice(0, 1);
    var renderText = ((0, jsx_runtime_1.jsx)(animate_1.AnimateText, { component: "h1", variant: "h1", text: TEXT, variants: (0, get_variant_1.getVariant)(selectVariant, 400), sx: { overflow: 'hidden' } }));
    var renderItems = ((0, jsx_runtime_1.jsx)(animate_1.MotionContainer, { sx: {
            gap: 3,
            width: 1,
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
        }, children: items.map(function (item, index) { return ((0, jsx_runtime_1.jsx)(Box_1.default, { component: framer_motion_1.m.img, src: item, variants: (0, get_variant_1.getVariant)(selectVariant, 800), sx: {
                width: 480,
                borderRadius: 1,
                objectFit: 'cover',
                height: isMulti ? 80 : 320,
                boxShadow: function (theme) { return theme.shadows[8]; },
            } }, index)); }) }));
    return ((0, jsx_runtime_1.jsx)(Stack_1.default, __assign({ sx: __assign({ borderRadius: 2, flex: '1 1 auto', overflow: 'hidden', alignItems: 'center', justifyContent: 'center', bgcolor: 'background.neutral' }, sx) }, other, { children: isText ? renderText : renderItems })));
}

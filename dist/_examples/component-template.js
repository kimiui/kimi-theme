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
exports.ScrollToViewTemplate = ScrollToViewTemplate;
var jsx_runtime_1 = require("react/jsx-runtime");
var Card_1 = __importDefault(require("@mui/material/Card"));
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var Container_1 = __importDefault(require("@mui/material/Container"));
var CardHeader_1 = __importDefault(require("@mui/material/CardHeader"));
var CardContent_1 = __importDefault(require("@mui/material/CardContent"));
function ScrollToViewTemplate(_a) {
    var sx = _a.sx, data = _a.data, slotProps = _a.slotProps, _b = _a.offsetValue, offsetValue = _b === void 0 ? 0.3 : _b, // 0 ~ 1 => 0% => 100%
    _c = _a.queryClassName, // 0 ~ 1 => 0% => 100%
    queryClassName = _c === void 0 ? 'scroll__to__view' : _c, other = __rest(_a, ["sx", "data", "slotProps", "offsetValue", "queryClassName"]);
    var renderSection = ((0, jsx_runtime_1.jsx)(Stack_1.default, { component: "section", spacing: 5, flex: "1 1 auto", sx: __assign({ minWidth: 0, p: { xs: 3, md: 5 } }, slotProps === null || slotProps === void 0 ? void 0 : slotProps.section), children: data.map(function (section) { return ((0, jsx_runtime_1.jsxs)(Card_1.default, { className: queryClassName, children: [(0, jsx_runtime_1.jsx)(CardHeader_1.default, { title: section.name }), (0, jsx_runtime_1.jsx)(CardContent_1.default, { children: section.component })] }, section.name)); }) }));
    return ((0, jsx_runtime_1.jsx)(Container_1.default, __assign({}, slotProps === null || slotProps === void 0 ? void 0 : slotProps.container, { children: (0, jsx_runtime_1.jsx)(Stack_1.default, __assign({ spacing: 5, direction: "row", alignItems: "flex-start", sx: __assign({}, sx) }, other, { children: renderSection })) })));
}

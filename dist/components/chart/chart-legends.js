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
exports.StyledDot = exports.StyledLegend = void 0;
exports.ChartLegends = ChartLegends;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var styles_1 = require("@mui/material/styles");
// ----------------------------------------------------------------------
exports.StyledLegend = (0, styles_1.styled)(Box_1.default)(function (_a) {
    var theme = _a.theme;
    return ({
        gap: 6,
        alignItems: 'center',
        display: 'inline-flex',
        justifyContent: 'flex-start',
        fontSize: theme.typography.pxToRem(13),
        fontWeight: theme.typography.fontWeightMedium,
    });
});
exports.StyledDot = (0, styles_1.styled)('span')({
    width: 12,
    height: 12,
    flexShrink: 0,
    display: 'flex',
    borderRadius: '50%',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'currentColor',
});
function ChartLegends(_a) {
    var _b = _a.labels, labels = _b === void 0 ? [] : _b, _c = _a.colors, colors = _c === void 0 ? [] : _c, values = _a.values, sublabels = _a.sublabels, icons = _a.icons, other = __rest(_a, ["labels", "colors", "values", "sublabels", "icons"]);
    return ((0, jsx_runtime_1.jsx)(Stack_1.default, __assign({ direction: "row", flexWrap: "wrap", spacing: 2 }, other, { children: labels === null || labels === void 0 ? void 0 : labels.map(function (series, index) { return ((0, jsx_runtime_1.jsxs)(Stack_1.default, { spacing: 1, children: [(0, jsx_runtime_1.jsxs)(exports.StyledLegend, { children: [(icons === null || icons === void 0 ? void 0 : icons.length) ? ((0, jsx_runtime_1.jsx)(Box_1.default, { component: "span", sx: {
                                color: colors[index],
                                '& svg, & img': { width: 20, height: 20 },
                            }, children: icons === null || icons === void 0 ? void 0 : icons[index] })) : ((0, jsx_runtime_1.jsx)(exports.StyledDot, { sx: { color: colors[index] } })), (0, jsx_runtime_1.jsxs)(Box_1.default, { component: "span", sx: { flexShrink: 0 }, children: [series, sublabels && (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [" ", " (".concat(sublabels[index], ")")] })] })] }), values && (0, jsx_runtime_1.jsx)(Box_1.default, { sx: { typography: 'h6' }, children: values[index] })] }, series)); }) })));
}

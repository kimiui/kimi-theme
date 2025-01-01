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
exports.TableSkeleton = TableSkeleton;
var jsx_runtime_1 = require("react/jsx-runtime");
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var Skeleton_1 = __importDefault(require("@mui/material/Skeleton"));
var TableRow_1 = __importDefault(require("@mui/material/TableRow"));
var TableCell_1 = __importDefault(require("@mui/material/TableCell"));
// ----------------------------------------------------------------------
function TableSkeleton(_a) {
    var other = __rest(_a, []);
    return ((0, jsx_runtime_1.jsx)(TableRow_1.default, __assign({}, other, { children: (0, jsx_runtime_1.jsx)(TableCell_1.default, { colSpan: 12, children: (0, jsx_runtime_1.jsxs)(Stack_1.default, { spacing: 3, direction: "row", alignItems: "center", children: [(0, jsx_runtime_1.jsx)(Skeleton_1.default, { sx: {
                            borderRadius: 1.5,
                            width: 48,
                            height: 48,
                            flexShrink: 0,
                        } }), (0, jsx_runtime_1.jsx)(Skeleton_1.default, { sx: { width: 1, height: 12 } }), (0, jsx_runtime_1.jsx)(Skeleton_1.default, { sx: { width: 180, height: 12 } }), (0, jsx_runtime_1.jsx)(Skeleton_1.default, { sx: { width: 160, height: 12 } }), (0, jsx_runtime_1.jsx)(Skeleton_1.default, { sx: { width: 140, height: 12 } }), (0, jsx_runtime_1.jsx)(Skeleton_1.default, { sx: { width: 120, height: 12 } })] }) }) })));
}

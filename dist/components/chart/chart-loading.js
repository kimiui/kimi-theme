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
exports.ChartLoading = ChartLoading;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Skeleton_1 = __importDefault(require("@mui/material/Skeleton"));
function ChartLoading(_a) {
    var sx = _a.sx, type = _a.type, other = __rest(_a, ["sx", "type"]);
    var circularTypes = ['donut', 'radialBar', 'pie', 'polarArea'];
    return ((0, jsx_runtime_1.jsx)(Box_1.default, __assign({ alignItems: "center", justifyContent: "center", sx: __assign({ top: 0, left: 0, width: 1, zIndex: 9, height: 1, p: 'inherit', overflow: 'hidden', position: 'absolute', borderRadius: 'inherit' }, sx) }, other, { children: (0, jsx_runtime_1.jsx)(Skeleton_1.default, { variant: "circular", sx: __assign({ width: 1, height: 1, borderRadius: 'inherit' }, (circularTypes.includes(type) && {
                borderRadius: '50%',
            })) }) })));
}

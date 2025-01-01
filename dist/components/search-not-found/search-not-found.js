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
exports.SearchNotFound = SearchNotFound;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
function SearchNotFound(_a) {
    var query = _a.query, sx = _a.sx, other = __rest(_a, ["query", "sx"]);
    if (!query) {
        return ((0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "body2", sx: sx, children: "Please enter keywords" }));
    }
    return ((0, jsx_runtime_1.jsxs)(Box_1.default, __assign({ sx: __assign({ textAlign: 'center', borderRadius: 1.5 }, sx) }, other, { children: [(0, jsx_runtime_1.jsx)(Box_1.default, { sx: { mb: 1, typography: 'h6' }, children: "Not found" }), (0, jsx_runtime_1.jsxs)(Typography_1.default, { variant: "body2", children: ["No results found for \u00A0", (0, jsx_runtime_1.jsx)("strong", { children: "\"".concat(query, "\"") }), ".", (0, jsx_runtime_1.jsx)("br", {}), " Try checking for typos or using complete words."] })] })));
}

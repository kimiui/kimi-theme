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
exports.TablePaginationCustom = TablePaginationCustom;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Switch_1 = __importDefault(require("@mui/material/Switch"));
var TablePagination_1 = __importDefault(require("@mui/material/TablePagination"));
var FormControlLabel_1 = __importDefault(require("@mui/material/FormControlLabel"));
function TablePaginationCustom(_a) {
    var sx = _a.sx, dense = _a.dense, onChangeDense = _a.onChangeDense, _b = _a.rowsPerPageOptions, rowsPerPageOptions = _b === void 0 ? [5, 10, 25] : _b, other = __rest(_a, ["sx", "dense", "onChangeDense", "rowsPerPageOptions"]);
    return ((0, jsx_runtime_1.jsxs)(Box_1.default, { sx: __assign({ position: 'relative' }, sx), children: [(0, jsx_runtime_1.jsx)(TablePagination_1.default, __assign({ rowsPerPageOptions: rowsPerPageOptions, component: "div" }, other, { sx: { borderTopColor: 'transparent' } })), onChangeDense && ((0, jsx_runtime_1.jsx)(FormControlLabel_1.default, { label: "Dense", control: (0, jsx_runtime_1.jsx)(Switch_1.default, { name: "dense", checked: dense, onChange: onChangeDense }), sx: {
                    pl: 2,
                    py: 1.5,
                    top: 0,
                    position: { sm: 'absolute' },
                } }))] }));
}

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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableEmptyRows = TableEmptyRows;
var jsx_runtime_1 = require("react/jsx-runtime");
var TableRow_1 = __importDefault(require("@mui/material/TableRow"));
var TableCell_1 = __importDefault(require("@mui/material/TableCell"));
function TableEmptyRows(_a) {
    var emptyRows = _a.emptyRows, height = _a.height;
    if (!emptyRows) {
        return null;
    }
    return ((0, jsx_runtime_1.jsx)(TableRow_1.default, { sx: __assign({}, (height && { height: height * emptyRows })), children: (0, jsx_runtime_1.jsx)(TableCell_1.default, { colSpan: 9 }) }));
}

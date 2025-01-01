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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollapsibleTable = CollapsibleTable;
var jsx_runtime_1 = require("react/jsx-runtime");
var ahooks_1 = require("ahooks");
var Paper_1 = __importDefault(require("@mui/material/Paper"));
var Table_1 = __importDefault(require("@mui/material/Table"));
var Collapse_1 = __importDefault(require("@mui/material/Collapse"));
var TableRow_1 = __importDefault(require("@mui/material/TableRow"));
var TableBody_1 = __importDefault(require("@mui/material/TableBody"));
var TableCell_1 = __importDefault(require("@mui/material/TableCell"));
var TableHead_1 = __importDefault(require("@mui/material/TableHead"));
var IconButton_1 = __importDefault(require("@mui/material/IconButton"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var iconify_1 = require("../../../components/iconify");
var scrollbar_1 = require("../../../components/scrollbar");
var utils_1 = require("./utils");
// ----------------------------------------------------------------------
var TABLE_DATA = [
    (0, utils_1.createData)('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
    (0, utils_1.createData)('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
    (0, utils_1.createData)('Eclair', 262, 16.0, 24, 6.0, 3.79),
    (0, utils_1.createData)('Cupcake', 305, 3.7, 67, 4.3, 2.5),
    (0, utils_1.createData)('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
];
function CollapsibleTable() {
    return ((0, jsx_runtime_1.jsx)(scrollbar_1.Scrollbar, { children: (0, jsx_runtime_1.jsxs)(Table_1.default, { sx: { minWidth: 800 }, children: [(0, jsx_runtime_1.jsx)(TableHead_1.default, { children: (0, jsx_runtime_1.jsxs)(TableRow_1.default, { children: [(0, jsx_runtime_1.jsx)(TableCell_1.default, {}), (0, jsx_runtime_1.jsx)(TableCell_1.default, { children: "Dessert (100g serving)" }), (0, jsx_runtime_1.jsx)(TableCell_1.default, { align: "right", children: "Calories" }), (0, jsx_runtime_1.jsx)(TableCell_1.default, { align: "right", children: "Fat\u00A0(g)" }), (0, jsx_runtime_1.jsx)(TableCell_1.default, { align: "right", children: "Carbs\u00A0(g)" }), (0, jsx_runtime_1.jsx)(TableCell_1.default, { align: "right", children: "Protein\u00A0(g)" })] }) }), (0, jsx_runtime_1.jsx)(TableBody_1.default, { children: TABLE_DATA.map(function (row) { return ((0, jsx_runtime_1.jsx)(CollapsibleTableRow, { row: row }, row.name)); }) })] }) }));
}
function CollapsibleTableRow(_a) {
    var row = _a.row;
    var _b = (0, ahooks_1.useBoolean)(), collapsible = _b[0], collapsibleActions = _b[1];
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(TableRow_1.default, { sx: { '& > *': { borderBottom: 'unset' } }, children: [(0, jsx_runtime_1.jsx)(TableCell_1.default, { children: (0, jsx_runtime_1.jsx)(IconButton_1.default, { size: "small", color: collapsible ? 'inherit' : 'default', onClick: collapsibleActions.toggle, children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: collapsible ? 'eva:arrow-ios-upward-fill' : 'eva:arrow-ios-downward-fill' }) }) }), (0, jsx_runtime_1.jsx)(TableCell_1.default, { component: "th", scope: "row", children: row.name }), (0, jsx_runtime_1.jsx)(TableCell_1.default, { align: "right", children: row.calories }), (0, jsx_runtime_1.jsx)(TableCell_1.default, { align: "right", children: row.fat }), (0, jsx_runtime_1.jsx)(TableCell_1.default, { align: "right", children: row.carbs }), (0, jsx_runtime_1.jsx)(TableCell_1.default, { align: "right", children: row.protein })] }), (0, jsx_runtime_1.jsx)(TableRow_1.default, { children: (0, jsx_runtime_1.jsx)(TableCell_1.default, { sx: { py: 0 }, colSpan: 6, children: (0, jsx_runtime_1.jsx)(Collapse_1.default, { in: collapsible, timeout: "auto", unmountOnExit: true, children: (0, jsx_runtime_1.jsxs)(Paper_1.default, { variant: "outlined", sx: __assign({ py: 2, mb: 2, borderRadius: 1.5 }, (collapsible && { boxShadow: function (theme) { return theme.shadows[20]; } })), children: [(0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "h6", component: "div", sx: { p: 2 }, children: "History" }), (0, jsx_runtime_1.jsxs)(Table_1.default, { size: "small", "aria-label": "purchases", children: [(0, jsx_runtime_1.jsx)(TableHead_1.default, { children: (0, jsx_runtime_1.jsxs)(TableRow_1.default, { children: [(0, jsx_runtime_1.jsx)(TableCell_1.default, { children: "Date" }), (0, jsx_runtime_1.jsx)(TableCell_1.default, { children: "Customer" }), (0, jsx_runtime_1.jsx)(TableCell_1.default, { align: "right", children: "Amount" }), (0, jsx_runtime_1.jsx)(TableCell_1.default, { align: "right", children: "Total price ($)" })] }) }), (0, jsx_runtime_1.jsx)(TableBody_1.default, { children: row.history.map(function (historyRow) { return ((0, jsx_runtime_1.jsxs)(TableRow_1.default, { children: [(0, jsx_runtime_1.jsx)(TableCell_1.default, { component: "th", scope: "row", children: historyRow.date }), (0, jsx_runtime_1.jsx)(TableCell_1.default, { children: historyRow.customerId }), (0, jsx_runtime_1.jsx)(TableCell_1.default, { align: "right", children: historyRow.amount }), (0, jsx_runtime_1.jsx)(TableCell_1.default, { align: "right", children: Math.round(historyRow.amount * row.price * 100) / 100 })] }, historyRow.date)); }) })] })] }) }) }) })] }));
}

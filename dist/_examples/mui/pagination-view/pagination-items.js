'use client';
"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationItems = PaginationItems;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Card_1 = __importDefault(require("@mui/material/Card"));
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var Select_1 = __importDefault(require("@mui/material/Select"));
var react_1 = require("react");
var MenuItem_1 = __importDefault(require("@mui/material/MenuItem"));
var Pagination_1 = __importDefault(require("@mui/material/Pagination"));
var InputLabel_1 = __importDefault(require("@mui/material/InputLabel"));
var FormControl_1 = __importDefault(require("@mui/material/FormControl"));
var styles_1 = require("../../../theme/styles");
// ----------------------------------------------------------------------
var items = __spreadArray([], Array(100), true).map(function (_, index) { return index + 1; });
function PaginationItems() {
    var _a = (0, react_1.useState)(1), page = _a[0], setPage = _a[1];
    var _b = (0, react_1.useState)(12), rowsPerPage = _b[0], setRowsPerPage = _b[1];
    var handleChangePage = (0, react_1.useCallback)(function (event, newPage) {
        setPage(newPage);
    }, []);
    var handleChangeRowsPerPage = (0, react_1.useCallback)(function (event) {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(1);
    }, []);
    return ((0, jsx_runtime_1.jsxs)(Stack_1.default, { alignItems: "center", spacing: 8, sx: { width: 1 }, children: [(0, jsx_runtime_1.jsx)(Box_1.default, { gap: 2, display: "grid", gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, sx: { width: 1 }, children: items
                    .slice((page - 1) * rowsPerPage, (page - 1) * rowsPerPage + rowsPerPage)
                    .map(function (item) { return ((0, jsx_runtime_1.jsx)(Card_1.default, { sx: {
                        py: 3,
                        typography: 'h3',
                        borderRadius: 1.5,
                        textAlign: 'center',
                        color: function (theme) { return (0, styles_1.varAlpha)(theme.vars.palette.text.disabledChannel, 0.48); },
                    }, children: item }, item)); }) }), (0, jsx_runtime_1.jsxs)(Stack_1.default, { direction: "row", alignItems: "center", justifyContent: "space-between", sx: { width: 1 }, children: [(0, jsx_runtime_1.jsx)(Pagination_1.default, { page: page, shape: "circular", count: Math.ceil(items.length / rowsPerPage), onChange: handleChangePage }), (0, jsx_runtime_1.jsxs)(FormControl_1.default, { size: "small", sx: { width: 120 }, children: [(0, jsx_runtime_1.jsx)(InputLabel_1.default, { htmlFor: "demo-pagination-select-label", children: "Items per page" }), (0, jsx_runtime_1.jsxs)(Select_1.default, { value: String(rowsPerPage), label: "Item per page", onChange: handleChangeRowsPerPage, inputProps: { id: 'demo-pagination-select-label' }, children: [(0, jsx_runtime_1.jsx)(MenuItem_1.default, { value: 8, children: "8" }), (0, jsx_runtime_1.jsx)(MenuItem_1.default, { value: 12, children: "12" }), (0, jsx_runtime_1.jsx)(MenuItem_1.default, { value: 24, children: "24" })] })] })] })] }));
}

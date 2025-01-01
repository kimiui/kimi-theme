'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupingFixedHeaderTable = GroupingFixedHeaderTable;
var jsx_runtime_1 = require("react/jsx-runtime");
var Table_1 = __importDefault(require("@mui/material/Table"));
var TableRow_1 = __importDefault(require("@mui/material/TableRow"));
var TableHead_1 = __importDefault(require("@mui/material/TableHead"));
var TableCell_1 = __importDefault(require("@mui/material/TableCell"));
var TableBody_1 = __importDefault(require("@mui/material/TableBody"));
var scrollbar_1 = require("lib/components/scrollbar");
var table_1 = require("lib/components/table");
// ----------------------------------------------------------------------
function createData(name, code, population, size) {
    var density = population / size;
    return {
        name: name,
        code: code,
        population: population,
        size: size,
        density: density,
    };
}
var TABLE_DATA = [
    createData('India', 'IN', 1324171354, 3287263),
    createData('China', 'CN', 1403500365, 9596961),
    createData('Italy', 'IT', 60483973, 301340),
    createData('United States', 'US', 327167434, 9833520),
    createData('Canada', 'CA', 37602103, 9984670),
    createData('Australia', 'AU', 25475400, 7692024),
    createData('Germany', 'DE', 83019200, 357578),
    createData('Ireland', 'IE', 4857000, 70273),
    createData('Mexico', 'MX', 126577691, 1972550),
    createData('Japan', 'JP', 126317000, 377973),
    createData('France', 'FR', 67022000, 640679),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767),
];
var COLUMNS = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
    {
        id: 'population',
        label: 'Population',
        minWidth: 170,
        align: 'right',
        format: function (value) { return value.toLocaleString('en-US'); },
    },
    {
        id: 'size',
        label: 'Size\u00a0(km\u00b2)',
        minWidth: 170,
        align: 'right',
        format: function (value) { return value.toLocaleString('en-US'); },
    },
    {
        id: 'density',
        label: 'Density',
        minWidth: 170,
        align: 'right',
        format: function (value) { return value.toFixed(2); },
    },
];
// ----------------------------------------------------------------------
function GroupingFixedHeaderTable() {
    var table = (0, table_1.useTable)({ defaultRowsPerPage: 10 });
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(scrollbar_1.Scrollbar, { sx: { maxHeight: 400 }, children: (0, jsx_runtime_1.jsxs)(Table_1.default, { stickyHeader: true, sx: { minWidth: 800 }, children: [(0, jsx_runtime_1.jsxs)(TableHead_1.default, { children: [(0, jsx_runtime_1.jsxs)(TableRow_1.default, { children: [(0, jsx_runtime_1.jsx)(TableCell_1.default, { align: "center", colSpan: 2, sx: {
                                                borderBottomColor: 'transparent',
                                                background: function (theme) { return theme.vars.palette.background.paper; },
                                            }, children: "Country" }), (0, jsx_runtime_1.jsx)(TableCell_1.default, { align: "center", colSpan: 3, sx: {
                                                borderBottomColor: 'transparent',
                                                background: function (theme) { return theme.vars.palette.background.paper; },
                                            }, children: "Details" })] }), (0, jsx_runtime_1.jsx)(TableRow_1.default, { children: COLUMNS.map(function (column) { return ((0, jsx_runtime_1.jsx)(TableCell_1.default, { align: column.align, style: { top: 56, minWidth: column.minWidth }, children: column.label }, column.id)); }) })] }), (0, jsx_runtime_1.jsx)(TableBody_1.default, { children: TABLE_DATA.slice(table.page * table.rowsPerPage, table.page * table.rowsPerPage + table.rowsPerPage).map(function (row) { return ((0, jsx_runtime_1.jsx)(TableRow_1.default, { hover: true, role: "checkbox", tabIndex: -1, children: COLUMNS.map(function (column) {
                                    var value = row[column.id];
                                    return ((0, jsx_runtime_1.jsx)(TableCell_1.default, { align: column.align, children: column.format && typeof value === 'number' ? column.format(value) : value }, column.id));
                                }) }, row.code)); }) })] }) }), (0, jsx_runtime_1.jsx)(table_1.TablePaginationCustom, { page: table.page, count: TABLE_DATA.length, rowsPerPage: table.rowsPerPage, onPageChange: table.onChangePage, onRowsPerPageChange: table.onChangeRowsPerPage })] }));
}

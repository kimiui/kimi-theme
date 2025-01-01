'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortingSelectingTable = SortingSelectingTable;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Table_1 = __importDefault(require("@mui/material/Table"));
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var react_1 = require("react");
var Tooltip_1 = __importDefault(require("@mui/material/Tooltip"));
var TableRow_1 = __importDefault(require("@mui/material/TableRow"));
var Checkbox_1 = __importDefault(require("@mui/material/Checkbox"));
var TableCell_1 = __importDefault(require("@mui/material/TableCell"));
var TableBody_1 = __importDefault(require("@mui/material/TableBody"));
var IconButton_1 = __importDefault(require("@mui/material/IconButton"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var iconify_1 = require("lib/components/iconify");
var scrollbar_1 = require("lib/components/scrollbar");
var table_1 = require("lib/components/table");
function createData(name, calories, fat, carbs, protein) {
    return {
        name: name,
        calories: calories,
        fat: fat,
        carbs: carbs,
        protein: protein,
    };
}
var TABLE_DATA = [
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Donut', 452, 25.0, 51, 4.9),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Honeycomb', 408, 3.2, 87, 6.5),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Jelly Bean', 375, 0.0, 94, 0.0),
    createData('KitKat', 518, 26.0, 65, 7.0),
    createData('Lollipop', 392, 0.2, 98, 0.0),
    createData('Marshmallow', 318, 0, 81, 2.0),
    createData('Nougat', 360, 19.0, 9, 37.0),
];
var TABLE_HEAD = [
    { id: 'name', label: 'Dessert (100g serving)', align: 'left' },
    { id: 'calories', label: 'Calories', align: 'center' },
    { id: 'fat', label: 'Fat (g)', align: 'center' },
    { id: 'carbs', label: 'Carbs (g)', align: 'center' },
    { id: 'protein', label: 'Protein (g)', align: 'center' },
];
// ----------------------------------------------------------------------
function SortingSelectingTable() {
    var table = (0, table_1.useTable)({ defaultOrderBy: 'calories' });
    var _a = (0, react_1.useState)([]), tableData = _a[0], setTableData = _a[1];
    (0, react_1.useEffect)(function () {
        setTableData(TABLE_DATA);
    }, []);
    var dataFiltered = applyFilter({
        inputData: tableData,
        comparator: (0, table_1.getComparator)(table.order, table.orderBy),
    });
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)(Stack_1.default, { direction: "row", alignItems: "center", justifyContent: "space-between", sx: { p: 3 }, children: [(0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "h6", children: " Title" }), (0, jsx_runtime_1.jsx)(Tooltip_1.default, { title: "Filter list", children: (0, jsx_runtime_1.jsx)(IconButton_1.default, { children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "ic:round-filter-list" }) }) })] }), (0, jsx_runtime_1.jsxs)(Box_1.default, { sx: { position: 'relative' }, children: [(0, jsx_runtime_1.jsx)(table_1.TableSelectedAction, { dense: table.dense, numSelected: table.selected.length, rowCount: tableData.length, onSelectAllRows: function (checked) {
                            return table.onSelectAllRows(checked, tableData.map(function (row) { return row.name; }));
                        }, action: (0, jsx_runtime_1.jsx)(Tooltip_1.default, { title: "Delete", children: (0, jsx_runtime_1.jsx)(IconButton_1.default, { color: "primary", children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "solar:trash-bin-trash-bold" }) }) }) }), (0, jsx_runtime_1.jsx)(scrollbar_1.Scrollbar, { children: (0, jsx_runtime_1.jsxs)(Table_1.default, { size: table.dense ? 'small' : 'medium', sx: { minWidth: 800 }, children: [(0, jsx_runtime_1.jsx)(table_1.TableHeadCustom, { order: table.order, orderBy: table.orderBy, headLabel: TABLE_HEAD, rowCount: tableData.length, numSelected: table.selected.length, onSort: table.onSort, onSelectAllRows: function (checked) {
                                        return table.onSelectAllRows(checked, tableData.map(function (row) { return row.name; }));
                                    } }), (0, jsx_runtime_1.jsxs)(TableBody_1.default, { children: [dataFiltered
                                            .slice(table.page * table.rowsPerPage, table.page * table.rowsPerPage + table.rowsPerPage)
                                            .map(function (row) { return ((0, jsx_runtime_1.jsxs)(TableRow_1.default, { hover: true, onClick: function () { return table.onSelectRow(row.name); }, selected: table.selected.includes(row.name), children: [(0, jsx_runtime_1.jsx)(TableCell_1.default, { padding: "checkbox", children: (0, jsx_runtime_1.jsx)(Checkbox_1.default, { checked: table.selected.includes(row.name) }) }), (0, jsx_runtime_1.jsxs)(TableCell_1.default, { children: [" ", row.name, " "] }), (0, jsx_runtime_1.jsx)(TableCell_1.default, { align: "center", children: row.calories }), (0, jsx_runtime_1.jsx)(TableCell_1.default, { align: "center", children: row.fat }), (0, jsx_runtime_1.jsx)(TableCell_1.default, { align: "center", children: row.carbs }), (0, jsx_runtime_1.jsx)(TableCell_1.default, { align: "center", children: row.protein })] }, row.name)); }), (0, jsx_runtime_1.jsx)(table_1.TableEmptyRows, { height: table.dense ? 34 : 34 + 20, emptyRows: (0, table_1.emptyRows)(table.page, table.rowsPerPage, tableData.length) })] })] }) })] }), (0, jsx_runtime_1.jsx)(table_1.TablePaginationCustom, { page: table.page, dense: table.dense, count: dataFiltered.length, rowsPerPage: table.rowsPerPage, onPageChange: table.onChangePage, onChangeDense: table.onChangeDense, onRowsPerPageChange: table.onChangeRowsPerPage })] }));
}
function applyFilter(_a) {
    var inputData = _a.inputData, comparator = _a.comparator;
    var stabilizedThis = inputData.map(function (el, index) { return [el, index]; });
    stabilizedThis.sort(function (a, b) {
        var order = comparator(a[0], b[0]);
        if (order !== 0)
            return order;
        return a[1] - b[1];
    });
    inputData = stabilizedThis.map(function (el) { return el[0]; });
    return inputData;
}

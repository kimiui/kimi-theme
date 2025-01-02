'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import Stack from '@mui/material/Stack';
import { useState, useEffect } from 'react';
import Tooltip from '@mui/material/Tooltip';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Iconify } from '../../../components/iconify';
import { Scrollbar } from '../../../components/scrollbar';
import { useTable, emptyRows, getComparator, TableEmptyRows, TableHeadCustom, TableSelectedAction, TablePaginationCustom, } from '../../../components/table';
function createData(name, calories, fat, carbs, protein) {
    return {
        name,
        calories,
        fat,
        carbs,
        protein,
    };
}
const TABLE_DATA = [
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
const TABLE_HEAD = [
    { id: 'name', label: 'Dessert (100g serving)', align: 'left' },
    { id: 'calories', label: 'Calories', align: 'center' },
    { id: 'fat', label: 'Fat (g)', align: 'center' },
    { id: 'carbs', label: 'Carbs (g)', align: 'center' },
    { id: 'protein', label: 'Protein (g)', align: 'center' },
];
// ----------------------------------------------------------------------
export function SortingSelectingTable() {
    const table = useTable({ defaultOrderBy: 'calories' });
    const [tableData, setTableData] = useState([]);
    useEffect(() => {
        setTableData(TABLE_DATA);
    }, []);
    const dataFiltered = applyFilter({
        inputData: tableData,
        comparator: getComparator(table.order, table.orderBy),
    });
    return (_jsxs("div", { children: [_jsxs(Stack, { direction: "row", alignItems: "center", justifyContent: "space-between", sx: { p: 3 }, children: [_jsx(Typography, { variant: "h6", children: " Title" }), _jsx(Tooltip, { title: "Filter list", children: _jsx(IconButton, { children: _jsx(Iconify, { icon: "ic:round-filter-list" }) }) })] }), _jsxs(Box, { sx: { position: 'relative' }, children: [_jsx(TableSelectedAction, { dense: table.dense, numSelected: table.selected.length, rowCount: tableData.length, onSelectAllRows: (checked) => table.onSelectAllRows(checked, tableData.map((row) => row.name)), action: _jsx(Tooltip, { title: "Delete", children: _jsx(IconButton, { color: "primary", children: _jsx(Iconify, { icon: "solar:trash-bin-trash-bold" }) }) }) }), _jsx(Scrollbar, { children: _jsxs(Table, { size: table.dense ? 'small' : 'medium', sx: { minWidth: 800 }, children: [_jsx(TableHeadCustom, { order: table.order, orderBy: table.orderBy, headLabel: TABLE_HEAD, rowCount: tableData.length, numSelected: table.selected.length, onSort: table.onSort, onSelectAllRows: (checked) => table.onSelectAllRows(checked, tableData.map((row) => row.name)) }), _jsxs(TableBody, { children: [dataFiltered
                                            .slice(table.page * table.rowsPerPage, table.page * table.rowsPerPage + table.rowsPerPage)
                                            .map((row) => (_jsxs(TableRow, { hover: true, onClick: () => table.onSelectRow(row.name), selected: table.selected.includes(row.name), children: [_jsx(TableCell, { padding: "checkbox", children: _jsx(Checkbox, { checked: table.selected.includes(row.name) }) }), _jsxs(TableCell, { children: [" ", row.name, " "] }), _jsx(TableCell, { align: "center", children: row.calories }), _jsx(TableCell, { align: "center", children: row.fat }), _jsx(TableCell, { align: "center", children: row.carbs }), _jsx(TableCell, { align: "center", children: row.protein })] }, row.name))), _jsx(TableEmptyRows, { height: table.dense ? 34 : 34 + 20, emptyRows: emptyRows(table.page, table.rowsPerPage, tableData.length) })] })] }) })] }), _jsx(TablePaginationCustom, { page: table.page, dense: table.dense, count: dataFiltered.length, rowsPerPage: table.rowsPerPage, onPageChange: table.onChangePage, onChangeDense: table.onChangeDense, onRowsPerPageChange: table.onChangeRowsPerPage })] }));
}
function applyFilter({ inputData, comparator }) {
    const stabilizedThis = inputData.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0)
            return order;
        return a[1] - b[1];
    });
    inputData = stabilizedThis.map((el) => el[0]);
    return inputData;
}

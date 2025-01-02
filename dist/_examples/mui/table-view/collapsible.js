'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useBoolean } from 'ahooks';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import Collapse from '@mui/material/Collapse';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Iconify } from '../../../components/iconify';
import { Scrollbar } from '../../../components/scrollbar';
import { createData } from './utils';
// ----------------------------------------------------------------------
const TABLE_DATA = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
    createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
    createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
    createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
];
export function CollapsibleTable() {
    return (_jsx(Scrollbar, { children: _jsxs(Table, { sx: { minWidth: 800 }, children: [_jsx(TableHead, { children: _jsxs(TableRow, { children: [_jsx(TableCell, {}), _jsx(TableCell, { children: "Dessert (100g serving)" }), _jsx(TableCell, { align: "right", children: "Calories" }), _jsx(TableCell, { align: "right", children: "Fat\u00A0(g)" }), _jsx(TableCell, { align: "right", children: "Carbs\u00A0(g)" }), _jsx(TableCell, { align: "right", children: "Protein\u00A0(g)" })] }) }), _jsx(TableBody, { children: TABLE_DATA.map((row) => (_jsx(CollapsibleTableRow, { row: row }, row.name))) })] }) }));
}
function CollapsibleTableRow({ row }) {
    const [collapsible, collapsibleActions] = useBoolean();
    return (_jsxs(_Fragment, { children: [_jsxs(TableRow, { sx: { '& > *': { borderBottom: 'unset' } }, children: [_jsx(TableCell, { children: _jsx(IconButton, { size: "small", color: collapsible ? 'inherit' : 'default', onClick: collapsibleActions.toggle, children: _jsx(Iconify, { icon: collapsible ? 'eva:arrow-ios-upward-fill' : 'eva:arrow-ios-downward-fill' }) }) }), _jsx(TableCell, { component: "th", scope: "row", children: row.name }), _jsx(TableCell, { align: "right", children: row.calories }), _jsx(TableCell, { align: "right", children: row.fat }), _jsx(TableCell, { align: "right", children: row.carbs }), _jsx(TableCell, { align: "right", children: row.protein })] }), _jsx(TableRow, { children: _jsx(TableCell, { sx: { py: 0 }, colSpan: 6, children: _jsx(Collapse, { in: collapsible, timeout: "auto", unmountOnExit: true, children: _jsxs(Paper, { variant: "outlined", sx: {
                                py: 2,
                                mb: 2,
                                borderRadius: 1.5,
                                ...(collapsible && { boxShadow: (theme) => theme.shadows[20] }),
                            }, children: [_jsx(Typography, { variant: "h6", component: "div", sx: { p: 2 }, children: "History" }), _jsxs(Table, { size: "small", "aria-label": "purchases", children: [_jsx(TableHead, { children: _jsxs(TableRow, { children: [_jsx(TableCell, { children: "Date" }), _jsx(TableCell, { children: "Customer" }), _jsx(TableCell, { align: "right", children: "Amount" }), _jsx(TableCell, { align: "right", children: "Total price ($)" })] }) }), _jsx(TableBody, { children: row.history.map((historyRow) => (_jsxs(TableRow, { children: [_jsx(TableCell, { component: "th", scope: "row", children: historyRow.date }), _jsx(TableCell, { children: historyRow.customerId }), _jsx(TableCell, { align: "right", children: historyRow.amount }), _jsx(TableCell, { align: "right", children: Math.round(historyRow.amount * row.price * 100) / 100 })] }, historyRow.date))) })] })] }) }) }) })] }));
}

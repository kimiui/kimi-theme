import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import { Scrollbar } from '../../../components/scrollbar';
import { TableHeadCustom } from '../../../components/table';
// ----------------------------------------------------------------------
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
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];
const TABLE_HEAD = [
    { id: 'dessert', label: 'Dessert (100g serving)' },
    { id: 'calories', label: 'Calories', align: 'right' },
    { id: 'fat', label: 'Fat (g)', align: 'right' },
    { id: 'carbs', label: 'Carbs (g)', align: 'right' },
    { id: 'protein', label: 'Protein (g)', align: 'right' },
];
// ----------------------------------------------------------------------
export function BasicTable() {
    return (_jsx(Scrollbar, { children: _jsxs(Table, { sx: { minWidth: 800 }, children: [_jsx(TableHeadCustom, { headLabel: TABLE_HEAD }), _jsx(TableBody, { children: TABLE_DATA.map((row) => (_jsxs(TableRow, { children: [_jsx(TableCell, { children: row.name }), _jsx(TableCell, { align: "right", children: row.calories }), _jsx(TableCell, { align: "right", children: row.fat }), _jsx(TableCell, { align: "right", children: row.carbs }), _jsx(TableCell, { align: "right", children: row.protein })] }, row.name))) })] }) }));
}

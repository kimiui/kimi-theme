"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicTable = BasicTable;
var jsx_runtime_1 = require("react/jsx-runtime");
var Table_1 = __importDefault(require("@mui/material/Table"));
var TableRow_1 = __importDefault(require("@mui/material/TableRow"));
var TableCell_1 = __importDefault(require("@mui/material/TableCell"));
var TableBody_1 = __importDefault(require("@mui/material/TableBody"));
var scrollbar_1 = require("lib/components/scrollbar");
var table_1 = require("lib/components/table");
// ----------------------------------------------------------------------
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
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];
var TABLE_HEAD = [
    { id: 'dessert', label: 'Dessert (100g serving)' },
    { id: 'calories', label: 'Calories', align: 'right' },
    { id: 'fat', label: 'Fat (g)', align: 'right' },
    { id: 'carbs', label: 'Carbs (g)', align: 'right' },
    { id: 'protein', label: 'Protein (g)', align: 'right' },
];
// ----------------------------------------------------------------------
function BasicTable() {
    return ((0, jsx_runtime_1.jsx)(scrollbar_1.Scrollbar, { children: (0, jsx_runtime_1.jsxs)(Table_1.default, { sx: { minWidth: 800 }, children: [(0, jsx_runtime_1.jsx)(table_1.TableHeadCustom, { headLabel: TABLE_HEAD }), (0, jsx_runtime_1.jsx)(TableBody_1.default, { children: TABLE_DATA.map(function (row) { return ((0, jsx_runtime_1.jsxs)(TableRow_1.default, { children: [(0, jsx_runtime_1.jsx)(TableCell_1.default, { children: row.name }), (0, jsx_runtime_1.jsx)(TableCell_1.default, { align: "right", children: row.calories }), (0, jsx_runtime_1.jsx)(TableCell_1.default, { align: "right", children: row.fat }), (0, jsx_runtime_1.jsx)(TableCell_1.default, { align: "right", children: row.carbs }), (0, jsx_runtime_1.jsx)(TableCell_1.default, { align: "right", children: row.protein })] }, row.name)); }) })] }) }));
}

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
exports.TableHeadCustom = TableHeadCustom;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var TableRow_1 = __importDefault(require("@mui/material/TableRow"));
var Checkbox_1 = __importDefault(require("@mui/material/Checkbox"));
var TableHead_1 = __importDefault(require("@mui/material/TableHead"));
var TableCell_1 = __importDefault(require("@mui/material/TableCell"));
var TableSortLabel_1 = __importDefault(require("@mui/material/TableSortLabel"));
// ----------------------------------------------------------------------
var visuallyHidden = {
    border: 0,
    margin: -1,
    padding: 0,
    width: '1px',
    height: '1px',
    overflow: 'hidden',
    position: 'absolute',
    whiteSpace: 'nowrap',
    clip: 'rect(0 0 0 0)',
};
function TableHeadCustom(_a) {
    var sx = _a.sx, order = _a.order, onSort = _a.onSort, orderBy = _a.orderBy, headLabel = _a.headLabel, _b = _a.rowCount, rowCount = _b === void 0 ? 0 : _b, _c = _a.numSelected, numSelected = _c === void 0 ? 0 : _c, onSelectAllRows = _a.onSelectAllRows;
    return ((0, jsx_runtime_1.jsx)(TableHead_1.default, { sx: sx, children: (0, jsx_runtime_1.jsxs)(TableRow_1.default, { children: [onSelectAllRows && ((0, jsx_runtime_1.jsx)(TableCell_1.default, { padding: "checkbox", children: (0, jsx_runtime_1.jsx)(Checkbox_1.default, { indeterminate: !!numSelected && numSelected < rowCount, checked: !!rowCount && numSelected === rowCount, onChange: function (event) {
                            return onSelectAllRows(event.target.checked);
                        }, inputProps: {
                            name: 'select-all-rows',
                            'aria-label': 'select all rows',
                        } }) })), headLabel.map(function (headCell) { return ((0, jsx_runtime_1.jsx)(TableCell_1.default, { align: headCell.align || 'left', sortDirection: orderBy === headCell.id ? order : false, sx: { width: headCell.width, minWidth: headCell.minWidth }, children: onSort ? ((0, jsx_runtime_1.jsxs)(TableSortLabel_1.default, { hideSortIcon: true, active: orderBy === headCell.id, direction: orderBy === headCell.id ? order : 'asc', onClick: function () { return onSort(headCell.id); }, children: [headCell.label, orderBy === headCell.id ? ((0, jsx_runtime_1.jsx)(Box_1.default, { sx: __assign({}, visuallyHidden), children: order === 'desc' ? 'sorted descending' : 'sorted ascending' })) : null] })) : (headCell.label) }, headCell.id)); })] }) }));
}

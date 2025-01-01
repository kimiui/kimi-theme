"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataGridBasic = DataGridBasic;
var jsx_runtime_1 = require("react/jsx-runtime");
var x_data_grid_1 = require("@mui/x-data-grid");
var iconify_1 = require("../../../components/iconify");
// ----------------------------------------------------------------------
var columns = [
    { field: 'id', headerName: 'ID', width: 120 },
    {
        field: 'firstName',
        headerName: 'First name',
        width: 160,
        editable: true,
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 160,
        editable: true,
    },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 120,
        editable: true,
        align: 'center',
        headerAlign: 'center',
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        flex: 1,
        renderCell: function (params) { return "".concat(params.row.firstName, " ").concat(params.row.lastName); },
    },
    {
        type: 'actions',
        field: 'actions',
        headerName: 'Actions',
        align: 'right',
        headerAlign: 'right',
        width: 80,
        sortable: false,
        filterable: false,
        disableColumnMenu: true,
        getActions: function (params) { return [
            (0, jsx_runtime_1.jsx)(x_data_grid_1.GridActionsCellItem, { showInMenu: true, icon: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "solar:eye-bold" }), label: "View", onClick: function () { return console.info('VIEW', params.row.id); } }),
            (0, jsx_runtime_1.jsx)(x_data_grid_1.GridActionsCellItem, { showInMenu: true, icon: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "solar:pen-bold" }), label: "Edit", onClick: function () { return console.info('EDIT', params.row.id); } }),
            (0, jsx_runtime_1.jsx)(x_data_grid_1.GridActionsCellItem, { showInMenu: true, icon: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "solar:trash-bin-trash-bold" }), label: "Delete", onClick: function () { return console.info('DELETE', params.row.id); }, sx: { color: 'error.main' } }),
        ]; },
    },
];
function DataGridBasic(_a) {
    var data = _a.data;
    return (0, jsx_runtime_1.jsx)(x_data_grid_1.DataGrid, { columns: columns, rows: data, checkboxSelection: true, disableRowSelectionOnClick: true });
}

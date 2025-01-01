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
exports.DataGridCustom = DataGridCustom;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Link_1 = __importDefault(require("@mui/material/Link"));
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var Avatar_1 = __importDefault(require("@mui/material/Avatar"));
var Rating_1 = __importDefault(require("@mui/material/Rating"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var LinearProgress_1 = __importDefault(require("@mui/material/LinearProgress"));
var react_1 = require("react");
var x_data_grid_1 = require("@mui/x-data-grid");
var label_1 = require("lib/components/label");
var iconify_1 = require("lib/components/iconify");
var format_number_1 = require("lib/utils/format-number");
var format_time_1 = require("lib/utils/format-time");
var empty_content_1 = require("lib/components/empty-content");
// ----------------------------------------------------------------------
var baseColumns = [
    { field: 'id', headerName: 'Id', filterable: false },
    {
        field: 'name',
        headerName: 'Name',
        flex: 1,
        minWidth: 160,
        hideable: false,
        renderCell: function (params) { return ((0, jsx_runtime_1.jsxs)(Stack_1.default, { spacing: 2, direction: "row", alignItems: "center", children: [(0, jsx_runtime_1.jsx)(Avatar_1.default, { alt: params.row.name, sx: { width: 36, height: 36 }, children: params.row.name.charAt(0).toUpperCase() }), (0, jsx_runtime_1.jsx)(Typography_1.default, { component: "span", variant: "body2", noWrap: true, children: params.row.name })] })); },
    },
    {
        field: 'email',
        headerName: 'Email',
        flex: 1,
        minWidth: 160,
        editable: true,
        renderCell: function (params) { return ((0, jsx_runtime_1.jsx)(Link_1.default, { color: "inherit", noWrap: true, children: params.row.email })); },
    },
    {
        type: 'string',
        field: 'lastLogin',
        headerName: 'Last login',
        align: 'right',
        headerAlign: 'right',
        width: 120,
        renderCell: function (params) { return ((0, jsx_runtime_1.jsxs)(Stack_1.default, { spacing: 0.5, sx: {
                height: 1,
                lineHeight: 1,
                textAlign: 'right',
                justifyContent: 'center',
            }, children: [(0, jsx_runtime_1.jsx)(Box_1.default, { component: "span", children: (0, format_time_1.fDate)(params.row.lastLogin) }), (0, jsx_runtime_1.jsx)(Box_1.default, { component: "span", sx: { color: 'text.secondary', typography: 'caption' }, children: (0, format_time_1.fTime)(params.row.lastLogin) })] })); },
    },
    {
        type: 'number',
        field: 'rating',
        headerName: 'Rating',
        width: 140,
        renderCell: function (params) { return ((0, jsx_runtime_1.jsx)(Rating_1.default, { size: "small", value: params.row.rating, precision: 0.5, readOnly: true })); },
    },
    {
        type: 'singleSelect',
        field: 'status',
        headerName: 'Status',
        align: 'center',
        headerAlign: 'center',
        width: 100,
        editable: true,
        valueOptions: ['online', 'alway', 'busy'],
        renderCell: function (params) { return ((0, jsx_runtime_1.jsx)(label_1.Label, { variant: "soft", color: (params.row.status === 'busy' && 'error') ||
                (params.row.status === 'alway' && 'warning') ||
                'success', children: params.row.status })); },
    },
    {
        type: 'boolean',
        field: 'isAdmin',
        align: 'center',
        headerAlign: 'center',
        width: 80,
        renderCell: function (params) {
            return params.row.isAdmin ? ((0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "eva:checkmark-circle-2-fill", sx: { color: 'primary.main' } })) : ('-');
        },
    },
    {
        type: 'number',
        field: 'performance',
        headerName: 'Performance',
        align: 'center',
        headerAlign: 'center',
        width: 160,
        renderCell: function (params) { return ((0, jsx_runtime_1.jsxs)(Stack_1.default, { spacing: 1, direction: "row", alignItems: "center", sx: { px: 1, width: 1, height: 1 }, children: [(0, jsx_runtime_1.jsx)(LinearProgress_1.default, { value: params.row.performance, variant: "determinate", color: (params.row.performance < 30 && 'error') ||
                        (params.row.performance > 30 && params.row.performance < 70 && 'warning') ||
                        'primary', sx: { width: 1, height: 6 } }), (0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "caption", sx: { width: 80 }, children: (0, format_number_1.fPercent)(params.row.performance) })] })); },
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
var HIDE_COLUMNS = { id: false };
var HIDE_COLUMNS_TOGGLABLE = ['id', 'actions'];
function DataGridCustom(_a) {
    var _b;
    var rows = _a.data;
    var filterButtonEl = (0, react_1.useState)(null)[0];
    var _c = (0, react_1.useState)([]), selectedRows = _c[0], setSelectedRows = _c[1];
    var _d = (0, react_1.useState)(HIDE_COLUMNS), columnVisibilityModel = _d[0], setColumnVisibilityModel = _d[1];
    var columns = (0, react_1.useMemo)(function () {
        return baseColumns.map(function (col) {
            return col.field === 'rating' ? __assign(__assign({}, col), { filterOperators: ratingOnlyOperators }) : col;
        });
    }, []);
    var getTogglableColumns = function () {
        return columns
            .filter(function (column) { return !HIDE_COLUMNS_TOGGLABLE.includes(column.field); })
            .map(function (column) { return column.field; });
    };
    var selected = rows.filter(function (row) { return selectedRows.includes(row.id); }).map(function (_row) { return _row.id; });
    console.info('SELECTED ROWS', selected);
    return ((0, jsx_runtime_1.jsx)(x_data_grid_1.DataGrid, { checkboxSelection: true, disableRowSelectionOnClick: true, rows: rows, columns: columns, onRowSelectionModelChange: function (newSelectionModel) {
            setSelectedRows(newSelectionModel);
        }, columnVisibilityModel: columnVisibilityModel, onColumnVisibilityModelChange: function (newModel) { return setColumnVisibilityModel(newModel); }, slots: {
            toolbar: CustomToolbar,
            noRowsOverlay: function () { return (0, jsx_runtime_1.jsx)(empty_content_1.EmptyContent, {}); },
            noResultsOverlay: function () { return (0, jsx_runtime_1.jsx)(empty_content_1.EmptyContent, { title: "No results found" }); },
        }, slotProps: {
            panel: { anchorEl: filterButtonEl },
            toolbar: { showQuickFilter: true },
            columnsManagement: { getTogglableColumns: getTogglableColumns },
        }, sx: (_b = {},
            _b["& .".concat(x_data_grid_1.gridClasses.cell)] = {
                alignItems: 'center',
                display: 'inline-flex',
            },
            _b) }));
}
// ----------------------------------------------------------------------
function CustomToolbar() {
    return ((0, jsx_runtime_1.jsxs)(x_data_grid_1.GridToolbarContainer, { children: [(0, jsx_runtime_1.jsx)(x_data_grid_1.GridToolbarQuickFilter, {}), (0, jsx_runtime_1.jsx)(Box_1.default, { sx: { flexGrow: 1 } }), (0, jsx_runtime_1.jsx)(x_data_grid_1.GridToolbarColumnsButton, {}), (0, jsx_runtime_1.jsx)(x_data_grid_1.GridToolbarFilterButton, {}), (0, jsx_runtime_1.jsx)(x_data_grid_1.GridToolbarDensitySelector, {}), (0, jsx_runtime_1.jsx)(x_data_grid_1.GridToolbarExport, {})] }));
}
// ----------------------------------------------------------------------
function RatingInputValue(_a) {
    var item = _a.item, applyValue = _a.applyValue, focusElementRef = _a.focusElementRef;
    var ratingRef = (0, react_1.useRef)(null);
    (0, react_1.useImperativeHandle)(focusElementRef, function () { return ({
        focus: function () {
            ratingRef.current.querySelector("input[value=\"".concat(Number(item.value) || '', "\"]")).focus();
        },
    }); });
    var handleFilter = function (event, newValue) {
        applyValue(__assign(__assign({}, item), { value: newValue }));
    };
    return ((0, jsx_runtime_1.jsx)(Rating_1.default, { ref: ratingRef, precision: 0.5, value: Number(item.value), onChange: handleFilter, name: "custom-rating-filter-operator", sx: { ml: 2 } }));
}
var ratingOnlyOperators = [
    {
        label: 'Above',
        value: 'above',
        getApplyFilterFn: function (filterItem) {
            if (!filterItem.field || !filterItem.value || !filterItem.operator) {
                return null;
            }
            return function (params) { return Number(params.value) >= Number(filterItem.value); };
        },
        InputComponent: RatingInputValue,
        InputComponentProps: { type: 'number' },
        getValueAsString: function (value) { return "".concat(value, " Stars"); },
    },
];

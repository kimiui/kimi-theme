'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import { useRef, useMemo, useState, useImperativeHandle } from 'react';
import { DataGrid, gridClasses, GridToolbarExport, GridActionsCellItem, GridToolbarContainer, GridToolbarQuickFilter, GridToolbarFilterButton, GridToolbarColumnsButton, GridToolbarDensitySelector, } from '@mui/x-data-grid';
import { Label } from '../../../components/label';
import { Iconify } from '../../../components/iconify';
import { fPercent } from '../../../utils/format-number';
import { fDate, fTime } from '../../../utils/format-time';
import { EmptyContent } from '../../../components/empty-content';
// ----------------------------------------------------------------------
const baseColumns = [
    { field: 'id', headerName: 'Id', filterable: false },
    {
        field: 'name',
        headerName: 'Name',
        flex: 1,
        minWidth: 160,
        hideable: false,
        renderCell: (params) => (_jsxs(Stack, { spacing: 2, direction: "row", alignItems: "center", children: [_jsx(Avatar, { alt: params.row.name, sx: { width: 36, height: 36 }, children: params.row.name.charAt(0).toUpperCase() }), _jsx(Typography, { component: "span", variant: "body2", noWrap: true, children: params.row.name })] })),
    },
    {
        field: 'email',
        headerName: 'Email',
        flex: 1,
        minWidth: 160,
        editable: true,
        renderCell: (params) => (_jsx(Link, { color: "inherit", noWrap: true, children: params.row.email })),
    },
    {
        type: 'string',
        field: 'lastLogin',
        headerName: 'Last login',
        align: 'right',
        headerAlign: 'right',
        width: 120,
        renderCell: (params) => (_jsxs(Stack, { spacing: 0.5, sx: {
                height: 1,
                lineHeight: 1,
                textAlign: 'right',
                justifyContent: 'center',
            }, children: [_jsx(Box, { component: "span", children: fDate(params.row.lastLogin) }), _jsx(Box, { component: "span", sx: { color: 'text.secondary', typography: 'caption' }, children: fTime(params.row.lastLogin) })] })),
    },
    {
        type: 'number',
        field: 'rating',
        headerName: 'Rating',
        width: 140,
        renderCell: (params) => (_jsx(Rating, { size: "small", value: params.row.rating, precision: 0.5, readOnly: true })),
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
        renderCell: (params) => (_jsx(Label, { variant: "soft", color: (params.row.status === 'busy' && 'error') ||
                (params.row.status === 'alway' && 'warning') ||
                'success', children: params.row.status })),
    },
    {
        type: 'boolean',
        field: 'isAdmin',
        align: 'center',
        headerAlign: 'center',
        width: 80,
        renderCell: (params) => params.row.isAdmin ? (_jsx(Iconify, { icon: "eva:checkmark-circle-2-fill", sx: { color: 'primary.main' } })) : ('-'),
    },
    {
        type: 'number',
        field: 'performance',
        headerName: 'Performance',
        align: 'center',
        headerAlign: 'center',
        width: 160,
        renderCell: (params) => (_jsxs(Stack, { spacing: 1, direction: "row", alignItems: "center", sx: { px: 1, width: 1, height: 1 }, children: [_jsx(LinearProgress, { value: params.row.performance, variant: "determinate", color: (params.row.performance < 30 && 'error') ||
                        (params.row.performance > 30 && params.row.performance < 70 && 'warning') ||
                        'primary', sx: { width: 1, height: 6 } }), _jsx(Typography, { variant: "caption", sx: { width: 80 }, children: fPercent(params.row.performance) })] })),
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
        getActions: (params) => [
            _jsx(GridActionsCellItem, { showInMenu: true, icon: _jsx(Iconify, { icon: "solar:eye-bold" }), label: "View", onClick: () => console.info('VIEW', params.row.id) }),
            _jsx(GridActionsCellItem, { showInMenu: true, icon: _jsx(Iconify, { icon: "solar:pen-bold" }), label: "Edit", onClick: () => console.info('EDIT', params.row.id) }),
            _jsx(GridActionsCellItem, { showInMenu: true, icon: _jsx(Iconify, { icon: "solar:trash-bin-trash-bold" }), label: "Delete", onClick: () => console.info('DELETE', params.row.id), sx: { color: 'error.main' } }),
        ],
    },
];
const HIDE_COLUMNS = { id: false };
const HIDE_COLUMNS_TOGGLABLE = ['id', 'actions'];
export function DataGridCustom({ data: rows }) {
    const [filterButtonEl] = useState(null);
    const [selectedRows, setSelectedRows] = useState([]);
    const [columnVisibilityModel, setColumnVisibilityModel] = useState(HIDE_COLUMNS);
    const columns = useMemo(() => baseColumns.map((col) => col.field === 'rating' ? { ...col, filterOperators: ratingOnlyOperators } : col), []);
    const getTogglableColumns = () => columns
        .filter((column) => !HIDE_COLUMNS_TOGGLABLE.includes(column.field))
        .map((column) => column.field);
    const selected = rows.filter((row) => selectedRows.includes(row.id)).map((_row) => _row.id);
    console.info('SELECTED ROWS', selected);
    return (_jsx(DataGrid, { checkboxSelection: true, disableRowSelectionOnClick: true, rows: rows, columns: columns, onRowSelectionModelChange: (newSelectionModel) => {
            setSelectedRows(newSelectionModel);
        }, columnVisibilityModel: columnVisibilityModel, onColumnVisibilityModelChange: (newModel) => setColumnVisibilityModel(newModel), slots: {
            toolbar: CustomToolbar,
            noRowsOverlay: () => _jsx(EmptyContent, {}),
            noResultsOverlay: () => _jsx(EmptyContent, { title: "No results found" }),
        }, slotProps: {
            panel: { anchorEl: filterButtonEl },
            toolbar: { showQuickFilter: true },
            columnsManagement: { getTogglableColumns },
        }, sx: {
            [`& .${gridClasses.cell}`]: {
                alignItems: 'center',
                display: 'inline-flex',
            },
        } }));
}
// ----------------------------------------------------------------------
function CustomToolbar() {
    return (_jsxs(GridToolbarContainer, { children: [_jsx(GridToolbarQuickFilter, {}), _jsx(Box, { sx: { flexGrow: 1 } }), _jsx(GridToolbarColumnsButton, {}), _jsx(GridToolbarFilterButton, {}), _jsx(GridToolbarDensitySelector, {}), _jsx(GridToolbarExport, {})] }));
}
// ----------------------------------------------------------------------
function RatingInputValue({ item, applyValue, focusElementRef }) {
    const ratingRef = useRef(null);
    useImperativeHandle(focusElementRef, () => ({
        focus: () => {
            ratingRef.current.querySelector(`input[value="${Number(item.value) || ''}"]`).focus();
        },
    }));
    const handleFilter = (event, newValue) => {
        applyValue({ ...item, value: newValue });
    };
    return (_jsx(Rating, { ref: ratingRef, precision: 0.5, value: Number(item.value), onChange: handleFilter, name: "custom-rating-filter-operator", sx: { ml: 2 } }));
}
const ratingOnlyOperators = [
    {
        label: 'Above',
        value: 'above',
        getApplyFilterFn: (filterItem) => {
            if (!filterItem.field || !filterItem.value || !filterItem.operator) {
                return null;
            }
            return (params) => Number(params.value) >= Number(filterItem.value);
        },
        InputComponent: RatingInputValue,
        InputComponentProps: { type: 'number' },
        getValueAsString: (value) => `${value} Stars`,
    },
];

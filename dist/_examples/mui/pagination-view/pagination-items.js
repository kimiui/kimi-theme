'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Select from '@mui/material/Select';
import { useState, useCallback } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Pagination from '@mui/material/Pagination';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { varAlpha } from '../../../theme/styles';
// ----------------------------------------------------------------------
const items = [...Array(100)].map((_, index) => index + 1);
export function PaginationItems() {
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(12);
    const handleChangePage = useCallback((event, newPage) => {
        setPage(newPage);
    }, []);
    const handleChangeRowsPerPage = useCallback((event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(1);
    }, []);
    return (_jsxs(Stack, { alignItems: "center", spacing: 8, sx: { width: 1 }, children: [_jsx(Box, { gap: 2, display: "grid", gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, sx: { width: 1 }, children: items
                    .slice((page - 1) * rowsPerPage, (page - 1) * rowsPerPage + rowsPerPage)
                    .map((item) => (_jsx(Card, { sx: {
                        py: 3,
                        typography: 'h3',
                        borderRadius: 1.5,
                        textAlign: 'center',
                        color: (theme) => varAlpha(theme.vars.palette.text.disabledChannel, 0.48),
                    }, children: item }, item))) }), _jsxs(Stack, { direction: "row", alignItems: "center", justifyContent: "space-between", sx: { width: 1 }, children: [_jsx(Pagination, { page: page, shape: "circular", count: Math.ceil(items.length / rowsPerPage), onChange: handleChangePage }), _jsxs(FormControl, { size: "small", sx: { width: 120 }, children: [_jsx(InputLabel, { htmlFor: "demo-pagination-select-label", children: "Items per page" }), _jsxs(Select, { value: String(rowsPerPage), label: "Item per page", onChange: handleChangeRowsPerPage, inputProps: { id: 'demo-pagination-select-label' }, children: [_jsx(MenuItem, { value: 8, children: "8" }), _jsx(MenuItem, { value: 12, children: "12" }), _jsx(MenuItem, { value: 24, children: "24" })] })] })] })] }));
}

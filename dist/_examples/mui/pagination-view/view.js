'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useCallback } from 'react';
import Pagination from '@mui/material/Pagination';
import TablePagination from '@mui/material/TablePagination';
import { paths } from '../../../routes/paths';
import { CustomBreadcrumbs } from '../../../components/custom-breadcrumbs';
import { PaginationItems } from './pagination-items';
import { ComponentHero } from '../../component-hero';
import { ComponentBlock } from '../../component-block';
import { ScrollToViewTemplate } from '../../component-template';
// ----------------------------------------------------------------------
const COLORS = ['standard', 'primary', 'secondary', 'info', 'success', 'warning', 'error'];
const SIZES = ['small', 'medium', 'large'];
// ----------------------------------------------------------------------
const blockProps = { gap: 3, flexDirection: 'column' };
export function PaginationView() {
    const [page, setPage] = useState(2);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const handleChangePage = useCallback((event, newPage) => {
        setPage(newPage);
    }, []);
    const handleChangeRowsPerPage = useCallback((event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    }, []);
    const DEMO = [
        {
            name: 'Circular',
            component: (_jsxs(ComponentBlock, { sx: blockProps, children: [_jsx(Pagination, { shape: "circular", count: 10, variant: "text" }), _jsx(Pagination, { shape: "circular", count: 10, variant: "text", disabled: true }), _jsx(Pagination, { shape: "circular", count: 10, variant: "outlined" }), _jsx(Pagination, { shape: "circular", count: 10, variant: "outlined", disabled: true }), _jsx(Pagination, { shape: "circular", count: 10, variant: "soft" }), _jsx(Pagination, { shape: "circular", count: 10, variant: "soft", disabled: true })] })),
        },
        {
            name: 'Rounded',
            component: (_jsxs(ComponentBlock, { sx: blockProps, children: [_jsx(Pagination, { shape: "rounded", count: 10, variant: "text" }), _jsx(Pagination, { shape: "rounded", count: 10, variant: "text", disabled: true }), _jsx(Pagination, { shape: "rounded", count: 10, variant: "outlined" }), _jsx(Pagination, { shape: "rounded", count: 10, variant: "outlined", disabled: true }), _jsx(Pagination, { shape: "rounded", count: 10, variant: "soft" }), _jsx(Pagination, { shape: "rounded", count: 10, variant: "soft", disabled: true })] })),
        },
        {
            name: 'Colors',
            component: (_jsxs(ComponentBlock, { sx: blockProps, children: [COLORS.map((color) => (_jsx(Pagination, { color: color, count: 10, variant: "text" }, color))), COLORS.map((color) => (_jsx(Pagination, { color: color, count: 10, variant: "outlined" }, color))), COLORS.map((color) => (_jsx(Pagination, { color: color, count: 10, variant: "soft" }, color)))] })),
        },
        {
            name: 'Sizes',
            component: (_jsx(ComponentBlock, { sx: blockProps, children: SIZES.map((size) => (_jsx(Pagination, { count: 10, size: size }, size))) })),
        },
        {
            name: 'Buttons',
            component: (_jsxs(ComponentBlock, { sx: blockProps, children: [_jsx(Pagination, { count: 10, showFirstButton: true, showLastButton: true }), _jsx(Pagination, { count: 10, hidePrevButton: true, hideNextButton: true })] })),
        },
        {
            name: 'Ranges',
            component: (_jsxs(ComponentBlock, { sx: blockProps, children: [_jsx(Pagination, { count: 11, defaultPage: 6, siblingCount: 0 }), _jsx(Pagination, { count: 11, defaultPage: 6 }), _jsx(Pagination, { count: 11, defaultPage: 6, siblingCount: 0, boundaryCount: 2 }), _jsx(Pagination, { count: 11, defaultPage: 6, boundaryCount: 2 })] })),
        },
        {
            name: 'Table',
            component: (_jsx(ComponentBlock, { sx: blockProps, children: _jsx(TablePagination, { component: "div", count: 100, page: page, onPageChange: handleChangePage, rowsPerPage: rowsPerPage, onRowsPerPageChange: handleChangeRowsPerPage }) })),
        },
        {
            name: 'Items',
            component: (_jsx(ComponentBlock, { sx: blockProps, children: _jsx(PaginationItems, {}) })),
        },
    ];
    return (_jsxs(_Fragment, { children: [_jsx(ComponentHero, { children: _jsx(CustomBreadcrumbs, { heading: "Pagination", links: [{ name: 'Components', href: paths.docs.components.root }, { name: 'Pagination' }], moreLink: ['https://mui.com/components/pagination'] }) }), _jsx(ScrollToViewTemplate, { data: DEMO })] }));
}

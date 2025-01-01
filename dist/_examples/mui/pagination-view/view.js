'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationView = PaginationView;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Pagination_1 = __importDefault(require("@mui/material/Pagination"));
var TablePagination_1 = __importDefault(require("@mui/material/TablePagination"));
var paths_1 = require("../../../routes/paths");
var custom_breadcrumbs_1 = require("../../../components/custom-breadcrumbs");
var pagination_items_1 = require("./pagination-items");
var component_hero_1 = require("../../component-hero");
var component_block_1 = require("../../component-block");
var component_template_1 = require("../../component-template");
// ----------------------------------------------------------------------
var COLORS = ['standard', 'primary', 'secondary', 'info', 'success', 'warning', 'error'];
var SIZES = ['small', 'medium', 'large'];
// ----------------------------------------------------------------------
var blockProps = { gap: 3, flexDirection: 'column' };
function PaginationView() {
    var _a = (0, react_1.useState)(2), page = _a[0], setPage = _a[1];
    var _b = (0, react_1.useState)(10), rowsPerPage = _b[0], setRowsPerPage = _b[1];
    var handleChangePage = (0, react_1.useCallback)(function (event, newPage) {
        setPage(newPage);
    }, []);
    var handleChangeRowsPerPage = (0, react_1.useCallback)(function (event) {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    }, []);
    var DEMO = [
        {
            name: 'Circular',
            component: ((0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { sx: blockProps, children: [(0, jsx_runtime_1.jsx)(Pagination_1.default, { shape: "circular", count: 10, variant: "text" }), (0, jsx_runtime_1.jsx)(Pagination_1.default, { shape: "circular", count: 10, variant: "text", disabled: true }), (0, jsx_runtime_1.jsx)(Pagination_1.default, { shape: "circular", count: 10, variant: "outlined" }), (0, jsx_runtime_1.jsx)(Pagination_1.default, { shape: "circular", count: 10, variant: "outlined", disabled: true }), (0, jsx_runtime_1.jsx)(Pagination_1.default, { shape: "circular", count: 10, variant: "soft" }), (0, jsx_runtime_1.jsx)(Pagination_1.default, { shape: "circular", count: 10, variant: "soft", disabled: true })] })),
        },
        {
            name: 'Rounded',
            component: ((0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { sx: blockProps, children: [(0, jsx_runtime_1.jsx)(Pagination_1.default, { shape: "rounded", count: 10, variant: "text" }), (0, jsx_runtime_1.jsx)(Pagination_1.default, { shape: "rounded", count: 10, variant: "text", disabled: true }), (0, jsx_runtime_1.jsx)(Pagination_1.default, { shape: "rounded", count: 10, variant: "outlined" }), (0, jsx_runtime_1.jsx)(Pagination_1.default, { shape: "rounded", count: 10, variant: "outlined", disabled: true }), (0, jsx_runtime_1.jsx)(Pagination_1.default, { shape: "rounded", count: 10, variant: "soft" }), (0, jsx_runtime_1.jsx)(Pagination_1.default, { shape: "rounded", count: 10, variant: "soft", disabled: true })] })),
        },
        {
            name: 'Colors',
            component: ((0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { sx: blockProps, children: [COLORS.map(function (color) { return ((0, jsx_runtime_1.jsx)(Pagination_1.default, { color: color, count: 10, variant: "text" }, color)); }), COLORS.map(function (color) { return ((0, jsx_runtime_1.jsx)(Pagination_1.default, { color: color, count: 10, variant: "outlined" }, color)); }), COLORS.map(function (color) { return ((0, jsx_runtime_1.jsx)(Pagination_1.default, { color: color, count: 10, variant: "soft" }, color)); })] })),
        },
        {
            name: 'Sizes',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { sx: blockProps, children: SIZES.map(function (size) { return ((0, jsx_runtime_1.jsx)(Pagination_1.default, { count: 10, size: size }, size)); }) })),
        },
        {
            name: 'Buttons',
            component: ((0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { sx: blockProps, children: [(0, jsx_runtime_1.jsx)(Pagination_1.default, { count: 10, showFirstButton: true, showLastButton: true }), (0, jsx_runtime_1.jsx)(Pagination_1.default, { count: 10, hidePrevButton: true, hideNextButton: true })] })),
        },
        {
            name: 'Ranges',
            component: ((0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { sx: blockProps, children: [(0, jsx_runtime_1.jsx)(Pagination_1.default, { count: 11, defaultPage: 6, siblingCount: 0 }), (0, jsx_runtime_1.jsx)(Pagination_1.default, { count: 11, defaultPage: 6 }), (0, jsx_runtime_1.jsx)(Pagination_1.default, { count: 11, defaultPage: 6, siblingCount: 0, boundaryCount: 2 }), (0, jsx_runtime_1.jsx)(Pagination_1.default, { count: 11, defaultPage: 6, boundaryCount: 2 })] })),
        },
        {
            name: 'Table',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { sx: blockProps, children: (0, jsx_runtime_1.jsx)(TablePagination_1.default, { component: "div", count: 100, page: page, onPageChange: handleChangePage, rowsPerPage: rowsPerPage, onRowsPerPageChange: handleChangeRowsPerPage }) })),
        },
        {
            name: 'Items',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { sx: blockProps, children: (0, jsx_runtime_1.jsx)(pagination_items_1.PaginationItems, {}) })),
        },
    ];
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(component_hero_1.ComponentHero, { children: (0, jsx_runtime_1.jsx)(custom_breadcrumbs_1.CustomBreadcrumbs, { heading: "Pagination", links: [{ name: 'Components', href: paths_1.paths.docs.components.root }, { name: 'Pagination' }], moreLink: ['https://mui.com/components/pagination'] }) }), (0, jsx_runtime_1.jsx)(component_template_1.ScrollToViewTemplate, { data: DEMO })] }));
}

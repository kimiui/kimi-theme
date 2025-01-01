'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicRichTree = BasicRichTree;
exports.BasicSimpleTree = BasicSimpleTree;
var jsx_runtime_1 = require("react/jsx-runtime");
var TreeItem_1 = require("@mui/x-tree-view/TreeItem");
var RichTreeView_1 = require("@mui/x-tree-view/RichTreeView");
var SimpleTreeView_1 = require("@mui/x-tree-view/SimpleTreeView");
// ----------------------------------------------------------------------
var MUI_X_PRODUCTS = [
    {
        id: 'grid',
        label: 'Data Grid',
        children: [
            { id: 'grid-community', label: '@mui/x-data-grid' },
            { id: 'grid-pro', label: '@mui/x-data-grid-pro' },
            { id: 'grid-premium', label: '@mui/x-data-grid-premium' },
        ],
    },
    {
        id: 'pickers',
        label: 'Date and Time Pickers',
        children: [
            { id: 'pickers-community', label: '@mui/x-date-pickers' },
            { id: 'pickers-pro', label: '@mui/x-date-pickers-pro' },
        ],
    },
];
function BasicRichTree() {
    return ((0, jsx_runtime_1.jsx)(RichTreeView_1.RichTreeView, { items: MUI_X_PRODUCTS, sx: { overflowX: 'hidden', minHeight: 240, width: 1 } }));
}
function BasicSimpleTree() {
    return ((0, jsx_runtime_1.jsxs)(SimpleTreeView_1.SimpleTreeView, { sx: { overflowX: 'hidden', minHeight: 240, width: 1 }, children: [(0, jsx_runtime_1.jsxs)(TreeItem_1.TreeItem, { itemId: "grid", label: "Data Grid", children: [(0, jsx_runtime_1.jsx)(TreeItem_1.TreeItem, { itemId: "grid-community", label: "@mui/x-data-grid" }), (0, jsx_runtime_1.jsx)(TreeItem_1.TreeItem, { itemId: "grid-pro", label: "@mui/x-data-grid-pro" }), (0, jsx_runtime_1.jsx)(TreeItem_1.TreeItem, { itemId: "grid-premium", label: "@mui/x-data-grid-premium" })] }), (0, jsx_runtime_1.jsxs)(TreeItem_1.TreeItem, { itemId: "pickers", label: "Date and Time Pickers", children: [(0, jsx_runtime_1.jsx)(TreeItem_1.TreeItem, { itemId: "pickers-community", label: "@mui/x-date-pickers" }), (0, jsx_runtime_1.jsx)(TreeItem_1.TreeItem, { itemId: "pickers-pro", label: "@mui/x-date-pickers-pro" })] })] }));
}

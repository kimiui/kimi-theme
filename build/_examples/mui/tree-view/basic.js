'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import { RichTreeView } from '@mui/x-tree-view/RichTreeView';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
// ----------------------------------------------------------------------
const MUI_X_PRODUCTS = [
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
export function BasicRichTree() {
    return (_jsx(RichTreeView, { items: MUI_X_PRODUCTS, sx: { overflowX: 'hidden', minHeight: 240, width: 1 } }));
}
export function BasicSimpleTree() {
    return (_jsxs(SimpleTreeView, { sx: { overflowX: 'hidden', minHeight: 240, width: 1 }, children: [_jsxs(TreeItem, { itemId: "grid", label: "Data Grid", children: [_jsx(TreeItem, { itemId: "grid-community", label: "@mui/x-data-grid" }), _jsx(TreeItem, { itemId: "grid-pro", label: "@mui/x-data-grid-pro" }), _jsx(TreeItem, { itemId: "grid-premium", label: "@mui/x-data-grid-premium" })] }), _jsxs(TreeItem, { itemId: "pickers", label: "Date and Time Pickers", children: [_jsx(TreeItem, { itemId: "pickers-community", label: "@mui/x-date-pickers" }), _jsx(TreeItem, { itemId: "pickers-pro", label: "@mui/x-date-pickers-pro" })] })] }));
}

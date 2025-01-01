'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomStyling = CustomStyling;
var jsx_runtime_1 = require("react/jsx-runtime");
var styles_1 = require("@mui/material/styles");
var RichTreeView_1 = require("@mui/x-tree-view/RichTreeView");
var TreeItem_1 = require("@mui/x-tree-view/TreeItem");
var styles_2 = require("lib/theme/styles");
// ----------------------------------------------------------------------
var ITEMS = [
    {
        id: '1',
        label: 'Main',
        children: [
            { id: '2', label: 'Hello' },
            {
                id: '3',
                label: 'Subtree with children',
                children: [
                    { id: '6', label: 'Hello' },
                    {
                        id: '7',
                        label: 'Sub-subtree with children',
                        children: [
                            { id: '9', label: 'Child 1' },
                            { id: '10', label: 'Child 2' },
                            { id: '11', label: 'Child 3' },
                        ],
                    },
                    { id: '8', label: 'Hello' },
                ],
            },
            { id: '4', label: 'World' },
            { id: '5', label: 'Something something' },
        ],
    },
];
var StyledTreeItem = (0, styles_1.styled)(TreeItem_1.TreeItem)(function (_a) {
    var _b, _c, _d;
    var theme = _a.theme;
    return (_b = {
            color: theme.vars.palette.grey[800]
        },
        _b[styles_2.stylesMode.dark] = { color: theme.vars.palette.grey[200] },
        _b["& .".concat(TreeItem_1.treeItemClasses.content)] = (_c = {
                borderRadius: theme.spacing(0.5),
                padding: theme.spacing(0.5, 1),
                margin: theme.spacing(0.2, 0)
            },
            _c["& .".concat(TreeItem_1.treeItemClasses.label)] = { fontSize: '0.8rem', fontWeight: 500 },
            _c),
        _b["& .".concat(TreeItem_1.treeItemClasses.iconContainer)] = (_d = {
                borderRadius: '50%',
                backgroundColor: (0, styles_2.varAlpha)(theme.vars.palette.primary.mainChannel, 0.25)
            },
            _d[styles_2.stylesMode.dark] = {
                color: theme.vars.palette.primary.contrastText,
                backgroundColor: theme.vars.palette.primary.dark,
            },
            _d),
        _b["& .".concat(TreeItem_1.treeItemClasses.groupTransition)] = {
            marginLeft: 15,
            paddingLeft: 18,
            borderLeft: "1px dashed ".concat((0, styles_2.varAlpha)(theme.vars.palette.text.primaryChannel, 0.4)),
        },
        _b);
});
// ----------------------------------------------------------------------
function CustomStyling() {
    return ((0, jsx_runtime_1.jsx)(RichTreeView_1.RichTreeView, { "aria-label": "customized", defaultExpandedItems: ['1'], sx: { overflowX: 'hidden', minHeight: 240, width: 1 }, slots: { item: StyledTreeItem }, items: ITEMS }));
}

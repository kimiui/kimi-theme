import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { cloneElement } from 'react';
import { useTheme } from '@mui/material/styles';
import { Tree, TreeNode } from 'react-organizational-chart';
import { flattenArray } from '../../utils/helper';
// ----------------------------------------------------------------------
export function OrganizationalChart({ data, nodeItem, ...other }) {
    const theme = useTheme();
    const cloneNode = (props) => cloneElement(nodeItem(props));
    const label = cloneNode({ ...data });
    return (_jsx(Tree, { lineWidth: "1.5px", nodePadding: "4px", lineBorderRadius: "24px", lineColor: theme.vars.palette.divider, label: label, ...other, children: data.children.map((list, index) => (_jsx(TreeList, { depth: 1, data: list, nodeItem: nodeItem }, index))) }));
}
// ----------------------------------------------------------------------
export function TreeList({ data, depth, nodeItem }) {
    const childs = data.children;
    const cloneNode = (props) => cloneElement(nodeItem(props));
    const totalChildren = childs ? flattenArray(childs)?.length : 0;
    const label = cloneNode({ ...data, depth, totalChildren });
    return (_jsx(TreeNode, { label: label, children: childs && _jsx(TreeSubList, { data: childs, depth: depth, nodeItem: nodeItem }) }));
}
// ----------------------------------------------------------------------
function TreeSubList({ data, depth, nodeItem }) {
    return (_jsx(_Fragment, { children: data.map((list, index) => (_jsx(TreeList, { data: list, depth: depth + 1, nodeItem: nodeItem }, index))) }));
}

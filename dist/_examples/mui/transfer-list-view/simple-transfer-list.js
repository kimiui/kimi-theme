'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import List from '@mui/material/List';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid2';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import { Iconify } from '../../../components/iconify';
// ----------------------------------------------------------------------
function not(a, b) {
    return a.filter((value) => b.indexOf(value) === -1);
}
function intersection(a, b) {
    return a.filter((value) => b.indexOf(value) !== -1);
}
// ----------------------------------------------------------------------
export function SimpleTransferList() {
    const [checked, setChecked] = useState([]);
    const [left, setLeft] = useState([0, 1, 2, 3]);
    const [right, setRight] = useState([4, 5, 6, 7]);
    const leftChecked = intersection(checked, left);
    const rightChecked = intersection(checked, right);
    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
        if (currentIndex === -1) {
            newChecked.push(value);
        }
        else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
    };
    const handleAllRight = () => {
        setRight(right.concat(left));
        setLeft([]);
    };
    const handleCheckedRight = () => {
        setRight(right.concat(leftChecked));
        setLeft(not(left, leftChecked));
        setChecked(not(checked, leftChecked));
    };
    const handleCheckedLeft = () => {
        setLeft(left.concat(rightChecked));
        setRight(not(right, rightChecked));
        setChecked(not(checked, rightChecked));
    };
    const handleAllLeft = () => {
        setLeft(left.concat(right));
        setRight([]);
    };
    const customList = (items) => (_jsx(Card, { sx: { width: 200, overflow: 'auto', borderRadius: 1.5 }, children: _jsx(List, { dense: true, component: "div", role: "list", children: items.map((value) => {
                const labelId = `transfer-list-item-${value}-label`;
                return (_jsxs(ListItemButton, { role: "listitem", onClick: handleToggle(value), children: [_jsx(ListItemIcon, { children: _jsx(Checkbox, { checked: checked.indexOf(value) !== -1, tabIndex: -1, disableRipple: true, inputProps: { 'aria-labelledby': labelId } }) }), _jsx(ListItemText, { id: labelId, primary: `List item ${value + 1}` })] }, value));
            }) }) }));
    return (_jsxs(Grid, { container: true, justifyContent: "center", alignItems: "center", sx: { width: 'auto', py: 3 }, children: [_jsx(Grid, { children: customList(left) }), _jsxs(Grid, { container: true, direction: "column", alignItems: "center", sx: { p: 3 }, children: [_jsx(Button, { color: "inherit", variant: "outlined", size: "small", onClick: handleAllRight, disabled: left.length === 0, "aria-label": "move all right", sx: { my: 1 }, children: _jsx(Iconify, { icon: "eva:arrowhead-right-fill", width: 18 }) }), _jsx(Button, { color: "inherit", variant: "outlined", size: "small", onClick: handleCheckedRight, disabled: leftChecked.length === 0, "aria-label": "move selected right", sx: { my: 1 }, children: _jsx(Iconify, { icon: "eva:arrow-ios-forward-fill", width: 18 }) }), _jsx(Button, { color: "inherit", variant: "outlined", size: "small", onClick: handleCheckedLeft, disabled: rightChecked.length === 0, "aria-label": "move selected left", sx: { my: 1 }, children: _jsx(Iconify, { icon: "eva:arrow-ios-back-fill", width: 18 }) }), _jsx(Button, { color: "inherit", variant: "outlined", size: "small", onClick: handleAllLeft, disabled: right.length === 0, "aria-label": "move all left", sx: { my: 1 }, children: _jsx(Iconify, { icon: "eva:arrowhead-left-fill", width: 18 }) })] }), _jsx(Grid, { children: customList(right) })] }));
}

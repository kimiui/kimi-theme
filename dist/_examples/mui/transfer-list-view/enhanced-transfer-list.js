'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import List from '@mui/material/List';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid2';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import CardHeader from '@mui/material/CardHeader';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import { Iconify } from '../../../components/iconify';
// ----------------------------------------------------------------------
function not(a, b) {
    return a.filter((value) => b.indexOf(value) === -1);
}
function intersection(a, b) {
    return a.filter((value) => b.indexOf(value) !== -1);
}
function union(a, b) {
    return [...a, ...not(b, a)];
}
export function EnhancedTransferList() {
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
    const numberOfChecked = (items) => intersection(checked, items).length;
    const handleToggleAll = (items) => () => {
        if (numberOfChecked(items) === items.length) {
            setChecked(not(checked, items));
        }
        else {
            setChecked(union(checked, items));
        }
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
    const customList = (title, items) => (_jsxs(Card, { sx: { borderRadius: 1.5 }, children: [_jsx(CardHeader, { avatar: _jsx(Checkbox, { onClick: handleToggleAll(items), checked: numberOfChecked(items) === items.length && items.length !== 0, indeterminate: numberOfChecked(items) !== items.length && numberOfChecked(items) !== 0, disabled: items.length === 0, inputProps: { 'aria-label': 'All items selected' } }), title: title, subheader: `${numberOfChecked(items)}/${items.length} selected`, sx: { p: 2 } }), _jsx(Divider, {}), _jsx(List, { dense: true, component: "div", role: "list", sx: { width: 200, overflow: 'auto' }, children: items.map((value) => (_jsxs(ListItemButton, { role: "listitem", onClick: handleToggle(value), children: [_jsx(ListItemIcon, { children: _jsx(Checkbox, { disableRipple: true, checked: checked.indexOf(value) !== -1, tabIndex: -1, inputProps: {
                                    'aria-labelledby': `transfer-list-all-item-${value}-label`,
                                } }) }), _jsx(ListItemText, { id: `transfer-list-all-item-${value}-label`, primary: `List item ${value + 1}` })] }, value))) })] }));
    return (_jsxs(Grid, { container: true, justifyContent: "center", alignItems: "center", sx: { width: 'auto', p: 3 }, children: [_jsx(Grid, { children: customList('Choices', left) }), _jsxs(Grid, { container: true, direction: "column", alignItems: "center", sx: { p: 3 }, children: [_jsx(Button, { color: "inherit", variant: "outlined", size: "small", onClick: handleCheckedRight, disabled: leftChecked.length === 0, "aria-label": "move selected right", sx: { my: 1 }, children: _jsx(Iconify, { icon: "eva:arrow-ios-forward-fill", width: 18 }) }), _jsx(Button, { color: "inherit", variant: "outlined", size: "small", onClick: handleCheckedLeft, disabled: rightChecked.length === 0, "aria-label": "move selected left", sx: { my: 1 }, children: _jsx(Iconify, { icon: "eva:arrow-ios-back-fill", width: 18 }) })] }), _jsx(Grid, { children: customList('Chosen', right) })] }));
}

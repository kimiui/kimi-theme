'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import { useBoolean } from 'ahooks';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { useState, useCallback } from 'react';
import { DialogContent } from '@mui/material';
import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import { Iconify } from '../../../components/iconify';
// ----------------------------------------------------------------------
const emails = ['username@gmail.com', 'user02@gmail.com'];
export function SimpleDialog() {
    const [dialog, dialogActions] = useBoolean();
    const [selectedValue, setSelectedValue] = useState(emails[1]);
    const handleClose = useCallback((value) => {
        dialogActions.setFalse();
        setSelectedValue(value);
    }, [dialogActions]);
    return (_jsxs(_Fragment, { children: [_jsx(Button, { variant: "outlined", onClick: dialogActions.setTrue, children: "Open simple dialog" }), _jsxs(Typography, { variant: "subtitle1", children: ["Selected: ", selectedValue] }), _jsxs(Dialog, { open: dialog, onClose: () => handleClose(selectedValue), children: [_jsx(DialogTitle, { children: "Set backup account" }), _jsx(DialogContent, { children: _jsxs(Box, { component: "ul", sx: { p: 0 }, children: [emails.map((email) => (_jsx(Box, { component: "li", sx: { display: 'flex' }, children: _jsxs(ListItemButton, { onClick: () => handleClose(email), children: [_jsx(Avatar, { sx: { mr: 2, color: 'info.lighter', bgcolor: 'info.darker' }, children: _jsx(Iconify, { icon: "solar:user-rounded-bold" }) }), _jsx(ListItemText, { primary: email })] }) }, email))), _jsx(Box, { component: "li", sx: { display: 'flex' }, children: _jsxs(ListItemButton, { autoFocus: true, onClick: () => handleClose('addAccount'), children: [_jsx(Avatar, { sx: { mr: 2 }, children: _jsx(Iconify, { icon: "mingcute:add-line" }) }), _jsx(ListItemText, { primary: "Add account" })] }) })] }) })] })] }));
}

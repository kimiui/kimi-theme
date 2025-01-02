'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import { useBoolean } from 'ahooks';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import { useState, useCallback } from 'react';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import FormControlLabel from '@mui/material/FormControlLabel';
// ----------------------------------------------------------------------
export function MaxWidthDialog() {
    const [dialog, dialogActions] = useBoolean();
    const [fullWidth, setFullWidth] = useState(true);
    const [maxWidth, setMaxWidth] = useState('sm');
    const handleMaxWidthChange = useCallback((event) => {
        setMaxWidth(
        // @ts-expect-error autofill of arbitrary value is not handled.
        event.target.value);
    }, []);
    const handleFullWidthChange = useCallback((event) => {
        setFullWidth(event.target.checked);
    }, []);
    return (_jsxs(_Fragment, { children: [_jsx(Button, { variant: "outlined", onClick: dialogActions.setTrue, children: "Max width dialog" }), _jsxs(Dialog, { open: dialog, maxWidth: maxWidth, onClose: dialogActions.setFalse, fullWidth: fullWidth, children: [_jsx(DialogTitle, { children: "Optional sizes" }), _jsxs(DialogContent, { children: [_jsx(Typography, { sx: { color: 'text.secondary' }, children: "You can set my maximum width and whether to adapt or not." }), _jsxs(Box, { component: "form", noValidate: true, sx: {
                                    margin: 'auto',
                                    display: 'flex',
                                    width: 'fit-content',
                                    flexDirection: 'column',
                                }, children: [_jsxs(FormControl, { sx: { my: 3, minWidth: 160 }, children: [_jsx(InputLabel, { htmlFor: "max-width-label", children: "maxWidth" }), _jsxs(Select, { autoFocus: true, value: maxWidth, onChange: handleMaxWidthChange, label: "maxWidth", inputProps: { id: 'max-width-label' }, children: [_jsx(MenuItem, { value: false, children: "false" }), _jsx(MenuItem, { value: "xs", children: "xs" }), _jsx(MenuItem, { value: "sm", children: "sm" }), _jsx(MenuItem, { value: "md", children: "md" }), _jsx(MenuItem, { value: "lg", children: "lg" }), _jsx(MenuItem, { value: "xl", children: "xl" })] })] }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: fullWidth, onChange: handleFullWidthChange }), label: "Full width", sx: { mt: 1 } })] })] }), _jsx(DialogActions, { children: _jsx(Button, { onClick: dialogActions.setFalse, variant: "contained", children: "Close" }) })] })] }));
}

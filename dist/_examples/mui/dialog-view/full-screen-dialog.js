'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import { useBoolean } from 'ahooks';
import Slide from '@mui/material/Slide';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import { Iconify } from '../../../components/iconify';
// ----------------------------------------------------------------------
const Transition = forwardRef((props, ref) => _jsx(Slide, { direction: "up", ref: ref, ...props }));
export function FullScreenDialog() {
    const [dialog, dialogActions] = useBoolean();
    return (_jsxs(_Fragment, { children: [_jsx(Button, { variant: "outlined", color: "error", onClick: dialogActions.setTrue, children: "Full screen dialogs" }), _jsxs(Dialog, { fullScreen: true, open: dialog, onClose: dialogActions.setFalse, TransitionComponent: Transition, children: [_jsx(AppBar, { position: "relative", color: "default", children: _jsxs(Toolbar, { children: [_jsx(IconButton, { color: "inherit", edge: "start", onClick: dialogActions.setFalse, children: _jsx(Iconify, { icon: "mingcute:close-line" }) }), _jsx(Typography, { variant: "h6", sx: { flex: 1, ml: 2 }, children: "Sound" }), _jsx(Button, { autoFocus: true, color: "inherit", variant: "contained", onClick: dialogActions.setFalse, children: "Save" })] }) }), _jsxs(Box, { component: "ul", children: [_jsx(Box, { component: "li", sx: { display: 'flex' }, children: _jsx(ListItemButton, { children: _jsx(ListItemText, { primary: "Phone ringtone", secondary: "Titania" }) }) }), _jsx(Divider, {}), _jsx(Box, { component: "li", sx: { display: 'flex' }, children: _jsx(ListItemButton, { children: _jsx(ListItemText, { primary: "Default notification ringtone", secondary: "Tethys" }) }) })] })] })] }));
}

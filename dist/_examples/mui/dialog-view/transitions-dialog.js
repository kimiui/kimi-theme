'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { useBoolean } from 'ahooks';
import Slide from '@mui/material/Slide';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// ----------------------------------------------------------------------
const Transition = forwardRef((props, ref) => _jsx(Slide, { direction: "up", ref: ref, ...props }));
export function TransitionsDialog() {
    const [dialog, dialogActions] = useBoolean();
    return (_jsxs("div", { children: [_jsx(Button, { variant: "outlined", color: "success", onClick: dialogActions.setTrue, children: "Transitions dialogs" }), _jsxs(Dialog, { keepMounted: true, open: dialog, TransitionComponent: Transition, onClose: dialogActions.setFalse, children: [_jsx(DialogTitle, { children: `Use Google's location service?` }), _jsx(DialogContent, { sx: { color: 'text.secondary' }, children: "Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running." }), _jsxs(DialogActions, { children: [_jsx(Button, { variant: "outlined", onClick: dialogActions.setFalse, children: "Disagree" }), _jsx(Button, { variant: "contained", onClick: dialogActions.setFalse, autoFocus: true, children: "Agree" })] })] })] }));
}

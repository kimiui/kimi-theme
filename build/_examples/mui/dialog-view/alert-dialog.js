'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useBoolean } from 'ahooks';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// ----------------------------------------------------------------------
export function AlertDialog() {
    const [dialog, dialogActions] = useBoolean();
    return (_jsxs(_Fragment, { children: [_jsx(Button, { color: "info", variant: "outlined", onClick: dialogActions.setTrue, children: "Open alert dialog" }), _jsxs(Dialog, { open: dialog, onClose: dialogActions.setFalse, children: [_jsx(DialogTitle, { children: `Use Google's location service?` }), _jsx(DialogContent, { sx: { color: 'text.secondary' }, children: "Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running." }), _jsxs(DialogActions, { children: [_jsx(Button, { variant: "outlined", onClick: dialogActions.setFalse, children: "Disagree" }), _jsx(Button, { variant: "contained", onClick: dialogActions.setFalse, autoFocus: true, children: "Agree" })] })] })] }));
}

'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useBoolean } from 'ahooks';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// ----------------------------------------------------------------------
export function FormDialog() {
    const [dialog, dialogActions] = useBoolean();
    return (_jsxs("div", { children: [_jsx(Button, { variant: "outlined", color: "warning", onClick: dialogActions.setTrue, children: "Form Dialogs" }), _jsxs(Dialog, { open: dialog, onClose: dialogActions.setFalse, children: [_jsx(DialogTitle, { children: "Subscribe" }), _jsxs(DialogContent, { children: [_jsx(Typography, { sx: { mb: 3 }, children: "To subscribe to this website, please enter your email address here. We will send updates occasionally." }), _jsx(TextField, { autoFocus: true, fullWidth: true, type: "email", margin: "dense", variant: "outlined", label: "Email address" })] }), _jsxs(DialogActions, { children: [_jsx(Button, { onClick: dialogActions.setFalse, variant: "outlined", color: "inherit", children: "Cancel" }), _jsx(Button, { onClick: dialogActions.setFalse, variant: "contained", children: "Subscribe" })] })] })] }));
}

'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { m, AnimatePresence } from 'framer-motion';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { getVariant } from '../get-variant';
export function ContainerView({ open, onOpen, onClose, selectVariant, sx, ...other }) {
    return (_jsxs(_Fragment, { children: [_jsx(Stack, { sx: {
                    borderRadius: 2,
                    flex: '1 1 auto',
                    overflow: 'hidden',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'background.neutral',
                    ...sx,
                }, ...other, children: _jsx(Button, { size: "large", variant: "contained", onClick: onOpen, children: "Click me!" }) }), _jsx(AnimatePresence, { children: open && (_jsxs(Dialog, { fullWidth: true, maxWidth: "xs", open: open, onClose: onClose, PaperComponent: (props) => (_jsx(m.div, { ...getVariant(selectVariant, 320), children: _jsx(Paper, { ...props, children: props.children }) })), children: [_jsx(DialogTitle, { id: "alert-dialog-title", children: `Use Google's location service?` }), _jsx(DialogContent, { children: "Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running." }), _jsxs(DialogActions, { children: [_jsx(Button, { onClick: onClose, children: "Disagree" }), _jsx(Button, { variant: "contained", onClick: onClose, autoFocus: true, children: "Agree" })] })] })) })] }));
}

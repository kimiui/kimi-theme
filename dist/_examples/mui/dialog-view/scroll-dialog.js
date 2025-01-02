'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useBoolean } from 'ahooks';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { useRef, useState, useEffect, useCallback } from 'react';
// ----------------------------------------------------------------------
export function ScrollDialog() {
    const [dialog, dialogActions] = useBoolean();
    const [scroll, setScroll] = useState('paper');
    const handleClickOpen = useCallback((scrollType) => () => {
        dialogActions.setTrue();
        setScroll(scrollType);
    }, [dialogActions]);
    const descriptionElementRef = useRef(null);
    useEffect(() => {
        if (dialog) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement) {
                descriptionElement.focus();
            }
        }
    }, [dialog]);
    return (_jsxs(_Fragment, { children: [_jsx(Button, { variant: "outlined", onClick: handleClickOpen('paper'), sx: { mr: 2 }, children: "scroll=paper" }), _jsx(Button, { variant: "outlined", onClick: handleClickOpen('body'), children: "scroll=body" }), _jsxs(Dialog, { open: dialog, onClose: dialogActions.setFalse, scroll: scroll, children: [_jsx(DialogTitle, { sx: { pb: 2 }, children: "Subscribe" }), _jsx(DialogContent, { dividers: scroll === 'paper', children: _jsx(DialogContentText, { ref: descriptionElementRef, tabIndex: -1, children: [...new Array(50)]
                                .map(() => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`)
                                .join('\n') }) }), _jsxs(DialogActions, { children: [_jsx(Button, { onClick: dialogActions.setFalse, children: "Cancel" }), _jsx(Button, { variant: "contained", onClick: dialogActions.setFalse, children: "Subscribe" })] })] })] }));
}

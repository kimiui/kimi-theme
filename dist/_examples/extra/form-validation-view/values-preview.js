'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Portal from '@mui/material/Portal';
import Collapse from '@mui/material/Collapse';
import { useTheme } from '@mui/material/styles';
import { useFormContext } from 'react-hook-form';
import ButtonBase from '@mui/material/ButtonBase';
import { Iconify } from '../../../components/iconify';
import { bgBlur, varAlpha } from '../../../theme/styles';
import { fileData } from '../../../components/file-thumbnail';
// ----------------------------------------------------------------------
const classes = { item: 'item', key: 'item__key', value: 'item__value' };
export function ValuesPreview({ sx }) {
    const theme = useTheme();
    const { watch, formState } = useFormContext();
    const values = watch();
    const totalValues = Object.keys(values).length;
    const totalErrors = Object.keys(formState.errors).length;
    return (_jsx(Portal, { children: _jsxs(Stack, { sx: {
                ...bgBlur({
                    color: varAlpha(theme.vars.palette.grey['900Channel'], 0.9),
                }),
                top: 0,
                right: 0,
                height: 1,
                width: 320,
                position: 'fixed',
                overflowY: 'auto',
                color: 'common.white',
                zIndex: theme.zIndex.drawer,
                ...sx,
            }, children: [_jsx(Group, { label: "State", sx: { color: 'success.light' }, children: [
                        'submitCount',
                        'isDirty',
                        'isValid',
                        'disabled',
                        'isLoading',
                        'isSubmitted',
                        'isSubmitting',
                        'isValidating',
                        'isSubmitSuccessful',
                    ].map((item) => (_jsxs("div", { className: classes.item, children: [_jsx("span", { className: classes.key, children: item }), _jsx("span", { className: classes.value, children: JSON.stringify(formState[item], null, 2) })] }, item))) }), _jsx(Group, { label: `Values (${totalValues})`, sx: { color: 'warning.light' }, children: Object.keys(values).map((value) => (_jsxs("div", { className: classes.item, children: [_jsx("span", { className: classes.key, children: value }), _jsx("span", { className: classes.value, children: parseValue(values, value) })] }, value))) }), _jsx(Group, { label: `Errors (${totalErrors})`, sx: { color: 'error.light' }, children: JSON.stringify(Object.keys(formState.errors), null, 2) }), _jsx(Group, { label: "Dirty fields", sx: { color: 'info.light' }, children: JSON.stringify(Object.keys(formState.dirtyFields), null, 2) }), _jsx(Group, { label: "Touched fields", sx: { color: 'info.light' }, children: JSON.stringify(Object.keys(formState.touchedFields), null, 2) })] }) }));
}
function Group({ label, children, sx }) {
    const [open, setOpen] = useState(true);
    return (_jsxs(Stack, { sx: {
            borderBottom: (theme) => `solid 1px ${theme.vars.palette.divider}`,
            ...sx,
        }, children: [_jsxs(ButtonBase, { onClick: () => setOpen(!open), sx: {
                    p: 1.5,
                    typography: 'overline',
                    justifyContent: 'space-between',
                    ...(open && { bgcolor: 'action.hover' }),
                }, children: [label, _jsx(Iconify, { width: 16, icon: "eva:arrow-ios-downward-fill" })] }), _jsx(Collapse, { in: open, children: _jsx(Stack, { spacing: 0.25, sx: {
                        p: 1,
                        typography: 'caption',
                        [`& .${classes.item}`]: {
                            display: 'inline-flex',
                            alignItems: 'flex-start',
                        },
                        [`& .${classes.key}`]: {
                            px: 0.5,
                            color: 'common.white',
                            bgcolor: (theme) => varAlpha(theme.vars.palette.common.blackChannel, 0.4),
                        },
                        [`& .${classes.value}`]: {
                            flex: '1 1 auto',
                            textAlign: 'right',
                            bgcolor: (theme) => varAlpha(theme.vars.palette.common.blackChannel, 0.2),
                        },
                    }, children: children }) })] }));
}
// ----------------------------------------------------------------------
function parseValue(values, value) {
    if (value === 'singleUpload') {
        return JSON.stringify(values.singleUpload && fileData(values.singleUpload), null, 2);
    }
    if (value === 'multiUpload') {
        return JSON.stringify(values.multiUpload.map((file) => fileData(file)), null, 2);
    }
    return JSON.stringify(values[value], null, 2) || '---';
}

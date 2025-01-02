'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Stack from '@mui/material/Stack';
import { useState, useCallback } from 'react';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { Iconify } from '../../../components/iconify';
import { ComponentBlock } from '../../component-block';
// ----------------------------------------------------------------------
const CURRENCIES = [
    { value: 'USD', label: '$' },
    { value: 'EUR', label: '€' },
    { value: 'BTC', label: '฿' },
    { value: 'JPY', label: '¥' },
];
export function Textfields({ variant }) {
    const [currency, setCurrency] = useState('EUR');
    const [values, setValues] = useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });
    const handleChangeCurrency = useCallback((event) => {
        setCurrency(event.target.value);
    }, []);
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const handleShowPassword = useCallback(() => {
        setValues({ ...values, showPassword: !values.showPassword });
    }, [values]);
    const handleMouseDownPassword = useCallback((event) => {
        event.preventDefault();
    }, []);
    const blockProps = { gap: 3, flexDirection: 'column' };
    return (_jsxs(Stack, { sx: {
            rowGap: 5,
            columnGap: 3,
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' },
        }, children: [_jsxs(ComponentBlock, { title: "General", sx: blockProps, children: [_jsx(TextField, { variant: variant, fullWidth: true, label: "Inactive" }), _jsx(TextField, { variant: variant, required: true, fullWidth: true, label: "Activated", defaultValue: "Hello Kimi" }), _jsx(TextField, { variant: variant, fullWidth: true, type: "password", label: "Password", autoComplete: "current-password" }), _jsx(TextField, { variant: variant, disabled: true, fullWidth: true, label: "Disabled", defaultValue: "Hello Kimi" })] }), _jsxs(ComponentBlock, { title: "With icon & adornments", sx: blockProps, children: [_jsx(TextField, { variant: variant, fullWidth: true, label: "Filled", InputProps: {
                            startAdornment: (_jsx(InputAdornment, { position: "start", children: _jsx(Iconify, { icon: "solar:user-rounded-bold", width: 24 }) })),
                        } }), _jsx(TextField, { variant: variant, disabled: true, fullWidth: true, label: "Disabled", defaultValue: "Hello Kimi", InputProps: {
                            startAdornment: (_jsx(InputAdornment, { position: "start", children: _jsx(Iconify, { icon: "solar:user-rounded-bold", width: 24 }) })),
                        } }), _jsx(TextField, { variant: variant, fullWidth: true, label: "With normal TextField", InputProps: { startAdornment: _jsx(InputAdornment, { position: "start", children: "Kg" }) } }), _jsx(TextField, { variant: variant, fullWidth: true, value: values.weight, onChange: handleChange('weight'), helperText: "Weight", InputProps: { endAdornment: _jsx(InputAdornment, { position: "end", children: "Kg" }) } }), _jsx(TextField, { variant: variant, fullWidth: true, type: values.showPassword ? 'text' : 'password', value: values.password, onChange: handleChange('password'), label: "Password", InputProps: {
                            startAdornment: (_jsx(InputAdornment, { position: "start", children: _jsx(Iconify, { icon: "solar:user-rounded-bold", width: 24 }) })),
                            endAdornment: (_jsx(InputAdornment, { position: "end", children: _jsx(IconButton, { onClick: handleShowPassword, onMouseDown: handleMouseDownPassword, edge: "end", children: values.showPassword ? (_jsx(Iconify, { icon: "solar:eye-bold", width: 24 })) : (_jsx(Iconify, { icon: "solar:eye-closed-bold", width: 24 })) }) })),
                        } })] }), _jsxs(ComponentBlock, { title: "With caption", sx: blockProps, children: [_jsx(TextField, { variant: variant, fullWidth: true, label: "Error", defaultValue: "Hello Kimi", helperText: "Incorrect entry." }), _jsx(TextField, { variant: variant, error: true, fullWidth: true, label: "Error", defaultValue: "Hello Kimi", helperText: "Incorrect entry." })] }), _jsxs(ComponentBlock, { title: "Type", sx: blockProps, children: [_jsx(TextField, { variant: variant, fullWidth: true, type: "password", label: "Password", autoComplete: "current-password" }), _jsx(TextField, { variant: variant, fullWidth: true, type: "number", label: "Number", defaultValue: 0, InputLabelProps: { shrink: true } }), _jsx(TextField, { variant: variant, fullWidth: true, label: "Search", type: "search" })] }), _jsxs(ComponentBlock, { title: "Sizes", sx: blockProps, children: [_jsx(TextField, { variant: variant, fullWidth: true, label: "Size", size: "small", defaultValue: "Small" }), _jsx(TextField, { variant: variant, fullWidth: true, label: "Size", defaultValue: "Normal" })] }), _jsxs(ComponentBlock, { title: "Select", sx: blockProps, children: [_jsx(TextField, { id: "select-currency-label-x", variant: variant, select: true, fullWidth: true, label: "Select", value: currency, onChange: handleChangeCurrency, helperText: "Please select your currency", InputLabelProps: { htmlFor: `${variant}-select-currency-label` }, inputProps: { id: `${variant}-select-currency-label` }, children: CURRENCIES.map((option) => (_jsx(MenuItem, { value: option.value, children: option.label }, option.value))) }), _jsx(TextField, { variant: variant, select: true, fullWidth: true, size: "small", value: currency, label: "Native select", SelectProps: { native: true }, onChange: handleChangeCurrency, helperText: "Please select your currency", InputLabelProps: { htmlFor: `${variant}-native-select-currency-label` }, inputProps: { id: `${variant}-native-select-currency-label` }, children: CURRENCIES.map((option) => (_jsx("option", { value: option.value, children: option.label }, option.value))) })] }), _jsxs(ComponentBlock, { title: "Multiline", sx: blockProps, children: [_jsx(TextField, { variant: variant, fullWidth: true, multiline: true, maxRows: 4, label: "Multiline", value: "Controlled" }), _jsx(TextField, { variant: variant, fullWidth: true, multiline: true, placeholder: "Placeholder", label: "Multiline Placeholder" }), _jsx(TextField, { variant: variant, rows: 4, fullWidth: true, multiline: true, label: "Multiline", defaultValue: "Default Value" })] })] }));
}

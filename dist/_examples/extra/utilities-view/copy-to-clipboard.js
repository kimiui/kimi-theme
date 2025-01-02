'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Tooltip from '@mui/material/Tooltip';
import { useState, useCallback } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import { toast } from '../../../components/snackbar';
import { Iconify } from '../../../components/iconify';
import { useDoubleClick, useCopyToClipboard } from '../../../hooks';
import { ComponentBlock, ComponentContainer } from '../../component-block';
// ----------------------------------------------------------------------
export function CopyToClipboard() {
    const { copy } = useCopyToClipboard();
    const [value, setValue] = useState('https://www.npmjs.com/package/');
    const textOnClick = `Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
  Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat
  dolor lectus quis orci. Cras non dolor.
  `;
    const onCopy = useCallback((text) => {
        if (text) {
            toast.success('Copied!');
            copy(text);
        }
    }, [copy]);
    const handleClick = useDoubleClick({ doubleClick: () => onCopy(textOnClick) });
    const handleChange = useCallback((event) => {
        setValue(event.target.value);
    }, []);
    return (_jsxs(ComponentContainer, { sx: {
            rowGap: 5,
            columnGap: 3,
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' },
        }, children: [_jsx(ComponentBlock, { title: "onChange", children: _jsx(TextField, { fullWidth: true, value: value, onChange: handleChange, slotProps: {
                        input: {
                            endAdornment: (_jsx(InputAdornment, { position: "end", children: _jsx(Tooltip, { title: "Copy", children: _jsx(IconButton, { onClick: () => onCopy(value), children: _jsx(Iconify, { icon: "eva:copy-fill", width: 24 }) }) }) })),
                        },
                    } }) }), _jsx(ComponentBlock, { title: "onDoubleClick", children: _jsx(Typography, { onClick: handleClick, children: textOnClick }) })] }));
}

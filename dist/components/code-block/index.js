'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { toast } from '../../components/snackbar';
import { Iconify } from '../../components/iconify';
import { useCopyToClipboard } from '../../hooks/useCopyToClipboard';
const CodeBlock = ({ text, sx }) => {
    const { copy } = useCopyToClipboard();
    const onCopy = useCallback((content) => {
        if (content) {
            toast.success('Copied!');
            copy(content);
        }
    }, [copy]);
    return (_jsxs(Box, { sx: {
            p: 2,
            backgroundColor: (theme) => theme.vars.palette.background.neutral,
            borderRadius: 1,
            mt: 2,
            position: 'relative',
            ...sx,
        }, children: [_jsx(IconButton, { onClick: () => onCopy(text), sx: { position: 'absolute', right: 5, top: 5 }, children: _jsx(Iconify, { icon: "eva:copy-fill", width: 24 }) }), _jsx(Typography, { component: "pre", sx: {
                    whiteSpace: 'pre-wrap',
                    fontFamily: 'monospace',
                    color: 'text.primary',
                }, children: text })] }));
};
export default CodeBlock;

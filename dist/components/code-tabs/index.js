'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useCallback } from 'react';
import { Tab, Box, Tabs, Divider, Typography, IconButton } from '@mui/material';
import { toast } from '../../components/snackbar';
import { Iconify } from '../../components/iconify';
import { useCopyToClipboard } from '../../hooks/useCopyToClipboard';
const CodeTabs = ({ tabs, sx }) => {
    const { copy } = useCopyToClipboard();
    const [activeTab, setActiveTab] = useState(Object.keys(tabs)[0]);
    const handleChange = (event, newValue) => {
        setActiveTab(newValue);
    };
    const onCopy = useCallback((text) => {
        if (text) {
            toast.success('Copied!');
            copy(text);
        }
    }, [copy]);
    return (_jsxs(Box, { sx: {
            borderRadius: 1,
            backgroundColor: (theme) => theme.vars.palette.background.neutral,
            ...sx,
        }, children: [_jsx(Box, { sx: { pt: 1, px: 2 }, children: _jsx(Tabs, { value: activeTab, onChange: handleChange, "aria-label": "code tabs", variant: "standard", scrollButtons: "auto", textColor: "primary", indicatorColor: "primary", children: Object.keys(tabs).map((tab) => (_jsx(Tab, { label: tab, value: tab }, tab))) }) }), _jsx(Divider, {}), _jsxs(Box, { sx: { mt: 2, p: 2, position: 'relative' }, children: [_jsx(IconButton, { onClick: () => onCopy(tabs[activeTab]), sx: { position: 'absolute', right: 5, top: 0 }, children: _jsx(Iconify, { icon: "eva:copy-fill", width: 24 }) }), _jsxs(Typography, { component: "pre", sx: {
                            whiteSpace: 'pre-wrap',
                            fontFamily: 'monospace',
                            color: 'text.primary',
                        }, children: ["$ ", tabs[activeTab]] })] })] }));
};
export default CodeTabs;

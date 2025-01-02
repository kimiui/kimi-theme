'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
export function ScrollToViewTemplate({ sx, data, slotProps, offsetValue = 0.3, // 0 ~ 1 => 0% => 100%
queryClassName = 'scroll__to__view', ...other }) {
    const renderSection = (_jsx(Stack, { component: "section", spacing: 5, flex: "1 1 auto", sx: {
            minWidth: 0,
            p: { xs: 3, md: 5 },
            ...slotProps?.section,
        }, children: data.map((section) => (_jsxs(Card, { className: queryClassName, children: [_jsx(CardHeader, { title: section.name }), _jsx(CardContent, { children: section.component })] }, section.name))) }));
    return (_jsx(Container, { ...slotProps?.container, children: _jsx(Stack, { spacing: 5, direction: "row", alignItems: "flex-start", sx: { ...sx }, ...other, children: renderSection }) }));
}

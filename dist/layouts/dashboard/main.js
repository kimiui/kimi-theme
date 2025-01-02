'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import { layoutClasses } from '../../layouts/classes';
import { useSettingsContext } from '../../components/settings';
export function Main({ children, isNavHorizontal, sx, ...other }) {
    return (_jsx(Box, { component: "main", className: layoutClasses.main, sx: {
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            ...(isNavHorizontal && {
                '--layout-dashboard-content-pt': '40px',
            }),
            ...sx,
        }, ...other, children: children }));
}
export function DashboardContent({ sx, children, disablePadding, maxWidth = 'lg', ...other }) {
    const theme = useTheme();
    const settings = useSettingsContext();
    const layoutQuery = 'lg';
    return (_jsx(Container, { className: layoutClasses.content, maxWidth: settings.compactLayout ? maxWidth : false, sx: {
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            pt: 'var(--layout-dashboard-content-pt)',
            pb: 'var(--layout-dashboard-content-pb)',
            backgroundColor: theme.palette.background.neutral,
            [theme.breakpoints.up(layoutQuery)]: {
                px: 'var(--layout-dashboard-content-px)',
            },
            ...(disablePadding && {
                p: {
                    xs: 0,
                    sm: 0,
                    md: 0,
                    lg: 0,
                    xl: 0,
                },
            }),
            ...sx,
        }, ...other, children: children }));
}

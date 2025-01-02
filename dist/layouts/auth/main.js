import { jsx as _jsx } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
export function AuthMain({ sx, children, layoutQuery, ...other }) {
    const theme = useTheme();
    return (_jsx(Box, { component: "main", sx: {
            px: 2,
            py: 5,
            zIndex: 9,
            display: 'flex',
            flex: '1 1 auto',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
            minHeight: '100vh',
            [theme.breakpoints.up(layoutQuery)]: {
                px: 0,
                py: 'calc(var(--layout-header-desktop-height) + 24px)',
            },
            ...sx,
        }, ...other, children: _jsx(Box, { sx: {
                p: 5,
                borderRadius: 2,
                display: 'flex',
                flexDirection: 'column',
                bgcolor: 'background.default',
                boxShadow: theme.shadows[8],
                maxWidth: 'var(--layout-auth-content-width)',
            }, children: children }) }));
}

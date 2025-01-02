import { jsx as _jsx } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import { layoutClasses } from '../classes';
// ----------------------------------------------------------------------
export function Main({ children, sx, ...other }) {
    return (_jsx(Box, { component: "main", className: layoutClasses.main, sx: {
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            ...sx,
        }, ...other, children: children }));
}
// ----------------------------------------------------------------------
export function CompactContent({ children, sx, ...other }) {
    return (_jsx(Box, { className: layoutClasses.content, sx: {
            width: 1,
            mx: 'auto',
            display: 'flex',
            flex: '1 1 auto',
            textAlign: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
            py: { xs: 5, md: 10, lg: 12 },
            maxWidth: 'var(--layout-simple-content-compact-width)',
            ...sx,
        }, ...other, children: children }));
}

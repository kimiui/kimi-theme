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

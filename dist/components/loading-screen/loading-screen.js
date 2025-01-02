'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Portal from '@mui/material/Portal';
import LinearProgress from '@mui/material/LinearProgress';
export function LoadingScreen({ portal, sx, ...other }) {
    const content = (_jsx(Box, { sx: {
            px: 5,
            width: 1,
            flexGrow: 1,
            minHeight: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            ...sx,
        }, ...other, children: _jsx(LinearProgress, { color: "inherit", sx: { width: 1, maxWidth: 360 } }) }));
    if (portal) {
        return _jsx(Portal, { children: content });
    }
    return content;
}

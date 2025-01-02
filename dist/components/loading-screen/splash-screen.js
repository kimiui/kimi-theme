'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Portal from '@mui/material/Portal';
import { AnimateLogo1 } from '../../components/animate';
export function SplashScreen({ portal = true, sx, ...other }) {
    const content = (_jsx(Box, { sx: { overflow: 'hidden' }, children: _jsx(Box, { sx: {
                right: 0,
                width: 1,
                bottom: 0,
                height: 1,
                zIndex: 9998,
                display: 'flex',
                position: 'fixed',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'background.default',
                ...sx,
            }, ...other, children: _jsx(AnimateLogo1, {}) }) }));
    if (portal) {
        return _jsx(Portal, { children: content });
    }
    return content;
}

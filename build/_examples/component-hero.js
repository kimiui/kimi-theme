'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import { varAlpha, bgGradient } from '../theme/styles';
// ----------------------------------------------------------------------
export function ComponentHero({ children, sx, ...other }) {
    const theme = useTheme();
    return (_jsxs(Box, { sx: {
            py: 5,
            minHeight: 240,
            display: 'flex',
            position: 'relative',
            alignItems: 'center',
            ...sx,
        }, ...other, children: [_jsx(Container, { children: children }), _jsx(Box, { sx: {
                    ...bgGradient({
                        color: `0deg, ${varAlpha(theme.vars.palette.background.defaultChannel, 0.9)}, ${varAlpha(theme.vars.palette.background.defaultChannel, 0.9)}`,
                    }),
                    top: 0,
                    left: 0,
                    width: 1,
                    height: 1,
                    zIndex: -1,
                    position: 'absolute',
                    transform: 'scaleX(-1)',
                } })] }));
}

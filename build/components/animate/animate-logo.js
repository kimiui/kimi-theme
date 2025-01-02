'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { m } from 'framer-motion';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { varAlpha } from '../../theme/styles';
import { Logo } from '../logo';
export function AnimateLogo1({ logo, sx, ...other }) {
    const theme = useTheme();
    return (_jsxs(Box, { sx: {
            width: 120,
            height: 120,
            alignItems: 'center',
            position: 'relative',
            display: 'inline-flex',
            justifyContent: 'center',
            ...sx,
        }, ...other, children: [_jsx(Box, { component: m.div, animate: { scale: [1, 0.9, 0.9, 1, 1], opacity: [1, 0.48, 0.48, 1, 1] }, transition: {
                    duration: 2,
                    repeatDelay: 1,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }, sx: { display: 'inline-flex' }, children: logo ?? _jsx(Logo, { disableLink: true, width: 64, height: 64 }) }), _jsx(Box, { component: m.div, animate: {
                    scale: [1.6, 1, 1, 1.6, 1.6],
                    rotate: [270, 0, 0, 270, 270],
                    opacity: [0.25, 1, 1, 1, 0.25],
                    borderRadius: ['25%', '25%', '50%', '50%', '25%'],
                }, transition: { ease: 'linear', duration: 3.2, repeat: Infinity }, sx: {
                    position: 'absolute',
                    width: 'calc(100% - 20px)',
                    height: 'calc(100% - 20px)',
                    border: `solid 3px ${varAlpha(theme.vars.palette.primary.darkChannel, 0.24)}`,
                } }), _jsx(Box, { component: m.div, animate: {
                    scale: [1, 1.2, 1.2, 1, 1],
                    rotate: [0, 270, 270, 0, 0],
                    opacity: [1, 0.25, 0.25, 0.25, 1],
                    borderRadius: ['25%', '25%', '50%', '50%', '25%'],
                }, transition: { ease: 'linear', duration: 3.2, repeat: Infinity }, sx: {
                    width: 1,
                    height: 1,
                    position: 'absolute',
                    border: `solid 8px ${varAlpha(theme.vars.palette.primary.darkChannel, 0.24)}`,
                } })] }));
}
// ----------------------------------------------------------------------
export function AnimateLogo2({ logo, sx, ...other }) {
    return (_jsxs(Box, { alignItems: "center", justifyContent: "center", sx: {
            width: 96,
            height: 96,
            position: 'relative',
            alignItems: 'center',
            display: 'inline-flex',
            justifyContent: 'center',
            ...sx,
        }, ...other, children: [logo ?? _jsx(Logo, { sx: { zIndex: 9 } }), _jsx(Box, { component: m.div, animate: { rotate: 360 }, transition: { duration: 10, ease: 'linear', repeat: Infinity }, sx: {
                    width: 1,
                    height: 1,
                    opacity: 0.16,
                    borderRadius: '50%',
                    position: 'absolute',
                    transition: (theme) => theme.transitions.create(['opacity'], {
                        easing: theme.transitions.easing.easeInOut,
                        duration: theme.transitions.duration.shorter,
                    }),
                    background: (theme) => `linear-gradient(135deg, ${varAlpha(theme.vars.palette.primary.mainChannel, 0)} 50%, ${theme.vars.palette.primary.main} 100%)`,
                } })] }));
}

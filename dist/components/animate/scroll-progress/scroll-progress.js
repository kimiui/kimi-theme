'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import { m, useSpring } from 'framer-motion';
import { styled } from '@mui/material/styles';
const ViewBox = styled('svg', {
    shouldForwardProp: (prop) => prop !== 'progressSize',
})(({ progressSize }) => ({
    width: '100%',
    height: '100%',
    fill: 'none',
    viewBox: `0 0 ${progressSize} ${progressSize}`,
    xmlns: 'http://www.w3.org/2000/svg',
}));
const StyledMDiv = styled(m.div)(({ theme }) => ({}));
export function ScrollProgress({ size, variant, progress, thickness = 3.6, color = 'primary', sx, ...other }) {
    const scaleX = useSpring(progress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });
    const progressSize = variant === 'circular' ? (size ?? 64) : (size ?? 3);
    const renderCircular = (_jsxs(ViewBox, { progressSize: progressSize, sx: {
            width: progressSize,
            height: progressSize,
            transform: 'rotate(-90deg)',
            color: (theme) => theme.vars.palette.text.primary,
            ...(color !== 'inherit' && {
                color: (theme) => theme.vars.palette[color].main,
            }),
            circle: {
                fill: 'none',
                strokeDashoffset: 0,
                strokeWidth: thickness,
                stroke: 'currentColor',
            },
            ...sx,
        }, children: [_jsx(Box, { component: "circle", cx: progressSize / 2, cy: progressSize / 2, r: progressSize / 2 - thickness - 4, strokeOpacity: "0.2", pathLength: "1" }), _jsx(Box, { component: m.circle, cx: progressSize / 2, cy: progressSize / 2, r: progressSize / 2 - thickness - 4, pathLength: "1", style: { pathLength: progress } })] }));
    const renderLinear = (_jsx(StyledMDiv, { sx: {
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1999,
            height: progressSize,
            transformOrigin: '0%',
            bgcolor: 'text.primary',
            ...(color !== 'inherit' && {
                background: (theme) => `linear-gradient(135deg, ${theme.vars.palette[color].light}, ${theme.vars.palette[color].main})`,
            }),
            ...sx,
        }, style: { scaleX } }));
    return (_jsx(Box, { sx: { overflow: 'hidden' }, children: variant === 'circular' ? renderCircular : renderLinear }));
}

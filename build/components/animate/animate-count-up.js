'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { m, animate, useInView, useTransform, useMotionValue } from 'framer-motion';
export function AnimateCountUp({ to, sx, from = 0, unit = '', toFixed = 0, duration = 2, once = true, amount = 0.5, component = 'p', ...other }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once, amount });
    const count = useMotionValue(from);
    const rounded = useTransform(count, (latest) => latest.toFixed(toFixed));
    useEffect(() => {
        if (inView) {
            animate(count, to, { duration });
        }
    }, [count, duration, inView, to]);
    return (_jsxs(Typography, { component: component, sx: {
            display: 'inline-flex',
            p: 0,
            m: 0,
            ...sx,
        }, ...other, children: [_jsx(m.span, { ref: ref, children: rounded }), unit] }));
}

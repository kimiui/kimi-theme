'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import Fab from '@mui/material/Fab';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import { Iconify } from '../../../components/iconify';
export function BackToTop({ value = 90, sx, ...other }) {
    const { scrollYProgress } = useScroll();
    const [show, setShow] = useState(false);
    const backToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    useMotionValueEvent(scrollYProgress, 'change', (latest) => {
        const isEnd = Math.floor(latest * 100) > value; // unit is %
        setShow(isEnd);
    });
    return (_jsx(Fab, { "aria-label": "Back to top", onClick: backToTop, sx: {
            width: 48,
            height: 48,
            position: 'fixed',
            transform: 'scale(0)',
            right: { xs: 24, md: 32 },
            bottom: { xs: 24, md: 32 },
            zIndex: (theme) => theme.zIndex.speedDial,
            transition: (theme) => theme.transitions.create(['transform']),
            ...(show && { transform: 'scale(1)' }),
            ...sx,
        }, ...other, children: _jsx(Iconify, { width: 24, icon: "solar:double-alt-arrow-up-bold-duotone" }) }));
}

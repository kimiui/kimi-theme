'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { useState, useCallback } from 'react';
import { Toolbar } from './toolbar';
import { ContainerView } from './container';
import { ControlPanel } from '../control-panel';
// ----------------------------------------------------------------------
export function AnimateScroll() {
    const [count, setCount] = useState(0);
    const [selectVariant, setSelectVariant] = useState('slideInUp');
    const handleChangeVariant = useCallback((event) => {
        setCount(count + 1);
        setSelectVariant(event.target.value);
    }, [count]);
    return (_jsxs(Card, { sx: { height: 640, display: 'flex' }, children: [_jsxs(Stack, { spacing: 2.5, sx: { p: 2.5, display: 'flex', flex: '1 1 auto' }, children: [_jsx(Toolbar, { onRefresh: () => setCount(count + 1) }), _jsx(ContainerView, { selectVariant: selectVariant }, count)] }), _jsx(ControlPanel, { variantKey: VARIANT_KEYS, selectVariant: selectVariant, onChangeVariant: handleChangeVariant })] }));
}
// ----------------------------------------------------------------------
const VARIANT_KEYS = [
    { type: 'slide', values: ['slideInUp', 'slideInDown', 'slideInLeft', 'slideInRight'] },
    { type: 'fade', values: ['fadeIn', 'fadeInUp', 'fadeInDown', 'fadeInLeft', 'fadeInRight'] },
    { type: 'zoom', values: ['zoomIn', 'zoomInUp', 'zoomInDown', 'zoomInLeft', 'zoomInRight'] },
    {
        type: 'bounce',
        values: ['bounceIn', 'bounceInUp', 'bounceInDown', 'bounceInLeft', 'bounceInRight'],
    },
    { type: 'flip', values: ['flipInX', 'flipInY'] },
    { type: 'scale', values: ['scaleInX', 'scaleInY'] },
    { type: 'rotate', values: ['rotateIn'] },
];

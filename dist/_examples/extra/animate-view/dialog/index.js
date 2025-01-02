'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useBoolean } from 'ahooks';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { useState, useCallback } from 'react';
import { ContainerView } from './container';
import { ControlPanel } from '../control-panel';
// ----------------------------------------------------------------------
export function AnimateDialog() {
    const [view, { setTrue, setFalse }] = useBoolean();
    const [selectVariant, setSelectVariant] = useState('slideInUp');
    const handleChangeVariant = useCallback((event) => {
        setSelectVariant(event.target.value);
    }, []);
    return (_jsxs(Card, { sx: { height: 640, display: 'flex' }, children: [_jsx(Stack, { spacing: 2.5, sx: { p: 2.5, display: 'flex', flex: '1 1 auto' }, children: _jsx(ContainerView, { open: view, onOpen: setTrue, onClose: setFalse, selectVariant: selectVariant }) }), _jsx(ControlPanel, { variantKey: variantKey, selectVariant: selectVariant, onChangeVariant: handleChangeVariant })] }));
}
// ----------------------------------------------------------------------
const variantKey = [
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

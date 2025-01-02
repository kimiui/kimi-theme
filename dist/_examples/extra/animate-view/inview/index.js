'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useBoolean } from 'ahooks';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { useState, useCallback } from 'react';
import { Toolbar } from './toolbar';
import { ContainerView } from './container';
import { ControlPanel } from '../control-panel';
// ----------------------------------------------------------------------
export function AnimateInview() {
    const [text, textActions] = useBoolean();
    const [multi, multiActions] = useBoolean();
    const [count, setCount] = useState(0);
    const [selectVariant, setSelectVariant] = useState('slideInUp');
    const handleRefresh = useCallback(() => {
        setCount(count + 1);
    }, [count]);
    const handleChangeVariant = useCallback((event) => {
        setCount(count + 1);
        setSelectVariant(event.target.value);
    }, [count]);
    return (_jsxs(Card, { sx: { height: 640, display: 'flex' }, children: [_jsxs(Stack, { spacing: 2.5, sx: { p: 2.5, display: 'flex', flex: '1 1 auto' }, children: [_jsx(Toolbar, { isText: text, isMulti: multi, onChangeText: textActions.toggle, onChangeMulti: multiActions.toggle, onRefresh: handleRefresh }), _jsx(ContainerView, { isText: text, isMulti: multi, selectVariant: selectVariant }, count)] }), _jsx(ControlPanel, { variantKey: VARIANT_KEYS, selectVariant: selectVariant, onChangeVariant: handleChangeVariant })] }));
}
// ----------------------------------------------------------------------
const VARIANT_KEYS = [
    { type: 'slide in', values: ['slideInUp', 'slideInDown', 'slideInLeft', 'slideInRight'] },
    { type: 'slide out', values: ['slideOutUp', 'slideOutDown', 'slideOutLeft', 'slideOutRight'] },
    { type: 'fade in', values: ['fadeIn', 'fadeInUp', 'fadeInDown', 'fadeInLeft', 'fadeInRight'] },
    {
        type: 'fade out',
        values: ['fadeOut', 'fadeOutUp', 'fadeOutDown', 'fadeOutLeft', 'fadeOutRight'],
    },
    { type: 'zoom in', values: ['zoomIn', 'zoomInUp', 'zoomInDown', 'zoomInLeft', 'zoomInRight'] },
    {
        type: 'zoom out',
        values: ['zoomOut', 'zoomOutUp', 'zoomOutDown', 'zoomOutLeft', 'zoomOutRight'],
    },
    {
        type: 'bounce in',
        values: ['bounceIn', 'bounceInUp', 'bounceInDown', 'bounceInLeft', 'bounceInRight'],
    },
    {
        type: 'bounce out',
        values: ['bounceOut', 'bounceOutUp', 'bounceOutDown', 'bounceOutLeft', 'bounceOutRight'],
    },
    { type: 'flip in', values: ['flipInX', 'flipInY'] },
    { type: 'flip out', values: ['flipOutX', 'flipOutY'] },
    { type: 'scale in', values: ['scaleInX', 'scaleInY'] },
    { type: 'scale out', values: ['scaleOutX', 'scaleOutY'] },
    { type: 'rotate in', values: ['rotateIn'] },
    { type: 'rotate out', values: ['rotateOut'] },
];

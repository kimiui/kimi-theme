'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { m } from 'framer-motion';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { _mock } from '../../../../_mock';
import { AnimateText, MotionContainer } from '../../../../components/animate';
import { getVariant } from '../get-variant';
// ----------------------------------------------------------------------
const TEXT = 'Kimi Admin';
const IMG = [
    _mock.image.cover(2),
    _mock.image.cover(3),
    _mock.image.cover(4),
    _mock.image.cover(5),
];
export function ContainerView({ isText, isMulti, selectVariant, sx, ...other }) {
    const items = isMulti ? IMG : IMG.slice(0, 1);
    const renderText = (_jsx(AnimateText, { component: "h1", variant: "h1", text: TEXT, variants: getVariant(selectVariant, 400), sx: { overflow: 'hidden' } }));
    const renderItems = (_jsx(MotionContainer, { sx: {
            gap: 3,
            width: 1,
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
        }, children: items.map((item, index) => (_jsx(Box, { component: m.img, src: item, variants: getVariant(selectVariant, 800), sx: {
                width: 480,
                borderRadius: 1,
                objectFit: 'cover',
                height: isMulti ? 80 : 320,
                boxShadow: (theme) => theme.shadows[8],
            } }, index))) }));
    return (_jsx(Stack, { sx: {
            borderRadius: 2,
            flex: '1 1 auto',
            overflow: 'hidden',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'background.neutral',
            ...sx,
        }, ...other, children: isText ? renderText : renderItems }));
}

'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { m } from 'framer-motion';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { _mock } from '../../../../_mock';
import { getVariant } from '../get-variant';
export function ContainerView({ selectVariant, sx, ...other }) {
    const isKenburns = selectVariant.includes('kenburns');
    return (_jsx(Stack, { sx: {
            flex: '1 1 auto',
            overflow: 'hidden',
            borderRadius: 2,
            ...sx,
        }, ...other, children: isKenburns ? (_jsx(Box, { component: m.img, src: _mock.image.cover(7), ...getVariant(selectVariant), sx: { width: 1, height: 1, objectFit: 'cover' } })) : (_jsx(Box, { component: m.div, ...getVariant(selectVariant), sx: { height: 1, width: 1 } })) }));
}

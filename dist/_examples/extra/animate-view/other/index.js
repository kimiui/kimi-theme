'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { _mock } from '../../../../_mock';
import { varAlpha } from '../../../../theme/styles';
import { Iconify } from '../../../../components/iconify';
import { AnimateLogo1, AnimateLogo2, AnimateBorder, AnimateAvatar } from '../../../../components/animate';
import { SvgPath } from './svg-path';
import { AnimateButton } from './buttons';
import { AnimateCountUpNumber } from './count-up-number';
import { ComponentBlock } from '../../../component-block';
// ----------------------------------------------------------------------
export function AnimateOther() {
    const theme = useTheme();
    const [count, setCount] = useState(0);
    return (_jsxs(Box, { gap: 3, display: "grid", gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' }, children: [_jsx(ComponentBlock, { title: "Button Click", sx: { gap: 3 }, children: _jsx(AnimateButton, {}) }), _jsxs(ComponentBlock, { title: "Path", children: [_jsx(IconButton, { onClick: () => setCount(count + 1), sx: { position: 'absolute', right: 16, top: 16 }, children: _jsx(Iconify, { icon: "eva:refresh-fill" }) }), _jsx(SvgPath, {}, count)] }), _jsxs(ComponentBlock, { title: "Path", sx: { flexDirection: 'column' }, children: [_jsx(IconButton, { onClick: () => setCount(count + 1), sx: { position: 'absolute', right: 16, top: 16 }, children: _jsx(Iconify, { icon: "eva:refresh-fill" }) }), _jsx(AnimateCountUpNumber, {}, count)] }), _jsxs(ComponentBlock, { title: "Logo", sx: { gap: 5 }, children: [_jsx(AnimateLogo1, {}), _jsx(AnimateLogo2, {})] }), _jsx(ComponentBlock, { title: "Avatar", sx: { gap: 5 }, children: _jsx(AnimateAvatar, { width: 120, slotProps: {
                        avatar: {
                            alt: 'My avatar',
                            src: _mock.image.avatar(24),
                        },
                        overlay: {
                            border: 2,
                            spacing: 2,
                        },
                    } }) }), _jsxs(ComponentBlock, { title: "Border", sx: { gap: 5 }, children: [_jsx(AnimateBorder, { animate: { disableDoubleline: true }, sx: { width: 160, height: 160 } }), _jsx(AnimateBorder, { animate: {
                            width: '4px',
                            color: theme.vars.palette.primary.dark,
                            outline: `135deg, ${varAlpha(theme.vars.palette.warning.mainChannel, 0.24)}, ${varAlpha(theme.vars.palette.primary.mainChannel, 0.24)}`,
                        }, sx: { width: 160, height: 160 } })] })] }));
}

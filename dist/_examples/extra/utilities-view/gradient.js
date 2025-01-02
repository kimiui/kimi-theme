'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { varAlpha, bgGradient, textGradient } from '../../../theme/styles';
import { ComponentBlock, ComponentContainer } from '../../component-block';
// ----------------------------------------------------------------------
export function Gradient() {
    const theme = useTheme();
    return (_jsxs(ComponentContainer, { sx: {
            rowGap: 5,
            columnGap: 3,
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' },
        }, children: [_jsx(ComponentBlock, { title: "Text", children: _jsx(Box, { component: "h1", sx: {
                        typography: 'h1',
                        ...textGradient(`to right, ${theme.vars.palette.warning.light}, ${theme.vars.palette.primary.main}`),
                    }, children: "Kimi UI" }) }), _jsx(ComponentBlock, { title: "Background", children: _jsx(Box, { sx: {
                        ...bgGradient({
                            color: `135deg, ${varAlpha(theme.vars.palette.warning.lighterChannel, 0.8)}, ${varAlpha(theme.vars.palette.primary.mainChannel, 0.8)}`,
                        }),
                        width: 1,
                        height: 160,
                    } }) })] }));
}

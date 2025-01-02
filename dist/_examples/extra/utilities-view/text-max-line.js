'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { maxLine } from '../../../theme/styles';
import { ComponentBlock } from '../../component-block';
// ----------------------------------------------------------------------
const content = `
Donec posuere vulputate arcu. Fusce vulputate eleifend sapien. Phasellus magna. Proin
sapien ipsum, porta a, auctor quis, euismod ut, mi. Suspendisse faucibus, nunc et
pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor.
`;
export function TextMaxLine() {
    const theme = useTheme();
    return (_jsxs(Stack, { sx: {
            rowGap: 5,
            columnGap: 3,
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' },
        }, children: [_jsx(ComponentBlock, { title: "1 Line", sx: { flexDirection: 'column', alignItems: 'unset', minWidth: 0 }, children: _jsx(Typography, { noWrap: true, sx: { width: 1 }, children: content }) }), _jsx(ComponentBlock, { title: "2 Line", sx: { flexDirection: 'column', alignItems: 'unset', minWidth: 0 }, children: _jsx(Typography, { sx: { ...maxLine({ line: 2 }) }, children: content }) }), _jsx(ComponentBlock, { title: "3 Line", sx: { flexDirection: 'column', alignItems: 'unset', minWidth: 0 }, children: _jsx(Typography, { sx: { ...maxLine({ line: 3 }) }, children: content }) }), _jsx(ComponentBlock, { title: "4 Line", sx: { flexDirection: 'column', alignItems: 'unset', minWidth: 0 }, children: _jsx(Typography, { sx: { ...maxLine({ line: 3 }) }, children: content }) }), _jsx(ComponentBlock, { title: "As Link", sx: { flexDirection: 'column', alignItems: 'unset', minWidth: 0 }, children: _jsx(Link, { href: "#", color: "primary", sx: { maxWidth: 300, ...maxLine({ line: 3 }) }, children: content }) }), _jsx(ComponentBlock, { title: "Persistent", sx: { flexDirection: 'column', alignItems: 'unset', minWidth: 0 }, children: _jsx(Typography, { variant: "h6", sx: {
                        ...maxLine({ line: 3, persistent: theme.typography.h6 }),
                        bgcolor: 'background.neutral',
                    }, children: "Donec posuere vulputate arcu." }) })] }));
}

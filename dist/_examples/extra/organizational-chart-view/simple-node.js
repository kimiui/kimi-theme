import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { varAlpha, stylesMode } from '../../../theme/styles';
// ----------------------------------------------------------------------
export function SimpleNode({ name, role, sx }) {
    return (_jsxs(Box, { gap: 0.5, display: "inline-flex", flexDirection: "column", onClick: () => console.info(name), sx: {
            p: 2,
            borderRadius: 1.5,
            cursor: 'pointer',
            color: 'primary.darker',
            bgcolor: (theme) => varAlpha(theme.vars.palette.primary.mainChannel, 0.08),
            border: (theme) => `1px solid ${varAlpha(theme.vars.palette.primary.mainChannel, 0.24)}`,
            [stylesMode.dark]: { color: 'primary.lighter' },
            ...sx,
        }, children: [_jsx(Typography, { variant: "subtitle2", children: name }), _jsx(Typography, { variant: "caption", sx: { opacity: 0.48 }, children: role })] }));
}

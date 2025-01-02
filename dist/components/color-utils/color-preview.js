import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import { varAlpha } from '../../theme/styles';
// ----------------------------------------------------------------------
export const ColorPreview = forwardRef(({ colors, limit = 3, sx, ...other }, ref) => {
    const colorsRange = colors.slice(0, limit);
    const restColors = colors.length - limit;
    return (_jsxs(Box, { ref: ref, sx: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
            ...sx,
        }, ...other, children: [colorsRange.map((color, index) => (_jsx(Box, { sx: {
                    ml: -0.75,
                    width: 16,
                    height: 16,
                    bgcolor: color,
                    borderRadius: '50%',
                    border: (theme) => `solid 2px ${theme.vars.palette.background.paper}`,
                    boxShadow: (theme) => `inset -1px 1px 2px ${varAlpha(theme.vars.palette.common.blackChannel, 0.24)}`,
                } }, color + index))), colors.length > limit && (_jsx(Box, { component: "span", sx: { typography: 'subtitle2' }, children: `+${restColors}` }))] }));
});

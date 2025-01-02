import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import { Iconify } from '../../../components/iconify';
import { varAlpha, stylesMode } from '../../../theme/styles';
export function Block({ title, tooltip, children, sx }) {
    return (_jsxs(Box, { sx: {
            px: 2,
            pb: 2,
            pt: 4,
            borderRadius: 2,
            display: 'flex',
            position: 'relative',
            flexDirection: 'column',
            border: (theme) => `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}`,
            ...sx,
        }, children: [_jsxs(Box, { component: "span", sx: {
                    px: 1.25,
                    top: -12,
                    fontSize: 13,
                    borderRadius: 22,
                    lineHeight: '22px',
                    position: 'absolute',
                    alignItems: 'center',
                    color: 'common.white',
                    display: 'inline-flex',
                    bgcolor: 'text.primary',
                    fontWeight: 'fontWeightSemiBold',
                    [stylesMode.dark]: { color: 'grey.800' },
                }, children: [title, tooltip && (_jsx(Tooltip, { title: tooltip, placement: "right", children: _jsx(Iconify, { width: 14, icon: "eva:info-outline", sx: { ml: 0.5, mr: -0.5, opacity: 0.48, cursor: 'pointer' } }) }))] }), children] }));
}

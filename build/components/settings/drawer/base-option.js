import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Tooltip from '@mui/material/Tooltip';
import ButtonBase from '@mui/material/ButtonBase';
import { varAlpha } from '../../../theme/styles';
import { Iconify } from '../../../components/iconify';
import { SvgColor } from '../../svg-color';
export function BaseOption({ icon, label, tooltip, selected, ...other }) {
    return (_jsxs(ButtonBase, { disableRipple: true, sx: {
            px: 2,
            py: 2.5,
            borderRadius: 2,
            cursor: 'pointer',
            flexDirection: 'column',
            alignItems: 'flex-start',
            border: (theme) => `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}`,
            '&:hover': {
                bgcolor: (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.08),
            },
            ...(selected && {
                bgcolor: (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.08),
            }),
        }, ...other, children: [_jsxs(Box, { display: "flex", alignItems: "center", justifyContent: "space-between", sx: { width: 1, mb: 3 }, children: [_jsx(SvgColor, { src: `/assets/icons/setting/ic-${icon}.svg` }), _jsx(Switch, { name: label, size: "small", color: "default", checked: selected, sx: { mr: -0.75 } })] }), _jsxs(Box, { display: "flex", alignItems: "center", justifyContent: "space-between", sx: { width: 1 }, children: [_jsx(Box, { component: "span", sx: {
                            lineHeight: '18px',
                            fontWeight: 'fontWeightSemiBold',
                            fontSize: (theme) => theme.typography.pxToRem(13),
                        }, children: label }), tooltip && (_jsx(Tooltip, { arrow: true, title: tooltip, slotProps: {
                            tooltip: { sx: { maxWidth: 240, mr: 0.5 } },
                        }, children: _jsx(Iconify, { width: 16, icon: "eva:info-outline", sx: { cursor: 'pointer', color: 'text.disabled' } }) }))] })] }));
}

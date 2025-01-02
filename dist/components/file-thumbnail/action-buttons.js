import { jsx as _jsx } from "react/jsx-runtime";
import ButtonBase from '@mui/material/ButtonBase';
import IconButton from '@mui/material/IconButton';
import { bgBlur, varAlpha } from '../../theme/styles';
import { Iconify } from '../iconify';
// ----------------------------------------------------------------------
export function DownloadButton({ sx, ...other }) {
    return (_jsx(ButtonBase, { sx: {
            p: 0,
            top: 0,
            right: 0,
            width: 1,
            height: 1,
            zIndex: 9,
            opacity: 0,
            position: 'absolute',
            color: 'common.white',
            borderRadius: 'inherit',
            transition: (theme) => theme.transitions.create(['opacity']),
            '&:hover': (theme) => ({
                ...bgBlur({
                    color: varAlpha(theme.vars.palette.grey['900Channel'], 0.64),
                }),
                opacity: 1,
            }),
            ...sx,
        }, ...other, children: _jsx(Iconify, { icon: "eva:arrow-circle-down-fill", width: 24 }) }));
}
// ----------------------------------------------------------------------
export function RemoveButton({ sx, ...other }) {
    return (_jsx(IconButton, { size: "small", sx: {
            p: 0.35,
            top: 4,
            right: 4,
            position: 'absolute',
            color: 'common.white',
            bgcolor: (theme) => varAlpha(theme.vars.palette.grey['900Channel'], 0.48),
            '&:hover': {
                bgcolor: (theme) => varAlpha(theme.vars.palette.grey['900Channel'], 0.72),
            },
            ...sx,
        }, ...other, children: _jsx(Iconify, { icon: "mingcute:close-line", width: 12 }) }));
}

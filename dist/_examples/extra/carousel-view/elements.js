import { jsx as _jsx } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Iconify } from '../../../components/iconify';
// ----------------------------------------------------------------------
export function PlayButton({ sx, isPlaying, ...other }) {
    return (_jsx(Button, { size: "small", color: isPlaying ? 'error' : 'primary', variant: "contained", startIcon: _jsx(Iconify, { icon: isPlaying ? 'solar:stop-circle-bold' : 'solar:play-circle-bold' }), sx: {
            top: 24,
            right: 24,
            position: 'absolute',
            ...sx,
        }, ...other, children: isPlaying ? 'Stop' : 'Play' }));
}
// ----------------------------------------------------------------------
export function IndexLabel({ index, sx, ...other }) {
    return (_jsx(Box, { sx: {
            top: 16,
            left: 16,
            width: 24,
            zIndex: 9,
            height: 24,
            display: 'flex',
            color: 'grey.800',
            borderRadius: '50%',
            position: 'absolute',
            alignItems: 'center',
            bgcolor: 'common.white',
            typography: 'subtitle2',
            justifyContent: 'center',
            ...sx,
        }, ...other, children: index }));
}

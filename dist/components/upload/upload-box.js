import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import { useDropzone } from 'react-dropzone';
import { varAlpha } from '../../theme/styles';
import { Iconify } from '../iconify';
// ----------------------------------------------------------------------
export function UploadBox({ placeholder, error, disabled, sx, ...other }) {
    const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
        disabled,
        ...other,
    });
    const hasError = isDragReject || error;
    return (_jsxs(Box, { ...getRootProps(), sx: {
            width: 64,
            height: 64,
            flexShrink: 0,
            display: 'flex',
            borderRadius: 1,
            cursor: 'pointer',
            alignItems: 'center',
            color: 'text.disabled',
            justifyContent: 'center',
            bgcolor: (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.08),
            border: (theme) => `dashed 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.16)}`,
            ...(isDragActive && { opacity: 0.72 }),
            ...(disabled && { opacity: 0.48, pointerEvents: 'none' }),
            ...(hasError && {
                color: 'error.main',
                borderColor: 'error.main',
                bgcolor: (theme) => varAlpha(theme.vars.palette.error.mainChannel, 0.08),
            }),
            '&:hover': { opacity: 0.72 },
            ...sx,
        }, children: [_jsx("input", { ...getInputProps() }), placeholder || _jsx(Iconify, { icon: "eva:cloud-upload-fill", width: 28 })] }));
}

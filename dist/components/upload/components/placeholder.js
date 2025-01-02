import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { UploadIllustration } from '../../../assets/illustrations';
// ----------------------------------------------------------------------
export function UploadPlaceholder({ ...other }) {
    return (_jsxs(Box, { sx: {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
        }, ...other, children: [_jsx(UploadIllustration, { hideBackground: true, sx: { width: 200 } }), _jsxs(Stack, { spacing: 1, sx: { textAlign: 'center' }, children: [_jsx(Box, { sx: { typography: 'h6' }, children: "Drop or select file" }), _jsxs(Box, { sx: { typography: 'body2', color: 'text.secondary' }, children: ["Drop files here or click to", _jsx(Box, { component: "span", sx: { mx: 0.5, color: 'primary.main', textDecoration: 'underline' }, children: "browse" }), "through your machine."] })] })] }));
}

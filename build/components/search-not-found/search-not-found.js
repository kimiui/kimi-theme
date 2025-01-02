import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
export function SearchNotFound({ query, sx, ...other }) {
    if (!query) {
        return (_jsx(Typography, { variant: "body2", sx: sx, children: "Please enter keywords" }));
    }
    return (_jsxs(Box, { sx: { textAlign: 'center', borderRadius: 1.5, ...sx }, ...other, children: [_jsx(Box, { sx: { mb: 1, typography: 'h6' }, children: "Not found" }), _jsxs(Typography, { variant: "body2", children: ["No results found for \u00A0", _jsx("strong", { children: `"${query}"` }), ".", _jsx("br", {}), " Try checking for typos or using complete words."] })] }));
}

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Iconify } from '../../components/iconify';
// ----------------------------------------------------------------------
export const chipProps = {
    size: 'small',
    variant: 'soft',
};
export function FiltersResult({ totalResults, onReset, sx, children }) {
    return (_jsxs(Box, { sx: sx, children: [_jsxs(Box, { sx: { mb: 1.5, typography: 'body2' }, children: [_jsx("strong", { children: totalResults }), _jsx(Box, { component: "span", sx: { color: 'text.secondary', ml: 0.25 }, children: "results found" })] }), _jsxs(Box, { flexGrow: 1, gap: 1, display: "flex", flexWrap: "wrap", alignItems: "center", children: [children, _jsx(Button, { color: "error", onClick: onReset, startIcon: _jsx(Iconify, { icon: "solar:trash-bin-trash-bold" }), children: "Clear" })] })] }));
}

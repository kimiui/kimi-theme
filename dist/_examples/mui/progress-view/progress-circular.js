import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { ComponentBlock } from '../../component-block';
// ----------------------------------------------------------------------
const COLORS = ['inherit', 'primary', 'secondary', 'info', 'success', 'warning', 'error'];
export function ProgressCircular({ progress }) {
    return (_jsxs(Stack, { spacing: 5, children: [_jsx(ComponentBlock, { title: "Indeterminate", children: COLORS.map((color) => (_jsx(CircularProgress, { color: color }, color))) }), _jsxs(ComponentBlock, { title: "Determinate", children: [_jsx(CircularProgress, { color: "info" }), _jsx(CircularProgress, { color: "info", variant: "determinate", value: 25 }), _jsx(CircularProgress, { color: "info", variant: "determinate", value: 50 }), _jsx(CircularProgress, { color: "info", variant: "determinate", value: 75 }), _jsx(CircularProgress, { color: "info", variant: "determinate", value: 100 }), _jsx(CircularProgress, { color: "info", variant: "determinate", value: progress })] }), _jsxs(ComponentBlock, { title: "Sizes", children: [_jsx(CircularProgress, { size: 48, color: "info" }), _jsx(CircularProgress, { color: "info" }), _jsx(CircularProgress, { size: 32, color: "info" }), _jsx(CircularProgress, { size: 24, color: "info" })] })] }));
}

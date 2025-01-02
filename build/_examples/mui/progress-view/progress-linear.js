import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import { ComponentBlock } from '../../component-block';
// ----------------------------------------------------------------------
const COLORS = ['inherit', 'primary', 'secondary', 'info', 'success', 'warning', 'error'];
export function ProgressLinear({ progress, buffer }) {
    return (_jsxs(Stack, { sx: {
            rowGap: 5,
            columnGap: 3,
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' },
        }, children: [_jsx(ComponentBlock, { title: "Indeterminate", sx: { flexDirection: 'column' }, children: COLORS.map((color) => (_jsx(LinearProgress, { color: color, sx: { mb: 2, width: 1 } }, color))) }), _jsx(ComponentBlock, { title: "Determinate", sx: { flexDirection: 'column' }, children: COLORS.map((color) => (_jsx(LinearProgress, { color: color, value: progress, variant: "determinate", sx: { mb: 2, width: 1 } }, color))) }), _jsx(ComponentBlock, { title: "Buffer", sx: { flexDirection: 'column' }, children: COLORS.map((color) => (_jsx(LinearProgress, { color: color, variant: "buffer", value: progress, valueBuffer: buffer, sx: { mb: 2, width: 1 } }, color))) }), _jsx(ComponentBlock, { title: "Query", sx: { flexDirection: 'column' }, children: COLORS.map((color) => (_jsx(LinearProgress, { color: color, variant: "query", value: progress, valueBuffer: buffer, sx: { mb: 2, width: 1 } }, color))) })] }));
}

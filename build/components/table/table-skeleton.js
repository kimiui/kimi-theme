import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
// ----------------------------------------------------------------------
export function TableSkeleton({ ...other }) {
    return (_jsx(TableRow, { ...other, children: _jsx(TableCell, { colSpan: 12, children: _jsxs(Stack, { spacing: 3, direction: "row", alignItems: "center", children: [_jsx(Skeleton, { sx: {
                            borderRadius: 1.5,
                            width: 48,
                            height: 48,
                            flexShrink: 0,
                        } }), _jsx(Skeleton, { sx: { width: 1, height: 12 } }), _jsx(Skeleton, { sx: { width: 180, height: 12 } }), _jsx(Skeleton, { sx: { width: 160, height: 12 } }), _jsx(Skeleton, { sx: { width: 140, height: 12 } }), _jsx(Skeleton, { sx: { width: 120, height: 12 } })] }) }) }));
}

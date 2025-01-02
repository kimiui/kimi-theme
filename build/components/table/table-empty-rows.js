import { jsx as _jsx } from "react/jsx-runtime";
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
export function TableEmptyRows({ emptyRows, height }) {
    if (!emptyRows) {
        return null;
    }
    return (_jsx(TableRow, { sx: { ...(height && { height: height * emptyRows }) }, children: _jsx(TableCell, { colSpan: 9 }) }));
}

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
export function TableSelectedAction({ dense, action, rowCount, numSelected, onSelectAllRows, sx, ...other }) {
    if (!numSelected) {
        return null;
    }
    return (_jsxs(Stack, { direction: "row", alignItems: "center", sx: {
            pl: 1,
            pr: 2,
            top: 0,
            left: 0,
            width: 1,
            zIndex: 9,
            height: 58,
            position: 'absolute',
            bgcolor: 'primary.lighter',
            ...(dense && { height: 38 }),
            ...sx,
        }, ...other, children: [_jsx(Checkbox, { indeterminate: !!numSelected && numSelected < rowCount, checked: !!rowCount && numSelected === rowCount, onChange: (event) => onSelectAllRows(event.target.checked) }), _jsxs(Typography, { variant: "subtitle2", sx: {
                    ml: 2,
                    flexGrow: 1,
                    color: 'primary.main',
                    ...(dense && { ml: 3 }),
                }, children: [numSelected, " selected"] }), action && action] }));
}

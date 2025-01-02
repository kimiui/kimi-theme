import { jsx as _jsx } from "react/jsx-runtime";
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import { Iconify } from '../../../../components/iconify';
export function Toolbar({ onRefresh, ...other }) {
    return (_jsx(Stack, { direction: "row", alignItems: "center", justifyContent: "flex-end", ...other, children: _jsx(IconButton, { onClick: onRefresh, children: _jsx(Iconify, { icon: "eva:refresh-fill" }) }) }));
}

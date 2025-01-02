import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import IconButton from '@mui/material/IconButton';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Iconify } from '../../../../components/iconify';
export function Toolbar({ isText, isMulti, onChangeText, onChangeMulti, onRefresh, ...other }) {
    return (_jsxs(Stack, { direction: "row", alignItems: "center", ...other, children: [_jsx(FormControlLabel, { control: _jsx(Switch, { checked: isText, onChange: onChangeText }), label: "Text object" }), _jsx(Box, { sx: { flexGrow: 1 } }), !isText && (_jsx(FormControlLabel, { control: _jsx(Switch, { checked: isMulti, onChange: onChangeMulti }), label: "Multiitem" })), _jsx(IconButton, { onClick: onRefresh, children: _jsx(Iconify, { icon: "eva:refresh-fill" }) })] }));
}

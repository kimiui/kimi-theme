import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import { varAlpha } from '../../../theme/styles';
import { Label } from '../../../components/label';
export function ResultItem({ title, path, groupLabel, onClickItem }) {
    return (_jsxs(ListItemButton, { onClick: onClickItem, sx: {
            borderWidth: 1,
            borderStyle: 'dashed',
            borderColor: 'transparent',
            borderBottomColor: (theme) => theme.vars.palette.divider,
            '&:hover': {
                borderRadius: 1,
                borderColor: (theme) => theme.vars.palette.primary.main,
                backgroundColor: (theme) => varAlpha(theme.vars.palette.primary.mainChannel, theme.vars.palette.action.hoverOpacity),
            },
        }, children: [_jsx(ListItemText, { slotProps: {
                    primary: { typography: 'subtitle2', sx: { textTransform: 'capitalize' } },
                    secondary: { typography: 'caption', noWrap: true },
                }, primary: title.map((part, index) => (_jsx(Box, { component: "span", sx: { color: part.highlight ? 'primary.main' : 'text.primary' }, children: part.text }, index))), secondary: path.map((part, index) => (_jsx(Box, { component: "span", sx: { color: part.highlight ? 'primary.main' : 'text.secondary' }, children: part.text }, index))) }), groupLabel && _jsx(Label, { color: "info", children: groupLabel })] }));
}

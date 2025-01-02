import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { m } from 'framer-motion';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import SvgIcon from '@mui/material/SvgIcon';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import { fToNow } from '../../utils/format-time';
import { varHover } from '../../components/animate';
import { Scrollbar } from '../../components/scrollbar';
import { usePopover, CustomPopover } from '../../components/custom-popover';
export function ContactsPopover({ data = [], sx, ...other }) {
    const popover = usePopover();
    return (_jsxs(_Fragment, { children: [_jsx(IconButton, { component: m.button, whileTap: "tap", whileHover: "hover", variants: varHover(1.05), onClick: popover.onOpen, sx: {
                    ...(popover.open && { bgcolor: (theme) => theme.vars.palette.action.selected }),
                    ...sx,
                }, ...other, children: _jsxs(SvgIcon, { children: [_jsx("circle", { cx: "15", cy: "6", r: "3", fill: "currentColor", opacity: "0.4" }), _jsx("ellipse", { cx: "16", cy: "17", fill: "currentColor", opacity: "0.4", rx: "5", ry: "3" }), _jsx("circle", { cx: "9.001", cy: "6", r: "4", fill: "currentColor" }), _jsx("ellipse", { cx: "9.001", cy: "17.001", fill: "currentColor", rx: "7", ry: "4" })] }) }), _jsxs(CustomPopover, { open: popover.open, anchorEl: popover.anchorEl, onClose: popover.onClose, slotProps: {
                    arrow: { offset: 20 },
                }, children: [_jsxs(Typography, { variant: "h6", sx: { p: 1.5 }, children: ["Contacts ", _jsxs("span", { children: ["(", data.length, ")"] })] }), _jsx(Scrollbar, { sx: { height: 320, width: 320 }, children: data.map((contact) => (_jsxs(MenuItem, { sx: { p: 1 }, children: [_jsx(Badge, { variant: contact.status, anchorOrigin: { vertical: 'bottom', horizontal: 'right' }, sx: { mr: 2 }, children: _jsx(Avatar, { alt: contact.name, src: contact.avatarUrl }) }), _jsx(ListItemText, { primary: contact.name, secondary: contact.status === 'offline' ? fToNow(contact.lastActivity) : '', primaryTypographyProps: { typography: 'subtitle2' }, secondaryTypographyProps: { typography: 'caption', color: 'text.disabled' } })] }, contact.id))) })] })] }));
}

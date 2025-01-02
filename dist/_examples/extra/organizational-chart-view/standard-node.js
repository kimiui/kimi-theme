import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { toast } from '../../../components/snackbar';
import { Iconify } from '../../../components/iconify';
import { usePopover, CustomPopover } from '../../../components/custom-popover';
// ----------------------------------------------------------------------
export function StandardNode({ name, avatarUrl, role, sx }) {
    const popover = usePopover();
    const onDelete = () => {
        popover.onClose();
        toast.warning(`onDelete: ${name}`);
    };
    const onEdit = () => {
        popover.onClose();
        toast.info(`onEdit: ${name}`);
    };
    return (_jsxs(_Fragment, { children: [_jsxs(Card, { sx: {
                    p: 2,
                    minWidth: 200,
                    borderRadius: 1.5,
                    textAlign: 'left',
                    position: 'relative',
                    display: 'inline-flex',
                    flexDirection: 'column',
                    ...sx,
                }, children: [_jsx(IconButton, { color: popover.open ? 'inherit' : 'default', onClick: popover.onOpen, sx: { position: 'absolute', top: 8, right: 8 }, children: _jsx(Iconify, { icon: "eva:more-horizontal-fill" }) }), _jsx(Avatar, { alt: name, src: avatarUrl, sx: { mr: 2, mb: 2, width: 48, height: 48 } }), _jsx(Typography, { variant: "subtitle2", noWrap: true, sx: { mb: 0.5 }, children: name }), _jsx(Typography, { variant: "caption", component: "div", noWrap: true, sx: { color: 'text.secondary' }, children: role })] }), _jsx(CustomPopover, { open: popover.open, anchorEl: popover.anchorEl, onClose: popover.onClose, slotProps: { arrow: { placement: 'left-center' } }, children: _jsxs(MenuList, { children: [_jsxs(MenuItem, { onClick: onDelete, sx: { color: 'error.main' }, children: [_jsx(Iconify, { icon: "solar:trash-bin-trash-bold" }), "Delete"] }), _jsxs(MenuItem, { onClick: onEdit, children: [_jsx(Iconify, { icon: "solar:pen-bold" }), "Edit"] })] }) })] }));
}

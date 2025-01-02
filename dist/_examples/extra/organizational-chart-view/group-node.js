'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Label } from '../../../components/label';
import { toast } from '../../../components/snackbar';
import { Iconify } from '../../../components/iconify';
import { varAlpha, stylesMode } from '../../../theme/styles';
import { usePopover, CustomPopover } from '../../../components/custom-popover';
// ----------------------------------------------------------------------
export function GroupNode({ sx, name, role, depth, group, avatarUrl, totalChildren }) {
    const theme = useTheme();
    const popover = usePopover();
    const onDelete = () => {
        popover.onClose();
        toast.warning(`onDelete: ${name}`);
    };
    const onEdit = () => {
        popover.onClose();
        toast.info(`onEdit: ${name}`);
    };
    const styles = (color) => ({
        color: theme.vars.palette[color].darker,
        bgcolor: varAlpha(theme.vars.palette[color].mainChannel, 0.08),
        border: `solid 1px ${varAlpha(theme.vars.palette[color].mainChannel, 0.24)}`,
        [stylesMode.dark]: { color: theme.vars.palette[color].lighter },
    });
    const isLabel = depth === 1;
    const rootGr = group === 'root';
    const productGr = group === 'product design';
    const developmentGr = group === 'development';
    const marketingGr = group === 'marketing';
    return (_jsxs(_Fragment, { children: [_jsxs(Stack, { sx: { position: 'relative', display: 'inline-flex' }, alignItems: "center", children: [!isLabel && (_jsx(Avatar, { alt: name, src: avatarUrl ?? '', sx: {
                            mt: -3.5,
                            zIndex: 9,
                            width: 56,
                            height: 56,
                            position: 'absolute',
                            border: `solid 4px ${theme.vars.palette.background.paper}`,
                        } })), _jsxs(Card, { sx: {
                            pt: 5,
                            pb: 3,
                            minWidth: 200,
                            borderRadius: 1.5,
                            ...(isLabel && { py: 2 }),
                            ...(isLabel && productGr && styles('primary')),
                            ...(isLabel && developmentGr && styles('info')),
                            ...(isLabel && marketingGr && styles('warning')),
                            ...sx,
                        }, children: [_jsx(IconButton, { disabled: rootGr, color: popover.open ? 'inherit' : 'default', onClick: popover.onOpen, sx: {
                                    top: 8,
                                    right: 8,
                                    position: 'absolute',
                                    ...(isLabel && { display: 'none' }),
                                }, children: _jsx(Iconify, { icon: "eva:more-horizontal-fill" }) }), depth !== 1 && !rootGr && (_jsx(Box, { sx: {
                                    top: 0,
                                    left: 0,
                                    width: 1,
                                    height: 4,
                                    position: 'absolute',
                                    borderRadius: 1.5,
                                    ...(productGr && { bgcolor: 'primary.light' }),
                                    ...(developmentGr && { bgcolor: 'info.light' }),
                                    ...(marketingGr && { bgcolor: 'warning.light' }),
                                } })), _jsxs(Typography, { variant: isLabel ? 'subtitle1' : 'subtitle2', noWrap: true, children: [name, isLabel && (_jsx(Label, { color: (developmentGr && 'info') || (marketingGr && 'warning') || 'primary', sx: { ml: 1 }, children: totalChildren }))] }), !isLabel && (_jsx(Typography, { noWrap: true, component: "div", variant: "caption", sx: { mt: 0.5, color: 'text.secondary' }, children: role }))] })] }), _jsx(CustomPopover, { open: popover.open, anchorEl: popover.anchorEl, onClose: popover.onClose, slotProps: { arrow: { placement: 'left-center' } }, children: _jsxs(MenuList, { children: [_jsxs(MenuItem, { onClick: onDelete, sx: { color: 'error.main' }, children: [_jsx(Iconify, { icon: "solar:trash-bin-trash-bold" }), "Delete"] }), _jsxs(MenuItem, { onClick: onEdit, children: [_jsx(Iconify, { icon: "solar:pen-bold" }), "Edit"] })] }) })] }));
}

import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import ButtonBase from '@mui/material/ButtonBase';
import { varAlpha } from '../../theme/styles';
import { Iconify } from '../../components/iconify';
import { usePopover, CustomPopover } from '../custom-popover';
export function ChartSelect({ options, value, onChange, slotProps, ...other }) {
    const popover = usePopover();
    return (_jsxs(_Fragment, { children: [_jsxs(ButtonBase, { onClick: popover.onOpen, sx: {
                    pr: 1,
                    pl: 1.5,
                    gap: 1.5,
                    height: 34,
                    borderRadius: 1,
                    typography: 'subtitle2',
                    border: (theme) => `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.24)}`,
                    ...slotProps?.button,
                }, ...other, children: [value, _jsx(Iconify, { width: 16, icon: popover.open ? 'eva:arrow-ios-upward-fill' : 'eva:arrow-ios-downward-fill' })] }), _jsx(CustomPopover, { open: popover.open, anchorEl: popover.anchorEl, onClose: popover.onClose, children: _jsx(MenuList, { sx: slotProps?.popover, children: options.map((option) => (_jsx(MenuItem, { selected: option === value, onClick: () => {
                            popover.onClose();
                            onChange(option);
                        }, children: option }, option))) }) })] }));
}

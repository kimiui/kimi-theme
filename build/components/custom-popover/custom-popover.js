import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Popover from '@mui/material/Popover';
import { listClasses } from '@mui/material/List';
import { menuItemClasses } from '@mui/material/MenuItem';
import { StyledArrow } from './styles';
import { calculateAnchorOrigin } from './utils';
// ----------------------------------------------------------------------
export function CustomPopover({ open, onClose, children, anchorEl, slotProps, ...other }) {
    const arrowPlacement = slotProps?.arrow?.placement ?? 'top-right';
    const arrowSize = slotProps?.arrow?.size ?? 14;
    const arrowOffset = slotProps?.arrow?.offset ?? 17;
    const { paperStyles, anchorOrigin, transformOrigin } = calculateAnchorOrigin(arrowPlacement);
    return (_jsxs(Popover, { open: !!open, anchorEl: anchorEl, onClose: onClose, anchorOrigin: anchorOrigin, transformOrigin: transformOrigin, slotProps: {
            ...slotProps,
            paper: {
                ...slotProps?.paper,
                sx: {
                    ...paperStyles,
                    overflow: 'inherit',
                    [`& .${listClasses.root}`]: { minWidth: 140 },
                    [`& .${menuItemClasses.root}`]: { gap: 2 },
                    ...slotProps?.paper?.sx,
                },
            },
        }, ...other, children: [!slotProps?.arrow?.hide && (_jsx(StyledArrow, { sx: slotProps?.arrow?.sx, placement: arrowPlacement, offset: arrowOffset, size: arrowSize })), children] }));
}

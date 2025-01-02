import { jsx as _jsx } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { forwardRef, useCallback } from 'react';
import ButtonBase from '@mui/material/ButtonBase';
import { styled, alpha as hexAlpha } from '@mui/material/styles';
import { varAlpha } from '../../theme/styles';
import { Iconify } from '../iconify';
// ----------------------------------------------------------------------
const StyledUl = styled('ul')(({ theme }) => ({}));
export const ColorPicker = forwardRef(({ colors, selected, onSelectColor, limit = 'auto', sx, slotProps }, ref) => {
    const singleSelect = typeof selected === 'string';
    const handleSelect = useCallback((color) => {
        if (singleSelect) {
            if (color !== selected) {
                onSelectColor(color);
            }
        }
        else {
            const newSelected = selected.includes(color)
                ? selected.filter((value) => value !== color)
                : [...selected, color];
            onSelectColor(newSelected);
        }
    }, [onSelectColor, selected, singleSelect]);
    return (_jsx(StyledUl, { ref: ref, sx: {
            flexWrap: 'wrap',
            flexDirection: 'row',
            display: 'inline-flex',
            ...(limit !== 'auto' && {
                width: limit * 36,
                justifyContent: 'flex-end',
            }),
            ...sx,
        }, children: colors.map((color) => {
            const hasSelected = singleSelect ? selected === color : selected.includes(color);
            return (_jsx(Box, { component: "li", sx: { display: 'inline-flex' }, children: _jsx(ButtonBase, { "aria-label": color, onClick: () => handleSelect(color), sx: {
                        width: 36,
                        height: 36,
                        borderRadius: '50%',
                        ...slotProps?.button,
                    }, children: _jsx(Stack, { alignItems: "center", justifyContent: "center", sx: {
                            width: 20,
                            height: 20,
                            bgcolor: color,
                            borderRadius: '50%',
                            border: (theme) => `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.16)}`,
                            ...(hasSelected && {
                                transform: 'scale(1.3)',
                                boxShadow: `4px 4px 8px 0 ${hexAlpha(color, 0.48)}`,
                                outline: `solid 2px ${hexAlpha(color, 0.08)}`,
                                transition: (theme) => theme.transitions.create('all', {
                                    duration: theme.transitions.duration.shortest,
                                }),
                            }),
                        }, children: _jsx(Iconify, { width: hasSelected ? 12 : 0, icon: "eva:checkmark-fill", sx: {
                                color: (theme) => theme.palette.getContrastText(color),
                                transition: (theme) => theme.transitions.create('all', {
                                    duration: theme.transitions.duration.shortest,
                                }),
                            } }) }) }) }, color));
        }) }));
});

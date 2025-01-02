'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { memo, useEffect, forwardRef } from 'react';
import { Iconify } from '../../../components/iconify';
import { varAlpha, stylesMode } from '../../../theme/styles';
import { itemClasses } from './classes';
// ----------------------------------------------------------------------
export const StyledItemWrap = styled('li')(() => ({
    flexShrink: 0,
    display: 'flex',
    transform: 'translate3d(var(--translate-x, 0), var(--translate-y, 0), 0) scaleX(var(--scale-x, 1)) scaleY(var(--scale-y, 1))',
    transformOrigin: '0 0',
    touchAction: 'manipulation',
    [`&.${itemClasses.state.dragOverlay}`]: { zIndex: 999 },
}));
export const StyledItem = styled(Stack)(({ theme }) => ({
    ...theme.typography.h2,
    width: '100%',
    outline: 'none',
    overflow: 'hidden',
    textAlign: 'center',
    position: 'relative',
    padding: theme.spacing(5),
    transformOrigin: '50% 50%',
    touchAction: 'manipulation',
    WebkitTapHighlightColor: 'transparent',
    borderRadius: theme.shape.borderRadius * 2,
    backgroundColor: theme.vars.palette.common.white,
    transition: theme.transitions.create(['box-shadow']),
    color: varAlpha(theme.vars.palette.text.disabledChannel, 0.24),
    border: `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.16)}`,
    [stylesMode.dark]: { backgroundColor: theme.vars.palette.grey[900] },
    '&:hover': { [`& .${itemClasses.removeBtn}`]: { opacity: 0.48 } },
    [`& .${itemClasses.removeBtn}`]: {
        opacity: 0,
        transition: theme.transitions.create(['opacity']),
    },
    [`&.${itemClasses.state.dragOverlay}`]: {
        backdropFilter: `blur(6px)`,
        boxShadow: theme.shadows[20],
        color: theme.vars.palette.text.primary,
        backgroundColor: varAlpha(theme.vars.palette.common.whiteChannel, 0.48),
        [stylesMode.dark]: {
            backgroundColor: varAlpha(theme.vars.palette.grey['900Channel'], 0.48),
        },
    },
    [`&.${itemClasses.state.dragging}`]: {
        opacity: 0.24,
        backgroundColor: varAlpha(theme.vars.palette.grey['500Channel'], 0.12),
    },
}));
const ItemBase = forwardRef(({ item, stateProps, onRemove, sx, ...other }, ref) => {
    useEffect(() => {
        if (!stateProps?.dragOverlay) {
            return;
        }
        document.body.style.cursor = 'grabbing';
        // eslint-disable-next-line consistent-return
        return () => {
            document.body.style.cursor = '';
        };
    }, [stateProps?.dragOverlay]);
    const itemWrapClassName = itemClasses.itemWrap.concat((stateProps?.dragOverlay && ` ${itemClasses.state.dragging}`) ||
        (stateProps?.dragOverlay && ` ${itemClasses.state.sorting}`) ||
        (stateProps?.dragOverlay && ` ${itemClasses.state.dragOverlay}`) ||
        '');
    const itemClassName = itemClasses.item.concat((stateProps?.dragging && ` ${itemClasses.state.dragging}`) ||
        (stateProps?.sorting && ` ${itemClasses.state.sorting}`) ||
        (stateProps?.dragOverlay && ` ${itemClasses.state.dragOverlay}`) ||
        '');
    return (_jsx(StyledItemWrap, { ref: ref, className: itemWrapClassName, sx: {
            ...(!!stateProps?.transition && {
                transition: stateProps.transition,
            }),
            ...(!!stateProps?.transform && {
                '--translate-x': `${Math.round(stateProps.transform.x)}px`,
                '--translate-y': `${Math.round(stateProps.transform.y)}px`,
                '--scale-x': `${stateProps.transform.scaleX}`,
                '--scale-y': `${stateProps.transform.scaleY}`,
            }),
        }, children: _jsxs(StyledItem, { className: itemClassName, "data-cypress": "draggable-item", sx: sx, ...other, children: [item, _jsxs(Stack, { direction: "row", sx: {
                        top: 6,
                        right: 6,
                        zIndex: 9,
                        position: 'absolute',
                    }, children: [_jsx(IconButton, { disableRipple: true, disableFocusRipple: true, disableTouchRipple: true, size: "small", onClick: onRemove, className: itemClasses.removeBtn, children: _jsx(Iconify, { icon: "solar:close-circle-bold" }) }), _jsx(IconButton, { disableRipple: true, disableFocusRipple: true, disableTouchRipple: true, ...stateProps?.handleProps, ...stateProps?.listeners, size: "small", children: _jsx(Iconify, { icon: "nimbus:drag-dots" }) })] })] }) }));
});
export default memo(ItemBase);

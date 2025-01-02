import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { Scrollbar } from '../../components/scrollbar';
import { varAlpha, hideScrollY } from '../../theme/styles';
import { NavSectionMini, NavSectionVertical } from '../../components/nav-section';
import { NavToggleButton } from '../components/nav-toggle-button';
export function NavVertical({ sx, data, slotProps, isNavMini, layoutQuery, onToggleNav, ...other }) {
    const theme = useTheme();
    const renderNavVertical = (_jsxs(_Fragment, { children: [slotProps?.top, _jsx(Scrollbar, { fillContent: true, children: _jsx(NavSectionVertical, { data: data, sx: { px: 2, flex: '1 1 auto' }, slotProps: slotProps, ...other }) }), slotProps?.bottom] }));
    const renderNavMini = (_jsxs(_Fragment, { children: [slotProps?.topMini, _jsx(NavSectionMini, { data: data, sx: {
                    pb: 2,
                    px: 0.5,
                    ...hideScrollY,
                    flex: '1 1 auto',
                    overflowY: 'auto',
                }, ...other }), slotProps?.bottomMini] }));
    return (_jsxs(Box, { sx: {
            top: 0,
            left: 0,
            height: 1,
            display: 'none',
            position: 'fixed',
            flexDirection: 'column',
            bgcolor: 'var(--layout-nav-bg)',
            zIndex: 'var(--layout-nav-zIndex)',
            width: isNavMini ? 'var(--layout-nav-mini-width)' : 'var(--layout-nav-vertical-width)',
            borderRight: `1px solid var(--layout-nav-border-color, ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)})`,
            transition: theme.transitions.create(['width'], {
                easing: 'var(--layout-transition-easing)',
                duration: 'var(--layout-transition-duration)',
            }),
            [theme.breakpoints.up(layoutQuery)]: {
                display: 'flex',
            },
            ...sx,
        }, children: [onToggleNav && (_jsx(NavToggleButton, { isNavMini: isNavMini, onClick: onToggleNav, sx: {
                    display: 'none',
                    [theme.breakpoints.up(layoutQuery)]: {
                        display: 'inline-flex',
                    },
                } })), isNavMini ? renderNavMini : renderNavVertical] }));
}

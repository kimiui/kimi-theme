import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import { varAlpha, stylesMode } from '../../../theme/styles';
import { Block } from './styles';
import { SvgColor, svgColorClasses } from '../../svg-color';
export function NavOptions({ options, value, onClickOption, hideNavColor, hideNavLayout, }) {
    const theme = useTheme();
    const cssVars = {
        '--item-radius': '12px',
        '--item-bg': theme.vars.palette.grey[500],
        '--item-border-color': varAlpha(theme.vars.palette.grey['500Channel'], 0.08),
        '--item-active-color': `linear-gradient(135deg, ${theme.vars.palette.primary.light} 0%, ${theme.vars.palette.primary.main} 100%)`,
        '--item-active-shadow-light': `-8px 8px 20px -4px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}`,
        '--item-active-shadow-dark': `-8px 8px 20px -4px ${varAlpha(theme.vars.palette.common.blackChannel, 0.12)}`,
    };
    const labelStyles = {
        display: 'block',
        lineHeight: '14px',
        color: 'text.secondary',
        fontWeight: 'fontWeightSemiBold',
        fontSize: theme.typography.pxToRem(11),
    };
    const renderLayout = (_jsxs("div", { children: [_jsx(Box, { component: "span", sx: labelStyles, children: "Layout" }), _jsx(Box, { gap: 1.5, display: "flex", sx: { mt: 1.5 }, children: options.layouts.map((option) => (_jsx(LayoutOption, { option: option, selected: value.layout === option, onClick: () => onClickOption.layout(option) }, option))) })] }));
    const renderColor = (_jsxs("div", { children: [_jsx(Box, { component: "span", sx: labelStyles, children: "Color" }), _jsx(Box, { gap: 1.5, display: "flex", sx: { mt: 1.5 }, children: options.colors.map((option) => (_jsx(ColorOption, { option: option, selected: value.color === option, onClick: () => onClickOption.color(option) }, option))) })] }));
    return (_jsxs(Block, { title: "Nav", tooltip: "Dashboard only", sx: { ...cssVars, gap: 2.5 }, children: [!hideNavLayout && renderLayout, !hideNavColor && renderColor] }));
}
export function LayoutOption({ option, selected, sx, ...other }) {
    const renderNav = () => {
        const baseStyles = {
            flexShrink: 0,
            borderRadius: 1,
            bgcolor: 'var(--item-bg)',
        };
        const circle = (_jsx(Box, { sx: {
                ...baseStyles,
                width: 10,
                height: 10,
                opacity: 0.8,
                ...(selected && {
                    opacity: 1,
                    background: 'var(--item-active-color)',
                }),
            } }));
        const primaryItem = (_jsx(Box, { sx: {
                ...baseStyles,
                width: 1,
                height: 4,
                opacity: 0.48,
                ...(option === 'horizontal' && { width: 16 }),
                ...(selected && { background: 'var(--item-active-color)' }),
            } }));
        const secondaryItem = (_jsx(Box, { sx: {
                ...baseStyles,
                width: 1,
                height: 4,
                maxWidth: 14,
                opacity: 0.24,
                ...(option === 'horizontal' && { maxWidth: 10 }),
                ...(selected && { background: 'var(--item-active-color)' }),
            } }));
        return (_jsxs(Stack, { spacing: 0.5, flexShrink: 0, sx: {
                p: 0.75,
                width: 32,
                height: 1,
                borderRightWidth: 1,
                borderRightStyle: 'solid',
                borderRightColor: 'var(--item-border-color)',
                ...(option === 'mini' && {
                    width: 22,
                }),
                ...(option === 'horizontal' && {
                    width: 1,
                    height: 22,
                    borderRight: 'none',
                    alignItems: 'center',
                    flexDirection: 'row',
                    borderBottomWidth: 1,
                    borderBottomStyle: 'solid',
                    borderBottomColor: 'var(--item-border-color)',
                }),
            }, children: [circle, primaryItem, secondaryItem] }));
    };
    const renderContent = (_jsx(Box, { sx: { p: 0.5, width: 1, height: 1, flexGrow: 1 }, children: _jsx(Box, { sx: {
                width: 1,
                height: 1,
                opacity: 0.2,
                borderRadius: 0.75,
                bgcolor: 'var(--item-bg)',
                ...(selected && {
                    background: 'var(--item-active-color)',
                }),
            } }) }));
    return (_jsx(Stack, { direction: "column", sx: { width: 1 }, children: _jsxs(ButtonBase, { disableRipple: true, sx: {
                width: 1,
                height: 64,
                borderWidth: 1,
                borderStyle: 'solid',
                borderRadius: 'var(--item-radius)',
                borderColor: 'var(--item-border-color)',
                ...(option === 'horizontal' && { flexDirection: 'column' }),
                ...(selected && {
                    boxShadow: 'var(--item-active-shadow-light)',
                    [stylesMode.dark]: {
                        boxShadow: 'var(--item-active-shadow-dark)',
                    },
                }),
                ...sx,
            }, ...other, children: [renderNav(), renderContent] }) }));
}
// ----------------------------------------------------------------------
export function ColorOption({ option, selected, sx, ...other }) {
    return (_jsxs(ButtonBase, { disableRipple: true, sx: {
            gap: 1.5,
            width: 1,
            height: 56,
            color: 'text.disabled',
            borderRadius: 'var(--item-radius)',
            ...(selected && {
                borderWidth: 1,
                borderStyle: 'solid',
                color: 'text.primary',
                borderColor: 'var(--item-border-color)',
                boxShadow: 'var(--item-active-shadow-light)',
                [`& .${svgColorClasses.root}`]: {
                    background: 'var(--item-active-color)',
                },
                [stylesMode.dark]: {
                    boxShadow: 'var(--item-active-shadow-dark)',
                },
            }),
            ...sx,
        }, ...other, children: [_jsx(SvgColor, { src: `/assets/icons/setting/ic-sidebar-${option === 'integrate' ? 'outline' : 'filled'}.svg` }), _jsx(Box, { component: "span", sx: {
                    lineHeight: '18px',
                    textTransform: 'capitalize',
                    fontWeight: 'fontWeightSemiBold',
                    fontSize: (theme) => theme.typography.pxToRem(13),
                }, children: option })] }));
}

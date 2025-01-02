'use client';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { hexToRgb, useTheme } from '@mui/material/styles';
import { paths } from '../../../routes/paths';
import { useCopyToClipboard } from '../../../hooks';
import { toast } from '../../../components/snackbar';
import { CustomBreadcrumbs } from '../../../components/custom-breadcrumbs';
import { ComponentHero } from '../../component-hero';
import { ScrollToViewTemplate } from '../../component-template';
// ----------------------------------------------------------------------
const PALETTE = ['primary', 'secondary', 'info', 'success', 'warning', 'error'];
const VARIATIONS = ['lighter', 'light', 'main', 'dark', 'darker'];
const GREY = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];
const boxProps = {
    display: 'grid',
    gridTemplateColumns: {
        xs: 'repeat(1, 1fr)',
        sm: 'repeat(2, 1fr)',
        md: 'repeat(5, 1fr)',
    },
};
// ----------------------------------------------------------------------
export function ColorsView() {
    const theme = useTheme();
    const { copy } = useCopyToClipboard();
    const onCopy = (color) => {
        if (color) {
            toast.success(`Copied: ${color}`);
            copy(color);
        }
    };
    const BASE = PALETTE.map((color) => ({
        name: color[0].toUpperCase() + color.substring(1),
        component: (_jsx(Box, { ...boxProps, children: VARIATIONS.map((variation) => (_jsx(ColorCard, { variation: variation, varColor: theme.vars.palette[color][variation], hexColor: theme.palette[color][variation], onCopy: () => onCopy(theme.palette[color][variation]) }, variation))) })),
    }));
    const DEMO = [
        ...BASE,
        {
            name: 'Grey',
            component: (_jsx(Box, { ...boxProps, children: GREY.map((variation) => (_jsx(ColorCard, { variation: variation, varColor: theme.vars.palette.grey[variation], hexColor: theme.palette.grey[variation], onCopy: () => onCopy(theme.palette.grey[variation]) }, variation))) })),
        },
    ];
    return (_jsxs(_Fragment, { children: [_jsx(ComponentHero, { children: _jsx(CustomBreadcrumbs, { heading: "Color", links: [{ name: 'Components', href: paths.docs.components.root }, { name: 'Color' }], moreLink: ['https://mui.com/customization/color', 'https://colors.eva.design'] }) }), _jsx(ScrollToViewTemplate, { data: DEMO })] }));
}
function ColorCard({ varColor, hexColor, variation, onCopy }) {
    return (_jsxs(Stack, { spacing: 1, onClick: onCopy, sx: {
            p: 2,
            cursor: 'pointer',
            bgcolor: varColor,
            color: (theme) => theme.palette.getContrastText(hexColor),
            transition: (theme) => theme.transitions.create(['opacity', 'background-color'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.shorter,
            }),
            '&:hover': { opacity: 0.8 },
        }, children: [_jsx(Typography, { variant: "subtitle2", sx: { textTransform: 'capitalize', flexGrow: 1 }, children: variation }), _jsxs(Stack, { sx: { typography: 'caption' }, children: [_jsx(Box, { component: "span", sx: { opacity: 0.64 }, children: "Var" }), varColor] }), _jsxs(Stack, { sx: { typography: 'caption' }, children: [_jsx(Box, { component: "span", sx: { opacity: 0.64 }, children: "Hex" }), hexColor] }), _jsxs(Stack, { sx: { typography: 'caption' }, children: [_jsx(Box, { component: "span", sx: { opacity: 0.64 }, children: "Rgb" }), hexToRgb(hexColor).replace('rgb(', '').replace(')', '')] })] }));
}

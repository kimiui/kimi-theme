'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { paths } from '../../../routes/paths';
import { useResponsive } from '../../../hooks';
import { remToPx } from '../../../theme/styles';
import { CustomBreadcrumbs } from '../../../components/custom-breadcrumbs';
import { ComponentHero } from '../../component-hero';
import { ScrollToViewTemplate } from '../../component-template';
// ----------------------------------------------------------------------
const VARIANTS = [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2',
    'caption',
    'overline',
    'button',
];
const BASE = VARIANTS.map((variant) => ({
    name: variant[0].toUpperCase() + variant.substring(1),
    component: _jsx(BlockVariant, { variant: variant }),
}));
export function TypographyView() {
    const DEMO = [
        ...BASE,
        {
            name: 'Colors',
            component: (_jsxs(Stack, { spacing: 3, children: [['primary', 'secondary', 'disabled'].map((color) => (_jsxs(Paper, { children: [_jsxs(Typography, { gutterBottom: true, variant: "subtitle2", sx: { color: `text.${color}`, textTransform: 'capitalize' }, children: ["text ", color] }), _jsx(Typography, { gutterBottom: true, variant: "body2", sx: { color: `text.${color}` }, children: "Cras ultricies mi eu turpis hendrerit fringilla. Fusce vel dui. Pellentesque auctor neque nec urna. Sed cursus turpis vitae tortor. Curabitur suscipit suscipit tellus." })] }, color))), ['primary', 'secondary', 'info', 'warning', 'error'].map((color) => (_jsxs(Paper, { children: [_jsx(Typography, { gutterBottom: true, variant: "subtitle2", sx: { color: `${color}.main`, textTransform: 'capitalize' }, children: color }), _jsx(Typography, { gutterBottom: true, variant: "body2", sx: { color: `${color}.main` }, children: "Cras ultricies mi eu turpis hendrerit fringilla. Fusce vel dui. Pellentesque auctor neque nec urna. Sed cursus turpis vitae tortor. Curabitur suscipit suscipit tellus." })] }, color)))] })),
        },
    ];
    return (_jsxs(_Fragment, { children: [_jsx(ComponentHero, { children: _jsx(CustomBreadcrumbs, { heading: "Typography", links: [{ name: 'Components', href: paths.docs.components.root }, { name: 'Typography' }], moreLink: ['https://mui.com/components/typography'] }) }), _jsx(ScrollToViewTemplate, { data: DEMO })] }));
}
function BlockVariant({ variant }) {
    const theme = useTheme();
    const upSm = useResponsive('up', 'sm');
    const upMd = useResponsive('up', 'md');
    const upLg = useResponsive('up', 'lg');
    const fontProperties = theme.typography[variant];
    const keysStartWith = (obj) => Object.keys(obj).some((key) => key.startsWith('@media'));
    const hasMedia = keysStartWith(fontProperties);
    let { fontSize } = fontProperties;
    if (hasMedia) {
        if (upSm) {
            fontSize = fontProperties[theme.breakpoints.up('sm')]?.fontSize;
        }
        if (upMd) {
            fontSize = fontProperties[theme.breakpoints.up('md')]?.fontSize;
        }
        if (upLg) {
            fontSize = fontProperties[theme.breakpoints.up('lg')]?.fontSize;
        }
    }
    return (_jsxs(Paper, { variant: "outlined", sx: { p: 3 }, children: [_jsx(Typography, { variant: variant, children: "How can you choose a typeface?" }), _jsxs(Stack, { spacing: 0.5, sx: {
                    mt: 2,
                    typography: 'body2',
                    color: 'text.secondary',
                    fontFamily: '"Lucida Console", Courier, monospace',
                }, children: [_jsxs(Box, { component: "span", children: ["fontSize: ", `${remToPx(fontSize)}px`] }), _jsxs(Box, { component: "span", children: ["lineHeight: ", Number(fontProperties.lineHeight).toFixed(2)] }), _jsxs(Box, { component: "span", children: ["fontWeight: ", fontProperties.fontWeight] })] })] }));
}

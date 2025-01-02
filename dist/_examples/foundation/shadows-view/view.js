'use client';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import { paths } from '../../../routes/paths';
import { CustomBreadcrumbs } from '../../../components/custom-breadcrumbs';
import { ComponentHero } from '../../component-hero';
import { ScrollToViewTemplate } from '../../component-template';
// ----------------------------------------------------------------------
const boxProps = {
    gap: 3,
    display: 'grid',
    gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
};
// ----------------------------------------------------------------------
export function ShadowsView() {
    const theme = useTheme();
    const shadows = Object.values(theme.shadows);
    const SYSTEM = shadows.slice(1, shadows.length);
    console.log(SYSTEM);
    const DEMO = [
        {
            name: 'System',
            component: (_jsx(Box, { ...boxProps, children: SYSTEM.map((shadow, index) => (_jsx(ShadowCard, { title: `z${index + 1}`, sx: { boxShadow: shadow } }, shadow))) })),
        },
    ];
    return (_jsxs(_Fragment, { children: [_jsx(ComponentHero, { children: _jsx(CustomBreadcrumbs, { heading: "Shadows", links: [{ name: 'Components', href: paths.docs.components.root }, { name: 'Shadows' }] }) }), _jsx(ScrollToViewTemplate, { data: DEMO })] }));
}
// ----------------------------------------------------------------------
function ShadowCard({ sx, title }) {
    return (_jsx(Paper, { sx: {
            p: 3,
            minHeight: 120,
            display: 'flex',
            alignItems: 'center',
            typography: 'subtitle2',
            justifyContent: 'center',
            textTransform: 'capitalize',
            ...sx,
        }, children: title }));
}

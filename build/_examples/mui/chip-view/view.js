'use client';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { paths } from '../../../routes/paths';
import { CustomBreadcrumbs } from '../../../components/custom-breadcrumbs';
import { Chips } from './chip';
import { ComponentHero } from '../../component-hero';
import { ScrollToViewTemplate } from '../../component-template';
// ----------------------------------------------------------------------
export function ChipView() {
    const DEMO = [
        { name: 'Filled', component: _jsx(Chips, {}) },
        { name: 'Outlined', component: _jsx(Chips, { variant: "outlined" }) },
        { name: 'Soft', component: _jsx(Chips, { variant: "soft" }) },
    ];
    return (_jsxs(_Fragment, { children: [_jsx(ComponentHero, { children: _jsx(CustomBreadcrumbs, { heading: "Chip", links: [{ name: 'Components', href: paths.docs.components.root }, { name: 'Chip' }], moreLink: ['https://mui.com/components/chips'] }) }), _jsx(ScrollToViewTemplate, { data: DEMO })] }));
}

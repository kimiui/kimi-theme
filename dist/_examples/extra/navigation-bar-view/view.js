'use client';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { paths } from '../../../routes/paths';
import { CustomBreadcrumbs } from '../../../components/custom-breadcrumbs';
import { NavMini } from './nav-mini';
import { NavBasic } from './nav-basic';
import { NavVertical } from './nav-vertical';
import { NavHorizontal } from './nav-horizontal';
import { ComponentHero } from '../../component-hero';
import { ScrollToViewTemplate } from '../../component-template';
// ----------------------------------------------------------------------
const DEMO = [
    { name: 'Basic', component: _jsx(NavBasic, {}) },
    { name: 'Vertical', component: _jsx(NavVertical, {}) },
    { name: 'Mini', component: _jsx(NavMini, {}) },
    { name: 'Horizontal', component: _jsx(NavHorizontal, {}) },
];
// ----------------------------------------------------------------------
export function NavigationBarView() {
    return (_jsxs(_Fragment, { children: [_jsx(ComponentHero, { children: _jsx(CustomBreadcrumbs, { heading: "Navigation bar", links: [
                        { name: 'Components', href: paths.docs.components.root },
                        { name: 'Navigation bar' },
                    ] }) }), _jsx(ScrollToViewTemplate, { data: DEMO })] }));
}

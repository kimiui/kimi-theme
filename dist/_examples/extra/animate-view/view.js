'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { useTabs } from '../../../hooks';
import { paths } from '../../../routes/paths';
import { CustomBreadcrumbs } from '../../../components/custom-breadcrumbs';
import { AnimateOther } from './other';
import { AnimateDialog } from './dialog';
import { AnimateInview } from './inview';
import { AnimateScroll } from './scroll';
import { AnimateBackground } from './background';
import { ComponentHero } from '../../component-hero';
import { ComponentContainer } from '../../component-block';
// ----------------------------------------------------------------------
const TABS = [
    { value: 'inview', label: 'In View', component: _jsx(AnimateInview, {}) },
    { value: 'scroll', label: 'Scroll', component: _jsx(AnimateScroll, {}) },
    { value: 'dialog', label: 'Dialog', component: _jsx(AnimateDialog, {}) },
    {
        value: 'background',
        label: 'Background',
        component: _jsx(AnimateBackground, {}),
    },
    { value: 'other', label: 'Other', component: _jsx(AnimateOther, {}) },
];
// ----------------------------------------------------------------------
export function AnimateView() {
    const tabs = useTabs('inview');
    return (_jsxs(_Fragment, { children: [_jsx(ComponentHero, { children: _jsx(CustomBreadcrumbs, { heading: "Animate", links: [{ name: 'Components', href: paths.docs.components.root }, { name: 'Animate' }], moreLink: ['https://www.framer.com/api/motion'] }) }), _jsxs(ComponentContainer, { children: [_jsx(Tabs, { value: tabs.value, onChange: tabs.onChange, children: TABS.map((tab) => (_jsx(Tab, { value: tab.value, label: tab.label }, tab.value))) }), TABS.map((tab) => tab.value === tabs.value && _jsx(Box, { children: tab.component }, tab.value))] })] }));
}

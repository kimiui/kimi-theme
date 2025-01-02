'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Fragment } from 'react';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Paper from '@mui/material/Paper';
import { useTabs } from '../../../hooks';
import { paths } from '../../../routes/paths';
import { Iconify } from '../../../components/iconify';
import { CustomTabs } from '../../../components/custom-tabs';
import { CustomBreadcrumbs } from '../../../components/custom-breadcrumbs';
import { ComponentHero } from '../../component-hero';
import { ComponentBlock } from '../../component-block';
import { ScrollToViewTemplate } from '../../component-template';
// ----------------------------------------------------------------------
const TABS = [
    {
        value: 'one',
        icon: _jsx(Iconify, { icon: "solar:phone-bold", width: 24 }),
        label: 'Item one',
    },
    {
        value: 'two',
        icon: _jsx(Iconify, { icon: "solar:heart-bold", width: 24 }),
        label: 'Item two',
    },
    {
        value: 'three',
        icon: _jsx(Iconify, { icon: "eva:headphones-fill", width: 24 }),
        label: 'Item three',
        disabled: true,
    },
    {
        value: 'four',
        icon: _jsx(Iconify, { icon: "eva:headphones-fill", width: 24 }),
        label: 'Item four',
    },
    {
        value: 'five',
        icon: _jsx(Iconify, { icon: "eva:headphones-fill", width: 24 }),
        label: 'Item five',
        disabled: true,
    },
    {
        value: 'six',
        icon: _jsx(Iconify, { icon: "eva:headphones-fill", width: 24 }),
        label: 'Item six',
    },
    {
        value: 'seven',
        icon: _jsx(Iconify, { icon: "eva:headphones-fill", width: 24 }),
        label: 'Item seven',
    },
];
// ----------------------------------------------------------------------
export function TabsView() {
    const basicTabs = useTabs('one');
    const customTabs = useTabs('one');
    const scrollableTabs = useTabs('one');
    const DEMO = [
        {
            name: 'Text',
            component: (_jsxs(ComponentBlock, { sx: { flexDirection: 'column', alignItems: 'unset' }, children: [_jsx(Tabs, { value: basicTabs.value, onChange: basicTabs.onChange, children: TABS.slice(0, 3).map((tab) => (_jsx(Tab, { value: tab.value, label: tab.label }, tab.value))) }), _jsx(Paper, { variant: "outlined", sx: { p: 2.5, typography: 'body2', borderRadius: 1.5 }, children: TABS.slice(0, 3).map((tab) => tab.value === basicTabs.value ? (_jsx(Fragment, { children: tab.label }, tab.value)) : null) })] })),
        },
        {
            name: 'Icon',
            component: (_jsx(ComponentBlock, { children: _jsx(Tabs, { value: basicTabs.value, onChange: basicTabs.onChange, children: TABS.slice(0, 3).map((tab) => (_jsx(Tab, { icon: tab.icon, value: tab.value }, tab.value))) }) })),
        },
        {
            name: 'Top',
            component: (_jsx(ComponentBlock, { children: _jsx(Tabs, { value: basicTabs.value, onChange: basicTabs.onChange, children: TABS.slice(0, 3).map((tab) => (_jsx(Tab, { iconPosition: "top", icon: tab.icon, label: tab.label, value: tab.value, disabled: tab.disabled }, tab.value))) }) })),
        },
        {
            name: 'Bottom',
            component: (_jsx(ComponentBlock, { children: _jsx(Tabs, { value: basicTabs.value, onChange: basicTabs.onChange, children: TABS.slice(0, 3).map((tab) => (_jsx(Tab, { iconPosition: "bottom", icon: tab.icon, label: tab.label, value: tab.value, disabled: tab.disabled }, tab.value))) }) })),
        },
        {
            name: 'Start',
            component: (_jsx(ComponentBlock, { children: _jsx(Tabs, { value: basicTabs.value, onChange: basicTabs.onChange, children: TABS.slice(0, 3).map((tab) => (_jsx(Tab, { icon: tab.icon, label: tab.label, value: tab.value, disabled: tab.disabled }, tab.value))) }) })),
        },
        {
            name: 'End',
            component: (_jsx(ComponentBlock, { children: _jsx(Tabs, { value: basicTabs.value, onChange: basicTabs.onChange, children: TABS.slice(0, 3).map((tab) => (_jsx(Tab, { iconPosition: "end", icon: tab.icon, label: tab.label, value: tab.value, disabled: tab.disabled }, tab.value))) }) })),
        },
        {
            name: 'Scrollable',
            component: (_jsx(ComponentBlock, { children: _jsx(Tabs, { value: scrollableTabs.value, onChange: scrollableTabs.onChange, sx: { maxWidth: 320 }, children: TABS.map((tab) => (_jsx(Tab, { label: tab.label, value: tab.value }, tab.value))) }) })),
        },
        {
            name: 'Custom',
            component: (_jsxs(ComponentBlock, { sx: { flexDirection: 'column', alignItems: 'unset' }, children: [_jsx(CustomTabs, { value: customTabs.value, onChange: customTabs.onChange, variant: "scrollable", sx: { mx: 'auto', maxWidth: 320, borderRadius: 1 }, children: TABS.map((tab) => (_jsx(Tab, { value: tab.value, label: tab.label }, tab.value))) }), _jsx(Paper, { variant: "outlined", sx: { p: 2.5, typography: 'body2', borderRadius: 1.5 }, children: TABS.map((tab) => tab.value === basicTabs.value ? (_jsx(Fragment, { children: tab.label }, tab.value)) : null) })] })),
        },
    ];
    return (_jsxs(_Fragment, { children: [_jsx(ComponentHero, { children: _jsx(CustomBreadcrumbs, { heading: "Tabs", links: [{ name: 'Components', href: paths.docs.components.root }, { name: 'Tabs' }], moreLink: ['https://mui.com/components/tabs'] }) }), _jsx(ScrollToViewTemplate, { data: DEMO })] }));
}

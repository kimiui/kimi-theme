'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { _mock } from '../../../_mock';
import { paths } from '../../../routes/paths';
import { Iconify } from '../../../components/iconify';
import { CustomBreadcrumbs } from '../../../components/custom-breadcrumbs';
import { ComponentHero } from '../../component-hero';
import { ComponentBlock } from '../../component-block';
import { ScrollToViewTemplate } from '../../component-template';
// ----------------------------------------------------------------------
const _accordions = [...Array(4)].map((_, index) => ({
    id: _mock.id(index),
    value: `panel${index + 1}`,
    heading: `Accordion ${index + 1}`,
    subHeading: _mock.postTitle(index),
    detail: _mock.description(index),
}));
// ----------------------------------------------------------------------
export function AccordionView() {
    const [controlled, setControlled] = useState(false);
    const handleChangeControlled = (panel) => (event, isExpanded) => {
        setControlled(isExpanded ? panel : false);
    };
    const DEMO = [
        {
            name: 'Simple',
            component: (_jsx(ComponentBlock, { children: _jsx("div", { children: _accordions.map((accordion, index) => (_jsxs(Accordion, { disabled: index === 3, children: [_jsx(AccordionSummary, { expandIcon: _jsx(Iconify, { icon: "eva:arrow-ios-downward-fill" }), children: _jsx(Typography, { variant: "subtitle1", children: accordion.heading }) }), _jsx(AccordionDetails, { children: _jsx(Typography, { children: accordion.detail }) })] }, accordion.value))) }) })),
        },
        {
            name: 'Controlled',
            component: (_jsx(ComponentBlock, { children: _jsx("div", { children: _accordions.map((item, index) => (_jsxs(Accordion, { disabled: index === 3, expanded: controlled === item.value, onChange: handleChangeControlled(item.value), children: [_jsxs(AccordionSummary, { expandIcon: _jsx(Iconify, { icon: "eva:arrow-ios-downward-fill" }), children: [_jsx(Typography, { variant: "subtitle1", sx: { width: '33%', flexShrink: 0 }, children: item.heading }), _jsx(Typography, { sx: { color: 'text.secondary' }, children: item.subHeading })] }), _jsx(AccordionDetails, { children: _jsx(Typography, { children: item.detail }) })] }, item.value))) }) })),
        },
    ];
    return (_jsxs(_Fragment, { children: [_jsx(ComponentHero, { children: _jsx(CustomBreadcrumbs, { heading: "Accordion", links: [{ name: 'Components', href: paths.docs.components.root }, { name: 'Accordion' }], moreLink: ['https://mui.com/components/accordion'] }) }), _jsx(ScrollToViewTemplate, { data: DEMO })] }));
}

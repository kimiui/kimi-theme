'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import { paths } from '../../../routes/paths';
import { CustomBreadcrumbs } from '../../../components/custom-breadcrumbs';
import { OrganizationalChart } from '../../../components/organizational-chart';
import { GroupNode } from './group-node';
import { SimpleNode } from './simple-node';
import { StandardNode } from './standard-node';
import { GROUP_DATA, SIMPLE_DATA } from './data';
import { ComponentHero } from '../../component-hero';
import { ComponentBlock, ComponentContainer } from '../../component-block';
// ----------------------------------------------------------------------
export function OrganizationalChartView() {
    const theme = useTheme();
    return (_jsxs(_Fragment, { children: [_jsx(ComponentHero, { children: _jsx(CustomBreadcrumbs, { heading: "Organizational chart", links: [
                        { name: 'Components', href: paths.docs.components.root },
                        { name: 'Organizational chart' },
                    ], moreLink: [
                        'https://www.npmjs.com/package/react-organizational-chart',
                        'https://daniel-hauser.github.io/react-organizational-chart/?path=/story/example-tree--basic',
                    ] }) }), _jsx(ComponentContainer, { children: _jsxs(Stack, { spacing: 5, children: [_jsx(ComponentBlock, { title: "Simple", children: _jsx(Stack, { sx: { overflowY: 'auto', py: 10 }, children: _jsx(OrganizationalChart, { data: SIMPLE_DATA, lineColor: theme.vars.palette.primary.light, nodeItem: (props) => (_jsx(SimpleNode, { sx: { color: theme.vars.palette.text.primary }, ...props })) }) }) }), _jsx(ComponentBlock, { title: "Standard", children: _jsx(Stack, { sx: { overflowY: 'auto', py: 10 }, children: _jsx(OrganizationalChart, { lineHeight: "40px", data: SIMPLE_DATA, nodeItem: (props) => (_jsx(StandardNode, { sx: {
                                        // ...
                                        }, ...props })) }) }) }), _jsx(ComponentBlock, { title: "Group", children: _jsx(Stack, { sx: { overflowY: 'auto', py: 10 }, children: _jsx(OrganizationalChart, { lineHeight: "64px", data: GROUP_DATA, nodeItem: (props) => (_jsx(GroupNode, { sx: {
                                        // ...
                                        }, ...props })) }) }) })] }) })] }));
}

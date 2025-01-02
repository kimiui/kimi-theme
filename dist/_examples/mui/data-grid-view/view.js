'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import { _mock } from '../../../_mock';
import { paths } from '../../../routes/paths';
import { CustomBreadcrumbs } from '../../../components/custom-breadcrumbs';
import { DataGridBasic } from './data-grid-basic';
import { DataGridCustom } from './data-grid-custom';
import { ComponentHero } from '../../component-hero';
// ----------------------------------------------------------------------
const _dataGrid = [...Array(20)].map((_, index) => {
    const status = (index % 2 && 'online') || (index % 3 && 'alway') || (index % 4 && 'busy') || 'offline';
    return {
        id: _mock.id(index),
        status,
        email: _mock.email(index),
        name: _mock.fullName(index),
        age: _mock.number.age(index),
        lastLogin: _mock.time(index),
        isAdmin: _mock.boolean(index),
        lastName: _mock.lastName(index),
        rating: _mock.number.rating(index),
        firstName: _mock.firstName(index),
        performance: _mock.number.percent(index),
    };
});
// ----------------------------------------------------------------------
export function DataGridView() {
    return (_jsxs(_Fragment, { children: [_jsxs(ComponentHero, { children: [_jsx(CustomBreadcrumbs, { heading: "DataGrid", links: [{ name: 'Components', href: paths.docs.components.root }, { name: 'DataGrid' }], moreLink: ['https://mui.com/x/react-data-grid/'], sx: { mb: 0 } }), _jsxs(Typography, { variant: "body2", sx: { my: 3 }, children: ["This component includes 2 ", _jsx("strong", { children: "Free" }), " and ", _jsx("strong", { children: "Paid" }), " versions from MUI.", _jsx("br", {}), "Paid version will have more features. Please read more", ' ', _jsx(Link, { href: "https://mui.com/x/react-data-grid/", target: "_blank", rel: "noopener", children: "here" })] })] }), _jsx(Container, { sx: { my: 10 }, children: _jsxs(Stack, { spacing: 5, children: [_jsxs(Card, { children: [_jsx(CardHeader, { title: "Basic", sx: { mb: 2 } }), _jsx(Box, { sx: { height: 390 }, children: _jsx(DataGridBasic, { data: _dataGrid }) })] }), _jsxs(Card, { children: [_jsx(CardHeader, { title: "Custom", sx: { mb: 2 } }), _jsx(Box, { sx: { height: 720 }, children: _jsx(DataGridCustom, { data: _dataGrid }) })] })] }) })] }));
}

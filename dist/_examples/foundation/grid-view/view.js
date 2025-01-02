'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import Grid from '@mui/material/Grid2';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { paths } from '../../../routes/paths';
import { CustomBreadcrumbs } from '../../../components/custom-breadcrumbs';
import { ComponentHero } from '../../component-hero';
import { ComponentBlock, ComponentContainer } from '../../component-block';
// ----------------------------------------------------------------------
const LABELS = ['1col', '2col', '3col', '4col', '6col', '12col'];
// ----------------------------------------------------------------------
export function GridView() {
    const theme = useTheme();
    const [spacing, setSpacing] = useState(2);
    const [column, setColumn] = useState(3);
    const handleChangeSpacing = (event) => {
        setSpacing(Number(event.target.value));
    };
    const handleChangeColumn = (event) => {
        setColumn(Number(event.target.value));
    };
    return (_jsxs(_Fragment, { children: [_jsx(ComponentHero, { children: _jsx(CustomBreadcrumbs, { heading: "Grid", links: [{ name: 'Components', href: paths.docs.components.root }, { name: 'Grid' }] }) }), _jsxs(ComponentContainer, { children: [_jsxs(ComponentBlock, { title: "Spacing", sx: { flexDirection: 'column', alignItems: 'unset' }, children: [_jsxs(Typography, { variant: "body2", sx: { mb: 3, textAlign: 'center' }, children: ["Spacing: ", _jsx("strong", { children: theme.spacing(Number(spacing)) })] }), _jsx(Grid, { container: true, spacing: spacing, children: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((value) => (_jsx(Grid, { size: 1, children: _jsx(Paper, { sx: { height: 80, boxShadow: theme.shadows[8] } }) }, value))) }), _jsx(RadioGroup, { row: true, name: "spacing", value: spacing.toString(), onChange: handleChangeSpacing, sx: { mt: 3, display: 'flex', justifyContent: 'center' }, children: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (_jsx(FormControlLabel, { value: value.toString(), label: value.toString(), control: _jsx(Radio, {}) }, value))) })] }), _jsxs(ComponentBlock, { title: "Column", sx: { flexDirection: 'column', alignItems: 'unset' }, children: [_jsx(Grid, { container: true, spacing: 3, children: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((value) => (_jsx(Grid, { size: column, children: _jsxs(Paper, { sx: {
                                            py: 3,
                                            textAlign: 'center',
                                            boxShadow: theme.shadows[8],
                                        }, children: ["xs = ", column] }) }, value))) }), _jsx(RadioGroup, { row: true, name: "column", value: column.toString(), onChange: handleChangeColumn, sx: { mt: 3, display: 'flex', justifyContent: 'center' }, children: [12, 6, 4, 3, 2, 1].map((value, index) => (_jsx(FormControlLabel, { value: value.toString(), label: LABELS[index], control: _jsx(Radio, {}) }, value))) })] })] })] }));
}

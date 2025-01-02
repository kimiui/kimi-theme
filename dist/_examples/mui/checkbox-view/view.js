'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import { paths } from '../../../routes/paths';
import { Iconify } from '../../../components/iconify';
import { CustomBreadcrumbs } from '../../../components/custom-breadcrumbs';
import { ComponentHero } from '../../component-hero';
import { ComponentBlock } from '../../component-block';
import { ScrollToViewTemplate } from '../../component-template';
// ----------------------------------------------------------------------
const COLORS = ['default', 'primary', 'secondary', 'info', 'success', 'warning', 'error'];
const PLACEMENTS = ['top', 'start', 'bottom', 'end'];
// ----------------------------------------------------------------------
export function CheckboxView() {
    const [checked, setChecked] = useState([true, false]);
    const handleChange1 = (event) => {
        setChecked([event.target.checked, event.target.checked]);
    };
    const handleChange2 = (event) => {
        setChecked([event.target.checked, checked[1]]);
    };
    const handleChange3 = (event) => {
        setChecked([checked[0], event.target.checked]);
    };
    const DEMO = [
        {
            name: 'Basic',
            component: (_jsxs(ComponentBlock, { children: [_jsx(Checkbox, { size: "medium" }), _jsx(Checkbox, { size: "medium", defaultChecked: true }), _jsx(Checkbox, { size: "medium", defaultChecked: true, indeterminate: true }), _jsx(Checkbox, { size: "medium", disabled: true }), _jsx(Checkbox, { size: "medium", disabled: true, defaultChecked: true }), _jsx(Checkbox, { size: "medium", disabled: true, indeterminate: true })] })),
        },
        {
            name: 'Size & custom icon',
            component: (_jsxs(ComponentBlock, { children: [_jsx(FormControlLabel, { label: "Normal", control: _jsx(Checkbox, { size: "medium", defaultChecked: true }) }), _jsx(FormControlLabel, { label: "Small", control: _jsx(Checkbox, { size: "small", defaultChecked: true }) }), _jsx(FormControlLabel, { control: _jsx(Checkbox, { color: "info", size: "small", icon: _jsx(Iconify, { icon: "solar:heart-bold" }), checkedIcon: _jsx(Iconify, { icon: "solar:heart-bold" }), inputProps: { id: 'favorite-checkbox' } }), label: "Custom icon" }), _jsx(FormControlLabel, { control: _jsx(Checkbox, { color: "error", size: "small", icon: _jsx(Iconify, { icon: "eva:award-fill" }), checkedIcon: _jsx(Iconify, { icon: "eva:award-fill" }), inputProps: { id: 'award-checkbox' } }), label: "Custom icon" })] })),
        },
        {
            name: 'Placement',
            component: (_jsx(ComponentBlock, { children: _jsx(FormControl, { component: "fieldset", children: _jsx(FormGroup, { "aria-label": "position", row: true, children: PLACEMENTS.map((placement) => (_jsx(FormControlLabel, { value: placement, label: placement, labelPlacement: placement, control: _jsx(Checkbox, { size: "medium" }), sx: { textTransform: 'capitalize' } }, placement))) }) }) })),
        },
        {
            name: 'Colors',
            component: (_jsxs(ComponentBlock, { children: [_jsxs(FormGroup, { children: [COLORS.map((color) => (_jsx(FormControlLabel, { control: _jsx(Checkbox, { size: "medium", defaultChecked: true, color: color }), label: color, sx: { textTransform: 'capitalize' } }, color))), _jsx(FormControlLabel, { disabled: true, control: _jsx(Checkbox, { size: "medium", defaultChecked: true, color: "error" }), label: "Disabled" })] }), _jsx(FormControl, { component: "fieldset", children: _jsxs(FormGroup, { children: [COLORS.map((color) => (_jsx(FormControlLabel, { control: _jsx(Checkbox, { size: "medium", defaultChecked: true, indeterminate: true, color: color }), label: color, sx: { textTransform: 'capitalize' } }, color))), _jsx(FormControlLabel, { disabled: true, control: _jsx(Checkbox, { size: "medium", defaultChecked: true, indeterminate: true, color: "error" }), label: "Disabled" })] }) })] })),
        },
        {
            name: 'Indeterminate',
            component: (_jsx(ComponentBlock, { children: _jsxs("div", { children: [_jsx(FormControlLabel, { label: "Parent", control: _jsx(Checkbox, { size: "medium", checked: checked[0] && checked[1], indeterminate: checked[0] !== checked[1], onChange: handleChange1 }) }), _jsxs("div", { children: [_jsx(FormControlLabel, { label: "Child 1", control: _jsx(Checkbox, { size: "medium", checked: checked[0], onChange: handleChange2 }) }), _jsx(FormControlLabel, { label: "Child 2", control: _jsx(Checkbox, { size: "medium", checked: checked[1], onChange: handleChange3 }) })] })] }) })),
        },
    ];
    return (_jsxs(_Fragment, { children: [_jsx(ComponentHero, { children: _jsx(CustomBreadcrumbs, { heading: "Checkboxes", links: [{ name: 'Components', href: paths.docs.components.root }, { name: 'Checkboxes' }], moreLink: ['https://mui.com/components/checkboxes'] }) }), _jsx(ScrollToViewTemplate, { data: DEMO })] }));
}

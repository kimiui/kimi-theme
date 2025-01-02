'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import { paths } from '../../../routes/paths';
import { CustomBreadcrumbs } from '../../../components/custom-breadcrumbs';
import { ComponentHero } from '../../component-hero';
import { ComponentBlock } from '../../component-block';
import { ScrollToViewTemplate } from '../../component-template';
// ----------------------------------------------------------------------
const COLORS = ['default', 'primary', 'secondary', 'info', 'success', 'warning', 'error'];
const PLACEMENTS = ['top', 'start', 'bottom', 'end'];
// ----------------------------------------------------------------------
export function RadioButtonView() {
    const [value, setValue] = useState('a1');
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const DEMO = [
        {
            name: 'Basic',
            component: (_jsx(ComponentBlock, { children: _jsx(FormControl, { component: "fieldset", children: _jsxs(RadioGroup, { row: true, defaultValue: "nn", children: [_jsx(Radio, { size: "medium", value: "nn" }), _jsx(Radio, { size: "medium", value: "gg" }), _jsx(Radio, { size: "medium", disabled: true, value: "hh" })] }) }) })),
        },
        {
            name: 'Sizes',
            component: (_jsx(ComponentBlock, { children: _jsxs(RadioGroup, { row: true, defaultValue: "g", children: [_jsx(FormControlLabel, { value: "g", control: _jsx(Radio, { size: "medium" }), label: "Normal" }), _jsx(FormControlLabel, { value: "p", control: _jsx(Radio, { size: "small" }), label: "Small" })] }) })),
        },
        {
            name: 'Placement',
            component: (_jsx(ComponentBlock, { children: _jsx(FormControl, { component: "fieldset", children: _jsx(RadioGroup, { row: true, defaultValue: "top", children: PLACEMENTS.map((placement) => (_jsx(FormControlLabel, { value: placement, label: placement, labelPlacement: placement, control: _jsx(Radio, { size: "medium" }), sx: { textTransform: 'capitalize' } }, placement))) }) }) })),
        },
        {
            name: 'Colors',
            component: (_jsx(ComponentBlock, { children: _jsx(FormControl, { component: "fieldset", children: _jsxs(RadioGroup, { value: value, onChange: handleChange, children: [COLORS.map((color) => (_jsx(FormControlLabel, { value: color, control: _jsx(Radio, { size: "medium", color: color }), label: color, sx: { textTransform: 'capitalize' } }, color))), _jsx(FormControlLabel, { disabled: true, value: "a8", control: _jsx(Radio, { size: "medium", color: "error" }), label: "Disabled" })] }) }) })),
        },
    ];
    return (_jsxs(_Fragment, { children: [_jsx(ComponentHero, { children: _jsx(CustomBreadcrumbs, { heading: "Radio Buttons", links: [
                        { name: 'Components', href: paths.docs.components.root },
                        { name: 'Radio Buttons' },
                    ], moreLink: ['https://mui.com/components/radio-buttons'] }) }), _jsx(ScrollToViewTemplate, { data: DEMO })] }));
}

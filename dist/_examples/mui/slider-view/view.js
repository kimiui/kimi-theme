'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider, { sliderClasses } from '@mui/material/Slider';
import { paths } from '../../../routes/paths';
import { varAlpha } from '../../../theme/styles';
import { Iconify } from '../../../components/iconify';
import { CustomBreadcrumbs } from '../../../components/custom-breadcrumbs';
import { ComponentHero } from '../../component-hero';
import { ComponentBlock } from '../../component-block';
import { ScrollToViewTemplate } from '../../component-template';
// ----------------------------------------------------------------------
const COLORS = ['inherit', 'primary', 'secondary', 'error', 'info', 'success', 'warning'];
const marks = [
    { value: 0, label: '0°C' },
    { value: 20, label: '20°C' },
    { value: 37, label: '37°C' },
    { value: 100, label: '100°C' },
];
const prices = [
    { value: 0, label: '$0' },
    { value: 25, label: '250' },
    { value: 50, label: '500' },
    { value: 75, label: '750' },
    { value: 100, label: '1000' },
];
// ----------------------------------------------------------------------
function valuePrice(value) {
    return value > 0 ? `$${value}0` : `${value}`;
}
function valueLabelFormatPrice(value) {
    return value > 0 ? `$${value}` : value;
}
function valuetext(value) {
    return `$${value}°C`;
}
function valueLabelFormat(value) {
    return marks.findIndex((mark) => mark.value === value) + 1;
}
// ----------------------------------------------------------------------
export function SliderView() {
    const [value, setValue] = useState(30);
    const [price, setPrice] = useState([20, 37]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleChangePrice = (event, newValue) => {
        setPrice(newValue);
    };
    const DEMO = [
        {
            name: 'Volume',
            component: (_jsx(ComponentBlock, { children: _jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1, width: 1, children: [_jsx(Iconify, { icon: "eva:volume-mute-fill", width: 24 }), _jsx(Slider, { value: value, onChange: handleChange, "aria-labelledby": "continuous-slider" }), _jsx(Iconify, { icon: "eva:volume-up-fill", width: 24 })] }) })),
        },
        {
            name: 'Disabled',
            component: (_jsx(ComponentBlock, { children: _jsx(Slider, { disabled: true, defaultValue: 30 }) })),
        },
        {
            name: 'Temperature',
            component: (_jsx(ComponentBlock, { children: _jsx(Slider, { defaultValue: 30, getAriaValueText: valuetext, valueLabelDisplay: "auto", step: 10, marks: true, min: 10, max: 110, sx: {
                        [`& .${sliderClasses.mark}[data-index="10"]`]: {
                            display: 'none',
                        },
                    } }) })),
        },
        {
            name: 'Sizes',
            component: (_jsxs(ComponentBlock, { children: [_jsx(Slider, { size: "medium", marks: true, min: 10, step: 10, max: 110, defaultValue: 30, valueLabelDisplay: "auto", getAriaValueText: valuetext, sx: {
                            [`& .${sliderClasses.mark}[data-index="10"]`]: {
                                display: 'none',
                            },
                        } }), _jsx(Slider, { size: "small", marks: true, min: 10, step: 10, max: 110, defaultValue: 30, valueLabelDisplay: "auto", getAriaValueText: valuetext, sx: {
                            [`& .${sliderClasses.mark}[data-index="10"]`]: {
                                display: 'none',
                            },
                        } })] })),
        },
        {
            name: 'Small steps',
            component: (_jsx(ComponentBlock, { children: _jsx(Slider, { defaultValue: 0.00000005, getAriaValueText: valuetext, step: 0.00000001, marks: true, min: -0.00000005, max: 0.0000001, valueLabelDisplay: "auto" }) })),
        },
        {
            name: 'Custom marks',
            component: (_jsx(ComponentBlock, { children: _jsx(Slider, { defaultValue: 20, getAriaValueText: valuetext, step: 10, valueLabelDisplay: "auto", marks: marks, sx: {
                        [`& .${sliderClasses.mark}[data-index="3"]`]: { display: 'none' },
                    } }) })),
        },
        {
            name: 'Restricted values',
            component: (_jsx(ComponentBlock, { children: _jsx(Slider, { defaultValue: 20, valueLabelFormat: valueLabelFormat, getAriaValueText: valuetext, step: null, valueLabelDisplay: "auto", marks: marks, sx: {
                        [`& .${sliderClasses.mark}[data-index="3"]`]: { display: 'none' },
                    } }) })),
        },
        {
            name: 'Range',
            component: (_jsxs(ComponentBlock, { sx: { gap: 8, flexDirection: 'column' }, children: [_jsx(Slider, { scale: (x) => x * 10, step: 10, marks: prices, value: price, onChange: handleChangePrice, valueLabelDisplay: "on", getAriaValueText: valuePrice, valueLabelFormat: valueLabelFormatPrice, sx: {
                            [`& .${sliderClasses.mark}[data-index="4"]`]: { display: 'none' },
                        } }), _jsxs(Stack, { spacing: 5, direction: "row", sx: {
                            p: 2,
                            borderRadius: 1,
                            typography: 'subtitle2',
                            bgcolor: (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.12),
                        }, children: [_jsxs(Box, { component: "span", children: ["Min: ", valuePrice(price[0])] }), _jsxs(Box, { component: "span", children: ["Max: ", valuePrice(price[1])] })] })] })),
        },
        {
            name: 'Color',
            component: (_jsx(ComponentBlock, { sx: { flexDirection: 'column' }, children: COLORS.map((color) => (_jsx(Slider, { color: color, marks: true, min: 10, step: 10, max: 110, defaultValue: 30, valueLabelDisplay: "auto", getAriaValueText: valuetext, sx: {
                        [`& .${sliderClasses.mark}[data-index="10"]`]: {
                            display: 'none',
                        },
                    } }, color))) })),
        },
    ];
    return (_jsxs(_Fragment, { children: [_jsx(ComponentHero, { children: _jsx(CustomBreadcrumbs, { heading: "Slider", links: [{ name: 'Components', href: paths.docs.components.root }, { name: 'Slider' }], moreLink: ['https://mui.com/components/slider'] }) }), _jsx(ScrollToViewTemplate, { data: DEMO })] }));
}

'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { paths } from '../../../routes/paths';
import { Iconify } from '../../../components/iconify';
import { CustomBreadcrumbs } from '../../../components/custom-breadcrumbs';
import { ComponentHero } from '../../component-hero';
import { ComponentBlock } from '../../component-block';
import { ScrollToViewTemplate } from '../../component-template';
// ----------------------------------------------------------------------
const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};
const customIcons = {
    1: {
        icon: _jsx(Iconify, { icon: "ic:round-sentiment-very-dissatisfied" }),
        label: 'Very Dissatisfied',
    },
    2: {
        icon: _jsx(Iconify, { icon: "ic:round-sentiment-dissatisfied" }),
        label: 'Dissatisfied',
    },
    3: { icon: _jsx(Iconify, { icon: "ic:round-sentiment-neutral" }), label: 'Neutral' },
    4: {
        icon: _jsx(Iconify, { icon: "ic:round-sentiment-satisfied" }),
        label: 'Satisfied',
    },
    5: {
        icon: _jsx(Iconify, { icon: "ic:round-sentiment-very-satisfied" }),
        label: 'Very Satisfied',
    },
};
// ----------------------------------------------------------------------
export function RatingView() {
    const [value, setValue] = useState(2);
    const [hover, setHover] = useState(-1);
    const DEMO = [
        {
            name: 'Controlled',
            component: (_jsx(ComponentBlock, { children: _jsx(Rating, { name: "simple-controlled", value: value, onChange: (event, newValue) => {
                        setValue(newValue);
                    } }) })),
        },
        {
            name: 'Read only',
            component: (_jsx(ComponentBlock, { children: _jsx(Rating, { name: "read-only", value: value, readOnly: true }) })),
        },
        {
            name: 'Disabled',
            component: (_jsx(ComponentBlock, { children: _jsx(Rating, { name: "disabled", value: value, disabled: true }) })),
        },
        {
            name: 'Pristine',
            component: (_jsx(ComponentBlock, { children: _jsx(Rating, { name: "pristine", value: null }) })),
        },
        {
            name: 'Custom empty icon',
            component: (_jsx(ComponentBlock, { children: _jsx(Rating, { name: "customized-empty", defaultValue: 2, precision: 0.5 }) })),
        },
        {
            name: 'Custom icon and color',
            component: (_jsx(ComponentBlock, { children: _jsx(Rating, { name: "customized-color", defaultValue: 2, getLabelText: (ratingValue) => `${ratingValue} Heart${ratingValue !== 1 ? 's' : ''}`, precision: 0.5, icon: _jsx(Iconify, { icon: "solar:heart-bold" }), emptyIcon: _jsx(Iconify, { icon: "solar:heart-bold" }), sx: { color: 'info.main', '&:hover': { color: 'info.dark' } } }) })),
        },
        {
            name: '10 stars',
            component: (_jsx(ComponentBlock, { children: _jsx(Rating, { name: "customized-10", defaultValue: 2, max: 10 }) })),
        },
        {
            name: 'Custom icon set',
            component: (_jsx(ComponentBlock, { children: _jsx(Rating, { name: "customized-icons", defaultValue: 2, getLabelText: (ratingValue) => customIcons[ratingValue].label, IconContainerComponent: IconContainer }) })),
        },
        {
            name: 'Hover feedback',
            component: (_jsxs(ComponentBlock, { children: [_jsx(Rating, { name: "hover-feedback", value: value, precision: 0.5, onChange: (event, newValue) => {
                            setValue(newValue);
                        }, onChangeActive: (event, newHover) => {
                            setHover(newHover);
                        } }), value !== null && _jsx(Box, { sx: { ml: 2 }, children: labels[hover !== -1 ? hover : value] })] })),
        },
        {
            name: 'Half ratings',
            component: (_jsxs(ComponentBlock, { children: [_jsx(Rating, { name: "half-rating", defaultValue: 2.5, precision: 0.5 }), _jsx(Rating, { name: "half-rating-read", defaultValue: 2.5, precision: 0.5, readOnly: true })] })),
        },
        {
            name: 'Sizes',
            component: (_jsxs(ComponentBlock, { children: [_jsx(Rating, { name: "size-small", defaultValue: 2, size: "small" }), _jsx(Rating, { name: "size-medium", defaultValue: 2 }), _jsx(Rating, { name: "size-large", defaultValue: 2, size: "large" })] })),
        },
    ];
    return (_jsxs(_Fragment, { children: [_jsx(ComponentHero, { children: _jsx(CustomBreadcrumbs, { heading: "Rating", links: [{ name: 'Components', href: paths.docs.components.root }, { name: 'Rating' }], moreLink: ['https://mui.com/components/rating'] }) }), _jsx(ScrollToViewTemplate, { data: DEMO })] }));
}
// ----------------------------------------------------------------------
function IconContainer(props) {
    const { value, ...other } = props;
    return _jsx("span", { ...other, children: customIcons[value].icon });
}

'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { _mock } from '../../../_mock';
import { paths } from '../../../routes/paths';
import { Image } from '../../../components/image';
import { CustomBreadcrumbs } from '../../../components/custom-breadcrumbs';
import { ComponentHero } from '../../component-hero';
import { ScrollToViewTemplate } from '../../component-template';
// ----------------------------------------------------------------------
const RATIO = ['4/3', '3/4', '6/4', '4/6', '16/9', '9/16', '21/9', '9/21', '1/1'];
const IMAGES = RATIO.map((ratio, index) => ({
    ratio,
    url: _mock.image.cover(index + 1),
}));
// ----------------------------------------------------------------------
export function ImageView() {
    const DEMO = [
        {
            name: 'List',
            component: (_jsx(Box, { gap: 2, display: "grid", gridTemplateColumns: {
                    xs: 'repeat(2, 1fr)',
                    sm: 'repeat(3, 1fr)',
                    md: 'repeat(4, 1fr)',
                }, children: IMAGES.map((img) => (_jsx(Image, { alt: img.ratio, src: img.url, ratio: "3/2", sx: { borderRadius: 2 } }, img.ratio))) })),
        },
        {
            name: 'Aspect ratio',
            component: (_jsx(Box, { gap: 2, display: "grid", gridTemplateColumns: {
                    xs: 'repeat(2, 1fr)',
                    sm: 'repeat(3, 1fr)',
                    md: 'repeat(4, 1fr)',
                }, children: IMAGES.map((img) => (_jsxs(Stack, { spacing: 1, children: [_jsx(Typography, { variant: "overline", sx: { color: 'text.secondary' }, children: img.ratio }), _jsx(Image, { alt: img.ratio, src: img.url, ratio: img.ratio, sx: { borderRadius: 2 } })] }, img.ratio))) })),
        },
    ];
    return (_jsxs(_Fragment, { children: [_jsx(ComponentHero, { children: _jsx(CustomBreadcrumbs, { heading: "Image", links: [{ name: 'Components', href: paths.docs.components.root }, { name: 'Image' }] }) }), _jsx(ScrollToViewTemplate, { data: DEMO })] }));
}

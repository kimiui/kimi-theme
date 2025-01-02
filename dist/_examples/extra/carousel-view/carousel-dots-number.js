'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { Image } from '../../../components/image';
import { Iconify } from '../../../components/iconify';
import { maxLine, varAlpha, bgGradient } from '../../../theme/styles';
import { Carousel, useCarousel, CarouselDotButtons, CarouselArrowFloatButtons, } from '../../../components/carousel';
import { IndexLabel } from './elements';
export function CarouselDotsNumber({ data }) {
    const carousel = useCarousel({
        loop: true,
        dragFree: true,
        slideSpacing: '20px',
        slidesToShow: { xs: 1, sm: 2, md: '36%' },
    });
    return (_jsxs(_Fragment, { children: [_jsxs(Box, { sx: { position: 'relative' }, children: [_jsx(Carousel, { carousel: carousel, children: data.map((item, index) => (_jsx(CarouselItem, { index: index, item: item }, item.id))) }), _jsx(CarouselArrowFloatButtons, { ...carousel.arrows, options: carousel.options })] }), _jsx(CarouselDotButtons, { variant: "number", scrollSnaps: carousel.dots.scrollSnaps, selectedIndex: carousel.dots.selectedIndex, onClickDot: carousel.dots.onClickDot, sx: { mt: 5, mb: 2, width: 1, justifyContent: 'center' } })] }));
}
function CarouselItem({ item, index }) {
    const theme = useTheme();
    return (_jsxs(Box, { sx: { borderRadius: 2, overflow: 'hidden', position: 'relative' }, children: [_jsx(IndexLabel, { index: index + 1 }), _jsx(Image, { visibleByDefault: true, alt: item.title, src: item.coverUrl, ratio: "3/4" }), _jsxs(CardContent, { sx: {
                    ...bgGradient({
                        color: `to top, ${theme.vars.palette.grey[900]} 25%, ${varAlpha(theme.vars.palette.grey['900Channel'], 0)} 100%`,
                    }),
                    width: 1,
                    bottom: 0,
                    zIndex: 9,
                    textAlign: 'left',
                    position: 'absolute',
                    color: 'common.white',
                }, children: [_jsx(Typography, { variant: "h5", sx: { ...maxLine({ line: 2 }), mb: 2 }, children: item.title }), _jsxs(Link, { color: "inherit", variant: "overline", sx: {
                            opacity: 0.72,
                            alignItems: 'center',
                            display: 'inline-flex',
                            transition: theme.transitions.create(['opacity']),
                            '&:hover': { opacity: 1 },
                        }, children: ["learn More", _jsx(Iconify, { icon: "eva:arrow-forward-fill", width: 16, sx: { ml: 1 } })] })] })] }));
}

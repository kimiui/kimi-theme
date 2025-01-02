'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { m } from 'framer-motion';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Image } from '../../../components/image';
import { varAlpha, bgGradient } from '../../../theme/styles';
import { varFade, MotionContainer } from '../../../components/animate';
import { Carousel, useCarousel, CarouselArrowNumberButtons } from '../../../components/carousel';
import { IndexLabel } from './elements';
export function CarouselAnimation({ data }) {
    const carousel = useCarousel();
    return (_jsxs(Box, { sx: { position: 'relative' }, children: [_jsx(Carousel, { carousel: carousel, sx: { borderRadius: 2 }, children: data.map((item, index) => (_jsx(CarouselItem, { index: index, item: item, selected: index === carousel.dots.selectedIndex }, item.id))) }), _jsx(CarouselArrowNumberButtons, { ...carousel.arrows, options: carousel.options, totalSlides: carousel.dots.dotCount, selectedIndex: carousel.dots.selectedIndex + 1, sx: { top: 16, right: 16, position: 'absolute' } })] }));
}
function CarouselItem({ item, index, selected }) {
    const theme = useTheme();
    return (_jsxs(Box, { sx: { position: 'relative' }, children: [_jsx(IndexLabel, { index: index + 1 }), _jsx(Image, { visibleByDefault: true, alt: item.title, src: item.coverUrl, ratio: { xs: '4/3', sm: '16/10' } }), _jsx(Box, { sx: {
                    ...bgGradient({
                        color: `to top, ${theme.vars.palette.grey[900]}, ${varAlpha(theme.vars.palette.grey['900Channel'], 0)}`,
                    }),
                    top: 0,
                    width: 1,
                    height: 1,
                    position: 'absolute',
                } }), _jsxs(Box, { component: MotionContainer, animate: selected, action: true, sx: {
                    p: 3,
                    left: 0,
                    width: 1,
                    bottom: 0,
                    position: 'absolute',
                    color: 'common.white',
                }, children: [_jsx(m.div, { variants: varFade().inRight, children: _jsx(Typography, { noWrap: true, sx: {
                                mb: 1,
                                typography: { xs: 'subtitle1', md: 'h3' },
                            }, children: item.title }) }), _jsx(m.div, { variants: varFade().inRight, children: _jsx(Typography, { noWrap: true, variant: "body2", children: item.description }) }), _jsx(m.div, { variants: varFade().inRight, children: _jsx(Button, { color: "primary", variant: "contained", sx: { mt: 3, display: { xs: 'none', sm: 'inline-flex' } }, children: "View More" }) })] })] }));
}

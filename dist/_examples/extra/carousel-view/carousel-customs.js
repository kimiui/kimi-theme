import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import { Image } from '../../../components/image';
import { Carousel, useCarousel, CarouselDotButtons, CarouselArrowBasicButtons, CarouselArrowFloatButtons, CarouselArrowNumberButtons, } from '../../../components/carousel';
import { IndexLabel } from './elements';
export function CarouselCustoms({ data }) {
    const carousel = useCarousel({
        align: 'start',
        slideSpacing: '20px',
        slidesToShow: { xs: 1, sm: 2 },
    });
    return (_jsxs(_Fragment, { children: [_jsxs(Box, { sx: { position: 'relative' }, children: [_jsx(Carousel, { carousel: carousel, sx: { maxWidth: 640 }, children: data.map((item, index) => (_jsx(CarouselItem, { index: index, item: item }, item.id))) }), _jsx(CarouselArrowFloatButtons, { ...carousel.arrows, options: carousel.options, slotProps: {
                            prevBtn: {
                                sx: { bgcolor: 'primary.main', color: 'primary.contrastText' },
                                svgIcon: (_jsx("path", { fill: "currentColor", d: "M20 11.25a.75.75 0 0 1 0 1.5h-9.25V18a.75.75 0 0 1-1.28.53l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.28.53v5.25z" })),
                            },
                            nextBtn: {
                                sx: { bgcolor: 'primary.main', color: 'primary.contrastText' },
                                svgIcon: (_jsx("path", { fill: "currentColor", d: "M4 11.25a.75.75 0 0 0 0 1.5h9.25V18a.75.75 0 0 0 1.28.53l6-6a.75.75 0 0 0 0-1.06l-6-6a.75.75 0 0 0-1.28.53v5.25z" })),
                            },
                        } })] }), _jsxs(Box, { gap: 3, display: "flex", alignItems: "center", flexDirection: "column", sx: {
                    p: 5,
                    mt: 5,
                    borderRadius: 2,
                    bgcolor: 'background.neutral',
                }, children: [_jsx(CarouselArrowBasicButtons, { ...carousel.arrows, options: carousel.options, sx: { color: 'secondary.main' } }), _jsx(CarouselArrowNumberButtons, { ...carousel.arrows, options: carousel.options, totalSlides: carousel.dots.dotCount, selectedIndex: carousel.dots.selectedIndex + 1, slotProps: {
                            prevBtn: {
                                svgIcon: (_jsx("path", { fill: "currentColor", d: "M20 11.25a.75.75 0 0 1 0 1.5h-9.25V18a.75.75 0 0 1-1.28.53l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.28.53v5.25z" })),
                            },
                            nextBtn: {
                                svgIcon: (_jsx("path", { fill: "currentColor", d: "M4 11.25a.75.75 0 0 0 0 1.5h9.25V18a.75.75 0 0 0 1.28.53l6-6a.75.75 0 0 0 0-1.06l-6-6a.75.75 0 0 0-1.28.53v5.25z" })),
                            },
                        }, sx: { bgcolor: 'info.main', color: 'info.contrastText' } }), _jsx(CarouselDotButtons, { scrollSnaps: carousel.dots.scrollSnaps, selectedIndex: carousel.dots.selectedIndex, onClickDot: carousel.dots.onClickDot, fallbackCount: 5, sx: { color: 'primary.main' } }), _jsx(CarouselDotButtons, { variant: "rounded", scrollSnaps: carousel.dots.scrollSnaps, selectedIndex: carousel.dots.selectedIndex, onClickDot: carousel.dots.onClickDot, fallbackCount: 5, sx: { color: 'info.main' } }), _jsx(CarouselDotButtons, { variant: "number", scrollSnaps: carousel.dots.scrollSnaps, selectedIndex: carousel.dots.selectedIndex, onClickDot: carousel.dots.onClickDot, fallbackCount: 5, slotProps: {
                            dot: {
                                selected: {
                                    bgcolor: 'warning.main',
                                    color: 'warning.contrastText',
                                },
                            },
                        } })] })] }));
}
function CarouselItem({ item, index }) {
    return (_jsxs(Box, { sx: { borderRadius: 2, overflow: 'hidden', position: 'relative' }, children: [_jsx(IndexLabel, { index: index + 1 }), _jsx(Image, { visibleByDefault: true, alt: item.title, src: item.coverUrl, ratio: "4/3" })] }));
}

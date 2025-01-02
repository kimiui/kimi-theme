import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import { Image } from '../../../components/image';
import { Carousel, useCarousel, CarouselDotButtons, CarouselArrowBasicButtons, } from '../../../components/carousel';
import { IndexLabel } from './elements';
export function CarouselOpacity({ data }) {
    const carousel = useCarousel({
        loop: true,
        slidesToShow: '70%',
        slideSpacing: '20px',
    });
    return (_jsxs(_Fragment, { children: [_jsx(Carousel, { carousel: carousel, children: data.map((item, index) => (_jsx(CarouselItem, { index: index, item: item, selected: carousel.dots.selectedIndex === index }, item.id))) }), _jsxs(Box, { display: "flex", alignItems: "center", justifyContent: "space-between", sx: { mt: 3 }, children: [_jsx(CarouselArrowBasicButtons, { ...carousel.arrows, options: carousel.options }), _jsx(CarouselDotButtons, { scrollSnaps: carousel.dots.scrollSnaps, selectedIndex: carousel.dots.selectedIndex, onClickDot: carousel.dots.onClickDot })] })] }));
}
function CarouselItem({ item, index, selected }) {
    return (_jsxs(Box, { sx: {
            opacity: 0.24,
            borderRadius: 2,
            overflow: 'hidden',
            position: 'relative',
            transition: (theme) => theme.transitions.create(['opacity'], {
                easing: theme.transitions.easing.easeIn,
                duration: theme.transitions.duration.complex,
            }),
            ...(selected && { opacity: 1 }),
        }, children: [_jsx(IndexLabel, { index: index + 1 }), _jsx(Image, { visibleByDefault: true, alt: item.title, src: item.coverUrl, ratio: { xs: '4/3', sm: '16/10' } })] }));
}

import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import { Image } from '../../../components/image';
import { Carousel, useCarousel, CarouselDotButtons, CarouselArrowFloatButtons, } from '../../../components/carousel';
import { IndexLabel } from './elements';
export function CarouselParallax({ data }) {
    const carousel = useCarousel({
        dragFree: true,
        loop: true,
        parallax: true,
        slidesToShow: '70%',
        slideSpacing: '20px',
    });
    return (_jsxs(_Fragment, { children: [_jsxs(Box, { sx: { position: 'relative' }, children: [_jsx(Carousel, { carousel: carousel, slotProps: { slide: { borderRadius: 2 } }, children: data.map((item, index) => (_jsx(CarouselItem, { index: index, item: item }, item.id))) }), _jsx(CarouselArrowFloatButtons, { ...carousel.arrows, options: carousel.options })] }), _jsx(CarouselDotButtons, { scrollSnaps: carousel.dots.scrollSnaps, selectedIndex: carousel.dots.selectedIndex, onClickDot: carousel.dots.onClickDot, sx: { width: 1, justifyContent: 'center', mt: 3 } })] }));
}
function CarouselItem({ item, index }) {
    return (_jsxs(Box, { sx: { position: 'relative' }, children: [_jsx(IndexLabel, { index: index + 1 }), _jsx(Image, { visibleByDefault: true, alt: item.title, src: item.coverUrl, ratio: { xs: '4/3', sm: '16/10' } })] }));
}

import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import { Image } from '../../../components/image';
import { Carousel, useCarousel, CarouselDotButtons } from '../../../components/carousel';
import { IndexLabel } from './elements';
export function CarouselScale({ data }) {
    const carousel = useCarousel({
        loop: true,
        slidesToShow: '70%',
        slideSpacing: '20px',
    });
    return (_jsxs(_Fragment, { children: [_jsx(Carousel, { carousel: carousel, children: data.map((item, index) => (_jsx(CarouselItem, { index: index, item: item, selected: carousel.dots.selectedIndex === index }, item.id))) }), _jsx(CarouselDotButtons, { scrollSnaps: carousel.dots.scrollSnaps, selectedIndex: carousel.dots.selectedIndex, onClickDot: carousel.dots.onClickDot, sx: { width: 1, justifyContent: 'center', mt: 3 } })] }));
}
function CarouselItem({ item, index, selected }) {
    return (_jsxs(Box, { sx: {
            borderRadius: 2,
            overflow: 'hidden',
            position: 'relative',
            transform: 'scale(0.88)',
            transition: (theme) => theme.transitions.create(['transform'], {
                easing: theme.transitions.easing.easeIn,
                duration: theme.transitions.duration.complex,
            }),
            ...(selected && { transform: 'scale(1)' }),
        }, children: [_jsx(IndexLabel, { index: index + 1 }), _jsx(Image, { alt: item.title, src: item.coverUrl, ratio: { xs: '4/3', sm: '16/10' } })] }));
}

import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import { Image } from '../../../components/image';
import { Carousel, useCarousel, CarouselProgressBar, CarouselArrowBasicButtons, } from '../../../components/carousel';
import { IndexLabel } from './elements';
export function CarouselProgress({ data }) {
    const carousel = useCarousel({
        dragFree: true,
        slidesToShow: '70%',
        slideSpacing: '20px',
    });
    return (_jsxs(_Fragment, { children: [_jsx(Carousel, { carousel: carousel, children: data.map((item, index) => (_jsx(CarouselItem, { index: index, item: item }, item.id))) }), _jsxs(Box, { display: "flex", alignItems: "center", justifyContent: "space-between", sx: { mt: 3 }, children: [_jsx(CarouselArrowBasicButtons, { ...carousel.arrows, options: carousel.options }), _jsx(CarouselProgressBar, { ...carousel.progress })] })] }));
}
function CarouselItem({ item, index }) {
    return (_jsxs(Box, { sx: { borderRadius: 2, overflow: 'hidden', position: 'relative' }, children: [_jsx(IndexLabel, { index: index + 1 }), _jsx(Image, { visibleByDefault: true, alt: item.title, src: item.coverUrl, ratio: { xs: '4/3', sm: '16/10' } })] }));
}

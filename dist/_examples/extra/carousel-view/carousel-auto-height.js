import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import AutoHeight from 'embla-carousel-auto-height';
import { Image } from '../../../components/image';
import { Carousel, useCarousel, CarouselArrowBasicButtons } from '../../../components/carousel';
import { IndexLabel } from './elements';
export function CarouselAutoHeight({ data }) {
    const carousel = useCarousel({}, [AutoHeight()]);
    return (_jsxs(_Fragment, { children: [_jsx(CarouselArrowBasicButtons, { ...carousel.arrows, options: carousel.options, sx: { top: 20, right: 16, position: 'absolute' } }), _jsx(Carousel, { carousel: carousel, sx: { borderRadius: 2 }, children: data.map((item, index) => (_jsx(CarouselItem, { item: item, index: index }, item.id))) })] }));
}
function CarouselItem({ item, index }) {
    return (_jsxs(Box, { sx: { position: 'relative', overflow: 'hidden', borderRadius: 2 }, children: [_jsx(IndexLabel, { index: index + 1 }), _jsx(Image, { alt: item.title, src: item.coverUrl, sx: {
                    width: 1,
                    ...(index === 0 && { height: 200 }),
                    ...(index === 1 && { height: 240 }),
                    ...(index === 2 && { height: 160 }),
                    ...(index === 3 && { height: 320 }),
                } })] }));
}

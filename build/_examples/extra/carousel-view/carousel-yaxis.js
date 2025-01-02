import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import { Image } from '../../../components/image';
import { Carousel, useCarousel, CarouselDotButtons, CarouselArrowBasicButtons, } from '../../../components/carousel';
import { IndexLabel } from './elements';
export function CarouselYaxis({ data }) {
    const carousel = useCarousel({ axis: 'y' });
    return (_jsxs(Box, { sx: { position: 'relative' }, children: [_jsx(Carousel, { carousel: carousel, sx: {
                    borderRadius: 2,
                    overflow: 'hidden',
                    height: { xs: 240, sm: 320, md: 480 },
                }, children: data.map((item, index) => (_jsx(CarouselItem, { index: index, item: item }, item.id))) }), _jsx(CarouselDotButtons, { scrollSnaps: carousel.dots.scrollSnaps, selectedIndex: carousel.dots.selectedIndex, onClickDot: carousel.dots.onClickDot, sx: {
                    top: 16,
                    right: 16,
                    position: 'absolute',
                    color: 'warning.main',
                } }), _jsx(CarouselArrowBasicButtons, { ...carousel.arrows, options: carousel.options, slotProps: {
                    prevBtn: { sx: { p: 0.75 } },
                    nextBtn: { sx: { p: 0.75 } },
                }, sx: {
                    p: 0.5,
                    gap: 0.5,
                    right: 16,
                    bottom: 16,
                    borderRadius: 1,
                    position: 'absolute',
                    bgcolor: 'common.white',
                } })] }));
}
function CarouselItem({ item, index }) {
    return (_jsxs(Box, { sx: { position: 'relative', height: 1 }, children: [_jsx(IndexLabel, { index: index + 1 }), _jsx(Image, { visibleByDefault: true, alt: item.title, src: item.coverUrl, sx: { width: 1, height: 1 } })] }));
}

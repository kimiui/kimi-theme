import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import { Image } from '../../../components/image';
import { Carousel, useCarousel, CarouselThumb, CarouselThumbs, CarouselArrowNumberButtons, } from '../../../components/carousel';
import { IndexLabel } from './elements';
export function CarouselThumbsX({ data }) {
    const carousel = useCarousel({
        thumbs: {
            slidesToShow: 'auto',
        },
    });
    return (_jsxs("div", { children: [_jsxs(Box, { sx: { mb: 2.5, position: 'relative' }, children: [_jsx(Carousel, { carousel: carousel, sx: { borderRadius: 2 }, children: data.map((item, index) => (_jsxs(Box, { sx: { position: 'relative' }, children: [_jsx(IndexLabel, { index: index + 1 }), _jsx(Image, { visibleByDefault: true, alt: item.title, src: item.coverUrl, ratio: { xs: '4/3', sm: '16/10' } })] }, item.id))) }), _jsx(CarouselArrowNumberButtons, { ...carousel.arrows, options: carousel.options, totalSlides: carousel.dots.dotCount, selectedIndex: carousel.dots.selectedIndex + 1, sx: { right: 16, bottom: 16, position: 'absolute' } })] }), _jsx(CarouselThumbs, { ref: carousel.thumbs.thumbsRef, options: carousel.options?.thumbs, sx: {
                    width: { xs: 1, sm: 360 },
                }, children: data.map((item, index) => (_jsx(CarouselThumb, { index: index, src: item.coverUrl, selected: index === carousel.thumbs.selectedIndex, onClick: () => carousel.thumbs.onClickThumb(index), sx: {
                        width: { xs: 48, sm: 64 },
                        height: { xs: 48, sm: 64 },
                    } }, item.id))) })] }));
}

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import { Image } from '../../../components/image';
import { Carousel, useCarousel, CarouselThumb, CarouselThumbs, CarouselArrowNumberButtons, } from '../../../components/carousel';
import { IndexLabel } from './elements';
export function CarouselThumbsY({ data }) {
    const carousel = useCarousel({
        thumbs: {
            axis: 'y',
            slideSpacing: '8px',
            slidesToShow: 'auto',
        },
    });
    return (_jsxs(Box, { sx: { position: 'relative' }, children: [_jsx(Carousel, { carousel: carousel, sx: { borderRadius: 2 }, children: data.map((item, index) => (_jsxs(Box, { sx: { position: 'relative' }, children: [_jsx(IndexLabel, { index: index + 1 }), _jsx(Image, { visibleByDefault: true, alt: item.title, src: item.coverUrl, ratio: { xs: '3/4', sm: '16/10' } })] }, item.id))) }), _jsx(CarouselArrowNumberButtons, { ...carousel.arrows, options: carousel.options, totalSlides: carousel.dots.dotCount, selectedIndex: carousel.dots.selectedIndex + 1, sx: { left: 16, bottom: 16, position: 'absolute' } }), _jsx(Box, { sx: {
                    p: 0.5,
                    right: 8,
                    top: '50%',
                    borderRadius: 1.25,
                    position: 'absolute',
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%)',
                }, children: _jsx(CarouselThumbs, { ref: carousel.thumbs.thumbsRef, options: carousel.options?.thumbs, sx: { height: { xs: 200, md: 280 } }, children: data.map((item, index) => (_jsx(CarouselThumb, { index: index, src: item.coverUrl, selected: index === carousel.thumbs.selectedIndex, onClick: () => carousel.thumbs.onClickThumb(index), sx: { width: 48, height: 48 } }, item.id))) }) })] }));
}

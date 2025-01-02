import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Autoplay from 'embla-carousel-autoplay';
import { Image } from '../../../components/image';
import { Carousel, useCarousel, CarouselDotButtons } from '../../../components/carousel';
import { IndexLabel, PlayButton } from './elements';
export function CarouselAutoplay({ data }) {
    const carousel = useCarousel({ loop: true }, [Autoplay({ playOnInit: false, delay: 2000 })]);
    return (_jsxs(_Fragment, { children: [_jsx(PlayButton, { isPlaying: carousel.autoplay.isPlaying, onClick: carousel.autoplay.onTogglePlay }), _jsxs(Box, { sx: { position: 'relative' }, children: [_jsx(Carousel, { carousel: carousel, sx: { borderRadius: 2 }, children: data.map((item, index) => (_jsx(CarouselItem, { index: index, item: item }, item.id))) }), _jsx(CarouselDotButtons, { scrollSnaps: carousel.dots.scrollSnaps, selectedIndex: carousel.dots.selectedIndex, onClickDot: carousel.dots.onClickDot, sx: { top: 16, right: 16, position: 'absolute', color: 'common.white' } })] })] }));
}
function CarouselItem({ item, index }) {
    return (_jsxs(Box, { sx: { position: 'relative' }, children: [_jsx(IndexLabel, { index: index + 1 }), _jsx(Image, { visibleByDefault: true, alt: item.title, src: item.coverUrl, ratio: { xs: '4/3', sm: '16/10' } })] }));
}

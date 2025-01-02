import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import AutoScroll from 'embla-carousel-auto-scroll';
import { Image } from '../../../components/image';
import { Carousel, useCarousel, CarouselProgressBar } from '../../../components/carousel';
import { IndexLabel, PlayButton } from './elements';
export function CarouselAutoScroll({ data }) {
    const carousel = useCarousel({
        loop: true,
    }, [AutoScroll({ playOnInit: false })]);
    return (_jsxs(_Fragment, { children: [_jsx(PlayButton, { isPlaying: carousel.autoScroll.isPlaying, onClick: carousel.autoScroll.onTogglePlay }), _jsxs(Box, { sx: { position: 'relative' }, children: [_jsx(Carousel, { carousel: carousel, sx: { borderRadius: 2 }, children: data.map((item, index) => (_jsx(CarouselItem, { index: index, item: item }, item.id))) }), _jsx(CarouselProgressBar, { ...carousel.progress, sx: {
                            top: 20,
                            right: 20,
                            color: 'info.light',
                            position: 'absolute',
                        } })] })] }));
}
function CarouselItem({ item, index }) {
    return (_jsxs(Box, { sx: { position: 'relative' }, children: [_jsx(IndexLabel, { index: index + 1 }), _jsx(Image, { visibleByDefault: true, alt: item.title, src: item.coverUrl, ratio: { xs: '4/3', sm: '16/10' } })] }));
}

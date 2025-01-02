import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import { RouterLink } from 'routes-react';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { maxLine } from '../../../theme/styles';
import { Image } from '../../../components/image';
import { Carousel, useCarousel, CarouselDotButtons, CarouselArrowBasicButtons, } from '../../carousel';
// ----------------------------------------------------------------------
export function MenuCarousel({ slides, displayCount = 8, sx }) {
    const carousel = useCarousel({
        slidesToShow: displayCount,
        slidesToScroll: displayCount,
    });
    return (_jsxs(Stack, { sx: { position: 'relative', pt: 2, ...sx }, children: [_jsx(Carousel, { carousel: carousel, children: slides.map((item) => (_jsx(CarouselItem, { item: item }, item.name))) }), _jsxs(Stack, { direction: "row", alignItems: "center", justifyContent: "space-between", sx: { mt: 2 }, children: [_jsx(CarouselArrowBasicButtons, { ...carousel.arrows, options: carousel.options }), _jsx(CarouselDotButtons, { scrollSnaps: carousel.dots.scrollSnaps, selectedIndex: carousel.dots.selectedIndex, onClickDot: carousel.dots.onClickDot, sx: { color: 'primary.main' } })] })] }));
}
function CarouselItem({ item }) {
    const theme = useTheme();
    return (_jsxs(Link, { component: RouterLink, href: item.path, color: "inherit", underline: "none", sx: {
            px: 1,
            display: 'block',
            transition: theme.transitions.create('color'),
            '&:hover': { color: 'primary.main' },
        }, children: [_jsx(Image, { alt: item.coverUrl, src: item.coverUrl, ratio: "1/1", sx: { borderRadius: 1, mb: 1 } }), _jsx(Typography, { variant: "caption", sx: {
                    ...maxLine({ line: 2, persistent: theme.typography.caption }),
                    fontWeight: 'fontWeightSemiBold',
                }, children: item.name })] }));
}

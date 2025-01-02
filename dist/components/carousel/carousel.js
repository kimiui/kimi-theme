'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Children, isValidElement } from 'react';
import { carouselClasses } from './classes';
import { CarouselSlide } from './components/carousel-slide';
export const StyledRoot = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'axis',
})({
    margin: 'auto',
    maxWidth: '100%',
    overflow: 'hidden',
    position: 'relative',
    variants: [
        {
            props: {
                axis: 'y',
            },
            style: {
                height: '100%',
            },
        },
    ],
});
export const StyledContainer = styled('ul', {
    shouldForwardProp: (prop) => prop !== 'axis' && prop !== 'slideSpacing',
})(({ slideSpacing }) => ({
    display: 'flex',
    backfaceVisibility: 'hidden',
    variants: [
        {
            props: {
                axis: 'x',
            },
            style: {
                touchAction: 'pan-y pinch-zoom',
                marginLeft: `calc(${slideSpacing} * -1)`,
            },
        },
        {
            props: {
                axis: 'y',
            },
            style: {
                height: '100%',
                flexDirection: 'column',
                touchAction: 'pan-x pinch-zoom',
                marginTop: `calc(${slideSpacing} * -1)`,
            },
        },
    ],
}));
// ----------------------------------------------------------------------
export function Carousel({ carousel, children, sx, slotProps }) {
    const { mainRef, options } = carousel;
    const axis = options?.axis ?? 'x';
    const slideSpacing = options?.slideSpacing ?? '0px';
    const direction = options?.direction ?? 'ltr';
    const renderChildren = Children.map(children, (child) => {
        if (isValidElement(child)) {
            const reactChild = child;
            return (_jsx(CarouselSlide, { options: carousel.options, sx: slotProps?.slide, children: child }, reactChild.key));
        }
        return null;
    });
    return (_jsx(StyledRoot, { sx: sx, axis: axis, ref: mainRef, dir: direction, className: carouselClasses.root, children: _jsx(StyledContainer, { axis: axis, slideSpacing: slideSpacing, className: carouselClasses.container, sx: {
                ...(carousel.pluginNames?.includes('autoHeight') && {
                    alignItems: 'flex-start',
                    transition: (theme) => theme.transitions.create(['height'], {
                        easing: theme.transitions.easing.easeInOut,
                        duration: theme.transitions.duration.shorter,
                    }),
                }),
                ...slotProps?.container,
            }, children: renderChildren }) }));
}

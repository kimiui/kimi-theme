import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import ButtonBase, { buttonBaseClasses } from '@mui/material/ButtonBase';
import { varAlpha, stylesMode } from '../../../theme/styles';
import { carouselClasses } from '../classes';
// ----------------------------------------------------------------------
export function CarouselArrowBasicButtons({ options, slotProps, totalSlides, selectedIndex, 
//
onClickPrev, onClickNext, disablePrev, disableNext, sx, ...other }) {
    return (_jsxs(Stack, { direction: "row", alignItems: "center", display: "inline-flex", className: carouselClasses.arrows, sx: {
            gap: 0.5,
            zIndex: 9,
            color: 'action.active',
            ...sx,
        }, ...other, children: [_jsx(ArrowButton, { variant: "prev", options: options, disabled: disablePrev, onClick: onClickPrev, svgIcon: slotProps?.prevBtn?.svgIcon, svgSize: slotProps?.prevBtn?.svgSize, sx: slotProps?.prevBtn?.sx }), _jsx(ArrowButton, { variant: "next", options: options, disabled: disableNext, onClick: onClickNext, svgIcon: slotProps?.nextBtn?.svgIcon, svgSize: slotProps?.prevBtn?.svgSize, sx: slotProps?.prevBtn?.sx })] }));
}
// ----------------------------------------------------------------------
export function CarouselArrowNumberButtons({ options, slotProps, totalSlides, selectedIndex, 
//
onClickPrev, onClickNext, disablePrev, disableNext, sx, ...other }) {
    return (_jsxs(Stack, { direction: "row", alignItems: "center", display: "inline-flex", className: carouselClasses.arrows, sx: {
            p: 0.5,
            gap: 0.25,
            zIndex: 9,
            borderRadius: 1.25,
            color: 'common.white',
            bgcolor: (theme) => varAlpha(theme.vars.palette.grey['900Channel'], 0.48),
            ...sx,
        }, ...other, children: [_jsx(ArrowButton, { variant: "prev", options: options, disabled: disablePrev, onClick: onClickPrev, sx: { p: 0.75, borderRadius: 'inherit', ...slotProps?.prevBtn?.sx }, svgIcon: slotProps?.prevBtn?.svgIcon, svgSize: slotProps?.prevBtn?.svgSize ?? 16 }), _jsxs(Box, { component: "span", className: carouselClasses.arrowsLabel, sx: { mx: 0.5, typography: 'subtitle2' }, children: [selectedIndex, "/", totalSlides] }), _jsx(ArrowButton, { variant: "next", options: options, disabled: disableNext, onClick: onClickNext, sx: { p: 0.75, borderRadius: 'inherit', ...slotProps?.nextBtn?.sx }, svgIcon: slotProps?.nextBtn?.svgIcon, svgSize: slotProps?.prevBtn?.svgSize ?? 16 })] }));
}
// ----------------------------------------------------------------------
export function CarouselArrowFloatButtons({ options, slotProps, onClickPrev, onClickNext, disablePrev, disableNext, }) {
    const baseStyles = {
        zIndex: 9,
        top: '50%',
        borderRadius: 1.5,
        position: 'absolute',
        color: 'common.white',
        bgcolor: 'text.primary',
        transform: 'translateY(-50%)',
        '&:hover': { opacity: 0.8 },
        [stylesMode.dark]: { color: 'grey.800' },
    };
    return (_jsxs(_Fragment, { children: [_jsx(ArrowButton, { variant: "prev", options: options, disabled: disablePrev, onClick: onClickPrev, svgIcon: slotProps?.prevBtn?.svgIcon, svgSize: slotProps?.prevBtn?.svgSize, sx: { left: -16, ...baseStyles, ...slotProps?.prevBtn?.sx } }), _jsx(ArrowButton, { variant: "next", options: options, disabled: disableNext, onClick: onClickNext, svgIcon: slotProps?.nextBtn?.svgIcon, svgSize: slotProps?.nextBtn?.svgSize, sx: { right: -16, ...baseStyles, ...slotProps?.nextBtn?.sx } })] }));
}
// ----------------------------------------------------------------------
export function ArrowButton({ sx, svgIcon, svgSize, options, variant, ...other }) {
    const arrowPrev = variant === 'prev';
    const arrowNext = variant === 'next';
    const prevSvg = svgIcon || (_jsx("path", { fill: "currentColor", fillRule: "evenodd", d: "M15.488 4.43a.75.75 0 0 1 .081 1.058L9.988 12l5.581 6.512a.75.75 0 1 1-1.138.976l-6-7a.75.75 0 0 1 0-.976l6-7a.75.75 0 0 1 1.057-.081", clipRule: "evenodd" }));
    const nextSvg = svgIcon || (_jsx("path", { fill: "currentColor", fillRule: "evenodd", d: "M8.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L14.012 12L8.431 5.488a.75.75 0 0 1 .08-1.057", clipRule: "evenodd" }));
    return (_jsx(ButtonBase, { className: arrowPrev ? carouselClasses.arrowPrev : carouselClasses.arrowPrev, "aria-label": arrowPrev ? 'Prev button' : 'Next button', sx: {
            p: 1,
            borderRadius: '50%',
            boxSizing: 'content-box',
            transition: (theme) => theme.transitions.create(['all'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.short,
            }),
            [`&.${buttonBaseClasses.disabled}`]: {
                opacity: 0.4,
            },
            ...sx,
            ...(options?.direction === 'rtl' && {
                ...(arrowPrev && { right: -16, left: 'auto' }),
                ...(arrowNext && { left: -16, right: 'auto' }),
            }),
        }, ...other, children: _jsx(SvgIcon, { className: carouselClasses.arrowSvg, sx: {
                width: svgSize ?? 20,
                height: svgSize ?? 20,
                ...(options?.axis === 'y' && { transform: ' rotate(90deg)' }),
                ...(options?.direction === 'rtl' && { transform: ' scaleX(-1)' }),
            }, children: arrowPrev ? prevSvg : nextSvg }) }));
}

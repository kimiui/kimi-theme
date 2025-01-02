'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { varAlpha } from '../../../theme/styles';
import { carouselClasses } from '../classes';
// ----------------------------------------------------------------------
const StyledRoot = styled(Box)(({ theme }) => ({
    height: 6,
    maxWidth: 120,
    width: '100%',
    borderRadius: 6,
    overflow: 'hidden',
    position: 'relative',
    color: theme.vars.palette.text.primary,
    backgroundColor: varAlpha(theme.vars.palette.grey['500Channel'], 0.2),
}));
const StyledProgress = styled('div')({
    top: 0,
    bottom: 0,
    width: '100%',
    left: '-100%',
    position: 'absolute',
    backgroundColor: 'currentColor',
});
// ----------------------------------------------------------------------
export function CarouselProgressBar({ value, sx, ...other }) {
    return (_jsx(StyledRoot, { sx: sx, className: carouselClasses.progress, ...other, children: _jsx(StyledProgress, { className: carouselClasses.progressBar, sx: {
                transform: `translate3d(${value}%, 0px, 0px)`,
            } }) }));
}

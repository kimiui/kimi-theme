import { jsx as _jsx } from "react/jsx-runtime";
import { styled } from '@mui/material/styles';
import { carouselClasses } from '../classes';
const StyledRoot = styled('li', {
    shouldForwardProp: (prop) => prop !== 'axis' && prop !== 'slideSpacing',
})(({ slideSpacing }) => ({
    display: 'block',
    position: 'relative',
    variants: [
        {
            props: {
                axis: 'x',
            },
            style: {
                minWidth: 0,
                paddingLeft: slideSpacing,
            },
        },
        {
            props: {
                axis: 'y',
            },
            style: {
                minHeight: 0,
                paddingTop: slideSpacing,
            },
        },
    ],
}));
const StyledContent = styled('div')({
    overflow: 'hidden',
    position: 'relative',
    borderRadius: 'inherit',
});
// ----------------------------------------------------------------------
export function CarouselSlide({ sx, options, children }) {
    const slideSize = getSize(options?.slidesToShow);
    return (_jsx(StyledRoot, { axis: options?.axis ?? 'x', slideSpacing: options?.slideSpacing, className: carouselClasses.slide, sx: {
            flex: slideSize,
            ...sx,
        }, children: options?.parallax ? (_jsx(StyledContent, { className: carouselClasses.slideContent, children: _jsx("div", { className: "slide__parallax__layer", children: children }) })) : (children) }));
}
function getSize(slidesToShow) {
    if (slidesToShow && typeof slidesToShow === 'object') {
        return Object.keys(slidesToShow).reduce((acc, key) => {
            const sizeByKey = slidesToShow[key];
            acc[key] = getValue(sizeByKey);
            return acc;
        }, {});
    }
    return getValue(slidesToShow);
}
function getValue(value = 1) {
    if (typeof value === 'string') {
        const isSupported = value === 'auto' || value.endsWith('%') || value.endsWith('px');
        if (!isSupported) {
            throw new Error(`Only accepts values: auto, px, %, or number.`);
        }
        // value is either 'auto', ends with '%', or ends with 'px'
        return `0 0 ${value}`;
    }
    if (typeof value === 'number') {
        return `0 0 ${100 / value}%`;
    }
    // Default case should not be reached due to the type signature, but we include it for safety
    throw new Error(`Invalid value type. Only accepts values: auto, px, %, or number.`);
}

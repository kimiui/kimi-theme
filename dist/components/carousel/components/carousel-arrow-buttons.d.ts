import type { StackProps } from '@mui/material/Stack';
import type { ButtonBaseProps } from '@mui/material/ButtonBase';
import type { CarouselArrowButtonProps, CarouselArrowButtonsProps } from '../types';
export declare function CarouselArrowBasicButtons({ options, slotProps, totalSlides, selectedIndex, onClickPrev, onClickNext, disablePrev, disableNext, sx, ...other }: StackProps & CarouselArrowButtonsProps): import("react/jsx-runtime").JSX.Element;
export declare function CarouselArrowNumberButtons({ options, slotProps, totalSlides, selectedIndex, onClickPrev, onClickNext, disablePrev, disableNext, sx, ...other }: StackProps & CarouselArrowButtonsProps): import("react/jsx-runtime").JSX.Element;
export declare function CarouselArrowFloatButtons({ options, slotProps, onClickPrev, onClickNext, disablePrev, disableNext, }: StackProps & CarouselArrowButtonsProps): import("react/jsx-runtime").JSX.Element;
export declare function ArrowButton({ sx, svgIcon, svgSize, options, variant, ...other }: ButtonBaseProps & CarouselArrowButtonProps): import("react/jsx-runtime").JSX.Element;

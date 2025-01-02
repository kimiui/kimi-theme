import type { Theme } from '@mui/material/styles';
import type { ButtonBaseProps } from '@mui/material/ButtonBase';
import type { CarouselThumbProps, CarouselThumbsProps } from '../types';
export declare const CarouselThumbs: import("react").ForwardRefExoticComponent<Omit<import("@mui/system").BoxOwnProps<Theme> & import("@mui/material/OverridableComponent").CommonProps & Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof import("@mui/material/OverridableComponent").CommonProps | keyof import("@mui/system").BoxOwnProps<Theme>> & {
    component?: React.ElementType;
} & CarouselThumbsProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export declare function CarouselThumb({ sx, src, index, selected, ...other }: ButtonBaseProps & CarouselThumbProps): import("react/jsx-runtime").JSX.Element;

import type { UseInViewOptions } from 'framer-motion';
import type { Breakpoint } from '@mui/material/styles';
import { ImageImg, ImageRoot, ImageOverlay, ImagePlaceholder } from './styles';
import type { EffectsType } from './styles';
type AspectRatioType = '2/3' | '3/2' | '4/3' | '3/4' | '6/4' | '4/6' | '16/9' | '9/16' | '21/9' | '9/21' | '1/1';
export type ImageProps = React.ComponentProps<typeof ImageRoot> & {
    src?: string;
    alt?: string;
    delayTime?: number;
    onLoad?: () => void;
    effect?: EffectsType;
    visibleByDefault?: boolean;
    disablePlaceholder?: boolean;
    viewportOptions?: UseInViewOptions;
    ratio?: AspectRatioType | Partial<Record<Breakpoint, AspectRatioType>>;
    slotProps?: {
        img?: Omit<React.ComponentProps<typeof ImageImg>, 'src' | 'alt'>;
        overlay?: React.ComponentProps<typeof ImageOverlay>;
        placeholder?: React.ComponentProps<typeof ImagePlaceholder>;
    };
};
export declare const Image: import("react").ForwardRefExoticComponent<any>;
export {};

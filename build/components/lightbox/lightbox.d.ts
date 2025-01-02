import Captions from 'yet-another-react-lightbox/plugins/captions';
import type { LightBoxProps } from './types';
export declare function Lightbox({ slides, disableZoom, disableVideo, disableTotal, disableCaptions, disableSlideshow, disableThumbnails, disableFullscreen, onGetCurrentIndex, ...other }: LightBoxProps): import("react/jsx-runtime").JSX.Element;
export declare function getPlugins({ disableZoom, disableVideo, disableCaptions, disableSlideshow, disableThumbnails, disableFullscreen, }: Partial<LightBoxProps>): (typeof Captions)[];
type DisplayTotalProps = {
    totalItems: number;
    disableTotal?: boolean;
};
export declare function DisplayTotal({ totalItems, disableTotal }: DisplayTotalProps): import("react/jsx-runtime").JSX.Element;
export {};

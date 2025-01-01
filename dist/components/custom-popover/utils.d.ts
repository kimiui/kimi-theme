import type { CSSObject } from '@mui/material/styles';
import type { PopoverOrigin } from '@mui/material/Popover';
import type { PopoverArrow } from './types';
export type CalculateAnchorOriginProps = {
    paperStyles?: CSSObject;
    anchorOrigin: PopoverOrigin;
    transformOrigin: PopoverOrigin;
};
export declare function calculateAnchorOrigin(arrow: PopoverArrow['placement']): CalculateAnchorOriginProps;

import type { Transition } from 'framer-motion';
import type { BoxProps } from '@mui/material/Box';
import type { AvatarProps } from '@mui/material/Avatar';
export type AnimateAvatarProps = BoxProps & {
    slotProps?: {
        avatar?: AvatarProps;
        animate?: {
            transition?: Transition;
        };
        overlay?: {
            color?: string;
            border?: number;
            spacing?: number;
        };
    };
};
export declare function AnimateAvatar({ sx, slotProps, children, width, ...other }: AnimateAvatarProps): import("react/jsx-runtime").JSX.Element;

import type { IconButtonProps } from '@mui/material/IconButton';
export type NavToggleButtonProps = IconButtonProps & {
    isNavMini: boolean;
};
export declare function NavToggleButton({ isNavMini, sx, ...other }: NavToggleButtonProps): import("react/jsx-runtime").JSX.Element;

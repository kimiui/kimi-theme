import type { IconButtonProps } from '@mui/material/IconButton';
export type AccountButtonProps = IconButtonProps & {
    open: boolean;
    photoURL: string;
    displayName: string;
};
export declare function AccountButton({ open, photoURL, displayName, sx, ...other }: AccountButtonProps): import("react/jsx-runtime").JSX.Element;

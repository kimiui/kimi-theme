import type { IconButtonProps } from '@mui/material/IconButton';
export type AccountPopoverProps = IconButtonProps & {
    data?: {
        label: string;
        href: string;
        icon?: React.ReactNode;
        info?: React.ReactNode;
    }[];
    onSignOut?: VoidFunction;
};
export declare function AccountPopover({ data, onSignOut, sx, ...other }: AccountPopoverProps): import("react/jsx-runtime").JSX.Element;

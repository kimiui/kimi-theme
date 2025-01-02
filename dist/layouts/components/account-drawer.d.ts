import type { IconButtonProps } from '@mui/material/IconButton';
export type AccountDrawerProps = IconButtonProps & {
    data?: {
        label: string;
        href: string;
        icon?: React.ReactNode;
        info?: React.ReactNode;
    }[];
};
export declare function AccountDrawer({ data, sx, ...other }: AccountDrawerProps): import("react/jsx-runtime").JSX.Element;

import type { StackProps } from '@mui/material/Stack';
import type { Theme, SxProps } from '@mui/material/styles';
export type EmptyContentProps = StackProps & {
    title?: string;
    imgUrl?: string;
    filled?: boolean;
    description?: string;
    action?: React.ReactNode;
    slotProps?: {
        img?: SxProps<Theme>;
        title?: SxProps<Theme>;
        description?: SxProps<Theme>;
    };
};
export declare function EmptyContent({ sx, imgUrl, action, filled, slotProps, description, title, ...other }: EmptyContentProps): import("react/jsx-runtime").JSX.Element;

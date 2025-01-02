import type { ButtonBaseProps } from '@mui/material/ButtonBase';
export type WorkspacesPopoverProps = ButtonBaseProps & {
    data?: {
        id: string;
        name: string;
        logo: string;
        plan: string;
    }[];
};
export declare function WorkspacesPopover({ data, sx, ...other }: WorkspacesPopoverProps): import("react/jsx-runtime").JSX.Element;

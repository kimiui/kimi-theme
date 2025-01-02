import type { IconButtonProps } from '@mui/material/IconButton';
export type ContactsPopoverProps = IconButtonProps & {
    data?: {
        id: string;
        role: string;
        name: string;
        email: string;
        status: string;
        address: string;
        avatarUrl: string;
        phoneNumber: string;
        lastActivity: string;
    }[];
};
export declare function ContactsPopover({ data, sx, ...other }: ContactsPopoverProps): import("react/jsx-runtime").JSX.Element;

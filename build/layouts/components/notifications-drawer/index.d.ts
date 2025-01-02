import type { IconButtonProps } from '@mui/material/IconButton';
import type { NotificationItemProps } from './notification-item';
export type NotificationsDrawerProps = IconButtonProps & {
    data?: NotificationItemProps[];
};
export declare function NotificationsDrawer({ data, sx, ...other }: NotificationsDrawerProps): import("react/jsx-runtime").JSX.Element;

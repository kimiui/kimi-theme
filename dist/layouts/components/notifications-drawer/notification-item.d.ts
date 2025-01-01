export type NotificationItemProps = {
    id: string;
    type: string;
    title: string;
    category: string;
    isUnRead: boolean;
    avatarUrl: string | null;
    createdAt: string | number | null;
};
export declare function NotificationItem({ notification, }: Readonly<{
    notification: NotificationItemProps;
}>): import("react/jsx-runtime").JSX.Element;

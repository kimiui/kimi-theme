import type { NavSectionProps } from 'lib/components/nav-section';
import type { HeaderSectionProps } from './header-section';
import type { AccountDrawerProps } from '../components/account-drawer';
import type { ContactsPopoverProps } from '../components/contacts-popover';
import type { LanguagePopoverProps } from '../components/language-popover';
import type { WorkspacesPopoverProps } from '../components/workspaces-popover';
import type { NotificationsDrawerProps } from '../components/notifications-drawer';
export type HeaderBaseProps = HeaderSectionProps & {
    onOpenNav: () => void;
    data?: {
        nav?: NavSectionProps['data'];
        account?: AccountDrawerProps['data'];
        langs?: LanguagePopoverProps['data'];
        contacts?: ContactsPopoverProps['data'];
        workspaces?: WorkspacesPopoverProps['data'];
        notifications?: NotificationsDrawerProps['data'];
    };
    slots?: {
        navMobile?: {
            topArea?: React.ReactNode;
            bottomArea?: React.ReactNode;
        };
    };
    slotsDisplay?: {
        signIn?: boolean;
        account?: boolean;
        helpLink?: boolean;
        settings?: boolean;
        purchase?: boolean;
        contacts?: boolean;
        searchbar?: boolean;
        workspaces?: boolean;
        menuButton?: boolean;
        localization?: boolean;
        notifications?: boolean;
        themeMode?: boolean;
    };
};
export declare function HeaderBase({ sx, data, slots, slotProps, onOpenNav, layoutQuery, slotsDisplay: { themeMode, signIn, account, settings, contacts, searchbar, workspaces, menuButton, localization, notifications, }, ...other }: HeaderBaseProps): import("react/jsx-runtime").JSX.Element;

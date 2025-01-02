'use client';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import { styled, useTheme } from '@mui/material/styles';
import { ThemeModeToggle } from '../../components/theme-mode-toggle';
import { HeaderSection } from './header-section';
import { Searchbar } from '../components/searchbar';
import { MenuButton } from '../components/menu-button';
import { SignInButton } from '../components/sign-in-button';
import { AccountDrawer } from '../components/account-drawer';
import { SettingsButton } from '../components/settings-button';
import { LanguagePopover } from '../components/language-popover';
import { ContactsPopover } from '../components/contacts-popover';
import { WorkspacesPopover } from '../components/workspaces-popover';
import { NotificationsDrawer } from '../components/notifications-drawer';
// ----------------------------------------------------------------------
const StyledDivider = styled('span')(({ theme }) => ({
    width: 1,
    height: 10,
    flexShrink: 0,
    display: 'none',
    position: 'relative',
    alignItems: 'center',
    flexDirection: 'column',
    marginLeft: theme.spacing(2.5),
    marginRight: theme.spacing(2.5),
    backgroundColor: 'currentColor',
    color: theme.vars.palette.divider,
    '&::before, &::after': {
        top: -5,
        width: 3,
        height: 3,
        content: '""',
        flexShrink: 0,
        borderRadius: '50%',
        position: 'absolute',
        backgroundColor: 'currentColor',
    },
    '&::after': { bottom: -5, top: 'auto' },
}));
export function HeaderBase({ sx, data, slots, slotProps, onOpenNav, layoutQuery, slotsDisplay: { themeMode = true, signIn = true, account = true, settings = true, contacts = true, searchbar = true, workspaces = true, menuButton = true, localization = true, notifications = true, } = {}, ...other }) {
    const theme = useTheme();
    return (_jsx(HeaderSection, { sx: sx, layoutQuery: layoutQuery, slots: {
            ...slots,
            leftAreaStart: slots?.leftAreaStart,
            leftArea: (_jsxs(_Fragment, { children: [slots?.leftAreaStart, menuButton && (_jsx(MenuButton, { "data-slot": "menu-button", onClick: onOpenNav, sx: {
                            mr: 1,
                            ml: -1,
                            [theme.breakpoints.up(layoutQuery)]: { display: 'none' },
                        } })), _jsx(StyledDivider, { "data-slot": "divider" }), workspaces && _jsx(WorkspacesPopover, { "data-slot": "workspaces", data: data?.workspaces }), slots?.leftAreaEnd] })),
            rightArea: (_jsxs(_Fragment, { children: [slots?.rightAreaStart, _jsxs(Box, { "data-area": "right", sx: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: { xs: 1, sm: 1.5 },
                        }, children: [searchbar && _jsx(Searchbar, { "data-slot": "searchbar", data: data?.nav }), themeMode && _jsx(ThemeModeToggle, {}), localization && _jsx(LanguagePopover, { "data-slot": "localization", data: data?.langs }), notifications && (_jsx(NotificationsDrawer, { "data-slot": "notifications", data: data?.notifications })), contacts && _jsx(ContactsPopover, { "data-slot": "contacts", data: data?.contacts }), settings && _jsx(SettingsButton, { "data-slot": "settings" }), account && _jsx(AccountDrawer, { "data-slot": "account", data: data?.account }), signIn && _jsx(SignInButton, {})] }), slots?.rightAreaEnd] })),
        }, slotProps: slotProps, ...other }));
}

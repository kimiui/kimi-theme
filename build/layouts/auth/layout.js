'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { useBoolean } from 'ahooks';
import Alert from '@mui/material/Alert';
import { useTheme } from '@mui/material/styles';
import { AuthMain } from './main';
import { stylesMode } from '../../theme/styles';
import { HeaderBase } from '../core/header-base';
import { LayoutSection } from '../core/layout-section';
export default function AuthLayout({ sx, children }) {
    const theme = useTheme();
    const [, mobileNavOpenActions] = useBoolean();
    const layoutQuery = 'md';
    return (_jsx(LayoutSection
    /** **************************************
     * Header
     *************************************** */
    , { 
        /** **************************************
         * Header
         *************************************** */
        headerSection: _jsx(HeaderBase, { disableElevation: true, layoutQuery: layoutQuery, onOpenNav: mobileNavOpenActions.setTrue, slotsDisplay: {
                signIn: false,
                account: false,
                purchase: false,
                contacts: false,
                searchbar: false,
                workspaces: false,
                menuButton: false,
                localization: false,
                notifications: false,
            }, slots: {
                topArea: (_jsx(Alert, { severity: "info", sx: { display: 'none', borderRadius: 0 }, children: "This is an info Alert." })),
            }, slotProps: { container: { maxWidth: false } }, sx: { position: { [layoutQuery]: 'fixed' } } }), 
        /** **************************************
         * Footer
         *************************************** */
        footerSection: null, 
        /** **************************************
         * Style
         *************************************** */
        cssVars: {
            '--layout-auth-content-width': '900px',
        }, sx: {
            backgroundColor: theme.palette.background.neutral,
            '&::before': {
                width: 1,
                height: 1,
                zIndex: -1,
                content: "''",
                opacity: 0.24,
                position: 'fixed',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                [stylesMode.dark]: { opacity: 0.08 },
            },
            ...sx,
        }, children: _jsx(AuthMain, { layoutQuery: layoutQuery, children: children }) }));
}

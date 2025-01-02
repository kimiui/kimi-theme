'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { useBoolean } from 'ahooks';
import Alert from '@mui/material/Alert';
import { Main, CompactContent } from './main';
import { HeaderBase } from '../core/header-base';
import { LayoutSection } from '../core/layout-section';
export function SimpleLayout({ sx, children, content }) {
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
        headerSection: _jsx(HeaderBase, { layoutQuery: layoutQuery, onOpenNav: mobileNavOpenActions.setTrue, slotsDisplay: {
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
            }, slotProps: { container: { maxWidth: false } } }), 
        /** **************************************
         * Footer
         *************************************** */
        footerSection: null, 
        /** **************************************
         * Style
         *************************************** */
        cssVars: {
            '--layout-simple-content-compact-width': '448px',
        }, sx: sx, children: _jsx(Main, { children: content?.compact ? _jsx(CompactContent, { children: children }) : children }) }));
}

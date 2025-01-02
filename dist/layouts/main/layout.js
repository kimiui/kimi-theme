'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useBoolean } from 'ahooks';
import Alert from '@mui/material/Alert';
import { usePathname } from 'routes-react';
import { useTheme } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import { Main } from './main';
import { NavMobile } from './nav/mobile';
import { NavDesktop } from './nav/desktop';
import { Footer, HomeFooter } from './footer';
import { HeaderBase } from '../core/header-base';
import { LayoutSection } from '../core/layout-section';
export function MainLayout({ sx, data, children }) {
    const theme = useTheme();
    const pathname = usePathname();
    const [mobileNavOpen, mobileNavOpenActions] = useBoolean();
    const homePage = pathname === '/';
    const layoutQuery = 'md';
    const navData = data?.nav ?? [];
    console.log('navData', navData);
    return (_jsxs(BrowserRouter, { children: [_jsx(NavMobile, { data: navData, open: mobileNavOpen, onClose: mobileNavOpenActions.setFalse }), _jsx(LayoutSection
            /** **************************************
             * Header
             *************************************** */
            , { 
                /** **************************************
                 * Header
                 *************************************** */
                headerSection: _jsx(HeaderBase, { layoutQuery: layoutQuery, onOpenNav: mobileNavOpenActions.setTrue, slotsDisplay: {
                        account: false,
                        helpLink: false,
                        contacts: false,
                        searchbar: false,
                        workspaces: false,
                        localization: false,
                        notifications: false,
                    }, slots: {
                        topArea: (_jsx(Alert, { severity: "info", sx: { display: 'none', borderRadius: 0 }, children: "This is an info Alert." })),
                        rightAreaStart: (_jsx(NavDesktop, { data: navData, sx: {
                                display: 'none',
                                [theme.breakpoints.up(layoutQuery)]: {
                                    mr: 2.5,
                                    display: 'flex',
                                },
                            } })),
                    } }), 
                /** **************************************
                 * Footer
                 *************************************** */
                footerSection: homePage ? _jsx(HomeFooter, {}) : _jsx(Footer, { layoutQuery: layoutQuery }), 
                /** **************************************
                 * Style
                 *************************************** */
                sx: sx, children: _jsx(Main, { children: children }) })] }));
}

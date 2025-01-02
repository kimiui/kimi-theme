'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useMemo } from 'react';
import { useBoolean } from 'ahooks';
import Alert from '@mui/material/Alert';
import { useTheme } from '@mui/material/styles';
import { Box, Stack, Typography } from '@mui/material';
import { iconButtonClasses } from '@mui/material/IconButton';
import { allLangs } from '../../locales';
import { Logo } from '../../components/logo';
import { _contacts, _notifications } from '../../_mock';
import { varAlpha, stylesMode } from '../../theme/styles';
import { bulletColor } from '../../components/nav-section';
import { useSettingsContext } from '../../components/settings';
import { Main } from './main';
import { NavMobile } from './nav-mobile';
import { layoutClasses } from '../classes';
import { NavVertical } from './nav-vertical';
import { _account } from '../config-nav-account';
import { HeaderBase } from '../core/header-base';
import { NavHorizontal } from './nav-horizontal';
import { NavHelper } from '../components/nav-helper';
import { _workspaces } from '../config-nav-workspace';
import { LayoutSection } from '../core/layout-section';
export function DashboardLayout({ sx, children, data, slotProps }) {
    const theme = useTheme();
    const [mobileNavOpen, mobileNavOpenActions] = useBoolean();
    const settings = useSettingsContext();
    const navColorVars = useNavColorVars(theme, settings);
    const layoutQuery = 'lg';
    const navData = data?.nav ?? [];
    const isNavMini = settings.navLayout === 'mini';
    const isNavHorizontal = settings.navLayout === 'horizontal';
    const isNavVertical = isNavMini || settings.navLayout === 'vertical';
    return (_jsxs(_Fragment, { children: [_jsx(NavMobile, { data: navData, open: mobileNavOpen, onClose: mobileNavOpenActions.setFalse, cssVars: navColorVars.section }), _jsx(LayoutSection
            /** **************************************
             * Header
             *************************************** */
            , { 
                /** **************************************
                 * Header
                 *************************************** */
                headerSection: _jsx(HeaderBase, { layoutQuery: layoutQuery, disableElevation: isNavVertical, onOpenNav: mobileNavOpenActions.setTrue, data: {
                        nav: navData,
                        langs: allLangs,
                        account: _account,
                        contacts: _contacts,
                        workspaces: _workspaces,
                        notifications: _notifications,
                    }, slotsDisplay: {
                        signIn: false,
                        purchase: false,
                        helpLink: false,
                        workspaces: false,
                        contacts: false,
                        localization: false,
                        ...slotProps?.header?.slotsDisplay,
                    }, slots: {
                        topArea: (_jsx(Alert, { severity: "info", sx: { display: 'none', borderRadius: 0 }, children: "This is an info Alert." })),
                        bottomArea: isNavHorizontal ? (_jsx(NavHorizontal, { data: navData, layoutQuery: layoutQuery, cssVars: navColorVars.section })) : null,
                    }, slotProps: {
                        toolbar: {
                            sx: {
                                [`& [data-slot="logo"]`]: {
                                    display: 'none',
                                },
                                [`& [data-area="right"]`]: {
                                    gap: { xs: 0, sm: 0.75 },
                                },
                                ...(isNavHorizontal && {
                                    bgcolor: 'var(--layout-nav-bg)',
                                    [`& .${iconButtonClasses.root}`]: {
                                        color: 'var(--layout-nav-text-secondary-color)',
                                    },
                                    [theme.breakpoints.up(layoutQuery)]: {
                                        height: 'var(--layout-nav-horizontal-height)',
                                    },
                                    [`& [data-slot="workspaces"]`]: {
                                        color: 'var(--layout-nav-text-primary-color)',
                                    },
                                    [`& [data-slot="logo"]`]: {
                                        display: 'none',
                                        [theme.breakpoints.up(layoutQuery)]: {
                                            display: 'inline-flex',
                                        },
                                    },
                                    [`& [data-slot="divider"]`]: {
                                        [theme.breakpoints.up(layoutQuery)]: {
                                            display: 'flex',
                                        },
                                    },
                                }),
                            },
                        },
                        container: {
                            maxWidth: false,
                            sx: {
                                ...(isNavVertical && { px: { [layoutQuery]: 5 } }),
                            },
                        },
                    } }), 
                /** **************************************
                 * Sidebar
                 *************************************** */
                sidebarSection: isNavHorizontal ? null : (_jsx(NavVertical, { data: navData, isNavMini: isNavMini, layoutQuery: layoutQuery, cssVars: navColorVars.section, onToggleNav: slotProps?.sidebar?.toggleNav?.display
                        ? () => settings.onUpdateField('navLayout', settings.navLayout === 'vertical' ? 'mini' : 'vertical')
                        : undefined, slotProps: {
                        top: 'top' in (data?.sidebar ?? {}) ? (data?.sidebar?.top) : (_jsxs(Stack, { sx: { pl: 3.5, pt: 2.5, pb: 2.5 }, direction: "row", alignItems: "center", children: [_jsx(Logo, {}), _jsx(Typography, { variant: "h5", sx: { ml: 1, color: theme.palette.primary.main }, children: "Kimi Admin" })] })),
                        topMini: 'topMini' in (data?.sidebar ?? {}) ? (data?.sidebar?.topMini) : (_jsx(Box, { sx: { display: 'flex', justifyContent: 'center', py: 2.5 }, children: _jsx(Logo, {}) })),
                        bottom: 'bottom' in (data?.sidebar ?? {}) ? data?.sidebar?.bottom : _jsx(NavHelper, {}),
                        ...slotProps?.sidebar,
                    } })), 
                /** **************************************
                 * Footer
                 *************************************** */
                footerSection: null, 
                /** **************************************
                 * Style
                 *************************************** */
                cssVars: {
                    ...navColorVars.layout,
                    '--layout-transition-easing': 'linear',
                    '--layout-transition-duration': '120ms',
                    '--layout-nav-mini-width': '88px',
                    '--layout-nav-vertical-width': '300px',
                    '--layout-nav-horizontal-height': '64px',
                    '--layout-dashboard-content-pt': theme.spacing(1),
                    '--layout-dashboard-content-pb': theme.spacing(8),
                    '--layout-dashboard-content-px': theme.spacing(5),
                }, sx: {
                    [`& .${layoutClasses.hasSidebar}`]: {
                        [theme.breakpoints.up(layoutQuery)]: {
                            transition: theme.transitions.create(['padding-left'], {
                                easing: 'var(--layout-transition-easing)',
                                duration: 'var(--layout-transition-duration)',
                            }),
                            pl: isNavMini ? 'var(--layout-nav-mini-width)' : 'var(--layout-nav-vertical-width)',
                        },
                    },
                    ...sx,
                }, children: _jsx(Main, { isNavHorizontal: isNavHorizontal, children: children }) })] }));
}
// ----------------------------------------------------------------------
function useNavColorVars(theme, settings) {
    const { vars: { palette }, } = theme;
    return useMemo(() => {
        switch (settings.navColor) {
            case 'integrate':
                return {
                    layout: {
                        '--layout-nav-bg': palette.background.default,
                        '--layout-nav-horizontal-bg': varAlpha(palette.background.defaultChannel, 0.8),
                        '--layout-nav-border-color': varAlpha(palette.grey['500Channel'], 0.12),
                        '--layout-nav-text-primary-color': palette.text.primary,
                        '--layout-nav-text-secondary-color': palette.text.secondary,
                        '--layout-nav-text-disabled-color': palette.text.disabled,
                        [stylesMode.dark]: {
                            '--layout-nav-border-color': varAlpha(palette.grey['500Channel'], 0.08),
                            '--layout-nav-horizontal-bg': varAlpha(palette.background.defaultChannel, 0.96),
                        },
                    },
                    section: {},
                };
            case 'apparent':
                return {
                    layout: {
                        '--layout-nav-bg': palette.grey[900],
                        '--layout-nav-horizontal-bg': varAlpha(palette.grey['900Channel'], 0.96),
                        '--layout-nav-border-color': 'transparent',
                        '--layout-nav-text-primary-color': palette.common.white,
                        '--layout-nav-text-secondary-color': palette.grey[500],
                        '--layout-nav-text-disabled-color': palette.grey[600],
                        [stylesMode.dark]: {
                            '--layout-nav-bg': palette.grey[800],
                            '--layout-nav-horizontal-bg': varAlpha(palette.grey['800Channel'], 0.8),
                        },
                    },
                    section: {
                        // caption
                        '--nav-item-caption-color': palette.grey[600],
                        // subheader
                        '--nav-subheader-color': palette.grey[600],
                        '--nav-subheader-hover-color': palette.common.white,
                        // item
                        '--nav-item-color': palette.grey[500],
                        '--nav-item-root-active-color': palette.primary.light,
                        '--nav-item-root-open-color': palette.common.white,
                        // bullet
                        '--nav-bullet-light-color': bulletColor.dark,
                        // sub
                        ...(settings.navLayout === 'vertical' && {
                            '--nav-item-sub-active-color': palette.common.white,
                            '--nav-item-sub-open-color': palette.common.white,
                        }),
                    },
                };
            default:
                throw new Error(`Invalid color: ${settings.navColor}`);
        }
    }, [
        palette.background.default,
        palette.background.defaultChannel,
        palette.common.white,
        palette.grey,
        palette.primary.light,
        palette.text.disabled,
        palette.text.primary,
        palette.text.secondary,
        settings.navColor,
        settings.navLayout,
    ]);
}

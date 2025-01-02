import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import { useBoolean } from 'ahooks';
import Paper from '@mui/material/Paper';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { Logo } from '../../../components/logo';
import { Label } from '../../../components/label';
import { Iconify } from '../../../components/iconify';
import { SvgColor } from '../../../components/svg-color';
import { NavBasicMobile, NavBasicDesktop } from '../../../components/nav-basic';
// ----------------------------------------------------------------------
export function NavBasic() {
    const [mobileOpen, mobileOpenActions] = useBoolean();
    return (_jsxs(_Fragment, { children: [_jsxs(Paper, { variant: "outlined", sx: {
                    p: 2,
                    gap: 2,
                    width: 1,
                    borderRadius: 2,
                    display: 'flex',
                    overflowX: 'auto',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }, children: [_jsx(IconButton, { onClick: mobileOpenActions.setTrue, children: _jsx(Iconify, { icon: "carbon:menu" }) }), _jsx(NavBasicDesktop, { data: NAV_ITEMS, cssVars: {
                            '--nav-item-gap': '16px',
                        }, slotProps: {
                            rootItem: {
                                sx: {},
                                icon: {},
                                texts: {},
                                title: {
                                // typography: 'subtitle1',
                                // fontFamily: (theme) => theme.typography.fontSecondaryFamily,
                                },
                                caption: {},
                                arrow: {},
                            },
                            subItem: {
                                sx: {},
                                icon: {},
                                texts: {},
                                title: {},
                                caption: {},
                                arrow: {},
                            },
                            paper: {},
                        } })] }), _jsxs(Drawer, { open: mobileOpen, onClose: mobileOpenActions.setFalse, PaperProps: { sx: { width: 280 } }, children: [_jsx(Box, { sx: { pl: 2.5, py: 2 }, children: _jsx(Logo, {}) }), _jsx(NavBasicMobile, { sx: { px: 1.5 }, data: NAV_ITEMS, cssVars: {
                            '--nav-item-gap': '8px',
                        }, slotProps: {
                            rootItem: {
                                sx: {},
                                icon: {},
                                texts: {},
                                title: {
                                // typography: 'subtitle1',
                                // fontFamily: (theme) => theme.typography.fontSecondaryFamily,
                                },
                                caption: {},
                                info: {},
                                arrow: {},
                            },
                            subItem: {
                                sx: {},
                                icon: {},
                                texts: {},
                                title: {},
                                caption: {},
                                info: {},
                                arrow: {},
                            },
                            paper: {},
                        } })] })] }));
}
// ----------------------------------------------------------------------
export const NAV_ITEMS = [
    {
        title: 'Home',
        path: '#',
        icon: _jsx(SvgColor, { src: "/assets/icons/navbar/ic-analytics.svg" }),
    },
    {
        title: 'Page',
        path: '/basic/page',
        caption: 'This is the caption',
        icon: _jsx(SvgColor, { src: "/assets/icons/navbar/ic-banking.svg" }),
        info: _jsx(Label, { color: "info", children: "+2" }),
        children: [
            {
                title: 'Page 1',
                path: '/basic/page/1',
                icon: _jsx(SvgColor, { src: "/assets/icons/navbar/ic-booking.svg" }),
                caption: 'This is the caption',
                info: '+3',
                children: [
                    { title: 'Page 1.1', path: '/basic/page/1/1' },
                    { title: 'Page 1.2', path: '/basic/page/1/2' },
                ],
            },
            {
                title: 'Page 2',
                path: '/basic/page/2',
                icon: _jsx(SvgColor, { src: "/assets/icons/navbar/ic-chat.svg" }),
                children: [
                    { title: 'Page 2.1', path: '/basic/page/2/1' },
                    { title: 'Page 2.2', path: '/basic/page/2/2' },
                    {
                        title: 'Page 2.3',
                        path: '/basic/page/2/3',
                        children: [
                            { title: 'Page 2.3.1', path: '/basic/page/2/3/1' },
                            { title: 'Page 2.3.2', path: '/basic/page/2/3/2' },
                            { title: 'Page 2.3.3', path: '/basic/page/2/3/3' },
                        ],
                    },
                ],
            },
            {
                title: 'Page 3',
                path: '#',
                icon: _jsx(SvgColor, { src: "/assets/icons/navbar/ic-lock.svg" }),
            },
        ],
    },
    {
        title: 'Blog',
        path: '#',
        icon: _jsx(SvgColor, { src: "/assets/icons/navbar/ic-mail.svg" }),
    },
    {
        title: 'Contact',
        path: '#',
        icon: _jsx(SvgColor, { src: "/assets/icons/navbar/ic-user.svg" }),
        disabled: true,
    },
    {
        title: 'External',
        path: 'https://www.google.com/',
        icon: _jsx(SvgColor, { src: "/assets/icons/navbar/ic-tour.svg" }),
    },
];

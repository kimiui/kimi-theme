import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import { RouterLink } from 'routes-react';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { _socials } from '../../_mock';
import { Logo } from '../../components/logo';
import { SocialIcon } from '../../components/iconify';
// ----------------------------------------------------------------------
const LINKS = [
    {
        headline: 'Legal',
        children: [
            { name: 'Terms and condition', href: '#' },
            { name: 'Privacy policy', href: '#' },
        ],
    },
    {
        headline: 'Contact',
        children: [{ name: 'support@kimistores.com', href: '#' }],
    },
];
export function Footer({ layoutQuery, sx }) {
    const theme = useTheme();
    return (_jsxs(Box, { component: "footer", sx: { position: 'relative', bgcolor: 'background.default', ...sx }, children: [_jsx(Divider, {}), _jsxs(Container, { sx: {
                    pb: 5,
                    pt: 10,
                    textAlign: 'center',
                    [theme.breakpoints.up(layoutQuery)]: { textAlign: 'unset' },
                }, children: [_jsx(Logo, {}), _jsxs(Grid, { container: true, sx: {
                            mt: 3,
                            justifyContent: 'center',
                            [theme.breakpoints.up(layoutQuery)]: {
                                justifyContent: 'space-between',
                            },
                        }, children: [_jsxs(Grid, { [layoutQuery]: 3, size: 12, children: [_jsx(Typography, { variant: "body2", sx: {
                                            mx: 'auto',
                                            maxWidth: 280,
                                            [theme.breakpoints.up(layoutQuery)]: { mx: 'unset' },
                                        }, children: "The starting point for your next project with Kimi Admin UI Kit, built on the newest version of Material-UI \u00A9, ready to be customized to your style." }), _jsx(Stack, { direction: "row", sx: {
                                            mt: 3,
                                            mb: 5,
                                            justifyContent: 'center',
                                            [theme.breakpoints.up(layoutQuery)]: {
                                                mb: 0,
                                                justifyContent: 'flex-start',
                                            },
                                        }, children: _socials.map((social) => (_jsx(IconButton, { children: _jsx(SocialIcon, { icon: social.name }) }, social.name))) })] }), _jsx(Grid, { [layoutQuery]: 6, size: 12, children: _jsx(Stack, { spacing: 5, sx: {
                                        flexDirection: 'column',
                                        [theme.breakpoints.up(layoutQuery)]: { flexDirection: 'row' },
                                    }, children: LINKS.map((list) => (_jsxs(Stack, { spacing: 2, sx: {
                                            width: 1,
                                            alignItems: 'center',
                                            [theme.breakpoints.up(layoutQuery)]: {
                                                alignItems: 'flex-start',
                                            },
                                        }, children: [_jsx(Typography, { component: "div", variant: "overline", children: list.headline }), list.children.map((link) => (_jsx(Link, { component: RouterLink, href: link.href, color: "inherit", variant: "body2", children: link.name }, link.name)))] }, list.headline))) }) })] }), _jsx(Typography, { variant: "body2", sx: { mt: 10 }, children: "\u00A9 All rights reserved." })] })] }));
}
export function HomeFooter({ sx }) {
    return (_jsx(Box, { component: "footer", sx: {
            py: 5,
            textAlign: 'center',
            position: 'relative',
            bgcolor: 'background.default',
            ...sx,
        }, children: _jsxs(Container, { children: [_jsx(Logo, {}), _jsxs(Box, { sx: { mt: 1, typography: 'caption' }, children: ["\u00A9 All rights reserved.", _jsx("br", {}), " made by", _jsx(Link, { href: "https://kimistores.com/", children: " kimistores.com " })] })] }) }));
}

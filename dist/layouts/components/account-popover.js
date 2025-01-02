import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { useRouter, usePathname } from 'routes-react';
import { _mock } from '../../_mock';
import { paths } from '../../routes/paths';
import { Label } from '../../components/label';
import { usePopover, CustomPopover } from '../../components/custom-popover';
import { AccountButton } from './account-button';
import { SignOutButton } from './sign-out-button';
export function AccountPopover({ data = [], onSignOut, sx, ...other }) {
    const router = useRouter();
    const popover = usePopover();
    const pathname = usePathname();
    const { user } = _mock;
    const handleClickItem = (path) => {
        popover.onClose();
        router.push(path);
    };
    return (_jsxs(_Fragment, { children: [_jsx(AccountButton, { open: popover.open, onClick: popover.onOpen, photoURL: user?.photoURL, displayName: user?.displayName, sx: sx, ...other }), _jsxs(CustomPopover, { open: popover.open, anchorEl: popover.anchorEl, onClose: popover.onClose, slotProps: {
                    paper: { sx: { p: 0, width: 200 } },
                    arrow: { offset: 20 },
                }, children: [_jsxs(Box, { sx: { p: 2, pb: 1.5 }, children: [_jsx(Typography, { variant: "subtitle2", noWrap: true, children: user?.displayName }), _jsx(Typography, { variant: "body2", sx: { color: 'text.secondary' }, noWrap: true, children: user?.email })] }), _jsx(Divider, { sx: { borderStyle: 'dashed' } }), _jsx(MenuList, { sx: { p: 1, my: 1 }, children: data.map((option) => {
                            const rootLabel = pathname.includes('/dashboard') ? 'Home' : 'Dashboard';
                            const rootHref = pathname.includes('/dashboard') ? '/' : paths.dashboard.root;
                            return (_jsxs(MenuItem, { onClick: () => handleClickItem(option.label === 'Home' ? rootHref : option.href), sx: {
                                    py: 1,
                                    color: 'text.secondary',
                                    '& svg': { width: 24, height: 24 },
                                    '&:hover': { color: 'text.primary' },
                                }, children: [option.icon, _jsx(Box, { component: "span", children: option.label === 'Home' ? rootLabel : option.label }), option.info && (_jsx(Label, { color: "error", sx: { ml: 1 }, children: option.info }))] }, option.label));
                        }) }), onSignOut && (_jsxs(_Fragment, { children: [_jsx(Divider, { sx: { borderStyle: 'dashed' } }), _jsx(Box, { sx: { p: 1 }, children: _jsx(SignOutButton, { size: "medium", variant: "text", onClose: popover.onClose, sx: { display: 'block', textAlign: 'left' }, onSignOut: onSignOut }) })] }))] })] }));
}

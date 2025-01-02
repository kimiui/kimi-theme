'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Avatar from '@mui/material/Avatar';
import Switch from '@mui/material/Switch';
import Divider from '@mui/material/Divider';
import { useState, useCallback } from 'react';
import ListItem from '@mui/material/ListItem';
import Collapse from '@mui/material/Collapse';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import { paths } from '../../../routes/paths';
import { Iconify } from '../../../components/iconify';
import { CustomBreadcrumbs } from '../../../components/custom-breadcrumbs';
import { ComponentHero } from '../../component-hero';
import { ComponentBlock } from '../../component-block';
import { ScrollToViewTemplate } from '../../component-template';
// ----------------------------------------------------------------------
export function ListView() {
    const [open, setOpen] = useState(true);
    const [checked, setChecked] = useState([0]);
    const [toggle, setToggle] = useState(['wifi']);
    const [selectedIndex, setSelectedIndex] = useState(1);
    const handleClick = useCallback(() => {
        setOpen((prev) => !prev);
    }, []);
    const handleListItemClick = useCallback((event, index) => {
        setSelectedIndex(index);
    }, []);
    const handleCheck = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
        if (currentIndex === -1) {
            newChecked.push(value);
        }
        else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
    };
    const handleToggle = (value) => () => {
        const currentIndex = toggle.indexOf(value);
        const newChecked = [...toggle];
        if (currentIndex === -1) {
            newChecked.push(value);
        }
        else {
            newChecked.splice(currentIndex, 1);
        }
        setToggle(newChecked);
    };
    const DEMO = [
        {
            name: 'Simple',
            component: (_jsx(ComponentBlock, { sx: { flexDirection: 'column', alignItems: 'unset' }, children: _jsxs(Box, { sx: { bgcolor: 'background.paper' }, children: [_jsx("nav", { "aria-label": "main mailbox folders", children: _jsxs(List, { children: [_jsx(ListItem, { disablePadding: true, children: _jsxs(ListItemButton, { children: [_jsx(ListItemIcon, { children: _jsx(Iconify, { icon: "solar:inbox-in-bold", width: 24 }) }), _jsx(ListItemText, { primary: "Inbox" })] }) }), _jsx(ListItem, { disablePadding: true, children: _jsxs(ListItemButton, { children: [_jsx(ListItemIcon, { children: _jsx(Iconify, { icon: "fluent:mail-24-filled", width: 24 }) }), _jsx(ListItemText, { primary: "Drafts" })] }) })] }) }), _jsx(Divider, {}), _jsx("nav", { "aria-label": "secondary mailbox folders", children: _jsxs(List, { children: [_jsx(ListItem, { disablePadding: true, children: _jsx(ListItemButton, { children: _jsx(ListItemText, { primary: "Trash" }) }) }), _jsx(ListItem, { disablePadding: true, children: _jsx(ListItemButton, { component: "a", href: "#simple-list", children: _jsx(ListItemText, { primary: "Spam" }) }) })] }) })] }) })),
        },
        {
            name: 'Nested',
            component: (_jsx(ComponentBlock, { sx: { flexDirection: 'column', alignItems: 'unset' }, children: _jsxs(List, { sx: { bgcolor: 'background.paper' }, component: "nav", "aria-labelledby": "nested-list-subheader", subheader: _jsx(ListSubheader, { component: "div", id: "nested-list-subheader", children: "Nested List Items" }), children: [_jsxs(ListItemButton, { children: [_jsx(ListItemIcon, { children: _jsx(Iconify, { icon: "iconamoon:send-fill", width: 24 }) }), _jsx(ListItemText, { primary: "Sent mail" })] }), _jsxs(ListItemButton, { children: [_jsx(ListItemIcon, { children: _jsx(Iconify, { icon: "fluent:mail-24-filled", width: 24 }) }), _jsx(ListItemText, { primary: "Drafts" })] }), _jsxs(ListItemButton, { onClick: handleClick, children: [_jsx(ListItemIcon, { children: _jsx(Iconify, { icon: "solar:inbox-in-bold", width: 24 }) }), _jsx(ListItemText, { primary: "Inbox" }), _jsx(Iconify, { icon: open ? 'eva:arrow-ios-upward-fill' : 'eva:arrow-ios-downward-fill' })] }), _jsx(Collapse, { in: open, timeout: "auto", unmountOnExit: true, children: _jsx(List, { component: "div", disablePadding: true, children: _jsxs(ListItemButton, { sx: { pl: 4 }, children: [_jsx(ListItemIcon, { children: _jsx(Iconify, { icon: "ic:round-star-border", width: 24 }) }), _jsx(ListItemText, { primary: "Starred" })] }) }) })] }) })),
        },
        {
            name: 'Folder',
            component: (_jsx(ComponentBlock, { sx: { flexDirection: 'column', alignItems: 'unset' }, children: _jsxs(List, { sx: { bgcolor: 'background.paper' }, children: [_jsxs(ListItem, { children: [_jsx(ListItemAvatar, { children: _jsx(Avatar, { children: _jsx(Iconify, { icon: "ic:baseline-image", width: 24 }) }) }), _jsx(ListItemText, { primary: "Photos", secondary: "Jan 9, 2014" })] }), _jsxs(ListItem, { children: [_jsx(ListItemAvatar, { children: _jsx(Avatar, { children: _jsx(Iconify, { icon: "ic:baseline-work", width: 24 }) }) }), _jsx(ListItemText, { primary: "Work", secondary: "Jan 7, 2014" })] }), _jsxs(ListItem, { children: [_jsx(ListItemAvatar, { children: _jsx(Avatar, { children: _jsx(Iconify, { icon: "ic:round-beach-access", width: 24 }) }) }), _jsx(ListItemText, { primary: "Vacation", secondary: "July 20, 2014" })] })] }) })),
        },
        {
            name: 'Selected',
            component: (_jsx(ComponentBlock, { sx: { flexDirection: 'column', alignItems: 'unset' }, children: _jsxs(Box, { sx: { bgcolor: 'background.paper' }, children: [_jsxs(List, { component: "nav", "aria-label": "main mailbox folders", children: [_jsxs(ListItemButton, { selected: selectedIndex === 0, onClick: (event) => handleListItemClick(event, 0), children: [_jsx(ListItemIcon, { children: _jsx(Iconify, { icon: "solar:inbox-in-bold", width: 24 }) }), _jsx(ListItemText, { primary: "Inbox" })] }), _jsxs(ListItemButton, { selected: selectedIndex === 1, onClick: (event) => handleListItemClick(event, 1), children: [_jsx(ListItemIcon, { children: _jsx(Iconify, { icon: "fluent:mail-24-filled", width: 24 }) }), _jsx(ListItemText, { primary: "Drafts" })] })] }), _jsx(Divider, {}), _jsxs(List, { component: "nav", "aria-label": "secondary mailbox folder", children: [_jsx(ListItemButton, { selected: selectedIndex === 2, onClick: (event) => handleListItemClick(event, 2), children: _jsx(ListItemText, { primary: "Trash" }) }), _jsx(ListItemButton, { selected: selectedIndex === 3, onClick: (event) => handleListItemClick(event, 3), children: _jsx(ListItemText, { primary: "Spam" }) })] })] }) })),
        },
        {
            name: 'Controls',
            component: (_jsx(ComponentBlock, { sx: { flexDirection: 'column', alignItems: 'unset' }, children: _jsx(List, { sx: { bgcolor: 'background.paper' }, children: [0, 1, 2, 3].map((value) => {
                        const labelId = `checkbox-list-label-${value}`;
                        return (_jsx(ListItem, { secondaryAction: _jsx(IconButton, { edge: "end", "aria-label": "comments", children: _jsx(Iconify, { icon: "solar:chat-round-dots-bold", width: 24 }) }), disablePadding: true, children: _jsxs(ListItemButton, { role: undefined, dense: true, onClick: handleCheck(value), children: [_jsx(ListItemIcon, { children: _jsx(Checkbox, { edge: "start", checked: checked.indexOf(value) !== -1, tabIndex: -1, disableRipple: true, inputProps: { id: labelId, 'aria-labelledby': labelId } }) }), _jsx(ListItemText, { id: labelId, primary: `Line item ${value + 1}` })] }, value) }, value));
                    }) }) })),
        },
        {
            name: 'Switch',
            component: (_jsx(ComponentBlock, { sx: { flexDirection: 'column', alignItems: 'unset' }, children: _jsxs(List, { subheader: _jsx(ListSubheader, { children: "Settings" }), sx: { bgcolor: 'background.paper' }, children: [_jsx(ListItem, { children: _jsxs(ListItemButton, { children: [_jsx(ListItemIcon, { children: _jsx(Iconify, { icon: "ic:baseline-wifi", width: 24 }) }), _jsx(ListItemText, { id: "switch-list-label-wifi", primary: "Wi-Fi" }), _jsx(ListItemSecondaryAction, { children: _jsx(Switch, { edge: "end", onChange: handleToggle('wifi'), checked: toggle.indexOf('wifi') !== -1, inputProps: {
                                                id: 'switch-list-label-wifi',
                                                'aria-labelledby': 'switch-list-label-wifi',
                                            } }) })] }) }), _jsx(ListItem, { children: _jsxs(ListItemButton, { children: [_jsx(ListItemIcon, { children: _jsx(Iconify, { icon: "ic:baseline-bluetooth", width: 24 }) }), _jsx(ListItemText, { id: "switch-list-label-bluetooth", primary: "Bluetooth" }), _jsx(ListItemSecondaryAction, { children: _jsx(Switch, { edge: "end", onChange: handleToggle('bluetooth'), checked: toggle.indexOf('bluetooth') !== -1, inputProps: {
                                                id: 'switch-list-label-bluetooth',
                                                'aria-labelledby': 'switch-list-label-bluetooth',
                                            } }) })] }) })] }) })),
        },
    ];
    return (_jsxs(_Fragment, { children: [_jsx(ComponentHero, { children: _jsx(CustomBreadcrumbs, { heading: "List", links: [{ name: 'Components', href: paths.docs.components.root }, { name: 'Lists' }], moreLink: ['https://mui.com/components/lists'] }) }), _jsx(ScrollToViewTemplate, { data: DEMO })] }));
}

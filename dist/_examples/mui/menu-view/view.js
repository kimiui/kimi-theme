'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import { useState, useCallback } from 'react';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import { paths } from '../../../routes/paths';
import { Iconify } from '../../../components/iconify';
import { CustomBreadcrumbs } from '../../../components/custom-breadcrumbs';
import { ComponentHero } from '../../component-hero';
import { ComponentBlock, ComponentContainer } from '../../component-block';
// ----------------------------------------------------------------------
const OPTIONS = [
    'Show some love to Material-UI',
    'Show all notification content',
    'Hide sensitive notification content',
    'Hide all notification content',
];
const OPTIONS_MAXHEIGHT = [
    'None',
    'Atria',
    'Callisto',
    'Dione',
    'Ganymede',
    'Hangouts Call',
    'Luna',
    'Oberon',
    'Phobos',
    'Pyxis',
    'Sedna',
    'Titania',
    'Triton',
    'Umbriel',
];
// ----------------------------------------------------------------------
export function MenuView() {
    const [selectedIndex, setSelectedIndex] = useState(1);
    const [isOpen, setOpen] = useState(null);
    const [isOpenList, setOpenList] = useState(null);
    const [isOpenMaxHeight, setOpenMaxHeight] = useState(null);
    const handleClick = useCallback((event) => {
        setOpenMaxHeight(event.currentTarget);
    }, []);
    const handleClickListItem = useCallback((event) => {
        setOpenList(event.currentTarget);
    }, []);
    const handleMenuItemClick = useCallback((event, index) => {
        setSelectedIndex(index);
        setOpenList(null);
    }, []);
    const handleOpen = useCallback((event) => {
        setOpen(event.currentTarget);
    }, []);
    const handleClose = useCallback(() => {
        setOpen(null);
    }, []);
    const handleMaxHeightClose = useCallback(() => {
        setOpenMaxHeight(null);
    }, []);
    return (_jsxs(_Fragment, { children: [_jsx(ComponentHero, { children: _jsx(CustomBreadcrumbs, { heading: "Menu", links: [{ name: 'Components', href: paths.docs.components.root }, { name: 'Menu' }], moreLink: ['https://mui.com/components/menus'] }) }), _jsxs(ComponentContainer, { sx: {
                    rowGap: 5,
                    columnGap: 3,
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: 'repeat(1, 1fr)',
                        md: 'repeat(2, 1fr)',
                        lg: 'repeat(3, 1fr)',
                    },
                }, children: [_jsxs(ComponentBlock, { title: "Simple", children: [_jsx(Button, { variant: "outlined", onClick: handleOpen, children: "Open Menu" }), _jsx(Menu, { id: "simple-menu", anchorEl: isOpen, onClose: handleClose, open: !!isOpen, children: ['Profile', 'My account', 'Logout'].map((option) => (_jsx(MenuItem, { selected: option === 'Profile', onClick: handleClose, children: option }, option))) })] }), _jsxs(ComponentBlock, { title: "Selected", children: [_jsx("nav", { "aria-label": "Device settings", children: _jsx(ListItemButton, { "aria-haspopup": "true", "aria-controls": "lock-menu", "aria-label": "when device is locked", onClick: handleClickListItem, children: _jsx(ListItemText, { primary: "When device is locked", secondary: OPTIONS[selectedIndex] }) }) }), _jsx(Menu, { id: "lock-menu", anchorEl: isOpenList, onClose: handleClose, open: !!isOpenList, children: OPTIONS.map((option, index) => (_jsx(MenuItem, { disabled: index === 0, selected: index === selectedIndex, onClick: (event) => handleMenuItemClick(event, index), children: option }, option))) })] }), _jsxs(ComponentBlock, { title: "Max height", children: [_jsx(IconButton, { "aria-label": "more", "aria-controls": "long-menu", "aria-haspopup": "true", onClick: handleClick, children: _jsx(Iconify, { icon: "eva:more-vertical-fill" }) }), _jsx(Menu, { id: "long-menu", anchorEl: isOpenMaxHeight, onClose: handleMaxHeightClose, open: !!isOpenMaxHeight, slotProps: {
                                    paper: { sx: { width: '20ch', maxHeight: 48 * 4.5 } },
                                }, children: OPTIONS_MAXHEIGHT.map((option) => (_jsx(MenuItem, { selected: option === 'Pyxis', onClick: handleMaxHeightClose, children: option }, option))) })] })] })] }));
}

'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import { useRef, useState, useCallback } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import { paths } from '../../../routes/paths';
import { Iconify } from '../../../components/iconify';
import { CustomBreadcrumbs } from '../../../components/custom-breadcrumbs';
import { usePopover, CustomPopover } from '../../../components/custom-popover';
import { ComponentHero } from '../../component-hero';
import { ComponentBlock, ComponentContainer } from '../../component-block';
// ----------------------------------------------------------------------
export function PopoverView() {
    const [arrow, setArrow] = useState('top-left');
    const clickPopover = usePopover();
    const customizedPopover = usePopover();
    const hoverPopoverRef = useRef(null);
    const [hoverPopoverOpen, setHoverPopoverOpen] = useState(false);
    const handleChangePopoverArrow = useCallback((event) => {
        setArrow(event.target.value);
    }, []);
    const handleHoverPopoverOpen = useCallback(() => {
        setHoverPopoverOpen(true);
    }, []);
    const handleHoverPopoverClose = useCallback(() => {
        setHoverPopoverOpen(false);
    }, []);
    return (_jsxs(_Fragment, { children: [_jsx(ComponentHero, { children: _jsx(CustomBreadcrumbs, { heading: "Popover", links: [{ name: 'Components', href: paths.docs.components.root }, { name: 'Popover' }], moreLink: ['https://mui.com/components/popover'] }) }), _jsxs(ComponentContainer, { sx: {
                    rowGap: 5,
                    columnGap: 3,
                    display: 'grid',
                    gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' },
                }, children: [_jsxs(ComponentBlock, { title: "Click & hover", sx: { gap: 3 }, children: [_jsxs("div", { children: [_jsx(Button, { variant: "contained", onClick: clickPopover.onOpen, children: "Click popover" }), _jsx(CustomPopover, { open: clickPopover.open, onClose: clickPopover.onClose, anchorEl: clickPopover.anchorEl, slotProps: { arrow: { placement: 'top-center' } }, children: _jsxs(Box, { sx: { p: 2, maxWidth: 280 }, children: [_jsx(Typography, { variant: "subtitle1", gutterBottom: true, children: "Etiam feugiat lorem non metus" }), _jsx(Typography, { variant: "body2", sx: { color: 'text.secondary' }, children: "Fusce vulputate eleifend sapien. Curabitur at lacus ac velit ornare lobortis." })] }) })] }), _jsxs("div", { children: [_jsx(Button, { ref: hoverPopoverRef, variant: "outlined", onMouseEnter: handleHoverPopoverOpen, onMouseLeave: handleHoverPopoverClose, children: "Hover popover." }), _jsx(CustomPopover, { open: hoverPopoverOpen, anchorEl: hoverPopoverRef.current, slotProps: {
                                            arrow: { placement: 'bottom-center' },
                                            paper: {
                                                onMouseEnter: handleHoverPopoverOpen,
                                                onMouseLeave: handleHoverPopoverClose,
                                                sx: { ...(hoverPopoverOpen && { pointerEvents: 'auto' }) },
                                            },
                                        }, sx: { pointerEvents: 'none' }, children: _jsxs(Box, { sx: { p: 2, maxWidth: 280 }, children: [_jsx(Typography, { variant: "subtitle1", gutterBottom: true, children: "Etiam feugiat lorem non metus" }), _jsx(Typography, { variant: "body2", sx: { color: 'text.secondary' }, children: "Fusce vulputate eleifend sapien. Curabitur at lacus ac velit ornare lobortis." })] }) })] })] }), _jsxs(ComponentBlock, { title: "Customized", sx: { gap: 5 }, children: [_jsx(IconButton, { onClick: customizedPopover.onOpen, sx: { bgcolor: 'action.hover' }, children: _jsx(Iconify, { icon: "eva:more-vertical-fill" }) }), _jsxs(FormControl, { children: [_jsx(FormLabel, { sx: { typography: 'body2' }, children: "Arrow" }), _jsx(RadioGroup, { value: arrow, onChange: handleChangePopoverArrow, children: [
                                            'top-left',
                                            'top-center',
                                            'top-right',
                                            'bottom-left',
                                            'bottom-center',
                                            'bottom-right',
                                            'left-top',
                                            'left-center',
                                            'left-bottom',
                                            'right-top',
                                            'right-center',
                                            'right-bottom',
                                        ].map((position) => (_jsx(FormControlLabel, { value: position, control: _jsx(Radio, {}), label: position }, position))) })] }), _jsx(CustomPopover, { open: customizedPopover.open, onClose: customizedPopover.onClose, anchorEl: customizedPopover.anchorEl, slotProps: { arrow: { placement: arrow } }, children: _jsxs(Box, { sx: { p: 2, maxWidth: 280 }, children: [_jsx(Typography, { variant: "subtitle1", gutterBottom: true, children: "Etiam feugiat lorem non metus" }), _jsx(Typography, { variant: "body2", sx: { color: 'text.secondary' }, children: "Fusce vulputate eleifend sapien. Curabitur at lacus ac velit ornare lobortis." })] }) })] })] })] }));
}

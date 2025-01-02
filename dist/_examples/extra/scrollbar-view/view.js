'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { paths } from '../../../routes/paths';
import { Scrollbar } from '../../../components/scrollbar';
import { CustomBreadcrumbs } from '../../../components/custom-breadcrumbs';
import { ComponentHero } from '../../component-hero';
import { ComponentBlock, ComponentContainer } from '../../component-block';
// ----------------------------------------------------------------------
export function ScrollbarView() {
    return (_jsxs(_Fragment, { children: [_jsx(ComponentHero, { children: _jsx(CustomBreadcrumbs, { heading: "Scrollbar", links: [{ name: 'Components', href: paths.docs.components.root }, { name: 'Scrollbar' }] }) }), _jsxs(ComponentContainer, { children: [_jsxs(Box, { gap: 3, display: "grid", alignItems: "flex-start", gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }, children: [_jsx(ComponentBlock, { title: "Vertical", sx: { flexDirection: 'column', alignItems: 'unset' }, children: _jsx(Scrollbar, { sx: {
                                        p: 3,
                                        height: 320,
                                        borderRadius: 1,
                                        border: (theme) => `solid 1px ${theme.vars.palette.divider}`,
                                    }, children: "Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Quisque ut nisi. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam. Vestibulum eu odio. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Cras ultricies mi eu turpis hendrerit fringilla. Phasellus consectetuer vestibulum elit. Phasellus magna. Nullam tincidunt adipiscing enim. Vestibulum volutpat pretium libero. Nullam quis ante. Morbi mollis tellus ac sapien. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce ac felis sit amet ligula pharetra condimentum. Morbi mattis ullamcorper velit. Vivamus consectetuer hendrerit lacus. Nullam quis ante. Praesent turpis. Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum. Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Quisque ut nisi. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam. Vestibulum eu odio. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Cras ultricies mi eu turpis hendrerit fringilla. Phasellus consectetuer vestibulum elit. Phasellus magna. Nullam tincidunt adipiscing enim. Vestibulum volutpat pretium libero. Nullam quis ante. Morbi mollis tellus ac sapien. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce ac felis sit amet ligula pharetra condimentum. Morbi mattis ullamcorper velit. Vivamus consectetuer hendrerit lacus. Nullam quis ante. Praesent turpis. Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum." }) }), _jsx(ComponentBlock, { title: "Horizontal", sx: { flexDirection: 'column', alignItems: 'unset' }, children: _jsx(Scrollbar, { sx: {
                                        p: 3,
                                        height: 320,
                                        borderRadius: 1,
                                        border: (theme) => `solid 1px ${theme.vars.palette.divider}`,
                                    }, children: _jsx(Box, { sx: { width: '200%' }, children: "Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Quisque ut nisi. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam. Vestibulum eu odio. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Cras ultricies mi eu turpis hendrerit fringilla. Phasellus consectetuer vestibulum elit. Phasellus magna. Nullam tincidunt adipiscing enim. Vestibulum volutpat pretium libero. Nullam quis ante. Morbi mollis tellus ac sapien. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce ac felis sit amet ligula pharetra condimentum. Morbi mattis ullamcorper velit. Vivamus consectetuer hendrerit lacus. Nullam quis ante. Praesent turpis. Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum. Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Quisque ut nisi. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam. Vestibulum eu odio. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Cras ultricies mi eu turpis hendrerit fringilla. Phasellus consectetuer vestibulum elit. Phasellus magna. Nullam tincidunt adipiscing enim. Vestibulum volutpat pretium libero. Nullam quis ante. Morbi mollis tellus ac sapien. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce ac felis sit amet ligula pharetra condimentum. Morbi mattis ullamcorper velit. Vivamus consectetuer hendrerit lacus. Nullam quis ante. Praesent turpis. Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum." }) }) })] }), _jsx(ComponentBlock, { title: "Layout", sx: {
                            px: 5,
                            py: 5,
                            alignItems: 'unset',
                            flexDirection: 'column',
                        }, children: _jsxs(Stack, { direction: "column", sx: {
                                height: 560,
                                borderRadius: 1,
                                border: (theme) => `solid 1px ${theme.vars.palette.divider}`,
                            }, children: [_jsx(Stack, { sx: {
                                        p: 3,
                                        typography: 'subtitle2',
                                        bgcolor: 'text.primary',
                                        color: 'background.default',
                                    }, children: "Top" }), _jsxs(Stack, { direction: { xs: 'column', md: 'row' }, sx: { minHeight: 0, flex: '1 1 auto' }, children: [_jsx(Stack, { sx: {
                                                p: 3,
                                                typography: 'subtitle2',
                                                flex: { xs: '0 0 72px', md: '0 0 240px' },
                                                borderRight: (theme) => `solid 1px ${theme.vars.palette.divider}`,
                                            }, children: "Left" }), _jsxs(Stack, { sx: {
                                                minWidth: 0,
                                                minHeight: 0,
                                                flex: '1 1 auto',
                                                bgcolor: 'background.neutral',
                                            }, children: [_jsx(Alert, { severity: "success", sx: { borderRadius: 0 }, children: "Here is a gentle confirmation that your action was successful." }), _jsxs(Scrollbar, { sx: { px: 3, py: 3 }, children: [_jsx(Typography, { variant: "h6", paragraph: true, children: "Vestibulum ante ipsum primis in" }), _jsx(Typography, { paragraph: true, children: "Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Quisque ut nisi. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam. Vestibulum eu odio. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Cras ultricies mi eu turpis hendrerit fringilla. Phasellus consectetuer vestibulum elit. Phasellus magna. Nullam tincidunt adipiscing enim. Vestibulum volutpat pretium libero. Nullam quis ante. Morbi mollis tellus ac sapien. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce ac felis sit amet ligula pharetra condimentum. Morbi mattis ullamcorper velit. Vivamus consectetuer hendrerit lacus. Nullam quis ante. Praesent turpis. Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum. Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Quisque ut nisi." }), _jsx(Typography, { paragraph: true, children: "Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam. Vestibulum eu odio. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Cras ultricies mi eu turpis hendrerit fringilla. Phasellus consectetuer vestibulum elit. Phasellus magna. Nullam tincidunt adipiscing enim. Vestibulum volutpat pretium libero. Nullam quis ante. Morbi mollis tellus ac sapien. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce ac felis sit amet ligula pharetra condimentum. Morbi mattis ullamcorper velit. Vivamus consectetuer hendrerit lacus. Nullam quis ante. Praesent turpis. Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum." }), _jsx(Paper, { variant: "outlined", sx: { width: 1, aspectRatio: '16/9' } })] })] }), _jsx(Stack, { sx: {
                                                p: 3,
                                                typography: 'subtitle2',
                                                flex: { xs: '0 0 72px', md: '0 0 240px' },
                                                borderLeft: (theme) => `solid 1px ${theme.vars.palette.divider}`,
                                            }, children: "Right" })] }), _jsx(Stack, { sx: {
                                        p: 3,
                                        typography: 'subtitle2',
                                        borderTop: (theme) => `solid 1px ${theme.vars.palette.divider}`,
                                    }, children: "Bottom" })] }) })] })] }));
}

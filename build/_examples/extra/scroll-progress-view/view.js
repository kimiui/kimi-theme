'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import CardContent from '@mui/material/CardContent';
import { paths } from '../../../routes/paths';
import { varAlpha } from '../../../theme/styles';
import { Scrollbar } from '../../../components/scrollbar';
import { CustomBreadcrumbs } from '../../../components/custom-breadcrumbs';
import { ScrollProgress, useScrollProgress } from '../../../components/animate/scroll-progress';
import { ComponentHero } from '../../component-hero';
import { ComponentBlock, ComponentContainer } from '../../component-block';
// ----------------------------------------------------------------------
export function ScrollProgressView() {
    const pageProgress = useScrollProgress();
    const containerProgress1 = useScrollProgress('container');
    const containerProgress2 = useScrollProgress('container');
    return (_jsxs(_Fragment, { children: [_jsx(ScrollProgress, { variant: "linear", size: 6, progress: pageProgress.scrollYProgress, sx: { position: 'fixed' } }), _jsx(ComponentHero, { children: _jsx(CustomBreadcrumbs, { heading: "Scroll progress", links: [
                        { name: 'Components', href: paths.docs.components.root },
                        { name: 'Scroll progress' },
                    ] }) }), _jsxs(ComponentContainer, { children: [_jsxs(ComponentBlock, { title: "Container scroll Y", sx: { flexDirection: 'column', alignItems: 'unset' }, children: [_jsx(ScrollProgress, { color: "info", variant: "circular", size: 40, thickness: 2, progress: containerProgress1.scrollYProgress, sx: { position: 'absolute', top: 16, right: 16 } }), _jsx(ScrollProgress, { variant: "linear", color: "info", progress: containerProgress1.scrollYProgress }), _jsx(CardContent, { children: _jsx(Scrollbar, { ref: containerProgress1.elementRef, sx: { height: 480 }, children: _jsx(Stack, { spacing: 3, children: [...Array(12)].map((_, index) => (_jsx(Paper, { variant: "outlined", sx: {
                                                width: 1,
                                                height: 160,
                                                flexShrink: 0,
                                                borderRadius: 1.5,
                                                display: 'flex',
                                                typography: 'h2',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.24),
                                            }, children: index + 1 }, index))) }) }) })] }), _jsxs(ComponentBlock, { title: "Container scroll X", sx: { flexDirection: 'column', alignItems: 'unset' }, children: [_jsx(ScrollProgress, { color: "inherit", variant: "circular", size: 40, thickness: 2, progress: containerProgress2.scrollXProgress, sx: { position: 'absolute', top: 8, right: 8 } }), _jsx(ScrollProgress, { variant: "linear", color: "inherit", progress: containerProgress2.scrollXProgress }), _jsx(CardContent, { children: _jsx(Scrollbar, { ref: containerProgress2.elementRef, children: _jsx(Stack, { direction: "row", spacing: 3, children: [...Array(24)].map((_, index) => (_jsx(Paper, { variant: "outlined", sx: {
                                                width: 200,
                                                flexShrink: 0,
                                                borderRadius: 1.5,
                                                display: 'flex',
                                                typography: 'h2',
                                                aspectRatio: '9/16',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.24),
                                            }, children: index + 1 }, index))) }) }) })] }), _jsx(Box, { sx: {
                            my: 10,
                            minHeight: 2000,
                            typography: 'h6',
                            textAlign: 'center',
                        }, children: "\uD83D\uDC47 Scroll down document" })] })] }));
}

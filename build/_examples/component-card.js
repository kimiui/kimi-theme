'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { m } from 'framer-motion';
import Paper from '@mui/material/Paper';
import { RouterLink } from 'routes-react';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { varAlpha } from '../theme/styles';
import { Image } from '../components/image';
import { Label } from '../components/label';
import { varHover, varTranHover } from '../components/animate';
export function ComponentCard({ item }) {
    return (_jsxs(Paper, { component: RouterLink, href: item.href, variant: "outlined", sx: {
            overflow: 'hidden',
            position: 'relative',
            textDecoration: 'none',
            borderColor: (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.12),
        }, children: [item.category && (_jsx(Label, { color: item.category === 'MUI X' ? 'info' : 'default', sx: {
                    top: 8,
                    right: 8,
                    zIndex: 9,
                    position: 'absolute',
                }, children: item.category })), _jsx(CardActionArea, { component: m.div, whileHover: "hover", sx: {
                    borderRadius: 0,
                    color: 'text.secondary',
                    bgcolor: (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.04),
                }, children: _jsx(m.div, { variants: varHover(1.1), transition: varTranHover(), children: _jsx(Image, { alt: item.name, src: item.icon, ratio: "1/1", sx: { width: 200, maxWidth: 1 }, disablePlaceholder: true }) }) }), _jsx(Typography, { variant: "subtitle2", sx: { p: 2, textAlign: 'center' }, children: item.name })] }));
}

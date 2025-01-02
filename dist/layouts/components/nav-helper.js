import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { m } from 'framer-motion';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { alpha as hexAlpha } from '@mui/material/styles';
import { varAlpha, bgGradient } from '../../theme/styles';
// ----------------------------------------------------------------------
export function NavHelper({ sx, ...other }) {
    return (_jsx(Stack, { sx: { px: 2, py: 5, textAlign: 'center', ...sx }, ...other, children: _jsx(Stack, { alignItems: "center", children: _jsxs(Stack, { spacing: 0.5, sx: { mb: 2, mt: 1.5, width: 1, maxWidth: 150 }, children: [_jsx(Typography, { variant: "body2", children: "Need help, Please check our docs" }), _jsx(Button, { href: "https://docs.kimistores.com", target: "_blank", variant: "contained", size: "small", color: "primary", children: "Document" })] }) }) }));
}
// ----------------------------------------------------------------------
export function UpgradeBlock({ sx, ...other }) {
    return (_jsxs(Stack, { sx: {
            ...bgGradient({
                color: `135deg, ${hexAlpha('#F7BB95', 0.92)}, ${hexAlpha('#5B2FF3', 0.92)}`,
                imgUrl: `/assets/background/background-7.webp`,
            }),
            px: 3,
            py: 4,
            borderRadius: 2,
            position: 'relative',
            ...sx,
        }, ...other, children: [_jsx(Box, { sx: {
                    top: 0,
                    left: 0,
                    width: 1,
                    height: 1,
                    borderRadius: 2,
                    position: 'absolute',
                    border: (theme) => `solid 3px ${varAlpha(theme.vars.palette.common.whiteChannel, 0.16)}`,
                } }), _jsx(Box, { component: m.img, animate: { y: [12, -12, 12] }, transition: {
                    duration: 8,
                    ease: 'linear',
                    repeat: Infinity,
                    repeatDelay: 0,
                }, alt: "Small Rocket", src: "/assets/illustrations/illustration-rocket-small.webp", sx: { right: 0, width: 112, height: 112, position: 'absolute' } }), _jsxs(Stack, { alignItems: "flex-start", sx: { position: 'relative' }, children: [_jsx(Box, { component: "span", sx: { typography: 'h5', color: 'common.white' }, children: "35% OFF" }), _jsx(Box, { component: "span", sx: {
                            mb: 2,
                            mt: 0.5,
                            color: 'common.white',
                            typography: 'subtitle2',
                        }, children: "Power up Productivity!" }), _jsx(Button, { variant: "contained", size: "small", color: "warning", children: "Upgrade to Pro" })] })] }));
}

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { orderBy } from '../utils/helper';
import { ComponentCard } from './component-card';
import { muiNav, extraNav, foundationNav } from './config-nav';
// ----------------------------------------------------------------------
export function ComponentsView() {
    return (_jsx(Container, { sx: { mt: 10, mb: 15 }, children: _jsx(Stack, { direction: { xs: 'column', md: 'row' }, alignItems: { md: 'flex-start' }, children: _jsxs(Stack, { divider: _jsx(Divider, { sx: { borderStyle: 'dashed', my: 8 } }), children: [_jsxs(Stack, { spacing: 3, children: [_jsxs(Stack, { spacing: 1, children: [_jsx(Typography, { variant: "h5", children: "Foundation" }), _jsx(Typography, { variant: "body2", sx: { color: 'text.secondary' }, children: "Colors, typography, shadows\u2026" })] }), _jsx(Grid, { children: foundationNav.map((item) => (_jsx(ComponentCard, { item: item }, item.name))) })] }), _jsxs(Stack, { spacing: 3, children: [_jsxs(Stack, { spacing: 1, children: [_jsx(Typography, { variant: "h5", children: "MUI" }), _jsxs(Typography, { variant: "body2", sx: { color: 'text.secondary' }, children: ["Components from", ' ', _jsx(Link, { href: "https://mui.com/components/", target: "_blank", rel: "noopener", children: "Material UI" }), "."] }), _jsx(Typography, { variant: "caption", sx: { color: 'text.secondary' }, children: _jsxs("i", { children: ["Some advanced components from MUI X will not be included. So you need to purchase a separate", _jsx(Link, { href: "https://mui.com/pricing/", target: "_blank", rel: "noopener", sx: { ml: 0.5 }, children: "license" }), "."] }) })] }), _jsx(Grid, { children: orderBy(muiNav, ['name'], ['asc']).map((item) => (_jsx(ComponentCard, { item: item }, item.name))) })] }), _jsxs(Stack, { spacing: 3, children: [_jsxs(Stack, { spacing: 1, children: [_jsx(Typography, { variant: "h5", children: "Extra Components" }), _jsx(Typography, { variant: "body2", sx: { color: 'text.secondary' }, children: "Some custom components / use 3rd party dependencies (chart, map, editor\u2026)." })] }), _jsx(Grid, { children: orderBy(extraNav, ['name'], ['asc']).map((item) => (_jsx(ComponentCard, { item: item }, item.name))) })] })] }) }) }));
}
// ----------------------------------------------------------------------
function Grid({ children }) {
    return (_jsx(Box, { rowGap: 3, display: "grid", columnGap: 2.5, gridTemplateColumns: {
            xs: 'repeat(2, 1fr)',
            sm: 'repeat(3, 1fr)',
            md: 'repeat(4, 1fr)',
            lg: 'repeat(5, 1fr)',
        }, children: children }));
}
